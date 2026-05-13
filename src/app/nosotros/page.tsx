import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Quiénes Somos — Chispito.mx",
    description: "Conoce al equipo detrás de Chispito.mx, la plataforma educativa gratuita alineada al programa SEP de México.",
    alternates: { canonical: "https://chispito.mx/nosotros" },
};

export default function NosotrosPage() {
    const levels = [
        { emoji: "🌈", level: "Preescolar", desc: "3 grados, desarrollo integral" },
        { emoji: "📖", level: "Primaria", desc: "6 grados, todas las materias" },
        { emoji: "🔬", level: "Secundaria", desc: "3 grados, ciencias y humanidades" },
    ];
    const methods = [
        { icon: "✅", text: "Alineación estricta con los libros de texto de la SEP y el Plan de Estudios 2022" },
        { icon: "🎮", text: "Gamificación educativa: estrellas, logros y retroalimentación inmediata" },
        { icon: "📱", text: "Diseño responsive que funciona en cualquier dispositivo" },
        { icon: "🧑‍🏫", text: "Revisión de contenido por profesionales de la educación" },
        { icon: "♿", text: "Accesibilidad: interfaces claras y navegación intuitiva para niños" },
    ];
    const team = [
        { icon: "💻", role: "Desarrollo de Software", desc: "Ingenieros en plataformas educativas de alto rendimiento" },
        { icon: "🎨", role: "Diseño UX/UI", desc: "Interfaces diseñadas pensando en niños de 3 a 15 años" },
        { icon: "📐", role: "Contenido Pedagógico", desc: "Material validado con el programa oficial SEP" },
        { icon: "📊", role: "Calidad y SEO", desc: "Aseguramiento de calidad y optimización" },
    ];
    const commitments = [
        { icon: "🔒", title: "Privacidad primero:", text: "No vendemos datos. La privacidad de los niños es nuestra máxima prioridad." },
        { icon: "🆓", title: "Acceso gratuito:", text: "Los ejercicios básicos siempre serán gratuitos para todos." },
        { icon: "🇲🇽", title: "100% mexicano:", text: "Contenido hecho en México, para estudiantes mexicanos." },
        { icon: "🌱", title: "Mejora continua:", text: "Actualizamos constantemente con cada ciclo escolar." },
    ];

    const card = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" };
    const innerCard = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" };

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />
            <section className="pt-28 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="text-6xl mb-5">⚡</div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Quiénes Somos</h1>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto">Educación de calidad, accesible y divertida para todos los niños de México.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Misión */}
                        <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg, rgba(255,214,10,0.1) 0%, rgba(78,205,196,0.1) 100%)", border: "1px solid rgba(255,214,10,0.2)" }}>
                            <h2 className="text-2xl font-bold text-white mb-4">🎯 Nuestra Misión</h2>
                            <p className="text-white/80 leading-relaxed text-lg">
                                En <strong className="text-white">Chispito.mx</strong> creemos que cada niño merece acceso a herramientas educativas de calidad. Nuestra misión es transformar el aprendizaje de educación básica en una experiencia <strong className="text-yellow-400">interactiva, divertida y 100% alineada</strong> al programa oficial de la SEP de México.
                            </p>
                        </div>

                        {/* Qué hacemos */}
                        <div className="rounded-2xl p-8" style={card}>
                            <h2 className="text-2xl font-bold text-white mb-4">📚 Qué Hacemos</h2>
                            <p className="text-white/80 leading-relaxed mb-6">Desarrollamos ejercicios interactivos que cubren el plan de estudios completo de la SEP (Plan 2022 - Nueva Escuela Mexicana):</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {levels.map((item) => (
                                    <div key={item.level} className="rounded-xl p-5 text-center" style={innerCard}>
                                        <div className="text-3xl mb-2">{item.emoji}</div>
                                        <p className="font-bold text-white">{item.level}</p>
                                        <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Metodología */}
                        <div className="rounded-2xl p-8" style={card}>
                            <h2 className="text-2xl font-bold text-white mb-4">🧠 Nuestra Metodología</h2>
                            <p className="text-white/80 leading-relaxed mb-4">Cada ejercicio sigue principios pedagógicos modernos:</p>
                            <ul className="space-y-3">
                                {methods.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80"><span className="flex-shrink-0 text-lg">{item.icon}</span><span>{item.text}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* Equipo */}
                        <div className="rounded-2xl p-8" style={card}>
                            <h2 className="text-2xl font-bold text-white mb-4">👥 Nuestro Equipo</h2>
                            <p className="text-white/80 leading-relaxed mb-4">Equipo multidisciplinario con sede en <strong className="text-white">Ciudad de México, México</strong>:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {team.map((item) => (
                                    <div key={item.role} className="rounded-xl p-5" style={innerCard}>
                                        <div className="text-2xl mb-2">{item.icon}</div>
                                        <p className="font-bold text-white text-sm">{item.role}</p>
                                        <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Compromiso */}
                        <div className="rounded-2xl p-8" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(155,89,182,0.15) 100%)", border: "1px solid rgba(59,130,246,0.3)" }}>
                            <h2 className="text-2xl font-bold text-white mb-4">🤝 Nuestro Compromiso</h2>
                            <ul className="space-y-3 text-white/80 leading-relaxed">
                                {commitments.map((c, i) => (
                                    <li key={i} className="flex items-start gap-3"><span className="flex-shrink-0">{c.icon}</span><span><strong className="text-white">{c.title}</strong> {c.text}</span></li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="rounded-2xl p-8 text-center" style={card}>
                            <h2 className="text-2xl font-bold text-white mb-3">¿Tienes preguntas?</h2>
                            <p className="text-white/60 mb-6">Nos encanta escuchar a padres, maestros y estudiantes.</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Link href="/contacto" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90" style={{ background: "#FFD60A", color: "#0D1B2A" }}>📬 Escríbenos</Link>
                                <Link href="/" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>⚡ Volver a Chispito</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
