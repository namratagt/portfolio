import { motion } from "framer-motion";
import { skillCategories, stats } from "../utils/utils";

const Skills = ({ isDark }: { isDark: boolean }) => {

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
      className={`py-20 border-t ${isDark ? "bg-[#0a0a0f] border-white/[0.04]" : "bg-[#f5f4f0] border-black/[0.08]"}`}
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
            className={`text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-semibold mb-4 ${isDark ? "text-white" : "text-[#0a0a0f]"}`}
          >
            Technical Skills
          </h2>
          {/* <p className={`max-w-xl ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
            Comprehensive expertise across the full development stack with a focus on scalable, performant solutions.
          </p> */}
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
              className={`p-6 rounded-xl border transition-colors duration-300 ${isDark ? "bg-white/[0.02] border-white/[0.05] hover:border-white/[0.08]" : "bg-black/[0.02] border-black/[0.05] hover:border-black/[0.08]"}`}
              role="listitem"
            >
              <h3 className={`font-medium mb-4 ${isDark ? "text-white" : "text-[#0a0a0f]"}`}>{category.category}</h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.category} skills`}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1.5 text-[13px] rounded-md ${isDark ? "text-neutral-300 bg-white/[0.03] border-white/[0.05]" : "text-neutral-700 bg-black/[0.03] border-black/[0.05]"}`}
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
              className={`p-6 rounded-xl text-center ${isDark ? "bg-white/[0.02] border-white/[0.05]" : "bg-black/[0.02] border-black/[0.05]"}`}
              role="listitem"
            >
              <p className={`text-3xl font-[family-name:var(--font-heading)] font-semibold mb-2 ${isDark ? "text-white" : "text-[#0a0a0f]"}`}>
                {stat.value}
              </p>
              <p className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;