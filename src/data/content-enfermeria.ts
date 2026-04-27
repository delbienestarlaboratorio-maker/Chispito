// Mock Data para probar el layout universitario (Chispito Pro)
export const ENFERMERIA_MALLA = {
    tronco_comun: [
        { 
            id: "anatomia", nombre: "Anatomía y Fisiología", color: "#3B82F6", icon: "🧬", bloques: 14, desc: "Sistemas humanos, homeostasis y organografía clínica.",
            proposito: "Comprender la estructura exacta y el mecanismo de funcionamiento del cuerpo humano sano.",
            aplicacion: "Te permitirá anticipar las fallas fisiológicas, identificar signos de deterioro y aplicar técnicas invasivas con precisión anatómica.",
            faq: [
                { q: "¿Por qué estudiar fisiología antes de la patología?", a: "No puedes detectar lo anormal si no conoces a la perfección el mecanismo normal de la homeostasis." },
                { q: "¿En qué afecta esto mi destreza en inyecciones?", a: "Conocer la anatomía previene daños a los nervios (ej. nervio ciático en glúteos)." }
            ]
        },
        { 
            id: "farmacologia", nombre: "Farmacología Básica", color: "#F43F5E", icon: "💊", bloques: 10, desc: "Farmacocinética, farmacodinamia y familias de medicamentos.",
            proposito: "Dominar la dinámica química celular para la administración segura de medicamentos.",
            aplicacion: "Serás la última línea de defensa antes de que el paciente reciba una droga, previniendo reacciones adversas y calculando diluciones precisas.",
            faq: [
                { q: "¿Aquí aprendo cálculo de dosis?", a: "Sí. Revisarás diluciones, reglas de 3 y farmacocinética crítica." },
                { q: "¿Qué pasa si hay un error?", a: "Aprenderás los 10 correctos de enfermería y cómo actuar con antídotos." }
            ]
        },
        { 
            id: "microbiologia", nombre: "Microbiología", color: "#14B8A6", icon: "🦠", bloques: 8, desc: "Bacterias, virus, parásitos y el sistema inmunológico base.",
            proposito: "Conocer al enemigo celular invisible para romper la cadena epidemiológica de infección.",
            aplicacion: "Tu aislamiento oportuno, técnica estéril y manejo de RPBI evitará brotes intrahospitalarios graves.",
            faq: [
                { q: "¿Estudiaré bacterias resistentes (Acinetobacter)?", a: "Sí, incluyendo patrones de resistencia en CEYE." }
            ]
        },
        { 
            id: "bioquimica", nombre: "Bioquímica", color: "#8B5CF6", icon: "🧪", bloques: 7, desc: "Metabolismo y rutas bioquímicas humanas.",
            proposito: "Entender de qué se alimentan las células para justificar alteraciones sistémicas.",
            aplicacion: "Resulta clave al calcular requerimientos calóricos e interpretar niveles séricos en sangre (ej. pH y lactato).",
            faq: [
                { q: "¿Qué tiene que ver esto con la clínica?", a: "Determina cómo la respiración y los electrolitos salvan pacientes en urgencias." }
            ]
        },
    ],
    especialidad: [
        { 
            id: "fundamentos", nombre: "Fundamentos de Enfermería", color: "#6366F1", icon: "🏥", bloques: 15, desc: "Signos vitales, tendido de camas, asepsia y curaciones.", isPro: true,
            proposito: "Adquirir el estándar de oro en el confort del paciente y los signos vitales.",
            aplicacion: "Es tu herramienta diaria. Todo estudiante requiere la técnica base de higiene, asepsia y monitoreo hemodinámico no invasivo.",
            faq: [
                { q: "¿Aprenderé a canalizar aquí?", a: "Sí. Acceso venoso periférico y manejo de sondas básicas (Foley, nasogástrica)." }
            ]
        },
        { 
            id: "pae", nombre: "Proceso de Atención (PAE)", color: "#8B5CF6", icon: "🧠", bloques: 10, desc: "Taxonomía NANDA, NIC, NOC y diagnósticos de enfermería.", isPro: true,
            proposito: "Estructurar intelectualmente el cuidado mediante el razonamiento estandarizado.",
            aplicacion: "Diseñarás intervenciones lógicas y documentables para blindar tu responsabilidad legal médica.",
            faq: [
                { q: "¿El PAE es obligatorio?", a: "Sí, la normatividad clínica exige justificar las acciones a través de notas estructuradas NANDA/NIC/NOC." }
            ]
        },
        { 
            id: "quirurgica", nombre: "Enfermería Quirúrgica", color: "#00bfa5", icon: "⚕️", bloques: 16, desc: "CEyE, transoperatorio, asepsia y manejo de heridas quirúrgicas.", isPro: true,
            proposito: "Manejar la alta presión del quirófano bajo régimen absoluto de higiene y anticipación.",
            aplicacion: "Asistirás al cirujano, resguardarás los conteos de instrumental y preservarás la salud post-infecciosa de operatorios críticos.",
            faq: [
                { q: "¿Qué tan difícil es esto?", a: "Requiere memoria excepcional instrumental e implacabilidad aséptica." }
            ]
        },
        { 
            id: "materno", nombre: "Materno-Infantil y Pediatría", color: "#D946EF", icon: "👶", bloques: 12, desc: "Cuidados prenatales, parto y estabilización neonatal.", isPro: true,
            proposito: "Proteger el binomio madre-hijo desde la concepción hasta el parto fisiológico o cesárea.",
            aplicacion: "Tu velocidad evaluando perfiles APGAR/Silverman indicará si un neonato vive bajo reanimación extrema o avanza sanamente.",
            faq: [
                { q: "¿Incluye reanimación neonatal?", a: "Sí, el bloque se adentra en algoritmos universales pediátricos de estabilización anatómica." }
            ]
        },
        { 
            id: "uci", nombre: "Cuidados Intensivos (UCI)", color: "#EF4444", icon: "🫀", bloques: 12, desc: "Ventilación mecánica, EKG, hemodinamia y urgencias.", isPro: true,
            proposito: "Actuar y sobrevivir en el entorno de mayor letalidad intrahospitalaria.",
            aplicacion: "Entenderás trazos de EKG, infusiones de aminas vasoactivas y ventilación mecánica para revivir pacientes inestables.",
            faq: [
                { q: "¿Manejaré el carro rojo?", a: "Sí, este módulo se enfoca en protocolos ACLS avanzados y códigos mater." },
                { q: "¿Requiere experiencia previa?", a: "Altamente recomendable estudiar farmacología antes." }
            ]
        },
        { 
            id: "gestion", nombre: "Gestión de Servicios", color: "#EAB308", icon: "🤝", bloques: 6, desc: "Cálculo de plantillas, auditoría clínica y NOMs mexicanas.", isPro: true,
            proposito: "Auditar y liderar a equipos enteros de profesionales de la salud con recursos limitados.",
            aplicacion: "Te prepara para la Jefatura. Aprenderás a calcular ausentismos, distribuir carga laboral y enfrentar inspecciones federales COFEPRIS.",
            faq: [
                { q: "¿Por qué un enfermero necesita números?", a: "Los hospitales no funcionan sin un liderazgo que maneje rotaciones, KPIs y nóminas clínicas bajo estrés." }
            ]
        },
    ]
};
