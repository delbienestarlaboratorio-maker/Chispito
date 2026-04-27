"use client";

import { useState } from "react";
import UniversityExercisePlayer from "./UniversityExercisePlayer";
import UniversityTheoryModule from "./UniversityTheoryModule";

/**
 * Controlador de Flujo Universitario
 * Determina si el alumno está en el "Aula Teórica" o si ya pasó a la "Guardia Clínica" (Examen).
 */
export default function UniversityFlowWrapper({ carrera, materia, bloqueId, datos }: { carrera: any, materia: any, bloqueId: string, datos: any }) {
    const [view, setView] = useState<"theory" | "exam">("theory");

    if (view === "theory") {
        return (
            <UniversityTheoryModule 
                carrera={carrera} 
                materia={materia} 
                bloqueId={bloqueId} 
                datos={datos} 
                onStartExam={() => setView("exam")} 
            />
        );
    }

    // Ya pasó la teoría, renderiza el motor de examen
    return (
        <UniversityExercisePlayer 
            carrera={carrera} 
            materia={materia} 
            bloqueId={bloqueId} 
            datos={datos} 
        />
    );
}
