"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function SimuladorEKG({ params }: { params: { grado: string } }) {
    const [arritmia, setArritmia] = useState("sinusal");
    const [latidos, setLatidos] = useState(72);
    
    // Animación fake del monitor
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setOffset(prev => (prev - 2) % 100);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const ritmos = [
        { id: "sinusal", nombre: "Ritmo Sinusal Normal", latidos: 72, severidad: "text-emerald-400" },
        { id: "taquicardia_ventricular", nombre: "Taquicardia Ventricular (TV)", latidos: 180, severidad: "text-red-500" },
        { id: "fibrilacion_ventricular", nombre: "Fibrilación Ventricular (FV)", latidos: 300, severidad: "text-rose-600 animate-pulse" },
        { id: "bloqueo", nombre: "Bloqueo AV Completo", latidos: 35, severidad: "text-amber-500" },
        { id: "asistolia", nombre: "Asistolia", latidos: 0, severidad: "text-slate-500" }
    ];

    const ritmoActual = ritmos.find(r => r.id === arritmia) || ritmos[0];

    const playShock = () => {
        setArritmia("sinusal");
        setLatidos(72);
    };

    return (
        <main className="min-h-screen text-slate-200 font-sans" style={{ backgroundColor: "#0b1120" }}>
            <Navbar />
            
            <div className="max-w-6xl mx-auto px-4 py-32">
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <Link href={`/${params.grado}`} className="text-red-500 hover:text-red-400 font-medium flex items-center gap-2 mb-6 transition-colors">
                            ← Volver al Módulo Universitario
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner bg-red-900/30 border border-red-500/30">
                                🩻
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white tracking-tight">Laboratorio EKG</h1>
                                <p className="text-slate-400">Simulador Avanzado de Monitoreo Electrocardiográfico</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl border border-slate-800 shadow-xl overflow-hidden mb-8">
                    {/* Pantalla del Monitor */}
                    <div className="bg-[#050B14] p-6 relative overflow-hidden h-64 border-b border-slate-800 flex flex-col justify-between">
                        
                        {/* Grid effect */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                        
                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <h3 className={`text-2xl font-black ${ritmoActual.severidad} uppercase tracking-widest`}>{ritmoActual.nombre}</h3>
                                <p className="text-slate-500 text-sm font-mono mt-1">LEAD II • x1.0 • 25mm/s • DIAG</p>
                            </div>
                            <div className="text-right">
                                <span className={`text-6xl font-black ${ritmoActual.severidad} drop-shadow-[0_0_15px_currentColor]`}>{arritmia === "asistolia" ? 0 : arritmia === "fibrilacion_ventricular" ? "---" : ritmoActual.latidos}</span>
                                <span className={`text-xl block ${ritmoActual.severidad} opacity-70`}>BPM</span>
                            </div>
                        </div>

                        {/* Fake SVG Trace Line */}
                        <div className="relative h-24 w-full flex items-end overflow-hidden mt-4" style={{ filter: "drop-shadow(0 0 5px rgba(34,197,94,0.5))" }}>
                            <svg width="200%" height="100" className={`absolute text-green-400 transition-all duration-300 ${arritmia === 'asistolia' ? 'text-red-600 opacity-50' : ''}`} style={{ transform: `translateX(${offset}px)` }}>
                                {arritmia === "sinusal" && (
                                    <path d="M0,50 L20,50 L25,45 L35,55 L40,50 L60,50 L65,20 L75,90 L85,50 L100,50 L110,40 L120,50 M130,50 L150,50 L155,45 L165,55 L170,50 L190,50 L195,20 L205,90 L215,50 L230,50 L240,40 L250,50" fill="none" stroke="currentColor" strokeWidth="3" />
                                )}
                                {arritmia === "taquicardia_ventricular" && (
                                    <path d="M0,50 L20,10 L40,90 L60,10 L80,90 L100,10 L120,90 L140,10 L160,90 L180,10 L200,90 L220,10" fill="none" stroke="currentColor" strokeWidth="4" />
                                )}
                                {arritmia === "fibrilacion_ventricular" && (
                                    <path d="M0,50 C10,30 20,70 30,40 S50,80 60,30 S80,60 90,50 S110,20 120,60 S140,40 150,50 S170,20 180,60 S200,40 210,50" fill="none" stroke="currentColor" strokeWidth="3" className="animate-pulse" />
                                )}
                                {arritmia === "bloqueo" && (
                                    <path d="M0,50 L40,50 L45,45 L50,50 L90,50 L95,45 L100,50 L130,50 L135,20 L155,90 L165,50 L200,50 L205,45 L210,50" fill="none" stroke="currentColor" strokeWidth="3" />
                                )}
                                {arritmia === "asistolia" && (
                                    <path d="M0,50 L500,50" fill="none" stroke="currentColor" strokeWidth="3" />
                                )}
                            </svg>
                        </div>
                    </div>

                    {/* Controles Clínicos */}
                    <div className="p-6">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Módulo de Alteración de Ritmo (Profesor)</h4>
                        <div className="flex flex-wrap gap-3">
                            {ritmos.map(r => (
                                <button 
                                    key={r.id} 
                                    onClick={() => { setArritmia(r.id); setLatidos(r.latidos); }}
                                    className={`px-4 py-2 border rounded-lg text-sm font-bold transition-all ${arritmia === r.id ? 'bg-slate-800 border-white text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500'}`}
                                >
                                    {r.nombre}
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-800">
                            <button onClick={playShock} className="bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] transition-all transform hover:scale-105 flex items-center gap-3">
                                <span>⚡</span> Administrar Choque (Desfibrilar)
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
