import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on devices with a pointer
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    const handleHover = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, .cursor-hover").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovering(true));
        el.addEventListener("mouseleave", () => setHovering(false));
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    // Observe DOM changes for hover targets
    handleHover();
    const observer = new MutationObserver(handleHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          background: "hsl(var(--primary))",
        }}
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: clicking ? 0.5 : hovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] border-2 mix-blend-difference"
        style={{
          borderColor: "hsl(var(--accent))",
        }}
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: clicking ? 1.5 : hovering ? 2 : 1,
          opacity: hovering ? 0.8 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
      />
      {/* Glow trail */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9997]"
        style={{
          background: `radial-gradient(circle, hsl(var(--primary) / 0.3), transparent)`,
        }}
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: hovering ? 3 : 1.5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1.2 }}
      />
    </>
  );
};

export default AnimatedCursor;
