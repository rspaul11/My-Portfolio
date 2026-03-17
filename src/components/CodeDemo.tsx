import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, RotateCcw, Terminal, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const demos = [
  {
    title: "React Counter",
    language: "jsx",
    code: `function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}`,
    preview: "counter",
  },
  {
    title: "CSS Animation",
    language: "css",
    code: `.box {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #6366f1, #06b6d4);
  border-radius: 16px;
  animation: morph 3s ease-in-out infinite;
}

@keyframes morph {
  0%, 100% { 
    border-radius: 16px;
    transform: rotate(0deg) scale(1);
  }
  25% { 
    border-radius: 50%;
    transform: rotate(90deg) scale(1.1);
  }
  50% { 
    border-radius: 16px;
    transform: rotate(180deg) scale(0.9);
  }
  75% { 
    border-radius: 50%;
    transform: rotate(270deg) scale(1.1);
  }
}`,
    preview: "animation",
  },
  {
    title: "API Fetch",
    language: "javascript",
    code: `async function fetchUser(id) {
  try {
    const res = await fetch(
      \`https://jsonplaceholder.typicode.com/users/\${id}\`
    );
    const user = await res.json();
    
    console.log(\`Name: \${user.name}\`);
    console.log(\`Email: \${user.email}\`);
    console.log(\`Company: \${user.company.name}\`);
    
    return user;
  } catch (err) {
    console.error("Failed to fetch:", err);
  }
}

fetchUser(1);`,
    preview: "fetch",
  },
];

const CounterPreview = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        key={count}
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-5xl font-display font-bold gradient-text"
      >
        {count}
      </motion.div>
      <div className="flex gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCount((c) => c + 1)}
          className="px-4 py-2 rounded-lg text-sm font-semibold gradient-bg text-background"
        >
          Increment
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCount(0)}
          className="px-4 py-2 rounded-lg text-sm font-semibold glass text-foreground"
        >
          Reset
        </motion.button>
      </div>
    </div>
  );
};

const AnimationPreview = () => (
  <div className="flex items-center justify-center">
    <motion.div
      className="w-20 h-20"
      style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
      animate={{
        borderRadius: ["16px", "50%", "16px", "50%", "16px"],
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1.1, 0.9, 1.1, 1],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const FetchPreview = () => {
  const [data, setData] = useState<{ name: string; email: string; company: { name: string } } | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setData(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const user = await res.json();
      setData(user);
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 text-center">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={fetchData}
        disabled={loading}
        className="px-4 py-2 rounded-lg text-sm font-semibold gradient-bg text-background disabled:opacity-50"
      >
        {loading ? "Fetching..." : "Run Fetch"}
      </motion.button>
      <AnimatePresence>
        {data && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="glass rounded-lg p-3 text-xs font-mono text-left space-y-1"
          >
            <p><span className="text-accent">Name:</span> {data.name}</p>
            <p><span className="text-accent">Email:</span> {data.email}</p>
            <p><span className="text-accent">Company:</span> {data.company.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CodeDemo = () => {
  const [active, setActive] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setTypedCode("");
    setIsTyping(true);
    const code = demos[active].code;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTypedCode(code.slice(0, i));
      if (i >= code.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 8);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section id="code-demos" className="section-padding relative">
      <div className="container mx-auto relative z-10">
        <SectionHeading
          label="Live Demos"
          title="Interactive Code Playground"
          subtitle="Real working code demos — click tabs to explore different examples"
        />

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {demos.map((demo, i) => (
            <motion.button
              key={demo.title}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "gradient-bg text-background shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {demo.title}
            </motion.button>
          ))}
        </div>

        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Code editor */}
            <motion.div
              layout
              className="glass rounded-2xl overflow-hidden border border-border/50 hover:glow-border-primary transition-all duration-500"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/50">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-destructive/60" />
                  <span className="w-3 h-3 rounded-full bg-accent/40" />
                  <span className="w-3 h-3 rounded-full bg-primary/40" />
                </div>
                <div className="flex items-center gap-1.5 ml-2 text-xs text-muted-foreground font-mono">
                  <Code2 size={12} />
                  {demos[active].title}.{demos[active].language}
                </div>
              </div>
              <div className="p-4 max-h-[400px] overflow-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="text-foreground/90">
                    {typedCode}
                    {isTyping && <span className="animate-pulse text-primary">▊</span>}
                  </code>
                </pre>
              </div>
            </motion.div>

            {/* Live preview */}
            <motion.div
              layout
              className="glass rounded-2xl overflow-hidden border border-border/50 hover:glow-border-primary transition-all duration-500"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-card/50">
                <Terminal size={14} className="text-accent" />
                <span className="text-xs text-muted-foreground font-mono">Output</span>
                <motion.button
                  whileHover={{ rotate: -180 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => { setActive(active); }}
                  className="ml-auto text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw size={12} />
                </motion.button>
              </div>
              <div className="p-6 min-h-[300px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    {demos[active].preview === "counter" && <CounterPreview />}
                    {demos[active].preview === "animation" && <AnimationPreview />}
                    {demos[active].preview === "fetch" && <FetchPreview />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CodeDemo;
