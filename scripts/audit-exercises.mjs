#!/usr/bin/env node
/**
 * audit-exercises.mjs
 * Auditoría completa de calidad de contenido para los ejercicios de Chispito.mx
 * Detecta: preguntas duplicadas, texto genérico de relleno, IDs duplicados,
 *          respuestas incorrectas en multiple_choice, desajuste de conteos, etc.
 *
 * Uso:  node scripts/audit-exercises.mjs
 *       node scripts/audit-exercises.mjs --html        → genera audit-report.html
 *       node scripts/audit-exercises.mjs --fix-check   → solo bloques con errores graves (exit 1 si hay errores)
 */

import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const EXERCISES_DIR = join(__dirname, '../src/data/exercises');
const REPORT_PATH   = join(__dirname, '../audit-report.html');
const ARGS          = process.argv.slice(2);
const GEN_HTML      = ARGS.includes('--html');
const FIX_CHECK     = ARGS.includes('--fix-check');

// ─── Textos genéricos de relleno detectables ────────────────────────────────
const GENERIC_PATTERNS = [
  /Conocimiento especializado/i,
  /nos ayuda a comprender el mundo con mayor profundidad/i,
  /la práctica constante nos lleva al ___/i,
  /es parte del currículo oficial de la SEP\b(?!.*\bno\b)/i,
  /Este tema está incluido en los planes y programas de estudio oficiales/i,
  /La práctica y la reflexión son claves para aprender cualquier materia/i,
  /¿Qué estudia el tema "/i,
];

// Preguntas de relleno comodín (aparecen en TODOS los grados sin relación al tema)
const FILLER_QUESTIONS = [
  '¿Qué es el bullying?',
  'Las ONG son organizaciones sin fines de lucro',
  '¿Qué son los derechos humanos?',
  'En México el voto es secreto y universal',
  'La democracia es el gobierno del ___, para el pueblo',
  '¿Cuál es una forma de participación ciudadana?',
  'El artículo 1° constitucional prohíbe toda ___',
  '¿Qué significa "sufragio efectivo"?',
];

// Severidad de errores: CRITICAL | WARN | INFO
const SEV = { CRITICAL: 'CRITICAL', WARN: 'WARN', INFO: 'INFO' };

// ─── Colectar todos los JSON ─────────────────────────────────────────────────
function collectJsonFiles(dir) {
  const files = [];
  function walk(d) {
    for (const entry of readdirSync(d)) {
      const full = join(d, entry);
      if (statSync(full).isDirectory()) { walk(full); continue; }
      if (entry.endsWith('.json') && !entry.endsWith('indice.json')) files.push(full);
    }
  }
  walk(dir);
  return files.sort();
}

// ─── Auditar un archivo ──────────────────────────────────────────────────────
function auditFile(filePath) {
  const relPath = relative(EXERCISES_DIR, filePath);
  const issues  = [];

  let data;
  try {
    data = JSON.parse(readFileSync(filePath, 'utf-8'));
  } catch (e) {
    return { relPath, issues: [{ sev: SEV.CRITICAL, msg: `JSON inválido: ${e.message}` }], data: null };
  }

  const ejercicios = data.ejercicios || {};
  // Preview es un subconjunto de v1/v2, excluirlo evita falsos positivos de IDs/preguntas duplicadas
  const nivelesAudit = ['v1', 'v2'];
  const allExs = [];
  for (const niv of nivelesAudit) {
    const list = ejercicios[niv] || [];
    list.forEach(ex => allExs.push({ ...ex, _nivel: niv }));
  }
  // Para resto de checks incluimos preview pero no en duplicados
  const allExsConPreview = [...allExs, ...(ejercicios.preview || []).map(ex => ({ ...ex, _nivel: 'preview' }))];

  // ── 1. IDs duplicados (solo v1 y v2, preview es copia intencional) ──────
  const idMap = {};
  for (const ex of allExs) {
    if (!ex.id) {
      issues.push({ sev: SEV.CRITICAL, msg: `Ejercicio sin ID en nivel ${ex._nivel}` });
      continue;
    }
    if (idMap[ex.id]) {
      issues.push({ sev: SEV.WARN, msg: `ID duplicado (dentro de v1/v2): "${ex.id}" (en ${idMap[ex.id]} y ${ex._nivel})` });
    } else {
      idMap[ex.id] = ex._nivel;
    }
  }

  // ── 2. Preguntas duplicadas (solo v1 y v2) ──────────────────────────────
  const preguntaMap = {};
  for (const ex of allExs) {
    if (!ex.pregunta) continue;
    const key = ex.pregunta.trim().toLowerCase();
    if (preguntaMap[key]) {
      issues.push({ sev: SEV.CRITICAL, msg: `Pregunta DUPLICADA: "${ex.pregunta.slice(0, 80)}" (ids: ${preguntaMap[key]}, ${ex.id})` });
    } else {
      preguntaMap[key] = ex.id || '?';
    }
  }

  // ── 3. Texto genérico de relleno ────────────────────────────────────────
  for (const ex of allExs) {
    const texto = `${ex.pregunta || ''} ${ex.explicacion || ''}`;
    for (const pat of GENERIC_PATTERNS) {
      if (pat.test(texto)) {
        issues.push({ sev: SEV.CRITICAL, msg: `Texto genérico de relleno (${ex.id || '?'}): "${ex.pregunta?.slice(0, 70)}"` });
        break;
      }
    }
  }

  // ── 4. Preguntas comodín off-topic ──────────────────────────────────────
  for (const ex of allExs) {
    for (const filler of FILLER_QUESTIONS) {
      if (ex.pregunta?.toLowerCase().includes(filler.toLowerCase())) {
        // Solo es problema si el tema del bloque no está relacionado
        const temas = (data.temas || []).join(' ').toLowerCase();
        const bloqueNombre = (data.nombre || '').toLowerCase();
        const fillerLow = filler.toLowerCase();
        // Bullying off-topic = aparece en bloques no relacionados a paz/convivencia
        const isContextual =
          temas.includes('bulling') || temas.includes('bullying') ||
          temas.includes('paz') || temas.includes('violencia') ||
          temas.includes('ong') || temas.includes('derechos') ||
          temas.includes('ciudadan') ||
          bloqueNombre.includes('paz') || bloqueNombre.includes('ciudadan') ||
          bloqueNombre.includes('derech');
        if (!isContextual) {
          issues.push({ sev: SEV.WARN, msg: `Pregunta comodín off-topic (${ex.id || '?'}): "${filler}"` });
        }
        break;
      }
    }
  }

  // ── 5. multiple_choice sin opciones o con respuesta que no está en opciones
  for (const ex of allExs) {
    if (ex.tipo === 'multiple_choice') {
      if (!ex.opciones || ex.opciones.length < 2) {
        issues.push({ sev: SEV.CRITICAL, msg: `multiple_choice sin opciones suficientes: ${ex.id}` });
        continue;
      }
      if (ex.respuestaCorrecta && !ex.opciones.includes(ex.respuestaCorrecta)) {
        issues.push({ sev: SEV.CRITICAL, msg: `Respuesta correcta NO está entre las opciones → "${ex.respuestaCorrecta}" | opciones: [${ex.opciones.join(', ')}] (${ex.id})` });
      }
    }
  }

  // ── 6. true_false con respuesta que no es "true" o "false"
  for (const ex of allExs) {
    if (ex.tipo === 'true_false') {
      if (!['true', 'false'].includes(String(ex.respuestaCorrecta).toLowerCase())) {
        issues.push({ sev: SEV.CRITICAL, msg: `true_false con respuesta inválida "${ex.respuestaCorrecta}": ${ex.id}` });
      }
    }
  }

  // ── 7. fill_blank: respuesta de una sola palabra genérica ──────────────
  const genericAnswers = ['aprendizaje', 'conocimiento', 'estudio', 'materia', 'escuela'];
  for (const ex of allExs) {
    if (ex.tipo === 'fill_blank' && ex.respuestaCorrecta) {
      const ans = ex.respuestaCorrecta.trim().toLowerCase();
      if (genericAnswers.includes(ans) && GENERIC_PATTERNS.some(p => p.test(ex.pregunta || ''))) {
        issues.push({ sev: SEV.CRITICAL, msg: `fill_blank con respuesta genérica "${ex.respuestaCorrecta}" en pregunta de relleno: ${ex.id}` });
      }
    }
  }

  // ── 8. Nivel v1 o v2 vacíos ─────────────────────────────────────────────
  if (!ejercicios.v1 || ejercicios.v1.length === 0) {
    issues.push({ sev: SEV.CRITICAL, msg: 'nivel v1 está vacío' });
  }
  if (!ejercicios.v2 || ejercicios.v2.length === 0) {
    issues.push({ sev: SEV.CRITICAL, msg: 'nivel v2 está vacío' });
  }

  // ── 9. Conteo declarado vs real ─────────────────────────────────────────
  const v1Count      = (ejercicios.v1 || []).length;
  const v2Count      = (ejercicios.v2 || []).length;
  const actualTotal  = v1Count + v2Count;
  const expectedTotal = data.totalEjercicios || 0;
  if (expectedTotal > 0 && actualTotal !== expectedTotal) {
    issues.push({ sev: SEV.WARN, msg: `totalEjercicios declara ${expectedTotal} pero hay ${actualTotal} (v1:${v1Count} + v2:${v2Count})` });
  }

  // ── 10. Preview debe tener exactamente 3 ejercicios ────────────────────
  const previewCount = (ejercicios.preview || []).length;
  if (previewCount === 0) {
    issues.push({ sev: SEV.WARN, msg: 'preview está vacío' });
  } else if (previewCount !== 3) {
    issues.push({ sev: SEV.INFO, msg: `preview tiene ${previewCount} ejercicios (esperados 3)` });
  }

  // ── 11. Diversidad de tipos de pregunta ────────────────────────────────
  const tiposV1 = new Set((ejercicios.v1 || []).map(e => e.tipo));
  const tiposV2 = new Set((ejercicios.v2 || []).map(e => e.tipo));
  if (tiposV1.size < 2 && (ejercicios.v1 || []).length >= 3) {
    issues.push({ sev: SEV.INFO, msg: `v1 usa solo ${tiposV1.size} tipo(s) de pregunta: [${[...tiposV1].join(', ')}]` });
  }
  if (tiposV2.size < 2 && (ejercicios.v2 || []).length >= 3) {
    issues.push({ sev: SEV.INFO, msg: `v2 usa solo ${tiposV2.size} tipo(s) de pregunta: [${[...tiposV2].join(', ')}]` });
  }

  // ── 12. Ejercicios sin explicación ─────────────────────────────────────
  const sinExplicacion = allExs.filter(e => !e.explicacion || e.explicacion.trim().length < 5);
  if (sinExplicacion.length > 0) {
    issues.push({ sev: SEV.INFO, msg: `${sinExplicacion.length} ejercicio(s) sin explicación: ${sinExplicacion.map(e => e.id).join(', ').slice(0, 100)}` });
  }

  return { relPath, issues, data };
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
const files   = collectJsonFiles(EXERCISES_DIR);
const results = files.map(auditFile);

const criticalCount = results.reduce((s, r) => s + r.issues.filter(i => i.sev === SEV.CRITICAL).length, 0);
const warnCount     = results.reduce((s, r) => s + r.issues.filter(i => i.sev === SEV.WARN).length,     0);
const infoCount     = results.reduce((s, r) => s + r.issues.filter(i => i.sev === SEV.INFO).length,     0);
const filesWithErrors = results.filter(r => r.issues.some(i => i.sev !== SEV.INFO));

// ─── CONSOLA ─────────────────────────────────────────────────────────────────
const RED    = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const GREEN  = '\x1b[32m';
const BOLD   = '\x1b[1m';
const RESET  = '\x1b[0m';

console.log(`\n${BOLD}════════════════════════════════════════════════════════`);
console.log(`  CHISPITO.MX — AUDITORÍA DE EJERCICIOS`);
console.log(`  ${files.length} archivos analizados | ${new Date().toLocaleString('es-MX')}`);
console.log(`════════════════════════════════════════════════════════${RESET}\n`);

for (const { relPath, issues } of results) {
  const criticals = issues.filter(i => i.sev === SEV.CRITICAL);
  const warns     = issues.filter(i => i.sev === SEV.WARN);
  const infos     = issues.filter(i => i.sev === SEV.INFO);

  if (issues.length === 0) {
    console.log(`${GREEN}✓${RESET}  ${relPath}`);
    continue;
  }

  const label = criticals.length > 0 ? `${RED}✗ CRÍTICO${RESET}` :
                warns.length > 0     ? `${YELLOW}⚠ AVISO${RESET}` :
                                       `${CYAN}ℹ INFO${RESET}`;
  console.log(`\n${label}  ${BOLD}${relPath}${RESET}`);

  for (const iss of criticals) console.log(`   ${RED}[CRÍTICO]${RESET} ${iss.msg}`);
  for (const iss of warns)     console.log(`   ${YELLOW}[AVISO]${RESET}   ${iss.msg}`);
  for (const iss of infos)     console.log(`   ${CYAN}[INFO]${RESET}    ${iss.msg}`);
}

console.log(`\n${BOLD}──────────────────────────────────────────────────────`);
console.log(`  RESUMEN: ${files.length} archivos`);
console.log(`  ${RED}CRÍTICOS: ${criticalCount}${RESET}  ${YELLOW}AVISOS: ${warnCount}${RESET}  ${CYAN}INFO: ${infoCount}${RESET}`);
console.log(`  Archivos con problemas: ${filesWithErrors.length} / ${files.length}`);
console.log(`──────────────────────────────────────────────────────${RESET}\n`);

// ─── HTML REPORT ─────────────────────────────────────────────────────────────
if (GEN_HTML) {
  const rowsHtml = results.map(({ relPath, issues }) => {
    if (issues.length === 0) {
      return `<tr class="ok"><td>${relPath}</td><td colspan="2"><span class="badge ok">✓ OK</span></td></tr>`;
    }
    const rows = issues.map(iss => {
      const cls = iss.sev === SEV.CRITICAL ? 'critical' : iss.sev === SEV.WARN ? 'warn' : 'info';
      const label = iss.sev === SEV.CRITICAL ? '🔴 CRÍTICO' : iss.sev === SEV.WARN ? '🟡 AVISO' : '🔵 INFO';
      return `<tr class="${cls}"><td>${relPath}</td><td><span class="badge ${cls}">${label}</span></td><td>${iss.msg}</td></tr>`;
    }).join('');
    return rows;
  }).join('');

  const statsHtml = `
    <div class="stats">
      <div class="stat critical"><div class="num">${criticalCount}</div><div>Críticos</div></div>
      <div class="stat warn"><div class="num">${warnCount}</div><div>Avisos</div></div>
      <div class="stat info"><div class="num">${infoCount}</div><div>Info</div></div>
      <div class="stat ok"><div class="num">${files.length - filesWithErrors.length}</div><div>OK</div></div>
    </div>`;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Auditoría Chispito.mx — ${new Date().toLocaleDateString('es-MX')}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, 'Segoe UI', sans-serif; background: #0f172a; color: #e2e8f0; padding: 2rem; }
    h1 { font-size: 1.5rem; margin-bottom: 0.25rem; color: #f8fafc; }
    .sub { color: #94a3b8; font-size: 0.875rem; margin-bottom: 1.5rem; }
    .stats { display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .stat { background: #1e293b; border-radius: 0.75rem; padding: 1rem 1.5rem; text-align: center; min-width: 100px; }
    .stat .num { font-size: 2rem; font-weight: 700; }
    .stat.critical .num { color: #f87171; }
    .stat.warn .num { color: #fbbf24; }
    .stat.info .num { color: #60a5fa; }
    .stat.ok .num { color: #34d399; }
    .filters { margin-bottom: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap; }
    .filters button { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.5rem; padding: 0.4rem 0.9rem; cursor: pointer; font-size: 0.8rem; }
    .filters button.active { background: #3b82f6; border-color: #3b82f6; }
    #search { background: #1e293b; color: #e2e8f0; border: 1px solid #334155; border-radius: 0.5rem; padding: 0.4rem 0.9rem; font-size: 0.875rem; width: 300px; }
    table { width: 100%; border-collapse: collapse; font-size: 0.8rem; }
    thead th { background: #1e293b; padding: 0.6rem 0.75rem; text-align: left; color: #94a3b8; position: sticky; top: 0; }
    tbody tr { border-bottom: 1px solid #1e293b; }
    tbody tr:hover { background: #1e293b55; }
    tbody td { padding: 0.5rem 0.75rem; vertical-align: top; word-break: break-word; }
    tbody td:first-child { font-family: monospace; color: #7dd3fc; font-size: 0.75rem; white-space: nowrap; }
    .badge { display: inline-block; padding: 0.15rem 0.5rem; border-radius: 999px; font-size: 0.7rem; font-weight: 600; white-space: nowrap; }
    .badge.critical { background: #7f1d1d; color: #fca5a5; }
    .badge.warn { background: #78350f; color: #fde68a; }
    .badge.info { background: #1e3a5f; color: #93c5fd; }
    .badge.ok { background: #14532d; color: #86efac; }
    tr.ok { opacity: 0.4; }
    tr.hidden { display: none; }
  </style>
</head>
<body>
  <h1>🔍 Auditoría de Ejercicios — Chispito.mx</h1>
  <p class="sub">Generado: ${new Date().toLocaleString('es-MX')} · ${files.length} archivos analizados</p>
  ${statsHtml}
  <div class="filters">
    <input id="search" type="text" placeholder="Buscar archivo o mensaje..." oninput="filterRows()">
    <button class="active" onclick="toggleFilter(this,'all')">Todos</button>
    <button onclick="toggleFilter(this,'critical')">🔴 Solo críticos</button>
    <button onclick="toggleFilter(this,'warn')">🟡 Solo avisos</button>
    <button onclick="toggleFilter(this,'info')">🔵 Solo info</button>
    <button onclick="toggleFilter(this,'ok')">✓ Solo OK</button>
  </div>
  <table id="auditTable">
    <thead><tr><th style="width:30%">Archivo</th><th style="width:12%">Severidad</th><th>Problema</th></tr></thead>
    <tbody>${rowsHtml}</tbody>
  </table>
  <script>
    let activeFilter = 'all';
    function toggleFilter(btn, f) {
      activeFilter = f;
      document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterRows();
    }
    function filterRows() {
      const q = document.getElementById('search').value.toLowerCase();
      document.querySelectorAll('#auditTable tbody tr').forEach(row => {
        const text = row.textContent.toLowerCase();
        const matchSearch = !q || text.includes(q);
        const cls = [...row.classList];
        const matchFilter = activeFilter === 'all' || cls.includes(activeFilter);
        row.classList.toggle('hidden', !(matchSearch && matchFilter));
      });
    }
  </script>
</body>
</html>`;

  writeFileSync(REPORT_PATH, html, 'utf-8');
  console.log(`📄 Reporte HTML generado en: ${REPORT_PATH}\n`);
}

// ─── Exit code para CI/CD ────────────────────────────────────────────────────
if (FIX_CHECK && criticalCount > 0) {
  console.error(`❌ Hay ${criticalCount} errores críticos. Corrige antes de hacer deploy.\n`);
  process.exit(1);
}
