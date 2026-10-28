import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Dr. Hanif Miah | Associate Professor of Sociology',
  description:
    'Academic profile of Dr. Hanif Miah, Associate Professor of Sociology at the University of Chittagong. Researching gender, culture, development, migration, and Bangladesh studies.',
  keywords: ['Hanif Miah', 'Sociology', 'University of Chittagong', 'Gender and Culture', 'Bangladesh Studies'],
  openGraph: {
    title: 'Dr. Hanif Miah | Associate Professor of Sociology',
    description: 'Research, teaching, publications, and academic profile of Dr. Hanif Miah.',
    type: 'profile',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
