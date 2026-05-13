// Force dynamic rendering — Supabase client requires env vars not available at build time
export const dynamic = "force-dynamic";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return children;
}
