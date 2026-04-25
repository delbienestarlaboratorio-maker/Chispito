const fs = require('fs');
const https = require('https');
const urls = fs.readFileSync('../urls_indexar.txt', 'utf8').split('\n').map(l => l.trim()).filter(Boolean);

const checkUrl = (url) => new Promise((resolve) => {
    try {
        const parsed = new URL(url);
        const options = {
            hostname: parsed.hostname,
            path: parsed.pathname + parsed.search,
            method: 'HEAD',
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
        };
        const req = https.request(options, (res) => {
            resolve({ url, status: res.statusCode });
        });
        req.on('error', (err) => {
            resolve({ url, status: err.message });
        });
        req.end();
    } catch(e) { resolve({ url, status: e.message }); }
});

async function main() {
    console.log("Verificando " + urls.length + " URLs publicadas en Chispito.mx...");
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
    
    console.log("\n--- ENLACES CON ERROR 404 ---");
    if (errors.length > 0) {
        errors.forEach(e => console.log(e));
        fs.writeFileSync('404_errors_chispito.txt', errors.join('\n'));
        console.log("\nSe guardaron " + errors.length + " errores 404 en 404_errors_chispito.txt");
    } else {
        console.log("¡Ningún enlace arrojó 404!");
    }
}
main();
