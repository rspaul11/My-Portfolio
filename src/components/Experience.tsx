import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Code2, BookOpen, Trophy, GraduationCap } from "lucide-react";
import Scene3D from "./Scene3D";

const experiences = [
  {
    icon: GraduationCap,
    title: "Java Full Stack Training",
    subtitle: "TAP Academy, Bengaluru",
    period: "2026 – Present",
    description:
      "Intensive full-stack training program covering Java, Spring Boot, Hibernate ORM, REST API architecture, system design patterns, and enterprise-grade development practices.",
    tech: ["Java", "Spring Boot", "Hibernate", "System Design"],
    highlight: false,
  },
  {
    icon: Trophy,
    title: "Hackathon Winner",
    subtitle: "TechSprint 2025",
    period: "2025",
    description:
      "Won the TechSprint 2025 hackathon, competing against talented developers. Demonstrated ability to build production-quality solutions under time pressure with innovative problem-solving.",
    tech: ["Innovation", "Rapid Prototyping", "Team Collaboration", "Full Stack"],
    highlight: true,
  },
  {
    icon: BookOpen,
    title: "Open Source Contributor",
    subtitle: "GitHub — 371+ Contributions",
    period: "2025 – Present",
    description:
      "Actively contributing to open-source projects and maintaining a strong GitHub portfolio with 371+ contributions in the last year. Focused on mastering full-stack architecture and cloud deployment.",
    tech: ["Git", "Open Source", "AWS", "CI/CD"],
    highlight: false,
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    subtitle: "Self-Directed Projects & Learning",
    period: "2024 – Present",
    description:
      "Building production-grade web applications using React, Spring Boot, and MySQL. Developed Paulify (e-commerce platform) and 100+ front-end projects covering responsive design, API integration, and modern UI patterns.",
    tech: ["React", "Spring Boot", "MySQL", "REST API"],
    highlight: false,
  },
];

const Experience = () => (
  <section id="experience" className="section-padding relative">
    <Scene3D variant="minimal" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto relative z-10">
      <SectionHeading label="Experience" title="My Journey" subtitle="From hackathon wins to production-ready full-stack applications" />
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.title} delay={i * 0.1}>
            <div className="relative pl-8 border-l-2 border-primary/30 group">
              <motion.div
                className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${exp.highlight ? 'bg-accent' : 'gradient-bg'} glow-primary`}
                whileHover={{ scale: 1.5 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                className={`glass-card rounded-xl p-6 hover:glow-border-primary transition-all duration-500 shimmer ${exp.highlight ? 'ring-1 ring-accent/30' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-2">
                  <span className={`text-xs font-mono shrink-0 sm:order-2 sm:ml-auto ${exp.highlight ? 'text-accent font-semibold' : 'text-accent'}`}>{exp.period}</span>
                  <div className="flex items-center gap-3 flex-1 min-w-0 sm:order-1">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className={`w-10 h-10 rounded-lg ${exp.highlight ? 'bg-accent' : 'gradient-bg'} flex items-center justify-center shrink-0`}
                    >
                      <exp.icon size={18} className="text-background" />
                    </motion.div>
                    <div className="min-w-0">
                      <h3 className="font-display font-semibold text-base">{exp.title}</h3>
                      <p className="text-xs text-muted-foreground">{exp.subtitle}</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.1 }}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/40 transition-colors"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
