"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import GradeSelector from "@/components/GradeSelector";
import { AdBannerHorizontal } from "@/components/AdBanner";
import Testimonios from "@/components/Testimonios";
import { MATERIAS } from "@/data/curriculum";

const FAQ_ITEMS = [
  {
    q: "¿Chispito.mx es gratis?",
    a: "Sí, puedes empezar completamente gratis sin necesidad de tarjeta de crédito. Tenemos ejercicios gratuitos todos los días. Si quieres acceso ilimitado, puedes ver nuestros planes premium."
  },
  {
    q: "¿Los ejercicios están alineados a la SEP?",
    a: "100%. Todo nuestro contenido sigue el programa oficial de la SEP (Nueva Escuela Mexicana 2022) y se organiza mes a mes según los libros de la CONALITEG."
  },
  {
    q: "¿Qué grados cubre Chispito.mx?",
    a: "Cubrimos desde Preescolar (Kinder) hasta 3° de Telesecundaria, incluyendo todas las materias del programa oficial: Matemáticas, Español, Ciencias, Historia, Geografía y más."
  },
  {
    q: "¿Necesito instalar alguna aplicación?",
    a: "No. Chispito.mx funciona directamente desde el navegador de cualquier dispositivo: celular, tablet o computadora. No necesitas descargar nada."
  },
  {
    q: "¿Puedo imprimir los ejercicios?",
    a: "¡Claro! Todos los ejercicios se pueden imprimir como PDF con un solo clic. También puedes resolverlos directamente en pantalla si prefieres no imprimir."
  },
  {
    q: "¿Quiénes son los personajes del Universo Chispito?",
    a: "Nico (el cohete), Luna, Pipo, Bruma, Eli, Rex, Nano, Cali, Volt, Pages y Cosmos son los 11 personajes que acompañan a los estudiantes desde Kinder hasta Secundaria en una historia épica de aprendizaje."
  }
];




const STATS = [
  { numero: "23M+", label: "Alumnos en México" },
  { numero: "81", label: "Libros SEP cubiertos" },
  { numero: "1,000+", label: "Ejercicios disponibles" },
  { numero: "100%", label: "Alineado a la SEP" },
];

const FEATURES = [
  {
    emoji: "🖨️",
    title: "Descargable e imprimible",
    desc: "Imprime en casa o en la escuela con un solo clic. PDFs listos para usar.",
  },
  {
    emoji: "📱",
    title: "Resuélvelo en pantalla",
    desc: "Sin impresora, sin problema. El niño puede hacerlo en tablet, celular o computadora.",
  },
  {
    emoji: "📖",
    title: "100% SEP México",
    desc: "Alineado mes a mes a los libros de la CONALITEG. Exactamente lo que ve en clase.",
  },
  {
    emoji: "⭐",
    title: "Gamificado y divertido",
    desc: "Estrellas, medallas y Chispito festeja cada respuesta correcta. Los niños piden más.",
  },
  {
    emoji: "📊",
    title: "Progreso para papás",
    desc: "Reportes semanales: en qué está bien tu hijo y dónde necesita reforzar.",
  },
  {
    emoji: "🆓",
    title: "Gratis para empezar",
    desc: "Acceso sin tarjeta. Ejercicios gratuitos todos los días. Mejora con V2 y V3.",
  },
];

export default function HomePage() {
  return (
    <main className="hero-gradient min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Texto */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{
                background: "rgba(255,214,10,0.15)",
                color: "var(--yellow)",
                border: "1px solid rgba(255,214,10,0.3)",
              }}
            >
              🇲🇽 Hecho para la SEP de México
            </div>

            <h1 className="font-fredoka text-5xl md:text-7xl text-white leading-tight mb-6">
              ¡Aprende jugando,{" "}
              <span style={{ color: "var(--yellow)" }}>igual que</span> en tu
              libro de la SEP!
            </h1>
            <p className="text-white/70 text-xl mb-8 max-w-2xl">
              Ejercicios interactivos para <strong className="text-white">kínder, básica, telesecundaria y preparatoria</strong>,
              organizados <strong className="text-white">mes a mes</strong> según el programa oficial. Practica
              exactamente lo que viene en el examen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/#grados" className="btn-primary text-lg">
                🚀 ¡Empieza Gratis!
              </Link>
              <Link href="/planes" className="btn-secondary text-lg">
                Ver Planes
              </Link>
            </div>
            <p className="text-white/40 text-sm mt-4">
              Sin tarjeta necesaria • Cancela cuando quieras
            </p>
          </motion.div>

          {/* Mascota Chispito */}
          <motion.div
            className="flex-shrink-0 text-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] mx-auto" style={{ filter: "drop-shadow(0 0 40px rgba(255,214,10,0.4))" }}>
              <Image
                src="/personajes/chispito_mascot.png"
                alt="Chispito — Tu profe virtual favorito"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div
              className="mt-2 font-fredoka text-3xl"
              style={{ color: "var(--yellow)" }}
            >
              ¡Chispito!
            </div>
            <div className="text-white/50 text-sm mt-1">Tu profe preferido ✨</div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 px-4" style={{ background: "rgba(255,214,10,0.06)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-fredoka text-4xl md:text-5xl" style={{ color: "var(--yellow)" }}>
                {s.numero}
              </div>
              <div className="text-white/60 text-sm mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AD BANNER horizontal no invasivo */}
      <AdBannerHorizontal />

      {/* SELECTOR DE GRADOS */}
      <GradeSelector />

      {/* AD BANNER */}
      <AdBannerHorizontal />

      {/* MATERIAS */}
      <section id="materias" className="py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-fredoka text-4xl text-white mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Todas las materias de la SEP
          </motion.h2>
          <p className="text-white/60 mb-10">
            Ejercicios para todas las asignaturas del programa oficial
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(MATERIAS).map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  href="/#grados"
                  className="materia-pill"
                  style={{
                    background: `${m.color}22`,
                    color: m.color,
                    borderColor: `${m.color}55`,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('grados')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {m.emoji} {m.nombre}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-3">
              ¿Por qué Chispito.mx?
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              No somos otro PDF aburrido. Somos el primer profe virtual que conoce los libros de la SEP de tu hijo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="text-4xl mb-3">{f.emoji}</div>
                <h3 className="font-fredoka text-xl text-white mb-2">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <Testimonios />

      <AdBannerHorizontal />

      {/* FAQ — Preguntas Frecuentes */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-3 text-center">
            Preguntas Frecuentes
          </h2>
          <p className="text-white/60 text-center mb-10">
            Todo lo que necesitas saber sobre Chispito.mx
          </p>
          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
        {/* Schema.org FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ_ITEMS.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </section>

      {/* CTA FINAL */}
      <section id="papa" className="py-24 px-4 text-center">
        <div
          className="max-w-3xl mx-auto rounded-3xl p-12"
          style={{ background: "linear-gradient(135deg, #FFD60A22, #4ECDC422)" }}
        >
          <div className="text-6xl mb-4">⚡</div>
          <h2 className="font-fredoka text-4xl md:text-5xl text-white mb-4">
            ¡Chispito está listo para tu hijo!
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Más de 1,000 ejercicios alineados a la SEP. Empieza gratis hoy mismo.
          </p>
          <Link href="/#grados" className="btn-primary text-xl">
            🚀 Elegir el Grado de mi Hijo
          </Link>
          <p className="text-white/40 text-sm mt-4">
            Gratis siempre • Fácil de usar • Funciona en celular
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 text-center text-white/30 text-sm"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p className="font-fredoka text-xl mb-2" style={{ color: "var(--yellow)" }}>
          Chispito.mx ⚡
        </p>
        <p>
          Alineado al programa SEP México 2022 (Nueva Escuela Mexicana) •{" "}
          <Link href="/privacidad" className="hover:text-white transition-colors">
            Privacidad
          </Link>{" "}
          •{" "}
          <Link href="/terminos" className="hover:text-white transition-colors">
            Términos
          </Link>
        </p>
        <p className="mt-2">🇲🇽 Hecho con ❤️ en México</p>
      </footer>
    </main>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: open ? "1px solid rgba(255,214,10,0.3)" : "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-white font-semibold text-base md:text-lg pr-4">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-white/50 text-xl shrink-0"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-white/60 text-sm md:text-base leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
