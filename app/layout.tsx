import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SeoDossier } from '@/components/seo-dossier'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://dr-hanif-miah.vercel.app'),
  title: {
    default: 'Dr. Hanif Miah | Associate Professor of Sociology, University of Chittagong',
    template: '%s | Dr. Hanif Miah',
  },
  description:
    'Official academic portfolio of Dr. Hanif Miah (ড. মো. হানিফ মিয়া), Associate Professor in the Department of Sociology, University of Chittagong, Bangladesh. Specialising in gender and culture, Baul spiritual traditions, sociology of development, and participatory rural appraisal methodologies.',
  keywords: [
    // Primary Name variations
    'Dr. Hanif Miah',
    'Dr Hanif Miah',
    'Hanif Miah',
    'Dr. Md. Hanif Miah',
    'Md. Hanif Miah',
    'Md Hanif Miah',
    'Mohammad Hanif Miah',
    'Miah Hanif',
    // Bengali Name & Queries
    'ড. মো. হানিফ মিয়া',
    'ড. হানিফ মিয়া',
    'মো. হানিফ মিয়া',
    'মোহাম্মদ হানিফ মিয়া',
    'হানিফ মিয়া',
    'হানিফ মিয়া চট্টগ্রাম বিশ্ববিদ্যালয়',
    // Institution & Department
    'University of Chittagong',
    'Chittagong University',
    'CU',
    'Department of Sociology Chittagong',
    'Faculty of Social Sciences University of Chittagong',
    'চট্টগ্রাম বিশ্ববিদ্যালয়',
    'সমাজতত্ত্ব বিভাগ চট্টগ্রাম বিশ্ববিদ্যালয়',
    // Academic Rank & Roles
    'Associate Professor Hanif Miah',
    'Associate Professor of Sociology',
    'Sociology Professor Bangladesh',
    'Assistant Proctor University of Chittagong',
    'Chittagong University Faculty',
    // Research Areas & Specializations
    'Gender and Culture',
    'Gender Relations in Baul Culture',
    'Baul Culture Bangladesh',
    'Baul Traditions and Sadhana',
    'Bengal Folk Culture and Music',
    'Sociology of Development',
    'Participatory Rural Appraisal Bangladesh',
    'PRA methodology',
    'Focus Group Discussion methodology',
    'Qualitative Research Methodology',
    'Ethnographic Research Bangladesh',
    'Central China Normal University Sociology PhD',
    'CCNU Wuhan Sociology',
    'Human Rights and Vulnerable Communities',
    'Climate Change Adaptation Bangladesh',
    'Disaster Risk Reduction Bangladesh',
    'Rural Livelihoods Bangladesh',
  ],
  authors: [{ name: 'Dr. Hanif Miah', url: 'https://dr-hanif-miah.vercel.app' }],
  creator: 'Dr. Hanif Miah',
  publisher: 'Department of Sociology, University of Chittagong',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: 'any' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: 'https://dr-hanif-miah.vercel.app',
    languages: {
      'en-US': 'https://dr-hanif-miah.vercel.app',
      'bn-BD': 'https://dr-hanif-miah.vercel.app',
    },
  },
  openGraph: {
    title: 'Dr. Hanif Miah | Associate Professor of Sociology, University of Chittagong',
    description:
      'Official academic website of Dr. Hanif Miah (ড. মো. হানিফ মিয়া). Sociology, gender and culture, Baul traditions, development, and participatory field methodologies at the University of Chittagong, Bangladesh.',
    url: 'https://dr-hanif-miah.vercel.app',
    siteName: 'Dr. Hanif Miah',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png',
        width: 800,
        height: 800,
        alt: 'Dr. Hanif Miah, Associate Professor of Sociology, University of Chittagong',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['bn_BD'],
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
    nocache: false,
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
    google: [
      'rFFlsMVXMOTWg6H0_zw9h7xy0TP_4pK0Hmwixt9Gzzo', // Account 1
      'pb8XjvfpEFfO1gmTd56XbBkQ_q-5itluHzClplcnwfM', // Account 2
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dr. Hanif Miah',
    alternateName: [
      'Hanif Miah',
      'Dr. Md. Hanif Miah',
      'Md. Hanif Miah',
      'Mohammad Hanif Miah',
      'Miah Hanif',
      'ড. মো. হানিফ মিয়া',
      'ড. হানিফ মিয়া',
      'মো. হানিফ মিয়া',
    ],
    jobTitle: 'Associate Professor of Sociology',
    honorificPrefix: 'Dr.',
    gender: 'Male',
    nationality: {
      '@type': 'Country',
      name: 'Bangladesh',
    },
    worksFor: {
      '@type': 'EducationalOrganization',
      name: 'University of Chittagong',
      alternateName: ['Chittagong University', 'CU', 'চট্টগ্রাম বিশ্ববিদ্যালয়'],
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
        location: 'Wuhan, Hubei, China',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'University of Chittagong',
        location: 'Chittagong, Bangladesh',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Govt. Titumir College',
        location: 'Dhaka, Bangladesh',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Ph.D. in Sociology',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'Central China Normal University',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'M.S.S. in Sociology',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'University of Chittagong',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'B.S.S. (Honours) in Sociology',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'University of Chittagong',
        },
      },
    ],
    url: 'https://dr-hanif-miah.vercel.app',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png',
    email: ['mailto:miah.hanif@cu.ac.bd', 'mailto:miahhanif@yahoo.com'],
    sameAs: [
      'https://www.researchgate.net/profile/Hanif-Miah-2',
      'https://www.linkedin.com/in/dr-hanif-miah-8a808435/',
      'https://www.facebook.com/miahhanif/',
    ],
    knowsLanguage: ['Bangla', 'English', 'Chinese', 'Hindi'],
    knowsAbout: [
      'Sociology',
      'Gender and Culture',
      'Baul Traditions and Folk Culture',
      'Sociology of Development',
      'Participatory Rural Appraisal (PRA)',
      'Ethnographic Research',
      'Qualitative Methodology',
      'Disaster Risk Reduction',
      'Climate Adaptation',
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
        {/* Hidden crawlable dossier with FAQs & WebSite / FAQPage JSON-LD */}
        <SeoDossier />
        <SiteFooter />
      </body>
    </html>
  )
}
