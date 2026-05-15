"use client";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * ALL grades are hardcoded here to bypass the Esbuild edge/client bundler
 * truncation of large arrays from curriculum.ts.
 * 
 * CRITICAL: If you add a new grade to curriculum.ts, add it here too.
 */

const PREESCOLAR_GRADES = [
    { numero: 1, nombre: "1° Preescolar", nivel: "preescolar" as const, slug: "preescolar-1", emoji: "🌱", color: "#22C55E", alumnos: 1096000 },
    { numero: 2, nombre: "2° Preescolar", nivel: "preescolar" as const, slug: "preescolar-2", emoji: "🌸", color: "#EC4899", alumnos: 1350000 },
    { numero: 3, nombre: "3° Preescolar", nivel: "preescolar" as const, slug: "preescolar-3", emoji: "🌈", color: "#A855F7", alumnos: 1550000 },
];

const PRIMARIA_GRADES = [
    { numero: 1, nombre: "1° Primaria", nivel: "primaria" as const, slug: "primaria-1", emoji: "🚀", color: "#3B82F6", alumnos: 2140000 },
    { numero: 2, nombre: "2° Primaria", nivel: "primaria" as const, slug: "primaria-2", emoji: "🌟", color: "#22C55E", alumnos: 2138000 },
    { numero: 3, nombre: "3° Primaria", nivel: "primaria" as const, slug: "primaria-3", emoji: "🪐", color: "#8B5CF6", alumnos: 2130000 },
    { numero: 4, nombre: "4° Primaria", nivel: "primaria" as const, slug: "primaria-4", emoji: "🧮", color: "#F97316", alumnos: 2120000 },
    { numero: 5, nombre: "5° Primaria", nivel: "primaria" as const, slug: "primaria-5", emoji: "🔬", color: "#14B8A6", alumnos: 2110000 },
    { numero: 6, nombre: "6° Primaria", nivel: "primaria" as const, slug: "primaria-6", emoji: "🌍", color: "#F43F5E", alumnos: 2100000 },
];

const SECUNDARIA_GRADES = [
    { numero: 1, nombre: "1° Secundaria", nivel: "secundaria" as const, slug: "secundaria-1", emoji: "⚗️", color: "#6366F1", alumnos: 2200000 },
    { numero: 2, nombre: "2° Secundaria", nivel: "secundaria" as const, slug: "secundaria-2", emoji: "📡", color: "#EAB308", alumnos: 2100000 },
    { numero: 3, nombre: "3° Secundaria", nivel: "secundaria" as const, slug: "secundaria-3", emoji: "🎓", color: "#EC4899", alumnos: 1993000 },
];

const TELESECUNDARIA_GRADES = [
    { numero: 1, nombre: "1° Telesecundaria", nivel: "telesecundaria" as const, slug: "telesecundaria-1", emoji: "📺", color: "#0EA5E9", alumnos: 500000 },
    { numero: 2, nombre: "2° Telesecundaria", nivel: "telesecundaria" as const, slug: "telesecundaria-2", emoji: "📺", color: "#06B6D4", alumnos: 480000 },
    { numero: 3, nombre: "3° Telesecundaria", nivel: "telesecundaria" as const, slug: "telesecundaria-3", emoji: "📺", color: "#0891B2", alumnos: 460000 },
];

const BACHILLERATO_GRADES = [
    { numero: 1, nombre: "1° Bachillerato", nivel: "bachillerato" as const, slug: "bachillerato-1", emoji: "📐", color: "#6366F1", alumnos: 2100000 },
    { numero: 2, nombre: "2° Bachillerato", nivel: "bachillerato" as const, slug: "bachillerato-2", emoji: "⚗️", color: "#8B5CF6", alumnos: 1980000 },
    { numero: 3, nombre: "3° Bachillerato", nivel: "bachillerato" as const, slug: "bachillerato-3", emoji: "🧬", color: "#A855F7", alumnos: 1850000 },
    { numero: 4, nombre: "4° Bachillerato", nivel: "bachillerato" as const, slug: "bachillerato-4", emoji: "🔭", color: "#EC4899", alumnos: 1720000 },
    { numero: 5, nombre: "5° Bachillerato", nivel: "bachillerato" as const, slug: "bachillerato-5", emoji: "💡", color: "#F59E0B", alumnos: 1600000 },
    { numero: 6, nombre: "6° Bachillerato", nivel: "bachillerato" as const, slug: "bachillerato-6", emoji: "🏆", color: "#EF4444", alumnos: 1500000 },
];

const PREPA_CARDS = [
    { id: "simulador-unam", titulo: "Simulador UNAM", subtitulo: "Examen 120 Reactivos", emoji: "🦅", color: "#EAB308", href: "https://prepa.chispito.mx/unam/simulador" },
    { id: "catalogo-ecoems", titulo: "Catálogo ECOEMS", subtitulo: "Prepas sin examen CDMX", emoji: "🏛️", color: "#3B82F6", href: "https://prepa.chispito.mx/ecoems/escuelas" },
    { id: "blog-prepa", titulo: "Guías de Estudio", subtitulo: "Blog CCH, IPN, ENP", emoji: "📚", color: "#10B981", href: "https://prepa.chispito.mx/blog" },
];

// Map each nivel to its hardcoded grades array
const GRADES_BY_NIVEL: Record<string, typeof PREESCOLAR_GRADES> = {
    preescolar: PREESCOLAR_GRADES,
    primaria: PRIMARIA_GRADES,
    secundaria: SECUNDARIA_GRADES,
    telesecundaria: TELESECUNDARIA_GRADES,
    bachillerato: BACHILLERATO_GRADES,
};

const NIVELES = ["preescolar", "primaria", "secundaria", "telesecundaria", "bachillerato"] as const;
const NIVEL_LABELS: Record<string, string> = {
    preescolar: "🌱 Preescolar",
    primaria: "📚 Primaria",
    secundaria: "🎓 Secundaria",
    telesecundaria: "📺 Telesecundaria",
    bachillerato: "🏛️ Bachillerato (Preparatoria)",
};

export default function GradeSelector() {
    return (
        <section id="grados" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-3">
                        ¿En qué grado estás?
                    </h2>
                    <p className="text-white/60 text-lg max-w-xl mx-auto">
                        Selecciona el grado y te mostramos exactamente los temas que verás{" "}
                        <strong className="text-white">este mes</strong> según los libros de la SEP.
                    </p>
                </motion.div>

                {/* Grupos por nivel */}
                {NIVELES.map((nivel) => {
                    const gradosNivel = GRADES_BY_NIVEL[nivel] || [];
                    return (
                        <div key={nivel} className="mb-12">
                            <h3 className="font-fredoka text-2xl text-white/70 mb-5 px-2">
                                {NIVEL_LABELS[nivel]}
                            </h3>

                            {/* BACHILLERATO (PREPA.CHISPITO.MX + GRADOS INTERNOS) */}
                            {nivel === "bachillerato" && (
                                <div className="space-y-6">
                                    {/* Grados de Bachillerato 1-6 */}
                                    <div className="grid gap-4 grid-cols-3 md:grid-cols-6">
                                        {BACHILLERATO_GRADES.map((grado, i) => (
                                            <motion.div
                                                key={grado.slug}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.07 }}
                                            >
                                                <a href={`/${grado.slug}`}>
                                                    <div
                                                        className="grade-card p-5 text-center select-none transition-all group-hover:scale-105"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${grado.color}22, ${grado.color}11)`,
                                                        }}
                                                    >
                                                        <div className="text-4xl mb-2">{grado.emoji}</div>
                                                        <div
                                                            className="font-fredoka text-lg leading-tight"
                                                            style={{ color: grado.color }}
                                                        >
                                                            {grado.numero}°
                                                        </div>
                                                        <div className="text-xs text-white/50 mt-1">Bachillerato</div>
                                                        <div className="text-xs text-white/30 mt-1">
                                                            {(grado.alumnos / 1000000).toFixed(1)}M alumnos
                                                        </div>
                                                    </div>
                                                </a>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Herramientas Prepa */}
                                    <p className="text-white/40 text-xs uppercase tracking-wider font-bold text-center">🛠️ Herramientas de Admisión</p>
                                    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                                        {PREPA_CARDS.map((card, i) => (
                                            <motion.div
                                                key={card.id}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.07 }}
                                            >
                                                <a href={card.href} className="block group">
                                                    <div
                                                        className="grade-card p-6 text-center select-none h-full flex flex-col items-center justify-center transition-all group-hover:scale-105"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${card.color}22, ${card.color}11)`,
                                                            border: `1px solid ${card.color}33`,
                                                        }}
                                                    >
                                                        <div className="text-5xl mb-3">{card.emoji}</div>
                                                        <div
                                                            className="font-fredoka text-xl leading-tight mb-1"
                                                            style={{ color: card.color }}
                                                        >
                                                            {card.titulo}
                                                        </div>
                                                        <div className="text-sm text-white/60">
                                                            {card.subtitulo}
                                                        </div>
                                                    </div>
                                                </a>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* TELESECUNDARIA */}
                            {nivel === "telesecundaria" && (
                                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                                    {TELESECUNDARIA_GRADES.map((grado, i) => (
                                        <motion.div
                                            key={grado.slug}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.07 }}
                                        >
                                            <a href={`/${grado.slug}`}>
                                                <div
                                                    className="grade-card p-5 text-center select-none transition-all group-hover:scale-105"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${grado.color}22, ${grado.color}11)`,
                                                    }}
                                                >
                                                    <div className="text-4xl mb-2">{grado.emoji}</div>
                                                    <div
                                                        className="font-fredoka text-lg leading-tight"
                                                        style={{ color: grado.color }}
                                                    >
                                                        {grado.numero}°
                                                    </div>
                                                    <div className="text-xs text-white/50 mt-1 capitalize">
                                                        {grado.nivel}
                                                    </div>
                                                    <div className="text-xs text-white/30 mt-1">
                                                        {(grado.alumnos / 1000000).toFixed(1)}M alumnos
                                                    </div>
                                                </div>
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* PREESCOLAR, PRIMARIA, SECUNDARIA — all hardcoded */}
                            {nivel !== "bachillerato" && nivel !== "telesecundaria" && (
                                <div className={`grid gap-4 ${nivel === "secundaria" ? "grid-cols-3 md:grid-cols-3" : "grid-cols-3 md:grid-cols-6"}`}>
                                    {gradosNivel.map((grado, i) => (
                                        <motion.div
                                            key={grado.slug}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.07 }}
                                        >
                                            <a href={`/${grado.slug}`}>
                                                <div
                                                    className="grade-card p-5 text-center select-none transition-all group-hover:scale-105"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${grado.color}22, ${grado.color}11)`,
                                                    }}
                                                >
                                                    <div className="text-4xl mb-2">{grado.emoji}</div>
                                                    <div
                                                        className="font-fredoka text-lg leading-tight"
                                                        style={{ color: grado.color }}
                                                    >
                                                        {grado.numero}°
                                                    </div>
                                                    <div className="text-xs text-white/50 mt-1 capitalize">
                                                        {grado.nivel}
                                                    </div>
                                                    <div className="text-xs text-white/30 mt-1">
                                                        {(grado.alumnos / 1000000).toFixed(1)}M alumnos
                                                    </div>
                                                </div>
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                        </div>
                    );
                })}
            </div>
        </section>
    );
}
