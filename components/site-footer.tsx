import Link from 'next/link'
import { facultyData } from '@/lib/data'
import { Mail, MapPin, ExternalLink, ArrowRight } from 'lucide-react'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-name">{facultyData.name}</div>
            <div className="footer-brand-role">{facultyData.title}</div>
            <div className="footer-brand-inst">
              {facultyData.department}<br />
              {facultyData.institution}, {facultyData.location}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
              <a
                href={`mailto:${facultyData.contacts.primaryEmail}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  color: 'rgba(247,247,242,0.7)',
                  textDecoration: 'none',
                }}
              >
                <Mail size={13} aria-hidden="true" />
                {facultyData.contacts.primaryEmail}
              </a>
            </div>

            <div className="footer-tags">
              {facultyData.coreFocus.map((f) => (
                <span key={f} className="footer-tag">{f}</span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-col-heading">Pages</div>
            <ul className="footer-links" role="list">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">Academic Profile</Link></li>
              <li><Link href="/about#education" className="footer-link">Education & Degrees</Link></li>
              <li><Link href="/about#methodologies" className="footer-link">Field Methodologies</Link></li>
              <li><Link href="/about#teaching" className="footer-link">Courses Taught</Link></li>
              <li><Link href="/contact" className="footer-link">Contact & Collaboration</Link></li>
            </ul>
          </div>

          {/* Academic Profiles */}
          <div>
            <div className="footer-col-heading">Scholarly Profiles</div>
            <ul className="footer-links" role="list">
              {facultyData.contacts.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    {s.name}
                    <ExternalLink size={10} aria-hidden="true" style={{ opacity: 0.5 }} />
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '24px' }}>
              <div className="footer-col-heading">Office Hours</div>
              <p style={{ fontSize: '0.78rem', color: 'rgba(247,247,242,0.5)', lineHeight: 1.6 }}>
                {facultyData.contacts.officeHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {year} {facultyData.name}. All rights reserved.
          </span>
          <span className="footer-copy">
            Department of Sociology, University of Chittagong, Bangladesh.
          </span>
        </div>
      </div>
    </footer>
  )
}
