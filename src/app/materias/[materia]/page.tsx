import { GRADOS, MATERIAS } from "@/data/curriculum";
import { GRADOS_CONTENIDO } from "@/data/content-index";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { AdBannerHorizontal } from "@/components/AdBanner";
import { notFound } from "next/navigation";

export const dynamicParams = false;

interface Props {
    params: Promise<{ materia: string }>;
}

export async function generateStaticParams() {
    return Object.keys(MATERIAS).map((id) => ({ materia: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { materia: materiaSlug } = await params;
    const materia = MATERIAS[materiaSlug];
    if (!materia) return {};

    return {
        title: `${materia.nombre} — Todos los Grados SEP | Chispito.mx`,
        description: `Ejercicios interactivos de ${materia.nombre} para todos los grados: Preescolar, Primaria, Secundaria y Telesecundaria. Alineados al programa SEP México. ¡Gratis!`,
        alternates: { canonical: `https://chispito.mx/materias/${materiaSlug}` },
        openGraph: {
            title: `${materia.emoji} ${materia.nombre} — Todos los Grados | Chispito.mx`,
            description: `Practica ${materia.nombre} en todos los grados con ejercicios interactivos SEP.`,
        },
    };
}

// Agrupa grados por nivel
function agruparPorNivel(grados: typeof GRADOS) {
    const grupos: Record<string, typeof GRADOS> = {};
    const orden = ["preescolar", "primaria", "secundaria", "telesecundaria", "bachillerato"];
    for (const g of grados) {
        if (!grupos[g.nivel]) grupos[g.nivel] = [];
        grupos[g.nivel].push(g);
    }
    // Retornar en orden
    return orden
        .filter((n) => grupos[n])
        .map((n) => ({ nivel: n, grados: grupos[n] }));
}

const NIVEL_LABELS: Record<string, { label: string; emoji: string; color: string }> = {
    preescolar: { label: "Preescolar", emoji: "🌱", color: "#22C55E" },
    primaria: { label: "Primaria", emoji: "🚀", color: "#3B82F6" },
    secundaria: { label: "Secundaria", emoji: "⚗️", color: "#8B5CF6" },
    telesecundaria: { label: "Telesecundaria", emoji: "📺", color: "#0EA5E9" },
    bachillerato: { label: "Bachillerato / Prepa", emoji: "🎓", color: "#6366F1" },
};

export default async function MateriaPage({ params }: Props) {
    const { materia: materiaSlug } = await params;
    const materia = MATERIAS[materiaSlug];
    if (!materia) notFound();

    // Filtrar grados que contienen esta materia
    const gradosConMateria = GRADOS.filter((g) => g.materias.includes(materiaSlug));

    if (gradosConMateria.length === 0) notFound();

    const grupos = agruparPorNivel(gradosConMateria);

    // GRADOS_CONTENIDO importado estáticamente arriba (6KB, no infla bundle)

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />

            {/* Hero de la materia */}
            <section
                className="pt-28 pb-16 px-4"
                style={{
                    background: `linear-gradient(135deg, ${materia.color}15, var(--navy))`,
                    borderBottom: `1px solid ${materia.color}30`,
                }}
            >
                <div className="max-w-5xl mx-auto text-center">
                    <div className="text-8xl mb-4">{materia.emoji}</div>
                    <h1 className="font-fredoka text-5xl text-white mb-3">
                        {materia.nombre}
                    </h1>
                    <p className="text-white/60 text-lg mb-2">
                        Ejercicios interactivos para todos los grados — SEP México
                    </p>
                    <p className="text-white/40 text-sm">
                        Disponible en {gradosConMateria.length} grados · Alineado al programa oficial
                    </p>

                    {/* Breadcrumb */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/40">
                        <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link>
                        <span>›</span>
                        <Link href="/#materias" className="hover:text-white/70 transition-colors">Materias</Link>
                        <span>›</span>
                        <span style={{ color: materia.color }}>{materia.nombre}</span>
                    </div>

                    {/* Schema */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "LearningResource",
                                name: `${materia.nombre} — Ejercicios SEP México`,
                                inLanguage: "es-MX",
                                isAccessibleForFree: true,
                                provider: { "@type": "Organization", name: "Chispito.mx" },
                                educationalFramework: "SEP México - Plan de Estudios 2022",
                            }),
                        }}
                    />
                </div>
            </section>

            <AdBannerHorizontal />

            {/* Grados agrupados por nivel */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    {grupos.map((grupo) => {
                        const nivelInfo = NIVEL_LABELS[grupo.nivel] || {
                            label: grupo.nivel,
                            emoji: "📖",
                            color: "#FFF",
                        };
                        return (
                            <div key={grupo.nivel} className="mb-12">
                                {/* Header del nivel */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                                        style={{ background: `${nivelInfo.color}25` }}
                                    >
                                        {nivelInfo.emoji}
                                    </div>
                                    <h2
                                        className="font-fredoka text-2xl"
                                        style={{ color: nivelInfo.color }}
                                    >
                                        {nivelInfo.label}
                                    </h2>
                                    <div
                                        className="flex-1 h-px"
                                        style={{ background: `${nivelInfo.color}30` }}
                                    />
                                    <span className="text-white/30 text-sm">
                                        {grupo.grados.length} grado{grupo.grados.length > 1 ? "s" : ""}
                                    </span>
                                </div>

                                {/* Cards de grados */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {grupo.grados.map((grado) => {
                                        // Intentar obtener info del bloque actual
                                        const gradoContenido = GRADOS_CONTENIDO[grado.slug] as any;
                                        let bloqueActualNombre = "";
                                        let totalBloques = 0;

                                        if (gradoContenido?.materias?.[materiaSlug]) {
                                            const matData = gradoContenido.materias[materiaSlug];
                                            totalBloques = matData.bloques?.length || 0;
                                            const mesActual = new Date().getMonth();
                                            const bloqueIdx = Math.min(
                                                Math.floor(mesActual / 2),
                                                totalBloques - 1
                                            );
                                            bloqueActualNombre =
                                                matData.bloques?.[bloqueIdx]?.nombre || "";
                                        }

                                        return (
                                            <Link
                                                key={grado.slug}
                                                href={`/${grado.slug}/${materiaSlug}`}
                                            >
                                                <div
                                                    className="grade-card p-5 h-full transition-all hover:scale-[1.02] hover:shadow-lg group"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${grado.color}15, ${materia.color}08)`,
                                                        borderColor: `${grado.color}30`,
                                                    }}
                                                >
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div
                                                            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                                                            style={{
                                                                background: `${grado.color}25`,
                                                            }}
                                                        >
                                                            {grado.emoji}
                                                        </div>
                                                        <div>
                                                            <h3
                                                                className="font-fredoka text-lg group-hover:opacity-100 transition-opacity"
                                                                style={{ color: grado.color }}
                                                            >
                                                                {grado.nombre}
                                                            </h3>
                                                            <p className="text-white/40 text-xs">
                                                                ~{(grado.alumnos / 1000000).toFixed(1)}M alumnos
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {bloqueActualNombre && (
                                                        <div
                                                            className="rounded-lg p-2.5 mt-2"
                                                            style={{
                                                                background: `${materia.color}10`,
                                                            }}
                                                        >
                                                            <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-0.5">
                                                                📅 Este mes
                                                            </p>
                                                            <p className="text-sm font-semibold text-white/80">
                                                                {bloqueActualNombre}
                                                            </p>
                                                        </div>
                                                    )}

                                                    {totalBloques > 0 && (
                                                        <p className="text-white/30 text-xs mt-2">
                                                            {totalBloques} bloques · {totalBloques * 8}+ ejercicios
                                                        </p>
                                                    )}

                                                    <div
                                                        className="mt-3 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                                                        style={{ color: materia.color }}
                                                    >
                                                        Ver ejercicios
                                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}

                    <AdBannerHorizontal />

                    {/* Otras materias */}
                    <div className="mt-16 text-center">
                        <h2 className="font-fredoka text-2xl text-white mb-6">
                            Explora otras materias
                        </h2>
                        <div className="flex flex-wrap justify-center gap-3">
                            {Object.values(MATERIAS)
                                .filter((m) => m.id !== materiaSlug)
                                .map((m) => (
                                    <Link
                                        key={m.id}
                                        href={`/materias/${m.id}`}
                                        className="materia-pill transition-all hover:scale-105"
                                        style={{
                                            background: `${m.color}22`,
                                            color: m.color,
                                            borderColor: `${m.color}55`,
                                        }}
                                    >
                                        {m.emoji} {m.nombre}
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer
                className="py-10 text-center text-white/30 text-sm"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
                <p className="font-fredoka text-xl mb-2" style={{ color: "var(--yellow)" }}>
                    Chispito.mx ⚡
                </p>
                <p>
                    Alineado al programa SEP México 2022 (Nueva Escuela Mexicana) •{" "}
                    <Link href="/privacidad" className="hover:text-white transition-colors">
                        Privacidad
                    </Link>{" "}
                    •{" "}
                    <Link href="/terminos" className="hover:text-white transition-colors">
                        Términos
                    </Link>
                </p>
                <p className="mt-2">🇲🇽 Hecho con ❤️ en México</p>
            </footer>
        </main>
    );
}
