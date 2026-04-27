"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function UniversityTheoryModule({ carrera, materia, bloqueId, datos, onStartExam }: { carrera: any, materia: any, bloqueId: string, datos: any, onStartExam: () => void }) {
    
    return (
        <main className="min-h-screen text-slate-200 font-sans pb-16" style={{ backgroundColor: "#0b1120" }}>
            <Navbar />
            
            <div className="max-w-4xl mx-auto px-4 py-28 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8 flex justify-between items-center">
                    <Link href={`/${carrera.slug}/${materia.id}`} className="hover:text-white font-medium transition-colors" style={{ color: materia.color }}>
                        ← Volver a {materia.nombre}
                    </Link>
                    <div className="text-sm font-bold tracking-widest uppercase text-slate-500 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                        Aula Virtual
                    </div>
                </div>

                <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Header Decorativo del Aula */}
                    <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 pointer-events-none">
                        <span className="text-9xl">📚</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        {datos.nombre}
                    </h1>
                    
                    <div className="flex gap-2 mb-10 overflow-hidden">
                        {datos.temas?.map((tema: string, idx: number) => (
                            <span key={idx} className="px-3 py-1 text-xs font-bold rounded bg-slate-800 text-slate-300 border border-slate-700">
                                {tema}
                            </span>
                        ))}
                    </div>

                    {/* Contenedor del Cuerpo Teórico Renderizado desde JSON */}
                    <div className="prose prose-invert prose-emerald max-w-none text-slate-300 leading-relaxed space-y-6 mb-12">
                        {datos.teoria ? (
                            datos.teoria.split('\n\n').map((paragraph: string, idx: number) => {
                                // Soporte muy rústico para listas y quotes simples para no requerir librería markdown extra
                                if (paragraph.startsWith('> [!IMPORTANTE]')) {
                                    return (
                                        <div key={idx} className="bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-r-xl">
                                            <h4 className="flex items-center gap-2 font-bold text-amber-500 mb-1">⚠️ IMPORTANTE</h4>
                                            <p className="text-amber-200/80">{paragraph.replace('> [!IMPORTANTE]', '').replace(/>/g, '').trim()}</p>
                                        </div>
                                    );
                                }
                                if (paragraph.startsWith('## ')) {
                                    return <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4 border-b border-slate-800 pb-2">{paragraph.replace('## ', '')}</h2>;
                                }
                                if (paragraph.startsWith('### ')) {
                                    return <h3 key={idx} className="text-xl font-bold text-slate-200 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                                }
                                if (paragraph.includes('* ')) {
                                    return (
                                        <ul key={idx} className="list-disc list-inside space-y-2 bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
                                            {paragraph.split('\n').map((li, i) => <li key={i}>{li.replace('* ', '')}</li>)}
                                        </ul>
                                    );
                                }
                                return <p key={idx}>{paragraph}</p>;
                            })
                        ) : (
                            <p>No se encontró texto bibliográfico para esta lección.</p>
                        )}
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

                    {/* Call to Action Final */}
                    <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Siguiente Paso: Simulación Clínica</h4>
                            <p className="text-slate-500 text-sm">Responde {datos.ejercicios?.v1?.length || 8} casos clínicos interactivos basándote en lo leído.</p>
                        </div>
                        <button 
                            onClick={onStartExam}
                            className="w-full md:w-auto px-8 py-4 rounded-xl font-black text-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] whitespace-nowrap"
                            style={{ backgroundColor: materia.color, boxShadow: `0 10px 25px -5px ${materia.color}40` }}
                        >
                            📋 Iniciar Guardia →
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
