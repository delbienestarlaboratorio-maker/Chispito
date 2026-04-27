"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Configuraciones dinámicas de escalas
const ESCALAS_DATA: Record<string, { titulo: string; desc: string; max: number; secciones: { titulo: string; opciones: { texto: string; puntos: number }[] }[]; interpretacion: (puntos: number) => { mensaje: string; color: string } }> = {
    glasgow: {
        titulo: "Escala de Coma de Glasgow (SCG)",
        desc: "Valoración del nivel de conciencia en pacientes con trauma craneoencefálico o deterioro neurológico.",
        max: 15,
        secciones: [
            {
                titulo: "Apertura Ocular (O)",
                opciones: [
                    { texto: "Espontánea (Normal)", puntos: 4 },
                    { texto: "A estímulos verbales (Al hablarle)", puntos: 3 },
                    { texto: "A estímulos dolorosos (Al dolor)", puntos: 2 },
                    { texto: "Ninguna (Ausencia total)", puntos: 1 }
                ]
            },
            {
                titulo: "Respuesta Verbal (V)",
                opciones: [
                    { texto: "Orientada y conversando", puntos: 5 },
                    { texto: "Desorientada, habla confusa", puntos: 4 },
                    { texto: "Palabras inapropiadas", puntos: 3 },
                    { texto: "Sonidos incomprensibles", puntos: 2 },
                    { texto: "Ninguna", puntos: 1 }
                ]
            },
            {
                titulo: "Respuesta Motora (M)",
                opciones: [
                    { texto: "Obedece órdenes verbales", puntos: 6 },
                    { texto: "Localiza el dolor", puntos: 5 },
                    { texto: "Retirada y flexión normal", puntos: 4 },
                    { texto: "Flexión anormal (Decorticación)", puntos: 3 },
                    { texto: "Extensión (Descerebración)", puntos: 2 },
                    { texto: "Ninguna (Flacidez general)", puntos: 1 }
                ]
            }
        ],
        interpretacion: (puntos) => {
            if (puntos === 15) return { mensaje: "Normal (Consciente)", color: "text-green-400 bg-green-400/10" };
            if (puntos >= 13) return { mensaje: "TCE Leve (Alerta temprana)", color: "text-amber-400 bg-amber-400/10" };
            if (puntos >= 9) return { mensaje: "TCE Moderado (Asistencia requerida)", color: "text-orange-400 bg-orange-400/10" };
            return { mensaje: "TCE Severo (Coma activo, considere Intubación)", color: "text-red-400 bg-red-400/10" };
        }
    },
    apgar: {
        titulo: "Test de APGAR (Neonatal)",
        desc: "Evaluación rápida de la vitalidad y adaptación del recién nacido a la vida extrauterina (1er y 5to minuto).",
        max: 10,
        secciones: [
            {
                titulo: "Apariencia (Color pélvico)",
                opciones: [
                    { texto: "Rosado completo", puntos: 2 },
                    { texto: "Acrocianosis (Extremidades azules)", puntos: 1 },
                    { texto: "Cianosis central (Azul/Pálido completo)", puntos: 0 },
                ]
            },
            {
                titulo: "Pulso (Frecuencia Cardíaca)",
                opciones: [
                    { texto: "> 100 latidos por minuto", puntos: 2 },
                    { texto: "< 100 latidos por minuto", puntos: 1 },
                    { texto: "Ausente", puntos: 0 },
                ]
            },
            {
                titulo: "Gesticulación (Irritabilidad refleja)",
                opciones: [
                    { texto: "Llanto vigoroso, tos, estornudo", puntos: 2 },
                    { texto: "Muecas, llanto débil", puntos: 1 },
                    { texto: "Ausente", puntos: 0 },
                ]
            },
            {
                titulo: "Actividad (Tono muscular)",
                opciones: [
                    { texto: "Movimiento activo", puntos: 2 },
                    { texto: "Flexión moderada de extremidades", puntos: 1 },
                    { texto: "Flácido", puntos: 0 },
                ]
            },
            {
                titulo: "Respiración (Esfuerzo respiratorio)",
                opciones: [
                    { texto: "Llanto fuerte, vigoroso", puntos: 2 },
                    { texto: "Lento, irregular", puntos: 1 },
                    { texto: "Ausente", puntos: 0 },
                ]
            }
        ],
        interpretacion: (puntos) => {
            if (puntos >= 7) return { mensaje: "Normal (No requiere maniobras)", color: "text-green-400 bg-green-400/10" };
            if (puntos >= 4) return { mensaje: "Depresión Moderada (Reanimación suave)", color: "text-amber-400 bg-amber-400/10" };
            return { mensaje: "Depresión Severa (Reanimación avanzada Inmediata)", color: "text-red-400 bg-red-400/10" };
        }
    }
};

export default function EscalasClinicas({ params }: { params: { grado: string } }) {
    const [escalaActiva, setEscalaActiva] = useState<"glasgow" | "apgar">("glasgow");
    const [selecciones, setSelecciones] = useState<Record<number, number>>({});

    const infoEscala = ESCALAS_DATA[escalaActiva];

    const cambiarEscala = (id: "glasgow" | "apgar") => {
        setEscalaActiva(id);
        setSelecciones({});
    };

    const handleSelect = (idxSeccion: number, puntos: number) => {
        setSelecciones(prev => ({ ...prev, [idxSeccion]: puntos }));
    };

    // Computar total actual
    const numSeccionesCompletadas = Object.keys(selecciones).length;
    const totalPuntos = Object.values(selecciones).reduce((acc, curr) => acc + curr, 0);
    const estaCompleta = numSeccionesCompletadas === infoEscala.secciones.length;
    const resultado = infoEscala.interpretacion(totalPuntos);

    return (
        <main className="min-h-screen text-slate-200 font-sans" style={{ backgroundColor: "#0b1120" }}>
            <Navbar />
            
            <div className="max-w-5xl mx-auto px-4 py-32">
                <div className="mb-8">
                    <Link href={`/${params.grado}`} className="text-emerald-500 hover:text-emerald-400 font-medium flex items-center gap-2 mb-6 transition-colors">
                        ← Volver al Módulo Universitario
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner bg-emerald-900/30 border border-emerald-500/30">
                            📊
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white tracking-tight">Suite de Escalas Clínicas</h1>
                            <p className="text-slate-400">Herramientas estandarizadas de valoración para triage y toma de decisiones.</p>
                        </div>
                    </div>
                </div>

                {/* Tabs de Selección */}
                <div className="flex gap-2 mb-8 bg-slate-900/40 p-1.5 rounded-2xl w-fit border border-slate-800">
                    <button 
                        onClick={() => cambiarEscala("glasgow")}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${escalaActiva === "glasgow" ? "bg-emerald-600/20 text-emerald-400 shadow-sm border border-emerald-500/20" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}
                    >
                        Escala Glasgow
                    </button>
                    <button 
                        onClick={() => cambiarEscala("apgar")}
                        className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${escalaActiva === "apgar" ? "bg-emerald-600/20 text-emerald-400 shadow-sm border border-emerald-500/20" : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"}`}
                    >
                        Test APGAR
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Interfaz Interactiva */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-2">{infoEscala.titulo}</h2>
                            <p className="text-slate-400 text-sm mb-8">{infoEscala.desc}</p>
                            
                            <div className="space-y-10">
                                {infoEscala.secciones.map((seccion, idxSec) => (
                                    <div key={idxSec}>
                                        <h3 className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-between border-b border-slate-800 pb-2">
                                            <span>{seccion.titulo}</span>
                                            {selecciones[idxSec] !== undefined && (
                                                <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs">Puntaje: {selecciones[idxSec]}</span>
                                            )}
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {seccion.opciones.map((opc, idxOpc) => {
                                                const isSelected = selecciones[idxSec] === opc.puntos;
                                                return (
                                                    <button
                                                        key={idxOpc}
                                                        onClick={() => handleSelect(idxSec, opc.puntos)}
                                                        className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 group flex items-center justify-between ${
                                                            isSelected 
                                                            ? "bg-emerald-600/20 border-emerald-500/50 shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)]" 
                                                            : "bg-slate-950/50 border-slate-800 hover:border-slate-600 hover:bg-slate-900"
                                                        }`}
                                                    >
                                                        <span className={`text-sm font-medium ${isSelected ? "text-emerald-200" : "text-slate-300"}`}>
                                                            {opc.texto}
                                                        </span>
                                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                                                            isSelected ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-500 group-hover:bg-slate-700 group-hover:text-slate-300"
                                                        }`}>
                                                            +{opc.puntos}
                                                        </span>
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* HUD - HUD Lateral Resultado */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden">
                            
                            {/* Ambient Light */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 blur-[80px] rounded-full mix-blend-screen opacity-50 ${estaCompleta ? (resultado.color.includes('green') ? 'bg-green-500' : resultado.color.includes('red') ? 'bg-red-500' : 'bg-amber-500') : 'bg-slate-500'}`}></div>

                            <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1 relative z-10">Puntuación Total</h3>
                            
                            <div className="mt-4 mb-6 relative z-10">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-7xl font-black text-white tracking-tighter drop-shadow-md">
                                        {totalPuntos}
                                    </span>
                                    <span className="text-xl font-bold text-slate-500">
                                        / {infoEscala.max}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex justify-between items-center bg-black/20 rounded-lg p-3 border border-white/5">
                                    <span className="text-xs text-slate-400">Progreso Evaluación</span>
                                    <span className="text-xs font-bold text-emerald-400">{numSeccionesCompletadas} / {infoEscala.secciones.length} completado</span>
                                </div>

                                {estaCompleta ? (
                                    <div className={`mt-6 p-5 rounded-xl border border-white/10 ${resultado.color}`}>
                                        <div className="flex items-start gap-3">
                                            <span className="text-xl">⚠️</span>
                                            <div>
                                                <h4 className="font-bold text-sm uppercase tracking-wide mb-1">Diagnóstico Estandarizado</h4>
                                                <p className="text-sm font-medium leading-relaxed opacity-90">{resultado.mensaje}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mt-6 p-5 rounded-xl border border-dashed border-slate-700 bg-slate-900/30">
                                        <p className="text-slate-400 text-sm italic text-center">Completa todos los rubros para obtener una interpretación clínica.</p>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 pt-4 border-t border-slate-800">
                                <button 
                                    onClick={() => setSelecciones({})}
                                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-xl transition-colors border border-slate-700"
                                >
                                    ↺ Reiniciar Evaluación
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
