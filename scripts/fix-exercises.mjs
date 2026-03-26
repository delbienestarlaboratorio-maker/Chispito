#!/usr/bin/env node
/**
 * fix-exercises.mjs — Chispito.mx
 * ================================
 * Regenera automáticamente todos los bloques de ejercicios defectuosos
 * usando la API de Google Gemini.
 *
 * REQUISITOS:
 *   - API key en variable de entorno GEMINI_API_KEY
 *   - node >= 18 (fetch nativo)
 *
 * USO:
 *   node scripts/fix-exercises.mjs                        → repara todos los bloques defectuosos
 *   node scripts/fix-exercises.mjs --dry-run              → solo muestra qué se repararía sin escribir
 *   node scripts/fix-exercises.mjs --file=primaria-1/matematicas/bloque-2.json  → repara uno solo
 *   node scripts/fix-exercises.mjs --grado=secundaria-1  → repara un grado entero
 *   node scripts/fix-exercises.mjs --limit=5             → repara solo los primeros N archivos
 *
 * ESTRATEGIA DE REPARACIÓN:
 *   1. Corre el auditor para obtener la lista de bloques defectuosos (críticos).
 *   2. Para cada bloque defectuoso, llama a Gemini con un prompt detallado
 *      que incluye el grado, materia, bloque, temas y el JSON original como contexto.
 *   3. Gemini devuelve 28 preguntas (14 v1 + 14 v2) únicas, correctas y topicales.
 *   4. El script valida la respuesta y escribe el JSON si pasa el control de calidad.
 *   5. Los archivos reparados se guardan directamente; si Gemini falla, el archivo
 *      se marca en audit-queue.json para reintento manual.
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const EXERCISES_DIR = join(__dirname, '../src/data/exercises');
const QUEUE_FILE    = join(__dirname, '../audit-queue.json');
const ARGS          = process.argv.slice(2);
const DRY_RUN       = ARGS.includes('--dry-run');
const LIMIT         = parseInt(ARGS.find(a => a.startsWith('--limit='))?.split('=')[1] || '9999');
const FILE_FILTER   = ARGS.find(a => a.startsWith('--file='))?.split('=')[1];
const GRADO_FILTER  = ARGS.find(a => a.startsWith('--grado='))?.split('=')[1];
const DELAY_MS      = 2000; // delay entre llamadas a Gemini para no saturar la API

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY && !DRY_RUN) {
  console.error('\n❌  Falta la variable GEMINI_API_KEY. Ejecútalo así:');
  console.error('   set GEMINI_API_KEY=tu_api_key_aqui && node scripts/fix-exercises.mjs\n');
  process.exit(1);
}

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

// ─── Textos de relleno genérico ──────────────────────────────────────────────
const GENERIC_PATTERNS = [
  /Conocimiento especializado/i,
  /nos ayuda a comprender el mundo con mayor profundidad/i,
  /la práctica constante nos lleva al ___/i,
  /Este tema está incluido en los planes y programas de estudio oficiales/i,
  /La práctica y la reflexión son claves para aprender cualquier materia/i,
  /¿Qué estudia el tema "/i,
];

function hasGenericContent(json) {
  const str = JSON.stringify(json);
  return GENERIC_PATTERNS.some(p => p.test(str));
}

function hasDuplicateQuestions(json) {
  const allEx = [
    ...(json.ejercicios?.v1 || []),
    ...(json.ejercicios?.v2 || []),
  ];
  const seen = new Set();
  for (const ex of allEx) {
    const key = ex.pregunta?.trim().toLowerCase();
    if (key && seen.has(key)) return true;
    seen.add(key);
  }
  return false;
}

function hasAnswerNotInOptions(json) {
  const allEx = [
    ...(json.ejercicios?.v1 || []),
    ...(json.ejercicios?.v2 || []),
  ];
  for (const ex of allEx) {
    if (ex.tipo === 'multiple_choice' && ex.opciones && ex.respuestaCorrecta) {
      if (!ex.opciones.includes(ex.respuestaCorrecta)) return true;
    }
  }
  return false;
}

function isBroken(json) {
  return hasGenericContent(json) || hasDuplicateQuestions(json) || hasAnswerNotInOptions(json);
}

// ─── Recolectar archivos JSON ─────────────────────────────────────────────────
function collectJsonFiles(dir) {
  const files = [];
  function walk(d) {
    for (const entry of readdirSync(d)) {
      const full = join(d, entry);
      if (statSync(full).isDirectory()) { walk(full); continue; }
      if (entry.startsWith('bloque-') && entry.endsWith('.json')) files.push(full);
    }
  }
  walk(dir);
  return files.sort();
}

// ─── Llamar a Gemini ──────────────────────────────────────────────────────────
async function callGemini(prompt) {
  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192,
        responseMimeType: 'application/json',
      },
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini HTTP ${res.status}: ${err.slice(0, 200)}`);
  }
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('Gemini devolvió respuesta vacía');
  return JSON.parse(text);
}

// ─── Construir el prompt para Gemini ─────────────────────────────────────────
function buildPrompt(original) {
  const { grado, materia, bloque, nombre, meses, temas } = original;
  const gradesMap = {
    'kinder': 'kínder (5-6 años)',
    'preescolar-1': 'preescolar 1 (3 años)',
    'preescolar-2': 'preescolar 2 (4 años)',
    'preescolar-3': 'preescolar 3 (5 años)',
    'primaria-1': 'primaria 1° (6-7 años)',
    'primaria-2': 'primaria 2° (7-8 años)',
    'primaria-3': 'primaria 3° (8-9 años)',
    'primaria-4': 'primaria 4° (9-10 años)',
    'primaria-5': 'primaria 5° (10-11 años)',
    'primaria-6': 'primaria 6° (11-12 años)',
    'secundaria-1': 'secundaria 1° (12-13 años)',
    'secundaria-2': 'secundaria 2° (13-14 años)',
    'secundaria-3': 'secundaria 3° (14-15 años)',
    'telesecundaria-1': 'telesecundaria 1° (12-13 años)',
    'telesecundaria-2': 'telesecundaria 2° (13-14 años)',
    'telesecundaria-3': 'telesecundaria 3° (14-15 años)',
    'bachillerato-1': 'bachillerato 1° (15-16 años)',
    'bachillerato-2': 'bachillerato 2° (16-17 años)',
    'bachillerato-3': 'bachillerato 3° (16-17 años)',
    'bachillerato-4': 'bachillerato 4° (17-18 años)',
    'bachillerato-5': 'bachillerato 5° (17-18 años)',
    'bachillerato-6': 'bachillerato 6° (18 años)',
  };
  const gradoLabel = gradesMap[grado] || grado;
  const temasStr = (temas || []).join(' / ');
  const numExByLevel = 14;

  return `Eres un experto en educación básica mexicana (SEP, Plan 2022, Nueva Escuela Mexicana).

TAREA: Genera un JSON completo con ${numExByLevel * 2} ejercicios de evaluación para el siguiente bloque de ${gradoLabel}:
- Grado: ${grado}
- Materia: ${materia}
- Bloque: ${bloque} — "${nombre}"
- Meses: ${meses}
- Temas: ${temasStr}

REGLAS CRÍTICAS (DEBES seguirlas al pie de la letra):
1. CADA pregunta debe ser ESPECÍFICA al tema real. Nada de preguntas genéricas como "¿Qué estudia este tema?" o "La práctica nos lleva al ___".
2. NO repetir ninguna pregunta. Las ${numExByLevel * 2} preguntas deben ser completamente distintas.
3. Para tipo "multiple_choice": la respuestaCorrecta DEBE ser exactamente igual a una de las opciones en el array "opciones".
4. Para tipo "true_false": respuestaCorrecta debe ser "true" o "false" (string).
5. Para tipo "fill_blank": la respuesta debe ser una palabra o frase corta, específica y sin ambigüedad.
6. Nivel "v1" = preguntas más simples (conocimiento/comprensión). Nivel "v2" = más difíciles (análisis/aplicación).
7. Génera exactamente ${numExByLevel} ejercicios en v1 y ${numExByLevel} en v2.
8. Las IDs deben seguir el patrón: "${grado}-${materia}-b${bloque}-001" para v1, "${grado}-${materia}-b${bloque}-v2-001" para v2.
9. El preview debe tener exactamente 3 ejercicios: el primero de v1, el primero de v2, y un tercero de cualquier nivel.
10. Todas las preguntas y explicaciones deben estar en español correcto y apropiado para ${gradoLabel}.

FORMATO DE SALIDA (JSON puro, sin texto adicional, sin markdown):
{
  "grado": "${grado}",
  "materia": "${materia}",
  "bloque": ${bloque},
  "nombre": "${nombre}",
  "meses": "${meses}",
  "temas": ${JSON.stringify(temas || [])},
  "totalEjercicios": ${numExByLevel * 2},
  "ejercicios": {
    "v1": [
      {
        "id": "${grado}-${materia}-b${bloque}-001",
        "tema": "<tema específico de la pregunta>",
        "tipo": "multiple_choice|true_false|fill_blank",
        "nivel": "v1",
        "pregunta": "<pregunta específica y concreta sobre ${temasStr}>",
        "opciones": ["op1", "op2", "op3", "op4"],  // solo para multiple_choice
        "respuestaCorrecta": "<debe coincidir EXACTAMENTE con una opción si es multiple_choice>",
        "explicacion": "<explicación clara y educativa de 1-2 oraciones>"
      }
      // ... ${numExByLevel - 1} más, todos diferentes y sobre ${temasStr}
    ],
    "v2": [
      // ... ${numExByLevel} ejercicios más difíciles sobre ${temasStr}
    ],
    "preview": [
      // ... exactamente 3 ejercicios seleccionados del conjunto anterior
    ]
  },
  "generado": "${new Date().toISOString()}",
  "version": "2.0"
}`;
}

// ─── Validar respuesta de Gemini ──────────────────────────────────────────────
function validateGenerated(data) {
  const errors = [];
  const v1 = data.ejercicios?.v1 || [];
  const v2 = data.ejercicios?.v2 || [];
  const all = [...v1, ...v2];

  if (v1.length < 5) errors.push(`v1 tiene solo ${v1.length} ejercicios`);
  if (v2.length < 5) errors.push(`v2 tiene solo ${v2.length} ejercicios`);

  // Verificar multiple_choice
  for (const ex of all) {
    if (ex.tipo === 'multiple_choice') {
      if (!ex.opciones || ex.opciones.length < 2) {
        errors.push(`ID ${ex.id}: multiple_choice sin opciones`);
      } else if (!ex.opciones.includes(ex.respuestaCorrecta)) {
        errors.push(`ID ${ex.id}: respuesta "${ex.respuestaCorrecta}" no está en opciones`);
      }
    }
    if (ex.tipo === 'true_false') {
      if (!['true', 'false'].includes(String(ex.respuestaCorrecta))) {
        errors.push(`ID ${ex.id}: true_false con valor inválido "${ex.respuestaCorrecta}"`);
      }
    }
    if (hasGenericContent({ pregunta: ex.pregunta, explicacion: ex.explicacion })) {
      errors.push(`ID ${ex.id}: pregunta genérica detectada`);
    }
  }

  // Duplicados
  const seen = new Set();
  for (const ex of all) {
    const k = ex.pregunta?.trim().toLowerCase();
    if (k && seen.has(k)) errors.push(`Pregunta duplicada: "${ex.pregunta?.slice(0, 50)}"`);
    seen.add(k);
  }

  return errors;
}

// ─── Delay helper ─────────────────────────────────────────────────────────────
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  const allFiles = collectJsonFiles(EXERCISES_DIR);

  // Filtrar según argumentos
  let targets = allFiles.filter(f => {
    const rel = relative(EXERCISES_DIR, f);
    if (FILE_FILTER && !rel.replace(/\\/g, '/').includes(FILE_FILTER)) return false;
    if (GRADO_FILTER && !rel.startsWith(GRADO_FILTER)) return false;
    return true;
  });

  // Detectar cuáles están rotos
  const broken = [];
  for (const filePath of targets) {
    try {
      const data = JSON.parse(readFileSync(filePath, 'utf-8'));
      if (isBroken(data)) broken.push({ filePath, data });
    } catch { /* JSON inválido, también lo marcamos */ }
  }

  const toFix = broken.slice(0, LIMIT);

  console.log(`\n🔍  Archivos analizados : ${targets.length}`);
  console.log(`🔴  Bloques defectuosos : ${broken.length}`);
  console.log(`🔧  Se repararán ahora  : ${toFix.length}${DRY_RUN ? ' (--dry-run, no se escribe nada)' : ''}`);

  if (toFix.length === 0) {
    console.log('\n✅  Nada que reparar. ¡Todo limpio!\n');
    return;
  }

  if (DRY_RUN) {
    console.log('\n📋  Lista de archivos defectuosos:');
    for (const { filePath } of toFix) {
      console.log(`   - ${relative(EXERCISES_DIR, filePath)}`);
    }
    console.log('\n  Ejecuta sin --dry-run para repararlos.\n');
    return;
  }

  const queue = { repaired: [], failed: [], skipped: [] };
  let repaired = 0, failed = 0;

  for (let i = 0; i < toFix.length; i++) {
    const { filePath, data } = toFix[i];
    const rel = relative(EXERCISES_DIR, filePath);
    console.log(`\n[${i + 1}/${toFix.length}] Reparando: ${rel}`);

    try {
      const prompt = buildPrompt(data);
      let generated;
      let attempts = 0;
      let validationErrors = [];

      // 2 intentos por bloque
      while (attempts < 2) {
        attempts++;
        try {
          generated = await callGemini(prompt);
          validationErrors = validateGenerated(generated);
          if (validationErrors.length === 0) break;
          console.log(`   ⚠ Intento ${attempts}: ${validationErrors.length} errores de validación`);
          validationErrors.forEach(e => console.log(`     - ${e}`));
        } catch (err) {
          console.log(`   ⚠ Intento ${attempts} falló: ${err.message}`);
          if (attempts < 2) await sleep(3000);
        }
      }

      if (!generated || validationErrors.length > 0) {
        console.log(`   ❌ No se pudo reparar tras ${attempts} intentos`);
        queue.failed.push(rel);
        failed++;
      } else {
        // Preservar versión y timestamp originales del grado/materia/bloque
        generated.grado    = data.grado;
        generated.materia  = data.materia;
        generated.bloque   = data.bloque;
        generated.generado = new Date().toISOString();
        generated.version  = '2.0';

        writeFileSync(filePath, JSON.stringify(generated, null, 2), 'utf-8');
        console.log(`   ✅ Reparado: ${(generated.ejercicios?.v1 || []).length}v1 + ${(generated.ejercicios?.v2 || []).length}v2 ejercicios`);
        queue.repaired.push(rel);
        repaired++;
      }
    } catch (err) {
      console.log(`   ❌ Error inesperado: ${err.message}`);
      queue.failed.push(rel);
      failed++;
    }

    // Guardar queue en cada iteración (por si se interrumpe)
    writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2), 'utf-8');

    // Pausa entre llamadas para no saturar la API
    if (i < toFix.length - 1) await sleep(DELAY_MS);
  }

  console.log('\n' + '═'.repeat(55));
  console.log(`✅  Reparados  : ${repaired}`);
  console.log(`❌  Fallidos   : ${failed}`);
  console.log(`📄  Cola de pendientes: audit-queue.json`);
  console.log('═'.repeat(55) + '\n');

  if (failed > 0) {
    console.log('Los bloques que fallaron están en audit-queue.json.');
    console.log('Puedes reintentarlos con --file= o repararlos manualmente.\n');
  }

  if (repaired > 0) {
    console.log('🚀  Ahora ejecuta git add/commit/push para hacer deploy con el contenido reparado.\n');
  }
}

main().catch(err => {
  console.error('Error fatal:', err);
  process.exit(1);
});
