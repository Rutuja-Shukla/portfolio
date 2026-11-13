export interface EducationItem {
  degree: string;
  field?: string;
  institution: string;
  location: string;
  score: string;
  years: string;
}

export interface ResumeData {
  name: string;
  title: string;
  nationality: string;
  relocation: string;
  languagesSpoken: string[];
  contact: {
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  skills: {
    databases: string[];
    backend: string[];
    frontend: string[];
    devops: string[];
    apisAndTools: string[];
    engineeringPractices: string[];
    domainKnowledge: string[];
  };
  experience: {
    role: string;
    company: string;
    duration: string;
    location: string;
    responsibilities: string[];
  }[];
  projects: {
    title: string;
    stack: string[];
    description: string;
    highlights?: string[];
  }[];
  education: EducationItem[];
}

export const resumeData: ResumeData = {
  name: 'Rutuja Shukla',
  title: 'Full-Stack Software Engineer',
  nationality: 'Indian',
  relocation: 'Open to relocation to Mainland China',
  languagesSpoken: ['English (Fluent)', 'Hindi (Fluent)', 'Mandarin (Beginner)'],
  contact: {
    phone: '+918451845728',
    email: 'rutujamahek@gmail.com',
    linkedin: 'https://linkedin.com/in/rutuja-shukla',
    github: 'https://github.com/Rutuja-Shukla',
  },
  summary:
    'Full-Stack Software Engineer specializing in enterprise microservices, secure RESTful API development, and distributed data pipelines. 4+ years of hands-on experience at Barclays delivering end-to-end backend and modern UI integrations for global compliance and risk platforms. Strong background in C#/.NET core, Angular, SQL database optimization, DevOps CI/CD pipelines, and Unit testing (> 90% coverage) under strict international banking regulations.',
  skills: {
    databases: ['SQL Server', 'PostgreSQL', 'Redis'],
    backend: ['C#', '.NET 8 / Core', 'C++', 'C', 'JavaScript', 'Java (21)', 'TypeScript', 'Python', 'Go (Golang)', 'Spring Boot'],
    frontend: ['Angular', 'Node.js', 'React (18/19)', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'],
    devops: ['Docker', 'Kubernetes', 'GitHub Actions (CI/CD)', 'GitLab', 'OpenTelemetry', 'Jenkins', 'Prometheus'],
    apisAndTools: ['Swagger', 'Postman', 'Insomnia', 'Bitbucket', 'SonarQube', 'Jira', 'Confluence', 'gRPC'],
    engineeringPractices: ['Agile/Scrum', 'Code Reviews', 'Unit Testing (>90% coverage)', 'TDD', 'Performance Optimization', 'Technical Documentation'],
    domainKnowledge: ['Banking Systems', 'Risk & Finance Platforms', 'Regulatory & Compliance Systems'],
  },
  experience: [
    {
      role: 'Senior Software Engineer | BA4',
      company: 'Barclays',
      duration: 'Apr 2025 – Present',
      location: 'Pune, India',
      responsibilities: [
        'Architected and delivered scalable full-stack features, leading end-to-end backend microservices (.NET Core/APIs) and Angular enterprise UI integrations.',
        'Optimized system performance and query latency by 20% across distributed workflows through Redis API-level caching, SQL indexing, and frontend state optimization.',
        'Diagnosed and resolved 20+ critical production defects and performance bottlenecks, coordinating cross-team root-cause analysis to ensure 99.9% high availability.',
        'Spearheaded Agile ceremonies, code reviews, and DevOps workflows, ensuring zero-downtime deployments and 100% compliance with global banking security standards.'
      ]
    },
    {
      role: 'Software Engineer | BA3',
      company: 'Barclays',
      duration: 'Aug 2022 – Mar 2025',
      location: 'Pune, India',
      responsibilities: [
        'Engineered 5+ OAuth/Bearer-authenticated backend data pipelines and optimized complex SQL transformation logic, reducing analytical processing times by 10%.',
        'Authored detailed technical specs and system architecture diagrams for 4 large-scale backend services, establishing clean component interfaces and data models.',
        'Enforced strict banking security protocols and Test-Driven Development (TDD), writing robust unit/integration tests to maintain > 90% code coverage across backend repositories.'
      ]
    }
  ],
  projects: [
    {
      title: 'AgentFlow — Enterprise Agentic AI Workflow & Financial Investigation Platform',
      stack: ['React 19', 'TypeScript', 'Node.js 22', 'Gemini 4 Argon', 'Express', 'Tailwind CSS v4', 'SHA-256 Audit Chain'],
      description:
        'AI-powered financial operations investigation platform that orchestrates specialized agents to investigate failed transactions, reconcile double-entry ledgers, retrieve operational policies, and generate audit-backed investigation reports with deterministic arithmetic.'
    },
    {
      title: 'ReviewPilot — AI-Powered Code Review & Automated Testing Agent',
      stack: ['React 19', 'TypeScript', 'Gemini 3.8 Flash', 'Node.js 22', 'Express', 'esbuild', 'AST Parsers', 'Vitest'],
      description:
        'AI-powered code review and automated testing platform combining contextual LLM analysis with deterministic offline AST static analysis across TypeScript, Python, Java, and C# to generate evidence-based findings and production-ready unit tests.'
    },
    {
      title: 'SupportPilot — Autonomous Customer Support Agent Platform',
      stack: ['TypeScript', 'React', 'Express', 'Tailwind CSS', 'Gemini 3.8 Flash', 'Gemini Embedding 2', 'RAG', '7-Stage State Machine'],
      description:
        'Enterprise-grade autonomous AI customer support orchestration platform featuring a 7-stage agent state machine, semantic RAG policy retrieval across 32 docs, 14 production backend tools, and human-in-the-loop escalations.'
    },
    {
      title: 'KnowledgeHub — Enterprise RAG Knowledge Assistant',
      stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Express', 'Gemini 3.8 Flash', 'Gemini Embedding 2', 'Hybrid BM25 + Vector'],
      description:
        'Production-grade enterprise Retrieval-Augmented Generation (RAG) platform with a 9-stage query/retrieval pipeline, RBAC access enforcement, hybrid vector+BM25 search, and verifiable citations across 30 enterprise documents.'
    },
    {
      title: 'Sentinel — AI Fraud Detection & Investigation System',
      stack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Express', 'Gemini 3.8 Flash', 'Recharts', 'Framer Motion', '10 Fraud Rules'],
      description:
        'Enterprise-grade financial crime operations platform engineered for real-time transaction surveillance, deterministic 10-rule + Z-Score/IQR risk scoring, explainable AI case analysis, and ML evaluation across 1,200 transactions.'
    },
    {
      title: 'Payment Ledger & Reconciliation Platform',
      stack: ['Java 21', 'Spring Boot', 'React', 'Kafka', 'PostgreSQL', 'Redis'],
      description:
        'Developed a distributed payment-processing platform with immutable double-entry accounting, idempotent payment processing, and transactional outbox patterns to support financial consistency and reliable event delivery. Implemented automated multi-source settlement reconciliation, concurrency-safe ledger posting, and append-only audit logging.'
    },
    {
      title: 'Risk & Regulatory Reporting Workbench',
      stack: ['C#/.NET 8', 'React', 'PostgreSQL', 'Keycloak', 'OAuth 2.0/OIDC'],
      description:
        'Designed a full-stack financial reporting application with asynchronous risk calculations, canonical JSON snapshots (RFC 8785), Keycloak OAuth 2.0/OIDC, attribute- and role-based access control (ABAC/RBAC), multi-tenant isolation, maker-checker approvals, and tamper-evident SHA-256 hash chains.'
    },
    {
      title: 'Distributed Job Scheduler',
      stack: ['Go', 'PostgreSQL', 'gRPC', 'Docker', 'Prometheus', 'OpenTelemetry'],
      description:
        'Engineered a high-throughput, fault-tolerant job processing engine leveraging PostgreSQL lock-free queries and advisory locks for leader election, featuring zero-loss worker crash recovery via visibility leases, exponential backoff retries with jitter, and dead-letter queue (DLQ) requeueing.'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Technology',
      institution: 'Usha Mittal Institute of Technology, SNDT Women’s University',
      location: 'Mumbai, India',
      score: 'CGPA: 9.21 / 10',
      years: '2018 – 2022'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Class XII',
      institution: 'Mithibai College',
      location: 'Mumbai, India',
      score: 'Percentage: 80.77%',
      years: '2017 – 2018'
    },
    {
      degree: 'Central Board of Secondary Education (CBSE)',
      field: 'Class X',
      institution: 'Sharjah Indian School',
      location: 'UAE',
      score: 'CGPA: 9.8 / 10',
      years: '2015 – 2016'
    }
  ]
};

export default resumeData;
