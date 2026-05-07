/**
 * Edge-safe grade lookup utility.
 * 
 * Esbuild truncates large arrays when bundling for Cloudflare Workers edge runtime.
 * The GRADOS array from curriculum.ts loses its last entries (bachillerato-1..6).
 * This module provides a hardcoded fallback map to ensure all grades resolve correctly
 * regardless of the runtime environment.
 */
import { GRADOS } from "@/data/curriculum";

// Hardcoded bachillerato grades — bypasses esbuild array truncation on edge
const BACHILLERATO_FALLBACK: Record<string, typeof GRADOS[number]> = {
    "bachillerato-1": { numero: 1, nombre: "1° Bachillerato", nivel: "bachillerato", slug: "bachillerato-1", emoji: "🔭", color: "#6366F1", gradient: "from-indigo-500 to-purple-600", alumnos: 2100000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"] },
    "bachillerato-2": { numero: 2, nombre: "2° Bachillerato", nivel: "bachillerato", slug: "bachillerato-2", emoji: "📊", color: "#8B5CF6", gradient: "from-violet-500 to-purple-700", alumnos: 1980000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "tecnologia"] },
    "bachillerato-3": { numero: 3, nombre: "3° Bachillerato", nivel: "bachillerato", slug: "bachillerato-3", emoji: "🧪", color: "#A855F7", gradient: "from-purple-500 to-pink-600", alumnos: 1850000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"] },
    "bachillerato-4": { numero: 4, nombre: "4° Bachillerato", nivel: "bachillerato", slug: "bachillerato-4", emoji: "💡", color: "#EC4899", gradient: "from-pink-500 to-rose-600", alumnos: 1720000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"] },
    "bachillerato-5": { numero: 5, nombre: "5° Bachillerato", nivel: "bachillerato", slug: "bachillerato-5", emoji: "🌐", color: "#F59E0B", gradient: "from-amber-500 to-orange-600", alumnos: 1600000, materias: ["matematicas", "espanol", "ciencias", "ingles", "filosofia"] },
    "bachillerato-6": { numero: 6, nombre: "6° Bachillerato", nivel: "bachillerato", slug: "bachillerato-6", emoji: "🏆", color: "#EF4444", gradient: "from-red-500 to-rose-600", alumnos: 1500000, materias: ["matematicas", "espanol", "ciencias", "historia", "ingles", "filosofia"] },
};

const TELESECUNDARIA_FALLBACK: Record<string, typeof GRADOS[number]> = {
    "telesecundaria-1": { numero: 1, nombre: "1° Telesecundaria", nivel: "telesecundaria", slug: "telesecundaria-1", emoji: "📺", color: "#0EA5E9", gradient: "from-sky-400 to-blue-500", alumnos: 500000, materias: ["matematicas", "espanol", "ciencias", "historia", "geografia", "civica", "artes", "ingles", "tecnologia"] },
    "telesecundaria-2": { numero: 2, nombre: "2° Telesecundaria", nivel: "telesecundaria", slug: "telesecundaria-2", emoji: "📺", color: "#06B6D4", gradient: "from-cyan-400 to-blue-500", alumnos: 480000, materias: ["matematicas", "espanol", "ciencias", "historia", "civica", "artes", "ingles", "tecnologia", "fisica"] },
    "telesecundaria-3": { numero: 3, nombre: "3° Telesecundaria", nivel: "telesecundaria", slug: "telesecundaria-3", emoji: "📺", color: "#0891B2", gradient: "from-cyan-500 to-blue-600", alumnos: 460000, materias: ["matematicas", "espanol", "ciencias", "historia", "civica", "artes", "ingles", "tecnologia", "quimica"] },
};

/**
 * Find a grade by slug with edge-safe fallback.
 * First tries GRADOS array, then falls back to hardcoded bachillerato data.
 */
export function findGradoSafe(slug: string): typeof GRADOS[number] | undefined {
    return GRADOS.find((g) => g.slug === slug) || BACHILLERATO_FALLBACK[slug] || TELESECUNDARIA_FALLBACK[slug];
}
