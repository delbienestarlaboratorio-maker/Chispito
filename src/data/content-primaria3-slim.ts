// Base de datos de contenido "masticado" para papás y maestros
// Primaria 3° — Ciclo escolar 2025-2026 SEP México

import type { GradoContenido, MateriaContenido } from './content-types';

const LENGUAS_P3: MateriaContenido = {
    materia: "lenguas",
    nombre: "Lenguas Indígenas",
    emoji: "🗣️",
    color: "#9333EA",
    bloques: [
        { bloque: 1, nombre: "Proyecto en mi lengua: Ch'ol", meses: "Todo el ciclo" },
        { bloque: 2, nombre: "Proyecto en mi lengua: Chichimeco", meses: "Todo el ciclo" },
        { bloque: 3, nombre: "Proyecto en mi lengua: Cora", meses: "Todo el ciclo" },
        { bloque: 4, nombre: "Proyecto en mi lengua: Huichol", meses: "Todo el ciclo" },
        { bloque: 5, nombre: "Proyecto en mi lengua: Maya", meses: "Todo el ciclo" },
        { bloque: 6, nombre: "Proyecto en mi lengua: Mayo", meses: "Todo el ciclo" },
        { bloque: 7, nombre: "Proyecto en mi lengua: Mazateco", meses: "Todo el ciclo" },
        { bloque: 8, nombre: "Proyecto en mi lengua: Mixteco", meses: "Todo el ciclo" },
        { bloque: 9, nombre: "Proyecto en mi lengua: Náhuatl", meses: "Todo el ciclo" },
        { bloque: 10, nombre: "Proyecto en mi lengua: Seri", meses: "Todo el ciclo" },
        { bloque: 11, nombre: "Proyecto en mi lengua: Tarahumara (Ralámuli)", meses: "Todo el ciclo" },
        { bloque: 12, nombre: "Proyecto en mi lengua: Totonaco", meses: "Todo el ciclo" },
        { bloque: 13, nombre: "Proyecto en mi lengua: Tseltal", meses: "Todo el ciclo" },
        { bloque: 14, nombre: "Proyecto en mi lengua: Tsotsil", meses: "Todo el ciclo" },
        { bloque: 15, nombre: "Proyecto en mi lengua: Yaqui", meses: "Todo el ciclo" },
        { bloque: 16, nombre: "Proyecto en mi lengua: Zapoteco", meses: "Todo el ciclo" },
        { bloque: 17, nombre: "Proyecto en mi lengua: Tojolabal", meses: "Todo el ciclo" }
    ]
};

const MATEMATICAS_P3: MateriaContenido = {
    materia: "matematicas",
    nombre: "Matemáticas",
    emoji: "📐",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Multiplicación y tablas",
            meses: "Agosto – Septiembre",
            enClase: [
                "Concepto de multiplicación como suma iterada",
                "Memorización de tablas del 1 al 5 y del 10",
                "Arreglos rectangulares (filas y columnas)",
                "Propiedad conmutativa (el orden de los factores no altera el producto)",
                "Resolución de problemas multiplicativos sencillos"
            ],
            guiaPapa: {
                intro: "Tercero de primaria marca el inicio oficial de la multiplicación. No es solo memorizar, es entender que multiplicar es una 'suma rápida'.",
                comoExplicar: [
                    "Evita el aprendizaje de memoria desde el día 1. Primero enséñale que 3x4 es sumar tres veces el 4 (4+4+4).",
                    "Usa legos o hueveras para hacer 'filas y columnas'. Ver la multiplicación físicamente hace que el cerebro la entienda.",
                    "Empieza por las tablas más fáciles: la del 2 (dobles), la del 10 (agregar un cero) y la del 5 (terminan en 0 o 5).",
                    "Aprovecha el súper mercado: 'Si llevamos 4 paquetes con 3 jugos cada uno, ¿cuántos jugos son?'"
                ],
                truco: "El truco de los dobles: Para la tabla del 4, solo saca el doble del número y luego el doble de ese resultado. (Ej: 4x6 -> el doble de 6 es 12, el doble de 12 es 24).",
                error_comun: "Tratar de aprender todas las tablas de corrido. El niño se satura y se frustra. Enséñale primero a construir la tabla sumando, luego a buscar patrones, y hasta el final la memorización.",
                actividad_casa: "Batalla Naval de Tablas: Dibuja una cuadrícula de 10x10. Tiren dos dados de 10 caras (o usen cartas), multipliquen y pinten el cuadro correspondiente. El que pinte 4 cuadros seguidos gana."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende el significado de la multiplicación y resuelve problemas que implican multiplicar mediante diversos procedimientos.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["multiplicacion 3 primaria", "tablas de multiplicar", "matematicas tercero SEP"]
        },
        {
            bloque: 2,
            nombre: "División exacta",
            meses: "Octubre – Noviembre",
            enClase: [
                "Repartos equitativos y agrupamientos",
                "La división como operación inversa de la multiplicación",
                "El signo de la división (÷)",
                "Cálculo mental de divisiones exactas",
                "Problemas de reparto"
            ],
            guiaPapa: {
                intro: "La división puede asustar, pero en realidad es el acto cotidiano de 'repartir en partes iguales'. ¡Los niños son expertos en saber cuándo un reparto es justo!",
                comoExplicar: [
                    "Empieza siempre repartiendo objetos reales: 'Tenemos 12 galletas y somos 3 hermanos. A repartir una por una'.",
                    "Enséñale que la división es la hermana gemela de la multiplicación: 'Si 3x4=12, entonces 12 repartido entre 3 es 4'.",
                    "Usa dinero didáctico: 'Vamos a repartir 20 pesos entre 4 carteras'.",
                    "Nunca empieces con la 'casita' (el algoritmo formal). Primero que dominen el cálculo mental de repartos."
                ],
                truco: "El truco de la tabla invertida: Para resolver 15 ÷ 3, diles que busquen en su memoria: '¿Qué número de la tabla del 3 da 15?'.",
                error_comun: "Comenzar con el algoritmo tradicional antes de comprender el concepto. El niño aprende los pasos mecánicamente pero no entiende qué está haciendo.",
                actividad_casa: "El Chef Repartidor: Preparen un platillo que tenga varios ingredientes pequeños (ej. 15 rodajas de plátano, 10 fresas) y pídele que los reparta en 5 platos asegurando que todos tengan exactamente lo mismo."
            },
            guiaMaestro: {
                objetivo: "El alumno asimila el concepto de división como reparto y agrupamiento equitativo, y lo relaciona con la multiplicación.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["division 3 primaria", "repartos exactos", "division mental tercero"]
        },
        {
            bloque: 3,
            nombre: "Fracciones simples",
            meses: "Diciembre – Enero",
            enClase: [
                "Medios, cuartos y octavos",
                "Fracciones en representaciones gráficas",
                "Numerador y denominador básicos",
                "Fracciones equivalentes simples (1/2 = 2/4)",
                "Problemas con fracciones en contextos cotidianos"
            ],
            guiaPapa: {
                intro: "Las fracciones entran en escena. A los niños les encantan porque involucran cortar y dividir, ¡especialmente si es comida!",
                comoExplicar: [
                    "La regla de oro: La pizza SIEMPRE funciona. Usa una pizza real o dibujada para explicar medios, cuartos y octavos.",
                    "El número de abajo (denominador) te dice en cuántos pedazos cortaste la pizza. El de arriba (numerador) cuántos te comes.",
                    "Doblar papel: Toma una hoja, dóblala a la mitad (medios), otra vez (cuartos), otra vez (octavos). Es magia matemática.",
                    "Enseña fracciones con líquidos: medio litro de leche, un cuarto de jugo."
                ],
                truco: "Fracciones equivalentes con Legos: Un bloque de 8 puntitos es un 'entero'. Dos de 4 son 'medios'. Cuatro de 2 son 'cuartos'. Verlos apilados deja el concepto clarísimo.",
                error_comun: "Creer que 1/8 es mayor que 1/2 porque el número 8 es mayor que el 2. Explícales que 'entre más amigos invites a la fiesta (denominador), más pequeño es el pedazo de pastel que te toca'.",
                actividad_casa: "Noche de Pizza Fraccionada: Compra una pizza y pídele que le dé 1/4 a papá, 1/8 a su hermano, etc. También aplica cortando sándwiches de manera asimétrica y preguntando '¿Estos son medios justos? ¡No, no son iguales!'."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica y representa fracciones de magnitudes continuas y discretas en situaciones cotidianas.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["fracciones tercero primaria", "medios cuartos octavos", "fracciones simples SEP"]
        },
        {
            bloque: 4,
            nombre: "Geometría, Reloj y Perímetro",
            meses: "Febrero – Marzo",
            enClase: [
                "Lectura del reloj de manecillas",
                "Cálculo de tiempos transcurridos",
                "Características de las figuras planas",
                "Introducción al concepto de perímetro",
                "Uso de regla y medición"
            ],
            guiaPapa: {
                intro: "En este bloque, las matemáticas se vuelven tangibles: aprenderán a leer la hora en un reloj de 'bolitas' y a medir el contorno de las cosas.",
                comoExplicar: [
                    "Para el reloj, la manecilla corta y gorda cuenta las horas, la larga y rápida los minutos (¡que van de 5 en 5!).",
                    "Perímetro es simplemente la 'cerca' que rodea al jardín. Mide cada lado y súmalos.",
                    "Enséñale a usar la regla correctamente empezando desde la raya del CERO, no desde el borde del plástico.",
                    "Haz que calculen cuánto falta: 'Son las 4:00, tu programa empieza a las 4:30. ¿Cuántos minutos faltan?'"
                ],
                truco: "El truco de los brincos del reloj: Para los minutos, enséñale que el reloj es solo la tabla del 5 disfrazada en un círculo.",
                error_comun: "En la lectura del reloj, leer los minutos igual que las horas (ej. si la manecilla larga está en el 3, decir que son '3 minutos' en vez de 15). Siempre repasar que los minutos saltan de 5 en 5.",
                actividad_casa: "El Vigilante del Perímetro: Dale un metro o cinta métrica y pídele que mida el perímetro de su cama, la mesa del comedor y un tapete. Que anote todo en su 'bitácora de ingeniero'."
            },
            guiaMaestro: {
                objetivo: "El alumno lee la hora en relojes analógicos, y calcula el perímetro de polígonos usando unidades convencionales.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["leer el reloj 3 primaria", "perimetro geometria", "medicion tercero SEP"]
        },
        {
            bloque: 5,
            nombre: "Estadística básica y resolución de problemas",
            meses: "Abril – Junio",
            enClase: [
                "Interpretación de gráficas de barras",
                "Recolección de datos mediante encuestas",
                "Tablas de doble entrada",
                "Operaciones combinadas simples (suma, resta y multiplicación)",
                "Resolución de problemas de varios pasos"
            ],
            guiaPapa: {
                intro: "¡Llegamos al análisis de datos! Los niños aprenderán a encuestar, recolectar información y tomar decisiones basadas en números, como pequeños científicos.",
                comoExplicar: [
                    "Enséñale que una gráfica es como una 'carrera' donde la barra más alta es la opción que ganó.",
                    "Para los problemas de varios pasos, usa la técnica de 'detective': ¿Qué sé? ¿Qué me preguntan? ¿Qué operación debo hacer?",
                    "Anímalo a subrayar los números importantes en el problema con rojo y la pregunta con azul.",
                    "Fomenta que haga un dibujo rápido del problema antes de intentar sumar o multiplicar."
                ],
                truco: "Para evitar que adivinen la operación, diles que se pregunten: 'Al final, ¿tendré MÁS o tendré MENOS?'. Si es más, es suma o multiplicación. Si es menos, es resta o división.",
                error_comun: "En los problemas matemáticos, sumar todos los números que vean sin leer el problema. Exige siempre que te expliquen con sus palabras qué está pasando en la historia del problema antes de escribir un solo número.",
                actividad_casa: "La Encuesta Familiar: Pídele que llame por teléfono a 10 familiares o pregunte a vecinos sobre su color o postre favorito. Que haga una tabla de conteo (con palitos) y luego dibuje una gráfica de barras con los resultados."
            },
            guiaMaestro: {
                objetivo: "El alumno recolecta, organiza y lee datos en tablas y gráficas de barras, y resuelve problemas matemáticos complejos.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["graficas de barras 3 primaria", "resolucion de problemas matematicas", "estadistica tercero SEP"]
        }
    ]
};

const ESPANOL_P3: MateriaContenido = {
    materia: "espanol",
    nombre: "Español",
    emoji: "📚",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "Lectura fluida y el cuento",
            meses: "Agosto – Septiembre",
            enClase: [
                "Lectura en voz alta respetando signos de puntuación",
                "Estructura del cuento: Inicio, desarrollo y desenlace",
                "Identificación de personajes y escenarios",
                "Comprensión lectora: responder preguntas sobre el texto",
                "Escritura de finales alternativos"
            ],
            guiaPapa: {
                intro: "En tercero, la lectura deja de ser solo 'juntar letras' y se convierte en entender y vivir historias profundamente. El niño pasa de 'aprender a leer' a 'leer para aprender'.",
                comoExplicar: [
                    "Al leer con él, exagera las voces de los personajes y los signos de interrogación. El teatro invita a la comprensión.",
                    "Nunca lo corrijas interrumpiéndolo en seco. Deja que termine la oración y si cambió el sentido, pregúntale: '¿Eso tuvo sentido?'.",
                    "El cuento es como una hamburguesa: El inicio es el pan de abajo (presenta todo), la carne es el desarrollo (el problema) y el pan de arriba el desenlace.",
                    "Que él te lea a ti mientras cocinas o manejas."
                ],
                truco: "La lectura del loro: Tú lees un párrafo con mucha expresión, y él tiene que imitarte exactamente igual, leyendo el mismo párrafo. Mejora la fluidez un 200%.",
                error_comun: "Leer rápido pero sin entender nada. Es preferible que lean lento y al final puedan explicar de qué trató, a que rompan récords de velocidad sin comprensión.",
                actividad_casa: "El Club de Lectura de la Cama: Escojan un libro de capítulos (como El Principito o Matilda). Cada noche lean un capítulo, se turnan las páginas y platiquen de qué pasó."
            },
            guiaMaestro: {
                objetivo: "El alumno lee textos narrativos con fluidez, identifica sus partes y demuestra comprensión lectora.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["comprension lectora 3 primaria", "partes del cuento", "lectura fluida tercero"]
        },
        {
            bloque: 2,
            nombre: "Ortografía, acentos y puntuación",
            meses: "Octubre – Noviembre",
            enClase: [
                "Uso de mayúsculas y punto final",
                "Reglas de uso de C, S, Z y B, V",
                "La sílaba tónica: agudas, graves y esdrújulas",
                "El uso de la coma para enumerar",
                "Signos de interrogación y exclamación"
            ],
            guiaPapa: {
                intro: "Acentuar y usar buena ortografía no es un castigo, es la forma de vestir elegante a nuestras palabras para que todos nos entiendan perfecto.",
                comoExplicar: [
                    "Para la sílaba tónica, diles que cada palabra tiene una 'sílaba fuerte que hace gimnasio'. Pídeles que aplaudan fuerte en esa sílaba.",
                    "Explica la coma como un 'respiro pequeñito' y el punto como un 'respiro largo'.",
                    "Haz carteles divertidos para la B y V (La V de Vaca y la B de Burro) con dibujos visuales.",
                    "Las mayúsculas son como los sombreros elegantes: solo se ponen al principio de la fiesta (la oración) o cuando alguien es muy importante (nombres propios)."
                ],
                truco: "La regla de la nariz para los acentos: Que pongan un dedo en su nariz y digan la palabra alargando cada sílaba (ej. PÁÁÁ-ja-ro vs pa-JÁÁÁ-ro). La que suene natural es la fuerte.",
                error_comun: "Acentuar porque 'se ve bonito'. Hay que enseñarles a escuchar primero. Si no escuchan la sílaba fuerte, no podrán aplicar las reglas de agudas y graves.",
                actividad_casa: "El Detective de Acentos: Dale un periódico o revista vieja y un plumón rojo. Tiene 5 minutos para encerrar todas las palabras con tilde (acento gráfico) que encuentre."
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce y aplica reglas ortográficas básicas y de acentuación, mejorando la estructura de sus escritos.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["silaba tonica 3 primaria", "ortografia tercero SEP", "agudas graves esdrujulas"]
        },
        {
            bloque: 3,
            nombre: "Textos informativos y el resumen",
            meses: "Diciembre – Enero",
            enClase: [
                "Diferencia entre texto literario e informativo",
                "Búsqueda de información en libros e internet",
                "Identificación de ideas principales",
                "Elaboración de un resumen simple",
                "El uso del diccionario"
            ],
            guiaPapa: {
                intro: "Aquí aprenden a investigar. Ya no es inventar historias, sino encontrar la verdad sobre dinosaurios, volcanes o planetas y saber explicarla.",
                comoExplicar: [
                    "Dile que el resumen es 'quitarle la grasa al caldo y dejar solo la carnita'.",
                    "Enséñale a usar un diccionario físico, no solo Google. El orden alfabético es una habilidad crítica.",
                    "Subrayar no es pintar todo el libro. Enséñale a buscar solo 'la frase estrella' de cada párrafo.",
                    "Al leer un texto informativo, hagan pausa: '¿Qué nos quiso enseñar este pedacito?'"
                ],
                truco: "Para resumir, usa la fórmula mágica: ¿QUIÉN?, ¿QUÉ HIZO?, ¿DÓNDE?, ¿CUÁNDO? y ¿POR QUÉ?. Si responden eso en una hoja, ¡tienen un resumen perfecto!",
                error_comun: "Creer que 'resumir' es copiar las tres primeras líneas del texto. Enséñales a leer TODO, cerrar el libro y platicar de qué trató, para luego escribir eso.",
                actividad_casa: "El Mini-Reportero: Que elija su animal favorito. Tiene que buscar en un libro o internet 3 datos increíbles, escribirlos en tarjetas y presentar las 'noticias animales' a la familia en la cena."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica características de textos informativos, extrae ideas principales y redacta resúmenes estructurados.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["textos informativos 3 primaria", "como hacer un resumen", "ideas principales SEP"]
        },
        {
            bloque: 4,
            nombre: "Poesía, rimas y sentido figurado",
            meses: "Febrero – Marzo",
            enClase: [
                "Estructura del poema: verso y estrofa",
                "La rima consonante y asonante",
                "Lenguaje literal vs sentido figurado",
                "Metáforas simples y comparaciones",
                "Declamación y expresión de emociones"
            ],
            guiaPapa: {
                intro: "La poesía es la música de las palabras. En este bloque, los niños aprenderán que las palabras pueden jugar, bailar y significar cosas hermosas.",
                comoExplicar: [
                    "El lenguaje figurado es decir mentiras hermosas. 'Tus ojos son estrellas' (¡no son estrellas de verdad, es que brillan!).",
                    "Jueguen a buscar rimas con los nombres de la familia: 'Ramón come jamón en el balcón'.",
                    "Un verso es el renglón. Una estrofa es el 'grupito' de renglones.",
                    "Anímalos a leer poemas moviendo las manos y haciendo gestos. La declamación da muchísima seguridad."
                ],
                truco: "Para explicar la comparación (símil), diles que busquen la palabra 'COMO'. 'Corre COMO un rayo', 'Fuerte COMO un toro'. Es el detector oficial de comparaciones.",
                error_comun: "Leer la poesía como si fuera un instructivo de microondas. Enséñales que al final de cada verso hay un micropausa musical, no hay que correr.",
                actividad_casa: "Batalla de Rimas de Rap: Pongan un ritmo de rap de fondo en YouTube. El reto es decir una frase, y el siguiente tiene que decir algo que rime. Se vale inventar palabras graciosas."
            },
            guiaMaestro: {
                objetivo: "El alumno distingue el lenguaje poético, reconoce rimas, estrofas e identifica recursos literarios básicos como la comparación.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["poesia 3 primaria", "rimas y sentido figurado", "metaforas para niños"]
        },
        {
            bloque: 5,
            nombre: "Comunicación oral y debate",
            meses: "Abril – Junio",
            enClase: [
                "Expresión de opiniones con argumentos ('yo opino que... porque...')",
                "El debate: escuchar y respetar turnos",
                "Entrevistas simples",
                "El folleto y la publicidad",
                "Preparación de una exposición oral"
            ],
            guiaPapa: {
                intro: "Cerramos el año dándoles voz y poder. Aprenderán a convencer, a defender sus ideas y a pararse frente al público sin miedo.",
                comoExplicar: [
                    "Un argumento es el 'escudo' de tu opinión. No basta decir 'me gusta', hay que dar un buen 'PORQUE...'.",
                    "Para exponer, enséñale que el público no muerde. Que mire a las frentes de los niños, no a los ojos si le da nervios.",
                    "El debate no es pelear, es convencer con inteligencia. El que grita, pierde.",
                    "Al hacer entrevistas, lo más importante es escuchar, no solo leer la siguiente pregunta."
                ],
                truco: "El truco del experto: Cuando vaya a exponer, dile que en ese momento ÉL es el mayor experto del mundo en ese tema en todo el salón. ¡Ni el maestro sabe lo que él investigó! Eso les da un subidón de confianza.",
                error_comun: "Llevar la cartulina de exposición llena de texto diminuto y dedicarse a leerla de espaldas al público. ¡La cartulina solo lleva dibujos gigantes y palabras clave!",
                actividad_casa: "El Debate de la Cena: Pongan un tema polémico pero divertido en la mesa (ej. ¿Los perros son mejores que los gatos? ¿Se debería comer pizza de desayuno?). Cada quien tiene 1 minuto para dar sus argumentos sin ser interrumpido."
            },
            guiaMaestro: {
                objetivo: "El alumno desarrolla habilidades de comunicación oral, argumentación básica y se desenvuelve frente a una audiencia de forma estructurada.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["exposicion oral 3 primaria", "debate para niños", "argumentacion tercero SEP"]
        }
    ]
};

const CIENCIAS_P3: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias Naturales",
    emoji: "🔬",
    color: "#10B981",
    bloques: [
        {
            bloque: 1,
            nombre: "El cuerpo humano: Aparato locomotor",
            meses: "Agosto – Septiembre",
            enClase: [
                "Huesos y el esqueleto humano",
                "Músculos y articulaciones",
                "Cuidado del sistema locomotor y prevención de lesiones",
                "Posturas correctas al sentarse y cargar",
                "Alimentación para huesos fuertes"
            ],
            guiaPapa: {
                intro: "Los niños descubrirán la maravilla de la máquina que habitan. Entenderán por qué pueden saltar, correr y cómo evitar fracturarse.",
                comoExplicar: [
                    "Los huesos son las vigas de la casa, los músculos son los obreros que la mueven.",
                    "Tócate los codos, rodillas y muñecas: Esas son las articulaciones (las 'bisagras' del cuerpo).",
                    "Usa plastilina y palillos para explicar cómo un hueso (palillo) sin músculo no se puede sostener.",
                    "Enséñale que el calcio (leche, tortillas, brócoli) es el cemento de los huesos."
                ],
                truco: "El baile del robot vs la gelatina: Pídele que camine sin doblar las articulaciones (robot) y luego como si no tuviera huesos (gelatina). ¡Así entienden para qué sirve cada cosa!",
                error_comun: "Creer que los huesos son estructuras muertas como piedras. Explícales que el hueso está vivo, crece con ellos y necesita comida para repararse.",
                actividad_casa: "El Rayos X Casero: Que se acueste en papel craft o periódicos gigantes, traza su silueta, y luego juntos dibujen adentro los huesos principales y coloreen los músculos más grandes."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica las estructuras básicas del aparato locomotor (huesos, músculos y articulaciones) y reconoce la importancia de su cuidado.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["aparato locomotor 3 primaria", "sistema oseo y muscular", "ciencias naturales cuerpo humano"]
        },
        {
            bloque: 2,
            nombre: "Nutrición y alimentación saludable",
            meses: "Octubre – Noviembre",
            enClase: [
                "El Plato del Bien Comer",
                "Clasificación de alimentos (verduras, cereales, leguminosas, animales)",
                "La importancia del agua potable",
                "Diferencia entre nutrición y 'llenar la panza'",
                "Trastornos alimenticios básicos (obesidad y desnutrición)"
            ],
            guiaPapa: {
                intro: "La educación nutricional empieza en casa, pero aquí en tercero se le pone ciencia: aprenderán por qué su cuerpo exige ciertas gasolinas.",
                comoExplicar: [
                    "El Plato del Bien Comer es como un semáforo: Verde (verduras/frutas, ¡acelera!), Amarillo (cereales, con precaución), Rojo (carnes/leguminosas, detente y come poco).",
                    "Los cereales y carbohidratos son la 'gasolina' de energía rápida. Las proteínas son los 'ladrillos' para crecer.",
                    "El agua natural es el aceite del motor. Los jugos y refrescos son como echarle azúcar al motor (se pega y se daña).",
                    "Haz que se involucre al hacer el súper leyendo etiquetas."
                ],
                truco: "Colores en el plato: Entre más colores brillantes naturales (verde, rojo, naranja) tenga tu plato, más superpoderes vitamínicos te da. El plato beige (pan, pollo frito, papas) daña el motor.",
                error_comun: "Pensar que las grasas son siempre malas. Explica que hay grasas de superhéroe (aguacate, nueces) y grasas villanas (frituras, pan dulce).",
                actividad_casa: "El Chef del Semáforo: Pídele que arme un almuerzo o cena que cumpla con los 3 colores del semáforo del Plato del Bien Comer usando lo que haya en el refrigerador."
            },
            guiaMaestro: {
                objetivo: "El alumno clasifica los alimentos según el Plato del Bien Comer y toma decisiones conscientes para una dieta equilibrada y consumo de agua.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["plato del bien comer 3 primaria", "alimentacion saludable", "nutricion para niños"]
        },
        {
            bloque: 3,
            nombre: "Estados y propiedades de la materia",
            meses: "Diciembre – Enero",
            enClase: [
                "Estados físicos: sólido, líquido y gas",
                "Masa y volumen (conceptos básicos)",
                "Cambios de estado por temperatura (derretir, congelar, evaporar)",
                "Mezclas en la vida cotidiana",
                "Diferencia entre materiales naturales y artificiales"
            ],
            guiaPapa: {
                intro: "¡Química para niños! Descubrirán que todo el universo está hecho de materia que se disfraza en tres formas distintas.",
                comoExplicar: [
                    "Sólido es una piedra (no cambia de forma), líquido es agua (toma la forma del vaso) y gas es humo (quiere escapar a todos lados).",
                    "Masa es qué 'tan rellenito' está algo. Volumen es 'cuánto espacio ocupa'.",
                    "Para entender los cambios de estado, no hay nada mejor que el agua, que puede ser hielo, agua de beber o vapor de sopa.",
                    "Una mezcla es cuando dos cosas se juntan, como el cereal con leche o la pintura de colores."
                ],
                truco: "Las moléculas bailadoras: Sólido = niños abrazados sin moverse. Líquido = niños caminando tomados de la mano. Gas = niños corriendo locos por todo el patio. La temperatura es la música que los hace correr.",
                error_comun: "Creer que los gases 'no pesan' o no son materia porque no se ven. Inflar un globo demuestra que el aire ocupa espacio y pesa.",
                actividad_casa: "Laboratorio de Hielo: Congela agua, luego derrítela en un sartén, y deja que hierva hasta que se evapore. Que el niño observe y dibuje los 3 estados del agua. ¡Hicieron ciencia en 10 minutos!"
            },
            guiaMaestro: {
                objetivo: "El alumno distingue los estados físicos de la materia, experimenta cambios inducidos por la temperatura y reconoce mezclas comunes.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["estados de la materia niños", "solido liquido gaseoso", "ciencias 3 primaria experimentos"]
        },
        {
            bloque: 4,
            nombre: "La temperatura y la fuerza",
            meses: "Febrero – Marzo",
            enClase: [
                "El concepto de temperatura (calor y frío)",
                "El termómetro: partes y cómo se lee",
                "Las fuerzas y sus efectos (mover, detener, deformar)",
                "La gravedad: una fuerza invisible",
                "Máquinas simples: la palanca y la polea"
            ],
            guiaPapa: {
                intro: "Llega el turno de la física. Comprenderán por qué las cosas caen, cómo se deforman y cómo medimos la 'fiebre' de los objetos.",
                comoExplicar: [
                    "El calor es energía. Cuando algo está caliente, sus moléculas brincan rápido.",
                    "El termómetro es una regla para medir el calor. En México usamos 'Grados Centígrados'.",
                    "Una fuerza es cualquier empujón o jalón. Empujar un carrito o jalar una puerta.",
                    "La gravedad es el imán gigante de la Tierra que jala todo hacia su centro."
                ],
                truco: "El truco de la deformación vs el movimiento: Una fuerza puede mover algo (patear un balón) o puede deformarlo (aplastar una plastilina o un pan).",
                error_comun: "Pensar que 'frío' es algo que entra al cuerpo (ej. 'cierra que entra el frío'). En ciencias, el frío no existe, lo que existe es la 'pérdida de calor'. El calor de la casa se escapa.",
                actividad_casa: "La Cacería de Termómetros y Palancas: Busquen en casa qué usa termómetros (el del botiquín, el del horno, el clima del auto) y qué es una palanca (un sacacorchos, unas tijeras, un balancín). Anótenlo."
            },
            guiaMaestro: {
                objetivo: "El alumno experimenta e identifica el efecto de las fuerzas sobre los objetos, y comprende el uso del termómetro para medir temperatura.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["la temperatura primaria", "uso del termometro", "fuerzas fisicas para niños"]
        },
        {
            bloque: 5,
            nombre: "La Tierra, el Sol y la Luna",
            meses: "Abril – Junio",
            enClase: [
                "Movimientos de la Tierra: rotación y traslación",
                "El día, la noche y las estaciones del año",
                "Las fases de la Luna",
                "Eclipses: juego de sombras cósmicas",
                "Cuidado de la Tierra y el medio ambiente global"
            ],
            guiaPapa: {
                intro: "Volamos al espacio exterior para entender nuestro hogar. Por fin sabrán por qué a veces la luna parece un plátano y por qué tenemos verano e invierno.",
                comoExplicar: [
                    "Rotación = dar vueltas como un trompo (crea el día y la noche, dura 24h).",
                    "Traslación = darle la vuelta a la pista del Sol (crea las estaciones, dura 1 año).",
                    "La luna no tiene luz, es un espejo gigante de roca que refleja la luz del Sol.",
                    "Un eclipse es cuando alguien se atraviesa: o la Luna tapa al Sol, o la Tierra le tapa la luz a la Luna."
                ],
                truco: "Usa tu cuerpo: Pide al niño que gire sobre su propio eje lentamente (Rotación/Día) mientras camina en un gran círculo alrededor tuyo, que eres el sol (Traslación/Año).",
                error_comun: "Creer que las fases de la luna son causadas por la sombra de la Tierra. No, son causadas porque desde la Tierra solo vemos la parte iluminada de la esfera lunar.",
                actividad_casa: "La Linterna Espacial: En un cuarto oscuro, usa una linterna (Sol), una pelota grande (Tierra) y una naranja pequeña (Luna). Recreen un eclipse de luna y de sol proyectando sombras en la pared."
            },
            guiaMaestro: {
                objetivo: "El alumno explica los movimientos de la Tierra y la Luna, y los relaciona con fenómenos naturales y ciclos biológicos.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["fases de la luna niños", "rotacion y traslacion", "sistema solar tercero primaria"]
        }
    ]
};

const HISTORIA_P3: MateriaContenido = {
    materia: "historia",
    nombre: "La Entidad donde Vivo (Historia Local)",
    emoji: "🇲🇽",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "Mi estado y sus primeros habitantes",
            meses: "Agosto – Septiembre",
            enClase: [
                "Ubicación de nuestro estado en el mapa de México",
                "Paisajes, clima, flora y fauna locales",
                "Los grupos indígenas originales de la entidad",
                "Sitios arqueológicos cercanos",
                "Mitos y leyendas fundacionales de la región"
            ],
            guiaPapa: {
                intro: "Este año la historia se vuelve personal. Los niños dejarán de ver la historia como algo lejano y estudiarán su propio estado, sus raíces y su tierra.",
                comoExplicar: [
                    "Muestra el estado en un mapa de México. Enséñale sus colindancias: ¿Quiénes son nuestros vecinos?",
                    "Platiquen sobre el clima. '¿Por qué aquí usamos abrigo y en Cancún no?'",
                    "Busca palabras de uso diario que provengan de la lengua indígena de su estado (ej. molcajete, papalote).",
                    "Muestra fotos antiguas del lugar donde viven comparadas con Google Street View."
                ],
                truco: "El municipio soy yo: El país es la escuela entera, el estado es tu salón, el municipio es tu fila de bancas, y la localidad es tu silla. Así entienden la división política.",
                error_comun: "Confundir 'país', 'estado' y 'municipio'. Es crucial hacer la analogía de muñecas matrioskas (uno adentro del otro) para que aterricen el concepto.",
                actividad_casa: "Turistas de nuestro propio estado: Dedica un domingo a visitar el centro histórico, un museo local o ruinas arqueológicas cercanas. La historia que se camina no se olvida."
            },
            guiaMaestro: {
                objetivo: "El alumno ubica temporal y espacialmente las características geográficas e históricas de los primeros habitantes de su entidad.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["la entidad donde vivo", "historia local primaria", "grupos indigenas mexico"]
        },
        {
            bloque: 2,
            nombre: "La Conquista y el Virreinato en mi región",
            meses: "Octubre – Noviembre",
            enClase: [
                "La llegada de los españoles a nuestro estado",
                "Nuevas plantas, animales y costumbres",
                "Mestizaje: la mezcla de dos mundos",
                "La fundación de nuestras primeras ciudades y catedrales",
                "El trabajo en las haciendas y minas locales"
            ],
            guiaPapa: {
                intro: "El encuentro de dos mundos es fascinante. Es la época donde se creó el 'México' que conocemos, con sus iglesias, caballos y comida mestiza.",
                comoExplicar: [
                    "La conquista fue como si dos planetas distintos chocaran. Los indígenas no conocían vacas ni caballos; los españoles no conocían el tomate ni el cacao.",
                    "Mestizaje es un 'licuado' de culturas. Nosotros somos el resultado de ese licuado.",
                    "Los edificios de piedra grandotes en el centro (catedrales y palacios) los hicieron en esta época.",
                    "El virrey era como el 'gerente' del Rey de España que vivía muy lejos."
                ],
                truco: "El taco al pastor es el mejor ejemplo de mestizaje: La carne de cerdo es española, el chile y el maíz son mexicanos, y el trompo es árabe. La historia se puede comer.",
                error_comun: "Enseñar a los españoles solo como villanos absolutos o a los indígenas como víctimas puras. Fomenta el entendimiento de que el mestizaje creó la riqueza cultural que tenemos hoy.",
                actividad_casa: "El Banquete de los Dos Mundos: Hagan un desayuno separando ingredientes originarios (frijoles, maíz, aguacate, chocolate) y los traídos por los españoles (queso, leche, pollo, trigo). Luego háganse unas ricas quesadillas demostrando el mestizaje."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende el proceso de colonización en su entidad y valora la herencia del mestizaje en su vida diaria.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["conquista de mexico 3 primaria", "virreinato para niños", "mestizaje cultural"]
        },
        {
            bloque: 3,
            nombre: "La Independencia y mi entidad",
            meses: "Diciembre – Enero",
            enClase: [
                "Descontento social y el Grito de Dolores",
                "Héroes de la Independencia nacionales y locales",
                "Cómo afectó la guerra a nuestra región",
                "La vida de los niños y las familias en aquella época",
                "El nacimiento de México como país libre"
            ],
            guiaPapa: {
                intro: "La Independencia a los ojos de un niño de tercero debe sentirse como una película de superhéroes: gente valiente luchando por un ideal justo.",
                comoExplicar: [
                    "No éramos México, éramos la 'Nueva España'. Hidalgo y Morelos querían que fuéramos dueños de nuestra propia casa.",
                    "Cuenta la conspiración de Querétaro como un secreto que se descubrió y obligó a tocar la campana de madrugada.",
                    "Aterriza la historia en tu estado: '¿Por aquí pasó Hidalgo? ¿Hubo batallas cerca?'",
                    "Explica que después de ganar, tuvieron que inventar cómo gobernarse (presidentes en vez de reyes)."
                ],
                truco: "Personificación: Enseña a Hidalgo como el abuelo valiente que dio el grito, a Morelos como el estratega militar estricto con paliacate, y a Josefa como la espía que salvó la revolución.",
                error_comun: "Enseñar fechas y nombres sin contexto. A esta edad las fechas (1810) son abstractas. Es mejor decir 'hace más de 200 años, cuando no había luz eléctrica ni carros'.",
                actividad_casa: "Noticiero Insurgente: Jueguen a ser reporteros de televisión del año 1810. Que el niño grabe un 'reportaje' con un celular contando lo que acaba de pasar en el pueblo de Dolores. ¡El drama histórico les encanta!"
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce los acontecimientos centrales de la Independencia y la participación de personajes locales, valorando la soberanía.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["independencia de mexico primaria", "miguel hidalgo", "historia 3 primaria"]
        },
        {
            bloque: 4,
            nombre: "Del Porfiriato a la Revolución",
            meses: "Febrero – Marzo",
            enClase: [
                "La llegada del ferrocarril y la electricidad",
                "El gobierno de Porfirio Díaz (luces y sombras)",
                "Desigualdad extrema y las haciendas",
                "Zapata, Villa, Madero y el levantamiento armado",
                "La Constitución de 1917"
            ],
            guiaPapa: {
                intro: "Trenes, bigotes, adelitas y caballos. Esta es una época de modernización que terminó en una explosión social por la falta de justicia.",
                comoExplicar: [
                    "Don Porfirio trajo el tren, los teléfonos y la luz, pero los campesinos no tenían para comer.",
                    "Las haciendas eran como pequeños reinos donde un patrón era dueño de todo y la gente trabajaba sin ganar casi nada (tiendas de raya).",
                    "Zapata quería tierra para sembrar, Villa quería escuelas, Madero quería elecciones justas.",
                    "La Constitución de 1917 es el 'libro de las reglas' que se escribió al ganar la Revolución para asegurar que todos tuvieran derechos."
                ],
                truco: "Zapata es el héroe del Sur (campesinos con sombrero charro), Villa es el héroe del Norte (dorados a caballo), y Madero es el intelectual de traje en la capital. Los 3 Avengers mexicanos.",
                error_comun: "Confundir Independencia (contra España, 1810) con Revolución (contra Porfirio Díaz, 1910). Usa el ferrocarril visualmente: Si hay trenes, es Revolución. Si andan en burro o carreta, es Independencia.",
                actividad_casa: "Entrevista al Abuelo/Bisabuelo: Pídele al niño que llame al miembro más grande de la familia y le pregunte historias que le hayan contado sus padres sobre la época de los caudillos o cómo era la vida en el campo antes."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza las causas y consecuencias de la Revolución Mexicana, valorando las garantías sociales de la Constitución.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["revolucion mexicana niños", "porfiriato primaria", "zapata y villa"]
        },
        {
            bloque: 5,
            nombre: "Mi estado en la actualidad",
            meses: "Abril – Junio",
            enClase: [
                "La vida urbana frente a la vida rural en la actualidad",
                "Patrimonio cultural y natural que debemos proteger",
                "Problemas actuales de la entidad (contaminación, agua)",
                "Cultura, gastronomía y festividades vivas",
                "Nuestros derechos y deberes ciudadanos de niños"
            ],
            guiaPapa: {
                intro: "Cerramos conectando el pasado con el presente. Es momento de que entiendan que ellos son los nuevos constructores de la historia de su ciudad.",
                comoExplicar: [
                    "El patrimonio es la herencia de los abuelos que debemos cuidar: edificios históricos, bosques, y hasta recetas de cocina.",
                    "Explica de dónde viene el agua que toman y por qué es un problema crítico hoy en día.",
                    "Las festividades (Día de Muertos, ferias locales) son historia viva.",
                    "Hablen de que los niños tienen derecho a la escuela y jugar, pero tienen el deber de cuidar su entorno."
                ],
                truco: "El alcalde por un día: Pídele que imagine que él manda en la ciudad. '¿Cuáles son las 3 cosas que arreglarías hoy mismo?' Esto desarrolla el pensamiento crítico cívico.",
                error_comun: "Pensar que la historia ya se acabó. Hay que recalcarles que la historia la estamos escribiendo nosotros hoy, con lo que hacemos por nuestra comunidad.",
                actividad_casa: "Guía de Turistas: Que el niño diseñe un tríptico turístico de 3 dobleces dibujando las 3 cosas que más le enorgullecen de su estado (un platillo, un lugar, una fiesta) para 'convencer' a un extranjero de visitarlos."
            },
            guiaMaestro: {
                objetivo: "El alumno valora el patrimonio natural y cultural actual de su entidad, y se asume como ciudadano activo con derechos y obligaciones ambientales.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["patrimonio cultural primaria", "derechos de los niños", "mi estado en la actualidad"]
        }
    ]
};

const FORMACION_P3: MateriaContenido = {
    materia: "formacion",
    nombre: "Formación Cívica y Ética",
    emoji: "🤝",
    color: "#8B5CF6",
    bloques: [
        {
            bloque: 1,
            nombre: "Mis derechos y mi dignidad",
            meses: "Agosto – Septiembre",
            enClase: [
                "Reconocimiento de la dignidad humana",
                "Derechos de los niños y las niñas",
                "Necesidades básicas para el desarrollo",
                "Instituciones que protegen a la niñez",
                "Situaciones que afectan mis derechos"
            ],
            guiaPapa: {
                intro: "A esta edad los niños empiezan a tener un sentido agudo de la justicia. Es el momento perfecto para enseñarles que sus derechos vienen acompañados de respeto a los demás.",
                comoExplicar: [
                    "La dignidad es como un 'escudo invisible' que todos tenemos desde que nacemos y que exige respeto.",
                    "Hablen de que tener techo, comida y escuela son derechos, no lujos.",
                    "Enséñale que así como él tiene derechos, el compañerito de al lado tiene exactamente los mismos.",
                    "Platiquen sobre a quién acudir si sienten que alguien los trata mal (familia, maestros, policías)."
                ],
                truco: "La regla del semáforo corporal: Verde (saludos normales), Amarillo (cosas que incomodan), Rojo (nadie puede tocar tu cuerpo sin permiso). Regla de oro de la dignidad.",
                error_comun: "Enseñar los derechos sin los deberes. Siempre que hables de un derecho (ej. derecho al juego), conéctalo con una responsabilidad (ej. recoger los juguetes después).",
                actividad_casa: "El Árbol de mi Familia: Dibujen un árbol grande. En las raíces pongan lo que necesitan para vivir (comida, casa), en el tronco quién se los da (padres, gobierno), y en las hojas sus derechos (jugar, estudiar)."
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce su dignidad, identifica sus derechos fundamentales e instituciones garantes.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["derechos de los niños 3 primaria", "dignidad humana", "formacion civica tercero"]
        },
        {
            bloque: 2,
            nombre: "Emociones y resolución de conflictos",
            meses: "Octubre – Noviembre",
            enClase: [
                "Identificación y manejo de emociones intensas",
                "Empatía: ponerse en el lugar del otro",
                "Diferencia entre conflicto y violencia",
                "Diálogo y acuerdos para resolver problemas",
                "La cultura de paz en la escuela"
            ],
            guiaPapa: {
                intro: "Los pleitos de patio de recreo se vuelven más complejos en tercero. Aprender a manejar el enojo sin golpes es una habilidad para toda la vida.",
                comoExplicar: [
                    "Un conflicto es normal (dos niños quieren el mismo columpio). La violencia (pegar por el columpio) NO es normal.",
                    "Usa la técnica de la tortuga: cuando estés muy enojado, métete en tu caparazón, respira 3 veces, y luego sal a hablar.",
                    "Empatía es 'ponerse los zapatos del otro'. '¿Cómo crees que se sintió Luis cuando te burlaste?'",
                    "El diálogo es el puente mágico que repara amistades rotas."
                ],
                truco: "El rincón de la paz: Tengan un cojín o lugar en casa donde uno pueda ir a sentarse cuando está muy enojado. La regla es: nadie te molesta cuando estás en el rincón de la paz, hasta que estés listo para hablar.",
                error_comun: "Intervenir inmediatamente en las peleas de hermanos/amigos resolviéndolas por ellos. Dales 1 minuto para ver si pueden negociar solos (siempre que no haya golpes).",
                actividad_casa: "El Termómetro del Enojo: Dibujen un termómetro gigante en cartulina (Verde=tranquilo, Amarillo=molesto, Rojo=furioso). Pídele que señale dónde está su emoción cuando pase un incidente, antes de hablar."
            },
            guiaMaestro: {
                objetivo: "El alumno distingue el conflicto de la violencia y aplica el diálogo y la empatía para establecer acuerdos pacíficos.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["resolucion de conflictos primaria", "empatia niños", "cultura de paz"]
        },
        {
            bloque: 3,
            nombre: "Igualdad y no discriminación",
            meses: "Diciembre – Enero",
            enClase: [
                "Valorar la diversidad (física, cultural, creencias)",
                "Estereotipos de género (romper con colores/juegos de 'niña o niño')",
                "Consecuencias de la discriminación y el bullying",
                "Trato justo e inclusivo en el aula",
                "Grupos vulnerables"
            ],
            guiaPapa: {
                intro: "A esta edad los niños notan las diferencias rápidamente. El reto es enseñarles que 'diferente' no significa 'raro' ni 'inferior', sino enriquecedor.",
                comoExplicar: [
                    "La diversidad es como una caja de crayolas: si todas fueran azules, el dibujo sería muy aburrido.",
                    "Los juguetes y los colores no tienen género: los niños pueden jugar a la cocinita y las niñas con carritos de construcción.",
                    "El acoso (bullying) duele igual que un golpe, pero por dentro. Las palabras dejan moretones invisibles.",
                    "Si vemos que alguien molesta a un niño nuevo, ser 'espectador silencioso' nos hace cómplices. Hay que avisar."
                ],
                truco: "La regla de la curita: Pega una curita (band-aid) en una hoja blanca. Luego arráncala. Queda la marca del pegamento. Diles que los insultos son así: aunque pidas perdón (quites la curita), la marca se queda.",
                error_comun: "Reírse de 'chistes' en la televisión que discriminan por peso, color de piel o género. Los niños copian el humor de los padres. Corrígelos al vuelo: 'Ese chiste no es gracioso, lastima'.",
                actividad_casa: "Entrevista de Diferencias: Que el niño entreviste a 3 miembros de la familia preguntando: '¿Cuál es tu comida, color y música favorita?'. Al final, reflexionen cómo siendo de la misma familia, todos son diferentes y se quieren igual."
            },
            guiaMaestro: {
                objetivo: "El alumno cuestiona estereotipos, rechaza actitudes discriminatorias y fomenta un ambiente de equidad e inclusión.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["igualdad de genero niños", "no discriminacion 3 primaria", "diversidad cultural escolar"]
        },
        {
            bloque: 4,
            nombre: "Cuidado del medio ambiente",
            meses: "Febrero – Marzo",
            enClase: [
                "Problemas ambientales de mi localidad",
                "Las 3 R (Reducir, Reutilizar, Reciclar)",
                "El ciclo y cuidado del agua",
                "Consumo responsable y ahorro de energía",
                "La participación ciudadana para salvar el planeta"
            ],
            guiaPapa: {
                intro: "Los niños de hoy son la generación que salvará el planeta. Tienen una conciencia ecológica natural que solo necesita ser dirigida a acciones prácticas.",
                comoExplicar: [
                    "Reducir es lo más importante: no comprar cosas con plástico que solo usamos 5 minutos (como los popotes/pajillas).",
                    "El agua no es infinita. Viene de un ciclo largo y limpiarla cuesta muchísima energía.",
                    "Apagar la luz al salir de un cuarto es como darle un respiro a la Tierra.",
                    "Reciclar es darle una 'segunda vida' o reencarnación a la basura."
                ],
                truco: "El reto del 'Mounstro de la Basura': Pesan la bolsa de basura de la casa el lunes. Se ponen la meta de reciclar y usar menos empaques, y la pesan el domingo. ¡Si pesa menos, hay premio familiar!",
                error_comun: "Hablar del cambio climático como el fin del mundo y generarles 'eco-ansiedad'. Enfócate en las SOLUCIONES y en lo que ellos pueden hacer desde casa, no en el terrorismo ambiental.",
                actividad_casa: "Guardianes de la Luz y el Agua: Nómbralo oficialmente el 'Guardián Ecológico' de la casa. Si ve una luz prendida sin gente, una llave goteando o a alguien lavando el coche con manguera, tiene derecho a sacar una 'tarjeta roja' (hacerla con cartulina)."
            },
            guiaMaestro: {
                objetivo: "El alumno asume responsabilidades ambientales cotidianas mediante la aplicación de las 3 R y el consumo responsable de recursos.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["cuidado del medio ambiente primaria", "las 3 r", "consumo responsable niños"]
        },
        {
            bloque: 5,
            nombre: "Las normas y la democracia",
            meses: "Abril – Junio",
            enClase: [
                "Para qué sirven las reglas en la casa, escuela y calle",
                "Cómo se construyen los acuerdos democráticos",
                "La votación como herramienta para decidir en grupo",
                "Consecuencias de no cumplir las leyes",
                "Participación activa de la niñez en la comunidad"
            ],
            guiaPapa: {
                intro: "Las reglas suelen verse como el enemigo de la diversión. Aquí entenderán que las reglas son, de hecho, lo que permite que podamos jugar sin lastimarnos.",
                comoExplicar: [
                    "Imagina un partido de futbol sin reglas ni árbitro. ¡Sería un desastre de patadas! Las leyes son las reglas del partido de la vida.",
                    "La democracia es que todos tienen voz. Cuando votamos a qué jugar, estamos haciendo democracia.",
                    "Si pasamos un semáforo en rojo (ley), podemos chocar (consecuencia). Toda regla tiene un porqué que nos protege.",
                    "Las reglas de la casa no las inventó el papá para molestar, son para cuidar a la familia."
                ],
                truco: "Deja que experimenten la falta de reglas por un ratito. Propón un juego de mesa (como serpientes y escaleras) y diles: 'Vamos a jugar sin reglas, cada quien mueve lo que quiera'. En 2 minutos se van a hartar y te van a pedir que pongan reglas.",
                error_comun: "Imponer reglas en casa diciendo 'porque lo digo yo'. Siempre explica la razón de seguridad o respeto detrás de la regla. 'No corres con tijeras porque te puedes picar un ojo', no 'porque yo mando'.",
                actividad_casa: "La Asamblea Familiar: Una tarde de domingo hagan una 'votación oficial' para decidir la cena (ej. Tacos vs Pizza). Escriban votos en papelitos, usen una caja como urna y cuéntenlos. Que entiendan que en la democracia a veces uno gana y a veces acepta lo que la mayoría decidió."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende la función de las normas y leyes en la vida social y participa en la toma de decisiones democráticas.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["democracia para niños", "normas de convivencia", "formacion civica 3 primaria"]
        }
    ]
};

const EDUCACION_FISICA_P3: MateriaContenido = {
    materia: "educacion_fisica",
    nombre: "Educación Física",
    emoji: "🏃",
    color: "#F97316",
    bloques: [
        {
            bloque: 1,
            nombre: "Esquema corporal e imagen motriz",
            meses: "Agosto – Septiembre",
            enClase: [
                "Reconocimiento de extremidades e interior corporal",
                "Posibilidades de movimiento (estirar, encoger, rotar)",
                "Juegos de espejos y sincronización",
                "Lateralidad avanzada (derecha e izquierda en movimiento cruzado)",
                "Frecuencia cardíaca (el corazón al correr y al descansar)"
            ],
            guiaPapa: {
                intro: "Educación física ya no es solo 'salir a correr al patio'. Es entender cómo funciona la maquinaria humana por dentro mientras se mueve.",
                comoExplicar: [
                    "Pon su mano en su corazón estando sentados, y luego después de correr 1 minuto. Enséñale que el corazón es un motor que bombea más sangre cuando el cuerpo pide energía.",
                    "Jueguen a tocar oreja derecha con rodilla izquierda (cruzados). Es vital para el cerebro.",
                    "El cuerpo no se rompe si se estira, es como una liga. Pero hay que calentar primero.",
                    "Aplaude sus logros de esfuerzo, no de triunfo. 'Me encantó cómo no te rendiste', en vez de 'qué bueno que ganaste'."
                ],
                truco: "El baile del Robot Descompuesto: Diles que la pierna derecha de repente ya no funciona y deben desplazarse por la sala solo con la izquierda. Luego el brazo. Ayuda a aislar mentalmente cada parte del cuerpo.",
                error_comun: "Permitir que el niño se rinda al instante si un ejercicio le parece difícil. Fomenta la 'mentalidad de crecimiento': No puedes hacerlo... *todavía*. Intenta de nuevo.",
                actividad_casa: "El Circuito de Obstáculos Ninja: Usen cojines, sillas y mesas. Tiene que cruzar la sala pasando por debajo de la mesa (encoger), saltar un cojín (esfuerzo), y caminar en línea recta por una cinta en el suelo (equilibrio)."
            },
            guiaMaestro: {
                objetivo: "El alumno explora sus posibilidades motrices, identifica su ritmo cardíaco y mejora el reconocimiento de su esquema corporal.",
                competencia: "De lo Humano y lo Comunitario — SEP Plan 2022 Fase 4"
            },
            keywords: ["educacion fisica primaria", "esquema corporal", "motricidad gruesa 3 primaria"]
        },
        {
            bloque: 2,
            nombre: "Deportes en equipo y reglas",
            meses: "Octubre – Noviembre",
            enClase: [
                "Iniciación al pase y recepción (básquetbol, fútbol)",
                "Entender la función de la regla y el árbitro",
                "Cooperación para lograr un objetivo común",
                "Tolerancia a la frustración al perder",
                "Higiene después del esfuerzo físico"
            ],
            guiaPapa: {
                intro: "El juego en equipo es la mejor escuela para la vida adulta. Aquí aprenden que a veces hay que pasar la pelota para que el equipo gane.",
                comoExplicar: [
                    "Si tú juegas solo, vas rápido. Si juegas en equipo, llegan más lejos.",
                    "Las reglas protegen el juego. Si alguien agarra el balón con la mano en el fútbol, el juego se arruina.",
                    "El árbitro no es perfecto, se equivoca como nosotros. Pero hay que respetar su decisión o el juego se acaba.",
                    "Sudar significa que el cuerpo trabajó bien, pero hay que lavarse las manos y bañarse después de jugar."
                ],
                truco: "La regla de oro del perdedor elegante: Quien pierde debe ir a darle la mano al ganador y decirle 'bien jugado'. Quien gana, no puede burlarse. Haz de esto una regla inquebrantable en casa.",
                error_comun: "Papás gritando desde las gradas en los partidos infantiles. El niño copia tu estrés. Si tú insultas al árbitro o al otro equipo, él asimilará que el deporte es violencia, no juego.",
                actividad_casa: "El Globo Volador en Familia: Tiren un globo al aire en la sala. El objetivo es que el globo no toque el suelo, pero no se vale que la misma persona lo toque dos veces seguidas. ¡Forza el trabajo en equipo!"
            },
            guiaMaestro: {
                objetivo: "El alumno participa activamente en juegos de iniciación deportiva, respeta reglas y fomenta la cooperación de equipo.",
                competencia: "De lo Humano y lo Comunitario — SEP Plan 2022 Fase 4"
            },
            keywords: ["deportes en equipo primaria", "cooperacion", "tolerancia a la frustracion"]
        },
        {
            bloque: 3,
            nombre: "Expresión corporal y danza",
            meses: "Diciembre – Enero",
            enClase: [
                "Comunicar emociones solo con el cuerpo",
                "Ritmo musical y sincronización de pasos",
                "Coreografías sencillas en grupo",
                "Baile folclórico básico",
                "Mimo y representación teatral sin voz"
            ],
            guiaPapa: {
                intro: "La educación física no es solo lanzar balones. La danza y el ritmo conectan el cerebro con los músculos de una forma única.",
                comoExplicar: [
                    "El cuerpo habla. Si caminas con los hombros caídos y arrastrando los pies, el cuerpo dice 'estoy triste o cansado'.",
                    "El ritmo es la matemática de la música. Un-dos-tres-cuatro.",
                    "Bailar frente a otros da pena al principio, pero si te ríes de ti mismo, se vuelve súper divertido.",
                    "Cero juicios de género: Tanto los niños como las niñas necesitan el ritmo y la danza para desarrollar su cerebro."
                ],
                truco: "Bailar con escobas: Pídele que agarre la escoba e intente marchar llevando exactamente el mismo ritmo de la canción de fondo (rápida o lenta). Moverse sincronizado mejora la atención escolar.",
                error_comun: "Burlarse de un niño cuando intenta bailar porque es arrítmico. Eso mata su confianza de por vida. Celebra el esfuerzo y la valentía de intentarlo.",
                actividad_casa: "El Museo de Cera y Mimos: Escuchen música variada. Cuando pongas pausa, él tiene que hacer una estatua corporal que represente la emoción de esa música (feliz, asustado, furioso) y quedarse congelado 5 segundos."
            },
            guiaMaestro: {
                objetivo: "El alumno emplea la expresión corporal y el ritmo para comunicar ideas y emociones en sincronía con la música.",
                competencia: "De lo Humano y lo Comunitario — SEP Plan 2022 Fase 4"
            },
            keywords: ["expresion corporal primaria", "ritmo y danza", "mimo para niños"]
        },
        {
            bloque: 4,
            nombre: "Juegos tradicionales y del mundo",
            meses: "Febrero – Marzo",
            enClase: [
                "Juegos de patio mexicanos (avión, cuerda, trompo)",
                "Juegos cooperativos de otras culturas",
                "Elaboración de reglas propias para juegos nuevos",
                "El rescate de los espacios de juego",
                "Habilidades motrices finas y puntería"
            ],
            guiaPapa: {
                intro: "¡Un viaje en el tiempo! Tu hijo aprenderá a jugar a lo que tú y sus abuelos jugaban. Es cultura, historia y actividad física a la vez.",
                comoExplicar: [
                    "Antes no había tablets, la diversión estaba en la calle y la creatividad de pintar rayas con un gis/tiza.",
                    "El salto de cuerda es uno de los mejores ejercicios del mundo para el corazón.",
                    "El balero, las canicas y el trompo desarrollan una motricidad fina que ayuda a tener letra bonita en la escuela.",
                    "Los juegos se heredan, como las recetas de cocina."
                ],
                truco: "Dibuja un avión (rayuela) en la banqueta o patio. Al saltar en un solo pie, enséñale a usar los brazos como 'alerones de avión' para no perder el equilibrio.",
                error_comun: "Creer que los niños de hoy ya no disfrutan estos juegos. ¡Al contrario! Les fascina salir de las pantallas si tú, como padre, te tiras al piso a enseñarles cómo tirar una canica.",
                actividad_casa: "Torneo de Trompo o Cuerda Familiar: Compra un trompo de madera o una cuerda de saltar barata. Enséñale cómo se amarra y se lanza. Compitan a ver quién dura más tiempo girando o saltando."
            },
            guiaMaestro: {
                objetivo: "El alumno valora la riqueza cultural mediante juegos tradicionales y mejora su coordinación motriz mediante el juego de patio.",
                competencia: "De lo Humano y lo Comunitario — SEP Plan 2022 Fase 4"
            },
            keywords: ["juegos tradicionales", "juego de cuerda y trompo", "patio escolar 3 primaria"]
        },
        {
            bloque: 5,
            nombre: "Salud, prevención y primeros auxilios básicos",
            meses: "Abril – Junio",
            enClase: [
                "Qué hacer en caso de una raspadura o golpe leve",
                "Los números de emergencia (911)",
                "Riesgos en el hogar y en la escuela",
                "Posturas correctas (mochila, sentarse)",
                "El sueño como recuperación del cuerpo"
            ],
            guiaPapa: {
                intro: "Un niño empoderado es un niño seguro. Saber qué hacer (y qué NO hacer) ante un accidente los hace más resilientes y tranquilos.",
                comoExplicar: [
                    "Si te raspas, el agua y el jabón son los mejores amigos. Arde un segundo, pero mata los bichitos.",
                    "El número 9-1-1 no es de juego. Se usa cuando la vida de alguien está en peligro real.",
                    "Dormir 9 a 10 horas es obligatorio. Durante el sueño, los músculos se reparan y el cerebro archiva lo que aprendió hoy.",
                    "Correr con algo en la boca (paletas, lápices) está totalmente prohibido."
                ],
                truco: "Enséñale que la mochila nunca debe pesar más que el equivalente a dos botellas grandes de refresco. Y siempre se debe colgar de LOS DOS hombros, nunca de uno solo para no torcer la espalda.",
                error_comun: "Asustarse exageradamente como padres ante un golpe o caída. Si el niño cae y tú gritas aterrorizado, él llorará por el susto, no por el dolor. Mantén la calma, revisa, y si no es grave dile: 'Límpiate el polvo, tú eres fuerte'.",
                actividad_casa: "El Inspector de Riesgos: Dale una libreta y que haga un 'rondín' por toda la casa buscando cosas peligrosas (ej. cuchillos en la orilla, cables pelados, tapetes resbalosos). Que apunte todo y te entregue el 'reporte de seguridad'."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica situaciones de riesgo, practica acciones de autocuidado, primeros auxilios básicos y reconoce la importancia del sueño.",
                competencia: "De lo Humano y lo Comunitario — SEP Plan 2022 Fase 4"
            },
            keywords: ["seguridad para niños", "prevencion de accidentes escolares", "primeros auxilios primaria"]
        }
    ]
};

const ARTES_P3: MateriaContenido = {
    materia: "artes",
    nombre: "Educación Artística",
    emoji: "🎨",
    color: "#EC4899",
    bloques: [
        {
            bloque: 1,
            nombre: "El mundo a través del color y la forma",
            meses: "Agosto – Septiembre",
            enClase: [
                "Colores primarios, secundarios y terciarios",
                "Mezcla de pigmentos",
                "El punto, la línea y el contorno en el dibujo",
                "Paisajes de mi comunidad con técnica libre",
                "Apreciación visual de obras de arte"
            ],
            guiaPapa: {
                intro: "El arte no se trata de hacer dibujos 'bonitos' o perfectos, se trata de traducir lo que sienten por dentro a colores y formas por fuera.",
                comoExplicar: [
                    "Los 3 reyes del color son Amarillo, Azul y Rojo (primarios). Ellos no se pueden crear mezclando nada, pero si los mezclas a ellos, creas todo el universo.",
                    "Amarillo + Azul = Verde. Rojo + Amarillo = Naranja. Es magia que pueden hacer con sus propias manos.",
                    "Un dibujo no tiene que parecer una foto para ser una obra maestra (habla de Picasso).",
                    "Apreciar el arte es decir: '¿Qué me hace sentir este cuadro?' en vez de '¿Qué es esto?'"
                ],
                truco: "La regla de la mancha: Si se equivoca o se mancha la hoja de pintura, diles: 'En el arte no hay errores, hay accidentes felices'. Enséñales a transformar esa mancha en un pájaro, una nube o un monstruo.",
                error_comun: "Criticar el dibujo o corregirlo severamente (ej. 'Los árboles no son morados'). ¡En su imaginación sí pueden serlo! Restringir el color mata su creatividad instintiva.",
                actividad_casa: "El Laboratorio de Pociones de Color: Dale 3 vasitos con agua (rojo, amarillo, azul usando colorante vegetal o acuarelas líquidas). Dale una jeringa sin aguja o gotero, y que mezcle gotas en una charola de hielos para descubrir la magia matemática del color."
            },
            guiaMaestro: {
                objetivo: "El alumno explora la teoría del color, experimenta mezclas de pigmentos y expresa emociones mediante el dibujo y la pintura.",
                competencia: "Lenguajes (Artes) — SEP Plan 2022 Fase 4"
            },
            keywords: ["colores primarios y secundarios", "educacion artistica 3 primaria", "teoria del color niños"]
        },
        {
            bloque: 2,
            nombre: "La música que nos rodea",
            meses: "Octubre – Noviembre",
            enClase: [
                "Cualidades del sonido (timbre, tono, duración, intensidad)",
                "Reconocimiento de instrumentos musicales",
                "El ritmo: acento y pulso",
                "Cantos tradicionales y coros",
                "Construcción de instrumentos con material reciclado"
            ],
            guiaPapa: {
                intro: "Descubrir que todo, hasta un lápiz golpeando la mesa, puede ser un instrumento si lo haces con ritmo.",
                comoExplicar: [
                    "Tono: Sonidos de ratoncito (agudos) vs sonidos de oso gigante (graves).",
                    "Intensidad: Sonidos de secreto (suaves) vs sonidos de explosión (fuertes).",
                    "El pulso de la música es como el latido de tu corazón. El acento es el latido que suena más fuerte.",
                    "Cantar ayuda a hablar mejor y a perder el miedo frente a la gente."
                ],
                truco: "El 'Vaso-Tambor': Tapa un vaso de plástico con un globo cortado y estirado fuertemente. Ponle una liga alrededor y tendrás un tambor africano (bongó) casero con un sonido espectacular.",
                error_comun: "Obligarlos a cantar o tocar algo frente a visitas si son tímidos. La música debe ser disfrute, no un examen de talento que genera ansiedad.",
                actividad_casa: "La Orquesta de la Cocina: Dale dos cucharas de madera (baquetas). Saca ollas de metal, tuppers de plástico y cajas de cartón vacías. Que toque cada uno para que note el 'Timbre' (el tipo de material que suena). Luego formen una banda de rock de 5 minutos."
            },
            guiaMaestro: {
                objetivo: "El alumno distingue las cualidades del sonido, sigue pulsos rítmicos y construye cotidiáfonos (instrumentos reciclados).",
                competencia: "Lenguajes (Artes) — SEP Plan 2022 Fase 4"
            },
            keywords: ["cualidades del sonido primaria", "instrumentos reciclados niños", "educacion musical"]
        },
        {
            bloque: 3,
            nombre: "Teatro, títeres y actuación",
            meses: "Diciembre – Enero",
            enClase: [
                "Juegos de roles y caracterización teatral",
                "Elaboración de títeres de calcetín, papel o varilla",
                "Uso de la voz: volumen y dicción teatral",
                "La escenografía y el vestuario con reciclaje",
                "Montaje de una pequeña obra escolar"
            ],
            guiaPapa: {
                intro: "El teatro es el arte más completo. Ayuda a los niños a salir de su timidez, mejorar su lectura y trabajar en empatía absoluta al 'ser otra persona'.",
                comoExplicar: [
                    "Actuar no es memorizar, es PRETENDER que de verdad eres el rey, o el león, o la abuelita.",
                    "Los títeres son mágicos: te escondes detrás de la mesa y dejas que tu mano sea el personaje sin sentir vergüenza.",
                    "Hablar en el teatro requiere 'proyectar' la voz: que te escuche el de la última fila, pero sin gritar como enojado.",
                    "El vestuario puede ser una toalla como capa. La imaginación hace el 90% del trabajo."
                ],
                truco: "La voz del Títere Miedoso: Si a tu hijo le da pena leer en voz alta, dile que el calcetín-títere va a leer la historia, y que le ponga 'voz aguda de calcetín'. Sorprendentemente, al quitarse ellos de la ecuación y dársela al calcetín, leen con una fluidez espectacular.",
                error_comun: "Hacerles tú el títere para que quede 'perfecto'. Un títere de calcetín hecho por ellos con dos botones pegados chuecos tiene mucho más valor pedagógico y lo sentirán como suyo.",
                actividad_casa: "El Teatrillo de Sombras: En un cuarto a oscuras, prende una lámpara apuntando a una pared blanca. Con sus manos hagan figuras (el perro, la paloma) y desarrollen un diálogo de 3 minutos. Pura improvisación."
            },
            guiaMaestro: {
                objetivo: "El alumno explora la actuación, diseña títeres y participa en la recreación de diálogos e historias de forma dramática.",
                competencia: "Lenguajes (Artes) — SEP Plan 2022 Fase 4"
            },
            keywords: ["teatro infantil 3 primaria", "titeres de calcetin", "actuacion para niños"]
        },
        {
            bloque: 4,
            nombre: "Escultura y volumen espacial",
            meses: "Febrero – Marzo",
            enClase: [
                "Diferencia entre dibujo plano (2D) y escultura (3D)",
                "Modelado con plastilina, arcilla o masa",
                "Construcción de ensamblajes espaciales con cajas",
                "La textura en la escultura (liso, rugoso, suave)",
                "Exposición de obra tridimensional"
            ],
            guiaPapa: {
                intro: "Llegó el turno de mancharse las manos. Al construir en tres dimensiones (3D), los niños desarrollan su visión espacial y geometría natural.",
                comoExplicar: [
                    "2D es plano, como un dibujo en un papel. 3D es gordo, como un juguete que puedes rodear y agarrar.",
                    "La escultura es el arte de quitar lo que sobra (tallar) o agregar lo que falta (modelar plastilina).",
                    "Ensamblar es usar basura limpia (cajas de cereal, rollos de papel) y pegamento para hacer castillos o robots.",
                    "Siente las cosas con los ojos cerrados: esa es la 'textura'."
                ],
                truco: "La masa mágica de sal: Si no hay arcilla, mezcla 2 tazas de harina, 1 taza de sal fina y 1 taza de agua. Se hace una masa espectacular para modelar figuras. Cuando terminen, métanlo al horno a temperatura baja por 2 horas y quedará duro como piedra, listo para pintar.",
                error_comun: "Gritar '¡no ensucies!' constantemente. El modelado ES desastroso por naturaleza. Pon periódico viejo en la mesa y déjalos ser libres. La creatividad necesita un poco de caos.",
                actividad_casa: "El Monstruo Frankenstein del Reciclaje: Junten 5 envases distintos (leche, huevo, tubos, botellas). Con cinta adhesiva y creatividad, que arme una escultura de un monstruo, un auto futurista o un castillo, y luego lo pinte."
            },
            guiaMaestro: {
                objetivo: "El alumno desarrolla la percepción tridimensional (3D) mediante el modelado y el ensamblaje, explorando texturas y volúmenes.",
                competencia: "Lenguajes (Artes) — SEP Plan 2022 Fase 4"
            },
            keywords: ["escultura primaria", "modelado plastilina niños", "manualidades reciclaje arte"]
        },
        {
            bloque: 5,
            nombre: "Arte mexicano y patrimonio vivo",
            meses: "Abril – Junio",
            enClase: [
                "Artesanías representativas de México (alebrijes, talavera)",
                "La obra de muralistas importantes (Diego Rivera, Siqueiros)",
                "Danzas folclóricas de nuestro país",
                "La arquitectura prehispánica y colonial",
                "Proyecto artístico final (El Gran Mural de Aula)"
            ],
            guiaPapa: {
                intro: "Cerramos el ciclo abrazando nuestro país. México es una potencia mundial en arte y color, y ellos son los herederos.",
                comoExplicar: [
                    "Los alebrijes son monstruos de los sueños de colores brillantes que mezclan pedazos de varios animales.",
                    "Los murales de Diego Rivera eran como cómics gigantes en las paredes, hechos para enseñar historia a la gente que no sabía leer.",
                    "Cada estado tiene su propia danza con zapatos especiales que suenan fuerte contra la madera (zapateado).",
                    "Nuestras pirámides fueron esculturas gigantes hechas de piedra una por una."
                ],
                truco: "Crea un 'Alebrije Rápido': Diles que tiren un dado 3 veces. El primer tiro es la cabeza (1=León, 2=Águila, etc.). El segundo es el cuerpo (1=Serpiente, 2=Toro, etc.). El tercero la cola. ¡Dibújenlo! Ese es su alebrije personal.",
                error_comun: "Mirar el arte en libros sin experimentarlo. La cultura entra por las manos y los pies, no solo por los ojos.",
                actividad_casa: "El Mural de la Pared (Permitida): Pega un rollo inmenso de papel bond cubriendo toda una pared de su cuarto o sala (asegura bien con cinta azul para pintores). Pídele que durante esa semana dibuje ahí el gran 'Mural de nuestra Familia', con plumones y crayolas contando su propia historia estilo Diego Rivera."
            },
            guiaMaestro: {
                objetivo: "El alumno valora la riqueza de las manifestaciones artísticas y artesanales de México, consolidando su identidad cultural y creativa.",
                competencia: "Lenguajes (Artes) — SEP Plan 2022 Fase 4"
            },
            keywords: ["arte mexicano primaria", "alebrijes niños", "muralismo educacion basica"]
        }
    ]
};

export const PRIMARIA_3: GradoContenido = {
    grado: "primaria-3",
    nombre: "3° Primaria",
    emoji: "⭐",
    materias: {
        matematicas: MATEMATICAS_P3,
        espanol: ESPANOL_P3,
        ciencias: CIENCIAS_P3,
        historia: HISTORIA_P3,
        formacion: FORMACION_P3,
        educacion_fisica: EDUCACION_FISICA_P3,
        artes: ARTES_P3,
        lenguas: LENGUAS_P3
    }
};

