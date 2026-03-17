import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Brain, Layout, FileCode, Globe, Smartphone, Grid3X3, Sparkles, Cog, GitBranch, Monitor, Terminal, Send, Cloud, Boxes, Lightbulb, Users, Kanban, Shield } from "lucide-react";
import Scene3D from "./Scene3D";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Java", icon: FileCode },
      { name: "JavaScript (ES6+)", icon: Sparkles },
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Layout },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", icon: Cog },
      { name: "Tailwind CSS", icon: Sparkles },
      { name: "Bootstrap", icon: Grid3X3 },
      { name: "Responsive Design", icon: Smartphone },
      { name: "Flexbox & Grid", icon: Grid3X3 },
      { name: "Framer Motion", icon: Sparkles },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Spring Boot", icon: Cog },
      { name: "Spring MVC", icon: Boxes },
      { name: "Hibernate ORM", icon: Database },
      { name: "REST API", icon: Globe },
      { name: "JSP/Servlets", icon: FileCode },
      { name: "JDBC", icon: Terminal },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", icon: Database },
      { name: "SQL Optimization", icon: Lightbulb },
      { name: "Data Modeling", icon: Boxes },
      { name: "DBMS Concepts", icon: Shield },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "VS Code", icon: Monitor },
      { name: "IntelliJ IDEA", icon: Terminal },
      { name: "Postman", icon: Send },
      { name: "AWS (Basics)", icon: Cloud },
    ],
  },
  {
    title: "Core & Soft Skills",
    icon: Brain,
    skills: [
      { name: "OOP & Design Patterns", icon: Boxes },
      { name: "System Design", icon: Cog },
      { name: "Problem Solving", icon: Lightbulb },
      { name: "Agile / Scrum", icon: Kanban },
      { name: "Team Collaboration", icon: Users },
    ],
  },
];

const SkillChip = ({ name, icon: Icon, delay }: { name: string; icon: any; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: delay * 0.05 }}
    whileHover={{ scale: 1.08, y: -2 }}
    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 cursor-default group"
  >
    <Icon size={14} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
    <span className="text-xs font-mono text-foreground/80 group-hover:text-foreground transition-colors whitespace-nowrap">{name}</span>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="section-padding relative">
    <Scene3D variant="section" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto relative z-10">
      <SectionHeading label="Tech Stack" title="Skills & Technologies" subtitle="Technologies I use to craft modern, scalable web applications" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card rounded-xl p-6 h-full hover:glow-border-primary transition-all duration-500 group shimmer"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center shrink-0"
                >
                  <cat.icon size={16} className="text-background" />
                </motion.div>
                <h3 className="font-display font-semibold text-lg gradient-text inline-block">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <SkillChip key={skill.name} name={skill.name} icon={skill.icon} delay={i * cat.skills.length + j} />
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
