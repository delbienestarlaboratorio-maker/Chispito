/**
 * Contenido "slim" de Telesecundaria para GRADOS_CONTENIDO
 * Datos para las páginas de materia — NEM (Nueva Escuela Mexicana)
 */
import type { GradoContenido } from "./content-types";

export const TELESECUNDARIA_1: GradoContenido = {
    grado: "telesecundaria-1",
    nombre: "1° Telesecundaria",
    emoji: "📺",
    materias: {
        lenguajes_nem: {
            materia: "lenguajes_nem", nombre: "Lenguajes", emoji: "📖", color: "#3B82F6",
            bloques: [
                { bloque: 1, nombre: "Identidad y narrativa", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Tradición oral y escrita", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Lectura crítica", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Producción de textos", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Comunicación y medios", meses: "Abril-Junio" },
            ],
        },
        saberes_cientificos: {
            materia: "saberes_cientificos", nombre: "Saberes y Pensamiento Científico", emoji: "🔬", color: "#10B981",
            bloques: [
                { bloque: 1, nombre: "El mundo natural", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Materia y energía", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Cuerpo humano", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Biodiversidad", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Experimentación", meses: "Abril-Junio" },
            ],
        },
        etica_naturaleza: {
            materia: "etica_naturaleza", nombre: "Ética, Naturaleza y Sociedades", emoji: "⚖️", color: "#F59E0B",
            bloques: [
                { bloque: 1, nombre: "Identidad y pertenencia", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Diversidad cultural", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Democracia y derechos", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Medio ambiente y sustentabilidad", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Justicia y bien común", meses: "Abril-Junio" },
            ],
        },
        humano_comunitario: {
            materia: "humano_comunitario", nombre: "De lo Humano y lo Comunitario", emoji: "🤝", color: "#F59E0B",
            bloques: [
                { bloque: 1, nombre: "Autoconocimiento", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Convivencia y emociones", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Salud y bienestar", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Comunidad y participación", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Proyecto de vida", meses: "Abril-Junio" },
            ],
        },
        multiples_lenguajes: {
            materia: "multiples_lenguajes", nombre: "Múltiples Lenguajes", emoji: "🎭", color: "#EC4899",
            bloques: [
                { bloque: 1, nombre: "Artes visuales", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Música y ritmo", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Teatro y expresión", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Danza y movimiento", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Proyecto artístico", meses: "Abril-Junio" },
            ],
        },
        proyectos_nem: {
            materia: "proyectos_nem", nombre: "Proyectos", emoji: "📋", color: "#14B8A6",
            bloques: [
                { bloque: 1, nombre: "Proyecto de Aula: Mi comunidad", meses: "Agosto-Octubre" },
                { bloque: 2, nombre: "Proyecto Escolar: Investigación", meses: "Noviembre-Enero" },
                { bloque: 3, nombre: "Proyecto Comunitario", meses: "Febrero-Junio" },
            ],
        },
        ingles: {
            materia: "ingles", nombre: "Inglés", emoji: "🗣️", color: "#6366F1",
            bloques: [
                { bloque: 1, nombre: "Greetings and introductions", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Daily routines", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "My community", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Health and food", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Reading and writing", meses: "Abril-Junio" },
            ],
        },
    },
};

export const TELESECUNDARIA_2: GradoContenido = {
    grado: "telesecundaria-2",
    nombre: "2° Telesecundaria",
    emoji: "📺",
    materias: {
        lenguajes_nem: {
            materia: "lenguajes_nem", nombre: "Lenguajes", emoji: "📖", color: "#3B82F6",
            bloques: [
                { bloque: 1, nombre: "Lectura crítica", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Argumentación", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Investigación documental", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Creación literaria", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Textos legales y formales", meses: "Abril-Junio" },
            ],
        },
        saberes_cientificos: {
            materia: "saberes_cientificos", nombre: "Saberes y Pensamiento Científico", emoji: "🔬", color: "#10B981",
            bloques: [
                { bloque: 1, nombre: "Física: movimiento y fuerza", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Química: materia y reacciones", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Biología: genética básica", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Ecología y medio ambiente", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Tecnología y ciencia", meses: "Abril-Junio" },
            ],
        },
        etica_naturaleza: {
            materia: "etica_naturaleza", nombre: "Ética, Naturaleza y Sociedades", emoji: "⚖️", color: "#F59E0B",
            bloques: [
                { bloque: 1, nombre: "México: historia y territorio", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Globalización", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Economía y sociedad", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Derechos humanos en acción", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Ciudadanía global", meses: "Abril-Junio" },
            ],
        },
        humano_comunitario: {
            materia: "humano_comunitario", nombre: "De lo Humano y lo Comunitario", emoji: "🤝", color: "#F59E0B",
            bloques: [
                { bloque: 1, nombre: "Identidad y adolescencia", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Relaciones interpersonales", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Sexualidad y salud", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Prevención de violencia", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Liderazgo comunitario", meses: "Abril-Junio" },
            ],
        },
        multiples_lenguajes: {
            materia: "multiples_lenguajes", nombre: "Múltiples Lenguajes", emoji: "🎭", color: "#EC4899",
            bloques: [
                { bloque: 1, nombre: "Fotografía y cine", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Música: composición", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Teatro: creación colectiva", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Arte digital", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Festival artístico", meses: "Abril-Junio" },
            ],
        },
        proyectos_nem: {
            materia: "proyectos_nem", nombre: "Proyectos", emoji: "📋", color: "#14B8A6",
            bloques: [
                { bloque: 1, nombre: "Proyecto Científico", meses: "Agosto-Octubre" },
                { bloque: 2, nombre: "Proyecto Social", meses: "Noviembre-Enero" },
                { bloque: 3, nombre: "Proyecto Interdisciplinario", meses: "Febrero-Junio" },
            ],
        },
        ingles: {
            materia: "ingles", nombre: "Inglés", emoji: "🗣️", color: "#6366F1",
            bloques: [
                { bloque: 1, nombre: "Past experiences", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Future plans", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Culture and traditions", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Technology and media", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Reading comprehension", meses: "Abril-Junio" },
            ],
        },
    },
};

export const TELESECUNDARIA_3: GradoContenido = {
    grado: "telesecundaria-3",
    nombre: "3° Telesecundaria",
    emoji: "📺",
    materias: {
        lenguajes_nem: {
            materia: "lenguajes_nem", nombre: "Lenguajes", emoji: "📖", color: "#3B82F6",
            bloques: [
                { bloque: 1, nombre: "Ensayo y opinión", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Debate y oratoria", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Investigación avanzada", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Redacción académica", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Proyecto editorial", meses: "Abril-Junio" },
            ],
        },
        saberes_cientificos: {
            materia: "saberes_cientificos", nombre: "Saberes y Pensamiento Científico", emoji: "🔬", color: "#10B981",
            bloques: [
                { bloque: 1, nombre: "Química: tabla periódica", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Física: electricidad", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Biología: evolución", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Salud y reproducción", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Proyecto científico integral", meses: "Abril-Junio" },
            ],
        },
        etica_naturaleza: {
            materia: "etica_naturaleza", nombre: "Ética, Naturaleza y Sociedades", emoji: "⚖️", color: "#F59E0B",
            bloques: [
                { bloque: 1, nombre: "México en el mundo", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Democracia participativa", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Problemas globales", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Sustentabilidad", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Proyecto ciudadano", meses: "Abril-Junio" },
            ],
        },
        humano_comunitario: {
            materia: "humano_comunitario", nombre: "De lo Humano y lo Comunitario", emoji: "🤝", color: "#F59E0B",
            bloques: [
                { bloque: 1, nombre: "Toma de decisiones", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Metas a corto y largo plazo", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Orientación vocacional", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Emprendimiento social", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Mi comunidad y mi futuro", meses: "Abril-Junio" },
            ],
        },
        multiples_lenguajes: {
            materia: "multiples_lenguajes", nombre: "Múltiples Lenguajes", emoji: "🎭", color: "#EC4899",
            bloques: [
                { bloque: 1, nombre: "Arte contemporáneo", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Producción audiovisual", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Performance y happening", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Diseño y comunicación", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Exposición final", meses: "Abril-Junio" },
            ],
        },
        proyectos_nem: {
            materia: "proyectos_nem", nombre: "Proyectos", emoji: "📋", color: "#14B8A6",
            bloques: [
                { bloque: 1, nombre: "Proyecto Interdisciplinario Final", meses: "Agosto-Octubre" },
                { bloque: 2, nombre: "Documentación y presentación", meses: "Noviembre-Enero" },
                { bloque: 3, nombre: "Reflexión y autoevaluación", meses: "Febrero-Junio" },
            ],
        },
        ingles: {
            materia: "ingles", nombre: "Inglés", emoji: "🗣️", color: "#6366F1",
            bloques: [
                { bloque: 1, nombre: "Academic English", meses: "Agosto-Septiembre" },
                { bloque: 2, nombre: "Writing essays", meses: "Octubre-Noviembre" },
                { bloque: 3, nombre: "Literature circles", meses: "Diciembre-Enero" },
                { bloque: 4, nombre: "Debate and discussion", meses: "Febrero-Marzo" },
                { bloque: 5, nombre: "Mini-project: My community in English", meses: "Abril-Junio" },
            ],
        },
    },
};
