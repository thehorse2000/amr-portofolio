export const bio = {
  name: "Amr Osama",
  title: "Senior Software Engineer",
  tagline: "Frontend-focused Lead Developer specializing in e-commerce and AI-driven solutions.",
  description: "Adobe Certified Expert, 5+ years. Optimizes workflows and project setup (30% efficiency gains), builds AI-powered solutions, and ships scalable web apps.",
  email: "amrosama5@gmail.com",
  github: "https://github.com/thehorse2000",
  linkedin: "https://linkedin.com/in/amrosama5",
  resume: "/amr-resume.pdf"
};

export const projects = [
  {
    title: "clinicflow.cloud",
    description: "Advanced AI-powered chatbot optimizing patient communication and automating appointment scheduling via WhatsApp.",
    tags: ["Next.js", "LangGraph.js", "MySQL", "Google APIs", "WhatsApp"],
    github: "",
    live: "https://clinicflow.cloud"
  },
  {
    title: "Blue Dental Management System",
    description: "Co-founded and developed a leading clinic management software in Egypt, streamlining operations for 100+ clinics.",
    tags: ["ElectronJS", "Vue.js", "SQLite", "Sequelize", "Firebase"],
    github: "",
    live: ""
  }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "PHP", "Python", "SQL"],
  frameworks: ["React", "Next.js", "React Native", "Vue.js", "Electron JS", "Laravel", "Magento 2"],
  tools: ["MySQL", "Postgres", "Git", "Docker", "GitHub Actions", "REST APIs", "GraphQL APIs"],
  other: ["AI Agents Development", "Agile Development", "Frontend CWV Optimizations", "English", "Arabic"]
};

export const experience = [
  {
    company: "Scandiweb",
    role: "Lead Remote Developer",
    dates: "Feb 2023 - Present",
    bullets: [
      "Developed e-commerce websites using Magento 2 and React, boosting site performance by 30%.",
      "Optimized Internal Magento Content Types, reducing project bootstrapping time by 30%.",
      "Promoted to Team-Lead (March 2025), guiding a team of 11 developers and implementing efficient project lifecycles.",
      "Enhanced code quality through rigorous reviews and established clear coding standards."
    ]
  },
  {
    company: "clinicflow.cloud",
    role: "Founder & Solo Developer",
    dates: "Feb 2025 - Present",
    bullets: [
      "Engineered an AI-powered chatbot for WhatsApp, automating scheduling and inquiries in real-time.",
      "Reduced manual administrative tasks by over 35% and significantly boosted patient engagement.",
      "Utilized Next.js, LangGraph.js, and Google APIs for high-performance data processing."
    ]
  },
  {
    company: "Blue Dental Management System",
    role: "Co-founder & Full-stack Engineer",
    dates: "2021 - 2024",
    bullets: [
      "Built one of the most widely used dental clinic management systems in Egypt from the ground up.",
      "Streamlined operations for 100+ clinics, improving patient management efficiency by over 40%.",
      "Implemented reliable database solutions using SQLite, Sequelize(ORM), and Firebase."
    ]
  }
];

export const education = [
  {
    degree: "Masters Student In Software Engineering",
    institution: "Cairo University",
    year: "2025 - Present",
    notes: "Major in Software Engineering."
  },
  {
    degree: "Postgraduate Diploma in Computer Science",
    institution: "ISSR - Cairo University",
    year: "2022 - 2024",
    notes: "Coursework: Advanced Algorithms, Database Systems, Cloud Computing."
  }
];

export const certifications = [
  {
    name: "Adobe Certified Expert - Adobe Commerce Developer",
    issuer: "Adobe"
  },
  {
    name: "Hyvä Certified Associate Developer",
    issuer: "Hyvä"
  }
];

export const sections = [
  { id: "intro", label: "Introduction", path: "/" },
  { id: "about", label: "About Me", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "skills-tools", label: "Skills & Tools", path: "/skills-tools" },
  { id: "experience", label: "Experience", path: "/experience" },
  { id: "education", label: "Education", path: "/education" },
  { id: "contact", label: "Contact", path: "/contact" },
  { id: "stats", label: "Stats", path: "/stats" },
];
