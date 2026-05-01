import { motion } from "framer-motion";
import { achievements } from "../utils/utils";
const Achievements = () => {
 
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
      id="achievements"
      className="bg-[#0a0a0f] py-20 border-t border-white/[0.04]"
      aria-labelledby="achievements-heading"
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
          <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-3">Recognition</p>
          <h2
            id="achievements-heading"
            className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-semibold text-white mb-4"
          >
            Achievements
          </h2>
          <p className="text-neutral-400 max-w-xl">
            Milestones and recognitions showcasing excellence and continuous growth.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
          aria-label="Achievement highlights"
        >
          {achievements.map((achievement, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.08] transition-colors duration-300"
              role="listitem"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-[12px] text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
                  {achievement.stat}
                </span>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-semibold text-white mb-1">
                  {achievement.title}
                </h3>
                <p className="text-neutral-400 text-sm">{achievement.subtitle}</p>
              </div>
              <p className="text-neutral-400 text-[15px] leading-relaxed">
                {achievement.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Highlight Card */}
        <motion.article
          className="p-8 rounded-xl bg-white/[0.02] border border-white/[0.06]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          aria-labelledby="highlight-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-4">Highlight</p>
            <h3
              id="highlight-heading"
              className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] font-semibold text-white mb-4"
            >
              Guinness World Record Participant
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Part of the largest online hackathon with 57,000+ developers worldwide, winning the
              Best Breakthrough Concept Award for an innovative cloud-based AI solution.
            </p>
            <div className="flex justify-center gap-8 flex-wrap" role="list" aria-label="Hackathon statistics">
              <div className="text-center" role="listitem">
                <p className="text-2xl font-semibold text-white">57,000+</p>
                <p className="text-neutral-500 text-sm">Participants</p>
              </div>
              <div className="w-px bg-white/[0.08] hidden sm:block" aria-hidden="true" />
              <div className="text-center" role="listitem">
                <p className="text-2xl font-semibold text-amber-500">Winner</p>
                <p className="text-neutral-500 text-sm">Best Concept</p>
              </div>
              <div className="w-px bg-white/[0.08] hidden sm:block" aria-hidden="true" />
              <div className="text-center" role="listitem">
                <p className="text-2xl font-semibold text-white">Global</p>
                <p className="text-neutral-500 text-sm">Reach</p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Achievements;
