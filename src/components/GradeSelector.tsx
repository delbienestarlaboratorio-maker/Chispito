"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { GRADOS as IMPORTED_GRADOS } from "@/data/curriculum";

// Hardcoded telesecundaria grades — the Edge Runtime esbuild bundler truncates
// the GRADOS array from curriculum.ts, dropping telesecundaria entries.
// By defining them inline, we bypass the bundler truncation.
const TELESECUNDARIA_GRADES = [
    { numero: 1, nombre: "1° Telesecundaria", nivel: "telesecundaria" as const, slug: "telesecundaria-1", emoji: "📺", color: "#0EA5E9", gradient: "from-sky-400 to-cyan-600", alumnos: 500000, materias: ["lenguajes_nem", "saberes_cientificos", "etica_naturaleza", "humano_comunitario", "multiples_lenguajes", "proyectos_nem", "ingles"] },
    { numero: 2, nombre: "2° Telesecundaria", nivel: "telesecundaria" as const, slug: "telesecundaria-2", emoji: "📺", color: "#06B6D4", gradient: "from-cyan-400 to-teal-600", alumnos: 480000, materias: ["lenguajes_nem", "saberes_cientificos", "etica_naturaleza", "humano_comunitario", "multiples_lenguajes", "proyectos_nem", "ingles"] },
    { numero: 3, nombre: "3° Telesecundaria", nivel: "telesecundaria" as const, slug: "telesecundaria-3", emoji: "📺", color: "#0891B2", gradient: "from-teal-400 to-emerald-600", alumnos: 460000, materias: ["lenguajes_nem", "saberes_cientificos", "etica_naturaleza", "humano_comunitario", "multiples_lenguajes", "proyectos_nem", "ingles"] },
];

// Merge imported GRADOS with hardcoded telesecundaria (in case bundler drops them)
const hasTelesecundaria = IMPORTED_GRADOS.some(g => g.nivel === "telesecundaria");
const GRADOS = hasTelesecundaria
    ? IMPORTED_GRADOS
    : [...IMPORTED_GRADOS.filter(g => g.nivel !== "bachillerato"), ...TELESECUNDARIA_GRADES];

const NIVELES = ["preescolar", "primaria", "secundaria", "telesecundaria", "bachillerato"] as const;
const NIVEL_LABELS: Record<string, string> = {
    preescolar: "🌱 Preescolar",
    primaria: "📚 Primaria",
    secundaria: "🎓 Secundaria",
    telesecundaria: "📺 Telesecundaria",
    bachillerato: "🏛️ Bachillerato (Media Superior)",
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
                    const gradosNivel = GRADOS.filter((g) => g.nivel === nivel);
                    return (
                        <div key={nivel} className="mb-12">
                            <h3 className="font-fredoka text-2xl text-white/70 mb-5 px-2">
                                {NIVEL_LABELS[nivel]}
                            </h3>
                            <div className={`grid gap-4 ${nivel === "secundaria" || nivel === "telesecundaria" ? "grid-cols-3 md:grid-cols-3" : "grid-cols-3 md:grid-cols-6"}`}>
                                {gradosNivel.map((grado, i) => (
                                    <motion.div
                                        key={grado.slug}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07 }}
                                    >
                                        <Link href={`/${grado.slug}`}>
                                            <div
                                                className="grade-card p-5 text-center select-none"
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
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
