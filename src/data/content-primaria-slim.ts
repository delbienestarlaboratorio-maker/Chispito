// Base de datos de contenido "masticado" para papás y maestros
// Primaria 1°, 2°, 3° y Kinder — Ciclo escolar 2025-2026 SEP México

// Primaria 1 y 2, y sus lenguas indígenas

import type { BloqueContenido, MateriaContenido, GradoContenido } from "./content-types";

export const LENGUAS_P1: MateriaContenido = {
    materia: "lenguas",
    nombre: "Lenguas Indígenas",
    emoji: "🗣️",
    color: "#9333EA",
    bloques: [
        { bloque: 1, nombre: "Proyecto en mi lengua: Ch'ol", meses: "Todo el ciclo" },
        { bloque: 2, nombre: "Proyecto en mi lengua: Chichimeco", meses: "Todo el ciclo" },
        { bloque: 3, nombre: "Proyecto en mi lengua: Cora", meses: "Todo el ciclo" },
        { bloque: 4, nombre: "Proyecto en mi lengua: Huichol", meses: "Todo el ciclo" },
        { bloque: 5, nombre: "Proyecto en mi lengua: Maya", meses: "Todo el ciclo" },
        { bloque: 6, nombre: "Proyecto en mi lengua: Mayo", meses: "Todo el ciclo" },
        { bloque: 7, nombre: "Proyecto en mi lengua: Mazateco", meses: "Todo el ciclo" },
        { bloque: 8, nombre: "Proyecto en mi lengua: Mixteco", meses: "Todo el ciclo" },
        { bloque: 9, nombre: "Proyecto en mi lengua: Náhuatl", meses: "Todo el ciclo" },
        { bloque: 10, nombre: "Proyecto en mi lengua: Seri", meses: "Todo el ciclo" },
        { bloque: 11, nombre: "Proyecto en mi lengua: Tarahumara (Ralámuli)", meses: "Todo el ciclo" },
        { bloque: 12, nombre: "Proyecto en mi lengua: Totonaco", meses: "Todo el ciclo" },
        { bloque: 13, nombre: "Proyecto en mi lengua: Tseltal", meses: "Todo el ciclo" },
        { bloque: 14, nombre: "Proyecto en mi lengua: Tsotsil", meses: "Todo el ciclo" },
        { bloque: 15, nombre: "Proyecto en mi lengua: Yaqui", meses: "Todo el ciclo" },
        { bloque: 16, nombre: "Proyecto en mi lengua: Zapoteco", meses: "Todo el ciclo" },
        { bloque: 17, nombre: "Proyecto en mi lengua: Tojolabal", meses: "Todo el ciclo" }
    ]
};

export const LENGUAS_P2: MateriaContenido = {
    materia: "lenguas",
    nombre: "Lenguas Indígenas",
    emoji: "🗣️",
    color: "#9333EA",
    bloques: [
        { bloque: 1, nombre: "Proyecto en mi lengua: Ch'ol", meses: "Todo el ciclo" },
        { bloque: 2, nombre: "Proyecto en mi lengua: Chichimeco", meses: "Todo el ciclo" },
        { bloque: 3, nombre: "Proyecto en mi lengua: Cora", meses: "Todo el ciclo" },
        { bloque: 4, nombre: "Proyecto en mi lengua: Huichol", meses: "Todo el ciclo" },
        { bloque: 5, nombre: "Proyecto en mi lengua: Maya", meses: "Todo el ciclo" },
        { bloque: 6, nombre: "Proyecto en mi lengua: Mayo", meses: "Todo el ciclo" },
        { bloque: 7, nombre: "Proyecto en mi lengua: Mazateco", meses: "Todo el ciclo" },
        { bloque: 8, nombre: "Proyecto en mi lengua: Mixteco", meses: "Todo el ciclo" },
        { bloque: 9, nombre: "Proyecto en mi lengua: Náhuatl", meses: "Todo el ciclo" },
        { bloque: 10, nombre: "Proyecto en mi lengua: Seri", meses: "Todo el ciclo" },
        { bloque: 11, nombre: "Proyecto en mi lengua: Tarahumara (Ralámuli)", meses: "Todo el ciclo" },
        { bloque: 12, nombre: "Proyecto en mi lengua: Totonaco", meses: "Todo el ciclo" },
        { bloque: 13, nombre: "Proyecto en mi lengua: Tseltal", meses: "Todo el ciclo" },
        { bloque: 14, nombre: "Proyecto en mi lengua: Tsotsil", meses: "Todo el ciclo" },
        { bloque: 15, nombre: "Proyecto en mi lengua: Yaqui", meses: "Todo el ciclo" },
        { bloque: 16, nombre: "Proyecto en mi lengua: Zapoteco", meses: "Todo el ciclo" },
        { bloque: 17, nombre: "Proyecto en mi lengua: Tojolabal", meses: "Todo el ciclo" }
    ]
};

// ============================================================
// PRIMARIA 1° — Contenido completo masticado
// ============================================================
export const PRIMARIA_1: GradoContenido = {
    grado: "primaria-1",
    nombre: "1° Primaria",
    emoji: "🚀",
    materias: {
        matematicas: {
            materia: "matematicas", nombre: "Matemáticas", emoji: "📐", color: "#3B82F6",
            bloques: [
                { bloque: 1, nombre: "Números del 1 al 10", meses: "Agosto – Septiembre" },
                { bloque: 2, nombre: "Sumas hasta 10", meses: "Octubre – Noviembre" },
                { bloque: 3, nombre: "Figuras geométricas", meses: "Diciembre – Enero" },
                { bloque: 4, nombre: "Restas hasta 10", meses: "Febrero – Marzo" },
                { bloque: 5, nombre: "Números hasta 20 y dinero", meses: "Abril – Junio" }
            ]
        },
        espanol: {
            materia: "espanol", nombre: "Español", emoji: "📚", color: "#22C55E",
            bloques: [
                { bloque: 1, nombre: "Vocales y primeras letras", meses: "Agosto – Septiembre" },
                { bloque: 2, nombre: "Sílabas y palabras", meses: "Octubre – Noviembre" },
                { bloque: 3, nombre: "Mis primeras oraciones", meses: "Diciembre – Enero" },
                { bloque: 4, nombre: "Escritura y dictado", meses: "Febrero – Marzo" },
                { bloque: 5, nombre: "Textos y comunicación", meses: "Abril – Junio" }
            ]
        },
        lenguas: LENGUAS_P1
    }
};

// ============================================================
// PRIMARIA 2° — Contenido masticado
// ============================================================
export const PRIMARIA_2: GradoContenido = {
    grado: "primaria-2",
    nombre: "2° Primaria",
    emoji: "🌟",
    materias: {
        matematicas: {
            materia: "matematicas", nombre: "Matemáticas", emoji: "📐", color: "#3B82F6",
            bloques: [
                { bloque: 1, nombre: "Números hasta 100", meses: "Agosto – Septiembre" },
                { bloque: 2, nombre: "Sumas y restas con 2 dígitos", meses: "Octubre – Noviembre" },
                { bloque: 3, nombre: "Introducción a la multiplicación", meses: "Diciembre – Enero" },
                { bloque: 4, nombre: "Medición y fracciones básicas", meses: "Febrero – Marzo" },
                { bloque: 5, nombre: "Datos y tablas", meses: "Abril – Junio" }
            ]
        },
        espanol: {
            materia: "espanol", nombre: "Español", emoji: "📚", color: "#22C55E",
            bloques: [
                { bloque: 1, nombre: "Lectura fluida", meses: "Agosto – Septiembre" },
                { bloque: 2, nombre: "Ortografía y gramática básica", meses: "Octubre – Noviembre" },
                { bloque: 3, nombre: "Tipos de texto", meses: "Diciembre – Enero" },
                { bloque: 4, nombre: "Escritura creativa", meses: "Febrero – Marzo" },
                { bloque: 5, nombre: "Comunicación oral", meses: "Abril – Junio" }
            ]
        },
        lenguas: LENGUAS_P2
    }
};

// ============================================================
// CIENCIAS NATURALES — P1 y P2
// ============================================================

const CIENCIAS_P1: MateriaContenido = {
    materia: "ciencias", nombre: "Ciencias Naturales", emoji: "🔬", color: "#10B981",
    bloques: [
        { bloque: 1, nombre: "Mi cuerpo y mis sentidos", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Plantas y animales", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "El agua y el clima", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "La materia y los materiales", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "La energía: luz y sonido", meses: "Abril – Junio" }
    ]
};

const HISTORIA_P1: MateriaContenido = {
    materia: "historia", nombre: "Historia y Entorno", emoji: "🏛️", color: "#F59E0B",
    bloques: [
        { bloque: 1, nombre: "Mi familia y mi historia", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Mi comunidad y mi escuela", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "México: mi país", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Culturas indígenas de México", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "El pasado y el presente", meses: "Abril – Junio" }
    ]
};

const CIENCIAS_P2: MateriaContenido = {
    materia: "ciencias", nombre: "Ciencias Naturales", emoji: "🔬", color: "#10B981",
    bloques: [
        { bloque: 1, nombre: "El cuerpo humano: sistemas", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Ecosistemas y biodiversidad", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "La Tierra y el universo", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Fuerza, movimiento y máquinas simples", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "Cambios en la materia", meses: "Abril – Junio" }
    ]
};

const HISTORIA_P2: MateriaContenido = {
    materia: "historia", nombre: "Historia", emoji: "🏛️", color: "#F59E0B",
    bloques: [
        { bloque: 1, nombre: "Las primeras civilizaciones", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Mesoamérica: mayas y aztecas", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "La Colonia y la Independencia", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "México en el siglo XIX y XX", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "México contemporáneo", meses: "Abril – Junio" }
    ]
};

// ============================================================
// MATERIAS FALTANTES — Artes, Cívica, Formación, Ed. Física P1/P2
// ============================================================

const ARTES_P1: MateriaContenido = {
    materia: "artes", nombre: "Educación Artística", emoji: "🎨", color: "#EC4899",
    bloques: [
        { bloque: 1, nombre: "Exploración de sonidos y colores", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Expresión plástica y modelado", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "Movimiento y música", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Creación con materiales reciclados", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "Mi primera obra de teatro", meses: "Abril – Junio" }
    ]
};

const CIVICA_P1: MateriaContenido = {
    materia: "civica", nombre: "Cívica y Ética", emoji: "⚖️", color: "#8B5CF6",
    bloques: [
        { bloque: 1, nombre: "Yo soy especial", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Mi familia y mis amigos", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "Reglas y convivencia", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Mis derechos y deberes", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "Cuidar mi entorno", meses: "Abril – Junio" }
    ]
};

const FORMACION_P1: MateriaContenido = {
    materia: "formacion", nombre: "Formación y Valores", emoji: "🤝", color: "#14B8A6",
    bloques: [
        { bloque: 1, nombre: "Conozco mis emociones", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Respeto y tolerancia", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "Trabajo en equipo", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Honestidad y responsabilidad", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "Paz y solidaridad", meses: "Abril – Junio" }
    ]
};

const EDUCACION_FISICA_P1: MateriaContenido = {
    materia: "educacion_fisica", nombre: "Educación Física", emoji: "⚽", color: "#F97316",
    bloques: [
        { bloque: 1, nombre: "Mi cuerpo se mueve", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Jugamos juntos", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "Me muevo con música", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Soy saludable", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "Naturaleza activa", meses: "Abril – Junio" }
    ]
};

const ARTES_P2: MateriaContenido = {
    materia: "artes", nombre: "Educación Artística", emoji: "🎨", color: "#EC4899",
    bloques: [
        { bloque: 1, nombre: "Pintura y dibujo creativo", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Música y ritmo", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "Danza y movimiento", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Ilustro mis cuentos", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "Teatro y dramatización", meses: "Abril – Junio" }
    ]
};

const CIVICA_P2: MateriaContenido = {
    materia: "civica", nombre: "Cívica y Ética", emoji: "⚖️", color: "#8B5CF6",
    bloques: [
        { bloque: 1, nombre: "Identidad y pertenencia", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "La democracia en mi escuela", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "Igualdad y no discriminación", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Participación ciudadana", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "Medio ambiente y responsabilidad", meses: "Abril – Junio" }
    ]
};

const FORMACION_P2: MateriaContenido = {
    materia: "formacion", nombre: "Formación y Valores", emoji: "🤝", color: "#14B8A6",
    bloques: [
        { bloque: 1, nombre: "Autoestima y confianza", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Empatía y amistad", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "Resolución de conflictos", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Liderazgo y cooperación", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "Ciudadanía y bien común", meses: "Abril – Junio" }
    ]
};

const EDUCACION_FISICA_P2: MateriaContenido = {
    materia: "educacion_fisica", nombre: "Educación Física", emoji: "⚽", color: "#F97316",
    bloques: [
        { bloque: 1, nombre: "Coordinación y equilibrio", meses: "Agosto – Septiembre" },
        { bloque: 2, nombre: "Deportes con balón", meses: "Octubre – Noviembre" },
        { bloque: 3, nombre: "Gimnasia básica", meses: "Diciembre – Enero" },
        { bloque: 4, nombre: "Juegos tradicionales mexicanos", meses: "Febrero – Marzo" },
        { bloque: 5, nombre: "Atletismo y competencias", meses: "Abril – Junio" }
    ]
};

// ============================================================
// INYECCIÓN DE TODAS LAS MATERIAS
// ============================================================
PRIMARIA_1.materias["ciencias"] = CIENCIAS_P1;
PRIMARIA_1.materias["historia"] = HISTORIA_P1;
PRIMARIA_1.materias["artes"] = ARTES_P1;
PRIMARIA_1.materias["civica"] = CIVICA_P1;
PRIMARIA_1.materias["formacion"] = FORMACION_P1;
PRIMARIA_1.materias["educacion_fisica"] = EDUCACION_FISICA_P1;
PRIMARIA_2.materias["ciencias"] = CIENCIAS_P2;
PRIMARIA_2.materias["historia"] = HISTORIA_P2;
PRIMARIA_2.materias["artes"] = ARTES_P2;
PRIMARIA_2.materias["civica"] = CIVICA_P2;
PRIMARIA_2.materias["formacion"] = FORMACION_P2;
PRIMARIA_2.materias["educacion_fisica"] = EDUCACION_FISICA_P2;

// === Bloque 6: Lengua de Señas Mexicana (LSM) para Primaria 1 ===
PRIMARIA_1.materias["espanol"].bloques.push({ bloque: 6, nombre: "Mis palabras en señas (LSM)", meses: "Julio" });
PRIMARIA_1.materias["matematicas"].bloques.push({ bloque: 6, nombre: "Números que hablan (LSM)", meses: "Julio" });
PRIMARIA_1.materias["educacion_fisica"].bloques.push({ bloque: 6, nombre: "Juego y me comunico (LSM)", meses: "Julio" });

// === Bloque 6: Lengua de Señas Mexicana (LSM) para Primaria 2 ===
PRIMARIA_2.materias["espanol"].bloques.push({ bloque: 6, nombre: "Conecto mis palabras (LSM)", meses: "Julio" });
PRIMARIA_2.materias["matematicas"].bloques.push({ bloque: 6, nombre: "Cálculo en mis manos (LSM)", meses: "Julio" });
PRIMARIA_2.materias["educacion_fisica"].bloques.push({ bloque: 6, nombre: "Cuerpo en movimiento (LSM)", meses: "Julio" });

// Nota: Para grados superiores y consolidación de GRADOS_CONTENIDO, usa src/data/content-index.ts
