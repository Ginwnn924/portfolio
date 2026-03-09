export const profile = {
  name: "Nguyen Nhat Quang",
  title: "Backend Developer",
  tagline: "Building systems that scale under pressure.",
  bio: "I'm a backend-focused engineer who thrives on designing systems that don't flinch under heavy traffic. My core stack revolves around Java and the Spring ecosystem — and I'm constantly sharpening it. Beyond just writing features, I invest time in deeply understanding Spring Boot internals, design patterns, and JVM performance tuning to write code that's not just functional but architecturally sound. At the same time, I'm branching out into Golang to expand my concurrency toolkit and explore high-performance microservices beyond the JVM. I also have a growing fascination with AI/ML — from recommendation engines I've already shipped in production to experimenting with LLM integrations and intelligent automation. I believe the next generation of backend systems won't just be fast — they'll be smart.",
  currentlyExploring: [
    {
      label: "Java Deep Dive",
      detail:
        "Spring internals, design patterns, JVM tuning, clean architecture",
    },
    {
      label: "Golang",
      detail: "concurrency patterns, gRPC, high-perf microservices",
    },
    {
      label: "AI / ML",
      detail:
        "LLM integrations, intelligent automation, recommendation systems",
    },
  ],
  education: "Software Engineering @ Saigon University",
  gpa: "3.2/4.0",
  scholarship: "Merit-Based Scholarship",
  github: "https://github.com/Ginwnn924",
  email: "nhatquang924.se@gmail.com",
};

export const projects = [
  {
    icon: "⚡",
    name: "FlashSale System",
    role: "Fullstack Developer",
    teamSize: 1,
    period: "Mar. 2026 – Present",
    description:
      "High-concurrency flash sale backend handling 1,000+ RPS. Redis atomic stock management, RabbitMQ async processing, Prometheus + Grafana monitoring.",
    highlights: [
      "Redis atomic stock management (DECR/INCR)",
      "RabbitMQ async order processing",
      "K6 load testing — 1,000 RPS, P95 < 500ms",
    ],
    tech: ["Spring Boot", "Redis", "RabbitMQ", "PostgreSQL", "React", "K6"],
    repo: "https://github.com/Ginwnn924/flash_sale",
  },
  {
    icon: "🎬",
    name: "CineMe",
    role: "Backend Developer",
    teamSize: 4,
    period: "Jun. 2025 – Dec. 2025",
    description:
      "Cinema booking system with Redis distributed locks, JWT auth with token revocation, async ticket cancellation, and hybrid movie recommendation engine.",
    highlights: [
      "Redis-based distributed locks for safe seat booking",
      "JWT Access/Refresh + Redis token revocation",
      "RabbitMQ async ticket cancellation",
      "Hybrid movie recommendation engine",
    ],
    tech: ["Spring Boot", "Spring Security", "Redis", "RabbitMQ", "WebSocket"],
    repo: "https://github.com/Ginwnn924/CineMe-BE",
  },
];

export const openSource = {
  project: "ProxyPal",
  stars: "990+",
  description:
    "Implemented OAuth modal with manual browser trigger + Tauri backend commands.",
  pr: "https://github.com/heyhuynhgiabuu/proxypal/pull/87",
};

export const skills = {
  Languages: ["Java", "TypeScript", "JavaScript", "SQL"],
  Backend: ["Spring Boot", "Spring Data JPA", "Spring Security"],
  Frontend: ["React", "TailwindCSS"],
  Database: ["PostgreSQL", "MySQL", "Redis"],
  DevOps: ["Docker", "RabbitMQ", "Prometheus", "Grafana"],
  Testing: ["K6", "JMeter"],
  Tools: ["Git", "IntelliJ IDEA", "VS Code"],
};
