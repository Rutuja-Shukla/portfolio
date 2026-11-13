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
    title: 'SupportPilot — Autonomous Customer Support Agent Platform',
    shortTitle: 'SupportPilot',
    role: 'Enterprise Agentic AI & Support Orchestration Architect',
    stack: [
      'TypeScript',
      'React',
      'Express',
      'Tailwind CSS',
      'Gemini 3.8 Flash',
      'Gemini Embedding 2',
      'RAG Vector Search',
      '7-Stage State Machine',
      '14 Backend Tools'
    ],
    year: '2025',
    category: 'Flagship',
    featured: true,
    description:
      'Enterprise-grade autonomous AI customer support orchestration platform featuring a 7-stage agent state machine, semantic RAG policy retrieval, 14 production backend tools, and human-in-the-loop escalations.',
    fullDescription:
      'SupportPilot is an enterprise-grade autonomous AI customer support orchestration platform. It demonstrates real agentic state machine workflows, intent detection, retrieval-augmented generation (RAG), backend tool invocation, customer context management, ticket lifecycle operations, and human-in-the-loop escalations across 105+ synthetic customers, 210+ orders, and 32 official knowledge base articles.',
    architectureDetails: [
      {
        category: '1. 7-Stage Autonomous Agent State Machine',
        points: [
          'Stage 1 — Security Firewall: Real-time inspection for prompt injections, system override directives, and jailbreak patterns.',
          'Stage 2 — Context Retrieval: Hydrates customer tier, lifetime spend, order history, and past tickets with tenant isolation.',
          'Stage 3 — Structured Intent Detection: Powered by Gemini (gemini-3.8-flash) with strict JSON schema outputs (intent, confidence %, urgency, sentiment, and extracted entities).',
          'Stage 4 — Semantic RAG Policy Retrieval: Indexes 32 official company documentation articles using vector embeddings (gemini-embedding-2-preview) and cosine similarity matching.',
          'Stage 5 — Action Planning & Safety Verification: Evaluates business policy eligibility before invoking tools (e.g. 30-day return windows, cancellation only prior to shipment).',
          'Stage 6 — Consequential Action Confirmation: Enforces explicit, interactive customer confirmation before executing consequential state mutations (cancellations or refunds).',
          'Stage 7 — Grounded Response Generation: Cites official knowledge base article titles and grounds responses strictly in backend data without hallucinations.'
        ]
      },
      {
        category: '2. 14 Production Backend Tools',
        points: [
          'Customer Tools: get_customer_profile, get_customer_orders, get_customer_support_history',
          'Order Tools: get_order_status, get_order_details, check_cancellation_eligibility, request_order_cancellation',
          'Refund Tools: check_refund_eligibility, create_refund_request, get_refund_status',
          'Ticket Tools: create_support_ticket, update_support_ticket, assign_support_ticket, get_ticket_status',
          'Knowledge Tools: search_knowledge_base, retrieve_policy_document'
        ]
      },
      {
        category: '3. Comprehensive Application Modules',
        points: [
          'Executive Operations Dashboard: Dynamically computed KPIs (total conversations, autonomous resolution rate, escalation trends, priority matrix, specialist leaderboard, and live activity feed).',
          'AI Customer Chat: Real-time customer experience with persona switcher (VIP, Standard, At-Risk), interactive confirmation modals, grounded citations, and live 7-stage state machine inspector.',
          'Human Support Workspace: Dedicated queue for incoming escalations with AI summaries, recommended actions, and an interactive human reply console.',
          'Support Tickets Operations: Ticket lifecycle manager with status transitions (New, Open, In Progress, Escalated, Resolved, Closed), priority tags, and internal audit notes timeline.',
          'Conversations Explorer: Session browser with transcripts, resolution mode indicators, and chat jump triggers.',
          'Customers & Orders Directory: 105+ synthetic customers and 210+ orders with carrier tracking histories and manual action triggers.',
          'Knowledge Base: 32 articles with an interactive Semantic RAG Sandbox to test vector similarity queries live.',
          'Agent Monitoring & Telemetry: Tool execution logs, input/output inspection, latency telemetry, and immutable audit events.',
          'Automated Evaluation Suite: Automated benchmark runner executing 8 test scenarios with 100% pass verification across intent accuracy, tool execution, safety limits, and anti-hallucination checks.'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla/SupportPilot-Autonomous-Customer-Support-Agent'
  },
  {
    id: 4,
    title: 'KnowledgeHub — Enterprise RAG Knowledge Assistant',
    shortTitle: 'KnowledgeHub',
    role: 'Enterprise AI & RAG Systems Architect',
    stack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Node.js',
      'Express',
      '@google/genai',
      'Gemini 3.8 Flash',
      'Gemini Embedding 2',
      'Hybrid BM25 + Vector',
      'RBAC',
      'Recharts'
    ],
    year: '2025',
    category: 'Flagship',
    featured: true,
    description:
      'Production-grade enterprise Retrieval-Augmented Generation (RAG) platform enabling teams to query internal corporate docs with RBAC permissions, hybrid vector+BM25 search, and verified citations.',
    fullDescription:
      'KnowledgeHub is a production-grade, enterprise Retrieval-Augmented Generation (RAG) platform built for cross-functional organizations. It enables employees, security teams, people operations, and managers to query internal corporate knowledge and receive verified, factual answers strictly grounded in authorized documentation with verifiable citations across 30 seeded enterprise documents and 6 collections.',
    architectureDetails: [
      {
        category: '1. 9-Stage Query & Retrieval Pipeline',
        points: [
          'Query Understanding & Firewall: Normalizes incoming text, extracts query intent keywords, and protects against prompt injection attempts (SYSTEM OVERRIDE, password exfiltration, role bypass).',
          'Access Control & RBAC: Enforces collection-level and document-level permissions on the server before vector similarity matching.',
          'Query Embedding: Computes dense vector representations using Gemini gemini-embedding-2 or a deterministic 384-dimensional dense projection engine with cosine distance.',
          'Hybrid Retrieval: Combines dense semantic vector similarity with token-frequency BM25 keyword matching via configurable alpha weights (hybridScore = alpha * vectorScore + (1 - alpha) * keywordScore).',
          'Reranking & Redundancy Pruning: Cross-evaluates title and section matches using reciprocal rank fusion to bubble up top-tier evidentiary chunks.',
          'Context Assembly: Enforces context token limits and packages source chunks into structured evidence blocks ([Doc Title - Page X: Section Title]).',
          'Grounded Generation: Generates answers using gemini-3.8-flash with a strict evidence-only system instruction.',
          'Citation Validation: Verifies that every cited document ID and page number exists in the retrieved chunks; hallucinated citations are rejected and unanswerable queries trigger a safe refusal.',
          'Feedback & Audit Trail: Records query latency (retrieval ms vs generation ms), chunks retrieved, model used, and user feedback into immutable audit logs.'
        ]
      },
      {
        category: '2. Ingestion & Vector Indexing Pipeline',
        points: [
          'Multi-format text extraction supporting PDF, DOCX, TXT, Markdown, and CSV.',
          'Structure preservation maintaining pages, sections, and markdown headers as metadata.',
          'Configurable semantic chunking (default 500 characters with 80-character overlap) and vector indexing.',
          'Lifecycle monitoring tracked through uploaded -> queued -> extracting -> chunking -> embedding -> indexed (or failed), with idempotent reprocessing.'
        ]
      },
      {
        category: '3. 11 Enterprise Modules & Seeded Collections',
        points: [
          'Overview Dashboard, Ask KnowledgeHub (RAG Chat with click-to-preview citations), Knowledge Library, Document Processing, Collections, Search Explorer (Hybrid/Semantic/Keyword), Analytics (P50/P90 latency), Evaluation Centre (Recall@K, Precision@K, MRR, Faithfulness), User Management (10 personas across Admin, Knowledge Manager, Employee), Audit Logs, and Hyperparameter Settings.',
          'Pre-seeded with 30 internally consistent enterprise documents across 6 collections: Engineering (ENG), HR & People Ops (HR), Finance (FIN), Security (SEC), Compliance & Risk (COMP), and Customer Support (SUP).'
        ]
      },
      {
        category: '4. Technology Stack & Storage',
        points: [
          'Frontend: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons, Recharts.',
          'Backend & AI: Node.js, Express, TSX, @google/genai (Gemini 3.8 Flash & Gemini Embedding 2), Multer.',
          'Storage: Typed Relational & Vector Storage Engine (data/knowledgehub_store.json).'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla/KnowledgeHub-Enterprise-RAG-Knowledge-Assistant'
  },
  {
    id: 5,
    title: 'Sentinel — AI Fraud Detection and Investigation System',
    shortTitle: 'Sentinel',
    role: 'Financial Crime & Risk Engineering Architect',
    stack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Node.js',
      'Express',
      'Gemini 3.8 Flash',
      '@google/genai',
      'Recharts',
      'Framer Motion',
      '10 Fraud Rules',
      'Z-Score / IQR',
      'ACID Audit Ledger'
    ],
    year: '2025',
    category: 'Flagship',
    featured: true,
    description:
      'Enterprise-grade financial crime operations platform engineered for real-time transaction surveillance, deterministic 10-rule + statistical risk scoring, explainable AI case analysis, and auditable case management.',
    fullDescription:
      'Sentinel is an enterprise-grade financial crime operations platform engineered for real-time transaction surveillance, multi-signal risk assessment, explainable AI case analysis, and auditable case management. It strictly isolates deterministic numerical risk scoring from AI reasoning while providing empirical ML ground-truth evaluation across 1,200 synthetic banking transactions.',
    architectureDetails: [
      {
        category: '1. Deterministic Fraud Rules Engine (10 Rules)',
        points: [
          'RULE_HIGH_AMOUNT & RULE_VELOCITY: Flags transactions exceeding 3.5σ or 4x historical average and high-frequency bursts (> 3 transactions within 10 minutes).',
          'RULE_GEO_LEAP & RULE_OFF_HOURS_ANOMALY: Computes Haversine spatial distance and elapsed time (flagging implied travel speed > 850 km/h) and high-value activity between 01:00–05:00 UTC.',
          'RULE_FAILED_BURST & RULE_RAPID_DRAIN: Flags successful authorizations after 2+ declined attempts and rapid fund liquidations (> 80% drain) following large deposits.',
          'RULE_FREQUENCY_SURGE, RULE_NEW_MERCHANT_BURST, RULE_IDENTICAL_AMOUNTS & RULE_DEVICE_FINGERPRINT: Detects 24h frequency surges (> 3.5x), elevated MCC unobserved merchants, card testing (3+ identical amounts in 15m), and shared device fingerprints across 3+ accounts.'
        ]
      },
      {
        category: '2. Statistical Anomaly & Transparent Risk Scoring',
        points: [
          'Statistical Anomaly Detection Engine: Parametric (Z-Score) and non-parametric (IQR) scoring, spatial displacement (km), travel speed (km/h), temporal intervals, novel device/merchant indicators, and an Isolation Tree Anomaly Factor proxy across normalized multi-dimensional vectors.',
          'Transparent Risk Scoring: Weighted fusion model with correlation damping across tiers Low (0–29), Medium (30–59), High (60–79), and Critical (80–100) with granular rule justifications; AI models never generate or alter numerical scores.'
        ]
      },
      {
        category: '3. Explainable AI Assistant & Case Management',
        points: [
          'Explainable AI Investigation Assistant: Server-side Gemini 3.8 Flash (@google/genai) with structured JSON schemas (Type.OBJECT) generating Executive Summaries, Behavioral Pattern Analysis, Threat Evidence, Benign Explanations, and Investigator Checklists with deterministic forensic fallback.',
          'Investigation Case Management & Auditing: Complete lifecycle (NEW → UNDER_INVESTIGATION → ESCALATED → AWAITING_INFO → CONFIRMED_FRAUD / RESOLVED_LEGITIMATE → CLOSED), regulatory remedies (ACCOUNT_RESTRICTED, FUNDS_HELD, MERCHANT_DISPUTE, FALSE_POSITIVE_WHITELIST), and append-only compliance ledger with JSON state diffs.'
        ]
      },
      {
        category: '4. Automated Testing & ML Ground-Truth Evaluation',
        points: [
          '8 Automated Invariant Tests: Boundary validation, duplicate idempotency, geo-leap calculations, decline bursts, Z-score sensitivity, score range bounds, RBAC enforcement, and audit trail integrity.',
          'Machine Learning Evaluation: Empirical benchmarking against 1,200 labeled synthetic banking transactions computing live Confusion Matrix (TP, FP, TN, FN), Precision, Recall, F1 Score, and False Positive Rate (FPR) with an interactive cutoff slider (20–90 pts).',
          'Tech Stack: React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Recharts, Framer Motion, Node.js, Express, tsx, @google/genai, and an ACID in-memory repository with JSON snapshot persistence.'
        ]
      }
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla/Sentinel-AI-Fraud-Detection-and-Investigation-Platform'
  },
  {
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
