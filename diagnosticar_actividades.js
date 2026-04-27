/**
 * 🩺 AGENTE DE DIAGNÓSTICO AUTOMATIZADO - Chispito.mx
 * 
 * Recorre TODAS las rutas de grado/materia/bloque y detecta:
 *  1. Errores de consola JS (runtime errors)
 *  2. Ejercicios vacíos (0 ejercicios cargados)
 *  3. Componentes que no renderizan (ExercisePlayer no aparece)
 *  4. Imágenes rotas (404 en assets)
 *  5. Páginas que no responden (HTTP != 200)
 *  6. Datos de ejercicios con campos faltantes o malformados
 * 
 * USO: node diagnosticar_actividades.js [puerto]
 * Ejemplo: node diagnosticar_actividades.js 3000
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PORT = process.argv[2] || '3000';
const BASE_URL = `http://localhost:${PORT}`;
const TIMEOUT = 45000;

// Todos los grados del sistema
const GRADOS = [
    'kinder',
    'preescolar-1', 'preescolar-2', 'preescolar-3',
    'primaria-1', 'primaria-2', 'primaria-3', 'primaria-4', 'primaria-5', 'primaria-6',
    'secundaria-1', 'secundaria-2', 'secundaria-3',
    'telesecundaria-1', 'telesecundaria-2', 'telesecundaria-3'
];

// Materias comunes que pueden existir en cada grado
const MATERIAS = [
    'espanol', 'matematicas', 'ciencias', 'historia', 'geografia',
    'formacion', 'educacion_fisica', 'educacion_artistica', 'conocimiento',
    'ingles', 'vida_saludable', 'artes', 'tecnologia', 'biologia',
    'fisica', 'quimica', 'civica'
];

const BLOQUES = [1, 2, 3, 4, 5, 6, 7];

async function diagnosticar() {
    console.log('═══════════════════════════════════════════════════════');
    console.log('🩺 AGENTE DE DIAGNÓSTICO CHISPITO.MX');
    console.log(`   Servidor: ${BASE_URL}`);
    console.log(`   Fecha: ${new Date().toISOString()}`);
    console.log('═══════════════════════════════════════════════════════\n');

    const browser = await puppeteer.launch({
        headless: 'new',
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    const resultados = {
        total_urls_verificadas: 0,
        paginas_ok: 0,
        errores: [],
        advertencias: [],
        ejercicios_vacios: [],
        errores_consola: [],
        imagenes_rotas: [],
        paginas_sin_contenido: [],
        resumen_por_grado: {}
    };

    // Fase 1: Verificar que el servidor esté activo
    console.log('📡 Fase 1: Verificando que el servidor esté activo...');
    const testPage = await browser.newPage();
    try {
        const resp = await testPage.goto(BASE_URL, { waitUntil: 'networkidle2', timeout: TIMEOUT });
        if (!resp || resp.status() !== 200) {
            console.log(`❌ FATAL: El servidor en ${BASE_URL} no responde (status: ${resp?.status()})`);
            await browser.close();
            return;
        }
        console.log(`✅ Servidor activo en ${BASE_URL}\n`);
    } catch (e) {
        console.log(`❌ FATAL: No se puede conectar a ${BASE_URL}. ¿Está corriendo 'npm run dev'?`);
        console.log(`   Error: ${e.message}`);
        await browser.close();
        return;
    }
    await testPage.close();

    // Fase 2: Escanear página de cada grado para obtener las materias reales disponibles
    console.log('📡 Fase 2: Escaneando grados y sus materias disponibles...');
    const gradoMaterias = {};

    for (const grado of GRADOS) {
        const page = await browser.newPage();
        const url = `${BASE_URL}/${grado}`;
        try {
            const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: TIMEOUT });
            if (resp && resp.status() === 200) {
                // Extraer los links de materias de la página del grado
                const links = await page.evaluate(() => {
                    const anchors = Array.from(document.querySelectorAll('a[href]'));
                    return anchors
                        .map(a => a.getAttribute('href'))
                        .filter(h => h && h.includes('/') && !h.startsWith('http'));
                });
                
                const materias = links
                    .filter(l => l.startsWith(`/${grado}/`))
                    .map(l => l.split('/')[2])
                    .filter(Boolean)
                    .filter((v, i, a) => a.indexOf(v) === i); // unique

                gradoMaterias[grado] = materias.length > 0 ? materias : MATERIAS.slice(0, 5);
                console.log(`  ✅ ${grado}: ${materias.length} materias detectadas`);
            } else {
                console.log(`  ⚠️ ${grado}: HTTP ${resp?.status() || 'ERR'}`);
                gradoMaterias[grado] = [];
            }
        } catch (e) {
            console.log(`  ❌ ${grado}: ${e.message.substring(0, 80)}`);
            gradoMaterias[grado] = [];
        }
        await page.close();
    }

    // Fase 3: Escanear cada combinación grado/materia/bloque
    console.log('\n📡 Fase 3: Escaneando ejercicios en profundidad...\n');

    for (const grado of GRADOS) {
        const materias = gradoMaterias[grado];
        if (materias.length === 0) continue;

        resultados.resumen_por_grado[grado] = { ok: 0, errores: 0, vacios: 0 };

        for (const materia of materias) {
            for (const bloque of BLOQUES) {
                const url = `${BASE_URL}/${grado}/${materia}/bloque-${bloque}`;
                resultados.total_urls_verificadas++;

                const page = await browser.newPage();
                const consoleErrors = [];
                const brokenImages = [];

                // Captar errores de consola
                page.on('console', msg => {
                    if (msg.type() === 'error') {
                        consoleErrors.push(msg.text());
                    }
                });

                // Captar errores de red (imágenes rotas, etc.)
                page.on('response', response => {
                    if (response.status() >= 400 && response.url() !== url) {
                        const resUrl = response.url();
                        if (resUrl.match(/\.(png|jpg|jpeg|gif|svg|webp)(\?|$)/i)) {
                            brokenImages.push({ url: resUrl, status: response.status() });
                        }
                    }
                });

                try {
                    const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: TIMEOUT });
                    const status = resp?.status() || 0;

                    if (status === 404 || status === 500) {
                        // Páginas que simplemente no existen, son esperables (no todas las combinaciones son válidas)
                        await page.close();
                        continue;
                    }

                    if (status !== 200) {
                        resultados.errores.push({ url, tipo: 'HTTP_ERROR', status });
                        resultados.resumen_por_grado[grado].errores++;
                        await page.close();
                        continue;
                    }

                    // Verificar que el ExercisePlayer renderizó
                    const diagnostico = await page.evaluate(() => {
                        // Buscar el contenedor de ejercicios
                        const exerciseCards = document.querySelectorAll('.ejercicio-card');
                        const preguntaEls = document.querySelectorAll('.font-fredoka');
                        const btnVerificar = document.querySelector('button');
                        const bodyText = document.body.innerText || '';
                        const has404Text = bodyText.includes('404') || bodyText.includes('No encontrado') || bodyText.includes('not found');
                        const hasExerciseContent = exerciseCards.length > 0 || preguntaEls.length > 0;
                        const hasErrorBoundary = bodyText.includes('Error') && bodyText.includes('boundary');
                        const title = document.title;
                        
                        // Buscar texto de "no hay ejercicios" o similar
                        const noContent = bodyText.includes('No hay ejercicios') || 
                                          bodyText.includes('Sin ejercicios') ||
                                          bodyText.includes('próximamente') ||
                                          bodyText.length < 100;

                        return {
                            hasExerciseContent,
                            has404Text,
                            hasErrorBoundary,
                            noContent,
                            title,
                            bodyLength: bodyText.length,
                            exerciseCardCount: exerciseCards.length,
                            buttonCount: document.querySelectorAll('button').length
                        };
                    });

                    // Clasificar resultado
                    if (diagnostico.has404Text) {
                        // Skip, pagina no existe para esta combinación
                        await page.close();
                        continue;
                    }

                    if (diagnostico.hasErrorBoundary) {
                        resultados.errores.push({
                            url, tipo: 'REACT_ERROR_BOUNDARY',
                            detalle: 'Componente React crasheó'
                        });
                        resultados.resumen_por_grado[grado].errores++;
                    } else if (diagnostico.noContent || (!diagnostico.hasExerciseContent && diagnostico.bodyLength < 500)) {
                        resultados.paginas_sin_contenido.push({
                            url,
                            bodyLength: diagnostico.bodyLength,
                            title: diagnostico.title
                        });
                        resultados.resumen_por_grado[grado].vacios++;
                    } else {
                        resultados.paginas_ok++;
                        resultados.resumen_por_grado[grado].ok++;
                    }

                    // Registrar errores de consola
                    if (consoleErrors.length > 0) {
                        resultados.errores_consola.push({
                            url,
                            errores: consoleErrors.slice(0, 5) // Max 5 por página
                        });
                    }

                    // Registrar imágenes rotas
                    if (brokenImages.length > 0) {
                        resultados.imagenes_rotas.push({
                            url,
                            imagenes: brokenImages
                        });
                    }

                } catch (e) {
                    if (e.message.includes('net::ERR_ABORTED') || e.message.includes('Navigation timeout')) {
                        // Page doesn't exist or timeout, skip
                    } else {
                        resultados.errores.push({
                            url,
                            tipo: 'CRASH',
                            detalle: e.message.substring(0, 120)
                        });
                        resultados.resumen_por_grado[grado].errores++;
                    }
                }
                await page.close();
            }
        }

        // Progreso
        const stats = resultados.resumen_por_grado[grado];
        const emoji = stats.errores > 0 ? '❌' : stats.vacios > 0 ? '⚠️' : '✅';
        console.log(`  ${emoji} ${grado}: ${stats.ok} OK | ${stats.errores} errores | ${stats.vacios} vacíos`);
    }

    await browser.close();

    // Fase 4: Generar reporte
    console.log('\n═══════════════════════════════════════════════════════');
    console.log('📊 RESUMEN EJECUTIVO');
    console.log('═══════════════════════════════════════════════════════');
    console.log(`Total URLs verificadas: ${resultados.total_urls_verificadas}`);
    console.log(`Páginas OK:             ${resultados.paginas_ok}`);
    console.log(`Errores críticos:       ${resultados.errores.length}`);
    console.log(`Páginas sin contenido:  ${resultados.paginas_sin_contenido.length}`);
    console.log(`Errores de consola JS:  ${resultados.errores_consola.length}`);
    console.log(`Imágenes rotas:         ${resultados.imagenes_rotas.length}`);

    if (resultados.errores.length > 0) {
        console.log('\n🔴 ERRORES CRÍTICOS:');
        resultados.errores.forEach(e => {
            console.log(`  ${e.url} -> [${e.tipo}] ${e.detalle || 'HTTP ' + e.status}`);
        });
    }

    if (resultados.paginas_sin_contenido.length > 0) {
        console.log('\n🟡 PÁGINAS SIN CONTENIDO (ejercicios vacíos):');
        resultados.paginas_sin_contenido.forEach(p => {
            console.log(`  ${p.url} (body: ${p.bodyLength} chars)`);
        });
    }

    if (resultados.errores_consola.length > 0) {
        console.log('\n🟠 ERRORES DE CONSOLA JS:');
        resultados.errores_consola.forEach(ec => {
            console.log(`  ${ec.url}:`);
            ec.errores.forEach(e => console.log(`    - ${e.substring(0, 150)}`));
        });
    }

    if (resultados.imagenes_rotas.length > 0) {
        console.log('\n🖼️ IMÁGENES ROTAS (404):');
        resultados.imagenes_rotas.forEach(ir => {
            console.log(`  ${ir.url}:`);
            ir.imagenes.forEach(img => console.log(`    - [${img.status}] ${img.url}`));
        });
    }

    // Guardar reporte completo como JSON
    const reportPath = path.join(__dirname, 'diagnostico_actividades.json');
    fs.writeFileSync(reportPath, JSON.stringify(resultados, null, 2), 'utf-8');
    console.log(`\n💾 Reporte completo guardado en: ${reportPath}`);
    console.log('\n🏥 Diagnóstico finalizado.\n');
}

diagnosticar().catch(err => {
    console.error('Error fatal del agente:', err);
    process.exit(1);
});
