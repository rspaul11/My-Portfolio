import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github, Phone, Clock, MessageCircle, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rspaul11", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/rspaul11", label: "GitHub" },
  { icon: Mail, href: "mailto:rspaul1104@gmail.com", label: "Email" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "rspaul1104@gmail.com", href: "mailto:rspaul1104@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8144126581", href: "tel:+918144126581" },
  { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India" },
  { icon: Clock, label: "Availability", value: "Open for full-time opportunities", accent: true },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:rspaul1104@gmail.com?subject=${encodeURIComponent(form.subject || `Portfolio Contact from ${form.name}`)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg bg-secondary/50 backdrop-blur-sm border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${
      focused === field ? "border-primary/60 shadow-[0_0_15px_-5px_hsl(var(--primary)/0.3)]" : "border-border/50 hover:border-border"
    }`;

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <SectionHeading label="Contact" title="Let's Work Together" subtitle="Have a project idea or looking for a developer? I'd love to hear from you." />
        
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: Contact Form */}
            <ScrollReveal className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full">
                <h3 className="font-display font-semibold text-base mb-1">Send a Message</h3>
                <p className="text-xs text-muted-foreground mb-6">Fill out the form and I'll get back to you as soon as possible.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Rajsekhar Paul"
                        value={form.name}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused("")}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass("name")}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused("")}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass("email")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      placeholder="Project inquiry, collaboration, etc."
                      value={form.subject}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused("")}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputClass("subject")}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project or say hello..."
                      value={form.message}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused("")}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass("message")} resize-none`}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm gradient-bg text-background hover:opacity-90 transition-opacity shadow-lg"
                  >
                    {sent ? (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                        <MessageCircle size={16} /> Message Sent!
                      </motion.span>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>

            {/* Right: Contact Info */}
            <ScrollReveal delay={0.15} className="lg:col-span-2">
              <div className="flex flex-col gap-3 h-full">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 glass-card rounded-xl p-4 hover:glow-border-primary transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-background" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors break-all">{item.value}</a>
                      ) : (
                        <p className={`text-sm font-medium ${item.accent ? 'text-accent' : ''}`}>{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Social Links */}
                <div className="glass-card rounded-xl p-4 mt-auto">
                  <p className="text-xs text-muted-foreground mb-3">Connect with me</p>
                  <div className="flex gap-3">
                    {socials.map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg glass text-muted-foreground hover:text-foreground hover:glow-border-primary transition-all text-xs font-medium"
                        title={social.label}
                      >
                        <social.icon size={14} />
                        <span className="hidden sm:inline">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
