// Script para generar sitemap.xml estático
// Se ejecuta en CI después del build de Next.js

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://chispito.mx';

// Importar datos directamente como JSON-like
// Usamos los archivos compilados de .next o leemos directamente
// Para simplificar, hardcodeamos las rutas principales

// Grados del curriculum
const GRADOS_SLUGS = [
    'preescolar-1', 'preescolar-2', 'kinder', 'preescolar-3',
    'primaria-1', 'primaria-2', 'primaria-3', 'primaria-4', 'primaria-5', 'primaria-6',
    'secundaria-1', 'secundaria-2', 'secundaria-3',
    'telesecundaria-1', 'telesecundaria-2', 'telesecundaria-3',
];

// Materias principales
const MATERIAS_POR_GRADO = {
    'primaria-1': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'primaria-2': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'primaria-3': ['matematicas', 'espanol', 'ciencias', 'historia', 'formacion', 'artes'],
    'primaria-4': ['matematicas', 'espanol', 'ciencias', 'historia', 'geografia', 'formacion', 'artes'],
    'primaria-5': ['matematicas', 'espanol', 'ciencias', 'historia', 'geografia', 'formacion', 'artes'],
    'primaria-6': ['matematicas', 'espanol', 'ciencias', 'historia', 'geografia', 'formacion', 'artes'],
    'secundaria-1': ['matematicas', 'espanol', 'historia', 'ciencias', 'geografia', 'formacion', 'ingles', 'tecnologia', 'artes', 'educacion_fisica'],
    'secundaria-2': ['matematicas', 'espanol', 'historia', 'ciencias', 'geografia', 'formacion', 'ingles', 'tecnologia', 'artes', 'educacion_fisica'],
    'secundaria-3': ['matematicas', 'espanol', 'historia', 'ciencias', 'geografia', 'formacion', 'ingles', 'tecnologia', 'artes', 'educacion_fisica'],
    'telesecundaria-1': ['lenguajes_nem', 'saberes_cientificos', 'etica_naturaleza', 'humano_comunitario', 'multiples_lenguajes', 'proyectos_nem', 'ingles'],
    'telesecundaria-2': ['lenguajes_nem', 'saberes_cientificos', 'etica_naturaleza', 'humano_comunitario', 'multiples_lenguajes', 'proyectos_nem', 'ingles'],
    'telesecundaria-3': ['lenguajes_nem', 'saberes_cientificos', 'etica_naturaleza', 'humano_comunitario', 'multiples_lenguajes', 'proyectos_nem', 'ingles'],
};

const today = new Date().toISOString().split('T')[0];

let urls = [];

// 1. Rutas estáticas principales
const staticPages = ['', '/planes', '/cuadernillos', '/universo', '/blog', '/maestros', '/privacidad', '/terminos'];
for (const page of staticPages) {
    urls.push({ loc: `${SITE_URL}${page}`, priority: page === '' ? '1.0' : '0.8', changefreq: 'weekly' });
}

// 2. Rutas de grados
for (const slug of GRADOS_SLUGS) {
    urls.push({ loc: `${SITE_URL}/${slug}`, priority: '0.9', changefreq: 'weekly' });
}

// 3. Rutas de materias por grado
for (const [grado, materias] of Object.entries(MATERIAS_POR_GRADO)) {
    for (const materia of materias) {
        urls.push({ loc: `${SITE_URL}/${grado}/${materia}`, priority: '0.8', changefreq: 'weekly' });
        // Bloques 1-5
        for (let b = 1; b <= 5; b++) {
            urls.push({ loc: `${SITE_URL}/${grado}/${materia}/bloque-${b}`, priority: '0.7', changefreq: 'monthly' });
        }
    }
}

// 4. Rutas extra (kinder, preescolar)
for (const grado of ['preescolar-1', 'preescolar-2', 'kinder', 'preescolar-3']) {
    for (const materia of ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes']) {
        urls.push({ loc: `${SITE_URL}/${grado}/${materia}`, priority: '0.8', changefreq: 'weekly' });
    }
}

// Generar XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const outputDir = process.env.SITEMAP_OUTPUT || join(__dirname, '..', 'public');
const outputPath = join(outputDir, 'sitemap.xml');
writeFileSync(outputPath, xml, 'utf-8');
console.log(`✅ Sitemap generado: ${urls.length} URLs → ${outputPath}`);
