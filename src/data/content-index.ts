import type { GradoContenido } from './content-types';
import { KINDER } from "./content-kinder-slim";
import { PREESCOLAR_1_COMPLETE } from "./content-preescolar1-slim";
import { PRIMARIA_1, PRIMARIA_2 } from "./content-primaria-slim";
import { PRIMARIA_3 } from "./content-primaria3-slim";
import { PRIMARIA_4 } from "./content-primaria4-slim";
import { PRIMARIA_5 } from "./content-primaria5-slim";
import { PRIMARIA_6 } from "./content-primaria6-slim";
import { SECUNDARIA_1 } from "./content-secundaria1-slim";
import { SECUNDARIA_2 } from "./content-secundaria2-slim";
import { SECUNDARIA_3 } from "./content-secundaria3-slim";
import { PREESCOLAR_1, PREESCOLAR_2, PREESCOLAR_3 } from "./content-grados-superiores-slim";
import { TELESECUNDARIA_1, TELESECUNDARIA_2, TELESECUNDARIA_3 } from "./content-telesecundaria-slim";
import { 
    CHISPITO_PLUS_K1, CHISPITO_PLUS_K2, CHISPITO_PLUS_K3,
    CHISPITO_PLUS_P1, CHISPITO_PLUS_P2, CHISPITO_PLUS_P3,
    CHISPITO_PLUS_P4, CHISPITO_PLUS_P5, CHISPITO_PLUS_P6,
    CHISPITO_PLUS_S1, CHISPITO_PLUS_S2, CHISPITO_PLUS_S3 
} from "./content-plus-slim";

// === Bloque 6: Lengua de Señas Mexicana (LSM) para Primaria 3 ===
if (PRIMARIA_3.materias["espanol"]) {
    PRIMARIA_3.materias["espanol"].bloques.push({
        bloque: 6,
        nombre: "Palabras precisas (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_3.materias["matematicas"]) {
    PRIMARIA_3.materias["matematicas"].bloques.push({
        bloque: 6,
        nombre: "Mis manos calculan (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_3.materias["ciencias"]) {
    PRIMARIA_3.materias["ciencias"].bloques.push({
        bloque: 6,
        nombre: "Explorando la Naturaleza (LSM)",
        meses: "Julio"
    });
}
// 3° Primaria usa "formacion" como materia cívica fundamental.
if (!PRIMARIA_3.materias["formacion"]) {
    PRIMARIA_3.materias["formacion"] = {
        materia: "formacion",
        nombre: "Formación",
        emoji: "🤝",
        color: "#10B981",
        bloques: []
    };
}
PRIMARIA_3.materias["formacion"].bloques.push({
    bloque: 6,
    nombre: "Valores en mis manos (LSM)",
    meses: "Julio"
});

// === Bloque 6: Lengua de Señas Mexicana (LSM) para Primaria 4 ===
if (PRIMARIA_4.materias["espanol"]) {
    PRIMARIA_4.materias["espanol"].bloques.push({
        bloque: 6,
        nombre: "Mi lengua tiene forma (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_4.materias["matematicas"]) {
    PRIMARIA_4.materias["matematicas"].bloques.push({
        bloque: 6,
        nombre: "Números que vuelan (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_4.materias["ciencias"]) {
    PRIMARIA_4.materias["ciencias"].bloques.push({
        bloque: 6,
        nombre: "México natural (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_4.materias["historia"]) {
    PRIMARIA_4.materias["historia"].bloques.push({
        bloque: 6,
        nombre: "México en mis manos (LSM)",
        meses: "Julio"
    });
}

// === Bloque 6: Lengua de Señas Mexicana (LSM) para Primaria 5 ===
if (PRIMARIA_5.materias["espanol"]) {
    PRIMARIA_5.materias["espanol"].bloques.push({
        bloque: 6,
        nombre: "Expresiones con alma (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_5.materias["matematicas"]) {
    PRIMARIA_5.materias["matematicas"].bloques.push({
        bloque: 6,
        nombre: "El lenguaje del porcentaje (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_5.materias["ciencias"]) {
    PRIMARIA_5.materias["ciencias"].bloques.push({
        bloque: 6,
        nombre: "Mi cuerpo por dentro (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_5.materias["historia"]) {
    PRIMARIA_5.materias["historia"].bloques.push({
        bloque: 6,
        nombre: "Las manos del pueblo (LSM)",
        meses: "Julio"
    });
}
// === Bloque 6: Lengua de Señas Mexicana (LSM) para Primaria 6 ===
if (PRIMARIA_6.materias["espanol"]) {
    PRIMARIA_6.materias["espanol"].bloques.push({
        bloque: 6,
        nombre: "Pensamiento en señas (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_6.materias["matematicas"]) {
    PRIMARIA_6.materias["matematicas"].bloques.push({
        bloque: 6,
        nombre: "Álgebra en el aire (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_6.materias["ciencias"]) {
    PRIMARIA_6.materias["ciencias"].bloques.push({
        bloque: 6,
        nombre: "Planeta en nuestras manos (LSM)",
        meses: "Julio"
    });
}
if (PRIMARIA_6.materias["historia"]) {
    PRIMARIA_6.materias["historia"].bloques.push({
        bloque: 6,
        nombre: "México y el mundo (LSM)",
        meses: "Julio"
    });
}

// === Bloque Especial: Inyección Dinámica de Chispito Plus (Habilidades de Vida) ===
PREESCOLAR_1_COMPLETE.materias["chispito_plus"] = CHISPITO_PLUS_K1;
PREESCOLAR_2.materias["chispito_plus"] = CHISPITO_PLUS_K2;
KINDER.materias["chispito_plus"] = CHISPITO_PLUS_K3; // KINDER = Preescolar 3
PREESCOLAR_3.materias["chispito_plus"] = CHISPITO_PLUS_K3;

PRIMARIA_1.materias["chispito_plus"] = CHISPITO_PLUS_P1;
PRIMARIA_2.materias["chispito_plus"] = CHISPITO_PLUS_P2;
PRIMARIA_3.materias["chispito_plus"] = CHISPITO_PLUS_P3;
PRIMARIA_4.materias["chispito_plus"] = CHISPITO_PLUS_P4;
PRIMARIA_5.materias["chispito_plus"] = CHISPITO_PLUS_P5;
PRIMARIA_6.materias["chispito_plus"] = CHISPITO_PLUS_P6;

SECUNDARIA_1.materias["chispito_plus"] = CHISPITO_PLUS_S1;
SECUNDARIA_2.materias["chispito_plus"] = CHISPITO_PLUS_S2;
SECUNDARIA_3.materias["chispito_plus"] = CHISPITO_PLUS_S3;

export const GRADOS_CONTENIDO: Record<string, GradoContenido> = {
    "kinder": KINDER,
    "preescolar-3": PREESCOLAR_3,
    "preescolar-1": PREESCOLAR_1_COMPLETE,
    "preescolar-2": PREESCOLAR_2,
    "primaria-1": PRIMARIA_1,
    "primaria-2": PRIMARIA_2,
    "primaria-3": PRIMARIA_3,
    "primaria-4": PRIMARIA_4,
    "primaria-5": PRIMARIA_5,
    "primaria-6": PRIMARIA_6,
    "secundaria-1": SECUNDARIA_1,
    "secundaria-2": SECUNDARIA_2,
    "secundaria-3": SECUNDARIA_3,
    "telesecundaria-1": TELESECUNDARIA_1,
    "telesecundaria-2": TELESECUNDARIA_2,
    "telesecundaria-3": TELESECUNDARIA_3
};
