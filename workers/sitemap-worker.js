export default {
    async fetch(request) {
        const url = new URL(request.url);

        // Si solicitan sitemap, ads, o robots, lo pedimos directamente a nuestro 
        // dominio primario de Pages (chispito-core.pages.dev) saltando este worker 
        // para que entregue el archivo estático real generado en .open-next/assets/
        if (url.pathname === '/sitemap.xml' || url.pathname === '/ads.txt' || url.pathname === '/robots.txt') {
            const pagesUrl = new URL(request.url);
            pagesUrl.hostname = 'chispito-core.pages.dev';
            return fetch(pagesUrl.toString());
        }

        // Fallback
        return fetch(request);
    },
};
