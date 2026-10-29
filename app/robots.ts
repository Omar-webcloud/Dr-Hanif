import type { MetadataRoute } from 'next'

const BASE_URL = 'https://dr-hanif-miah.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Googlebot: full access + image crawling
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // Bingbot
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // All other crawlers
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
