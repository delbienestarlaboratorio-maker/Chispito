require('ts-node').register({ transpileOnly: true });
const { GRADOS_CONTENIDO } = require('./src/data/content-index.ts');
let res = {};
for (const [key, val] of Object.entries(GRADOS_CONTENIDO)) {
  const materias = Object.keys(val.materias);
  res[val.nombre] = {
    totalMaterias: materias.length,
    materias: {}
  };
  for (const mKey of materias) {
     const m = val.materias[mKey];
     res[val.nombre].materias[m.nombre] = m.bloques.length;
  }
}
require('fs').writeFileSync('reporte_materias.json', JSON.stringify(res, null, 2));
