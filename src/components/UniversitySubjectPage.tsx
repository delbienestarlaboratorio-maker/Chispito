"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Carrera } from "@/data/curriculum";
import { AdBannerHorizontal } from "@/components/AdBanner";

export interface MateriaUni {
    id: string;
    nombre: string;
    color: string;
    icon: string;
    bloques: number;
    desc: string;
    isPro?: boolean;
    proposito?: string;
    aplicacion?: string;
    faq?: { q: string, a: string }[];
}

export default function UniversitySubjectPage({ carrera, materia }: { carrera: Carrera, materia: MateriaUni }) {
    
    const [highestUnlocked, setHighestUnlocked] = useState<number>(1);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Leemos el progreso máximo alcanzado para esta materia
        const key = `chispito_progress_${carrera.slug}_${materia.id}`;
        const savedProgress = localStorage.getItem(key);
        if (savedProgress) {
            setHighestUnlocked(parseInt(savedProgress, 10));
        }
    }, [carrera.slug, materia.id]);

    const submodules = Array.from({ length: materia.bloques }).map((_, i) => ({
        id: i + 1,
        title: `Módulo Clínico ${i + 1}`,
        status: (i + 1) <= highestUnlocked ? "unlocked" : "locked"
    }));

    // Porcentaje de progreso visual
    const progressPercent = Math.min(100, Math.round(((highestUnlocked - 1) / materia.bloques) * 100));

    return (
        <main className="min-h-screen text-slate-200 font-sans pb-16" style={{ backgroundColor: "#0b1120" }}>
            <Navbar />
            
            <div className="max-w-5xl mx-auto px-4 py-32">
                <div className="mb-8">
                    <AdBannerHorizontal />
                </div>
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <Link href={`/${carrera.slug}`} className="hover:text-white font-medium flex items-center gap-2 mb-6 transition-colors" style={{ color: materia.color }}>
                            ← Volver a Tablero {carrera.nombre}
                        </Link>
                        
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg border" style={{ backgroundColor: `${materia.color}20`, borderColor: `${materia.color}40` }}>
                                {materia.icon}
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-white mb-1 uppercase tracking-widest leading-tight">{materia.nombre}</h1>
                                <p className="text-slate-400 font-medium">{materia.desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900/60 rounded-2xl border p-4 flex gap-6 text-center shadow-lg border-slate-800">
                        <div>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Créditos</p>
                            <p className="text-2xl font-black text-white">{materia.bloques} <span className="text-sm text-slate-400 font-normal">hrs</span></p>
                        </div>
                        <div className="w-px bg-slate-800"></div>
                        <div>
                            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Estatus</p>
                            <p className="text-sm font-bold mt-1 px-3 py-1 rounded-full bg-emerald-900/30 text-emerald-400 border border-emerald-900/50">Disponible</p>
                        </div>
                    </div>
                </div>

                {materia.proposito && (
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-slate-900/60 rounded-3xl border border-slate-800 p-8 shadow-xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">🎯</span>
                                <h3 className="text-xl font-bold text-white">¿Para qué sirve?</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed mb-6">{materia.proposito}</p>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">🏥</span>
                                <h3 className="text-xl font-bold text-white">Aplicación Clínica (Hospital)</h3>
                            </div>
                            <p className="text-slate-300 font-medium leading-relaxed bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                                {materia.aplicacion}
                            </p>
                        </div>

                        {materia.faq && materia.faq.length > 0 && (
                            <div className="bg-slate-900/60 rounded-3xl border border-slate-800 p-8 shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-2xl">💬</span>
                                    <h3 className="text-xl font-bold text-white">Preguntas Frecuentes</h3>
                                </div>
                                <div className="space-y-4">
                                    {materia.faq.map((f, idx) => (
                                        <div key={idx} className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/30">
                                            <h4 className="font-bold text-slate-200 mb-2" style={{ color: materia.color }}>{f.q}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{f.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-10 opacity-50"></div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Panel Izquierdo - Módulos */}
                    <div className="md:col-span-3 space-y-4">
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Estructura Académica ({materia.bloques} Bloques)</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {mounted && submodules.map((sub) => {
                                const isUnlocked = sub.status === "unlocked";
                                
                                return (
                                    <div key={sub.id}>
                                        {isUnlocked ? (
                                            <Link href={`/${carrera.slug}/${materia.id}/bloque-${sub.id}`}>
                                                <div className="group bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex items-center justify-between hover:border-slate-600 transition-colors cursor-pointer">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-slate-400 bg-slate-800 group-hover:text-white transition-colors">
                                                            {sub.id}
                                                        </div>
                                                        <p className="font-bold text-slate-200 group-hover:text-white transition-colors">{sub.title}</p>
                                                    </div>
                                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-400 mr-2 group-hover:bg-slate-700 group-hover:text-white transition-colors" style={{ color: materia.color }}>Entrar →</span>
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className="bg-slate-950/60 border border-slate-800/30 rounded-xl p-4 flex items-center justify-between opacity-60 select-none">
                                                <div className="flex items-center gap-4 text-slate-500">
                                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-slate-900/50">
                                                        🔒
                                                    </div>
                                                    <p className="font-bold">{sub.title}</p>
                                                </div>
                                                <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-900 text-slate-500 mr-2 border border-slate-800 uppercase tracking-widest">Requiere {sub.id - 1}</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Panel Derecho - Progreso */}
                    <div className="md:col-span-1">
                        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-xl sticky top-24">
                            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Progreso Clínico</h2>
                            
                            <div className="relative w-40 h-40 mx-auto flex items-center justify-center mb-6">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                    <path
                                        className="text-slate-800"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        fill="none"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    {mounted && (
                                        <path
                                            stroke={materia.color}
                                            strokeWidth="3"
                                            strokeDasharray={`${progressPercent}, 100`}
                                            fill="none"
                                            strokeLinecap="round"
                                            className="transition-all duration-1000 ease-out"
                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    )}
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-3xl font-black text-white">{mounted ? progressPercent : 0}%</span>
                                </div>
                            </div>

                            {materia.isPro && (
                                <div className="bg-amber-950/30 border border-amber-900/50 rounded-xl p-4">
                                    <span className="text-amber-500 text-xs font-bold flex items-center gap-2 mb-2">⚠️ ALTA EXIGENCIA</span>
                                    <p className="text-amber-200/60 text-xs">Este módulo requiere dominar pre-requisitos anatómicos y cruce de variables clínicas severas.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
