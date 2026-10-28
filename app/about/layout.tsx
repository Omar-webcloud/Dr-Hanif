import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'About Dr. Hanif Miah | Academic Profile & Journey',
  description:
    'Explore the academic journey, degrees, field methodologies, 14 research themes, and sociology curriculum of Dr. Hanif Miah, Associate Professor at the University of Chittagong, Bangladesh.',
  alternates: {
    canonical: 'https://dr-hanif-miah.vercel.app/about',
  },
  openGraph: {
    title: 'About Dr. Hanif Miah | Associate Professor of Sociology',
    description:
      'Academic trajectory, qualitative research methodologies, and higher education teaching of Dr. Hanif Miah at the University of Chittagong, Bangladesh.',
    url: 'https://dr-hanif-miah.vercel.app/about',
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
    title: 'About Dr. Hanif Miah | Academic Profile & Journey',
    description:
      'Academic trajectory, qualitative research methodologies, and teaching of Dr. Hanif Miah at the University of Chittagong, Bangladesh.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png',
    ],
  },
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
