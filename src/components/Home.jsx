import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../utils/utils";

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Microservices",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]"
      aria-labelledby="home-heading"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-neutral-800/20 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-stone-800/15 blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-32">
        <div className="grid lg:grid-cols-[1fr_0.5fr] gap-20 items-center">
          {/* Left column */}
          <motion.div variants={container} initial="hidden" animate="visible">
            {/* Status */}
            <motion.div variants={fadeUp} className="mb-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true"></span>
                <span className="text-neutral-300 text-sm">Open to opportunities</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              id="home-heading"
              className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight mb-6"
            >
              Namrata Gupta
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl text-neutral-300 font-light mb-6"
            >
              Full-Stack Development Engineer
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-[17px] text-neutral-400 max-w-xl leading-relaxed mb-10"
            >
              I design and build scalable backend systems and modern web
              interfaces. Currently a Specialist Programmer at Infosys, 
              architecting microservices handling 1M+ transactions weekly.
            </motion.p>

            {/* Tech pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10" aria-label="Tech stack">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-[13px] font-medium text-neutral-300 bg-white/[0.03] border border-white/[0.06] rounded-full hover:text-white hover:border-white/[0.1] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-white bg-white/[0.08] border border-white/[0.1] rounded-full hover:bg-white/[0.12] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-neutral-300 hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download="Namrata_Gupta_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium text-amber-500 hover:text-amber-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-full"
                aria-label="Download resume as PDF"
              >
                Download Resume ↓
              </a>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 flex-wrap">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-500 transition-colors duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              >
                LinkedIn
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-500 transition-colors duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              >
                GitHub
              </a>
              <span className="text-neutral-600" aria-hidden="true">·</span>
              <a
                href="mailto:namrata1677@gmail.com"
                className="text-neutral-400 hover:text-amber-500 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              >
                namrata1677@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* Right column — Stats */}
          <motion.aside
            className="hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            aria-label="Career highlights"
          >
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-5">Highlights</p>
              <div className="space-y-6">
                <div>
                  <p className="text-2xl font-semibold text-white font-[family-name:var(--font-heading)]">32%</p>
                  <p className="text-neutral-400 text-sm mt-1">API latency reduction</p>
                </div>
                <div className="w-full h-px bg-white/[0.05]" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-semibold text-white font-[family-name:var(--font-heading)]">1M+</p>
                  <p className="text-neutral-400 text-sm mt-1">Transactions processed weekly</p>
                </div>
                <div className="w-full h-px bg-white/[0.05]" aria-hidden="true" />
                <div>
                  <p className="text-2xl font-semibold text-white font-[family-name:var(--font-heading)]">57K+</p>
                  <p className="text-neutral-400 text-sm mt-1">Hackathon participants — Winner</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <p className="text-white text-sm font-medium">Specialist Programmer</p>
              <p className="text-neutral-400 text-sm">Infosys · Aug 2024 – Present</p>
            </div>
          </motion.aside>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a
            href="#experience"
            className="text-neutral-500 hover:text-neutral-300 transition-colors text-xs uppercase tracking-widest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-2 py-1"
            aria-label="Scroll to experience section"
          >
            Scroll
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
