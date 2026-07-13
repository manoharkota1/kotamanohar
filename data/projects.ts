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
    description: "A real-time chat application with secure one-to-one and group messaging over authenticated WebSockets.",
    longDescription: "Built with Next.js, FastAPI, PostgreSQL, and Redis, this deployment-ready chat application supports one-to-one and group messaging. It includes JWT authentication with revocable refresh tokens, read receipts, typing indicators, presence tracking, cursor-based message pagination, Redis pub/sub for horizontal scaling, Docker, and a GitHub Actions CI/CD pipeline.",
    category: "Full Stack",
    status: "Completed",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "WebSockets", "Redis", "Docker"],
    features: ["One-to-one and group messaging", "JWT authentication with revocable refresh tokens", "Read receipts, typing indicators, and presence tracking", "Cursor-based pagination for chat history", "Redis pub/sub for horizontally scaled WebSocket connections"],
    challenges: "The main challenge was keeping real-time messaging responsive and consistent while scaling connections across backend instances and preserving an efficient history experience.",
    role: "Full Stack Developer — Built the frontend, real-time API, authentication flow, data model, and deployment workflow.",
    timeline: "May 2025 — Sep 2025",
    outcome: "A deployment-ready, scalable messaging application with reliable real-time interactions and a practical development pipeline.",
    approach: [
      { label: "Secure", detail: "Used JWT access and revocable refresh tokens to protect authenticated chat sessions." },
      { label: "Scale", detail: "Used Redis pub/sub to coordinate WebSocket connections across backend instances." },
      { label: "Deliver", detail: "Containerized the application and added CI/CD with GitHub Actions." },
    ],
    demoUrl: "https://kotamanohar.vercel.app",
    githubUrl: "#",
  },
  {
    id: "cloud-pattern-analysis",
    title: "Cloud Pattern Analysis Based on Image Segmentation using Deep Learning",
    description: "A U-Net++ image-segmentation model for classifying satellite cloud-organization patterns.",
    longDescription: "Built a U-Net++ segmentation model with an EfficientNet-B4 (Noisy Student) encoder to classify satellite images into Fish, Flower, Gravel, and Sugar cloud patterns. Trained on 5,546 images from the Understanding Cloud Organization dataset using 9-fold cross-validation and Hybrid Dice-BCE loss. Designed an adaptive dual-threshold inference method that improved validation mean Dice score over a fixed-threshold baseline.",
    category: "Deep Learning",
    status: "Completed",
    tech: ["Deep Learning", "Python", "TensorFlow", "U-Net++", "EfficientNet-B4"],
    features: ["Four-class satellite-cloud segmentation", "EfficientNet-B4 (Noisy Student) encoder", "9-fold cross-validation", "Hybrid Dice-BCE loss for class imbalance", "Adaptive dual-threshold inference per class"],
    challenges: "Severe class imbalance and different cloud-pattern characteristics made a single global threshold unreliable for accurate segmentation.",
    role: "Deep Learning Developer — Built the segmentation pipeline, trained and evaluated the model, and designed the adaptive inference method.",
    timeline: "Sep 2024 — Mar 2025",
    outcome: "An adaptive segmentation approach that improved mean Dice score on validation compared with the fixed-threshold baseline.",
    approach: [
      { label: "Prepare", detail: "Prepared 5,546 satellite images for robust cross-validated training." },
      { label: "Train", detail: "Combined U-Net++ with EfficientNet-B4 and Hybrid Dice-BCE loss." },
      { label: "Adapt", detail: "Tuned label-presence and pixel-binarization thresholds separately for each class." },
    ],
    demoUrl: "https://kotamanohar.vercel.app",
    githubUrl: "#",
  },
];
