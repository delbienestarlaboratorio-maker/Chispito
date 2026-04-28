"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function UniversityExercisePlayer({ carrera, materia, bloqueId, datos }: { carrera: any, materia: any, bloqueId: string, datos: any }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const questions = datos.ejercicios.v1;
    const currentQ = questions[currentQuestion];

    const handleAnswer = (option: string) => {
        setSelectedOption(option);
        setShowExplanation(true);
        
        const isCorrect = option === currentQ.respuestaCorrecta;
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setShowExplanation(false);
        } else {
            // Guardar Progreso para desbloquear la malla
            if (typeof window !== "undefined") {
                const perc = score / questions.length;
                if (perc >= 0.5) { // 50% mínimo para aprobar bloque
                    const currentBlockNum = parseInt(bloqueId.replace('bloque-', ''), 10);
                    const nextBlock = currentBlockNum + 1;
                    const progressKey = `chispito_progress_${carrera.slug}_${materia.id}`;
                    
                    const savedProgress = parseInt(localStorage.getItem(progressKey) || '1', 10);
                    if (nextBlock > savedProgress) {
                        localStorage.setItem(progressKey, nextBlock.toString());
                    }
                }
            }
            setShowResult(true);
        }
    };

    return (
        <main className="min-h-screen text-slate-200 font-sans" style={{ backgroundColor: "#0b1120" }}>
            <Navbar />
            
            <div className="max-w-4xl mx-auto px-4 py-28">
                <div className="mb-8 flex justify-between items-center">
                    <Link href={`/${carrera.slug}/${materia.id}`} className="hover:text-white font-medium transition-colors" style={{ color: materia.color }}>
                        ← Abortar Simulación
                    </Link>
                    <div className="text-sm font-bold tracking-widest uppercase text-slate-500">
                        Bloque Clínico {bloqueId} • {currentQuestion + 1} / {questions.length}
                    </div>
                </div>

                {showResult ? (
                    <div className="bg-slate-900/50 rounded-3xl border p-12 text-center shadow-2xl relative overflow-hidden" style={{ borderColor: `${materia.color}20` }}>
                        <div className="text-9xl mb-6">
                            {score / questions.length >= 0.8 ? "🏆" : "🩺"}
                        </div>
                        <h2 className="text-3xl font-black text-white mb-4">Evaluación Finalizada</h2>
                        <p className="text-slate-400 max-w-lg mx-auto mb-8">
                            Has respondido correctamente el <strong className="text-white">{(score / questions.length * 100).toFixed(0)}%</strong> de los casos clínicos ( {score} de {questions.length} ).
                        </p>
                        
                        <div className="flex justify-center gap-4">
                            <Link href={`/${carrera.slug}/${materia.id}`} className="px-8 py-3 rounded-xl font-bold transition-all text-white hover:scale-105" style={{ backgroundColor: materia.color }}>
                                Volver al Perfil de la Materia
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 shadow-xl">
                        {/* Clinical Tracker */}
                        <div className="w-full h-2 bg-slate-950 rounded-full mb-8 overflow-hidden">
                            <div className="h-full transition-all duration-500" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%`, backgroundColor: materia.color }}></div>
                        </div>
                        
                        {/* Viñeta de Caso Clínico (Opcional) */}
                        {currentQ.vineta && (
                            <div className="mb-6 p-6 bg-slate-800/40 rounded-xl border border-slate-700/50">
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">📄 Viñeta de Caso Clínico</p>
                                <p className="text-slate-300 leading-relaxed font-medium">{currentQ.vineta}</p>
                            </div>
                        )}

                        <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                            {currentQ.pregunta}
                        </h3>

                        <div className="space-y-4 mb-8">
                            {currentQ.opciones.map((opcion: string, i: number) => {
                                const isSelected = selectedOption === opcion;
                                const isCorrect = opcion === currentQ.respuestaCorrecta;
                                
                                let bgColor = "bg-slate-800 hover:bg-slate-700";
                                let borderColor = "border-slate-700";
                                
                                if (showExplanation) {
                                    if (isCorrect) {
                                        bgColor = "bg-emerald-900/50";
                                        borderColor = "border-emerald-500";
                                    } else if (isSelected) {
                                        bgColor = "bg-red-900/50";
                                        borderColor = "border-red-500";
                                    } else {
                                        bgColor = "bg-slate-900/30 opacity-40";
                                    }
                                } else if (isSelected) {
                                    bgColor = "bg-slate-700"; 
                                }

                                return (
                                    <button
                                        key={i}
                                        disabled={showExplanation}
                                        onClick={() => handleAnswer(opcion)}
                                        className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all flex justify-between items-center ${bgColor} ${borderColor}`}
                                    >
                                        <span className={showExplanation && !isCorrect && !isSelected ? "text-slate-500" : "text-slate-200"}>{opcion}</span>
                                        {showExplanation && isCorrect && <span className="text-emerald-400 font-bold">✓ Correcto</span>}
                                        {showExplanation && isSelected && !isCorrect && <span className="text-red-400 font-bold">✗ Incorrecto</span>}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Panel de Retroalimentación */}
                        {showExplanation && (
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className={`p-6 rounded-2xl mb-6 border ${selectedOption === currentQ.respuestaCorrecta ? 'bg-emerald-950/30 border-emerald-900/50' : 'bg-red-950/30 border-red-900/50'}`}>
                                    <h4 className={`font-bold mb-2 ${selectedOption === currentQ.respuestaCorrecta ? 'text-emerald-400' : 'text-red-400'}`}>
                                        Análisis Clínico ({selectedOption === currentQ.respuestaCorrecta ? 'Acierto' : 'Fallo'})
                                    </h4>
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        {currentQ.retroalimentacion || (selectedOption === currentQ.respuestaCorrecta ? 
                                            [
                                                "Excelente correlación clínica. Recuerda que la medicina basada en evidencia siempre será tu mejor protocolo de actuación. 🩺",
                                                "Tu razonamiento fisiopatológico es acertado. Estos signos prodrómicos son la clave del diagnóstico diferencial. 🌟",
                                                "Magnífica extrapolación del cuadro clínico. Sigue cultivando tu ojo crítico para escenarios de alta complejidad médica. 🏆",
                                                "Precisión diagnóstica confirmada. Mantén este nivel de especificidad y sensibilidad en tu práctica hospitalaria. 🧬",
                                                "Resolución oportuna. La toma de decisiones bajo presión clínica salva vidas y optimiza pronósticos. ⚕️"
                                            ][currentQuestion % 5]
                                            : 
                                            [
                                                "La opción seleccionada difiere del consenso clínico actual. Una revisión a las Guías Clínicas aclarará el panorama. ¡Sigue puliendo tu criterio! 📖",
                                                "Este escenario presenta variables confusoras. Vuelve a examinar el cuadro clínico prestando especial atención a los síntomas pivote. 💡",
                                                "El diagnóstico diferencial requería considerar otra nosología prevalente... ¡El análisis iterativo es la base de la clínica médica, no te rindas! 💪",
                                                "El entrenamiento en simulación existe justo para afinar estos criterios. Replantear la anamnesis ayudará en el próximo caso. 🌱",
                                                "La medicina es 50% conocimiento y 50% práctica iterativa. ¡Cada fallo es un paso seguro hacia la maestría hospitalaria! 🚀"
                                            ][currentQuestion % 5]
                                        )}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <button 
                                        onClick={handleNext}
                                        className="px-8 py-3 rounded-xl font-bold transition-all text-white hover:scale-105 shadow-xl"
                                        style={{ backgroundColor: materia.color }}
                                    >
                                        Continuar Al Siguiente Caso →
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}
