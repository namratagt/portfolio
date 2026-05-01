import React from "react";
import { motion } from "framer-motion";
import { skillCategories, stats } from "../utils/utils";

const Skills = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
      id="skills"
      className="bg-[#0a0a0f] py-20 border-t border-white/[0.04]"
      aria-labelledby="skills-heading"
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
          <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-3">Expertise</p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-semibold text-white mb-4"
          >
            Technical Skills
          </h2>
          <p className="text-neutral-400 max-w-xl">
            Comprehensive expertise across the full development stack with a focus on scalable, performant solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
          aria-label="Skill categories"
        >
          {skillCategories.map((category, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.08] transition-colors duration-300"
              role="listitem"
            >
              <h3 className="text-white font-medium mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.category} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-[13px] text-neutral-300 bg-white/[0.03] border border-white/[0.05] rounded-md"
                    role="listitem"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          role="list"
          aria-label="Achievement statistics"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center"
              role="listitem"
            >
              <p className="text-3xl font-[family-name:var(--font-heading)] font-semibold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-neutral-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;