// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Every field here is sourced directly from Shantanu's real LinkedIn profile
// (linkedin.com/in/shantanu-kadukar-aiengineer), resume, and GitHub. Nothing
// in this file is invented. Where real data does not yet exist, the field is
// left empty/undefined and the corresponding section renders a labeled empty
// state instead of placeholder content, see each component's "no data" branch.
// ---------------------------------------------------------------------------

export interface PersonalInfo {
  name: string
  title: string
  location: string
  availability: string
  email: string
  phone: string
  linkedin: string
  github?: string
}

export const personal: PersonalInfo = {
  name: 'Shantanu Kadukar',
  title: 'AI Engineer',
  location: 'Nagpur, Maharashtra, India',
  availability: 'Open to full-time opportunities · On-site / Hybrid',
  email: 'shantanukadukar6556@gmail.com',
  phone: '+91 76203-27127',
  linkedin: 'https://www.linkedin.com/in/shantanu-kadukar-aiengineer/',
  github: 'https://github.com/ShantanuKadukar56',
}

export const about = {
  paragraphs: [
    "I'm an AI Engineer at Valethi Technologies, passionate about turning large language models into real, production-grade systems, not just demos. I build across multiple LLM providers, including OpenAI, Anthropic Claude, Azure OpenAI, Google Gemini, Groq, and NVIDIA NeMoTron.",
    'My background sits at the intersection of AI engineering and data engineering: I ship multi-agent LLM systems, but I also own the pipelines, migrations, and query performance work that keep those systems reliable in production, not just in a demo.',
  ],
  coreStrengths: [
    'Multi-agent LLM system design (schema-discovery, retrieval, and response agents working together)',
    'Retrieval pipelines built without over-relying on a vector database when a lighter approach fits better',
    'AI-assisted synthetic data generation for QA/BA test coverage',
    'Data pipeline engineering: ETL, migration validation, and query performance tuning',
    'Cloud automation on Azure (Functions, Data Factory) with Python and SQL',
  ],
  philosophy: [
    {
      title: 'Build systems, not demos.',
      detail: 'A chatbot that works once in a walkthrough is not the bar. Production means grounded answers, real data, and edge cases handled.',
    },
    {
      title: 'Automate repetitive work.',
      detail: 'Log analysis, test-data authoring, migration validation: if it eats hours every month, it should be a pipeline, not a routine.',
    },
    {
      title: 'Bridge engineering and AI.',
      detail: "An LLM is only as reliable as the data and infrastructure underneath it. I care about both sides, not just the model call.",
    },
    {
      title: 'Keep learning by building.',
      detail: 'Currently going deeper on multi-agent orchestration (LangGraph), RAG patterns, and LLM evaluation/observability tooling.',
    },
  ],
}

export interface SkillCategory {
  name: string
  description: string
  icon: 'ai' | 'data' | 'cloud' | 'web' | 'bi'
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'AI / LLM Engineering',
    description: 'Multi-agent systems and retrieval-augmented applications across multiple LLM providers.',
    icon: 'ai',
    skills: [
      'OpenAI API',
      'Anthropic Claude',
      'Azure OpenAI',
      'Google Gemini',
      'Groq',
      'NVIDIA NeMoTron',
      'LangChain',
      'LangGraph',
      'LangSmith',
      'Qdrant',
      'Multi-Agent Systems',
      'Prompt Engineering',
      'Retrieval-Augmented Generation (RAG)',
    ],
  },
  {
    name: 'Data Engineering',
    description: 'Pipelines, migrations, and validation work that keep production systems reliable.',
    icon: 'data',
    skills: ['ETL', 'Data Validation', 'Data Integrity', 'Python (Pandas, NumPy)', 'SQL'],
  },
  {
    name: 'Databases',
    description: 'Query performance tuning and schema work across relational engines.',
    icon: 'data',
    skills: ['MySQL', 'MSSQL', 'MariaDB', 'Azure SQL'],
  },
  {
    name: 'Cloud & Automation',
    description: 'Azure-based automation and orchestration for data and notification pipelines.',
    icon: 'cloud',
    skills: ['Microsoft Azure', 'Azure Functions', 'Azure Data Factory', 'Azure DevOps Server', 'Jenkins', 'Git / GitHub', 'CI/CD'],
  },
  {
    name: 'Backend & Web Automation',
    description: 'Service layers and scraping/automation tooling behind the AI systems.',
    icon: 'web',
    skills: ['FastAPI', 'Flask', 'Pydantic', 'Selenium'],
  },
  {
    name: 'Analytics & BI',
    description: 'Turning pipeline and system health into dashboards stakeholders actually read.',
    icon: 'bi',
    skills: ['Power BI', 'Advanced Excel', 'Tableau'],
  },
]

export interface ExperienceHighlightGroup {
  heading: string
  techStack?: string
  bullets: string[]
}

export interface ExperienceEntry {
  role: string
  company: string
  location: string
  period: string
  groups: ExperienceHighlightGroup[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'AI Engineer',
    company: 'Valethi Technologies',
    location: 'Nagpur, Maharashtra, India',
    period: 'Feb 2024 - Present',
    groups: [
      {
        heading: 'Multi-Agent Product Advisor Chatbot (Client-Facing Widget)',
        techStack: 'Python, SQL, OpenAI / Claude / Gemini APIs',
        bullets: [
          "Architected and shipped a multi-agent AI widget for a client's production website: a schema-discovery agent introspects the live database, a retrieval agent selects and queries relevant tables based on the user's intent, and a response agent generates answers grounded strictly in retrieved data.",
          'Designed a lightweight custom retrieval pipeline as a lower-overhead alternative to a traditional vector-database RAG stack, while keeping every response grounded in live data.',
        ],
      },
      {
        heading: 'AI-Assisted Synthetic Test-Data Generator',
        techStack: 'Python, OpenAI / Groq APIs, Web Scraping',
        bullets: [
          'Built an end-to-end tool that scrapes web app input fields, infers data types, and generates structured test datasets for QA/BA teams.',
          'Combined rule-based generation with LLM-driven scenarios covering Unicode, SQL-injection, boundary, and null edge cases. This cuts manual test-data authoring effort by an estimated 70%.',
        ],
      },
      {
        heading: 'Data Engineering & Automation',
        bullets: [
          'Automated database log-analysis pipelines using Python, reducing manual effort by 80% and saving 65+ hours/month.',
          'Led an Excel-to-MySQL migration pipeline with automated validation checks, reducing data inconsistencies by 35%.',
          'Analyzed 500+ slow-running queries across MySQL, MariaDB, and MSSQL, improving average query performance by 35%.',
          'Monitored Azure Functions performance, achieving 99.8% uptime for automated notification systems; built Power BI dashboards tracking KPIs across 3 production databases.',
        ],
      },
    ],
  },
]

export interface Project {
  name: string
  tagline: string
  problem: string
  solution: string
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    name: 'Multi-Agent Product Advisor Chatbot',
    tagline: 'A client-facing AI widget that answers product questions grounded in live database data.',
    problem:
      "Customers browsing a client's website had product/account questions that normally required a human to look up in the database, which doesn't scale.",
    solution:
      'Built a multi-agent pipeline: one agent discovers the live database schema, a second agent selects and queries the relevant tables based on the user\'s natural-language intent, and a third agent generates the final answer strictly from the retrieved data. Deliberately skipped a traditional vector-database RAG stack in favor of a lighter, schema-aware retrieval approach suited to structured data.',
    tech: ['Python', 'SQL', 'OpenAI API', 'Anthropic Claude', 'Google Gemini', 'Multi-Agent Systems'],
  },
  {
    name: 'AI-Assisted Synthetic Test-Data Generator',
    tagline: 'Point it at a URL, get realistic and adversarial test data for every input field, automatically.',
    problem:
      'QA and BA teams were hand-writing test data for web forms, with inconsistent coverage of edge cases like Unicode input, SQL injection strings, boundary values, and nulls.',
    solution:
      'Built a tool that scrapes every input field on a target web app, infers each field\'s data type, and generates test datasets by combining a rule-based generator with LLM-driven scenario generation, covering the edge cases a manual pass tends to miss. Cuts manual test-data authoring effort by an estimated 70%.',
    tech: ['Python', 'OpenAI API', 'Groq', 'Web Scraping (Selenium)'],
  },
  {
    name: 'AI Offside Review',
    tagline: 'A personal project reconstructing the geometry behind semi-automated offside technology, with an AI layer that explains the call.',
    problem:
      "Semi-automated offside technology settles marginal football calls to the centimeter, but from the outside it's a black box: raw coordinates in, a decision out with no explanation.",
    solution:
      "Modeled a full defensive line and the actual second-last-defender rule that defines an offside line, computed a genuinely marginal call to the centimeter, then built a prompt from that geometry for an LLM to explain the decision in plain English (with a deterministic fallback so the script runs end to end without an API key).",
    tech: ['Python', 'NumPy', 'Matplotlib', 'OpenAI API'],
    github: 'https://github.com/ShantanuKadukar56/ai-offside-review',
  },
]

export interface Certification {
  name: string
  issuer: string
  issued: string
  credentialId?: string
}

export const certifications: Certification[] = [
  {
    name: 'AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents',
    issuer: 'Udemy',
    issued: 'May 2026',
    credentialId: '49947daf-e59c-4980-bb49-ff88b1cd4da3',
  },
  {
    name: 'Academy Accreditation - Databricks Fundamentals',
    issuer: 'Databricks',
    issued: 'Jan 2026',
    credentialId: '172554347',
  },
  {
    name: 'Microsoft Azure',
    issuer: 'Udemy',
    issued: 'Aug 2025',
    credentialId: 'a9ed70b5-ef66-41da-bb17-e5b05d2d258a',
  },
  {
    name: 'Data Analytics Certification',
    issuer: 'Qspiders, Bangalore',
    issued: '',
  },
]

export const education = {
  institution: 'Sinhgad College of Engineering, Pune',
  degree: 'Bachelor of Engineering, Mechanical Engineering',
  period: 'Aug 2018 - Jun 2022',
  detail: 'CGPA 8.62',
}

export interface AIStackNode {
  label: string
  children: string[]
}

export const aiStack: { root: string; branches: AIStackNode[]; output: string } = {
  root: 'AI SYSTEMS',
  branches: [
    { label: 'LLM Providers', children: ['OpenAI + Claude', 'Gemini + Groq'] },
    { label: 'Agents & Orchestration', children: ['Multi-Agent Systems', 'LangGraph'] },
    { label: 'Data & Retrieval', children: ['SQL Retrieval', 'Qdrant'] },
  ],
  output: 'Production Systems',
}
