import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Connect & Collaborate | Dr. Hanif Miah',
  description:
    'Contact Dr. Hanif Miah, Associate Professor in the Department of Sociology at the University of Chittagong, Bangladesh. Direct institutional email, office hours, and academic collaboration inquiries.',
  alternates: {
    canonical: 'https://dr-hanif-miah.vercel.app/contact',
  },
  openGraph: {
    title: 'Connect & Collaborate | Dr. Hanif Miah',
    description:
      'Academic inquiries, research collaboration, and consultation with Dr. Hanif Miah at the University of Chittagong, Bangladesh.',
    url: 'https://dr-hanif-miah.vercel.app/contact',
    siteName: 'Dr. Hanif Miah',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png',
        width: 800,
        height: 800,
        alt: 'Dr. Hanif Miah, Associate Professor of Sociology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect & Collaborate | Dr. Hanif Miah',
    description:
      'Academic inquiries, research collaboration, and consultation with Dr. Hanif Miah at the University of Chittagong, Bangladesh.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png',
    ],
  },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
