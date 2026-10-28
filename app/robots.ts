import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://dr-hanif-miah.vercel.app/sitemap.xml',
    host: 'https://dr-hanif-miah.vercel.app',
  }
}
