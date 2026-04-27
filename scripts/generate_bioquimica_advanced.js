const fs = require('fs');
const path = require('path');

const dataBlocks = {
    1: {
        teoria: `## 🧪 Dinámica Mitocondrial y Glucólisis en Estados de Choque
En la práctica de Cuidados Críticos, el metabolismo de carbohidratos pierde su encuadre fisiológico ideal y se convierte en una carrera contra la disoxia celular. 
### 1. Desvío Anaeróbico y la Brecha Aniónica (Anion Gap)
Bajo hipoperfusión severa (Choque Hemorrágico o Cardiogénico), la entrega de oxígeno (DO2) cae por debajo del consumo crítico (VO2). La cadena transportadora de electrones mitocondrial se frena abruptamente por ausencia del aceptor final (Oxígeno). La célula acude a la glucólisis anaerobia rápida, donde el Piruvato es reducido por la enzima **Lactato Deshidrogenasa (LDH)** hacia Ácido Láctico, regenerando NAD+ para mantener viva la glucólisis.
> [!IMPORTANTE]
> La Hiperlactatemia Tisular tipo A (por hipoxia) agota rápidamente el buffer de Bicarbonato (HCO3). Al reducirse el bicarbonato, la **Brecha Aniónica (Na+ - (Cl- + HCO3-))** se dispara por encima de 12 mEq/L, marcando el inicio del paro metabólico.

### 2. Disfunción Endotelial y Glucocálix
En cuadros sépticos o traumatismos masivos, el estado hiperglucémico por resistencia periférica a la insulina (tormenta adrenérgica y liberación de cortisol) daña las cargas negativas del glucocálix endotelial, induciendo una "fuga de fluidos" al tercer espacio sistémico. El manejo estricto de glucemia en UCI (140-180 mg/dL) previene la parálisis inmunológica (disfunción de neutrófilos).`,
        vineta: "Ingresa a Reanimación masculino de 22 años posterior a colisión vehicular de alto impacto. Palidez generalizada, llenado capilar > 5 segundos, PAM de 45 mmHg. Se extrae gasometría arterial revelando: pH 7.15, pCO2 30 mmHg, HCO3 10 mEq/L, Lactato 8.4 mmol/L, Na+ 140 mEq/L, Cl- 105 mEq/L.",
        pregunta: "Con base en la evaluación de los marcadores perfusionales y el entorno metabólico, ¿cuál es el cálculo del Anion Gap y la interpretación fisiopatológica del cuadro?",
        opciones: [
            "Anion Gap 25 mEq/L - Acidosis Láctica secundaria a Disoxia Celular (Hiperlactatemia Tipo A)",
            "Anion Gap 10 mEq/L - Acidosis Respiratoria por retención de CO2",
            "Anion Gap 25 mEq/L - Acidosis Láctica por Falla Hepática (Hiperlactatemia Tipo B)",
            "Anion Gap 12 mEq/L - Cetoacidosis Traumática Aguda"
        ],
        correcta: "Anion Gap 25 mEq/L - Acidosis Láctica secundaria a Disoxia Celular (Hiperlactatemia Tipo A)",
        retro: "Respuesta Correcta. Fórmula: Na (140) - [Cl (105) + HCO3 (10)] = 25 mEq/L. Un Anion Gap elevado asociado a un Lactato > 2 mmol/L con PAM de 45 mmHg confirma inequívocamente una hipoperfusión global severa (Desvío Anaeróbico o Tipo A). Administrar cristaloides / sangre de emergencia es el abordaje de primera línea."
    },
    2: {
        teoria: `## 🩸 Metabolismo Lipídico, CAD y Estado Hiperosmolar
El metabolismo de lípidos en urgencias no se limita a paneles de colesterol; dictamina la supervivencia en emergencias endocrinas absolutas.
### 1. La Vía de la Cetogénesis Hepática
En la Diabetes Mellitus Tipo 1, hay apóptosis o falla total autoinmune pancreática, induciendo un nivel de insulina igual a cero absoluto. El glucagón intracelular promueve la lipólisis masiva para compensar la supuesta 'inanición' del tejido. 
La Beta-Oxidación de ácidos grasos en el hígado satura la ruta del Acetil-CoA, forzando la síntesis de **Cuerpos Cetónicos** (Beta-hidroxibutirato y Acetoacetato).

### 2. Estado Hiperosmolar Hiperglucémico (EHH) vs CAD
A diferencia de la CAD, el EHH (clásico de Diabetes Tipo 2 ancianos) aún mantiene concentraciones residuales de insulina (quizás un 5%). Esa pequeña gota de insulina es *suficiente* para frenar la lipólisis masiva y evitar la Cetoacidosis mortal, PERO es insuficiente para meter la glucosa a las células. La glucosa escala a >600 mg/dL desencadenando una Diuresis Osmótica catastrófica que provoca severa deshidratación neuronal y coma hiperosmolar.`,
        vineta: "Femenina de 68 años con antecedente de DM2. Acude con alteración severa de consciencia (Estupor). Laboratorios: Glucosa 850 mg/dL, pH 7.35, Bicarnobato 22 mEq/L, Sodio Serico 155 mEq/L, Cetonas en orina ausentes. Piel turgente y deshidratación de mucosas +++.",
        pregunta: "¿Qué mecanismo bioquímico explica la presentación clínica sin desencadenar acidosis cetósica?",
        opciones: [
            "La presencia de concentraciones residuales de insulina frena la Beta-Oxidación y cetogénesis",
            "La paciente sufre una variante genética que le impide sintetizar acetoacetato",
            "La edad avanzada promueve el almacenamiento lipídico resistente a catecolaminas",
            "Los riñones barrieron las cetonas a tiempo antes de alterar el pH"
        ],
        correcta: "La presencia de concentraciones residuales de insulina frena la Beta-Oxidación y cetogénesis",
        retro: "Respuesta Correcta. El Estado Hiperosmolar Hiperglucémico (EHH) no debuta con acidosis severa porque el páncreas aún secreta mínimas cantidades de insulina (aprox. 1/10 de lo normal), dosis mínima que inhibe la enzima Lipasa Sensible a Hormonas en los adipocitos, evitando la cascada de cuerpos cetónicos pero causando hiperosmolaridad devastadora (>320 mOsm/kg)."
    },
    3: {
        teoria: `## 🥩 Balance Nitrogenado y la Fisiopatología del Amoníaco
El metabolismo de aminoácidos genera toxicidad extrema si su principal metabolito (Nitrógeno/Amoníaco) no se desecha.
### 1. El Ciclo de la Urea y Depuración
El amoníaco libre (NH3) es neurotóxico ya que atraviesa fácilmente la barrera hemoencefálica y disminuye la capacidad de producir glutamato. El hígado, mediante la enzima Carba-moil-fosfato-sintetasa I, lo convierte a la molécula inocua **Urea**, excretada en riñón.
### 2. Síndrome Hepatorrenal y Encefalopatía
Cuando una cirrosis hepática descompensada presenta Encefalopatía grados III-IV, el paciente está ahogándose bioquímicamente en su propio nitrógeno catabólico.
El uso de **Lactulosa** provoca un ambiente ácido focal en el colon atrapando NH3 hacia NH4+ (ión amonio), el cual no puede absorberse por la mucosa capilar intestinal, erradicando el tóxico por vía fecal.`,
        vineta: "Masculino de 55 años, con cirrosis etílica Child-Pugh C. Tras episodio de hemorragia de tubo digestivo alto hace 48 h, debuta con desorientación, letargia profunda y aleteo hepático (Asterixis). UREA sérica 110 mg/dL, Creatinina 1.1 mg/dL.",
        pregunta: "¿Cuál fue el detonante bioquímico de la crisis encefalopática y qué principio farmacológico rige su abordaje inmediato?",
        opciones: [
            "Absorción masiva de nitrógeno de la sangre digerida; tratar con disacáridos no absorbibles (Lactulosa) para atrapamiento iónico en colon.",
            "Deshidratación por varices esofágicas no ligadas; tratar con albúmina purificada intravenosa.",
            "Aumento en el catabolismo del glóbulo rojo; tratar con transfusión de hemoderivados lavados.",
            "Infección cruzada por traslocación bacteriana; iniciar Ceftriaxona endovenosa forzosa."
        ],
        correcta: "Absorción masiva de nitrógeno de la sangre digerida; tratar con disacáridos no absorbibles (Lactulosa) para atrapamiento iónico en colon.",
        retro: "Respuesta Correcta. La sangre almacenada en las vísceras rotas del estómago rico en proteínas (hemoglobina). El metabolismo bacteriano intestinal descompuso estas proteínas en amoníaco. El hígado cirrótico, incapaz de procesarlo en su Ciclo de Urea, permitió el paso al cerebro causando asterixis. La lactulosa previene la disociación química intestinal del NH4+."
    },
    4: {
        teoria: `## ⚡ Isoenzimas Clínicas e Isquemia Celular
Las enzimas funcionales jamás deben encontrarse en concentraciones séricas elevadas. Las lecturas enzimáticas (Cinética) traducen lisis o falla en la membrana celular local de un órgano diana.
### 1. Cinética de las Troponinas (I / T) vs CK-MB
En un Síndrome Coronario Agudo (SCA), la oclusión arterial de la placa ateromatosa provoca necrosis transmural. Las troponinas, componentes puros del sarcómero cardíaco, rompen la membrana y cruzan al torrente capilar a partir de la 4ª hora post-infarto, haciendo picos a las 24 horas y permaneciendo elevadas hasta 10-14 días.
> [!IMPORTANTE]
> La elevación persistente de la Troponina durante 14 días dictamina que, ante una sospecha de "Re-infarto" al 5to día de cama de piso, cuantificar troponinas es un error diagnóstico. En esos escenarios, se utiliza fisiológicamente la isoenzima CK-MB, que retorna a la normalidad en 48 horas tras el evento agudo inicial.`,
        vineta: "Paciente masculino de 60 años, en su 4to día post-infarto agudo al miocardio (IAM) cara anteroseptal, ya revascularizado. Presenta nuevamente dolor opresivo precordial de diferente patrón neurológico. El equipo cardiológico exige saber qué marcador enzimático determinará si hay un segundo infarto instaurado hoy.",
        pregunta: "¿Qué marcador enzimático resulta fisiológicamente preciso para detectar re-infartos tardíos intrahospitalarios?",
        opciones: [
            "Creatina Cinasa Muscular/Brain (CK-MB)",
            "Troponina I Ultrasensible",
            "Mioglobina Glicada",
            "Deshidrogenasa Láctica (LDH) Isotipo 1"
        ],
        correcta: "Creatina Cinasa Muscular/Brain (CK-MB)",
        retro: "Respuesta Correcta. Las troponinas, por su lentísima degradación linfática (permanecen 10-14 días circulantes en sangre post IAM), darían un falso positivo de daño continuo irreversible. La enzima CK-MB disminuye vertiginosamente entre las 48-72 hrs posterior al IAM inicial. Si en el 4to día hace un pico sorpresivo, corrobora necrosis de nuevo tejido miocárdico sano (Re-Infarto Agudo)."
    },
    5: {
        teoria: `## 🛠️ Farmacogenética Molecular y la Excreción Farmacológica
La Bioquímica Molecular contemporánea aborda cómo el polimorfismo genético modifica la eliminación y concentración de fármacos de resuscitación.
### 1. Complejo Enzimático Citocromo P450 (CYP450)
La fase I del metabolismo farmacéutico intrahepático ocurre gracias a la oxidación, reducción e hidrólisis catalizada por la familia de hemodiooxigenasas CYP del retículo endoplásmico liso de los hepatocitos.
Variaciones fenotípicas dictan si un paciente será un "Metabolizador Extensivo/Rápido" (destruye el medicamento muy velozmente perdiendo el efecto terapéutico) o "Metabolizador Pobre" (lo acumulará hasta la toxicidad a dosis mínimas).`,
        vineta: "Paciente femenino internada en post-quirúrgico de resección de tumor en fosa posterior cerebral. Presenta convulsiones severas, habiendo estado bajo infusión protocolar estabilizada de Fenitoína 15 mg/kg dosis total impregnada. La enfermera intensivista sospecha que la paciente podría ser una 'Metabolizadora Extensiva' mediada por genética de CYP2C9.",
        pregunta: "Desde el raciocinio patológico metabólico, ¿qué parámetro se cruza críticamente para demostrar la teoría del Metabolismo Ultra-Rápido?",
        opciones: [
            "La medición plasmática infraterapéutica (ej. < 10 mcg/mL) de la droga a pesar de cumplir el poso de impregnación miligramo-perfecto.",
            "Infiltrado masivo de Leucocitos eosinofilos en orina dictando alergia al fármaco.",
            "Una hiper-reacción tónico-clónica generalizada sin focalidad cruzada.",
            "Depuración Renal reducida en sedimento de orina de 24 hrs."
        ],
        correcta: "La medición plasmática infraterapéutica (ej. < 10 mcg/mL) de la droga a pesar de cumplir el poso de impregnación miligramo-perfecto.",
        retro: "Respuesta Correcta. Si el hígado fenotípico de la paciente es un 'Metabolizador Ultrarrápido' o 'Extensivo', sus citocromos destruirán el anticonvulsivante de impregnación antes de que llegue siquiera a la fase terapéutica neuronal. Esto se confirma observando valores de valle infraterapéuticos en sangre, confirmando por qué no ceden las crisis."
    },
    6: {
        teoria: `## 🌪️ Análisis Avanzado de Reanimación Ácido-Base 
La Gasometría Arterial (BGA) y la Ecuación H-H (Henderson-Hasselbalch) son el estándar de oro para el cálculo fisiológico de vida de UTI (Unidad Cuidado Intensivo).
### 1. El Índice de P/F u Oxigenación de Horowitz
Para dictaminar Síndrome de Estrés Respiratorio Agudo Severo (ARDS/SDRA), se divide la Presión Parcial de Oxígeno arterial (pO2) entre la Fracción Inspirada de O2 enviada por el ventilador (FiO2). 
`+ "`Ejemplo: pO2 de 60 mmHg con FiO2 de 0.60 (60%). P/F = 100.`" + `
> [!IMPORTANTE]
> Un índice P/F (Radio pO2/FiO2) menor a 150 milímetros de mercurio representa un pulmón altamente encharcado y colapsado por edema alveolar proteináceo requiriendo titulación estricta de presiones PEEP.`,
        vineta: "Ingresa choque séptico por neumonía bilateral adquirida en ventilador. La enfermera intensivista extrae gasometría que refleja: pH 7.20, PCO2 65 mmHg, PO2 55 mmHg. Actualmente se asiste por BVM (Ambú) con oxígeno a 15 Litros/Minuto (FiO2 al 100% / 1.0).",
        pregunta: "¿Cuál es la interpretación gasométrica principal y el cálculo del Índice de Oxigenación de Horowitz?",
        opciones: [
            "Acidosis Respiratoria descompensada severa / PAFI de 55",
            "Acidosis Mixta y disarmonía renal / PAFI de 150",
            "Acidosis Respiratoria compensada / PAFI de 65",
            "Alcalosis Mixta con derivación derecha-izquierda / PAFI de 55"
        ],
        correcta: "Acidosis Respiratoria descompensada severa / PAFI de 55",
        retro: "Respuesta Correcta. El CO2 retenido (65) jala al pH en sentido contrario por la fórmula logarítmica produciendo alta acidez (Acidosis Respiratoria) típica del alvéolo ocluido. La división del PAFI es exacta: PaO2 (55) / FiO2 (1.0) = 55 mmHg. Este es un índice mortal. Un PAFI menor a 150 declara SDRA grave con inminencia de fallecimiento y requerimiento de Intubación PEEP/PRVC inmediata."
    },
    7: {
        teoria: `## 🔌 Hemodinámica Molecular y Falla Orgánica Multisistémica (SOFA)
En la antesala de la muerte, la Bioquímica Celular deja de responder al volumen, pasando al reino de las resistencias periféricas totales dictadas por la presión de perfusión de los esfínteres pre-capilares.
### 1. Adrenorreceptores y las Aminas Vasoactivas
La **Norepinefrina (Noradrenalina)** actúa mayoritariamente como agonista fuerte Alfa-1 y beta-1. A nivel fisiológico, inyecta su señal directo en los receptores lisos del diámetro vascular y del nodo SA. Contrae de golpe todos los vasos arteriales, obligando al sistema a enviar sangre "a la fuerza" al polígono de Willis en el cerebro cerebral y las arterias coronarias.
La **Vasopresina (Hormona Antidiurética sintética)** evita por competo los receptores Beta. Ataca directamente a los receptores V1 en el músculo liso para vasocontraer cuando hay una terrible taquicardia que nos impide dar más Noradrenalina de riesgo.

### 2. SVR, Gasto y Catéter de Flotación (Swan-Ganz)
La monitorización mediante un catéter transpulmonar que mide la Presión en Cuña Capilar Pulmonar (PAOP) revelará exactamente la 'Precarga final' del Ventrículo Izquierdo. Un PAOP > 18 mmHg dicta sobrecarga hídrica destructiva con edema de pulmón cardiógeno. Administrar agua ahí mata.`,
        vineta: "Cateterismo Swan-Ganz implantado en UCI a paciente cursando choque mixto y SDRA grave. Parámetros medidos por la máquina Pulsion PiCCo arrojan PVC de 16 mmHg, PAOP de 20 mmHg e Índice Cardíaco de 1.8 L/min/m2 con SVR (Resistencias Sistémicas) en 1800 dinas. Paciente con diuresis caída a 10 mL/H.",
        pregunta: "Con base en la traducción hemodinámica de un PAOP ultra-elevado asociado a bajo gasto, ¿cuál es el movimiento intravenoso que rige la medicina de shock aquí?",
        opciones: [
            "Titulación de Inotrópico puro (Dobutamina/Levosimendán) guiado + Diurético de asa agresivo IV",
            "Carga libre o reto masivo con Ringer Lactato a destajo a las arterias yugulares",
            "Subir titulación de Noradrenalina y retener toda la orina para mejorar la PAM al cuádruple",
            "Infusión de Bicarbonato concentrado al 8.4% y desuso absoluto de diuréticos."
        ],
        correcta: "Titulación de Inotrópico puro (Dobutamina/Levosimendán) guiado + Diurético de asa agresivo IV",
        retro: "Respuesta Correcta. ¡Lectura Magistral! PAOP elevado (>18) significa que el Corazón Izquierdo está fallando totalmente en disparar sangre al cuerpo (falla de bomba, índice cardíaco 1.8 crítico). La precarga está ahogando los pulmones con líquido. Una carga de agua aquí asfixia el pulmón. La solución inminente es usar inotrópicos para obligar la contracción miocárdica a revivir bombeando y diurético Lasix (furosemida) para vaciar y drenar ese encharcamiento mortal de la tubería retrógrada pulmón-yugular."
    }
};

const dir = path.join(__dirname, '../src/data/exercises/enfermeria/bioquimica');
if (!fs.existsSync(dir)) {
    console.error("Directorio no existe.");
    process.exit(1);
}

for (let i = 1; i <= 7; i++) {
    const file = path.join(dir, `bloque-${i}.json`);
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        
        // Asignar teoría hiper clínica
        data.teoria = dataBlocks[i].teoria;
        
        // Modificar TODAS las viñetas del primer Reactivo como ejemplo de poder, o simplemente la primera. 
        // Mejor modificamos la primera para impresionar a CUALQUIER USUARIO que de clic al examen 1.
        if(data.ejercicios && data.ejercicios.v1 && data.ejercicios.v1.length > 0) {
           data.ejercicios.v1[0].vineta = dataBlocks[i].vineta;
           data.ejercicios.v1[0].pregunta = dataBlocks[i].pregunta;
           data.ejercicios.v1[0].opciones = dataBlocks[i].opciones;
           data.ejercicios.v1[0].respuestaCorrecta = dataBlocks[i].correcta;
           data.ejercicios.v1[0].retroalimentacion = dataBlocks[i].retro;
        }

        fs.writeFileSync(file, JSON.stringify(data, null, 4));
        console.log(`Sobreescrito magistral BIOQUÍMICA bloque-${i}. Alto Nivel Terminado.`);
    }
}
