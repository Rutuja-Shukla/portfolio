export interface ArchitectureSection {
  category: string;
  points: string[];
}

export interface Project {
  id: number;
  title: string;
  shortTitle?: string;
  role: string;
  company?: string;
  stack: string[];
  year: string;
  description: string;
  fullDescription: string;
  architectureDetails?: ArchitectureSection[];
  image: string;
  githubUrl: string;
  category?: 'Flagship' | 'Machine Learning & Analytics';
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'AgentFlow — Enterprise Agentic AI Workflow and Financial Investigation Platform',
    shortTitle: 'AgentFlow',
    role: 'FinTech & Agentic AI Architect',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Node.js 22',
      'Express',
      'Gemini 4 Argon',
      'Gemini 3.8 Flash',
      '@google/genai',
      'FSM State Machine',
      'SHA-256 Audit Log',
      'RBAC & Idempotency'
    ],
    year: '2025',
    category: 'Flagship',
    featured: true,
    description:
      'AI-powered financial operations investigation platform that orchestrates specialized agents to investigate failed transactions, reconcile double-entry ledgers, and produce audit-ready reports with deterministic arithmetic.',
    fullDescription:
      'AgentFlow is an AI-powered financial operations investigation platform that orchestrates specialized agents to investigate failed transactions, reconcile double-entry ledgers, retrieve relevant operational policies, and generate evidence-backed investigation reports. Built with a TypeScript/Node.js backend, it combines agent-based workflow orchestration with deterministic financial calculations, role-based access control, human-in-the-loop approvals, idempotency protection, and tamper-evident SHA-256 audit logging. The platform uses synthetic financial data to demonstrate how multi-agent AI workflows can support complex financial investigations while maintaining traceability, controlled execution, and separation between AI reasoning and critical financial computations.',
    architectureDetails: [
      {
        category: '1. Frontend Architecture',
        points: [
          'Core Library & Framework: React 19 (react ^19.0.1, react-dom ^19.0.1)',
          'Language: TypeScript 7 (strict, ES2022 target, full type definitions)',
          'Build Tool & Bundler: Vite 8 (@vitejs/plugin-react)',
          'Styling & Design System: Tailwind CSS v4 (@tailwindcss/vite & @tailwindcss/postcss) with CSS variable design tokens for high-density enterprise fintech layouts',
          'Component Icons: Lucide React (lucide-react ^0.546.0)',
          'Animation & Transitions: Motion (motion ^12.23.24)',
          'State & Context Management: React Context API (AuthContext) with synchronized server-side RBAC header propagation (x-user-role, x-user-id)'
        ]
      },
      {
        category: '2. Backend & Server Runtime',
        points: [
          'Runtime Environment: Node.js 22 LTS (tsx ^4.21.0 for on-the-fly TypeScript execution)',
          'Web Application Framework: Express 4 (express ^4.21.2, @types/express)',
          'API Style: RESTful JSON APIs mounted under /api with schema validation',
          'Dev/Prod Server Strategy: Express server (server.ts) hosting Vite in middleware mode during development and serving static production assets in deployment',
          'Environment Management: dotenv (dotenv ^17.2.3) for server-side secret handling'
        ]
      },
      {
        category: '3. AI & Agentic Orchestration Layer',
        points: [
          'AI SDK: Google Gen AI TypeScript SDK (@google/genai ^2.4.0)',
          'Flagship Reasoning Model: gemini-4-argon configured with thinkingLevel: ThinkingLevel.HIGH for multi-step reasoning, anomaly diagnosis, and factual evidence synthesis',
          'High-Throughput Fallback: gemini-3.8-flash for lower-latency requests',
          'Multi-Agent Architecture: Payment Investigation Agent (gateway log inspection, network timeouts, multi-hop event tracing); Ledger Reconciliation Agent (deterministic mathematical balance checks); Policy Retrieval Agent (compliance indexing & rule retrieval); Risk and Report Synthesis Agent (evaluates contradictions, distinguishes hypotheses from verified facts, produces structured reports)',
          'Workflow State Machine: Graph-based deterministic finite state machine (FSM) enforcing valid transitions (CREATED → VALIDATING → PLANNING → INVESTIGATING → RECONCILING → RETRIEVING_POLICY → SYNTHESIZING → AWAITING_APPROVAL → EXECUTING_SIMULATION → COMPLETED)'
        ]
      },
      {
        category: '4. Financial Calculation & Tool Execution Engine',
        points: [
          'Deterministic Arithmetic: Dedicated TypeScript module computing balance formulas strictly using Integer Minor Units (cents) to eliminate floating-point arithmetic errors. Mathematical conclusions are never delegated to an LLM.',
          'Allowlisted Tool Registry: 12 allowlisted server-side tools with strict JSON input/output schemas: getTransaction, getTransactionEvents, getLedgerEntries, reconcileLedger, searchPolicies, getInvestigation, createInvestigation, createApprovalRequest, approveAction, executeSimulatedAction, appendAuditEvent, getWorkflowStatus'
        ]
      },
      {
        category: '5. Security, RBAC & Cryptographic Integrity',
        points: [
          'Role-Based Access Control (RBAC): Server-enforced permissions across 3 defined operational roles: ANALYST (case creation, read access, drafting proposals), APPROVER (dual sign-off, reviewing financial impact, approval/rejection), and ADMINISTRATOR (system evaluation, audit verification, factory data reset)',
          'Audit Logging: Tamper-evident SHA-256 cryptographic hash chaining (Node:crypto) chaining every tool call, transition, and decision from genesis block with an on-demand verification endpoint',
          'Idempotency Guard: Cryptographically unique idempotency tokens preventing double-execution of sensitive financial adjustments',
          'Secret Isolation: Zero exposure of API keys or credentials to client bundles'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla/AgentFlow'
  },
  {
    id: 2,
    title: 'ReviewPilot — AI-Powered Code Review and Automated Testing Agent',
    shortTitle: 'ReviewPilot',
    role: 'Full-Stack AI & Developer Tooling Engineer',
    stack: [
      'React 19',
      'TypeScript',
      'Node.js 22',
      'Express',
      'Gemini 3.8 Flash',
      '@google/genai',
      'esbuild',
      'AST Parsers',
      'Zod 4',
      'Vitest',
      'Tailwind CSS v4'
    ],
    year: '2025',
    category: 'Flagship',
    featured: true,
    description:
      'AI-powered code review and automated testing platform combining contextual LLM analysis with deterministic offline AST static analysis across TypeScript, JavaScript, Python, Java, and C#.',
    fullDescription:
      'ReviewPilot is an AI-powered code review and automated testing platform designed to help developers identify potential bugs, security vulnerabilities, performance issues, and code-quality problems before they reach production. It combines AI-driven contextual code analysis with deterministic static-analysis tools to generate structured, evidence-based findings, explain potential issues, recommend improvements, and generate relevant unit tests. The platform is designed with a modular, language-adapter architecture, enabling progressive support for TypeScript, JavaScript, Python, Java, and C#. It also emphasizes reliable validation, structured findings, test-generation workflows, and safe handling of untrusted source code, distinguishing AI-generated recommendations from issues verified by actual analysis tools.',
    architectureDetails: [
      {
        category: '1. Frontend Layer',
        points: [
          'Framework: React 19 (react, react-dom) — Functional components and hooks',
          'Language: TypeScript 7 (typescript) — Strict type definitions and interfaces',
          'Build Tool & Bundler: Vite 8 (vite, @vitejs/plugin-react)',
          'Styling: Tailwind CSS v4 (tailwindcss, @tailwindcss/vite) — Modern utility-first CSS via Vite plugin',
          'Icons: Lucide React (lucide-react) — Consistent developer and security iconography',
          'Animations: Motion (motion) — Smooth UI transitions for review workflows and telemetry tabs'
        ]
      },
      {
        category: '2. Backend & Server Runtime',
        points: [
          'Runtime: Node.js 22 — Native ES Modules (type: "module") with native TypeScript type stripping',
          'Server Framework: Express 4 (express, @types/express) — REST API routing (/api/*), security headers, and static bundle serving',
          'Development Server: Vite Middleware mounted inside Express in dev (tsx server.ts), serving static precompiled assets in production (dist/)',
          'Security & Networking: CORS (cors), HTTP security headers (nosniff, SAMEORIGIN, strict-origin-when-cross-origin), and request body size limits (5MB) to protect against DoS payloads'
        ]
      },
      {
        category: '3. Multi-Language AST Parsers (100% Offline)',
        points: [
          'TypeScript & JavaScript: esbuild (esbuild) — High-speed offline ESM syntax transform and token validator',
          'Python: @lezer/python — Concrete syntax tree parser for indentation, delimiters, and function extraction',
          'Java: @lezer/java — Abstract syntax tree parser for class, method, and test structure validation',
          'C#: @fluffy-spoon/csharp-parser + Custom Lexical Verifier — Structural parsing for namespaces, classes, methods, and balanced delimiters'
        ]
      },
      {
        category: '4. Static Analysis & Normalization Engine',
        points: [
          'ReviewPilot Deterministic Rule Engine: Built-in AST rule analyzers detecting Security: SQL Injection (CWE-89), Command Injection (CWE-78), Path Traversal (CWE-22), and Hardcoded Secrets (AWS tokens, private keys)',
          'Bug Risks: Stream/resource leaks without try-with-resources / using, String reference equality (== vs .equals()), Null dereferences, Swallowed exceptions, and Python mutable default arguments',
          'Linter Output Normalizers: Python Ruff output parser and normalizer; Java Checkstyle XML and PMD JSON schema normalizers',
          'Diff & Patch Processing: Custom unified git diff parser with hunk line mapping (server/analyzers/diffParser.ts) and unified diff patch validator (server/analyzers/patchValidator.ts)'
        ]
      },
      {
        category: '5. AI Contextual Reasoning & Test Synthesis',
        points: [
          'AI SDK: @google/genai — Official TypeScript SDK for Gemini models',
          'Model: Gemini 3.8 Flash (gemini-3.8-flash) running strictly server-side',
          'Schema Validation: Zod 4 (zod) — Runtime schema validation, guaranteeing strongly-typed model outputs',
          'AI Security Invariants: Code inputs enclosed in <untrusted_source_code> prompt isolation tags; line coordinate bounding (clampFindingCoordinates restricts lines to code range); API keys strictly confined to backend (GEMINI_API_KEY); secret scrubber to prevent credentials from leaking into error messages'
        ]
      },
      {
        category: '6. Synthesized Test Framework Targets',
        points: [
          'TypeScript / JavaScript: Vitest',
          'Python: pytest',
          'Java: JUnit 5 (org.junit.jupiter.api.*)',
          'C#: xUnit ([Fact], [Theory])'
        ]
      },
      {
        category: '7. Testing, Linting & Quality Assurance',
        points: [
          'Test Runner: Vitest 5 (vitest) — Automated test suite with 10 test files and 197 unit/integration tests',
          'Static Type Checking: tsc --noEmit (npm run lint)',
          'Empirical Evaluation Benchmark: Standardized harness running against 35 fixtures across all supported languages (server/evaluation/fixtures.ts)'
        ]
      },
      {
        category: '8. Repository & Deployment',
        points: [
          'Version Control: Git / GitHub (https://github.com/Rutuja-Shukla/ReviewPilot)',
          'Production Start Command: node server.ts (configured in package.json)',
          'Live Environments: Hosted on Google Cloud Run via AI Studio'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla/ReviewPilot'
  },
  {
    id: 3,
    title: 'Payment Ledger & Reconciliation Platform',
    shortTitle: 'Payment Ledger',
    role: 'Distributed Systems & FinTech Architect',
    stack: ['Java 21', 'Spring Boot', 'React', 'Kafka', 'PostgreSQL', 'Redis'],
    year: '2024 – 2025',
    category: 'Flagship',
    featured: true,
    description:
      'Distributed payment platform with immutable double-entry accounting and automated settlement reconciliation.',
    fullDescription:
      'Developed a distributed payment-processing platform with immutable double-entry accounting, idempotent payment processing, and transactional outbox patterns to support financial consistency and reliable event delivery. Implemented automated multi-source settlement reconciliation, concurrency-safe ledger posting, and append-only audit logging.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla'
  },
  {
    id: 4,
    title: 'Risk & Regulatory Reporting Workbench',
    shortTitle: 'Risk Workbench',
    role: 'Full-Stack Enterprise FinTech Engineer',
    stack: ['C#', '.NET 8', 'React', 'PostgreSQL', 'Keycloak', 'OAuth 2.0 / ABAC'],
    year: '2024 – 2025',
    category: 'Flagship',
    featured: true,
    description:
      'Full-stack financial reporting app with async risk calculations, canonical JSON snapshots, and SHA-256 hash chains.',
    fullDescription:
      'Designed a full-stack financial reporting application with asynchronous risk calculations, canonical JSON snapshots (RFC 8785), Keycloak OAuth 2.0/OIDC, attribute- and role-based access control (ABAC/RBAC), multi-tenant isolation, maker-checker approvals, and tamper-evident SHA-256 hash chains.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla'
  },
  {
    id: 5,
    title: 'Distributed Job Scheduler',
    shortTitle: 'Distributed Scheduler',
    role: 'Cloud-Native & Distributed Systems Engineer',
    stack: ['Go (Golang)', 'PostgreSQL', 'gRPC', 'Docker', 'Prometheus', 'OpenTelemetry'],
    year: '2024',
    category: 'Flagship',
    featured: true,
    description:
      'High-throughput, fault-tolerant job processing engine with lock-free DB queries, advisory locks, and DLQ requeueing.',
    fullDescription:
      'Engineered a high-throughput, fault-tolerant job processing engine leveraging PostgreSQL lock-free queries and advisory locks for leader election, featuring zero-loss worker crash recovery via visibility leases, exponential backoff retries with jitter, and dead-letter queue (DLQ) requeueing.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla'
  },
  {
    id: 6,
    title: 'Sentiment Analysis',
    shortTitle: 'Sentiment Analysis',
    role: 'Machine Learning & NLP',
    stack: ['Python', 'NLP', 'TensorFlow', 'NLTK'],
    year: '2021',
    category: 'Machine Learning & Analytics',
    featured: false,
    description: 'Built an NLP pipeline to classify sentiment across large review datasets.',
    fullDescription:
      'Implemented an end-to-end sentiment analysis workflow covering data collection, preprocessing, feature extraction, and model training. Delivered dashboards to visualize sentiment trends and insights used by stakeholders for faster decision making.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla/Sentiment-Analysis.git'
  },
  {
    id: 7,
    title: 'Stock Prediction',
    shortTitle: 'Stock Prediction',
    role: 'Quantitative Machine Learning',
    stack: ['Python', 'Machine Learning', 'Time Series', 'Pandas'],
    year: '2021',
    category: 'Machine Learning & Analytics',
    featured: false,
    description: 'Time-series forecasting model for equity price movements and technical indicators.',
    fullDescription:
      'Developed regression-based models and technical-indicator features to forecast stock price movement. Automated the training pipeline, created visual reports for predicted vs. actual values and helped stakeholders evaluate investment strategies.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla/Stock-Prediction.git'
  },
  {
    id: 8,
    title: 'Clustering Geolocation Data',
    shortTitle: 'Geolocation Clustering',
    role: 'Data Scientist',
    stack: ['Python', 'Scikit-learn', 'Geospatial Analysis', 'Matplotlib'],
    year: '2020',
    category: 'Machine Learning & Analytics',
    featured: false,
    description: 'Spatial clustering algorithms (K-Means & DBSCAN) to uncover regional geospatial patterns.',
    fullDescription:
      'Processed large coordinate datasets, applied K-means and DBSCAN to surface hidden clusters and built interactive maps. Findings were used to optimize geo-distribution strategies and highlight underserved regions.',
    image: 'https://images.unsplash.com/photo-1742415105589-c403b5e6691c?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla/Clustering-Geolocation-Data.git'
  },
  {
    id: 9,
    title: 'Handwritten Digit Recognition',
    shortTitle: 'Digit Recognition',
    role: 'Machine Learning Developer',
    stack: ['Python', 'TensorFlow', 'Computer Vision', 'CNN'],
    year: '2020',
    category: 'Machine Learning & Analytics',
    featured: false,
    description: 'Convolutional Neural Network model for handwritten digit recognition on MNIST.',
    fullDescription:
      'Designed and trained a convolutional neural network on the MNIST dataset with image augmentation, regularization and hyperparameter tuning. Achieved high accuracy and packaged the model for downstream OCR-style integrations.',
    image: 'https://images.unsplash.com/photo-1557562645-4eee56b29bc1?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla/Handwritten-Digit-Recognition.git'
  }
];
