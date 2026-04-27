import { GRADOS_CONTENIDO } from './src/data/content-index';
import * as fs from 'fs';

let res: any = {};
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
fs.writeFileSync('reporte_materias.json', JSON.stringify(res, null, 2));
