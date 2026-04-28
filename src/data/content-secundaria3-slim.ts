// Base de datos de contenido "masticado" para papás y maestros
// Secundaria 3° — Ciclo escolar 2025-2026 SEP México (Fase 6 - Cierre y pase a Prepa)

import type { GradoContenido, MateriaContenido } from './content-types';
import { PRIMARIA_3 } from './content-primaria3-slim';

// Reusamos algunas estructuras transversales como base.
const EDUCACION_FISICA_S3 = PRIMARIA_3.materias["educacion_fisica"] as MateriaContenido;
const ARTES_S3 = PRIMARIA_3.materias["artes"] as MateriaContenido;

const MATEMATICAS_S3: MateriaContenido = {
    materia: "matematicas",
    nombre: "Matemáticas III",
    emoji: "📐",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Ecuaciones Cuadráticas (de Segundo Grado)",
            meses: "Agosto – Septiembre",
            enClase: [
                "Ecuaciones de la forma ax² + bx + c = 0",
                "Resolución por factorización (binomios conjugados y diferencia de cuadrados)",
                "La Fórmula General (La 'chicharronera')",
                "Propiedades de las parábolas en el plano cartesiano",
                "Problemas de área y cálculo de trayectorias (ej. tiro parabólico)"
            ],
            guiaPapa: {
                intro: "Llegó el jefe final del álgebra: Las ecuaciones que están elevadas al cuadrado (x²). Aquí la gráfica ya no es una línea recta, es una letra 'U' llamada Parábola.",
                comoExplicar: [
                    "Si una ecuación dice 'x' normal, tiene UNA respuesta. Si dice 'x²', SIEMPRE tiene DOS respuestas posibles (una positiva y una negativa).",
                    "Factorizar es desarmar un reloj para ver sus engranes. Es buscar dos números que multiplicados den un valor y sumados den otro.",
                    "La Fórmula General es el 'código trampa' de las matemáticas. Si la ecuación está muy fea para factorizarse en tu cabeza, metes los números (a, b, c) en la fórmula, haces las sumas/raíces, y la respuesta sale sola."
                ],
                truco: "El nombre de la Fórmula General (x = -b ± √...) le dicen la 'chicharronera' porque es tan importante en México que dicen que 'hasta el señor de los chicharrones se la sabe'. Que se la aprenda de memoria como si fuera una canción.",
                error_comun: "Olvidar el signo '±' antes de la raíz cuadrada. Explícale que una raíz siempre tiene dos caras: La raíz de 25 es 5 (porque 5x5=25) PERO también es -5 (porque -5x-5=25). De ahí salen las dos respuestas de la ecuación.",
                actividad_casa: "El Cañón Parabólico: Cuando rieguen el jardín o tiren algo a la basura, hazles notar que el agua de la manguera hace una curva perfecta en el aire que sube y luego cae. ¡Esa curva es una ecuación cuadrática en la vida real! La X es la distancia y la Y es la altura."
            },
            guiaMaestro: {
                objetivo: "El alumno resuelve problemas mediante ecuaciones de segundo grado (completas e incompletas) usando factorización y la fórmula general.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["ecuaciones cuadraticas o de segundo grado", "formula general chicharronera", "factorizacion trinomios"]
        },
        {
            bloque: 2,
            nombre: "Teorema de Pitágoras y Teorema de Tales",
            meses: "Octubre – Noviembre",
            enClase: [
                "Características de los triángulos rectángulos",
                "Teorema de Pitágoras (a² + b² = c²)",
                "Cálculo de distancias inaccesibles usando sombras (Teorema de Tales)",
                "Semejanza y congruencia de figuras geométricas",
                "Criterios de semejanza (LAL, ALA, LLL)"
            ],
            guiaPapa: {
                intro: "Geometría sagrada. Estas dos leyes descubiertas por griegos hace 2000 años se siguen usando hoy para construir puentes y calcular el tamaño de los planetas.",
                comoExplicar: [
                    "Pitágoras: Solo funciona con triángulos que tienen una esquina perfecta de 90° (Rectángulo). Los dos lados cortos (Catetos) forman la esquina. El lado más largo es como un resbaladero (Hipotenusa).",
                    "La regla: Si le sacas el cuadrado a un Cateto y se lo sumas al cuadrado del otro Cateto, ¡es exactamente igual al cuadrado del resbaladero (Hipotenusa)!",
                    "Tales de Mileto calculó la altura de las pirámides de Egipto sin subirse a ellas. Usó su propia sombra y la sombra de la pirámide (Proporcionalidad)."
                ],
                truco: "Diles la regla del '3, 4, 5'. Si los lados cortos de tu cuarto miden 3 metros y 4 metros, la distancia cruzada (diagonal) SIEMPRE será 5 metros. Los albañiles usan este truco todos los días para que las esquinas queden perfectamente cuadradas.",
                error_comun: "Creer que Pitágoras se suma simple (3+4=7). Recuérdales que la fórmula exige 'elevar al cuadrado' PRIMERO. (3x3=9) + (4x4=16) = 25. Y luego sacarle raíz: √25 = 5.",
                actividad_casa: "Midiendo un Árbol como Tales: Salgan al parque al atardecer. Mide la sombra de tu hijo. Divide su estatura entre su sombra. Luego midan la sombra gigante de un árbol. Multipliquen la sombra del árbol por el resultado anterior, ¡y habrán calculado la altura del árbol sin tocarlo!"
            },
            guiaMaestro: {
                objetivo: "El alumno formula y justifica los teoremas de Pitágoras y Tales, aplicándolos para calcular distancias, alturas y propiedades de triángulos.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["teorema de pitagoras hipotenusa catetos", "teorema de tales sombras", "semejanza y congruencia de triangulos"]
        },
        {
            bloque: 3,
            nombre: "Trigonometría Básica (Seno, Coseno, Tangente)",
            meses: "Diciembre – Enero",
            enClase: [
                "Introducción a las funciones trigonométricas",
                "Seno (Cateto Opuesto / Hipotenusa)",
                "Coseno (Cateto Adyacente / Hipotenusa)",
                "Tangente (Cateto Opuesto / Cateto Adyacente)",
                "Uso de la calculadora científica y resolución de triángulos"
            ],
            guiaPapa: {
                intro: "Palabras que asustan (SENO, COSENO, TANGENTE), pero que solo son divisiones encubiertas. Si Pitágoras ayudaba cuando conocíamos dos lados, la Trigonometría ayuda cuando solo tenemos un lado y un ángulo.",
                comoExplicar: [
                    "Imagina que estás parado en una esquina (ángulo) del triángulo. El Cateto Adyacente es la pared que puedes tocar. El Cateto Opuesto es la pared que está del otro lado del cuarto. La Hipotenusa sigue siendo el resbaladero.",
                    "Seno, Coseno y Tangente son simplemente relaciones. (Ej. 'La pared de enfrente es el doble de grande que el resbaladero').",
                    "A diferencia de Pitágoras, aquí sí importa en qué esquina te pares. Si te cambias de esquina, tu Cateto Opuesto y tu Adyacente se intercambian mágicamente."
                ],
                truco: "La palabra mágica: SOH-CAH-TOA. Enséñales a memorizarla. SOH (Seno = Opuesto/Hipotenusa). CAH (Coseno = Adyacente/Hipotenusa). TOA (Tangente = Opuesto/Adyacente). ¡No volverán a fallar en un examen!",
                error_comun: "Tener la calculadora en 'Radianes' (RAD) en lugar de 'Grados' (DEG). Si la pantalla de su calculadora científica tiene una R minúscula arriba, TODOS sus resultados saldrán mal aunque la fórmula sea perfecta.",
                actividad_casa: "El Arquitecto: Si quieren saber qué tan empinada está la escalera de la casa. Midan la altura del escalón (Opuesto) y lo profundo que pisas (Adyacente). Dividan Opuesto entre Adyacente. Usen la función 'TAN⁻¹' en el celular y les dirá exactamente los grados de inclinación de la escalera."
            },
            guiaMaestro: {
                objetivo: "El alumno usa las funciones trigonométricas (seno, coseno, tangente) para resolver problemas que implican calcular ángulos y lados de triángulos rectángulos.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["seno coseno tangente secundaria", "trigonometria basica", "sohcahtoa"]
        },
        {
            bloque: 4,
            nombre: "Volumen de Esferas y Geometría del Espacio",
            meses: "Febrero – Marzo",
            enClase: [
                "Fórmula del volumen y área superficial de una esfera",
                "Cuerpos de revolución (girar un triángulo genera un cono)",
                "Secciones cónicas (cortes de un cono: círculo, elipse, parábola, hipérbola)",
                "Rotación y traslación en el plano cartesiano",
                "Tasa de cambio y velocidad de crecimiento en gráficas"
            ],
            guiaPapa: {
                intro: "Veremos qué pasa cuando las figuras planas giran muy rápido. Todo este bloque es la base visual que usan los programadores para crear videojuegos en 3D.",
                comoExplicar: [
                    "Cuerpo de revolución: Si pegas un rectángulo de cartón a un palo de madera y lo haces girar súper rápido entre tus manos, el borrón que verás será un Cilindro.",
                    "Si haces lo mismo con un semicírculo, al girarlo verás una Esfera perfecta.",
                    "Cortes Cónicos: Si rebanas un cono de nieve de forma perfectamente horizontal, la rebanada es un Círculo. Si lo rebanas un poquito chueco, es una Elipse (un óvalo)."
                ],
                truco: "Para el volumen de la Esfera (4/3 x Pi x Radio³). Hazles ver el pequeño '3' arriba del radio. Explícales que el volumen siempre usa TRES dimensiones (Largo x Ancho x Profundo), por eso el resultado se lee como 'centímetros CÚBICOS'.",
                error_comun: "Confundir Área superficial con Volumen. Área es la pintura que necesitas para pintar un balón por fuera. Volumen es cuánta agua cabe adentro del balón.",
                actividad_casa: "La Rebanada de Manzana: Corta una manzana a la mitad, o usa plastilina moldeada en forma de cono. Haz cortes rectos, inclinados y paralelos con un cuchillo plástico. Observen la figura geométrica (Círculo o Elipse) que se forma en la 'rebanada plana'. ¡Esas son las cónicas!"
            },
            guiaMaestro: {
                objetivo: "El alumno calcula volúmenes de esferas y conos y analiza los cuerpos geométricos que se generan al rotar o cortar figuras.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["volumen de una esfera", "cuerpos de revolucion secundaria", "secciones conicas"]
        },
        {
            bloque: 5,
            nombre: "Estadística avanzada y Simulaciones",
            meses: "Abril – Junio",
            enClase: [
                "Eventos mutuamente excluyentes e independientes (Probabilidad compleja)",
                "Cálculo de varianza y desviación estándar",
                "Simulaciones de muestreo poblacional",
                "Interpretación de gráficas de cajas y bigotes (Boxplots)",
                "Repaso general para examen COMIPEMS / Ingreso a Prepa"
            ],
            guiaPapa: {
                intro: "Último bloque de la educación básica. Estas matemáticas enseñan pensamiento crítico para no ser engañado por encuestas políticas o falsas estadísticas de internet.",
                comoExplicar: [
                    "Desviación Estándar es el 'margen de error' del mundo real. Si el promedio de la clase es 8, pero la desviación es muy alta, significa que la mitad reprobó y la mitad sacó 10 (nadie sacó 8 realmente).",
                    "Muestreo: No necesitas probar todo el caldo para saber si le falta sal, basta con una cucharada. Eso es una muestra poblacional.",
                    "Gráficas de Caja y Bigotes: Ayudan a ver qué tan 'estirados' o 'apretados' están los datos alrededor del promedio."
                ],
                truco: "Enséñales la Regla de la Moneda y el Dado: Cuando en un examen les pregunten la probabilidad de que algo pase O pase otra cosa (Excluyentes), se SUMAN. Si les dicen que pase algo Y además otra cosa (Independientes), se MULTIPLICAN.",
                error_comun: "Durante el repaso de admisión a la prepa, atorarse queriendo hacer cálculos enormes a mano. En los exámenes de admisión (COMIPEMS), el 90% de las respuestas de mate se sacan por 'eliminación lógica' o usando el sentido común sin hacer toda la cuenta.",
                actividad_casa: "Simulador de Elecciones: Toma un puñado de frijoles negros y otro de frijoles pintos. Mételos en una bolsa opaca. Pídele que saque 5 frijoles sin mirar (la Muestra). Que cuente cuántos negros y pintos hay en su mano y calcule qué porcentaje hay en toda la bolsa. ¡Así hacen las encuestas en televisión!"
            },
            guiaMaestro: {
                objetivo: "El alumno calcula la desviación estándar, analiza probabilidad de eventos y usa muestreos como preparación integral para su educación media superior.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["desviacion estandar secundaria", "grafica de cajas y bigotes", "repaso examen comipems prepa"]
        }
    ]
};

const ESPANOL_S3: MateriaContenido = {
    materia: "espanol",
    nombre: "Español III",
    emoji: "📚",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "El ensayo argumentativo complejo",
            meses: "Agosto – Septiembre",
            enClase: [
                "El ensayo argumentativo sobre temas de relevancia social",
                "Uso de citas textuales indirectas y formato APA avanzado",
                "Falacias argumentativas (Ad Hominem, Hombre de paja)",
                "Recursos discursivos: Ironía, analogía y sarcasmo literario",
                "Estructura silogística y lógica formal"
            ],
            guiaPapa: {
                intro: "El arte de discutir con elegancia. Aquí no se trata de quién grita más fuerte, sino de quién tiene el argumento irrefutable. Aprenderán a detectar mentiras políticas.",
                comoExplicar: [
                    "Una Falacia es una mentira disfrazada de verdad lógica. Ejemplo (Ad Hominem): 'Tú dices que fumar es malo, pero tú estás gordo, así que no te creo'. Atacas a la persona, no a su argumento.",
                    "El formato APA es la regla mundial para decir de qué libro o página web sacaste tu información para no cometer robo intelectual (Plagio)."
                ],
                truco: "Diles que un ensayo sin citas es solo 'un desahogo personal'. Si dicen 'la contaminación es grave', deben agregar 'según el informe del INEGI del 2024, el 80% del agua...', ahí su opinión se vuelve un Argumento invencible.",
                error_comun: "Abusar del sarcasmo creyendo que los hace sonar inteligentes. Enséñales que en un ensayo académico, la ironía fina es válida, pero el sarcasmo burdo resta seriedad y profesionalismo al texto.",
                actividad_casa: "Cazadores de Falacias: Escuchen un debate político o lean comentarios de Twitter/X juntos. Pídele que encuentre a un usuario usando una falacia de 'Hombre de paja' (inventar algo falso que el otro no dijo para atacarlo más fácil)."
            },
            guiaMaestro: {
                objetivo: "El alumno argumenta sus puntos de vista en ensayos formales, respetando el formato de citas y evitando falacias lógicas.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["ensayo argumentativo secundaria 3", "falacias argumentativas ad hominem", "formato APA avanzado"]
        },
        {
            bloque: 2,
            nombre: "Literatura del Renacimiento y teatro clásico",
            meses: "Octubre – Noviembre",
            enClase: [
                "El Renacimiento y la vuelta al humanismo (Don Quijote, Shakespeare)",
                "Diferencia entre Tragedia, Comedia y Drama",
                "Los personajes arquetípicos (El héroe trágico, el avaro, la dama)",
                "Lectura dramatizada con énfasis en dicción",
                "Adaptación de una obra clásica al contexto moderno"
            ],
            guiaPapa: {
                intro: "Los alumnos leerán a los gigantes de la literatura. Entenderán por qué 'Romeo y Julieta' no es una historia de amor verdadero, sino una tragedia de adolescentes impulsivos.",
                comoExplicar: [
                    "El Renacimiento significa 'volver a nacer'. Después de mil años de Edad Media oscura centrada en la religión, el arte volvió a centrarse en el ser humano, la ciencia y los sentimientos.",
                    "En una Tragedia (como Edipo), el héroe comete un error y su final siempre, siempre, es la muerte o la destrucción. En la Comedia, los personajes son torpes y terminan riendo.",
                    "Un arquetipo es un molde de personaje (El sabio anciano, el rebelde sin causa) que se repite en todas las películas desde Star Wars hasta Harry Potter."
                ],
                truco: "Para quitarles el miedo al Quijote, diles que fue el primer libro de comedia de la historia. Cervantes se estaba burlando de los libros de caballería de su época, creando a un viejo loco (Don Quijote) que confunde molinos con monstruos. ¡Era una parodia!",
                error_comun: "Leer teatro clásico en voz baja y monótona. El teatro no se lee con los ojos, se 'actúa' con la voz. Si hay un signo de exclamación (!), oblígalo a subir el tono de voz.",
                actividad_casa: "Shakespeare Moderno: Tomen una escena de Romeo y Julieta (la del balcón). Pídele que 'traduzca' el diálogo de los dos personajes a cómo hablarían dos adolescentes hoy en día usando mensajes de WhatsApp. (Ej. 'Oye, ¿por qué te tienes que llamar Montesco? 🤔')."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica las características de la literatura del Renacimiento y participa en la adaptación y lectura dramatizada de una obra teatral clásica.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["literatura del renacimiento secundaria", "tragedia y comedia teatro", "personajes arquetipicos y el quijote"]
        },
        {
            bloque: 3,
            nombre: "Los medios de comunicación y el panel formal",
            meses: "Diciembre – Enero",
            enClase: [
                "El artículo de opinión vs La nota informativa",
                "Fake news, clickbait y manipulación mediática",
                "El panel de discusión formal (Reglas parlamentarias)",
                "Uso de gráficas y datos estadísticos para defender una postura",
                "Debate competitivo escolar"
            ],
            guiaPapa: {
                intro: "Formación de ciudadanos críticos. Aprenderán a desarmar la manipulación de la televisión y el internet, y a debatir respetuosamente como si estuvieran en la ONU.",
                comoExplicar: [
                    "Nota informativa (Noticia): 'Hubo un choque y 2 heridos'. Artículo de Opinión: 'Los choques ocurren porque el gobierno no pone semáforos y es inaceptable'. (La opinión lleva juicio moral).",
                    "Clickbait: Poner un título exagerado y escandaloso en un video de YouTube solo para que le des clic y generes dinero, aunque el contenido no tenga nada que ver.",
                    "Un debate no lo gana el que tiene la razón, lo gana el que sabe expresar mejor sus pruebas y mantener la calma."
                ],
                truco: "La regla de los '3 Segundos' del debate: Cuando el oponente termine de hablar, enséñale a tu hijo a respirar en silencio 3 segundos antes de responder. Eso proyecta control, asusta al rival y evita responder con enojo.",
                error_comun: "Confundir un 'Hecho' con una 'Opinión'. Exige que diferencien. Hecho: 'La ciudad está a 30 grados'. Opinión: 'Hace mucho calor insoportable'. Los debates se ganan con hechos, no con opiniones.",
                actividad_casa: "El Abogado del Diablo: Elige un tema polémico (ej. El uniforme escolar obligatorio). Si tu hijo odia el uniforme, oblígalo a defender EN FAVOR del uniforme durante 5 minutos, dándote 3 argumentos lógicos. Ponerse en los zapatos del enemigo es el mejor entrenamiento de debate."
            },
            guiaMaestro: {
                objetivo: "El alumno participa en debates y paneles formales, argumentando con datos verificados y desmintiendo noticias falsas en medios digitales.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["articulo de opinion vs noticia", "panel de discusion y debate", "fake news y clickbait"]
        },
        {
            bloque: 4,
            nombre: "Poesía contemporánea y autobiografía",
            meses: "Febrero – Marzo",
            enClase: [
                "Poesía del Siglo XX y XXI (Vanguardismo, Surrealismo, Verso libre)",
                "Interpretación de metáforas complejas y figuras retóricas",
                "Estructura y función de la Autobiografía y las Memorias",
                "El tono literario (Nostálgico, irónico, dramático)",
                "Elaboración de una cronología de vida"
            ],
            guiaPapa: {
                intro: "Viaje al interior. Antes de salir de la secundaria, tendrán que escribir su propia historia y explorar la poesía que no tiene reglas.",
                comoExplicar: [
                    "El Verso Libre significa que ya no importa contar sílabas ni que rime. Lo que importa es el ritmo y la imagen mental que genera la palabra.",
                    "Surrealismo: Es escribir como si estuvieras soñando (ej. 'Los relojes derretidos sobre la mesa').",
                    "Autobiografía: Escribir tu propia historia, pero no como un robot ('Nací en 2011, fui al kínder...'), sino buscando el momento que los cambió (ej. 'La cicatriz en mi rodilla explica quién soy hoy...')."
                ],
                truco: "Diles que la autobiografía debe empezar in media res (a la mitad del problema). En lugar de empezar naciendo, que empiecen con su memoria más fuerte y luego vayan al pasado para explicarla.",
                error_comun: "Decir 'no tengo nada interesante que contar en mi vida'. Todo adolescente cree que su vida es aburrida. Ayúdale a encontrar 'el conflicto'. Puede ser la pérdida de un familiar, cambiar de ciudad, o superar el miedo a un deporte.",
                actividad_casa: "El Baúl de los Recuerdos: Saquen álbumes de fotos físicos o de la nube de cuando eran pequeños. Elijan 3 fotos al azar. Pídele que escriba un párrafo de lo que cree que estaba sintiendo (o lo que tú recuerdas) en ese momento exacto. Será la semilla de su autobiografía."
            },
            guiaMaestro: {
                objetivo: "El alumno lee poesía de vanguardia y redacta su autobiografía utilizando un tono literario definido y organizando cronológicamente los sucesos clave.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["poesia de vanguardia verso libre", "como escribir una autobiografia", "surrealismo literario"]
        },
        {
            bloque: 5,
            nombre: "Elaboración del Anuario y formularios de ingreso",
            meses: "Abril – Junio",
            enClase: [
                "Llenado de formularios oficiales complejos (COMIPEMS, Prepa)",
                "Documentos de identidad (CURP, Acta de Nacimiento, Folios)",
                "Carta de presentación personal y currículum básico",
                "Producción editorial (El Anuario escolar)",
                "El prólogo, la dedicatoria y el epílogo"
            ],
            guiaPapa: {
                intro: "Despedida y burocracia real. Terminan la educación básica aprendiendo a llenar correctamente los papeles para entrar a la Preparatoria.",
                comoExplicar: [
                    "Un error de una letra en un formato de gobierno (como el apellido materno cambiado), puede hacer que pierdan su lugar en la Prepa. Deben escribir con letra de molde perfecta.",
                    "La CURP no es un número al azar, tiene lógica: Las letras son las iniciales de tu nombre, año de nacimiento y estado (Ej. HDF = Hombre del Distrito Federal/CDMX).",
                    "Prólogo es lo que escribe un amigo sobre ti antes de que empiece tu libro. Epílogo es el cierre final de la historia."
                ],
                truco: "Cuando llenen los óvalos del examen COMIPEMS, diles la regla de oro: Llenar completo el círculo de afuera hacia adentro con lápiz 2 y medio, sin salirse de la raya, porque no lo califica un humano, lo califica un láser (Lector Óptico).",
                error_comun: "Poner un correo electrónico inmaduro en documentos oficiales (ej. 'gokukiller_xd@hotmail.com'). Enséñales que llegó el momento de crear su primer correo formal y serio (ej. 'nombre.apellido@gmail.com') para trámites de preparatoria.",
                actividad_casa: "El Simulador de Prepa: Siéntense juntos en la computadora y creen un 'Curriculum Vitae' básico. Que ponga sus datos de contacto reales, las escuelas donde estudió y tres 'Habilidades' en las que sea muy bueno. Le dará un sentido de madurez increíble."
            },
            guiaMaestro: {
                objetivo: "El alumno llena de forma autónoma formularios de registro institucionales y participa en la creación de textos de despedida escolar (anuarios, prólogos).",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["formularios de ingreso comipems", "curriculum y carta de presentacion", "prologo epilogo y anuario escolar"]
        }
    ]
};

const CIENCIAS_S3: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias III (Química)",
    emoji: "🧪",
    color: "#10B981",
    bloques: [
        {
            bloque: 1,
            nombre: "Características de la materia y mezclas",
            meses: "Agosto – Septiembre",
            enClase: [
                "Propiedades cualitativas, extensivas e intensivas (Punto de ebullición)",
                "Diferencia entre elemento, compuesto y mezcla",
                "Mezclas homogéneas (soluciones) vs Heterogéneas",
                "Métodos de separación de mezclas (filtración, destilación, cromatografía)",
                "El principio de conservación de la masa (Lavoisier)"
            ],
            guiaPapa: {
                intro: "Bienvenidos a la Química. El estudio de lo que están hechas todas las cosas del universo. Empezamos en la cocina, el laboratorio más grande del mundo.",
                comoExplicar: [
                    "Mezcla Homogénea (Homo = Igual): El agua con azúcar. No puedes ver dónde está el azúcar, parece una sola cosa.",
                    "Mezcla Heterogénea (Hetero = Diferente): Agua con aceite o una ensalada. Puedes ver los ingredientes separados a simple vista.",
                    "Elemento: Oro puro. Compuesto: El agua (H2O), está hecha de hidrógeno y oxígeno abrazados.",
                    "Lavoisier dijo: 'La materia no se crea ni se destruye, solo se transforma'. Si quemas un papel de 10 gramos, no desapareció, se volvió 9 gramos de humo en el aire y 1 gramo de ceniza."
                ],
                truco: "Para explicar las propiedades, usa un clavo y un auto. Propiedad Extensiva (depende del tamaño): El auto pesa más que el clavo. Propiedad Intensiva (es la esencia, no importa el tamaño): Ambos son de hierro, así que si los derrites, ambos se fundirán exactamente a los mismos 1,538 grados centígrados.",
                error_comun: "Creer que hervir agua y volverla vapor es una 'Reacción Química'. No, es un cambio FÍSICO (sigue siendo H2O, solo que flotando). Una reacción química sería separar el Hidrógeno del Oxígeno usando electricidad (Electrólisis).",
                actividad_casa: "Cromatografía Casera: Pinta un punto con un plumón negro base agua a unos centímetros del borde de un papel filtro (o servilleta gruesa). Mete la punta de la servilleta en un vaso con un poco de agua (sin que el agua toque el punto negro directo). El agua subirá y 'separará' la tinta negra revelando que está hecha de colores azules, rojos y verdes ocultos."
            },
            guiaMaestro: {
                objetivo: "El alumno clasifica materiales en mezclas, compuestos y elementos, y selecciona métodos de separación físicos con base en sus propiedades.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["mezclas homogeneas y heterogeneas", "metodos de separacion de mezclas", "ley de la conservacion de la masa lavoisier"]
        },
        {
            bloque: 2,
            nombre: "Estructura del Átomo y la Tabla Periódica",
            meses: "Octubre – Noviembre",
            enClase: [
                "Modelos atómicos a lo largo de la historia (Dalton, Thomson, Rutherford, Bohr)",
                "Protones (+), Neutrones (0) y Electrones (-)",
                "Número atómico y masa atómica (Isótopos)",
                "Organización de la Tabla Periódica (Dmitri Mendeléyev)",
                "Grupos, periodos y electrones de valencia"
            ],
            guiaPapa: {
                intro: "Viaje al núcleo del universo. Aquí entenderán que están formados literalmente por polvo de estrellas, y aprenderán a leer el 'diccionario' del químico: la tabla periódica.",
                comoExplicar: [
                    "Los Átomos son como un sistema solar en miniatura. En el centro (Núcleo) están los Protones (pesados y positivos) y Neutrones. Alrededor giran los Electrones (ligeros y negativos) como planetas locos.",
                    "El Modelo de Thomson (El pudín con pasas): Él creía que el átomo era una bola positiva esponjosa llena de electrones negativos pegados como pasas.",
                    "La Tabla Periódica es como un edificio de departamentos. Los 'Grupos' (columnas) son las familias; todos los que viven en esa columna se comportan igual. (Ej. Los Gases Nobles no se juntan con nadie)."
                ],
                truco: "Diles que el Número Atómico (el número grande en la tabla) es como el CURP del elemento. Es la cantidad de Protones que tiene. El Carbono es el 6, significa que tiene 6 protones. Si tuviera 7, ya no es Carbono, ¡mágicamente sería Nitrógeno!",
                error_comun: "Intentar aprenderse toda la tabla de memoria. Es inútil. Lo que deben aprender es a usarla como un 'mapa' para saber cómo va a reaccionar un material con otro.",
                actividad_casa: "El Modelo de Bohr Casero: Dibujen un círculo grande (núcleo) y órbitas alrededor. Con plastilina de 3 colores hagan bolitas. Si hacen el átomo de Oxígeno (Número 8), pongan 8 bolitas rojas (Protones) en el centro y 8 bolitas azules (Electrones) en las órbitas (2 en la primera pista, y 6 en la segunda pista). ¡Construyeron oxígeno!"
            },
            guiaMaestro: {
                objetivo: "El alumno describe la estructura atómica y analiza la organización y regularidades de los elementos en la Tabla Periódica.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["modelos atomicos bohr rutherford", "tabla periodica de mendeleyev", "protones electrones neutrones"]
        },
        {
            bloque: 3,
            nombre: "El enlace químico y la formación de compuestos",
            meses: "Diciembre – Enero",
            enClase: [
                "Regla del Octeto (Por qué los átomos se unen)",
                "Enlace Iónico (Robar electrones / Metales con No Metales)",
                "Enlace Covalente (Compartir electrones / No Metales con No Metales)",
                "Estructura de Lewis (Puntitos alrededor del símbolo)",
                "Propiedades de los metales (Maleabilidad, conductividad)"
            ],
            guiaPapa: {
                intro: "El bloque donde el polvo cobra vida. Aprenderán cómo algo mortal e inflamable, si se junta con otra cosa, se convierte en algo que nos comemos todos los días.",
                comoExplicar: [
                    "La Regla del Octeto: Todos los átomos quieren tener 8 electrones en su última órbita para sentirse 'perfectos' (como los Gases Nobles). Si tienen 7, están desesperados por robar uno.",
                    "Enlace Iónico: Un metal fuerte (Cloro) le 'roba' a golpes el electrón a un débil (Sodio). Al pegarse, forman la Sal de mesa. (Un veneno + Un metal explosivo = Sal comestible. Magia química).",
                    "Enlace Covalente: Como ambos son débiles, deciden 'compartir' el electrón y se agarran de la mano. (Así se forma el agua H2O)."
                ],
                truco: "Para la Estructura de Lewis, solo diles que pongan la Letra del elemento (Ej. O de Oxígeno) y le dibujen puntitos alrededor, donde cada puntito es un electrón de valencia (los de la última capa). Es como dibujarles los brazos con los que se van a abrazar.",
                error_comun: "Creer que los enlaces son 'pegamento' real. Explícales que un enlace es magnetismo puro (positivo atrae a negativo), no es algo físico que se pueda tocar.",
                actividad_casa: "Armadores de Moléculas: Compren malvaviscos (bombones) y palillos. Los malvaviscos grandes blancos son Oxígeno, los chiquitos rosas son Hidrógeno. Únanlos con los palillos para armar la famosa figura de 'Mickey Mouse' del H2O. El ángulo en el que ponen los palillos es un Enlace Covalente real."
            },
            guiaMaestro: {
                objetivo: "El alumno representa el enlace químico mediante la estructura de Lewis y diferencia los tipos de enlaces (iónico, covalente y metálico).",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["regla del octeto y estructura de lewis", "enlace ionico y covalente", "electrones de valencia quimica"]
        },
        {
            bloque: 4,
            nombre: "Reacciones químicas y el Mol",
            meses: "Febrero – Marzo",
            enClase: [
                "Evidencias de reacciones químicas (cambio de color, gas, calor)",
                "Balanceo de ecuaciones químicas (Método de Tanteo)",
                "El concepto de Mol (Unidad de cantidad de sustancia)",
                "Cálculos estequiométricos masa-masa",
                "Reacciones endotérmicas (enfrían) y exotérmicas (calientan)"
            ],
            guiaPapa: {
                intro: "Matemáticas en la Química. Este bloque les explota la cabeza porque aprenderán a balancear ecuaciones y conocerán la palabra 'Mol', que es el concepto más abstracto de las ciencias exactas.",
                comoExplicar: [
                    "Balanceo de Ecuaciones: Recuerda a Lavoisier. Si metes 4 átomos de oxígeno a la olla, TIENEN que salir 4. No puedes crear materia de la nada. Balancear es agregar números grandes al principio (Coeficientes) para que la balanza cuadre.",
                    "¿Qué es un MOL?: Es solo una palabra para contar. Igual que una 'Docena' siempre significa 12, un 'Mol' siempre significa 6.022 x 10²³ cosas (Un número ridículamente gigante).",
                    "Exotérmica: Reacción que escupe calor (Fuego). Endotérmica: Reacción que roba calor de alrededor (las compresas de hielo instantáneo de los hospitales)."
                ],
                truco: "Diles que nunca, JAMÁS, pueden cambiar los numeritos chiquitos de abajo (Subíndices) al balancear. Si cambian el '2' del H2O a un '3' para cuadrar, ya no es agua, están creando peróxido tóxico. Solo se puede alterar el número gigante de la izquierda.",
                error_comun: "Poner un coeficiente 'en medio' de una molécula. (Ej. H 2 O). El número siempre va AL FRENTE y multiplica a toda la familia junta: 2H2O significa que hay 4 Hidrógenos y 2 Oxígenos.",
                actividad_casa: "El Volcán Exotérmico de Vinagre y Bicarbonato. Mezcla vinagre (ácido acético) con bicarbonato de sodio en un vaso. Hará espuma (liberación de Dióxido de Carbono). Pídele que toque el fondo del vaso, notará que se enfrió ligeramente. ¡Acaba de ver una reacción química endotérmica que libera un gas!"
            },
            guiaMaestro: {
                objetivo: "El alumno balancea ecuaciones químicas por el método de tanteo y comprende el concepto de mol como unidad de medida fundamental.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["balanceo de ecuaciones por tanteo", "que es un mol en quimica", "reacciones exotermicas y endotermicas"]
        },
        {
            bloque: 5,
            nombre: "Ácidos, bases y la Química en la vida",
            meses: "Abril – Junio",
            enClase: [
                "Concepto de Ácido y Base (Alcalino)",
                "Uso e interpretación de la escala de pH (0 al 14)",
                "Reacciones de neutralización (Ácido + Base = Sal + Agua)",
                "Importancia de los ácidos en el cuerpo y la lluvia ácida",
                "Macromoléculas (Carbohidratos, lípidos, proteínas) y petroquímica"
            ],
            guiaPapa: {
                intro: "Último bloque de Ciencias de toda la educación básica. Descubrirán que su estómago está lleno de ácido mortal, y que el jabón es exactamente lo contrario.",
                comoExplicar: [
                    "Escala de pH: Va del 0 al 14. El 7 es neutral (agua pura). Del 0 al 6 son los Ácidos (limón, vinagre, ácido de batería). Del 8 al 14 son las Bases o Alcalinos (jabón, cloro, limpiadores).",
                    "Ácido: Tiene un sabor agrio y derrite metales. Base: Tiene una textura resbaladiza como el jabón, y también quema la piel si es muy fuerte.",
                    "Neutralización: Si mezclas un ácido muy peligroso y una base muy peligrosa... ¡se anulan mutuamente y se convierten en agua con sal inofensiva!"
                ],
                truco: "Explica la acidez estomacal: Cuando comemos mucha salsa (ácido), nos arde el estómago. ¿Qué nos tomamos? Pepto Bismol o Leche de Magnesia (que son Bases/Alcalinos). Se juntan en el estómago y neutralizan el fuego. ¡Es Química médica casera!",
                error_comun: "Creer que 'más pH' significa 'más ácido'. Es al revés. pH muy bajo (1) es súper ácido. pH muy alto (14) no es ácido, es Alcalino (y también es peligroso).",
                actividad_casa: "Fabricando Indicador de pH: Hierve col morada (repollo morado) en agua durante 10 minutos. Saca el líquido morado oscuro. Échalo en vasos de plástico. Pon jugo de limón en uno (se volverá rojo neón = ácido). Pon bicarbonato en otro (se volverá azul/verde = base). ¡Han extraído un indicador de pH natural!"
            },
            guiaMaestro: {
                objetivo: "El alumno mide e interpreta el pH de sustancias cotidianas, explica las reacciones de neutralización y la química del cuerpo humano.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["escala de ph acidos y bases", "reaccion de neutralizacion", "quimica del cuerpo y lluvia acida"]
        }
    ]
};

const GEOGRAFIA_S3: MateriaContenido = {
    materia: "geografia",
    nombre: "Geografía (Transversal)",
    emoji: "🌍",
    color: "#06B6D4",
    bloques: [
        {
            bloque: 1,
            nombre: "Geopolítica y Medio Ambiente Global",
            meses: "Agosto – Junio",
            enClase: [
                "Nota: La SEP concentra Geografía en el 1° de Secundaria.",
                "Este módulo transversal refuerza competencias para el examen COMIPEMS.",
                "Geografía Política del Mundo Contemporáneo",
                "Impacto Ambiental Globalizado"
            ]
        }
    ]
};

const HISTORIA_S3: MateriaContenido = {
    materia: "historia",
    nombre: "Historia III (México Contemporáneo)",
    emoji: "🇲🇽",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "El Cardenismo y la institucionalización (1930-1940)",
            meses: "Agosto – Septiembre",
            enClase: [
                "El maximato: Plutarco Elías Calles y la guerra Cristera",
                "El gobierno de Lázaro Cárdenas: Reparto agrario masivo",
                "La expropiación petrolera (18 de marzo de 1938)",
                "Nacionalismo cultural (Muralismo: Rivera, Siqueiros, Orozco)",
                "Creación de instituciones educativas y obreras"
            ]
        },
        {
            bloque: 2,
            nombre: "El Milagro Mexicano (1940-1970)",
            meses: "Octubre – Noviembre",
            enClase: [
                "México en la Segunda Guerra Mundial (Escuadrón 201)",
                "Modelo de Sustitución de Importaciones (Fabricar todo en casa)",
                "El crecimiento de las ciudades (Urbanización rápida)",
                "El IMSS, ISSSTE, y la educación pública de masas",
                "La época de oro del cine mexicano y la identidad nacional"
            ]
        },
        {
            bloque: 3,
            nombre: "Crisis, autoritarismo y movimientos sociales",
            meses: "Diciembre – Enero",
            enClase: [
                "El movimiento estudiantil de 1968 y la masacre de Tlatelolco",
                "Agotamiento del modelo económico (Deuda externa impagable)",
                "La 'Guerra Sucia' (persecución a guerrillas y opositores)",
                "Terremoto de 1985: El nacimiento de la sociedad civil",
                "Crisis económicas de los años 80s (inflación descontrolada)"
            ]
        },
        {
            bloque: 4,
            nombre: "Transición democrática y Neoliberalismo",
            meses: "Febrero – Marzo",
            enClase: [
                "La venta de empresas del gobierno y entrada al Neoliberalismo",
                "La firma del TLCAN (Tratado de Libre Comercio con EE. UU.)",
                "El levantamiento Zapatista (EZLN en Chiapas) en 1994",
                "Creación del IFE (hoy INE) y la alternancia política (año 2000)",
                "La migración masiva como fenómeno económico"
            ]
        },
        {
            bloque: 5,
            nombre: "México en el Siglo XXI",
            meses: "Abril – Junio",
            enClase: [
                "La guerra contra el narcotráfico y la inseguridad",
                "Retos de la democracia moderna ciudadana",
                "Diversidad, feminismo y derechos de las minorías",
                "El papel de México en el T-MEC y la economía global",
                "Repaso general para examen de ingreso (COMIPEMS)"
            ]
        }
    ]
};

const FORMACION_S3: MateriaContenido = {
    materia: "formacion",
    nombre: "Formación Cívica y Ética III",
    emoji: "⚖️",
    color: "#8B5CF6",
    bloques: [
        {
            bloque: 1,
            nombre: "Decisiones, libertad y sexualidad responsable",
            meses: "Agosto – Septiembre",
            enClase: [
                "La libertad guiada por valores éticos universales",
                "Prevención de riesgos (adicciones, ITS, embarazo temprano)",
                "Elección consciente del bachillerato (plan de vida)"
            ]
        },
        {
            bloque: 2,
            nombre: "Desafíos de la humanidad moderna",
            meses: "Octubre – Noviembre",
            enClase: [
                "Pobreza, desigualdad extrema y migración forzada",
                "El deterioro ambiental globalizado",
                "Corresponsabilidad y participación en ONGs"
            ]
        },
        {
            bloque: 3,
            nombre: "El Estado Mexicano y las leyes",
            meses: "Diciembre – Enero",
            enClase: [
                "Mecanismos de control del poder (La Suprema Corte)",
                "Transparencia ciudadana y derecho a la información",
                "La Constitución y la defensa de los derechos humanos"
            ]
        },
        {
            bloque: 4,
            nombre: "Democracia y medios de comunicación",
            meses: "Febrero – Marzo",
            enClase: [
                "Influencia de los medios y redes en las decisiones políticas",
                "Participación social más allá del voto electoral",
                "Sentido de pertenencia comunitaria"
            ]
        },
        {
            bloque: 5,
            nombre: "Proyecto de vida ciudadana",
            meses: "Abril – Junio",
            enClase: [
                "Elaboración del proyecto de vida a corto, mediano y largo plazo",
                "Valores para enfrentar los retos del bachillerato",
                "Preparación integral ciudadana y académica"
            ]
        }
    ]
};

export const SECUNDARIA_3: GradoContenido = {
    grado: "secundaria-3",
    nombre: "3° Secundaria",
    emoji: "🎓",
    materias: {
        matematicas: MATEMATICAS_S3,
        espanol: ESPANOL_S3,
        ciencias: CIENCIAS_S3,
        historia: HISTORIA_S3,
        geografia: GEOGRAFIA_S3,
        formacion: FORMACION_S3,
        educacion_fisica: EDUCACION_FISICA_S3,
        artes: ARTES_S3
    }
};
