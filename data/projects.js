/**
 * Portfolio project showcases and detailed case studies.
 */
export const projectsData = [
  {
    slug: "cloudpulse-observability-platform",
    title: "CloudPulse - DevOps Observability Suite",
    shortDescription: "A unified telemetry and server health monitoring dashboard with real-time alerting.",
    problem:
      "Engineering teams were juggling multiple fractured tools to monitor microservice latencies, log anomalies, and system resource limits, leading to prolonged incident resolution times.",
    role: "Lead Full Stack Developer & UI Architect",
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "Socket.io"],
    features: [
      "Sub-second websocket telemetry updates for CPU, memory, and API response metrics",
      "Interactive data visualizations with drill-down incident timeline filters",
      "Automated incident alert notifications via Slack and Webhooks",
      "Custom metric threshold configuration with audit log history",
    ],
    result:
      "Reduced average incident diagnosis time by 42% across 18 development teams and handled over 5M metric data points per day reliably.",
    image: "/images/project-cloudpulse.jpg",
    liveUrl: "https://cloudpulse-demo.vercel.app",
    githubUrl: "https://github.com/hemantborase/cloudpulse-platform",
  },
  {
    slug: "nexus-e-commerce-engine",
    title: "Nexus - Headless E-Commerce Ecosystem",
    shortDescription: "High-performance headless storefront with algorithmic product discovery and instant checkout.",
    problem:
      "A boutique lifestyle retailer experienced 6-second average mobile page loads and a 68% cart abandonment rate due to monolithic platform constraints.",
    role: "Frontend Engineer & Performance Consultant",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe API", "Redux Toolkit", "Framer Motion"],
    features: [
      "Optimized static generation with ISR delivering sub-300ms page load speeds",
      "Seamless multi-currency checkout via Stripe Elements and Apple Pay",
      "Faceted instant search with dynamic category indexing",
      "Fluid page transitions and micro-interactions for elevated luxury branding",
    ],
    result:
      "Delivered a 98 Google Lighthouse performance score and boosted mobile conversion rates by 34% within the first quarter post-launch.",
    image: "/images/project-nexus.jpg",
    liveUrl: "https://nexus-store-demo.vercel.app",
    githubUrl: "https://github.com/hemantborase/nexus-commerce",
  },
  {
    slug: "flowcraft-task-collaboration",
    title: "FlowCraft - Real-Time Agile Workspace",
    shortDescription: "Kanban and sprint planning workspace supporting live multi-user collaboration and automated reporting.",
    problem:
      "Distributed remote teams struggled with fragmented communication, lack of sprint progress visibility, and desynchronized task boards.",
    role: "Full Stack Engineer",
    techStack: ["React", "Next.js", "Express", "MongoDB", "WebSockets", "Tailwind CSS"],
    features: [
      "Real-time drag-and-drop Kanban boards with multiplayer cursor awareness",
      "Automated burndown chart generation and sprint velocity metrics",
      "Granular role-based permissions (Viewer, Contributor, Manager, Admin)",
      "Integrated markdown task descriptions with rich media attachments",
    ],
    result:
      "Adopted by over 1,200 active monthly remote collaborators with 99.9% uptime and zero synchronization conflict reports.",
    image: "/images/project-flowcraft.jpg",
    liveUrl: "https://flowcraft-workspace.vercel.app",
    githubUrl: "https://github.com/hemantborase/flowcraft-workspace",
  },
  {
    slug: "ai-documate-knowledge-assistant",
    title: "DocuMate - AI Document Intelligence",
    shortDescription: "Context-aware conversational search and semantic summarization engine for complex technical documents.",
    problem:
      "Legal and research teams were spending over 15 hours weekly manually parsing 200+ page contracts, compliance documents, and API specifications.",
    role: "AI & Full Stack Developer",
    techStack: ["Next.js", "FastAPI", "Python", "LangChain", "Vector DB", "Tailwind CSS"],
    features: [
      "Drag-and-drop PDF ingestion with vector semantic embedding pipeline",
      "Strict citation-backed Q&A preventing hallucinated answers",
      "Multi-document side-by-side comparison with highlighted delta reports",
      "Exportable executive briefing summaries in PDF and Markdown format",
    ],
    result:
      "Accelerated document research workflows by 60%, delivering verified clause extractions in seconds rather than hours.",
    image: "/images/project-documate.jpg",
    liveUrl: "https://documate-ai.vercel.app",
    githubUrl: "https://github.com/hemantborase/documate-ai",
  },
];
