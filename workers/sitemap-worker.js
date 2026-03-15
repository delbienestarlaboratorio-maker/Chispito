const SITE_URL = 'https://chispito.mx';

const GRADOS_SLUGS = [
    'preescolar-1', 'preescolar-2', 'kinder', 'preescolar-3',
    'primaria-1', 'primaria-2', 'primaria-3', 'primaria-4', 'primaria-5', 'primaria-6',
    'secundaria-1', 'secundaria-2', 'secundaria-3',
    'telesecundaria-1', 'telesecundaria-2', 'telesecundaria-3',
];

const MATERIAS = {
    'preescolar-1': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'preescolar-2': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes'],
    'kinder': ['matematicas', 'espanol', 'conocimiento', 'educacion_fisica', 'artes', 'multiples_lenguajes'],
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
    'telesecundaria-1': ['lenguajes_nem', 'saberes_cientificos', 'etica_naturaleza', 'humano_comunitario', 'multiples_lenguajes', 'proyectos_nem', 'ingles'],
    'telesecundaria-2': ['lenguajes_nem', 'saberes_cientificos', 'etica_naturaleza', 'humano_comunitario', 'multiples_lenguajes', 'proyectos_nem', 'ingles'],
    'telesecundaria-3': ['lenguajes_nem', 'saberes_cientificos', 'etica_naturaleza', 'humano_comunitario', 'multiples_lenguajes', 'proyectos_nem', 'ingles'],
};

export default {
    async fetch(request) {
        const today = new Date().toISOString().split('T')[0];
        const urls = [];

        // Páginas estáticas
        ['', '/planes', '/cuadernillos', '/universo', '/blog', '/maestros', '/privacidad', '/terminos'].forEach(p => {
            urls.push({ loc: `${SITE_URL}${p}`, priority: p === '' ? '1.0' : '0.8', freq: 'weekly' });
        });

        // Grados
        GRADOS_SLUGS.forEach(s => {
            urls.push({ loc: `${SITE_URL}/${s}`, priority: '0.9', freq: 'weekly' });
        });

        // Materias y bloques
        for (const [grado, materias] of Object.entries(MATERIAS)) {
            for (const mat of materias) {
                urls.push({ loc: `${SITE_URL}/${grado}/${mat}`, priority: '0.8', freq: 'weekly' });
                for (let b = 1; b <= 5; b++) {
                    urls.push({ loc: `${SITE_URL}/${grado}/${mat}/bloque-${b}`, priority: '0.7', freq: 'monthly' });
                }
            }
        }

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

        return new Response(xml, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'public, max-age=3600, s-maxage=86400',
            },
        });
    },
};
