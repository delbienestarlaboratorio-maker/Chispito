// fix-jsons.js
const fs = require('fs');
const path = require('path');

const dir = 'd:/Paginas_web/Sistema educacion Basica/Chispito.mx/src/data/exercises/enfermeria';

function walk(directory, fileList = []) {
    if(!fs.existsSync(directory)) return fileList;
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath, fileList);
        } else if (filePath.endsWith('.json')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const files = walk(dir);

let fixedCount = 0;

for (const f of files) {
    let raw = fs.readFileSync(f, 'utf8');
    let data;
    try {
        data = JSON.parse(raw);
    } catch(e) {
        console.error("Error parseando", f);
        continue;
    }
    
    let changed = false;

    if (data.ejercicios) {
        if (data.ejercicios.v1) {
            const originalLength = data.ejercicios.v1.length;
            data.ejercicios.v1 = data.ejercicios.v1.filter(ex => ex.pregunta && ex.respuestaCorrecta);
            if (data.ejercicios.v1.length !== originalLength) changed = true;
        }
        if (data.ejercicios.v2) {
            const originalLength = data.ejercicios.v2.length;
            data.ejercicios.v2 = data.ejercicios.v2.filter(ex => ex.pregunta && ex.respuestaCorrecta && ex.pregunta !== "[Análisis Profundo] undefined");
            if (data.ejercicios.v2.length !== originalLength) changed = true;
        }
        if (data.ejercicios.preview) {
            const originalLength = data.ejercicios.preview.length;
            data.ejercicios.preview = data.ejercicios.preview.filter(ex => ex.pregunta && ex.respuestaCorrecta);
            if (data.ejercicios.preview.length !== originalLength) changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(f, JSON.stringify(data, null, 4));
        fixedCount++;
    }
}

console.log(`Se han purgado stubs vacíos en ${fixedCount} archivos. ¡La base de datos universitaria ahora es solida como roca!`);
