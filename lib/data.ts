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
    name: "Experience",
    hash: "#experience",
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
  "I architect multi-agent AI systems and RAG pipelines for enterprise data, and own delivery from design through production. That includes context engineering, agent memory and orchestration, secure agent access to live systems, and leading the engineers who build alongside me.";

export const currentRoleSystems = [
  {
    title: "Multi-agent product architecture",
    description:
      "Designed and built a complete multi-agent system with 10+ specialized agents and dozens of custom tools. Used context engineering and workflow orchestration to reach 95% task accuracy in production.",
    metric: "95% task accuracy",
  },
  {
    title: "Enterprise RAG system",
    description:
      "Built a production RAG pipeline processing 100,000+ legal documents using advanced hybrid retrieval. Achieved better accuracy and lower latency than internal target benchmarks.",
    metric: "100,000+ documents in production",
  },
  {
    title: "Agent memory architecture",
    description:
      "Designed and fully built the memory system underlying the multi-agent product. Reached 95% context accuracy while cutting infrastructure costs and latency by 75%.",
    metric: "75% lower cost and latency",
  },
  {
    title: "Secure agent-to-system integration",
    description:
      "Implemented autonomous agent access to APIs and databases for real-time CRUD operations and data analysis, with security and reliability treated as first-class constraints, not afterthoughts.",
    metric: "Real-time CRUD and analysis",
  },
  {
    title: "Technical leadership",
    description:
      "Leading and coordinating a growing team of AI engineers, owning technical direction and delivery. Maintained 100% on-time sprint delivery.",
    metric: "100% on-time delivery",
  },
] as const;

export const currentRoleStack =
  "Python, LLM orchestration (GPT-4, Claude, Gemini), LangChain, LangGraph, RAG, MCP, AWS, Docker";

export const earlierExperience = [
  {
    role: "GenAI & Agentic AI Engineer",
    company: "Business Group Srl",
    date: "Mar 2024 — Jul 2025",
    description:
      "Trained computer vision models (YOLO, TensorFlow) for defect detection integrated directly into industrial treatment machinery. Fine-tuned a domain-specific LLM chatbot, improving response consistency by 85%.",
  },
  {
    role: "Full Stack Developer",
    company: "Reservice",
    date: "Feb 2024 — Mar 2024",
    description:
      "Built production web and mobile applications with Next.js, React, React Native and Node.js, the engineering foundation this AI work is now built on.",
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
