import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../utils/utils";

type ExperienceType = {
  role: string;
  company: string;
  period: string;
  type: string;
  oneLiner: string;
  tech: string[];
  highlights: string[];
};

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceType | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="bg-[#0a0a0f] py-20 border-t border-white/[0.04]"
      aria-labelledby="experience-heading"
    >
      <div>
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-3">Career</p>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-semibold text-white mb-4"
          >
            Experience
          </h2>
          {/* <p className="text-neutral-400 max-w-xl">
            Professional journey building scalable applications and user-centric solutions.
          </p> */}
        </motion.div>

        {/* Compact Cards */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
          aria-label="Work experience timeline"
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.08] transition-colors duration-300"
              role="listitem"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-semibold text-white">
                    {exp.role}
                  </h3>
                  <span className="px-2.5 py-0.5 text-[11px] font-medium text-amber-500/90 bg-amber-500/10 border border-amber-500/20 rounded-full">
                    {exp.type}
                  </span>
                </div>
                <time className="text-neutral-400 text-sm">{exp.period}</time>
              </div>

              <p className="text-neutral-300 text-sm mb-1">{exp.company}</p>
              <p className="text-neutral-400 text-[14px] leading-relaxed mb-4">{exp.oneLiner}</p>

              {/* Tech tags (compact) */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {exp.tech.slice(0, 4).map((t, i) => (
                  <span key={i} className="px-2 py-0.5 text-[11px] text-neutral-400 bg-white/[0.03] rounded">
                    {t}
                  </span>
                ))}
                {exp.tech.length > 4 && (
                  <span className="px-2 py-0.5 text-[11px] text-neutral-500">
                    +{exp.tech.length - 4}
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelectedExp(exp)}
                className="text-amber-500 text-sm hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              >
                Learn More →
              </button>
            </motion.article>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-4">Education</p>
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-semibold text-white">
                  Bachelor of Technology
                </h3>
                {/* <p className="text-neutral-300 text-sm">Computer Science & Engineering</p> */}
              <p className="text-neutral-300 text-sm mb-1">SRM Institute of Science and Technology</p>
              <p className="text-neutral-400 text-[14px] leading-relaxed mb-4">Computer Science & Engineering</p>
             
              </div>
              <p className="text-neutral-400 text-sm">2020 – 2024</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExp(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="bg-[#111] border border-white/[0.08] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-semibold text-white mb-1">
                      {selectedExp.role}
                    </h3>
                    <p className="text-amber-500/80">{selectedExp.company} · {selectedExp.period}</p>
                  </div>
                  <button
                    onClick={() => setSelectedExp(null)}
                    className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    aria-label="Close dialog"
                    autoFocus
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-4">Key Contributions</p>
                  <ul className="space-y-3">
                    {selectedExp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 mt-2 shrink-0" />
                        <span className="text-neutral-300 text-[15px] leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-4">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-sm text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
