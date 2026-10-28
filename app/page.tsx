'use client'

import {
  Button,
  Column,
  Grid,
  Tag,
  Tile,
} from '@carbon/react'
import {
  ArrowRight,
  Book,
  Education,
  Email,
  Location,
  UserMultiple,
} from '@carbon/icons-react'

const portraitUrl =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png'

const researchAreas = [
  ['Gender & Development', 'Gender relations, social inequality, and the lived experiences of communities.'],
  ['Gender & Culture', 'Bengal culture, Baul traditions, and the social dimensions of cultural practice.'],
  ['Research Methodology', 'Qualitative, ethnographic, participatory, and community-based approaches.'],
  ['Sociology of Development', 'The social, economic, and cultural dimensions of development in Bangladesh.'],
  ['Migration', 'Migration and its relationship with social and economic transformation.'],
  ['Bengal Culture & Folk Music', 'Bengali folk culture, music, Baul traditions, and their social dimensions.'],
]

const courses = [
  'Introduction to Sociology',
  'Social Statistics',
  'Bangladesh Studies',
  'Bangladesh: Economy, Society and Culture',
  'Gender Relations and Feminism',
  'Background of Sociological Theory',
  'Modern Sociological Theory',
  'Comparative Social Structure and Development',
  'Rural and Urban Sociology',
]

const publications = [
  {
    title: 'প্রজন্ম ও প্রজন্মান্তরে বাংলাদেশের বাউলঃ তত্ত্ব ও বাস্তবতা',
    detail: 'ইতিহাস প্রবন্ধমালা · ইতিহাস একাডেমী, ঢাকা · 2018 · Pages 255–262',
  },
  {
    title: 'বিশ্বায়ন ও বাংলাদেশের পরিবর্তনশীল লোকসংস্কৃতিঃ একটি তাত্ত্বিক ও প্রয়োগিক বিশ্লেষণ',
    detail: 'Hanif Miah & Shamima Sultana · সন্ধানঃ সাহিত্য-সমাজ-সংস্কৃতি বিষয়ক গবেষণা পত্রিকা · 2017 · Pages 29–51',
  },
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default function Page() {
  return (
    <main id="main-content" className="page-main profile-page">
      <section className="profile-hero" aria-labelledby="profile-title">
        <Grid className="profile-hero__grid">
          <Column sm={4} md={3} lg={4}>
            <div className="profile-portrait-wrap">
              <img className="profile-portrait" src={portraitUrl} alt="Dr. Hanif Miah, Associate Professor of Sociology" />
            </div>
          </Column>
          <Column sm={4} md={5} lg={8}>
            <div className="profile-hero__copy">
              <p className="eyebrow">Faculty profile · University of Chittagong</p>
              <h1 id="profile-title">Dr. Hanif Miah</h1>
              <p className="profile-hero__role">Associate Professor of Sociology</p>
              <p className="profile-hero__lede">Exploring gender, culture, development, and social change in Bangladesh through engaged, community-centered research.</p>
              <div className="profile-actions">
                <Button href="#research" renderIcon={ArrowRight}>Explore research</Button>
                <Button href="#contact" kind="tertiary" renderIcon={Email}>Get in touch</Button>
              </div>
            </div>
          </Column>
        </Grid>
      </section>

      <section className="intro-section" aria-labelledby="about-title">
        <Grid>
          <Column sm={4} md={2} lg={4}>
            <p className="section-kicker">01 / About</p>
          </Column>
          <Column sm={4} md={6} lg={8}>
            <h2 id="about-title" className="intro-title">Understanding society through culture, participation, and lived experience.</h2>
            <p className="intro-copy">Dr. Hanif Miah is an Associate Professor in the Department of Sociology at the University of Chittagong, Bangladesh. His academic and research experience focuses on the socio-economic and cultural dimensions of Bangladeshi society, with particular interests in gender, culture, development, migration, and research methodology.</p>
            <p className="intro-copy">His work draws on holistic ethnography, Participatory Rural Appraisal, Focus Group Discussions, in-depth interviews, mapping, and baseline surveys to understand communities and support meaningful social change.</p>
          </Column>
        </Grid>
      </section>

      <section id="research" className="content-section" aria-labelledby="research-title">
        <Grid>
          <Column sm={4} md={8} lg={12}><SectionHeading eyebrow="02 / Focus areas" title="Research interests" /></Column>
          {researchAreas.map(([title, text], index) => (
            <Column key={title} sm={4} md={4} lg={4}>
              <Tile className="research-card">
                <span className="research-card__number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Tile>
            </Column>
          ))}
        </Grid>
      </section>

      <section className="band-section" aria-labelledby="expertise-title">
        <Grid>
          <Column sm={4} md={3} lg={4}><SectionHeading eyebrow="03 / Approach" title="Research expertise" /></Column>
          <Column sm={4} md={5} lg={8}>
            <div className="expertise-list" id="expertise-title">
              {['Holistic ethnographic research', 'Participatory Rural Appraisal (PRA)', 'Focus Group Discussion (FGD)', 'In-depth interview', 'Mapping & community assessment', 'Baseline survey'].map((item, index) => (
                <div className="expertise-item" key={item}><span>0{index + 1}</span><h3>{item}</h3></div>
              ))}
            </div>
          </Column>
        </Grid>
      </section>

      <section id="publications" className="content-section" aria-labelledby="publications-title">
        <Grid>
          <Column sm={4} md={3} lg={4}><SectionHeading eyebrow="04 / Scholarship" title="Selected publications" /></Column>
          <Column sm={4} md={5} lg={8}>
            <div className="publication-list" id="publications-title">
              {publications.map((publication) => <article className="publication-item" key={publication.title}><Book size={20} /><div><h3>{publication.title}</h3><p>{publication.detail}</p></div></article>)}
            </div>
            <Button kind="ghost" href="#contact" renderIcon={ArrowRight}>Discuss the research</Button>
          </Column>
        </Grid>
      </section>

      <section className="content-section courses-section" aria-labelledby="teaching-title">
        <Grid>
          <Column sm={4} md={3} lg={4}><SectionHeading eyebrow="05 / Teaching" title="Courses taught" /></Column>
          <Column sm={4} md={5} lg={8}>
            <p className="section-lede">Teaching sociology as a way to read the world with curiosity, evidence, and empathy.</p>
            <div className="tag-row">{courses.map((course) => <Tag key={course} type="cool-gray">{course}</Tag>)}</div>
          </Column>
        </Grid>
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <Grid>
          <Column sm={4} md={3} lg={4}><SectionHeading eyebrow="06 / Academic journey" title="Education & experience" /></Column>
          <Column sm={4} md={5} lg={8}>
            <div className="journey-list" id="journey-title">
              <article><Education size={24} /><div><p className="journey-year">2015—2019</p><h3>Ph.D. in Sociology</h3><p>Central China Normal University · Wuhan, Hubei, China</p><small>Gender Relation in Baul Culture of Bangladesh: Reconciling Feminist Perspectives</small></div></article>
              <article><Education size={24} /><div><p className="journey-year">1999—2004</p><h3>M.S.S. & B.S.S. (Honours) in Sociology</h3><p>University of Chittagong · Chittagong, Bangladesh</p></div></article>
              <article><UserMultiple size={24} /><div><p className="journey-year">July 2019—June 2020</p><h3>Assistant Proctor</h3><p>University of Chittagong</p></div></article>
            </div>
          </Column>
        </Grid>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <Grid>
          <Column sm={4} md={8} lg={8}><p className="section-kicker">07 / Connect</p><h2 id="contact-title">Let&apos;s build knowledge together.</h2><p>For academic communication, teaching, scholarly discussion, and research collaboration.</p></Column>
          <Column sm={4} md={8} lg={4}><div className="contact-card"><p><Email size={20} /> miah.hanif@cu.ac.bd</p><p><Location size={20} /> Department of Sociology, University of Chittagong</p><Button href="mailto:miah.hanif@cu.ac.bd" renderIcon={ArrowRight}>Send an email</Button></div></Column>
        </Grid>
      </section>

      <footer className="profile-footer"><Grid><Column sm={4} md={8} lg={8}><strong>Dr. Hanif Miah</strong><span>Associate Professor of Sociology · University of Chittagong</span></Column><Column sm={4} md={8} lg={4}><span className="footer-meta">© {new Date().getFullYear()} Dr. Hanif Miah</span></Column></Grid></footer>
    </main>
  )
}
