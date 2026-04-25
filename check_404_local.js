const fs = require('fs');
const http = require('http');

let urls;
try {
    urls = fs.readFileSync('../urls_indexar.txt', 'utf8').split('\n').map(l => l.trim()).filter(Boolean);
} catch (e) {
    console.error("No se pudo leer ../urls_indexar.txt:", e.message);
    process.exit(1);
}

const checkUrl = (url) => new Promise((resolve) => {
    // Reemplazar chispito.mx por localhost:5001
    const localUrl = url.replace('https://chispito.mx', 'http://localhost:5001');
    
    try {
        const parsed = new URL(localUrl);
        const options = {
            hostname: 'localhost',
            port: 5001,
            path: parsed.pathname + parsed.search,
            method: 'HEAD',
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
        };
        const req = http.request(options, (res) => {
            resolve({ url: localUrl, status: res.statusCode });
        });
        req.on('error', (err) => {
            resolve({ url: localUrl, status: err.message });
        });
        req.end();
    } catch(e) { resolve({ url: localUrl, status: e.message }); }
});

async function main() {
    console.log("Verificando " + urls.length + " URLs en localhost:5001...");
    let errors = [];
    let count = 0;
    
    for (let i = 0; i < urls.length; i += 20) {
        const batch = urls.slice(i, i + 20);
        const results = await Promise.all(batch.map(checkUrl));
        for (const res of results) {
            if (res.status === 404) {
                errors.push(res.url);
            }
        }
        count += batch.length;
        if (count % 100 === 0) console.log("Revisados " + count);
    }
    
    console.log("\n--- ENLACES CON ERROR 404 EN LOCAL ---");
    if (errors.length > 0) {
        errors.forEach(e => console.log(e));
        console.log("\nTotal de 404s:", errors.length);
    } else {
        console.log("¡Ningún enlace arrojó 404!");
    }
}
main();
