export type HomeLocale = "de" | "en";

export interface HeroSection {
  actTitle: string;
  heading: string;
  roles: string[];
  intro: string;
  outro: string;
  cta: string;
  labels: string[];
}

export interface ExperienceNode {
  label: string;
  title: string;
  meta: string;
  focus: string;
}

export interface ExperienceSection {
  actTitle: string;
  heading: string;
  period: string;
  company: string;
  role: string;
  themes: string[];
  nodes: ExperienceNode[];
  highlightTitle: string;
  highlightStack: string;
  highlightFocus: string;
}

export interface ProjectStation {
  id: string;
  title: string;
  body: string;
  bullets: string[];
  motif: string;
  tags: string[];
}

export interface ProjectsSection {
  actTitle: string;
  heading: string;
  intro: string;
  stations: ProjectStation[];
}

export interface ToolboxGroup {
  title: string;
  tools: string[];
}

export interface ToolboxSection {
  actTitle: string;
  heading: string;
  intro: string;
  groups: ToolboxGroup[];
}

export interface PhilosophySection {
  actTitle: string;
  headingTop: string;
  headingBottom: string;
  copy: string;
  keywords: string[];
}

export interface ContactLink {
  label: string;
  href: string;
  external: boolean;
}

export interface ContactSection {
  actTitle: string;
  heading: string;
  intro: string;
  links: ContactLink[];
}

export interface HomePageContent {
  metaTitle: string;
  metaDescription: string;
  hero: HeroSection;
  experience: ExperienceSection;
  projects: ProjectsSection;
  toolbox: ToolboxSection;
  philosophy: PhilosophySection;
  contact: ContactSection;
}

export const homeContent: Record<HomeLocale, HomePageContent> = {
  de: {
    metaTitle: "Sebastijan Bogdan | Software Engineer",
    metaDescription:
      "Technische Story ueber Sebastijan Bogdan. Backend Systems, Architektur, Produkte und Engineering-Mindset.",
    hero: {
      actTitle: "Act I - The Machine Awakens",
      heading: "Sebastijan Bogdan",
      roles: ["Software Engineer", "Systems Builder"],
      intro:
        "Software Engineer mit Fokus auf robuste Systeme, skalierbare Architekturen und echte Produkte.",
      outro:
        "Von Backend Plattformen bis zu Full-Stack SaaS Anwendungen.",
      cta: "Explore the system",
      labels: [
        "Backend Systems",
        "Distributed Architecture",
        "Automation",
        "Performance Engineering",
        "Product Thinking"
      ]
    },
    experience: {
      actTitle: "Act II - The Builder",
      heading: "Systemische Entwicklung ueber Zeit",
      period: "2023 - Present",
      company: "Programmierfabrik GmbH",
      role: "Backend Engineer / Software Engineer",
      themes: [
        "Distributed services",
        "Azure infrastructure",
        "High availability systems",
        "REST API platforms",
        "Scalable backend engineering",
        "Reliability",
        "Performance"
      ],
      nodes: [
        {
          label: "Node 01",
          title: "Distributed service layers",
          meta: "Service boundaries + contracts",
          focus: "Domain decomposition, explicit ownership, evolvable APIs"
        },
        {
          label: "Node 02",
          title: "Azure infrastructure integration",
          meta: "Cloud runtime + observability",
          focus: "Operational clarity, deployment consistency, resilient runtime"
        },
        {
          label: "Node 03",
          title: "Performance and reliability routines",
          meta: "Latency, throughput, fail-safety",
          focus: "Measured optimization and predictable behavior under load"
        }
      ],
      highlightTitle: "High-Availability Backend Platform",
      highlightStack: "Stack: .NET / Azure / PostgreSQL",
      highlightFocus: "Focus: Reliability, performance and scalability"
    },
    projects: {
      actTitle: "Act III - Systems I Build",
      heading: "Produktmodule statt Portfolio Karten",
      intro:
        "Jedes Projekt wird als technische Station innerhalb einer groesseren Maschine dargestellt.",
      stations: [
        {
          id: "fleetfuel",
          title: "FleetFuel",
          body:
            "Vehicle fuel tracking system focused on trip logging, expense analytics, and vehicle management.",
          bullets: [
            "Trip logging",
            "Fuel cost telemetry",
            "Yearly expense analytics",
            "Vehicle management"
          ],
          motif: "Gauge + telemetry panel",
          tags: [".NET", "TypeScript", "PostgreSQL"]
        },
        {
          id: "steuerfux",
          title: "SteuerFux",
          body:
            "Tax optimization tool focused on simplifying and automating tax-related workflows.",
          bullets: [
            "Workflow simplification",
            "Form and receipt flow",
            "Rule-driven calculations",
            "Guided submission path"
          ],
          motif: "Document flow station",
          tags: ["Automation", "Forms", "Workflow"]
        },
        {
          id: "automation",
          title: "Automation Infrastructure",
          body:
            "Multi-agent orchestration and automated development workflows designed to accelerate technical execution.",
          bullets: [
            "Task relay graph",
            "Bot-assisted delivery",
            "PR automation lanes",
            "Execution observability"
          ],
          motif: "Pipeline + orchestration map",
          tags: ["Agents", "Orchestration", "CI/CD"]
        }
      ]
    },
    toolbox: {
      actTitle: "Act IV - The Engineer\'s Toolbox",
      heading: "Engineering toolkit as a mapped system board",
      intro:
        "Technologien erscheinen als strukturierte Baugruppen, nicht als Logo-Wolke.",
      groups: [
        { title: "Languages", tools: ["C#", "TypeScript", "SQL"] },
        { title: "Frameworks / Platforms", tools: [".NET", "Next.js", "Astro"] },
        { title: "Infrastructure", tools: ["Azure", "Docker", "CI/CD"] },
        { title: "Systems", tools: ["REST APIs", "Microservices", "Distributed Systems"] }
      ]
    },
    philosophy: {
      actTitle: "Act V - Engineering Mindset",
      headingTop: "Engineering is not about code.",
      headingBottom: "It is about systems.",
      copy:
        "The goal is not to write software. The goal is to build machines that solve problems reliably, efficiently, and at scale.",
      keywords: ["Architecture", "Performance", "Automation", "Reliability"]
    },
    contact: {
      actTitle: "Act VI - Final Contact",
      heading: "Let\'s build something real.",
      intro:
        "The system is assembled. If the challenge is real, let\'s talk.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/your-handle",
          external: true
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/your-handle",
          external: true
        },
        {
          label: "Email",
          href: "mailto:hello@sebastijan-bogdan.com",
          external: false
        },
        {
          label: "Blog",
          href: "/writing/",
          external: false
        }
      ]
    }
  },
  en: {
    metaTitle: "Sebastijan Bogdan | Software Engineer",
    metaDescription:
      "A cinematic technical narrative about Sebastijan Bogdan. Backend systems, architecture, product engineering, and execution discipline.",
    hero: {
      actTitle: "Act I - The Machine Awakens",
      heading: "Sebastijan Bogdan",
      roles: ["Software Engineer", "Systems Builder"],
      intro:
        "Software engineer focused on building robust systems, scalable architectures, and real products.",
      outro: "From backend platforms to full-stack SaaS applications.",
      cta: "Explore the system",
      labels: [
        "Backend Systems",
        "Distributed Architecture",
        "Automation",
        "Performance Engineering",
        "Product Thinking"
      ]
    },
    experience: {
      actTitle: "Act II - The Builder",
      heading: "Career architecture as a growing system",
      period: "2023 - Present",
      company: "Programmierfabrik GmbH",
      role: "Backend Engineer / Software Engineer",
      themes: [
        "Distributed services",
        "Azure infrastructure",
        "High availability systems",
        "REST API platforms",
        "Scalable backend engineering",
        "Reliability",
        "Performance"
      ],
      nodes: [
        {
          label: "Node 01",
          title: "Distributed service layers",
          meta: "Service boundaries + contracts",
          focus: "Domain decomposition, explicit ownership, evolvable APIs"
        },
        {
          label: "Node 02",
          title: "Azure infrastructure integration",
          meta: "Cloud runtime + observability",
          focus: "Operational clarity, deployment consistency, resilient runtime"
        },
        {
          label: "Node 03",
          title: "Performance and reliability routines",
          meta: "Latency, throughput, fail-safety",
          focus: "Measured optimization and predictable behavior under load"
        }
      ],
      highlightTitle: "High-Availability Backend Platform",
      highlightStack: "Stack: .NET / Azure / PostgreSQL",
      highlightFocus: "Focus: Reliability, performance and scalability"
    },
    projects: {
      actTitle: "Act III - Systems I Build",
      heading: "Projects staged as product stations",
      intro:
        "Each project appears as a dedicated module in a larger engineering machine.",
      stations: [
        {
          id: "fleetfuel",
          title: "FleetFuel",
          body:
            "Vehicle fuel tracking system focused on trip logging, expense analytics, and vehicle management.",
          bullets: [
            "Trip logging",
            "Fuel cost telemetry",
            "Yearly expense analytics",
            "Vehicle management"
          ],
          motif: "Gauge + telemetry panel",
          tags: [".NET", "TypeScript", "PostgreSQL"]
        },
        {
          id: "steuerfux",
          title: "SteuerFux",
          body:
            "Tax optimization tool focused on simplifying and automating tax-related workflows.",
          bullets: [
            "Workflow simplification",
            "Form and receipt flow",
            "Rule-driven calculations",
            "Guided submission path"
          ],
          motif: "Document flow station",
          tags: ["Automation", "Forms", "Workflow"]
        },
        {
          id: "automation",
          title: "Automation Infrastructure",
          body:
            "Multi-agent orchestration and automated development workflows designed to accelerate technical execution.",
          bullets: [
            "Task relay graph",
            "Bot-assisted delivery",
            "PR automation lanes",
            "Execution observability"
          ],
          motif: "Pipeline + orchestration map",
          tags: ["Agents", "Orchestration", "CI/CD"]
        }
      ]
    },
    toolbox: {
      actTitle: "Act IV - The Engineer\'s Toolbox",
      heading: "Engineering stack as a mapped toolkit",
      intro:
        "Tools are shown as connected system groups, not as a decorative logo cloud.",
      groups: [
        { title: "Languages", tools: ["C#", "TypeScript", "SQL"] },
        { title: "Frameworks / Platforms", tools: [".NET", "Next.js", "Astro"] },
        { title: "Infrastructure", tools: ["Azure", "Docker", "CI/CD"] },
        { title: "Systems", tools: ["REST APIs", "Microservices", "Distributed Systems"] }
      ]
    },
    philosophy: {
      actTitle: "Act V - Engineering Mindset",
      headingTop: "Engineering is not about code.",
      headingBottom: "It is about systems.",
      copy:
        "The goal is not to write software. The goal is to build machines that solve problems reliably, efficiently, and at scale.",
      keywords: ["Architecture", "Performance", "Automation", "Reliability"]
    },
    contact: {
      actTitle: "Act VI - Final Contact",
      heading: "Let\'s build something real.",
      intro:
        "The system is assembled. If the challenge is real, let\'s talk.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/your-handle",
          external: true
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/your-handle",
          external: true
        },
        {
          label: "Email",
          href: "mailto:hello@sebastijan-bogdan.com",
          external: false
        },
        {
          label: "Blog",
          href: "/en/writing/",
          external: false
        }
      ]
    }
  }
};
