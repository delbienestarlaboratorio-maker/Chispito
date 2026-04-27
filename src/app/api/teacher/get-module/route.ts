import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const carrera = searchParams.get('carrera');
    const materia = searchParams.get('materia');
    const bloque = searchParams.get('bloque');

    if (!carrera || !materia || !bloque) {
        return NextResponse.json({ error: 'Faltan parámetros' }, { status: 400 });
    }

    try {
        const filePath = path.join(process.cwd(), 'src', 'data', 'exercises', carrera, materia, `bloque-${bloque}.json`);
        
        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ error: 'Módulo no existe' }, { status: 404 });
        }

        const data = fs.readFileSync(filePath, 'utf-8');
        return NextResponse.json(JSON.parse(data));
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
