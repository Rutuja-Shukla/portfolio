export interface Project {
  id: number;
  title: string;
  role: string;
  company?: string;
  stack: string[];
  year: string;
  description: string;
  fullDescription: string;
  image: string;
  githubUrl: string;
  category?: 'Flagship' | 'Machine Learning & Analytics';
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Payment Ledger & Reconciliation Platform',
    role: 'Distributed Systems & FinTech Architect',
    stack: ['Java 21', 'Spring Boot', 'React', 'Kafka', 'PostgreSQL', 'Redis'],
    year: '2024 – 2025',
    category: 'Flagship',
    featured: true,
    description: 'Distributed payment platform with immutable double-entry accounting and automated settlement reconciliation.',
    fullDescription:
      'Developed a distributed payment-processing platform with immutable double-entry accounting, idempotent payment processing, and transactional outbox patterns to support financial consistency and reliable event delivery. Implemented automated multi-source settlement reconciliation, concurrency-safe ledger posting, and append-only audit logging.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla'
  },
  {
    id: 2,
    title: 'Risk & Regulatory Reporting Workbench',
    role: 'Full-Stack Enterprise FinTech Engineer',
    stack: ['C#', '.NET 8', 'React', 'PostgreSQL', 'Keycloak', 'OAuth 2.0 / ABAC'],
    year: '2024 – 2025',
    category: 'Flagship',
    featured: true,
    description: 'Full-stack financial reporting app with async risk calculations, canonical JSON snapshots, and SHA-256 hash chains.',
    fullDescription:
      'Designed a full-stack financial reporting application with asynchronous risk calculations, canonical JSON snapshots (RFC 8785), Keycloak OAuth 2.0/OIDC, attribute- and role-based access control (ABAC/RBAC), multi-tenant isolation, maker-checker approvals, and tamper-evident SHA-256 hash chains.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla'
  },
  {
    id: 3,
    title: 'Distributed Job Scheduler',
    role: 'Cloud-Native & Distributed Systems Engineer',
    stack: ['Go (Golang)', 'PostgreSQL', 'gRPC', 'Docker', 'Prometheus', 'OpenTelemetry'],
    year: '2024',
    category: 'Flagship',
    featured: true,
    description: 'High-throughput, fault-tolerant job processing engine with lock-free DB queries, advisory locks, and DLQ requeueing.',
    fullDescription:
      'Engineered a high-throughput, fault-tolerant job processing engine leveraging PostgreSQL lock-free queries and advisory locks for leader election, featuring zero-loss worker crash recovery via visibility leases, exponential backoff retries with jitter, and dead-letter queue (DLQ) requeueing.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    githubUrl: 'https://github.com/Rutuja-Shukla'
  },
  {
    id: 4,
    title: 'Sentiment Analysis',
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
    id: 5,
    title: 'Stock Prediction',
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
    id: 6,
    title: 'Clustering Geolocation Data',
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
    id: 7,
    title: 'Handwritten Digit Recognition',
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
