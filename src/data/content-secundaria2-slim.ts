// Base de datos de contenido "masticado" para papás y maestros
// Secundaria 2° — Ciclo escolar 2025-2026 SEP México (Fase 6 - Intermedio)

import type { GradoContenido, MateriaContenido } from './content-types';
import { PRIMARIA_3 } from './content-primaria3-slim';

// Reusamos algunas estructuras transversales como base.
const EDUCACION_FISICA_S2 = PRIMARIA_3.materias["educacion_fisica"] as MateriaContenido;
const ARTES_S2 = PRIMARIA_3.materias["artes"] as MateriaContenido;

const MATEMATICAS_S2: MateriaContenido = {
    materia: "matematicas",
    nombre: "Matemáticas II",
    emoji: "📐",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "Multiplicación y división con signo (Leyes de los signos)",
            meses: "Agosto – Septiembre",
            enClase: [
                "Repaso de suma y resta de números negativos",
                "Leyes de los signos para multiplicar y dividir",
                "Resolución de problemas con saldos bancarios y temperaturas",
                "Introducción a la potenciación con base negativa",
                "Notación científica para números muy grandes"
            ],
            guiaPapa: {
                intro: "El bloque donde todos reprueban si no prestan atención. Las leyes de los signos son la 'tabla del uno' de la secundaria. Si no las dominan hoy, arrastrarán el problema hasta la preparatoria.",
                comoExplicar: [
                    "Suma y Resta: Piensa en dinero. Los positivos (+) es dinero en tu bolsa. Los negativos (-) son deudas. Si tienes $5 (+) y debes $8 (-), pagas y todavía debes $3. Resultado: -3.",
                    "Multiplicación y División: ¡Aquí sí se usan las Leyes! (+) x (+) = (+). (-) x (-) = (+). (+) x (-) = (-).",
                    "Notación científica: En lugar de escribir 1,000,000, escribes 1x10⁶. El numerito arriba te dice cuántos ceros ponerle."
                ],
                truco: "La regla de los amigos y enemigos para Multiplicar: 'El amigo (+) de mi amigo (+) es mi amigo (+)'. 'El enemigo (-) de mi enemigo (-) es mi amigo (+)'. 'El amigo (+) de mi enemigo (-) es mi enemigo (-)'.",
                error_comun: "Mezclar las reglas. Que tu hijo diga: '-5 menos 3, menos por menos da más, entonces es +8'. ¡ERROR FATAL! Eso era una resta de deudas, no una multiplicación. (-5 -3 = -8). Solo se dice 'menos por menos' si hay paréntesis multiplicando: (-5)(-3) = +15.",
                actividad_casa: "El Contador del Banco: Dale una hoja y jueguen al banco. Dile: 'Tienes $100. Te cobro la luz de -$30. Te depositan $50. Luego te cobro una penalización que multiplica tu deuda por -2'. Que vaya anotando el saldo usando signos positivos y negativos."
            },
            guiaMaestro: {
                objetivo: "El alumno resuelve problemas de multiplicación y división con fracciones y decimales positivos y negativos aplicando la ley de los signos.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["leyes de los signos", "numeros negativos y positivos", "notacion cientifica secundaria"]
        },
        {
            bloque: 2,
            nombre: "Sistemas de Ecuaciones (2x2)",
            meses: "Octubre – Noviembre",
            enClase: [
                "Ecuaciones de primer grado con dos incógnitas (X y Y)",
                "Método de Sustitución",
                "Método de Igualación y Reducción (Suma y Resta)",
                "Traducción de problemas reales a sistemas de ecuaciones",
                "Sucesiones con progresión cuadrática"
            ],
            guiaPapa: {
                intro: "El álgebra sube de nivel. Ya no solo buscan el valor de X, ¡ahora también el de Y! Se siente como resolver un misterio de detectives usando matemáticas.",
                comoExplicar: [
                    "Si te digo 'Dos números que sumados den 10' (x + y = 10), hay muchas opciones (5+5, 8+2). Pero si te agrego otra pista: 'Y que restados den 2' (x - y = 2). ¡Ahí se vuelve un Sistema 2x2! La única respuesta es 6 y 4.",
                    "El método de 'Reducción' es el más fácil: Pones las dos ecuaciones como si fuera una suma vertical de primaria para que una letra (X o Y) se elimine sola."
                ],
                truco: "Diles que las letras son frutas. X = Manzanas, Y = Peras. Si 2 Manzanas + 1 Pera cuestan $20, y 1 Manzana + 1 Pera cuestan $15... por lógica pura sabes que la manzana que sobra costaba $5. Acaban de resolver un sistema 2x2 en su cabeza.",
                error_comun: "Olvidar multiplicar el signo negativo a toda la ecuación durante el método de suma y resta. Enséñales que si cambian un signo, deben cambiar toda la fila, igual que en una balanza.",
                actividad_casa: "El Misterio de la Granja: Ponle este acertijo clásico: 'En una granja hay gallinas (2 patas) y vacas (4 patas). En total hay 10 cabezas y 26 patas. ¿Cuántas vacas y gallinas hay?'. Que intente resolverlo primero adivinando y luego ayúdale a escribir las dos ecuaciones (G + V = 10) y (2G + 4V = 26)."
            },
            guiaMaestro: {
                objetivo: "El alumno resuelve problemas mediante la formulación y solución algebraica de sistemas de dos ecuaciones lineales con dos incógnitas.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["sistemas de ecuaciones 2x2", "metodo de sustitucion e igualacion", "algebra secundaria 2"]
        },
        {
            bloque: 3,
            nombre: "Polígonos, Volumen de cilindros y conos",
            meses: "Diciembre – Enero",
            enClase: [
                "Propiedades de los polígonos (Diagonales desde un vértice)",
                "Suma de ángulos internos y externos",
                "El cilindro: Desarrollo plano, área y volumen",
                "El cono: Relación de volumen con el cilindro",
                "Conversión de centímetros cúbicos a litros"
            ],
            guiaPapa: {
                intro: "Regresamos al 3D, pero con figuras redondas. Aprenderán cuánto líquido le cabe a una lata de refresco o a un barquillo de helado usando el número Pi.",
                comoExplicar: [
                    "El volumen de un cilindro es como apilar muchísimas tortillas. Sacas el área de una tortilla (Pi x Radio al cuadrado) y la multiplicas por cuántas tortillas apilaste (Altura).",
                    "La magia del Cono: Un cono es exactamente una TERCERA PARTE de un cilindro. Si tienes un vaso cilíndrico, necesitas vaciarle 3 vasos de cono para llenarlo."
                ],
                truco: "Para la fórmula de las Diagonales de un polígono, diles que un vértice (esquina) NO puede lanzarle una flecha (diagonal) a sus dos vecinos de al lado ni a sí mismo. Por eso la fórmula siempre lleva un '(n - 3)'.",
                error_comun: "Multiplicar el diámetro en lugar del radio para sacar el área del círculo base. Siempre grítales: '¡A la fórmula de Pi solo se entra con el Radio! Si te dan el diámetro, córtalo a la mitad primero'.",
                actividad_casa: "El Experimento del Cono de Arroz: Haz un cono de papel y un cilindro de papel (del mismo ancho de base y misma altura). Pídele que llene el cono con arroz y lo vacíe en el cilindro. ¡Verá con sus propios ojos que caben exactamente 3 conos en 1 cilindro!"
            },
            guiaMaestro: {
                objetivo: "El alumno calcula el volumen de cilindros y conos anticipando cómo cambia el volumen al modificar una de sus dimensiones.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["volumen de cilindro y cono", "angulos de poligonos", "numero pi matematicas"]
        },
        {
            bloque: 4,
            nombre: "Proporcionalidad inversa y gráficas de funciones",
            meses: "Febrero – Marzo",
            enClase: [
                "Representación algebraica de funciones (y = mx + b)",
                "Gráficas de líneas rectas en el plano cartesiano",
                "Lectura de gráficas de proporcionalidad inversa (Curvas/Hipérbolas)",
                "Interés compuesto bancario",
                "Análisis de desviaciones en la estadística"
            ],
            guiaPapa: {
                intro: "Los números se vuelven dibujos. Entenderán cómo los economistas predicen el futuro dibujando líneas que suben y bajan.",
                comoExplicar: [
                    "Una Función (y = 2x) es una 'Máquina tragamonedas'. Si le metes un número a la X (ej. 3), la máquina lo multiplica por 2 y te escupe la Y (6).",
                    "Si graficas una Proporcionalidad Directa (ej. comprar tacos), el dibujo SIEMPRE será una línea recta que sale desde el cero hacia arriba.",
                    "Si graficas una Proporcionalidad Inversa (ej. albañiles trabajando), el dibujo SIEMPRE será una curva que va cayendo como resbaladilla."
                ],
                truco: "Diles que la 'm' en (y = mx + b) es la inclinación de la montaña. Si m=10, la montaña es súper empinada. Si m=0.5, la montaña es muy planita. Si m es negativa, ¡vas de bajada!",
                error_comun: "Creer que la X y la Y se ponen al azar. Recuérdales que la X (horizontal) es la causa, y la Y (vertical) es la consecuencia. (X=Horas de estudio, Y=Calificación).",
                actividad_casa: "La Máquina Función: Escribe en una hoja 'y = 3x - 1'. Tú le dices un número (ej. 'Le meto un 4'). Tu hijo tiene que hacer la cuenta en su mente (3x4=12, menos 1=11) y gritar: '¡Sale un 11!'. Es el entrenamiento mental perfecto para tabular."
            },
            guiaMaestro: {
                objetivo: "El alumno lee y representa gráficamente relaciones lineales y cuadráticas, interpretando la pendiente y la ordenada al origen.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["graficas de funciones lineales", "proporcionalidad inversa curva", "plano cartesiano secundaria"]
        },
        {
            bloque: 5,
            nombre: "Medidas de dispersión y probabilidad compuesta",
            meses: "Abril – Junio",
            enClase: [
                "Desviación media y Rango (qué tan separados están los datos)",
                "Probabilidad de eventos independientes (Tirar 2 dados a la vez)",
                "Probabilidad de eventos mutuamente excluyentes",
                "Análisis de encuestas poblacionales",
                "Proyecto matemático integrador"
            ],
            guiaPapa: {
                intro: "Estadística para no dejarse engañar por las noticias. Aprenderán que un 'promedio' puede esconder muchas mentiras si no se revisa qué tan separados están los datos.",
                comoExplicar: [
                    "El Rango es restar el dato más grande menos el más pequeño. Si en una clase el mayor sacó 10 y el menor 2, el Rango es 8 (¡es un grupo muy desigual!).",
                    "Eventos independientes: Si tiro una moneda y un dado, lo que le pase a la moneda no afecta para nada al dado. Su probabilidad se multiplica.",
                    "Eventos excluyentes: No pueden pasar al mismo tiempo. (No puedes girar la ruleta y que salga Rojo y Negro a la vez)."
                ],
                truco: "Para la probabilidad compuesta (dos cosas a la vez), diles la regla de la palabra 'Y'. Si quieres que pase algo 'Y' otra cosa, se MULTIPLICA. (Probabilidad de Cara (1/2) Y sacar un 6 (1/6) = 1/12).",
                error_comun: "Para calcular la Desviación Media, olvidar que todos los resultados deben volverse positivos (Valor Absoluto) antes de promediarlos. Explícale que estamos midiendo 'distancias', y no hay distancias negativas.",
                actividad_casa: "El Promedio Mentiroso: Dile: 'Imagínate que en una empresa, el jefe gana $90,000 y sus 9 empleados ganan $1,000. El promedio de sueldo de esa empresa es de casi $10,000. Si yo te digo que el promedio es 10 mil, ¿suena a que les pagan bien, no?'. Así entenderán por qué el promedio engaña y se necesita revisar la 'dispersión'."
            },
            guiaMaestro: {
                objetivo: "El alumno usa e interpreta las medidas de dispersión (rango y desviación media) para tomar decisiones y calcula probabilidad de eventos compuestos.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["desviacion media y rango", "probabilidad de eventos independientes", "estadistica secundaria 2"]
        }
    ]
};

const ESPANOL_S2: MateriaContenido = {
    materia: "espanol",
    nombre: "Español II",
    emoji: "📚",
    color: "#22C55E",
    bloques: [
        {
            bloque: 1,
            nombre: "El ensayo literario y la novela",
            meses: "Agosto – Septiembre",
            enClase: [
                "Diferencia entre ensayo, resumen y artículo de opinión",
                "Análisis de novelas hispanoamericanas",
                "Estructura del ensayo (Tesis, Argumentos sólidos, Conclusión)",
                "Citas textuales y paráfrasis dentro del texto",
                "Marcadores discursivos para hilar ideas"
            ],
            guiaPapa: {
                intro: "Dejan atrás los cuentos cortos para entrar al mundo de la Novela y el Ensayo. Aquí aprenderán a opinar sobre un libro demostrando inteligencia crítica.",
                comoExplicar: [
                    "El Ensayo no es un resumen del libro. Es tu opinión sobre un TEMA del libro (ej. 'El machismo en Como Agua para Chocolate') defendida con pruebas.",
                    "La novela es larga y tiene varias 'pistas' de historia cruzándose. El cuento es como una foto rápida, la novela es una serie de televisión entera.",
                    "Los marcadores discursivos son el pegamento de los párrafos ('Sin embargo', 'Por lo tanto', 'En conclusión')."
                ],
                truco: "Diles que un buen ensayo es como un abogado en un juicio. La Tesis es declarar al acusado 'Culpable'. Los Argumentos son las pruebas (huellas, fotos). Si no tienes pruebas, el juez (el maestro) no te va a creer.",
                error_comun: "Escribir 'Yo pienso que...' o 'A mí me gustó...'. En el ensayo literario formal, todo se escribe en tercera persona o plural ('Podemos observar que...', 'Se concluye que...').",
                actividad_casa: "El Ensayo de la Película: Vean una película de Marvel o acción. Pídele que no te cuente de qué trató, sino que te diga cuál era el 'Mensaje oculto' (ej. El sacrificio por los demás, la venganza no sirve). Que te dé 3 pruebas de la película que demuestren ese mensaje."
            },
            guiaMaestro: {
                objetivo: "El alumno lee novelas completas y redacta un ensayo argumentativo respetando la estructura de Tesis y Argumentos.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["como hacer un ensayo literario", "novela hispanoamericana secundaria", "marcadores discursivos"]
        },
        {
            bloque: 2,
            nombre: "El reportaje y la crónica social",
            meses: "Octubre – Noviembre",
            enClase: [
                "Investigación periodística de campo",
                "La crónica como combinación de noticia y literatura",
                "El uso de la entrevista (preguntas abiertas y cerradas)",
                "Redacción de reportajes multimedia",
                "Libertad de expresión y ética periodística"
            ],
            guiaPapa: {
                intro: "Los alumnos se convierten en periodistas de su propia comunidad. Aprenderán a buscar historias reales y a contarlas sin aburrir al lector.",
                comoExplicar: [
                    "La Crónica es la hermana divertida de la noticia. Da los datos reales, pero te cuenta los olores, los colores y las emociones de la gente que estaba ahí.",
                    "Pregunta cerrada: ¿Te gusta el chocolate? (Sí/No). Pregunta abierta: ¿Por qué crees que el chocolate es bueno? (Te da mucha información).",
                    "La Ética periodística significa que NO puedes mentir ni inventar nombres para hacer tu reportaje más dramático."
                ],
                truco: "Para enseñarles a escribir una buena crónica, diles que usen los 5 sentidos. No solo 'Hubo un incendio'. Debe ser: 'El humo negro picaba en los ojos, las sirenas ensordecían la calle y el calor derretía las ventanas'.",
                error_comun: "Hacer entrevistas como si fuera interrogatorio de policía (puras preguntas cerradas). Enséñales a preguntar '¿Cómo te sentiste cuando...?' para hacer hablar al entrevistado.",
                actividad_casa: "Entrevista al Abuelo/Tío: Pídele que elija al familiar con la historia de juventud más interesante. Que grabe una entrevista en audio haciéndole 5 preguntas 'abiertas' sobre cómo era su ciudad antes, y que luego redacte una pequeña crónica."
            },
            guiaMaestro: {
                objetivo: "El alumno investiga un problema social y redacta un reportaje o crónica incluyendo fragmentos de entrevistas realizadas por él mismo.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["cronica periodistica secundaria", "preguntas abiertas y cerradas", "etica del periodismo"]
        },
        {
            bloque: 3,
            nombre: "Documentos legales y administrativos",
            meses: "Diciembre – Enero",
            enClase: [
                "Estructura de contratos, recibos y facturas",
                "Términos y condiciones (Letras chiquitas)",
                "La carta poder (cuándo y cómo usarla)",
                "Uso de vocabulario técnico, legal y tiempos verbales",
                "Protección al consumidor (PROFECO)"
            ],
            guiaPapa: {
                intro: "¡Educación financiera y legal para la vida! Este es el bloque que desearías haber tenido a su edad. Aprenderán a no dejarse estafar firmando papeles sin leer.",
                comoExplicar: [
                    "Un Contrato es una promesa legal. Si lo firmas, estás obligado por el gobierno a cumplirlo. Por eso NUNCA se firma en blanco ni sin leer.",
                    "Una Carta Poder es prestarle tu 'identidad' y firma a alguien de confianza para que haga un trámite por ti porque tú estás enfermo o de viaje.",
                    "Un Recibo es tu único escudo si el vendedor dice que no le pagaste."
                ],
                truco: "Diles que en los documentos legales, las palabras valen dinero. Si un contrato dice 'Podría entregarse el viernes' no es lo mismo que 'Deberá entregarse el viernes'. La palabra 'Deberá' es obligación, 'Podría' es opción.",
                error_comun: "Creer que firmar por un amigo en un documento es 'hacerle un favor'. Enséñales la palabra Fraude y Falsificación, y que firmar documentos falsos es un delito de cárcel.",
                actividad_casa: "Lectura del Recibo de Luz o Internet: Ponle el recibo del mes enfrente. Pídele que encuentre el 'Periodo de facturación' (de qué día a qué día nos cobraron) y la 'Fecha límite de pago'. Que lea las letras chiquitas de atrás para saber qué pasa si nos atrasamos (cortes o multas)."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza y comprende la estructura y función de documentos administrativos y legales cotidianos para ejercer sus derechos como ciudadano.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["como llenar una carta poder", "contratos y recibos secundaria", "documentos administrativos legales"]
        },
        {
            bloque: 4,
            nombre: "Mesas redondas y campañas oficiales",
            meses: "Febrero – Marzo",
            enClase: [
                "Organización de una mesa redonda (todos son iguales)",
                "Análisis de campañas publicitarias y propaganda",
                "El eslogan y el poder de persuasión visual",
                "Estereotipos en los medios de comunicación",
                "Creación de una campaña social escolar"
            ],
            guiaPapa: {
                intro: "Marketing y debate. Descubrirán cómo los anuncios de la tele manipulan su cerebro, y usarán esas mismas técnicas para hacer campañas buenas (ej. contra el plástico).",
                comoExplicar: [
                    "La Mesa Redonda es diferente al Debate. En el debate pelean dos bandos para ganar. En la Mesa Redonda se juntan 4 expertos a compartir ideas sin pelear, para encontrar una solución.",
                    "Publicidad es para VENDERTE un producto (Coca-Cola). Propaganda es para VENDERTE una idea (Vota por este presidente, o Cuida el agua).",
                    "Un Estereotipo es una mentira repetida en la TV (ej. 'las niñas juegan con muñecas y los niños con coches', o 'los malos siempre visten de negro')."
                ],
                truco: "Para crear un buen eslogan, diles que debe tener 3 cosas: Corto, Pegajoso, y que rime o tenga ritmo. 'A que no puedes comer solo una' o 'Reciclar es de sabios'.",
                error_comun: "Diseñar carteles de campaña atascados de letras. Enséñales la regla del '3 segundos': Si una persona que va caminando rápido no entiende el cartel en 3 segundos, tiene demasiado texto y no sirve.",
                actividad_casa: "Cazadores de Estereotipos: Vean comerciales en la televisión por 15 minutos. Cada vez que vean un estereotipo comercial (ej. la mamá siempre sale lavando platos, el papá en el sillón, el dentista siempre sale con bata blanca) grítenlo. Se darán cuenta de lo manipulada que está la TV."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza el efecto de los mensajes publicitarios, identifica estereotipos y diseña una campaña social con fines comunitarios.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["mesa redonda secundaria", "analisis de campañas publicitarias", "estereotipos en medios de comunicacion"]
        },
        {
            bloque: 5,
            nombre: "Teatro del Siglo de Oro y poesía latinoamericana",
            meses: "Abril – Junio",
            enClase: [
                "El Siglo de Oro español (Cervantes, Lope de Vega, Sor Juana)",
                "Lectura de poesía del modernismo (Rubén Darío)",
                "Dramatización y métrica (contar sílabas en los versos)",
                "El soneto (dos cuartetos y dos tercetos)",
                "Figuras literarias complejas (Oxímoron, Sinestesia)"
            ],
            guiaPapa: {
                intro: "Un cierre culto y elegante. El español antiguo puede sonar a 'otro idioma', pero aquí entenderán el origen de nuestra lengua con historias de espadachines y honor.",
                comoExplicar: [
                    "El Siglo de Oro fue la época donde los españoles escribieron las mejores obras del mundo, mientras conquistaban América. Sor Juana Inés fue nuestra genio mexicana de esa época.",
                    "La Métrica es matemáticas en la poesía. Un poema clásico exige que cada renglón tenga exactamente 11 sílabas (Endecasílabo), no puedes escribir como caiga.",
                    "Oxímoron es juntar palabras contrarias que suenan genial: 'Fuego helado', 'Luz oscura', 'Silencio ensordecedor'."
                ],
                truco: "Al leer español antiguo (como Don Quijote), diles que no se detengan en cada palabra que no entiendan, que lean el párrafo completo para entender 'el chisme general' y sigan adelante.",
                error_comun: "Al contar sílabas métricas, olvidar la 'Sinalefa'. La sinalefa es cuando una palabra termina en vocal y la siguiente empieza en vocal... ¡se fusionan y se cuentan como una sola sílaba al cantarla!",
                actividad_casa: "Inventores de Oxímoros: Jueguen a decir frases sin sentido poético combinando contrarios. 'El gigante enano', 'La dulce amargura', 'El muerto viviente'. Es muy divertido y afilará su comprensión del sentido figurado."
            },
            guiaMaestro: {
                objetivo: "El alumno lee y comprende textos dramáticos del Siglo de Oro, identificando recursos métricos y figuras poéticas complejas.",
                competencia: "Lenguajes — SEP Plan 2022 Fase 6"
            },
            keywords: ["siglo de oro español secundaria", "metrica y sinalefa", "oximoron y figuras literarias"]
        }
    ]
};

const CIENCIAS_S2: MateriaContenido = {
    materia: "ciencias",
    nombre: "Ciencias II (Física)",
    emoji: "⚡",
    color: "#10B981",
    bloques: [
        {
            bloque: 1,
            nombre: "Movimiento, velocidad y aceleración",
            meses: "Agosto – Septiembre",
            enClase: [
                "Diferencia entre rapidez y velocidad (Vectores)",
                "Movimiento Rectilíneo Uniforme (MRU)",
                "La aceleración (Movimiento Rectilíneo Uniformemente Acelerado)",
                "Gráficas de Distancia vs Tiempo y Velocidad vs Tiempo",
                "Caída libre y Galileo Galilei"
            ],
            guiaPapa: {
                intro: "Bienvenidos a Física, donde las matemáticas se usan para predecir la realidad. Aquí el 'Por qué' las cosas se mueven tiene una fórmula exacta.",
                comoExplicar: [
                    "Rapidez es ir a 100 km/h. Velocidad es ir a 100 km/h HACIA EL NORTE. La velocidad exige saber hacia dónde vas (eso es un vector).",
                    "Aceleración no es 'ir rápido'. Aceleración es CAMBIAR de velocidad. Si vas a 200 km/h constantes sin frenar ni acelerar, tu aceleración es CERO.",
                    "Caída libre: En el vacío, una pluma de ave y una bola de boliche caen y tocan el suelo exactamente al mismo tiempo. Lo único que frena a la pluma en la realidad es el aire."
                ],
                truco: "El triángulo mágico (Distancia arriba, Velocidad abajo izquierda, Tiempo abajo derecha). Tapas con el dedo lo que quieres buscar. Si tapas Tiempo, te queda Distancia sobre Velocidad (D/V). Si tapas Distancia, te queda V por T.",
                error_comun: "Confundir las gráficas. En una gráfica de 'Distancia-Tiempo', una línea horizontal significa que el coche está ESTACIONADO (el tiempo pasa pero la distancia no sube). En una gráfica de 'Velocidad-Tiempo', la horizontal significa que va a velocidad CONSTANTE (ej. siempre a 50km/h).",
                actividad_casa: "Carrera de Aceleración en el Coche: Cuando manejes, pídele que vea el velocímetro. Cuando el coche arranca del semáforo, la aguja sube (Aceleración positiva). Cuando vas a velocidad crucero, la aguja se queda quieta (Aceleración cero). Cuando frenas, la aguja baja (Desaceleración). ¡Pídele que te vaya dictando en qué estado están!"
            },
            guiaMaestro: {
                objetivo: "El alumno describe el movimiento de los objetos usando gráficas y fórmulas de velocidad y aceleración, identificando la gravedad como fuerza de caída libre.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["velocidad y aceleracion secundaria", "movimiento rectilineo uniforme MRU", "graficas de fisica 2"]
        },
        {
            bloque: 2,
            nombre: "Fuerzas y Leyes de Newton",
            meses: "Octubre – Noviembre",
            enClase: [
                "El concepto de Fuerza (empuje y tirón) medido en Newtons",
                "Primera Ley de Newton (Inercia)",
                "Segunda Ley de Newton (F = m * a)",
                "Tercera Ley de Newton (Acción y Reacción)",
                "La fricción y los vectores de fuerza concurrentes"
            ],
            guiaPapa: {
                intro: "Las reglas del universo según Isaac Newton. Entenderán por qué necesitan ponerse el cinturón de seguridad y cómo vuelan los cohetes al espacio.",
                comoExplicar: [
                    "Inercia (Ley 1): Un cuerpo flojo quiere seguir flojo, y uno en movimiento quiere seguir en movimiento, a menos que alguien lo empuje. (Por eso si el coche frena de golpe, tú te vas de boca, tu cuerpo quería seguir avanzando).",
                    "Ley 2 (F=ma): Cuesta mucha más fuerza empujar un tráiler (mucha masa) que una bicicleta (poca masa) para que arranquen rápido.",
                    "Acción y Reacción (Ley 3): Si tú golpeas la pared con furia (Acción), la pared te golpea el puño de regreso con la exacta misma fuerza (Reacción). Por eso te duele."
                ],
                truco: "Para la Tercera Ley, diles cómo funcionan los cohetes de la NASA. El cohete en el espacio empuja muchísimo fuego hacia ATRÁS (Acción), y por reacción, el universo lo empuja hacia ADELANTE.",
                error_comun: "Pensar que la fricción siempre es 'mala' porque nos frena. Explícales que sin fricción, las llantas del coche resbalarían como en hielo infinito y jamás podríamos caminar sin caernos.",
                actividad_casa: "El Truco del Mantel y la Inercia: Pon una hoja de papel (el mantel) en el borde de la mesa. Ponle encima un vaso de plástico lleno de agua a la mitad. Tira de la hoja hacia ti con un jalón seco, rápido y fuerte hacia abajo. El vaso se quedará en su lugar gracias a la Inercia de Newton."
            },
            guiaMaestro: {
                objetivo: "El alumno interpreta y aplica las tres Leyes de Newton para explicar fenómenos mecánicos cotidianos, usando vectores para sumar fuerzas.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["las 3 leyes de newton", "inercia accion y reaccion", "fuerza y vectores fisica"]
        },
        {
            bloque: 3,
            nombre: "Energía, Trabajo y Calor",
            meses: "Diciembre – Enero",
            enClase: [
                "Diferencia entre Energía Cinética (movimiento) y Potencial (altura)",
                "El Principio de Conservación de la Energía",
                "Concepto físico de Trabajo (W = F * d)",
                "Diferencia real entre Calor y Temperatura",
                "Mecanismos de calor: Conducción, Convección y Radiación"
            ],
            guiaPapa: {
                intro: "Termodinámica básica. Aquí derribaremos el mito de que 'se mete el frío'. En Física, el frío no existe, solo existe la ausencia de calor.",
                comoExplicar: [
                    "Energía Potencial: Es la energía 'guardada'. Si subes una piedra al techo, tiene muchísima energía potencial (peligro). Si la empujas y cae, esa energía guardada se convierte en Energía Cinética (movimiento).",
                    "Trabajo (Física): Si sudas 3 horas empujando una pared y la pared NO se mueve, en física hiciste CERO trabajo. El trabajo solo existe si logras mover algo de distancia.",
                    "Temperatura es qué tan rápido vibran los átomos. Calor es el paso de esa energía de un cuerpo caliente a uno frío."
                ],
                truco: "Para que nunca olviden: EL FRÍO NO SE METE, EL CALOR SE ESCAPA. Si abres la ventana en invierno, el aire caliente de tu cuarto trata de salir al patio para equilibrar al universo. Tu cuerpo pierde calor y tiemblas.",
                error_comun: "Confundir Conducción, Convección y Radiación. Conducción: Tocar el sartén caliente (contacto). Convección: El agua hirviendo o el aire acondicionado (fluidos girando). Radiación: El sol calentándote la cara de lejos sin tocarte.",
                actividad_casa: "La Cuchara Caliente (Conducción): Sirve té o café muy caliente. Mete una cuchara de metal y una de plástico. A los 2 minutos pídele que toque el mango de ambas. La de metal le quemará porque los metales son excelentes conductores del calor; el plástico es aislante."
            },
            guiaMaestro: {
                objetivo: "El alumno distingue entre calor y temperatura, comprende la conservación de la energía mecánica y calcula el trabajo mecánico.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["energia cinetica y potencial", "diferencia entre calor y temperatura", "conduccion conveccion radiacion"]
        },
        {
            bloque: 4,
            nombre: "La materia: Modelo cinético y Presión",
            meses: "Febrero – Marzo",
            enClase: [
                "El Modelo Cinético de Partículas (sólidos, líquidos, gases y plasma)",
                "Densidad de los materiales",
                "Concepto de Presión (Fuerza sobre Área)",
                "Principio de Pascal (Hidráulica y frenos de autos)",
                "Principio de Arquímedes (Por qué flotan los barcos de acero)"
            ],
            guiaPapa: {
                intro: "Jugando con átomos y presiones. Entenderán por qué no se hunde un barco transatlántico que pesa millones de toneladas de acero, pero sí se hunde un clavito.",
                comoExplicar: [
                    "Modelo Cinético: En los sólidos, los átomos están abrazados temblando. En los líquidos, se agarran de las manos y fluyen. En los gases, andan volando locos chocando entre sí.",
                    "Densidad: Un kilo de plomo y un kilo de algodón pesan lo mismo. Pero el algodón ocupa un cuarto entero y el plomo cabe en tu mano. El plomo es más denso.",
                    "Presión: Si pisas a alguien con un zapato de tenis (área grande) no duele. Si lo pisas con un tacón de aguja (área enana) lo atraviesas. Misma fuerza, distinta presión."
                ],
                truco: "Arquímedes dice: Un barco flota porque la forma de 'cuenco' que tiene, empuja tanta agua hacia los lados, que el agua furiosa lo empuja hacia arriba con más fuerza de lo que pesa el acero.",
                error_comun: "Pensar que los gases no pesan nada. El aire pesa. Si no pesara, la presión atmosférica no existiría y nos inflaríamos como globos.",
                actividad_casa: "El Submarino de Kétchup (Principio de Pascal): Toma una botella de plástico llena de agua al tope. Mete un sobrecito de cátsup cerrado adentro y cierra fuerte la botella. Si aprietas la botella con tus manos, la presión del agua aplasta la burbuja de aire dentro del sobre de cátsup, haciéndolo más 'denso', y el sobre se hundirá al fondo. Al soltarla, vuelve a flotar."
            },
            guiaMaestro: {
                objetivo: "El alumno aplica el modelo cinético para explicar los estados de agregación y utiliza los principios de Pascal y Arquímedes en fenómenos de fluidos.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["modelo cinetico de particulas", "principio de pascal y arquimedes", "que es la presion en fisica"]
        },
        {
            bloque: 5,
            nombre: "Ondas, luz, electricidad y magnetismo",
            meses: "Abril – Junio",
            enClase: [
                "Tipos de ondas (Transversales, Longitudinales, Electromagnéticas)",
                "El espectro electromagnético (Luz visible, Rayos X, Microondas)",
                "Circuitos eléctricos (Serie y Paralelo)",
                "Ley de Ohm (Voltaje, Corriente, Resistencia)",
                "Magnetismo y Motores eléctricos"
            ],
            guiaPapa: {
                intro: "El bloque más moderno. Entenderán la magia invisible que hace funcionar su celular, el Wi-Fi y los microondas de la cocina.",
                comoExplicar: [
                    "Las Ondas: El sonido es como empujar un resorte (longitudinal). La luz es como sacudir una cuerda de arriba a abajo (transversal).",
                    "El Espectro: Los colores del arcoíris son solo una minúscula parte de la luz. El WiFi, las señales de radio y los Rayos X de los hospitales... ¡También son luz invisible que nuestros ojos no captan!",
                    "Ley de Ohm: El Voltaje (V) es la bomba que empuja, la Corriente (I) es el agua en la tubería, y la Resistencia (R) es una piedra atorando el paso."
                ],
                truco: "Explica los circuitos de Navidad. En los focos 'en Serie' (los baratos), si se funde un foquito, todos los demás se apagan porque se corta el cable. En los circuitos 'en Paralelo' (como los focos de tu casa), si apagas el baño, la sala sigue prendida porque tienen caminos de electricidad separados.",
                error_comun: "Creer que la electricidad y los imanes son cosas distintas. Un cable con electricidad automáticamente genera un campo magnético (Electroimán). Por eso los motores giran.",
                actividad_casa: "Construyendo un Electroimán: Toma un clavo de hierro grande. Enróllale firmemente alambre de cobre dándole unas 30 vueltas (como un resorte apretado). Conecta las dos puntas peladas del cable a una pila D o cuadrada de 9V. ¡Acercan el clavo a unos clips de papel y verán cómo los levanta como por arte de magia!"
            },
            guiaMaestro: {
                objetivo: "El alumno describe las características de las ondas electromagnéticas, diferencia circuitos eléctricos básicos y comprende la inducción electromagnética.",
                competencia: "Saberes y Pensamiento Científico — SEP Plan 2022 Fase 6"
            },
            keywords: ["espectro electromagnetico fisica", "circuitos en serie y paralelo", "ley de ohm voltaje y resistencia"]
        }
    ]
};

const GEOGRAFIA_S2: MateriaContenido = {
    materia: "geografia",
    nombre: "Geografía (Regional y Mundial)",
    emoji: "🌍",
    color: "#06B6D4",
    bloques: [
        {
            bloque: 1,
            nombre: "Continuidad del Espacio Geográfico",
            meses: "Agosto – Junio",
            enClase: [
                "Nota: La SEP concentra Geografía en el 1° de Secundaria.",
                "Este módulo se alinea con la plataforma para repaso transversal",
                "Geografía de las Américas",
                "Geografía de Eurasia y África",
                "Problemas ambientales contemporáneos"
            ]
        }
    ]
};

const HISTORIA_S2: MateriaContenido = {
    materia: "historia",
    nombre: "Historia II (Historia de México)",
    emoji: "🦅",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "Mesoamérica y la Conquista (Raíces)",
            meses: "Agosto – Septiembre",
            enClase: [
                "Las grandes culturas precolombinas (Olmecas, Mayas, Teotihuacanos, Mexicas)",
                "La visión cosmogónica (sacrificios, agricultura del maíz)",
                "Las expediciones españolas y la llegada de Cortés",
                "La caída de Tenochtitlán (1521) (Alianzas indígenas y viruela)",
                "El choque cultural y el inicio del mestizaje"
            ],
            guiaPapa: {
                intro: "A diferencia del repaso rápido de primaria, aquí destruiremos mitos. Tus hijos aprenderán que un puñado de españoles no conquistó a millones de indígenas solos.",
                comoExplicar: [
                    "Los Aztecas (Mexicas) cobraban impuestos brutales a otros pueblos (como los Tlaxcaltecas) y les robaban gente para sacrificios. Eran muy odiados.",
                    "Cuando Hernán Cortés llegó, los indígenas enemigos de los Aztecas dijeron: 'Estos blancos nos pueden ayudar a derrotar a nuestros jefes'. La conquista fue una guerra de indígenas contra indígenas, liderados por españoles.",
                    "El arma más mortal de los españoles no fueron los caballos ni las escopetas. Fue la Viruela. La enfermedad mató a la mitad del imperio azteca porque no tenían defensas."
                ],
                truco: "No uses la palabra 'Descubrimiento'. Diles que América no estaba perdida, aquí vivían millones de personas con ciudades más grandes y limpias que Londres o París. Fue un 'Encuentro de Dos Mundos' (y un choque sangriento).",
                error_comun: "Llamar a la intérprete de Cortés 'La traidora Malinche'. Explícales que ella era esclava, no le debía lealtad a los Aztecas. Sin ella, Cortés jamás habría podido hablar con los Tlaxcaltecas para aliarse.",
                actividad_casa: "Buscadores de Náhuatl: Cuéntale que el Náhuatl (idioma azteca) sigue vivo en nuestra boca. Pídele que busque 5 palabras de uso diario que terminen en 'te' o sean origen azteca. (Chocolate, Aguacate, Tomate, Guajolote, Papalote). El mestizaje empezó por la lengua."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza las características de las culturas mesoamericanas y las causas políticas y biológicas que facilitaron la Conquista española.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["conquista de mexico tenochtitlan", "culturas mesoamericanas secundaria", "causas de la conquista"]
        },
        {
            bloque: 2,
            nombre: "El Virreinato de la Nueva España (300 años)",
            meses: "Octubre – Noviembre",
            enClase: [
                "La evangelización de los frailes (Iglesia y destrucción de templos)",
                "El sistema de Castas (Peninsulares, Criollos, Mestizos, Indígenas, Esclavos)",
                "La minería (Plata) como motor económico del imperio español",
                "El monopolio comercial y la piratería",
                "El arte Barroco y Sor Juana Inés de la Cruz"
            ],
            guiaPapa: {
                intro: "Fueron 300 años (tres siglos) en los que México no existía; éramos la mina de oro de España. Aquí nacieron la comida mexicana, el catolicismo nacional y nuestro grave problema de clasismo.",
                comoExplicar: [
                    "Evangelizar fue 'colonizar la mente'. Los frailes destruyeron las pirámides y con esas mismas piedras construyeron iglesias gigantes encima para que los indígenas rezaran al nuevo Dios.",
                    "Las Castas eran pirámides de racismo legal. Un 'Peninsular' (nacido en España) tenía los mejores puestos. Un 'Criollo' (hijo de españoles pero nacido en México) era tratado como de segunda clase. (Esto causará la Independencia después).",
                    "La riqueza de la plata de Zacatecas financió las guerras de Europa durante siglos."
                ],
                truco: "Explica el mestizaje con la comida (El Mole). Antes de los españoles aquí no había cerdos, reses, gallinas, trigo, limones, ni cebollas. Sin el Virreinato, hoy no habría tacos al pastor ni carnitas. Somos una mezcla de dos continentes.",
                error_comun: "Creer que la inquisición en México quemaba a los indígenas. Falso. La Inquisición española juzgaba a blancos herejes y brujas; los indígenas fueron considerados 'niños' por el Rey y estaban exentos de los tribunales de Inquisición.",
                actividad_casa: "Tu Nivel en las Castas: Jueguen a intentar clasificarse según las reglas del virreinato. Si el niño nació aquí (Criollo o Mestizo). ¿Qué pasaría si se casara con un indígena? (Saltapatrás, Castizo, Mulato). Les parecerá ridículo e injusto, que es exactamente el punto ético del bloque."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende la estructura política, el mestizaje cultural y el impacto económico y social del sistema de castas durante el Virreinato.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["el virreinato de la nueva españa", "el sistema de castas", "la evangelizacion de mexico"]
        },
        {
            bloque: 3,
            nombre: "Independencia de México y el caos del Siglo XIX",
            meses: "Diciembre – Enero",
            enClase: [
                "Causas externas (Ilustración, Revolución Francesa, invasión de Napoleón a España)",
                "Miguel Hidalgo, Morelos y la guerra popular (Grito de Dolores)",
                "Consumación pactada: Agustín de Iturbide y el abrazo de Acatempan",
                "El conflicto Federalistas vs Centralistas y la separación de Texas",
                "Las invasiones extranjeras (EE. UU. y Francia) y Leyes de Reforma"
            ],
            guiaPapa: {
                intro: "El nacimiento de México fue dolorosísimo. Entenderán que Hidalgo empezó la guerra pero la perdió rápido, y que los que realmente firmaron la Independencia fueron los ricos que no querían pagar impuestos a España.",
                comoExplicar: [
                    "La causa oculta: Napoleón Bonaparte metió a su hermano de Rey en España. Los Criollos en México dijeron 'Nosotros no obedecemos a un rey francés impostor, hay que gobernarnos solos'.",
                    "Hidalgo liberó a los pobres, pero su ejército era un caos que mataba a diestra y siniestra. Fue fusilado en meses. Morelos le dio orden e hizo un documento ('Sentimientos de la Nación').",
                    "México nació quebrado y peleándose. Esa debilidad la aprovecharon Estados Unidos y Francia para invadirnos y quitarnos medio país."
                ],
                truco: "La paradoja de Iturbide: Hidalgo y Morelos pelearon por 11 años y murieron sin lograr la independencia. Iturbide (que era el general que mataba insurgentes) se volteó de bando, se alió con Guerrero y en unos meses logró la independencia con una pluma y un acuerdo (El Plan de Iguala).",
                error_comun: "Pensar que en 1810 'se ganó' la independencia. El 16 de septiembre de 1810 solo fue el GRITO (el inicio). La independencia real se firmó 11 años después, el 27 de septiembre de 1821.",
                actividad_casa: "El Sentimiento de la Nación: Pídele que lea uno de los 'Sentimientos de la Nación' de Morelos: 'Que la esclavitud se proscriba para siempre... que se aumente el jornal del pobre... que no haya más distinción entre los hombres que el vicio y la virtud'. Pregúntale si cree que México ya logró cumplir eso 200 años después."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza las causas internas y externas del movimiento de Independencia, sus etapas, y los conflictos territoriales e ideológicos del siglo XIX.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["independencia de mexico secundaria", "morelos sentimientos de la nacion", "federalistas y centralistas historia"]
        },
        {
            bloque: 4,
            nombre: "El Porfiriato y la Revolución Mexicana",
            meses: "Febrero – Marzo",
            enClase: [
                "La dictadura de Porfirio Díaz (paz armada, ferrocarriles, latifundios)",
                "Huelgas de Cananea y Río Blanco (explotación obrera)",
                "Madero y el inicio de la Revolución (1910)",
                "Las facciones revolucionarias (Zapatistas, Villistas, Carrancistas)",
                "La promulgación de la Constitución de 1917"
            ],
            guiaPapa: {
                intro: "El capítulo más cinematográfico de México. Los niños dejarán de ver a la Revolución como un desfile del 20 de noviembre y entenderán que fue una guerra civil donde los héroes terminaron matándose entre ellos.",
                comoExplicar: [
                    "El Porfiriato fue como construir una mansión de lujo encima de un barril de pólvora (pobreza extrema campesina). Al final, estalló.",
                    "Todos querían tirar a Díaz, pero por razones distintas. Madero era rico, solo quería democracia política. Zapata era pobre, quería tierras para sembrar. Por eso al ganar, se pelearon a muerte.",
                    "La Constitución de 1917 fue el gran premio: Aseguró el Artículo 3 (Escuela pública gratuita), el 27 (La tierra y el petróleo son de México), y el 123 (Jornada laboral de 8 horas)."
                ],
                truco: "Diles la regla del Asesinato Revolucionario: 'El que gana, manda a matar al anterior'. Carranza (presidente) manda a matar a Zapata en una emboscada. Luego Obregón manda a matar a Carranza. Y Obregón manda a matar a Pancho Villa. ¡Era un juego de tronos a la mexicana!",
                error_comun: "Creer que la Revolución Mexicana triunfó y todos fueron felices en 1910. Aclara que Díaz huyó rápido en 1911, y los siguientes 10 años fueron de caos de facciones destruyendo el país y provocando hambrunas y migración hacia Estados Unidos.",
                actividad_casa: "Análisis de Corridos: Ponle en YouTube el 'Corrido de la Adelita' o de 'La Toma de Zacatecas'. Explícale que como la gente no sabía leer periódicos, los cantantes (juglares) viajaban en trenes cantando las noticias de las batallas. ¡El corrido era el TikTok noticiero de 1910!"
            },
            guiaMaestro: {
                objetivo: "El alumno contrasta las políticas modernizadoras del Porfiriato con la desigualdad social, y comprende la lucha armada revolucionaria y el pacto constitucional de 1917.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["la revolucion mexicana 1910", "el porfiriato historia de mexico 2", "constitucion de 1917 articulos"]
        },
        {
            bloque: 5,
            nombre: "México Moderno: Instituciones, Milagro y Crisis",
            meses: "Abril – Junio",
            enClase: [
                "El Maximato y la creación del PNR (hoy PRI) y la SEP",
                "El Cardenismo (Expropiación petrolera y reparto agrario)",
                "El Milagro Mexicano (crecimiento económico de los 50s y 60s)",
                "El movimiento estudiantil de 1968 (Tlatelolco)",
                "Transición democrática (año 2000) y retos del siglo XXI (migración y narcotráfico)"
            ],
            guiaPapa: {
                intro: "Llegamos a la historia que tú y tus abuelos vivieron. Aquí se conectan los puntos de por qué hoy Pemex es nuestro, por qué existe el IMSS, y cómo nacieron los problemas políticos actuales.",
                comoExplicar: [
                    "Lázaro Cárdenas en 1938 dijo: 'El petróleo que está debajo de México, es de los mexicanos, no de los gringos'. Expropiar es quitar algo por ley pagándolo.",
                    "El Milagro Mexicano: Después de la Segunda Guerra, México se industrializó rapidísimo, la gente compraba teles, autos y nacieron la clase media y el cine de oro.",
                    "1968: La ilusión se rompió. Los jóvenes estudiantes universitarios pidieron más libertades y alto al autoritarismo, y el gobierno (Díaz Ordaz) los reprimió violentamente en Tlatelolco antes de las Olimpiadas.",
                    "Transición: El PRI gobernó sin perder la presidencia durante 71 años seguidos, hasta que en el año 2000 el país logró una elección distinta."
                ],
                truco: "Explica el 'Dedazo'. Durante 70 años, no había elecciones reales reñidas. El presidente en turno simplemente apuntaba con el dedo a su secretario favorito y ese, mágicamente, ganaba la presidencia. Entender eso les ayuda a valorar el voto de hoy.",
                error_comun: "Terminar la clase de historia en la Revolución y no enseñarles el México moderno. Exige que repasen el 68 y las crisis económicas del 94 (Error de Diciembre), porque eso explica directamente la pobreza o el valor del dólar actual.",
                actividad_casa: "La Entrevista Presidencial: Pregunta en la mesa familiar: '¿Quién era el presidente cuando ustedes nacieron?'. Que busquen qué crisis o milagro pasaba en México en esa década exacta. Verás cómo la historia nacional afectó directamente la economía de los abuelos o de tu propia juventud."
            },
            guiaMaestro: {
                objetivo: "El alumno analiza el proceso de institucionalización de México (SEP, IMSS), el modelo económico de desarrollo estabilizador y los movimientos sociales en busca de la democracia.",
                competencia: "Ética, Naturaleza y Sociedades — SEP Plan 2022 Fase 6"
            },
            keywords: ["expropiacion petrolera cardenas", "el milagro mexicano", "movimiento estudiantil 1968 tlatelolco"]
        }
    ]
};

const FORMACION_S2: MateriaContenido = {
    materia: "formacion",
    nombre: "Formación Cívica y Ética II",
    emoji: "⚖️",
    color: "#8B5CF6",
    bloques: [
        {
            bloque: 1,
            nombre: "Construcción de la paz y conflictos",
            meses: "Agosto – Septiembre",
            enClase: [
                "Identificación de la violencia estructural e invisible",
                "Técnicas de negociación y mediación pacífica",
                "Inclusión y empatía social extrema"
            ]
        },
        {
            bloque: 2,
            nombre: "Estado de derecho y autoridades",
            meses: "Octubre – Noviembre",
            enClase: [
                "Obligaciones de los servidores públicos",
                "Mecanismos ciudadanos contra la corrupción (Transparencia)",
                "Normas internacionales y soberanía nacional"
            ]
        },
        {
            bloque: 3,
            nombre: "Diversidad y equidad de género",
            meses: "Diciembre – Enero",
            enClase: [
                "Roles y estereotipos de género en la sociedad",
                "Violencia de género y micromachismos",
                "Pluralidad y riqueza cultural"
            ]
        },
        {
            bloque: 4,
            nombre: "Medios de comunicación y ciudadanía",
            meses: "Febrero – Marzo",
            enClase: [
                "El cuarto poder (Influencia de las redes sociales)",
                "Libertad de expresión vs Discursos de odio",
                "Responsabilidad legal de la huella digital"
            ]
        },
        {
            bloque: 5,
            nombre: "Participación en la vida democrática",
            meses: "Abril – Junio",
            enClase: [
                "Asociaciones Civiles (ONGs) y activismo ciudadano",
                "El voto razonado y la apatía política",
                "Proyectos comunitarios reales"
            ]
        }
    ]
};

export const SECUNDARIA_2: GradoContenido = {
    grado: "secundaria-2",
    nombre: "2° Secundaria",
    emoji: "📗",
    materias: {
        matematicas: MATEMATICAS_S2,
        espanol: ESPANOL_S2,
        ciencias: CIENCIAS_S2,
        historia: HISTORIA_S2,
        geografia: GEOGRAFIA_S2,
        formacion: FORMACION_S2,
        educacion_fisica: EDUCACION_FISICA_S2,
        artes: ARTES_S2
    }
};
