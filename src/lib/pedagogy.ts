/**
 * Utilidades pedagógicas para la evaluación tolerante de ejercicios en Chispito.mx.
 * Garantiza que un estudiante no falle un ejercicio por diferencias minúsculas
 * de sintaxis, puntuación o acentuación que no alteran el conocimiento base.
 */

// 1. Normalización tolerante para todos los strings (respuestas, blanks, múltiple)
export function normalizeAnswer(text: any): string {
    if (text === undefined || text === null) return "";
    let str = String(text)
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

    // -- Traducción Numérica (Infalibilidad para teclado infantil) --
    // Convierte respuestas en texto plano a dígitos matemáticos absolutos.
    const numMap: Record<string, string> = {
        "cero": "0", "uno": "1", "dos": "2", "tres": "3", "cuatro": "4",
        "cinco": "5", "seis": "6", "siete": "7", "ocho": "8", "nueve": "9",
        "diez": "10", "once": "11", "doce": "12", "trece": "13", "catorce": "14",
        "quince": "15", "dieciseis": "16", "diecisiete": "17", "dieciocho": "18",
        "diecinueve": "19", "veinte": "20"
    };

    // Aplicar traducción a cada palabra sin alterar el resto (ej. "tengo tres" -> "tengo 3")
    const words = str.split(" ");
    const mapped = words.map(w => numMap[w] !== undefined ? numMap[w] : w);
    return mapped.join(" ");
}

// 2. Traducción unificada de True/False para todas las interfaces
export function normalizeTrueFalse(target: any): "true" | "false" {
    const t = normalizeAnswer(target);
    if (t === "verdadero" || t === "cierto" || t === "v" || t === "true" || t === "t") return "true";
    return "false";
}

// 3. Cálculo de Distancia de Levenshtein (Fuzzy Matching)
export function levenshtein(a: string, b: string): number {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // Incrementar en la primera columna
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    // Incrementar en la primera fila
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Llenar el resto de la matriz
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1]; // Sin coste, misma letra
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // sustitución
                    Math.min(
                        matrix[i][j - 1] + 1, // inserción
                        matrix[i - 1][j] + 1  // borrado
                    )
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// 4. Evaluador Difuso (Tolerancia a Dislexia y Tipeo Rápido)
export function checkAnswerFuzzy(userAnswer: string, correctAnswer: string): { isCorrect: boolean; isTypo: boolean; typoMessage?: string } {
    const u = normalizeAnswer(userAnswer);
    const c = normalizeAnswer(correctAnswer);

    // 1. Acierto perfecto
    if (u === c) return { isCorrect: true, isTypo: false };

    // 2. Distancia de Levenshtein
    const dist = levenshtein(u, c);

    // Reglas de tolerancia (Fuzzy Matching)
    // - Para palabras hiper-cortas (1 a 4 letras), se tolera 1 error tipográfico (ej. "di" en vez de "si", "sol" vs "sal").
    // - Para palabras largas o enunciados (5 letras o más), se toleran hasta 2 errores tipográficos.
    if ((dist === 1 && c.length >= 2) || (dist <= 2 && c.length >= 5)) {
        return {
            isCorrect: true,
            isTypo: true,
            typoMessage: `¡Te lo valgo! Pero mira, escribiste "${userAnswer}" y la escritura perfecta era "${correctAnswer}". 🎉`
        };
    }

    return { isCorrect: false, isTypo: false };
}
