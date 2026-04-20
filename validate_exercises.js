const fs = require('fs');
const path = require('path');

const EXERCISES_ROOT = path.join(__dirname, 'src', 'data', 'exercises');

function walkDir(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walkDir(filePath, fileList);
        } else if (file.endsWith('.json')) {
            if (file === 'indice.json') return; // skip index files
            fileList.push(filePath);
        }
    });
    return fileList;
}

function validateFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let data;
    try {
        data = JSON.parse(content);
    } catch (e) {
        return { valid: false, error: 'Invalid JSON' };
    }
    
    const errors = [];
    const warnings = [];
    
    if (!data.ejercicios) {
        errors.push('Missing ejercicios field');
    } else {
        const { v1 = [], v2 = [], preview = [] } = data.ejercicios;
        const allExercises = [...v1, ...v2, ...preview];
        
        allExercises.forEach((ex, idx) => {
            if (!ex.pregunta) {
                errors.push(`Exercise ${idx} missing pregunta`);
            } else {
                // Check fill blank questions for blank placeholder
                if (ex.tipo === 'fill_blank') {
                    if (!ex.pregunta.includes('___') && !ex.pregunta.includes('???')) {
                        warnings.push(`Fill blank exercise ${idx} missing blank placeholder: "${ex.pregunta}"`);
                    }
                    if (!ex.respuestaCorrecta) {
                        errors.push(`Fill blank exercise ${idx} missing respuestaCorrecta`);
                    }
                }
                if (ex.tipo === 'multiple_choice') {
                    if (!ex.opciones || ex.opciones.length === 0) {
                        errors.push(`Multiple choice exercise ${idx} missing opciones`);
                    }
                    if (!ex.respuestaCorrecta) {
                        errors.push(`Multiple choice exercise ${idx} missing respuestaCorrecta`);
                    }
                }
                if (ex.tipo === 'true_false') {
                    if (!ex.respuestaCorrecta) {
                        errors.push(`True/false exercise ${idx} missing respuestaCorrecta`);
                    }
                }
            }
        });
    }
    
    return { valid: errors.length === 0, errors, warnings };
}

function main() {
    const files = walkDir(EXERCISES_ROOT);
    console.log(`Found ${files.length} JSON files`);
    
    let totalErrors = 0;
    let totalWarnings = 0;
    
    files.forEach(file => {
        const relative = path.relative(EXERCISES_ROOT, file);
        const result = validateFile(file);
        if (!result.valid || result.warnings.length > 0) {
            console.log(`\n📄 ${relative}`);
            if (result.errors.length > 0) {
                console.log('  ❌ Errors:');
                result.errors.forEach(err => console.log(`    - ${err}`));
                totalErrors += result.errors.length;
            }
            if (result.warnings.length > 0) {
                console.log('  ⚠️  Warnings:');
                result.warnings.forEach(warn => console.log(`    - ${warn}`));
                totalWarnings += result.warnings.length;
            }
        }
    });
    
    console.log(`\n=== Summary ===`);
    console.log(`Total files: ${files.length}`);
    console.log(`Total errors: ${totalErrors}`);
    console.log(`Total warnings: ${totalWarnings}`);
    
    if (totalErrors === 0) {
        console.log('✅ No critical errors found.');
    } else {
        console.log('❌ Some errors need fixing.');
        process.exit(1);
    }
}

main();