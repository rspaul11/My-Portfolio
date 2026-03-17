import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Github, GitCommit, Star, GitFork, Trophy, Activity, Code2, ExternalLink } from "lucide-react";

const GITHUB_USERNAME = "rspaul11";

const stats = [
  { icon: GitCommit, label: "Contributions", value: "371+", desc: "Last year" },
  { icon: Code2, label: "Projects Built", value: "100+", desc: "And counting" },
  { icon: Star, label: "Stars Earned", value: "2+", desc: "Growing" },
  { icon: GitFork, label: "Repositories", value: "10+", desc: "Public repos" },
];

const tabs = ["Overview", "Languages", "Activity"] as const;

const GitHubStats = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Overview");

  return (
    <section id="github" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <SectionHeading
          label="Open Source"
          title="GitHub Statistics"
          subtitle="My contributions, coding activity, and open source journey"
        />

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-xl p-5 text-center hover:glow-border-primary transition-all duration-300 shimmer"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-3"
                >
                  <stat.icon size={18} className="text-background" />
                </motion.div>
                <motion.p
                  className="font-display text-2xl font-bold gradient-text inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm font-medium text-foreground mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "gradient-bg text-background shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <ScrollReveal>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-6 md:p-8 shimmer"
          >
            {activeTab === "Overview" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden bg-secondary/30 p-2">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&include_all_commits=true&count_private=true&hide_border=true&title_color=818cf8&icon_color=06b6d4&text_color=94a3b8&ring_color=818cf8`}
                    alt="GitHub Stats"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden bg-secondary/30 p-2">
                  <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&stroke=818cf8&ring=818cf8&fire=06b6d4&currStreakNum=e2e8f0&sideNums=e2e8f0&currStreakLabel=818cf8&sideLabels=818cf8&dates=94a3b8`}
                    alt="GitHub Streak"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {activeTab === "Languages" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden bg-secondary/30 p-2">
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=donut-vertical&theme=transparent&hide_border=true&title_color=818cf8&text_color=e2e8f0&langs_count=8`}
                    alt="Top Languages"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden bg-secondary/30 p-2">
                  <img
                    src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${GITHUB_USERNAME}&theme=transparent`}
                    alt="Repos Per Language"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {activeTab === "Activity" && (
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden bg-secondary/30 p-2">
                  <img
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=00000000&color=818cf8&line=06b6d4&point=818cf8&area=true&area_color=818cf8&hide_border=true&custom_title=Contribution%20Graph&radius=8`}
                    alt="Contribution Graph"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden bg-secondary/30 p-2">
                  <img
                    src={`https://github-profile-trophy.vercel.app/?username=${GITHUB_USERNAME}&theme=algolia&no-frame=true&no-bg=true&row=1&column=7&margin-w=8&margin-h=8`}
                    alt="GitHub Trophies"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </ScrollReveal>

        {/* GitHub Profile Link */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-8">
            <motion.a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm glass hover:glow-border-primary transition-all"
            >
              <Github size={18} /> View Full GitHub Profile <ExternalLink size={14} />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GitHubStats;
