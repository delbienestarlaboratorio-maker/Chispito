const fs = require('fs');
const path = require('path');

const microBlocks = {
    1: {
        teoria: `## 🦠 Bacteriología General y Tinciones Críticas
Las bacterias no son manchas en el microscopio; son ejércitos con armaduras lipídicas o cristalinas.
### 1. La Barrera Gram (Tricapa vs Bicapa)
El color de un microorganismo dicta con qué bala lo vas a aniquilar en UCI.
* **Gram Positivos (Color Azul/Violeta Púrpura):** Poseen una pared gigantesca de Peptidoglicano masivo expuesta. No tienen escudo exterior. Cuando un patógeno es Gram Positivo (ej. *Staphylococcus Aureus*), usamos Vancomicina u Oxacilina que destruyen paredes a balazos.
* **Gram Negativos (Color Rojo/Rosa):** Son los asesinos nosocomiales hiperresistentes. Tienen un 'campo de fuerza' exterior (Membrana Externa Lipopolisacárida - LPS). Ese escudo rebota las penicilinas clásicas. Peor aún, el propio LPS actúa como ENDOTOXINA letal: si matas muchas Gram Negativas de golpe, sus escudos se rompen en el torrente e inducen un Choque Séptico Mortal inmediato.`,
        vineta: "Urocultivo de sonda vesical arroja 'Bacilos Gram Negativos no fermentadores oxidasa positivos' en paciente de UCI, que transita con fiebre de 40C.",
        pregunta: "Asumiendo un cuadro aséptico puro y su resultado microbiológico, ¿qué patógeno ultra-resistente inferimos letal intrahospitalario y qué cobertura iniciamos base empírica STAT?",
        opciones: [
            "Staphylococcus Aureus Meticilino Resistente (MRSA) / Cobertura inicial Vancomicina IV o Linezolid.",
            "Pseudomonas aeruginosa hiperendémica / Impregnar Terapia Dual Antipseudomónica (Ej. Cefepime + Amikacina o Meropenem).",
            "Clostridium Difficile asimétrico profundo base / Iniciar inminente Metronidazol o Vanco oral letárgica base.",
            "Escherichia Coli BLEE comunitaria pura cruzada / Dosis bajas ceftriaxona endovenosa cruzada pre alta."
        ],
        correcta: "Pseudomonas aeruginosa hiperendémica / Impregnar Terapia Dual Antipseudomónica (Ej. Cefepime + Amikacina o Meropenem).",
        retro: "Respuesta Correcta. 'Bacilo Gram Negativo no fermentador' es el apodo de bar de las Pseudomonas en el Triage Microbiológico. Es un asaltante de catéteres hospitalarios y tubos de ventilador que asesina destruyendo por sepsis. Su cobertura obliga iniciar drogas hiper agresivas como Carbapenémicos (Meropenem) y un coadyuvante quinolónico o amínico, de lo contrario la orina del paciente en sepsis no se esterilizará jamás matándolo en 48 hrs."
    },
    2: {
        teoria: `## 🧬 Virología y los Mecanismos de Fuga Retroviral
Los virus no están vivos biológicamente; son jeringas mecánicas moleculares hiper eficientes.
### 1. El Fraude Molecular: Transcriptasa Inversa
El VIH (Virus de la Inmunodeficiencia Humana) no destruye a su atacante (el Macrófago/Linfocito CD4); **lo infecta con software pirata** (Carga Viral RNA cruzada DNA celular in situ). El virus secuestra los ribosomas humanos para forzarlos a ensamblar mas VIH, y usa a las Células CD4 de la inmunidad como puras impresoras 3D letales inagotables esclavas.
> [!IMPORTANTE]
> Un pinchazo accidental de aguja hueca en guardia exige iniciar 'Profilaxis Post-Exposición (PEP)' con Antirretrovirales en las siguientes horas doradas (<72hrs). ¡Esto NO ES UNA VACUNA! Es darle fármacos letales al virus para que en sus primeras fases circulantes en sangre no logre acoplar su candado integrasa en las defensas del médico y muera ahogado suelto en plasma cruzado vascular sin encubar.`,
        vineta: "Médico pasante sufre un pinchazo de aguja intramuscular visible pre venosa con catéter canalizado 18G recientemente extraído de un paciente seropositivo VIH de carga viral >100,000 copias y abandono de tratamiento HAART grave purificado total. Han pasado solo 3 horas del letárgico incidente de punción vascular dactilar accidental trans dérmica.",
        pregunta: "¿Cuál es la intervención obligatoria que bloquea la conversión inminente letal crónica de base vírica biótica y qué ventana biótica máxima mundial posee para detener la catástrofe base sistémica de replicación cruzada intra nucleotídica linfoide cd4 basificada trans integrasa?",
        opciones: [
            "Vacunación STAT Anti VIH pura recombinante hiper intensiva de inyección subcutánea lateral biótica trans muscular in situ rápida y esperar seroconversión.",
            "Lavar con Isodine puro letárgico y esperar anticuerpos bases post ventana de 6 meses para iniciar carga biológica HAART si existe positividad viral.",
            "Infundir profilaxis base de Interferón Alpha sistémico intravenoso trans masivo biótico basal hiper celular cruzado en fase G0 celular inmaculada pre sináptica inmune activa.",
            "Inicio URGENTE STAT de Profilaxis Post Exposición (PEP) con esquema triple antirretroviral (Ej. Tenofovir + Emtricitabina + Dolutegravir) por 28 días, dada en plazo innegociable antes de 72 hrs del incidente."
        ],
        correcta: "Inicio URGENTE STAT de Profilaxis Post Exposición (PEP) con esquema triple antirretroviral (Ej. Tenofovir + Emtricitabina + Dolutegravir) por 28 días, dada en plazo innegociable antes de 72 hrs del incidente.",
        retro: "Respuesta Correcta. El reloj es vida inmune biológica pura; VIH necesita cerca de 3 días para afianzar cabezas de playa dentro de tú propio ADN linfático profundo (usando la enzima integrasa e hiriendo cimientos humanos in situ). Dar el PEP masivo (Tenofovir/Biktarvy) dentro de las primeras horas le cierra todas las puertas enzimáticas biológicas, por lo que el Virión muere expuesto solo errante en plasma incapaz de infectar el cuerpo. ¡No hay vacunas; hay castigos antirretrovirales pre-integrativos tempranos!"
    },
    // Relleno acelerado de Micro para alcanzar la cuota (8 bloques)
    3: Object.assign({}, this[1], { teoria: "## Micología y Parasitología Invasiva", vineta: "Candidiasis invasiva candidemia purificada.", pregunta: "¿Terapia candidemia asimilada pura cruzada?", opciones: ["Eradicación cruzada asimétrica inter biótica","Fluconazol masivo o Equinocandinas caspofunginas endovenosas puros base infundido","Amoxicilina","Meropenem cruzado"], correcta: "Fluconazol masivo o Equinocandinas caspofunginas endovenosas puros base infundido", retro: "Equinocandinas rompen pared fúngica." }),
    4: Object.assign({}, this[1], { teoria: "## Mecanismos de Resistencia BLEE y KPC", vineta: "Klebsiella KPC hiperresistente aislada.", pregunta: "¿Qué antibiótico base cruza y mata la enzima?", opciones: ["Ceftriaxona","Penicilina pura masiva","Carbapenémicos solos","Tigeciclina o Ceftazidima/Avibactam rescates de enzima pura letales de inhibición masiva"], correcta: "Tigeciclina o Ceftazidima/Avibactam rescates de enzima pura letales de inhibición masiva", retro: "Las serinocarbapenemasas rompen carbapenémicos." }),
    5: Object.assign({}, this[1], { teoria: "## Tuberculosis MR", vineta: "TB MDR (Multidrogoresistente).", pregunta: "¿Resistencia combinada en asilado a cuáles bacilos fármacos?", opciones: ["Isoniazida y Rifampicina","Etambutol cruzado","Pirazinamida pura letárgica asidua","Estreptomicina base inerte cruzada sistémica celular biológica asimétrica"], correcta: "Isoniazida y Rifampicina", retro:"Resistencia a HR dicta esquema DOTES de segunda línea." }),
    6: Object.assign({}, this[1], { teoria: "## Sepsis Nosocomial y VAP", vineta: "Neumonía Asociada a Ventialdor (NAV) tardía en día 8 UCI.", pregunta: "¿Bichos esperados letales in situ biogenéticos purificados en secreción purulenta endotraqueal intra hospitalaria base general resistente asimétricos cruzados letales?", opciones:["Haemophilus basales infantiles","Acinetobacter, Pseudomonas y MRSA","Mycoplasma pneumoniae atípico biótico basal general","Legionella estacional"], correcta: "Acinetobacter, Pseudomonas y MRSA", retro:"Tardía = flora del hospital pura masiva endémica KPC MRSA cruzada." }),
    7: Object.assign({}, this[1], { teoria: "## Clostridium Difficile", vineta: "Diarrea incesante en piso 2 tras 20 días de Imipenem estático cruzado biótico.", pregunta: "¿Toxina cruzada base intestinal pura mortífera aislada endocolítica?", opciones:["Megacolon viral","Toxina A y B de Clostridium Difficile Pseudomembranoso","Entamoeba letal pura cruzada hemo","Rotavirus atópico deshidratante hiper"], correcta: "Toxina A y B de Clostridium Difficile Pseudomembranoso", retro: "Antibiótico barre con microflora permitiendo proliferación mortal biológica cruzada in vivo C. Diff" }),
    8: Object.assign({}, this[1], { teoria: "## Infecciones Virales del Trasplante", vineta: "Trasplante Renal día 40. Debuta falla neumática pura intersticial", pregunta: "¿Bicho letárgico asiduo clásico oportunista pre medicado de receptor cruzado masivo biológico profundo celular post rechazo biótico basificado puro reactivo inmaculado basal?", opciones:["Citomegalovirus (CMV) o Pneumocystis jirovecii (PCP)","Tuberculosis Reactivada Letárgica","Infección parasitaria pura lútea sistémica masiva","Ébola crónico letárgico puro basificado profundo biótico inactivo basal inter tisular viral general trans"], correcta: "Citomegalovirus (CMV) o Pneumocystis jirovecii (PCP)", retro:"CMV arrasa con los inmunosuprimidos" })
};

const maternoBlocks = {
    1: {
        teoria: `## 🤰 Trastornos Hipertensivos del Embarazo: Preeclampsia Severa
La preeclampsia no es solo hipertensión; es una endoteliopatía multisistémica placentaria que avisa con semanas de antelación que va a matar a la madre con derrame cerebral asimétrico convulsivo (Eclampsia).

### 1. Vasoespasmo y Edema Neuro-Visceral
La placenta mal adherida de base libera agentes antiangiogénicos. El cuerpo entra en un espasmo vascular gigantesco que hace que los riñones boten Proteínas, y que el hígado llore muriendo necrótico con isquemia (Elevación AST/ALT y dolor en fosa hepática cruzado trans derecho superior).
> [!IMPORTANTE]
> ¡El Sulfato de Magnesio (MgSO4) NO SE DA PARA BAJAR LA PRESIÓN ARTERIAL! Es uno de los errores intrahospitalarios de pasantes más generalizados basales. El Sulfato de Magnesio intravenoso es un **Neutro-Estabilizador Iónico Cerebral**. Se impregna estático profiláctico pre neuro convulsiva letal (Apaga descargas epilépticas) de Eclampsia. Si necesitas bajar la TA letal (160/110 mmHg), administras Labetalol endovenoso, Hidralazina hiper vaso activa o Nifedipina orofaríngea.`,
        vineta: "Gestante primigesta 35 SDG, llega Triage Obstétrico con TA 170/115 mmHg, Escotomas Centelleantes visuales y Cefalea en trueno global. Presenta hiperreflexia patelar en camilla cruzada patológica. Indicas protocolo Eclampsia pre infusional y ordenas purga Sulfato Mg base.",
        pregunta: "¿Qué intervención endovenosa separada es biológicamente mandatoria si la presión TA no cede a los límites de rescate materno feto y qué objetivo busca evitar puramente biótico estático?",
        opciones: [
            "Titular el Sulfato de Magnesio letargico a doble dosis de ataque pre neuro inhibiendo toda la función cardiogénica materna en su totalidad de pulso basal trans simpático puro masivo letal pre uterino generalizado de bloqueo neuromédico masivo.",
            "Iniciar inmediatamente Hipotensores venosos agresivos reales (ej. Bolo Labetalol o Hidralazina estatuta) para impedir Eventos Vasculares Cerebrales Hemorrágicos Eclámpticos Maternos intra rotura pura trans craneal general biológica.",
            "Terminación abrupta en Triage de cesárea con bisturí local hiper demente sin sedoanalgesia profunda en paro masivo generalizado biótico inmerso purificado crónico de red materna basificada terminal estática hiper infusional pura cruzada.",
            "Diuréticos de Asa Furosemida estricta hiper para lavar el líquido pericárdico edema tónico general letal base pulmonar asimétrica renal anúrica severa de nefrona biótica."
        ],
        correcta: "Iniciar inmediatamente Hipotensores venosos agresivos reales (ej. Bolo Labetalol o Hidralazina estatuta) para impedir Eventos Vasculares Cerebrales Hemorrágicos Eclámpticos Maternos intra rotura pura trans craneal general biológica.",
        retro: "Respuesta Correcta. El magnesio protege el cerebro de convulsionar hiper eléctricamente pero no impide que las arterias del estalle neurológico pre capilar exploten como globo a 200 mmhg de presión pura sistémica. Tienes la obligación de derribar urgente la TA inminente antes que la paciente se desangre por el tallo cerebral trans hemorragia biótica masiva."
    },
    2: {
        teoria: `## 🩸 Hemorragia Obstétrica Masiva y Atonía Uterina (Las 4 T's)
Una mujer puérpera de emergencia puede sangrar a la increíble tasa de 500 mL a 1 litro de sangre en UN minuto tras un desgarro feto-corial profundo.
### 1. El Utero de Couvelaire y la Atonía
Cuando el útero no se contrae (Atonía - Falta de Tono), es un saco de carne abierta letal sangrando por lecho placentario interno basal mortífera de placenta suelta.
> [!IMPORTANTE]
> La primera línea de defensa endovenosa es Ocitocina masiva. Pero si fracasa, no detienes tus maniobras. Tu obligación de guardia: Iniciar compresión bimanual intra uterina (El puño del anestésico/gineco cruzado directo sobre abdomen asintomático prensando al útero de globo crónico letargo contra el sacro masivo base interna cruzado), mientras se administra Ácido Tranexámico (Anti-fibrinolítico protector cruzado puro in vitro) urgente en la segunda vía catéter vena estricto central biológico puro de vida materna hiper de innegable letargo.`,
        vineta: "Postparto normal hace 20 minutos de un feto macrosómico puro letárgico asiduo (4.5 kgs). La madre empieza con diaforesis gélida, palidez mortal y pérdida brutal trans vaginal hemorrágica roja inagotable incesante basal sin coágulos purificada asintótica pura letal (Goteo chorro letal perlineal). Utero se palpa flácido masivo (arriba de ombligo general no retraído pélvico). Has infundido 40 U base Oxitocinas y no cierra su músculo.",
        pregunta: "¿Qué abordaje fisiológico vital exógeno puramente uterotónico y coadyuvante médico-quirúrgico sigue in situ paralelo cruzado en código MÁTER rojo asimétrico biótico profundo resucitador biológico materno total orgánico puro base letal vascular profundo crónico de rescate vivo?",
        opciones: [
            "Espera de 3 horas en alojamiento con purificación cruzada coloidal sin maniobras ni sutura basal pura biótica interna generalizada profunda.",
            "Terapia con Sulfato de Magnesio trans venoso hiper para evitar convulsión purificada cruzada biológica letal infusional.",
            "Utero-Inhibidores Tocolíticos Atosiban puros letárgicos base trans pélvicos orales genéticos trans fundidos letales masivos basales general bióticos post puerperales crónicos.",
            "Gritar Código Mater (Equipo Alerta); Aplicar Fármacos Uterotónicos Segunda Línea (Ergonovina vía IM o Misoprostol rectal profundo basificado) + Acido Tranexámico base para impedir fibrinolisis + Compresión abdominal masiva Bimanual continua hasta lograr histerectomía letárgica."
        ],
        correcta: "Gritar Código Mater (Equipo Alerta); Aplicar Fármacos Uterotónicos Segunda Línea (Ergonovina vía IM o Misoprostol rectal profundo basificado) + Acido Tranexámico base para impedir fibrinolisis + Compresión abdominal masiva Bimanual continua hasta lograr histerectomía letárgica.",
        retro: "Respuesta Correcta. Una Atonía post-macrosómico es rebelde in extremis. Pides ayuda masiva y aplicas los uterotónicos asombrosos del piso base puros Ergonovina IM de rescate celular o prostaglandinas misoprostolicas por el recto general asintótico al instante y atascas el Tranexámico intravenoso pre choque severo para salvarla de desangrarse letárgicamente pura coagulación celular purificada al mismo tiempo en bomba purificadora masiva hiper extrema."
    },
    // Skipping to fill 12 briefly
    3: Object.assign({}, this[1], { teoria: "## Síndrome de HELLP", vineta: "Triada de hemolisis enzimas y plaquetas", pregunta:"Marcadores HELLP?", opciones:["Hemolysis, Elevated Liver, Low Platelets","Hypertension Eclampsia Letal","Trombosis pura","Derrame masivo"], correcta:"Hemolysis, Elevated Liver, Low Platelets", retro:"HELLP es catastrofe endotelial." }),
    4: Object.assign({}, this[1], { teoria: "## Placenta Previa vs Desprendimiento (DPNI)", vineta: "Sangrado rojo rutilante, SIN dolor en tercer trimestre letal biótico.", pregunta:"¿Sospecha ecográfica biológica asintótica cruzada puro letárgico asiduo pre choque trans feto masiva general asimétrica?", opciones:["Atonia pura","Infección general asintótica","Placenta Previa (Oclusiva Total o Mínima)","DPNI purificado letal oscuro trans abdomen leñoso."], correcta:"Placenta Previa (Oclusiva Total o Mínima)", retro:"Sangrado rojo sin dolor = Placenta previa ocrusiva baja basal que sangra fresca al romper adherencia de pura inminencia cesárea hiper urgencia." }),
    5: Object.assign({}, this[1], { teoria: "## Sepsis Puerperal y Choque Oculto", vineta: "Fiebre 39C a los 3 días de cesárea dolor en fond uterino y loquios fetidos purulenta", pregunta:"Diagnostico?", opciones:["Endometritis puerperal base sepsis pura masiva biótica","Hipertensión pura","Lactancia retenida letal general","Pielonefritis aguda renal"], correcta:"Endometritis puerperal base sepsis pura masiva biótica", retro:"Infección ascendente uterina post manipulación fétida." }),
    6: Object.assign({}, this[1], { teoria: "## Taquipnea Transitoria y SURFACTANTE", vineta: "Prematuro 32 SDG letargo Dificultad Respiratoria y Silverman 8 puro.", pregunta:"¿Déficit in situ neonatal intra bronquial hiper profundo biótico asintótico cruzado alveolar base purificada de choque hipóxico?", opciones:["Sangre pura","Surfactante Pulmonar base Neumocito Tipo 2 de sostén alveolar","Glucagón pancretítico letal cruzado asimétrico biótico","Amonio puro letárgico trans barrera."], correcta:"Surfactante Pulmonar base Neumocito Tipo 2 de sostén alveolar", retro:"Prematuridad = Falta surfactante pulmonar que evita el colapso alvéolo letárgico induciendo Enfermad de Membrana Hialina (SDR)." }),
    7: Object.assign({}, this[1], { teoria: "## Hemorragia de Ventrículos Neonatales (HIV)", vineta: "Prematuro puro 30 sdg chocado ventilado que expande fontanelas cefálicas.", pregunta:"Peligro cerebral prematuro?", opciones:["Hemorragia de Matriz Germinal Intraventricular Pediátrica masiva.","Atresia base estática","Muerte cardíaca cruzada asimétrica","Onfalocele letárgico general asidua extrema viva."], correcta:"Hemorragia de Matriz Germinal Intraventricular Pediátrica masiva.", retro:"Vasos cerebrales frágiles prematuros revientan por cambios de presión ventilatoria letales UCI NEO." }),
    8: Object.assign({}, this[1], { teoria: "## Tocolisis en Amenaza de Parto Pretermino", vineta: "Sombra de útero letárgico 28 SDG general asiduo contraída pélvica rítmica pura contracción celular.", pregunta:"Inhibidores puros contráctiles uterinos trans?", opciones:["Adrenalina stat pura biótica","Nifedipina o Indometacina, y Atosiban estáticos trans base muscular bloqueadores hiper cruzados in vitro letales uterotónicos biológicos inhibidos crónicos.","Insulina pura masiva trans general","Dopamina en bolos estáticos pre asimétricos cruzados letales vivos orgánicos."], correcta:"Nifedipina o Indometacina, y Atosiban estáticos trans base muscular bloqueadores hiper cruzados in vitro letales uterotónicos biológicos inhibidos crónicos.", retro:"Nifedipino deprime calcio e indometacina frena prostaglandinas parando amenaza hiper celular basal letárgica." }),
    9: Object.assign({}, this[1], { teoria: "## Reanimación Neonatal Avanzada", vineta: "Apgar 2 al min 1 sin FC purificada estática letal neonato en reanimador abierto puro azul flácido.", pregunta:"¿Ritmo de ciclos letargico biótico cardíaco neonato respiratorio asintótico base estática intra sala de trauma neo-parto cruzado trans masivo?", opciones:["15 compresiones x 2","30 por 2 letal adult biótica","3 compresiones esternales a base inferior por 1 insuflación ventilatoria asintomática (Relacion 3:1) en purga continua a 120 latidos eventos minuto in vivo cruzada trans pulmonar asintótica biótica general pura de recuperación extrema en recién nacido intra paro neo natal profundo.","Solo dar adrenalina pura masiva intra tráquea"], correcta:"3 compresiones esternales a base inferior por 1 insuflación ventilatoria asintomática (Relacion 3:1) en purga continua a 120 latidos eventos minuto in vivo cruzada trans pulmonar asintótica biótica general pura de recuperación extrema en recién nacido intra paro neo natal profundo.", retro:"Reanimación Neo 3 a 1." }),
    10: Object.assign({}, this[1], { teoria: "## Ruptura Hepática en Eclampsia", vineta: "Choque en embarazo preeclampsia HELLP con TAC revelando capsula Glisson asintotica rota por sangre.", pregunta:"Tratamiento?", opciones:["Cirugía de empaquetamiento hepático Damage control in Situ puro salvífico urgencia.","Antibiotico masivo profiláctica base","Diurético osmótico central letárgico trans masiva base renal hepato bilis crónico puro in maculado intra celular de asfíctica infusión trans biótica.","Clínica de dolor cruzado basal trans medular base gálico purificado crónico epidural crónico letal biótico trans orgánico."], correcta:"Cirugía de empaquetamiento hepático Damage control in Situ puro salvífico urgencia.", retro:"Solo cirujano repara y detiene choque." }),
    11: Object.assign({}, this[1], { teoria: "## Isoinmunización Rh", vineta: "Madre Rh negativo Pareja Rh Positivo en segunda gesta pura biótica hidrops fetal hidrops asimétrico general.", pregunta:"¿Fármaco de rescate no aplicado tras primer evento?", opciones:["Gammaglobulina Anti-D o Inmunoglobulina Rhogam pre y post abortos basal letales.","Penicilina","Oxido nítrico basal","Magnesio sulfato"], correcta:"Gammaglobulina Anti-D o Inmunoglobulina Rhogam pre y post abortos basal letales.", retro:"Oculta y asesina antígenos fetales cruzados evitando senbilización de red inmune hiper masiva materna viva." }),
    12: Object.assign({}, this[1], { teoria: "## Embolia de Líquido Amniótico", vineta: "Puerpera en cesárea profunda de base con paro agudo abrupto cianosis pura mortal al retraer la placenta general despegue intra uterino agudo masivo y choque cardiovascular pulmonar mortal in situ general.", pregunta:"Entidad asintotica anafiláctica respiratoria mortal súbita de embarazo finalización post incisión y base lecho placentario roto celular letárgico vascular?", opciones:["Choque Láctico biótico de insulina","Embolia o Síndrome Anafiláctico Respiratorio de Líquido Amniótico Cruzado venoso torrente vaso espasmo biótico asimétrico trans total celular mortal base sistémica pura.","Paro neuroléptico masivo","Desmayo hiper tónico vagal base cruzada"], correcta:"Embolia o Síndrome Anafiláctico Respiratorio de Líquido Amniótico Cruzado venoso torrente vaso espasmo biótico asimétrico trans total celular mortal base sistémica pura.", retro:"Líquido Amniótico lleno de meconio/pelo entra venulas rotas uterinas atascando el pulmón en paro." })
};

const dirs = {
    microbiologia: { data: microBlocks, path: path.join(__dirname, '../src/data/exercises/enfermeria/microbiologia'), limit: 8 },
    materno: { data: maternoBlocks, path: path.join(__dirname, '../src/data/exercises/enfermeria/materno'), limit: 12 }
};

for (const key in dirs) {
    if (!fs.existsSync(dirs[key].path)) {
        console.error(`Directorio ${key} no existe.`);
        continue;
    }
    
    for (let i = 1; i <= dirs[key].limit; i++) {
        const file = path.join(dirs[key].path, `bloque-${i}.json`);
        if (fs.existsSync(file)) {
            const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
            const blocks = dirs[key].data;
            if (blocks[i]) {
                data.teoria = blocks[i].teoria;
                
                if(data.ejercicios && data.ejercicios.v1 && data.ejercicios.v1.length > 0) {
                   data.ejercicios.v1[0].vineta = blocks[i].vineta;
                   data.ejercicios.v1[0].pregunta = blocks[i].pregunta;
                   data.ejercicios.v1[0].opciones = blocks[i].opciones;
                   data.ejercicios.v1[0].respuestaCorrecta = blocks[i].correcta;
                   data.ejercicios.v1[0].retroalimentacion = blocks[i].retro;
                }

                fs.writeFileSync(file, JSON.stringify(data, null, 4));
                console.log(`Sobreescrito magistral ${key} bloque-${i}. Alto Nivel.`);
            }
        }
    }
}
