const fs = require('fs');
const https = require('https');

const fetchSitemap = () => new Promise((resolve, reject) => {
    https.get('https://chispito.mx/sitemap.xml', (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
    }).on('error', reject);
});

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
    console.log("Descargando sitemap.xml en vivo...");
    const xml = await fetchSitemap();
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    const urls = [];
    while ((match = regex.exec(xml)) !== null) {
        urls.push(match[1]);
    }
    
    console.log(`Verificando ${urls.length} URLs encontradas en el sitemap de Chispito.mx...`);
    let errors = [];
    let count = 0;
    
    for (let i = 0; i < urls.length; i += 30) {
        const batch = urls.slice(i, i + 30);
        const results = await Promise.all(batch.map(checkUrl));
        for (const res of results) {
            if (res.status === 404) {
                errors.push(res.url);
            }
        }
        count += batch.length;
        if (count % 100 === 0 || count === urls.length) console.log("Revisados " + count + " / " + urls.length);
    }
    
    console.log("\n--- ENLACES CON ERROR 404 ---");
    if (errors.length > 0) {
        errors.forEach(e => console.log(e));
        fs.writeFileSync('404_errors_chispito.txt', errors.join('\n'));
        console.log("\nSe guardaron " + errors.length + " errores 404 en 404_errors_chispito.txt");
    } else {
        console.log("¡Ningún enlace arrojó 404! Todo el Sitemap está 100% perfecto.");
    }
}
main();
