// Base de datos de contenido "masticado" para papás y maestros
// Primaria 4° — Ciclo escolar 2025-2026 SEP México

import type { GradoContenido, MateriaContenido } from './content-types';
import { PRIMARIA_3 } from './content-primaria3-slim';

const LENGUAS_P4: MateriaContenido = {
    materia: "lenguas",
    nombre: "Lenguas Indígenas",
    emoji: "🗣️",
    color: "#9333EA",
    bloques: [
        { bloque: 1, nombre: "Proyecto en mi lengua: Ch'ol", meses: "Todo el ciclo" },
        { bloque: 2, nombre: "Proyecto en mi lengua: Maya", meses: "Todo el ciclo" },
        { bloque: 3, nombre: "Proyecto en mi lengua: Náhuatl", meses: "Todo el ciclo" },
        { bloque: 4, nombre: "Proyecto en mi lengua: Zapoteco", meses: "Todo el ciclo" },
        { bloque: 5, nombre: "Proyecto en mi lengua: Mixteco", meses: "Todo el ciclo" }
    ]
};

const MATEMATICAS_P4: MateriaContenido = {
    materia: "matematicas",
    nombre: "Matemáticas",
    emoji: "📐",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Números grandes y el algoritmo de la multiplicación",
            meses: "Agosto – Septiembre",
            enClase: [
                "Lectura y escritura de números hasta de 5 cifras (decenas de millar)",
                "El algoritmo convencional de la multiplicación (por dos cifras)",
                "Estimación de resultados antes de multiplicar",
                "Problemas de combinatoria (cuántas combinaciones de ropa se pueden hacer)",
                "Uso de dinero y billetes grandes"
            ],
            guiaPapa: {
                intro: "Los números crecen. Los niños ya dominaron las tablas en 3°, ahora van a multiplicar 'a lo grande'. Es el momento de enseñarles el valor del dinero real.",
                comoExplicar: [
                    "Para leer números grandes, enséñales el 'truco de la coma': cada 3 números de derecha a izquierda ponemos una coma, que se llama 'MIL'.",
                    "La multiplicación de dos cifras (ej. 23x14) requiere orden. El 'espacio mágico' (el cero) que se deja abajo es vital.",
                    "Antes de calcular en papel, fuérzalo a adivinar (estimar): '¿30x20 es más o menos que 100?'.",
                    "Usen billetes de Monopolio o dibujados para entender las decenas de millar."
                ],
                truco: "El 'Hotel de los Números': El 1 vive en el cuarto de las Unidades. El 10 en las Decenas. El 1000 en el VIP (Millares). Si pones un número en el cuarto equivocado, el resultado de la multiplicación se arruina. Cuadrícula es indispensable.",
                error_comun: "En la multiplicación de 2 cifras, olvidar sumar el 'llevo' o poner los resultados amontonados. Usa un cuaderno de cuadro GRANDE para que cada número tenga su propia 'casita'.",
                actividad_casa: "El Cajero de Banco: Dale recortes de billetes de 1,000, 100, 10 y monedas de 1. Pídele que te pague cantidades exactas (ej. 'Dame $4,325 pesos'). Luego tú devuélvele un poco y que te diga cuánto quedó."
            },
            guiaMaestro: {
                objetivo: "El alumno lee, escribe y ordena números naturales hasta de 5 cifras, y resuelve problemas usando el algoritmo convencional de la multiplicación.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["multiplicacion 2 cifras", "numeros de 5 cifras", "matematicas cuarto primaria"]
        },
        {
            bloque: 2,
            nombre: "División con galera y problemas inversos",
            meses: "Octubre – Noviembre",
            enClase: [
                "Algoritmo de la división (la 'casita' o galera)",
                "El concepto de residuo (lo que sobra)",
                "Problemas que requieren decidir qué hacer con el residuo",
                "Multiplicar para comprobar divisiones",
                "Cálculo mental de mitades y tercios rápidos"
            ],
            guiaPapa: {
                intro: "La famosa 'casita' de la división entra en escena. Puede ser frustrante, pero es solo un proceso de 4 pasos que se repite una y otra vez.",
                comoExplicar: [
                    "Los 4 pasos mágicos: DIVIDE, MULTIPLICA, RESTA y BAJA. Haz un cartel con estos pasos.",
                    "El número de adentro es la cantidad de dulces, el de afuera son los niños. ¡Los dulces van adentro de la casa!",
                    "El residuo es lo que 'ya no alcanza para repartir parejo'.",
                    "Hazle ver que la división siempre usa a su mejor amiga (la multiplicación) para resolverse."
                ],
                truco: "D.M.R.B. (Papá, Mamá, Hermano, Bebé): Divide (Papá), Multiplica (Mamá), Resta (Hermano mayor), Baja (Bebé). Recordar la familia les ayuda a recordar el orden del algoritmo de la división.",
                error_comun: "Bajar dos números al mismo tiempo sin poner un CERO arriba. Enséñales que 'si bajas a alguien y no le das dulce, le pones un cero arriba como castigo'.",
                actividad_casa: "Fiesta de los Residuos: Pídele que reparta 23 galletas o frijoles entre 4 platos. Cuando le sobren 3, pregúntale: '¿Por qué no pones otro en cada plato?' (Porque sería injusto, uno se queda sin nada). Eso es el residuo."
            },
            guiaMaestro: {
                objetivo: "El alumno resuelve problemas de división mediante diversos algoritmos y comprende el significado del residuo.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["division con galera", "como dividir primaria", "residuo cuarto primaria"]
        },
        {
            bloque: 3,
            nombre: "Suma y resta de fracciones",
            meses: "Diciembre – Enero",
            enClase: [
                "Fracciones equivalentes (amplificación)",
                "Suma de fracciones con igual denominador",
                "Resta de fracciones con igual denominador",
                "Representación en la recta numérica",
                "Introducción a fracciones decimales (décimos y centésimos)"
            ],
            guiaPapa: {
                intro: "Ya saben qué es una fracción, ahora van a sumar pedazos. El secreto es entender que no puedes sumar papas con manzanas, ni medios con cuartos.",
                comoExplicar: [
                    "Si los denominadores (los de abajo) son iguales, solo se suman los de arriba. ¡El de abajo se queda intacto!",
                    "Si son diferentes (1/2 + 1/4), tienes que cortarlos para que se vean iguales. 1/2 es lo mismo que 2/4.",
                    "La recta numérica es una regla súper poderosa donde el 1 es una pizza entera.",
                    "Décimos es partir la pizza en 10 partes delgaditas. Centésimos es partirla en 100 migajas."
                ],
                truco: "La regla del apellido: El número de abajo es el 'apellido' de la familia. Si sumas 2 Cuartos + 1 Cuarto, el resultado es 3 Cuartos. ¡El apellido no cambia! (Nunca sumen los denominadores).",
                error_comun: "Sumar tanto el numerador como el denominador (ej. 1/4 + 2/4 = 3/8). Usa la analogía del apellido familiar constantemente para erradicar este error.",
                actividad_casa: "La Receta Fracturada: Busca una receta de cocina que use cuartos y medios (ej. 1/2 taza de leche, 1/4 de aceite). Pídele que mida los ingredientes reales con las tazas medidoras. Si necesitan 3/4, que llene la de 1/4 tres veces."
            },
            guiaMaestro: {
                objetivo: "El alumno suma y resta fracciones con igual denominador y reconoce fracciones equivalentes usando representaciones gráficas.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["suma de fracciones igual denominador", "fracciones 4 primaria", "recta numerica fracciones"]
        },
        {
            bloque: 4,
            nombre: "Geometría: Ángulos y polígonos",
            meses: "Febrero – Marzo",
            enClase: [
                "Uso del transportador para medir ángulos",
                "Ángulos rectos (90°), agudos y obtusos",
                "Clasificación de triángulos (equilátero, isósceles, escaleno)",
                "Cálculo de área con cuadrícula",
                "Simetría axial y figuras reflejadas"
            ],
            guiaPapa: {
                intro: "La geometría toma nivel de ingeniería. Los niños usarán instrumentos de medición (el transportador) para entender las esquinas del mundo.",
                comoExplicar: [
                    "Un ángulo es la abertura entre dos líneas. Una puerta medio abierta es un ángulo agudo, totalmente abierta es un ángulo llano.",
                    "El ángulo recto (90°) es la esquina perfecta de una hoja de papel o de una pared.",
                    "El transportador requiere alinear siempre el 'ombligo' (el centro) con la punta de la esquina.",
                    "Área es cuántos 'cuadritos' caben ADENTRO de una figura. (Perímetro era solo la barda de afuera)."
                ],
                truco: "El devorador de ángulos: Haz una 'boca de Pac-Man' con los dedos de la mano. Si la boca está un poco cerrada es AGUDO. Si parece una esquina perfecta (L) es RECTO. Si la abres demasiado es OBTUSO.",
                error_comun: "Leer el número equivocado en el transportador (ya que tiene dos filas de números, de izquierda a derecha y viceversa). Enséñale que siempre debe empezar a contar desde el CERO donde descansa la línea.",
                actividad_casa: "El Detective de Ángulos: Dale su escuadra (la que tiene forma de L de 90°). Que busque por toda la casa 5 ángulos que encajen perfectos (rectos), 3 que sean más pequeños (agudos) y 3 más grandes (obtusos)."
            },
            guiaMaestro: {
                objetivo: "El alumno mide ángulos con el transportador, clasifica triángulos por la medida de sus lados y comprende el concepto de área en cuadrículas.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["uso del transportador niños", "angulos agudos y obtusos", "area en cuadricula"]
        },
        {
            bloque: 5,
            nombre: "Estadística, moda y gráficos",
            meses: "Abril – Junio",
            enClase: [
                "Lectura de gráficas de barras y pictogramas complejos",
                "El concepto de Moda (el dato que más se repite)",
                "Diseño de encuestas con opciones múltiples",
                "Problemas de proporcionalidad simple (recetas)",
                "Repaso general de operaciones básicas"
            ],
            guiaPapa: {
                intro: "Los datos nos cuentan historias. Aquí aprenden a analizar qué prefiere la mayoría y cómo calcular si necesitamos hacer más comida para más invitados.",
                comoExplicar: [
                    "La 'Moda' en matemáticas es igual que en la ropa: es lo que TODO MUNDO usa. El dato que más gana.",
                    "Un pictograma usa dibujitos en lugar de barras (ej. cada dibujo de manzana vale 10 manzanas).",
                    "Proporcionalidad es magia culinaria: si para un pastel uso 2 huevos, para hacer dos pasteles usaré... ¡4 huevos!",
                    "Las gráficas nos ayudan a no tener que leer miles de números aburridos."
                ],
                truco: "Dibuja una tabla de conteo cada vez que vean deportes. Anota los pases o tiros de esquina. Ver que los datos cambian en tiempo real los hace comprender la estadística como algo vivo.",
                error_comun: "En los pictogramas, ignorar la 'clave' (ej. si una estrella vale 5 puntos, ellos cuentan solo 1 estrella). Subraya siempre la clave en rojo antes de resolver.",
                actividad_casa: "La Receta Multiplicada: Busquen una receta de hotcakes que alcance para 4 personas. Dile: 'Vamos a invitar a los abuelos y seremos 8. ¿Cuánto tenemos que poner de harina y leche?'. Que escriba la nueva receta proporcional."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza gráficas de barras, identifica la moda en un conjunto de datos y resuelve situaciones de variación proporcional simple.",
                competencia: "Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["la moda en matematicas", "proporcionalidad cuarto primaria", "pictogramas niños"]
        }
    ]
};

const ESPANOL_P4: MateriaContenido = {
    materia: "espanol",
    nombre: "Español",
    emoji: "📚",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "El croquis y la descripción de trayectos",
            meses: "Agosto – Septiembre",
            enClase: [
                "Lectura e interpretación de croquis",
                "Uso de siglas y abreviaturas (ej. Av., Blvd.)",
                "Puntos cardinales (Norte, Sur, Este, Oeste)",
                "Descripciones precisas de trayectos usando referencias",
                "La rosa de los vientos"
            ],
            guiaPapa: {
                intro: "Antes de los GPS y Google Maps, existían los mapas en papel. Entender el espacio y saber dar indicaciones claras es una habilidad de supervivencia urbana.",
                comoExplicar: [
                    "Un croquis es un mapa 'dibujado rápido' visto desde el cielo.",
                    "No basta decir 've para allá'. Hay que decir: 'Camina 2 cuadras al Norte y gira al Este en la panadería'.",
                    "Las abreviaturas son atajos de las palabras grandes porque los letreros de las calles son chiquitos.",
                    "Muestra cómo Google Maps también es un croquis gigante y usen el muñequito de Street View."
                ],
                truco: "NO SE: Norte arriba, Sur abajo, Este a la derecha, Oeste a la izquierda. Pídeles que escriban la palabra 'NOSE' imaginando un reloj. N a las 12, S a las 6, E a las 3, O a las 9.",
                error_comun: "Dar indicaciones usando 'arriba/abajo' (ej. vete para arriba en la calle). Las calles no suben al cielo. Corrige usando 'Norte/Sur' o 'hacia adelante/atrás'.",
                actividad_casa: "El Tesoro Escondido: Esconde un premio en casa. Dibuja un croquis plano de la casa (sala, cocina) y trázale la ruta. Usa instrucciones como 'Avanza al Norte de la sala, dobla al Este de la mesa...'."
            },
            guiaMaestro: {
                objetivo: "El alumno interpreta croquis, utiliza abreviaturas espaciales y redacta descripciones precisas de trayectos usando puntos cardinales.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["croquis cuarto primaria", "puntos cardinales niños", "abreviaturas y siglas"]
        },
        {
            bloque: 2,
            nombre: "Monografías y textos expositivos",
            meses: "Octubre – Noviembre",
            enClase: [
                "Estructura de la monografía (introducción, desarrollo, conclusión)",
                "Uso de títulos y subtítulos",
                "Búsqueda de información en fuentes confiables",
                "Familias léxicas (pan: panadero, panadería)",
                "Uso de nexos lógicos (porque, sin embargo, además)"
            ],
            guiaPapa: {
                intro: "Llega la investigación seria. Una monografía es un texto que explica a fondo UN SOLO TEMA, desde los ajolotes hasta el sistema solar.",
                comoExplicar: [
                    "La monografía es como desarmar un reloj: explicas pieza por pieza en orden usando subtítulos.",
                    "Las fuentes confiables son libros, enciclopedias y sitios web oficiales. Wikipedia es un inicio, pero hay que verificar.",
                    "Las palabras tienen familia (Léxica) como nosotros: Flor, florero, florista. Comparten la misma 'raíz'.",
                    "Los nexos son el 'pegamento' que une las oraciones para que no suenen como robot."
                ],
                truco: "La regla de las 3 C para buscar en internet: Checar, Comprobar y Contrastar. Si el dato del Tiranosaurio Rex aparece en tres páginas distintas, probablemente es verdad.",
                error_comun: "Hacer Copy-Paste (Copiar y pegar) directo de internet sin leer. Exige siempre que, después de buscar la información, cierren la pantalla y te lo expliquen con sus palabras antes de escribir.",
                actividad_casa: "La Monografía del Abuelo: Que investiguen la vida del abuelo o de una tía. Que hagan subtítulos (Infancia, Trabajo, Gustos). Que lo entrevisten, escriban los datos y se lo presenten en familia."
            },
            guiaMaestro: {
                objetivo: "El alumno elabora monografías breves organizando la información con títulos y subtítulos, utilizando nexos adecuados.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["monografias primaria", "textos expositivos niños", "familias lexicas"]
        },
        {
            bloque: 3,
            nombre: "Refranes, fábulas y moralejas",
            meses: "Diciembre – Enero",
            enClase: [
                "Características y función de los refranes",
                "La fábula y sus personajes (animales humanizados)",
                "El concepto de moraleja (enseñanza)",
                "Lenguaje figurado en la sabiduría popular",
                "Elaboración de una fábula propia"
            ],
            guiaPapa: {
                intro: "Este es el bloque más sabio. Los niños descubrirán que los abuelos son poetas cuando dicen refranes, y que los animales pueden darnos grandes lecciones éticas.",
                comoExplicar: [
                    "Un refrán es una 'pastilla de sabiduría' concentrada en una rima. ('Más vale pájaro en mano...').",
                    "Las fábulas son historias cortas donde animales hablan y actúan como humanos para enseñarnos un error.",
                    "La moraleja es el regalito o consejo que te deja la historia al final.",
                    "El lenguaje figurado hace que el mensaje pegue más fuerte en el cerebro."
                ],
                truco: "El juego de la traducción literal: Pídele que dibuje literalmente un refrán (ej. 'Camarón que se duerme se lo lleva la corriente'). Al ver el dibujo de un camarón en una cama bajo el agua, entenderán que no trata de crustáceos, sino de oportunidades.",
                error_comun: "No entender el sentido figurado y tomar el refrán literalmente. Haz muchas preguntas: '¿Tú crees que de verdad habla de un árbol torcido o habla de los malos hábitos de las personas?'",
                actividad_casa: "Batalla de Refranes con la Abuela: Llámenla por teléfono. Retenla a decir la primera mitad de un refrán y ustedes tienen que adivinar la segunda mitad (o viceversa). 'Agua que no has de beber...'"
            },
            guiaMaestro: {
                objetivo: "El alumno interpreta el significado de refranes y fábulas, reconociendo el lenguaje figurado y la función de la moraleja.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["refranes niños", "fabulas y moralejas 4 primaria", "sentido figurado primaria"]
        },
        {
            bloque: 4,
            nombre: "El texto instructivo y los recetarios",
            meses: "Febrero – Marzo",
            enClase: [
                "Estructura de un instructivo (materiales y procedimiento)",
                "Uso de viñetas, números e ilustraciones",
                "Verbos en infinitivo (cortar) e imperativo (corta)",
                "Secuencia lógica temporal (primero, después, finalmente)",
                "Escritura de recetas tradicionales"
            ],
            guiaPapa: {
                intro: "Aprender a dar órdenes claras y a seguirlas. El texto instructivo es el corazón de la programación moderna y de la cocina tradicional.",
                comoExplicar: [
                    "Un instructivo sin orden es un desastre asegurado. Si pones el techo antes de los muros, la casa se cae.",
                    "El infinitivo son los verbos que terminan en AR, ER, IR. Suenan serios y sin dueño.",
                    "El imperativo es dar una orden directa: '¡Pica la cebolla!'.",
                    "Las viñetas (puntitos) son para los ingredientes, los números son para los pasos."
                ],
                truco: "Para recordar los verbos en infinitivo, diles que son 'Verbos Tarzán': 'Yo comer, yo saltar, yo dormir'.",
                error_comun: "Omitir pasos evidentes al redactar. (Ej. 'Echa el huevo al sartén' sin haber dicho 'Rompe el huevo'). Enséñales que un instructivo es para alguien que viene de otro planeta y no sabe nada.",
                actividad_casa: "El Chef Robot: Que el niño escriba los 5 pasos para prepararse un sándwich. Tú serás el robot. Si omitió decir 'abre la bolsa del pan', tú pones la bolsa entera sobre el plato. Le dará mucha risa y entenderá la importancia de los detalles."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende y redacta textos instruccionales utilizando secuencia cronológica, viñetas y verbos en infinitivo o imperativo.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["textos instructivos 4 primaria", "verbos en infinitivo", "como escribir una receta"]
        },
        {
            bloque: 5,
            nombre: "Noticias y medios de comunicación",
            meses: "Abril – Junio",
            enClase: [
                "Estructura de la noticia (Titular, entrada, cuerpo)",
                "Las 5 preguntas del periodismo (Quién, qué, cuándo, dónde, por qué)",
                "Diferencia entre un hecho y una opinión",
                "Secciones de un periódico impreso y digital",
                "Redacción de la noticia escolar"
            ],
            guiaPapa: {
                intro: "Cerramos formando ciudadanos críticos. En la era de las noticias falsas, distinguir un hecho de una opinión es el mejor regalo que le puedes dar a su mente.",
                comoExplicar: [
                    "El titular debe ser el 'gancho' que atrapa al lector.",
                    "La regla de oro del reportero: Contestar las 5 preguntas (Qué pasó, Quién lo hizo, Dónde fue, Cuándo ocurrió, Por qué pasó).",
                    "Un HECHO es comprobable ('Llovió hoy'). Una OPINIÓN es personal ('La lluvia es fea').",
                    "No todo lo que está en internet es noticia, mucho es publicidad disfrazada."
                ],
                truco: "El detector de opiniones: Enséñale que si la frase tiene un adjetivo calificativo (ej. 'El terrible partido', 'La hermosa actriz'), casi siempre es una opinión disfrazada de noticia.",
                error_comun: "Redactar noticias escribiendo la conclusión hasta el final. En periodismo se usa la 'Pirámide Invertida': lo más importante y jugoso va en el primerísimo párrafo, los detalles aburridos al final.",
                actividad_casa: "El Noticiero Familiar de Domingo: Que elija un evento chistoso que pasó en la semana (ej. 'El perro se robó un calcetín'). Que redacte la nota contestando las 5 preguntas periodísticas y lo lea en la mesa con voz grave de presentador de noticias."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica la estructura de una nota informativa, discrimina hechos de opiniones y redacta noticias respondiendo las preguntas periodísticas básicas.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 4"
            },
            keywords: ["partes de la noticia", "hecho y opinion primaria", "redaccion periodistica escolar"]
        }
    ]
};

const CIENCIAS_P4: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias Naturales",
    emoji: "🔬",
    color: "#10B981",
    bloques: [
        {
            bloque: 1,
            nombre: "El cuerpo humano: Vacunas y sistema nervioso",
            meses: "Agosto – Septiembre",
            enClase: [
                "El sistema nervioso como 'computadora' del cuerpo",
                "El cerebro, los nervios y los reflejos",
                "Sistema inmunológico: nuestras defensas",
                "¿Qué son las vacunas y cómo nos protegen?",
                "Enfermedades infecciosas y prevención"
            ],
            guiaPapa: {
                intro: "Entramos a las maravillas invisibles del cuerpo. Entenderán por qué los piquetes de las vacunas valen la pena y cómo su cerebro controla hasta el latido de su corazón.",
                comoExplicar: [
                    "El cerebro es el Jefe supremo. Los nervios son los cables eléctricos que llevan las órdenes a la mano para que se mueva.",
                    "Un reflejo es cuando el cuerpo se protege tan rápido que no le da tiempo de avisarle al jefe (el cerebro). (Ej. quitar la mano de algo caliente).",
                    "Las vacunas son 'simulacros de guerra'. Le meten al cuerpo un virus dormido para que las defensas entrenen y cuando llegue el virus real, sepan cómo destruirlo."
                ],
                truco: "Para explicar los nervios, jueguen al 'teléfono descompuesto' tocándose la espalda en fila. El último (el cerebro) debe adivinar el mensaje que mandó el primero (la mano).",
                error_comun: "Creer que las vacunas son la medicina que 'cura'. Hay que recalcar que las vacunas PREVIENEN antes de estar enfermos. Los antibióticos curan después.",
                actividad_casa: "Prueba de Reflejos Ninja: Pídele que se siente cruzando la pierna. Dale un golpecito muy suave justo debajo de la rodilla con el canto de la mano para ver cómo patea solo (Reflejo rotuliano). ¡Se sorprenderá de no poder controlarlo!"
            },
            guiaMaestro: {
                objetivo: "El alumno explica el funcionamiento básico del sistema nervioso y reconoce el valor histórico y biológico de las vacunas en la salud pública.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["sistema nervioso niños", "como funcionan las vacunas", "ciencias 4 primaria"]
        },
        {
            bloque: 2,
            nombre: "Ecosistemas y cadenas alimentarias",
            meses: "Octubre – Noviembre",
            enClase: [
                "Componentes de un ecosistema (seres vivos y clima)",
                "Cadenas tróficas: Productores, consumidores y descomponedores",
                "Ecosistemas de México (selva, desierto, bosque)",
                "Equilibrio ecológico y alteración humana",
                "Especies endémicas de nuestro país (ajolote, teporingo)"
            ],
            guiaPapa: {
                intro: "La biología en su máximo esplendor. Los niños descubrirán quién se come a quién en la naturaleza y por qué si desaparece una abeja, el mundo entero está en peligro.",
                comoExplicar: [
                    "Las plantas son las únicas 'productoras' porque hacen su propia comida con el sol. ¡Tienen magia solar!",
                    "Consumidores primarios comen plantas (vaca), secundarios comen carne (lobo).",
                    "Los descomponedores (hongos y bacterias) son los equipos de limpieza del bosque. Sin ellos, el mundo estaría lleno de basura natural.",
                    "Ecosistema significa que TODO está conectado con hilos invisibles."
                ],
                truco: "El Juego de Jenga del Ecosistema: Haz una torre de Jenga. Etiqueta bloques de abajo como 'agua', 'plantas', y los de arriba como 'halcones'. Si quitas un pájaro, la torre sigue. Si quitas las plantas o el agua, todo colapsa. ¡Perfecta demostración visual!",
                error_comun: "Creer que los depredadores (leones, tiburones) son 'malos'. Enseña que en la naturaleza no hay buenos ni malos, solo equilibrio. Si no hubiera leones, habría demasiadas cebras y se acabarían el pasto.",
                actividad_casa: "Investigador de Endémicos: Busquen en Google Imágenes qué es un Ajolote o una Vaquita Marina. Háblale sobre qué significa que sean 'endémicos' (que no existen en ningún otro lado del planeta) y dibújenlos."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica componentes bióticos y abióticos de un ecosistema e infiere el flujo de energía en cadenas alimentarias.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["cadenas alimenticias primaria", "ecosistemas de mexico", "especies endemicas niños"]
        },
        {
            bloque: 3,
            nombre: "Materia, fricción y electricidad",
            meses: "Diciembre – Enero",
            enClase: [
                "Propiedades de los materiales (dureza, permeabilidad, flexibilidad)",
                "La fricción: la fuerza que nos frena",
                "Efectos del calor y la dilatación térmica",
                "Electricidad estática (frotamiento)",
                "Materiales conductores y aislantes de electricidad"
            ],
            guiaPapa: {
                intro: "Física y química aplicada a la vida real. Entenderán por qué los zapatos tienen suelas de goma y por qué les da 'toques' la manija de la puerta en invierno.",
                comoExplicar: [
                    "Dureza no es qué tan pesado es algo, es qué tan difícil es rayarlo (el diamante es lo más duro).",
                    "La fricción es el piso 'agarrando' tus zapatos. Si no hubiera fricción (como en el hielo), resbalaríamos para siempre.",
                    "El calor hace que los objetos se 'hinchen' (dilatación). Por eso los puentes de hierro tienen ranuras separadoras.",
                    "Conducir electricidad significa dejar que los electrones 'pasen libremente'. Los metales dicen 'pásale', el plástico dice 'alto ahí'."
                ],
                truco: "Fricción con las manos: Pídele que frote sus manos súper rápido por 20 segundos y sienta cómo se calientan. La fricción roba energía de movimiento y la convierte en calor.",
                error_comun: "Confundir flexibilidad con fragilidad. Una liga es flexible pero no es frágil. Un cristal no es flexible, pero sí es frágil. Usa objetos reales para mostrar la diferencia.",
                actividad_casa: "El Mago de los Globos: Infla un globo, frótalo vigorosamente contra el cabello de tu hijo durante 30 segundos, y pégalo en la pared o acerca papelitos cortados para que 'vuelen' hacia él. ¡Viva la electricidad estática!"
            },
            guiaMaestro: {
                objetivo: "El alumno clasifica materiales por sus propiedades físicas y experimenta con la fricción y la inducción de electricidad estática.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["friccion y electricidad niños", "propiedades de la materia 4 primaria", "conductores y aislantes"]
        },
        {
            bloque: 4,
            nombre: "La Luna, los eclipses y la luz",
            meses: "Febrero – Marzo",
            enClase: [
                "Propagación de la luz en línea recta",
                "Cuerpos opacos, traslúcidos y transparentes",
                "La formación de sombras y su uso en la historia (relojes solares)",
                "Movimientos de la Luna (28 días)",
                "Eclipses solares y lunares a detalle"
            ],
            guiaPapa: {
                intro: "Un bloque espectacular que mezcla óptica (el estudio de la luz) con astronomía. Entenderán cómo se comportan las sombras y por qué existen los eclipses.",
                comoExplicar: [
                    "La luz es floja, siempre viaja en línea recta. Nunca da la vuelta a las esquinas.",
                    "Transparente (vidrio, luz libre), Traslúcido (papel encerado, luz borrosa), Opaco (madera, luz bloqueada = sombra).",
                    "El reloj de sol funciona gracias a que la rotación de la tierra mueve la sombra a lo largo del día.",
                    "En un eclipse solar, la Luna se pone de entrometida bloqueando al sol."
                ],
                truco: "Construyan un reloj de sol casero con un lápiz clavado en plastilina en el centro de un plato de cartón. Marquen la sombra a las 10 am, 12 pm y 4 pm. Entenderán la rotación de la Tierra inmediatamente.",
                error_comun: "Creer que la sombra siempre tiene el mismo tamaño que el objeto. Explícales que el tamaño depende de la distancia entre la linterna y el objeto.",
                actividad_casa: "Laboratorio de Óptica con Láser: Si tienes un pequeño láser (o linterna muy potente de celular), enséñale que la luz no se dobla, pero que con un espejo puedes 'rebotarla' (reflexión) a donde quieras. Jueguen a darle a un blanco en la pared usando dos espejos de mano."
            },
            guiaMaestro: {
                objetivo: "El alumno deduce que la luz se propaga en línea recta, experimenta con materiales opacos y traslúcidos, y explica la mecánica de los eclipses.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["propagacion de la luz", "eclipses para niños", "opaco traslucido transparente"]
        },
        {
            bloque: 5,
            nombre: "Tecnología y proyectos ambientales",
            meses: "Abril – Junio",
            enClase: [
                "¿Qué es la tecnología? (No solo son computadoras, es la rueda también)",
                "Procesos de transformación humana en la naturaleza",
                "Impacto ambiental negativo de los avances tecnológicos",
                "Energías limpias y renovables",
                "Desarrollo del Proyecto Científico de cierre"
            ],
            guiaPapa: {
                intro: "Cerramos el año despertando a los ingenieros del futuro. Comprenderán que la tecnología son herramientas para solucionar problemas, y que conlleva gran responsabilidad.",
                comoExplicar: [
                    "Un lápiz, un martillo y una bicicleta son tecnología de altísimo nivel inventada hace mucho tiempo.",
                    "Las fábricas nos dan ropa y juguetes, pero generan humo y residuos. Eso es el impacto ambiental.",
                    "La energía solar (luz) y eólica (viento) son 'limpias' porque no queman nada y no se acaban.",
                    "El proyecto final trata de que ellos apliquen todo lo que aprendieron para resolver un problema de casa o de la escuela."
                ],
                truco: "Pregúntale siempre: '¿Cuál era el problema que esto solucionó?'. Si ve una cuchara -> el problema era quemarse la mano al sacar la sopa. Si ve un carro -> el problema era ir lento caminando.",
                error_comun: "Limitar el concepto de 'Tecnología' solo a aparatos electrónicos (celulares, tablets). Es crítico que entiendan que el arado de los romanos o el papel de los chinos fueron tecnologías que revolucionaron el mundo.",
                actividad_casa: "Inventores por un Día: Dale cinta de aislar, cartón, ligas, clips y palitos de paleta. El reto es que inventen una máquina (no electrónica) que resuelva un problema pequeño en casa (ej. un dispensador de croquetas para el perro, o un sujetador automático de puerta)."
            },
            guiaMaestro: {
                objetivo: "El alumno reflexiona sobre el impacto de la tecnología en el medio ambiente y aplica el método científico en la elaboración de un proyecto final sustentable.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 4"
            },
            keywords: ["que es la tecnologia primaria", "energias limpias niños", "proyectos ambientales escolares"]
        }
    ]
};

const GEOGRAFIA_P4: MateriaContenido = {
    materia: "geografia",
    nombre: "Geografía de México",
    emoji: "🌎",
    color: "#06B6D4",
    bloques: [
        {
            bloque: 1,
            nombre: "México en los mapas (Fronteras y división política)",
            meses: "Agosto – Septiembre",
            enClase: [
                "Límites territoriales de México (Norte, Sur, Golfos y Océanos)",
                "Las fronteras naturales (ríos) y artificiales (muros/monumentos)",
                "Los 32 estados de la República Mexicana",
                "Escala en los mapas",
                "Ubicación de coordenadas básicas"
            ],
            guiaPapa: {
                intro: "Bienvenidos a Geografía formal. En 3° vieron su estado, ahora van a volar sobre todo México. Dominar el mapa de nuestro país es cultura general indispensable.",
                comoExplicar: [
                    "Nuestros vecinos: Estados Unidos arriba (Norte), Guatemala y Belice abajo (Sur).",
                    "El Océano Pacífico nos baña a la izquierda (Oeste) y el Golfo de México a la derecha (Este).",
                    "Las fronteras naturales son hechas por Dios (Río Bravo, Río Suchiate). Las artificiales las hace el hombre.",
                    "32 piezas del rompecabezas: México está compuesto de 32 estados (entidades federativas)."
                ],
                truco: "Baja un mapa mudo (sin nombres) de México e impriman 5 copias. Compitan en la cena a ver quién puede llenar más estados en 3 minutos. El niño memoriza rapidísimo si es por competencia.",
                error_comun: "Tratar de memorizar los 32 estados por orden alfabético. Es mejor enseñarlos por regiones (Los del Norte seco, los del Sur selvático, los del Centro).",
                actividad_casa: "El Viaje Imaginario en Google Earth: Abran Google Earth en la computadora o celular. Pídele que 'vuele' desde su casa hasta la frontera Norte (Tijuana) y luego hacia el Sur profundo (Chiapas). Que vea cómo cambia el color del suelo en la vista satelital."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica la división territorial de México, localiza las 32 entidades y distingue las fronteras naturales y artificiales.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["mapa de mexico primaria", "division politica mexico", "fronteras de mexico niños"]
        },
        {
            bloque: 2,
            nombre: "El relieve y los ríos de México",
            meses: "Octubre – Noviembre",
            enClase: [
                "Las formas del relieve: llanuras, montañas, valles y mesetas",
                "Las grandes Sierras Madres de México",
                "Volcanes importantes (Popocatépetl, Pico de Orizaba)",
                "Vertientes y los ríos más largos (Río Bravo, Lerma, Usumacinta)",
                "Lagos y lagunas importantes"
            ],
            guiaPapa: {
                intro: "Si le quitas el agua y los árboles a México, ¿qué forma tiene? ¡Está arrugadísimo! Es el país de las montañas y los volcanes gigantes.",
                comoExplicar: [
                    "Una sierra es una fila india de montañas (como los dientes de un serrucho).",
                    "Una llanura es como un estacionamiento gigante y plano, perfecto para sembrar o criar vacas.",
                    "Un valle es la zona baja en forma de 'U' o 'V' entre dos montañas. ¡Ahí se fundan las ciudades!",
                    "Un río siempre nace en lo alto de la montaña por la lluvia o nieve y corre hacia abajo hasta el mar."
                ],
                truco: "El 'Sandwich Mexicano': Enséñale que México tiene una gran cordillera a la izquierda (Sierra Madre Occidental) y una a la derecha (Sierra Madre Oriental), y en el centro (el jamón) está la Altiplanicie donde vivimos la mayoría.",
                error_comun: "Confundir golfo con península. La península (Baja California, Yucatán) es un brazo de tierra que se mete al mar. El golfo es un 'bocado' que el mar le da a la tierra.",
                actividad_casa: "El Volcán de Plastilina 3D: Creen un volcán de plastilina en una bandeja. Explica que el relieve se forma desde adentro de la tierra. Luego hagan la clásica reacción de bicarbonato y vinagre para ver la 'erupción' y cómo la lava formaría nuevas montañas al enfriarse."
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce la distribución de los principales sistemas montañosos, ríos y vertientes oceánicas de México.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["relieve de mexico primaria", "sierras madres", "rios de mexico 4 primaria"]
        },
        {
            bloque: 3,
            nombre: "Clima, flora y fauna",
            meses: "Diciembre – Enero",
            enClase: [
                "Factores que modifican el clima (latitud y altitud)",
                "Regiones naturales de México (Selva, Bosque, Desierto, Costa)",
                "Flora característica de cada región (Cactus, Pinos, Caobas)",
                "Fauna y la biodiversidad mexicana",
                "Áreas Naturales Protegidas"
            ],
            guiaPapa: {
                intro: "México es uno de los países más 'megadiversos' del mundo. Pasas del desierto hirviente a la nieve o la selva tropical en solo unas horas en coche.",
                comoExplicar: [
                    "El clima no solo depende del sol, ¡depende de qué tan alto estás! En Toluca hace mucho frío porque está altísimo en la montaña, no porque el sol no le dé.",
                    "Selva = Mucha lluvia + calor. Desierto = Nada de lluvia + calor en el día/frío en la noche.",
                    "Biodiversidad significa 'la gran fiesta de la vida'. México tiene el boleto VIP de reptiles, pinos y anfibios a nivel mundial."
                ],
                truco: "Diles que en el Norte de México está el color Café (desiertos), en el Centro el Verde oscuro (bosques de pino), y en el Sur el Verde claro (selvas con tucanes y monos). Asignar colores fijos ayuda a la memoria visual.",
                error_comun: "Confundir clima con el 'estado del tiempo'. El tiempo es si hoy llueve o hay sol. El clima es cómo se comporta ese lugar durante muchísimos años. (Ej. 'El clima en Sonora es desértico, pero hoy el tiempo es lluvioso').",
                actividad_casa: "El Documental Megadiverso: Dediquen el sábado en la tarde a ver un documental de naturaleza sobre México (hay muchos gratis en YouTube sobre la migración de la mariposa monarca o los cenotes de Yucatán). Ver la fauna en acción vale más que leerlo."
            },
            guiaMaestro: {
                objetivo: "El alumno relaciona las regiones naturales de México con el tipo de clima, relieve y biodiversidad correspondiente.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["regiones naturales de mexico", "climas de mexico primaria", "biodiversidad mexicana 4"]
        },
        {
            bloque: 4,
            nombre: "Población y economía",
            meses: "Febrero – Marzo",
            enClase: [
                "Concentración y dispersión (campo vs. ciudad)",
                "Migración interna y externa",
                "Las lenguas indígenas y la riqueza cultural actual",
                "Actividades primarias (agricultura, ganadería, pesca, minería)",
                "Sectores secundario y terciario básicos (fábricas y comercio)"
            ],
            guiaPapa: {
                intro: "Pasamos de la tierra a la gente que vive en ella. Entenderán por qué todos se mudan a las ciudades y de dónde viene el alimento que llega a nuestro plato.",
                comoExplicar: [
                    "En la ciudad hay más escuelas y hospitales (concentración), pero más tráfico y ruido.",
                    "La migración ocurre cuando alguien tiene que dejar su casa buscando un mejor trabajo o escapar de algún peligro.",
                    "La agricultura es rascarle la comida a la tierra. La ganadería es cuidar animales para comerlos.",
                    "La minería (sacar plata y oro) fue lo que fundó ciudades como Zacatecas o Guanajuato."
                ],
                truco: "La cadena del pantalón: Enséñale la economía conectada. El agricultor planta el algodón (Primario). La fábrica hace la tela y la cose (Secundario). La tienda del centro comercial te lo vende a ti (Terciario).",
                error_comun: "Pensar que 'rural' significa pobre y 'urbano' rico. Explícales que ambos espacios son vitales: si el campo (rural) no siembra, la ciudad (urbana) no come. Existe una interdependencia absoluta.",
                actividad_casa: "Rastreadores del Supermercado: Ve al refrigerador o despensa y revisen 5 productos buscando el 'Hecho en...'. Traten de ubicar esos estados o países en un mapa. '¡Mira, el atún viene de Sinaloa! ¿Por qué? Porque tienen costa para pescar'. "
            },
            guiaMaestro: {
                objetivo: "El alumno analiza la distribución poblacional, causas de la migración y ubica espacialmente las principales actividades económicas de México.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["actividades economicas de mexico primaria", "migracion niños", "poblacion rural y urbana"]
        },
        {
            bloque: 5,
            nombre: "Desastres naturales y prevención",
            meses: "Abril – Junio",
            enClase: [
                "¿Qué es un desastre natural?",
                "Zonas sísmicas de México (Placas tectónicas)",
                "Huracanes y ciclones en el Golfo y el Pacífico",
                "Sistemas de alerta temprana e instituciones de protección civil",
                "Simulacros y medidas preventivas"
            ],
            guiaPapa: {
                intro: "Un bloque crucial para la seguridad. Al vivir en México, saber reaccionar ante temblores o huracanes no es una opción, es una necesidad de supervivencia civil.",
                comoExplicar: [
                    "La Tierra está hecha de 'piezas de rompecabezas' llamadas Placas Tectónicas. Cuando esas piezas chocan, el suelo tiembla. México está parado encima de 5 de ellas.",
                    "Un huracán es una tormenta gigante que nace en el agua caliente del mar y se debilita al tocar tierra.",
                    "Un desastre no se puede evitar, pero sus daños sí. Por eso existen los simulacros.",
                    "Protección Civil son los superhéroes de chaleco naranja."
                ],
                truco: "El 'No corro, No grito, No empujo' debe enseñarse como una ley de acero. Explicarles que el miedo es normal, pero entrar en pánico contagia al de al lado y causa más accidentes que el propio temblor.",
                error_comun: "Enseñar los sismos desde el miedo. La información da poder. Si saben que debajo de sus pies hay placas acomodándose como gigantes durmiendo, lo verán como un fenómeno científico, no como un monstruo que los quiere asustar.",
                actividad_casa: "Diseño del Plan Familiar de Protección Civil: Dibujen el croquis de la casa. Marquen con verde las zonas seguras (lejos de vidrios, debajo de vigas) y planeen un punto de reunión afuera de la casa en caso de que suene una alerta."
            },
            guiaMaestro: {
                objetivo: "El alumno reconoce zonas de riesgo por sismos o huracanes en México y desarrolla protocolos de prevención y protección civil.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["zonas sismicas de mexico primaria", "que hacer en un sismo", "desastres naturales 4 primaria"]
        }
    ]
};

const HISTORIA_P4: MateriaContenido = {
    materia: "historia",
    nombre: "Historia de México I",
    emoji: "🏛️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "El poblamiento de América a la agricultura",
            meses: "Agosto – Septiembre",
            enClase: [
                "El paso por el Estrecho de Bering (glaciación)",
                "Nómadas y cazadores-recolectores",
                "Aridoamérica, Oasisamérica y Mesoamérica",
                "El descubrimiento de la agricultura (maíz)",
                "De la cueva a las primeras aldeas sedentarias"
            ],
            guiaPapa: {
                intro: "Arrancamos el viaje en el tiempo desde el principio absoluto de los mexicanos. Tus hijos entenderán cómo pasamos de corretear mamuts a ser una de las cunas de la civilización mundial.",
                comoExplicar: [
                    "Hace miles de años hizo tanto frío que el mar se congeló y se hizo un 'puente de hielo'. Por ahí caminaron los primeros hombres desde Asia.",
                    "Los nómadas eran como los campistas extremos: si se acababan los animales en un lugar, levantaban su carpa de pieles y caminaban hacia otro.",
                    "Cuando alguien descubrió que si plantas una semilla nace comida, ¡el mundo cambió para siempre! Ya no tenían que viajar, nacieron las aldeas.",
                    "Mesoamérica es la parte verde y fértil de México, donde florecieron las grandes pirámides."
                ],
                truco: "Para explicar Aridoamérica (Arido=Seco, Norte del país) vs Mesoamérica (Meso=Mitad, Centro y Sur verde). Asocia Aridoamérica con cactus y cazadores corriendo; Mesoamérica con maíz y templos gigantes de piedra.",
                error_comun: "Pensar que los antiguos mexicanos siempre tuvieron pirámides. Hazles notar el inmenso salto tecnológico que hubo desde las lanzas de piedra hasta la agricultura. Fueron miles de años.",
                actividad_casa: "Menú de Nómadas vs Sedentarios: Un día ofrécele botana de semillas, nueces secas y un trozo de carne seca (así comían los cazadores nómadas). Otro día, dale una tortilla de maíz con frijoles (el alimento que creó a las civilizaciones sedentarias de Mesoamérica). ¡Historia que se come!"
            },
            guiaMaestro: {
                objetivo: "El alumno ubica temporal y espacialmente el poblamiento de América, distingue los conceptos nómada/sedentario y ubica las 3 áreas culturales de México antiguo.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["poblamiento de america para niños", "nomadas y sedentarios 4 primaria", "mesoamerica aridoamerica oasisamerica"]
        },
        {
            bloque: 2,
            nombre: "Las grandes culturas de Mesoamérica",
            meses: "Octubre – Noviembre",
            enClase: [
                "Olmecas: la cultura madre y las cabezas colosales",
                "Mayas: matemáticos, astrónomos y el número cero",
                "Teotihuacán: la ciudad de los dioses",
                "Zapotecas y Mixtecas (el trabajo de los metales)",
                "Religión politeísta y sacrificios"
            ],
            guiaPapa: {
                intro: "Entramos a la época dorada de las pirámides y los jaguares. México tiene una historia antigua tan fascinante e importante como los faraones de Egipto.",
                comoExplicar: [
                    "Los Olmecas son la 'mamá' de todas las demás culturas. Tallaron cabezas gigantes de piedra sin tener grúas.",
                    "Los Mayas eran los genios científicos. Inventaron el cero antes que los europeos y miraban las estrellas para saber cuándo sembrar.",
                    "En Teotihuacán están las pirámides del Sol y la Luna (cerca de CDMX). Eran tan grandes que hasta los Aztecas años después creían que la habían hecho dioses gigantes.",
                    "Politeísta significa que creían en muchos dioses (Dios de la Lluvia: Tláloc, Diosa del Agua: Chalchiuhtlicue)."
                ],
                truco: "Crea una línea de tiempo visual simple en la pared con Post-its: Primero Olmecas, en medio Teotihuacanos/Mayas, al final Aztecas (Mexicas). Muchos niños creen que todos vivieron al mismo tiempo y se conocieron. ¡Hay miles de años de diferencia entre ellos!",
                error_comun: "Juntar a los Aztecas con los Mayas. Es como decir que los Romanos y los astronautas vivieron juntos. Los Mayas clásicos ya habían abandonado sus grandes ciudades cuando los Aztecas fundaron Tenochtitlán.",
                actividad_casa: "Escultores Olmecas de Jabón: Compra un jabón de barra grueso y un palillo de madera. Retenlo a tallar una 'cabeza colosal olmeca' rascando el jabón con el palillo. Entenderá la enorme dificultad de tallar en 3D."
            },
            guiaMaestro: {
                objetivo: "El alumno caracteriza las principales civilizaciones mesoamericanas, valorando su legado astronómico, matemático, arquitectónico y cultural.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["culturas mesoamericanas primaria", "olmecas mayas teotihuacanos", "historia 4 primaria prehispanica"]
        },
        {
            bloque: 3,
            nombre: "Mexicas, el encuentro y la Conquista",
            meses: "Diciembre – Enero",
            enClase: [
                "La leyenda de la fundación de Tenochtitlán (el águila y la serpiente)",
                "Expediciones de Cristóbal Colón y rutas a América",
                "La llegada de Hernán Cortés (la Malinche y alianzas)",
                "Moctezuma, el encuentro de dos mundos",
                "La caída de Tenochtitlán (1521) y el virus de la viruela"
            ],
            guiaPapa: {
                intro: "El choque más épico de la historia humana. Dos mundos que no sabían que el otro existía se encuentran en medio del lago de Texcoco. Pura película de acción.",
                comoExplicar: [
                    "Los Mexicas (Aztecas) construyeron una ciudad flotante en medio de un lago persiguiendo una profecía. ¡Esa es la bandera de nuestro país hoy!",
                    "Cortés no ganó solo con 500 españoles. Inteligente, usó a la traductora (Malinche) para hacer alianzas con miles de indígenas (Tlaxcaltecas) que odiaban pagarle tributos a los Mexicas.",
                    "Los españoles traían caballos, armaduras de hierro y pólvora. Los mexicas traían escudos de madera, obsidiana y plumas.",
                    "La verdadera arma mortal no fueron las espadas, fue la viruela (una enfermedad nueva que los cuerpos de los indígenas no conocían)."
                ],
                truco: "Explica la 'Noche Triste' no como una tristeza, sino como la noche en que los Mexicas demostraron su poder y expulsaron (temporalmente) a los españoles, obligándolos a huir llorando por una calzada.",
                error_comun: "Llamar 'traidores' a los indígenas que se aliaron con Cortés o a la Malinche. Es crucial enseñarles que en ese momento NO existía 'México' como país, eran tribus enemigas compitiendo entre sí.",
                actividad_casa: "Recreación de la Batalla Acuática: Llena la bañera o un balde grande de agua. Usen bloques de plástico para hacer 'Tenochtitlán' en el centro. Haz barquitos de papel (bergantines españoles) y ataquen la ciudad, simulando cómo el agua fue clave para bloquear el alimento de los mexicas."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza las causas económicas, políticas y biológicas que llevaron a la caída de Tenochtitlán y la conquista militar.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["caida de tenochtitlan niños", "hernan cortes y moctezuma", "la malinche historia primaria"]
        },
        {
            bloque: 4,
            nombre: "El Virreinato de la Nueva España",
            meses: "Febrero – Marzo",
            enClase: [
                "Organización política: El Rey de España y el Virrey",
                "La evangelización (los frailes y la religión católica)",
                "Economía virreinal: agricultura, minería y ganadería",
                "Las castas y la desigualdad social",
                "El legado virreinal (comida, arquitectura, idioma)"
            ],
            guiaPapa: {
                intro: "Fueron 300 años de nuestra historia donde se coció a fuego lento lo que somos hoy. Nacen los conventos de piedra, el mestizaje y nuestro rico idioma español.",
                comoExplicar: [
                    "Dejaron de mandar los Tlatoanis y mandó un rey desde Europa que nunca pisó América. Su representante aquí era el Virrey.",
                    "Los frailes (franciscanos, dominicos) usaban el teatro, cantos y piñatas para enseñarles la nueva religión a los indígenas que no hablaban español.",
                    "Sacar plata de las minas hizo riquísima a la Nueva España, creando ciudades hermosas con grandes iglesias bañadas en oro.",
                    "La sociedad estaba dividida por el color de piel y dónde nacías (las famosas castas: mestizo, criollo, peninsular)."
                ],
                truco: "Diles que durante esta época se inventaron los dulces típicos mexicanos en los conventos de monjas (como el rompope o los mazapanes). ¡Las monjas eran las maestras chefs del Virreinato!",
                error_comun: "Creer que la historia de la Independencia ocurrió justo al día siguiente de la Conquista. ¡Cuidado! Es importante enfatizar que el Virreinato duró tres siglos (¡300 años de paz colonial!), muchísimo más tiempo del que llevamos siendo un país independiente.",
                actividad_casa: "Arquitectos Virreinales: Salgan al centro o plaza de su ciudad. Muestrales los arcos de piedra, las grandes puertas de madera de los templos y los patios centrales. Explícales que ese estilo de hacer casas lo trajeron en los barcos desde España."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica las características políticas, económicas y culturales del Virreinato, reconociendo su influencia en la cultura mexicana actual.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["el virreinato para niños", "la nueva españa", "evangelizacion y mineria"]
        },
        {
            bloque: 5,
            nombre: "El camino hacia la Independencia",
            meses: "Abril – Junio",
            enClase: [
                "Descontento de los criollos (españoles nacidos en América)",
                "La invasión de Napoleón a España (detonante externo)",
                "Las conspiraciones de Querétaro",
                "El Grito de Dolores (Hidalgo, Allende, Josefa)",
                "El inicio del movimiento armado de 1810"
            ],
            guiaPapa: {
                intro: "La olla de presión revienta. Los nacidos en México deciden que ya son lo suficientemente grandes para gobernarse solos sin que un Rey en Europa les dé órdenes.",
                comoExplicar: [
                    "Los Criollos estaban enojados porque, aunque tenían dinero, los altos puestos del gobierno solo se los daban a los nacidos en España (Peninsulares).",
                    "El empujón lo dio Francia. Napoleón Bonaparte invadió España y metió al Rey a la cárcel. En México dijeron: 'Si el Rey está preso, ¡nosotros mandamos aquí!'.",
                    "La Conspiración de Querétaro eran 'reuniones literarias' secretas donde planeaban la rebelión.",
                    "Josefa Ortiz fue la mujer valiente que avisó dando taconazos en el piso que los habían descubierto."
                ],
                truco: "Diles que Miguel Hidalgo no era un militar, era un sacerdote culto que leía libros prohibidos por el rey, sabía plantar viñedos, enseñaba oficios a los indígenas e hizo sonar la campana porque no había de otra.",
                error_comun: "Creer que Hidalgo 'liberó' a México. Hidalgo solo INICIÓ el movimiento (y murió muy rápido, a los pocos meses). En cuarto grado solo ven el inicio; en quinto verán cómo Morelos e Iturbide terminaron la guerra 11 años después.",
                actividad_casa: "La Carta Cifrada de Josefa: Jueguen a las conspiraciones secretas. Pídele que te escriba un mensaje secreto advirtiendo que los españoles van en camino, usando jugo de limón como 'tinta invisible'. Pasen una plancha caliente sobre el papel (tú) para que se revele el mensaje oscuro. ¡Fascinante misterio histórico!"
            },
            guiaMaestro: {
                objetivo: "El alumno analiza las causas internas y externas que detonaron el inicio de la lucha por la Independencia, y el papel de Hidalgo y los conspiradores.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 4"
            },
            keywords: ["causas de la independencia", "conspiracion de queretaro", "grito de dolores historia primaria"]
        }
    ]
};

export const FORMACION_P4: MateriaContenido = PRIMARIA_3.materias["formacion"] as MateriaContenido;
export const EDUCACION_FISICA_P4: MateriaContenido = PRIMARIA_3.materias["educacion_fisica"] as MateriaContenido;
export const ARTES_P4: MateriaContenido = PRIMARIA_3.materias["artes"] as MateriaContenido;
// For P4, I am reusing the deep pedagogical subjects of P3 for Formacion, Ed. Fisica, and Artes because they belong to the same Fase 4 in the SEP plan and cover the identical pedagogical approach.

export const PRIMARIA_4: GradoContenido = {
    grado: "primaria-4",
    nombre: "4° Primaria",
    emoji: "🚀",
    materias: {
        matematicas: MATEMATICAS_P4,
        espanol: ESPANOL_P4,
        ciencias: CIENCIAS_P4,
        historia: HISTORIA_P4,
        geografia: GEOGRAFIA_P4,
        formacion: FORMACION_P4,
        educacion_fisica: EDUCACION_FISICA_P4,
        artes: ARTES_P4,
        lenguas: LENGUAS_P4
    }
};
