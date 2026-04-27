const fs = require('fs');
const path = require('path');

const MATERIAS = {
    "anatomia": {
        bloques: 14,
        nombre: "Anatomía y Fisiología",
        preguntas: [
            { p: "¿Cuál es la válvula que separa la aurícula izquierda del ventrículo izquierdo?", o: ["Mitral o Bicúspide", "Tricúspide", "Aórtica", "Pulmonar"], c: "Mitral o Bicúspide", r: "La válvula mitral se llama así por su parecido anatómico a una mitra. A diferencia de la tricúspide (en el lado derecho), su falla provoca insuficiencia hacia las venas pulmonares." },
            { p: "El hueso más largo del cuerpo humano encargado de la hematopoyesis en su médula es:", o: ["Fémur", "Tibia", "Húmero", "Esternón"], c: "Fémur", r: "El fémur tiene una estructura esponjosa central robusta. Las fracturas de fémur pueden liberar médula al torrente venoso y causar la temida 'Embolia Grasa'." },
            { p: "¿Qué lóbulo cerebral es responsable primario de la corteza visual?", o: ["Occipital", "Frontal", "Parietal", "Temporal"], c: "Occipital", r: "Un traumatismo del lóbulo occipital posterior (Caída de espaldas) puede generar ceguera cortical momentánea o permanente sin provocar daño a los ojos mismos." },
            { v: "Ingresa paciente ansioso, con pupilas dilatadas y taquicardia sostenida.", p: "¿Cuál es el neurotransmisor principal del sistema parasimpático encargado de REVERTIR este cuadro (rest and digest)?", o: ["Acetilcolina", "Noradrenalina", "Dopamina", "Serotonina"], c: "Acetilcolina", r: "La acetilcolina disminuirá la frecuencia cardíaca, promoverá la digestión y producirá miosis. Las aminas (Noradrenalina/Dopamina) son simpáticas y empeorarían la taquicardia." },
            { p: "La filtración glomerular ocurre específicamente en:", o: ["Módulo de Malpighi / Corpúsculo Renal", "Asa de Henle", "Túbulo contorneado distal", "Uréter"], c: "Módulo de Malpighi / Corpúsculo Renal", r: "Es aquí donde la cápsula de Bowman rodea al glomérulo y filtra el plasma. El Asa de Henle solo concentra orina reabsorbiendo agua y sodio." }
        ]
    },
    "farmacologia": {
        bloques: 10,
        nombre: "Farmacología Básica",
        preguntas: [
            { p: "El mecanismo de acción de los betalactámicos consiste en:", o: ["Inhibición de la síntesis de pared celular bacteriana", "Inhibición de subunidad 50S ribosomal", "Inhibición de ADN girasa", "Bloqueo de canales de calcio"], c: "Inhibición de la síntesis de pared celular bacteriana", r: "Fármacos como las penicilinas y cefalosporinas rompen la pared biológica, provocando lisis bacteriana. No atacan a las células humanas porque no tenemos pared celular, solo membrana." },
            { v: "Paciente traído por paramédicos con depresión respiratoria (FR: 6), pupilas puntiformes (miosis) y estupor.", p: "Antídoto primario vital:", o: ["Naloxona", "Flumazenilo", "Acetilcisteína", "Vitamina K"], c: "Naloxona", r: "La tríada (Depresión respiratoria + Miosis + Estupor) es clásica de intoxicación por opiáceos. La Naloxona debe administrarse inmediatamente IV para evitar paro respiratorio." },
            { p: "Antídoto primario para la intoxicación por Benzodiacepinas:", o: ["Flumazenilo", "Naloxona", "Atropina", "Carbón activado"], c: "Flumazenilo", r: "El Flumazenilo compite por los receptores GABA revertiendo el coma inducido por benzodiacepinas (Clonazepam, Diazepam). Ojo: puede inducir convulsiones si hay dependencia crónica." },
            { p: "Fármaco inotrópico positivo y cronotrópico negativo usado en Falla Cardíaca:", o: ["Digoxina", "Epinefrina", "Lidocaína", "Amiodarona"], c: "Digoxina", r: "Aumenta la fuerza de contracción del corazón (inotrópico positivo) pero lo frena para que se relaje mejor (cronotrópico negativo). Es de margen terapéutico muy estrecho (toxicidad fácil)." }
        ]
    },
    // Adding basics for the others to verify the system works
    "microbiologia": {
        bloques: 8, nombre: "Microbiología",
        preguntas: [
            { p: "¿Qué bacteria es la causa más frecuente de IVU complicadas?", o: ["Escherichia coli", "Pseudomonas aeruginosa", "Staphylococcus aureus", "Klebsiella"], c: "Escherichia coli", r: "E. coli es responsable de más del 80% de las IVUs debido a la cercanía del tracto gastrointestinal (colonización retrógrada)." },
            { p: "Patógeno Gram positivo formador de esporas asociado a colitis pseudomembranosa post-antibióticos:", o: ["Clostridioides difficile", "Bacillus anthracis", "Listeria", "Streptococcus"], c: "Clostridioides difficile", r: "Aparece cuando abusamos de antibióticos (como clindamicina o fluoroquinolonas) y destruimos la flora natural del colon, causando diarreas fétidas e intratables." }
        ]
    },
    "bioquimica": {
        bloques: 7, nombre: "Bioquímica",
        preguntas: [
            { p: "La glucólisis anaerobia produce como producto final:", o: ["Ácido láctico (Lactato)", "Piruvato", "Acetil-CoA", "Oxaloacetato"], c: "Ácido láctico (Lactato)", r: "Sin oxígeno, el piruvato se fermenta a lactato. Clínicamente esto causa acidosis metabólica en pacientes con choque (tejidos no perfundidos)." }
        ]
    },
    "fundamentos": {
        bloques: 15, nombre: "Fundamentos de Enfermería",
        preguntas: [
            { v: "Requieres colocar a un paciente en cama que presenta disnea aguda y reflujo severo.", p: "Posición corporal indicada:", o: ["Fowler o Semi-Fowler", "Decúbito supino", "Trendelenburg", "Sims"], c: "Fowler o Semi-Fowler", r: "Elevar la cama entre 30 y 45 grados quita presión abdominal sobre el diafragma, facilitando la ventilación y evitando que el ácido gástrico regrese por gravedad." },
            { p: "¿Cuál es el primer eslabón en la cadena de prevención de infecciones intrahospitalarias?", o: ["Lavado de manos clínico", "Esterilización CEYE", "Uso de guantes", "Aislamiento"], c: "Lavado de manos clínico", r: "Los guantes NO sustituyen el lavado de manos. Es mandatorio lavar antes, durante y después del contacto o manipulación de vías invasivas." }
        ]
    },
    "pae": {
        bloques: 10, nombre: "Proceso de Atención (PAE)",
        preguntas: [
            { p: "Primera etapa del PAE donde recolectas datos físicos y psicológicos:", o: ["Valoración", "Diagnóstico", "Planeación", "Ejecución"], c: "Valoración", r: "Las interacciones y la historia clínica suceden aquí; si fallas en recolectar bien los datos (subjetivos y objetivos), tu diagnóstico NANDA será erróneo." }
        ]
    },
    "quirurgica": {
        bloques: 16, nombre: "Enfermería Quirúrgica",
        preguntas: [
            { p: "Posición quirúrgica para cirugías ginecológicas transvaginales:", o: ["Litotomía", "Fowler", "Prono", "Trendelenburg invertida"], c: "Litotomía", r: "Requiere colocar las piernas en estribos, elevando la pelvis y exponiendo el área perianal y vulvar. Es vital cuidar que no haya compresión nerviosa o trombosis por tiempos anestésicos largos." }
        ]
    },
    "materno": {
        bloques: 12, nombre: "Materno-Infantil y Pediatría",
        preguntas: [
            { v: "Al minuto 1 de nacimiento, un neonato presenta llanto fuerte, extremidades rosadas pero acrocianosis (manos azules), FR 50, se mueve activo.", p: "Apgar estimado:", o: ["8-9", "4-6", "0-3", "10"], c: "8-9", r: "Se resta 1 o 2 puntos por la acrocianosis (color azul en manos), lo cual es normal en las primeras horas. Entra en el rango de 'Sin Depresión', pasa a alojamiento conjunto con la madre." }
        ]
    },
    "uci": {
        bloques: 12, nombre: "Cuidados Intensivos (UCI)",
        preguntas: [
            { v: "Monitoreas el cableado de un paciente hipotenso.", p: "Parámetro normal de la Presión Venosa Central (PVC):", o: ["2 a 8 mmHg", "15 a 20 mmHg", "0 a -5 mmHg", "20 a 30 mmHg"], c: "2 a 8 mmHg", r: "Si está baja (ej. 1 mmHg) el paciente está deshidratado o sangrando. Si está alta (ej. 15 mmHg) el corazón tiene sobrecarga de líquidos o bloqueo obstructivo pulmonar." },
            { p: "Ritmo de paro cardíaco DESFIBRILABLE:", o: ["Fibrilación Ventricular (FV)", "Asistolia", "AESP", "Bradicardia Sinusal"], c: "Fibrilación Ventricular (FV)", r: "La descarga eléctrica sirve para 'resetear' un corazón en caos fibrilante. Dispararle a un corazón liso (asistolia) no sirve de nada, ahí solo se da masaje y adrenalina." }
        ]
    },
    "gestion": {
        bloques: 6, nombre: "Gestión de Servicios",
        preguntas: [
            { p: "Cálculo normativo del Índice de Enfermera-Paciente (IEP) en Servicios Generales:", o: ["1 por cada 6-8", "1 por cada 15", "2 por paciente", "1 por piso"], c: "1 por cada 6-8", r: "Un cociente mayor aumenta drásticamente las omisiones de cuidado, tromboembolias y caídas nocturnas. En UCI el estándar sí se reduce a 1 por cada 2 pacientes críticos." }
        ]
    }
};

const FILLERS = [
    { p: "¿Vía de administración con biodisponibilidad del 100% inmediata?", o: ["Intravenosa", "Intramuscular", "Sublingual", "Oral"], c: "Intravenosa", r: "Al entrar directo al torrente sanguíneo central, evita el efecto de primer paso hepático por completo." },
    { p: "¿Signo clínico universal temprano de la hipoxia cerebral?", o: ["Alteración del estado de alerta (Ansiedad)", "Bradicardia profunda", "Cianosis central", "Fiebre"], c: "Alteración del estado de alerta (Ansiedad)", r: "Antes de ponerse azul (cianosis) que es un evento súmamente tardío, la neurona exige oxígeno disparando ansiedad brutal, agresividad y confusión en el paciente." },
    { p: "Frecuencia de compresiones torácicas en RCP AHA:", o: ["100 a 120 / min", "80 a 100 / min", "140 / min", "160 / min"], c: "100 a 120 / min", r: "Más rápido que eso no deja que el corazón se llene de sangre antes de la siguiente compresión. Más bajo que eso no genera perfusión coronaria mínima (15 mmHg)." }
];

const basePath = path.join(__dirname, '../src/data/exercises/enfermeria');

function generateList(materiaKey, bloqueIndex) {
    const core = MATERIAS[materiaKey].preguntas;
    const mix = [...core.sort(() => 0.5 - Math.random()).slice(0, 3), ...FILLERS.sort(() => 0.5 - Math.random()).slice(0, 5)];
    return mix.map((q, i) => ({
        id: `enf_${materiaKey}_${bloqueIndex}_${i}`,
        tipo: 'selección',
        vineta: q.v || "",
        pregunta: q.p,
        opciones: q.o.sort(() => 0.5 - Math.random()),
        respuestaCorrecta: q.c,
        retroalimentacion: q.r
    }));
}

if (!fs.existsSync(basePath)) fs.mkdirSync(basePath, { recursive: true });

for (const [mKey, mData] of Object.entries(MATERIAS)) {
    const matPath = path.join(basePath, mKey);
    if (!fs.existsSync(matPath)) fs.mkdirSync(matPath, { recursive: true });

    for (let b = 1; b <= mData.bloques; b++) {
        const payload = {
            grado: "enfermeria", materia: mKey, bloque: b,
            nombre: `${mData.nombre} Nivel ${b}`, 
            meses: `Evaluación Clínica ${b}`, 
            temas: ["Fisiopatología", "Normatividad", "Casos Clínicos"],
            teoria: `## 📘 Introducción a ${mData.nombre} - Módulo ${b}

A lo largo de este bloque, analizaremos los fundamentos teóricos críticos necesarios para sobrevivir en un entorno de guardia hospitalaria real.

### Competencia Médica a Desarrollar
En esta guardia, tu objetivo será dominar la semiología y descartar factores de riesgo que puedan comprometer la vida del paciente en los primeros 10 minutos de ingreso.

> [!IMPORTANTE]
> La bibliografía oficial de la Secretaría de Salud y el protocolo de enfermería (NOMs mexicanas) sustentan las respuestas que enfrentarás en las viñetas clínicas siguientes.

**Puntos clave a recordar antes del caso:**
* Evalúa siempre la escena y los signos vitales antes de cualquier acción invasiva.
* Documenta de manera exhaustiva en hojas de enfermería (Recuerda: si no está escrito, clínicamente no pasó).
* Conoce los algoritmos para evitar complicaciones fatales (A-B-C-D-E).

Al terminar de repasar mentalmente este abordaje, haz clic en el botón inferior para enfrentarte a los casos.`,
            totalEjercicios: 8,
            ejercicios: { v1: generateList(mKey, b), v2: [] }
        };
        fs.writeFileSync(path.join(matPath, `bloque-${b}.json`), JSON.stringify(payload, null, 4));
    }
}
console.log("¡Motor Clínico de Generación (Viñetas y Rationales) reconstruido al 100%!");
