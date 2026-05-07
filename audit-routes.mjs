/**
 * Comprehensive route auditor for Chispito.mx
 * Extracts ALL possible routes from the codebase and tests them against production.
 */
import fs from 'fs';
import path from 'path';

const BASE = "https://834269ff.chispito-mx.pages.dev";
const TIMEOUT = 12000;

// ═══════════════════════════════════════════════════════════════
// 1. STATIC PAGES (app directory pages without dynamic segments)
// ═══════════════════════════════════════════════════════════════
const STATIC_ROUTES = [
    "/",
    "/prepa",
    "/profesores",
    "/planes",
    "/login",
    "/pago-exitoso",
    "/pago-error",
    "/blog",
    "/universo",
];

// ═══════════════════════════════════════════════════════════════
// 2. GRADOS (from curriculum.ts — parse slugs)
// ═══════════════════════════════════════════════════════════════
const GRADO_SLUGS = [
    "kinder", "preescolar-1", "preescolar-2", "preescolar-3",
    "primaria-1", "primaria-2", "primaria-3", "primaria-4", "primaria-5", "primaria-6",
    "secundaria-1", "secundaria-2", "secundaria-3",
    "telesecundaria-1", "telesecundaria-2", "telesecundaria-3",
    "bachillerato-1", "bachillerato-2", "bachillerato-3",
    "bachillerato-4", "bachillerato-5", "bachillerato-6",
];

// Carreras universitarias
const CARRERA_SLUGS = ["enfermeria"];

// ═══════════════════════════════════════════════════════════════
// 3. MATERIAS (from curriculum.ts)
// ═══════════════════════════════════════════════════════════════
const MATERIA_IDS = [
    "chispito_plus", "matematicas", "espanol", "historia", "ciencias",
    "geografia", "civica", "lenguas", "artes", "ingles", "tecnologia",
    "filosofia", "educacion_fisica", "orientacion", "conocimiento",
    "lenguaje", "formacion_civica",
];

// ═══════════════════════════════════════════════════════════════
// 4. GRADO/MATERIA combos (from content-index)
// ═══════════════════════════════════════════════════════════════
const GRADO_MATERIAS = {
    "kinder": ["matematicas", "espanol", "conocimiento"],
    "preescolar-1": ["artes", "conocimiento", "educacion_fisica", "espanol", "matematicas", "lenguaje"],
    "primaria-1": ["matematicas", "espanol", "ciencias", "historia", "chispito_plus"],
    "primaria-2": ["matematicas", "espanol", "ciencias", "historia", "chispito_plus"],
    "primaria-3": ["matematicas", "espanol", "ciencias", "historia"],
    "primaria-4": ["matematicas", "espanol", "ciencias", "historia"],
    "primaria-5": ["matematicas", "espanol", "ciencias", "historia"],
    "primaria-6": ["matematicas", "espanol", "ciencias", "historia"],
    "secundaria-1": ["matematicas", "espanol", "ciencias", "historia"],
    "secundaria-2": ["matematicas", "espanol", "ciencias", "historia"],
    "secundaria-3": ["matematicas", "espanol", "ciencias", "historia"],
    "telesecundaria-1": ["matematicas", "espanol", "ciencias"],
    "telesecundaria-2": ["matematicas", "espanol", "ciencias"],
    "telesecundaria-3": ["matematicas", "espanol", "ciencias"],
    "bachillerato-1": ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"],
    "bachillerato-2": ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"],
    "bachillerato-3": ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"],
};

// ═══════════════════════════════════════════════════════════════
// 5. BLOQUES (1-5 for each grado/materia combo)
// ═══════════════════════════════════════════════════════════════
const BLOQUES_RANGE = [1, 2, 3, 4, 5];

// ═══════════════════════════════════════════════════════════════
// 6. CUADERNILLOS & GUIA MENSUAL routes
// ═══════════════════════════════════════════════════════════════
const CUADERNILLOS_GRADOS = GRADO_SLUGS;
const GUIA_MENSUAL_GRADOS = GRADO_SLUGS;

// ═══════════════════════════════════════════════════════════════
// 7. MAESTROS routes
// ═══════════════════════════════════════════════════════════════
const MAESTROS_ROUTES = ["/maestros", ...GRADO_SLUGS.map(g => `/maestros/${g}`)];

// ═══════════════════════════════════════════════════════════════
// 8. LENGUAS INDIGENAS sub-routes
// ═══════════════════════════════════════════════════════════════
const LENGUAS = [
    "nahuatl", "maya", "zapoteco", "mixteco", "otomi", "totonaco",
    "mazahua", "mazateco", "huichol", "tzeltal", "tzotzil",
    "purepecha", "chinanteco", "amuzgo", "huasteco", "mayo", "raramuri",
];

// Build all routes
const allRoutes = [];

// Static
allRoutes.push(...STATIC_ROUTES);

// /materias/[materia]
MATERIA_IDS.forEach(m => allRoutes.push(`/materias/${m}`));

// /[grado]
GRADO_SLUGS.forEach(g => allRoutes.push(`/${g}`));
CARRERA_SLUGS.forEach(c => allRoutes.push(`/${c}`));

// /[grado]/[materia]
for (const [grado, materias] of Object.entries(GRADO_MATERIAS)) {
    materias.forEach(m => allRoutes.push(`/${grado}/${m}`));
}

// /[grado]/[materia]/bloque-[n] (sample: first and last bloque for each)
for (const [grado, materias] of Object.entries(GRADO_MATERIAS)) {
    materias.forEach(m => {
        allRoutes.push(`/${grado}/${m}/bloque-1`);
        allRoutes.push(`/${grado}/${m}/bloque-5`);
    });
}

// /cuadernillos/[grado]
CUADERNILLOS_GRADOS.forEach(g => allRoutes.push(`/cuadernillos/${g}`));
allRoutes.push("/cuadernillos/primaria-1"); // explicit static page

// /guia-mensual/[grado]
GUIA_MENSUAL_GRADOS.forEach(g => allRoutes.push(`/guia-mensual/${g}`));

// /maestros/[grado]
allRoutes.push(...MAESTROS_ROUTES);

// Lenguas: /primaria-1/lenguas-[lang]/bloque-1
LENGUAS.forEach(l => allRoutes.push(`/primaria-1/lenguas-${l}/bloque-1`));

// Enfermería sub-routes
const ENF_MATERIAS = ["enfermeria_basica", "anatomia", "farmacologia", "pediatria", "salud_publica", "bioetica"];
ENF_MATERIAS.forEach(m => allRoutes.push(`/enfermeria/${m}`));

// Deduplicate
const uniqueRoutes = [...new Set(allRoutes)];
console.log(`Total routes to test: ${uniqueRoutes.length}\n`);

// ═══════════════════════════════════════════════════════════════
// TEST FUNCTION
// ═══════════════════════════════════════════════════════════════
async function testUrl(url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT);
    try {
        const res = await fetch(url, { method: 'HEAD', signal: controller.signal, redirect: 'follow' });
        clearTimeout(timeout);
        return res.status;
    } catch (e) {
        clearTimeout(timeout);
        return e.name === 'AbortError' ? 'TIMEOUT' : 'ERR';
    }
}

// Run in batches of 2 to avoid Cloudflare Workers 503 limits
const results = { ok: [], fail: [], timeout: [] };
const BATCH = 2;

for (let i = 0; i < uniqueRoutes.length; i += BATCH) {
    const batch = uniqueRoutes.slice(i, i + BATCH);
    const promises = batch.map(async (route) => {
        const status = await testUrl(`${BASE}${route}`);
        if (status === 200 || status === 308 || status === 307) {
            results.ok.push(route);
        } else {
            results.fail.push({ route, status });
            process.stdout.write(`❌ ${status} ${route}\n`);
        }
    });
    await Promise.all(promises);
    process.stdout.write(`  Tested ${Math.min(i + BATCH, uniqueRoutes.length)}/${uniqueRoutes.length}\r`);
    // sleep to prevent 503s
    await new Promise(r => setTimeout(r, 1000));
}

console.log(`\n\n══════════════════════════════════════`);
console.log(`✅ OK (200): ${results.ok.length}`);
console.log(`❌ FAIL: ${results.fail.length}`);
console.log(`══════════════════════════════════════\n`);

if (results.fail.length > 0) {
    console.log("FAILED ROUTES:");
    results.fail.forEach(f => console.log(`  ${f.status}  ${f.route}`));
}
