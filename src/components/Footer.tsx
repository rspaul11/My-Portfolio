import { motion } from "framer-motion";
import { Linkedin, Github, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-8 px-4 relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        © {new Date().getFullYear()} Rajsekhar Paul. Built with{" "}
        <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <Heart size={14} className="text-primary" />
        </motion.span>
      </p>
      <div className="flex gap-4">
        <motion.a 
          href="https://www.linkedin.com/in/rspaul11" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.2, y: -2 }}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin size={18} />
        </motion.a>
        <motion.a 
          href="https://github.com/rspaul11" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.2, y: -2 }}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={18} />
        </motion.a>
      </div>
    </div>
  </footer>
);

export default Footer;
