import Link from "next/link";
import Navbar from "@/components/Navbar";
// ENFERMERIA_MALLA se importa dinámicamente

export default async function ProfesorDashboard() {
    const { ENFERMERIA_MALLA } = await import("@/data/content-enfermeria");
    const todasLasMaterias = [...ENFERMERIA_MALLA.tronco_comun, ...ENFERMERIA_MALLA.especialidad];

    return (
        <main className="min-h-screen text-slate-200 font-sans pb-16" style={{ backgroundColor: "#0f172a" }}>
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-28 relative">
                
                {/* Header Auth / Bienvenida */}
                <div className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 rounded-3xl p-8 mb-12 shadow-2xl border border-indigo-500/30">
                    <div className="flex gap-4 items-center">
                        <div className="text-5xl">👨‍⚕️</div>
                        <div>
                            <h1 className="text-3xl font-black text-white tracking-widest uppercase mb-1">Central de Catedráticos</h1>
                            <p className="text-indigo-200">Plataforma de Edición Magisterial para Currículo Clínico.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-16">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500">⚕️</span> Carrera: Enfermería (Chispito Pro)
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {todasLasMaterias.map((mat) => (
                                <div key={mat.id} className="bg-slate-900 rounded-2xl border border-slate-700/50 p-6 flex flex-col justify-between hover:border-blue-500/50 transition-all">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="text-3xl p-3 rounded-xl bg-slate-800">{mat.icon}</div>
                                            <h3 className="font-bold text-lg leading-tight" style={{ color: mat.color }}>{mat.nombre}</h3>
                                        </div>
                                        <p className="text-sm text-slate-400 mb-6">{mat.bloques} Módulos Disponibles para tutoría.</p>
                                    </div>
                                    
                                    <div className="mt-4 grid grid-cols-5 gap-2">
                                        {Array.from({ length: mat.bloques }).map((_, i) => (
                                            <Link 
                                                href={`/profesores/editor/enfermeria/${mat.id}/${i + 1}`} 
                                                key={i}
                                                className="w-full text-center bg-slate-800 hover:bg-blue-600 text-xs font-bold py-2 rounded transition-colors"
                                                title={`Editar Módulo ${i + 1}`}
                                            >
                                                {i + 1}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
