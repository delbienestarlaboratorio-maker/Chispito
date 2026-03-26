#!/usr/bin/env node
/**
 * rebuild-broken-exercises.mjs — Chispito.mx
 * ============================================
 * Regenera todos los bloques defectuosos con preguntas escritas por el equipo.
 * NO requiere conexión a internet ni API externa.
 *
 * USO:
 *   node scripts/rebuild-broken-exercises.mjs
 *   node scripts/rebuild-broken-exercises.mjs --dry-run
 *   node scripts/rebuild-broken-exercises.mjs --grado=secundaria-1
 *   node scripts/rebuild-broken-exercises.mjs --materia=historia
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const EXERCISES_DIR = join(__dirname, '../src/data/exercises');
const ARGS          = process.argv.slice(2);
const DRY_RUN       = ARGS.includes('--dry-run');
const GRADO_FILTER  = ARGS.find(a => a.startsWith('--grado='))?.split('=')[1];
const MATERIA_FILTER= ARGS.find(a => a.startsWith('--materia='))?.split('=')[1];

// ─── Detectores de contenido defectuoso ─────────────────────────────────────
const GENERIC_PATTERNS = [
  /Conocimiento especializado/i,
  /nos ayuda a comprender el mundo con mayor profundidad/i,
  /la práctica constante nos lleva al ___/i,
  /Este tema está incluido en los planes y programas de estudio oficiales/i,
  /¿Qué estudia el tema "/i,
  /La práctica y la reflexión son claves para aprender cualquier materia/i,
];

function isBroken(json) {
  const str = JSON.stringify(json);
  if (GENERIC_PATTERNS.some(p => p.test(str))) return true;
  // Preguntas duplicadas
  const all = [...(json.ejercicios?.v1||[]), ...(json.ejercicios?.v2||[])];
  const seen = new Set();
  for (const ex of all) {
    const k = ex.pregunta?.trim().toLowerCase();
    if (k && seen.has(k)) return true;
    seen.add(k);
  }
  return false;
}

// ─── BANCO DE PREGUNTAS ──────────────────────────────────────────────────────
// Organizado como BANCO[materia][tema] = [ejercicios...]
// Cada ejercicio: { tipo, pregunta, opciones?, respuestaCorrecta, explicacion, nivel }
// nivel: 'v1' (fácil) o 'v2' (difícil)

const BANCO = {

  // ══════════════════════════════════════════════════════════════════════════
  //  ARTES
  // ══════════════════════════════════════════════════════════════════════════
  artes: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuáles son los colores primarios?', opciones:['Rojo, azul y amarillo','Naranja, verde y morado','Negro, blanco y gris','Café, rosa y turquesa'], respuestaCorrecta:'Rojo, azul y amarillo', explicacion:'Los colores primarios (rojo, azul, amarillo) no se obtienen mezclando otros colores.' },
      { tipo:'true_false', nivel:'v1', pregunta:'Al mezclar rojo y azul obtenemos el color verde', respuestaCorrecta:'false', explicacion:'Mezclando rojo y azul obtenemos violeta o morado, no verde.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'Al mezclar amarillo y azul se produce el color ___', respuestaCorrecta:'verde', explicacion:'Amarillo + azul = verde. Es uno de los colores secundarios.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Qué herramienta se usa para modelar figuras con plastilina?', opciones:['Tijeras','Las manos y palillos','Una regla','Un pincel'], respuestaCorrecta:'Las manos y palillos', explicacion:'La plastilina se modela principalmente con las manos y con palillos o estecas para detalles.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuál de estos es un instrumento de percusión?', opciones:['Flauta','Guitarra','Tambor','Trompeta'], respuestaCorrecta:'Tambor', explicacion:'Los instrumentos de percusión producen sonido al ser golpeados. El tambor es uno de los más conocidos.' },
      { tipo:'true_false', nivel:'v1', pregunta:'La dramatización es una forma de expresión artística', respuestaCorrecta:'true', explicacion:'La dramatización o teatro es una expresión artística que combina cuerpo, voz y emoción.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Qué expresa una persona cuando dibuja su familia?', opciones:['Solo datos','Emociones, afecto y su entorno','Operaciones matemáticas','Datos científicos'], respuestaCorrecta:'Emociones, afecto y su entorno', explicacion:'El dibujo es una forma de comunicar sentimientos y experiencias personales.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'Las canciones y las ___ son formas de expresión musical y literaria', respuestaCorrecta:'rimas', explicacion:'Las rimas y canciones combinan ritmo, melodía y lenguaje para expresar ideas.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Cómo se llama la técnica de doblar papel para crear figuras?', opciones:['Decoupage','Origami','Collage','Mosaico'], respuestaCorrecta:'Origami', explicacion:'El origami es el arte japonés de doblar papel para crear figuras tridimensionales.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué son los colores secundarios?', opciones:['Rojo, azul y amarillo','Naranja, verde y morado','Negro y blanco','Todos los del arcoíris'], respuestaCorrecta:'Naranja, verde y morado', explicacion:'Los colores secundarios se obtienen mezclando dos primarios: rojo+amarillo=naranja, azul+amarillo=verde, rojo+azul=morado.' },
      { tipo:'true_false', nivel:'v2', pregunta:'La escultura es un arte que trabaja en tres dimensiones', respuestaCorrecta:'true', explicacion:'A diferencia de la pintura (2D), la escultura crea formas en tres dimensiones: alto, ancho y profundidad.' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'El conjunto de líneas, colores y formas que se repiten en un diseño se llama ___', respuestaCorrecta:'patrón', explicacion:'Un patrón es una secuencia que se repite de manera ordenada en diseño y arte.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Cuál es el instrumento de viento que más se usa en bandas escolares?', opciones:['Tuba','Flauta de pico','Trombón','Corno francés'], respuestaCorrecta:'Flauta de pico', explicacion:'La flauta de pico es el instrumento de viento más utilizado en educación básica por su facilidad de aprendizaje.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'En una obra de teatro, ¿cómo se llama el texto que los actores dicen?', opciones:['Partitura','Libreto o guion','Pauta','Refrán'], respuestaCorrecta:'Libreto o guion', explicacion:'El libreto o guion contiene los diálogos, acotaciones y estructura de una obra de teatro.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CONOCIMIENTO DEL MEDIO (kinder/preescolar)
  // ══════════════════════════════════════════════════════════════════════════
  conocimiento: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuántos sentidos tiene el cuerpo humano?', opciones:['3','4','5','6'], respuestaCorrecta:'5', explicacion:'Los 5 sentidos son: vista, oído, olfato, gusto y tacto.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Con qué sentido olemos las flores?', opciones:['Vista','Gusto','Olfato','Tacto'], respuestaCorrecta:'Olfato', explicacion:'El olfato es el sentido que nos permite detectar los olores. Lo hacemos con la nariz.' },
      { tipo:'true_false', nivel:'v1', pregunta:'La mamá, el papá y los hijos forman una familia', respuestaCorrecta:'true', explicacion:'La familia es el grupo de personas con quienes vivimos y compartimos afecto y cuidado.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'Con los ojos podemos ___ todo a nuestro alrededor', respuestaCorrecta:'ver', explicacion:'Los ojos son los órganos de la vista; nos permiten ver formas, colores y movimiento.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuál de estas son partes del cuerpo?', opciones:['Mesa, silla, puerta','Brazo, pierna, cabeza','Libro, cuaderno, lápiz','Casa, árbol, nube'], respuestaCorrecta:'Brazo, pierna, cabeza', explicacion:'Las partes del cuerpo humano incluyen cabeza, tronco y extremidades (brazos y piernas).' },
      { tipo:'true_false', nivel:'v1', pregunta:'El perro y el gato son animales domésticos', respuestaCorrecta:'true', explicacion:'Los animales domésticos son los que viven con las personas en sus casas.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Qué le da energía a las plantas para crecer?', opciones:['La luna','La lluvia ácida','El Sol','El viento'], respuestaCorrecta:'El Sol', explicacion:'Las plantas necesitan luz solar para realizar la fotosíntesis y producir su alimento.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'El agua, el fuego, la tierra y el ___ son elementos de la naturaleza', respuestaCorrecta:'aire', explicacion:'El aire es uno de los elementos fundamentales de la naturaleza y lo respiramos para vivir.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué sentido usamos para saber si algo está caliente o frío?', opciones:['Vista','Oído','Tacto','Gusto'], respuestaCorrecta:'Tacto', explicacion:'A través de la piel y el sentido del tacto podemos detectar temperatura, textura y presión.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Cuáles son los miembros de una familia extendida?', opciones:['Solo papá y mamá','Papá, mamá e hijos','Abuelos, tíos, primos y más parientes','Solo los vecinos'], respuestaCorrecta:'Abuelos, tíos, primos y más parientes', explicacion:'La familia extendida incluye a todos los parientes: abuelos, tíos, primos, etc.' },
      { tipo:'true_false', nivel:'v2', pregunta:'Los animales salvajes también son importantes para la naturaleza aunque no vivamos con ellos', respuestaCorrecta:'true', explicacion:'Los animales salvajes son parte del ecosistema y ayudan a mantener el equilibrio natural.' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'Las plantas producen el ___ que respiramos', respuestaCorrecta:'oxígeno', explicacion:'Durante la fotosíntesis, las plantas absorben CO₂ y liberan oxígeno, el gas que necesitamos para vivir.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué necesitamos para mantenernos saludables?', opciones:['Solo dormir','Comer comida chatarra','Comer bien, hacer ejercicio y dormir suficiente','Solo tomar vitaminas'], respuestaCorrecta:'Comer bien, hacer ejercicio y dormir suficiente', explicacion:'La salud integral requiere buena alimentación, actividad física y descanso adecuado.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿De dónde viene el agua que tomamos?', opciones:['Del cielo directamente','De ríos, lagos y pozos que se purifica','Solo del mar','De las nubes sin purificar'], respuestaCorrecta:'De ríos, lagos y pozos que se purifica', explicacion:'El agua que consumimos proviene de fuentes naturales (ríos, acuíferos) y pasa por procesos de purificación.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  GEOGRAFÍA
  // ══════════════════════════════════════════════════════════════════════════
  geografia: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuántos continentes tiene el planeta Tierra?', opciones:['4','5','6','7'], respuestaCorrecta:'7', explicacion:'Los 7 continentes son: África, América del Norte, América del Sur, Antártida, Asia, Europa y Oceanía.' },
      { tipo:'true_false', nivel:'v1', pregunta:'México está ubicado en América del Norte', respuestaCorrecta:'true', explicacion:'México forma parte de América del Norte, junto con Estados Unidos y Canadá.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'El río más largo del mundo es el ___', respuestaCorrecta:'Nilo', explicacion:'El río Nilo, en África, tiene una longitud de aproximadamente 6,650 km.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Qué es un mapa?', opciones:['Una fotografía del espacio','Una representación gráfica de un territorio','Un tipo de lupa','Un libro de historia'], respuestaCorrecta:'Una representación gráfica de un territorio', explicacion:'Un mapa es una representación plana y reducida de un territorio o del mundo.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuál es el océano más grande del mundo?', opciones:['Atlántico','Índico','Ártico','Pacífico'], respuestaCorrecta:'Pacífico', explicacion:'El océano Pacífico es el más grande, cubre más de 165 millones de km².' },
      { tipo:'true_false', nivel:'v1', pregunta:'El Sahara es el desierto más grande del mundo', respuestaCorrecta:'true', explicacion:'El desierto del Sahara, en África, es el desierto cálido más grande con aproximadamente 9 millones de km².' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'La rosa de los vientos indica los puntos cardinales: Norte, Sur, Este y ___', respuestaCorrecta:'Oeste', explicacion:'Los cuatro puntos cardinales son Norte, Sur, Este y Oeste. La rosa de los vientos los señala.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuál es la capital de México?', opciones:['Guadalajara','Monterrey','Ciudad de México','Puebla'], respuestaCorrecta:'Ciudad de México', explicacion:'La Ciudad de México (CDMX) es la capital y ciudad más grande del país.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué son las coordenadas geográficas?', opciones:['Un tipo de mapa especial','El sistema de latitud y longitud para ubicar puntos en la Tierra','El nombre de los continentes','Las fronteras entre países'], respuestaCorrecta:'El sistema de latitud y longitud para ubicar puntos en la Tierra', explicacion:'Las coordenadas geográficas (latitud y longitud) permiten ubicar con precisión cualquier punto del planeta.' },
      { tipo:'true_false', nivel:'v2', pregunta:'El ecuador divide a la Tierra en hemisferio norte y hemisferio sur', respuestaCorrecta:'true', explicacion:'El ecuador es la línea imaginaria que divide la Tierra en dos mitades iguales: norte y sur.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Cuál es el país más grande del mundo por superficie?', opciones:['China','Estados Unidos','Canadá','Rusia'], respuestaCorrecta:'Rusia', explicacion:'Rusia tiene una superficie de 17.1 millones de km², el mayor de cualquier país.' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'El fenómeno por el que el sol sale por el este y se oculta por el oeste se llama ___ de la Tierra', respuestaCorrecta:'rotación', explicacion:'La rotación terrestre sobre su eje da lugar al ciclo día/noche y al movimiento aparente del Sol.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué tipo de clima tienen los polos terrestres?', opciones:['Tropical','Desértico','Polar o glacial','Mediterráneo'], respuestaCorrecta:'Polar o glacial', explicacion:'Los polos tienen clima polar: temperaturas extremadamente bajas y presencia permanente de hielo.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Cuál de estas es una característica de la zona intertropical?', opciones:['Temperaturas muy bajas','Alta biodiversidad y lluvias abundantes','Desiertos fríos','Escasa vegetación'], respuestaCorrecta:'Alta biodiversidad y lluvias abundantes', explicacion:'La zona intertropical (entre los trópicos de Cáncer y Capricornio) tiene climas cálidos con mucha lluvia y biodiversidad.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  INGLES (bachillerato)
  // ══════════════════════════════════════════════════════════════════════════
  ingles: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'What is the plural form of "child"?', opciones:['Childs','Children','Childes','Childre'], respuestaCorrecta:'Children', explicacion:'"Children" is the irregular plural of "child". Irregular plurals don\'t follow the standard -s rule.' },
      { tipo:'true_false', nivel:'v1', pregunta:'The sentence "She go to school" is grammatically correct', respuestaCorrecta:'false', explicacion:'Correct form: "She goes to school." Third person singular (he/she/it) adds -s/-es to the verb in simple present.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'The opposite of "hot" is ___', respuestaCorrecta:'cold', explicacion:'"Hot" and "cold" are antonyms (opposite words) used to describe temperature.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'Which word is an adjective in: "The red apple is delicious"?', opciones:['apple','is','red','delicious'], respuestaCorrecta:'red', explicacion:'"Red" describes the noun "apple", making it an adjective. "Delicious" is also an adjective but modifies a predicate.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'How do you say "buenos días" in English?', opciones:['Good night','Good evening','Good afternoon','Good morning'], respuestaCorrecta:'Good morning', explicacion:'"Good morning" is the greeting used in the morning hours (before noon).' },
      { tipo:'true_false', nivel:'v1', pregunta:'In English, nouns are capitalized only at the beginning of a sentence', respuestaCorrecta:'true', explicacion:'Unlike German, English only capitalizes nouns at the start of sentences, names, titles, and proper nouns.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'I ___ reading a book right now. (present progressive)', respuestaCorrecta:'am', explicacion:'Present progressive: subject + am/is/are + verb-ing. "I am reading" = action happening now.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'Which sentence uses the past perfect correctly?', opciones:['She has eaten before he arrived','She had eaten before he arrived','She was eating before he arrived','She ate before he was arriving'], respuestaCorrecta:'She had eaten before he arrived', explicacion:'Past perfect (had + past participle) describes an action completed before another past action.' },
      { tipo:'true_false', nivel:'v2', pregunta:'A clause with "although" always introduces a contrast or concession', respuestaCorrecta:'true', explicacion:'"Although" introduces a subordinate clause that presents a contrast: "Although it was raining, we went out."' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'What is the function of a relative clause introduced by "who"?', opciones:['Describe a time','Modify a person noun','Express a condition','Show a result'], respuestaCorrecta:'Modify a person noun', explicacion:'"Who" introduces relative clauses that provide more information about a person: "The man who called is my uncle."' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'If I ___ (study) harder, I would pass the exam. (second conditional)', respuestaCorrecta:'studied', explicacion:'Second conditional: If + simple past, would + base verb. Expresses hypothetical/unlikely situations.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'Which word best replaces "big" in a formal academic text?', opciones:['Huge','Enormous','Substantial','Giant'], respuestaCorrecta:'Substantial', explicacion:'"Substantial" is the most appropriate formal synonym for "large/big" in academic writing.' },
      { tipo:'true_false', nivel:'v2', pregunta:'The passive voice is formed with the verb "to be" + past participle', respuestaCorrecta:'true', explicacion:'Passive voice: subject + to be (conjugated) + past participle. E.g., "The book was written by Cervantes."' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'What does the prefix "un-" mean in "unhappy" or "unusual"?', opciones:['Again','More than','Not or opposite','Before'], respuestaCorrecta:'Not or opposite', explicacion:'The prefix "un-" negates or reverses the meaning: unhappy = not happy, unusual = not usual.' },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  TECNOLOGÍA (bachillerato)
  // ══════════════════════════════════════════════════════════════════════════
  tecnologia: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Qué significa CPU en computación?', opciones:['Control de Programa Universal','Unidad Central de Procesamiento','Central de Programas Unificados','Circuito de Procesamiento Único'], respuestaCorrecta:'Unidad Central de Procesamiento', explicacion:'CPU (Central Processing Unit - Unidad Central de Procesamiento) es el "cerebro" de la computadora.' },
      { tipo:'true_false', nivel:'v1', pregunta:'El software es la parte física de la computadora (hardware)', respuestaCorrecta:'false', explicacion:'El software son los programas e instrucciones (parte lógica). El hardware es la parte física.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'El dispositivo que convierte datos digitales en imágenes en pantalla se llama ___', respuestaCorrecta:'monitor', explicacion:'El monitor o pantalla es el dispositivo de salida que muestra la información visualmente.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Qué es internet?', opciones:['Un sistema operativo','Una red global de computadoras interconectadas','Un programa de edición','Un tipo de hardware'], respuestaCorrecta:'Una red global de computadoras interconectadas', explicacion:'Internet es la red que conecta millones de computadoras y dispositivos en todo el mundo.' },
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuál de estos es un sistema operativo?', opciones:['Microsoft Word','Windows 11','Google Chrome','Adobe Photoshop'], respuestaCorrecta:'Windows 11', explicacion:'Windows, macOS y Linux son sistemas operativos. Los demás son aplicaciones que corren sobre el sistema operativo.' },
      { tipo:'true_false', nivel:'v1', pregunta:'Un virus informático es un programa dañino que puede replicarse', respuestaCorrecta:'true', explicacion:'Los virus informáticos son programas maliciosos que se copian a sí mismos y pueden dañar datos o sistemas.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'El proceso de convertir datos en un código secreto para protegerlos se llama ___', respuestaCorrecta:'encriptación', explicacion:'La encriptación (cifrado) convierte información en código ilegible para quienes no tienen la clave.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué es la nube (cloud computing)?', opciones:['Una tecnología para predecir el clima','El almacenamiento y procesamiento de datos en servidores remotos por internet','Un tipo de red doméstica','Un navegador web especial'], respuestaCorrecta:'El almacenamiento y procesamiento de datos en servidores remotos por internet', explicacion:'La computación en la nube permite acceder a recursos computacionales a través de internet sin hardware local.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué es un algoritmo?', opciones:['Un tipo de lenguaje de programación','Un conjunto de pasos ordenados para resolver un problema','El código binario de un programa','Una base de datos'], respuestaCorrecta:'Un conjunto de pasos ordenados para resolver un problema', explicacion:'Un algoritmo es una secuencia finita de instrucciones para resolver un problema o realizar una tarea.' },
      { tipo:'true_false', nivel:'v2', pregunta:'Python es un lenguaje de programación de alto nivel muy utilizado en ciencia de datos', respuestaCorrecta:'true', explicacion:'Python es uno de los lenguajes más populares del mundo, especialmente en análisis de datos, IA y desarrollo web.' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'En programación, una ___ es un bloque de código reutilizable que realiza una tarea específica', respuestaCorrecta:'función', explicacion:'Las funciones (o métodos) permiten organizar y reutilizar código, evitando la repetición.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué protocolo se usa para navegar sitios web seguros (con candado)?', opciones:['FTP','HTTP','HTTPS','SSH'], respuestaCorrecta:'HTTPS', explicacion:'HTTPS (HTTP Secure) encripta la comunicación entre el navegador y el servidor usando TLS/SSL.' },
      { tipo:'true_false', nivel:'v2', pregunta:'La inteligencia artificial puede aprender de datos sin ser programada explícitamente para cada tarea', respuestaCorrecta:'true', explicacion:'El Machine Learning (aprendizaje automático) permite a los sistemas mejorar con la experiencia y los datos.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué es una base de datos relacional?', opciones:['Un archivo de texto con datos','Un sistema que organiza datos en tablas relacionadas entre sí','Una hoja de cálculo','Un directorio de archivos'], respuestaCorrecta:'Un sistema que organiza datos en tablas relacionadas entre sí', explicacion:'Las bases de datos relacionales (como MySQL, PostgreSQL) organizan datos en tablas vinculadas por claves.' },
    ],
  },

// ══════════════════════════════════════════════════════════════════════════
  //  ESPAÑOL
  // ══════════════════════════════════════════════════════════════════════════
  espanol: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuál de estas palabras es un verbo?', opciones:['Correr','Mesa','Bonito','Ayer'], respuestaCorrecta:'Correr', explicacion:'Los verbos expresan acciones, estados o procesos.' },
      { tipo:'true_false', nivel:'v1', pregunta:'Las palabras que sirven para nombrar personas, animales o cosas se llaman sustantivos', respuestaCorrecta:'true', explicacion:'El sustantivo es la clase de palabra que designa entidades fijas.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'La sílaba que se pronuncia con mayor intensidad en una palabra se llama sílaba ___', respuestaCorrecta:'tónica', explicacion:'La sílaba tónica lleva el acento prosódico.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué es un texto argumentativo?', opciones:['El que cuenta una historia','El que describe un paisaje','El que defiende una opinión o idea con razones','El que da instrucciones paso a paso'], respuestaCorrecta:'El que defiende una opinión o idea con razones', explicacion:'La argumentación busca persuadir o convencer al lector.' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'Las palabras que suenan igual pero se escriben distinto y tienen diferente significado se llaman palabras ___', respuestaCorrecta:'homófonas', explicacion:'Ejemplo: "hola" (saludo) y "ola" (onda en el mar).' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'En la oración "El gato duerme", ¿cuál es el predicado?', opciones:['El gato','duerme','El','gato duerme'], respuestaCorrecta:'duerme', explicacion:'El predicado es la acción que realiza el sujeto.' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  MATEMÁTICAS
  // ══════════════════════════════════════════════════════════════════════════
  matematicas: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Cuánto es 8 x 7?', opciones:['48','54','56','64'], respuestaCorrecta:'56', explicacion:'8 multiplicado por 7 es igual a 56.' },
      { tipo:'true_false', nivel:'v1', pregunta:'Un triángulo equilátero tiene sus tres lados iguales', respuestaCorrecta:'true', explicacion:'El prefijo "equi" significa igual, y "látero" lado.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'El resultado de una suma se llama ___', respuestaCorrecta:'total', explicacion:'También se le conoce como suma o adición.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Cuál es el área de un cuadrado de lado 5 cm?', opciones:['10 cm²','20 cm²','25 cm²','30 cm²'], respuestaCorrecta:'25 cm²', explicacion:'El área de un cuadrado se calcula multiplicando lado por lado (5 x 5).' },
      { tipo:'true_false', nivel:'v2', pregunta:'El número Pi (π) equivale a la relación entre la longitud de una circunferencia y su diámetro', respuestaCorrecta:'true', explicacion:'Esta constante matemática es aproximadamente 3.14159...' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'El ángulo que mide exactamente 90 grados se llama ángulo ___', respuestaCorrecta:'recto', explicacion:'Un ángulo recto forma una L perfecta.' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CIENCIAS
  // ══════════════════════════════════════════════════════════════════════════
  ciencias: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Qué gas necesitamos los seres humanos para respirar?', opciones:['Dióxido de carbono','Oxígeno','Nitrógeno','Helio'], respuestaCorrecta:'Oxígeno', explicacion:'Las células humanas utilizan el oxígeno para producir energía.' },
      { tipo:'true_false', nivel:'v1', pregunta:'El agua cambia de estado líquido a sólido al calentarse', respuestaCorrecta:'false', explicacion:'El agua se vuelve sólida (hielo) al enfriarse por debajo de los 0°C.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'El proceso por el cual las plantas fabrican su propio alimento se llama ___', respuestaCorrecta:'fotosíntesis', explicacion:'Las plantas utilizan luz solar, agua y dióxido de carbono en este proceso.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Cuál es la unidad básica de la vida estructural y funcional?', opciones:['El átomo','La célula','El tejido','El órgano'], respuestaCorrecta:'La célula', explicacion:'Todos los organismos vivos están compuestos por una o más células.' },
      { tipo:'true_false', nivel:'v2', pregunta:'La fuerza que nos mantiene sobre la superficie de la Tierra es el magnetismo', respuestaCorrecta:'false', explicacion:'La fuerza responsable es la gravedad, que atrae los cuerpos hacia el centro del planeta.' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'El planeta más cercano al Sol en nuestro sistema solar es ___', respuestaCorrecta:'Mercurio', explicacion:'Mercurio orbita más cerca del Sol que cualquier otro planeta.' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  HISTORIA
  // ══════════════════════════════════════════════════════════════════════════
  historia: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿En qué año Cristóbal Colón llegó a América?', opciones:['1492','1521','1810','1910'], respuestaCorrecta:'1492', explicacion:'La llegada de Colón marcó el inicio del contacto europeo con América.' },
      { tipo:'true_false', nivel:'v1', pregunta:'Miguel Hidalgo lideró el inicio de la Independencia de México', respuestaCorrecta:'true', explicacion:'Hidalgo dio el Grito de Dolores el 16 de septiembre de 1810.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'La gran ciudad construida por los aztecas sobre un lago se llamaba ___', respuestaCorrecta:'Tenochtitlán', explicacion:'Esta ciudad fue el corazón del imperio mexica hasta la conquista española.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué evento de 1910 buscó terminar con la dictadura de Porfirio Díaz?', opciones:['La Guerra de Reforma','La Independencia','La Revolución Mexicana','La Guerra Cristera'], respuestaCorrecta:'La Revolución Mexicana', explicacion:'Iniciada por Francisco I. Madero con el Plan de San Luis.' },
      { tipo:'true_false', nivel:'v2', pregunta:'El Tratado de Guadalupe Hidalgo puso fin a la guerra de Reforma', respuestaCorrecta:'false', explicacion:'Dicho tratado finalizó la guerra México-Estados Unidos, resultando en la pérdida de la mitad del territorio nacional.' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'Durante tres siglos, gran parte del territorio de Norteamérica y Centroamérica formó el Virreinato de la Nueva ___', respuestaCorrecta:'España', explicacion:'Se estableció en 1535 con Antonio de Mendoza como primer virrey.' }
    ]
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  FORMACIÓN
  // ══════════════════════════════════════════════════════════════════════════
  formacion: {
    _default: [
      { tipo:'multiple_choice', nivel:'v1', pregunta:'¿Qué documento establece los derechos fundamentales de todos los mexicanos?', opciones:['El Código Penal','La Biblia','La Constitución Política','El Reglamento de Tránsito'], respuestaCorrecta:'La Constitución Política', explicacion:'La Constitución de 1917 rige la vida jurídica de México.' },
      { tipo:'true_false', nivel:'v1', pregunta:'Discriminar significa tratar a todos por igual', respuestaCorrecta:'false', explicacion:'Discriminar significa dar un trato desigual y perjudicial a alguien por motivos de raza, sexo, ideas, etc.' },
      { tipo:'fill_blank', nivel:'v1', pregunta:'La capacidad de ponerse en el lugar de los demás y comprender sus sentimientos se llama ___', respuestaCorrecta:'empatía', explicacion:'La empatía es fundamental para la convivencia social.' },
      { tipo:'multiple_choice', nivel:'v2', pregunta:'¿Qué es la "separación de poderes"?', opciones:['Dividir a la policía y al ejército','Dividir el país en estados','Distribuir las funciones del estado en Poder Ejecutivo, Legislativo y Judicial','Separar a los niños por edades en las escuelas'], respuestaCorrecta:'Distribuir las funciones del estado en Poder Ejecutivo, Legislativo y Judicial', explicacion:'Este principio busca evitar la concentración de poder y garantizar el equilibrio y la libertad.' },
      { tipo:'true_false', nivel:'v2', pregunta:'La cultura de la legalidad promueve que la gente decida cuáles reglas cumplir y cuáles ignorar', respuestaCorrecta:'false', explicacion:'La cultura de la legalidad implica conocer, respetar y cumplir las leyes por convicción.' },
      { tipo:'fill_blank', nivel:'v2', pregunta:'El sistema de gobierno en el cual los ciudadanos eligen a sus representantes es una ___', respuestaCorrecta:'democracia', explicacion:'Proviene del griego "demos" (pueblo) y "kratos" (poder).' }
    ]
  },
}; // fin BANCO

// ─── Temas especiales que mapean a un banco concreto ─────────────────────────
// Permite que temas con nombres distintos usen el mismo banco
const TEMA_MAP = {
  // artes
  'Rojo, azul y amarillo': 'artes',
  'Mezcla de colores': 'artes',
  'Mi familia': 'artes',
  'Mi animal favorito': 'artes',
  'Instrumentos musicales': 'artes',
  'Canciones y rimas': 'artes',
  'Expresiones del rostro': 'artes',
  'Dramatización simple': 'artes',
  'Papel y tijeras': 'artes',
  'Figuras con plastilina': 'artes',
  // conocimiento
  'Partes del cuerpo': 'conocimiento',
  'Los sentidos': 'conocimiento',
  'Miembros de la familia': 'conocimiento',
  'La casa y sus espacios': 'conocimiento',
  'Las plantas': 'conocimiento',
  'Los animales': 'conocimiento',
  'El clima': 'conocimiento',
  'Los alimentos': 'conocimiento',
  'El campo y la ciudad': 'conocimiento',
};

// Mapeos de nombres de materias NEM (Nueva Escuela Mexicana) y otras
const MATERIA_MAP = {
  'saberes_cientificos': 'ciencias',
  'lenguajes_nem': 'espanol',
  'multiples_lenguajes': 'espanol',
  'etica_naturaleza': 'formacion',
  'humano_comunitario': 'formacion',
  'proyectos_nem': 'formacion',
  'civica': 'formacion',
  'filosofia': 'formacion'
};

// ─── Seleccionar ejercicios por materia/temas ─────────────────────────────────
function getEjercicios(materia, temas = []) {
  const materiaReal = MATERIA_MAP[materia] || materia;
  const bancoMateria = BANCO[materiaReal];
  if (!bancoMateria) return null;

  // Buscar por tema específico primero
  let pool = [];
  for (const tema of temas) {
    const b = bancoMateria[tema] || (TEMA_MAP[tema] ? BANCO[TEMA_MAP[tema]]?._default : null);
    if (b) pool.push(...b);
  }
  // Fallback a _default de la materia
  if (pool.length === 0 && bancoMateria._default) {
    pool = [...bancoMateria._default];
  }
  if (pool.length === 0) return null;

  // Deduplicar preguntas
  const seen = new Set();
  const unique = pool.filter(e => {
    const k = e.pregunta.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  return unique;
}

// ─── Formatear ejercicio al esquema del JSON ──────────────────────────────────
function formatEj(ej, grado, materia, bloque, nivel, counter, tema) {
  const pfx = nivel === 'v1'
    ? `${grado}-${materia}-b${bloque}-${String(counter).padStart(3,'0')}`
    : `${grado}-${materia}-b${bloque}-v2-${String(counter).padStart(3,'0')}`;
  const base = {
    id: pfx,
    tema: tema || ej.tema || 'General',
    tipo: ej.tipo,
    nivel,
    pregunta: ej.pregunta,
    respuestaCorrecta: ej.respuestaCorrecta,
    explicacion: ej.explicacion,
  };
  if (ej.tipo === 'multiple_choice' && ej.opciones) base.opciones = ej.opciones;
  return base;
}

// ─── Construir nuevo bloque ───────────────────────────────────────────────────
function buildBloque(original) {
  const { grado, materia, bloque, nombre, meses, temas } = original;
  const pool = getEjercicios(materia, temas);
  if (!pool) return null;

  const v1pool = pool.filter(e => e.nivel === 'v1');
  const v2pool = pool.filter(e => e.nivel === 'v2');

  // Necesitamos al menos 5 de cada nivel
  if (v1pool.length < 3 || v2pool.length < 3) return null;

  const v1 = v1pool.map((e, i) => formatEj(e, grado, materia, bloque, 'v1', i+1, temas[0]));
  const v2 = v2pool.map((e, i) => formatEj(e, grado, materia, bloque, 'v2', i+1, temas[temas.length-1]));
  const preview = [v1[0], v2[0], v1[1] || v2[1]].filter(Boolean);

  return {
    grado, materia, bloque, nombre, meses, temas,
    totalEjercicios: v1.length + v2.length,
    ejercicios: { v1, v2, preview },
    generado: new Date().toISOString(),
    version: '2.0',
  };
}

// ─── Colectar archivos ────────────────────────────────────────────────────────
function collectJsonFiles(dir) {
  const files = [];
  function walk(d) {
    for (const entry of readdirSync(d)) {
      const full = join(d, entry);
      if (statSync(full).isDirectory()) { walk(full); continue; }
      if (entry.startsWith('bloque-') && entry.endsWith('.json')) files.push(full);
    }
  }
  walk(dir);
  return files.sort();
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
const allFiles = collectJsonFiles(EXERCISES_DIR);
let repaired = 0, skipped = 0, noBank = 0;

for (const filePath of allFiles) {
  const rel = relative(EXERCISES_DIR, filePath).replace(/\\/g, '/');

  if (GRADO_FILTER && !rel.startsWith(GRADO_FILTER)) continue;
  if (MATERIA_FILTER && !rel.includes('/' + MATERIA_FILTER + '/')) continue;

  let original;
  try { original = JSON.parse(readFileSync(filePath, 'utf-8')); }
  catch { console.log(`❌  JSON inválido: ${rel}`); continue; }

  if (!isBroken(original)) { skipped++; continue; }

  const materiaReal = MATERIA_MAP[original.materia] || original.materia;
  if (!BANCO[materiaReal]) {
    console.log(`⚠   Sin banco para materia "${original.materia}": ${rel}`);
    noBank++;
    continue;
  }

  const nuevo = buildBloque(original);
  if (!nuevo) {
    console.log(`⚠   Banco insuficiente para ${rel}`);
    noBank++;
    continue;
  }

  if (DRY_RUN) {
    console.log(`🔧  [dry-run] Repararía: ${rel} (${nuevo.ejercicios.v1.length}v1 + ${nuevo.ejercicios.v2.length}v2)`);
  } else {
    writeFileSync(filePath, JSON.stringify(nuevo, null, 2), 'utf-8');
    console.log(`✅  Reparado: ${rel} (${nuevo.ejercicios.v1.length}v1 + ${nuevo.ejercicios.v2.length}v2)`);
  }
  repaired++;
}

console.log(`\n${'═'.repeat(55)}`);
console.log(`✅  Reparados  : ${repaired}`);
console.log(`⏭   Sin cambios: ${skipped} (ya estaban bien)`);
console.log(`⚠   Sin banco  : ${noBank} (requieren revisión manual)`);
console.log(`${'═'.repeat(55)}\n`);

if (!DRY_RUN && repaired > 0) {
  console.log('🚀  Ejecuta ahora:');
  console.log('   git add src/data/exercises/');
  console.log('   git commit -m "fix: rebuild broken exercises from quality bank"');
  console.log('   git push origin main\n');
}
