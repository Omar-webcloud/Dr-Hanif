'use client'

import { useState } from 'react'
import Link from 'next/link'
import { facultyData } from '@/lib/data'
import {
  Mail, MapPin, Clock, Phone,
  Send, Copy, Check,
  ExternalLink,
} from 'lucide-react'

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`copy-btn${copied ? ' copied' : ''}`}
      aria-label={`Copy ${value} to clipboard`}
    >
      {copied ? <Check size={11} aria-hidden="true" /> : <Copy size={11} aria-hidden="true" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

const MAILTO_TO = 'miahhanif@yahoo.com'

const SUBJECT_OPTIONS = [
  'Academic Research Collaboration',
  'Interview or Media Request',
  'Conference or Seminar Invitation',
  'Guest Lecture Invitation',
  'Student Inquiry',
  'General Correspondence',
] as const

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: '' as string,
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      formData.subject || 'Academic Inquiry'
    )
    const body = encodeURIComponent(
      [
        `Dear Dr. Miah,`,
        ``,
        formData.message,
        ``,
        `---`,
        `Name: ${formData.name}`,
        formData.institution ? `Institution: ${formData.institution}` : null,
        `Reply-to: ${formData.email}`,
      ]
        .filter((l) => l !== null)
        .join('\n')
    )

    window.location.href = `mailto:${MAILTO_TO}?subject=${subject}&body=${body}`
  }


  return (
    <div>
      {/* ====================================================================
          PAGE HERO
          ==================================================================== */}
      <section className="contact-page-hero" aria-labelledby="contact-page-heading">
        <div className="container">
          <p className="t-eyebrow">Academic Communication</p>
          <h1 id="contact-page-heading" className="t-h1" style={{ maxWidth: '22ch', marginBottom: '16px' }}>
            Contact &amp; Scholarly Collaboration
          </h1>
          <p className="t-lead reading-width">
            Dr. Miah welcomes inquiries from researchers, students, journalists, and institutions regarding collaboration, lectures, media appearances, and academic projects.
          </p>
        </div>
      </section>

      {/* ====================================================================
          CONTACT GRID
          ==================================================================== */}
      <section className="section section--white" aria-label="Contact information and inquiry form">
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Info sidebar */}
          <aside aria-label="Contact information">
            <p className="t-eyebrow t-eyebrow--muted" style={{ marginBottom: '24px' }}>
              Reach Out Directly
            </p>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* Email 1 */}
              <div style={{ padding: '18px 0', borderBottom: '1px solid var(--mist)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Mail size={14} style={{ color: 'var(--cobalt)' }} aria-hidden="true" />
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--steel)' }}>
                    Primary Email
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <a
                    href={`mailto:${facultyData.contacts.primaryEmail}`}
                    style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--charcoal)', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    {facultyData.contacts.primaryEmail}
                  </a>
                  <CopyButton value={facultyData.contacts.primaryEmail} />
                </div>
              </div>

              {/* Email 2 */}
              <div style={{ padding: '18px 0', borderBottom: '1px solid var(--mist)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Mail size={14} style={{ color: 'var(--cobalt)' }} aria-hidden="true" />
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--steel)' }}>
                    Alternative Email
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <a
                    href={`mailto:${facultyData.contacts.alternativeEmail}`}
                    style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--charcoal)', textDecoration: 'none', wordBreak: 'break-all' }}
                  >
                    {facultyData.contacts.alternativeEmail}
                  </a>
                  <CopyButton value={facultyData.contacts.alternativeEmail} />
                </div>
              </div>

              {/* Phone */}
              <div style={{ padding: '18px 0', borderBottom: '1px solid var(--mist)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Phone size={14} style={{ color: 'var(--cobalt)' }} aria-hidden="true" />
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--steel)' }}>
                    Mobile
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <a
                    href={`tel:${facultyData.contacts.phone.replace(/\s/g, '')}`}
                    style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--charcoal)', textDecoration: 'none' }}
                  >
                    {facultyData.contacts.phone}
                  </a>
                  <CopyButton value={facultyData.contacts.phone} />
                </div>
              </div>

              {/* Address */}
              <div style={{ padding: '18px 0', borderBottom: '1px solid var(--mist)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <MapPin size={14} style={{ color: 'var(--cobalt)' }} aria-hidden="true" />
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--steel)' }}>
                    Department Office
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--body-grey)', lineHeight: 1.6 }}>
                  {facultyData.contacts.office}
                </p>
              </div>

              {/* Office hours */}
              <div style={{ padding: '18px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <Clock size={14} style={{ color: 'var(--cobalt)' }} aria-hidden="true" />
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--steel)' }}>
                    Office Hours
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--body-grey)', lineHeight: 1.6 }}>
                  {facultyData.contacts.officeHours}
                </p>
              </div>
            </div>

            {/* Academic profiles */}
            <div style={{ marginTop: '32px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--steel)', marginBottom: '12px' }}>
                Academic &amp; Scholarly Profiles
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {facultyData.contacts.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.84rem',
                      color: 'var(--cobalt)',
                      textDecoration: 'none',
                      fontWeight: 500,
                      padding: '8px 0',
                      borderBottom: '1px solid var(--mist)',
                    }}
                  >
                    <ExternalLink size={12} aria-hidden="true" />
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Contact form */}
          <div>
            <div className="contact-form-wrap">
              <div style={{ marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid var(--mist)' }}>
                <p className="t-eyebrow t-eyebrow--muted" style={{ marginBottom: '6px' }}>Academic Correspondence Form</p>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--charcoal)' }}>
                  Send Dr. Miah a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label htmlFor="contact-name" className="form-label">Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-email" className="form-label">Email Address *</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="your@email.ac.bd"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-institution" className="form-label">Institution or Organisation</label>
                    <input
                      id="contact-institution"
                      name="institution"
                      type="text"
                      autoComplete="organization"
                      placeholder="University, research institute, or organisation name"
                      value={formData.institution}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-subject" className="form-label">Nature of Inquiry *</label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="" disabled>Select the nature of your inquiry</option>
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-message" className="form-label">Your Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Briefly describe your research interests, inquiry, or collaboration proposal..."
                      value={formData.message}
                      onChange={handleChange}
                      className="form-textarea"
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                    <p style={{ fontSize: '0.76rem', color: 'var(--body-grey)' }}>
                      Clicking Send will open your email app with this message pre-filled.
                    </p>
                    <button type="submit" className="btn btn-primary btn-lg">
                      <Send size={15} aria-hidden="true" />
                      Open Email App
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          ACADEMIC PROFILES BANNER
          ==================================================================== */}
      <section className="section section--dark" aria-labelledby="profiles-heading">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <p className="t-eyebrow t-eyebrow--chalk">Academic Network</p>
              <h2 id="profiles-heading" style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400, color: 'var(--chalk)', letterSpacing: '-0.018em' }}>
                Find Dr. Miah's work across scholarly platforms.
              </h2>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {facultyData.contacts.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`${s.name} profile (opens in new tab)`}
                >
                  <ExternalLink size={11} aria-hidden="true" />
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
