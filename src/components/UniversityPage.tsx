import Link from "next/link";
import { Carrera } from "@/data/curriculum";
import { ENFERMERIA_MALLA } from "@/data/content-enfermeria";
import { AdBannerHorizontal } from "@/components/AdBanner";

export default function UniversityPage({ carrera }: { carrera: Carrera }) {
    // Para renderizar el escudo o iconos de herramientas basados en la carrera
    const isEnfermeria = carrera.slug === "enfermeria";

    return (
        <main className="min-h-screen text-slate-200" style={{ backgroundColor: "#0b1120" /* Dark slate */ }}>
            {/* Minimalist Topbar */}
            <header className="sticky top-0 z-50 border-b border-white/10" style={{ backgroundColor: "rgba(11, 17, 32, 0.8)", backdropFilter: "blur(12px)" }}>
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <span className="text-2xl">🎓</span>
                        <span className="font-bold text-lg tracking-wide">
                            Chispito <span style={{ color: carrera.color }}>PRO</span>
                        </span>
                    </Link>
                    <nav className="hidden sm:flex gap-6 text-sm font-medium">
                        <Link href="/" className="text-slate-400 hover:text-white transition-colors">Volver a Básica</Link>
                        <span className="text-slate-600">|</span>
                        <div className="text-slate-300 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: carrera.color }}></span>
                            {carrera.nombre}
                        </div>
                    </nav>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                
                {/* Panel de Herramientas (Sidebar) */}
                <aside className="w-full md:w-80 flex-shrink-0 space-y-6">
                    {/* Hero Tarjeta de Carrera */}
                    <div className="rounded-2xl p-6 relative overflow-hidden shadow-2xl" style={{
                        background: `linear-gradient(145deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)`,
                        border: `1px solid ${carrera.color}40`,
                        boxShadow: `0 0 30px -10px ${carrera.color}50`
                    }}>
                        <div className="absolute -top-10 -right-10 text-9xl opacity-5 pointer-events-none">{carrera.emoji}</div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4" style={{ backgroundColor: `${carrera.color}25`, border: `1px solid ${carrera.color}50` }}>
                                {carrera.emoji}
                            </div>
                            <h1 className="text-2xl font-bold text-white mb-2 leading-tight">{carrera.nombre}</h1>
                            <p className="text-slate-400 text-sm leading-relaxed">{carrera.descripcion}</p>
                        </div>
                    </div>

                    {/* Suite de Trinchera (Herramientas Clínicas) */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Herramientas de Trinchera</h3>
                        <div className="space-y-3">
                            {isEnfermeria && (
                                <>
                                    <ToolCard icon="💧" title="Calculadora IV" desc="Goteo, bombas y balances hídricos." color="#0EA5E9" href={`/${carrera.slug}/tools/calculadora-iv`} />
                                    <ToolCard icon="🧠" title="Buscador PAE" desc="Taxonomía NANDA, NIC, NOC." color="#8B5CF6" href={`/${carrera.slug}/tools/nanda`} />
                                    <ToolCard icon="🩻" title="Simulador EKG" desc="Laboratorio de arritmias letales." color="#EF4444" href={`/${carrera.slug}/tools/ekg`} />
                                    <ToolCard icon="💉" title="Compatibilidad IV" desc="Cruces en Y y cristalización." color="#F59E0B" href={`/${carrera.slug}/tools/compatibilidad`} />
                                    <ToolCard icon="📊" title="Escalas Clínicas" desc="Glasgow, Braden, Apgar." color="#10B981" href={`/${carrera.slug}/tools/escalas`} />
                                </>
                            )}
                        </div>
                    </div>
                </aside>

                {/* Dashboard Central (Malla Curricular) */}
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-1">Malla Curricular Autónoma</h2>
                    <p className="text-slate-400 text-sm mb-8">Elige un área de dominio para iniciar tu estudio de especialidad.</p>

                    {/* Falsos módulos por ahora, para maquetar el layout de tarjetas de estudio. Se usarán datos de content-enfermeria.ts */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
                        {/* TRONCO COMÚN */}
                        <div className="col-span-1 lg:col-span-2">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 mt-2">Tronco Común Universitario</h3>
                        </div>
                        {isEnfermeria && ENFERMERIA_MALLA.tronco_comun.map((mat) => (
                            <Link key={mat.id} href={`/${carrera.slug}/${mat.id}`}>
                                <SubjectCard title={mat.nombre} desc={mat.desc} icon={mat.icon} color={mat.color} blocks={mat.bloques} />
                            </Link>
                        ))}
                        
                        {/* ESPECIALIDAD */}
                        <div className="col-span-1 lg:col-span-2 mt-6">
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Especialización de Carrera</h3>
                                <span className="px-2 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: `${carrera.color}20`, color: carrera.color }}>Avanzado</span>
                            </div>
                        </div>
                        {isEnfermeria && ENFERMERIA_MALLA.especialidad.map((mat) => (
                            <Link key={mat.id} href={`/${carrera.slug}/${mat.id}`}>
                                <SubjectCard title={mat.nombre} desc={mat.desc} icon={mat.icon} color={mat.color} blocks={mat.bloques} isPro={mat.isPro} />
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 pb-10">
                <AdBannerHorizontal />
            </div>
        </main>
    );
}

function ToolCard({ icon, title, desc, color, href }: { icon: string, title: string, desc: string, color: string, href: string }) {
    return (
        <Link href={href}>
            <div className="group rounded-xl p-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer border border-white/5 bg-slate-800/50 hover:bg-slate-800 shadow-sm hover:shadow-md">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shadow-inner transition-colors" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}>
                        {icon}
                    </div>
                    <div>
                        <h4 className="text-slate-200 font-bold text-sm tracking-wide group-hover:text-white transition-colors">{title}</h4>
                        <p className="text-slate-500 text-xs mt-0.5 line-clamp-1">{desc}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function SubjectCard({ icon, title, desc, blocks, color, isPro = false }: { icon: string, title: string, desc: string, blocks: number, color: string, isPro?: boolean }) {
    return (
        <div className="group rounded-2xl p-6 transition-all duration-300 cursor-pointer border border-slate-800 bg-slate-900 shadow-lg hover:shadow-xl relative overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            {/* Ambient Base Glow */}
            <div className="absolute inset-0 opacity-[0.03] transition-opacity duration-300 group-hover:opacity-10" style={{ background: `radial-gradient(circle at top right, ${color}, transparent 60%)` }}></div>
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30`, color: color }}>
                        {icon}
                    </div>
                    {isPro && (
                        <div className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ backgroundColor: `${color}20`, color: color }}>
                            Nivel Clínico
                        </div>
                    )}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.9)" }}>{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{desc}</p>
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-xs font-medium" style={{ color: color }}>
                        <span>📚</span> {blocks} submódulos
                    </div>
                    <span className="text-slate-600 text-xs group-hover:text-white transition-colors">Explorar →</span>
                </div>
            </div>
        </div>
    );
}
