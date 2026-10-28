import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dr-hanif-miah.vercel.app'),
  title: {
    default: 'Dr. Hanif Miah | Associate Professor of Sociology, University of Chittagong',
    template: '%s | Dr. Hanif Miah',
  },
  description:
    'Official academic website of Dr. Hanif Miah, Associate Professor in the Department of Sociology at the University of Chittagong, Bangladesh. Specialising in gender and culture, development, Baul traditions, and participatory research methodologies.',
  keywords: [
    'Dr. Hanif Miah',
    'Hanif Miah',
    'Associate Professor Hanif Miah',
    'University of Chittagong',
    'Department of Sociology Chittagong',
    'Sociology Bangladesh',
    'Gender and Culture',
    'Baul Culture Bangladesh',
    'Sociology of Development',
    'Participatory Rural Appraisal Bangladesh',
    'Qualitative Research Methodology',
    'Chittagong University Faculty',
  ],
  authors: [{ name: 'Dr. Hanif Miah', url: 'https://dr-hanif-miah.vercel.app' }],
  creator: 'Dr. Hanif Miah',
  publisher: 'Department of Sociology, University of Chittagong',
  alternates: {
    canonical: 'https://dr-hanif-miah.vercel.app',
  },
  openGraph: {
    title: 'Dr. Hanif Miah | Associate Professor of Sociology, University of Chittagong',
    description:
      'Official academic website of Dr. Hanif Miah. Sociology, gender and culture, development, and participatory field methodologies at the University of Chittagong, Bangladesh.',
    url: 'https://dr-hanif-miah.vercel.app',
    siteName: 'Dr. Hanif Miah',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png',
        width: 800,
        height: 800,
        alt: 'Dr. Hanif Miah, Associate Professor of Sociology',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Hanif Miah | Associate Professor of Sociology, University of Chittagong',
    description:
      'Official academic website of Dr. Hanif Miah. Sociology, gender and culture, development, and participatory field methodologies in Bangladesh.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'BD-B',
    'geo.placename': 'Chittagong, Bangladesh',
    'geo.position': '22.4716;91.7877',
    ICBM: '22.4716, 91.7877',
  },
  verification: {
    google: 'rFFlsMVXMOTWg6H0_zw9h7xy0TP_4pK0Hmwixt9Gzzo',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Hanif Miah',
    jobTitle: 'Associate Professor of Sociology',
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'University of Chittagong',
      url: 'https://cu.ac.bd',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Department of Sociology, Faculty of Social Sciences',
        addressLocality: 'Chittagong',
        postalCode: '4331',
        addressCountry: 'BD',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 22.4716,
        longitude: 91.7877,
      },
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Central China Normal University',
        location: 'Wuhan, China',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'University of Chittagong',
        location: 'Chittagong, Bangladesh',
      },
    ],
    url: 'https://dr-hanif-miah.vercel.app',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png',
    email: 'mailto:miah.hanif@cu.ac.bd',
    sameAs: [
      'https://www.researchgate.net/profile/Hanif-Miah-2',
      'https://www.linkedin.com/in/dr-hanif-miah-8a808435/',
      'https://www.facebook.com/miahhanif/',
    ],

    knowsAbout: [
      'Sociology',
      'Gender and Culture',
      'Baul Traditions',
      'Sociology of Development',
      'Participatory Rural Appraisal',
      'Ethnographic Research',
      'Qualitative Methodology',
      'Bangladesh Studies',
    ],
  }

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteHeader />
        <main id="main-content" style={{ flex: '1 0 auto' }}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
