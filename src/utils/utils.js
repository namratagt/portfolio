export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/namratagupta8",
  github: "https://github.com/namratagt",
  leetcode: "https://leetcode.com/u/namratagt",
  email: "namrata1677@gmail.com"
};

export  const contactLinks = [

    { label: "Email", value: "namrata1677@gmail.com", href: "mailto:namrata1677@gmail.com" },
    // { label: "Phone", value: "+91-8604402848", href: "tel:+918604402848" },
    { label: "LinkedIn", value: socialLinks.linkedin, href: socialLinks.linkedin },
    { label: "GitHub", value: socialLinks.github.replace(/^https?:\/\//, ""), href: socialLinks.github },
    { label: "LeetCode", value: socialLinks.leetcode.replace(/^https?:\/\//, ""), href: socialLinks.leetcode },
  ];

export  const achievements = [
    {
      title: "Google Cloud Hackathon Winner",
      subtitle: "Best Breakthrough Concept Award",
      description:
        "Led a 4-member team to victory among 57,000+ developers at Google Cloud Hackathon (Guinness World Record). Coordinated architecture, delegated tasks, and presented the final solution to judges.",
      stat: "57,000+ Participants",
    },
    {
      title: "Team Mentor & Knowledge Sharer",
      subtitle: "Leadership & Collaboration",
      description:
        "Mentored junior developers, conducted internal tech talks on React performance optimization, and established code review guidelines adopted by the team.",
      stat: "2+ Mentees",
    },
    {
      title: "LeetCode Expert",
      subtitle: "Competitive Programming",
      description:
        "Achieved a LeetCode rating of 1449 through consistent problem-solving practice and algorithmic excellence.",
      stat: "Rating: 1449",
    },
    {
      title: "Performance Optimizer",
      subtitle: "Production Impact",
      description:
        "Optimized API response time and SQL queries, reducing transaction latency by 32% in production environments.",
      stat: "32% Improvement",
    },
  ];

  export  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Expected 2026",
      credentialUrl: "#", // Update with your credential URL
      badgeIcon: "☁️",
      status: "in-progress", // "completed" or "in-progress"
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta (Coursera)",
      date: "Expected 2026",
      credentialUrl: "#", // Update with your credential URL
      badgeIcon: "⚛️",
      status: "in-progress",
    },
    {
      title: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      date: "Expected 2026",
      credentialUrl: "#", // Update with your credential URL
      badgeIcon: "🏆",
      status: "in-progress",
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Google (Coursera)",
      date: "Expected 2026",
      credentialUrl: "#", // Update with your credential URL
      badgeIcon: "🎨",
      status: "in-progress",
    },
  ];

  export   const experiences = [
    {
      role: "Specialist Programmer",
      company: "Infosys",
      period: "Aug 2024 – Present",
      type: "Full-time",
      oneLiner: "Building performant microservices and React dashboards for global enterprise clients.",
      tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Microservices", "CI/CD"],
      highlights: [
        "Developing performant microservices and REST APIs using Java and Spring Boot, focusing on modularity and scalability",
        "Built React dashboards and reusable UI components, improving accessibility and usability across global clients",
        "Optimized API response time and SQL queries, reducing transaction latency by 32%",
        "Collaborated in full Agile SDLC — sprint planning, code reviews, design discussions, release monitoring",
        "Applied problem-solving and automation to reduce manual QA effort through repeatable test workflows",
        "Mentored 2 junior developers on React best practices and code review standards, accelerating their onboarding",
        "Led technical design discussions and presented architectural decisions to cross-functional stakeholders",
      ],
    },
    {
      role: "Front End Developer Intern",
      company: "Orchvate",
      period: "Jan 2024 – Jul 2024",
      type: "Internship",
      oneLiner: "Developed interactive web and mobile UIs with React/React Native, refining UX flows for client-facing products.",
      tech: ["React", "React Native", "Node.js", "Express", "MongoDB"],
      highlights: [
        "Developed interactive web and mobile UIs using React and React Native, enhancing user engagement",
        "Implemented backend modules in Node.js and Express for authentication and data-driven personalization",
        "Worked with product designers to refine UX flows and accessibility for client-facing journeys",
        "Collaborated with a 5-member cross-functional team (designers, QA, backend) to deliver features on tight deadlines",
        "Presented weekly demo sessions to stakeholders, gathering feedback and iterating on product direction",
      ],
    },
  ];

  export   const projects = [
    {
      title: "Super App",
      subtitle: "FinTech Trading & Fund Transfer Platform",
      description: "Multi-module financial platform with ACH transfers, bank linking, and Server-Driven UI.",
      fullDescription:
        "Led frontend development for a multi-module financial platform using React + TypeScript. Built flows for ACH transfers, bank linking, and micro-deposit verification, reducing drop-offs by 28%. Implemented Server-Driven UI (SDUI) with centralized event routing, reducing frontend release dependency by 40%.",
      techStack: ["React", "TypeScript", "SDUI", "ACH Integration", "REST APIs"],
      metrics: [
        { label: "Drop-off Reduction", value: "28%" },
        { label: "Release Dependency", value: "-40%" },
        { label: "Financial Modules", value: "10+" },
      ],
    },
    {
      title: "Insight360",
      subtitle: "Finance Insights Platform",
      description: "Real-time analytics platform processing 1M+ financial transactions per week.",
      fullDescription:
        "Built 5+ Spring Boot microservices with asynchronous Kafka workflows enabling real-time analytics on 1M+ financial transactions/week. Implemented React dashboards with 12+ dynamic charts and filters, increasing user data visibility and reporting efficiency by 41%. Optimized PostgreSQL queries and indexes, reducing P95 query latency from 880ms to 410ms.",
      techStack: ["Spring Boot", "Kafka", "React", "PostgreSQL", "Microservices"],
      metrics: [
        { label: "Transactions/Week", value: "1M+" },
        { label: "Efficiency Gain", value: "41%" },
        { label: "Latency Reduction", value: "53%" },
      ],
    },
    {
      title: "JoBro",
      subtitle: "AI Career Guidance Platform",
      description: "AI-powered career guidance serving 3K+ monthly active users.",
      fullDescription:
        "Developed full-stack modules with authentication and recommendation logic using React + Node.js handling 3K+ monthly active users during beta. Improved match-recommendation algorithm accuracy by 26% using rule-based scoring and metadata tagging. Enhanced onboarding flow, improving session completion rate from 62% to 84%.",
      techStack: ["React", "Node.js", "AI/ML", "MongoDB", "Authentication"],
      metrics: [
        { label: "Monthly Active Users", value: "3K+" },
        { label: "Algorithm Accuracy", value: "+26%" },
        { label: "Completion Rate", value: "84%" },
      ],
    },
    {
      title: "CityPulse",
      subtitle: "Real-Time City Monitoring",
      description: "Live city monitoring dashboard tracking 30+ real-time parameters.",
      fullDescription:
        "Built React UI integrating live event-based maps and heat-visualizations that can track 30+ real-time city parameters. Integrated cloud + microservices APIs enabling 99.1% uptime during continuous event streaming. Reduced map refresh interval from 4.2s to 1.8s via efficient WebSocket subscription strategy.",
      techStack: ["React", "WebSocket", "Cloud APIs", "Event-driven", "Data Viz"],
      metrics: [
        { label: "Real-time Parameters", value: "30+" },
        { label: "Uptime", value: "99.1%" },
        { label: "Refresh Speed", value: "1.8s" },
      ],
    },
    
  ];

  export   const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "JavaScript", "TypeScript", "Python", "C++"],
    },
    {
      category: "Full-Stack",
      skills: ["Spring Boot", "REST APIs", "Microservices", "React.js", "Node.js"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "SQL Optimization"],
    },
    {
      category: "Tools & Practices",
      skills: ["Git", "CI/CD", "Docker", "Agile/Scrum", "Design Patterns"],
    },
    {
      category: "Strengths",
      skills: ["Algorithms", "Problem Solving", "OOP", "Performance Optimization"],
    },
    {
      category: "Additional",
      skills: ["Cloud", "AI/ML APIs", "Event-driven Systems", "Kafka"],
    },
  ];

  export const stats = [
    { value: "32%", label: "API Response Improvement" },
    { value: "1M+", label: "Transactions/Week" },
    { value: "1449", label: "LeetCode Rating" },
  ];