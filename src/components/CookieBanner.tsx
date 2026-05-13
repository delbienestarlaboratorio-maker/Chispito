"use client";
/**
 * CookieBanner — GDPR/ePrivacy compliant cookie consent banner.
 * - "Aceptar todo" → stores "all" → triggers AdSense + Analytics load
 * - "Solo esenciales" → stores "essential" → NO third-party scripts loaded
 * Dispatches custom event for intra-tab communication with ConsentScripts.
 */

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("chispito_cookies_ok");
        if (!consent) setVisible(true);
    }, []);

    function handleAcceptAll() {
        localStorage.setItem("chispito_cookies_ok", "all");
        setVisible(false);
        // Notify ConsentScripts to load third-party scripts
        window.dispatchEvent(new Event("chispito_consent_update"));
    }

    function handleEssentialOnly() {
        localStorage.setItem("chispito_cookies_ok", "essential");
        setVisible(false);
        window.dispatchEvent(new Event("chispito_consent_update"));
    }

    if (!visible) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
            style={{
                background: "rgba(13,27,42,0.97)",
                borderTop: "1px solid rgba(255,213,10,0.3)",
                backdropFilter: "blur(12px)",
            }}
        >
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🍪</span>
                    <p className="text-white/80 text-sm leading-relaxed">
                        Chispito.mx usa cookies para mejorar tu experiencia educativa.
                        Las cookies analíticas y publicitarias solo se activan con tu permiso.{" "}
                        <Link href="/privacidad" className="text-yellow-400 underline hover:text-yellow-300">
                            Aviso de privacidad
                        </Link>{" "}·{" "}
                        <Link href="/cookies" className="text-yellow-400 underline hover:text-yellow-300">
                            Política de cookies
                        </Link>
                    </p>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                    <button
                        onClick={handleEssentialOnly}
                        className="px-4 py-2 rounded-xl text-sm text-white/50 hover:text-white transition-colors"
                        style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                        Solo esenciales
                    </button>
                    <button
                        onClick={handleAcceptAll}
                        className="px-5 py-2 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                        style={{ background: "#FFD60A", color: "#0D1B2A" }}
                    >
                        ✓ Aceptar todo
                    </button>
                </div>
            </div>
        </div>
    );
}
