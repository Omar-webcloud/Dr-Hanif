'use client'

import { useState } from 'react'
import Link from 'next/link'
import { facultyData } from '@/lib/data'
import {
  ArrowRight, GraduationCap, Compass, Mail,
  CheckCircle2, ChevronDown,
} from 'lucide-react'

export default function AboutPage() {
  const [themeFilter, setThemeFilter] = useState('All')

  const themeCategories = [
    'All', 'Human Rights', 'Gender', 'Environment', 'Disaster Studies',
    'Development', 'Ecology', 'Social Order', 'Education',
    'Rural Sociology', 'Culture',
  ]

  const filtered = themeFilter === 'All'
    ? facultyData.researchThemes
    : facultyData.researchThemes.filter((t) => t.category === themeFilter)

  return (
    <div>
      {/* ====================================================================
          PAGE HERO
          ==================================================================== */}
      <section className="profile-hero-section" aria-labelledby="about-page-heading">
        <div className="container">
          <p className="t-eyebrow">Academic Profile & Journey</p>
          <h1 id="about-page-heading" className="t-h1" style={{ maxWidth: '20ch', marginBottom: '20px' }}>
            About Dr. Hanif Miah
          </h1>
          <p className="t-lead reading-width">
            Associate Professor of Sociology at the University of Chittagong, with two decades of ethnographic research, community-based fieldwork, and higher education teaching in Bangladesh.
          </p>

          {/* Quick jump anchors */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '28px' }}>
            {[
              ['Biography', '#biography'],
              ['Education', '#education'],
              ['Methodologies', '#methodologies'],
              ['Research Themes', '#themes'],
              ['Courses Taught', '#teaching'],
              ['Languages', '#languages'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  color: 'var(--body-grey)',
                  border: '1px solid var(--mist)',
                  padding: '5px 12px',
                  borderRadius: 'var(--r-xs)',
                  textDecoration: 'none',
                  transition: 'all 140ms ease',
                  background: 'var(--white)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--cobalt)'
                  el.style.color = 'var(--cobalt)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--mist)'
                  el.style.color = 'var(--body-grey)'
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          BIOGRAPHY & PROFILE CARD
          ==================================================================== */}
      <section className="section section--white" id="biography" aria-labelledby="bio-heading">
        <div className="container">
          <div className="about-bio-grid">
            {/* Bio */}
            <div>
              <p className="t-eyebrow">Biographical Narrative</p>
              <h2 id="bio-heading" className="t-h2" style={{ marginBottom: '28px', maxWidth: '20ch' }}>
                Scholarship rooted in<br />community realities.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '36px' }}>
                {facultyData.fullBio.map((para, i) => (
                  <p key={i} className="t-body reading-width">{para}</p>
                ))}
              </div>

              <Link href="/contact" className="btn btn-primary">
                <Mail size={15} aria-hidden="true" />
                Contact Dr. Miah
              </Link>
            </div>

            {/* Profile card */}
            <div className="about-card">
              {/* Portrait */}
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--mist)' }}>
                <img
                  src={facultyData.portraitUrl}
                  alt={`${facultyData.name}, ${facultyData.title}`}
                  style={{ width: 72, height: 72, objectFit: 'cover', objectPosition: 'center top', flexShrink: 0, border: '1px solid var(--mist)' }}
                />
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', color: 'var(--charcoal)', lineHeight: 1.2, marginBottom: '4px' }}>
                    {facultyData.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--cobalt)', fontWeight: 600 }}>{facultyData.title}</div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--steel)' }}>{facultyData.institution}</div>
                </div>
              </div>

              {/* Fields */}
              {[
                {
                  label: 'Current Position',
                  value: 'Associate Professor, Department of Sociology, University of Chittagong',
                },
                {
                  label: 'Administrative Experience',
                  value: `${facultyData.administrativeRole.role} · ${facultyData.administrativeRole.institution} (${facultyData.administrativeRole.tenure})`,
                },
                {
                  label: 'Research Specialisation',
                  value: facultyData.coreFocus.join(' · '),
                },
                {
                  label: 'Methodological Approach',
                  value: 'Ethnography, PRA, FGD, In-depth Interviews, Baseline Surveys',
                },
              ].map(({ label, value }) => (
                <div key={label} style={{ marginBottom: '18px' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cobalt)', marginBottom: '4px' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--body-grey)', lineHeight: 1.5 }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          EDUCATION TIMELINE
          ==================================================================== */}
      <section className="section section--mist" id="education" aria-labelledby="edu-heading">
        <div className="container">
          <p className="t-eyebrow">Academic Credentials</p>
          <h2 id="edu-heading" className="t-h2" style={{ maxWidth: '28ch', marginBottom: '48px' }}>
            Academic Journey & Degrees
          </h2>

          <div className="split-grid-2">
            {/* Timeline */}
            <div className="edu-timeline">
              {facultyData.education.map((edu, i) => (
                <div key={i} className="edu-item">
                  <div className="edu-dot" />
                  <div className="edu-period">{edu.period}</div>
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-inst">{edu.institution}</div>
                  <div className="edu-location">{edu.location}</div>
                  {edu.researchTitle && (
                    <blockquote className="edu-thesis">
                      "{edu.researchTitle}"
                      {edu.specialisation && (
                        <div style={{ marginTop: '6px', fontSize: '0.76rem', color: 'var(--steel)', fontStyle: 'normal' }}>
                          Specialisation: {edu.specialisation}
                        </div>
                      )}
                    </blockquote>
                  )}
                  {edu.details && <p className="edu-details">{edu.details}</p>}
                  {edu.field && <p className="edu-details">Stream: {edu.field}</p>}
                </div>
              ))}
            </div>

            {/* Academic record summary */}
            <div>
              <p className="t-eyebrow t-eyebrow--muted" style={{ marginBottom: '20px' }}>
                Academic Record Summary
              </p>
              <div className="about-credentials-card">
                <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--cobalt)', marginBottom: '20px' }}>
                  Verified Academic Credentials
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.86rem' }}>
                  {[
                    'Ph.D. in Sociology, Central China Normal University (2015 to 2019)',
                    'M.S.S. in Sociology, University of Chittagong',
                    'B.S.S. (Honours) in Sociology, University of Chittagong',
                    'Specialisation: Gender, Baul Culture, and Participatory Methodologies',
                    'Former Assistant Proctor, University of Chittagong (2019 to 2020)',
                    '9+ Undergraduate and Graduate Sociology Courses Taught',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: 'rgba(247,247,242,0.8)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--cobalt)', flexShrink: 0, marginTop: '1px' }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/contact" className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Request Academic Dossier
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FIELD METHODOLOGIES
          ==================================================================== */}
      <section className="section section--white" id="methodologies" aria-labelledby="methods-heading">
        <div className="container">
          <div className="methods-split-grid">
            <div className="methods-lead-col">
              <p className="t-eyebrow">Research Expertise</p>
              <h2 id="methods-heading" className="t-h2" style={{ marginBottom: '20px' }}>
                Qualitative &amp; Participatory<br />Methodologies
              </h2>
              <p className="t-body reading-width">
                Extensive field research experience across rural communities, wetland zones, and vulnerable groups in Bangladesh using a range of qualitative and participatory approaches that prioritize community voice.
              </p>
            </div>

            <div className="methods-list-col">
              {facultyData.researchMethods.map((m, i) => (
                <div key={m.name} className="about-method" style={{ borderTop: i === 0 ? '1px solid var(--mist)' : 'none' }}>
                  <span className="about-method-num">0{i + 1}</span>
                  <div>
                    <div className="about-method-name">{m.name}</div>
                    <div className="about-method-desc">{m.description}</div>
                    <div
                      style={{
                        marginTop: '6px',
                        fontSize: '0.74rem',
                        color: 'var(--steel)',
                        fontStyle: 'italic',
                      }}
                    >
                      Applied to: {m.applications}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          14 RESEARCH THEMES (Filterable)
          ==================================================================== */}
      <section className="section section--mist" id="themes" aria-labelledby="themes-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="t-eyebrow">Empirical Scope</p>
              <h2 id="themes-heading" className="t-h2" style={{ marginBottom: '0' }}>
                14 Core Research Themes
              </h2>
            </div>
          </div>

          {/* Filter pills */}
          <div
            role="group"
            aria-label="Filter research themes by category"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '32px' }}
          >
            {themeCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setThemeFilter(cat)}
                aria-pressed={themeFilter === cat}
                style={{
                  padding: '5px 14px',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  fontFamily: 'var(--sans)',
                  background: themeFilter === cat ? 'var(--cobalt)' : 'var(--white)',
                  color: themeFilter === cat ? 'var(--white)' : 'var(--body-grey)',
                  border: '1px solid',
                  borderColor: themeFilter === cat ? 'var(--cobalt)' : 'var(--mist)',
                  borderRadius: 'var(--r-xs)',
                  cursor: 'pointer',
                  transition: 'all 140ms ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Themes grid */}
          <div className="theme-list" role="list" aria-live="polite" aria-label={`${filtered.length} themes shown`}>
            {filtered.map((theme, i) => (
              <div key={theme.name} className="theme-item" role="listitem">
                <span className="theme-item-dot" aria-hidden="true" />
                <div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--charcoal)', fontWeight: 500 }}>
                    {theme.name}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--cobalt)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '2px' }}>
                    {theme.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          TEACHING: All 9 courses with expandable details
          ==================================================================== */}
      <section className="section section--white" id="teaching" aria-labelledby="teaching-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="t-eyebrow">Higher Education</p>
              <h2 id="teaching-heading" className="t-h2" style={{ marginBottom: '0' }}>
                University Courses Taught
              </h2>
            </div>
            <p className="t-meta" style={{ maxWidth: '30ch' }}>
              Department of Sociology, University of Chittagong (Undergraduate to Graduate levels)
            </p>
          </div>

          <div className="courses-grid" role="list" aria-label="Full course catalogue">
            {facultyData.courses.map((course) => (
              <div key={course.code} className="course-item" role="listitem">
                <div className="course-code">{course.code}</div>
                <div className="course-level">{course.level}</div>
                <h3 className="course-title">{course.name}</h3>
                <p className="course-desc">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          LANGUAGES
          ==================================================================== */}
      <section className="section section--mist" id="languages" aria-labelledby="lang-heading">
        <div className="container">
          <p className="t-eyebrow">Multilingual Communication</p>
          <h2 id="lang-heading" className="t-h2" style={{ marginBottom: '36px' }}>
            Languages
          </h2>

          <div className="lang-grid" role="list" aria-label="Language proficiencies">
            {facultyData.languages.map((lang) => (
              <div key={lang.language} className="lang-item" role="listitem">
                <div className="lang-name">{lang.language}</div>
                <div className="lang-proficiency">{lang.proficiency}</div>
                <div className="lang-meter" role="img" aria-label={`Proficiency level ${lang.level} out of 5`}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className={`lang-pip${n <= lang.level ? ' filled' : ''}`} />
                  ))}
                </div>
                <p className="lang-note">{lang.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
