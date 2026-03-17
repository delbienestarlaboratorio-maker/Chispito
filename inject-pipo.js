const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src/data/exercises');

// Helper to get random Pipo friend
function getPipoFriend() {
    const friends = ['Pipo', 'Cuca', 'Neptuno', 'Hada', 'El Búho'];
    return friends[Math.floor(Math.random() * friends.length)];
}

// Helper to get a short story based on the subject and block name
function generateChispitoStory(materia, nombreBloque) {
    const historias = [
        `En el Universo de Chispito, Nico y su amigo estaban explorando la galaxia del conocimiento cuando se encontraron con un misterio sobre ${nombreBloque}. ¡Ayúdales a resolverlo!`,
        `Chispito ha perdido energía cuántica. Para recargar su traje espacial, necesitas completar esta misión de ${nombreBloque} junto a Nico.`,
        `La computadora central de la nave espacial de Chispito ha detectado anomalías en el sector de ${nombreBloque}. ¡Nico necesita tu talento brillante para arreglarlo!`,
        `¡Alerta en Ciudad Chispito! Un portal del conocimiento se ha abierto. Para cruzarlo, debes demostrar tus habilidades en ${nombreBloque}.`,
        `Nico ha encontrado un mapa antiguo escondido en la biblioteca estelar. El mapa revela secretos sobre ${nombreBloque}. ¡Descubramos qué esconde!`
    ];
    return historias[Math.floor(Math.random() * historias.length)];
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.json')) {
            processJsonFile(fullPath);
        }
    }
}

function processJsonFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(content);
        let modified = false;

        // Add story if it doesn't exist
        if (!data.historiaChispito) {
            data.historiaChispito = generateChispitoStory(data.materia, data.nombre);
            modified = true;
        }

        // Process exercises in all levels
        for (const level of ['v1', 'v2', 'preview']) {
            if (data.ejercicios && data.ejercicios[level]) {
                data.ejercicios[level] = data.ejercicios[level].map(ex => {
                    // Make explanation sound like Pipo
                    if (ex.explicacion && !ex.explicacion.includes('💡')) {
                        const friend = getPipoFriend();
                        ex.explicacion = `💡 ${friend} te ayuda: ${ex.explicacion}`;
                        modified = true;
                    }
                    return ex;
                });
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
            console.log(`Updated: ${filePath}`);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
    }
}

console.log("Starting strictly on Telesecundaria folders...");
['telesecundaria-1', 'telesecundaria-2', 'telesecundaria-3'].forEach(tsDir => {
    const dirPath = path.join(baseDir, tsDir);
    if (fs.existsSync(dirPath)) {
        processDirectory(dirPath);
    } else {
        console.log(`Directory not found: ${dirPath}`);
    }
});
console.log("Done.");
