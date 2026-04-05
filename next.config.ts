import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Imágenes: usar unoptimized en CF Pages (no tiene Image Optimization en free tier)
  images: {
    unoptimized: true,
  },
  // eslint.ignoreDuringBuilds fue eliminado en Next.js 15+
  // Para ignorar errores de ESLint, usar NEXT_DISABLE_ESLINT=1 o configurar eslint.config.mjs
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

