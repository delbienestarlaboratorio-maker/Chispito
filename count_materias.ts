import { GRADOS_CONTENIDO } from './src/data/content-index';

let res: string[] = [];
for (const [key, val] of Object.entries(GRADOS_CONTENIDO)) {
  const materias = Object.keys(val.materias);
  let str = `• **${val.nombre}** (${materias.length} materias):\n`;
  for (const mKey of materias) {
     const m = val.materias[mKey];
     str += `  - ${m.nombre}: ${m.bloques.length} ejercicios\n`;
  }
  res.push(str);
}
console.log(res.join('\n'));
