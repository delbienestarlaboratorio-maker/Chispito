"use client";
/**
 * ConsentScripts — Carga AdSense y Analytics SOLO después del consentimiento.
 * Lee de localStorage la preferencia guardada por CookieBanner.
 * Si el usuario elige "Solo esenciales", NO se inyectan scripts de terceros.
 */

import { useEffect, useState } from "react";
import Script from "next/script";

export default function ConsentScripts() {
    const [consent, setConsent] = useState<"all" | "essential" | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem("chispito_cookies_ok");
        if (stored === "all") setConsent("all");
        else if (stored === "essential") setConsent("essential");
        // Si no hay valor, el CookieBanner se mostrará y el usuario decidirá

        // Escuchar cambios en tiempo real (cuando el usuario acepta en el banner)
        const handler = (e: StorageEvent) => {
            if (e.key === "chispito_cookies_ok") {
                if (e.newValue === "all") setConsent("all");
                else if (e.newValue === "essential") setConsent("essential");
            }
        };
        window.addEventListener("storage", handler);

        // Custom event para comunicación intra-tab
        const customHandler = () => {
            const val = localStorage.getItem("chispito_cookies_ok");
            if (val === "all") setConsent("all");
            else if (val === "essential") setConsent("essential");
        };
        window.addEventListener("chispito_consent_update", customHandler);

        return () => {
            window.removeEventListener("storage", handler);
            window.removeEventListener("chispito_consent_update", customHandler);
        };
    }, []);

    // Solo cargar scripts si el usuario aceptó TODO
    if (consent !== "all") return null;

    return (
        <>
            {/* Google AdSense */}
            <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6867283748828267"
                crossOrigin="anonymous"
                strategy="afterInteractive"
            />
            {/* Google Analytics GA4 */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-MD0BLYHES8"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-MD0BLYHES8');
                `}
            </Script>
        </>
    );
}
