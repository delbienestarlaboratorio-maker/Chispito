import { SECUNDARIA_1, PREESCOLAR_1 } from './src/data/content-grados-superiores-slim.js';
for (const [materiaId, materiaData] of Object.entries(SECUNDARIA_1.materias)) {
    if (!materiaData.bloques) console.log('SECUNDARIA_1 missing bloques in: ', materiaId);
}
for (const [materiaId, materiaData] of Object.entries(PREESCOLAR_1.materias)) {
    if (!materiaData.bloques) console.log('PREESCOLAR_1 missing bloques in: ', materiaId);
}
console.log('Test completed.');
