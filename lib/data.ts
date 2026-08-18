export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "Roadmap",
    hash: "#roadmap",
  },
  {
    name: "Stack",
    hash: "#stack",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const heroData = {
  name: "Zakaria Belfakhir",
  statement:
    "Founding AI Engineer building production multi-agent systems and RAG architectures for enterprise clients.",
  trajectory: "Currently leading AI technical direction at LIV4.AI, on a path toward Head of AI.",
  location: "Bergamo, Italy — Remote",
};

export const whatIDo =
  "I architect multi-agent AI systems and RAG pipelines for enterprise data, and own delivery end to end: design, build, ship, lead.";

export const statsData = [
  { value: "10+", label: "Specialized agents in production" },
  { value: "95%", label: "Task accuracy" },
  { value: "100K+", label: "Legal documents processed" },
  { value: "100%", label: "On-time sprint delivery" },
] as const;

export const currentRoleSystems = [
  {
    title: "Multi-agent product architecture",
    description:
      "10+ specialized agents, dozens of custom tools. Context engineering and workflow orchestration.",
    metric: "95%",
    metricLabel: "task accuracy",
    featured: true,
  },
  {
    title: "Enterprise RAG system",
    description: "Advanced hybrid retrieval over legal documents, beating internal benchmarks.",
    metric: "100K+",
    metricLabel: "documents in production",
  },
  {
    title: "Agent memory architecture",
    description: "Built the memory layer under the multi-agent product from the ground up.",
    metric: "75%",
    metricLabel: "lower cost and latency",
  },
  {
    title: "Secure agent-to-system integration",
    description: "Autonomous agent access to APIs and databases for real-time CRUD and analysis.",
    metric: "Live",
    metricLabel: "CRUD and analysis",
  },
  {
    title: "Technical leadership",
    description: "Leading a growing team of AI engineers, owning technical direction and delivery.",
    metric: "100%",
    metricLabel: "on-time delivery",
  },
] as const;

export const currentRoleStack =
  "Python, LLM orchestration (GPT-4, Claude, Gemini), LangChain, LangGraph, RAG, MCP, AWS, Docker";

export const roadmapData = [
  {
    id: "reservice",
    label: "Reservice",
    org: "Reservice",
    role: "Full Stack Developer",
    period: "Feb 2024 — Mar 2024",
    status: "past",
    description:
      "Built production web and mobile applications with Next.js, React, React Native and Node.js: the engineering foundation the AI work is now built on.",
  },
  {
    id: "business-group",
    label: "Business Group",
    org: "Business Group Srl",
    role: "GenAI & Agentic AI Engineer",
    period: "Mar 2024 — Jul 2025",
    status: "past",
    description:
      "Trained computer vision models (YOLO, TensorFlow) for defect detection integrated directly into industrial treatment machinery. Fine-tuned a domain-specific LLM chatbot, improving response consistency by 85%.",
  },
  {
    id: "liv4ai",
    label: "LIV4.AI",
    org: "LIV4.AI",
    role: "Founding AI Engineer",
    period: "Jul 2025 — Present",
    status: "current",
    description:
      "Full ownership of AI product development: architecture, multi-agent systems, RAG pipelines, and technical leadership of a growing engineering team.",
  },
  {
    id: "head-of-ai",
    label: "Head of AI",
    org: "LIV4.AI",
    role: "Head of AI, CTO track",
    period: "Next",
    status: "future",
    description:
      "Growing into full ownership of AI technical direction and product strategy, on a defined path toward CTO.",
  },
] as const;

export const techStack = [
  {
    category: "AI & ML",
    items: [
      "Python",
      "LLM Orchestration",
      "LangChain",
      "LangGraph",
      "RAG",
      "MCP",
      "Computer Vision",
      "TensorFlow",
    ],
  },
  {
    category: "Infrastructure & Delivery",
    items: ["AWS", "Docker", "Linux", "PostgreSQL", "DynamoDB", "CI/CD"],
  },
  {
    category: "Full-Stack Engineering",
    items: ["TypeScript", "Next.js", "React", "React Native", "Node.js", "GraphQL"],
  },
] as const;

export const education = [
  {
    degree: "BSc (Honours), Computer Engineering & Artificial Intelligence",
    school: "Epicode Institute of Technology",
    date: "2025 — 2028, in progress",
  },
  {
    degree: "Computer Science Diploma",
    school: "ITIS Guglielmo Marconi",
    date: "94/100",
  },
] as const;

export const contactData = {
  statement: "Open to conversations with founders and technical leaders building serious AI products.",
  email: "belfakhirzakaria@gmail.com",
  linkedin: "https://www.linkedin.com/in/zakaria-belfakhir-8b3221319/",
};
