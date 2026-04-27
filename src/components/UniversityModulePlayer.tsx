"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Carrera } from "@/data/curriculum";

export default function UniversityModulePlayer({ carrera, materia, bloqueId }: { carrera: Carrera, materia: any, bloqueId: string }) {
    return (
        <main className="min-h-screen text-slate-200 font-sans" style={{ backgroundColor: "#0b1120" }}>
            <Navbar />
            
            <div className="max-w-4xl mx-auto px-4 py-32">
                <div className="mb-10 text-center">
                    <Link href={`/${carrera.slug}/${materia.id}`} className="hover:text-white font-medium mb-8 inline-block transition-colors" style={{ color: materia.color }}>
                        ← Volver a {materia.nombre}
                    </Link>
                    
                    <div className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-5xl mb-6 shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]" style={{ backgroundColor: `${materia.color}15`, border: `1px solid ${materia.color}30` }}>
                        {materia.icon}
                    </div>
                    
                    <h1 className="text-3xl font-black text-white mb-2 uppercase tracking-widest">{materia.nombre}</h1>
                    <h2 className="text-xl text-slate-400 font-medium">Laboratorio Clínico Activo - Fase {bloqueId.toUpperCase()}</h2>
                </div>

                <div className="bg-slate-900/50 rounded-3xl border p-12 text-center shadow-2xl relative overflow-hidden" style={{ borderColor: `${materia.color}20` }}>
                    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `radial-gradient(${materia.color} 2px, transparent 2px)`, backgroundSize: '30px 30px' }}></div>
                    
                    <div className="relative z-10">
                        <div className="text-6xl mb-6 animate-pulse" style={{ color: materia.color }}>
                            ⚙️
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Motor Universitario en Ensamblaje</h3>
                        <p className="text-slate-400 max-w-lg mx-auto leading-relaxed mb-8">
                            Has accedido al simulador clínico intermedio. Los casos de estudio y cruces de variables biológicas para esta unidad se encuentran bajo revisión técnica.
                        </p>
                        
                        <div className="flex justify-center gap-4">
                            <span className="px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold text-slate-300">Variables Fisiológicas Cargadas</span>
                            <span className="px-4 py-2 bg-slate-800 rounded-lg text-xs font-bold text-slate-300 border" style={{ borderColor: `${materia.color}50`, color: materia.color }}>Mapeo en curso...</span>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
