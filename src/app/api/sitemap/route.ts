import { NextResponse } from 'next/server';

const SITE_URL = 'https://chispito.mx';

const GRADOS_SLUGS = [
    'preescolar-1', 'preescolar-2', 'kinder', 'preescolar-3',
    'primaria-1', 'primaria-2', 'primaria-3', 'primaria-4', 'primaria-5', 'primaria-6',
    'secundaria-1', 'secundaria-2', 'secundaria-3',
];

const MATERIAS_POR_GRADO: Record<string, string[]> = {
    'preescolar-1': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'preescolar-2': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'kinder': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'preescolar-3': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'primaria-1': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'primaria-2': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'primaria-3': ['matematicas', 'espanol', 'ciencias', 'historia', 'formacion', 'artes'],
    'primaria-4': ['matematicas', 'espanol', 'ciencias', 'historia', 'geografia', 'formacion', 'artes'],
    'primaria-5': ['matematicas', 'espanol', 'ciencias', 'historia', 'geografia', 'formacion', 'artes'],
    'primaria-6': ['matematicas', 'espanol', 'ciencias', 'historia', 'geografia', 'formacion', 'artes'],
    'secundaria-1': ['matematicas', 'espanol', 'historia', 'ciencias', 'geografia', 'formacion', 'ingles', 'tecnologia', 'artes', 'educacion_fisica'],
    'secundaria-2': ['matematicas', 'espanol', 'historia', 'ciencias', 'geografia', 'formacion', 'ingles', 'tecnologia', 'artes', 'educacion_fisica'],
    'secundaria-3': ['matematicas', 'espanol', 'historia', 'ciencias', 'geografia', 'formacion', 'ingles', 'tecnologia', 'artes', 'educacion_fisica'],
};

export async function GET() {
    const today = new Date().toISOString().split('T')[0];
    const urls: { loc: string; priority: string; changefreq: string }[] = [];

    // 1. Rutas estáticas
    const staticPages = ['', '/planes', '/cuadernillos', '/universo', '/blog', '/maestros', '/privacidad', '/terminos'];
    const blogSlugs = [
        'como-ayudar-hijo-examenes-sep',
        'nueva-escuela-mexicana-2026-cambios',
        'importancia-aprender-jugando-primaria',
        '5-errores-comunes-tareas-primaria',
        'como-usar-libros-conaliteg-en-casa',
    ];
    for (const page of staticPages) {
        urls.push({ loc: `${SITE_URL}${page}`, priority: page === '' ? '1.0' : '0.8', changefreq: 'weekly' });
    }
    for (const slug of blogSlugs) {
        urls.push({ loc: `${SITE_URL}/blog/${slug}`, priority: '0.7', changefreq: 'monthly' });
    }

    // 2. Rutas de grados
    for (const slug of GRADOS_SLUGS) {
        urls.push({ loc: `${SITE_URL}/${slug}`, priority: '0.9', changefreq: 'weekly' });
    }

    // 3. Rutas de materias y bloques
    for (const [grado, materias] of Object.entries(MATERIAS_POR_GRADO)) {
        for (const materia of materias) {
            urls.push({ loc: `${SITE_URL}/${grado}/${materia}`, priority: '0.8', changefreq: 'weekly' });
            for (let b = 1; b <= 5; b++) {
                urls.push({ loc: `${SITE_URL}/${grado}/${materia}/bloque-${b}`, priority: '0.7', changefreq: 'monthly' });
            }
        }
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new NextResponse(xml, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
