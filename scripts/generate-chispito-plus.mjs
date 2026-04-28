import fs from 'fs';
import path from 'path';

const grados = [
  "kinder", "preescolar-1", "preescolar-2", "preescolar-3",
  "primaria-1", "primaria-2", "primaria-3", "primaria-4", "primaria-5", "primaria-6",
  "secundaria-1", "secundaria-2", "secundaria-3"
];

const template = (grado) => ({
  "grado": grado,
  "materia": "chispito_plus",
  "bloque": 1,
  "nombre": "Chispito Plus (Habilidades)",
  "meses": "Todo el ciclo",
  "temas": ["Misiones interactivas"],
  "totalEjercicios": 1,
  "ejercicios": {
    "v1": [
      {
        "id": `${grado}-plus-b1-v1-001`,
        "tema": "Misión Inicial",
        "tipo": "multiple_choice",
        "nivel": "v1",
        "pregunta": "¿Estás listo para iniciar tu laboratorio interactivo de habilidades para la vida?",
        "opciones": [
          "¡Sí, estoy listo!",
          "No, quiero volver a la teoría aburrida."
        ],
        "respuestaCorrecta": "¡Sí, estoy listo!",
        "explicacion": "¡Excelente actitud! Chispito Plus es 100% interactivo."
      }
    ],
    "v2": [],
    "preview": []
  },
  "generado": "2026-04-28T12:00:00.000Z",
  "version": "4.0-SEP-Calidad-Alta"
});

const exercisesDir = path.join(process.cwd(), 'src', 'data', 'exercises');

for (const grado of grados) {
  const dirPath = path.join(exercisesDir, grado, 'chispito_plus');
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const filePath = path.join(dirPath, 'bloque-1.json');
  fs.writeFileSync(filePath, JSON.stringify(template(grado), null, 2), 'utf8');
  console.log(`Created: ${filePath}`);
}

console.log("Done generating Chispito Plus JSONs.");
