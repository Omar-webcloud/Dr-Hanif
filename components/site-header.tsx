'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react'

const navItems = [
  { label: 'Home',             href: '/'         },
  { label: 'Academic Profile', href: '/about'    },
  { label: 'Contact',          href: '/contact'  },
]

export function SiteHeader() {
  const pathname    = usePathname()
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className={`site-nav${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="container nav-inner">
          {/* Brand */}
          <Link href="/" className="nav-monogram" aria-label="Dr. Hanif Miah, Home">
            <div className="nav-mono-mark" aria-hidden="true">HM</div>
            <div className="nav-name-group">
              <span className="nav-name-primary">Dr. Hanif Miah</span>
              <span className="nav-name-sub">Associate Professor of Sociology</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary navigation">
            <ul className="nav-links" role="list">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`nav-link${isActive(href) ? ' active' : ''}`}
                    aria-current={isActive(href) ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="nav-actions">
            <Link href="/contact" className="btn btn-primary btn-sm">
              <Mail size={14} aria-hidden="true" />
              Get in Touch
            </Link>

            {/* Mobile toggle */}
            <button
              className={`nav-toggle${open ? ' open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(v => !v)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <nav
        id="mobile-drawer"
        className={`mobile-drawer${open ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <ul className="mobile-nav-links" role="list">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`mobile-nav-link${isActive(href) ? ' active' : ''}`}
                aria-current={isActive(href) ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{label}</span>
                <ArrowUpRight size={16} className="mobile-nav-arrow" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => setOpen(false)}
        >
          <Mail size={15} aria-hidden="true" />
          Contact & Academic Inquiries
        </Link>
      </nav>
    </>
  )
}
