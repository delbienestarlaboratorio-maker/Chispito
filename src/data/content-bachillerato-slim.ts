import type { GradoContenido } from './content-types';

function crearBachillerato(gradoNum: number, materias: string[]): GradoContenido {
    const matObj: any = {};
    const MATERIA_INFO: Record<string, { nombre: string; emoji: string; color: string }> = {
        matematicas: { nombre: "Matemáticas", emoji: "📐", color: "#3B82F6" },
        espanol: { nombre: "Español", emoji: "📖", color: "#EF4444" },
        ciencias: { nombre: "Ciencias", emoji: "🔬", color: "#10B981" },
        historia: { nombre: "Historia", emoji: "🏛️", color: "#F59E0B" },
        ingles: { nombre: "Inglés", emoji: "🌎", color: "#6366F1" },
        tecnologia: { nombre: "Tecnología", emoji: "💻", color: "#8B5CF6" },
        filosofia: { nombre: "Filosofía", emoji: "🧠", color: "#EC4899" },
    };

    for (const m of materias) {
        const info = MATERIA_INFO[m] || { nombre: m, emoji: "📘", color: "#3B82F6" };
        matObj[m] = {
            materia: m,
            nombre: info.nombre,
            emoji: info.emoji,
            color: info.color,
            bloques: Array.from({ length: 5 }, (_, i) => ({
                bloque: i + 1,
                nombre: `Módulo ${i + 1}`,
                meses: ["Agosto-Septiembre", "Octubre-Noviembre", "Diciembre-Enero", "Febrero-Marzo", "Abril-Junio"][i],
            })),
        };
    }

    return { materias: matObj } as GradoContenido;
}

export const BACHILLERATO_1 = crearBachillerato(1, ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"]);
export const BACHILLERATO_2 = crearBachillerato(2, ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"]);
export const BACHILLERATO_3 = crearBachillerato(3, ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"]);
export const BACHILLERATO_4 = crearBachillerato(4, ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"]);
export const BACHILLERATO_5 = crearBachillerato(5, ["matematicas", "espanol", "ciencias", "ingles", "filosofia"]);
export const BACHILLERATO_6 = crearBachillerato(6, ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"]);
