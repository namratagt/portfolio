import { motion } from "framer-motion";
import { certifications } from "../utils/utils";

const Certifications = () => {

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
      id="certifications"
      className="bg-[#0a0a0f] py-20 border-t border-white/[0.04]"
      aria-labelledby="certifications-heading"
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
          <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-3">
            Credentials
          </p>
          <h2
            id="certifications-heading"
            className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-semibold text-white mb-4"
          >
            Certifications
          </h2>
          <p className="text-neutral-400 max-w-xl">
            Professional certifications validating expertise in cloud, frontend development, and design.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
          aria-label="Certifications list"
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              role="listitem"
              aria-label={`${cert.title} from ${cert.issuer}`}
            >
              {/* Status Badge */}
              {cert.status === "in-progress" && (
                <span className="absolute top-4 right-4 text-[10px] px-2 py-1 bg-amber-500/10 text-amber-500 rounded-full uppercase tracking-wider">
                  In Progress
                </span>
              )}
              {cert.status === "completed" && (
                <span className="absolute top-4 right-4 text-[10px] px-2 py-1 bg-green-500/10 text-green-500 rounded-full uppercase tracking-wider">
                  Verified
                </span>
              )}

              {/* Badge Icon */}
              <div className="text-4xl mb-4">{cert.badgeIcon}</div>

              {/* Content */}
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-medium text-white mb-2 group-hover:text-amber-500 transition-colors">
                {cert.title}
              </h3>
              <p className="text-neutral-400 text-sm mb-1">{cert.issuer}</p>
              <p className="text-neutral-500 text-xs">{cert.date}</p>

              {/* View Link */}
              {cert.status === "completed" && cert.credentialUrl !== "#" && (
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Credential
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Learning Resources Note */}
        <motion.div
          className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/[0.05]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl">📚</span>
            <div>
              <h4 className="text-white font-medium mb-2">Continuous Learning</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Currently pursuing certifications in cloud computing and advanced frontend development. 
                Committed to staying current with industry best practices and emerging technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;