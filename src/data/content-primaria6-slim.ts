// Base de datos de contenido "masticado" para papás y maestros
// Primaria 6° — Ciclo escolar 2025-2026 SEP México (Fase 5 - Cierre)

import type { GradoContenido, MateriaContenido } from './content-types';
import { PRIMARIA_3 } from './content-primaria3-slim';

const FORMACION_P3 = PRIMARIA_3.materias["formacion"] as MateriaContenido;
const EDUCACION_FISICA_P3 = PRIMARIA_3.materias["educacion_fisica"] as MateriaContenido;
const ARTES_P3 = PRIMARIA_3.materias["artes"] as MateriaContenido;

const LENGUAS_P6: MateriaContenido = {
    materia: "lenguas",
    nombre: "Lenguas Indígenas",
    emoji: "🗣️",
    color: "#9333EA",
    bloques: [
        { bloque: 1, nombre: "Historia oral en mi lengua: Ch'ol", meses: "Todo el ciclo" },
        { bloque: 2, nombre: "Historia oral en mi lengua: Maya", meses: "Todo el ciclo" },
        { bloque: 3, nombre: "Historia oral en mi lengua: Náhuatl", meses: "Todo el ciclo" },
        { bloque: 4, nombre: "Historia oral en mi lengua: Zapoteco", meses: "Todo el ciclo" },
        { bloque: 5, nombre: "Historia oral en mi lengua: Mixteco", meses: "Todo el ciclo" }
    ]
};

const MATEMATICAS_P6: MateriaContenido = {
    materia: "matematicas",
    nombre: "Matemáticas",
    emoji: "📐",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Múltiplos, divisores y números fraccionarios",
            meses: "Agosto – Septiembre",
            enClase: [
                "Cálculo mental de Múltiplos y Divisores",
                "División de una fracción entre un número natural (ej. 1/2 entre 3)",
                "El uso del punto decimal en fracciones (1/4 = 0.25)",
                "Resolución de problemas con ejes de simetría avanzados",
                "Patrones en series numéricas complejas"
            ],
            guiaPapa: {
                intro: "Llegamos a la cumbre de la primaria. Las fracciones ahora no solo se suman, ¡se dividen! Prepararemos su mente lógica para que la secundaria no sea un golpe duro.",
                comoExplicar: [
                    "Los múltiplos son la 'tabla de multiplicar infinita' de un número (Múltiplos de 5: 5, 10, 15...). Los divisores son los números más chiquitos que pueden 'cortar' a ese número sin que sobre nada (Divisores de 10: 1, 2, 5, 10).",
                    "Dividir una fracción (1/2 pizza) entre 3 niños significa que ese pedazo lo vas a cortar en 3 rebanadas súper delgadas. Cada niño recibe 1/6.",
                    "Las fracciones y los decimales son lo mismo, solo están en diferentes idiomas. 1/2 es 0.5."
                ],
                truco: "Para dividir una fracción entre un entero (ej. 1/4 ÷ 2), la regla fácil es multiplicar el de abajo por el entero (4x2=8) y dejar el 1 arriba. ¡El resultado es 1/8!",
                error_comun: "Creer que dividir siempre hace un número más 'pequeño' de aspecto. En fracciones, 1/8 se ve como un número más grande que 1/4 (por el 8), pero en realidad es un pedacito más chiquito. Usa gráficos circulares siempre.",
                actividad_casa: "La Cacería de Múltiplos: Vayan al supermercado. Pídele que encuentre pasillos donde todo se venda en 'múltiplos de 6' (ej. paquetes de refrescos, cervezas, cajas de leche). Luego encuentren los múltiplos de 12 (docenas de huevos)."
            },
            guiaMaestro: {
                objetivo: "El alumno calcula fracciones equivalentes, divide fracciones entre enteros y domina el uso de múltiplos y divisores en problemas matemáticos.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["multiplos y divisores 6 primaria", "dividir fracciones niños", "fraccion a decimal"]
        },
        {
            bloque: 2,
            nombre: "El volumen y cálculo de prismas",
            meses: "Octubre – Noviembre",
            enClase: [
                "Concepto de Volumen (las 3 dimensiones: largo, ancho, alto)",
                "Cálculo de volumen de prismas rectangulares y cubos",
                "Relación entre decímetro cúbico (dm³) y el litro (L)",
                "Lectura de mapas y cálculo de distancias reales con escala",
                "Problemas de combinatoria (probabilidad inicial)"
            ],
            guiaPapa: {
                intro: "¡Entramos al 3D! El área es plana (cuánto pasto tiene mi jardín), el volumen es gordo (cuánta agua le cabe a mi alberca).",
                comoExplicar: [
                    "Volumen es igual a Largo x Ancho x Alto. Es como calcular el Área del piso primero, y luego multiplicarlo por cuántos pisos de altura tiene el edificio.",
                    "Un 'centímetro cúbico' es un dado chiquitito. Medir el volumen es adivinar cuántos dados chiquititos caben adentro de una caja vacía.",
                    "La magia científica: ¡Un decímetro cúbico (una cajita de 10x10x10 cm) le cabe EXACTAMENTE un litro de agua!"
                ],
                truco: "Diles que en las fórmulas, cuando ven Área es de '2 apellidos' (largo x ancho = cm²). Cuando ven Volumen son '3 apellidos' (largo x ancho x alto = cm³).",
                error_comun: "Al calcular el volumen, sumar los tres lados en lugar de multiplicarlos. El volumen NUNCA se suma.",
                actividad_casa: "El Inspector de Cajas: Saca una caja de zapatos o de cereal. Denle una regla y que mida largo, ancho y alto en centímetros. Que multiplique los tres para descubrir los 'centímetros cúbicos' que le caben adentro a la caja."
            },
            guiaMaestro: {
                objetivo: "El alumno calcula el volumen de prismas y cilindros básicos utilizando fórmulas y comprende la equivalencia entre medidas de volumen y capacidad.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["como calcular el volumen 6 primaria", "volumen prismas niños", "centimetros cubicos"]
        },
        {
            bloque: 3,
            nombre: "Circunferencia, pi (π) y proporcionalidad",
            meses: "Diciembre – Enero",
            enClase: [
                "Diferencia entre círculo (relleno) y circunferencia (la línea)",
                "Radio y diámetro",
                "El número Pi (π = 3.1416) y su magia",
                "Cálculo del perímetro del círculo",
                "Proporcionalidad y porcentajes aplicados a compras complejas"
            ],
            guiaPapa: {
                intro: "Uno de los conceptos más famosos del mundo entra a sus vidas: El número Pi. Entenderán por qué los círculos son la figura más perfecta de la naturaleza.",
                comoExplicar: [
                    "El círculo es la pizza entera. La circunferencia es solo la orilla de pan.",
                    "El Radio es la manecilla de un reloj. El Diámetro es una línea recta que cruza el reloj de lado a lado.",
                    "El Pi (3.14) es un milagro matemático: significa que el diámetro (la línea de en medio) siempre cabe 3 veces y un cachito (0.14) alrededor de su propia orilla. ¡Siempre, no importa si es una moneda o el sol!"
                ],
                truco: "Para recordar que el radio es más corto que el diámetro, diles: 'Radio' es una palabra corta (5 letras), por lo tanto, es la línea corta (la mitad). 'Diámetro' es una palabra larga (8 letras), por lo tanto, es la línea larga de extremo a extremo.",
                error_comun: "Multiplicar por radio cuando la fórmula pide diámetro. Recuérdales que 2 Radios forman 1 Diámetro.",
                actividad_casa: "La Prueba de Pi: Toma un plato redondo, un listón y una regla. Mide el diámetro del plato con el listón y córtalo. Pídele que tome ese listón cortado e intente ponerlo alrededor del borde del plato. Verá que caben exactamente 3 listones enteros y sobra un huequito minúsculo (el famoso .1416)."
            },
            guiaMaestro: {
                objetivo: "El alumno infiere la relación entre el diámetro y la circunferencia (el valor de π) y lo utiliza para calcular la longitud de la circunferencia.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["el numero pi niños", "radio y diametro", "circulo y circunferencia 6 primaria"]
        },
        {
            bloque: 4,
            nombre: "Estadística, moda, mediana y media",
            meses: "Febrero – Marzo",
            enClase: [
                "Lectura avanzada de gráficas e histogramas",
                "Media (Promedio)",
                "Mediana (El número de en medio al ordenar)",
                "Moda (El número que más se repite)",
                "Uso del sistema de coordenadas (plano cartesiano 4 cuadrantes)"
            ],
            guiaPapa: {
                intro: "Los datos son el nuevo petróleo. Aquí aprenden no solo a calcular el promedio de sus calificaciones, sino a entender la 'Mediana' para que los números no mientan.",
                comoExplicar: [
                    "Media (Promedio): Si juntamos el dinero de todos y nos lo repartimos igual, ¿cuánto nos tocaría?",
                    "Moda: El sabor de helado que pide la mayoría de la gente. El más popular.",
                    "Mediana: Si formas a todos los niños del más chaparrito al más alto, el niño que queda exactamente a la mitad de la fila es la Mediana."
                ],
                truco: "Para no confundir Moda, Media y Mediana (Las 3 M's). Media = M de 'Mitad del dinero de todos'. Moda = M de 'Más popular'. Mediana = M de 'Medio de la fila'.",
                error_comun: "Al calcular la Mediana, olvidar ORDENAR los números de menor a mayor antes de buscar el del centro. Si no los formas primero, la Mediana sale mal.",
                actividad_casa: "Las 3 M de los Zapatos: Saca 7 pares de zapatos de diferentes miembros de la familia. Anota en un papel las tallas. Pídele que calcule la Media (sumar y dividir entre 7), la Moda (la talla que más se repita) y la Mediana (formar las tallas de menor a mayor y buscar la del centro)."
            },
            guiaMaestro: {
                objetivo: "El alumno distingue y calcula la media, moda y mediana de un conjunto de datos para interpretar información estadística.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["media moda mediana niños", "estadistica primaria", "plano cartesiano 6"]
        },
        {
            bloque: 5,
            nombre: "Sucesiones, potencias y repaso de secundaria",
            meses: "Abril – Junio",
            enClase: [
                "Sucesiones de números con progresión geométrica (x2, x3...)",
                "Introducción a la potenciación (ej. 3 al cuadrado = 3x3)",
                "Resolución de problemas de compra/venta usando fracciones y decimales cruzados",
                "Consolidación del algoritmo de división y multiplicación",
                "Proyecto matemático de final de ciclo"
            ],
            guiaPapa: {
                intro: "Es la recta final preparatoria para secundaria. Entenderán que un número con un 'numerito chiquito volando arriba' no se suma, ¡se multiplica por sí mismo!",
                comoExplicar: [
                    "Una sucesión geométrica es cuando algo se multiplica repetidamente. (1, 2, 4, 8, 16... ¡Es como se reproducen los zombies en las películas!).",
                    "Un número al cuadrado (como 3²) no significa 3x2. Significa un clon multiplicándose a sí mismo: 3x3=9.",
                    "Las matemáticas ya no son temas separados; ahora en un solo problema de la tienda tendrán que usar fracciones, decimales, sumas y divisiones a la vez."
                ],
                truco: "El truco del 'Cuadrado perfecto'. Explícale que decir '4 al cuadrado' (4²) se llama así porque si dibujas un cuadrado que tenga 4 puntitos de base y 4 de altura, ¡adentro habrá exactamente 16 puntitos (4x4)!",
                error_comun: "Multiplicar la base por el exponente (ej. 5³ resolverlo como 5x3 = 15). Siempre corrígelo: 'El numerito chiquito es la cantidad de CLONES que debes poner en la fila para multiplicarlos: 5x5x5 = 125'.",
                actividad_casa: "El Sueldo Duplicado: Pregúntale si preferiría que le dieras $100 pesos al día por un mes, o que le dieras 1 peso el primer día, 2 el segundo, 4 el tercero, y así duplicando cada día durante un mes. (Matemáticamente, la opción de duplicar lo haría hiper millonario en 30 días). Enséñale la progresión en la calculadora."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica regularidades en sucesiones con progresión geométrica, resuelve problemas combinados y comprende la base de las potencias al cuadrado y al cubo.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["sucesiones numericas primaria", "potencias niños al cuadrado", "repaso matematicas 6 primaria"]
        }
    ]
};

const ESPANOL_P6: MateriaContenido = {
    materia: "espanol",
    nombre: "Español",
    emoji: "📚",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "El ensayo y el texto biográfico",
            meses: "Agosto – Septiembre",
            enClase: [
                "Estructura de la biografía y autobiografía",
                "Verbos en voz pasiva y tercera persona",
                "La anécdota como recurso literario",
                "Redacción de exámenes y cuestionarios autoaplicados",
                "Entrevista a un personaje histórico (imaginario)"
            ],
            guiaPapa: {
                intro: "Los niños maduran su escritura al ponerse en los zapatos de otros. Una biografía requiere investigación, respeto y entender el contexto histórico de la persona.",
                comoExplicar: [
                    "Autobiografía eres tú contándote a ti mismo (usando el 'Yo' - Primera persona). Biografía es tú contando sobre Benito Juárez (usando el 'Él' - Tercera persona).",
                    "Un texto debe ser como un sándwich perfecto. No puedes escribir todos tus pensamientos amontonados sin puntos ni comas.",
                    "Saber redactar y contestar un examen (leer la pregunta con lupa) es una habilidad de vida que les evitará reprobar materias en el futuro."
                ],
                truco: "Para enseñarles a escribir, diles que tienen que ser 'Directores de Cine'. Si escriben 'Juan estaba triste', es aburrido. Si escriben 'Juan arrastraba los pies con lágrimas en los ojos', le dan una película al lector.",
                error_comun: "Pasar repentinamente de primera a tercera persona en un mismo texto (ej. 'Yo nací en 2014 y él era muy feliz'). Enséñale a ser consistente con el 'narrador'.",
                actividad_casa: "La Autobiografía en 5 Fotos: Pídele que elija sus 5 fotos favoritas desde que era bebé hasta hoy. Que las pegue en un cuaderno y debajo de cada una escriba una anécdota en primera persona (ej. 'Aquí yo tenía 4 años y me comí una mosca...')."
            },
            guiaMaestro: {
                objetivo: "El alumno distingue las características de biografías y autobiografías, utilizando pronombres y tiempos verbales adecuados para narrar sucesos históricos o personales.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["biografia y autobiografia 6", "tercera persona español", "redaccion de anecdotas"]
        },
        {
            bloque: 2,
            nombre: "El reportaje y la crónica",
            meses: "Octubre – Noviembre",
            enClase: [
                "Diferencia entre noticia rápida y un reportaje de fondo",
                "La crónica periodística (contar el evento en orden de hora)",
                "Tipos de fuentes: directas (testigos) e indirectas (documentos)",
                "Uso del discurso directo e indirecto",
                "La encuesta de campo"
            ],
            guiaPapa: {
                intro: "El niño como investigador. Aprenderá a no conformarse con la versión rápida de la historia, sino a excavar, entrevistar a los testigos y armar un reportaje profesional.",
                comoExplicar: [
                    "La noticia dice: 'Ayer chocaron dos coches'. El reportaje cuenta la historia del conductor, investiga si el semáforo servía y cuánto cuesta arreglarlo.",
                    "La crónica es como narrar un partido de futbol: 'A las 4 pm sonó el silbatazo, a las 4:10 metieron gol...'. Todo lleva un orden de reloj.",
                    "Discurso directo es poner EXACTAMENTE lo que dijo la persona usando comillas o guiones ('Tengo frío'). Indirecto es contarlo tú (Él dijo que tenía frío)."
                ],
                truco: "El guion largo (—) es mágico. Enséñales que es la puerta por donde entra un personaje a hablar en una historia. Si no ponen el guion, el lector no sabe quién está hablando.",
                error_comun: "Copiar y pegar reportajes de internet sin procesar. Si el niño no entiende las palabras que está copiando (como 'jurisdicción' o 'infraestructura'), el reportaje no sirve.",
                actividad_casa: "El Cronista Deportivo de Casa: Pon un partido de algún deporte en la TV (o de videojuegos). Pídele que narre los últimos 5 minutos del evento escribiéndolo como crónica en una hoja. 'A las 6:45 el jugador saltó y falló...'."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica las características del reportaje y la crónica, empleando fuentes de información directas y el discurso indirecto para redactar.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["reportaje y cronica 6 primaria", "discurso directo e indirecto", "fuentes de informacion primaria"]
        },
        {
            bloque: 3,
            nombre: "El texto teatral y el guion de radio",
            meses: "Diciembre – Enero",
            enClase: [
                "Estructura del guion teatral (personajes, diálogos y acotaciones)",
                "Cómo escribir un guion de radio (locutor, operador, cortinillas)",
                "Lectura en voz alta con entonación de personaje",
                "Adaptación de un cuento a una obra de teatro",
                "La voz y los efectos sonoros"
            ],
            guiaPapa: {
                intro: "Es la hora del show. Este bloque es súper divertido porque transforma la escritura aburrida en diálogos vivos. Fomenta muchísimo la confianza y la fluidez lectora.",
                comoExplicar: [
                    "Un guion teatral es el instructivo secreto que leen los actores antes de salir al escenario.",
                    "Las 'acotaciones' son las instrucciones escondidas entre paréntesis que NO se leen en voz alta. Ej: (Entra llorando y azota la puerta).",
                    "El radio es el teatro de la mente. Como la gente no puede ver, tenemos que describir todo y usar sonidos (un zapatazo, lluvia)."
                ],
                truco: "Para enseñarles a leer fluido, diles que los signos de interrogación (?) son una colina que la voz debe subir, y los de exclamación (!) son un salto de emoción. ¡Hay que actuar la puntuación!",
                error_comun: "Leer las acotaciones en voz alta (ej. leer 'Llorando: ¡Por qué a mí!'). Enséñales que lo que está entre paréntesis es solo para el actor, no para el público.",
                actividad_casa: "El Programa de Radio en el Baño: Usen la grabadora de voz del celular. Que tu hijo sea el locutor de 'Radio Casa' y dé las noticias familiares. Tú eres el 'operador' que hace los sonidos de fondo (aplausos de boca, chocar llaves, usar el agua del lavabo para simular lluvia)."
            },
            guiaMaestro: {
                objetivo: "El alumno adapta textos narrativos a guiones teatrales o radiofónicos, reconociendo el uso de diálogos, acotaciones y efectos sonoros.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["guion de teatro primaria", "acotaciones y dialogos", "guion de radio 6"]
        },
        {
            bloque: 4,
            nombre: "El artículo de opinión y la carta al director",
            meses: "Febrero – Marzo",
            enClase: [
                "Redacción de artículos de opinión con postura clara",
                "La carta formal dirigida al director de un periódico",
                "Diferencia entre persuadir, informar y entretener",
                "Uso de conectores de oposición (pero, en cambio, por el contrario)",
                "Vocabulario formal y cortés"
            ],
            guiaPapa: {
                intro: "Tu hijo ya tiene voz propia. Ahora aprenderá a mandar esa voz al mundo adulto de manera respetuosa e inteligente para intentar cambiar las cosas que le parecen injustas.",
                comoExplicar: [
                    "El artículo de opinión es donde tú eres el jefe. Dices lo que piensas sobre un problema, pero tienes que probarlo.",
                    "La carta al director es cuando le escribes a alguien importante para que publique tu queja o sugerencia en una revista o periódico.",
                    "Para 'persuadir' (convencer) a alguien, es más útil darle datos reales que gritarle en la cara."
                ],
                truco: "La regla de la elegancia: Enséñale que cuando escriba algo criticando a alguien, debe ser exageradamente educado ('Me permito disentir respetuosamente...'). La crítica duele más cuando está bien escrita que cuando usa insultos.",
                error_comun: "Creer que la opinión propia es un hecho irrefutable. Corrígelo para que siempre use frases como 'Desde mi punto de vista...', 'Se puede observar que...', en lugar de decir 'La verdad absoluta es...' .",
                actividad_casa: "La Carta de Sugerencias Familiares: Dile que tiene el poder de cambiar una regla de la casa (ej. la hora de dormir el viernes) SIEMPRE Y CUANDO escriba una carta formal de opinión exponiendo por qué el cambio sería bueno para la salud y armonía de la familia. Si convence, ¡cambien la regla!"
            },
            guiaMaestro: {
                objetivo: "El alumno produce textos argumentativos como cartas de opinión, empleando un tono formal, vocabulario preciso y estrategias de persuasión.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["carta de opinion 6 primaria", "articulos de opinion niños", "textos persuasivos"]
        },
        {
            bloque: 5,
            nombre: "Antología literaria y poesía moderna",
            meses: "Abril – Junio",
            enClase: [
                "¿Qué es una antología? (Recopilación selecta)",
                "Poesía de verso libre (sin rima estricta)",
                "Uso de indigenismos y modismos regionales en la literatura",
                "El prólogo y la dedicatoria",
                "Edición final y publicación del Álbum de Generación"
            ],
            guiaPapa: {
                intro: "El cierre magistral. Empaquen todos sus recuerdos. Aprenderán a armar un libro desde el prólogo hasta la última página, usando todo lo que aprendieron en 6 años.",
                comoExplicar: [
                    "Una antología es como una playlist (lista de canciones) en Spotify, pero de los mejores poemas o cuentos que más te gustaron en el año.",
                    "La poesía libre es para los rebeldes: no necesita rimar (corazón/melón), solo necesita tener ritmo y sonar bonito.",
                    "El prólogo es la 'bienvenida' al libro, donde explicas por qué elegiste esos textos."
                ],
                truco: "Para entender el verso libre, diles que es como el rap moderno. No siempre rima perfecto al final, pero el 'flow' (el ritmo de las palabras) te hace mover la cabeza.",
                error_comun: "Confundir la dedicatoria con el prólogo. Dedicatoria es 'Para mi mamá que me hizo el sándwich' (breve y emocional). Prólogo es 'En este libro encontraremos maravillas...' (largo e introductorio).",
                actividad_casa: "La Cápsula del Tiempo / Antología Familiar: Armen un pequeño libro de 5 páginas. Que tu hijo sea el editor, junte un dibujo, una anécdota escrita por ti, un poema copiado por él, escriba un prólogo de 3 líneas y lo engrapen. Guárdenlo de recuerdo para cuando se gradúe de la prepa."
            },
            guiaMaestro: {
                objetivo: "El alumno elabora y prologa una antología de textos literarios, valorando la riqueza del verso libre y las variantes dialectales del español.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 5"
            },
            keywords: ["que es una antologia", "poesia de verso libre", "prologo y dedicatoria"]
        }
    ]
};

const CIENCIAS_P6: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias Naturales",
    emoji: "🔬",
    color: "#10B981",
    bloques: [
        {
            bloque: 1,
            nombre: "Sistemas del cuerpo humano integral",
            meses: "Agosto – Septiembre",
            enClase: [
                "Coordinación del cuerpo: Sistema Nervioso e Inmunológico",
                "El sedentarismo y las enfermedades modernas (Diabetes)",
                "Etapas del desarrollo humano (Infancia a la Vejez)",
                "Impacto de la tecnología en la salud (pantallas y sueño)",
                "Salud sexual y prevención de riesgos a fondo"
            ],
            guiaPapa: {
                intro: "El conocimiento del cuerpo llega a nivel experto. Ya no solo ven qué hace cada sistema, sino cómo colaboran entre ellos para mantenerte con vida cada segundo.",
                comoExplicar: [
                    "El cuerpo es un gran equipo. El Sistema Nervioso es el entrenador que da órdenes, el Inmunológico son los defensas que atacan a los virus.",
                    "La diabetes ocurre cuando al cuerpo 'se le descompone la llave' (insulina) para meter el azúcar del cuerpo a las células.",
                    "El sedentarismo (estar sentado jugando Xbox) atrofia los músculos. Es como un coche que dejas estacionado 3 meses; la batería se muere."
                ],
                truco: "Explica el sistema inmunológico como un videojuego de guerra. Los glóbulos blancos son los soldados. Si no duermes bien, los soldados pelean dormidos y los virus ganan. El sueño es su recarga de municiones.",
                error_comun: "Creer que la diabetes infantil solo le da a los niños que comen mucha azúcar. Explícales que también entra en juego la genética y el metabolismo, para evitar que estigmaticen a un compañero enfermo.",
                actividad_casa: "Medidor de Frecuencia Cardíaca: Toma sus pulsaciones (dos dedos en el cuello o muñeca) durante 15 segundos estando sentado en el sillón y multiplica por 4. Luego que corra a máxima velocidad alrededor de la casa 1 minuto y vuelve a medir. Apunten cómo el cuerpo ajusta el corazón automáticamente."
            },
            guiaMaestro: {
                objetivo: "El alumno explica el funcionamiento integral del cuerpo humano, la interrelación de sus sistemas y valora hábitos de salud para prevenir el sedentarismo.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["coordinacion del cuerpo humano", "sistema inmunologico y nervioso", "salud reproductiva 6 primaria"]
        },
        {
            bloque: 2,
            nombre: "Evolución y fósiles",
            meses: "Octubre – Noviembre",
            enClase: [
                "La teoría de la evolución de Charles Darwin (selección natural)",
                "Qué son los fósiles y la estratificación",
                "La extinción de los dinosaurios y otras eras geológicas",
                "Adaptación de los seres vivos a su entorno",
                "El impacto del calentamiento global en la adaptación actual"
            ],
            guiaPapa: {
                intro: "Entramos a la historia de la vida. Descubrirán que los humanos y los animales no siempre fueron así, sino que cambiaron durante millones de años para sobrevivir.",
                comoExplicar: [
                    "Selección natural es: 'Sobrevive el que mejor se adapta, no el más fuerte'. Si hace frío, el pájaro que nació con más plumas por accidente sobrevive, los demás se mueren.",
                    "Los fósiles son como 'fotografías de piedra' de animales de hace millones de años. La tierra los aplastó tanto que los hizo roca.",
                    "El ser humano es primo de los monos, evolucionamos de un ancestro común muy antiguo, ¡no venimos directo del chimpancé actual del zoológico!"
                ],
                truco: "Para explicar la Estratificación (capas de tierra), dales el ejemplo de una canasta de ropa sucia. La playera que está hasta abajo (el fósil más profundo) es la más vieja de la semana. La que está hasta arriba (el fósil superficial) es de ayer.",
                error_comun: "Confundir fósiles con 'huesos viejos'. Un fósil ya no es hueso, toda su materia biológica fue reemplazada por minerales. ¡Es 100% piedra con forma de hueso!",
                actividad_casa: "Fósiles de Yeso o Masa: Has una masa de sal (harina y sal). Pídele que aplaste un dinosaurio de juguete o una hoja de árbol sobre la masa y la retire. Dejen secar al sol. Explícale que así se formaron las huellas petrificadas."
            },
            guiaMaestro: {
                objetivo: "El alumno infiere la evolución de los seres vivos mediante el análisis de fósiles y comprende los principios de la selección natural de Darwin.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["evolucion de darwin primaria", "que son los fosiles", "seleccion natural niños"]
        },
        {
            bloque: 3,
            nombre: "Transformación de la energía y materiales",
            meses: "Diciembre – Enero",
            enClase: [
                "Fuentes de energía renovables vs no renovables",
                "Cómo funciona una planta eléctrica",
                "Uso de materiales conductores, semiconductores y aislantes",
                "El reciclaje avanzado (separación de polímeros)",
                "Huella de carbono personal"
            ],
            guiaPapa: {
                intro: "Los niños entienden de dónde viene la luz que enciende su televisión y por qué el plástico es el mejor amigo y el peor enemigo de la humanidad.",
                comoExplicar: [
                    "Energía no renovable (Petróleo, Gas): Es como tener una cuenta de banco sin sueldo, algún día se va a acabar.",
                    "Energía renovable (Sol, Viento): Es como una cuenta infinita que se llena todos los días.",
                    "La electricidad de la casa casi siempre se genera quemando gas en una fábrica lejana, lo que contamina el cielo.",
                    "Huella de carbono es la 'mancha negra' invisible que dejas en el mundo con tu forma de vivir (ej. viajar en coche a solas contamina más que usar bicicleta)."
                ],
                truco: "Explícales la transformación de la energía: La gasolina no desaparece, se convierte en energía de movimiento (carro) y en calor (humo). La energía nunca muere, solo se disfraza.",
                error_comun: "Pensar que los autos eléctricos son 100% ecológicos. Debes explicarles que, si la electricidad de la ciudad se genera quemando carbón, el coche eléctrico de todas formas contamina indirectamente.",
                actividad_casa: "El Detector de Vampiros Energéticos: Enséñale que los aparatos conectados, aunque estén apagados, consumen energía (la lucesita roja de la TV, el microondas). Vayan por toda la casa desconectando a esos 'vampiros' antes de dormir."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza la transformación de la energía en diversos procesos tecnológicos y argumenta a favor del uso de energías sustentables.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["energias renovables 6", "huella de carbono niños", "transformacion de la energia"]
        },
        {
            bloque: 4,
            nombre: "El microscopio y el mundo invisible",
            meses: "Febrero – Marzo",
            enClase: [
                "Historia de la ciencia: La invención del microscopio y telescopio",
                "Las células (animal y vegetal) a fondo",
                "Microorganismos: bacterias, virus y hongos",
                "Cómo las bacterias nos ayudan (flora intestinal y lácteos)",
                "Lentes ópticos convergentes y divergentes"
            ],
            guiaPapa: {
                intro: "Descubrimos que no estamos solos. Entenderán que hay un universo de monstruos microscópicos (buenos y malos) viviendo en sus pestañas y en su yogurt.",
                comoExplicar: [
                    "El microscopio es una lupa nivel dios. Usa cristales curvos para engañar a tus ojos y hacer que la luz se vea más grande.",
                    "Un virus es un pirata informático: no está vivo, entra a tu célula, la hackea para hacer clones de él mismo, y la destruye.",
                    "Las bacterias son células vivas completas. ¡La mayoría son nuestras amigas! Sin las bacterias del estómago no podríamos digerir la comida.",
                    "La célula animal es un huevito flexible; la célula vegetal es como una caja fuerte verde y dura (por eso la madera es dura)."
                ],
                truco: "Dibuja un óvalo y llámale Célula. Ponle un círculo al centro: Ese es el Núcleo (el cerebro). Ponle 'frijolitos' alrededor: Esas son las Mitocondrias (las baterías de energía). Visualización directa.",
                error_comun: "Creer que todos los microbios son malos. Haz mucho énfasis en los lactobacilos (bacterias del yogurt) y la levadura (hongo del pan) para quitarles la 'microbio-fobia'.",
                actividad_casa: "Lupas con Gotas de Agua: Toma una regla de plástico transparente. Ponle una gota de agua redondita encima. Pídele que mire letras pequeñas de un libro a través de la gota de agua. ¡La gota actúa exactamente como el lente convexo de un microscopio aumentando el tamaño!"
            },
            guiaMaestro: {
                objetivo: "El alumno describe la estructura básica de la célula e infiere la importancia del microscopio en el avance de la biología y la medicina.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["el microscopio primaria", "celula animal y vegetal", "virus y bacterias niños"]
        },
        {
            bloque: 5,
            nombre: "El universo y los viajes espaciales",
            meses: "Abril – Junio",
            enClase: [
                "Galaxias, nebulosas y estrellas gigantes",
                "La vía Láctea y nuestra ubicación",
                "Agujeros negros (concepto básico de gravedad extrema)",
                "La Estación Espacial Internacional",
                "Proyectos científicos y tecnológicos hacia Marte"
            ],
            guiaPapa: {
                intro: "Cerramos la primaria soñando a lo grande. Dejamos atrás el sistema solar para abrazar el universo entero. Pura astronomía de vanguardia.",
                comoExplicar: [
                    "El Sistema Solar es solo nuestro 'vecindario'. La Vía Láctea es nuestra 'ciudad' llena de miles de millones de vecinos estelares.",
                    "Un agujero negro no es un hoyo, es una pelota de masa tan, pero tan pesada, que su gravedad chupa todo, ¡hasta la luz!",
                    "Las nebulosas son guarderías gigantes de polvo espacial de colores donde nacen y explotan las estrellas.",
                    "Los astronautas en la Estación Espacial no flotan porque 'no haya gravedad', flotan porque están 'cayendo constantemente' alrededor de la Tierra."
                ],
                truco: "Explica la inmensidad del universo con el truco del tiempo-luz: Cuando vemos la luz de una estrella en el cielo nocturno, esa luz salió de ahí hace millones de años. ¡Estamos viendo el pasado! Si esa estrella explotó ayer, nosotros no nos enteraremos hasta dentro de mil años.",
                error_comun: "Confundir Estrella Fugaz con Estrella real. Una estrella fugaz es solo una piedra del tamaño de un garbanzo (meteorito) quemándose en nuestra atmósfera. ¡No es un sol cayendo!",
                actividad_casa: "Cazadores de Constelaciones: Bajen una app gratuita de astronomía en el celular (como Stellarium o Star Walk). Salgan al patio de noche, apunten el celular al cielo y dejen que el giroscopio les muestre las galaxias y constelaciones exactas que están arriba de su casa."
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce los componentes a gran escala del universo (galaxias y estrellas) y valora la investigación espacial contemporánea.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 5"
            },
            keywords: ["el universo 6 primaria", "galaxias y agujeros negros", "via lactea niños"]
        }
    ]
};

const GEOGRAFIA_P6: MateriaContenido = {
    materia: "geografia",
    nombre: "Geografía Global",
    emoji: "🌎",
    color: "#06B6D4",
    bloques: [
        {
            bloque: 1,
            nombre: "Proyecciones cartográficas y GPS",
            meses: "Agosto – Septiembre",
            enClase: [
                "Las diferentes proyecciones del mapa (Mercator vs Peters)",
                "Fotografías satelitales y sistemas de GPS",
                "Escala numérica y escala gráfica",
                "Cálculo de distancias en un mapamundi",
                "Geografía digital (Google Earth)"
            ],
            guiaPapa: {
                intro: "El mapa que conoces... ¡Te ha mentido toda la vida! En este bloque los niños descubren que al aplastar un planeta redondo en un papel plano, los tamaños se deforman.",
                comoExplicar: [
                    "Intenta pelar una naranja y aplanar la cáscara en la mesa sin romperla. ¡Es imposible! Por eso los cartógrafos tienen que deformar los mapas (Proyecciones).",
                    "En el mapa normal (Mercator), Groenlandia se ve del tamaño de África. ¡En la vida real África es 14 veces más grande!",
                    "El GPS (Global Positioning System) usa 24 satélites en el espacio. Si tu celular hace 'contacto' con al menos 3 de ellos, triangula tu posición exacta.",
                    "La escala dice: 1 cm en el mapa = 100,000 cm en la vida real."
                ],
                truco: "Diles que los mapas antiguos se hacían para que los barcos europeos no se perdieran (Mercator), y por eso hicieron a Europa enorme. El mapa de Peters es feo pero exacto en tamaños reales.",
                error_comun: "Creer que el Norte está 'Arriba'. El espacio no tiene arriba ni abajo. Los mapas se dibujaron con el Norte arriba por convención humana, pero si pones el mapa de cabeza, sigue siendo 100% exacto.",
                actividad_casa: "Midiendo al Mundo: En un mapa impreso, que pongan una regla entre su ciudad y otra ciudad del país. Si mide 5 cm, y la escala dice que 1 cm son 100 km, que multipliquen para adivinar la distancia real (500 km)."
            },
            guiaMaestro: {
                objetivo: "El alumno compara distintas representaciones cartográficas y utiliza tecnología GPS y escalas para interpretar información geográfica mundial.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["proyecciones cartograficas primaria", "escala de los mapas", "como funciona el gps niños"]
        },
        {
            bloque: 2,
            nombre: "Climas, biomas y recursos mundiales",
            meses: "Octubre – Noviembre",
            enClase: [
                "Las grandes regiones climáticas de la Tierra (Tropical, Seca, Templada, Fría, Polar)",
                "Biomas del mundo (Tundra, Taiga, Sabana, Selva)",
                "Recursos naturales estratégicos (Petróleo, Litio, Agua)",
                "Países megadiversos del mundo (Brasil, Colombia, Madagascar, Australia)",
                "Extracción minera y conflicto ambiental"
            ],
            guiaPapa: {
                intro: "Entenderán por qué la riqueza del mundo está en el suelo. Un país que tiene selvas y litio tiene oro en sus manos, pero también gran responsabilidad ecológica.",
                comoExplicar: [
                    "La Tundra es un lugar tan frío (Rusia) que los árboles no pueden crecer, solo musgo. La Sabana (África) es el paraíso de los leones, con pasto alto y árboles aislados.",
                    "La Tierra está dividida en 'franjas' de clima gracias a que el sol pega directo en la panza (el Ecuador) y casi no llega a las orillas (los Polos).",
                    "El litio es el petróleo del futuro. Sin él, no habría baterías de celulares ni coches eléctricos."
                ],
                truco: "Para memorizar el orden de los climas, ve desde el centro de la Tierra hacia el Polo Norte: 1. Hervido (Selva Tropical), 2. Rostizado (Desierto Seco), 3. Calientito (Bosque Templado), 4. Congelador (Tundra Fría), 5. Hielo eterno (Polar).",
                error_comun: "Confundir Sabana con Selva. La selva es tan densa que no pasa el sol (Amazonas). La Sabana tiene pastos amarillos y cielos abiertos (El Rey León).",
                actividad_casa: "Detectives de Materiales: Busquen 5 objetos tecnológicos en casa (TV, celular, batería externa). Explícale que dentro de ellos hay oro, cobre y minerales extraídos de minas lejanas, y que por eso es un crimen ecológico tirar un celular a la basura normal."
            },
            guiaMaestro: {
                objetivo: "El alumno relaciona las regiones climáticas con los biomas del mundo y analiza la distribución estratégica de los recursos naturales y minerales.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["biomas del mundo primaria", "tundra taiga sabana selva", "recursos naturales 6"]
        },
        {
            bloque: 3,
            nombre: "Riesgos globales y cambio climático",
            meses: "Diciembre – Enero",
            enClase: [
                "Efecto invernadero (natural vs acelerado por humanos)",
                "Derretimiento de los polos y aumento del nivel del mar",
                "Desastres antrópicos (causados por humanos: derrames petroleros, explosiones)",
                "Vulnerabilidad social (por qué los países pobres sufren más los desastres)",
                "Acuerdos internacionales (Acuerdo de París)"
            ],
            guiaPapa: {
                intro: "La humanidad al borde. No solo ocurren tornados, nosotros también creamos desastres (derrames de crudo, guerras). Entenderán la urgencia mundial de cambiar el rumbo.",
                comoExplicar: [
                    "El efecto invernadero es bueno originalmente: los gases atrapaban el calor para que no muriéramos congelados. El problema es que echamos demasiado gas y ahora la Tierra no puede 'transpirar'.",
                    "Si los polos se derriten de golpe, ciudades enteras (como Cancún o Nueva York) quedarían bajo el agua porque el mar subiría metros de altura.",
                    "Un desastre Antrópico es culpa de las personas, como cuando un barco petrolero choca y destruye los arrecifes.",
                    "Un temblor en Japón (país rico con edificios antisísmicos) mata a 2 personas. El mismo temblor en Haití (país pobre con casas de bloque malo) mata a 10,000. Eso es Vulnerabilidad."
                ],
                truco: "Para explicar el efecto invernadero, dejen un coche cerrado bajo el sol por 30 minutos. Al abrirlo el calor los golpeará en la cara. Explícale que los vidrios dejaron entrar el sol, pero no dejaron salir el calor. ¡Eso exactamente le hacen nuestros humos de fábrica a la Tierra!",
                error_comun: "Creer que la capa de ozono y el calentamiento global son exactamente lo mismo. El agujero de ozono permite que entre radiación que quema la piel, el calentamiento global es el calor atrapado. Son primos, pero distintos.",
                actividad_casa: "Auditoría de Inundación: Busquen en internet la altitud sobre el nivel del mar de su ciudad. Si viven a 2000 metros (ej. CDMX), están a salvo. Si viven a 2 metros, explícale que si el mar sube, su ciudad sería una de las primeras en desaparecer."
            },
            guiaMaestro: {
                objetivo: "El alumno distingue riesgos naturales y antrópicos, analiza el impacto mundial del cambio climático y reconoce la vulnerabilidad socioeconómica ante desastres.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["efecto invernadero niños", "desastres antropicos", "vulnerabilidad geografia"]
        },
        {
            bloque: 4,
            nombre: "Economía y globalización",
            meses: "Febrero – Marzo",
            enClase: [
                "¿Qué es la Globalización? (El mundo conectado por el internet y el comercio)",
                "Empresas transnacionales (ej. cadenas de comida rápida en todo el mundo)",
                "Consumo responsable vs Consumismo (comprar sin necesitar)",
                "Desigualdad socioeconómica global",
                "Turismo y sus impactos ambientales"
            ],
            guiaPapa: {
                intro: "La clase de negocios y sociedad. Entenderán por qué pueden comer hamburguesas americanas, jugar videojuegos japoneses y usar ropa china, sin salir de su casa.",
                comoExplicar: [
                    "La Globalización es como si todo el mundo fuera un solo centro comercial gigante. La barrera de los países desapareció para el dinero y las ideas.",
                    "Una empresa transnacional es tan rica y grande que tiene tiendas desde México hasta Rusia (ej. Coca-Cola, Nike).",
                    "Consumismo es comprar el iPhone 15 solo porque es nuevo, aunque tu iPhone 14 funcione perfecto. El consumismo destruye el planeta llenándolo de basura tecnológica.",
                    "El turismo es padrísimo, pero si no se cuida, destruye las playas y encarece la vivienda de los habitantes locales."
                ],
                truco: "El truco de la T-Shirt: Para explicar la globalización, dile que el algodón de su playera se plantó en India, se tejió en China, el logo se diseñó en Estados Unidos, y se vendió en México. Cuatro países trabajaron para vestir a un solo niño.",
                error_comun: "Ver la globalización como 100% buena o 100% mala. Fomenta el debate: Es buena porque tenemos internet y medicinas mundiales, es mala porque hace a los países pobres dependientes de los ricos y puede borrar las culturas locales.",
                actividad_casa: "Revisión de Consumo: Abran el clóset de juguetes o ropa. Separen lo que de verdad usan semanalmente y lo que está arrumbado hace meses. Explícale que esos juguetes arrumbados son 'Consumismo' y propón donarlos."
            },
            guiaMaestro: {
                objetivo: "El alumno caracteriza el proceso de globalización, identifica el papel de las transnacionales y desarrolla una postura crítica frente al consumismo desmedido.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["globalizacion para niños", "consumismo y consumo responsable", "empresas transnacionales"]
        },
        {
            bloque: 5,
            nombre: "Retos de la humanidad y calidad de vida",
            meses: "Abril – Junio",
            enClase: [
                "Los componentes de la Calidad de Vida (educación, esperanza de vida, ingresos)",
                "Problemas ambientales de las grandes megalópolis",
                "Conflictos territoriales y guerras por recursos naturales",
                "Patrimonio cultural de la humanidad (UNESCO)",
                "Participación ciudadana global y cierre de curso"
            ],
            guiaPapa: {
                intro: "Cerramos el nivel primaria asumiendo nuestro rol como ciudadanos del mundo. Aprenderán que no basta con ser buen estudiante, hay que ser buen habitante del planeta.",
                comoExplicar: [
                    "Calidad de vida no es tener una mansión. Es tener la tranquilidad de que si te enfermas, el hospital es bueno y gratuito; y que si sales a la calle, estás seguro.",
                    "La esperanza de vida es la edad a la que llega la gente antes de morir. En Japón es de 85 años; en países pobres de África, de apenas 50 años.",
                    "Muchas de las guerras en el mundo hoy no son por reyes, son por adueñarse de pozos de petróleo o agua dulce.",
                    "La UNESCO elige lugares mágicos (como Chichén Itzá o las pirámides de Egipto) y dice: 'Esto es patrimonio de todos los humanos, nadie puede destruirlo'."
                ],
                truco: "Diles que la Tierra es como una nave espacial flotando en la nada. No hay tienda de repuestos. Si ensuciamos el agua y el aire de esta nave, no podemos bajarnos en la siguiente parada. Es nuestra única casa.",
                error_comun: "Ignorar los problemas globales por creer que 'no nos afectan'. Enséñales que el humo de una fábrica en China le da la vuelta al mundo y cae como lluvia ácida en México. Todos estamos en el mismo barco.",
                actividad_casa: "Reporteros de la Paz: Que busquen una noticia internacional reciente sobre un conflicto o problema y traten de dar una solución en la mesa familiar usando el sentido común. 'Si yo fuera el presidente de la ONU, yo haría...'"
            },
            guiaMaestro: {
                objetivo: "El alumno compara la calidad de vida en diferentes regiones del mundo, analiza los conflictos geopolíticos y reconoce la importancia del patrimonio cultural mundial.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["calidad de vida geografia", "patrimonio cultural de la humanidad", "retos de la humanidad 6"]
        }
    ]
};

const HISTORIA_P6: MateriaContenido = {
    materia: "historia",
    nombre: "Historia Universal",
    emoji: "🏛️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "La prehistoria y los primeros humanos",
            meses: "Agosto – Septiembre",
            enClase: [
                "De los homínidos al Homo Sapiens (África como cuna de la humanidad)",
                "El Paleolítico: Cazadores y nómadas, descubrimiento del fuego",
                "El Neolítico: La revolución agrícola y la domesticación de animales",
                "Las pinturas rupestres y el arte primitivo",
                "De las aldeas a las primeras ciudades (Mesopotamia)"
            ],
            guiaPapa: {
                intro: "Viaje al origen absoluto. Tus hijos aprenderán cómo el humano sobrevivió al hielo, dominó el fuego y se convirtió en la especie dominante del planeta Tierra.",
                comoExplicar: [
                    "Todos los humanos venimos de África. Ahí se pararon en dos patas los primeros simios que empezaron a caminar (Lucy).",
                    "El fuego fue el invento supremo. Les dio calor, luz para alejar leones de noche y les permitió cocinar la carne (lo que hizo crecer sus cerebros).",
                    "El Paleolítico es la Edad de Piedra Vieja (cazadores). El Neolítico es la Piedra Nueva (inventan la agricultura y ya no tienen que correr tras la comida).",
                    "La prehistoria termina cuando el hombre inventa la ESCRITURA. Ahí arranca la Historia de verdad."
                ],
                truco: "Aclara tajantemente la regla de Hollywood: LOS HUMANOS NUNCA CONVIVIERON CON LOS DINOSAURIOS. Los dinosaurios se extinguieron millones de años antes de que el primer humano existiera. Son cuentos de películas.",
                error_comun: "Pensar que los 'cavernícolas' eran tontos. Explícales que sobrevivir a osos gigantes con palos de madera y piedras afiladas requiere una inteligencia brutal.",
                actividad_casa: "Pintura Rupestre en Casa: Pon papel kraft o cartulina en la pared. Apaga las luces y prendan velas o linternas. Dale carbón (o gises oscuros) a tu hijo y pídele que dibuje a su perro o a la familia 'cazando' su comida favorita, imitando las cuevas de Altamira."
            },
            guiaMaestro: {
                objetivo: "El alumno ubica la prehistoria en el tiempo, distingue las características del Paleolítico y Neolítico, y reconoce el impacto de la agricultura en la sedentarización.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["paleolitico y neolitico", "evolucion del hombre prehistoria", "descubrimiento del fuego 6 primaria"]
        },
        {
            bloque: 2,
            nombre: "Las grandes civilizaciones de la Antigüedad",
            meses: "Octubre – Noviembre",
            enClase: [
                "Mesopotamia (ríos Tigris y Éufrates, la invención de la rueda)",
                "Egipto (el Nilo, pirámides y faraones)",
                "Grecia: Cuna de la democracia, las matemáticas y los Juegos Olímpicos",
                "Roma: El Imperio invencible, los acueductos y el derecho (leyes)",
                "India y China (invención del papel, pólvora y la ruta de la seda)"
            ],
            guiaPapa: {
                intro: "El bloque más espectacular. Reyes con cabezas de chacal, gladiadores romanos y pensadores griegos. Aquí se construyeron los cimientos del mundo moderno.",
                comoExplicar: [
                    "Todas las primeras civilizaciones nacieron pegadas a un gran río (para tomar agua y regar cultivos). Sin río, no hay imperio.",
                    "Egipto creía tanto en la vida después de la muerte, que momificaba a los reyes para que no se pudrieran.",
                    "Los Griegos inventaron la Democracia (Votar) y amaban pensar y hacer ejercicio (por eso hacían las Olimpiadas desnudos).",
                    "Roma conquistó el mundo con su ejército, e inventó el cemento y las tuberías de agua (acueductos)."
                ],
                truco: "Diles que hoy todavía somos Griegos y Romanos disfrazados: Si tú votas (Democracia), haces matemáticas (Pitágoras), o hablas Español (que viene del Latín romano), estás copiando a la Antigüedad.",
                error_comun: "Tratar de memorizar todas las dinastías chinas o faraones. Enfócate en los grandes APORTES: China = Pólvora y Brújula. Grecia = Democracia y Filosofía. Roma = Leyes e Ingeniería. Egipto = Arquitectura colosal y papel (papiro).",
                actividad_casa: "Momificadores por un Día: Compra una salchicha de hot-dog barata. Cúbranla entera con muchísima sal, bicarbonato y polvo en un recipiente por 2 semanas. Explica que la sal seca el cuerpo robándole el agua (como hacían en Egipto). Al sacarla, ¡estará momificada y no olerá mal!"
            },
            guiaMaestro: {
                objetivo: "El alumno localiza espacialmente las civilizaciones agrícolas y del Mediterráneo, valorando su legado cultural, político y tecnológico al mundo actual.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["egipto grecia y roma", "civilizaciones agricolas 6 primaria", "aportaciones de mesopotamia"]
        },
        {
            bloque: 3,
            nombre: "La Edad Media en Europa y Oriente",
            meses: "Diciembre – Enero",
            enClase: [
                "Caída del Imperio Romano e inicio de la Edad Media",
                "El Feudalismo (Castillos, Reyes, Caballeros, y Siervos)",
                "El papel de la Iglesia Católica y los monasterios",
                "El Islam y la expansión árabe (los grandes médicos y matemáticos)",
                "Las Cruzadas (Guerras santas por Jerusalén)"
            ],
            guiaPapa: {
                intro: "La época de los castillos de piedra, las armaduras y el misterio. Fueron 1000 años donde Europa se encerró por miedo a las guerras, mientras los árabes inventaban las ciencias.",
                comoExplicar: [
                    "Cuando Roma cayó, los bárbaros atacaban a todos. Para defenderse, los reyes hicieron Castillos. El campesino (siervo) trabajaba la tierra a cambio de que el Caballero lo dejara vivir detrás del muro.",
                    "La religión mandaba en todo. Si alguien pensaba diferente, lo castigaban.",
                    "Mientras Europa estaba sucia y en la oscuridad leyendo poco, los Árabes en Oriente (Islam) inventaron el Álgebra, los mejores hospitales y trajeron el ajedrez."
                ],
                truco: "El truco de la Pirámide Feudal: Hasta arriba está la corona (Rey). Abajo de él los guerreros (Caballeros y nobles) y el Papa. Hasta abajo, cargando todo el peso para que comieran los de arriba, millones de campesinos sin derechos. Así funcionó el mundo 10 siglos.",
                error_comun: "Creer que la Edad Media fue pura oscuridad. Explícales que ahí se inventaron los lentes (gafas), las universidades modernas y los grandes relojes mecánicos.",
                actividad_casa: "Escudos de Caballería (Heráldica): Los caballeros usaban escudos pintados para reconocerse, ya que el casco les tapaba la cara. Compra un cartón grande, pídeles que recorten forma de escudo y diseñen el símbolo de su familia (con animales, cruces o colores que los representen)."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende la organización económica, social y política del feudalismo, y reconoce el papel de la Iglesia y el surgimiento del Islam en la Edad Media.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["el feudalismo primaria", "la edad media para niños", "las cruzadas y el islam"]
        },
        {
            bloque: 4,
            nombre: "El Renacimiento y la era de las exploraciones",
            meses: "Febrero – Marzo",
            enClase: [
                "El fin del Feudalismo y el resurgir de las ciudades",
                "El Renacimiento (Arte, Da Vinci, Miguel Ángel)",
                "El Humanismo: el hombre en el centro (y no solo la religión)",
                "La invención de la imprenta (Gutenberg) y su impacto",
                "Las grandes exploraciones marítimas (Magallanes, Colón) y la caída de Constantinopla"
            ],
            guiaPapa: {
                intro: "El mundo despierta de una siesta de mil años. El arte vuelve a brillar, se inventan los libros baratos y los europeos descubren (para ellos) que el mundo es redondo y gigantesco.",
                comoExplicar: [
                    "Renacimiento significa 'volver a nacer'. Los artistas volvieron a pintar cuerpos hermosos copiando a los antiguos griegos, dejando los dibujos planos medievales.",
                    "Antes de la imprenta, los monjes copiaban los libros A MANO, uno por uno. Un libro valía lo que una casa. Gutenberg inventó una máquina de letras de metal y, de pronto, ¡miles de libros para todos!",
                    "Como los turcos cerraron el paso hacia la India y China, los europeos buscaron viajar por el mar para encontrar especias (pimienta) y ¡zaz! se toparon con América."
                ],
                truco: "Leonardo Da Vinci es el mejor ejemplo del Renacimiento: pintaba la Mona Lisa de día, abría cadáveres para estudiar sus venas de tarde, y diseñaba helicópteros de noche. ¡Eso era ser humanista, saber de todo!",
                error_comun: "Pensar que en la Edad Media todos creían que la Tierra era plana y Colón demostró que era redonda. ¡Los científicos ya sabían que era redonda desde los griegos! Lo que Colón calculó mal fue el TAMAÑO de la Tierra (creyó que era mucho más pequeña).",
                actividad_casa: "La Imprenta de Papa o Manzana: Corta una papa a la mitad y tálale la inicial de su nombre en relieve. Ponle pintura e invítalo a 'sellar' mil veces en un papel. Explícale que gracias a ese principio básico, hoy existen los cómics y los libros de texto."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza el florecimiento del arte renacentista, el impacto de la imprenta en la difusión del conocimiento y las causas de los viajes de exploración.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["el renacimiento niños", "invencion de la imprenta gutenberg", "humanismo 6 primaria"]
        },
        {
            bloque: 5,
            nombre: "La Revolución Industrial y el mundo moderno",
            meses: "Abril – Junio",
            enClase: [
                "La Revolución Industrial: Máquina de vapor y fábricas de carbón",
                "El paso del trabajo artesanal (a mano) a la producción en masa",
                "Las pésimas condiciones obreras y el surgimiento de los sindicatos",
                "Los grandes inventos (electricidad, teléfono, vacunas modernas)",
                "Reflexión de cómo las máquinas nos cambiaron para siempre"
            ],
            guiaPapa: {
                intro: "El último capítulo histórico del ciclo. Aquí descubren por qué viven rodeados de cosas de plástico, por qué usan focos en la noche y el nacimiento de las vacaciones laborales.",
                comoExplicar: [
                    "Antes, un zapatero tardaba 3 días en hacer un par de zapatos. Con la Revolución Industrial, una máquina a vapor hacía 100 zapatos en 1 hora.",
                    "Las ciudades se llenaron de humo negro (carbón). Los obreros trabajaban 16 horas y hasta los niños pequeños tenían que ir a las fábricas.",
                    "Hartos de la injusticia, los obreros se unieron (Sindicatos) para exigir tener domingos libres y que los niños no trabajaran.",
                    "La electricidad y las vacunas duplicaron los años que vivimos los humanos de golpe."
                ],
                truco: "Diles que fue un trato cruel: La humanidad consiguió ropa barata, comida rápida y luz eléctrica, pero a cambio destruimos el medio ambiente y empezamos a vivir estresados. Ese es el mundo que ellos están heredando.",
                error_comun: "Mencionar 'Revolución' y pensar en armas y caballos. Hazles clarísimo que fue una revolución TECNOLÓGICA. La máquina de vapor venció a las espadas sin disparar un tiro, cambiando el mundo más rápido que cualquier guerra militar.",
                actividad_casa: "Cadena de Montaje: Si van a preparar sándwiches para todos en la semana, primero haz que tu hijo haga uno completo, paso a paso (artesanal). Luego enséñale la 'línea de montaje industrial': pon todos los panes en fila, pónganle mayonesa a todos seguidos, luego el jamón a todos. Verá lo rapidísimo que es la producción en masa."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza el impacto económico, social y ambiental de la Revolución Industrial y comprende las luchas por los derechos laborales.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 5"
            },
            keywords: ["la revolucion industrial primaria", "maquina de vapor", "consecuencias de la produccion en masa"]
        }
    ]
};

export const FORMACION_P6: MateriaContenido = {
    ...FORMACION_P3, 
    // Fase 5 Cierre. Misma estructura ética fundamental.
};

export const EDUCACION_FISICA_P6: MateriaContenido = {
    ...EDUCACION_FISICA_P3,
};

export const ARTES_P6: MateriaContenido = {
    ...ARTES_P3,
};


export const PRIMARIA_6: GradoContenido = {
    grado: "primaria-6",
    nombre: "6° Primaria",
    emoji: "🎓",
    materias: {
        matematicas: MATEMATICAS_P6,
        espanol: ESPANOL_P6,
        ciencias: CIENCIAS_P6,
        historia: HISTORIA_P6,
        geografia: GEOGRAFIA_P6,
        formacion: FORMACION_P6,
        educacion_fisica: EDUCACION_FISICA_P6,
        artes: ARTES_P6,
        lenguas: LENGUAS_P6
    }
};
