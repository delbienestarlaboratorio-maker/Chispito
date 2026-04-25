import { SECUNDARIA_1, PREESCOLAR_1, PREESCOLAR_2 } from './src/data/content-grados-superiores-slim';
import { PREESCOLAR_1_COMPLETE } from './src/data/content-preescolar1-slim';
import { KINDER } from './src/data/content-kinder-slim';

function checkGrado(obj: any, name: string) {
    if (!obj || !obj.materias) return console.log(name, 'is totally undefined/has no materias!');
    Object.entries(obj.materias).forEach(([id, mat]: [string, any]) => {
        if (!mat.bloques || !Array.isArray(mat.bloques)) {
            console.log('? MISSING BLOQUES in', name, '->', id);
        }
    });
}
checkGrado(SECUNDARIA_1, 'SECUNDARIA_1');
checkGrado(PREESCOLAR_1, 'PREESCOLAR_1');
checkGrado(PREESCOLAR_2, 'PREESCOLAR_2');
checkGrado(PREESCOLAR_1_COMPLETE, 'PREESCOLAR_1_COMPLETE');
checkGrado(KINDER, 'KINDER');
console.log('? Check completed.');
