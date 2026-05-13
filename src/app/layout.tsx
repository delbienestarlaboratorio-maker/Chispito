import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import ConsentScripts from "@/components/ConsentScripts";

export const metadata: Metadata = {
  title: {
    default: "Chispito.mx — Aprende con la SEP, ¡pero divertido!",
    template: "%s | Chispito.mx",
  },
  description:
    "Ejercicios interactivos de primaria, preescolar y secundaria alineados 100% al programa SEP de México. Matemáticas, Español, Historia y más. ¡Gratis para empezar!",
  keywords: [
    "ejercicios primaria SEP",
    "tareas primer grado",
    "matematicas primaria Mexico",
    "ejercicios interactivos niños",
    "material SEP primaria",
    "aprender jugando Mexico",
    "ejercicios sumas primer grado",
    "plantillas educativas SEP",
    "Chispito educacion",
  ],
  metadataBase: new URL("https://chispito.mx"),
  openGraph: {
    title: "Chispito.mx — Aprende con la SEP, ¡pero divertido!",
    description: "Ejercicios interactivos grado por grado, alineados al programa SEP México.",
    url: "https://chispito.mx",
    siteName: "Chispito.mx",
    locale: "es_MX",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://chispito.mx" },
  verification: {
    google: "doynfbnbqoNBGEnBRetDajKxSIUw2k6gsra2uZRgYTw",
    other: { "google-adsense-account": "ca-pub-6867283748828267" },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="frame-ancestors 'self';" />
        {/* Schema markup: EducationalOrganization */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Chispito.mx",
              url: "https://chispito.mx",
              description:
                "Plataforma de ejercicios interactivos para educación básica en México, alineada al programa SEP.",
              inLanguage: "es-MX",
              areaServed: "MX",
              educationalCredentialAwarded: "Educación Básica SEP México",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {/* Consent-gated: AdSense + GA4 only load after user accepts all cookies */}
        <ConsentScripts />
        <CookieBanner />
        {/* Footer legal */}
        <div style={{ background: "#060E18", borderTop: "1px solid rgba(255,255,255,0.06)" }} className="text-center py-4 px-4">
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px" }}>
            © 2026 Chispito.mx · Contenido alineado al programa SEP México ·{" "}
            <a href="/nosotros" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}>Nosotros</a>{" · "}
            <a href="/contacto" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}>Contacto</a>{" · "}
            <a href="/terminos" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}>Términos</a>{" · "}
            <a href="/privacidad" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}>Privacidad</a>{" · "}
            <a href="/cookies" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}>Cookies</a>
          </p>
        </div>
      </body>
    </html>
  );
}
