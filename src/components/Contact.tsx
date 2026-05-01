import { motion } from "framer-motion";
import { contactLinks } from "../utils/utils";

const Contact = () => {

  return (
    <section
      id="contact"
      className="bg-[#0a0a0f] py-20 border-t border-white/[0.04]"
      aria-labelledby="contact-heading"
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
          <p className="text-[11px] text-amber-500/80 uppercase tracking-wider mb-3">Contact</p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] font-semibold text-white mb-4"
          >
            Get In Touch
          </h2>
          <p className="text-neutral-400 max-w-xl">
            Let's discuss how we can work together to build something great.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10">
              <h3 className="text-lg font-medium text-white mb-4">Contact Information</h3>
              <p className="text-neutral-400 leading-relaxed">
                I'm currently working as a Specialist Programmer at Infosys and always open to
                discussing new opportunities, collaborations, or innovative ideas.
              </p>
            </div>

            <nav className="space-y-4 mb-10" aria-label="Contact links">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-amber-500/30 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  <span className="text-neutral-500 text-sm">{link.label}</span>
                  <span className="text-neutral-300 text-sm group-hover:text-amber-500 transition-colors">
                    {link.value}
                  </span>
                </a>
              ))}
            </nav>

            {/* Download Resume Button */}
            <a
              href="/Namrata_Gupta_Resume.pdf"
              download="Namrata_Gupta_Resume.pdf"
              className="inline-flex items-center gap-3 px-6 py-3 mb-10 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>

            {/* <div className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <p className="text-white text-sm font-medium">Current Position</p>
              <p className="text-neutral-400 text-sm">Specialist Programmer at Infosys</p>
              <p className="text-neutral-500 text-sm mt-1">Aug 2024 – Present</p>
            </div> */}
          </motion.div>

          {/* Contact Form Removed */}
          {/* The "Send a Message" section has been removed to simplify the UI. */}

        </div>

        {/* Footer */}
        <motion.footer
          className="mt-24 pt-8 border-t border-white/[0.04] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          role="contentinfo"
        >
          <p className="text-neutral-500 text-sm">
            © 2026 Namrata Gupta.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;