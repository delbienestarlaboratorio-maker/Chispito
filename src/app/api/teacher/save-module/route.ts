import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { carrera, materia, bloque, payload } = body;

        if (!carrera || !materia || !bloque || !payload) {
            return NextResponse.json({ error: 'Faltan parámetros críticos (carrera, materia, bloque o payload)' }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), 'src', 'data', 'exercises', carrera, materia, `bloque-${bloque}.json`);
        
        // Sobreescribir el archivo completo con identación de 4 espacios. 
        // Al tratarse del server running localmente (npx dev o PM2 local), 
        // tendrá permisos de FS inmediatos.
        fs.writeFileSync(filePath, JSON.stringify(payload, null, 4));

        return NextResponse.json({ success: true, message: 'Base de datos sobrescrita con éxito en caliente.' });
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
