import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {projects} from "../utils/utils";
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      id="projects"
      className="bg-[#0a0a0f] py-20 border-t border-white/[0.04]"
      aria-labelledby="projects-heading"
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
          <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-3">Work</p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-semibold text-white mb-4"
          >
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-xl">
            Scalable solutions built with modern technologies, delivering measurable impact.
          </p>
        </motion.div>

        {/* Compact Project Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          role="list"
          aria-label="Featured projects"
        >
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300"
              role="listitem"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-amber-500/80 text-xs">{project.subtitle}</p>
                </div>
                {/* Top metric as a badge */}
                <span className="shrink-0 px-2 py-1 text-[11px] font-medium text-white bg-white/[0.05] border border-white/[0.08] rounded">
                  {project.metrics[0].value}
                </span>
              </div>

              <p className="text-neutral-400 text-[14px] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech tags (compact) */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 3).map((tech, techIdx) => (
                  <span key={techIdx} className="text-[11px] text-neutral-400 px-2 py-0.5 bg-white/[0.03] rounded">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[11px] text-neutral-500 px-2 py-0.5">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="text-amber-500 text-sm hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
              >
                Learn More →
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
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
                    <h3
                      id="modal-title"
                      className="text-2xl font-[family-name:var(--font-heading)] font-semibold text-white mb-1"
                    >
                      {selectedProject.title}
                    </h3>
                    <p className="text-amber-500/80">{selectedProject.subtitle}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-neutral-400 hover:text-white transition-colors p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    aria-label="Close dialog"
                    autoFocus
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-neutral-300 leading-relaxed mb-8">
                  {selectedProject.fullDescription}
                </p>

                <div className="mb-8">
                  <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-4">Impact</p>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedProject.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center p-4 bg-white/[0.03] rounded-lg">
                        <p className="text-xl font-semibold text-white mb-1">{metric.value}</p>
                        <p className="text-neutral-500 text-xs">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-4">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm text-neutral-300 bg-white/[0.05] border border-white/[0.08] rounded-md"
                      >
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

export default Projects;
