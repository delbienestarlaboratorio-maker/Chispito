import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Contacto — Chispito.mx",
    description: "¿Tienes dudas, sugerencias o comentarios? Contáctanos. Estamos para ayudarte.",
    alternates: { canonical: "https://chispito.mx/contacto" },
};

export default function ContactoPage() {
    const channels = [
        { icon: "📧", label: "Correo electrónico", value: "contacto@chispito.mx", href: "mailto:contacto@chispito.mx" },
        { icon: "🌐", label: "Sitio web", value: "chispito.mx", href: "https://chispito.mx" },
        { icon: "📍", label: "Ubicación", value: "Ciudad de México, México", href: null },
    ];

    const faqs = [
        { q: "¿Chispito.mx es gratuito?", a: "Sí, los ejercicios básicos son 100% gratuitos. También ofrecemos planes premium con funciones adicionales." },
        { q: "¿El contenido está alineado a la SEP?", a: "Sí, todo nuestro material sigue el Plan de Estudios 2022 - Nueva Escuela Mexicana." },
        { q: "¿Mis datos están seguros?", a: "Absolutamente. No vendemos datos y la privacidad de los niños es nuestra prioridad. Lee nuestro Aviso de Privacidad para más detalles." },
        { q: "¿Puedo usar el material en mi escuela?", a: "Sí, el uso educativo no comercial es bienvenido. Para usos institucionales, escríbenos." },
    ];

    const card = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" };

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />
            <section className="pt-28 pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="text-5xl mb-4">📬</div>
                        <h1 className="text-4xl font-black text-white mb-3">Contacto</h1>
                        <p className="text-white/50">¿Dudas, sugerencias o comentarios? Estamos para ayudarte.</p>
                    </div>

                    <div className="space-y-8 text-white/80 leading-relaxed">
                        {/* Canales de contacto */}
                        <div className="rounded-2xl p-6" style={card}>
                            <h2 className="text-xl font-bold text-white mb-4">📡 Canales de Contacto</h2>
                            <div className="space-y-4">
                                {channels.map((ch) => (
                                    <div key={ch.label} className="flex items-center gap-4 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                                        <span className="text-2xl">{ch.icon}</span>
                                        <div>
                                            <p className="text-white/50 text-xs uppercase tracking-wider">{ch.label}</p>
                                            {ch.href ? (
                                                <a href={ch.href} className="text-white font-bold hover:text-yellow-400 transition-colors">{ch.value}</a>
                                            ) : (
                                                <p className="text-white font-bold">{ch.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Horarios */}
                        <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, rgba(255,214,10,0.1) 0%, rgba(78,205,196,0.1) 100%)", border: "1px solid rgba(255,214,10,0.2)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">🕐 Horario de Atención</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                                    <p className="text-white/50 text-sm">Lunes a Viernes</p>
                                    <p className="text-white font-bold">9:00 AM — 6:00 PM (CST)</p>
                                </div>
                                <div className="p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                                    <p className="text-white/50 text-sm">Tiempo de respuesta</p>
                                    <p className="text-white font-bold">Máximo 48 horas hábiles</p>
                                </div>
                            </div>
                        </div>

                        {/* Para quién */}
                        <div className="rounded-2xl p-6" style={card}>
                            <h2 className="text-xl font-bold text-white mb-4">💬 ¿Sobre qué puedes escribirnos?</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    { emoji: "👨‍👩‍👧", text: "Padres de familia con dudas sobre el contenido" },
                                    { emoji: "👩‍🏫", text: "Maestros interesados en usar Chispito en clase" },
                                    { emoji: "🐛", text: "Reportar errores o problemas técnicos" },
                                    { emoji: "💡", text: "Sugerencias de nuevas funciones o contenidos" },
                                    { emoji: "📰", text: "Colaboraciones, prensa o alianzas" },
                                    { emoji: "🔒", text: "Solicitudes de privacidad (derechos ARCO)" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                                        <span className="text-xl flex-shrink-0">{item.emoji}</span>
                                        <span className="text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="rounded-2xl p-6" style={card}>
                            <h2 className="text-xl font-bold text-white mb-4">❓ Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }}>
                                        <p className="font-bold text-white mb-1">{faq.q}</p>
                                        <p className="text-white/60 text-sm">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/nosotros" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>⚡ Quiénes Somos</Link>
                        <Link href="/privacidad" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>🔏 Privacidad</Link>
                        <Link href="/" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90" style={{ background: "#FFD60A", color: "#0D1B2A" }}>🏠 Volver a Chispito</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
