import { facultyData } from '@/lib/data'

export function SeoDossier() {
  const faqItems = [
    {
      q: 'Who is Dr. Hanif Miah?',
      a: 'Dr. Hanif Miah (ড. মো. হানিফ মিয়া) is an Associate Professor in the Department of Sociology at the University of Chittagong, Bangladesh. With nearly two decades of academic instruction and field ethnography, he specializes in gender and culture, Baul spiritual traditions, sociology of development, and participatory rural methodologies.',
    },
    {
      q: 'What is Dr. Hanif Miah’s academic designation and institutional affiliation?',
      a: 'Dr. Hanif Miah serves as an Associate Professor of Sociology in the Faculty of Social Sciences at the University of Chittagong (CU), located in Chittagong-4331, Bangladesh.',
    },
    {
      q: 'What is Dr. Hanif Miah’s educational background and PhD qualification?',
      a: 'Dr. Hanif Miah earned his Ph.D. in Sociology from Central China Normal University (CCNU) in Wuhan, China (2015–2019). His doctoral dissertation is titled "Gender Relation in Baul Culture of Bangladesh: Reconciling Feminist Perspectives." He also completed his M.S.S. (2003–2004) and B.S.S. (Honours, 1999–2003) in Sociology at the University of Chittagong, H.S.C. at Govt. Titumir College Dhaka, and S.S.C. at Tarosree K.N. Institution Manikganj.',
    },
    {
      q: 'What are Dr. Hanif Miah’s primary research areas and specializations?',
      a: 'His major research interests include Gender and Development, Gender and Culture, Baul musical traditions and Bengal folk heritage, Sociology of Development, Internal and International Migration, Climate Change Adaptation, Rural Risk Reduction, Livelihoods, and Wetland Management.',
    },
    {
      q: 'What research methodologies does Dr. Hanif Miah use?',
      a: 'Dr. Miah utilizes holistic ethnographic research, Participatory Rural Appraisal (PRA), Focus Group Discussions (FGD), In-depth qualitative interviews, community mapping, and baseline socioeconomic surveys.',
    },
    {
      q: 'What university courses does Dr. Hanif Miah teach at the University of Chittagong?',
      a: 'He teaches undergraduate and graduate courses including: SOC-101 Introduction to Sociology, SOC-203 Social Statistics, SOC-205 Bangladesh Studies, SOC-301 Bangladesh: Economy, Society and Culture, SOC-309 Gender Relations and Feminism, SOC-311 Background of Sociological Theory, SOC-401 Modern Sociological Theory, SOC-405 Comparative Social Structure and Development, and SOC-412 Rural and Urban Sociology.',
    },
    {
      q: 'What administrative roles has Dr. Hanif Miah held at the University of Chittagong?',
      a: 'Dr. Hanif Miah served as Assistant Proctor of the University of Chittagong from July 2019 to June 2020, assisting in campus administration, student welfare, pastoral care, and community conflict resolution.',
    },
    {
      q: 'What are Dr. Hanif Miah’s notable publications and papers?',
      a: 'Notable publications include "প্রজন্ম ও প্রজন্মান্তরে বাংলাদেশের বাউলঃ তত্ত্ব ও বাস্তবতা" (Itihash Probandhamala, Itihash Academy Dhaka, 2018), and "বিশ্বায়ন ও বাংলাদেশের পরিবর্তনশীল লোকসংস্কৃতিঃ একটি তাত্ত্বিক ও প্রয়োগিক বিশ্লেষণ" (Shandhan, Kolkata, 2017). He has presented international conference papers in London (Sussex Traditions), Kolkata (Gutenberg), and Tokyo (Tokyo University of Foreign Studies).',
    },
    {
      q: 'How can I contact Dr. Hanif Miah or propose academic collaborations?',
      a: 'Dr. Hanif Miah can be contacted via primary email at miah.hanif@cu.ac.bd or alternative email at miahhanif@yahoo.com. His office is at the Department of Sociology, Faculty of Social Sciences, University of Chittagong, Bangladesh.',
    },
    {
      q: 'ড. মো. হানিফ মিয়া কে এবং তাঁর গবেষণার বিষয় কী?',
      a: 'ড. মো. হানিফ মিয়া চট্টগ্রাম বিশ্ববিদ্যালয়ের সমাজতত্ত্ব বিভাগের একজন সহযোগী অধ্যাপক। তিনি চীনের সেন্ট্রাল চায়না নরমাল ইউনিভার্সিটি থেকে বাউল সংস্কৃতি ও জেন্ডার সম্পর্কের উপর পিএইচডি সম্পন্ন করেছেন। তিনি গ্রামীণ উন্নয়ন, লোকসংস্কৃতি, অভিবাসন ও সমাজতাত্ত্বিক পদ্ধতি বিষয়ে দীর্ঘ ২০ বছর ধরে শিক্ষকতা ও গবেষণা করছেন।',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dr. Hanif Miah - Academic Portfolio',
    alternateName: [
      'Dr. Hanif Miah Official Website',
      'Dr Hanif Miah CU',
      'ড. মো. হানিফ মিয়া ওয়েবসাইট',
    ],
    url: 'https://dr-hanif-miah.vercel.app',
  }

  return (
    <>
      {/* FAQ Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Semantic crawlable content: hidden visually for users via .sr-only, fully accessible to search engines and assistive technology */}
      <section
        className="sr-only"
        aria-label="Academic Information, Keywords, and Frequently Asked Questions for Dr. Hanif Miah"
      >
        <h2>Academic Overview &amp; Faculty Profile: Dr. Hanif Miah</h2>
        <p>
          Dr. Hanif Miah (also known as Hanif Miah, Dr. Md. Hanif Miah, Md. Hanif Miah,
          ড. মো. হানিফ মিয়া, ড. হানিফ মিয়া) is an Associate Professor in the Department
          of Sociology, Faculty of Social Sciences, University of Chittagong (CU),
          Chittagong-4331, Bangladesh.
        </p>

        <h3>Aliases, Search Terms &amp; Keywords</h3>
        <p>
          Dr Hanif Miah, Hanif Miah CU, Dr Hanif Miah Chittagong University, Dr. Md.
          Hanif Miah, Md Hanif Miah sociology, Chittagong University sociology faculty,
          ড. মো. হানিফ মিয়া, ড. হানিফ মিয়া, মো. হানিফ মিয়া সমাজতত্ত্ব, চট্টগ্রাম
          বিশ্ববিদ্যালয় শিক্ষক, বাউল সংস্কৃতি গবেষক, Gender and Culture Bangladesh,
          Baul culture sociology, Central China Normal University alumni, CCNU Wuhan
          sociology, University of Chittagong Assistant Proctor.
        </p>

        <h3>Frequently Asked Questions (FAQ)</h3>
        <dl>
          {faqItems.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '12px' }}>
              <dt>
                <strong>{item.q}</strong>
              </dt>
              <dd>{item.a}</dd>
            </div>
          ))}
        </dl>

        <h3>Educational Background</h3>
        <ul>
          {facultyData.education.map((edu, idx) => (
            <li key={idx}>
              {edu.degree} — {edu.institution}, {edu.location} ({edu.period}).{' '}
              {edu.researchTitle ? `Dissertation: ${edu.researchTitle}.` : ''}{' '}
              {edu.specialisation ? `Specialization: ${edu.specialisation}.` : ''}
            </li>
          ))}
        </ul>

        <h3>Courses Taught at University of Chittagong</h3>
        <ul>
          {facultyData.courses.map((course) => (
            <li key={course.code}>
              {course.code}: {course.name} ({course.level}) — {course.description}
            </li>
          ))}
        </ul>

        <h3>Research Themes &amp; Methodologies</h3>
        <p>
          Field methodologies: Holistic Ethnographic Research, Participatory Rural
          Appraisal (PRA), Focus Group Discussions (FGD), In-depth qualitative
          interviews, Community resource mapping, Baseline socio-economic surveys.
        </p>
        <p>
          Themes: Human Rights and Vulnerable Communities, Gender and Development,
          Climate Change Adaptation, Disaster Preparedness and Management, Community
          Risk Assessment, Livelihoods, Wetland and Natural Resource Management,
          Police and Crime, Rural Communities and Farm Families.
        </p>

        <h3>Publications and Scholarly Articles</h3>
        <ul>
          {facultyData.publications.map((pub) => (
            <li key={pub.id}>
              {pub.title} by {pub.author}. Published in {pub.venue}, {pub.publisher} (
              {pub.location}, {pub.year}, pp. {pub.pages}). {pub.abstract}
            </li>
          ))}
          {facultyData.conferences.map((conf) => (
            <li key={conf.id}>
              {conf.title} presented at {conf.event}, {conf.organizerOrVenue} (
              {conf.location}, {conf.year}).
            </li>
          ))}
        </ul>

        <h3>Official Academic Contact Details</h3>
        <p>
          Primary Email: {facultyData.contacts.primaryEmail} | Alternative Email:{' '}
          {facultyData.contacts.alternativeEmail} | Office:{' '}
          {facultyData.contacts.office} | Office Hours:{' '}
          {facultyData.contacts.officeHours}
        </p>
      </section>
    </>
  )
}
