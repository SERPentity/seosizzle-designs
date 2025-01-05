import { writeFileSync } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://seosnafu.co.uk';

// Get all routes from App.tsx
const routes = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/locations',
  '/seo',
  '/seo/technical-seo',
  '/seo/local-seo',
  '/seo/content-strategy',
  '/seo/audit',
  '/seo/competitor-analysis',
  '/seo/link-building',
  '/seo/social-media',
  '/web-design',
  '/web-design/responsive-design',
  '/web-design/ux-design',
  '/web-design/ecommerce',
  '/web-design/service-business',
  '/case-studies',
  '/case-studies/stair-guys-ltd',
  '/case-studies/bio-uk-fuels',
  '/locations/seo/london',
  '/locations/seo/birmingham',
  '/locations/seo/manchester',
  '/locations/web-design/london',
  '/locations/seo/bristol',
  '/locations/seo/sheffield',
  '/locations/seo/leeds',
  '/locations/seo/liverpool',
  '/locations/seo/newcastle',
  '/locations/seo/southampton',
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  writeFileSync(resolve(__dirname, '../../public/sitemap.xml'), sitemap);
};

export default generateSitemap;