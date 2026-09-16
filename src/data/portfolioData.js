const personal = {
  name: 'Jatin Sharma',
  initials: 'JS',
  role: 'AI Engineer',
  extendedRole: 'Machine Learning • Deep Learning • Generative AI • RAG • Backend AI Systems',
  email: 'jatinbhardwajb55@gmail.com',
  resumePath: '/assets/Jatin-Sharma-Resume.pdf',
  github: 'https://github.com/JatinSharmab',
  linkedin: 'https://linkedin.com/in/jatin-sharma-35b64021a',
}

export const portfolioData = {
  metadata: {
    title: 'Jatin Sharma | AI Engineer',
    description:
      'AI Engineer building machine learning, deep learning, RAG, recommendation and scalable backend systems.',
    canonicalUrl: 'https://jatin-sharma-ai-portfolio.vercel.app',
    openGraphImage: null,
  },

  personal,

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
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
    greeting: "Hi, I'm",
    name: 'Jatin Sharma',
    headline: 'AI Engineer',
    valueProposition:
      'I build intelligent systems across machine learning, deep learning, RAG and scalable backend infrastructure.',
    description:
      'Combining applied deep learning, neural vector retrieval, typed LangGraph agent orchestration, and resilient backend services to turn AI research into reliable software.',
    ctas: {
      primary: { label: 'View Projects', href: '/projects' },
      secondary: { label: 'Contact Me', href: '/contact' },
      resume: { label: 'Resume', href: personal.resumePath },
    },
    credibilityStats: [
      {
        value: 1.6,
        suffix: '+',
        label: 'Years Experience',
        context: 'Production software & backend engineering',
      },
      {
        value: 4,
        suffix: '',
        label: 'Featured AI Projects',
        context: 'RAG, RecSys, Deep Learning & Systems',
      },
      {
        value: 300,
        suffix: '+',
        label: 'DSA Problems',
        context: 'Data structures & algorithms on GeeksforGeeks',
      },
      {
        isText: true,
        textValue: 'AI',
        label: 'ML · DL · RAG',
        context: 'Core engineering specialization',
      },
    ],
    systemMap: [
      { shortLabel: 'ML', label: 'Machine Learning' },
      { shortLabel: 'DL', label: 'Deep Learning' },
      { shortLabel: 'RAG', label: 'Retrieval AI' },
      { shortLabel: 'VEC', label: 'Vector Databases' },
      { shortLabel: 'API', label: 'FastAPI Services' },
      { shortLabel: 'OPS', label: 'MLOps & Docker' },
    ],
  },

  projects: [
    {
      id: 'synapse',
      slug: 'synapse',
      number: '01',
      title: 'Synapse — Enterprise AI Intelligence OS',
      shortTitle: 'Synapse',
      category: 'Multimodal RAG / Agentic AI / Enterprise AI',
      githubUrl: 'https://github.com/JatinSharmab/synapse-ai',
      demoUrl: null,
      summary:
        'An enterprise AI intelligence workspace for evidence-grounded reasoning across documents, video and structured data, combining hybrid retrieval, typed agent orchestration, provenance-aware citations and guarded generative UI.',
      statusLabel: 'Portfolio Demo Architecture',
      tags: [
        'LangGraph',
        'FastAPI',
        'ChromaDB',
        'BM25 & RRF',
        'PyMuPDF',
        'Pydantic GenUI',
        'React & TypeScript',
      ],
      overview:
        'Useful enterprise knowledge is fragmented across PDF policies, MP4 recordings, and CSV spreadsheets. Searching each medium independently is inefficient, while generic LLMs often hallucinate without supportable provenance. Synapse addresses this through typed agent orchestration that inspects document pages, seeks to video keyframe timestamps, performs deterministic CSV calculations, and renders only validated generative UI components.',
      problemStatement:
        'Standard RAG pipelines treat all modalities as unstructured text, lose page and timestamp references, and risk executing unverified LLM-generated code for quantitative queries.',
      objective:
        'Build a verifiable, multimodal AI intelligence workspace featuring hybrid lexical/vector search, a bounded Sentinel rewrite loop, deterministic data analytics, and zero arbitrary code execution.',
      architecture: [
        {
          stage: '01',
          name: 'Transport Gateway',
          technology: 'Express 5 & TypeScript',
          description:
            'Zod payload validation, request correlation IDs, rate limiting, and Server-Sent Events (SSE) proxying.',
        },
        {
          stage: '02',
          name: 'AI Service & State Machine',
          technology: 'FastAPI & LangGraph',
          description:
            'Typed LangGraph state orchestration with bounded Sentinel loop (max 1 rewrite) for grounded synthesis.',
        },
        {
          stage: '03',
          name: 'Hybrid Document Retrieval',
          technology: 'ChromaDB + BM25 + RRF',
          description:
            'Chroma vector search merged with BM25 lexical tokens via Reciprocal Rank Fusion and local CPU reranking.',
        },
        {
          stage: '04',
          name: 'Multimodal Ingestion',
          technology: 'PyMuPDF + FFmpeg',
          description:
            'Header/paragraph semantic chunking for PDFs; selective keyframe extraction with timestamp evidence for video.',
        },
        {
          stage: '05',
          name: 'Deterministic CSV Analytics',
          technology: 'Pydantic & Python',
          description:
            'Structured aggregations (sum, mean, top-N, group-by) executed deterministically without Python eval/exec.',
        },
        {
          stage: '06',
          name: 'Guarded Structured Gen-UI',
          technology: 'Zod & React Registry',
          description:
            'Strictly typed data schemas (charts, metrics, tables) rendered exclusively through a fixed React component registry.',
        },
      ],
      implementedCapabilities: [
        'Typed LangGraph orchestration with an explicit bounded rewrite count of 1.',
        'PDF extraction via PyMuPDF with semantic-aware chunking and exact page-level citations.',
        'Hybrid retrieval pipeline uniting ChromaDB dense vectors, BM25 lexical matching, Reciprocal Rank Fusion, and local coverage reranking.',
        'Video RAG on small MP4 demos extracting keyframes and returning timestamped playback seek points.',
        'Deterministic CSV operations restricted to typed Pydantic schemas; zero arbitrary code execution or eval/exec.',
        'Structured Gen-UI payloads (metrics, bar/line/pie charts, tables) validated against Zod schemas in a fixed React registry.',
        'Layered Sentinel guardrails checking input prompts, evidence coverage, citation mapping, and output secrets.',
        'Real-time Server-Sent Events (SSE) streaming operational stages without leaking private prompts or internal reasoning.',
        'Reproducible evaluation suite measuring retrieval Recall@K, MRR, tool routing accuracy, and vector-vs-hybrid comparison.',
      ],
      plannedImprovements: [
        'Distributed background task queues (Celery/RabbitMQ) for asynchronous processing of large document archives.',
        'Redis-backed distributed token-bucket rate limiting and multi-region response caching.',
        'Enterprise SSO with Role-Based Access Control (RBAC) and tenant data isolation.',
        'Managed vector infrastructure with high-availability clustering and continuous embedding re-indexing.',
      ],
    },
    {
      id: 'cinerank-ai',
      slug: 'cinerank-ai',
      number: '02',
      title: 'CineRank AI — Deep Learning Recommendation & Vector-Ranking Platform',
      shortTitle: 'CineRank AI',
      category: 'Deep Learning / Recommendation Systems / MLOps',
      githubUrl: 'https://github.com/JatinSharmab/CineRank-AI',
      demoUrl: null,
      summary:
        'A two-stage deep-learning recommendation platform combining PyTorch Two-Tower embeddings, vector candidate retrieval, personalized ranking, cold-start strategies and production-oriented MLOps infrastructure.',
      statusLabel: 'Production-Grade ML Platform',
      tags: [
        'PyTorch',
        'Two-Tower Neural Net',
        'Qdrant (HNSW)',
        'FastAPI',
        'Redis',
        'MLflow',
        'Docker Compose',
      ],
      overview:
        'Modern recommendation engines cannot evaluate monolithic deep models over millions of candidates in real time. CineRank AI solves this computational bottleneck by decoupling recommendation into an O(log N) vector candidate retrieval stage using 128-dimensional L2-normalized embeddings in a Qdrant HNSW vector index, followed by personalized business constraint filtering and Redis-cached ranking.',
      problemStatement:
        'Evaluating compute-heavy neural networks across large catalogs causes excessive latency (>500ms), while simple popularity baselines fail to deliver personalized discovery.',
      objective:
        'Design a high-throughput, sub-100ms recommendation platform using a PyTorch Two-Tower architecture, hard negative mining, vector similarity indexing, and cold-start fallbacks.',
      architecture: [
        {
          stage: '01',
          name: 'Feature Engineering',
          technology: 'PySpark & Pandas',
          description:
            'Temporal 80/20 train-test splits, user historical preference vectors (30d), and movie genre distributions (12d).',
        },
        {
          stage: '02',
          name: 'Two-Tower Dual Encoders',
          technology: 'PyTorch (User & Movie Towers)',
          description:
            'Separate deep neural towers projecting user and item features into a shared 128-dimensional latent space.',
        },
        {
          stage: '03',
          name: 'L2 Hypersphere Normalization',
          technology: 'PyTorch Unit Projection',
          description:
            'Enforces unit norm on output embeddings, converting cosine similarity evaluation into high-speed inner dot products.',
        },
        {
          stage: '04',
          name: 'Hard Negative Mining',
          technology: 'HardNegativeSampler',
          description:
            'Negative sample weighting (70% popularity, 20% genre-matched, 10% random) for sharp decision boundaries.',
        },
        {
          stage: '05',
          name: 'Vector Retrieval',
          technology: 'Qdrant Vector DB (HNSW)',
          description:
            'Sub-100ms approximate nearest neighbor candidate retrieval over HNSW graphs with payload metadata filtering.',
        },
        {
          stage: '06',
          name: 'Serving & Caching',
          technology: 'FastAPI + Redis LRU',
          description:
            'Asynchronous microservice with Redis caching for sub-millisecond query responses on repeated requests.',
        },
      ],
      benchmarks: [
        { metric: 'NDCG@10', modelScore: '0.6698', baselineScore: '0.1764', lift: '+279.7%' },
        { metric: 'Recall@10', modelScore: '0.6000', baselineScore: '0.1667', lift: '+260.0%' },
        { metric: 'MRR@10', modelScore: '0.6944', baselineScore: '0.2083', lift: '+233.3%' },
        { metric: 'Precision@10', modelScore: '0.2000', baselineScore: '0.0667', lift: '+200.0%' },
        { metric: 'HitRate@10', modelScore: '1.0000', baselineScore: '0.6667', lift: '+50.0%' },
        { metric: 'Catalog Coverage@10', modelScore: '12.0%', baselineScore: '10.0%', lift: '+20.0%' },
      ],
      implementedCapabilities: [
        'PyTorch Two-Tower architecture (UserTower & MovieTower) with Xavier initialization, batch normalization, and dropout.',
        '128-dimensional L2-normalized embeddings enabling dot-product cosine similarity retrieval.',
        'Custom HardNegativeSampler combining popularity weighting (70%), genre-matching (20%), and random negative sampling (10%).',
        'Qdrant Rust-based HNSW vector index supporting real-time cosine distance nearest-neighbor lookups.',
        'Two-tier cold-start resolution: trending fallback with active genre filters and 3+ rating seed synthesis for temporary embeddings.',
        'Empirical ranking evaluation suite (Recall@K, Precision@K, NDCG@K, MRR@K, MAP@K, Coverage) compared against an unpersonalized baseline.',
        'Redis LRU caching layer delivering sub-millisecond response times for warm queries.',
        'MLflow experiment logging tracking training loss, hyperparameter configurations, and model checkpoints.',
        'Prometheus metrics endpoint export and containerized deployment with Docker Compose.',
      ],
      plannedImprovements: [
        'Graph neural network candidate retrieval (LightGCN) for high-order collaborative connectivity.',
        'Multi-task learning (MTL) ranking tower for joint prediction of engagement probability and rating score.',
        'Real-time streaming feature ingestion via Kafka to update user embedding states dynamically.',
      ],
    },
    {
      id: 'nexus-ai',
      slug: 'nexus-ai',
      number: '03',
      title: 'NexusAI — RAG Knowledge Assistant',
      shortTitle: 'NexusAI',
      category: 'RAG / LLM Applications',
      githubUrl: 'https://github.com/JatinSharmab/nexus-ai',
      demoUrl: null,
      summary:
        'A privacy-friendly local RAG knowledge assistant that ingests PDF knowledge bases, retrieves semantically relevant context through SentenceTransformers and FAISS, generates responses using Ollama and returns page-level source citations.',
      statusLabel: 'Local RAG Knowledge Engine',
      tags: [
        'SentenceTransformers',
        'FAISS',
        'Ollama (llama3.2)',
        'FastAPI',
        'MongoDB',
        'JWT Auth',
        'React',
      ],
      overview:
        'Enterprises handling proprietary technical manuals and support documentation require accurate question answering without exposing confidential data to cloud LLM providers. NexusAI provides an entirely local, self-contained RAG pipeline that processes PDF documentation, creates dense vector representations, retrieves semantic excerpts with FAISS, and synthesizes answers using local Ollama models with verifiable page-level evidence.',
      problemStatement:
        'Cloud-hosted RAG solutions create privacy risks for internal documentation, incur per-token operational costs, and often produce unsubstantiated claims without verifiable page evidence.',
      objective:
        'Implement an entirely local, containerized RAG service providing authenticated, privacy-preserving PDF knowledge retrieval with page citations.',
      architecture: [
        {
          stage: '01',
          name: 'PDF Extraction & Chunking',
          technology: 'PyMuPDF & Word Boundary Splitting',
          description:
            'Extracts clean text per page and produces overlapping chunks (800 characters, 150-character overlap) preserving page indices.',
        },
        {
          stage: '02',
          name: 'Embedding Generation',
          technology: 'SentenceTransformers (all-MiniLM-L6-v2)',
          description:
            'Embeds document chunks into 384-dimensional dense vectors optimized for semantic similarity.',
        },
        {
          stage: '03',
          name: 'Vector Search Index',
          technology: 'FAISS (IndexFlatIP)',
          description:
            'Performs cosine similarity search across normalized chunk embeddings in under 10 milliseconds.',
        },
        {
          stage: '04',
          name: 'Local LLM Inference',
          technology: 'Ollama (llama3.2)',
          description:
            'Synthesizes conversational responses conditioned strictly on retrieved context excerpts on the local machine.',
        },
        {
          stage: '05',
          name: 'Session & Auth Layer',
          technology: 'FastAPI + MongoDB + JWT',
          description:
            'Provides secure user registration, bcrypt password hashing, and isolated multi-turn chat session history.',
        },
      ],
      implementedCapabilities: [
        'End-to-end local Retrieval-Augmented Generation operating without cloud LLM dependencies.',
        'PDF document ingestion with 800-character overlapping chunks at word boundaries.',
        'Dense vector embeddings generated locally with all-MiniLM-L6-v2.',
        'FAISS cosine similarity vector index supporting fast top-K passage retrieval.',
        'Local LLM generation with Ollama running llama3.2 with context injection.',
        'Page-level source citation returning source filename, page number, similarity score, and excerpt snippet.',
        'User authentication with JSON Web Tokens (JWT) and bcrypt password hashing.',
        'Multi-session conversation history stored and isolated per user in MongoDB.',
        'Containerized local deployment with Docker Compose.',
      ],
      plannedImprovements: [
        'Hybrid lexical (BM25) and dense search fusion to capture technical part numbers and codes.',
        'Dynamic semantic chunking utilizing document section hierarchy rather than fixed character limits.',
        'RAGAS evaluation pipeline measuring context precision, context recall, and faithfulness.',
      ],
    },
    {
      id: 'finsight-ai',
      slug: 'finsight-ai',
      number: '04',
      title: 'FinSight AI — Financial Market Intelligence Platform',
      shortTitle: 'FinSight AI',
      category: 'Financial AI / ML Platform',
      githubUrl: 'https://github.com/JatinSharmab/finsight-at',
      demoUrl: null,
      summary:
        'A production-oriented financial intelligence platform architecture combining a TypeScript application stack with a dedicated Python/FastAPI service for machine-learning and quantitative analytics.',
      statusLabel: 'Architecture & Foundation',
      tags: [
        'React & Vite',
        'TypeScript',
        'Node.js & Express',
        'Python & FastAPI',
        'MongoDB',
        'Redis',
        'Socket.IO',
      ],
      overview:
        'Financial market analysis demands clean separation between real-time client interactions, backend transaction/portfolio gateways, and compute-intensive quantitative models. FinSight AI establishes this architecture by decoupling a React/TypeScript interface, an Express API gateway for real-time WebSocket communication, and an isolated Python FastAPI microservice designed for quantitative analytics.',
      problemStatement:
        'Coupling real-time financial dashboards directly to compute-heavy Python analytics services leads to thread starvation and fragile deployments.',
      objective:
        'Establish a resilient, decoupled microservice architecture separating client delivery, real-time gateway streaming, and dedicated Python ML services.',
      architecture: [
        {
          stage: '01',
          name: 'Frontend Client',
          technology: 'React + Vite + TypeScript + Tailwind',
          description:
            'Responsive financial dashboard interface for portfolio monitoring, asset watchlists, and interactive charts.',
        },
        {
          stage: '02',
          name: 'Application Gateway',
          technology: 'Node.js + Express + TypeScript',
          description:
            'Handles user sessions, API routing, portfolio management, and Socket.IO real-time event broadcasting.',
        },
        {
          stage: '03',
          name: 'ML & Analytics Service',
          technology: 'Python & FastAPI',
          description:
            'Dedicated microservice architecture engineered for numerical computation and future model inferences.',
        },
        {
          stage: '04',
          name: 'Data & Caching Layer',
          technology: 'MongoDB & Redis',
          description:
            'MongoDB for user portfolios and historical records; Redis for low-latency market data caching.',
        },
        {
          stage: '05',
          name: 'Deployment Blueprint',
          technology: 'Docker & Docker Compose',
          description:
            'Containerized multi-service setup coordinating client, gateway, ML service, and database dependencies.',
        },
      ],
      implementedCapabilities: [
        'Decoupled multi-tier architecture isolating client, application gateway, and Python ML service.',
        'TypeScript frontend with React, Vite, and Tailwind CSS configured for high-performance rendering.',
        'Express and TypeScript backend managing user authentication, portfolio persistence, and REST endpoints.',
        'Python FastAPI microservice scaffolding prepared for quantitative computation and ML inference pipelines.',
        'Data persistence architecture configured with MongoDB document storage and Redis caching.',
        'Real-time communication framework enabled through Socket.IO integration.',
        'Docker Compose configuration establishing network isolation between services.',
      ],
      plannedImprovements: [
        'XGBoost and Random Forest models for predictive equity price movement classification.',
        'LSTM and GRU recurrent neural networks for time-series market volatility forecasting.',
        'FinBERT transformer integration for sentiment analysis on financial news and earnings call transcripts.',
        'Quantitative portfolio optimization incorporating Markowitz Efficient Frontier, Value at Risk (VaR), and CVaR.',
        'Event-driven backtesting engine with simulated paper-trading execution.',
      ],
    },
  ],

  about: {
    eyebrow: 'About',
    title: 'Engineering practical intelligence into production software.',
    biography: [
      "I'm Jatin Sharma, an AI Engineer and Software Engineer focused on building practical intelligent systems across machine learning, deep learning, LLM applications, recommendation systems and scalable backend services.",
      'With 1.6+ years of professional engineering experience, I specialize in moving AI systems beyond theoretical prototypes into dependable, low-latency applications. My work connects deep neural networks, vector retrieval databases, typed agent orchestration, and reliable API services into cohesive production architectures.',
      'I focus on engineering rigor: choosing evidence-based techniques over novelty, enforcing deterministic boundaries around LLMs, validating data pipelines, and measuring model lift with verifiable empirical benchmarks.',
    ],
    principles: [
      {
        title: 'Production-Minded AI',
        description:
          'Connect model behavior to dependable REST/FastAPI services, asynchronous caching, and deterministic data boundaries.',
      },
      {
        title: 'Evidence Over Novelty',
        description:
          'Select techniques that genuinely fit the problem, from PyTorch Two-Tower vector rankings to hybrid RRF retrieval.',
      },
      {
        title: 'Software Quality & Testing',
        description:
          'Employ rigorous automated testing, type safety, and peer review to ensure reliable, zero-defect software delivery.',
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

  skillGroups: [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      category: 'Machine Learning / Deep Learning',
      skills: [
        'Scikit-learn',
        'PyTorch',
        'TensorFlow',
        'XGBoost',
        'Random Forest',
        'Regression',
        'Classification',
        'Clustering',
        'Recommendation Systems',
        'LSTM',
        'GRU',
        'NLP',
      ],
    },
    {
      category: 'Generative AI / RAG',
      skills: [
        'LLMs',
        'RAG',
        'LangChain',
        'LangGraph',
        'Embeddings',
        'Vector Search',
        'FAISS',
        'ChromaDB',
        'Prompt Engineering',
        'RAG evaluation',
      ],
    },
    {
      category: 'Backend / Data',
      skills: [
        'FastAPI',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'Redis',
        'PySpark',
      ],
    },
    {
      category: 'Cloud / Tooling',
      skills: [
        'AWS',
        'Docker',
        'Git',
        'GitHub',
        'Postman',
        'MLflow',
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
        'Demonstrated strong foundations in Data Structures and Algorithms with 300+ competitive programming problems solved on GeeksforGeeks.',
    },
    {
      id: 'appliedAi',
      title: 'End-to-End AI Engineering',
      description:
        'Architected and implemented deep learning recommendation systems, multimodal RAG platforms, and local vector retrieval pipelines.',
    },
  ],

  contact: {
    eyebrow: 'Contact',
    title: "Let's build useful intelligence into real products.",
    description:
      'For AI engineering roles, technical collaboration, or inquiries regarding deep learning, RAG systems, and scalable backend architectures, feel free to reach out directly.',
    email: personal.email,
    formEndpoint: null,
    fallbackHref: `mailto:${personal.email}`,
    copySuccess: 'Email copied to clipboard.',
    copyFailure: 'Copy unavailable. Please select the address manually.',
    form: {
      title: 'Start a conversation',
      description:
        'Share context regarding your project or engineering opportunity. This will open your default email application with pre-populated details.',
      labels: {
        name: 'Your name',
        email: 'Your email address',
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
      subjectPrefix: 'AI Engineering inquiry from ',
      fallbackLabel: 'Open Email Client',
      fallbackNote:
        'Your message opens in your email client so you remain in full control before sending.',
      fallbackStatus: 'Opening your default email application...',
      submitLabel: 'Send Message',
      endpointNote: 'Submission is handled directly via email.',
    },
  },
}
