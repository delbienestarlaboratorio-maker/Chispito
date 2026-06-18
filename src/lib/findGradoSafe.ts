/**
 * Edge-safe grade lookup utility.
 * 
 * Esbuild truncates large arrays when bundling for Cloudflare Workers edge runtime.
 * The GRADOS array from curriculum.ts loses entries unpredictably.
 * This module provides a COMPLETE hardcoded fallback map for ALL grades to ensure
 * every grade resolves correctly regardless of the runtime environment.
 * 
 * CRITICAL: Every grade in curriculum.ts MUST have a corresponding entry here.
 * If you add a new grade to curriculum.ts, add it here too.
 */
import { GRADOS } from "@/data/curriculum";

// Complete hardcoded fallback for ALL grades — bypasses esbuild array truncation on edge
const ALL_GRADES_FALLBACK: Record<string, typeof GRADOS[number]> = {
    // PREESCOLAR
    "preescolar-1": { numero: 1, nombre: "1° Preescolar", nivel: "preescolar", slug: "preescolar-1", emoji: "🌱", color: "#22C55E", gradient: "from-green-400 to-emerald-600", alumnos: 1096000, materias: ["matematicas", "espanol", "conocimiento", "artes", "educacion_fisica"] },
    "preescolar-2": { numero: 2, nombre: "2° Preescolar", nivel: "preescolar", slug: "preescolar-2", emoji: "🌸", color: "#EC4899", gradient: "from-pink-400 to-rose-600", alumnos: 1350000, materias: ["matematicas", "espanol", "conocimiento", "artes", "educacion_fisica"] },
    "kinder": { numero: 3, nombre: "Kinder", nivel: "preescolar", slug: "kinder", emoji: "🌈", color: "#F97316", gradient: "from-orange-400 to-amber-600", alumnos: 1550000, materias: ["matematicas", "espanol", "conocimiento", "artes", "educacion_fisica"] },
    "preescolar-3": { numero: 3, nombre: "3° Preescolar", nivel: "preescolar", slug: "preescolar-3", emoji: "🌈", color: "#A855F7", gradient: "from-purple-400 to-violet-600", alumnos: 1550000, materias: ["matematicas", "espanol", "conocimiento", "educacion_fisica"] },
    // PRIMARIA
    "primaria-1": { numero: 1, nombre: "1° Primaria", nivel: "primaria", slug: "primaria-1", emoji: "🚀", color: "#3B82F6", gradient: "from-blue-400 to-indigo-600", alumnos: 2140000, materias: ["matematicas", "espanol", "lenguas", "conocimiento", "formacion", "artes", "educacion_fisica"] },
    "primaria-2": { numero: 2, nombre: "2° Primaria", nivel: "primaria", slug: "primaria-2", emoji: "🌟", color: "#22C55E", gradient: "from-green-400 to-teal-600", alumnos: 2138000, materias: ["matematicas", "espanol", "lenguas", "conocimiento", "formacion", "artes", "educacion_fisica"] },
    "primaria-3": { numero: 3, nombre: "3° Primaria", nivel: "primaria", slug: "primaria-3", emoji: "🪐", color: "#8B5CF6", gradient: "from-violet-400 to-purple-600", alumnos: 2130000, materias: ["matematicas", "espanol", "lenguas", "historia", "ciencias", "formacion", "artes", "ingles", "educacion_fisica"] },
    "primaria-4": { numero: 4, nombre: "4° Primaria", nivel: "primaria", slug: "primaria-4", emoji: "🧮", color: "#F97316", gradient: "from-orange-400 to-red-500", alumnos: 2120000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "artes", "ingles", "educacion_fisica"] },
    "primaria-5": { numero: 5, nombre: "5° Primaria", nivel: "primaria", slug: "primaria-5", emoji: "🔬", color: "#14B8A6", gradient: "from-teal-400 to-cyan-600", alumnos: 2110000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "artes", "ingles", "educacion_fisica"] },
    "primaria-6": { numero: 6, nombre: "6° Primaria", nivel: "primaria", slug: "primaria-6", emoji: "🌍", color: "#F43F5E", gradient: "from-rose-400 to-pink-600", alumnos: 2100000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "artes", "ingles", "educacion_fisica"] },
    // SECUNDARIA
    "secundaria-1": { numero: 1, nombre: "1° Secundaria", nivel: "secundaria", slug: "secundaria-1", emoji: "⚗️", color: "#6366F1", gradient: "from-indigo-400 to-violet-600", alumnos: 2200000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "ingles", "tecnologia", "artes", "educacion_fisica"] },
    "secundaria-2": { numero: 2, nombre: "2° Secundaria", nivel: "secundaria", slug: "secundaria-2", emoji: "📡", color: "#EAB308", gradient: "from-yellow-400 to-orange-500", alumnos: 2100000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "ingles", "tecnologia", "artes", "educacion_fisica"] },
    "secundaria-3": { numero: 3, nombre: "3° Secundaria", nivel: "secundaria", slug: "secundaria-3", emoji: "🎓", color: "#EC4899", gradient: "from-fuchsia-400 to-purple-600", alumnos: 1993000, materias: ["matematicas", "espanol", "historia", "ciencias", "geografia", "formacion", "ingles", "tecnologia", "artes", "educacion_fisica", "orientacion"] },
    // TELESECUNDARIA
    "telesecundaria-1": { numero: 1, nombre: "1° Telesecundaria", nivel: "telesecundaria", slug: "telesecundaria-1", emoji: "📺", color: "#0EA5E9", gradient: "from-sky-400 to-cyan-600", alumnos: 500000, materias: ["lenguajes_nem", "saberes_cientificos", "etica_naturaleza", "humano_comunitario", "multiples_lenguajes", "proyectos_nem", "ingles"] },
    "telesecundaria-2": { numero: 2, nombre: "2° Telesecundaria", nivel: "telesecundaria", slug: "telesecundaria-2", emoji: "📺", color: "#06B6D4", gradient: "from-cyan-400 to-teal-600", alumnos: 480000, materias: ["lenguajes_nem", "saberes_cientificos", "etica_naturaleza", "humano_comunitario", "multiples_lenguajes", "proyectos_nem", "ingles"] },
    "telesecundaria-3": { numero: 3, nombre: "3° Telesecundaria", nivel: "telesecundaria", slug: "telesecundaria-3", emoji: "📺", color: "#0891B2", gradient: "from-teal-400 to-emerald-600", alumnos: 460000, materias: ["lenguajes_nem", "saberes_cientificos", "etica_naturaleza", "humano_comunitario", "multiples_lenguajes", "proyectos_nem", "ingles"] },
    // BACHILLERATO
    "bachillerato-1": { numero: 1, nombre: "1° Bachillerato", nivel: "bachillerato", slug: "bachillerato-1", emoji: "📐", color: "#6366F1", gradient: "from-indigo-500 to-purple-600", alumnos: 2100000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"] },
    "bachillerato-2": { numero: 2, nombre: "2° Bachillerato", nivel: "bachillerato", slug: "bachillerato-2", emoji: "⚗️", color: "#8B5CF6", gradient: "from-violet-500 to-purple-700", alumnos: 1980000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"] },
    "bachillerato-3": { numero: 3, nombre: "3° Bachillerato", nivel: "bachillerato", slug: "bachillerato-3", emoji: "🧬", color: "#A855F7", gradient: "from-purple-500 to-pink-600", alumnos: 1850000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"] },
    "bachillerato-4": { numero: 4, nombre: "4° Bachillerato", nivel: "bachillerato", slug: "bachillerato-4", emoji: "🔭", color: "#EC4899", gradient: "from-pink-500 to-rose-600", alumnos: 1720000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"] },
    "bachillerato-5": { numero: 5, nombre: "5° Bachillerato", nivel: "bachillerato", slug: "bachillerato-5", emoji: "💡", color: "#F59E0B", gradient: "from-amber-500 to-orange-600", alumnos: 1600000, materias: ["matematicas", "espanol", "ciencias", "ingles", "filosofia"] },
    "bachillerato-6": { numero: 6, nombre: "6° Bachillerato", nivel: "bachillerato", slug: "bachillerato-6", emoji: "🏆", color: "#EF4444", gradient: "from-red-500 to-rose-600", alumnos: 1500000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"] },
};

/**
 * Find a grade by slug with edge-safe fallback.
 * First tries GRADOS array (runtime), then falls back to complete hardcoded map.
 * This guarantees that esbuild array truncation never causes a 404.
 */
export function findGradoSafe(slug: string): typeof GRADOS[number] | undefined {
    return GRADOS.find((g) => g.slug === slug) || ALL_GRADES_FALLBACK[slug];
}

export const ALL_GRADES_SLUGS = Object.keys(ALL_GRADES_FALLBACK);
