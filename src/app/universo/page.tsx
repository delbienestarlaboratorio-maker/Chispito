"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import TarjetasColeccionables from "@/components/TarjetasColeccionables";

// ══════════════════════════════════════════════════════════════════════
//  DATOS DEL UNIVERSO NICO — la historia completa grado a grado
// ══════════════════════════════════════════════════════════════════════

import { CAPITULOS } from "@/data/universo-historia";

// ══════════════════════════════════════════════════════════════════════
//  COMPONENTES VISUALES
// ══════════════════════════════════════════════════════════════════════

function PanelViñeta({ panel, index }: {
    panel: {
        tipo: string; texto: string; emoji?: string; color: string;
        burbuja?: boolean; personaje?: string; especial?: boolean; imagen?: string;
    };
    index: number;
}) {
    const esDialogo = panel.tipo === "dialogo" || panel.burbuja;
    const esCierre = panel.tipo === "cierre";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
            className={`relative rounded-2xl overflow-hidden ${esCierre || panel.especial ? "col-span-2" : ""}`}
            style={{
                border: panel.especial ? "3px solid rgba(255,255,255,0.4)" : "2px solid rgba(255,255,255,0.12)",
                boxShadow: panel.especial ? "0 0 30px rgba(255,255,255,0.15)" : "none",
            }}
        >
            <div className={`bg-gradient-to-br ${panel.color} p-5 h-full min-h-[120px] flex flex-col justify-between`}>
                {panel.imagen && (
                    <div className="relative w-full h-48 md:h-56 mb-4 rounded-xl overflow-hidden shadow-lg" style={{ border: '2px solid rgba(255,255,255,0.2)' }}>
                        <Image src={panel.imagen} alt="Escena" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                    </div>
                )}
                {/* Tipo label */}
                <div className="flex items-center gap-2 mb-3">
                    {panel.emoji && (
                        <span className="text-2xl" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}>
                            {panel.emoji}
                        </span>
                    )}
                    {esDialogo && panel.personaje && (
                        <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
                            {panel.personaje} dice:
                        </span>
                    )}
                    {panel.tipo === "narrador" && (
                        <span className="text-xs font-bold text-white/50 uppercase tracking-wider italic">Narrador</span>
                    )}
                </div>

                {/* Texto */}
                <p
                    className="text-white leading-snug"
                    style={{
                        fontSize: panel.especial ? "1.1rem" : "0.92rem",
                        fontWeight: esDialogo ? 600 : 400,
                        fontStyle: panel.tipo === "narrador" ? "italic" : "normal",
                        textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                    }}
                >
                    {panel.texto}
                </p>

                {/* Decoración panel especial */}
                {panel.especial && (
                    <div className="absolute top-2 right-2 opacity-20">
                        <span className="text-4xl">⭐</span>
                    </div>
                )}

                {/* Borde viñeta */}
                {esDialogo && (
                    <div
                        className="absolute -left-1 top-1/2 w-3 h-3 rotate-45"
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            border: "2px solid rgba(255,255,255,0.15)",
                            transform: "translateY(-50%) rotate(45deg)",
                        }}
                    />
                )}
            </div>
        </motion.div>
    );
}

function CapituloCard({ cap, isOpen, onClick, index }: {
    cap: (typeof CAPITULOS)[0];
    isOpen: boolean;
    onClick: () => void;
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
            className="mb-6"
        >
            {/* Cabecera del capítulo — siempre visible */}
            <motion.button
                onClick={onClick}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full bg-gradient-to-r ${cap.colorFondo} rounded-3xl p-6 text-left relative overflow-hidden`}
                style={{ border: isOpen ? `2px solid ${cap.colorAcento}` : "2px solid rgba(255,255,255,0.1)" }}
            >
                {/* Fondo decorativo */}
                <div className="absolute inset-0 opacity-5">
                    <div className="text-[200px] leading-none absolute -right-8 -top-8 select-none">
                        {cap.emoji}
                    </div>
                </div>

                <div className="relative flex items-center gap-5">
                    {/* Personajes */}
                    <div className="flex flex-col items-center shrink-0">
                        <motion.span
                            animate={isOpen ? { y: [0, -5, 0] } : {}}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-5xl block"
                            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" }}
                        >
                            {cap.emojiNico}
                        </motion.span>
                        <motion.span
                            animate={isOpen ? { y: [0, -3, 0] } : {}}
                            transition={{ duration: 1.3, repeat: Infinity, delay: 0.3 }}
                            className="text-3xl block -mt-2"
                            style={{ filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.4))" }}
                        >
                            {cap.emojiPersonaje}
                        </motion.span>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                        <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">
                            {cap.subtitulo}
                        </p>
                        <h2 className="text-white font-fredoka text-2xl md:text-3xl leading-tight">
                            {cap.titulo}
                        </h2>
                        <div className="flex items-center gap-2 mt-2">
                            <span
                                className="text-xs font-bold px-3 py-1 rounded-full"
                                style={{ background: cap.colorAcento + "40", color: cap.colorAcento, border: `1px solid ${cap.colorAcento}40` }}
                            >
                                {cap.personaje} {cap.emojiPersonaje}
                            </span>
                            <span className="text-white/30 text-xs">{isOpen ? "▲ cerrar" : "▼ leer historia"}</span>
                        </div>
                    </div>
                </div>
            </motion.button>

            {/* Historia desplegable */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                    >
                        <div
                            className={`bg-gradient-to-b ${cap.colorFondo} rounded-b-3xl px-6 pb-8 pt-4`}
                            style={{ borderLeft: `2px solid ${cap.colorAcento}50`, borderRight: `2px solid ${cap.colorAcento}50`, borderBottom: `2px solid ${cap.colorAcento}50` }}
                        >
                            {/* Imagen de escena principal */}
                            {cap.imagenEscena && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className="mb-6 rounded-2xl overflow-hidden"
                                    style={{ border: `2px solid ${cap.colorAcento}40` }}
                                >
                                    <Image
                                        src={cap.imagenEscena}
                                        alt={`Escena: ${cap.titulo}`}
                                        width={800}
                                        height={450}
                                        className="w-full object-cover"
                                    />
                                </motion.div>
                            )}

                            {/* Viñetas por sección */}
                            {cap.viñetas.map((viñeta, vi) => (
                                <div key={vi} className="mb-6">
                                    {/* Separador de escena */}
                                    {vi > 0 && (
                                        <div className="flex items-center gap-3 my-5 opacity-40">
                                            <div className="flex-1 h-px" style={{ background: cap.colorAcento }} />
                                            <span className="text-xs" style={{ color: cap.colorAcento }}>• • •</span>
                                            <div className="flex-1 h-px" style={{ background: cap.colorAcento }} />
                                        </div>
                                    )}
                                    <div className="grid grid-cols-2 gap-3">
                                        {viñeta.panels.map((panel, pi) => (
                                            <PanelViñeta key={pi} panel={panel} index={vi * 4 + pi} />
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Segunda imagen de escena si existe */}
                            {(cap as any).imagenEscena2 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-4 rounded-2xl overflow-hidden"
                                    style={{ border: `2px solid ${cap.colorAcento}30` }}
                                >
                                    <Image
                                        src={(cap as any).imagenEscena2}
                                        alt={`Escena 2: ${cap.titulo}`}
                                        width={800}
                                        height={450}
                                        className="w-full object-cover"
                                    />
                                </motion.div>
                            )}

                            {/* Frase final */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="mt-6 p-4 rounded-2xl text-center"
                                style={{ background: "rgba(0,0,0,0.3)", border: `1px solid ${cap.colorAcento}40` }}
                            >
                                <p className="text-sm italic font-medium" style={{ color: cap.colorFrase }}>
                                    {cap.fraseFinal}
                                </p>
                            </motion.div>

                            {/* CTA */}
                            <Link href={cap.gradoLink}>
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="mt-4 p-4 rounded-2xl text-center cursor-pointer font-bold text-white"
                                    style={{ background: `linear-gradient(135deg, ${cap.colorAcento}60, ${cap.colorAcento}30)`, border: `2px solid ${cap.colorAcento}60` }}
                                >
                                    ¡Practica con {cap.emojiNico} y {cap.emojiPersonaje} en {cap.subtitulo.split("—")[0].trim()} →
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ══════════════════════════════════════════════════════════════════════
//  PÁGINA PRINCIPAL
// ══════════════════════════════════════════════════════════════════════

export default function UniversoPage() {
    const [capituloAbierto, setCapituloAbierto] = useState<number | null>(0);
    const [estrellasVolando, setEstrellasVolando] = useState(false);

    useEffect(() => {
        setEstrellasVolando(true);
    }, []);

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />

            {/* ── HERO ÉPICO ─────────────────────────────────────────────── */}
            <section
                className="relative pt-24 pb-16 px-4 overflow-hidden text-center"
                style={{
                    background: "linear-gradient(180deg, #0a0015 0%, #050022 40%, var(--navy) 100%)",
                    minHeight: "60vh",
                }}
            >
                {/* Estrellas de fondo animadas */}
                {estrellasVolando && Array.from({ length: 60 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: Math.random() * 3 + 1,
                            height: Math.random() * 3 + 1,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: `hsl(${Math.random() * 60 + 200}, 80%, ${70 + Math.random() * 30}%)`,
                        }}
                        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                        transition={{ duration: 1 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
                    />
                ))}

                {/* Ilustración del universo completo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="relative w-full mx-auto mb-16 px-4"
                    style={{ maxWidth: 1200 }}
                >
                    <div
                        className="rounded-[2rem] md:rounded-[3rem] overflow-hidden mx-auto w-full"
                        style={{
                            border: "4px solid rgba(167,139,250,0.5)",
                            boxShadow: "0 0 80px rgba(167,139,250,0.4), 0 0 160px rgba(99,60,180,0.3)",
                            maxWidth: 1100,
                        }}
                    >
                        <Image
                            src="/personajes/universo.png"
                            alt="El universo completo de Chispito — Nico y todos sus amigos"
                            width={1100}
                            height={620}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Personajes flotando alrededor */}
                    {["🚀", "🌸", "⭐", "🌙", "☁️", "🦕"].map((emoji, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-4xl md:text-6xl hidden sm:block z-10"
                            style={{
                                top: `${[5, 20, -10, 80, 95, 50][i]}%`,
                                left: `${[-5, 95, 50, -5, 90, 98][i]}%`,
                                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
                            }}
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, i % 2 === 0 ? 15 : -15, 0],
                            }}
                            transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {emoji}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Título épico */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase"
                        style={{ background: "rgba(167,139,250,0.15)", border: "1px solid rgba(167,139,250,0.3)", color: "#A78BFA" }}
                    >
                        ⚡ UNIVERSO CHISPITO — Las historias que cambian todo
                    </div>
                    <h1 className="font-fredoka text-5xl md:text-7xl text-white mb-4 leading-tight">
                        🚀 La Historia de{" "}
                        <span style={{ color: "#FFD60A", textShadow: "0 0 30px #FFD60A80" }}>Nico</span>
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Desde su primer día en Kinder hasta graduarse de 3° Secundaria.<br />
                        <strong className="text-white/80">10 grados. 10 amigos. Una historia que crece contigo.</strong>
                    </p>
                </motion.div>

                {/* Stats del universo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-6 mt-8 flex-wrap"
                >
                    {[
                        { num: "10", label: "Personajes", emoji: "👥" },
                        { num: "9", label: "Años de historia", emoji: "📅" },
                        { num: "Eli 🌸", label: "Amor de Nico", emoji: "❤️" },
                        { num: "∞", label: "Aventuras por vivir", emoji: "🌌" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="font-fredoka text-2xl text-white">{stat.emoji} {stat.num}</div>
                            <div className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* ── PRESENTACIÓN DE NICO ──────────────────────────────────── */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div
                                className="rounded-3xl overflow-hidden"
                                style={{ border: "3px solid rgba(59,130,246,0.5)", boxShadow: "0 0 40px rgba(59,130,246,0.2)" }}
                            >
                                <Image
                                    src="/personajes/nico.png"
                                    alt="Nico — el pequeño cohete aventurero"
                                    width={500}
                                    height={500}
                                    className="w-full object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="inline-block mb-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                style={{ background: "rgba(59,130,246,0.2)", color: "#60A5FA", border: "1px solid rgba(59,130,246,0.3)" }}
                            >
                                El protagonista
                            </div>
                            <h2 className="font-fredoka text-4xl text-white mb-4">
                                🚀 Nico, el Cohete Más Curioso del Universo
                            </h2>
                            <p className="text-white/70 leading-relaxed mb-4">
                                Nico nació en el rincón más tranquilo del cosmos, entre nebulosas azules y estrellas que cantan. Desde pequeño, tuvo una pregunta favorita que nunca deja de hacerse:
                            </p>
                            <div
                                className="p-4 rounded-2xl mb-4"
                                style={{ background: "rgba(59,130,246,0.15)", border: "2px solid rgba(59,130,246,0.3)" }}
                            >
                                <p className="text-blue-300 font-bold text-xl text-center">"¿Por qué... y cómo?"</p>
                            </div>
                            <p className="text-white/60 leading-relaxed">
                                A lo largo de los años, Nico encontró amigos increíbles que lo acompañaron en cada etapa. Juntos, demostraron que aprender no es una obligación — es la aventura más grande del universo.
                            </p>
                        </motion.div>
                    </div>

                    {/* Eli presentación especial */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-16"
                    >
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="inline-block mb-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                                    style={{ background: "rgba(244,114,182,0.2)", color: "#F472B6", border: "1px solid rgba(244,114,182,0.3)" }}
                                >
                                    ❤️ El personaje especial
                                </div>
                                <h2 className="font-fredoka text-4xl text-white mb-4">
                                    🌸 Eli, la Flor Más Lista del Salón
                                </h2>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    Eli llegó a la vida de Nico en 3° primaria, y nada volvió a ser igual. Es la estudiante más brillante del salón, apasionada de las ciencias y con una curiosidad que no cabe en un libro.
                                </p>
                                <div
                                    className="p-4 rounded-2xl"
                                    style={{ background: "rgba(244,114,182,0.1)", border: "2px solid rgba(244,114,182,0.3)" }}
                                >
                                    <p className="text-pink-300 text-sm italic">
                                        "Lo que Eli no sabe es que cada vez que responde en clase, Nico sus turbinas se calientan un poco más." 🚀🌸
                                    </p>
                                </div>
                            </div>
                            <div
                                className="rounded-3xl overflow-hidden"
                                style={{ border: "3px solid rgba(244,114,182,0.4)", boxShadow: "0 0 40px rgba(244,114,182,0.2)" }}
                            >
                                <Image
                                    src="/personajes/eli.png"
                                    alt="Eli — la flor más lista de la clase"
                                    width={500}
                                    height={500}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Instrucción */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-center mb-10"
                    >
                        <h2 className="font-fredoka text-3xl text-white mb-2">📖 Lee su Historia Grado a Grado</h2>
                        <p className="text-white/50">Haz click en cada capítulo para leer la historia completa en estilo cómic</p>
                    </motion.div>

                    {/* Capítulos */}
                    <div>
                        {CAPITULOS.map((cap, i) => (
                            <CapituloCard
                                key={cap.grado}
                                cap={cap}
                                index={i}
                                isOpen={capituloAbierto === i}
                                onClick={() => setCapituloAbierto(capituloAbierto === i ? null : i)}
                            />
                        ))}
                    </div>

                    {/* Sección de tarjetas coleccionables */}
                    <TarjetasColeccionables />

                    {/* Final épico */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-center mt-16 p-10 rounded-3xl"
                        style={{
                            background: "linear-gradient(135deg, rgba(99,60,180,0.3), rgba(30,10,80,0.6))",
                            border: "2px solid rgba(167,139,250,0.3)",
                        }}
                    >
                        <div className="text-6xl mb-4">🚀🌸⭐🌙☁️🦕🔬📐⚡📖🌌</div>
                        <h2 className="font-fredoka text-4xl text-white mb-4">¿Y tú, en qué grado estás?</h2>
                        <p className="text-white/60 mb-6 text-lg">
                            Nico y sus amigos te están esperando en cada ejercicio.<br />
                            Tu historia también está empezando.
                        </p>
                        <Link href="/#grados">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-fredoka text-xl text-white cursor-pointer"
                                style={{ background: "linear-gradient(135deg, #7C3AED, #4F46E5)", boxShadow: "0 0 30px rgba(99,60,180,0.5)" }}
                            >
                                ⚡ ¡Empezar mi aventura con Nico! →
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/20 text-sm border-t border-white/5">
                <p>🚀 El Universo Chispito crece con cada niño que aprende.</p>
            </footer>
        </main>
    );
}
