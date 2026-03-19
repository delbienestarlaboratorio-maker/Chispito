import Navbar from "@/components/Navbar";
import { AdBannerHorizontal } from "@/components/AdBanner";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-posts";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return {};
    return {
        title: `${post.title} | Blog Chispito.mx`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
        },
    };
}

export default async function BlogArticlePage({ params }: Props) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen" style={{ background: "var(--navy)" }}>
            <Navbar />

            {/* Breadcrumb */}
            <section className="pt-28 px-4">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="text-sm text-yellow-400 hover:underline">
                        ← Volver al Blog
                    </Link>
                </div>
            </section>

            {/* Article header */}
            <section className="pt-6 pb-8 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{post.emoji}</span>
                        <span
                            className="text-xs font-bold px-3 py-1 rounded-full text-blue-300"
                            style={{ background: "rgba(59,130,246,0.2)" }}
                        >
                            {post.category}
                        </span>
                        <span className="text-white/40 text-sm">{post.date}</span>
                        <span className="text-white/30 text-xs">⏱️ {post.readTime}</span>
                    </div>
                    <h1 className="font-fredoka text-4xl md:text-5xl text-white mb-4 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl">
                        {post.excerpt}
                    </p>
                </div>
            </section>

            <AdBannerHorizontal />

            {/* Article body */}
            <section className="py-8 px-4">
                <div className="max-w-3xl mx-auto">
                    <article className="glass rounded-2xl p-6 md:p-10">
                        {post.content.map((block, i) => {
                            if (block.startsWith("## ")) {
                                return (
                                    <h2 key={i} className="font-fredoka text-2xl text-white mt-8 mb-3" style={{ color: "var(--yellow)" }}>
                                        {block.replace("## ", "")}
                                    </h2>
                                );
                            }
                            if (block.startsWith("**") && block.endsWith("**")) {
                                return (
                                    <p key={i} className="text-white font-bold text-base mb-3">
                                        {block.replace(/\*\*/g, "")}
                                    </p>
                                );
                            }
                            // Handle inline bold
                            const parts = block.split(/(\*\*[^*]+\*\*)/);
                            return (
                                <p key={i} className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
                                    {parts.map((part, j) => {
                                        if (part.startsWith("**") && part.endsWith("**")) {
                                            return <strong key={j} className="text-white">{part.replace(/\*\*/g, "")}</strong>;
                                        }
                                        return <span key={j}>{part}</span>;
                                    })}
                                </p>
                            );
                        })}
                    </article>

                    {/* CTA */}
                    <div className="mt-10 text-center glass rounded-2xl p-8">
                        <div className="text-4xl mb-3">⚡</div>
                        <h3 className="font-fredoka text-2xl text-white mb-2">¿Quieres más ejercicios para tu hijo?</h3>
                        <p className="text-white/60 mb-4">Chispito.mx tiene cientos de ejercicios alineados a la SEP, organizados por grado y mes.</p>
                        <Link href="/#grados" className="btn-primary text-lg inline-block">
                            🚀 Empezar Gratis
                        </Link>
                    </div>
                </div>
            </section>

            <AdBannerHorizontal />

            {/* Related posts */}
            <section className="py-10 px-4">
                <div className="max-w-3xl mx-auto">
                    <h3 className="font-fredoka text-xl text-white mb-4">También te puede interesar</h3>
                    <div className="grid gap-4 md:grid-cols-2">
                        {BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2).map((related) => (
                            <Link href={`/blog/${related.slug}`} key={related.slug} className="block no-underline">
                                <div className="glass rounded-xl p-4 hover:border-white/20 transition-all group">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span>{related.emoji}</span>
                                        <span className="text-xs text-blue-300">{related.category}</span>
                                    </div>
                                    <h4 className="font-fredoka text-base text-white group-hover:text-blue-400 transition-colors">
                                        {related.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-10 text-center text-white/30 text-sm border-t border-white/06">
                <Link href="/" className="hover:text-white transition-colors">
                    ← Volver a inicio
                </Link>
            </footer>

            {/* Article Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: post.title,
                        description: post.excerpt,
                        datePublished: post.date,
                        author: {
                            "@type": "Organization",
                            name: "Chispito.mx",
                            url: "https://chispito.mx",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Chispito.mx",
                            url: "https://chispito.mx",
                        },
                    }),
                }}
            />
        </main>
    );
}
