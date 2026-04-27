"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const FARMACOS = [
    { id: "norepinefrina", nombre: "Norepinefrina", tipo: "Vasoactivo", color: "border-red-500" },
    { id: "fentanilo", nombre: "Fentanilo", tipo: "Analgésico Opioide", color: "border-purple-500" },
    { id: "propofol", nombre: "Propofol", tipo: "Anestésico General", color: "border-slate-300" },
    { id: "bicarbonato", nombre: "Bicarbonato de Sodio", tipo: "Alcalinizante", color: "border-sky-400" },
    { id: "midazolam", nombre: "Midazolam", tipo: "Benzodiacepina", color: "border-amber-400" },
    { id: "amiodarona", nombre: "Amiodarona", tipo: "Antiarrítmico", color: "border-indigo-400" }
];

export default function CompatibilidadIV({ params }: { params: { grado: string } }) {
    const [drogaA, setDrogaA] = useState<string>("norepinefrina");
    const [drogaB, setDrogaB] = useState<string>("bicarbonato");

    const getCompatibilidad = () => {
        // Reglas estrictas de incompatibilidad (Simulación C)
        const d = [drogaA, drogaB];
        if (drogaA === drogaB) return { estado: "MISMA DROGA", msg: "Seleccione dos fármacos distintos.", icon: "⚠️", bg: "bg-slate-800" };
        
        if (d.includes("bicarbonato") && (d.includes("norepinefrina") || d.includes("amiodarona") || d.includes("midazolam"))) {
            return { estado: "INCOMPATIBLE", msg: "Riesgo extremo de precipitación capilar o inactivación clínica. Use lúmenes separados (Vía Central).", icon: "💥", bg: "bg-red-900/50" };
        }

        if (d.includes("propofol") && (d.includes("midazolam"))) {
            return { estado: "PRECAUCIÓN", msg: "Ambas son emulsiones complejas. Verifique visualmente en la llave de 3 vías. Posible alteración farmacocinética conjunta.", icon: "👀", bg: "bg-amber-900/50" };
        }

        return { estado: "COMPATIBLE EN 'Y'", msg: "No documenta precipitación o inactivación in vitro. Seguro para infusión por misma llave en Y.", icon: "✅", bg: "bg-emerald-900/50" };
    };

    const res = getCompatibilidad();

    return (
        <main className="min-h-screen text-slate-200 font-sans" style={{ backgroundColor: "#0b1120" }}>
            <Navbar />
            
            <div className="max-w-4xl mx-auto px-4 py-32">
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <Link href={`/${params.grado}`} className="text-amber-500 hover:text-amber-400 font-medium flex items-center gap-2 mb-6 transition-colors">
                            ← Volver al Módulo Universitario
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner bg-amber-900/30 border border-amber-500/30">
                                💉
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white tracking-tight">Cruces Clínicos Vía 'Y'</h1>
                                <p className="text-slate-400">Simulador de Precipitación Intravenosa Hospitalaria</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Droga A */}
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Lumen Primario (Vía 1)</h3>
                        <div className="space-y-3">
                            {FARMACOS.map(f => (
                                <button
                                    key={`A-${f.id}`}
                                    onClick={() => setDrogaA(f.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between ${drogaA === f.id ? `bg-slate-800 ${f.color} shadow-lg font-bold text-white` : 'bg-slate-950 border-slate-700 text-slate-400 opacity-70 hover:opacity-100 hover:border-slate-500'}`}
                                >
                                    <span>{f.nombre}</span>
                                    <span className="text-xs uppercase opacity-70">{f.tipo}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Droga B */}
                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Droga Cruzada (Vía 2 / "Y")</h3>
                        <div className="space-y-3">
                            {FARMACOS.map(f => (
                                <button
                                    key={`B-${f.id}`}
                                    onClick={() => setDrogaB(f.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between ${drogaB === f.id ? `bg-slate-800 ${f.color} shadow-lg font-bold text-white` : 'bg-slate-950 border-slate-700 text-slate-400 opacity-70 hover:opacity-100 hover:border-slate-500'}`}
                                >
                                    <span>{f.nombre}</span>
                                    <span className="text-xs uppercase opacity-70">{f.tipo}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Resultado Analítico */}
                <div className={`p-8 rounded-2xl border border-white/10 ${res.bg} transition-colors duration-500 shadow-2xl relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 p-4 opacity-10 blur-sm pointer-events-none text-9xl">
                        {res.icon}
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="text-6xl mb-4">{res.icon}</div>
                        <h2 className="text-3xl font-black text-white mb-2">{res.estado}</h2>
                        <p className="text-lg text-slate-300 max-w-2xl">{res.msg}</p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-600 text-xs">Simulador demostrativo para uso académico. Basado en guías de Trissel's Handbook on Injectable Drugs.</p>
                </div>
            </div>
        </main>
    );
}
