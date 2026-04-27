"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function ProfesorEditorModule({ params }: { params: { carrera: string, materia: string, bloque: string } }) {
    const { carrera, materia, bloque } = params;
    const [payload, setPayload] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch(`/api/teacher/get-module?carrera=${carrera}&materia=${materia}&bloque=${bloque}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) setMessage(data.error);
                else setPayload(data);
                setLoading(false);
            })
            .catch(err => {
                setMessage(err.message);
                setLoading(false);
            });
    }, [carrera, materia, bloque]);

    const handleSave = async () => {
        setSaving(true);
        setMessage("Guardando módulo en el servidor...");
        try {
            const res = await fetch('/api/teacher/save-module', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ carrera, materia, bloque, payload })
            });
            const result = await res.json();
            if (result.success) {
                setMessage("✅ ¡Módulo Guardado Exitosamente! Ya está en vivo en la plataforma.");
                setTimeout(() => setMessage(""), 3000);
            } else {
                setMessage("❌ Error: " + result.error);
            }
        } catch (err: any) {
            setMessage("❌ Excepción de red: " + err.message);
        }
        setSaving(false);
    };

    const updateEjercicio = (i: number, clave: string, valor: any) => {
        const newPayload = { ...payload };
        newPayload.ejercicios.v1[i][clave] = valor;
        setPayload(newPayload);
    };

    const updateOpcion = (ejIndex: number, opIndex: number, valor: string) => {
        const newPayload = { ...payload };
        newPayload.ejercicios.v1[ejIndex].opciones[opIndex] = valor;
        setPayload(newPayload);
    };

    if (loading) return <div className="text-white p-20 text-center text-xl">Cargando base de datos del módulo...</div>;
    if (!payload && !loading) return <div className="text-red-500 p-20 text-center">{message || "No se pudo cargar"}</div>;

    return (
        <main className="min-h-screen text-slate-200 font-sans pb-16" style={{ backgroundColor: "#0f172a" }}>
            <Navbar />
            <div className="max-w-6xl mx-auto px-4 py-28 relative">
                
                {/* Cabecera Editor */}
                <div className="bg-slate-900 border border-slate-700/50 rounded-2xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl sticky top-24 z-40 backdrop-blur-md bg-opacity-90">
                    <div>
                        <Link href="/profesores" className="text-blue-400 hover:text-blue-300 text-sm font-bold block mb-2">← Volver al Hub</Link>
                        <h1 className="text-2xl font-black text-white">{payload.nombre}</h1>
                        <p className="text-slate-400">Población Dinámica del Sistema (Escritura en Caliente)</p>
                    </div>
                    <div className="flex items-center gap-4">
                        {message && <span className="text-sm font-bold text-emerald-400">{message}</span>}
                        <button 
                            disabled={saving}
                            onClick={handleSave} 
                            className={`px-8 py-4 rounded-xl font-black text-white transition-all shadow-xl ${saving ? 'bg-slate-600' : 'bg-emerald-600 hover:bg-emerald-500'}`}
                        >
                            {saving ? 'Escribiendo en FS...' : '💾 Guardar Cambios en Vivo'}
                        </button>
                    </div>
                </div>

                {/* Editor Teórico (Markdown) */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-lg mb-8">
                    <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2"><span className="text-2xl">📓</span> Aula Virtual Teórica</h2>
                    <p className="text-slate-500 text-sm mb-6">Aquí escribes la lección Magistral (Soporta Markdown ##, *, e inyecciones de &gt; [!IMPORTANTE]).</p>
                    <textarea 
                        className="w-full h-96 bg-slate-950 border border-slate-700 rounded-xl p-6 text-slate-300 font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        value={payload.teoria}
                        onChange={(e) => setPayload({...payload, teoria: e.target.value})}
                    />
                </div>

                {/* Editor de Ejercicios */}
                <div className="space-y-8">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2"><span className="text-2xl">🩺</span> Simulador de Casos Clínicos ({payload.ejercicios.v1.length} Reactivos)</h2>
                    
                    {payload.ejercicios.v1.map((ej: any, i: number) => (
                        <div key={i} className="bg-slate-900 rounded-2xl border border-slate-800 p-8 shadow-lg">
                            <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                                <h3 className="text-lg font-bold text-blue-400">Reactivo {i + 1}</h3>
                                <div className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-400">JSON ID: {ej.id}</div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-2">Viñeta Clínica Historial (Opcional)</label>
                                        <textarea 
                                            className="w-full h-24 bg-slate-950 border border-slate-700 rounded-xl p-4 text-sm text-slate-300"
                                            value={ej.vineta}
                                            onChange={(e) => updateEjercicio(i, 'vineta', e.target.value)}
                                            placeholder="Ingresa paciente masculino de 50 años referiendo..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-slate-400 mb-2">Punto de Interrogación / Pregunta</label>
                                        <textarea 
                                            className="w-full h-20 bg-slate-950 border border-slate-700 text-blue-100 rounded-xl p-4 text-sm font-bold"
                                            value={ej.pregunta}
                                            onChange={(e) => updateEjercicio(i, 'pregunta', e.target.value)}
                                            placeholder="¿Cuál es el mecanismo fisiopatológico...?"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-emerald-400 mb-2">Explicación Clínica (Retroalimentación Final)</label>
                                        <textarea 
                                            className="w-full h-28 bg-emerald-950/20 border border-emerald-900/50 rounded-xl p-4 text-sm text-emerald-200"
                                            value={ej.retroalimentacion}
                                            onChange={(e) => updateEjercicio(i, 'retroalimentacion', e.target.value)}
                                            placeholder="Esta opción es la correcta porque la cascada de coagulación..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4 bg-slate-800/30 p-6 rounded-2xl border border-slate-800">
                                    <label className="block text-sm font-bold text-slate-400 mb-2">4 Opciones de Respuesta</label>
                                    {[0, 1, 2, 3].map(opIndex => (
                                        <div key={opIndex} className="flex items-center gap-3">
                                            <span className="text-slate-500 font-bold w-6">{opIndex + 1}.</span>
                                            <input 
                                                type="text"
                                                className={`w-full bg-slate-950 border rounded-lg p-3 text-sm transition-colors ${ej.opciones[opIndex] === ej.respuestaCorrecta ? 'border-emerald-500 text-emerald-300' : 'border-slate-700 text-slate-300'}`}
                                                value={ej.opciones[opIndex]}
                                                onChange={(e) => updateOpcion(i, opIndex, e.target.value)}
                                            />
                                            {/* Botón rápido para marcar como correcta */}
                                            <button 
                                                onClick={() => updateEjercicio(i, 'respuestaCorrecta', ej.opciones[opIndex])}
                                                className={`shrink-0 p-2 rounded-lg text-xs font-bold transition-colors ${ej.opciones[opIndex] === ej.respuestaCorrecta ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}`}
                                            >
                                                {ej.opciones[opIndex] === ej.respuestaCorrecta ? '✅ Correcta' : 'Hacer Correcta'}
                                            </button>
                                        </div>
                                    ))}
                                    
                                    <div className="mt-6 pt-6 border-t border-slate-700">
                                        <label className="block text-xs font-bold text-slate-500 mb-2 uppercase">Validación del Sistema</label>
                                        <p className="text-sm">
                                            Respuesta Activa: <strong className="text-emerald-400 bg-emerald-900/30 px-2 py-1 rounded">{ej.respuestaCorrecta}</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
