export type ProjectCategory = "AI/ML" | "Full Stack" | "Data" | "Mobile";
export type ProjectStatus = "Live" | "Completed" | "In Progress";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tech: string[];
  features: string[];
  challenges: string;
  role: string;
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "signalwatch-platform",
    title: "SignalWatch",
    description:
      "ML observability platform that turns model, service, and data signals into actionable alerts.",
    longDescription:
      "An end-to-end observability platform for machine-learning services. It brings together request telemetry, model quality signals, feature drift, and operational health so teams can identify issues before they affect users.",
    category: "Data",
    status: "Live",
    tech: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "WebSockets"],
    features: [
      "Live service and inference monitoring",
      "Feature drift and quality-signal tracking",
      "Configurable alert rules and delivery channels",
      "Role-based workspaces for engineering teams",
      "Interactive investigation views for incidents",
    ],
    challenges:
      "Streaming high-volume telemetry while keeping dashboards responsive required a compact event model, careful query design, and virtualized rendering for dense data views.",
    role: "Full Stack Engineer — Designed the system architecture, built the real-time data pipeline, and implemented the monitoring experience.",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "knowledge-copilot",
    title: "Knowledge Copilot",
    description:
      "Retrieval-augmented assistant that helps teams find grounded answers across internal knowledge.",
    longDescription:
      "A production-minded AI assistant that combines retrieval, source-aware responses, and conversation memory. It helps teams explore documentation and research without losing the evidence behind an answer.",
    category: "AI/ML",
    status: "Live",
    tech: ["React", "Python", "FastAPI", "LangChain", "Vector Search", "OpenAI"],
    features: [
      "Grounded retrieval with source citations",
      "Streaming responses and conversational context",
      "Document ingestion and semantic indexing",
      "Evaluation flows for answer relevance and faithfulness",
      "Extensible connectors for team knowledge sources",
    ],
    challenges:
      "Balancing answer quality, response time, and traceability meant designing retrieval and evaluation as first-class parts of the system instead of treating the model call as the entire product.",
    role: "AI Engineer — Built the retrieval pipeline, conversation API, evaluation workflow, and the product interface for source-backed answers.",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "commerce-intelligence",
    title: "Commerce Intelligence",
    description:
      "Full-stack commerce platform with real-time inventory and data-driven recommendations.",
    longDescription:
      "A scalable marketplace platform that unifies inventory, search, checkout, and recommendation workflows. The system is designed around reliable transactions and practical insights that help customers discover relevant products.",
    category: "Full Stack",
    status: "Completed",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Search", "AWS"],
    features: [
      "Real-time inventory synchronization",
      "Personalized product recommendation service",
      "Faceted search and discovery workflows",
      "Multi-vendor catalog and fulfillment support",
      "Secure checkout and order tracking",
    ],
    challenges:
      "Keeping inventory accurate across vendors during busy periods required an event-driven design with idempotent updates, clear failure handling, and reconciliation jobs.",
    role: "Software Engineer — Built core storefront and backend flows, integrated payments and search, and contributed to the recommendation service.",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "motion-coach",
    title: "Motion Coach",
    description:
      "Mobile training companion that uses on-device computer vision to provide movement feedback.",
    longDescription:
      "A cross-platform fitness app that pairs adaptive workout plans with lightweight pose analysis. It focuses on private, responsive feedback and practical progress tracking without requiring a constant network connection.",
    category: "Mobile",
    status: "Live",
    tech: ["React Native", "Expo", "Firebase", "TensorFlow Lite", "Node.js"],
    features: [
      "On-device pose estimation and rep tracking",
      "Adaptive training plans based on progress",
      "Session analytics and long-term trends",
      "Offline-first workout logging and sync",
      "Private, low-latency movement feedback",
    ],
    challenges:
      "Delivering useful feedback at interactive frame rates required optimizing the model path, minimizing camera processing overhead, and adapting to device capabilities.",
    role: "Mobile & ML Engineer — Built the application, integrated the on-device inference flow, and developed the progress and feedback systems.",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "modelops-studio",
    title: "ModelOps Studio",
    description:
      "Operational workspace for tracking model experiments, evaluations, releases, and production health.",
    longDescription:
      "A collaborative workspace that gives teams a shared view of model development and deployment. It connects experiment tracking, evaluation results, release metadata, and service health into a structured delivery workflow.",
    category: "AI/ML",
    status: "In Progress",
    tech: ["TypeScript", "Python", "FastAPI", "PostgreSQL", "Docker", "OpenTelemetry"],
    features: [
      "Experiment and dataset version tracking",
      "Evaluation reports for model releases",
      "Deployment metadata and rollback history",
      "Service health and performance signals",
      "Collaborative review workflows for releases",
    ],
    challenges:
      "Creating a single workflow across experiments and live services requires a clear lineage model that connects data, code, model artifacts, evaluations, and releases.",
    role: "Software & ML Engineer — Architecting the domain model, delivery workflows, and observability integrations.",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "developer-platform",
    title: "Developer Platform",
    description:
      "A reusable platform layer that standardizes services, APIs, access controls, and developer workflows.",
    longDescription:
      "A shared engineering foundation that helps product teams ship consistently. It provides documented service patterns, type-safe integrations, authentication primitives, and quality checks built into the delivery path.",
    category: "Full Stack",
    status: "Completed",
    tech: ["TypeScript", "React", "Node.js", "OpenAPI", "Docker", "Vitest"],
    features: [
      "Reusable service and API templates",
      "Type-safe client generation from API contracts",
      "Authentication and permission primitives",
      "Automated tests and quality gates",
      "Documentation for faster team onboarding",
    ],
    challenges:
      "The platform needed to reduce repeated effort without constraining teams, which called for opinionated defaults, stable interfaces, and an intentional extension model.",
    role: "Software Engineer — Built shared services and developer tooling, defined API conventions, and established testing and documentation workflows.",
    demoUrl: "#",
    githubUrl: "#",
  },
];
