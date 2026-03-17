import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Code2, Layers, Database, Cpu, Globe, Zap, Trophy, BookOpen, Target, Monitor } from "lucide-react";
import Scene3D from "./Scene3D";

const highlights = [
  { icon: Code2, label: "Frontend Development", desc: "React, Tailwind CSS, Bootstrap, JavaScript ES6+" },
  { icon: Layers, label: "Backend Engineering", desc: "Spring Boot, Hibernate, REST APIs, JSP/Servlets" },
  { icon: Database, label: "Database Management", desc: "MySQL, JDBC, Data Modeling, SQL Optimization" },
  { icon: Globe, label: "Cloud & DevOps", desc: "AWS, Git, GitHub, CI/CD Pipelines" },
  { icon: Cpu, label: "AI-Powered Workflow", desc: "ChatGPT, Claude, Antigravity, AI-Assisted Development" },
  { icon: Zap, label: "Performance Focus", desc: "Optimization, Accessibility, Core Web Vitals" },
];

const quickFacts = [
  { icon: Trophy, text: "Hackathon Winner — TechSprint 2025" },
  { icon: Monitor, text: "100+ Frontend Projects Built" },
  { icon: BookOpen, text: "B.Tech CSE — CGPA 8.23/10" },
  { icon: Target, text: "371+ GitHub Contributions (Last Year)" },
];

const About = () => (
  <section id="about" className="section-padding relative">
    <Scene3D variant="section" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto relative z-10">
      <SectionHeading label="About Me" title="Passionate Full Stack Developer" subtitle="Building digital experiences that make an impact" />
      
      <div className="grid lg:grid-cols-2 gap-6 items-stretch">
        {/* Left: Who I Am */}
        <ScrollReveal className="h-full">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-2xl p-6 hover:glow-border-primary transition-all duration-500 hover-lift shimmer h-full flex flex-col justify-center"
          >
            <h3 className="font-display font-semibold text-lg mb-3 gradient-text inline-block">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I'm <span className="text-foreground font-medium">Rajsekhar Paul</span>, a detail-oriented Full Stack Java Developer passionate about building web applications that are both beautiful and highly functional. My expertise spans from crafting pixel-perfect React frontends to architecting robust Spring Boot backends.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mt-3">
              Currently completing my B.Tech in Computer Science at Satyasai Engineering College while training at <span className="text-accent font-medium">TAP Academy</span> in Java Full Stack Development. I've shipped real-world projects like <span className="text-accent font-medium">Paulify</span> — a full-stack e-commerce platform.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mt-3">
              I'm a <span className="text-accent font-medium">Hackathon Winner (TechSprint 2025)</span> driven by solving complex problems and creating digital experiences at scale. Whether it's crafting intuitive UIs or designing RESTful APIs, I approach every project with precision and creativity.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Right: Skills Grid - matching height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.label} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-card rounded-xl p-4 flex items-start gap-3 hover:glow-border-primary transition-all duration-300 group h-full tilt-hover"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                >
                  <h.icon size={18} className="text-background" />
                </motion.div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-sm mb-0.5">{h.label}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Quick Facts - Full width below, aligned with both columns */}
      <ScrollReveal className="mt-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass-card rounded-2xl p-5 hover:glow-border-primary transition-all duration-500 shimmer"
        >
          <h3 className="font-display font-semibold text-sm mb-4 gradient-text inline-block">Quick Facts</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-sm"
              >
                <fact.icon size={14} className="text-accent shrink-0" />
                <span className="text-muted-foreground">{fact.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </ScrollReveal>
    </div>
  </section>
);

export default About;
