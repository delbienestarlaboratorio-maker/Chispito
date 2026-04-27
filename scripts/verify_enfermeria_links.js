const http = require('http');

const MATERIAS = {
    "anatomia": 14,
    "farmacologia": 10,
    "microbiologia": 8,
    "bioquimica": 7,
    "fundamentos": 15,
    "pae": 10,
    "quirurgica": 16,
    "materno": 12,
    "uci": 12,
    "gestion": 6
};

async function testUrl(url) {
    return new Promise((resolve) => {
        http.get(`http://localhost:3456${url}`, (res) => {
            resolve({ url, status: res.statusCode });
        }).on('error', (err) => {
            resolve({ url, status: 'ERROR' });
        });
    });
}

async function verifyAll() {
    console.log("Iniciando auditoría de 110 módulos...\n");
    let fallos = 0;
    let exitos = 0;

    for (const [materia, bloques] of Object.entries(MATERIAS)) {
        // También probamos el Hub de la materia
        const hubRes = await testUrl(`/enfermeria/${materia}`);
        if (hubRes.status !== 200) {
            console.log(`[!] FALLO HUB MATERIA: ${materia} -> Status ${hubRes.status}`);
            fallos++;
        }

        // Probamos los N bloques de la materia
        for (let b = 1; b <= bloques; b++) {
            const url = `/enfermeria/${materia}/bloque-${b}`;
            const res = await testUrl(url);
            
            if (res.status !== 200) {
                console.log(`[!] FALLO MODULO: ${url} -> Status ${res.status}`);
                fallos++;
            } else {
                exitos++;
            }
        }
    }

    console.log(`\nAuditoría Completada.`);
    console.log(`Total rutas comprobadas (Bloques): ${exitos + fallos}`);
    console.log(`Exitosas (200 OK): ${exitos}`);
    console.log(`Fallidas (Ej. 404): ${fallos}`);
}

verifyAll();
