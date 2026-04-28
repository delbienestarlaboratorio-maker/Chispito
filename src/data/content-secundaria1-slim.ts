// Base de datos de contenido "masticado" para papás y maestros
// Secundaria 1° — Ciclo escolar 2025-2026 SEP México (Fase 6 - Inicio)

import type { GradoContenido, MateriaContenido } from './content-types';
import { PRIMARIA_3 } from './content-primaria3-slim';

// Reusamos algunas estructuras transversales como base, pero la exigencia cambia.
const EDUCACION_FISICA_S1 = PRIMARIA_3.materias["educacion_fisica"] as MateriaContenido;
const ARTES_S1 = PRIMARIA_3.materias["artes"] as MateriaContenido;

const MATEMATICAS_S1: MateriaContenido = {
    materia: "matematicas",
    nombre: "Matemáticas I",
    emoji: "📐",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Números enteros, fracciones y decimales",
            meses: "Agosto – Septiembre",
            enClase: [
                "Conversión de fracciones a decimales y viceversa",
                "Ubicación de números racionales en la recta numérica",
                "Resolución de problemas de suma y resta con decimales avanzados",
                "Jerarquía de operaciones (PEMDAS sin exponentes aún)",
                "Proporcionalidad directa (Regla de 3)"
            ],
            guiaPapa: {
                intro: "¡Bienvenidos a la secundaria! Aquí las matemáticas dejan de ser solo cuentas del supermercado y se vuelven lógica pura. El mayor enemigo inicial: la Jerarquía de Operaciones.",
                comoExplicar: [
                    "Jerarquía significa 'quién manda primero'. Si ves 5 + 3 x 2, el instinto dice sumar 5+3=8 y multiplicar por 2=16. ¡ERROR! La multiplicación es de rango superior. Primero es 3x2=6, y luego 5+6=11.",
                    "La Regla de 3 es la navaja suiza matemática. Si 2 kilos de tortilla cuestan $40, ¿cuánto cuestan 5 kilos? (Multiplicas cruzado: 5 x 40 = 200. Divides entre el que sobra: 200 / 2 = 100)."
                ],
                truco: "Para memorizar la jerarquía enséñale la palabra PEMDAS: Paréntesis, Exponentes, Multiplicación, División, Adición (suma), Sustracción (resta).",
                error_comun: "Acomodar mal el punto decimal al sumar o restar. Recuérdale la regla de oro: 'Los botones de la camisa siempre deben ir alineados'. El punto decimal de todos los números debe quedar en una sola columna vertical.",
                actividad_casa: "El Reto de la Calculadora Rota: Ponle un problema combinado (ej. 10 + 2 x 4). Dile que si lo escribe así tal cual en una calculadora barata le dará 48, pero si lo hace en una calculadora científica le dará 18. ¡Pídele que te explique por qué la científica tiene razón!"
            },
            guiaMaestro: {
                objetivo: "El alumno resuelve problemas de suma, resta, multiplicación y división con números enteros, fracciones y decimales positivos y negativos.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["jerarquia de operaciones", "regla de 3 matematicas 1", "fracciones a decimales secundaria"]
        },
        {
            bloque: 2,
            nombre: "Introducción al Álgebra (Literales)",
            meses: "Octubre – Noviembre",
            enClase: [
                "El uso de letras para representar números (Variables)",
                "Expresiones algebraicas básicas (2x, x+y)",
                "Traducción de lenguaje común a lenguaje algebraico",
                "Resolución de ecuaciones de primer grado (x + 5 = 12)",
                "Sucesiones numéricas con fórmula algebraica"
            ],
            guiaPapa: {
                intro: "Llegó el momento temido: ¡Le metieron letras a las matemáticas! Tranquilos, el álgebra no es un monstruo, es solo escribir en 'código secreto'.",
                comoExplicar: [
                    "Una letra (como la X o la A) es simplemente una 'caja vacía'. No sabemos qué número está adentro todavía.",
                    "Traducir: 'Un número cualquiera' = X. 'El doble de un número' = 2X. 'La mitad de un número' = X/2.",
                    "Para resolver una ecuación (X + 5 = 12), hay que dejar a la X solita. Si el 5 está sumando, cruza el puente (el signo de igual) haciendo lo contrario: restando. X = 12 - 5. ¡X vale 7!"
                ],
                truco: "El truco de la Balanza: Una ecuación es un sube-y-baja perfectamente equilibrado (=). Si le quitas un peso de 5 kilos al lado izquierdo, tienes que quitarle 5 kilos al lado derecho, de lo contrario la balanza se cae.",
                error_comun: "Creer que '2X' significa '2 + X'. Explícale que en álgebra, cuando un número y una letra están pegaditos abrazados, significa MULTIPLICACIÓN.",
                actividad_casa: "Traductores Secretos: Jueguen a hablar en álgebra. Tú dices 'Piensa en un número, súmale tres y dame el resultado'. Él tiene que escribir en una hoja: X + 3 = ?. Luego cambien de roles."
            },
            guiaMaestro: {
                objetivo: "El alumno modela y resuelve situaciones mediante ecuaciones lineales de la forma ax + b = c y entiende el concepto de variable.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["introduccion al algebra 1 secundaria", "lenguaje algebraico", "ecuaciones de primer grado"]
        },
        {
            bloque: 3,
            nombre: "Geometría: Ángulos y áreas complejas",
            meses: "Diciembre – Enero",
            enClase: [
                "Clasificación de ángulos (agudos, rectos, obtusos, llanos)",
                "Rectas paralelas cortadas por una transversal",
                "Suma de los ángulos internos de un triángulo (180°)",
                "Cálculo de áreas de polígonos regulares (apotema)",
                "El círculo (área y perímetro con π)"
            ],
            guiaPapa: {
                intro: "Dejamos los números abstractos y pasamos al dibujo técnico. Aquí aprenderán a medir el mundo real y a construir figuras perfectas.",
                comoExplicar: [
                    "Un ángulo Recto (90°) es la esquina perfecta de una hoja de papel. Un Agudo es cerrado como el pico de un pájaro. Un Obtuso es abierto como un sillón reclinable.",
                    "La magia del triángulo: No importa si el triángulo es gordo, flaco o chueco, si sumas sus 3 esquinas de adentro, SIEMPRE dará 180°.",
                    "El Apotema de un polígono (ej. pentágono) es como el radio de un círculo, pero va desde el centro hasta la mitad de una de las paredes."
                ],
                truco: "Para aprenderse el área de figuras complejas (Perímetro x Apotema / 2), diles que un pentágono es solo 5 triángulos pegados por el centro. Si sacas el área de un triángulo y la multiplicas por 5, ¡es lo mismo!",
                error_comun: "Al usar el transportador, leer el número equivocado (los transportadores tienen números de izquierda a derecha y viceversa). Enséñales que si la abertura es más chiquita que una esquina de papel (90°), el resultado JAMÁS puede ser 120°.",
                actividad_casa: "Recorte a 180: Pídele que dibuje cualquier triángulo gigante en una hoja y lo recorte. Luego que le arranque las 3 esquinas con la mano. Pon las 3 esquinas juntas tocándose por la punta en la mesa, ¡formarán una línea perfectamente recta (un ángulo llano de 180°)!."
            },
            guiaMaestro: {
                objetivo: "El alumno deduce y usa las relaciones entre los ángulos de polígonos en la construcción de polígonos regulares y en el cálculo de sus áreas.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["angulos internos de un triangulo", "area de poligonos regulares", "apotema secundaria"]
        },
        {
            bloque: 4,
            nombre: "Proporcionalidad inversa y gráficas",
            meses: "Febrero – Marzo",
            enClase: [
                "Diferencia entre proporcionalidad directa e inversa",
                "Constante de proporcionalidad (K)",
                "Gráficas de líneas y barras cruzadas",
                "Porcentajes avanzados (interés simple)",
                "Lectura crítica de datos engañosos"
            ],
            guiaPapa: {
                intro: "Aquí los niños descubren que no todo en la vida es 'entre más, más'. A veces, 'entre más, menos'.",
                comoExplicar: [
                    "Directa: Si compro MÁS dulces, pago MÁS dinero. (Las dos flechas suben).",
                    "Inversa: Si contrato MÁS albañiles, se tardan MENOS días en construir la casa. (Una flecha sube, la otra baja).",
                    "Interés simple es el 'castigo' por pedir prestado o el 'premio' por ahorrar. Si guardas $100 en el banco al 10% de interés, en un año te regalan $10 extra."
                ],
                truco: "Para la Regla de 3 Inversa (ej. 2 pintores tardan 6 días, ¿cuánto tardan 3 pintores?). Ya NO se multiplica cruzado. Se multiplica DIRECTO (el de arriba con el de arriba: 2 x 6 = 12) y se divide entre el de abajo (12 / 3 = 4 días).",
                error_comun: "Intentar resolver problemas de albañiles o velocidad (Inversa) con una regla de 3 directa. El resultado no tendrá sentido (ej. le saldrá que 10 albañiles tardan MÁS días que 1 albañil).",
                actividad_casa: "El Viaje en Carretera: Si van en el coche, dile: 'A 60 km/h tardamos 2 horas en llegar. Si fuéramos el doble de rápido (120 km/h), ¿tardaríamos el doble (4 horas) o la mitad (1 hora)?'. ¡Es la mejor forma de entender la proporción inversa!"
            },
            guiaMaestro: {
                objetivo: "El alumno identifica y resuelve problemas de proporcionalidad directa e inversa, representándolos de forma tabular, gráfica y algebraica.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["proporcionalidad inversa", "regla de 3 inversa", "graficas matematicas 1"]
        },
        {
            bloque: 5,
            nombre: "Probabilidad y azar",
            meses: "Abril – Junio",
            enClase: [
                "Eventos seguros, imposibles y probables",
                "Cálculo de probabilidad clásica (Casos a favor / Casos totales)",
                "Diagramas de árbol para combinaciones",
                "Experimentos aleatorios (monedas, dados, ruletas)",
                "Frecuencia relativa vs Probabilidad teórica"
            ],
            guiaPapa: {
                intro: "Cerramos el año jugando a los casinos, pero con ciencia. Aprenderán que la 'suerte' en realidad son matemáticas que se pueden calcular.",
                comoExplicar: [
                    "Probabilidad = Lo que quiero que pase DIVIDIDO entre Todo lo que podría pasar.",
                    "Si tiro un dado y quiero sacar un 4. Hay un solo '4' (Casos a favor = 1). El dado tiene 6 caras (Casos totales = 6). La probabilidad es 1/6.",
                    "Un diagrama de árbol es un dibujo con ramas para saber cuántas combinaciones de ropa tienes si mezclas 3 playeras y 2 pantalones (3x2=6)."
                ],
                truco: "Diles que la probabilidad siempre es un número entre 0 y 1 (o entre 0% y 100%). Si un problema les da de resultado '1.5' o '150%', hicieron algo muy mal. ¡No puedes estar 150% seguro de algo!",
                error_comun: "Creer en la 'buena racha'. Si tiras una moneda y sale 'Cara' 5 veces seguidas, el niño creerá que la siguiente TIENE que ser 'Cruz'. Explícale que la moneda no tiene memoria; la probabilidad sigue siendo 50/50 cada tiro.",
                actividad_casa: "El Casino Familiar: Tomen dos dados. Que tu hijo apueste a que la suma de ambos dados será 12 (solo hay una combinación: 6+6), y tú apuesta a que la suma será 7 (hay muchas combinaciones: 3+4, 5+2, 6+1). Tiren 20 veces. Él entenderá rápido por qué los casinos siempre ganan."
            },
            guiaMaestro: {
                objetivo: "El alumno realiza experimentos aleatorios y calcula la probabilidad clásica de eventos simples y mutuamente excluyentes.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["probabilidad clasica", "diagrama de arbol matematicas", "azar y probabilidad 1 secundaria"]
        }
    ]
};

const ESPANOL_S1: MateriaContenido = {
    materia: "espanol",
    nombre: "Español I",
    emoji: "📚",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "El reglamento y los textos normativos",
            meses: "Agosto – Septiembre",
            enClase: [
                "Estructura de reglamentos (título, capítulos, artículos, sanciones)",
                "Modos verbales: Infinitivo (correr), Imperativo (corre), Futuro indicativo (correrá)",
                "Derechos y obligaciones en la comunidad",
                "Redacción del reglamento del salón de clases",
                "El uso de viñetas y numerales"
            ],
            guiaPapa: {
                intro: "Los adolescentes odian las reglas, así que el primer bloque trata de enseñarles a escribirlas ellos mismos. Entenderán que las leyes no son para molestar, sino para sobrevivir juntos.",
                comoExplicar: [
                    "Infinitivo: Verbos sin dueño (terminan en AR, ER, IR). 'No comer en clase'.",
                    "Imperativo: Es una orden militar directa. 'Guarda silencio'.",
                    "Futuro Indicativo: Suena a ley de país. 'El alumno que rompa algo, pagará el daño'.",
                    "Una sanción no es venganza, es la consecuencia justa de romper el pacto."
                ],
                truco: "Para que no confundan el modo imperativo (orden) con gritar. Diles que tu mamá usa el imperativo todo el tiempo: 'Recoge tu cuarto', 'Lávate los dientes'.",
                error_comun: "Mezclar modos verbales en un mismo reglamento (ej. Regla 1: 'No correr'. Regla 2: 'Guarda tus cosas'). Enseña que si eligen usar infinitivos, TODAS las reglas deben terminar en ar, er, ir.",
                actividad_casa: "El Reglamento de la Consola/Celular: Pídele que redacte un contrato oficial de 5 reglas para el uso de su celular o videojuegos en casa usando verbos en infinitivo, incluyendo un capítulo de 'Sanciones'. Si lo hace bien, fírmenlo ambas partes."
            },
            guiaMaestro: {
                objetivo: "El alumno participa en la elaboración del reglamento escolar, reconociendo sus características formales y el uso de verbos en infinitivo o imperativo.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["reglamento escolar secundaria", "verbos en infinitivo e imperativo", "textos normativos"]
        },
        {
            bloque: 2,
            nombre: "El cuento de ciencia ficción y terror",
            meses: "Octubre – Noviembre",
            enClase: [
                "Subgéneros literarios (Policíaco, Terror, Ciencia Ficción)",
                "Tipos de narrador: Omnisciente (dios), Protagonista (yo), Testigo (él lo vio)",
                "Creación de atmósferas y tensión psicológica",
                "Los adjetivos y adverbios para describir",
                "Escritura de un cuento original"
            ],
            guiaPapa: {
                intro: "A esta edad les encanta el terror y los futuros apocalípticos. Usaremos ese interés para que aprendan a narrar historias que atrapen al lector desde la primera línea.",
                comoExplicar: [
                    "El narrador Omnisciente es como un dron fantasma: ve todo desde arriba y hasta sabe qué están pensando los personajes.",
                    "Ciencia Ficción: Es un futuro que PODRÍA pasar por culpa de la tecnología (ej. robots malvados, viajes a Marte).",
                    "Fantasía: Magia que no tiene explicación científica (ej. Harry Potter, dragones).",
                    "Terror: Su objetivo es crear miedo usando la incertidumbre (lo que no se ve asusta más que lo que sí se ve)."
                ],
                truco: "El truco de la linterna: Para escribir buen terror, dile que imagine que está en un cuarto oscuro solo con una linterna pequeña. Solo puede describir lo que la luz toca. El resto debe dejarlo a la imaginación.",
                error_comun: "Hacer cuentos donde 'al final todo fue un sueño'. Prohíbeles ese recurso, es la salida fácil de los escritores perezosos. Enséñales a resolver la historia de forma lógica.",
                actividad_casa: "El Narrador del Supermercado: Mientras caminan por los pasillos, jueguen a ser el narrador omnisciente de otro cliente. 'Aquel hombre de chaqueta gris dudaba entre llevar frijoles o lentejas, pues recordaba el terrible incidente de la semana pasada...'"
            },
            guiaMaestro: {
                objetivo: "El alumno lee cuentos de diversos subgéneros, identifica los tipos de narrador y redacta un cuento manteniendo la tensión narrativa.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["cuento de ciencia ficcion", "tipos de narrador omnisciente", "subgeneros literarios secundaria"]
        },
        {
            bloque: 3,
            nombre: "La monografía y la investigación documental",
            meses: "Diciembre – Enero",
            enClase: [
                "¿Qué es una monografía? (Estudio profundo de UN solo tema)",
                "Búsqueda en fuentes confiables (Internet profundo vs Wikipedia)",
                "Fichas de trabajo: Resumen, Paráfrasis y Cita Textual",
                "Estructura: Introducción, Desarrollo y Conclusión",
                "Citar en formato APA básico para evitar el plagio"
            ],
            guiaPapa: {
                intro: "El bloque más importante para su futuro académico. Aprenderán a investigar como profesionales, a no creer en 'Fake News' y a no copiar y pegar de internet.",
                comoExplicar: [
                    "Mono = Uno, Grafía = Escrito. Es escribir TODO sobre un solo tema muy específico (ej. 'La contaminación del río de mi ciudad', no solo 'La contaminación').",
                    "Paráfrasis es el superpoder del estudiante: Es leer algo difícil de un científico, y escribirlo con tus propias palabras (las de un chico de 12 años).",
                    "Plagio es robar. Si copias y pegas sin decir de quién es, en la universidad te pueden expulsar."
                ],
                truco: "Regla de oro para buscar en Google: Si la página termina en '.edu' (universidades) o '.gob' (gobierno), es segura. Si es un blog de 'El Rincón del Vago', es basura. Wikipedia es para darse una idea, no para copiar.",
                error_comun: "Hacer resúmenes usando un marcatextos para subrayar el 90% de la página. Enséñale que resumir es encontrar la IDEA PRINCIPAL (el tronco del árbol) y dejar las ramas.",
                actividad_casa: "El Cazador de Fake News: Pídele que busque en TikTok o YouTube un dato 'científico' muy raro (ej. 'Los aliens construyeron las pirámides'). Luego siéntense en la computadora a buscar fuentes confiables (.edu) para desmentir el video y hacer una 'Paráfrasis' de la verdad."
            },
            guiaMaestro: {
                objetivo: "El alumno elige un tema, selecciona fuentes confiables, elabora fichas de trabajo (paráfrasis y citas) y redacta una monografía organizada.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["como hacer una monografia", "fichas de resumen y parafrasis", "formato APA secundaria"]
        },
        {
            bloque: 4,
            nombre: "El panel de discusión y la poesía de vanguardia",
            meses: "Febrero – Marzo",
            enClase: [
                "El panel de discusión (moderador, expositores, público)",
                "Técnicas para hablar en público y lenguaje corporal",
                "Poesía de vanguardia (caligramas, haikus, poesía visual)",
                "Figuras retóricas avanzadas (hipérbole, personificación)",
                "Análisis de poemas que rompen las reglas"
            ],
            guiaPapa: {
                intro: "Mitad debate, mitad locura artística. Aprenderán a dominar el pánico escénico para hablar frente al grupo, y luego descubrirán que los poemas pueden tener forma de dibujo.",
                comoExplicar: [
                    "Un panel no es un pleito a gritos. Es una mesa de expertos. El 'Moderador' es el árbitro que da la palabra y controla el tiempo.",
                    "Hablar en público: Si miras al suelo, nadie te creerá. Mira a las frentes de las personas, así parece que los ves a los ojos sin ponerte nervioso.",
                    "Un Caligrama es un poema visual. Si el poema habla de un gato, las letras y palabras se acomodan formando el dibujo de un gato.",
                    "Hipérbole es exagerar ('Te llamé un millón de veces'). Personificación es darle vida a cosas muertas ('El viento lloraba de frío')."
                ],
                truco: "Para hablar en público sin temblar: Que sostenga un bolígrafo o un clip pequeño en una mano detrás de su espalda. Apretar el objeto canaliza la adrenalina nerviosa y evita que le tiemble la voz o las piernas.",
                error_comun: "Leer la poesía moderna como si fueran instrucciones del microondas. Pídeles que jueguen con la voz: si el poema tiene palabras grandes, que hablen fuerte; si tiene letras chiquitas, que susurren.",
                actividad_casa: "El Caligrama Familiar: Denle forma de dibujo a un sentimiento. Si a tu hijo le gusta el fútbol, que escriba un poema corto sobre meter un gol, pero que escriba las palabras en espiral para que formen el dibujo de un balón."
            },
            guiaMaestro: {
                objetivo: "El alumno organiza un panel de discusión sobre un tema investigado y explora la poesía visual y de vanguardia para jugar con el lenguaje.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["panel de discusion secundaria", "caligramas y poesia visual", "hiperbole y personificacion"]
        },
        {
            bloque: 5,
            nombre: "La carta formal de reclamo y la reseña",
            meses: "Abril – Junio",
            enClase: [
                "Redacción de cartas formales de petición o reclamo",
                "Estructura (Membrete, asunto, vocativo, exposición, cierre)",
                "Abreviaturas comerciales (C.P., Atte., S.A. de C.V.)",
                "La reseña literaria o cinematográfica",
                "Dar tu opinión fundamentada sobre una obra artística"
            ],
            guiaPapa: {
                intro: "Último empujón. Les daremos armas para la vida adulta: cómo quejarse por escrito cuando una empresa les vende algo roto, y cómo criticar una película como verdaderos críticos de cine.",
                comoExplicar: [
                    "Una queja formal no lleva groserías. Si compraste unos zapatos rotos, la carta debe ser fría, educada y exigir una solución legal ('Solicito el reembolso íntegro...').",
                    "Vocativo es a quién le hablas ('Estimado Director:'). Membrete es tu logotipo o dirección hasta arriba.",
                    "Una reseña NO es contar el final de la película (hacer spoiler). Es decir de qué trata un poco, y luego dar tu calificación argumentando si los actores fueron buenos o si los efectos eran falsos."
                ],
                truco: "La regla de oro de la Reseña: 'Juzga lo que es, no lo que querías que fuera'. Si ves una película de comedia, critícala por si dio risa, no te quejes de que no hubo balaceras.",
                error_comun: "En la carta de reclamo, olvidar poner la FECHA o el NOMBRE EXACTO de la persona. Una queja sin fecha no tiene validez legal en el mundo real.",
                actividad_casa: "El Crítico de Netflix: El fin de semana vean una película familiar. Al terminar, dile que escriba en una libreta una reseña de 3 párrafos dándole 'Estrellas' del 1 al 5. Si convence con sus argumentos sobre por qué la peli fue buena/mala, tiene derecho a elegir la película la próxima semana."
            },
            guiaMaestro: {
                objetivo: "El alumno redacta cartas formales para resolver problemas de la vida cotidiana y escribe reseñas críticas de obras literarias o audiovisuales.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["carta de reclamo formal", "como hacer una reseña critica", "abreviaturas comerciales"]
        }
    ]
};

const CIENCIAS_S1: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias I (Biología)",
    emoji: "🧬",
    color: "#10B981",
    bloques: [
        {
            bloque: 1,
            nombre: "La biodiversidad mexicana y evolución",
            meses: "Agosto – Septiembre",
            enClase: [
                "México como país megadiverso (endemismo)",
                "Teoría de Darwin y Wallace (Selección natural profunda)",
                "Adaptaciones fisiológicas, morfológicas y etológicas",
                "Importancia ética y estética de conservar la naturaleza",
                "Ecosistemas amenazados"
            ],
            guiaPapa: {
                intro: "En secundaria, Ciencias de primero se enfoca 100% en Biología. Iniciamos maravillándonos de que México tiene casi todos los climas y animales del mundo en su territorio.",
                comoExplicar: [
                    "Endémico significa 'solo vivo aquí'. El Ajolote es endémico de Xochimilco; si se extingue ahí, desaparece del universo entero.",
                    "Adaptación Morfológica (Cuerpo): El camaleón cambia de color.",
                    "Adaptación Fisiológica (Funcionamiento interior): El oso hiberna bajando su ritmo cardíaco para no morir de hambre en invierno.",
                    "Adaptación Etológica (Comportamiento): Los lobos cazan en manada porque uno solo no podría."
                ],
                truco: "Para entender a Darwin, recuérdales que las jirafas no estiraron el cuello 'por esfuerzo'. Nacieron jirafas de cuello corto y largo al azar. Las de cuello corto se murieron de hambre porque no alcanzaban las hojas altas, y solo las de cuello largo tuvieron bebés.",
                error_comun: "Creer que la evolución es una línea recta donde el mono 'se vuelve' humano. No, el mono y el humano son ramas del mismo árbol, pero ninguna es mejor que otra, ambas sobrevivieron.",
                actividad_casa: "Investigación de Mascotas: Pídele que investigue las adaptaciones evolutivas de su mascota (perro o gato). Ejemplo: ¿Por qué los gatos tienen pupilas verticales? (Para cazar de noche). ¿Por qué los perros tienen el olfato tan potente? (Para rastrear presas en manada)."
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce que la biodiversidad es resultado de la evolución y valora las adaptaciones de los seres vivos a su entorno.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["biodiversidad de mexico", "adaptaciones morfologicas y fisiologicas", "teoria de darwin secundaria"]
        },
        {
            bloque: 2,
            nombre: "Nutrición y sistemas del cuerpo humano",
            meses: "Octubre – Noviembre",
            enClase: [
                "Funcionamiento celular profundo (Mitocondria y energía)",
                "Aparato digestivo y respiratorio como proveedores de energía",
                "Trastornos alimenticios (Anorexia, Bulimia, Obesidad)",
                "El plato del bien comer y la jarra del buen beber",
                "Alimentos transgénicos y procesados"
            ],
            guiaPapa: {
                intro: "Biología aplicada a sí mismos. Entenderán que la comida no es para 'llenar la panza', sino una reacción química para darle combustible a cada célula de su cuerpo.",
                comoExplicar: [
                    "La respiración no solo ocurre en los pulmones. ¡Ocurre en todas tus células! Los pulmones solo meten el oxígeno a la sangre, la sangre lo lleva a la célula, y la Mitocondria (el motorcito) quema la comida con ese oxígeno para darte fuerza.",
                    "La anorexia no es un problema de estómago, es un problema psicológico donde el cerebro distorsiona el reflejo del espejo.",
                    "Un alimento transgénico es un jitomate al que los científicos le metieron un gen de pez de agua fría para que resista las heladas. (Biología moderna pura)."
                ],
                truco: "Explica la diabetes como 'Células muertas de hambre'. Aunque comas mucha azúcar, si el páncreas no produce Insulina (la llave de la puerta), el azúcar se queda atorada en la sangre y la célula se muere de hambre.",
                error_comun: "Confundir nutrirse con llenarse. Un refresco con pan dulce te 'llena' (tiene calorías vacías), pero tus células se quedan desnutridas sin vitaminas ni proteínas.",
                actividad_casa: "El Detective de Etiquetas: Vayan a la alacena. Que tome 3 productos empaquetados y lea los ingredientes. El ingrediente que aparece de PRIMERO en la lista es el que más tiene el producto. ¡Se sorprenderán al ver que el cereal de 'frutas' tiene al Azúcar como primer ingrediente!"
            },
            guiaMaestro: {
                objetivo: "El alumno explica el proceso integral de la nutrición, desde la digestión y respiración hasta la obtención de energía celular, y previene riesgos de salud.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["nutricion y respiracion celular", "trastornos alimenticios adolescentes", "alimentos transgenicos secundaria"]
        },
        {
            bloque: 3,
            nombre: "Reproducción, sexualidad y genética",
            meses: "Diciembre – Enero",
            enClase: [
                "Reproducción sexual (variabilidad) vs Asexual (clones)",
                "Aparatos reproductores y ciclo menstrual a nivel hormonal",
                "Métodos anticonceptivos (barrera, hormonales, definitivos)",
                "Infecciones de Transmisión Sexual (VPH, VIH/SIDA)",
                "Genética básica (ADN, cromosomas y herencia mendeliana)"
            ],
            guiaPapa: {
                intro: "El bloque más crítico para adolescentes. Se habla de sexualidad abierta y científicamente. Sin tabúes, para prevenir embarazos tempranos e ITS.",
                comoExplicar: [
                    "Reproducción asexual (bacterias, plantas): Es hacer 'Copy-Paste'. El hijo es un clon idéntico. Si llega un veneno, mata a todos.",
                    "Reproducción sexual (humanos, animales): Mezcla ADN del padre y madre. Crea un hijo único. La variabilidad salva a la especie de extinguirse.",
                    "El condón es el ÚNICO método que previene un embarazo Y ADEMÁS previene el contagio de enfermedades mortales como el VIH.",
                    "El ADN es un libro de instrucciones microscópico escrito en espiral dentro del núcleo de tus células. Dice el color de tus ojos y tu altura."
                ],
                truco: "Diles que el cuerpo humano tiene 46 'libros' de genética (Cromosomas). Papá te da 23 en el espermatozoide, y mamá te da 23 en el óvulo. Si sumas 23+23, tienes tus 46 libros completos para armar a un bebé.",
                error_comun: "Pensar que las pastillas anticonceptivas protegen contra el VIH o Sífilis. Asegúrate de que entiendan la diferencia entre 'Prevenir embarazo' (pastillas) y 'Prevenir enfermedades' (condón de látex).",
                actividad_casa: "El Árbol Genético: Observen rasgos físicos en la familia (pico de viuda en el cabello, poder enrollar la lengua en 'U', lóbulos de la oreja pegados o sueltos). Busquen en internet cuáles son genes 'Dominantes' (fuertes) y 'Recesivos' (débiles) y vean de quién lo heredó."
            },
            guiaMaestro: {
                objetivo: "El alumno argumenta a favor de la salud sexual y reproductiva, identifica métodos anticonceptivos y comprende las bases moleculares de la herencia (ADN).",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["metodos anticonceptivos y ITS", "reproduccion sexual y asexual", "genetica basica ADN secundaria"]
        },
        {
            bloque: 4,
            nombre: "La célula y la biotecnología",
            meses: "Febrero – Marzo",
            enClase: [
                "Estructura celular detallada (ribosomas, vacuolas, cloroplastos)",
                "Diferencia entre células procariotas (sin núcleo) y eucariotas (con núcleo)",
                "El microscopio electrónico y el avance de la medicina",
                "Manipulación genética (Biotecnología y clonación)",
                "Uso de bacterias para limpiar el ambiente (Biorremediación)"
            ],
            guiaPapa: {
                intro: "Viajamos al mundo invisible a nivel experto. Los niños descubrirán que la cura del cáncer o la limpieza del planeta está escondida en organismos de una sola célula.",
                comoExplicar: [
                    "Procariotas (como las bacterias) son células 'antiguas' y su ADN flota libre. Eucariotas (como las nuestras y de las plantas) tienen el ADN guardado en una bóveda VIP llamada Núcleo.",
                    "Los cloroplastos son los paneles solares de las plantas. Atrapan la luz del sol y la vuelven azúcar.",
                    "Biotecnología es usar seres vivos como herramientas. Ejemplo: Usar bacterias modificadas genéticamente para comerse el petróleo derramado en el mar (Biorremediación)."
                ],
                truco: "Compara la Célula con una Fábrica moderna. El Núcleo es el Director, la Mitocondria es la planta de luz, los Ribosomas son los obreros que arman las proteínas, y la Membrana es el policía de la puerta que dice quién entra y quién no.",
                error_comun: "Creer que la clonación es como en las películas (donde el clon sale con la misma edad y memorias que el original). Aclara que un clon nace como bebé, y su mente será totalmente diferente dependiendo de cómo lo eduquen.",
                actividad_casa: "Levadura en Acción: Compren levadura de panadero (son hongos microscópicos congelados). Pongan agua tibia y azúcar en una botella, echen la levadura y pongan un globo en la boca de la botella. Al 'despertar' y comer el azúcar, los hongos empezarán a 'respirar' gas (CO2) e inflarán el globo solos. ¡Biotecnología casera!"
            },
            guiaMaestro: {
                objetivo: "El alumno distingue células procariotas y eucariotas, reconoce el organelo celular y analiza las implicaciones éticas de la biotecnología moderna.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["celulas procariotas y eucariotas", "biotecnologia y clonacion", "organelos celulares biologia 1"]
        },
        {
            bloque: 5,
            nombre: "Interacciones ecológicas e impacto ambiental",
            meses: "Abril – Junio",
            enClase: [
                "Cadenas y redes tróficas complejas",
                "Tipos de simbiosis: Mutualismo, Comensalismo, Parasitismo",
                "Ciclos biogeoquímicos (Ciclo del Carbono y Nitrógeno)",
                "El cambio climático y su efecto en la biodiversidad global",
                "Desarrollo sustentable y proyectos ecológicos comunitarios"
            ],
            guiaPapa: {
                intro: "Para cerrar Biología, unimos todo. Células, plantas, humanos y clima forman una telaraña gigante. Si cortas un hilo, toda la red tiembla.",
                comoExplicar: [
                    "Mutualismo: Los dos ganan (ej. La abeja toma néctar y la flor es polinizada).",
                    "Parasitismo: Uno gana y el otro sufre (ej. La garrapata chupando sangre al perro).",
                    "Ciclo del Carbono: Nosotros exhalamos CO2 (humo), los árboles se lo comen para hacer troncos, y nos regresan Oxígeno limpio. ¡Es magia de reciclaje químico!"
                ],
                truco: "Diles la regla del 10% en las cadenas alimenticias: Un león tiene que comer muchísimas cebras para sobrevivir, porque de toda la energía que tenía el pasto que comió la cebra, al león solo le llega el 10%. Por eso hay pocos leones y millones de pastos.",
                error_comun: "Creer que matar a todos los depredadores (lobos, tiburones) es bueno para los venados o peces. Explica que sin lobos, los venados se multiplicarían tanto que se comerían todo el bosque y terminarían muriendo de hambre.",
                actividad_casa: "El Experimento del Micro-Ecosistema: Tomen un frasco de vidrio grande con tapa hermética. Pongan piedritas, carbón activo, tierra húmeda, musgo y una plantita pequeña. Ciérrenlo para siempre. Si lo ponen en luz indirecta, el agua se evaporará, hará 'lluvia' dentro del frasco y la planta vivirá años sin que la rieguen. Es la Tierra en miniatura."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza las interacciones depredador-presa y de simbiosis, comprende el flujo de energía en las redes tróficas y valora proyectos sustentables.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["mutualismo y parasitismo", "ciclo del carbono biologia", "redes troficas secundaria"]
        }
    ]
};

const GEOGRAFIA_S1: MateriaContenido = {
    materia: "geografia",
    nombre: "Geografía de México y del Mundo",
    emoji: "🌍",
    color: "#06B6D4",
    bloques: [
        {
            bloque: 1,
            nombre: "El espacio geográfico y sus componentes",
            meses: "Agosto – Septiembre",
            enClase: [
                "Componentes naturales, sociales, económicos y políticos",
                "Categorías de análisis: Lugar, Medio, Paisaje, Región, Territorio",
                "Representaciones del espacio (mapas temáticos, globos)",
                "Sistemas de Información Geográfica (SIG) y tecnología",
                "Coordenadas geográficas y escalas avanzadas"
            ],
            guiaPapa: {
                intro: "Geografía en secundaria no es 'aprenderse las capitales de memoria'. Es entender cómo la naturaleza y la política se pelean o se ayudan en el mapa.",
                comoExplicar: [
                    "El Espacio Geográfico es todo lo que nos rodea modificado por el hombre. Un cerro pelón es Naturaleza. Un cerro con casas es Espacio Geográfico.",
                    "Paisaje: Lo que puedes ver con tus ojos (un bosque o una ciudad).",
                    "Territorio: Un pedazo de tierra que tiene límites y un gobierno (ej. México, que termina exacto en el Río Bravo).",
                    "Los SIG (como Google Maps) combinan satélites, datos de tráfico y población en un solo mapa interactivo."
                ],
                truco: "Para las coordenadas, diles la regla del plano cartesiano mundial: La Latitud (Ecuador) es el eje Y (Arriba/Abajo). La Longitud (Greenwich) es el eje X (Derecha/Izquierda).",
                error_comun: "Confundir 'Lugar' con 'Región'. Un lugar es un punto exacto (tu casa, una colonia). Una Región es una zona inmensa que comparte algo en común (ej. la Región Maya abarca varios estados y países).",
                actividad_casa: "Mapas de Superposición (Capas SIG): Imprime un mapa de tu estado. En una hoja de acetato transparente dile que dibuje con plumón azul los ríos. En otra hoja transparente, las carreteras en rojo. Al ponerlas encima del mapa, verá cómo las carreteras a fuerza tienen que cruzar los ríos (puentes). Así funcionan las capas de GPS reales."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza los componentes del espacio geográfico y utiliza Sistemas de Información Geográfica (SIG) para la interpretación espacial.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["componentes del espacio geografico", "sistemas de informacion geografica SIG", "paisaje y territorio secundaria"]
        },
        {
            bloque: 2,
            nombre: "Dinámica interna y externa de la Tierra",
            meses: "Octubre – Noviembre",
            enClase: [
                "Placas tectónicas, sismicidad y vulcanismo en México (Placa de Cocos)",
                "El ciclo de las rocas (ígneas, sedimentarias, metamórficas)",
                "Relieve continental y oceánico (fosas, dorsales)",
                "Distribución del agua dulce y cuencas hídricas",
                "Corrientes marinas y su efecto en el clima (El Niño)"
            ],
            guiaPapa: {
                intro: "Explicaremos por qué México tiembla tanto y por qué hay playas con arena blanca y otras con arena negra. Geología al máximo nivel.",
                comoExplicar: [
                    "México está aplastado por 5 placas tectónicas gigantes. La Placa de Cocos (en el Pacífico) se está metiendo por debajo del país; al raspar, genera los temblores en CDMX y Oaxaca.",
                    "Rocas ígneas son lava enfriada (vidrio volcánico). Sedimentarias son polvo y arena aplastados por millones de años. Metamórficas son rocas 'cocinadas' a alta presión.",
                    "El fenómeno del 'Niño' es una corriente de agua caliente en el océano que cambia el clima de todo el planeta, causando sequías en un lado y huracanes en otro."
                ],
                truco: "Toma dos galletas o rebanadas de pan. Hazlas chocar de frente y empuja: se levantará una montaña en medio (así se hizo el Himalaya). Ahora, haz que una pase por debajo de la otra raspando (Subducción), eso es lo que causa sismos y volcanes en México.",
                error_comun: "Pensar que los tsunamis los hace el viento. Recuérdales que un Tsunami es un TERREMOTO bajo el agua. El suelo del mar salta, empuja toda la columna de agua hacia arriba, y esa ola gigante viaja hasta la costa.",
                actividad_casa: "Identificador de Rocas: Salgan a la calle o parque. Recojan 3 tipos de piedras diferentes. Pídele que busque si hay una que parezca tener 'capas' de tierra prensada (Sedimentaria) o si hay alguna negra y porosa como piedra pómez (Ígnea volcánica)."
            },
            guiaMaestro: {
                objetivo: "El alumno explica la distribución de sismos, volcanes y relieve a partir de la tectónica de placas, y valora la importancia de las cuencas hídricas.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["placas tectonicas de mexico", "tipos de rocas geografia", "fenomeno de el niño"]
        },
        {
            bloque: 3,
            nombre: "Población y diversidad cultural",
            meses: "Diciembre – Enero",
            enClase: [
                "Crecimiento, composición y distribución de la población",
                "Pirámides de población (países jóvenes vs envejecidos)",
                "Migración interna e internacional (causas y consecuencias)",
                "Diversidad lingüística y religiosa en el mundo",
                "Conflictos culturales y la convivencia intercultural"
            ],
            guiaPapa: {
                intro: "Sociología geográfica. Veremos por qué hay países que pagan a la gente para tener bebés, y por qué miles de personas caminan meses intentando cruzar fronteras.",
                comoExplicar: [
                    "Una Pirámide de Población te dice el futuro. Si es ancha abajo (África), hay muchos niños. Si tiene forma de barril (Europa), hay puros adultos y ancianos, y en 20 años no tendrán quién trabaje.",
                    "Migración Interna: Ir de Oaxaca a Monterrey por trabajo. Internacional: Ir de México a Canadá.",
                    "Nadie migra por gusto dejando su casa. Migran por factores de 'Expulsión' (guerra, hambre, crimen) y van hacia factores de 'Atracción' (dólares, paz)."
                ],
                truco: "Dile que analice la pirámide de México. Antes era un triángulo perfecto (miles de niños). Ahora se está pareciendo a un 'barril'. Significa que los jóvenes (como él) tendrán que mantener a muchísimos ancianos cuando crezcan. ¡Es un reto matemático real!",
                error_comun: "Creer que la mayoría del mundo habla Inglés. El idioma con más hablantes nativos es el Chino Mandarín, seguido del Español. El inglés es el más usado para 'negocios', pero no es la lengua madre número uno.",
                actividad_casa: "La Pirámide Familiar: Dibujen una gráfica en casa. Eje Y son las edades (0-10, 10-20... 80-90). Eje X son Hombres a la izquierda y Mujeres a la derecha. Pongan un punto por cada tío, abuelo y primo que conozcan. Verán gráficamente de qué lado está cargada su propia familia."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza la dinámica de la población, interpreta pirámides demográficas y valora la convivencia intercultural y el respeto a migrantes.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["piramides de poblacion geografia", "causas de la migracion secundaria", "diversidad cultural del mundo"]
        },
        {
            bloque: 4,
            nombre: "Espacios económicos y desigualdad",
            meses: "Febrero – Marzo",
            enClase: [
                "Actividades primarias (Agricultura), secundarias (Industria), terciarias (Servicios)",
                "Cadenas productivas y el comercio internacional",
                "El Índice de Desarrollo Humano (IDH) en México y el mundo",
                "Globalización y empresas transnacionales",
                "Desigualdad socioeconómica (El centro vs La periferia)"
            ],
            guiaPapa: {
                intro: "Dinero, poder y desigualdad. ¿Por qué el campesino que siembra el café gana centavos, mientras que la cafetería elegante de la ciudad vende la taza en 80 pesos?",
                comoExplicar: [
                    "Sector Primario: Extrae la naturaleza (Pez, madera). Sector Secundario: Lo transforma (Enlata el pez, hace la silla). Sector Terciario: Lo vende o da servicios (El supermercado, internet, doctores).",
                    "Un país que solo vende cosas primarias (petróleo crudo, aguacate) suele ser pobre. Un país que vende cosas secundarias (computadoras, autos) suele ser rico.",
                    "El IDH no solo mide el dinero. Si un país tiene mucho dinero, pero la gente se muere a los 50 años por violencia y no saben leer, su IDH será bajo."
                ],
                truco: "Para la globalización, diles que busquen 'Centro y Periferia'. Los países del 'Centro' (USA, Alemania) diseñan los iPhones y se quedan el 90% de la ganancia. Los países de la 'Periferia' (China, México) ponen el sudor obrero para armarlos y se quedan el 10%.",
                error_comun: "Pensar que un país es rico solo porque 'tiene muchos recursos naturales'. Venezuela o varios países de África están nadando en diamantes y petróleo, y tienen pobreza extrema. La riqueza la da la INDUSTRIA y la EDUCACIÓN, no la materia prima.",
                actividad_casa: "Clasificador de Sectores: En el desayuno, que nombre qué sectores participaron en su plato. El huevo es Primario (granja), el pan de caja es Secundario (fábrica Bimbo), y el Netflix que está viendo en la tele es Terciario (servicio de entretenimiento)."
            },
            guiaMaestro: {
                objetivo: "El alumno distingue los sectores económicos, analiza la cadena productiva en el marco de la globalización y reflexiona sobre la desigualdad mediante el IDH.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["sectores primario secundario y terciario", "indice de desarrollo humano IDH secundaria", "globalizacion economica"]
        },
        {
            bloque: 5,
            nombre: "Sustentabilidad y calidad de vida",
            meses: "Abril – Junio",
            enClase: [
                "Zonas de riesgo y vulnerabilidad ante desastres naturales",
                "Problemas ambientales (pérdida de biodiversidad, contaminación, islas de calor)",
                "Cambio climático y la Agenda 2030 (ONU)",
                "Consumo responsable y ecotecnias",
                "Calidad de vida y condiciones locales"
            ],
            guiaPapa: {
                intro: "Geografía de la supervivencia. Los estudiantes deben salir sabiendo que nuestro modelo de consumo actual está acabando con el único planeta que tenemos, y qué soluciones reales existen.",
                comoExplicar: [
                    "Riesgo = Peligro natural (Huracán) + Vulnerabilidad humana (casas de lámina). Si construyes una casa fuerte sobre una montaña, baja la vulnerabilidad y el riesgo casi desaparece.",
                    "Las 'Islas de calor' ocurren en ciudades llenas de cemento y sin árboles. El concreto absorbe el sol y hace que la ciudad sea hasta 4 grados más caliente que el bosque de al lado.",
                    "La Agenda 2030 son 17 metas del mundo para salvarse (ej. acabar el hambre, energía limpia).",
                    "Ecotecnias son inventos caseros ecológicos (ej. captar agua de lluvia, paneles solares)."
                ],
                truco: "Diles que el 'Consumo Responsable' es el arma más fuerte que tienen contra las mega-corporaciones. Si ellos deciden dejar de comprar botellas de plástico y usan termos, las fábricas perderán millones y se verán obligadas a cambiar.",
                error_comun: "Echarle toda la culpa del cambio climático al gobierno. Asegúrate de hacerlos reflexionar sobre la 'huella hídrica' (se necesitan más de 10,000 litros de agua para fabricar un solo pantalón de mezclilla que a veces compran y no usan).",
                actividad_casa: "Auditoría de Riesgos de la Casa: Pídele que haga un 'mapa de riesgos' de su casa y colonia. ¿Qué pasa si tiembla muy fuerte? (¿Hay cables eléctricos sueltos, árboles que puedan caer, cosas pesadas en repisas altas?). Que proponga una ecotecnia simple que podrían implementar este mes."
            },
            guiaMaestro: {
                objetivo: "El alumno evalúa problemas ambientales y riesgos de desastre, promoviendo acciones de consumo responsable y sustentabilidad basadas en la Agenda 2030.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["riesgo y vulnerabilidad geografia", "agenda 2030 secundaria", "islas de calor ecosistemas"]
        }
    ]
};

const HISTORIA_S1: MateriaContenido = {
    materia: "historia",
    nombre: "Historia I (Universal)",
    emoji: "🏛️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "El Imperialismo y el mundo a inicios del Siglo XX",
            meses: "Agosto – Septiembre",
            enClase: [
                "La segunda Revolución Industrial (petróleo, electricidad, acero)",
                "El Imperialismo europeo y el reparto de África y Asia",
                "Estados Unidos como nueva potencia mundial",
                "La Paz Armada y el nacionalismo extremo",
                "El darwinismo social (justificación del racismo)"
            ],
            guiaPapa: {
                intro: "A diferencia de primaria (que abarca desde cavernícolas hasta el siglo 18), la Historia de Secundaria I se enfoca exclusivamente en la era moderna (siglos 19, 20 y 21). Es la historia sangrienta y tecnológica que formó nuestro presente.",
                comoExplicar: [
                    "Imperialismo es cuando un país poderoso y armado (Gran Bretaña) va a África, roba sus recursos (diamantes, marfil) y esclaviza a la gente diciendo que les está haciendo un 'favor' por civilizarlos.",
                    "La Paz Armada: Todos los países europeos decían ser amigos, pero por debajo de la mesa estaban fabricando ametralladoras y tanques a máxima velocidad.",
                    "El Darwinismo social fue una mentira cruel: Decían que como los blancos tenían mejores armas, eran 'biológicamente superiores' a las razas de África. Pura excusa para robar."
                ],
                truco: "Dibuja un pastel. Diles que el pastel es África, y que en 1885 los países de Europa (Francia, Inglaterra, Alemania) se sentaron con un cuchillo y se repartieron el pastel trazando líneas rectas. Por eso los países de África hoy tienen fronteras tan cuadradas.",
                error_comun: "Creer que el imperialismo fue hace miles de años. Recuérdales que esto pasó cuando sus bisabuelos ya estaban naciendo. Fue hace apenas un parpadeo en la historia.",
                actividad_casa: "Mapa del Reparto: Que busquen un mapa de África en 1914. Notarán que Inglaterra tenía una franja gigante de Norte a Sur, y Francia de Oeste a Este. Pregúntale: '¿Qué crees que pasaba si tribus africanas enemigas quedaban atrapadas juntas dentro de la misma línea dibujada por Europa?'. (Respuesta: guerras civiles que duran hasta hoy)."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza las causas del Imperialismo, el desarrollo de la Segunda Revolución Industrial y la competencia entre potencias que derivó en la Paz Armada.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["el imperialismo europeo secundaria", "reparto de africa historia 1", "la paz armada"]
        },
        {
            bloque: 2,
            nombre: "La Primera Guerra Mundial y la Revolución Rusa",
            meses: "Octubre – Noviembre",
            enClase: [
                "El asesinato del archiduque Francisco Fernando (La chispa)",
                "La guerra de trincheras y las nuevas armas (gas mostaza, tanques)",
                "La Revolución Rusa de 1917 (Caída de los zares y nacimiento del comunismo)",
                "El Tratado de Versalles y el castigo a Alemania",
                "Los años 20s (crecimiento artificial y cultura)"
            ],
            guiaPapa: {
                intro: "El inicio del siglo de las matanzas. Los ejércitos entraron a esta guerra usando caballos y espadas brillantes, y salieron usando máscaras antigás y ametralladoras.",
                comoExplicar: [
                    "La chispa fue el asesinato de un príncipe austriaco, pero la gasolina ya estaba regada (Imperialismo). Un país declaró la guerra, sus amigos se metieron a defenderlo, y la cadena arrastró al mundo entero.",
                    "Las Trincheras: Hoyos en la tierra llenos de lodo y ratas donde los soldados vivieron y murieron durante 4 años para avanzar solo unos metros.",
                    "Rusia se rindió de la guerra mundial porque adentro de su país los obreros y campesinos, liderados por Lenin, derrocaron al rey (el Zar) para imponer el Comunismo (todos ganan igual).",
                    "El Tratado de Versalles humilló tanto a Alemania cobrándoles deudas de guerra imposibles, que dejó a los alemanes enojados y listos para vengarse 20 años después."
                ],
                truco: "Usa analogías de peleas de patio de escuela. Alianzas secretas: 'Si el de 1ro B me pega, tú que eres de 3ro C le pegas a él'. Así funcionó la Primera Guerra Mundial.",
                error_comun: "Confundir la 1ra Guerra con la 2da (Hitler y los Nazis SON DE LA SEGUNDA, no de la Primera). En la Primera Guerra Alemania era un imperio, no eran Nazis.",
                actividad_casa: "Diario de Trinchera: Pídele que se ponga en los zapatos de un joven soldado de 16 años en 1916. Que escriba una carta a su madre describiendo cómo es vivir en una zanja llena de agua, el terror de escuchar el silbato para salir a correr, y el gas venenoso flotando."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende el desarrollo y consecuencias de la Primera Guerra Mundial, así como el impacto global del triunfo de la Revolución Rusa.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["primera guerra mundial trincheras", "revolucion rusa lenin zares", "tratado de versalles causas"]
        },
        {
            bloque: 3,
            nombre: "La Segunda Guerra Mundial y el Holocausto",
            meses: "Diciembre – Enero",
            enClase: [
                "El ascenso del Fascismo (Mussolini) y el Nazismo (Hitler)",
                "La Gran Depresión (Crash de 1929) como caldo de cultivo",
                "Estallido y frentes de guerra (Europa, África, el Pacífico)",
                "El Holocausto (Genocidio sistemático judío)",
                "Bombas atómicas en Hiroshima y Nagasaki, y creación de la ONU"
            ],
            guiaPapa: {
                intro: "El momento más oscuro de la historia humana. Es vital que entiendan cómo un pueblo educado y avanzado como el alemán pudo ser convencido de cometer atrocidades, para que nunca vuelva a pasar.",
                comoExplicar: [
                    "Después de 1929, la gente no tenía dinero ni para pan. Hitler apareció gritando fuerte, culpando a los judíos de todos los problemas y prometiendo trabajo. La gente desesperada le creyó.",
                    "El Eje: Alemania, Italia y Japón. Los Aliados: Inglaterra, Rusia, Estados Unidos (y México mandó el Escuadrón 201).",
                    "El Holocausto no fue una muerte de guerra normal. Fue crear 'fábricas de la muerte' con cámaras de gas fríamente calculadas para exterminar a 6 millones de personas inocentes.",
                    "El terror atómico: EE.UU. lanzó bombas nucleares en Japón. Mató a cientos de miles de civiles en un segundo. Fin de la guerra por miedo absoluto."
                ],
                truco: "Para explicar cómo nacen los dictadores: 'Si tú tienes mucha hambre y te acaban de golpear, y llega un señor vestido genial, que te da un sándwich y te dice que un grupo de niños de enfrente tiene la culpa de todos tus males... tú vas a ir a golpear a esos niños sin pensarlo'. Eso es el fascismo, jugar con el odio y la necesidad.",
                error_comun: "Normalizar o hacer chistes sobre Hitler o los Nazis por ignorancia o memes de internet. Debes ser muy firme en frenar esto y mostrar la brutalidad real del dolor que causaron.",
                actividad_casa: "El Cine de la Memoria: Hay películas aptas para su edad que marcan profundamente. Vean juntos 'El niño con el pijama de rayas' o 'La Vida es Bella'. El impacto emocional fijará el aprendizaje histórico para siempre."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza críticamente las causas de la Segunda Guerra Mundial, el horror del Holocausto y valora la creación de la ONU como organismo de paz.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["segunda guerra mundial causas", "nazismo y fascismo secundaria", "holocausto judio y bombas atomicas"]
        },
        {
            bloque: 4,
            nombre: "La Guerra Fría y la descolonización",
            meses: "Febrero – Marzo",
            enClase: [
                "Bipolaridad mundial: Capitalismo (EEUU) vs Comunismo (URSS)",
                "Carrera armamentista y carrera espacial (llegada a la Luna)",
                "Muro de Berlín y guerras indirectas (Corea, Vietnam)",
                "Descolonización de África y Asia (Gandhi en India)",
                "La crisis de los misiles en Cuba"
            ],
            guiaPapa: {
                intro: "El mundo partido a la mitad. Durante 40 años estuvimos a un botón rojo de desaparecer el planeta completo. La guerra fue de espías, dinero y cohetes espaciales.",
                comoExplicar: [
                    "Se llama Guerra 'Fría' porque los dos gigantes (USA y Rusia) NUNCA se dispararon directamente frente a frente (porque ambos tenían armas nucleares y sería un empate mortal).",
                    "Como no podían pelear directo, usaban a países pequeños como tablero de ajedrez (apoyaban a diferentes bandos en Vietnam o Corea).",
                    "Capitalismo (USA): Cualquiera puede tener su empresa y hacerse rico, pero hay muchos pobres. Comunismo (URSS): El gobierno es dueño de todo y reparte igual, pero nadie tiene libertad.",
                    "Muro de Berlín: Rusia construyó un muro partiendo la capital de Alemania a la mitad para que su gente no se escapara al lado capitalista."
                ],
                truco: "Imagina a dos gorilas gigantes con ametralladoras encerrados en un cuarto lleno de gasolina. No se atreven a disparar, pero se miran feo, se presumen sus músculos y mandan a ratones a morderse. Eso es la Guerra Fría.",
                error_comun: "Creer que la llegada a la Luna fue solo por 'ciencia'. Aclara que fue por EGO militar. Estados Unidos quería demostrarle a Rusia que tenía la mejor tecnología de misiles del mundo.",
                actividad_casa: "La Crisis de los 13 Días: Cuéntales como anécdota de terror la 'Crisis de los Misiles'. En 1962, Rusia escondió misiles atómicos en Cuba (cerquita de Miami). Estados Unidos rodeó la isla. Todo el mundo pensó que al día siguiente se acababa el planeta. Que busquen cómo se solucionó (hablando en secreto de último minuto)."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende el conflicto ideológico de la Guerra Fría, la amenaza nuclear y los procesos de independencia (descolonización) en Asia y África.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["guerra fria capitalismo y comunismo", "muro de berlin y guerra de vietnam", "descolonizacion de africa y asia"]
        },
        {
            bloque: 5,
            nombre: "El fin del Milenio y el mundo globalizado",
            meses: "Abril – Junio",
            enClase: [
                "Caída del Muro de Berlín (1989) y fin de la URSS",
                "El triunfo del modelo neoliberal y la globalización",
                "Conflictos de Medio Oriente y el terrorismo (11 de Septiembre)",
                "Avance tecnológico acelerado (Internet, redes sociales)",
                "Retos actuales (Cambio climático, pandemias, inteligencia artificial)"
            ],
            guiaPapa: {
                intro: "Llegamos al presente. Entenderán los eventos que sucedieron cuando sus padres eran jóvenes y que formaron el mundo loco del internet donde ellos viven hoy.",
                comoExplicar: [
                    "Rusia (la URSS) se quedó sin dinero por intentar competir contra USA y colapsó. El Muro de Berlín cayó con martillos de la propia gente. El Capitalismo ganó.",
                    "El 11 de Septiembre (Torres Gemelas): El terrorismo cambió el mundo. Desde ese día hay revisiones extremas en aeropuertos y guerras en el Medio Oriente.",
                    "Neoliberalismo significa que los gobiernos dejaron de controlar los precios y dejaron que las mega empresas multinacionales tomaran el poder comercial global."
                ],
                truco: "Muéstrales un celular de hace 20 años (de botones) y diles que la humanidad tardó miles de años en inventar la rueda, pero solo 15 años en pasar del teléfono de botones a la Inteligencia Artificial. ¡Estamos en una avalancha histórica!",
                error_comun: "Pensar que la 'Historia' es algo del pasado. Hazles ver que ellos sobrevivieron a la Pandemia de COVID-19, un evento que saldrá en los libros de texto del año 2050. ¡Ellos son parte de la historia!",
                actividad_casa: "Entrevista del 11S: Pídele que te haga una entrevista periodística. 'Papá, ¿en dónde estabas y qué sentiste el 11 de septiembre de 2001 cuando cayeron las torres?'. Contar la historia oral desde la experiencia familiar conecta el siglo XX con el XXI a nivel emocional."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza los acontecimientos que marcaron el fin de la Guerra Fría, las dinámicas de la globalización y los desafíos del terrorismo y la tecnología en el siglo XXI.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["caida del muro de berlin historia", "el 11 de septiembre y terrorismo", "globalizacion y neoliberalismo secundaria"]
        }
    ]
};

const FORMACION_S1: MateriaContenido = {
    materia: "formacion",
    nombre: "Formación Cívica y Ética I",
    emoji: "⚖️",
    color: "#8B5CF6",
    bloques: [
        {
            bloque: 1,
            nombre: "Identidad, autonomía y sexualidad",
            meses: "Agosto – Septiembre",
            enClase: [
                "Construcción de la identidad adolescente y grupos de pertenencia",
                "Autonomía moral (Tomar decisiones sin que te obliguen)",
                "Cambios físicos, sociales y emocionales",
                "Derecho a la información científica sobre sexualidad",
                "Prevención del embarazo adolescente e infecciones"
            ]
        },
        {
            bloque: 2,
            nombre: "Cultura de paz y derechos humanos",
            meses: "Octubre – Noviembre",
            enClase: [
                "Reconocimiento de la dignidad humana",
                "Discriminación, racismo y clasismo en México",
                "Resolución no violenta de conflictos (diálogo y mediación)",
                "Instituciones que protegen los Derechos Humanos (CNDH, ONU)",
                "El acoso escolar (Bullying) y ciberacoso"
            ]
        },
        {
            bloque: 3,
            nombre: "Leyes, normas y cultura de la legalidad",
            meses: "Diciembre – Enero",
            enClase: [
                "Diferencia entre normas morales, sociales y jurídicas (Leyes)",
                "La Constitución Política como ley suprema",
                "Cultura de la legalidad vs Corrupción e impunidad",
                "Las garantías individuales de los mexicanos",
                "El papel de las autoridades y los límites a su poder"
            ]
        },
        {
            bloque: 4,
            nombre: "Democracia y participación ciudadana",
            meses: "Febrero – Marzo",
            enClase: [
                "La democracia como forma de gobierno y forma de vida",
                "La división de poderes (Ejecutivo, Legislativo y Judicial)",
                "Partidos políticos y el sistema electoral (INE)",
                "Mecanismos de participación ciudadana",
                "Responsabilidad cívica y pago de impuestos"
            ]
        },
        {
            bloque: 5,
            nombre: "Desafíos de la humanidad y proyecto de vida",
            meses: "Abril – Junio",
            enClase: [
                "Solidaridad ante problemas mundiales (pobreza, clima)",
                "El impacto del consumismo en el medio ambiente",
                "Diseño de un proyecto de vida a corto y mediano plazo",
                "Salud integral y prevención de adicciones (drogas sintéticas)",
                "Cierre y compromisos éticos"
            ]
        }
    ]
};

export const SECUNDARIA_1: GradoContenido = {
    grado: "secundaria-1",
    nombre: "1° Secundaria",
    emoji: "📘",
    materias: {
        matematicas: MATEMATICAS_S1,
        espanol: ESPANOL_S1,
        ciencias: CIENCIAS_S1,
        historia: HISTORIA_S1,
        geografia: GEOGRAFIA_S1,
        formacion: FORMACION_S1,
        educacion_fisica: EDUCACION_FISICA_S1,
        artes: ARTES_S1
    }
};
