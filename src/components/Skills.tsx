"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Code2, Globe, Server, BrainCircuit, Wrench } from "lucide-react";

interface Skill {
  name: string;
  note: string;
}

interface SkillGroup {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    icon: <Code2 size={20} />,
    color: "#10b981",
    description: "Core programming languages I write production code in daily",
    skills: [
      { name: "Python", note: "Primary — FastAPI, scripting, ML pipelines" },
      { name: "C++", note: "Competitive programming & DSA" },
      { name: "JavaScript", note: "Full-stack web development" },
      { name: "TypeScript", note: "Type-safe React & Node projects" },
      { name: "SQL", note: "Complex queries, joins, migrations" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <Globe size={20} />,
    color: "#a855f7",
    description: "Building responsive, interactive user interfaces",
    skills: [
      { name: "React 18", note: "Hooks, context, state management" },
      { name: "Next.js", note: "SSR, API routes, app router" },
      { name: "Tailwind CSS", note: "Utility-first styling, responsive design" },
      { name: "Zustand", note: "Lightweight global state management" },
      { name: "Vite", note: "Build tooling & dev server" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Infra",
    icon: <Server size={20} />,
    color: "#f59e0b",
    description: "Server-side systems, databases, and deployment",
    skills: [
      { name: "FastAPI", note: "Async APIs, middleware, dependency injection" },
      { name: "PostgreSQL", note: "Neon DB, SQLAlchemy 2.0, Alembic" },
      { name: "Redis", note: "Caching, session store, rate limiting" },
      { name: "Docker", note: "Multi-container apps, compose workflows" },
    ],
  },
  {
    id: "ai",
    title: "AI & Agents",
    icon: <BrainCircuit size={20} />,
    color: "#ec4899",
    description: "Building intelligent systems with modern AI frameworks",
    skills: [
      { name: "Google Gemini", note: "2.5 Flash/Pro, Vision, function calling" },
      { name: "LangChain", note: "Agent chains, tool integration, memory" },
      { name: "LangGraph", note: "Multi-agent workflows, state machines" },
      { name: "Composio", note: "Tool integration platform for AI agents" },
      { name: "scikit-learn", note: "Classification, similarity, vectorization" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: <Wrench size={20} />,
    color: "#e0e0e0",
    description: "Dev tools, version control, and automation",
    skills: [
      { name: "Git & GitHub", note: "Branching, PRs, CI workflows" },
      { name: "Playwright", note: "Browser automation & scraping" },
      { name: "n8n", note: "Workflow automation, API orchestration" },
      { name: "JWT Auth", note: "Token-based auth, RBAC, bcrypt" },
      { name: "Nginx", note: "Reverse proxy, static serving" },
    ],
  },
];

const marqueeItems = [
  "React", "Python", "TypeScript", "FastAPI", "Docker",
  "PostgreSQL", "Redis", "Git", "Vite", "Tailwind CSS",
  "LangChain", "Gemini AI", "Next.js", "Composio",
  "C++", "Zustand", "SQLAlchemy", "JWT", "n8n", "Playwright",
];

function SkillGroupCard({ group, index, isInView }: { group: SkillGroup; index: number; isInView: boolean }) {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 120 }}
      whileHover={{ y: -4 }}
      className="group relative p-5 rounded-2xl border border-white/5 hover:border-white/10 bg-white/[0.02] transition-all duration-500 overflow-hidden"
    >
      {/* Top glow */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 origin-left"
        style={{ background: `linear-gradient(90deg, transparent, ${group.color}, transparent)` }}
      />

      {/* Corner glow */}
      <div
        className="absolute -top-8 -right-8 w-20 h-20 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: group.color }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-1.5">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring", stiffness: 300 }}
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${group.color}15`, color: group.color }}
        >
          {group.icon}
        </motion.div>
        <h3
          className="text-white text-[0.95rem]"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
        >
          {group.title}
        </h3>
      </div>

      <p
        className="text-white/20 text-[0.7rem] mb-4 ml-12"
        style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}
      >
        {group.description}
      </p>

      {/* Skills list */}
      <div className="space-y-0.5">
        {group.skills.map((skill, si) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -15 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + si * 0.06 + 0.3 }}
            onMouseEnter={() => setHoveredSkill(si)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="relative flex items-start gap-2.5 py-2 px-3 -mx-1 rounded-lg hover:bg-white/[0.03] transition-all duration-300 cursor-default"
          >
            <motion.div
              animate={hoveredSkill === si ? { scale: 1.3 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
              className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
              style={{ backgroundColor: hoveredSkill === si ? group.color : "rgba(255,255,255,0.15)" }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="text-[0.8rem] transition-colors duration-200"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    color: hoveredSkill === si ? group.color : "rgba(255,255,255,0.7)",
                  }}
                >
                  {skill.name}
                </span>
              </div>
              <motion.div
                initial={false}
                animate={{ height: hoveredSkill === si ? "auto" : 0, opacity: hoveredSkill === si ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p
                  className="text-white/30 text-[0.7rem] pt-0.5"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}
                >
                  {skill.note}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-24 bg-black overflow-hidden">
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/[0.03] rounded-full blur-[120px] pointer-events-none"
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-emerald-400 text-[0.8rem] uppercase tracking-[0.3em] block mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            Technical Arsenal
          </motion.span>
          <h2
            className="text-[2.5rem] sm:text-[3rem] text-white mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.2 }}
          >
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
              Technologies
            </span>
          </h2>
          <p
            className="text-white/25 text-[0.9rem] max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}
          >
            Hover any skill to see context — what I use it for and how deep I go.
          </p>
        </motion.div>

        {/* Skills Grid — top row 3, bottom row 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {skillGroups.slice(0, 3).map((group, i) => (
            <SkillGroupCard key={group.id} group={group} index={i} isInView={isInView} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {skillGroups.slice(3).map((group, i) => (
            <SkillGroupCard key={group.id} group={group} index={i + 3} isInView={isInView} />
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="overflow-hidden"
        >
          <div className="flex gap-3 animate-[skillscroll_25s_linear_infinite]">
            {[...marqueeItems, ...marqueeItems].map((tech, i) => (
              <motion.div
                key={`${tech}-${i}`}
                whileHover={{ scale: 1.08, borderColor: "rgba(16,185,129,0.4)" }}
                className="flex-shrink-0 px-4 py-2 rounded-full border border-white/8 text-white/40 text-[0.75rem] hover:text-emerald-400 transition-all duration-300 cursor-default"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <style>{`
          @keyframes skillscroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
