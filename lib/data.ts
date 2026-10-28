export interface ResearchInterest {
  id: string
  title: string
  description: string
  category: string
  iconName: string
}

export interface Publication {
  id: string
  title: string
  author: string
  venue: string
  publisher?: string
  location: string
  year: number
  pages: string
  type: 'journal' | 'book-chapter' | 'conference'
  language: 'Bangla' | 'English'
  abstract?: string
  link?: string
}

export interface ConferenceItem {
  id: string
  title: string
  author: string
  event: string
  organizerOrVenue: string
  location: string
  year: number
  pages?: string
  scope: 'International' | 'Regional'
}

export interface EducationEntry {
  degree: string
  institution: string
  location: string
  period: string
  researchTitle?: string
  specialisation?: string
  field?: string
  details?: string
}

export interface ResearchMethod {
  name: string
  description: string
  applications: string
}

export interface LanguageSkill {
  language: string
  proficiency: string
  level: number
  note: string
}

export const facultyData = {
  name: 'Dr. Hanif Miah',
  title: 'Associate Professor of Sociology',
  department: 'Department of Sociology',
  institution: 'University of Chittagong',
  location: 'Chittagong-4331, Bangladesh',
  portraitUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hanif%20miah.jpg-UatRj82x9LnzJVh1wumtvGEyCXvb3N.png',
  coreFocus: [
    'Sociology',
    'Gender & Culture',
    'Development',
    'Research Methodology',
    'Bangladesh Studies',
  ],
  bioExcerpt:
    'Dr. Hanif Miah is an Associate Professor in the Department of Sociology at the University of Chittagong, Bangladesh. His teaching and field research focus on the everyday cultural and economic realities of Bangladeshi society, with a warm dedication to understanding gender relations, Baul musical traditions, rural livelihoods, and community resilience.',
  fullBio: [
    'Dr. Hanif Miah serves as an Associate Professor in the Department of Sociology at the University of Chittagong, Bangladesh. Over nearly two decades of teaching and field research, his work has centered on the lived experiences of diverse communities across Bangladesh, exploring how culture, gender relations, economic change, and migration shape ordinary lives.',
    'His approach combines extended ethnographic fieldwork with participatory community methods, including Participatory Rural Appraisal (PRA), Focus Group Discussions (FGD), in-depth oral interviews, community mapping, and baseline surveys. Rather than treating communities as distant subjects, he works alongside local people to understand their challenges from their own perspective.',
    'His research extends across many vital social questions: human rights and vulnerable groups, climate adaptation and disaster management, rural risk reduction, livelihoods, wetland management, local schools, cultural traditions, security, and rural development.',
  ],
  contacts: {
    primaryEmail: 'miah.hanif@cu.ac.bd',
    alternativeEmail: 'miahhanif@yahoo.com',
    phone: '+880 1712-000000',
    office: 'Department of Sociology, Faculty of Social Sciences, University of Chittagong, Chittagong-4331, Bangladesh',
    officeHours: 'Sunday to Thursday: 10:00 AM to 3:30 PM (BST)',
    socials: [
      { name: 'ResearchGate', url: 'https://www.researchgate.net/profile/Hanif-Miah-2', icon: 'BookOpen' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dr-hanif-miah-8a808435/', icon: 'Linkedin' },
      { name: 'Facebook', url: 'https://www.facebook.com/miahhanif/', icon: 'Facebook' },
    ],

  },
  administrativeRole: {
    role: 'Assistant Proctor',
    institution: 'University of Chittagong',
    tenure: 'July 2019 to June 2020',
    description: 'Supported university campus administration, student welfare, pastoral care, and peaceful conflict resolution across campus residential halls.',
  },
  researchInterests: [
    {
      id: 'gender-dev',
      title: 'Gender & Development',
      description: 'Exploring how gender relations, social equity, and development initiatives influence the daily lives of women and families in rural Bangladesh.',
      category: 'Social Equity',
      iconName: 'Users',
    },
    {
      id: 'gender-culture',
      title: 'Gender & Culture',
      description: 'Looking into gender roles within local cultural contexts, with special focus on Bengal folk traditions and Baul spiritual communities.',
      category: 'Cultural Studies',
      iconName: 'Sparkles',
    },
    {
      id: 'research-methods',
      title: 'Research Methodology',
      description: 'Applying qualitative, ethnographic, and participatory research tools that give voice to vulnerable, rural, and grassroots groups.',
      category: 'Methodology',
      iconName: 'Compass',
    },
    {
      id: 'soc-dev',
      title: 'Sociology of Development',
      description: 'Studying how development programs, economic shifts, and community initiatives impact social structures in modern Bangladesh.',
      category: 'Development',
      iconName: 'TrendingUp',
    },
    {
      id: 'migration',
      title: 'Migration',
      description: 'Studying how internal and international migration transforms family life, village economies, and social mobility.',
      category: 'Demography',
      iconName: 'PlaneTakeoff',
    },
    {
      id: 'bengal-folk',
      title: 'Bengal Culture & Folk Music',
      description: 'Documenting Bengali folk philosophy, Baul songs, oral heritage, and their social relevance in an increasingly connected world.',
      category: 'Folk Heritage',
      iconName: 'Music',
    },
  ] as ResearchInterest[],

  researchMethods: [
    {
      name: 'Holistic Ethnographic Research',
      description: 'Living alongside and spending sustained time with communities to observe, listen, and understand their social and cultural environment in depth.',
      applications: 'Baul communities, village settlements, and cultural practitioner circles.',
    },
    {
      name: 'Participatory Rural Appraisal (PRA)',
      description: 'Enabling local community members to map their own resources, identify shared vulnerabilities, and prioritize their own development needs.',
      applications: 'Village planning, disaster resilience, and local water and wetland management.',
    },
    {
      name: 'Focus Group Discussion (FGD)',
      description: 'Bringing community members together for open, guided discussions to explore collective viewpoints, social customs, and shared challenges.',
      applications: 'Women groups, community elders, and local farmers.',
    },
    {
      name: 'In-depth Interview',
      description: 'Conducting patient, conversational one-on-one interviews that allow individuals to share their personal life stories and perspectives.',
      applications: 'Oral histories, cultural practitioners, and migrant households.',
    },
    {
      name: 'Mapping & Community Assessment',
      description: 'Working with villagers to create visual community maps of local resources, risks, public spaces, and social boundaries.',
      applications: 'Flood-prone riverine areas and peri-urban settlements.',
    },
    {
      name: 'Baseline Survey',
      description: 'Carrying out thorough surveys to build an accurate picture of socio-economic conditions before and after development initiatives.',
      applications: 'Development program evaluation, education access, and livelihoods assessment.',
    },
  ] as ResearchMethod[],

  researchThemes: [
    { name: 'Human Rights and Vulnerable Communities', category: 'Human Rights' },
    { name: 'Gender and Development', category: 'Gender' },
    { name: 'Climate Change and Adaptation', category: 'Environment' },
    { name: 'Disaster Preparedness and Management', category: 'Disaster Studies' },
    { name: 'Community Risk Assessment', category: 'Risk & Safety' },
    { name: 'Disaster Risk Reduction', category: 'Disaster Studies' },
    { name: 'Livelihoods', category: 'Development' },
    { name: 'Wetland and Natural Resource Management', category: 'Ecology' },
    { name: 'Police, Crime and Security', category: 'Social Order' },
    { name: 'Education', category: 'Education' },
    { name: 'Rural Communities and Farm Families', category: 'Rural Sociology' },
    { name: 'Economic Investment', category: 'Economy' },
    { name: 'Media and Culture', category: 'Culture' },
    { name: 'Community Development', category: 'Development' },
  ],

  publications: [
    {
      id: 'pub-1',
      title: 'প্রজন্ম ও প্রজন্মান্তরে বাংলাদেশের বাউলঃ তত্ত্ব ও বাস্তবতা',
      author: 'Hanif Miah',
      venue: 'ইতিহাস প্রবন্ধমালা',
      publisher: 'ইতিহাস একাডেমী, ঢাকা',
      location: 'Dhaka, Bangladesh',
      year: 2018,
      pages: '255-262',
      type: 'book-chapter',
      language: 'Bangla',
      abstract: 'A sociological study exploring how Baul spiritual traditions in Bangladesh transition across generations, contrasting theoretical literature with actual field observations.',
    },
    {
      id: 'pub-2',
      title: 'বিশ্বায়ন ও বাংলাদেশের পরিবর্তনশীল লোকসংস্কৃতিঃ একটি তাত্ত্বিক ও প্রয়োগিক বিশ্লেষণ',
      author: 'Hanif Miah & Shamima Sultana',
      venue: 'সন্ধানঃ সাহিত্য-সমাজ-সংস্কৃতি বিষয়ক গবেষণা পত্রিকা',
      publisher: 'গৌরী পাবলিশিং হাউস',
      location: 'Kolkata, India',
      year: 2017,
      pages: '29-51',
      type: 'journal',
      language: 'Bangla',
      abstract: 'An insightful analysis examining how contemporary globalization influences evolving folk arts, oral traditions, and community life in Bangladesh.',
    },
  ] as Publication[],

  conferences: [
    {
      id: 'conf-1',
      title: 'Gender Relation in Baul Culture of Bangladesh: Reconciling Feminist Perspective',
      author: 'Hanif Miah',
      event: 'Locating Women in the Folk',
      organizerOrVenue: 'Sussex Traditions',
      location: 'London, United Kingdom',
      year: 2020,
      scope: 'International',
    },
    {
      id: 'conf-2',
      title: 'বাংলাদেশের সুফিবাদী বাউলতত্ত্বে নারীর অবস্থান',
      author: 'Hanif Miah & Shamima Sultana',
      event: 'বাংলা ও সিন্ধি সাহিত্যে সুফি প্রভাব',
      organizerOrVenue: 'Gutenberg',
      location: 'Kolkata, India',
      year: 2019,
      pages: '135-161',
      scope: 'International',
    },
    {
      id: 'conf-3',
      title: 'Status of Women in Baul Sadhana: A Social Aspect',
      author: 'Hanif Miah',
      event: '4th International Congress of Bengal Studies',
      organizerOrVenue: 'Tokyo University of Foreign Studies / Bangabidya International Journal of Bengal Studies',
      location: 'Tokyo, Japan',
      year: 2018,
      pages: '349-357',
      scope: 'International',
    },
  ] as ConferenceItem[],

  courses: [
    { code: 'SOC-101', name: 'Introduction to Sociology', level: 'Undergraduate', description: 'Core sociological ideas, social institutions, inequality, and ways of understanding human group behavior.' },
    { code: 'SOC-203', name: 'Social Statistics', level: 'Undergraduate', description: 'Practical quantitative methods, data collection, and statistical tools used to study social questions.' },
    { code: 'SOC-205', name: 'Bangladesh Studies', level: 'Undergraduate', description: 'The historical journey, social movements, and cultural foundations of modern Bangladesh.' },
    { code: 'SOC-301', name: 'Bangladesh: Economy, Society and Culture', level: 'Undergraduate', description: 'How rural agriculture, modern industries, and cultural values interact in contemporary Bangladesh.' },
    { code: 'SOC-309', name: 'Gender Relations and Feminism', level: 'Advanced Undergraduate', description: 'Feminist perspectives, changing gender roles, family dynamics, and social justice.' },
    { code: 'SOC-311', name: 'Background of Sociological Theory', level: 'Advanced Undergraduate', description: 'Foundational social theories and the ideas of classical thinkers who shaped the discipline.' },
    { code: 'SOC-401', name: 'Modern Sociological Theory', level: 'Graduate', description: 'Contemporary social theories, critical perspectives, and current debates in sociological thought.' },
    { code: 'SOC-405', name: 'Comparative Social Structure and Development', level: 'Graduate', description: 'Comparing development pathways, social inequalities, and community transformations across developing societies.' },
    { code: 'SOC-412', name: 'Rural and Urban Sociology', level: 'Graduate', description: 'Village transitions, city growth, rural to urban migration, and changing community relationships.' },
  ],

  education: [
    {
      degree: 'Ph.D. in Sociology',
      institution: 'Central China Normal University',
      location: 'Wuhan, Hubei, China',
      period: '2015 to 2019',
      researchTitle: 'Gender Relation in Baul Culture of Bangladesh: Reconciling Feminist Perspectives',
      specialisation: 'Gender and Culture',
      details: 'Conducted field research examining gender harmony, women practitioners, and social philosophy within Baul communities in Bangladesh.',
    },
    {
      degree: 'M.S.S. in Sociology',
      institution: 'University of Chittagong',
      location: 'Chittagong, Bangladesh',
      period: '2003 to 2004',
      specialisation: 'Sociology & Social Research',
      details: 'Postgraduate studies focusing on social change, field methodology, and community development.',
    },
    {
      degree: 'B.S.S. (Honours) in Sociology',
      institution: 'University of Chittagong',
      location: 'Chittagong, Bangladesh',
      period: '1999 to 2003',
      specialisation: 'Sociology',
      details: 'Four-year degree in social theory, research methods, social statistics, and rural sociology.',
    },
    {
      degree: 'Higher Secondary Certificate (H.S.C.)',
      institution: 'Govt. Titumir College',
      location: 'Dhaka, Bangladesh',
      period: '1996 to 1998',
      field: 'Science',
    },
    {
      degree: 'Secondary School Certificate (S.S.C.)',
      institution: 'Tarosree K.N. Institution',
      location: 'Manikganj, Bangladesh',
      period: '1992 to 1996',
      field: 'Science',
    },
  ] as EducationEntry[],

  languages: [
    {
      language: 'Bangla',
      proficiency: 'Full Professional Proficiency',
      level: 5,
      note: 'Native language; used for teaching, field ethnography, and publications.',
    },
    {
      language: 'English',
      proficiency: 'Full Professional Proficiency',
      level: 5,
      note: 'Used for international conferences, academic publications, and university teaching.',
    },
    {
      language: 'Hindi',
      proficiency: 'Elementary Proficiency',
      level: 2,
      note: 'Conversational understanding and regional cultural communication.',
    },
    {
      language: 'Chinese',
      proficiency: 'Elementary Proficiency',
      level: 2,
      note: 'Learned during four years of doctoral studies in Wuhan, China.',
    },
  ] as LanguageSkill[],
}
