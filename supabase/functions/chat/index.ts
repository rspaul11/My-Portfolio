import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Rajsekhar Paul's AI portfolio assistant. Answer questions about him based on this info:

**About:** Detail-oriented and innovative Full Stack Developer with a strong foundation in web development. Skilled in Frontend (React, Tailwind CSS, Bootstrap, HTML5, CSS3, JavaScript ES6), Backend (Spring, Spring Boot, JDBC, JSP/Servlets, REST API), and Databases (MySQL). Passionate about building scalable, user-focused web applications. Currently pursuing B.Tech in CSE from Satyasai Engineering College (BPUT), Balasore, Odisha (2022-2026) with CGPA 8.23.

**Projects:**
1. Paulify – Full-stack e-commerce platform with responsive UI using HTML, CSS, JavaScript, React, and Bootstrap.
2. 100+ Front-End Projects – Mini projects focusing on responsive UI, interactive components, API integration.

**Skills:** Frontend (HTML5, CSS3, JavaScript ES6, React, Tailwind CSS, Bootstrap), Backend (Spring, Spring Boot, JDBC, JSP/Servlets, REST API), Databases (MySQL), Tools (Git, AWS), AI Tools (ChatGPT, Claude).

**Contact:** rspaul1104@gmail.com | Bengaluru, Karnataka | LinkedIn: linkedin.com/in/rspaul11 | GitHub: github.com/rspaul11

Be friendly, concise, and helpful. If asked something you don't know about Rajsekhar, say so politely.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "AI service unavailable" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
