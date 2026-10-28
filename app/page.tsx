'use client'

import Link from 'next/link'
import { facultyData } from '@/lib/data'
import {
  ArrowRight, BookOpen, GraduationCap, Mail,
  Users, Sparkles, Compass, TrendingUp, PlaneTakeoff, Music,
} from 'lucide-react'


/* Map icon name strings to components */
const iconMap: Record<string, React.ReactNode> = {
  Users:      <Users      size={18} aria-hidden="true" />,
  Sparkles:   <Sparkles   size={18} aria-hidden="true" />,
  Compass:    <Compass    size={18} aria-hidden="true" />,
  TrendingUp: <TrendingUp size={18} aria-hidden="true" />,
  PlaneTakeoff: <PlaneTakeoff size={18} aria-hidden="true" />,
  Music:      <Music      size={18} aria-hidden="true" />,
}

export default function HomePage() {
  return (
    <div>
      {/* ====================================================================
          HERO
          ==================================================================== */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-grid">
            {/* Left: text */}
            <div>
              <p className="hero-affiliation" aria-label="Academic affiliation">
                Faculty of Social Sciences · University of Chittagong, Bangladesh
              </p>

              <h1 id="hero-heading" className="hero-name">
                Dr. Hanif<br />
                <em>Miah</em>
              </h1>

              <p className="hero-title">{facultyData.title}</p>

              <p className="hero-intro">
                {facultyData.bioExcerpt}
              </p>

              {/* Research discipline tags */}
              <div className="hero-tags" aria-label="Research disciplines">
                {facultyData.coreFocus.map((f) => (
                  <span key={f} className="hero-tag">{f}</span>
                ))}
              </div>

              {/* CTAs */}
              <div className="hero-actions">
                <a href="#research" className="btn btn-primary">
                  View Research
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
                <a href="#publications" className="btn btn-outline">
                  View Publications
                </a>
                <Link href="/about" className="btn btn-ghost">
                  Academic Profile
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  <Mail size={14} aria-hidden="true" />
                  Contact
                </Link>
              </div>
            </div>

            {/* Right: portrait */}
            <div className="hero-portrait-col">
              <div className="hero-portrait-wrap">
                <img
                  src={facultyData.portraitUrl}
                  alt="Dr. Hanif Miah, Associate Professor of Sociology at the University of Chittagong, Bangladesh"
                  className="hero-portrait-img"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="hero-portrait-caption">
                  <span className="hero-portrait-label">
                    Associate Professor · Dept. of Sociology
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      color: 'var(--steel)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    CU, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic highlights strip */}
          <div className="hero-strip" aria-label="Academic credentials at a glance">
            <div className="hero-stat">
              <div className="hero-stat-value">Ph.D.</div>
              <div className="hero-stat-label">Central China Normal University · 2019</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">20+ Yrs</div>
              <div className="hero-stat-label">Teaching & Field Research Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">9+</div>
              <div className="hero-stat-label">University Courses Across 3 Degree Levels</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">14</div>
              <div className="hero-stat-label">Research Themes · 3 International Conferences</div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          ABOUT INTRODUCTION
          ==================================================================== */}
      <section className="section section--white" id="about" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-header">
            <p className="t-eyebrow">Academic Biography</p>
            <h2 id="about-heading" className="t-h2" style={{ maxWidth: '46ch', marginBottom: '0' }}>
              Understanding society through culture,<br />
              participation, and lived experience.
            </h2>
          </div>

          <div className="about-grid">
            {/* Main biography */}
            <div>
              {facultyData.fullBio.map((para, i) => (
                <p
                  key={i}
                  className="t-body reading-width"
                  style={{ marginBottom: i < facultyData.fullBio.length - 1 ? '20px' : '32px' }}
                >
                  {para}
                </p>
              ))}
              <Link href="/about" className="btn btn-outline btn-sm">
                Full Academic Profile
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            {/* Vertical rule */}
            <div className="about-divider" aria-hidden="true" />

            {/* Research framework panel */}
            <div className="about-framework">
              <p className="t-eyebrow t-eyebrow--muted" style={{ marginBottom: '20px' }}>
                Fieldwork & Methodological Framework
              </p>
              {facultyData.researchMethods.map((m, i) => (
                <div key={m.name} className="about-method">
                  <span className="about-method-num">0{i + 1}</span>
                  <div>
                    <div className="about-method-name">{m.name}</div>
                    <div className="about-method-desc">{m.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          RESEARCH INTERESTS
          ==================================================================== */}
      <section className="section" id="research" aria-labelledby="research-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="t-eyebrow">Academic Inquiry</p>
              <h2 id="research-heading" className="t-h2" style={{ marginBottom: '0' }}>
                Research Interests
              </h2>
            </div>
            <Link href="/about#themes" className="btn btn-ghost btn-sm">
              All 14 Research Themes <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="research-index" role="list" aria-label="Research interest areas">
            {facultyData.researchInterests.map((interest, idx) => (
              <div key={interest.id} className="research-entry" role="listitem">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span className="research-num">0{idx + 1}</span>
                  <span className="research-cat">{interest.category}</span>
                </div>
                <div
                  style={{ color: 'var(--cobalt)', marginBottom: '10px' }}
                  aria-hidden="true"
                >
                  {iconMap[interest.iconName] ?? <Compass size={18} />}
                </div>
                <h3 className="research-entry-title">{interest.title}</h3>
                <p className="research-entry-desc">{interest.description}</p>
                <span className="research-arrow" aria-hidden="true">
                  Explore <ArrowRight size={12} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          PUBLICATIONS
          ==================================================================== */}
      <section className="section section--mist" id="publications" aria-labelledby="pub-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="t-eyebrow">Scholarship</p>
              <h2 id="pub-heading" className="t-h2" style={{ marginBottom: '0' }}>
                Publications & Conferences
              </h2>
            </div>
            <Link href="/about" className="btn btn-ghost btn-sm">
              Full Academic Record <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="split-grid-2">
            {/* Peer-reviewed */}
            <div>
              <div className="pub-section-heading">
                <BookOpen size={16} aria-hidden="true" />
                <span className="pub-section-label">Peer-Reviewed Publications</span>
              </div>

              {facultyData.publications.map((pub) => (
                <article key={pub.id} className="pub-entry">
                  <div>
                    <div className="pub-year">{pub.year}</div>
                  </div>
                  <div>
                    <div className="pub-type">
                      {pub.type === 'book-chapter' ? 'Book Chapter' : 'Journal Article'} · {pub.language}
                    </div>
                    <h3 className="pub-title">{pub.title}</h3>
                    <p className="pub-authors">{pub.author}</p>
                    <p className="pub-venue">{pub.venue}</p>
                    <p className="pub-pages">
                      {pub.publisher ? `${pub.publisher} · ` : ''}{pub.location} · pp. {pub.pages}
                    </p>
                    {pub.abstract && (
                      <p className="pub-abstract">{pub.abstract}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Conferences */}
            <div>
              <div className="pub-section-heading">
                <GraduationCap size={16} aria-hidden="true" />
                <span className="pub-section-label">Conference & Research Seminars</span>
              </div>

              {facultyData.conferences.map((conf) => (
                <article key={conf.id} className="conf-entry">
                  <div>
                    <div className="pub-year">{conf.year}</div>
                  </div>
                  <div>
                    <span className="conf-scope">{conf.scope}</span>
                    <h3 className="conf-title">{conf.title}</h3>
                    <p className="conf-event">{conf.event}</p>
                    <p className="conf-meta">
                      {conf.organizerOrVenue} · {conf.location}
                      {conf.pages ? ` · pp. ${conf.pages}` : ''}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          TEACHING HIGHLIGHTS
          ==================================================================== */}
      <section className="section section--white" id="teaching" aria-labelledby="teaching-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="t-eyebrow">Academic Instruction</p>
              <h2 id="teaching-heading" className="t-h2" style={{ marginBottom: '0' }}>
                Teaching & Curriculum
              </h2>
            </div>
            <Link href="/about#teaching" className="btn btn-ghost btn-sm">
              All 9 Courses <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="courses-grid" role="list" aria-label="University courses">
            {facultyData.courses.slice(0, 6).map((course) => (
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

    </div>
  )
}
