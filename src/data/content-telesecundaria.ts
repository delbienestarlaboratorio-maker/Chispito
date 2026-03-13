/**
 * Contenido Telesecundaria — Nueva Escuela Mexicana (NEM)
 * Basado en libros CONALITEG 2025:
 *   1° Colección Ximhai
 *   2° Colección Sk'asolil
 *   3° Colección Nanahuatzin
 *
 * Materias NEM:
 *   - Lenguajes (comunicación y comprensión)
 *   - Saberes y Pensamiento Científico
 *   - Ética, Naturaleza y Sociedades
 *   - De lo Humano y lo Comunitario
 *   - Múltiples Lenguajes (artes, expresión)
 *   - Proyectos (interdisciplinario, 3 tomos)
 *   - Inglés (Projects and Readings)
 */

import { Bloque } from "./curriculum";

export const BLOQUES_TELESECUNDARIA: Record<string, Record<string, Bloque[]>> = {

    // ═══════════════════════════════════════════════════════════════
    // 1° TELESECUNDARIA — Colección Ximhai
    // ═══════════════════════════════════════════════════════════════
    "telesecundaria-1": {
        lenguajes_nem: [
            {
                numero: 1, nombre: "Identidad y narrativa", meses: "Agosto-Septiembre",
                temas: ["Textos narrativos: cuento y leyenda", "El relato autobiográfico", "Diversidad lingüística en mi comunidad", "Comprensión lectora de textos breves"],
            },
            {
                numero: 2, nombre: "Comunicación y diálogo", meses: "Octubre-Noviembre",
                temas: ["Textos informativos y expositivos", "El debate escolar", "Escritura de textos argumentativos breves", "Signos de puntuación y ortografía"],
            },
            {
                numero: 3, nombre: "Cultura escrita", meses: "Diciembre-Enero",
                temas: ["La carta formal e informal", "Textos instruccionales: receta y manual", "Reseña literaria", "Uso del diccionario y vocabulario técnico"],
            },
            {
                numero: 4, nombre: "Expresión y creatividad", meses: "Febrero-Marzo",
                temas: ["Poesía y lírica mexicana", "Trabalenguas, rimas y coplas", "Escritura creativa: microrrelato", "Teatro: diálogo y acotaciones"],
            },
            {
                numero: 5, nombre: "Comunicación comunitaria", meses: "Abril-Junio",
                temas: ["El periódico mural", "Textos publicitarios y propaganda", "Exposición oral con apoyo visual", "Antología de textos propios"],
            },
        ],
        saberes_cientificos: [
            {
                numero: 1, nombre: "El mundo natural", meses: "Agosto-Septiembre",
                temas: ["Biodiversidad en México", "Ecosistemas terrestres y acuáticos", "Cadenas y redes alimentarias", "Especies endémicas de mi región"],
            },
            {
                numero: 2, nombre: "Materia y energía", meses: "Octubre-Noviembre",
                temas: ["Estados de la materia", "Mezclas: homogéneas y heterogéneas", "Energía térmica y eléctrica", "Circuitos eléctricos simples"],
            },
            {
                numero: 3, nombre: "Cuerpo humano y salud", meses: "Diciembre-Enero",
                temas: ["Sistema digestivo y nutrición", "Sistema respiratorio", "Prevención de enfermedades", "Salud comunitaria e higiene"],
            },
            {
                numero: 4, nombre: "Cambio climático y ambiente", meses: "Febrero-Marzo",
                temas: ["Contaminación del agua y suelo", "Efecto invernadero", "Acciones sustentables en la comunidad", "Manejo de residuos sólidos"],
            },
            {
                numero: 5, nombre: "Pensamiento científico", meses: "Abril-Junio",
                temas: ["El método científico", "Medición y unidades", "Experimentación: variables y control", "Proyectos de ciencia comunitaria"],
            },
        ],
        etica_naturaleza: [
            {
                numero: 1, nombre: "Identidad y pertenencia", meses: "Agosto-Septiembre",
                temas: ["Mi identidad: personal, familiar y comunitaria", "Diversidad cultural en México", "Pueblos indígenas y sus saberes", "Valores comunitarios"],
            },
            {
                numero: 2, nombre: "Convivencia y derechos", meses: "Octubre-Noviembre",
                temas: ["Derechos humanos fundamentales", "Derechos de niñas, niños y adolescentes", "Igualdad de género", "Resolución pacífica de conflictos"],
            },
            {
                numero: 3, nombre: "Naturaleza y sociedad", meses: "Diciembre-Enero",
                temas: ["Relación ser humano-naturaleza", "Recursos naturales de mi comunidad", "Agricultura sostenible", "Saberes ancestrales sobre el medio ambiente"],
            },
            {
                numero: 4, nombre: "Participación ciudadana", meses: "Febrero-Marzo",
                temas: ["Democracia y participación", "El gobierno escolar", "Servicio comunitario", "Medios de comunicación y opinión pública"],
            },
            {
                numero: 5, nombre: "Justicia y bien común", meses: "Abril-Junio",
                temas: ["Justicia social", "Desigualdad y pobreza en México", "Trabajo colaborativo", "Mi proyecto de vida"],
            },
        ],
        humano_comunitario: [
            {
                numero: 1, nombre: "Autoconocimiento", meses: "Agosto-Septiembre",
                temas: ["Adolescencia: cambios físicos y emocionales", "Autoestima y autoimagen", "Emociones y su regulación", "Mi historia de vida"],
            },
            {
                numero: 2, nombre: "Relaciones interpersonales", meses: "Octubre-Noviembre",
                temas: ["Comunicación asertiva", "Empatía y respeto", "Prevención del acoso escolar (bullying)", "Trabajo en equipo"],
            },
            {
                numero: 3, nombre: "Salud integral", meses: "Diciembre-Enero",
                temas: ["Alimentación saludable", "Actividad física", "Prevención de adicciones", "Salud mental y bienestar emocional"],
            },
            {
                numero: 4, nombre: "Género y diversidad", meses: "Febrero-Marzo",
                temas: ["Perspectiva de género", "Estereotipos y roles de género", "Respeto a la diversidad", "Prevención de la violencia de género"],
            },
            {
                numero: 5, nombre: "Proyecto de vida", meses: "Abril-Junio",
                temas: ["Toma de decisiones", "Metas a corto y largo plazo", "Orientación vocacional básica", "Mi comunidad y mi futuro"],
            },
        ],
        multiples_lenguajes: [
            {
                numero: 1, nombre: "Artes visuales", meses: "Agosto-Septiembre",
                temas: ["El dibujo y la pintura", "Colores primarios y secundarios", "Arte popular mexicano", "Muralismo: Diego Rivera y Siqueiros"],
            },
            {
                numero: 2, nombre: "Música y danza", meses: "Octubre-Noviembre",
                temas: ["Elementos de la música: ritmo, melodía, armonía", "Instrumentos musicales mexicanos", "Danzas regionales de México", "Canto coral"],
            },
            {
                numero: 3, nombre: "Teatro y expresión corporal", meses: "Diciembre-Enero",
                temas: ["Elementos del teatro", "Improvisación y juego dramático", "Creación de personajes", "Montaje de una escena corta"],
            },
            {
                numero: 4, nombre: "Medios audiovisuales", meses: "Febrero-Marzo",
                temas: ["Fotografía: composición básica", "El cortometraje", "Podcast escolar", "Narrativa visual"],
            },
            {
                numero: 5, nombre: "Proyecto artístico", meses: "Abril-Junio",
                temas: ["Arte y comunidad", "Intervención artística", "Exposición colectiva", "Festival cultural escolar"],
            },
        ],
        proyectos_nem: [
            {
                numero: 1, nombre: "Proyecto de Aula: Mi comunidad", meses: "Agosto-Octubre",
                temas: ["Diagnóstico comunitario", "Investigación de campo", "Encuestas y entrevistas", "Presentación de hallazgos"],
            },
            {
                numero: 2, nombre: "Proyecto Escolar: Sustentabilidad", meses: "Noviembre-Enero",
                temas: ["Huerto escolar", "Reciclaje y reutilización", "Ahorro de agua y energía", "Campaña ambiental"],
            },
            {
                numero: 3, nombre: "Proyecto Comunitario: Salud", meses: "Febrero-Abril",
                temas: ["Diagnóstico de salud comunitaria", "Campaña de prevención", "Recetario de alimentos locales", "Feria de la salud"],
            },
            {
                numero: 4, nombre: "Proyecto Integrador", meses: "Mayo-Junio",
                temas: ["Elección del tema interdisciplinario", "Desarrollo y documentación", "Presentación ante la comunidad", "Reflexión y autoevaluación"],
            },
        ],
        ingles: [
            {
                numero: 1, nombre: "Greetings and introductions", meses: "Agosto-Septiembre",
                temas: ["Hello, my name is...", "Numbers 1-100", "Days, months, and seasons", "Personal information"],
            },
            {
                numero: 2, nombre: "My daily life", meses: "Octubre-Noviembre",
                temas: ["Daily routines", "Present simple tense", "School subjects and activities", "Telling time"],
            },
            {
                numero: 3, nombre: "My community", meses: "Diciembre-Enero",
                temas: ["Places in town", "Giving directions", "Community helpers", "There is / There are"],
            },
            {
                numero: 4, nombre: "Food and health", meses: "Febrero-Marzo",
                temas: ["Food vocabulary", "Healthy eating habits", "Countable and uncountable nouns", "At the market: asking prices"],
            },
            {
                numero: 5, nombre: "Projects and readings", meses: "Abril-Junio",
                temas: ["Reading comprehension: short stories", "Writing a postcard", "Describing people and places", "Mini-project: My community in English"],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 2° TELESECUNDARIA — Colección Sk'asolil
    // ═══════════════════════════════════════════════════════════════
    "telesecundaria-2": {
        lenguajes_nem: [
            {
                numero: 1, nombre: "Lectura crítica", meses: "Agosto-Septiembre",
                temas: ["Tipos de textos: expositivo vs. argumentativo", "Análisis de noticias y artículos", "Inferencias en la lectura", "Fuentes confiables de información"],
            },
            {
                numero: 2, nombre: "Escritura académica", meses: "Octubre-Noviembre",
                temas: ["El ensayo breve", "Citas textuales y paráfrasis", "Conectores lógicos y cohesión textual", "Revisión y edición de textos"],
            },
            {
                numero: 3, nombre: "Literatura mexicana", meses: "Diciembre-Enero",
                temas: ["Narrativa mexicana contemporánea", "Poesía: Sor Juana, Octavio Paz, Rosario Castellanos", "La novela corta", "Análisis literario: personajes y trama"],
            },
            {
                numero: 4, nombre: "Comunicación oral", meses: "Febrero-Marzo",
                temas: ["El panel de discusión", "Argumentación oral", "Entrevista a personajes de la comunidad", "Presentación con recursos audiovisuales"],
            },
            {
                numero: 5, nombre: "Texto y sociedad", meses: "Abril-Junio",
                temas: ["Textos legales básicos: acta, contrato", "Solicitud y currículum vitae", "Publicidad y lenguaje persuasivo", "Revista o blog escolar digital"],
            },
        ],
        saberes_cientificos: [
            {
                numero: 1, nombre: "Física: movimiento y fuerza", meses: "Agosto-Septiembre",
                temas: ["Movimiento: velocidad y rapidez", "Tipos de fuerza: gravedad, fricción", "Máquinas simples: palanca y polea", "Leyes de Newton (introducción)"],
            },
            {
                numero: 2, nombre: "Química básica", meses: "Octubre-Noviembre",
                temas: ["Tabla periódica: elementos comunes", "Átomos y moléculas", "Reacciones químicas cotidianas", "Ácidos y bases"],
            },
            {
                numero: 3, nombre: "Biología: reproducción y genética", meses: "Diciembre-Enero",
                temas: ["Reproducción celular: mitosis y meiosis", "Reproducción humana", "Herencia genética básica", "Educación sexual integral"],
            },
            {
                numero: 4, nombre: "Tierra y universo", meses: "Febrero-Marzo",
                temas: ["Estructura de la Tierra", "Placas tectónicas y volcanes", "El sistema solar", "Estaciones del año y eclipses"],
            },
            {
                numero: 5, nombre: "Tecnología y ciencia", meses: "Abril-Junio",
                temas: ["Tecnología en la vida cotidiana", "Energías renovables", "Biotecnología básica", "Proyecto científico integral"],
            },
        ],
        etica_naturaleza: [
            {
                numero: 1, nombre: "México: historia y territorio", meses: "Agosto-Septiembre",
                temas: ["Geografía de México: regiones naturales", "Recursos naturales por región", "Problemáticas ambientales en México", "Áreas naturales protegidas"],
            },
            {
                numero: 2, nombre: "Economía y trabajo", meses: "Octubre-Noviembre",
                temas: ["Actividades económicas: primarias, secundarias, terciarias", "El trabajo digno", "Economía solidaria y cooperativas", "Consumo responsable"],
            },
            {
                numero: 3, nombre: "Historia de México: raíces", meses: "Diciembre-Enero",
                temas: ["Mesoamérica: culturas originarias", "La conquista y el virreinato", "Independencia de México", "La Revolución Mexicana"],
            },
            {
                numero: 4, nombre: "México contemporáneo", meses: "Febrero-Marzo",
                temas: ["México en el siglo XX", "Movimientos sociales", "Migración interna y externa", "México multicultural"],
            },
            {
                numero: 5, nombre: "Ciudadanía global", meses: "Abril-Junio",
                temas: ["Organismos internacionales", "Derechos humanos universales", "Cultura de paz", "Proyecto: Mejorando mi comunidad"],
            },
        ],
        humano_comunitario: [
            {
                numero: 1, nombre: "Sexualidad responsable", meses: "Agosto-Septiembre",
                temas: ["Sexualidad en la adolescencia", "Métodos anticonceptivos", "Embarazo adolescente: prevención", "Infecciones de transmisión sexual"],
            },
            {
                numero: 2, nombre: "Habilidades socioemocionales", meses: "Octubre-Noviembre",
                temas: ["Inteligencia emocional", "Manejo del estrés y la ansiedad", "Resiliencia", "Mindfulness y relajación"],
            },
            {
                numero: 3, nombre: "Ciudadanía digital", meses: "Diciembre-Enero",
                temas: ["Uso responsable de internet", "Ciberbullying y peligros en línea", "Privacidad y huella digital", "Noticias falsas (fake news)"],
            },
            {
                numero: 4, nombre: "Liderazgo y servicio", meses: "Febrero-Marzo",
                temas: ["Liderazgo comunitario", "Voluntariado y servicio social", "Emprendimiento social", "Gestión de proyectos"],
            },
            {
                numero: 5, nombre: "Orientación vocacional", meses: "Abril-Junio",
                temas: ["Test de intereses y habilidades", "Opciones educativas después de secundaria", "Bachillerato técnico vs. general", "Proyecto de vida actualizado"],
            },
        ],
        multiples_lenguajes: [
            {
                numero: 1, nombre: "Artes tradicionales mexicanas", meses: "Agosto-Septiembre",
                temas: ["Alebrijes y arte popular", "Textiles indígenas", "Cerámica de Talavera y barro negro", "Patrimonio cultural inmaterial"],
            },
            {
                numero: 2, nombre: "Música mexicana", meses: "Octubre-Noviembre",
                temas: ["Son jarocho y son huasteco", "Mariachi: historia y repertorio", "Rap y hip-hop como expresión juvenil", "Composición musical básica"],
            },
            {
                numero: 3, nombre: "Cine y audiovisual", meses: "Diciembre-Enero",
                temas: ["Historia del cine mexicano", "Análisis de una película", "Storyboard y guión", "Producción de un cortometraje"],
            },
            {
                numero: 4, nombre: "Diseño y comunicación visual", meses: "Febrero-Marzo",
                temas: ["Diseño gráfico básico", "Infografías", "Tipografía y composición", "Cartel artístico"],
            },
            {
                numero: 5, nombre: "Festival cultural", meses: "Abril-Junio",
                temas: ["Organización de evento cultural", "Performance e instalación", "Documentación artística", "Evaluación del proyecto"],
            },
        ],
        proyectos_nem: [
            {
                numero: 1, nombre: "Proyecto: Historia local", meses: "Agosto-Octubre",
                temas: ["Investigación histórica de la comunidad", "Entrevistas a ancianos", "Archivo fotográfico comunitario", "Línea del tiempo de mi pueblo"],
            },
            {
                numero: 2, nombre: "Proyecto: Emprendimiento", meses: "Noviembre-Enero",
                temas: ["Identificación de necesidades locales", "Plan de negocio básico", "Producción artesanal o de servicios", "Feria de emprendimiento"],
            },
            {
                numero: 3, nombre: "Proyecto: Medio ambiente", meses: "Febrero-Abril",
                temas: ["Monitoreo ambiental local", "Reforestación o limpieza", "Campaña de concientización", "Informe de impacto"],
            },
            {
                numero: 4, nombre: "Proyecto Integrador 2°", meses: "Mayo-Junio",
                temas: ["Tema interdisciplinario", "Investigación-acción", "Presentación multimedia", "Portafolio de evidencias"],
            },
        ],
        ingles: [
            {
                numero: 1, nombre: "Past experiences", meses: "Agosto-Septiembre",
                temas: ["Past simple: regular and irregular verbs", "Talking about vacations", "Biographies of famous people", "Reading: short biographies"],
            },
            {
                numero: 2, nombre: "Future plans", meses: "Octubre-Noviembre",
                temas: ["Will vs. Going to", "Making predictions", "Planning a trip", "Writing: invitation letter"],
            },
            {
                numero: 3, nombre: "Comparing cultures", meses: "Diciembre-Enero",
                temas: ["Comparative and superlative adjectives", "Traditions and celebrations around the world", "Mexican vs. Anglo-Saxon traditions", "Reading: cultural texts"],
            },
            {
                numero: 4, nombre: "Environment and society", meses: "Febrero-Marzo",
                temas: ["Environmental vocabulary", "Should / shouldn't for advice", "Recycling and sustainability", "Poster: environmental campaign"],
            },
            {
                numero: 5, nombre: "My world in English", meses: "Abril-Junio",
                temas: ["Present perfect introduction", "Talking about experiences", "Job interviews simulation", "Final project: video about my community"],
            },
        ],
    },

    // ═══════════════════════════════════════════════════════════════
    // 3° TELESECUNDARIA — Colección Nanahuatzin
    // ═══════════════════════════════════════════════════════════════
    "telesecundaria-3": {
        lenguajes_nem: [
            {
                numero: 1, nombre: "Pensamiento crítico", meses: "Agosto-Septiembre",
                temas: ["Textos argumentativos complejos", "Análisis de discursos políticos", "Identificación de falacias", "Lectura de textos académicos"],
            },
            {
                numero: 2, nombre: "Investigación documental", meses: "Octubre-Noviembre",
                temas: ["Búsqueda y selección de fuentes", "Fichas de trabajo: resumen y comentario", "Estructura del informe de investigación", "Citas APA básicas"],
            },
            {
                numero: 3, nombre: "Literatura universal", meses: "Diciembre-Enero",
                temas: ["Mitos y leyendas universales", "Crónica literaria", "Novela: análisis de una obra completa", "El cuento latinoamericano"],
            },
            {
                numero: 4, nombre: "Medios de comunicación", meses: "Febrero-Marzo",
                temas: ["Periodismo: crónica, reportaje, editorial", "Análisis de medios digitales", "Ética periodística", "Producción de contenido informativo"],
            },
            {
                numero: 5, nombre: "Integración y cierre", meses: "Abril-Junio",
                temas: ["Portafolio de escritura", "Antología personal", "Examen de comprensión lectora", "Preparación para bachillerato"],
            },
        ],
        saberes_cientificos: [
            {
                numero: 1, nombre: "Química en la vida", meses: "Agosto-Septiembre",
                temas: ["Tabla periódica: familias y periodos", "Enlaces químicos: iónico y covalente", "Nomenclatura química básica", "Química en alimentos y medicinas"],
            },
            {
                numero: 2, nombre: "Física: electricidad", meses: "Octubre-Noviembre",
                temas: ["Carga eléctrica y corriente", "Ley de Ohm", "Circuitos en serie y paralelo", "Magnetismo y electromagnetismo"],
            },
            {
                numero: 3, nombre: "Evolución y adaptación", meses: "Diciembre-Enero",
                temas: ["Teoría de la evolución: Darwin", "Selección natural y adaptación", "Fósiles y evidencia evolutiva", "Evolución humana"],
            },
            {
                numero: 4, nombre: "Salud y prevención", meses: "Febrero-Marzo",
                temas: ["Nutrición y trastornos alimentarios", "Enfermedades crónicas: diabetes, hipertensión", "Salud reproductiva", "Drogas y adicciones: prevención"],
            },
            {
                numero: 5, nombre: "Ciencia y futuro", meses: "Abril-Junio",
                temas: ["Nanotecnología e inteligencia artificial", "Ingeniería genética y bioética", "Cambio climático: datos y proyecciones", "Mi proyecto científico final"],
            },
        ],
        etica_naturaleza: [
            {
                numero: 1, nombre: "Historia mundial", meses: "Agosto-Septiembre",
                temas: ["Revoluciones del siglo XVIII y XIX", "Primera y Segunda Guerra Mundial", "La Guerra Fría", "Descolonización de Asia y África"],
            },
            {
                numero: 2, nombre: "Globalización", meses: "Octubre-Noviembre",
                temas: ["Economía global", "Tratados comerciales: T-MEC", "Migración internacional", "Desigualdad entre naciones"],
            },
            {
                numero: 3, nombre: "Derechos y justicia", meses: "Diciembre-Enero",
                temas: ["Constitución Mexicana: artículos clave", "El sistema de justicia", "Corrupción y transparencia", "Organismos de derechos humanos"],
            },
            {
                numero: 4, nombre: "Política y democracia", meses: "Febrero-Marzo",
                temas: ["Sistema político mexicano", "Partidos políticos y elecciones", "Participación ciudadana juvenil", "Movimientos sociales contemporáneos"],
            },
            {
                numero: 5, nombre: "Mi rol en el mundo", meses: "Abril-Junio",
                temas: ["Desarrollo sostenible: ODS", "Ciudadanía responsable", "Liderazgo comunitario", "Proyecto: Transformando mi entorno"],
            },
        ],
        humano_comunitario: [
            {
                numero: 1, nombre: "Identidad en la adolescencia", meses: "Agosto-Septiembre",
                temas: ["Identidad y sentido de pertenencia", "Autoconcepto y autovaloración", "Presión de grupo y toma de decisiones", "Diversidad e inclusión"],
            },
            {
                numero: 2, nombre: "Relaciones saludables", meses: "Octubre-Noviembre",
                temas: ["Noviazgo saludable vs. violento", "Consentimiento y respeto", "Resolución de conflictos", "Apoyo emocional y redes de contención"],
            },
            {
                numero: 3, nombre: "Salud mental", meses: "Diciembre-Enero",
                temas: ["Depresión y ansiedad en adolescentes", "Prevención del suicidio", "Líneas de ayuda y apoyo", "Bienestar emocional integral"],
            },
            {
                numero: 4, nombre: "Mundo laboral", meses: "Febrero-Marzo",
                temas: ["Derechos laborales básicos", "CV y entrevista de trabajo", "Emprendimiento juvenil", "Economía familiar"],
            },
            {
                numero: 5, nombre: "Preparación para el futuro", meses: "Abril-Junio",
                temas: ["Opciones educativas de bachillerato", "Carreras técnicas y universitarias", "Educación financiera básica", "Mi plan de vida: FODA personal"],
            },
        ],
        multiples_lenguajes: [
            {
                numero: 1, nombre: "Arte contemporáneo", meses: "Agosto-Septiembre",
                temas: ["Arte contemporáneo mexicano", "Frida Kahlo y artistas actuales", "Grafiti y arte urbano", "Instalaciones artísticas"],
            },
            {
                numero: 2, nombre: "Producción musical", meses: "Octubre-Noviembre",
                temas: ["Historia del rock en español", "Producción digital de música", "Composición de canciones", "Análisis de letras con contenido social"],
            },
            {
                numero: 3, nombre: "Narrativa audiovisual", meses: "Diciembre-Enero",
                temas: ["Documental social", "Animación básica (stop motion)", "Edición de video", "Festival de cortometrajes"],
            },
            {
                numero: 4, nombre: "Diseño y emprendimiento creativo", meses: "Febrero-Marzo",
                temas: ["Branding y logotipo", "Diseño de productos artesanales", "Marketing digital básico", "Portafolio artístico"],
            },
            {
                numero: 5, nombre: "Expo arte final", meses: "Abril-Junio",
                temas: ["Curaduría y montaje de exposición", "Evento artístico comunitario", "Documentación y memoria", "Reflexión sobre aprendizajes artísticos"],
            },
        ],
        proyectos_nem: [
            {
                numero: 1, nombre: "Proyecto: Identidad cultural", meses: "Agosto-Octubre",
                temas: ["Mapeo cultural de la comunidad", "Tradiciones en riesgo de desaparecer", "Registro audiovisual", "Catálogo de patrimonio local"],
            },
            {
                numero: 2, nombre: "Proyecto: Justicia social", meses: "Noviembre-Enero",
                temas: ["Diagnóstico de desigualdades locales", "Propuesta de acción comunitaria", "Alianzas con organizaciones", "Implementación y seguimiento"],
            },
            {
                numero: 3, nombre: "Proyecto: Ciencia aplicada", meses: "Febrero-Abril",
                temas: ["Problema científico-tecnológico local", "Prototipo o solución técnica", "Feria de ciencias", "Documentación del proceso"],
            },
            {
                numero: 4, nombre: "Proyecto Final Integrador", meses: "Mayo-Junio",
                temas: ["Proyecto interdisciplinario de cierre", "Investigación-acción participativa", "Exposición ante la comunidad", "Evaluación de 3 años de Telesecundaria"],
            },
        ],
        ingles: [
            {
                numero: 1, nombre: "Communication skills", meses: "Agosto-Septiembre",
                temas: ["Present perfect vs. past simple", "Have you ever...?", "Life experiences and achievements", "Reading: inspiring stories"],
            },
            {
                numero: 2, nombre: "Global issues", meses: "Octubre-Noviembre",
                temas: ["Passive voice introduction", "News and current events in English", "Climate change vocabulary", "Writing: opinion essay"],
            },
            {
                numero: 3, nombre: "Arts and culture", meses: "Diciembre-Enero",
                temas: ["Describing art and music", "Reported speech basics", "Cultural exchange: pen pals", "Reading: multicultural literature"],
            },
            {
                numero: 4, nombre: "Career exploration", meses: "Febrero-Marzo",
                temas: ["Job vocabulary and descriptions", "Writing: cover letter", "Conditional sentences (if...)", "Mock interview in English"],
            },
            {
                numero: 5, nombre: "Farewell project", meses: "Abril-Junio",
                temas: ["Presentation skills in English", "Debating: for and against", "Final project: multimedia presentation", "Self-assessment and reflection"],
            },
        ],
    },
};
