const personal = {
  name: 'Jatin Sharma',
  initials: 'JS',
  role: 'AI/ML Engineer',
  extendedRole: 'Generative AI & Backend Systems',
  email: 'jatinbhardwajb55@gmail.com',
  resumePath: '/Jatin-Sharma-Resume.pdf',
}

export const portfolioTodos = Object.freeze({
  availability: 'TODO: Confirm public availability wording before displaying a status.',
  canonicalUrl: 'TODO: Add the production URL after deployment.',
  openGraphImage: 'TODO: Add a production social-sharing image.',
  featuredProjectRepository:
    'TODO: Add the verified repository URL for the featured project.',
  featuredProjectDemo:
    'TODO: Add a live demo only if a real, publicly available deployment exists.',
  additionalProjects:
    'TODO: Add only additional projects that can be verified from source material.',
  contactFormEndpoint:
    'TODO: Configure Formspree or another verified endpoint before enabling submission.',
})

export const portfolioData = {
  metadata: {
    title: 'Jatin Sharma | AI/ML Engineer',
    description:
      'AI/ML Engineer specializing in machine learning, Generative AI, recommendation systems, NLP, scalable backend development and cloud-based data processing.',
    canonicalUrl: null,
    openGraphImage: null,
  },

  personal,

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],

  socialLinks: [
    {
      platform: 'github',
      label: 'Jatin Sharma on GitHub',
      href: 'https://github.com/JatinSharmab',
    },
    {
      platform: 'linkedin',
      label: 'Jatin Sharma on LinkedIn',
      href: 'https://linkedin.com/in/jatin-sharma-35b64021a',
    },
    {
      platform: 'email',
      label: 'Email Jatin Sharma',
      href: `mailto:${personal.email}`,
    },
  ],

  hero: {
    eyebrow: 'Applied intelligence / production engineering',
    headline: 'I engineer AI systems that move from model to production.',
    accent: 'Machine learning, LLMs, data, and APIs - built as one reliable system.',
    description:
      'I combine machine learning, NLP, recommendation systems, LLM integration, scalable backend development, big-data processing, and cloud deployment to build production-oriented AI applications.',
    availability: null,
    systemMap: [
      { shortLabel: 'ML', label: 'Machine learning' },
      { shortLabel: 'NLP', label: 'Language intelligence' },
      { shortLabel: 'LLM', label: 'Generative AI' },
      { shortLabel: 'DATA', label: 'Big-data processing' },
      { shortLabel: 'API', label: 'Backend systems' },
      { shortLabel: 'AWS', label: 'Cloud deployment' },
    ],
  },

  highlights: [
    {
      value: 1.6,
      suffix: ' years',
      label: 'Software engineering experience',
    },
    {
      value: 300,
      suffix: '+',
      label: 'DSA problems solved',
      context: 'GeeksforGeeks',
    },
    {
      value: 30,
      prefix: '~',
      suffix: '%',
      label: 'Fewer post-deployment defects',
      context: 'Contribution within the Accenture role',
    },
    {
      value: 8.5,
      label: 'B.Tech CGPA',
    },
  ],

  about: {
    eyebrow: 'About',
    title: 'Engineering AI beyond the prototype.',
    biography: [
      'Software Engineer with 1.6 years of experience in backend development, AI integration, and scalable application development.',
      'Experienced in RESTful APIs, LLM-powered solutions, recommender systems, text mining, predictive analytics, big-data processing, and cloud infrastructure.',
    ],
    focusAreas: [
      'Machine Learning',
      'Generative AI',
      'Backend Engineering',
      'Big Data',
      'Cloud',
    ],
    principles: [
      {
        title: 'Production-minded AI',
        description:
          'Connect model behavior to dependable APIs, data pipelines, and application needs.',
      },
      {
        title: 'Evidence over novelty',
        description:
          'Choose techniques that fit the problem, from classical ML to semantic embeddings and LLMs.',
      },
      {
        title: 'Quality through collaboration',
        description:
          'Use testing, peer review, and cross-functional delivery to improve software reliability.',
      },
    ],
  },

  experience: [
    {
      company: 'Accenture',
      role: 'Associate Software Engineer',
      startDate: 'Nov 2024',
      startDateISO: '2024-11',
      endDate: 'Mar 2026',
      endDateISO: '2026-03',
      summary:
        'Developed scalable backend services, data integrations, and AI-powered capabilities for production applications.',
      responsibilities: [
        'Developed and maintained scalable backend services using RESTful APIs while integrating AI-powered features into production applications.',
        'Built backend data pipelines connecting applications with SQL and MongoDB databases, improving API performance and data reliability.',
        'Collaborated with cross-functional teams to integrate LLM-powered capabilities into client-facing applications using Agile methodologies.',
        'Improved backend code quality through testing and peer reviews, contributing to nearly 30% fewer post-deployment defects.',
      ],
    },
    {
      company: 'Arcs Infotech',
      role: 'Full Stack Developer',
      startDate: 'Jul 2024',
      startDateISO: '2024-07',
      endDate: 'Oct 2024',
      endDateISO: '2024-10',
      summary:
        'Built responsive reporting applications and optimized their API and database layers.',
      responsibilities: [
        'Developed responsive web applications using React.js, Node.js, Express.js, and MongoDB for business reporting dashboards.',
        'Improved API response time and optimized SQL and MongoDB queries for better performance under concurrent load.',
      ],
    },
  ],

  featuredProject: {
    featured: true,
    eyebrow: 'Featured case study',
    title: 'Intelligent Product Recommendation & Insights Platform',
    summary:
      'An end-to-end AI platform combining personalized recommendations, review intelligence, natural-language explanations, and scalable cloud data processing.',
    problem:
      'Transform product interactions and customer review text into useful personalized recommendations and understandable product insights.',
    approach:
      'Combine collaborative filtering with Sentence-BERT semantic embeddings, enrich results with NLP analysis, and use GPT to explain recommendations in natural language.',
    capabilities: [
      'Hybrid collaborative and semantic recommendations',
      'Sentence-BERT product embeddings',
      'Sentiment analysis and keyword extraction',
      'Customer-review text mining',
      'GPT-powered recommendation explanations',
      'PySpark batch data processing',
    ],
    architecture: [
      {
        id: 'data',
        label: 'Product & review data',
        technology: 'AWS S3',
      },
      {
        id: 'processing',
        label: 'PySpark processing',
        technology: 'AWS EMR',
      },
      {
        id: 'models',
        label: 'Recommendation & NLP models',
        technology: 'Scikit-learn · Sentence-BERT',
      },
      {
        id: 'explanations',
        label: 'GPT explanation layer',
        technology: 'OpenAI API',
      },
      { id: 'api', label: 'FastAPI services', technology: 'Python' },
      { id: 'delivery', label: 'MongoDB & client', technology: 'Persistence' },
    ],
    stack: [
      'Python',
      'Scikit-learn',
      'PySpark',
      'Sentence-BERT',
      'OpenAI API',
      'FastAPI',
      'MongoDB',
      'AWS S3',
      'AWS EMR',
    ],
    outcome:
      'Built an end-to-end AI application integrating recommendation systems, NLP, LLM explanations, scalable batch processing, cloud infrastructure, APIs, and persistence.',
    githubUrl: null,
    demoUrl: null,
    image: null,
  },

  additionalProjects: [],

  additionalProjectsStatus: {
    title: 'No additional verified projects published yet',
    description:
      'New entries will appear here only after their project details and links are verified.',
  },

  skillGroups: [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'JavaScript (ES6+)', 'SQL'],
    },
    {
      category: 'Machine Learning',
      skills: [
        'Scikit-learn',
        'Predictive Modeling',
        'Classification',
        'Regression',
        'Clustering',
        'NLP',
        'Text Mining',
        'Recommender Systems',
        'Statistical Analysis',
      ],
    },
    {
      category: 'Generative AI',
      skills: [
        'OpenAI API',
        'LLM Integration',
        'Prompt Engineering',
        'Sentence-BERT',
      ],
    },
    {
      category: 'Big Data & Cloud',
      skills: ['PySpark', 'Hadoop Ecosystem', 'AWS S3', 'AWS EC2', 'AWS EMR'],
    },
    {
      category: 'Backend & Frameworks',
      skills: ['FastAPI', 'React.js', 'Node.js', 'Express.js'],
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'MySQL', 'SQL'],
    },
    {
      category: 'Tools & Core CS',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
        'Data Structures & Algorithms',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
        'OOP',
      ],
    },
  ],

  education: {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution:
      'Seth Jai Parkash Mukand Lal Institute of Engineering and Technology',
    location: 'Radaur',
    startYear: '2020',
    endYear: '2024',
    cgpa: '8.5',
  },

  achievements: [
    {
      id: 'problemSolving',
      title: '300+ DSA problems solved',
      description:
        'Practiced Data Structures and Algorithms through more than 300 problems on GeeksforGeeks.',
    },
    {
      id: 'appliedAi',
      title: 'End-to-end AI application engineering',
      description:
        'Built AI applications integrating recommendation systems, LLMs, FastAPI, AWS, and data processing.',
    },
  ],

  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build useful intelligence into real products.',
    description:
      'For engineering opportunities or conversations about applied AI, backend systems, and data-intensive products, reach out by email.',
    email: personal.email,
    formEndpoint: null,
    fallbackHref: `mailto:${personal.email}`,
    copySuccess: 'Email copied to clipboard.',
    copyFailure: 'Copy unavailable. Select the email address instead.',
    form: {
      title: 'Tell me what you are building.',
      description:
        'Share a little context and the form will prepare an email in your default mail application.',
      labels: {
        name: 'Your name',
        email: 'Your email',
        message: 'Project or opportunity details',
      },
      errors: {
        name: 'Enter your name.',
        emailRequired: 'Enter your email address.',
        emailInvalid: 'Enter a valid email address.',
        messageRequired: 'Add a message.',
        messageShort: 'Please add at least 20 characters.',
      },
      minimumMessageLength: 20,
      validationMessage: 'Please review the highlighted fields.',
      subjectPrefix: 'Portfolio enquiry from ',
      fallbackLabel: 'Open email app',
      fallbackNote:
        'No message is submitted on this website. This opens your email app so you remain in control.',
      fallbackStatus: 'Opening your email app. Your message has not been sent yet.',
      submitLabel: 'Send message',
      endpointNote: 'Submission is handled by the configured form service.',
    },
  },

  sectionIntros: {
    about: {
      eyebrow: '01 / About',
      title: 'A systems view of applied AI.',
      description:
        'Machine learning is most valuable when it is supported by reliable data, thoughtful APIs, and clear product outcomes.',
    },
    experience: {
      eyebrow: '02 / Experience',
      title: 'From full-stack delivery to production AI integration.',
      description:
        'Experience across responsive applications, backend services, databases, testing, and LLM-powered capabilities.',
    },
    projects: {
      eyebrow: '03 / Selected work',
      title: 'Recommendation intelligence, end to end.',
      description:
        'The featured case study connects data processing, machine learning, NLP, Generative AI, cloud infrastructure, and API delivery.',
    },
    skills: {
      eyebrow: '04 / Capabilities',
      title: 'A practical stack for intelligent products.',
      description:
        'Core capabilities span software engineering, applied machine learning, LLM integration, data processing, and cloud deployment.',
    },
    education: {
      eyebrow: '05 / Education',
      title: 'Computer science fundamentals, applied continuously.',
      description:
        'A strong academic foundation reinforced through problem solving and end-to-end software projects.',
    },
    contact: {
      eyebrow: '06 / Contact',
      title: 'Start a focused conversation.',
      description:
        'Verified contact channels are available now; the form opens your email app until a secure submission endpoint is configured.',
    },
  },
}
