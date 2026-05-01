import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { socialLinks } from "./utils/utils";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import catImg from "./assets/1000121034.jpg";
import "./App.css";
function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "experience",
        "skills",
        "projects",
        "certifications",
        "achievements",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`relative min-h-screen ${isDark ? "bg-[#0a0a0f]" : "bg-[#f5f4f0]"}`}
      data-theme={isDark ? "dark" : "light"}
    >
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-black focus:rounded-lg focus:font-medium focus:outline-none"
      >
        Skip to main content
      </a>

      {/* TOP NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDark
              ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/[0.04]"
              : "bg-[#f5f4f0]/90 backdrop-blur-xl border-b border-black/[0.08]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-16">
            <button
              className={`text-lg font-[family-name:var(--font-heading)] font-medium tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg px-1 ${isDark ? 'text-white' : 'text-[#0a0a0f]'}`}
              onClick={() => scrollToSection("home")}
            >
              Namrata<span className="text-amber-500">.</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7" role="menubar">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-[13px] font-medium transition-colors duration-300 rounded px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                  role="menuitem"
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/Namrata_Gupta_Resume.pdf"
                download="Namrata_Gupta_Resume.pdf"
                className="text-[13px] font-medium text-amber-500 hover:text-amber-400 transition-colors rounded px-2 py-1"
              >
                Resume ↓
              </a>
              {/* Theme toggle */}
              <button
                onClick={() => setIsDark((d) => !d)}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/[0.08] text-neutral-400 hover:text-white hover:border-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="Toggle light/dark mode"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile: Resume link */}
            <a
              href="/Namrata_Gupta_Resume.pdf"
              download="Namrata_Gupta_Resume.pdf"
              className="md:hidden text-[12px] font-medium text-amber-500"
            >
              Resume ↓
            </a>
          </div>
        </div>
      </motion.nav>

      {/* MAIN CONTENT */}
      <main id="main-content" role="main" className="pt-16">
        {/* Two-column sticky layout - spans entire page */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-16">
            {/* LEFT - Sticky Name & Intro (stays fixed while right scrolls) */}
            <motion.aside
              className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:sticky lg:top-20 lg:self-start lg:h-[calc(100vh-6rem)] py-16"
              style={{ marginTop: "0" }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div>
                {/* <div className="mb-6">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-neutral-300 text-xs">
                      Open to opportunities
                    </span>
                  </div>
                </div> */}

                <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-white leading-[1.08] tracking-tight mb-3">
                  Namrata Gupta
                </h1>

                <p className="text-lg text-neutral-300 font-light mb-4">
                  Full-Stack Development Engineer
                </p>

                <p className="text-[14px] text-neutral-400 leading-relaxed mb-6">
                  I design and build scalable backend systems and modern web
                  interfaces. Currently a Specialist Programmer at Infosys,
                  architecting microservices handling 1M+ transactions weekly.
                </p>

                {/* Tech pills */}
                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium text-neutral-300 bg-white/[0.03] border border-white/[0.06] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                {/* CTAs */}
                {/* <div className="flex flex-wrap items-center gap-3 mb-6">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-white bg-white/[0.08] border border-white/[0.1] rounded-full hover:bg-white/[0.12] transition-all"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-neutral-300 hover:text-white transition-all rounded-full"
                  >
                    Get in Touch
                  </a>
                </div> */}

                {/* Social */}
                <div className="flex items-center gap-4 mb-6">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="mailto:namrata1677@gmail.com"
                    className="text-neutral-400 hover:text-amber-500 transition-colors text-sm"
                  >
                    Email
                  </a>
                </div>

                <a
                  href="/Namrata_Gupta_Resume.pdf"
                  download="Namrata_Gupta_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-amber-500 border border-amber-500/30 rounded-lg hover:bg-amber-500/10 transition-all"
                >
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
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>

              <p className="text-neutral-600 text-xs mt-10">
                © 2026 Namrata Gupta
              </p>
            </motion.aside>

            {/* RIGHT - All scrollable content */}
            <div className="pt-16 lg:pt-16">
              {/* Mobile-only intro */}
              <div className="lg:hidden mb-12">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="text-neutral-300 text-xs">
                    Open to opportunities
                  </span>
                </div> */}
                <h1 className="text-3xl font-[family-name:var(--font-heading)] font-semibold text-white mb-2">
                  Namrata Gupta
                </h1>
                <p className="text-lg text-neutral-300 font-light mb-3">
                  Full-Stack Development Engineer
                </p>
                <p className="text-[14px] text-neutral-400 leading-relaxed mb-4">
                  Specialist Programmer at Infosys, architecting microservices
                  handling 1M+ transactions weekly.
                </p>
                {/* <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] text-neutral-300 bg-white/[0.03] border border-white/[0.06] rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}
              </div>

              {/* Hero Image + Stats */}
              <section
                id="home"
                className="mb-20 min-h-[calc(100vh-8rem)] flex items-center justify-center"
              >
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <div className="flex justify-center">
                    <img
                      src={catImg}
                      alt="Cat on laptop"
                      className="block mx-auto w-full max-w-[480px] h-auto rounded-2xl"
                    />
                  </div>
                  {/* <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40 mb-6">
                    <img
                      src={myImg}
                      alt="Coding setup"
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div> */}

                  {/* Stats */}
                  {/* <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <p className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
                        32%
                      </p>
                      <p className="text-neutral-400 text-[11px] mt-1">
                        Latency Reduced
                      </p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <p className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
                        1M+
                      </p>
                      <p className="text-neutral-400 text-[11px] mt-1">
                        Transactions/Week
                      </p>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <p className="text-xl font-semibold text-white font-[family-name:var(--font-heading)]">
                        57K+
                      </p>
                      <p className="text-neutral-400 text-[11px] mt-1">
                        Hackathon Winner
                      </p>
                    </div>
                  </div> */}
                </motion.div>
              </section>

              {/* All other sections flow here in the right column */}
              <Experience />
              <Skills />
              <Projects />
              {/* <Certifications /> */}
              <Achievements />
              <Contact />
            </div>
          </div>
        </div>
      </main>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 z-30 w-10 h-10 flex items-center justify-center bg-white/[0.05] border border-white/[0.08] text-neutral-300 rounded-full hover:bg-white/[0.08] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;