import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, CheckCircle, Star, GitFork, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Paulify — E-Commerce Platform",
    category: "Full Stack",
    status: "Completed",
    description:
      "Full-stack e-commerce platform delivering a seamless shopping experience with secure transactions, product management, REST API backend, and MySQL database. Built with modular architecture for scalability.",
    tech: ["React", "Spring Boot", "MySQL", "Bootstrap", "JavaScript", "REST API"],
    features: ["Responsive UI", "Secure Transactions", "Product Management", "REST API Backend"],
    live: null,
    github: "https://github.com/rspaul11/paulify",
    stars: 1,
  },
  {
    title: "100+ Front-End Projects",
    category: "Frontend",
    status: "Completed",
    description:
      "Comprehensive collection of 100+ front-end mini projects built to master HTML, CSS, JavaScript, and React. Covers responsive UI design, interactive components, API integrations, and modern layout techniques.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Flexbox", "CSS Grid"],
    features: ["Responsive Layouts", "API Integration", "Interactive Components", "Modern Patterns"],
    live: null,
    github: "https://github.com/rspaul11/Front-end-Projects",
    stars: 1,
  },
  {
    title: "Full-Stack Web Development Project",
    category: "Full Stack",
    status: "Completed",
    description:
      "End-to-end full-stack web application demonstrating Java backend with Spring Boot, RESTful API architecture, and frontend integration. Showcases enterprise-grade patterns and clean code practices.",
    tech: ["Java", "Spring Boot", "MySQL", "JDBC", "HTML", "CSS"],
    features: ["MVC Architecture", "Database Integration", "REST Endpoints", "Clean Code"],
    live: null,
    github: "https://github.com/rspaul11/Full-Stack-Web-Development-Project",
    stars: 1,
  },
  {
    title: "Portfolio Website",
    category: "Frontend",
    status: "Live",
    description:
      "Modern developer portfolio with 3D animations, glassmorphism design, interactive code demos, AI chatbot, and immersive scroll effects. Built with React, Three.js, and Framer Motion.",
    tech: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Framer Motion"],
    features: ["3D Animations", "AI Chatbot", "Dark/Light Theme", "Glassmorphism"],
    live: "#",
    github: "https://github.com/rspaul11",
    stars: 0,
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <SectionHeading label="Portfolio" title="Featured Projects" subtitle="A showcase of my work, from full-stack platforms to creative front-end experiments" />

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "gradient-bg text-background shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filtered.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card rounded-xl overflow-hidden hover:glow-border-primary transition-all duration-500 h-full flex flex-col shimmer group"
                >
                  {/* Header */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono gradient-bg text-background">{project.category}</span>
                      <span className="flex items-center gap-1 text-xs text-accent">
                        <CheckCircle size={12} /> {project.status}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-lg mb-3 group-hover:gradient-text transition-all">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.features.map((f) => (
                        <div key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.1 }}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/40 transition-colors"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/30">
                      <div className="flex gap-3">
                        {project.github && (
                          <motion.a
                            whileHover={{ x: 2 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github size={14} /> Source
                          </motion.a>
                        )}
                        {project.live && project.live !== "#" && (
                          <motion.a
                            whileHover={{ x: 2 }}
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                          >
                            <ExternalLink size={14} /> Live Demo
                          </motion.a>
                        )}
                      </div>
                      {project.stars > 0 && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star size={12} className="text-accent" /> {project.stars}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <motion.a
              href="https://github.com/rspaul11?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm glass hover:glow-border-primary transition-all"
            >
              View All Repositories <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
