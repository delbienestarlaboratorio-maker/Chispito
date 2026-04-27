"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Pequeño mock de taxonomía real
const NANDA_DATABASE = [
    {
        codigo: "00004",
        dominio: "01 Promoción de la Salud",
        clase: "02 Gestión de la salud",
        etiqueta: "Riesgo de infección",
        definicion: "Vulnerable a una invasión y multiplicación de organismos patógenos que puede comprometer la salud.",
        nic: ["6540 Control de Infecciones", "6550 Protección contra las infecciones"],
        noc: ["0703 Severidad de la Infección", "1902 Control del riesgo"]
    },
    {
        codigo: "00032",
        dominio: "04 Actividad/Reposo",
        clase: "02 Actividad/Ejercicio",
        etiqueta: "Patrón respiratorio ineficaz",
        definicion: "La inspiración y/o espiración no proporciona una ventilación adecuada.",
        nic: ["3320 Oxigenoterapia", "3140 Manejo de las vías aéreas", "3350 Monitorización respiratoria"],
        noc: ["0403 Estado respiratorio: Ventilación", "0415 Estado respiratorio"]
    },
    {
        codigo: "00132",
        dominio: "12 Confort",
        clase: "01 Confort Físico",
        etiqueta: "Dolor agudo",
        definicion: "Experiencia sensitiva y emocional desagradable ocasionada por una lesión tisular real o potencial, de inicio súbito con intensidad de leve a grave.",
        nic: ["1400 Manejo del dolor", "2210 Administración de analgésicos"],
        noc: ["1605 Control del dolor", "2102 Nivel del dolor"]
    },
    {
        codigo: "00028",
        dominio: "03 Eliminación e Intercambio",
        clase: "01 Función Urinaria",
        etiqueta: "Riesgo de déficit de volumen de líquidos",
        definicion: "Vulnerable a sufrir una deshidratación vascular, celular o intracelular que puede comprometer la salud.",
        nic: ["4120 Manejo de líquidos", "4130 Monitorización de líquidos", "4180 Manejo de la hipovolemia"],
        noc: ["0601 Equilibrio hídrico", "0602 Hidratación"]
    }
];

export default function BuscadorNANDA({ params }: { params: { grado: string } }) {
    const [query, setQuery] = useState("");
    const [searchType, setSearchType] = useState<"etiqueta" | "codigo">("etiqueta");

    const filtered = NANDA_DATABASE.filter(item => {
        if (!query) return true;
        if (searchType === "etiqueta") {
            return item.etiqueta.toLowerCase().includes(query.toLowerCase()) || item.dominio.toLowerCase().includes(query.toLowerCase());
        }
        return item.codigo.includes(query);
    });

    return (
        <main className="min-h-screen text-slate-200 font-sans" style={{ backgroundColor: "#0b1120" }}>
            <Navbar />
            
            <div className="max-w-6xl mx-auto px-4 py-32">
                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <Link href={`/${params.grado}`} className="text-purple-500 hover:text-purple-400 font-medium flex items-center gap-2 mb-6 transition-colors">
                            ← Volver al Módulo Universitario
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner bg-purple-900/30 border border-purple-500/30">
                                🧠
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-white tracking-tight">Buscador Clínico PAE</h1>
                                <p className="text-slate-400">Taxonomía NANDA Internacional - Integración NIC / NOC</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-xl backdrop-blur-sm mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex bg-slate-950 border border-slate-700 rounded-xl overflow-hidden p-1 shadow-inner h-14">
                            <button 
                                onClick={() => setSearchType("etiqueta")}
                                className={`px-4 font-bold text-sm rounded-lg transition-colors ${searchType === "etiqueta" ? "bg-purple-600/20 text-purple-400" : "text-slate-400 hover:text-white"}`}
                            >
                                Por Diagnóstico
                            </button>
                            <button 
                                onClick={() => setSearchType("codigo")}
                                className={`px-4 font-bold text-sm rounded-lg transition-colors ${searchType === "codigo" ? "bg-purple-600/20 text-purple-400" : "text-slate-400 hover:text-white"}`}
                            >
                                Por Código
                            </button>
                        </div>
                        <input 
                            type="text" 
                            placeholder={searchType === "etiqueta" ? "Ej. 'Dolor agudo', 'Infección', 'Riesgo'..." : "Ej. '00132', '00004'..."}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-5 h-14 text-white placeholder-slate-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all shadow-inner text-lg"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 bg-slate-900/30 rounded-2xl border border-dashed border-slate-700">
                            <span className="text-4xl filter grayscale opacity-30 mb-4 block">🔍</span>
                            <h3 className="text-slate-400 font-bold">No se encontraron diagnósticos</h3>
                            <p className="text-slate-500 text-sm">Prueba ajustando los términos de búsqueda.</p>
                        </div>
                    ) : (
                        filtered.map(item => (
                            <div key={item.codigo} className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-colors shadow-lg group">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-1/2">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="bg-purple-500/20 text-purple-400 font-mono font-bold px-3 py-1 rounded-md text-sm border border-purple-500/30">
                                                [{item.codigo}]
                                            </span>
                                            <h2 className="text-xl font-black text-white group-hover:text-purple-300 transition-colors">{item.etiqueta}</h2>
                                        </div>
                                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                                            {item.dominio} • {item.clase}
                                        </p>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                            <span className="text-slate-500 font-bold mr-2">Definición:</span>
                                            {item.definicion}
                                        </p>
                                    </div>
                                    <div className="md:w-1/2 flex flex-col sm:flex-row gap-4 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                                        
                                        <div className="flex-1 bg-teal-950/30 rounded-xl p-4 border border-teal-500/20">
                                            <h4 className="text-teal-400 text-xs font-bold uppercase mb-3 flex items-center gap-2"><span>🎯</span> Resultados (NOC)</h4>
                                            <ul className="space-y-2">
                                                {item.noc.map(n => (
                                                    <li key={n} className="text-teal-100/70 text-sm flex gap-2">
                                                        <span className="text-teal-500/50 opacity-50">└</span> {n}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex-1 bg-amber-950/30 rounded-xl p-4 border border-amber-500/20">
                                            <h4 className="text-amber-400 text-xs font-bold uppercase mb-3 flex items-center gap-2"><span>🚑</span> Intervenciones (NIC)</h4>
                                            <ul className="space-y-2">
                                                {item.nic.map(n => (
                                                    <li key={n} className="text-amber-100/70 text-sm flex gap-2">
                                                        <span className="text-amber-500/50 opacity-50">└</span> {n}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                
                <div className="mt-12 text-center">
                    <p className="text-slate-600 text-xs">Simulador demostrativo para uso académico. Creado para Chispito Pro Profesional.</p>
                </div>
            </div>
        </main>
    );
}
