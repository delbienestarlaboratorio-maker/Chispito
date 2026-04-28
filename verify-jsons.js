const fs = require('fs');
const path = require('path');

const dir = 'd:/Paginas_web/Sistema educacion Basica/Chispito.mx/src/data/exercises';

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
let errors = [];
let passCount = 0;
let totalExercises = 0;

for (const f of files) {
    try {
        const raw = fs.readFileSync(f, 'utf8');
        const data = JSON.parse(raw);
        
        let allEx = [];
        if(data.ejercicios) {
           if(data.ejercicios.v1) allEx.push(...data.ejercicios.v1);
           if(data.ejercicios.v2) allEx.push(...data.ejercicios.v2);
           if(data.ejercicios.preview) allEx.push(...data.ejercicios.preview);
        } else if (Array.isArray(data)) {
           allEx.push(...data);
        }

        allEx.forEach(ex => {
            totalExercises++;
            if(!ex.id || !ex.tipo || !ex.pregunta || ex.respuestaCorrecta === undefined) {
                errors.push("[E1 Base] " + path.basename(f) + " | ID: " + ex.id);
            }
            if(ex.tipo === 'multiple_choice') {
                if(!Array.isArray(ex.opciones) || ex.opciones.length === 0) {
                    errors.push("[E2 Opciones Vacias] " + path.basename(f) + " | ID: " + ex.id);
                } else if(!ex.opciones.includes(ex.respuestaCorrecta)) {
                    let arrCleanObj = ex.opciones.map(opt => (opt||'').toString().trim());
                    let resClean = (ex.respuestaCorrecta||'').toString().trim();
                    if (!arrCleanObj.includes(resClean)) {
                        errors.push("[E3 Respuesta Invalida] " + path.basename(f) + " | ID: " + ex.id + " | RC: " + ex.respuestaCorrecta);
                    }
                }
            }
        });
        passCount++;
    } catch(e) {
        errors.push("[E0 Parseo] " + path.basename(f) + " | ERROR: " + e.message);
    }
}

if(errors.length > 0) {
    fs.writeFileSync('errors.log', errors.join('\n'));
    console.log('ERRORES FATALES ENCONTRADOS:', errors.length);
} else {
    console.log("¡SISTEMA INFALIBLE! " + passCount + " archivos JSON y " + totalExercises + " ejercicios fueron validados estructuralmente. 0 errores encontrados que puedan romper la interfaz.");
}
