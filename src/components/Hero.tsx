import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Github, Linkedin, ChevronDown } from "lucide-react";
import Scene3D from "./Scene3D";
import ParticleField from "./ParticleField";

const roles = ["Software Developer", "Developer of Paulify", "Full Stack Engineer", "React Specialist"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.slice(0, text.length + 1));
          if (text.length + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(currentRole.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      <Scene3D variant="hero" />
      <ParticleField />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/20 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/20 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-mono text-accent tracking-widest uppercase mb-4"
          >
            Full Stack Developer
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text text-glow">Rajsekhar Paul</span>
          </motion.h1>
          <div className="h-10 mb-6">
            <span className="font-display text-xl md:text-2xl text-muted-foreground">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            Crafting scalable, pixel-perfect web applications with modern technologies. 
            Passionate about clean architecture, intuitive UX, and turning complex problems 
            into elegant digital solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8"
          >
            <span className="flex items-center gap-1.5 glass-card rounded-full px-4 py-1.5">
              <MapPin size={14} className="text-accent" /> Bengaluru, Karnataka
            </span>
            <span className="flex items-center gap-1.5 glass-card rounded-full px-4 py-1.5">
              <Briefcase size={14} className="text-accent" /> Open for opportunities
            </span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg font-semibold text-sm gradient-bg text-background hover:opacity-90 transition-opacity shadow-lg"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg font-semibold text-sm glass hover:glow-border-primary transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="https://github.com/rspaul11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:glow-border-primary transition-all"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rspaul11"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="w-12 h-12 rounded-lg glass flex items-center justify-center hover:glow-border-primary transition-all"
            >
              <Linkedin size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <motion.div 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full breathing-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src="https://image2url.com/r2/default/images/1773507032694-0acfd840-4361-4e92-bc3f-ace816200662.jpeg"
                alt="Rajsekhar Paul"
                className="w-full h-full rounded-full object-cover border-2 border-border/50"
              />
            </motion.div>
            {/* Orbiting elements */}
            <motion.div 
              className="absolute -top-2 -right-2 w-4 h-4 rounded-full gradient-bg"
              animate={{ y: [-5, 5, -5], x: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-accent/30"
              animate={{ y: [5, -5, 5], x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-primary/40"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-mono">Scroll</span>
          <ChevronDown size={16} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
