"use client";
import { motion } from "framer-motion";

const TESTIMONIOS = [
    {
        nombre: "Gabriela M.",
        ciudad: "Guadalajara, Jal.",
        grado: "Mamá de alumno de 2° Primaria",
        texto: "Mi hijo no quería hacer tarea, ahora me pide 'el de Chispito'. Los ejercicios son exactamente lo que ven en clase, eso me da mucha tranquilidad.",
        estrellas: 5,
        iniciales: "GM",
        color: "#4ECDC4",
    },
    {
        nombre: "Roberto S.",
        ciudad: "Monterrey, N.L.",
        grado: "Papá de alumna de 5° Primaria",
        texto: "Por fin algo que sigue el libro de la SEP. Antes imprimía hojas de internet que no tenían nada que ver con lo que mi hija veía en la escuela.",
        estrellas: 5,
        iniciales: "RS",
        color: "#FFD60A",
    },
    {
        nombre: "María Elena T.",
        ciudad: "Puebla, Pue.",
        grado: "Mamá de alumno de 1° Secundaria",
        texto: "Lo uso en el celular mientras mi hijo hace la tarea. La sección 'Este mes en clase' es oro puro. Sé exactamente qué tema están viendo.",
        estrellas: 5,
        iniciales: "MT",
        color: "#FF6B6B",
    },
    {
        nombre: "Ana Laura D.",
        ciudad: "CDMX",
        grado: "Mamá de alumna de Kínder",
        texto: "A mi niña le encantan los ejercicios de preescolar. Son coloridos y fáciles de entender. Lo mejor: ¡son gratis!",
        estrellas: 5,
        iniciales: "AD",
        color: "#A78BFA",
    },
    {
        nombre: "José Luis R.",
        ciudad: "León, Gto.",
        grado: "Papá de alumno de 3° Primaria",
        texto: "Soy maestro y lo recomiendo a los papás de mis alumnos. Está perfectamente alineado al programa de la SEP. Muy profesional.",
        estrellas: 5,
        iniciales: "JR",
        color: "#34D399",
    },
    {
        nombre: "Claudia V.",
        ciudad: "Mérida, Yuc.",
        grado: "Mamá de 2 hijos en Primaria",
        texto: "Tengo uno en 2° y otro en 4°. Con Chispito puedo ayudarlos a los dos con el mismo sitio. Me ahorra horas de buscar material.",
        estrellas: 5,
        iniciales: "CV",
        color: "#F59E0B",
    },
];

function Estrellas({ n }: { n: number }) {
    return (
        <div className="flex gap-0.5 mb-2">
            {Array.from({ length: n }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
        </div>
    );
}

export default function Testimonios() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-fredoka text-3xl md:text-4xl text-white mb-3"
                    >
                        💬 Lo que dicen los papás
                    </motion.h2>
                    <p className="text-white/50 text-lg">
                        Miles de familias ya usan Chispito todos los días
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {TESTIMONIOS.map((t, i) => (
                        <motion.div
                            key={t.nombre}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="rounded-2xl p-5 relative overflow-hidden"
                            style={{
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.08)",
                            }}
                        >
                            {/* Estrellas */}
                            <Estrellas n={t.estrellas} />

                            {/* Reseña */}
                            <p className="text-white/80 text-sm leading-relaxed mb-4">
                                &ldquo;{t.texto}&rdquo;
                            </p>

                            {/* Autor */}
                            <div className="flex items-center gap-3">
                                {/* Avatar con iniciales */}
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                                    style={{
                                        background: `${t.color}22`,
                                        color: t.color,
                                        border: `2px solid ${t.color}44`,
                                    }}
                                >
                                    {t.iniciales}
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold">
                                        {t.nombre}
                                    </p>
                                    <p className="text-white/40 text-xs">
                                        {t.grado} • {t.ciudad}
                                    </p>
                                </div>
                            </div>

                            {/* Verified badge */}
                            <div className="absolute top-4 right-4">
                                <span
                                    className="text-xs px-2 py-0.5 rounded-full"
                                    style={{
                                        background: "rgba(52,211,153,0.15)",
                                        color: "#34D399",
                                        fontSize: "10px",
                                    }}
                                >
                                    ✓ Verificado
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Estadística social */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10"
                >
                    <p className="text-white/40 text-sm">
                        ⭐ <span className="text-white/70 font-semibold">4.9/5</span> de
                        satisfacción •{" "}
                        <span className="text-white/70 font-semibold">+2,400</span> familias
                        activas en México
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
