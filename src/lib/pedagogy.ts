/**
 * Utilidades pedagógicas para la evaluación tolerante de ejercicios en Chispito.mx.
 * Garantiza que un estudiante no falle un ejercicio por diferencias minúsculas
 * de sintaxis, puntuación o acentuación que no alteran el conocimiento base.
 */

// 1. Normalización tolerante para todos los strings (respuestas, blanks, múltiple)
export function normalizeAnswer(text: any): string {
    if (text === undefined || text === null) return "";
    return String(text)
        .trim()
        .toLowerCase()
        /* Remueve acentos y diéresis descomponiendo (NFD) y borrando marcas combinadas */
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        /* Solo remueve signos de interrogación/exclamación, comillas y paréntesis para no romper decimales o fracciones */
        .replace(/[!¡?¿"'(){}\[\]]/g, "")
        /* Remueve un punto al final si lo pusieron accidentalmente (ej. "4." -> "4") */
        .replace(/\.$/, "")
        /* Colapsa múltiples espacios a uno solo por tipeos accidentales */
        .replace(/\s{2,}/g, " ")
        .trim();
}

// 2. Traducción unificada de True/False para todas las interfaces
export function normalizeTrueFalse(target: any): "true" | "false" {
    const t = normalizeAnswer(target);
    if (t === "verdadero" || t === "cierto" || t === "v" || t === "true" || t === "t") return "true";
    return "false";
}
