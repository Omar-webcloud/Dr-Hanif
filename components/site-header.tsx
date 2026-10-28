'use client'

import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from '@carbon/react'
import { Asleep, Light } from '@carbon/icons-react'
import { useTheme } from '@/components/theme-provider'

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'g100'

  return (
    <Header aria-label="Dr. Hanif Miah academic profile">
      <SkipToContent />
      <HeaderName href="/" prefix="CU">
        Dr. Hanif Miah
      </HeaderName>
      <HeaderNavigation aria-label="Profile navigation">
        <HeaderMenuItem href="#research">Research</HeaderMenuItem>
        <HeaderMenuItem href="#publications">Publications</HeaderMenuItem>
        <HeaderMenuItem href="#contact">Contact</HeaderMenuItem>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          tooltipAlignment="end"
          onClick={toggleTheme}
        >
          {isDark ? <Light size={20} /> : <Asleep size={20} />}
        </HeaderGlobalAction>
      </HeaderGlobalBar>
    </Header>
  )
}
