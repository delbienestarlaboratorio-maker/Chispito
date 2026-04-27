"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function CalculadoraIV({ params }: { params: { grado: string } }) {
    const [volumen, setVolumen] = useState<number>(1000);
    const [tiempoHoras, setTiempoHoras] = useState<number>(24);
    const [factorGoteo, setFactorGoteo] = useState<number>(20); // 20 gotas/ml default macro

    // Constantes médicas estándar
    // Macrogoteo: 10, 15 o 20 gotas/ml
    // Microgoteo: 60 microgotas/ml

    const volumenMl = volumen;
    const tiempoMinutos = tiempoHoras * 60;
    
    // Fórmulas Clínicas
    // Gotas por minuto (gts/min) = (Volumen total en ml * Factor de goteo) / Tiempo en Minutos
    const gotasPorMinuto = (volumenMl * factorGoteo) / tiempoMinutos;
    const isMicrogoteo = factorGoteo === 60;

    return (
        <main className="min-h-screen text-slate-200 font-sans" style={{ backgroundColor: "#0b1120" }}>
            <Navbar />
            
            <div className="max-w-4xl mx-auto px-4 py-32">
                <div className="mb-8">
                    <Link href={`/${params.grado}`} className="text-teal-500 hover:text-teal-400 font-medium flex items-center gap-2 mb-6 transition-colors">
                        ← Volver al Módulo Universitario
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner bg-teal-900/30 border border-teal-500/30">
                            💧
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white tracking-tight">Calculadora IV (Terapia de Infusión)</h1>
                            <p className="text-slate-400">Herramienta Clínica Asistida de Alta Precisión.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Panel de Entradas */}
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm">
                        <h2 className="text-lg font-bold text-slate-300 mb-6 flex items-center gap-2">
                            <span>🎛️</span> Variables del Paciente
                        </h2>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-teal-500 uppercase tracking-wider mb-2">Volumen a Infundir (ml)</label>
                                <input 
                                    type="number" 
                                    min="1"
                                    value={volumen}
                                    onChange={(e) => setVolumen(Number(e.target.value))}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all shadow-inner"
                                />
                                <p className="text-xs text-slate-500 mt-1">Solución total prescrita por el médico.</p>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-teal-500 uppercase tracking-wider mb-2">Tiempo Prescrito (Horas)</label>
                                <input 
                                    type="number" 
                                    min="0.1" step="0.1"
                                    value={tiempoHoras}
                                    onChange={(e) => setTiempoHoras(Number(e.target.value))}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white text-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all shadow-inner"
                                />
                                <p className="text-xs text-slate-500 mt-1">Horas en las que debe completarse la infusión.</p>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-teal-500 uppercase tracking-wider mb-2">Norma del Equipo (Factor Goteo)</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button 
                                        onClick={() => setFactorGoteo(20)}
                                        className={`px-4 py-3 border rounded-xl font-bold text-sm transition-all shadow-sm ${factorGoteo !== 60 ? 'bg-teal-900/40 border-teal-500 text-teal-300' : 'bg-slate-950 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                                    >
                                        Macrogotero<br/><span className="text-xs font-normal opacity-70">(10, 15, 20 gotas/ml)</span>
                                    </button>
                                    <button 
                                        onClick={() => setFactorGoteo(60)}
                                        className={`px-4 py-3 border rounded-xl font-bold text-sm transition-all shadow-sm ${factorGoteo === 60 ? 'bg-emerald-900/40 border-emerald-500 text-emerald-300' : 'bg-slate-950 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                                    >
                                        Microgotero<br/><span className="text-xs font-normal opacity-70">(60 microgotas/ml)</span>
                                    </button>
                                </div>
                                {factorGoteo !== 60 && (
                                    <select 
                                        value={factorGoteo} 
                                        onChange={(e) => setFactorGoteo(Number(e.target.value))}
                                        className="mt-3 w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2 text-white text-sm focus:border-teal-500 outline-none"
                                    >
                                        <option value={10}>Normogotero Baxter (10 gts/ml)</option>
                                        <option value={15}>Normogotero Abbott (15 gts/ml)</option>
                                        <option value={20}>Macrogotero Estándar Norma Mex (20 gts/ml)</option>
                                    </select>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Panel de Resultados */}
                    <div className="space-y-6">
                        {/* Resultado Principal Clínico */}
                        <div className="bg-gradient-to-br from-teal-900/80 to-slate-900 p-8 rounded-2xl border border-teal-500/30 shadow-[0_0_40px_-15px_rgba(20,184,166,0.3)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            </div>
                            <h3 className="text-teal-400 font-bold text-sm uppercase tracking-widest mb-1 relative z-10">Ritmo de Infusión Objetivo</h3>
                            
                            <div className="my-6 relative z-10">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-black text-white tracking-tighter drop-shadow-md">
                                        {!isFinite(gotasPorMinuto) || isNaN(gotasPorMinuto) ? '0' : Math.round(gotasPorMinuto)}
                                    </span>
                                    <span className="text-xl font-bold text-teal-300/80">
                                        {isMicrogoteo ? 'microgotas / min' : 'gotas / min'}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="bg-black/30 rounded-xl p-4 border border-white/5 backdrop-blur-md relative z-10">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-slate-400">Volumen equivalente:</span>
                                    <span className="text-sm font-bold text-white">{!isFinite(volumenMl / Math.max(0.1, tiempoHoras)) ? '0' : Math.round((volumenMl / tiempoHoras) * 10) / 10} ml / hora</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-slate-400">Factor bomba de infusión:</span>
                                    <span className="text-sm font-bold text-emerald-400">{!isFinite(volumenMl / Math.max(0.1, tiempoHoras)) ? '0' : Math.round((volumenMl / tiempoHoras) * 10) / 10} cc/hr</span>
                                </div>
                            </div>
                        </div>

                        {/* Metadatos Médicos Prácticos */}
                        <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-xl">
                            <h3 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
                                <span>⏱️</span> Regulación Práctica
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Para calibrar el equipo de manera manual, ajusta el rodillo para administrar aproximadamente:
                            </p>
                            <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-500 font-bold">15s</div>
                                <div>
                                    <div className="text-xl font-black text-white">
                                        {!isFinite(gotasPorMinuto) || isNaN(gotasPorMinuto) ? '0' : Math.round(gotasPorMinuto / 4)}
                                    </div>
                                    <div className="text-xs text-amber-500/80 font-bold uppercase tracking-wider">{isMicrogoteo ? 'microgts' : 'gts'} cada 15 segs</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-12 text-center text-slate-600 text-xs">
                    <p>Fórmula de cálculo: (Volumen ml × Constante {factorGoteo}) ÷ (Tiempo hr × 60). Responsabilidad clínica del personal de salud.</p>
                </div>
            </div>
        </main>
    );
}
