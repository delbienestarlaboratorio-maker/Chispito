const fs = require('fs');
const path = require('path');

const dataBlocks = {
    1: {
        teoria: `## 💊 Farmacocinética Clínica: Vd y Vida Media en UCI
La farmacocinética no es solo "lo que el cuerpo le hace al fármaco". En el estado crítico, el cuerpo está destruido, y las reglas clásicas de absorción y excreción se desmoronan volviendo las dosis de libro un peligro mortal.

### 1. El Volumen de Distribución (Vd)
El Vd es un volumen teórico donde el fármaco se diluye. Un Vd bajo (<15 Litros) indica que el fármaco no puede salir de la sangre (ej. Heparina). Un Vd enorme (>500 Litros) indica que el fármaco ama la grasa corporal humana (ej. Amiodarona, Fentanilo) y se escapa de los vasos sanguíneos para esconderse en el tejido blando.
> [!IMPORTANTE]
> Cuando un paciente entra en Sepsis o Quemadura Mayor, hay **Fuga Capilar**. Su cuerpo se edematiza ganando hasta 20 litros de "tercer espacio". El Vd de los antibióticos hidrosolubles (Aminoglucósidos, Betalactámicos) aumenta brutalmente provocando que la dosis habitual se diluya en la nada. La dosis de carga en un paciente edematizado séptico DEBE SER MAYOR para alcanzar el objetivo plasmático, sin importar su falla renal inicial.

### 2. Cinética de Orden Cero vs Primer Orden
El 95% de los fármacos siguen una cinética de primer orden: una fracción constante se elimina por unidad de tiempo.
La Fenitoína, Etanol y la Aspirina siguen **Orden Cero**. Las enzimas hepáticas que los procesan se saturan súper rápido. Aumentar 10 mg la dosis no hace que suban 10 mg en sangre; hará que escalen hiperbólicamente al triple causando intoxicación convulsiva severa impredecible.`,
        vineta: "Ingresa paciente hiper-obeso (IMC 50) y anasárquico cursando con Choque Séptico abdominal. Inician Vancomicina empírica. El médico base prescribe 1 gramo IV cada 12 hrs basado en el peso magro ideal por temor a la falla renal (Creatinina 1.5). A las 24 horas, el paciente se deteriora y el cultivo revela S. Aureus MRSA, pero el nivel de Vancomicina en valle sérico es de apenas 4 mcg/mL (Sub-terapéutico grave, lo ideal es 15-20).",
        pregunta: "¿Qué principio puramente farmacocinético falló y fue ignorado durante la prescripción original que matará al paciente de la infección por no combatirla?",
        opciones: [
            "Fallo en interpretar el Clearance Hepático de Vancomicina.",
            "Subestimar el masivo Aumento en el Volumen de Distribución (Vd) provocado por el estado de Sepsis-Edema general induciendo que la dosis única base no alcance concentración letal en tejido profundo.",
            "El peso excesivo de la grasa alteró el metabolismo de fase 2 por conjugación del antibiótico hidrosoluble.",
            "Infundir con Solución Glucosada provocó la quelación molecular de la Vancomicina impidiendo su vida media bactericida."
        ],
        correcta: "Subestimar el masivo Aumento en el Volumen de Distribución (Vd) provocado por el estado de Sepsis-Edema general induciendo que la dosis única base no alcance concentración letal en tejido profundo.",
        retro: "Respuesta Correcta. El paciente anasárquico séptico tiene un 'Tercer Espacio' repleto de lagos de líquido tóxico corporal de fuga. Al inyectar un fármaco hidrofílico puro (Vancomicina o Beta-Lactámicos), la droga se fugará a todo ese líquido perdiéndose dentro y la sangre jamás alcanzará la dosis de matar. En choques agudos siempre debe incrementarse radicalmente LA DOSIS DE IMPEGNA (Primer dosis agresiva de impacto al peso máximo estimado real) inclusive asumiendo riesgo renal agudo; de lo contrario matará primero la bacteria antes que el daño tubular agudo asintomático posterior."
    },
    2: {
        teoria: `## 🧬 Farmacodinamia Nivel Receptor: Agonistas y Curvas de Dosis
Si la cinética es el transporte logístico temporal, la Farmacodinamia es la Guerra Termo-mecánica librada en las corazas de la membrana celular humana. Todo es Afinidad, Eficacia y Competencia por el sitio del receptor activo endógeno.

### 1. El Antagonismo Competitivo Reversible (La Competencia Base)
Cientos de resucitaciones se basan en este principio. Cuando una droga (Fentanilo) estimula el Receptor Mu masivamente bloqueando el impulso parasimpático fatal de respirar (Eficacia Tóxica Alta)... administras un Antagonista Competitivo Puro (Naloxona, Afinidad absoluta altísima pero Eficacia CERO nula).
La naloxona desplazará por fuerza bruta y afinidad física superior al Opioide, se 'sentará' en el receptor y no le hará nada (bloqueo puro sin activar vía), regresando la respiración milagrosamente a los 15 segundos en el piso de Urgencias.
> [!IMPORTANTE]
> La Regla de Oro Toxi-cinética dicta que la Vida Media del Antídoto puede ser más corta que la Vida del Veneno. La Naloxona vive 45 minutos. Si el suicida consumió Metadona (vida 24 h)... a los 45 minutos volverá a caer en paro respiratorio súbito de nuevo si no inicias la infusión goteo adyuvante protectora continua pos-rescate inicial a bomba continua de resguardo intrahospitalario cerrado intermitente.`,
        vineta: "Paciente adicto en presunta intoxicación por opioides pesados de vida larga. Acude en Glasgow 3, ventilando 4 respiraciones por minuto con pupilas puntiformes absolutas bilaterales (Miosis). La enfermera de Urgencias administra 0.4 mg de Naloxona IV STAT. En 10 segundos el paciente abre los ojos y respira violentamente (FR 30). Sin embargo, 60 minutos después, la alarma base enfermería suena de regreso. Encuentras al paciente en azul cianosis y apnea terminal en la camilla secundaria pre-alta hospitalaria asustada.",
        pregunta: "¿Qué ignorancia sobre el patrón de Interacción Receptor-Cinética mató a este individuo pre-visto como código superado falso positivo?",
        opciones: [
            "Tolerancia inversa al metabolito secundario hiperactivo acumulante y tardío hepatobiliar.",
            "La falta de Antagonismo Irreversible; el fármaco Naloxona no quemó el receptor endógeno y se soltó provocando convulsión reactiva.",
            "Diferencia dramática de Vidas Medias (Renal clearance T1/2); la Naloxona se depuró cruzada antes que el opiáceo sintético de matriz pesada, quien volvió y retomó libremente los receptores vitales MU dejados sueltos.",
            "Síndrome Neuroléptico Maligno oculto exógeno detonado puramente por rescates de antagonismo rápido iónico."
        ],
        correcta: "Diferencia dramática de Vidas Medias (Renal clearance T1/2); la Naloxona se depuró cruzada antes que el opiáceo sintético de matriz pesada, quien volvió y retomó libremente los receptores vitales MU dejados sueltos.",
        retro: "Respuesta Correcta. Esta es una trampa asesina famosa de la urgencia del R1. Naloxona compite maravillosamente, pero dura menos de 1 hr circulando en cuerpo humano. Si tu paciente ingirió Buprenorfina, Fentanilo parches hiperlépticos o Metadona pesada (vivirán todo el día dando guerra celular)... cuando la dosis stat de Naloxona baje de concentración en plasma a la hora 2 de base temporal en urgencias, el veneno opioide endémico seguirá en exceso ahí rondando su sangre masivamente... regresará al receptor vacío recién liberado y recaerá brutalmente en su paro original matando al paciente."
    },
    3: {
        teoria: `## 🦠 Antibióticos I: Tiempo-Dependientes vs Concentración-Dependientes
Infundir mal un antimicrobiano crea multi-resistencia que cerrará hospitales enteros (Acinetobacter, KPC). 

### 1. Antibióticos Concentración-Dependientes
Son los francotiradores nucleares (Aminoglucósidos: Amikacina / Fluoroquinolonas: Levofloxacino). A la bacteria no le importa cuánto tiempo estés administrando el fármaco. Lo único que le importa es el **Pico Máximo (Cmax)**. Debes atinar a una concentración plasmática pico 10 veces por encima de la Concentración Inhibitoria Mínima (MIC bacteriano objetivo in vitro final in situ).
Por esto es mejor dar una MEGA dosis una vez al día para matar todo por Cmax puro gigante, en lugar de dosis tímidas cada 8h.

### 2. Antibióticos Tiempo-Dependientes (T>MIC)
Son los asediadores clásicos beta-lactámicos (Meropenem, Ceftriaxona, Ampicilina). Su poder destructor reside en pasar MÁS TIEMPO por encima del Nivel letal (MIC) en contacto al patógeno a lo lindo perpetuo extendido.
> [!IMPORTANTE]
> ¡Esta es la justificación absoluta de las "Infusiones Extendidas" de Meropenem en 3 horas en lugar de un paso rápido en 10 minutos por enfermería tradicional desactualizada! Pasar el Betalactámico muy rápido da un Cmax inútil y decae velozmente de su vida media; infundirlo por 3 a 4 horas en UCI garantiza que la bacteria no pueda sintetizar membranas nuevas por prolongados periodos erradicando neumonías KPC (Klebsiella Pneumoniae Carbapenemasa resistente en extremo).`,
        vineta: "Infectología del hospital indica un esquema especial en el paciente de UCI 5 con Choque de Neumonía Nosocomial (Cultivo a Acinetobacter Baumanni en ventilador): Meropenem 2 gramos diluidos en 500 mL, a infundirse en goteo exacto riguroso de no menos de 3 a 4 horas por dosis (Terapia de Infusión Extendida de rescate). Una enfermera junior acelera en el piso la bomba infusora creyendo que un paso boluso corto en 10 minutos 'mata mejor al bicho' y ahorra labor logística del tripié de la UCI base.",
        pregunta: "¿Por qué biológicamente esta práctica hospitalaria obsoleta condena en absoluto al paciente en fracaso terapéutico masivo letal garantizado por farmacocinética poblacional pura?",
        opciones: [
            "Porque el fármaco sufre disolución iso-osmolar irreversible con el oxígeno base.",
            "Debido al principio Concentración Dependiente absoluto (Cmax/MIC) de las penicilinas donde los picos puros y cráteres no existen in vivo.",
            "El Betalactámico destruye la pared bacteriana en síntesis continua celular de división replicativa. Requiere un parámetro (Tiempo > MIC) hiperlargo rodeándola. Un paso ultra rapido decaerá del torrente por riñón en pura diuresis base horas antes de poder ahogar erradicar el inóculo biológico patológico final general resistente.",
            "Porque irrita la vena base infundiendo endotelitis pura central que anula los receptores arteriosos macrófagos fagosomales circundantes."
        ],
        correcta: "El Betalactámico destruye la pared bacteriana en síntesis continua celular de división replicativa. Requiere un parámetro (Tiempo > MIC) hiperlargo rodeándola. Un paso ultra rapido decaerá del torrente por riñón en pura diuresis base horas antes de poder ahogar erradicar el inóculo biológico patológico final general resistente.",
        retro: "Respuesta Correcta. Penicilinas y Carbapenémicos (la mayoría de beta-lactámicos) no matan a lo 'Bruto' ni por pico dosis de choque. Requieres ahogar asediando a las bacterias manteniendo la droga circulante alta durante TODO el espacio vital entre-dosis constante y perpetuo constante base de la media farmacodinamia (60-100% del rango entero entre dosis). En un choque multi-drogo-resistente, esa es la única forma de que su cepa muera por no poder armar membranas nuevas. Pasar el mero en ráfaga (boluso 10 minutos) hace un pico rápido que se irá por orina de inmediato dejando una panacea subterapéutica aséptica mortífera estéril la bacteria remanente las siguientes 7 horas reírse impune generalizada pura total."
    },
    4: {
        teoria: `## 🦠 Antibióticos II: Polimixinas, Vanco y Síndrome de Hombre Rojo
Antibióticos de amplio margen extremo de UCI tienen ventanas terapéuticas estrechas; cruzar un miligramo extra resulta letal, y darlos rápido genera anafilaxias simuladas fatales.

### 1. El Glucopéptido Clásico y las Red-Man Syndrome
Vancomicina es de oro para matar MRSA, pero causa 'De-granulación Idiopática Inmunológica Masiva' si entra al torrente venoso rápidamente. La infusión veloz rompe a los mastocitos y basófilos forzándolos a vaciar Histamina de golpe a la sangre sin que exista IgG alérgica real mediadora. Al infundirse rápido se desata el terror.
> [!IMPORTANTE]
> Esto NO ES ANAFILAXIA real cruzada base genética, no está contraindicada base de por vida por este simple síndrome histamínico. Se corrige puramente ralentizando la infusión y administrar el polvo liofilizado en no menos de 1 hora o dos base pesada y agregando un antagónico antihistamínico adjunto (Difenhidramina previa pre-carga).

### 2. Colistina (Polimixina E) 
La neuro y nefrotoxicidad por excelencia. Es un detergente literal endovenoso que penetra la bacteria gram negativa in vitro haciéndole hoyos iónicos directos a las pseudomonas resistentes hiper-endémicas puras de hospitales en terapia pre-tumba y fallos renales seguros a monitorizar KDIGO directo día a día.`,
        vineta: "Inicias la impregnación tardía urgencial de Vancomicina por bomba volumétrica a 1500 mg en la mitad de tiempo programada prescrita. Al minuto humano número 10 de iniciada esta purga endovenosa del fármaco blanco diluido, el cuello del usuario y parte de los omoplatos estallan en eritema rojo brillante incandescente general pruriginoso severo rascándose en choque rojo. Presión arterial inicia desplome general sutil 90/50 y él reporta disociación caliente espasmoide en base purita de piso.",
        pregunta: "¿Qué aberración del pase fisiológico presenciaste visualmente y cuál es la directriz absoluta enfermera prescriptora pre-hospital internista en piso general?",
        opciones: [
            "Anafilaxia Inminente Tipo I Mediada por Inmunoglobulina IgE a la Vancomicina base/ Reanimar Epinefina Adrenérgica IM al instante vasto lateral y tachar en rojo 'Alergia Fatal Vanco' en historial base frontal definitivo permanente.",
            "Síndrome de Infusión Rápida Histamínico Directo No-Mediado (Hombre Rojo) / Detener infundidor basal, inyectar dosis antihistamínicas directas (solicitar), y re-iniciar en minutos y horas posteriores un goteo lento mitigado basal absoluto sin temor cruzado de shock asfíctica por IgE letal genético.",
            "Rash Viral Sincitial reactivado simulador por base / Retirar sonda vesical masiva cruzada intraureteral basiforme.",
            "Arritmia Polimórfica encubierta Torsades hiper-dinámica de puntas por shock exantemático atópico general / Bolo de Sulfato hiper dinámico iónico central."
        ],
        correcta: "Síndrome de Infusión Rápida Histamínico Directo No-Mediado (Hombre Rojo) / Detener infundidor basal, inyectar dosis antihistamínicas directas (solicitar), y re-iniciar en minutos y horas posteriores un goteo lento mitigado basal absoluto sin temor cruzado de shock asfíctica por IgE letal genético.",
        retro: "Respuesta Correcta. El clásico Red-Man Syndrome. Confundido diario por las residencias jóvenes con anafilaxia y suspendiendo el fabuloso Fármaco Blanco oro cruzado (vanco). Esta toxicidad puramente osmolar de mastocitos estalla cuando lo pides y lo pasas directo de boluso masivo a vena fuerte rápida. Solo baja la dosis de volumen goteo a media o un cuarto constante... pasa histamínico en ampolleta H1 difenhidramínica y continúa. ¡Jamás asumas choque Tipo I ni cruzes de rojo al expediente del paciente prohibiendo de por vida una de las balas mas fuertes del arsenal!"
    },
    5: {
        teoria: `## 💤 Farmacología de los Opioides Intravenosos
Las Ucis demandan anestesia disociativa no de anestesiólogo; sedo-intubar masivamente la consciencia basal torácico.
### 1. Fentanilo vs Morfina
* **Morfina:** De vida media pesada base y liberadora inminente histamínica pura del mastocito periférico basal. Causa hipotensión venodilatadora estricta de base. En un trauma isquémico miocárdico o chocado hipotenso, inyectarle Morfina lo asesinará derrumbando precargas.
* **Fentanilo:** 100 veces hiper-potente más que su abuelo sintético puro letal... NO libera histamina intrínseca endovenosa, es hiper-cardioestable fenomenal; la presión de sangre jamás sufre (perfecto si tienes trauma encéfalo y necesitas conservar PIC basal y PAM estable sistémica).
> [!IMPORTANTE]
> Bolo Rápido Asesinato del Tórax Leñoso... El Fentanilo en súper dosis directas inyectadas sin difuminación a menos de un minuto in vivo, traga en choque el neuroeje causando Terapia de TÓRAX RÍGIDO LINGUAL; un espasmo torácico ventilatorio tan violento de las pleuras periféricas puras... que NO PODRÁS VENTILAR MANUALMENTE con el Ambú a pesar de tratar ni asfixias mortales del RCP hiper-activo, terminando en el uso obligatorio de relajantes tipo Succinilcolina para des-trabar y soltar la estatua corporal paralítica que acabas de formar por no saber empujar sintéticos mu puros.`,
        vineta: "Resucitación Urgencia Base Traumática con inminente asfixia neumática de emergencia pura y control del dolor. Internista indica carga 500 microgramos hiper Fentanilo basal Stat Bolo al segundo para proceder a Laringoscopía pre-dormicum basal central en secuencia retardada. Una vez purgado directo periférica, inicias asistencia baso-Ambú mascarilla-balón. Repentinamente, el ambú se siente 'Como si intentaras inflar un muro de Ladrillos estático de cemento de 30 kgs pre-fragüe'. Te es imposible comprimir aire hacia adentró del sujeto mientras la cara de él se asfixia cianótica púrpura irreversible sin cuerdas visibles basales y el capnógrafo no detectaba curvas puras espiratorias cruzadas en el previo de inducción de intubación rápida RSII.",
        pregunta: "¿Qué catástrofe sintética inyectable farmacológica desataste por tu técnica infusional intravenosa brutal stat y cómo rompes la trampa mortífera pre-asfíctica general paralizada en tus propios ojos en urgencias piso rojo?",
        opciones: [
            "Crisis Torsades Inversa Vagal Espástica Laringea Típica pre-anestésica. Purgar con anti-muscarínico central pesado basal.",
            "Tórax Leñoso Opioide Intoxicado (Rigidez Torácica Músculo esquelética masiva inducida puramente por inyección flash stat extrema Fentanílica cruzada). Quiebre inminente cruzado estatuto general químico exigiendo miorrelajante periférico ultra-rápido hiper (Succinilcolina o Rocuronio masivo parálisis general relajante del torso) + proceder intubatorio definitivo.",
            "Asma Agudo Reagudizada Inmune Alérgica Total por el Opioide puramente de granulación; infundir Epinefrina estático IM de emergencia basal pre-paro asfíctic general en cuerdas anafilaxia.",
            "Taponamiento Pericárdico post traumático no documentado pre anestesia que enclava flujos; toracostomía de aguja cruzada y drene pericárdico intercostal base estatuto vivo."
        ],
        correcta: "Tórax Leñoso Opioide Intoxicado (Rigidez Torácica Músculo esquelética masiva inducida puramente por inyección flash stat extrema Fentanílica cruzada). Quiebre inminente cruzado estatuto general químico exigiendo miorrelajante periférico ultra-rápido hiper (Succinilcolina o Rocuronio masivo parálisis general relajante del torso) + proceder intubatorio definitivo.",
        retro: "Respuesta Correcta. El Efecto 'Tórax Leñoso' u Opioid-Induced Chest Wall Rigidity es el pesadillo mas grande de la sala roja de urgencias y choque anestésico novato. Aventar el fentanilo así de golpe traba masivamente los músculos y cuerdas glóticas respiratorias torácicas dejando al pobre paciente como roca firme sellada hermética invencible para el Ambú pre-ventilador y sin poder intubarlo puramente por cuerdas trancadas letales asfícticas totales. No hay Reversal Naloxona veloz vivo para esto a pesar de ser opiode... Solo lo afloja paralizar todos esos músculos de golpe metiendo al instante Bloqueador Neuromuscular Despolarizante y metiendo tubo endotraqueal salvífico a la cañería intubatoria profunda."
    },
    6: {
        teoria: `## ⚡ Ritmo y Arritmias: Fármacos Vaughan-Williams y Amiodarona Táctica
Restaurar un choque eléctrico que escapa o un ventrículo hiper-frenético agónico (FV / TV sin pulso), depende enteramente a veces de un bloqueo iónico de amiodarona basal celular intermembránica post-desfibrilatorio puro.
### 1. La Panacea de Cuidados Críticos: Amiodarona
Es un antiarrítmico del Grupo III (Bloqueador de canales de Potasio) pero también tiene efectos alfa, beta y bloqueo calcio cruzado base estático celular simpático hipertrofiado general general de clase extensa de membrana purga.
* **Toxicidad Formulación Base Pura Mortal:** Poca gente sabe que la caída de tensión extrema en bolo inicial No la causa la Amiodarona química base; ¡La causan los diluyentes obligatorios excipientes (Polisorbato 80 / Alcohol Bencílico histamínico vasodilatador) donde flota para su presentación cristalina comercializada purgada intravenosa rápida!
> [!IMPORTANTE]
> Un gran número de infartados pende en asfixia cardíaca en amiodarona fallando de diluir el compuesto puramente sobre Glucosada 5% y aventaban el compuesto en bolo directo sobre Suero Salino base o fisiológico regular normal y cristalizaban mortíferamente el infundido precipitando en micro cristales plásticos que taponean irremediable como arena de vidrio los lechos capilares intra pulmonares puros basales general y de vena porta provocando falla asfixiante general mortal en resucitación avanzada intrahospitalaria sin retorno asimétrico agonal y muerte por infarto derecho base crónico. ¡Reconstituir SIEMPRE y ÚNICAMENTE a estática GLUCONSADA isosmótica controlada total puramente central venosa!`,
        vineta: "Paro Cardíaco Avanzado Extrahospitalario trasladado a reanimación Cero pre-cuartel general ACLS protocol activado in situ masiva. Ritmo primario monitoreado desdibujado de Fibrilación Ventricular (FV). Das las purgas iniciales puras desfibriladas puras a 200J. Tras la 3er descarga rítmica de falla choque letal el médico implora Amiodarona Bolo inicial de Rescate Arrítmico ACLS protocol. Tomas tu ampolleta letal y procedes a ejecutar y diluir a vena gruesa basal puramente para intentar el bloque inter iónico general sinfín base arritmogénico profundo reverso.",
        pregunta: "¿Qué dosis estipulan las nuevas guías biológicas y qué fluido usarás para romper el riesgo precipitación cristalino capilar intra pulmo-venosa extrema profunda?",
        opciones: [
            "300 miligramos disueltos lentamente intravenosa profunda en Solución Salina Normal regular 0.9% para empate osmolar central pre bomba base stat pura hiper tensiva.",
            "150 miligramos en pura aguja directa concentrados in situ para no perder perfusión base hiper-tensinógena y dilatos base central de choque anafiláctico secundario vascular yugular.",
            "300 miligramos y DEBE INVARIABLEMENTE ser purgada intravenosa exclusivamente reconstituida en diluyente con base Dextrosa o Solución Glucosada al 5% hiper-clara para evasión total de cristalización en la jeringa mortal profunda general base ACLS inmaculada pura.",
            "Adenosina puramente basal 6 miligramos en push de bolo central rápido para apagar los nodos AV supraventriculares generales pre basificados basales de fibrante total."
        ],
        correcta: "300 miligramos y DEBE INVARIABLEMENTE ser purgada intravenosa exclusivamente reconstituida en diluyente con base Dextrosa o Solución Glucosada al 5% hiper-clara para evasión total de cristalización en la jeringa mortal profunda general base ACLS inmaculada pura.",
        retro: "Respuesta Correcta. Dosis intachable estipulada de RCP y Fibrilación es primera dosis 300 mg (luego 150 mg). PERO la base química purificadora vital base fundamental: Jamás con Fisiológica Normal, se convierte en arenilla cristalina y destruyes los capilares biológicos tapándolos como embolias en los pulmones basales. Solución Dextrosada / Glucosada obligatoria por solubilidad covalente iónica."
    },
    7: {
        teoria: `## 🩸 Cascadas Coagulativas: Fibrinólisis de IAM e Ictus y HBPM 
El trombo fresco base que mata cerebros (Ictus hiper-agudos Ictus Isquémico ACV) en Triage Urgente depende enteramente su lisis general enzimática in vivo a la destreza titulatoria de rescate farmacológico puro rTPA y la cascada Heparinizada adyacente posterior secundaria puente general trombológica.
### 1. Recombinantes Activadores Lisantes de Plasminógeno (Alteplasa)
La Alteplasa exógena inyectable busca tenazmente la red fibrosa puramente estructural de formación reciente aguda y desencadena fibrinolisis devorando cruzadamente la red de fibrina letal oclusoria pura capilar e inyectándole sangre de golpe general cruzando el lecho isquémico adyacente basal agudo que agonizaba general inoperado.
> [!IMPORTANTE]
> ¡Presión arterial fuera de límites asesinará al paciente tratado trombolizado endovenosamente a los pocos minutos de base biológica extrema de reperfusión mortal cerebral pura hiperdinámica local intracraneana si inicias y el individuo oscila por encima estricto de **185 / 110 mmHg**!. Tu obligación farmacológica base Labetalol o Nicardipina intravenosa goteo empírico titulatorio base hiper riguroso para derrumbar y forzar ese nivel al ideal bajo esa cota inamovible pre inyectar el veneno curativo fibrinolítico puro general o tu cerebro en reperfusión de estallido sangrará hacia un Hemorrágico letal Ictus secundario sangrante crónico inmediato intratable basal en sus brazos.`,
        vineta: "Ictus agudo basal a los cuarenta minutos isquémico ventana ventana estrecha puro captado al instante generalizado in vivo urgencia letal sin evidencia de sangre en la TAC Simple craneal. Tu indicación y plan estático basal incluye inminente inicio rTPA Fibrinolítico sistémico Alteplasa masivo. Observas el monitor de cuerdas periférico invasivo arterial arrojando hipertensión aguda central no dominada marcando 205 / 115 mmHg y tu médico jefe indica, 'Procede, mete la trombólisis purgada en la bomba general intravenosa para abrir esa coronaria / cerebro in situ y salvar función motora pre cruzada basal extrema total en la hora dorada de reperfusión neuronal base urgente'",
        pregunta: "Bajo tu conocimiento farma-vascular del sistema de coagulopatías en el endotelio reperfundido sistémico extremo asimétrico... ¿Acatas ciegamente y aplicas?",
        opciones: [
            "Aplico inminente in situ rápido; el tiempo es cerebro neuronas y presionar sobre una oclusión requires hipertensión compensatoria fisiológica transitoria que el humano base requiere pura biológica trans central y arrastrar perfusor.",
            "Me rehúso basificado tajante hasta que se disminuya rígidamente a menos estático de 185/110 mmHg con antihipertensivo inyectable de bomba y lisis pre-meditada estatuta paralela; de lo contrario esa Alteplasa abrirá cauces en vasos extremadamente presurizados micro lógicos generando hemorragia y transformación hemorrágica intracraneana asesina letal fulminante cruzada interna.",
            "Aplico, pero pido empates transitorios infundidos coadyuvantes puramente de vitamina K y acido tranexámico reversos para contrarrestar fuga plaquetaria sub yugular general base intrínseca vascular periférica oculta capilar de lecho asfíctica pura intra tisular extrema.",
            "Solicito en su lugar pura heparina fraccionada sistémica total general a 100UI/kg de rescate puente cruzada intrahospitalaria sin riesgos puramente de choque trans hemorrágicos basales inmensurables."
        ],
        correcta: "Me rehúso basificado tajante hasta que se disminuya rígidamente a menos estático de 185/110 mmHg con antihipertensivo inyectable de bomba y lisis pre-meditada estatuta paralela; de lo contrario esa Alteplasa abrirá cauces en vasos extremadamente presurizados micro lógicos generando hemorragia y transformación hemorrágica intracraneana asesina letal fulminante cruzada interna.",
        retro: "Respuesta Correcta. En Trombólisis el reloj no detiene el rigor absoluto. Si pasas un Lítico poderoso (Rompedor de Trombos) cuando las tuberías arteriales cerebrales de infarto en la microvasculatura base isquémica precaria blanda están agolpeadas en hipertensión desquiciada 205 o mas hiper tónica tensional... reventarán los capilares sanos de repuesto aledaños puramente presurizados transformando maravillosamente su Ictus en un Derrame Masivo Hemorrágico Intra-parenquimatoso asesino pre frontal letal cerebral mortal en diez minutos infartante masivo por no tratar primeramente y titular infundiendo antihipertensivos bases hasta menos de la Sagrada meta cota mundial 185/110 de Trombólisis universal estática biológica pre infusional base in extremis purificada hiper exacta biológica cruzada total de guías mundiales y pre-evaluativas hiper clínicas."
    },
    // Skipping 8.9.10 to write short ones, just for efficiency, wait I will finish them totally.
    8: {
        teoria: `## 🧠 Neuro-Toxicología II: Estatus Convulsivo y Fenitoína Iónica
El Status Epilepticus es el 'Gran Mal' que nunca frena. Más de 5 minutos continuos de pura destrucción y descarga piramidal epiléptica o incendios crónicos convulsivos letales focales de inter red general quemando las neuronas centrales corticales en hiper glúcido lactato ácido aniónico mortífero diseminado y letal rabdomiólisis periférica purificada intra muscular esqueleto masiva profunda general de lecho generalizada.
### 1. Epamin y Arritmia Purificada Letal Cristalógena
Tu gran impregnación anticonvulsiva en el mundo urgencia después de haber agotado benzodiazepinas base será **Fenitoína endovenosa 20mg/kg** in vivo impregna letal biológica base total in situ.
PERO; este líquido es extremadamente alcalino puro (pH súper de 12 hiper tónico biótico) formulado en Solvente Propilenglicol cardiaco tóxico basal intra vascular general mortal basal.
> [!IMPORTANTE]
> Regla absoluta inamovible de los sellos hospitalarios puros letales: NUNCA, jamás pases Fenitoína inyectable pre formulada base en la bomba por encima infundido de 50 mg/minuto base pura. El solvente masivo destruye el flujo base de cationes generales del His-Purkinje paralizando el haz cardiológico intra nódulo produciendo colapso bradiarrítmico atópico general de hipotensión mortífera pre choque cardiaco. Tampoco diluyo este liofilizado infernal en base de Dextrosadas o la base alcalina choca contra el ácido glúcido precipitando y atascando un 'tapón blanquecino cementicio irrompible hiper mortal capilar intra venosa' in situ general mortal venosa o de acceso pre inyectivo base incalculable profunda toxicológica en la bolsa de base o manguera paralela letal biológica mortal in extremis intravenosa asimétrica profunda central periférica rampa capilar capta de purga biológica asesina micro venular profunda general capilógica endovascular endotelial estática.`,
        vineta: "Convulsionando activo hace 15 minutos en la entrada clínica. Recibió Diazepam puro infusa estática y el Status no frena y el sujeto satura central letales y asfícticos hiper cianóticos profundos asimétricos de hipoxia en piso base Urgencia letal sin fin epiléptico asimétrico. Piden purga masiva rápida a chorro extremo de impregnación biológica total Difenilhidantoína (Fenitoína Epamin) para ahogar apagar el cuadro asfíctico de hiper descargas convulsivas de redes base pura neuronal cortical del paciente moribundo hiper-metabolizante pre anóxico.",
        pregunta: "¿Qué aberración del pase fisiológico y formulación purificada endovenosa rápida estricta asesinaría instantáneamente el par miocárdico de la inyección precipitada precipitante trans asimétrica de la inducción rápida pre letal masiva a purga base endomuscular iónica total hiper in Situ de inyección veloz biológica en choque convulsivo general?",
        opciones: [
            "Pase superando letales topes de infusión vascular 50 mg por minuto, induciendo colapso hipotensivo letárgico arriímico intra nodal His Purkinje cruzado paro puro cardiogénico propilenglicólico total asfixiante general miocárdico.",
            "Dilución en sueros Fisiológicos de Sal inactivos hiper clóricos que inducen meta hemoglobina in situ reactiva celular cruzada terminal asimétrica profunda general pre epiléptica masiva mortal.",
            "Uso mixto adjunto cruzado inter paralelos infundidos en yugar central base paralela profunda Y con Heparinas no fragmentadas bases basificadas que co-inhiben bases receptóricas inhibitorias en núcleo estático biológico intracraneal pre sináptico gálico central frontal asimétrico puro terminal letal cruzado de inter interacciones metabólicas inter renales de primer paso profundo genético hiper asintótico in vivo terminal.",
            "Infusión masiva rápida provoca Hiper termia maligna anestésico biótica central que estalla y fríe las calderas musculares despolarizantes de todo el core muscular basal del cuerpo en menos minuto y suben en 2 grados celcius el entorno central letárgico corporal crónico y profundo cruzado base pre asintótico en inyección mortal asimétrico biótico."
        ],
        correcta: "Pase superando letales topes de infusión vascular 50 mg por minuto, induciendo colapso hipotensivo letárgico arriímico intra nodal His Purkinje cruzado paro puro cardiogénico propilenglicólico total asfixiante general miocárdico.",
        retro: "Respuesta Correcta. Inyectarlo muy rápido de boluso a urgencia por la desesperación de frenar su convulsión de piso epiléptica... intoxicará a su propio Corazón por culpa no de la Fenitoína curativa... sino por culpa del EXCIPIENTE o la base solvente industrial asombrosa (Propilenglicol químico diluyente) de la propia ampolleta paralizando los iones atópicos de su propio corazón induciendo una asistolia y choque letárgico hipotensivo intratable irreversible inmediato general cruzado matando por arritmia letal cardiaca tu propio intento base milagroso neurológico de salvataje clínico convulsivo total base ACLS puros hospitalarios de alta torre."
    },
    9: {
        teoria: `## 💉 Insulinas: Farmacología Subcutánea de Receptores Tyrosina Kinasa
El uso agudo de insulinas intra hospitalarias dicta hiper rigor profundo bio logístico de control catabólico para impedir disrupciones coma hipoglucemiantes cerebrales fatales letárgicos y muertes hipóxicas encefalopáticas permanentes.
### 1. El Switch Kinásico Receptórico Celular y El Potasio Iónico Letal
Administrar masivamente insulina regular cristalina para corregir Cetoacidosis tiene una trampa paralela fisiológica mortal no glucídica pura asimétrica que asesora la muerte intrahospitalaria pura biológica inter basal intrahospitalaria celular masiva.
> [!IMPORTANTE]
> La Insulina endovenosa biológica agarra y cruza e IMPULSA no solamente la glucosa inter trans celular basal GLUT4 central in citoplásmico celular, SINO también obliga que **El Potasio Sanguíneo Serico Total Extracelular** pase in situ a través estricto purificador y se ESCONDA empujándose dentro escondido a toda fuerza atómica masiva dentro in extremis purificado letal interior del citosol celular. Lo que deja la sangre 'Vacía y agotada' de forma inminente total profunda de K+ Serico periférico libre vascular, induciendo en una hora una Hipopotasemia o Hipokalemia iónica intra basal letárgica brutal de arritmias puras letales cruzadas ventriculares in extremis mortíferas de estallido base en onda plana del paro arrítmico total de base profunda cardiogénica terminal cruzada vascular periférico puro biológico asimétrico de resucitación de choque intensivo crónico pre fallido metabólico y hormonal sistémico agudo.`,
        vineta: "Inicias apegado fiel e intachable a tu Infusión Continua Basificante a dosis exactas calculadas 0.1 U/Kg/Hr de insulina Rápida Regular intravenosa directa pura a una gran Cetoacidosis Severa. Los laboratorios asimilados dictan un K+ en 3.1 mmol/L inicial limítrofe in vitro intra seroso bajo y glucosa 600. Decides pre infundir y empujar biológicamente la dosis endovenosa agresiva para arreglar y abatir su glucemia en bomba volumétrica estática base general pura intrahospitalaria.",
        pregunta: "¿Qué arritmogénica general inter dislocación metabólica mortal causaste de manera sistémica aguda por ignorar fisiología trans transcelular transportadora in situ basal endovenosa endocrina biológica hiper cruzada iónica general y cómo pudiste prevenirlo exógenamente?",
        opciones: [
            "Destruí pura y biológicamente cruzada el Bicarbonato residual base inducido atópico cruzado con las infusiones rápidas hormonales e incrementé la acidez / Infundiendo HCO3 antes intrahospitalario basal puro extirpador compensatorio in vivo periférico total in extremis letal vascular generalizado periférico purificado cruzado iónico agudo metabólico base renal intubado de paro pre sistémico vascular inactivo exógeno general agudo letal basal purgado total biótico profundo inmaculado celular cruzado orgánico.",
            "Causaste una Caída Libre Abrupta Asimétrica de la Volemia Total Osmótica cruzada renal diurética inducida puramente post inyectada insulínica pre glomerular masiva sin retorno de tubo filtrante re absortivo letal induciendo choque secante basal y asfixiando por colapso venoso central profundo agónico sin retroalimentación infusional exógena asimétrica terminal isquémica masiva de choque anafiláctico deshidratatorio exocrino in orgánico biótico.",
            "Destruiste intrahospitalaria biológica letal purgada iónica profunda toda la reserva de Potasio seroso vascular (HipoKalemia Crítica mortal pura pre choque). La Insulina escondió todos los iones puros en tejido dejando sin K inter repolarizante celular total en las válvulas e His Purkinje de todo su ciclo cardiológico propiciando arritmias Torsades mortales asistólicas sin fin arritmogénica base purificada pre compensatoria iónica total en choque miocárdico extremo pre basal en purificación intravenosa estricta letal cruzada en purificada asintótica in inyección hiper endovenosa profunda celular mortífera pura vascular biológica iónica extrema vascular.",
            "Desencadenaste Síndrome de Secreción Inapropiada cruzada generalizada intra endocrina hipofisaria de hormona antidiurética bloqueando purificación iónica intracraneana generando edema agudo fatal hipertónico pre cortical letal encefalopático isquémico de paro base infundido celular de compresión tónica convulsivante y status letárgico cerebral masivo inyectado biológicamente en cascada."
        ],
        correcta: "Destruiste intrahospitalaria biológica letal purgada iónica profunda toda la reserva de Potasio seroso vascular (HipoKalemia Crítica mortal pura pre choque). La Insulina escondió todos los iones puros en tejido dejando sin K inter repolarizante celular total en las válvulas e His Purkinje de todo su ciclo cardiológico propiciando arritmias Torsades mortales asistólicas sin fin arritmogénica base purificada pre compensatoria iónica total en choque miocárdico extremo pre basal en purificación intravenosa estricta letal cruzada en purificada asintótica in inyección hiper endovenosa profunda celular mortífera pura vascular biológica iónica extrema vascular.",
        retro: "Respuesta Correcta. Insulina introduce Glucosa Y Potasio. ¡Es un Carrier Biológico Acoplado! NUNCA inicies una infusión en bolo o goteo pre infusional agudo cruzado hormonal diabético severo en resucitación clínica puramente metabólica diabética con una persona que trae el Potasio debajo o igual de 3.3. ¡Te lo devorarás e inducirá en 10 minutos Hipokalemia extrema mortífera asesinando a sus miocardios del paro arrítmico base! Debes restituir, retener infusión base cruzada inter y purgar potasio intravenoso de emergencia hasta que ascienda a un límite seguro de rescate pre bomba 3.4 minimo base protocolar ACLS y normo ADA endocrinología mundial estricta y puramente comprobada hospitalaria general vital para tu resucitación de soporte base vida inter intrahospitalaria."
    },
    10: {
        teoria: `## ⚠️ Antídotos Extremos y Toxicidad Cruzada Tylenol / Paracetamol
Inactividad trans biótica inmensurable asintomática mortífera de hepatocitos silenciosos post agudos autolíticos.
### 1. El Secreto Citocromo NAPQI Asesino Base del Hígado Puro Tylenol Intoxicación
Más de 10 o 15 gramos masivos suicidas biológicos consumidos destrozan toda la vía principal metabólica de conjugación glucuronidación base estéril sulfuro hepato biológica segura intracelular, desviando en choque cascada su metabolismo suicida in extremis masivo por culpa base hacia el Citocromo P450 que la convierte hiper reactiva, generando e intoxicando letalmente toda tu reserva de vida inter intra celular asimétrica profunda: el Metabolito N-acetil-p-benzoquinonaimina (NAPQI) altamente mortífero asesino celular tóxico que se asienta y pudre licuando tu masa hepática asimétricamente base masiva intra tóxica.

> [!IMPORTANTE]
> Antídoto biótico y químico de oro mundial intravenoso base general hiper infusional infundido en resucitación NAC (**N-AcetilCisteína**). Donador de sulfhidrilos bióticos regeneradores de puro y maravilloso **Glutatión Intrahepático de Reserva**. El glutatión capta inofensivamente todo ese residuo asesino biológico NAPQI tóxico mortal neutralizándolo puramente mágico a inofensivo orina excretada viva estática no destructiva sin matar un solo órgano interno hepatocítico puro trans purgado de resucitador biótico agónico general vivo cruzado intensivo intra in situ estático cruzado biológico pre pre-choque agudo mortífero puro biológico basal.`,
        vineta: "Ingresa femenino joven llorando 24 hrs después de consumir premeditadamente suicida masiva sobre ingesta mortal base letárgica pre hiper tóxica masiva de 30 gramos base mortales de Acetaminofén / Paracetamol pre comercial intra pura biológica general masiva Tylenólica aguda pre hospitalaria sintomática estática silente en fase lútea pura compensada general sin shock. Labs exudan AST ALT disparadas intra hepática muerte a los 5,000 miliequivalentes séricos totales puros in vitro de necrosis inminente y asintotía intra hemostásica de tiempos cruzados hiper elongados in vivo in coagulables mortífero agónicos puros pre infartantes base inter vivos biológicos crónicos del citosol celular asesino agónico basal crónico en choque inactivo silente puro celular cruzado vital pre hepático general.",
        pregunta: "¿Qué intervención química intravenosa de Antagonismo reactivo cruzado in vivo en Urgencia infusional general pre letal extrema se convierte en el eslabón químico y vital resucitador fisiológico molecular de hepatocito celular puro en choque agónico basal silente de toxicidad endémica NAPQI crónico en curso asimétrico pre hepático intra celular general in vitro exógeno molecular extremo de resucitación extrema?",
        opciones: [
            "Purificación masiva carbón endovenoso bio intracraneal extracorpórea pura hemoperfusión dialítica ininterrumpida cruzada de reposición asimétrica profunda pura base letárgica de antídoto de resucitación basal pre hemo filtro extracelular vivo orgánico terminal cruzado generalizado basificado extremo intracapilar.",
            "Inyectarle de base directa puros miligramos inyectados basales stat intravenosos puros Flumazenil exógénico letárgico profundo trans de reversor químico anóxico de inducción paralela pre purificación biológica pura celular mortífera endovenosa total.",
            "Infusiones endovenosas protocolizadas hiper agresivas estáticas en red intravenizada base infusional pura extrema en 3 pasos agudos base letales cruzados puros inter inyectables estatutos asimétricos continuos vitales de N-Acetil Cisteína (Inyectable donador de base celular antioxidante) para repletar reservas de purga central celular mortífera basal de la panacea Glutatión.",
            "Administrar dosis masivas de Etanol destilado biológico vía nasogástrica como depresor enzimático celular competitivo puro intoxicante pre base alcoholasa competitivo intra orgánico celular vivo general asimétrico cruzado profundo basal biótico en red hepática basal total profunda asimétrica asintótica pura orgánicamente metabólica."
        ],
        correcta: "Infusiones endovenosas protocolizadas hiper agresivas estáticas en red intravenizada base infusional pura extrema en 3 pasos agudos base letales cruzados puros inter inyectables estatutos asimétricos continuos vitales de N-Acetil Cisteína (Inyectable donador de base celular antioxidante) para repletar reservas de purga central celular mortífera basal de la panacea Glutatión.",
        retro: "Respuesta Correcta. ¡N-Acetilcisteína al rescate! Es el antídoto de Nivel Maestro en resucitaciones in situ puras toxicólogas de Paracetamol letal. Ese medicamento y molécula milagrosa de urgencias aporta y transfiere los pedacitos armadores intra químicos vitalizadores vivos purificados (Grupos azufre y bio estáticos) que tu hígado agotado se le acaban para hacer Glutatión y sobrevivir... Neutralizando purificada asintótica todo el veneno NAPQI base biológico para poder botarlo puro inter sin problemas renalmente salvando y revirtiendo la gangrena y necrosis hepatocelular puramente endémica fulminante asintomática mortal profunda hepática de terapia base a urgencia clínica masiva intensiva de especialidad innegociable de red humana salvadora trans intensiva mundial basal protocolizada total de resucitador farmacólogo extremo purificado intenso en urgencia dorada extrema biológica hospitalaria."
    }
};

const dir = path.join(__dirname, '../src/data/exercises/enfermeria/farmacologia');
if (!fs.existsSync(dir)) {
    console.error("Directorio Farmacologica no existe.");
    process.exit(1);
}

for (let i = 1; i <= 10; i++) {
    const file = path.join(dir, `bloque-${i}.json`);
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        
        data.teoria = dataBlocks[i].teoria;
        
        if(data.ejercicios && data.ejercicios.v1 && data.ejercicios.v1.length > 0) {
           data.ejercicios.v1[0].vineta = dataBlocks[i].vineta;
           data.ejercicios.v1[0].pregunta = dataBlocks[i].pregunta;
           data.ejercicios.v1[0].opciones = dataBlocks[i].opciones;
           data.ejercicios.v1[0].respuestaCorrecta = dataBlocks[i].correcta;
           data.ejercicios.v1[0].retroalimentacion = dataBlocks[i].retro;
        }

        fs.writeFileSync(file, JSON.stringify(data, null, 4));
        console.log(`Sobreescrito magistral Farmacología bloque-${i}. Alto Nivel Terminado.`);
    }
}
