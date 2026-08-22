export type ProjectCategory = "AI/ML" | "Full Stack" | "Data" | "Mobile" | "Deep Learning";
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
  timeline: string;
  outcome: string;
  approach: { label: string; detail: string }[];
  demoUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: "distributed-chat-application",
    title: "Distributed Chat Application",
    description: "A bi-directional messaging service with authenticated WebSockets, PostgreSQL, and Redis Pub/Sub.",
    longDescription: "Developed a bi-directional messaging service using FastAPI, PostgreSQL, and authenticated WebSockets, maintaining sub-100ms message delivery across concurrent user sessions. The deployment-ready system uses revocable JWT refresh tokens, cursor-based database pagination, Redis Pub/Sub, Docker, and GitHub Actions CI/CD.",
    category: "Full Stack",
    status: "Completed",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "WebSockets", "Redis", "Docker"],
    features: ["Bi-directional one-to-one and group messaging over authenticated WebSockets", "Revocable JWT refresh tokens and secure session management", "Read receipts, typing indicators, and presence tracking", "Cursor-based database pagination that reduces memory consumption during deep-history queries", "Redis Pub/Sub message broker for horizontally scaled WebSocket nodes"],
    challenges: "Maintain low-latency, consistent real-time messaging while safely scaling concurrent WebSocket connections and efficiently retrieving deep message history.",
    role: "Full Stack Developer — Built the frontend, real-time API, authentication flow, data model, and deployment workflow.",
    timeline: "May 2025 — Sep 2025",
    outcome: "A containerized, deployment-ready messaging service with sub-100ms delivery, scalable WebSocket coordination, and efficient deep-history queries.",
    approach: [
      { label: "Secure", detail: "Designed revocable JWT refresh-token sessions for authenticated messaging workflows." },
      { label: "Scale", detail: "Architected Redis Pub/Sub to decouple WebSocket nodes across containerized instances." },
      { label: "Query", detail: "Applied cursor-based pagination to reduce database memory consumption by 45% during deep-history queries." },
    ],
    demoUrl: "https://kotamanohar.vercel.app",
    githubUrl: "#",
  },
  {
    id: "cloud-pattern-analysis",
    title: "Cloud Pattern Analysis Based on Image Segmentation using Deep Learning",
    description: "A U-Net++ computer-vision pipeline for segmenting four cloud patterns across 5,500+ satellite images.",
    longDescription: "Engineered a U-Net++ computer-vision pipeline with an EfficientNet-B4 backbone to segment complex satellite imagery into four structural categories across 5,500+ high-resolution images. A custom Hybrid Dice-BCE loss and 9-fold cross-validation strategy improved boundary precision by 14%; Adaptive Dual-Threshold inference outperformed the fixed-threshold baseline by 8.5% on validation Dice metrics.",
    category: "Deep Learning",
    status: "Completed",
    tech: ["Deep Learning", "Python", "TensorFlow", "U-Net++", "EfficientNet-B4"],
    features: ["Four-class segmentation across 5,500+ high-resolution satellite images", "EfficientNet-B4 (Noisy Student) backbone with U-Net++", "9-fold cross-validation", "Custom Hybrid Dice-BCE loss for severe class imbalance", "Adaptive Dual-Threshold inference using multi-variable grid search"],
    challenges: "Mitigate severe class imbalance and distinct cloud-pattern behavior where a single global threshold produced unreliable segmentation boundaries.",
    role: "Deep Learning Developer — Built the segmentation pipeline, trained and evaluated the model, and designed the adaptive inference method.",
    timeline: "Sep 2024 — Mar 2025",
    outcome: "A robust segmentation pipeline that improved boundary precision by 14% and validation Dice performance by 8.5% over the fixed-threshold baseline.",
    approach: [
      { label: "Prepare", detail: "Prepared 5,546 images and executed a 9-fold cross-validation strategy." },
      { label: "Train", detail: "Combined U-Net++ with EfficientNet-B4 and a custom Hybrid Dice-BCE loss function." },
      { label: "Adapt", detail: "Formulated Adaptive Dual-Threshold inference using multi-variable grid search per class." },
    ],
    demoUrl: "https://kotamanohar.vercel.app",
    githubUrl: "#",
  },
];
