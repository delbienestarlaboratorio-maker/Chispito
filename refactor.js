const fs = require('fs');
let content = fs.readFileSync('src/app/universo/page.tsx', 'utf-8');

// 1. Remove const CAPÍTULOS array and add import
const regexCapitulos = /const CAPÍTULOS = \[(.|\r|\n)*?(?=\/\/ ══════════════════════════════════════════════════════════════════════\r?\n\/\/  COMPONENTES VISUALES)/;
content = content.replace(regexCapitulos, 'import { CAPITULOS } from "@/data/universo-historia";\n\n');

// 2. Add imagen property to PanelViñeta type
content = content.replace('especial?: boolean;', 'especial?: boolean; imagen?: string;');

// 3. Inject Image element into PanelViñeta render
const injectionPoint = '{/* Tipo label */}';
const imageRender = `{panel.imagen && (
                    <div className="relative w-full h-48 md:h-56 mb-4 rounded-xl overflow-hidden shadow-lg" style={{ border: '2px solid rgba(255,255,255,0.2)' }}>
                        <Image src={panel.imagen} alt="Escena" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                    </div>
                )}
                {/* Tipo label */}`;
content = content.replace(injectionPoint, imageRender);

// 4. Update the statistics strings
content = content.replace('9 Años de historia', '10 Años de historia');
content = content.replace('10 Personajes', '11 Personajes');

fs.writeFileSync('src/app/universo/page.tsx', content);
console.log('Successfully refactored page.tsx');
