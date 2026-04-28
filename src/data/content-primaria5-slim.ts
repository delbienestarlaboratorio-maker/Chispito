// Base de datos de contenido "masticado" para papás y maestros
// Primaria 5° — Ciclo escolar 2025-2026 SEP México (Fase 5)

import type { GradoContenido, MateriaContenido } from './content-types';
import { PRIMARIA_3 } from './content-primaria3-slim';

const FORMACION_P3 = PRIMARIA_3.materias["formacion"] as MateriaContenido;
const EDUCACION_FISICA_P3 = PRIMARIA_3.materias["educacion_fisica"] as MateriaContenido;
const ARTES_P3 = PRIMARIA_3.materias["artes"] as MateriaContenido;

const LENGUAS_P5: MateriaContenido = {
    materia: "lenguas",
    nombre: "Lenguas Indígenas",
    emoji: "🗣️",
    color: "#9333EA",
    bloques: [
        { bloque: 1, nombre: "Tradiciones en mi lengua: Ch'ol", meses: "Todo el ciclo" },
        { bloque: 2, nombre: "Tradiciones en mi lengua: Maya", meses: "Todo el ciclo" },
        { bloque: 3, nombre: "Tradiciones en mi lengua: Náhuatl", meses: "Todo el ciclo" },
        { bloque: 4, nombre: "Tradiciones en mi lengua: Zapoteco", meses: "Todo el ciclo" },
        { bloque: 5, nombre: "Tradiciones en mi lengua: Mixteco", meses: "Todo el ciclo" }
    ]
};

const MATEMATICAS_P5: MateriaContenido = {
    materia: "matematicas",
    nombre: "Matemáticas",
    emoji: "📐",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Suma y resta de fracciones con distinto denominador",
            meses: "Agosto – Septiembre",
            enClase: [
                "Fracciones equivalentes avanzadas",
                "El mínimo común múltiplo (MCM) de forma intuitiva",
                "Suma y resta de fracciones heterogéneas (distinto denominador)",
                "Resolución de problemas de reparto con fracciones",
                "Conversión de fracciones mixtas a impropias"
            ],
            guiaPapa: {
                intro: "Llegó el 'coco' de las matemáticas: fracciones con apellidos diferentes. Aquí los niños aprenderán a usar la lógica para que una mitad y un tercio puedan sumarse sin explotar.",
                comoExplicar: [
                    "No puedes sumar 1/2 y 1/3 directamente. Es como intentar sumar 1 auto y 1 bicicleta y decir que tienes '2 autobici'. Tienes que convertirlos a la misma familia (Sextos).",
                    "El 'truco de la mariposa' es útil, pero enséñales primero por qué funciona: estamos multiplicando arriba y abajo por el mismo número para disfrazar a la fracción.",
                    "Una fracción mixta (1 entero y 1/2) es como tener 1 pizza entera y media en otra caja. Convertirla a impropia es simplemente cortar la pizza entera en mitades (quedan 3/2)."
                ],
                truco: "La técnica del 'Traductor': Diles que el número de abajo es el idioma. Si uno habla 'Medios' y otro habla 'Tercios', necesitan un traductor. El traductor es un número que esté en la tabla de multiplicar de los dos (el 6).",
                error_comun: "Sumar el de arriba con el de arriba y el de abajo con el de abajo (ej. 1/2 + 1/3 = 2/5). Este error se evita si usas dibujos de pizzas siempre antes de pasar a los números.",
                actividad_casa: "La Pizzería Matemática: Corta 3 círculos de papel. Uno en mitades, otro en tercios y otro en sextos. Pídele que intente empalmar el tercio y el medio. No encajan. Luego pídele que use los sextos para cubrir exactamente un tercio y un medio. ¡Lo verán con sus propios ojos!"
            },
            guiaMaestro: {
                objetivo: "El alumno resuelve problemas de suma y resta de fracciones con distinto denominador mediante la obtención de fracciones equivalentes.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["suma de fracciones distinto denominador", "fracciones mixtas e impropias", "matematicas quinto primaria"]
        },
        {
            bloque: 2,
            nombre: "División con cociente decimal",
            meses: "Octubre – Noviembre",
            enClase: [
                "Repaso de la división con galera (afuera y adentro)",
                "El punto decimal en la división (bajar ceros infinitos)",
                "División de un número decimal entre un entero",
                "Multiplicación por 10, 100 y 1000 recorriendo el punto",
                "Problemas de dinero con centavos"
            ],
            guiaPapa: {
                intro: "Las matemáticas se vuelven exactas. Ya no hay 'residuos' ni 'sobrantes'; ahora usamos el punto decimal para repartir hasta la última migaja.",
                comoExplicar: [
                    "El punto decimal es como un 'botón mágico'. Cuando lo aprietas (lo subes), te regala un cero invisible para que sigas dividiendo.",
                    "Multiplicar por 10, 100 o 1000 es el truco más fácil del mundo: no hay que calcular nada, solo mover el punto hacia la derecha los mismos lugares que ceros tenga el número.",
                    "Dividir entre 10 es lo mismo, pero moviendo el punto a la izquierda."
                ],
                truco: "El 'Salto de la Rana': Cuando multipliques por 100, la rana (el punto decimal) da dos saltos a la derecha. Si el número era 5.2, la rana salta el 2 y luego salta un espacio vacío. Ese espacio se rellena con un huevo (un cero). Resultado: 520.",
                error_comun: "Al dividir, olvidar subir el punto decimal exactamente en la misma dirección (derecho hacia arriba) o poner el punto y no bajar el cero mágico. Usa papel cuadriculado.",
                actividad_casa: "El Ticket del Supermercado: Dale el ticket de compra del súper. Elijan un artículo que venga en paquete (ej. 6 jugos que costaron $45.50). Pídele que haga la división con punto decimal para descubrir cuánto costó exactamente CADA juguito suelto."
            },
            guiaMaestro: {
                objetivo: "El alumno resuelve problemas que implican dividir números naturales con cociente decimal, así como dividir y multiplicar decimales por 10, 100 y 1000.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["division con punto decimal", "multiplicar por 10 100 1000", "matematicas 5 primaria"]
        },
        {
            bloque: 3,
            nombre: "Áreas complejas y unidades de medida",
            meses: "Diciembre – Enero",
            enClase: [
                "Fórmula del área del triángulo (b x h / 2)",
                "Fórmula del área del rombo, romboide y trapecio",
                "El kilogramo y la tonelada",
                "Litros y mililitros (medidas de capacidad)",
                "Relación entre perímetro y área"
            ],
            guiaPapa: {
                intro: "Los niños se convierten en arquitectos. Entenderán por qué todas las figuras geométricas extrañas en realidad son cuadrados y rectángulos disfrazados.",
                comoExplicar: [
                    "¿Por qué el triángulo se divide entre 2? Porque todo triángulo es exactamente la MITAD de un cuadrado o un rectángulo.",
                    "El trapecio es como un rectángulo al que le cortaron las esquinas. Si las pegas del otro lado, vuelve a ser rectángulo.",
                    "1 Tonelada son 1000 kilos. Es el peso de un rinoceronte pequeño.",
                    "1 Litro son 1000 mililitros. Una botella pequeña de agua suele tener 500 ml (medio litro)."
                ],
                truco: "Dibuja un rectángulo en una hoja. Traza una diagonal de esquina a esquina y córtalo. ¡Tienes dos triángulos idénticos! Así nunca olvidarán por qué la fórmula del triángulo lleva un '/ 2' al final.",
                error_comun: "Confundir el Área (lo de adentro) con el Perímetro (la barda de afuera). Si sumas los lados para sacar el área, reprobarás. El área siempre es multiplicación.",
                actividad_casa: "El Arquitecto de la Sala: Dale una cinta métrica y pídele que mida el largo y ancho de la sala. Que aplique la fórmula del rectángulo (base x altura) y te diga cuántos 'metros cuadrados' de piso tienen."
            },
            guiaMaestro: {
                objetivo: "El alumno deduce, a partir de transformaciones geométricas, las fórmulas del área del triángulo, rombo y trapecio, y utiliza conversiones de capacidad y peso.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["area del triangulo y rombo", "medidas de capacidad litros", "geometria 5 primaria"]
        },
        {
            bloque: 4,
            nombre: "Porcentajes básicos y gráficas",
            meses: "Febrero – Marzo",
            enClase: [
                "El concepto de porcentaje (%) como una fracción de 100",
                "Cálculo rápido del 10%, 25% y 50%",
                "Aplicación de descuentos en problemas de compra",
                "Interpretación de gráficas circulares (de pastel)",
                "Promedio (media aritmética)"
            ],
            guiaPapa: {
                intro: "Matemáticas para la vida diaria. ¡Nunca más te engañarán en las rebajas! Aprenderán a calcular descuentos y a leer los datos de las encuestas.",
                comoExplicar: [
                    "Por ciento (%) significa, literalmente, 'por cada 100'. Si un zapato tiene 20% de descuento, te perdonan 20 pesos de cada billete de 100 que cuesta.",
                    "El 50% es la mitad exacta. El 25% es la mitad de la mitad.",
                    "El 10% es el más fácil: solo le quitas un cero al número. (El 10% de 300 es 30).",
                    "El Promedio es nivelar el terreno. Si tú tienes 10 dulces y yo 2, los juntamos (12) y nos los repartimos parejo (6). Ese es el promedio."
                ],
                truco: "Para calcular el 20%, primero enséñale a sacar el 10% (quitando un cero o moviendo el punto) y luego solo suma ese resultado dos veces. Si cuesta $400, el 10% es 40. Entonces el 20% es 40+40 = 80.",
                error_comun: "En los problemas de descuentos, calcular el descuento y darlo como resultado final, sin restárselo al precio original. Recuérdale: 'Ese es el dinero que te ahorraste, no lo que vas a pagar. ¡Réstalo!'",
                actividad_casa: "Cacería de Ofertas: Dale un folleto de supermercado o tienda departamental donde vengan descuentos (ej. 30% en chamarras). Pídele que calcule en un cuaderno cuánto costaría realmente la chamarra en caja."
            },
            guiaMaestro: {
                objetivo: "El alumno calcula porcentajes usando equivalencias de fracciones (1/2, 1/4, 1/10) y resuelve problemas de descuento y gráficas circulares.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["porcentajes y descuentos primaria", "graficas de pastel", "como sacar el promedio escolar"]
        },
        {
            bloque: 5,
            nombre: "Proporcionalidad y plano cartesiano",
            meses: "Abril – Junio",
            enClase: [
                "Lectura y ubicación de coordenadas en el plano cartesiano (X, Y)",
                "Proporcionalidad con valor unitario (la regla de tres sencilla)",
                "Construcción de cuerpos geométricos (prismas y pirámides)",
                "Diferencia entre prisma y pirámide",
                "Problemas de factor constante"
            ],
            guiaPapa: {
                intro: "Cerramos el año leyendo mapas matemáticos y entendiendo el volumen 3D. Las matemáticas dejan de ser planas y cobran vida.",
                comoExplicar: [
                    "El plano cartesiano es como jugar 'Batalla Naval'. Primero caminas por el piso (eje X) y luego subes por la pared (eje Y).",
                    "Para resolver problemas de proporcionalidad, siempre busca 'cuánto vale UNO'. Si 3 paletas cuestan 15, adivina cuánto vale 1 (5). Ya sabiendo eso, puedes calcular cuántas paletas quieras.",
                    "Un prisma es como un edificio cuadrado, tiene el techo igual que el piso. Una pirámide siempre termina en una punta afilada (cúspide)."
                ],
                truco: "La regla de oro de las coordenadas (X, Y): 'Primero caminas hacia el elevador, y luego subes en él'. Muchos niños se equivocan y suben primero.",
                error_comun: "Confundir las coordenadas (3, 5) con (5, 3). Haz mucho énfasis en que el orden de los números es una ley que no se puede romper.",
                actividad_casa: "Batalla Naval de Coordenadas: Dibuja dos cuadrículas de 10x10 en hojas de papel (numera los ejes del 1 al 10). Que cada quien dibuje 3 'barquitos' en su hoja y jueguen a atacarse cantando coordenadas (Ej. '¡Ataque en 4, 7!')."
            },
            guiaMaestro: {
                objetivo: "El alumno ubica puntos en el primer cuadrante del plano cartesiano y resuelve problemas de valor faltante usando el valor unitario.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["plano cartesiano niños", "proporcionalidad y valor unitario", "prismas y piramides"]
        }
    ]
};

const ESPANOL_P5: MateriaContenido = {
    materia: "espanol",
    nombre: "Español",
    emoji: "📚",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "Relatos históricos y el orden cronológico",
            meses: "Agosto – Septiembre",
            enClase: [
                "Diferencia entre un cuento y un relato histórico",
                "Uso de adverbios de tiempo (primero, durante, después, finalmente)",
                "Verbos en pretérito (comió) y copretérito (comía)",
                "Causa y consecuencia en la historia",
                "Redacción de un evento histórico de su comunidad"
            ],
            guiaPapa: {
                intro: "Los niños aprenden a ser historiadores. Descubrirán que la historia no es una lista de fechas aburridas, sino una cadena de chismes y eventos conectados.",
                comoExplicar: [
                    "El relato histórico cuenta algo que de verdad pasó. No hay dragones ni magia, pero sí héroes y batallas.",
                    "La diferencia entre Pretérito y Copretérito: 'Ayer yo fui al parque' (Pretérito, ya acabó y fue rápido). 'Cuando era niño yo iba al parque' (Copretérito, es un recuerdo largo que duraba mucho tiempo).",
                    "El Copretérito siempre termina en -aba (cantaba) o -ía (comía).",
                    "Causa es el empujón, Consecuencia es la caída."
                ],
                truco: "El truco de la foto vs la película. El Pretérito ('rompió') es como tomar una foto, un momento exacto. El Copretérito ('rompía') es como ver un video en cámara lenta, una acción que duraba mucho.",
                error_comun: "Olvidar los acentos en los verbos en pasado. Regla de oro: El pretérito en tercera persona (él/ella) casi siempre lleva acento en la última letra: comió, saltó, lloró.",
                actividad_casa: "El Relato de mis Abuelos: Pídele que entreviste a sus abuelos sobre un evento histórico que ellos vivieron (ej. El sismo del 85). Que redacte una historia de una cuartilla usando 'primero', 'después' y 'finalmente', subrayando los verbos en pasado."
            },
            guiaMaestro: {
                objetivo: "El alumno redacta relatos históricos utilizando nexos temporales y distinguiendo el uso del pretérito y copretérito para narrar acciones terminadas o continuas.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["relato historico 5 primaria", "preterito y copreterito", "adverbios de tiempo"]
        },
        {
            bloque: 2,
            nombre: "Textos argumentativos y artículos de opinión",
            meses: "Octubre – Noviembre",
            enClase: [
                "Estructura del texto argumentativo (Tesis, Argumentos, Conclusión)",
                "Diferenciar entre datos objetivos y opiniones personales",
                "El debate: cómo defender una idea con respeto",
                "Uso de conectores lógicos (por lo tanto, sin embargo, en mi opinión)",
                "Identificación de prejuicios y estereotipos"
            ],
            guiaPapa: {
                intro: "Se acabó el decir 'porque sí'. Ahora los niños aprenderán a usar la palabra como espada y escudo para defender lo que piensan usando la lógica.",
                comoExplicar: [
                    "Una Tesis no es un libro aburrido, es la idea principal que quieres defender (ej. 'Los recreos deberían ser más largos').",
                    "Un argumento es el 'POR QUÉ'. Pero no se vale decir 'porque yo quiero', tienes que dar datos reales (ej. 'Porque los médicos dicen que necesitamos más sol').",
                    "Debatir no es pelear ni gritar, es un juego de ajedrez con palabras.",
                    "Si un artículo no tiene datos comprobables, es solo la opinión de alguien."
                ],
                truco: "La Hamburguesa del Argumento: El pan de arriba es tu idea (Tesis). La carne, lechuga y tomate son tus 3 pruebas o razones (Argumentos). El pan de abajo es el resumen de todo (Conclusión). Si falta la carne, ¡tu idea está vacía!",
                error_comun: "Elevar la voz o enojarse al perder un argumento. Enséñales que cambiar de opinión al escuchar un argumento mejor de otra persona no es perder, es volverse más inteligente.",
                actividad_casa: "El Debate de la Cena: Propón un tema polémico para la edad (ej. '¿Deberían prohibirse los videojuegos entre semana?'). Toma tú la postura a favor y él en contra. Dénse 2 minutos para hablar cada quien usando conectores lógicos ('Sin embargo...', 'Por lo tanto...')."
            },
            guiaMaestro: {
                objetivo: "El alumno produce textos argumentativos básicos, fundamentando sus opiniones con datos y utilizando conectores lógicos.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["textos argumentativos niños", "como debatir primaria", "tesis y argumentos 5"]
        },
        {
            bloque: 3,
            nombre: "Poesía, figuras retóricas y declamación",
            meses: "Diciembre – Enero",
            enClase: [
                "Estructura del poema: Verso y Estrofa",
                "La rima consonante y asonante",
                "Figuras retóricas (metáfora, símil, aliteración)",
                "Sentimiento y tono al leer poesía (declamación)",
                "Creación de poemas libres o haikus"
            ],
            guiaPapa: {
                intro: "La poesía es la música de las palabras. Aquí desarrollan la imaginación extrema al comparar cosas que normalmente no se parecen en nada.",
                comoExplicar: [
                    "Un verso es cada 'renglón' del poema. Una estrofa es el 'párrafo' entero.",
                    "Símil es usar la palabra COMO. 'Tus ojos son COMO estrellas'.",
                    "Metáfora es más agresiva, quitas el 'como' y lo afirmas. 'Tus ojos SON estrellas'.",
                    "Aliteración es hacer que la lengua trabe repitiendo letras (Tres tristes tigres...)."
                ],
                truco: "Para entender la poesía, no trates de buscarle la lógica matemática. Pídele a tu hijo que cierre los ojos mientras le lees un poema corto de Rubén Darío o Gabriela Mistral, y que te diga 'de qué color se imaginó el poema'.",
                error_comun: "Leer un poema con prisa o con el mismo tono que un texto de historia. Enseña que los poemas respiran; las pausas al final de cada verso son obligatorias aunque no haya coma.",
                actividad_casa: "Buscadores de Metáforas: Caminen por la casa o el parque y jueguen a hacer metáforas visuales. 'Esa nube es un algodón de azúcar gigante'. 'El río es una serpiente de plata'. Que las anote en una libreta."
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce el sentido figurado en poemas e identifica recursos literarios como la metáfora y el símil para expresar sentimientos.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["poesia 5 primaria", "metafora y simil niños", "verso estrofa rima"]
        },
        {
            bloque: 4,
            nombre: "El artículo de divulgación científica",
            meses: "Febrero – Marzo",
            enClase: [
                "Propósito de la divulgación: hacer fácil lo difícil",
                "Elementos del artículo (título, subtítulos, ilustraciones, glosario)",
                "El lenguaje objetivo vs el lenguaje literario",
                "Citas bibliográficas y referencias",
                "Interpretación de cuadros sinópticos y mapas conceptuales"
            ],
            guiaPapa: {
                intro: "Los niños se vuelven traductores de la ciencia. Aprenderán a tomar información de científicos aburridos y explicarla para que cualquiera la entienda.",
                comoExplicar: [
                    "Divulgar significa 'repartir al pueblo'. Es contar un chisme científico pero que sea verdad.",
                    "Un glosario es como un mini-diccionario al final del texto que explica las palabras raras (como 'fotosíntesis').",
                    "El mapa conceptual es como las ramas de un árbol: arriba pones lo más importante, y de ahí caen las ramitas con detalles."
                ],
                truco: "Diles que un artículo científico NO debe tener sentimientos. No pueden escribir 'el león es muy malo porque come cebras', deben escribir 'el león es un carnívoro depredador'.",
                error_comun: "Olvidar de dónde sacaron la información. Inculca desde ahora que usar información de alguien más sin decir su nombre (Citar) se llama plagio y es robar ideas.",
                actividad_casa: "El Científico del Hogar: Que elija cómo funciona algo simple en casa (el microondas, o por qué hace burbujas el jabón). Que lo investigue y haga en una cartulina un artículo de divulgación con un dibujo y subtítulos para explicarlo a la familia."
            },
            guiaMaestro: {
                objetivo: "El alumno lee, comprende y produce artículos de divulgación científica empleando cuadros sinópticos, lenguaje formal y glosario.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["articulo de divulgacion cientifica", "mapas conceptuales primaria", "que es un glosario"]
        },
        {
            bloque: 5,
            nombre: "La carta formal, correos y formularios",
            meses: "Abril – Junio",
            enClase: [
                "Diferencia entre carta formal e informal",
                "Estructura formal: Lugar y fecha, destinatario, saludo, cuerpo, despedida, firma",
                "Netiqueta (reglas de educación en correos electrónicos e internet)",
                "Llenado correcto de formularios y formatos oficiales",
                "Abreviaturas formales (Atte., Sr., Lic.)"
            ],
            guiaPapa: {
                intro: "Un bloque hiper-práctico. Aunque parezca antiguo, saber escribir un correo formal y llenar un formato sin errores es algo que muchos adultos aún no saben hacer bien.",
                comoExplicar: [
                    "A tus amigos les escribes por WhatsApp. Al presidente municipal o a la directora de la escuela, le escribes una Carta Formal.",
                    "En lo formal no se usa 'Hola qué tal', se usa 'Estimado(a)' o 'A quien corresponda'.",
                    "Llenar un formulario (como el pasaporte o una inscripción) requiere letra de molde y poner mucha atención a no equivocarse de casilla.",
                    "Netiqueta es no escribir TODO EN MAYÚSCULAS en internet, porque significa que ESTÁS GRITANDO."
                ],
                truco: "Hazles memorizar la estructura de la carta tocándose el cuerpo: Cabeza (Lugar/Fecha), Ojos (Destinatario), Boca (Saludo), Pecho (Cuerpo de la carta), Rodillas (Despedida), Pies (Firma).",
                error_comun: "Poner la firma arriba o mezclar lenguaje formal con groserías o modismos juveniles ('Estimado director, chéquese esto...').",
                actividad_casa: "La Carta a la Autoridad: Pídele que elija un problema real de su colonia (un bache, luz fundida, perros callejeros) y que redacte una carta formal dirigida al Ayuntamiento pidiendo la solución. Si queda bien, ¡ayúdalo a enviarla por correo de verdad!"
            },
            guiaMaestro: {
                objetivo: "El alumno identifica las características de cartas formales y correos electrónicos, y comprende la función del llenado de formularios.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["carta formal 5 primaria", "partes de una carta", "llenado de formularios niños"]
        }
    ]
};

const CIENCIAS_P5: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias Naturales",
    emoji: "🔬",
    color: "#10B981",
    bloques: [
        {
            bloque: 1,
            nombre: "Dieta, obesidad y adicciones",
            meses: "Agosto – Septiembre",
            enClase: [
                "Características de una dieta correcta (suficiente, equilibrada, variada)",
                "Causas y riesgos del sobrepeso, obesidad y anorexia",
                "Peligros del tabaco, alcohol y drogas en el cuerpo",
                "El impacto del azúcar en la sangre",
                "Toma de decisiones responsables sobre la salud"
            ],
            guiaPapa: {
                intro: "Entramos a un tema delicado y vital. A esta edad los niños empiezan a tomar decisiones solos sobre lo que compran en la tienda y a escuchar sobre adicciones en la calle.",
                comoExplicar: [
                    "Una caloría no es un bicho, es 'gasolina' para el cuerpo. Si le pones más gasolina de la que gasta, el cuerpo la guarda como grasa.",
                    "El azúcar en exceso actúa en el cerebro igual que una droga: te da energía de golpe, pero luego te deja cansado y queriendo más.",
                    "El alcohol y el tabaco destruyen el hígado y los pulmones (los filtros que limpian nuestro cuerpo).",
                    "La anorexia es un problema donde el espejo miente y el cerebro cree que está gordo aunque no sea así."
                ],
                truco: "Enséñale a leer las etiquetas hexagonales de advertencia en los alimentos. Jueguen en el súper a 'evitar los sellos': si tiene 3 sellos, se regresa al estante.",
                error_comun: "Prohibirle tajantemente la comida chatarra sin explicar el porqué, lo que genera deseo por rebeldía. Explica la química: 'Esos Cheetos tienen sal artificial que confunde a tu cerebro para que nunca dejes de comerlos'.",
                actividad_casa: "El Experimento del Refresco: Si pueden, hiervan medio vaso de refresco de cola en una olla vieja a fuego lento hasta que se evapore el agua. Lo que queda en el fondo es el alquitrán negro de azúcar quemada. Al verlo, no querrán tomar refresco en mucho tiempo."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza sus necesidades nutricionales y comprende los graves daños físicos y sociales que ocasionan el consumo de sustancias adictivas.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["dieta correcta primaria", "prevencion de adicciones niños", "obesidad infantil 5"]
        },
        {
            bloque: 2,
            nombre: "Reproducción humana y desarrollo",
            meses: "Octubre – Noviembre",
            enClase: [
                "Cambios físicos y emocionales en la pubertad",
                "Aparatos reproductores masculino y femenino (anatomía)",
                "El ciclo menstrual de manera biológica",
                "Fecundación y desarrollo del embarazo",
                "Respeto a las diferencias de maduración entre compañeros"
            ],
            guiaPapa: {
                intro: "Respira hondo, papá y mamá. Llegó el momento de la educación sexual biológica. Si no se los explicas tú o la escuela, lo buscarán en internet de formas equivocadas.",
                comoExplicar: [
                    "La pubertad es como una remodelación de una casa: hay polvo, ruido, y las hormonas están rompiendo paredes. Es normal sentirse raro o llorar sin razón.",
                    "Llama a las partes del cuerpo por su nombre médico (pene, vulva, útero). Usar apodos genera vergüenza.",
                    "La menstruación es el cuerpo preparando 'una cunita' de sangre en el útero cada mes por si llega un bebé. Si no llega, el cuerpo limpia la cunita para el mes siguiente.",
                    "La fecundación es la unión biológica de un óvulo y un espermatozoide."
                ],
                truco: "Aborda estos temas en el coche. Manejando, sin tener que hacer contacto visual directo, los niños suelen soltarse a preguntar sus dudas íntimas sin tanta pena.",
                error_comun: "Hacer caras raras, reírse o cambiar de tema cuando pregunten algo directo. La naturalidad con la que tú respondas definirá si confiarán en ti en la adolescencia o no.",
                actividad_casa: "Caja de Preguntas Anónimas: Pon una caja de zapatos cerrada con una ranura en la casa. Diles que si tienen una pregunta que les dé demasiada pena hacer en voz alta, la escriban en un papel, y el fin de semana la responden todos juntos."
            },
            guiaMaestro: {
                objetivo: "El alumno describe los aparatos reproductores, explica la fecundación y comprende los cambios biológicos y emocionales de la pubertad.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["reproduccion humana primaria", "pubertad y cambios niños", "aparatos reproductores 5"]
        },
        {
            bloque: 3,
            nombre: "Biodiversidad, agua y mezclas",
            meses: "Diciembre – Enero",
            enClase: [
                "¿Por qué México es un país megadiverso?",
                "El agua como disolvente universal",
                "Mezclas homogéneas (no se ven los ingredientes) y heterogéneas (sí se ven)",
                "Métodos de separación de mezclas (filtración, imantación, decantación)",
                "Contaminación del agua por mezclas tóxicas"
            ],
            guiaPapa: {
                intro: "Química básica de cocina y cuidado del medio ambiente. Entenderán por qué es tan difícil limpiar un río cuando ya le tiraron basura o aceite.",
                comoExplicar: [
                    "Homogénea significa 'igual'. Si haces agua de limón con azúcar y la revuelves bien, ya no puedes ver dónde está el azúcar. (Homogénea).",
                    "Heterogénea es como una ensalada o una pizza: ves perfectamente el tomate, el queso y la masa separada.",
                    "Separar mezclas es el trabajo de los científicos. Con un filtro de café separas el agua de la arena. Con un imán separas la tierra de clavos de hierro.",
                    "El agua disuelve casi todo, por eso se ensucia tan fácil con los químicos de las fábricas."
                ],
                truco: "Diles la regla del aceite y el agua: El aceite siempre se va para arriba porque es 'menos denso' (menos pesado) que el agua. Nunca se podrán hacer homogéneos por más que los agites.",
                error_comun: "Pensar que porque el agua se ve 'transparente' está limpia. Explícales que los peores venenos (y bacterias) pueden disolverse de manera homogénea y ser invisibles.",
                actividad_casa: "El Laboratorio del Fregadero: Dales 4 vasos de agua. En uno que pongan sal (homogénea), en otro tierra (heterogénea y decantación), en otro aceite, y en el último clips metálicos (imantación). Luego pídeles que intenten separar cada mezcla con diferentes herramientas de la cocina."
            },
            guiaMaestro: {
                objetivo: "El alumno distingue mezclas homogéneas y heterogéneas, y deduce métodos físicos para separarlas, reflexionando sobre la contaminación del agua.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["mezclas homogeneas y heterogeneas", "metodos de separacion de mezclas", "el agua como disolvente"]
        },
        {
            bloque: 4,
            nombre: "Fuerza, gravedad y sonido",
            meses: "Febrero – Marzo",
            enClase: [
                "La fuerza de gravedad (peso vs masa)",
                "Propagación del sonido en sólidos, líquidos y gases",
                "La velocidad de la luz vs la velocidad del sonido",
                "El uso de máquinas simples (palanca, polea, plano inclinado)",
                "Aparato auditivo humano (cómo escuchamos)"
            ],
            guiaPapa: {
                intro: "Física pura que parece magia. Aprenderán por qué las cosas caen, por qué los astronautas flotan y cómo los constructores de pirámides movían rocas gigantes sin grúas.",
                comoExplicar: [
                    "La masa es de qué estás hecho (carne y hueso). El peso es qué tan fuerte te jala el planeta hacia el suelo (Gravedad). En la Luna tendrías la misma masa, pero pesarías poquitito.",
                    "El sonido viaja por ondas invisibles que hacen vibrar el aire. Si no hay aire (como en el espacio sideral), no hay sonido. ¡Las explosiones de las películas en el espacio son mentira!",
                    "Una palanca es usar un palo largo apoyado en una piedra para levantar un coche pesado. 'Dame un punto de apoyo y moveré el mundo'."
                ],
                truco: "El truco del relámpago: La luz es lo más rápido del universo. El sonido es lento. Cuando vean un relámpago, cuenten los segundos ('un misisipi, dos misisipi...') hasta que escuchen el trueno. Cada 3 segundos significa que la tormenta está a 1 Kilómetro de distancia.",
                error_comun: "Confundir Masa con Peso. Siempre recuérdales la paradoja: ¿Qué pesa más, un kilo de plumas o un kilo de plomo? Pesan igual, pero el de plumas tiene mucho más volumen.",
                actividad_casa: "Teléfono de Vasos y Cuerda: Construyan el clásico teléfono atando dos vasos de plástico con un hilo largo y tenso. Explícale que el sonido (su voz) está viajando en forma de vibración a través del hilo sólido muchísimo mejor que por el aire."
            },
            guiaMaestro: {
                objetivo: "El alumno describe la fuerza de gravedad, explica cómo se propaga el sonido en distintos medios y reconoce el funcionamiento de máquinas simples.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["fuerza de gravedad primaria", "maquinas simples polea palanca", "propagacion del sonido niños"]
        },
        {
            bloque: 5,
            nombre: "El Sistema Solar y la tecnología espacial",
            meses: "Abril – Junio",
            enClase: [
                "Componentes del Sistema Solar (Sol, 8 planetas, lunas, asteroides)",
                "Planetas interiores (rocosos) y exteriores (gaseosos)",
                "Satélites naturales vs satélites artificiales",
                "La exploración espacial (telescopios, sondas, estaciones espaciales)",
                "Impacto de la ciencia espacial en la vida diaria (GPS, internet)"
            ],
            guiaPapa: {
                intro: "Viajamos al espacio para cerrar el año. Descubrirán lo pequeños que somos en el universo y la genialidad tecnológica que nos permite ver más allá de las estrellas.",
                comoExplicar: [
                    "El Sol es una estrella gigante, no es un planeta. Su gravedad es el lazo invisible que mantiene a todos girando a su alrededor.",
                    "Los primeros 4 planetas (donde estamos) son bolas de roca. Los últimos 4 (como Júpiter) son bolas gigantescas de gas venenoso y frío.",
                    "Plutón fue 'despedido' de ser planeta porque es muy pequeñito, ahora es un planeta enano.",
                    "Un satélite artificial es un robot orbitando la Tierra. Gracias a ellos tienes internet, Google Maps y la televisión."
                ],
                truco: "Regla mnemotécnica para el orden de los planetas: 'Mi Vieja Tía Marta Jamás Supo Untar Nada'. (Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano, Neptuno).",
                error_comun: "Creer que las estrellas tienen forma de 'picos' (como se dibujan ⭐️). Explícales que todas las estrellas son esferas de fuego redondo como nuestro Sol.",
                actividad_casa: "El Sistema Solar a Escala en la Calle: Usen una pelota de basquetbol como el Sol en la banqueta. Para que la escala sea real, la Tierra sería la cabeza de un alfiler a ¡25 metros de distancia! Y Júpiter una canica a más de 100 metros. Así dimensionarán el enorme vacío del espacio."
            },
            guiaMaestro: {
                objetivo: "El alumno describe los componentes del Sistema Solar, diferencia los cuerpos celestes y valora la importancia de los satélites artificiales en las telecomunicaciones.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["el sistema solar 5 primaria", "planetas rocosos y gaseosos", "satelites artificiales"]
        }
    ]
};

const HISTORIA_P5: MateriaContenido = {
    materia: "historia",
    nombre: "Historia de México II",
    emoji: "🏛️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "Los primeros años de México Independiente",
            meses: "Agosto – Septiembre",
            enClase: [
                "Consumación de la Independencia (Iturbide y Guerrero, 1821)",
                "El país en ruinas: pobreza y falta de gobierno",
                "Las luchas entre Federalistas y Centralistas",
                "La pérdida de Texas",
                "Guerra de los Pasteles y primeros conflictos con Francia"
            ],
            guiaPapa: {
                intro: "Continuamos donde nos quedamos en cuarto. México por fin es libre de España, ¿y ahora qué? Aquí los niños ven que el inicio de nuestro país fue un completo caos político y económico.",
                comoExplicar: [
                    "Ganar la guerra no nos hizo ricos. Los campos estaban quemados, las minas inundadas y nadie sabía cómo gobernar un país nuevo.",
                    "Centralistas: Querían que todo el dinero y el poder se quedaran en la Capital (Ciudad de México).",
                    "Federalistas: Querían que cada Estado (como Jalisco o Veracruz) tomara sus propias decisiones (como somos hoy).",
                    "Texas se perdió porque dejamos que muchos estadounidenses vivieran ahí gratis, y un día simplemente dijeron 'ya no somos mexicanos'."
                ],
                truco: "Compara el nacimiento de México con un niño que se va de la casa de sus padres (España) a los 18 años. Al principio es libre, pero no tiene dinero, no sabe cocinar y todos se pelean en su departamento.",
                error_comun: "Pensar que la Guerra de los Pasteles fue una guerra donde se lanzaban comida. Aclara que fue una invasión de Francia a Veracruz porque el gobierno mexicano no le quería pagar los daños a un panadero francés.",
                actividad_casa: "Debate Familiar (Centralistas vs Federalistas): A la hora de la comida, tú eres centralista (tú decides qué come toda la casa, a qué hora se duermen, qué ven en la TV). Tu hijo es federalista (quiere que cada quien elija su propia comida y horario). ¡Vean quién tiene mejores argumentos!"
            },
            guiaMaestro: {
                objetivo: "El alumno analiza los problemas económicos, sociales y políticos de México tras la consumación de la independencia y las primeras invasiones extranjeras.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["mexico independiente", "federalistas y centralistas", "guerra de los pasteles"]
        },
        {
            bloque: 2,
            nombre: "La invasión de Estados Unidos y la Reforma",
            meses: "Octubre – Noviembre",
            enClase: [
                "Guerra con Estados Unidos (1846-1848) y la pérdida de medio territorio",
                "Los Niños Héroes del Castillo de Chapultepec",
                "La Revolución de Ayutla",
                "Benito Juárez y las Leyes de Reforma",
                "Separación de la Iglesia y el Estado"
            ],
            guiaPapa: {
                intro: "El capítulo más doloroso y transformador. México pierde la mitad de su tamaño, pero gracias a Benito Juárez, nace el país moderno con leyes justas.",
                comoExplicar: [
                    "Estados Unidos quería crecer hasta el Océano Pacífico, así que nos invadió y nos obligó a venderles California, Nuevo México y Arizona.",
                    "Las Leyes de Reforma fueron un corte de tijera gigante: Antes, la Iglesia cobraba impuestos, casaba a la gente y llevaba los panteones. Juárez dijo: 'Eso es trabajo del Gobierno'.",
                    "Juárez fue el primer presidente indígena zapoteca de México. Estudió leyes aunque de niño era pastor de ovejas."
                ],
                truco: "Dibuja un mapa de México actual e inclúyele arriba todo el territorio de Estados Unidos hasta Oregón. Diles: 'Así de inmenso era México'. Visualizar la pérdida del 50% del mapa los impactará muchísimo.",
                error_comun: "Enseñar a los Niños Héroes como un mito intocable o como los únicos que pelearon. Es mejor enfocarse en que eran adolescentes reales, cadetes militares, defendiendo su escuela ante el ejército más poderoso de América.",
                actividad_casa: "El Juez Benito Juárez: Disfracen a tu hijo con un traje o toga negra (una chamarra). Enséñale la frase 'El respeto al derecho ajeno es la paz'. Planteale problemas de hermanos o amigos y pídele que dé un 'veredicto' como juez imparcial."
            },
            guiaMaestro: {
                objetivo: "El alumno reflexiona sobre las causas y consecuencias de la guerra con Estados Unidos y valora la importancia de las Leyes de Reforma para la laicidad del Estado.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["guerra con estados unidos", "leyes de reforma benito juarez", "perdida de territorio mexicano"]
        },
        {
            bloque: 3,
            nombre: "La intervención francesa y el Imperio",
            meses: "Diciembre – Enero",
            enClase: [
                "La suspensión de pagos de la deuda externa",
                "La Batalla de Puebla (5 de mayo de 1862)",
                "Maximiliano de Habsburgo y el Segundo Imperio",
                "El gobierno itinerante de Benito Juárez",
                "El triunfo de la República (1867)"
            ],
            guiaPapa: {
                intro: "Europa ataca de nuevo. Un bloque fascinante donde un archiduque de Austria viene a intentar gobernar México y el presidente Juárez tiene que huir en una carroza negra.",
                comoExplicar: [
                    "Juárez estaba en bancarrota y le dijo a Europa: 'No tengo dinero para pagarles ahora'. Francia se enojó e invadió.",
                    "El 5 de mayo (Zaragoza) es famoso en el mundo porque el ejército mexicano, lleno de indígenas zacapoaxtlas con machetes, derrotó al mejor ejército del mundo (el francés).",
                    "Maximiliano era europeo, pero sorpresivamente, amó a México, vestía de charro e hizo leyes para proteger a los indígenas. Aún así, era un invasor."
                ],
                truco: "Cuentales la historia como si fuera 'Star Wars'. El Imperio (Francia/Maximiliano) llega con todo el poder a conquistar. Los Rebeldes (Juárez y los republicanos) tienen que huir al desierto del Norte, reorganizarse y regresar a derrotar al Imperio.",
                error_comun: "Confundir el 5 de mayo con la Independencia de México (error muy común, especialmente en el extranjero). Aclara siempre que el 5 de mayo NO es nuestra independencia, es solo una batalla ganada contra los franceses.",
                actividad_casa: "La Carroza de Juárez: Armen una 'carroza' con sillas y una cobija en la sala. El niño debe meter ahí una caja con los 'documentos más importantes' de la casa (actas de nacimiento falsas) y protegerlos del Imperio Francés mientras viaja por el desierto de la sala."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza los motivos de la intervención francesa, el papel de Maximiliano y el triunfo definitivo de la República liberal.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["batalla de puebla 5 de mayo", "maximiliano de habsburgo", "intervencion francesa primaria"]
        },
        {
            bloque: 4,
            nombre: "El Porfiriato (Progreso y desigualdad)",
            meses: "Febrero – Marzo",
            enClase: [
                "Porfirio Díaz: de héroe de guerra a dictador (más de 30 años en el poder)",
                "El ferrocarril, el telégrafo y la paz armada",
                "La economía crece pero los campesinos pierden sus tierras",
                "Las tiendas de raya y la explotación obrera",
                "Las huelgas de Cananea y Río Blanco"
            ],
            guiaPapa: {
                intro: "Entramos a la zona de grises de la historia. Aprenderán que los personajes históricos no son 100% buenos ni 100% malos. El Porfiriato trajo mucha riqueza, pero a costa del sufrimiento de los pobres.",
                comoExplicar: [
                    "Porfirio Díaz era un héroe militar. Pero cuando llegó a presidente, le gustó tanto la silla que no la quiso soltar durante 30 años.",
                    "El lema era 'Orden y Progreso'. Hubo trenes, luz eléctrica y bellos edificios como en París (Bellas Artes).",
                    "La trampa de la Tienda de Raya: Las fábricas les pagaban a los obreros con 'fichas' que solo servían en la tienda del mismo jefe, que vendía todo carísimo. ¡Eran esclavos modernos!"
                ],
                truco: "Jueguen al Monopolio Injusto (Tienda de Raya). Dale a tu hijo dinero del juego, pero dile que si quiere comer o salir de la cárcel, el pan cuesta 500 dólares y se lo vas a anotar en una libreta de deudas. Que sienta la frustración de deberle el alma al patrón.",
                error_comun: "Pintar a Porfirio Díaz solo como un villano de caricatura. Enséñale que el mundo de verdad es complejo: gracias a él México dejó de tener guerras cada 5 minutos y se modernizó, pero falló en la democracia y la justicia social.",
                actividad_casa: "Investigadores del Ferrocarril: Busquen en internet fotos de la estación de trenes más antigua de su estado (o el palacio de gobierno afrancesado). La mayoría de los edificios hermosos del centro de las ciudades mexicanas fueron hechos en esta época."
            },
            guiaMaestro: {
                objetivo: "El alumno evalúa críticamente el periodo del Porfiriato, contrastando el avance tecnológico y económico con las condiciones de explotación laboral.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["el porfiriato para niños", "tiendas de raya", "porfirio diaz dictadura"]
        },
        {
            bloque: 5,
            nombre: "La Revolución Mexicana",
            meses: "Abril – Junio",
            enClase: [
                "Francisco I. Madero y el 'Sufragio Efectivo, No Reelección'",
                "Los líderes revolucionarios: Emiliano Zapata y Pancho Villa",
                "Venustiano Carranza y el Ejército Constitucionalista",
                "La Constitución de 1917 (Derechos laborales y educación gratuita)",
                "El fin del movimiento armado y el reparto agrario"
            ],
            guiaPapa: {
                intro: "El estallido final. El pueblo se levanta en armas. Aquí nacen los héroes con sombrero que exigían tierra para trabajar y libertad para votar.",
                comoExplicar: [
                    "Madero era rico, pero quería que la gente pudiera votar libremente ('Sufragio Efectivo').",
                    "Emiliano Zapata peleaba en el Sur defendiendo a los campesinos: 'La Tierra es de quien la trabaja'.",
                    "Pancho Villa (el Centauro del Norte) era el comandante del ejército rebelde más temido, formado por mineros y rancheros.",
                    "El gran premio de esta guerra de sangre fue la Constitución de 1917: el libro que nos garantizó escuelas públicas y jornadas de trabajo de 8 horas."
                ],
                truco: "Diferencia a los caudillos por sus motivos: Madero quería VOTOS (política). Zapata quería TIERRAS (agricultura). Villa quería JUSTICIA PARA LOS POBRES (social). Carranza quería LEYES (Constitución).",
                error_comun: "Pensar que todos los revolucionarios eran amigos. Subraya que terminaron peleándose entre ellos e incluso mandándose matar unos a otros cuando Díaz huyó a Francia.",
                actividad_casa: "Noticiero Revolucionario 1910: Que tu hijo tome tu celular, se ponga un sombrero y grabe un video de TikTok o formato noticiero reportando de forma urgente: '¡Última hora, Porfirio Díaz ha huido del país en un barco! ¡Los ejércitos de Zapata y Villa se acercan a la capital!'."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende las causas de la Revolución Mexicana, el papel de sus principales caudillos y la trascendencia de la Constitución de 1917.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["revolucion mexicana primaria", "pancho villa y emiliano zapata", "constitucion de 1917 para niños"]
        }
    ]
};

const GEOGRAFIA_P5: MateriaContenido = {
    materia: "geografia",
    nombre: "Geografía Universal",
    emoji: "🌎",
    color: "#06B6D4",
    bloques: [
        {
            bloque: 1,
            nombre: "La Tierra y los mapas mundiales",
            meses: "Agosto – Septiembre",
            enClase: [
                "Ecuador, Meridianos (Greenwich) y Paralelos",
                "Latitud y longitud (coordenadas geográficas mundiales)",
                "Los 5 continentes y los 5 océanos",
                "Husos horarios (por qué es de noche en China mientras aquí es de día)",
                "Lectura de mapas a escala mundial"
            ],
            guiaPapa: {
                intro: "Dejamos México y saltamos al planeta entero. En quinto grado, los niños aprenden a navegar el globo terráqueo como verdaderos marineros.",
                comoExplicar: [
                    "El Ecuador es el cinturón imaginario de la Tierra (la parte más caliente). Greenwich es el cierre del abrigo (de arriba a abajo).",
                    "Latitud y Longitud son las coordenadas X y Y para todo el planeta. Así es como el GPS del celular te encuentra.",
                    "La Tierra gira como un pollo asándose. El sol no se mueve, nosotros le damos la espalda a él (por eso es de noche)."
                ],
                truco: "Latitud = Lado a lado (líneas horizontales como peldaños de escalera). Longitud = Largo de arriba a abajo (como gajos de una mandarina).",
                error_comun: "Confundir continentes con países (ej. creer que África es un solo país). Compra un mapamundi de papelería y pégalo en la pared de su cuarto.",
                actividad_casa: "Llamada a Japón: Busquen en internet la hora actual en Tokio. Si aquí son las 3 PM y allá las 6 AM del día siguiente, pídeles que giren un globo terráqueo (o una naranja) con una linterna apuntando (el sol) para que entiendan la rotación de los husos horarios."
            },
            guiaMaestro: {
                objetivo: "El alumno utiliza coordenadas geográficas para localizar lugares en el mapamundi y comprende la dinámica de los husos horarios.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["latitud y longitud primaria", "ecuador y meridiano de greenwich", "husos horarios niños"]
        },
        {
            bloque: 2,
            nombre: "Dinámica interna de la Tierra",
            meses: "Octubre – Noviembre",
            enClase: [
                "Capas de la Tierra (Núcleo, manto, corteza)",
                "Deriva continental (Pangea) y tectónica de placas mundiales",
                "El Cinturón de Fuego del Pacífico (volcanes y sismos)",
                "El relieve submarino",
                "Las grandes cordilleras del mundo (Himalaya, Andes)"
            ],
            guiaPapa: {
                intro: "¡Un viaje al centro de la Tierra! Entenderán que el suelo que pisan es solo la costra de un mar de roca derretida.",
                comoExplicar: [
                    "La Tierra es como un durazno. La cáscara delgadita es la Corteza (donde vivimos), la pulpa es el Manto de lava, y el hueso duro en el centro es el Núcleo.",
                    "Pangea: Hace millones de años, todos los continentes estaban pegados formando un supercontinente.",
                    "El Cinturón de Fuego es una herradura alrededor del Océano Pacífico donde explotan casi todos los volcanes del mundo (y México está ahí)."
                ],
                truco: "Dibuja a Suramérica y África en dos papeles recortados. Muéstrale a tu hijo cómo las costas de Brasil y África Occidental encajan exactamente como piezas de rompecabezas. Así descubrieron que antes estaban pegados.",
                error_comun: "Pensar que el centro de la Tierra es hueco o frío. ¡El núcleo terrestre está casi tan caliente como la superficie del Sol!",
                actividad_casa: "El Huevo Tectónico: Hierve un huevo duro. Antes de pelarlo, estrella un poco el cascarón (que queden grietas). Esas grietas son las Placas Tectónicas flotando sobre el manto (la clara blanca). Mueve tantito el cascarón para que vea cómo al chocar se harían 'montañas'."
            },
            guiaMaestro: {
                objetivo: "El alumno explica el origen de sismos, volcanes y relieve a través de la teoría de la tectónica de placas.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["capas de la tierra niños", "placas tectonicas y pangea", "cinturon de fuego del pacifico"]
        },
        {
            bloque: 3,
            nombre: "El agua continental y oceánica",
            meses: "Diciembre – Enero",
            enClase: [
                "Distribución del agua dulce y salada en el mundo",
                "Corrientes marinas cálidas y frías (cómo afectan el clima)",
                "Las mareas (influencia de la Luna)",
                "Los grandes ríos del mundo (Nilo, Amazonas, Yangtsé)",
                "La crisis mundial del agua dulce"
            ],
            guiaPapa: {
                intro: "El Planeta Azul no debería llamarse Tierra, debería llamarse Planeta Agua. Pero descubrirán un secreto terrible: casi nada de esa agua se puede beber.",
                comoExplicar: [
                    "El 97% del agua del mundo es salada (océanos). Del 3% restante, casi toda está congelada en los polos. El agua que tomamos de los ríos es menos del 1%.",
                    "Las corrientes marinas son 'ríos invisibles' dentro del océano. Llevan agua caliente a zonas frías para templar el planeta.",
                    "Las mareas ocurren porque la gravedad de la Luna 'jala' el agua del mar hacia ella como si fuera un imán."
                ],
                truco: "Dibuja un círculo. Pinta una rebanada minúscula como de un cabello de grueso. Diles: 'Esa pequeña línea es el agua dulce que nos mantiene vivos a todos los humanos y animales de tierra'. Impacto visual garantizado.",
                error_comun: "Creer que si se nos acaba el agua, podemos simplemente 'quitarle la sal' a la del mar. Explica que la desalinización requiere una cantidad de energía y dinero que el mundo no tiene.",
                actividad_casa: "El Imán Lunar: Llena un globo grande de agua y apóyalo en la mesa. Agarra un imán fuerte (fingiendo que es la Luna) o simplemente usa tu mano para jalar y deformar suavemente la goma de un lado. Así la Luna abulta el océano causando la 'Marea Alta'."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza la distribución del agua en el planeta, la importancia biológica de las corrientes marinas y la urgencia del cuidado del agua dulce.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["agua dulce y salada", "corrientes marinas y mareas", "rios importantes del mundo"]
        },
        {
            bloque: 4,
            nombre: "Población y cultura global",
            meses: "Febrero – Marzo",
            enClase: [
                "Los países más poblados del mundo (China, India)",
                "Mortalidad y natalidad (por qué la población envejece en Europa)",
                "Diversidad cultural mundial (religiones, idiomas, gastronomía)",
                "Migraciones internacionales (refugiados vs migrantes laborales)",
                "La vida rural y urbana en otros continentes"
            ],
            guiaPapa: {
                intro: "Entender a la humanidad como una familia gigante de 8 mil millones de personas. Aprenderán sobre otras religiones y por qué la gente se muda de país.",
                comoExplicar: [
                    "China e India tienen tanta gente que 1 de cada 3 personas en el mundo nació ahí.",
                    "En Europa nacen muy pocos bebés y hay muchos ancianos. En África nacen muchísimos bebés.",
                    "Un refugiado huye porque hay guerra en su casa y su vida peligra. Un migrante laboral se va porque quiere ganar más dinero en otro país.",
                    "Respetar otras religiones y costumbres (como no comer cerdo o rezar hacia La Meca) es clave para la paz mundial."
                ],
                truco: "Ponles de fondo música de diferentes países (tambores africanos, flautas japonesas, música árabe) mientras estudian este bloque. La inmersión cultural auditiva es muy poderosa.",
                error_comun: "Inculcar etnocentrismo (creer que nuestra cultura es la 'normal' y las demás son 'raras'). Fomenta el uso de la palabra 'Diferente' en lugar de 'Raro'.",
                actividad_casa: "Cena Internacional: Elijan un país que les llame la atención (ej. Japón o Italia). Investiguen juntos cómo comen allá y ese viernes traten de cenar usando sus reglas (ej. sentados en el piso, o intentando usar palillos chinos)."
            },
            guiaMaestro: {
                objetivo: "El alumno compara la composición y distribución poblacional de los continentes y valora la diversidad cultural del mundo.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["paises mas poblados del mundo", "migracion internacional niños", "diversidad cultural geografia"]
        },
        {
            bloque: 5,
            nombre: "Economía y medio ambiente mundial",
            meses: "Abril – Junio",
            enClase: [
                "Países desarrollados vs países en vías de desarrollo (PIB e IDH)",
                "El comercio internacional (importación y exportación)",
                "Calentamiento global y el cambio climático",
                "Deforestación y pérdida de biodiversidad mundial",
                "Desarrollo sustentable (proteger el futuro)"
            ],
            guiaPapa: {
                intro: "Economía y ecología chocan. Los niños entenderán por qué hay países ricos y países pobres, y cómo las fábricas de un país afectan el clima de todo el planeta.",
                comoExplicar: [
                    "Exportar es vender cosas de México al mundo (ej. aguacates). Importar es comprar cosas del mundo (ej. celulares de China).",
                    "Calidad de vida no es solo tener dinero (PIB), es tener buenos hospitales, escuelas y seguridad (Índice de Desarrollo Humano).",
                    "El calentamiento global es como si le pusiéramos una cobija térmica a la Tierra y no la dejáramos sudar.",
                    "Desarrollo sustentable significa 'úsalas, pero no te las acabes, déjale madera a los niños del futuro'."
                ],
                truco: "Abre el mapa de etiquetas de ropa o juguetes. 'Made in China, Made in Vietnam'. Explica que las piezas pueden venir de África, armarse en Asia y venderse en México. ¡Eso es la globalización!",
                error_comun: "Generar culpa paralizante por el cambio climático. No les digas que el mundo se va a acabar. Diles que la humanidad está enfrentando su mayor reto y que ellos, la nueva generación, serán los ingenieros que inventen las soluciones.",
                actividad_casa: "El Inventario Global de la Casa: Formen dos equipos. Tienen 5 minutos para buscar 5 objetos en casa y anotar el país donde se fabricaron (electrodomésticos, zapatos, juguetes). Luego busquen esos países en el mapamundi. Gana el que encontró cosas más lejanas."
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce diferencias socioeconómicas entre países mediante indicadores como el IDH, y reflexiona sobre acciones para mitigar el cambio climático.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["calentamiento global primaria", "paises desarrollados y subdesarrollados", "importacion y exportacion niños"]
        }
    ]
};

export const FORMACION_P5: MateriaContenido = {
    ...FORMACION_P3, 
    // Mantiene la estructura robusta cívica pero la extendemos conceptualmente en la mente del maestro/padre para 5to grado.
    // En la base de datos reusamos el objeto para simplificar, ya que la Fase 5 profundiza en los mismos 5 bloques (Derechos, Conflicto, Igualdad, Ambiente, Democracia).
};

export const EDUCACION_FISICA_P5: MateriaContenido = {
    ...EDUCACION_FISICA_P3,
};

export const ARTES_P5: MateriaContenido = {
    ...ARTES_P3,
};


export const PRIMARIA_5: GradoContenido = {
    grado: "primaria-5",
    nombre: "5° Primaria",
    emoji: "⭐",
    materias: {
        matematicas: MATEMATICAS_P5,
        espanol: ESPANOL_P5,
        ciencias: CIENCIAS_P5,
        historia: HISTORIA_P5,
        geografia: GEOGRAFIA_P5,
        formacion: FORMACION_P5,
        educacion_fisica: EDUCACION_FISICA_P5,
        artes: ARTES_P5,
        lenguas: LENGUAS_P5
    }
};
