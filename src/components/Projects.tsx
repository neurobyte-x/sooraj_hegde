"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronRight,
  ChevronDown,
  Layers,
  Server,
  Cpu,
  Database,
  Globe,
  Eye,
  Workflow,
  Sparkles,
  Terminal,
  Braces,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  problemStatement: string;
  solution: string;
  features: { title: string; desc: string; icon: React.ReactNode }[];
  techStack: { category: string; items: string[] }[];
  metrics: { label: string; value: string }[];
  color: string;
  icon: string;
  repo: string;
  visit?: string;
}

const projects: Project[] = [
  {
    id: "cpgpt",
    title: "CP-GPT",
    subtitle: "AI Competitive Programming Coach",
    tagline: "Transforming 10,000+ Codeforces problems into guided learning paths",
    problemStatement:
      "Competitive programmers struggle finding the right problems and lack structured guidance. Random practice leads to slow improvement.",
    solution:
      "An autonomous AI agent powered by Google Gemini analyzes profiles, estimates per-topic skill levels, and generates personalized practice paths with a 5-level Socratic hint system.",
    features: [
      { title: "Autonomous AI Agent", desc: "Gemini-powered agent with function calling for personalized recommendations", icon: <Cpu size={16} /> },
      { title: "Practice Path Engine", desc: "Structured problem sequences with Learning / Revision / Challenge modes", icon: <Workflow size={16} /> },
      { title: "Socratic Hint Ladder", desc: "5-level progressive hints — from gentle nudges to detailed approaches", icon: <Sparkles size={16} /> },
      { title: "Skill Estimation", desc: "Per-topic 75th-percentile analysis adjusted for volume and consistency", icon: <Layers size={16} /> },
      { title: "Codeforces Sync", desc: "10,000+ problems synced with tags, ratings, and submission history", icon: <Database size={16} /> },
      { title: "Analytics Dashboard", desc: "Tracks solves, strengths/weaknesses, and practice progress", icon: <Eye size={16} /> },
    ],
    techStack: [
      { category: "Backend", items: ["FastAPI", "PostgreSQL (Neon)", "Redis 7", "Alembic", "SQLAlchemy 2.0"] },
      { category: "Frontend", items: ["React 18", "TypeScript", "Tailwind CSS", "Zustand", "React Query"] },
      { category: "AI/ML", items: ["Google Gemini 2.5 Flash", "Function Calling", "Prompt Engineering"] },
      { category: "DevOps", items: ["Docker Compose", "Nginx", "JWT", "bcrypt"] },
    ],
    metrics: [
      { label: "Problems", value: "10K+" },
      { label: "AI Tools", value: "6+" },
      { label: "Hints", value: "5 Lvl" },
      { label: "Modes", value: "3" },
    ],
    color: "#10b981",
    icon: "🧠",
    repo: "https://github.com/neurobyte-x/CP-GPT",
    visit: "https://cp-gpt.onrender.com/",
  },
  {
    id: "neuros",
    title: "NeurOS 2.0",
    subtitle: "Metacognitive Learning System",
    tagline: "A personal knowledge OS that thinks about how you think",
    problemStatement:
      "Traditional tools focus on content storage, not understanding. Students forget 70% within 24 hours without active review.",
    solution:
      "Implements SuperMemo-2 for optimal review scheduling, visualizes memory decay in real-time, and forces deep processing through mandatory structured reflection.",
    features: [
      { title: "SuperMemo-2 SRS", desc: "Quality-based ratings that dynamically adjust review intervals", icon: <Cpu size={16} /> },
      { title: "Ebbinghaus Tracking", desc: "Real-time forgetting curves with critical retention alerts", icon: <Eye size={16} /> },
      { title: "Knowledge Graph", desc: "D3.js force-directed graph with mastery-based node sizing", icon: <Globe size={16} /> },
      { title: "Flash Coding", desc: "Monaco Editor for timed practice with hidden solutions", icon: <Terminal size={16} /> },
      { title: "Daily Standup", desc: "AI briefing prioritizing urgent reviews and decaying items", icon: <Sparkles size={16} /> },
      { title: "Reflection Engine", desc: "5-field structured reflection mandatory for every entry", icon: <Braces size={16} /> },
    ],
    techStack: [
      { category: "Backend", items: ["FastAPI", "PostgreSQL", "SQLAlchemy 2.0", "Celery", "Redis"] },
      { category: "Frontend", items: ["React 18", "TypeScript", "D3.js", "Monaco Editor", "Tailwind"] },
      { category: "Algorithms", items: ["SuperMemo-2", "Ebbinghaus Curves", "Force-Directed Graphs"] },
      { category: "Auth/Infra", items: ["JWT", "Pydantic v2", "Async SQLAlchemy"] },
    ],
    metrics: [
      { label: "SRS", value: "SM-2" },
      { label: "Viz", value: "D3.js" },
      { label: "Editor", value: "Monaco" },
      { label: "Fields", value: "5" },
    ],
    color: "#a855f7",
    icon: "🔬",
    repo: "https://github.com/neurobyte-x/NeurOS",
  },
  {
    id: "aimaintenance",
    title: "AI Maintenance Reporter",
    subtitle: "Intelligent Ticket System",
    tagline: "From photo to ticket in seconds — AI-driven maintenance workflows",
    problemStatement:
      "Manual maintenance reporting is slow, inconsistent, and lacks proper classification. Equipment damage goes unreported.",
    solution:
      "Upload a photo — the AI detects damage, classifies the issue, assigns priority via a LangGraph workflow, and generates a comprehensive ticket in seconds.",
    features: [
      { title: "AI Photo Detection", desc: "Gemini 2.5 Pro identifies damage and extracts details from photos", icon: <Eye size={16} /> },
      { title: "LangGraph Workflow", desc: "Detection → classification → priority → ticket generation pipeline", icon: <Workflow size={16} /> },
      { title: "Smart Priority", desc: "AI-driven assignment based on severity and equipment criticality", icon: <Layers size={16} /> },
      { title: "Live Dashboard", desc: "View, filter, and manage tickets with status tracking", icon: <Globe size={16} /> },
      { title: "Secure Auth", desc: "JWT + RBAC restricted to @reva.edu.in emails", icon: <Server size={16} /> },
      { title: "Auto Tickets", desc: "AI-written descriptions with location tags and resolution steps", icon: <Sparkles size={16} /> },
    ],
    techStack: [
      { category: "Backend", items: ["FastAPI", "LangGraph", "Pydantic v2"] },
      { category: "AI", items: ["Google Gemini 2.5 Pro", "Vision API", "Multi-Agent Pipeline"] },
      { category: "Frontend", items: ["React 18", "Vite", "Tailwind CSS"] },
      { category: "Database", items: ["SQLite", "Neon (PostgreSQL)", "JWT Auth"] },
    ],
    metrics: [
      { label: "AI", value: "Gemini" },
      { label: "Pipeline", value: "4-Stage" },
      { label: "Auth", value: "RBAC" },
      { label: "Speed", value: "Real-time" },
    ],
    color: "#f59e0b",
    icon: "🔧",
    repo: "https://github.com/neurobyte-x/AI-Maintainance-Reporter",
    visit: "https://ai-maintainance-reporter.onrender.com/",
  },
  {
    id: "neuroagent",
    title: "NeuroAgent",
    subtitle: "Multi-Tool AI Chatbot",
    tagline: "12+ integrated tools in one intelligent conversational agent",
    problemStatement:
      "Users need separate tools for search, code execution, image analysis. Context is lost between tools and workflows fragment.",
    solution:
      "Unifies 12+ tools into a single agent with persistent conversation context. LangGraph enables dynamic tool selection and chaining based on intent.",
    features: [
      { title: "Web Search", desc: "Serper API with intelligent result summarization and citations", icon: <Globe size={16} /> },
      { title: "Python Executor", desc: "Sandboxed execution for calculations and data processing", icon: <Terminal size={16} /> },
      { title: "Browser Automation", desc: "Playwright-powered navigation, form filling, screenshots", icon: <Layers size={16} /> },
      { title: "AI Vision", desc: "Gemini 2.5 Pro for image analysis, OCR, and visual understanding", icon: <Eye size={16} /> },
      { title: "Persistent Memory", desc: "Thread-based history with intelligent context management", icon: <Database size={16} /> },
      { title: "Auto Naming", desc: "AI-powered session naming based on conversation content", icon: <Sparkles size={16} /> },
    ],
    techStack: [
      { category: "AI Core", items: ["Google Gemini 2.5 Flash/Pro", "LangChain", "LangGraph"] },
      { category: "Tools", items: ["Serper API", "Playwright", "Python Exec", "Math Engine"] },
      { category: "Frontend", items: ["Streamlit", "Chat UI"] },
      { category: "Infra", items: ["Thread Memory", "Tool Registry", "Dynamic Routing"] },
    ],
    metrics: [
      { label: "Tools", value: "12+" },
      { label: "Models", value: "2" },
      { label: "Auto", value: "Playwright" },
      { label: "Memory", value: "Threads" },
    ],
    color: "#ec4899",
    icon: "🤖",
    repo: "https://github.com/neurobyte-x/NeuroAgent",
  },
  {
    id: "moviedude",
    title: "MovieDude",
    subtitle: "Movie Recommendation System",
    tagline: "Netflix-inspired recommendations powered by vectorized ML",
    problemStatement:
      "Existing recommendation tools are slow, lack visual appeal, and don't personalize based on actual viewing patterns.",
    solution:
      "Optimized vectorized Jaccard similarity for 10-30x speed boost with a Netflix-inspired UI. 6,000+ movies with rich metadata and dual recommendation modes.",
    features: [
      { title: "Netflix UI", desc: "Responsive interface with movie cards, overlays, and smooth interactions", icon: <Globe size={16} /> },
      { title: "Dual Modes", desc: "History-based personalized + title-based similarity recommendations", icon: <Layers size={16} /> },
      { title: "Vectorized ML", desc: "10-30x performance via NumPy-optimized Jaccard similarity", icon: <Cpu size={16} /> },
      { title: "Smart Filtering", desc: "Hide watched, surface top-rated, customize criteria", icon: <Eye size={16} /> },
      { title: "Rich Database", desc: "6,000+ movies with genres, ratings, cast, and plot summaries", icon: <Database size={16} /> },
      { title: "CLI + Web", desc: "Dual interface — powerful CLI and full visual web app", icon: <Terminal size={16} /> },
    ],
    techStack: [
      { category: "Backend", items: ["Python 3.12", "Flask", "SQLite"] },
      { category: "ML", items: ["scikit-learn", "pandas", "NumPy", "Jaccard"] },
      { category: "Frontend", items: ["Flask Templates", "CSS", "Responsive Design"] },
      { category: "Data", items: ["6000+ Movies", "Genre Tags", "Ratings Metadata"] },
    ],
    metrics: [
      { label: "Movies", value: "6K+" },
      { label: "Speed", value: "10-30x" },
      { label: "ML", value: "Jaccard" },
      { label: "UI", value: "CLI+Web" },
    ],
    color: "#ef4444",
    icon: "🎬",
    repo: "https://github.com/neurobyte-x/Movie-Recommendation-System",
  },
];

function CompactProject({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showStack, setShowStack] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 120 }}
      className="group relative rounded-2xl border border-white/5 hover:border-white/10 bg-white/[0.015] overflow-hidden transition-all duration-500"
    >
      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        className="absolute top-0 left-0 right-0 h-[1px] opacity-50 group-hover:opacity-100 transition-opacity duration-500 origin-left"
        style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }}
      />

      {/* Background glow */}
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-[80px] opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: project.color }}
      />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring", stiffness: 250 }}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-[1.4rem] flex-shrink-0"
              style={{ backgroundColor: `${project.color}15` }}
            >
              {project.icon}
            </motion.div>
            <div>
              <h3
                className="text-white text-[1.15rem]"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.2 }}
              >
                {project.title}
              </h3>
              <p
                className="text-[0.7rem] tracking-wider uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, color: project.color }}
              >
                {project.subtitle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {project.visit && (
              <motion.a
                href={project.visit}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-1.5 rounded-lg border text-[0.65rem] uppercase tracking-wider font-semibold transition-all duration-300"
                style={{
                  borderColor: `${project.color}40`,
                  color: project.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${project.color}15`;
                  e.currentTarget.style.borderColor = `${project.color}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = `${project.color}40`;
                }}
              >
                Visit
              </motion.a>
            )}
            <motion.a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg border border-white/8 text-white/30 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <Github size={15} />
            </motion.a>
          </div>
        </div>

        {/* Tagline */}
        <p
          className="text-white/25 text-[0.8rem] italic mb-4"
          style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}
        >
          "{project.tagline}"
        </p>

        {/* Metrics row */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {project.metrics.map((m, mi) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + mi * 0.06 + 0.3 }}
              className="text-center p-2 rounded-lg bg-white/[0.03] border border-white/[0.04]"
            >
              <div
                className="text-[0.85rem]"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: project.color, lineHeight: 1 }}
              >
                {m.value}
              </div>
              <div
                className="text-white/20 text-[0.55rem] uppercase tracking-wider mt-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Problem → Solution compact */}
        <div className="space-y-2 mb-4">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-1.5 mb-1.5">
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                className="w-1.5 h-1.5 rounded-full bg-red-400"
              />
              <span className="text-red-400 text-[0.6rem] uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                Problem
              </span>
            </div>
            <p className="text-white/35 text-[0.75rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
              {project.problemStatement}
            </p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
            <div className="flex items-center gap-1.5 mb-1.5">
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4, delay: 1 }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: project.color }}
              />
              <span className="text-[0.6rem] uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: project.color }}>
                Solution
              </span>
            </div>
            <p className="text-white/35 text-[0.75rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
              {project.solution}
            </p>
          </div>
        </div>

        {/* Collapsible: Features */}
        <div className="mb-2">
          <motion.button
            onClick={() => setShowFeatures(!showFeatures)}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 w-full py-2.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-all duration-300 cursor-pointer group/btn"
          >
            <motion.div
              animate={{ rotate: showFeatures ? 180 : 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ backgroundColor: `${project.color}12`, color: project.color }}
            >
              <ChevronDown size={13} />
            </motion.div>
            <span className="text-[0.75rem] uppercase tracking-wider text-white/50 group-hover/btn:text-white/70 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
              Key Features
            </span>
            <span className="text-[0.6rem] px-1.5 py-0.5 rounded-full ml-auto" style={{ backgroundColor: `${project.color}12`, color: project.color, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
              {project.features.length}
            </span>
          </motion.button>

          <AnimatePresence>
            {showFeatures && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3">
                  {project.features.map((f, fi) => (
                    <motion.div
                      key={f.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: fi * 0.05 }}
                      className="flex gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.03] hover:border-white/8 transition-all duration-300"
                    >
                      <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${project.color}10`, color: project.color }}>
                        {f.icon}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white/80 text-[0.75rem] mb-0.5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                          {f.title}
                        </h4>
                        <p className="text-white/25 text-[0.68rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
                          {f.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Collapsible: Tech Stack */}
        <div>
          <motion.button
            onClick={() => setShowStack(!showStack)}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 w-full py-2.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-all duration-300 cursor-pointer group/btn"
          >
            <motion.div
              animate={{ rotate: showStack ? 180 : 0 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ backgroundColor: `${project.color}12`, color: project.color }}
            >
              <ChevronDown size={13} />
            </motion.div>
            <span className="text-[0.75rem] uppercase tracking-wider text-white/50 group-hover/btn:text-white/70 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
              Tech Stack
            </span>
            <span className="text-[0.6rem] px-1.5 py-0.5 rounded-full ml-auto" style={{ backgroundColor: `${project.color}12`, color: project.color, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
              {project.techStack.reduce((a, c) => a + c.items.length, 0)}
            </span>
          </motion.button>

          <AnimatePresence>
            {showStack && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-2 pt-3">
                  {project.techStack.map((cat, ci) => (
                    <motion.div
                      key={cat.category}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: ci * 0.06 }}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.03]"
                    >
                      <h4 className="text-[0.6rem] uppercase tracking-wider mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: project.color }}>
                        {cat.category}
                      </h4>
                      <div className="space-y-1">
                        {cat.items.map((item) => (
                          <div key={item} className="flex items-center gap-1.5">
                            <ChevronRight size={8} style={{ color: project.color }} />
                            <span className="text-white/40 text-[0.68rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Pair projects: [0,1], [2,3], [4] (solo last)
  const rows: Project[][] = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <section id="projects" className="relative py-28 bg-black overflow-hidden">
      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[180px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[150px] pointer-events-none"
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-emerald-400 text-[0.8rem] uppercase tracking-[0.3em] block mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            Featured Work
          </motion.span>
          <h2
            className="text-[2.5rem] sm:text-[3rem] text-white mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.2 }}
          >
            Projects That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
              Define Me
            </span>
          </h2>
          <p
            className="text-white/25 text-[0.9rem] max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}
          >
            Real problems identified and solved — from AI coaching systems to intelligent automation.
          </p>
        </motion.div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 mb-14"
        >
          {[
            { label: "Full-Stack", val: "5" },
            { label: "AI-Powered", val: "4" },
            { label: "Open Source", val: "100%" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="text-emerald-400 text-[0.95rem]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                {s.val}
              </span>
              <span className="text-white/20 text-[0.7rem] uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Project Rows — 2 per row */}
        <div className="space-y-6">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`grid gap-6 ${row.length === 2 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 lg:grid-cols-2"}`}
            >
              {row.map((project, pi) => (
                <CompactProject
                  key={project.id}
                  project={project}
                  index={ri * 2 + pi}
                  isInView={isInView}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
