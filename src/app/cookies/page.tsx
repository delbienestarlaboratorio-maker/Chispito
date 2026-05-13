import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Política de Cookies — Chispito.mx",
    description: "Información sobre las cookies que usa Chispito.mx, cómo las gestionamos y cómo puedes configurar tus preferencias.",
    alternates: { canonical: "https://chispito.mx/cookies" },
};

export default function CookiesPage() {
    const card = { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" };

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />
            <section className="pt-28 pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="text-5xl mb-4">🍪</div>
                        <h1 className="text-4xl font-black text-white mb-3">Política de Cookies</h1>
                        <p className="text-white/50">Última actualización: 1 de mayo de 2026</p>
                    </div>

                    <div className="space-y-8 text-white/80 leading-relaxed">
                        {/* Qué son */}
                        <div className="rounded-2xl p-6" style={card}>
                            <h2 className="text-xl font-bold text-white mb-4">¿Qué son las cookies?</h2>
                            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador. Se utilizan para recordar preferencias, mejorar la experiencia de usuario y, en algunos casos, ofrecer publicidad relevante.</p>
                        </div>

                        {/* Tipos de cookies */}
                        <div className="rounded-2xl p-6" style={card}>
                            <h2 className="text-xl font-bold text-white mb-4">Tipos de cookies que usamos</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/20">
                                            <th className="text-left py-2 text-white/60 font-semibold">Categoría</th>
                                            <th className="text-left py-2 text-white/60 font-semibold">Proveedor</th>
                                            <th className="text-left py-2 text-white/60 font-semibold">Propósito</th>
                                            <th className="text-left py-2 text-white/60 font-semibold">Duración</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="py-2.5 text-white font-semibold">Esenciales</td>
                                            <td className="py-2.5">Chispito.mx</td>
                                            <td className="py-2.5">Funcionalidad básica del sitio, preferencias de consentimiento</td>
                                            <td className="py-2.5">Permanente</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2.5 text-white font-semibold">LocalStorage</td>
                                            <td className="py-2.5">Chispito.mx</td>
                                            <td className="py-2.5">Guardar progreso en ejercicios, grado seleccionado, preferencias</td>
                                            <td className="py-2.5">Permanente</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2.5 text-white font-semibold">Analíticas</td>
                                            <td className="py-2.5">Google Analytics (GA4)</td>
                                            <td className="py-2.5">Estadísticas anónimas: páginas visitadas, duración, dispositivo</td>
                                            <td className="py-2.5">14 meses</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2.5 text-white font-semibold">Publicitarias</td>
                                            <td className="py-2.5">Google AdSense</td>
                                            <td className="py-2.5">Mostrar anuncios relevantes y medir su rendimiento</td>
                                            <td className="py-2.5">Variable</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Google Analytics */}
                        <div className="rounded-2xl p-6" style={card}>
                            <h2 className="text-xl font-bold text-white mb-4">Google Analytics</h2>
                            <p className="mb-3">Utilizamos Google Analytics 4 (GA4) para comprender cómo los usuarios interactúan con nuestro sitio. Esta información nos ayuda a mejorar el contenido educativo.</p>
                            <p className="mb-3">Google Analytics utiliza cookies como <code className="text-yellow-400 bg-white/5 px-1.5 py-0.5 rounded">_ga</code> y <code className="text-yellow-400 bg-white/5 px-1.5 py-0.5 rounded">_ga_*</code> para distinguir usuarios únicos.</p>
                            <p className="text-sm text-white/50">Más información: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">Cómo usa Google la información de sitios asociados</a></p>
                        </div>

                        {/* Google AdSense */}
                        <div className="rounded-2xl p-6" style={card}>
                            <h2 className="text-xl font-bold text-white mb-4">Google AdSense</h2>
                            <p className="mb-3">Mostramos anuncios a través de Google AdSense para financiar el contenido educativo gratuito. AdSense puede usar cookies para mostrar anuncios basados en visitas previas a nuestro sitio u otros sitios.</p>
                            <p className="text-sm text-white/50">Puede desactivar la publicidad personalizada en: <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">Configuración de anuncios de Google</a></p>
                        </div>

                        {/* Consentimiento */}
                        <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, rgba(255,214,10,0.1) 0%, rgba(78,205,196,0.1) 100%)", border: "1px solid rgba(255,214,10,0.2)" }}>
                            <h2 className="text-xl font-bold text-white mb-4">Tu consentimiento</h2>
                            <p className="mb-3">Al visitar Chispito.mx por primera vez, te mostramos un banner de cookies donde puedes elegir:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong className="text-white">Aceptar todo:</strong> Se activan cookies esenciales, analíticas y publicitarias.</li>
                                <li><strong className="text-white">Solo esenciales:</strong> Solo se usan cookies necesarias para el funcionamiento del sitio. No se cargan Google Analytics ni Google AdSense.</li>
                            </ul>
                            <p className="mt-3 text-sm text-white/50">Puedes cambiar tu preferencia en cualquier momento eliminando la clave <code className="text-yellow-400 bg-white/5 px-1.5 py-0.5 rounded">chispito_cookies_ok</code> de tu localStorage, o usando la configuración de tu navegador.</p>
                        </div>

                        {/* Gestionar cookies */}
                        <div className="rounded-2xl p-6" style={card}>
                            <h2 className="text-xl font-bold text-white mb-4">Cómo gestionar cookies en tu navegador</h2>
                            <ul className="space-y-2 text-sm">
                                <li>🔵 <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">Google Chrome</a></li>
                                <li>🟠 <a href="https://support.mozilla.org/es/kb/proteccion-antirrastreo-mejorada-en-firefox-para-e" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">Mozilla Firefox</a></li>
                                <li>⚪ <a href="https://support.apple.com/es-mx/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">Safari</a></li>
                                <li>🔷 <a href="https://support.microsoft.com/es-mx/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-yellow-400 underline hover:text-yellow-300">Microsoft Edge</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/privacidad" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>🔏 Aviso de Privacidad</Link>
                        <Link href="/terminos" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)" }}>📋 Términos</Link>
                        <Link href="/" className="px-6 py-3 rounded-xl font-bold text-center transition-all hover:opacity-90" style={{ background: "#FFD60A", color: "#0D1B2A" }}>⚡ Volver a Chispito</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
