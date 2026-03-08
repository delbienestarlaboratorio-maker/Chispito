"use client";
import dynamic from "next/dynamic";

// Lazy-load BuscadorPagina with ssr:false to exclude ~120KB of page mapping
// data from the server handler bundle (Cloudflare 3 MiB worker limit)
const BuscadorPagina = dynamic(() => import("@/components/BuscadorPagina"), {
    ssr: false,
    loading: () => (
        <div style={{ padding: "1rem", textAlign: "center", color: "#64748B" }}>
            Cargando buscador...
        </div>
    ),
});

export default function BuscadorPaginaLazy({ gradoSlug }: { gradoSlug: string }) {
    return <BuscadorPagina gradoSlug={gradoSlug} />;
}
