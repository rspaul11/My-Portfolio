import ScrollReveal from "./ScrollReveal";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ label, title, subtitle }: Props) => (
  <ScrollReveal className="text-center mb-16">
    <p className="text-sm font-mono text-accent tracking-widest uppercase mb-3">{label}</p>
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </ScrollReveal>
);

export default SectionHeading;
