const fetch = require('node-fetch');

(async () => {
    const res = await fetch('http://localhost:3000/preescolar-1/espanol/bloque-6');
    console.log('Status:', res.status);
    console.log('Headers:', [...res.headers.entries()]);
    const text = await res.text();
    console.log('First 500 chars:', text.substring(0, 500));
})();