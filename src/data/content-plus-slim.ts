// Base de datos de contenido interactivo "Chispito Plus"
// Currículo de Habilidades para la Vida (Independiente a la SEP)
// Basado en simulaciones, juegos de rol y laboratorios interactivos.

import type { MateriaContenido } from './content-types';

// ==========================================
// NIVEL PREESCOLAR: "El Campamento de los Sentidos"
// ==========================================

export const CHISPITO_PLUS_K1: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "⛺",
    color: "#F43F5E",
    bloques: [
        {
            bloque: 1,
            nombre: "El Bosque de las Emociones",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: El Semáforo Corporal (Rojo = Enojado/Rugir, Verde = Tranquilo/Tortuga)",
                "Laboratorio de Texturas: Cajas misteriosas para perder el miedo a lo desconocido",
                "Reto Final: Crear la 'Poción de la Calma' con diamantina y agua"
            ],
            guiaPapa: {
                intro: "Bienvenidos al primer nivel de Chispito Plus. Aquí no aprenderán letras, aprenderán a no ser controlados por sus berrinches.",
                comoExplicar: [
                    "A los 3 años, el cerebro reptiliano (impulsos) domina. El semáforo corporal les enseña a asociar una emoción que no entienden con un color físico y una acción permitida."
                ],
                truco: "La 'Poción de la Calma' funciona por neurociencia: seguir con la mirada la caída lenta de la diamantina obliga al cerebro a bajar las ondas beta de estrés.",
                error_comun: "Decir 'no llores' o 'no te enojes'. La emoción no se bloquea, se canaliza. Mejor di: 'Veo que estás en rojo, ¡ruge fuerte!'",
                actividad_casa: "Replicar la Poción de la Calma en casa y usarla como 'El rincón de pensar' (pero en positivo)."
            },
            guiaMaestro: {
                objetivo: "El alumno asocia emociones básicas a estímulos físicos y visuales para iniciar la regulación emocional temprana.",
                competencia: "Inteligencia Emocional y Autoconocimiento"
            }
        }
    ]
};

export const CHISPITO_PLUS_K2: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "⛺",
    color: "#F43F5E",
    bloques: [
        {
            bloque: 1,
            nombre: "La Pequeña Ciudad",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: El Tianguis de Juguetes (Negociación y Trueque)",
                "Juego de Roles: El Hospital de Osos (Primeros auxilios emocionales y curitas)",
                "Reto Final: Circuito de Programación Física en el suelo (Seguir flechas)"
            ],
            guiaPapa: {
                intro: "Entramos al concepto de 'Sociedad'. Tu hijo descubrirá que las cosas cuestan esfuerzo y aprenderá a sanar a otros.",
                comoExplicar: [
                    "El trueque les enseña el valor relativo de las cosas. Un juguete viejo para él puede valer dos nuevos para su amigo.",
                    "El Hospital de Osos elimina el terror a los médicos dándoles a ellos el control de la 'jeringa de juguete'."
                ],
                truco: "Para el circuito de flechas, ponle un límite: 'El robot solo se mueve si pisa la flecha azul'. Esto es programación condicional (If/Then) sin usar pantallas.",
                error_comun: "Resolverles los conflictos en el Tianguis. Si no logran intercambiar su juguete, déjalos que sientan la frustración y busquen otra estrategia de venta.",
                actividad_casa: "Jugar a la tiendita con cajas de cereal vacías usando monedas de cartón hechas por ustedes."
            },
            guiaMaestro: {
                objetivo: "El alumno desarrolla empatía médica básica, conceptos pre-financieros y algoritmos lógicos direccionales.",
                competencia: "Empatía y Pre-Finanzas"
            }
        }
    ]
};

export const CHISPITO_PLUS_K3: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "⛺",
    color: "#F43F5E",
    bloques: [
        {
            bloque: 1,
            nombre: "El Escuadrón de Rescate",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: El Teléfono Descompuesto Real (Walkie-talkies y descripciones exactas)",
                "El Teatro de la Empatía: Adivinar por qué llora el maestro sin que él hable",
                "Reto Final: Simulacro del Agente Secreto (Marcar al 911 en teléfono de juguete)"
            ],
            guiaPapa: {
                intro: "A los 5 años, los preparamos para emergencias reales y para ser comunicadores exactos.",
                comoExplicar: [
                    "Si hay una emergencia, no sirve decir 'ayuda'. Tienen que saber decir su calle y el problema. El juego de walkie-talkie entrena esa claridad."
                ],
                truco: "Ponle un post-it gigante en la puerta de la casa con tu número celular y jueguen a marcarlo en un teclado viejo antes de salir al parque.",
                error_comun: "Creer que son 'muy chiquitos' para aprender de emergencias. A los 5 años, su memoria es perfecta para grabar protocolos de seguridad si se enseñan como juegos de espías.",
                actividad_casa: "Teatro mudo en casa: Hacer caras súper exageradas de emociones complejas (confusión, asco, sorpresa) para que el niño las nombre."
            },
            guiaMaestro: {
                objetivo: "El alumno domina protocolos de seguridad personal, comunicación descriptiva y reconocimiento facial de emociones.",
                competencia: "Supervivencia y Empatía Activa"
            }
        }
    ]
};

// ==========================================
// NIVEL PRIMARIA BAJA: "El Laboratorio de Inventores"
// ==========================================

export const CHISPITO_PLUS_P1: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "🛠️",
    color: "#8B5CF6",
    bloques: [
        {
            bloque: 1,
            nombre: "El Taller de los Creadores",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: Destruir para Entender (Desarmar teclados viejos)",
                "Cocinando Física: Hacer mantequilla saltando con crema en un frasco",
                "Reto Final: La Feria de Inventos (Garra hidráulica con jeringas)"
            ],
            guiaPapa: {
                intro: "Pasamos de ser usuarios pasivos de la tecnología a ser deconstructores. Entenderán qué hay dentro de la 'magia' de los plásticos.",
                comoExplicar: [
                    "La crema se vuelve mantequilla porque el golpe constante separa la grasa (sólido) del suero (líquido). Es pura física mecánica en la cocina."
                ],
                truco: "Para la garra hidráulica, explícales que el agua no se puede 'aplastar' (comprimir). Por eso, si empujas agua en una jeringa, a fuerza tiene que empujar la otra. Así funcionan las excavadoras gigantes.",
                error_comun: "Enojarse si desarman algo en casa. Mejor, cómpra en un tianguis aparatos inservibles de 10 pesos y dales un destornillador seguro.",
                actividad_casa: "Hacer pan tostado y derretir mantequilla. Observar cómo el calor cambia el estado de sólido a líquido, reforzando la física de la cocina."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende principios de mecánica básica, estados de la materia a través de la cocina y pierde el miedo a la tecnología.",
                competencia: "Mecánica Básica y Método Científico"
            }
        }
    ]
};

export const CHISPITO_PLUS_P2: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "🛠️",
    color: "#8B5CF6",
    bloques: [
        {
            bloque: 1,
            nombre: "La Estación de Supervivencia",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: Escape Room de Sismos (60 segundos en oscuridad)",
                "El Mercado de Tareas: Cheques semanales y la sorpresa de la Inflación",
                "Reto Final: Preparar comida básica sin luz ni estufa (ojos vendados)"
            ],
            guiaPapa: {
                intro: "Autonomía pura. Si la luz se va, o si hay una emergencia, tu hijo de 7 años no entrará en pánico; sabrá exactamente qué hacer.",
                comoExplicar: [
                    "Inflación explicada para niños: 'Como llovió poco, hay pocos limones. Como todos quieren limones, el dueño del puesto le sube el precio'. Su 'domingo' vale menos mágicamente."
                ],
                truco: "Enséñales a moverse en la oscuridad arrastrando los pies (para no tropezar) y tocando la pared con el dorso de la mano, no con la palma (para evitar cables pelados).",
                error_comun: "Hacer las mochilas de emergencia sin involucrarlos. Ellos deben saber exactamente dónde está la lámpara y en qué bolsillo están sus galletas.",
                actividad_casa: "El 'Apagón Divertido'. Cortar la luz general de la casa de sorpresa un viernes por la noche. Tienen que encontrar las linternas y cenar sándwiches a oscuras sin asustarse."
            },
            guiaMaestro: {
                objetivo: "El alumno desarrolla autonomía ante emergencias de protección civil y comprende conceptos económicos básicos como la inflación.",
                competencia: "Protección Civil e Inteligencia Financiera 1"
            }
        }
    ]
};

export const CHISPITO_PLUS_P3: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "🛠️",
    color: "#8B5CF6",
    bloques: [
        {
            bloque: 1,
            nombre: "La Academia de Detectives",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: Cazadores de Mentiras (Detectar videos falsos/Fake News)",
                "El Tribunal de los Dulces: Debate argumentativo frente al Juez",
                "Reto Final: Programar a un compañero humano (Robot de laberinto)"
            ],
            guiaPapa: {
                intro: "Nace el Pensamiento Crítico. Dejarán de creer todo lo que ven en YouTube y aprenderán a dar instrucciones con precisión robótica.",
                comoExplicar: [
                    "Un video donde alguien vuela o un dragón escupe fuego, siempre tiene 'Cortes' de cámara. Enséñales a buscar esos parpadeos raros en la pantalla para descubrir la edición."
                ],
                truco: "En el debate de los dulces, la regla es: 'No puedes decir 'porque sí'. Todo debe llevar un 'Porque [Razón] y entonces [Consecuencia]'."
            },
            guiaMaestro: {
                objetivo: "El alumno desarrolla alfabetización mediática, argumentación lógica y fundamentos de programación estructurada (algoritmos verbales).",
                competencia: "Pensamiento Computacional y Lógica"
            }
        }
    ]
};

// ==========================================
// NIVEL PRIMARIA ALTA: "La Ciudad de los Emprendedores"
// ==========================================

export const CHISPITO_PLUS_P4: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "🏙️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "Shark Tank Junior",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: El Préstamo Bancario (Crear una empresa de limonada)",
                "El Círculo de la Verdad: El vaso de agua sucia (Impacto del Bullying)",
                "Reto Final: Feria de Startups (Vender su invento con billetes didácticos)"
            ],
            guiaPapa: {
                intro: "Entramos a las grandes ligas del dinero y el respeto. Entenderán cómo funciona un negocio real y cómo las palabras crueles no se pueden borrar.",
                comoExplicar: [
                    "El Banco no te da dinero gratis. Te lo renta. Esa renta se llama 'Interés'. Tienes que vender muchas limonadas para pagar la renta y además ganar tú."
                ],
                truco: "Para el vaso del Bullying, la metáfora es perfecta: Por más que intentes sacar la tierra (pedir perdón), el agua nunca vuelve a ser puramente transparente. La herida queda."
            },
            guiaMaestro: {
                objetivo: "El alumno comprende el ciclo del crédito bancario, los márgenes de ganancia y la irreversibilidad del daño psicológico.",
                competencia: "Finanzas Reales y Empatía Profunda"
            }
        }
    ]
};

export const CHISPITO_PLUS_P5: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "🏙️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "Hackers Éticos y Ecosistemas",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: El Hackeo a la Tarea (Corregir alucinaciones de la IA)",
                "Eco-Constructores: Riego por goteo automático con botellas PET",
                "Reto Final: Escape Room Digital (Descifrar Phishing y crear contraseñas)"
            ],
            guiaPapa: {
                intro: "El mundo actual exige saber de Inteligencia Artificial y de Ecología práctica. Aquí aprenderán a ser más listos que las máquinas.",
                comoExplicar: [
                    "ChatGPT es como un perico súper inteligente. Repite todo lo que ha leído, pero a veces inventa cosas para sonar bien (Alucinaciones). Hay que desconfiar."
                ],
                truco: "Enseña la técnica del 'Dado' para crear contraseñas: Tira un dado e inventa una historia loca. 'El gato azul come 3 pizzas'. Juntar las iniciales de eso (EgaC3P) hace contraseñas inhackeables."
            },
            guiaMaestro: {
                objetivo: "El alumno verifica fuentes generadas por IA, aplica ecotecnias de supervivencia y fortalece su ciberseguridad personal.",
                competencia: "Ciudadanía Digital y Ecotecnología"
            }
        }
    ]
};

export const CHISPITO_PLUS_P6: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "🏙️",
    color: "#F59E0B",
    bloques: [
        {
            bloque: 1,
            nombre: "El Congreso de los Jóvenes",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: La Campaña Electoral (Votaciones reales en casilla)",
                "El Reto del Súper: Leer etiquetas de azúcar ocultas (Nutrición letal)",
                "Reto Final: MasterChef sin Fuego (Ceviche químico o postre molecular)"
            ],
            guiaPapa: {
                intro: "Para cerrar la primaria, los graduamos como ciudadanos independientes. Entenderán la democracia y lo que se meten a la boca.",
                comoExplicar: [
                    "El limón no 'quema' la carne del pescado en el ceviche. Sus ácidos (pH bajo) desnaturalizan la proteína de la misma forma que lo haría el calor de la estufa."
                ],
                truco: "Regla del azúcar: 4 gramos de azúcar equivalen a 1 cucharada cafetera real. Si el jugo dice '40 gramos de azúcar', diles que visualicen 10 cucharadas de azúcar en un solo vaso de agua. Se asquearán solos."
            },
            guiaMaestro: {
                objetivo: "El alumno vive la democracia participativa, domina la química culinaria y toma decisiones nutricionales críticas frente al marketing.",
                competencia: "Democracia y Bioquímica Nutricional"
            }
        }
    ]
};

// ==========================================
// NIVEL SECUNDARIA: "El Simulador de Vida Adulta"
// ==========================================

export const CHISPITO_PLUS_S1: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "🚀",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "El Cuarto de Guerra (War Room)",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: Apagón de Redes (48 horas de abstinencia digital monitoreada)",
                "Tribunal de Relaciones Tóxicas: Analizar WhatsApps falsos para detectar 'Gaslighting'",
                "Reto Final: Programar el esqueleto HTML de una página web en Bloc de Notas"
            ],
            guiaPapa: {
                intro: "Los peores años de la adolescencia requieren herramientas rudas. Hablaremos de noviazgos tóxicos y adicción a pantallas.",
                comoExplicar: [
                    "El Gaslighting es cuando alguien te hace dudar de tu propia memoria ('Yo nunca dije eso, estás loca'). Es violencia psicológica pura."
                ],
                truco: "Para el HTML, diles que es como armar el esqueleto de un cuerpo. Los huesos son el HTML, la ropa y el color de ojos son el CSS, y los músculos que se mueven son el JavaScript."
            },
            guiaMaestro: {
                objetivo: "El alumno identifica violencia relacional invisible, enfrenta la adicción a la dopamina digital y construye estructuras web reales.",
                competencia: "Salud Mental y Desarrollo Web I"
            }
        }
    ]
};

export const CHISPITO_PLUS_S2: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "🚀",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "El SAT y el Juzgado",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: El Día del Pago (Retención de ISR y pago de 'Renta' del pupitre)",
                "El Juicio de la Huella Digital: Investigar en Google a un compañero voluntario",
                "Reto Final: La Agencia de Publicidad (Editar un comercial persuasivo en CapCut)"
            ],
            guiaPapa: {
                intro: "Choque de realidad. ¿Por qué el gobierno te quita dinero de tu sueldo? ¿Y por qué esa foto que subiste de fiesta a los 13 años puede arruinar tu trabajo a los 25?",
                comoExplicar: [
                    "El ISR es un 'impuesto al éxito'. Entre más ganas, más te quitan para (en teoría) pagar hospitales y calles. El IVA es un impuesto por existir y comprar."
                ],
                truco: "La regla de oro del internet: Si el producto es gratis (como Instagram o TikTok), entonces EL PRODUCTO ERES TÚ. Venden tu información y tus gustos a las marcas."
            },
            guiaMaestro: {
                objetivo: "El alumno experimenta la carga fiscal real (SAT), evalúa su rastro digital legal y domina técnicas de edición y marketing ético.",
                competencia: "Finanzas Estatales y Huella Digital"
            }
        }
    ]
};

export const CHISPITO_PLUS_S3: MateriaContenido = {
    materia: "chispito_plus",
    nombre: "Chispito Plus (Habilidades)",
    emoji: "🚀",
    color: "#3B82F6",
    bloques: [
        {
            bloque: 1,
            nombre: "La Graduación a la Realidad",
            meses: "Aula Interactiva",
            enClase: [
                "Dinámica Estrella: La Ruleta de las Deudas (Juego con Tarjeta de Crédito e interés compuesto)",
                "Taller de Supervivencia Doméstica: Cambiar una llanta, destapar un lavabo, leer medidor de CFE",
                "Reto Final: El Proyecto de Vida Protegido (Simulación de entrevista de trabajo y portafolio de IA)"
            ],
            guiaPapa: {
                intro: "El examen final de la vida. Si aprenden a cambiar una llanta y a no usar la tarjeta de crédito pagando solo el 'mínimo', los salvarás de la bancarrota a los 25 años.",
                comoExplicar: [
                    "Si pagas solo el 'Pago Mínimo' de la tarjeta, el 90% se va a pagar multas e intereses, no a lo que compraste. Una televisión te terminará costando tres veces más."
                ],
                truco: "Interés compuesto: Si empiezas a meter $100 pesos al mes a una cuenta de inversión (ej. CETES) desde los 15 años, el dinero genera bebés (intereses), y esos bebés generan más bebés. A los 40 años tendrás más dinero que alguien que empezó a ahorrar miles a los 30."
            },
            guiaMaestro: {
                objetivo: "El alumno domina el mantenimiento básico del hogar, comprende la deuda bancaria compuesta y proyecta su futuro laboral usando IA productiva.",
                competencia: "Ingeniería Doméstica e Inteligencia Financiera II"
            }
        }
    ]
};
