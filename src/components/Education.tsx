import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, MapPin, Calendar, Trophy } from "lucide-react";

const certifications = [
  "Java Full Stack Development — TAP Academy",
  "Spring Boot & Hibernate — Self-Study",
  "React & Modern JavaScript — Project-Based",
  "AWS Cloud Fundamentals",
];

const Education = () => (
  <section id="education" className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto relative z-10">
      <SectionHeading label="Education" title="Academic Background" subtitle="My academic foundation and continuous learning path" />
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Main Degree */}
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-2xl p-8 hover:glow-border-primary transition-all duration-500 shimmer h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center"
              >
                <GraduationCap size={24} className="text-background" />
              </motion.div>
              <div>
                <h3 className="font-display font-semibold text-lg">B.Tech in Computer Science</h3>
                <p className="text-xs text-muted-foreground">Engineering Degree</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen size={14} className="text-accent shrink-0" />
                Satyasai Engineering College (BPUT)
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-accent shrink-0" />
                Balasore, Odisha, India
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar size={14} className="text-accent shrink-0" />
                Jul 2022 – Jul 2026
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4 flex items-center gap-3"
            >
              <Award size={20} className="text-accent" />
              <div>
                <p className="text-xs text-muted-foreground">Current CGPA</p>
                <p className="font-display font-bold text-xl gradient-text inline-block">8.23 / 10</p>
              </div>
            </motion.div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/30">
              <Trophy size={14} className="text-accent" />
              <span className="text-sm text-accent font-medium">Hackathon Winner — TechSprint 2025</span>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Certifications & Training */}
        <ScrollReveal delay={0.15}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-2xl p-8 hover:glow-border-primary transition-all duration-500 shimmer h-full"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 15 }}
                className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center"
              >
                <Award size={24} className="text-background" />
              </motion.div>
              <div>
                <h3 className="font-display font-semibold text-lg">Training & Certifications</h3>
                <p className="text-xs text-muted-foreground">Continuous Learning</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 glass rounded-lg p-3 hover:glow-border-primary transition-all group"
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-background">{i + 1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{cert}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border/30">
              <p className="text-xs text-muted-foreground mb-2">Core Subjects Mastered</p>
              <div className="flex flex-wrap gap-2">
                {["OOP", "DBMS", "OS", "Computer Networks", "Data Structures"].map((subj) => (
                  <motion.span
                    key={subj}
                    whileHover={{ scale: 1.1 }}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground border border-border/50 hover:border-primary/40 transition-colors"
                  >
                    {subj}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Education;
