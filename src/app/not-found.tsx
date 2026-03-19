import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />
            <section className="flex flex-col items-center justify-center text-center px-4" style={{ minHeight: "70vh" }}>
                <div className="text-[120px] md:text-[180px] select-none leading-none mb-4" style={{ filter: "drop-shadow(0 0 40px rgba(255,214,10,0.4))" }}>
                    🚀
                </div>
                <h1 className="font-fredoka text-5xl md:text-7xl text-white mb-4">
                    ¡Ups! Página no encontrada
                </h1>
                <p className="text-white/60 text-lg md:text-xl max-w-xl mb-8">
                    Parece que Nico se perdió en el espacio. Esta página no existe o fue movida a otra galaxia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="/"
                        className="px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                        style={{
                            background: "linear-gradient(135deg, #FFD60A, #F59E0B)",
                            color: "#0a0015",
                        }}
                    >
                        🏠 Volver al Inicio
                    </Link>
                    <Link
                        href="/universo"
                        className="px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                        style={{
                            background: "rgba(255,255,255,0.08)",
                            color: "white",
                            border: "2px solid rgba(255,255,255,0.15)",
                        }}
                    >
                        🌌 Explorar el Universo
                    </Link>
                </div>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                    {[
                        { emoji: "📚", label: "Kinder", href: "/kinder/matematicas/bloque-1" },
                        { emoji: "✏️", label: "Primaria", href: "/primaria-1/matematicas/bloque-1" },
                        { emoji: "🔬", label: "Secundaria", href: "/secundaria-1/matematicas/bloque-1" },
                        { emoji: "🎓", label: "Maestros", href: "/maestros" },
                    ].map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="p-4 rounded-xl text-center hover:scale-105 transition-all"
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                            }}
                        >
                            <div className="text-3xl mb-1">{link.emoji}</div>
                            <div className="text-white/70 text-sm font-medium">{link.label}</div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
