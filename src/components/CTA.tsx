import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => (
  <section className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />
    <div className="container mx-auto relative z-10">
      <ScrollReveal>
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shimmer"
        >
          {/* Animated background orbs */}
          <motion.div 
            className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-[60px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-accent/10 blur-[60px]"
            animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles size={20} className="text-background" />
            </motion.div>
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Open for opportunities</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Let's work <span className="gradient-text text-glow">together!</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              I'm actively looking for opportunities to contribute as a Full Stack Developer. Let's connect and build something amazing.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold gradient-bg text-background hover:opacity-90 transition-opacity shadow-lg"
            >
              Get In Touch <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTA;
