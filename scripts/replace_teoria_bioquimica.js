const fs = require('fs');
const path = require('path');

const teorias = {
    1: `## 🧬 El Horno Celular: Metabolismo de Carbohidratos y Glucólisis

En este bloque dejaremos atrás la química de pizarrón y entraremos a la **Fisiología Metabólica Celular**. El metabolismo de carbohidratos es el motor principal que mantiene los signos vitales respirando y al cerebro con alerta térmica.

### 1. La Glucólisis y el Destino del Piruvato
Toda glucosa que entra a la sangre termina en el citosol celular. Ahí sufre Glucólisis y se rompe en dos moléculas de **Piruvato**. Dependiendo del oxígeno disponible, el destino de este piruvato cambia drásticamente:

* **Vía Aerobia (Con Oxígeno):** El piruvato entra a la mitocondria, se convierte en Acetil-CoA e inicia el *Ciclo de Krebs* (produciendo 36-38 ATP).
* **Vía Anaerobia (Sin Oxígeno):** ¡Atención a esto en Urgencias! Si el paciente está en choque hipovolémico y no llega sangre/oxígeno a sus tejidos, el piruvato se fermenta y se convierte en **Ácido Láctico**.

> [!IMPORTANTE]
> Un nivel de Ácido Láctico elevado (>2 mmol/L) en una gasometría es un grito de auxilio de las células. Indica "Sufrimiento Tisular por Hipoxia". Entre más alto sea el nivel de lactato, más cerca está el paciente de un paro metabólico.

**Aplicación Práctica:** Si tienes a un paciente hipotenso y letárgico, su química sanguínea estará alterada no por un fallo propio de la sangre, sino porque sus células carecen del combustible terminal (El oxígeno).`,

    2: `## 🩸 Metabolismo de Lípidos y la Amenaza de la Cetoacidosis

Los lípidos no solo son "grasa de almacenamiento". Son precursores de hormonas esteroideas (cortisol, testosterona) y, crucialmente, son el "combustible de emergencia" del cuerpo.

### 1. Lipólisis y Cuerpos Cetónicos
Cuando el cuerpo es incapaz de usar la Glucosa (debido a la absoluta falta de Insulina), el cerebro ordena la destrucción indiscriminada de grasa periférica (Lipólisis). Estos ácidos grasos viajan al hígado y son oxidados masivamente. 

Sin embargo, debido a que el *Ciclo de Krebs* requiere derivados de carbohidratos (Oxaloacetato) para girar adecuadamente, el exceso de ácidos grasos desborda al hígado, obligándolo a convertirlos en **Cuerpos Cetónicos** (Acetoacetato, Beta-hidroxibutirato y Acetona).

> [!IMPORTANTE]
> La **Cetoacidosis Diabética (CAD)** ocurre porque estos cuerpos cetónicos son *ácidos fuertes*. Al inundar la sangre, el pH arterial cae drásticamente a niveles incompatibles con la vida (ej. pH 6.9). 

### 2. Signo Semiológico de Alerta
Dado que la Acetona es extremadamente volátil, los pacientes exhalan un característico "aliento afrutado" o "aliento a manzana podrida". Además, su patrón respiratorio se acelerará para "ventilar o barrer" la acidez en la sangre mediante CO2 (Respiración de Kussmaul). 

Como enfermero de triage, oler este aliento y ver a un paciente respirando profundo obliga a tomar una Glicemia Capilar en los primeros 10 segundos.`,

    3: `## 🥩 Las Proteínas y el Peligro Invisible: Ciclo de la Urea

A diferencia de los carbohidratos y lípidos (cuyos excedentes se almacenan en el cuerpo como glucógeno o triglicéridos), **las proteínas NO TIENEN un almacén metabólico en el cuerpo**. Toda proteína o aminoácido en tu cuerpo está cumpliendo una función estructural o enzimática.

### 1. Catabolismo y la Amenaza del Amoníaco
Cuando las proteínas se degradan, liberan el grupo amino (Nitrógeno). El nitrógeno es altamente tóxico para el cerebro en forma de **Amoníaco (NH3)**. Para deshacerse de este veneno metabólico, el hígado lo encapsula mediante el *Ciclo de la Urea*, convirtiendo el Amoníaco en Urea, la cual viaja por la sangre y es expulsada pacíficamente por los riñones a través de la orina.

### 2. El Paciente con Falla Hepática
Si el hígado está destruido (Cirrosis o falla aguda inducida por alcohol / medicamentos como el Paracetamol), el Ciclo de la Urea se detiene. El Amoníaco letal no puede procesarse y comienza a acumularse rápidamente en la sangre, atravesando la barrera hematoencefálica (Cerebro).

> [!IMPORTANTE]
> A esto se le conoce como **Encefalopatía Hepática**. El paciente comenzará a sentirse confundido, agresivo, comatoso o presentará "Asterixis" (un temblor batiendo las manos por falta de control tónico nervioso). 

**Intervención de Guardia:** El médico podría indicar Enemas de Lactulosa; no para aliviar síntomas de estreñimiento, sino porque la lactulosa atrapa químicamente el amoníaco en el colon (volviéndolo ion Amonio NH4+) e impidiendo su absorción a la sangre, limpiando así el cerebro.`,

    4: `## 🧪 Enzimología Clínica y Perfil de Lesión Tisular

En Bioquímica Clínica aplicada, no buscamos enzimas para confirmar procesos digestivos, sino que cazamos "enzimas fugitivas" en el torrente sanguíneo. Las enzimas deben permanecer en el interior de las células (dentro del miocardio, dentro del hepatocito, etc.). 

Si una célula muere (Necrosis), su membrana estalla y derrama su contenido enzimático en la sangre. **Así diagnosticamos los infartos.**

### 1. Los Marcadores Cardíacos
Si el tejido del corazón muere por falta de sangre (Infarto Agudo Miocárdico), liberará múltiples biomarcadores que, como enfermero, deberás mandar analizar al laboratorio de urgencia con reloj en mano:
* **Troponinas (I y T):** Son la regla de oro actual (Gold Standard). Son extremadamente específicas del tejido cardíaco y se elevan en sangre tras 4-6 horas del inicio del dolor en el pecho. Mándalas a pedir de inmediato si el paciente ingresa con dolor aplastante ("Signo de Levine").
* **CK-MB:** Útil en el re-infarto porque se limpia rápidamente, pero ha sido superada en los hospitales nivel 3 por las troponinas de alta sensibilidad.

### 2. El Perfil Hepático o "Pruebas de Función Hepática (PFH)"
* **ALT (Alanina aminotransferasa):** Es muy específica de daño hepático directo (Hepatitis viral, toxinas).
* **AST (Aspartato aminotransferasa):** Sube por daño hepático pero también si hay lisis muscular o falla estructural general.

> [!IMPORTANTE]
> Las enzimas del páncreas como la Lipasa y la Amilasa se elevarán estrepitosamente (10 veces su valor basal) si el paciente presenta **Pancreatitis Severa**. El principal síntoma es dolor punzante en abdomen con un aura referida directo "a la espalda". Identificar tempranamente el aumento enzimático dicta que el paciente pase al quirofano por urgencia antes de la autodigestión química.`,

    5: `## 🧬 Patología Molecular y Desordenes del ADN

La Bioquímica no se limita a compuestos flotantes; es el sustrato del **Dogma Central de la Biología Molecular** (ADN -> ARN -> Proteína). Las mutaciones a nivel del gen recesivo dictan cómo la célula responderá al tratamiento o cómo las enfermedades degenerativas se apoderarán de la fisiología pediátrica temprana.

### 1. Enfermedades Hereditarias de Desgaste (Tesoros Semiológicos)
Cuando cuidamos neonatos o lactantes, un error congénito en una enzima produce daños incalculables:
* **Fenilcetonuria (PKU):** El niño carece de la enzima hepática para descomponer la *Fenilalanina*. Si le das proteínas estándar (incluso en fórmula infantil normal), la fenilalanina se acumula y calcina prácticamente el sistema nervioso, provocando retraso mental irreversible y olor a 'ratón mojado'.
* **Anemia Falciforme:** Mutación en la Hemoglobina causa que los glóbulos rojos se vuelvan rígidos como "hozes" al estar en zonas de bajo oxígeno y causen micro-trombos que provocan un dolor articular agónico en los infantes que asisten por urgencias de pediatría.

> [!IMPORTANTE]
> La **Transaminación y Traducción Inversa** es el método por el que los retrovirus como el VIH inyectan su ADN en la célula blanca (Linfocito CD4+). Nuestro trabajo en control de IAAS es administrar esquemas Anti-retrovirales a tiempo récord en caso de piquetes en guardia.

Comprender la raíz genética hace la diferencia entre simplemente tratar un síntoma pediátrico o detener de raíz el daño a un órgano diana.`,

    6: `## ⚖️ Gasometría Arterial: El Equilibrio Mortal del pH

La gasometría arterial es la herramienta número uno de la bioquímica de Urgencias y UCI (Terapia Intensiva). El pH humano **debe mantenerse estrictamente entre 7.35 y 7.45**. 
Inclinarse un milímetro hacia 7.2 ocasiona arritmias refractarias (el corazón literalmente deja de responder a la adrenalina) o si sube a 7.5 ocasiona convulsiones tónicas.

### 1. Los Sistemas Tampón o Amortiguadores (Buffer)
* **El Pulmón (Velocidad Minutos):** Regula el nivel de CO2 (Ácido aéreo). Si quieres arrojar ácido al mundo exterior, hiperventilas y botas el CO2.
* **El Riñón (Velocidad Días):** Regula el Bicarbonato (HCO3) en sangre que absorbe acidez metabólica profunda, pero tarda en arrancar o calibrarse.

### 2. Desórdenes Prácticos Clínicos
1. **Acidosis Respiratoria:** El paciente con EPOC o Intoxicado no puede respirar. Su pecho apenas se mueve. Su CO2 se asfixia y se queda dentro. El remedio: Ponerle Ventilador mecánico (CPAP o Intubación).
2. **Acidosis Metabólica:** pH ultra-bajo, con Bicarnobato consumido (destruido luchando contra ácido extremo ej. Diabético en Cetoacidosis). 
3. **Alcalosis Metabólica:** pH arriba de 7.45 provocado casi siempre porque el paciente estuvo **vomitando descontroladamente**. Vomita ácido gástrico puro, dejándo la sangre con exceso de base. Solución: Regulación hídrica intensiva o potasio.

> [!IMPORTANTE]
> En situaciones de Paro Cardiorespiratorio con sospecha de acidosis prolongada, las infusiones de Bicarbonato de Sodio intravenoso sólo serán validadas y permitidas por los manuales de ACLS tras estabilizar al paciente y verificar los milimoles de exceso base por Gasometría. ¡Inyectar bases a ciegas matará al paciente en la cama!`,

    7: `## 🚨 Shock Séptico, Marcadores Inflamatorios y Muerte Tisular

Este es tu graduación clínica. Todo se reduce al **Choque**. Un estado metabólico bioquímico catastrófico donde los sistemas fisiológicos claudican a nivel mitocondrial produciendo Sepsis. En este estado, el patógeno no te mata, **a los pacientes los suele matar la reacción del propio sistema inmune (las citoquinas)**.

### 1. La Tormenta de Citoquinas y Fuga Capilar
Al detectar una bacteria masiva (esporádicamente Gram Negativos con Endotoxinas lipopolisacáridas superficiales), los macrófagos y linfocitos segregan Citoquinas y Factor de Necrosis Tumoral (TNF). 
Tu vasculatura en repuesta se debilita provocando que la sangre literalmente pierda agua hacia el tejido subdérmico circulante (Edematización Global Severa, de ahí su hinchazón). El paciente estará extremadamente hipotenso.

### 2. Indicadores Bioquímicos Severos del Choque (Biomarcadores Pro)
* **Procalcitonina (PCT):** Se dispara en infecciones bacterianas extremas. Es vital para saber empíricamente si la Sepsis es de origen puramente bacteriano o no.
* **Proteína C Reactiva (PCR):** Altamente inespecífica de inflamación general tisular, pero vital para observar tendencias de recuperación del sistema reticuloendotelial u hepático de origen inmune.
* **Depuración de Creatinina (Clearence):** En etapa tóxica el riñón muere (Nefrosis Aguda Secundaria A Falla Multiorgánica). Como los solutos del torrente venoso caen, la creatinina de músculo no se puede tirar y se acumula de golpe. Subidas súbitas del Nitrogeno y asolemias mortales ocurren.

> [!IMPORTANTE]
> La Cadena de Supervivencia Internacional frente a una sospecha de Sepsis indica algo inalienable para un enfermero: LA HORA CERO. Tienes la obligación ética y administrativa de extraer Láctico, Biomarcadores y Cultivos... PERO ANTES, en tiempo cero se inicia Reanimación Hídrica Crítica (30 mL por KG ideal isotónico a goteo presurizado). Retrasarlo mata. 

Respira, abróchate los guantes, ponte la mente al 100 y ¡entra a tu guardia final de Bioqúimica haciendo click abajo!`
};

const dir = path.join(__dirname, '../src/data/exercises/enfermeria/bioquimica');
if (!fs.existsSync(dir)) {
    console.error("No se encontró el directorio de la materia bioquímica.");
    process.exit(1);
}

for (let i = 1; i <= 7; i++) {
    const file = path.join(dir, `bloque-${i}.json`);
    if (fs.existsSync(file)) {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        data.teoria = teorias[i];
        fs.writeFileSync(file, JSON.stringify(data, null, 4));
        console.log(`Cátedra Clínica inyectada en bloque-${i} de Bioquímica.`);
    } else {
        console.log(`Error: No existe el módulo ${i}`);
    }
}
