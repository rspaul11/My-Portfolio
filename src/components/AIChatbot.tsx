import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { supabase } from "@/integrations/supabase/client";

type Msg = { role: "user" | "assistant"; content: string };

const AIChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm Rajsekhar's AI assistant. Ask me about his skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg: Msg = { role: "user", content: input.trim() };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput("");
    setLoading(true);

    try {
      const resp = await supabase.functions.invoke("chat", {
        body: { messages: allMessages },
      });

      if (resp.error) throw new Error(resp.error.message);

      const data = resp.data;
      if (data?.error) {
        setMessages((prev) => [...prev, { role: "assistant", content: `Sorry, ${data.error}` }]);
      } else {
        const content = data?.choices?.[0]?.message?.content || "I couldn't generate a response.";
        setMessages((prev) => [...prev, { role: "assistant", content }]);
      }
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X size={24} className="text-background" /> : <MessageCircle size={24} className="text-background" />}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] glass-strong rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-border/50"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-border/50 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                <Bot size={16} className="text-background" />
              </div>
              <div>
                <p className="text-sm font-semibold">AI Assistant</p>
                <p className="text-xs text-muted-foreground">Ask about Rajsekhar</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center shrink-0 mt-1">
                      <Bot size={12} className="text-background" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-secondary text-secondary-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div className="prose prose-sm prose-invert max-w-none [&_p]:m-0 [&_ul]:m-0 [&_ol]:m-0">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-1">
                      <User size={12} />
                    </div>
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
                    <Bot size={12} className="text-background" />
                  </div>
                  <Loader2 size={16} className="animate-spin text-muted-foreground" />
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border/50">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex gap-2"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 rounded-lg bg-secondary border border-border/50 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center text-background hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
