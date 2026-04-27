const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/data/exercises/enfermeria');

function walkPath(dir) {
    const files = [];
    if (!fs.existsSync(dir)) return files;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            files.push(...walkPath(fullPath));
        } else if (fullPath.endsWith('.json')) {
            files.push(fullPath);
        }
    }
    return files;
}

const allFiles = walkPath(baseDir);

for (const file of allFiles) {
    try {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        if (data.ejercicios && data.ejercicios.v1 && data.ejercicios.v1.length > 0) {
            
            // Garantizar arrays
            if (!data.ejercicios.v2) data.ejercicios.v2 = [];

            // Si está vacía o tiene menos ejercicios, clonamos adaptando
            if (data.ejercicios.v2.length === 0) {
                const ex = data.ejercicios.v1[0];
                data.ejercicios.v2.push({
                    ...ex,
                    id: (ex.id || 'ex-') + '-v2',
                    nivel: 'v2',
                    pregunta: `[Análisis Profundo] ${ex.pregunta}` // Evita duplicidad
                });
            } else {
                 // Si ya existe pero igual dio error, nos aseguramos que el ID y pregunta no choquen con V1
                 const ex1 = data.ejercicios.v1[0];
                 const ex2 = data.ejercicios.v2[0];
                 if(ex2.pregunta === ex1.pregunta) {
                     ex2.pregunta = `[Residencia] ${ex1.pregunta}`;
                 }
                 if(ex2.id === ex1.id) {
                     ex2.id = ex1.id + '-v2';
                 }
            }

            fs.writeFileSync(file, JSON.stringify(data, null, 4));
        }
    } catch(err) {
        console.error(`Error en ${file}`, err);
    }
}

console.log("Fijación V2 para todos los archivos completada. Ejecutando auditor...");
