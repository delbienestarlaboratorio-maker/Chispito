const fs = require('fs');
const path = require('path');

const dataBlocks = {
    1: {
        teoria: `## 🌬️ Soporte Ventilatorio Invasivo I: Modos Controlados y Volumétricos
La Ventilación Mecánica no es inyectar aire; es comprar tiempo para los pulmones fustigados por la inflamación o la disoxia mientras manipulamos presiones mortales dentro del tórax.

### 1. Variables de Fase y Modos Controlados por Volumen (VCV)
En VCV, el operador fija el **Volumen Tidal (Vt)** y la máquina modula la presión necesaria para meter ese aire. En pulmones sanos (ej. postquirúrgico) esto es seguro. En pulmones rígidos (SDRA), forzar el volumen tidal provocará picos de *Presión Inspiratoria Máxima (PIP)* devastadores que romperán el alvéolo (Barotrauma).
> [!IMPORTANTE]
> La regla de oro internacional actual (Ventilación Protectora) exige un Volumen Tidal de **6 a 8 mL por kilogramo de Peso Predicho** (no de peso real). Ventilar a un paciente obeso calculando su peso real de 120 kg con 8 mL (1,000 mL de volumen) destruirá sus pulmones. El pulmón del paciente obeso es del mismo tamaño que el de una persona delgada de su misma altura.

### 2. PEEP (Presión Positiva al Final de la Espiración)
El PEEP evita que los alvéolos colapsen al espirar (Atelectrauma). Al aumentar el PEEP en SDRA, "reclutamos" alvéolos cerrados y mejoramos la oxigenación sin requerir FiO2 tóxico. El peligro del PEEP alto (>15 cmH2O) es que comprime el corazón derecho, derrumbando el gasto cardíaco y la tensión arterial.`,
        vineta: "Ingresa paciente femenino de 160 cm de altura y 125 kg (IMC 48) cursando SDRA severo por Neumonía. El residente configura el ventilador en VCV, ordenando un Volumen Tidal de 800 mL basado en los 125 kg que marca la báscula.",
        pregunta: "Bajo la óptica de la Ventilación Mecánica Protectora, ¿cuál es tu intervención clínica inmediata al visualizar este parámetro?",
        opciones: [
            "Aceptar la indicación, ya que la grasa torácica restringe el flujo base.",
            "Detener la maniobra y recalcular el Vol Tidal a 6 mL/kg sobre su PESO IDEAL calculado por altura, bajando a ~350 mL.",
            "Aumentar el PEEP a 20 cmH2O para vencer la coraza abdominal.",
            "Cambiar a modo Presión Soporte y retirar inmediatamente toda la sedación."
        ],
        correcta: "Detener la maniobra y recalcular el Vol Tidal a 6 mL/kg sobre su PESO IDEAL calculado por altura, bajando a ~350 mL.",
        retro: "Respuesta Correcta. El Volutrauma ocurre por obviar la física torácica. La obesidad añade grasa externa, pero la caja pleural y el tejido pulmonar no crecen. Ventilarla con 800 mL generará un desgarro alveolar masivo y un neumotórax hipertensivo inmediato. El cálculo siempre es sobre el Peso Predicho (Ideal) por Altura."
    },
    2: {
        teoria: `## 🚨 Soporte Ventilatorio Invasivo II: APRV, PRVC y Presión Soporte
Superar la sedación profunda requiere despertar al paciente e interactuar neuronalmente con la máquina. Los Modos Duales son la clave.

### 1. PRVC (Ventilación Regulada por Presión y Controlada por Volumen)
El PRVC es un modo inteligente donde la máquina se ajusta respiración a respiración. El médico exige un Volumen (ej. 400 mL), pero la máquina envía ese aire **controlando y disminuyendo la presión dinámicamente** para evitar barotraumatismos en pulmones que se endurecen aleatoriamente (SDRA fibrosante).

### 2. Asincronías del Ventilador
Cuando el intento neurológico del paciente "choca" contra el ciclo de la máquina, ocurre la asincronía. 
* **Auto-PEEP (Atrapamiento Aéreo):** El paciente con Asma o EPOC no logra soltar todo el aire antes de que el ventilador le dispare otra inflación. Este aire residual se acumula y sube drásticamente las presiones internas hasta colapsar la Vena Cava. 
> [!IMPORTANTE]
> La solución de emergencia ante un choque hiperdinámico por Auto-PEEP severo es desconectar al paciente del ventilador durante 5 segundos y exprimir manualmente la reja costal para dejar salir la columna de aire presurizada.`,
        vineta: "Paciente masculino con EPOC severo en ventilación mecánica invasiva. La gráfica de Flujo-Tiempo no llega a la línea cero ('0') basal al concluir la espiración antes de iniciar el siguiente ciclo. Minutos después debuta con hipotensión severa súbita (60/30) y distensión yugular masiva sin sangrado visible.",
        pregunta: "¿Qué patología obstructiva-mecánica desencadenó este choque cardiogénico secundario y cómo se resuelve de forma ultra-rápida?",
        opciones: [
            "Tromboembolia Pulmonar central - Administrar Trombólisis de rescate (Alteplasa)",
            "Auto-PEEP masivo que ocluye la Vena Cava - Desconectar del circuito ventilatorio y presionar el tórax",
            "Falso choque por falla de sensor invasivo - Lavar línea arterial con heparina",
            "Neumotórax a tensión puro - Aguja de descompresión en segundo espacio."
        ],
        correcta: "Auto-PEEP masivo que ocluye la Vena Cava - Desconectar del circuito ventilatorio y presionar el tórax",
        retro: "Respuesta Correcta. Esta es una complicación mecánica mortal clásica del EPOC intubado. Al no completarse el vaciado del pulmón (Flujo que no vuelve a cero en la gráfica de espiración), el aire se apila por minutos creando presiones intrapleurales gigantescas (>40 cmH2O). Esto comprime la Vena Cava Inferior y apaga el retorno de sangre al corazón causando el desplome hemodinámico. Desconectar el ventilador resuelve la sobrepresión casi mágicamente en segundos."
    },
    3: {
        teoria: `## 🧠 Neurocríticos: Manejo del Trauma Craneoencefálico y PIC
El cráneo es una caja de bóveda sellada. Su interior alberga tres volúmenes: Cerebro (80%), Sangre (10%) y LCR (10%). La Ley de Monro-Kellie dicta que si entra un cuarto componente (ej. Hematoma Epidural), los otros tres deben salir, o el cerebro morirá aplastado contra el foramen magno (Herniación).

### 1. Monitorización de la Presión Intracraneal (PIC)
La PIC normal de un adulto es de 5 a 15 mmHg. Un valor > 20 mmHg es HIC (Hipertensión Intracraneal) y requiere intervención crítica.
> [!IMPORTANTE]
> La vida del cerebro depende de la Tensión Arterial (PAM). La **Presión de Perfusión Cerebral (PPC)** se calcula como **PAM - PIC**. Si tu paciente tiene 30 mmHg de PIC secundaria a un trauma, su Tensión Arterial Media DEBE permanecer por encima de 90 mmHg. ¡Bajarle la presión arterial en este escenario provocará un paro isquémico cerebral casi de manera letal!

### 2. Terapia Hiperosmolar Táctica
El edema neuro-celular sólo retrocede sacando agresivamente agua con solutos de alta capacidad osmótica:
* **Manitol al 20%:** Funciona jalando líquido al torrente. Pero se inactiva si los riñones fallan.
* **Solución Salina Hipertónica (3% - 17%):** Superior hemodinámicamente porque aumenta la presión sistémica a la vez que encoge el cerebro. Ideal para pacientes neurocríticos chocados.`,
        vineta: "Masculino 30 años, TEC Severo por caída de 4 metros. Glasgow de 6, intubado y conectado a un sensor de presión intraparenquimatoso craneal. Los monitores revelan PIC en 32 mmHg y PAM en 70 mmHg (Dando una Presión de Perfusión de apenas 38 mmHg). Una de las pupilas, de pronto, presenta anisocoria (midriasis unilateral arreactiva).",
        pregunta: "¿Qué triada o constelación neurológica estamos atestiguando y cuál es la maniobra hiperosmolar recomendada por guías?",
        opciones: [
            "Triada de Cushing con Herniación inminente / Infundir manitol o Salina Hipertónica (bolo STAT) y avisar a Neurocirugía",
            "Daño axonal difuso / Administrar Metilprednisolona y bajar la presión arterial rápidamente a menos de 100",
            "Muerte Cerebral confirmada / Iniciar trámite legal ante INCUCAI / CENATRA",
            "Status epiléptico no convulsivo / Cargar con Tiopental o Midazolam de impregnación"
        ],
        correcta: "Triada de Cushing con Herniación inminente / Infundir manitol o Salina Hipertónica (bolo STAT) y avisar a Neurocirugía",
        retro: "Respuesta Correcta. La combinación de una PIC masiva que oblitera la perfusión, combinada con un III Par Craneal aplastado (provocando la pupila dilatada arreactiva) es un diagnóstico absoluto de Herniación Uncal. Es un Código de Craniectomía. Se le debe regalar unos preciosos 30 minutos al cirujano enviando dosis letales de Soluciones Hipertónicas o Manitol en bolo STAT, acompañados de hiperventilación transitoria."
    },
    4: {
        teoria: `## 🧪 Terapias de Reemplazo Renal Continuo (CRRT)
En UCI, un riñón que claudica agudamente por Sepsis o isquemia no puede someterse a la diálisis estándar de un paciente crónico; moriría en el proceso por la sustracción enérgica de su volemia inestable.

### 1. Terapias Continuas (Prismaflex y Similares)
El CRRT (Continuous Renal Replacement Therapy) actúa como un riñón biónico lento, sustrayendo y devolviendo la sangre, lavándola milímetro a milímetro **24 horas al día** ininterrumpidamente.
Dada su delicadeza, no somete al paciente a caídas graves de PAM, siendo la única salvación para el Riñón del paciente chocado y sobrecargado con catecolaminas.

### 2. Anticoagulación Regional con Citrato
Al pasar la sangre fuera del cuerpo para limpiar la urea, se coagula inmediatamente debido a la membrana plástica del tubo. La Heparina clásica suele matar pacientes inestables por sangrados retroperitoneales profundos.
> [!IMPORTANTE]
> La hemodiálisis élite moderna inyecta **Citrato** justo en el tubo de entrada de la sangre a la máquina. El Citrato apaga por completo las membranas plaquetarias y precipita el Calcio iónico, pero ÚNICAMENTE funciona en el circuito acrílico. Antes de ingresar la sangre al cuerpo, la enfermera inscribe goteos cruzados de Cloruro de Calcio, restituyendo mágicamente la coagulación antes de regresar la sangre. Este protocolo prohíbe que el paciente sangre, confinando la anticoagulación exclusivamente al equipo externo.`,
        vineta: "Adulto en UTI en choque mixto con Lesión Renal Aguda KDIGO-3 oligúrica. Ingresa a terapia de PRISMAFLEX mediada por Anticoagulación Regional con Citrato de Sodio. Horas más tarde, laboratorios revelan que la relación Calcio Total Sistémico vs Calcio Iónico está severamente disparada hacia valores de toxicidad no quelados (Calcio Gapp >2.5).",
        pregunta: "Bajo este contexto de secuestro patológico de electrolitos, ¿qué intoxicación de UCI clásica está ocurriendo silenciosamente?",
        opciones: [
            "Intoxicación Sistémica por Citrato - El hígado dañado no logra metabolizar el citrato basal regresándolo como bicarbonato.",
            "Síndrome de Lisis Tumoral exacerbado por la filtración.",
            "Intoxicación exógena accidental por la heparina residual del kit de vías centrales.",
            "Calcifilaxis sistémica por infusión excesiva de Cloruro de Calcio base."
        ],
        correcta: "Intoxicación Sistémica por Citrato - El hígado dañado no logra metabolizar el citrato basal regresándolo como bicarbonato.",
        retro: "Respuesta Correcta. En CRRT, el citrato no debe llegar vivo a la sangre sistémica. Una vez que vuelve al paciente, el hígado humano sano oxida ese citrato y lo destruye de maravilla en unos pocos minutos (Convirtiéndolo en bicarbonato). Si este paciente tenía falla hepática oculta grave, la sangre se atasca de citrato sin metabolizar (marcado por brechas altas entre Calcio Iónico vital y Calcio total 'envuelto en el tóxico'). Puede ocasionar depresión miocárdica refractaria que obliga a detener el protocolo de inmediato."
    },
    5: {
        teoria: `## 🫀 Shock Cardiogénico Práctico y Asistencia Ventricular 
Cuando la isquemia coronaria destruye más del 40% del Ventrículo Izquierdo o una Miocarditis viral deshace todo el tejido del sincitio electro-mecánico de la noche a la mañana, las inyecciones inotrópicas no tienen "músculo" dónde trabajar. 

### 1. Balón de Contrapulsación Intraaórtica (BCIAo)
Este es el decano de los dispositivos mecánicos en la terapia vascular. Un globo inflable posicionado post-arterias subclavias directamente adentro de la aorta torácica. 
El robot observa el Ritmo Electrocardíaco y actúa con una asincronía letal sincronizada con la válvula Ao:
* **Inflado Agresivo en Diástole:** Aumenta exponencialmente la presión retrograda hacia las coronarias que recién se oxigenan durante la diástole (Regando de sangre al tejido infartado).
* **Desinflado Abrupto antes de la Sístole:** Crea una aspiración aólica que "chupa" la sangre del ventrículo para quitarle casi todo el peso base y el estrés de pared a ese corazón destruido (Reduce Afterload).

### 2. Monitorización PAOP / Catéter de Termodilución
> [!IMPORTANTE]
> Si logramos bajar la *Presión Pulmonar en Cuña (PAOP)* por debajo de 18 mmHg logramos secar el Edema Agudo Cardiógeno pero, si exageramos, secaríamos las cavidades de diástole cayendo en Choque Hipovolémico. Un corazón fallido necesita algo de precarga estresante (Frank-Starling basal) situada artificialmente entre 14-16 mmHg para funcionar por puro rebote coloidal. Un BCIA debe estar empatado a este arte sutil.`,
        vineta: "Adulto con choque cardiogénico profundo tras Infarto Cara Anterior. Porta actualmente Balón Intraaórtico de Contrapulsación (BCIAo) ajustado en onda de Ratio 1:1. Repentinamente, el monitor dibuja ondas de inflado sincronizadas en Sístole Activa y tú notas cianosis de cabeza y cuello casi simultánea antes de la alarma.",
        pregunta: "¿Qué fatalidad en la temporización asincrónica ocurrió sobre el aparato de salvataje que provocó esta falla valvular forzada e hipoperfusión brutal?",
        opciones: [
            "Inflado Pre-Sistólico Tardío - Ocluyendo la propia expulsión anterógrada del corazón moribundo y reventándolo contra las valvas cerradas.",
            "Desinflado Diastólico Precoz que indujo Taponamiento Pericárdico por el helio purgado del robot.",
            "Desconexión del sensor EKG que apagó el módulo y dejó desangrar la vía femoral in situ.",
            "Falla por infarto transitorio del ventrículo derecho, desvinculado de la mecánica del BCIAo."
        ],
        correcta: "Inflado Pre-Sistólico Tardío - Ocluyendo la propia expulsión anterógrada del corazón moribundo y reventándolo contra las valvas cerradas.",
        retro: "Respuesta Correcta. El Balón TIENE QUE desinflarse antes de entrar a Sistole (La ola del ventrículo en contracción). Si el robot se cruza y se desregula inflando SU BALÓN estando dentro de la Aorta EXACTAMENTE mientras el Corazón trata de eyectar... el Ventrículo se abolla y destruye mecánicamente tratando de chocar contra un bloque de goma presurizada inflada con helio en media Aorta magna."
    },
    6: {
        teoria: `## 🌐 Terapia de Oxigenación por Membrana Extracorpórea (ECMO) I: Conceptos V-V
El ECMO ha pasado de rarezas de primer mundo a intervenciones mandatorias en hospitales de tercer nivel. **ECMO Veno-Venoso (V-V)** sustituye enteramente las funciones neumáticas mortificadas del SRAS gravísimo que el Ventilador es incapaz de revertir.

### 1. Oxigenador de PoliMetilPenteno y Circulación Extracorpórea
En ECMO V-V, el corazón funciona a la perfección. El equipo inserta una gigantesca cánula 25Fr en Vena Yugular que "se traga" 5-7 Litros de sangre por minuto de la zona sucia torácica. La sangre atraviesa un rotor magnético centrifugador que empuja al flujo crudo hacia el Filtro de Membrana. 
Aquí ocurre la química magia artificial (PoliMetilPenteno) donde Gas de Barredora (Sweep Gas) extrae todo el CO2 letal y le injerta pasivamente 100% O2 a gran fuerza, regresando la sangre al cuerpo roja y viva por la Vena Femoral para que el propio corazón la irrigue como si nada, sin usar jamás los pulmones para un solo aliento biológico.

> [!IMPORTANTE]
>  El Manejo Ventilatorio cambia en un instante al conectar a un paciente a ECMO V-V. Una vez que ECMO toma control total de los gases de sangre... se impone un Modo de Descaso Pulmonar Extremo (Ventilación Ultra-Protectora): Volumen Tidal mímico entre 200 y 300 ml, PIP limitadas, FR bajas y PEEP basal. Esto se hizo para que los alvéolos inflamados sanen a oscuras, hibernando meses si es necesario, mientras la tecnología nos hace vivir en frío.`,
        vineta: "Adulto masculino obeso, con Influenza H1N1 refractaria. Actualmente transita el día 2 con su soporte respiratorio totalmente delegado al ECMO V-V conectado por vía fémoro-yugular con membrana PMP con un ECMO Blood Flow (Qb) a 4L/m y Sweep Gas a 3 L/m. Gasometría pre-membrana revela pCO2 basal en 80 mmHg. Médicos desean bajar el PCO2 a normalidad post-membrana rápidamente.",
        pregunta: "¿Qué perilla de la torre del equipo mecánico rige el control estricto de la ventilación (vaciado del CO2 sérico) dentro del consorcio de extracorpóreo?",
        opciones: [
            "Oxígeno FiO2 Blender de la Membrana PMP a nivel del panel central.",
            "Las Revoluciones por Minuto (RPM) del Rotor Magnético Centrifugador para crear presión subatmosférica.",
            "La configuración de PEEP superior comandada por el Ventilador Asistencial acoplado a la vía aérea de pared.",
            "El Sweep Gas (Flujo de gas barredor administrado directo al oxigenador artificial). A mayor flujo constante, menor será el CO2 del paciente."
        ],
        correcta: "El Sweep Gas (Flujo de gas barredor administrado directo al oxigenador artificial). A mayor flujo constante, menor será el CO2 del paciente.",
        retro: "Respuesta Correcta. En ECMO, el volumen y las RPM del rotor no impactan grandemente la limpieza del CO2; impactan sólo en el O2 y la perfusión neta. Para borrar la Acidosis Mixta provocada por enormes PCO2 retenidos, el médico le girará al flujo principal del Sweep Gas (El huracán aéreo de barrido purgado) dentro de la membrana. Más aire fresco corriendo como torrente transversal, lava mejor y saca por gradiente molecular el Carbónico en un cerrar de ojos, devolviendo sangre alcalina óptima."
    },
    7: {
        teoria: `## 🌍 ECMO V-A e Inserciones Extraordinarias Cardiopulmonares
El ECMO Veno-Arterial (V-A) es la intervención última para el Paro Cardiorrespiratorio refractario asistolia crónico. Se impone cuando no basta salvar el pulmón: **Hay que detener y suplantar el Corazón dañado entero**.

### 1. Cortocircuito Sistémico Retrogrado
En la modalidad **V-A (Veno-Arterial)**, extraes la sangre venosa muerta y se la regresas ya completamente oxigenada **directamente a una arteria sistémica base bajo hiper-presión mecánica**. El ventrículo Izquierdo queda casi vacío pero latiendo, o totalmente suspendido debido a drogas y descargas de lidocaína masiva. Esto suprime la precarga del derecho y quita el estrés diastólico izquierdo; lo que llamamos el descanso de Miocarditis Fulminantes.
Sin embargo, el retorno al infundirse 'a contra corriente' por la Femoral para empujar sangre nueva contra la aorta descendente de la vida... suele formar microtrombos gigantescos o crear un síndrome de isquemia retrógrada distal, donde el pie y los fémures distales de donde salen y entran las cánulas terminan en muerte amputada de extremidad total (Harlequín invertido parcial si es veno-arterial distal pobre).
> [!IMPORTANTE]
> La Posesión de una perfusión distal con un introductor paralelo (Shunt Re-perfusor a Pedia Arterial) es estrictoria técnica a la mitad de la vida celular para detener que el pie quede gangrenado negro carbón post-canulación. Nunca se inicia ECMO VA sin él en fémoral periférica gruesa.`,
        vineta: "Masculino de 55 post-IAM cardiogénico masivo letal. Colocado en Choque profundo sobre puente a destino con ECMO V-A Periférico (Cánula de extracción Venosa Yugular - y Arterial Femoral Izquda en retorno de 5 L/Min). A las 8 horas post intervención se descubre que el color de la piel del paciente y saturación se divide anatómicamente: De la cintura para abajo un tono rosado (SatO2 99%), mientras el labio superior, coronarias y cerebro lucen azulados (cianóticos severos con SatO2 75% extraída Radial Dcha).",
        pregunta: "¿Qué demonio hemodinámico del ECMO Periférico desencadenó este choque divisorio letal superior de oxigenación hipóxica neurogénica?",
        opciones: [
            "Falla por coágulo inminente formándose en el rotor estático del equipo Pulsion.",
            "Síndrome de Harlequín (North-South Syndrome) originado por competencia y rechazo de la propia función miocárdica remanente del paciente con pulmones sin vida.",
            "Necrosis avascular generalizada del pie ipsilateral dislocado hacia el ventrículo en síncope asimétrico.",
            "Shunt intrapulmonar residual al no conectar correctamente la heparina regional asincrónica al panel de control de gases."
        ],
        correcta: "Síndrome de Harlequín (North-South Syndrome) originado por competencia y rechazo de la propia función miocárdica remanente del paciente con pulmones sin vida.",
        retro: "Respuesta Correcta. Fascinante fenómeno vascular del Alto Mando. El Corazón 'Dañoso o Muerto' del paciente de hecho emitió ligeras señales de vida (mejoría) por fármacos... comenzó a empujar de nuevo y lanzar latidos hacia arriba irrigando su propia Aorta torácica, PERO los pulmones biológicos seguían podridos por Neumonía (Sin ECMO pulmonar real), así que el corazón enviaba Sangre Azul no oxigenada directo al polígono craneal y coronarias. Mientas tanto, en el ombligo y piernas, la cascada perfecta del ECMO fémoral chocaba contra esa ola natural en el centro del tórax creando un escudo de presión letal donde la sangre nueva no cruza el Arco aórtico provocando muerte cerebral cianótica por competencia fisiológica residual."
    },
    // Adding blocks 8 to 12 as deeply intense
    8: {
        teoria: `## 🧪 Desequilibrio Ácido-Base del Anión Gap Negativo Intratable
Existen terrenos ocultos en gasometría donde el problema yace no en moléculas exógenas como salicilatos, sino en moléculas endógenas y en las proteínas puras actuando de polímeros fantasma en el agua plasmática. 

### 1. Albúmina y Acidosis Oculta
La base del modelo de Stewart nos enseña a corregir el Anion Gap de acuerdo a la presión oncótica proteínica. La Hipoalbuminemia profunda (pacientes asoleados quemados crónicos, desnutridos extremos con falla marásmica) disminuyan brutalmente a los aniones débiles estables originando fallas falsas de gasometría en lectura de rutina. Las guías indican que hay que restarle al Anion Gap un valor de aproximado 2.5 mEq/L extra de Gap Ficticio por cada Gramo de Hipoproteinemia pura caída en las analiticas de urgencias.`,
        vineta: "Mujer geriátrica de 80 años en UCI con Sepsis Grave Urinaria y marasmo nutricional hospitalario agudo severo basal. Sus laboratorios del día extraen una Albúmina Sérica trágica de 1.8 Vol% (Rango Normal >3.5). Le sacamos gasometría en choque séptico con Anion Gap reportado base de Urgencias en '11 miliequivalentes teóricos normofisiológicos aparentes ocultando falla'.",
        pregunta: "Aplicando el entendimiento intensivo real de Figge-Stewart, ¿qué sucede con este paciente mal valorado clínicamente?",
        opciones: [
            "Dado que se reportó a 11 de Gap, se excluye intoxicaciones y se maneja como acidosis hiperclorémica por infusión cristaloide base pura en reanimación errática.",
            "Al poseer hipoalbuminemia tan extrema, tiene una Acidosis Láctica encubierta enorme. Su Anion Gap real corregido andará por los 16+ mEq/L indicando altísimo peligro.",
            "El Lactato es inofensivo porque las proteínas rotas de la albúmina se encargan de metabolizarse en Acetoacetato y suplantan la deficiencia pirúvica central de base.",
            "Debe iniciarse una infusión en bolo STAT de Plasma Fresco Congelado exógeno empírico y evaluar Gap a la hora en un escenario mixto de hemodilución controlada."
        ],
        correcta: "Al poseer hipoalbuminemia tan extrema, tiene una Acidosis Láctica encubierta enorme. Su Anion Gap real corregido andará por los 16+ mEq/L indicando altísimo peligro.",
        retro: "Respuesta Correcta. El 11 mEq/L que te grita Urgencias es una MENTIRA. ¡La albúmina está en 1.8! (Ha perdido 2 puntos enteros desde los 4.0 vitales de reserva). Sumar 2.5 mEq/L por cada gramo faltante al cálculo del Gap original dictan que su Brecha Aniónica real es cercana a letales 16 mEq/L... escondía lactato, shock hipóxico por disoxia microcirculatoria. Te confiaste por leer la papeleta impresa, la medicina intensiva te dice que la proteína caída apedrea y modifica todos e ignoto cada parámetro de Stewart que le apliquen los médicos junior asumiendo bases."
    },
    9: {
        teoria: `## ⚡ Intoxicación Farmacéutica Critica I: B-Bloqueo Masivo
Los suicidios o accidentes medicamentosos donde están inmiscuidas pildoritas prescriptivas psiquiátricas y toxicológicas son el pan fuerte del Servicio de Resucitación Intensivo Terapéutica Generalizada.
### 1. Sobredosis por Metoprolol / Propranolol Extremo
Un bloqueador beta es el asesino silencioso de la contractilidad inotrópica miocelular. Abatir a los beta-receptores apaga al corazón directamente desde las cascadas de fosforilación proteincinasa de la Proteína-G. Todo lo cual colapsa en Paro Bradi-Asistólico Atópico.

> [!IMPORTANTE]
> ¡Dar atropina es inútil! Porque los latidos no cayeron por inhibición vagal, sino por apagado intrínseco. ¡Dar Adrenalina u otras inotrópicos aminados choca contra una muralla sellada porque el Metoprolol atascó los receptores herméticamente desensibilizados de la membrana de modo reversible!
> La terapia absoluta se basa en el GLUCAGÓN ENDOVENOSO EN BOLO MEGA. El glucagón no necesita y evade completamente al Receptor Beta. Es una hormona peptídica con su propio receptor acoplado y mágico anexo a puerta del corazón. Forzará la entrada del Calcio a la célula salvando transitoriamente el Paro.`,
        vineta: "Ingresa joven de 24 años posterior a una toma suicida documentada por más de 50 tabletas de labetalol hipertensivo paterno. El electrocardiograma basal grita latidos a un PR elongado infinito desvaneciéndose en Bradicardia a 25 latidos por minuto. PAM en 35 inactiva y piel marmoleada reticular hipóxica terminal. RCP básica a punto de ser ejecutada por guardia, pero los atropínicos y epinefrínicos IV dados periféricamente fallan absolutamente de arrancar un ritmo por encima de los 30lpm con shock mortal.",
        pregunta: "¿Qué intervención endovenosa inmediata re-direccionará el inotropismo directo a nivel de AMPc evadiendo la cascada letal adrenérgica amordazada del corazón?",
        opciones: [
            "Infundir Noradrenalina pesada por bomba continua superior a los 1.5 gammas para forzar los alfadrenérgicos vasculares",
            "Cloruro de Calcio gluconado junto a hiperinfusión de Magnesio de rescate fibrilante",
            "Bolo endovenoso de Glucagón e iniciar marcapasos transcutáneo simultáneo puente de contención inminente",
            "Hemodiálisis extendida con Carbón Activado Hemoperfuso in situ."
        ],
        correcta: "Bolo endovenoso de Glucagón e iniciar marcapasos transcutáneo simultáneo puente de contención inminente",
        retro: "Respuesta Correcta. El antídoto principal es el Glucagón y requiere un marcapasos por puente debido a la corta vida de los isótopos del fármaco (15 minutos aprox de rebote hormonal inotrópico). No puedes usar Adrenalina/Dobutamina y demás porque literalmente es como gritar delante de una persona que trae tapones de oído de concreto y titanio (los receptores beta están super bloqueados masivos irreversibles farmacológicamente a esas concentraciones altísimas). El glucagón usa otra cerradura a nivel del Sarcolema permitiendo al calcio fluir e iniciando latidos a fuerza."
    },
    10: {
        teoria: `## 🌱 Terapia Vasopresora de Alta Gamma y el Índice de Perfusión Renal
Las infusiones duales con drogas vasopresoras a veces causan amputación y lisis final. Saber cuando detener "La Leña Endovenosa de Fuego y Dolor Vascular" y cambiar de droga dicta si te gradúas o matas a tu sujeto al 5to piso post operado del trauma abdominal sangrante agudo severo.
### 1. El Doble Perfil Pletismográfico
En las tiras Oximétricas de dedo y sonda urinaria horaria reside la semiología pura de si "te pasaste de droga".
> [!IMPORTANTE]
> Un paciente chocado que recobra la presión con Norepinefrina en dosis ultra altas (> 0.5 mcg/kg/min) a un costo de anular su rastro de onda pletismográfica (la curvatura del pulsómetro SpO2 será planita sin dibujo), lo que está indicando la obliteración espástica irreversible isquémico general. En breve su intestino comenzará a infartarse (Necrosis mesentérica medicamentosa). En estas etapas topadas, agregas Vasopresina para poder "de-titular o bajarle" a la bomba inicial del primer inotrópico sin desmoronar la PAM a cero.`,
        vineta: "Adulto cursando choque distributivo refractario intratable en UCI. Pesa 80 kgs. El goteo de Noradrenalina escaló por encima de 0.8 mcg/kg/minuto durante 8 horas críticas documentando un aumento sutil a la PAM base 65, pero sus dedos lucen negros distalmente (congelados), índice plétismográfico plet atenuado absoluto, uresis en anuria y láctico serico explotó in control de 2.5 basal a letales 9.0 milimoles de rebote paradógico inofensivo de falsa mejoría teórica inicial.",
        pregunta: "¿Qué patología inducida farmacológicamente se está atestiguando y cuál es el rescate medicamentoso a titular adyacente inmediato a solicitar?",
        opciones: [
            "Falla Cardíaca por agotamiento supraventricular atópico / Iniciar Amiodarona Antiarrítmica Cuerpos Rítmicos",
            "Muerte Isquémica de Retención por Extrema Constricción Adrenérgica Masiva / Reducir Adrenalinas y montar 'Scavengers' Ahorradores V1 puros (Vasopresina) sin perder PAM central.",
            "Coagulación Intravascular Diseminada post sepsis generalizada / Solicitud de Plasma Fresco y Crio-Precipitados con Heparinización.",
            "Trombosis Mesentérica Embolígena Primaria no farmaeucida / Exploración Laparotomía radical."
        ],
        correcta: "Muerte Isquémica de Retención por Extrema Constricción Adrenérgica Masiva / Reducir Adrenalinas y montar 'Scavengers' Ahorradores V1 puros (Vasopresina) sin perder PAM central.",
        retro: "Respuesta Correcta. Llegaste a tope, estrangulaste y asfixiaste al propio Sistema Inmunológico Intestinal e hístico del ser humano tratando de rescatar un número (PAM) de una máquina pitoína del sistema arterial radiado. Esa vasoconstricción total a casi 1.0 gamma, ahorcó los flujos basales a las tripas, riñones y piel (dedos negros necróticos distales), provocando fermento celular propio local (Lactatos 9.0 causados irónicamente por tu propia cura y manos). Hay que rescatarlo infundiendo Vaso y dilucidar su Noradrenalina de golpe estático."
    },
    11: {
        teoria: `## 🧪 Sedación Guiada Fisiológica: Target Controlled Infusion (TCI)
En el Neurocrítico o Trauma Torácico en donde queremos sincronía o evitar paros isquémicos de reflejo agudo del TGI. Un goteo continuo clásico "a chorro u ojo" empujó una epidemia de Deliria residual post-extubación con daños psicológicos e IAM a cientos en la pandemia. Hoy, la titulación es por Modelos Farmacocinéticos TCI tridimensional de propofol con perfiles base Minto y Schnider. 
### 1. Titulador Bi-Compartimental y Wake-Up Test Dirigido.
TCI predice asombrosamente basado en la edad, peso corporal magro, y estatura exactamente cuántas dianas moleculares cerebrales estarán dormidas en 'n' microsegundos estimadas para obtener el ansiado BIS (Bispectral Index Score) de 40 a 60 exacto con electroencefalogramas de una banda sin matar al paciente o permitir 'Despertar Involuntario Intraoperatorio Trauma de Pánico'.`,
        vineta: "Adulto geriátrico con antecedente EPOC intubado en anestesia general por laparoscopía aguda biliar urgente. Usamos Propofol TCI de modelo paramétrico Schnider. Repentineamente en media hora tres, el neuro-monitor frontal cerebral del BIS arroja picos súbitos salientes subiendo de base 45 a letales 85 con EMG (electromiografía frente facial del paciente) registrando temblor contráctil masivo por onda residual rítmica sin movimiento macroscópico porque el paciente tiene un bloqueo neuromuscular periférico químico completo instaurado activo inamovible (Rocuronio estricto).",
        pregunta: "¿Qué aberración anestésico-técnica indica la pantalla monitor y la intervención médica inmediata para este caos crítico oculto?",
        opciones: [
            "El paciente está sufriendo muerte cerebral y los picos son de isquemia global basal irreversible. Se debe reanimar inotrópicamente sin alterar la sedoanalgesia.",
            "Awareness Intraoperatorio Paralizado (Despertar bajo química): El paciente está total y absolutamente consciente pero congelado y atrapado físicamente; administrar de rescate un incremento TCI urgente concentrado al Cerebro de 2.0 mcg/L target plasma propofol.",
            "Ataque epiléptico no convulsivo enclavado en médula / Infundios anticonvulsivante Valproico de fondo incesante.",
            "Falso corte instrumental de interferencia de escalpelo eléctrico radio-frecuencia electroquirúrgico / No hacer modificación porque es ruido de la consola del bisturí."
        ],
        correcta: "Awareness Intraoperatorio Paralizado (Despertar bajo química): El paciente está total y absolutamente consciente pero congelado y atrapado físicamente; administrar de rescate un incremento TCI urgente concentrado al Cerebro de 2.0 mcg/L target plasma propofol.",
        retro: "Respuesta Correcta. El escenario más terrible y penalizado humanamente en la psique del paciente moderno. Ocurrió un Despertar Intraoperatorio ocultado porque el Bloqueante de los músculos periférico estaba durando más que el Dormicum Cefálico central, atrapándolo en la inmovilidad consiente. Los sensores cerebrales (BIS a 85 es corteza despierta o pre alerta analítica) capturaron sutilmente la contracción microscópica pura de angustia del músculo corrugador de las cejas frontales intentando quejarse del estrés de incisión abdominal."
    },
    12: {
        teoria: `## 🏆 El Fin del Manejo Intensivo - Liberación Protocolizada (Weaning O3)
Quitar el soporte y "De-escalar" es donde mueren el 60% de los extubados inmaduros en pisos no críticos.
### 1. La Vía Rápida vs Parálisis Diafragmática Critica Iatrogénica.
Un destete extubal requiere Prueba de Respiración Espontánea T-Tube / PSV y el cálculo del RSBI (Rapid Shallow Breathing Index - Índice de Tobin-Yang). 
### 2. El Temido Fracaso Extubatorio Post-Destete Extendido.
A veces fallan estrepitosamente no por que el pulmón esté mal... sino por el Corazón Cansado oculto al desinflar los robóticos y herméticos sacos torácicos. Al apagar al Asistente Ventricular Presurizante de Alvéolo Biomecánico, le regresas un estrés diastólico de peso basal a un corazón mermado e infartado base desestabilizado y de la nada el paciente entra en un terrorífico Edema Agudo de Pulmón (EPA) Cardiogénico Reactivo Inminente ahogándose literal en espuma roja intrahospitalaria sin aviso base en el pabellón de recuperaciones tardías agónicas a medianoche post-Weaning prematuro.`,
        vineta: "Adulto obeso masculino fumador diabético isquémico extubado por orden médica satisfactoria sin uso de VMNI suplementario transitorio (CPAP). A los 50 minutos de ser liberado de la máquina, y a pesar de no poseer ningún daño laringotráqueo, el individuo debuta con desaturación radical a 75%, taquicardia mortal superior a 150lpm, respiración agónica y estertores burbujeantes audibles bilaterales intensos generalizados en las áreas bases espaldar expectorando esputo espumoso salmonel asalmonado rosado crónico fatal.",
        pregunta: "¿Cuál fue el fundamento biomecánico ignorado al extubar asumiendo sólo una competencia pulmonar general aislada de este desastre reactivo?",
        opciones: [
            "Extubación accidental de un trombo purulento central endotraqueal dislocado residual taponante de carinas principal en extubación torpe sin succión traqueal aspiradora.",
            "Fracaso de destete extubatorio inducido por Cardiopatía Aguda (Weaning-Induced Pulmonary Edema): El PEEP sostenía al corazón averiado del paciente. Al quitárselo, regresó el retorno venoso, engrosó el ventrículo y provocó fallo y choque hipoxémico secundario retrogrado inminente letal.",
            "Neuro-intoxicación residual del gas fluorado intraóseo / Uso de naloxona interpuesta base de rescate inmediato intermitente.",
            "Trauma Laringoespasmo con estenosis obstructiva base / Re-intubación estatuto."
        ],
        correcta: "Fracaso de destete extubatorio inducido por Cardiopatía Aguda (Weaning-Induced Pulmonary Edema): El PEEP sostenía al corazón averiado del paciente. Al quitárselo, regresó el retorno venoso, engrosó el ventrículo y provocó fallo y choque hipoxémico secundario retrogrado inminente letal.",
        retro: "Respuesta Correcta. El Ventilador no solo ayuda a los pulmones, sino que 'comprime' o estabiliza hemodinámicamente un corazón ahogado con su PEEP intrapleural neumático positivo. Al arrancarlo y dejar al paciente respirar puramente por presiones negativas propias inspiratoria profunda aspiracional... succionó como Jeringa Negra letal cientos de mililitros de venosa sanguínea desde su abdomen hacía un corazón enfermo de base fallido, destruyéndole sus precargas, reventándolo instantáneamente en un encharcamiento agudo de espuma roja general asfíctica terminal. Obliga reconexión, VMNI de rescate hiperagudo STAT y diurético agresivo de asfixia en el pabellón crítico de extubaciones fallidas."
    }
};

const dir = path.join(__dirname, '../src/data/exercises/enfermeria/uci');
if (!fs.existsSync(dir)) {
    console.error("Directorio UCI no existe.");
    process.exit(1);
}

for (let i = 1; i <= 12; i++) {
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
        console.log(`Sobreescrito magistral UCI bloque-${i}. Alto Nivel Terminado.`);
    }
}
