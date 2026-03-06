"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import {
  Trophy,
  ExternalLink,
  Code2,
  GitBranch,
  Star,
  Flame,
  Swords,
  Target,
} from "lucide-react";

// Animated counter
function useCounter(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animId: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [end, duration, start]);
  return count;
}

const stats = [
  { icon: <Code2 size={26} />, value: 500, suffix: "+", label: "DSA Problems", desc: "Solved across platforms", color: "#10b981" },
  { icon: <Star size={26} />, value: 3, suffix: "★", label: "CodeChef Rating", desc: "Competitive Programming", color: "#f59e0b" },
  { icon: <Swords size={26} />, value: 50, suffix: "+", label: "Contests", desc: "Participated in", color: "#a855f7" },
  { icon: <Flame size={26} />, value: 100, suffix: "+", label: "Day Streak", desc: "Consistent practice", color: "#ef4444" },
  { icon: <Target size={26} />, value: 10, suffix: "+", label: "Topic Mastery", desc: "Core DSA topics covered", color: "#ec4899" },
  { icon: <GitBranch size={26} />, value: 15, suffix: "+", label: "Repositories", desc: "Open source projects", color: "#e0e0e0" },
];

const profiles = [
  {
    platform: "CodeChef",
    username: "sooraj_hegde",
    url: "https://www.codechef.com/users/sooraj_hegde",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M11.007.22C5.09.22.257 5.053.257 10.97c0 3.078 1.313 5.849 3.407 7.79l.18-.38C2.03 16.86.97 14.05.97 10.97.97 5.45 5.486.934 11.007.934c3.454 0 6.49 1.758 8.29 4.427l.204-.16C17.714 2.348 14.55.22 11.007.22zm9.835 7.754l-.223.06c.66 1.563 1.03 3.28 1.03 5.083 0 2.156-.544 4.188-1.5 5.963l.244.045c.945-1.78 1.483-3.812 1.483-5.963 0-1.816-.38-3.546-1.034-5.112zM11.007 3.7c-4.01 0-7.267 3.256-7.267 7.267 0 2.397 1.162 4.525 2.955 5.85l.15-.34c-1.7-1.282-2.8-3.32-2.8-5.612 0-3.86 3.13-6.99 6.99-6.99 2.7 0 5.04 1.53 6.2 3.77l.21-.14c-1.2-2.33-3.63-3.93-6.44-3.93zm6.995 11.132l-.224.037c-.84 1.526-2.158 2.738-3.74 3.428l.04.27c1.67-.72 3.064-1.987 3.95-3.57zM11.007 6.47c-2.485 0-4.5 2.015-4.5 4.5 0 1.488.722 2.81 1.837 3.633l.12-.31c-1.013-.78-1.667-2.005-1.667-3.38 0-2.335 1.893-4.228 4.228-4.228 1.68 0 3.13.98 3.813 2.4l.2-.12c-.733-1.51-2.26-2.56-4.03-2.56z" />
      </svg>
    ),
    color: "#f59e0b",
    rating: "1500+",
    ratingLabel: "★★ (2 Star)",
    description: "Active competitive programmer with consistent contest participation",
    badgeColor: "#f59e0b",
  },
  {
    platform: "Codeforces",
    username: "sooraj_hegde",
    url: "https://codeforces.com/profile/NeuroByte_X",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3A1.5 1.5 0 0 1 0 19.5V9a1.5 1.5 0 0 1 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 19.5v-15A1.5 1.5 0 0 1 10.5 3h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" />
      </svg>
    ),
    color: "#10b981",
    rating: "1200+",
    ratingLabel: "Pupil",
    description: "Regular contest participation & upsolving after each round",
    badgeColor: "#10b981",
  },
  {
    platform: "LeetCode",
    username: "sooraj_hegde",
    url: "https://leetcode.com/u/Soorajhegde/",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
    color: "#f59e0b",
    rating: "1550+",
    ratingLabel: "Top 30%",
    description: "400+ problems solved with focus on medium & hard difficulty (200+ LC Alone)",
    badgeColor: "#f59e0b",
  },
  {
    platform: "GitHub",
    username: "neurobyte-x",
    url: "https://github.com/neurobyte-x",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "#e0e0e0",
    rating: "15+",
    ratingLabel: "Public Repos",
    description: "Active projects in AI, full-stack & competitive programming",
    badgeColor: "#e0e0e0",
  },
];

function StatCard({ stat, index, isInView }: { stat: (typeof stats)[0]; index: number; isInView: boolean }) {
  const count = useCounter(stat.value, 2000, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 120 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group relative p-5 rounded-2xl border border-foreground/5 hover:border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-500"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 origin-left"
        style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
      />
      <div
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: stat.color }}
      />
      <div className="flex items-center gap-4 relative">
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
        >
          {stat.icon}
        </motion.div>
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-[2rem]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: stat.color, lineHeight: 1 }}>
              {count}
            </span>
            <span className="text-[1.25rem]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: stat.color }}>
              {stat.suffix}
            </span>
          </div>
          <p className="text-foreground/60 text-[0.8rem]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
            {stat.label}
          </p>
          <p className="text-foreground/25 text-[0.7rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
            {stat.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CompetitiveProgramming() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="cp" className="relative py-28 bg-background overflow-hidden">
      {/* Moving ambient glows */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[180px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[150px] pointer-events-none"
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-emerald-400 text-[0.8rem] uppercase tracking-[0.3em] block mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            Competitive Programming
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[2.5rem] sm:text-[3rem] text-foreground mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.2 }}
          >
            Problem Solving{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
              Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-foreground/30 text-[1rem] max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.7 }}
          >
            Over 400 problems solved and counting. From basic data structures to advanced algorithms —
            consistently grinding, competing, and improving every single day.
          </motion.p>
        </motion.div>

        {/* Quick highlight badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <motion.div
            animate={{ boxShadow: ["0 0 0px rgba(16,185,129,0)", "0 0 20px rgba(16,185,129,0.15)", "0 0 0px rgba(16,185,129,0)"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5"
          >
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}>
              <Flame size={16} className="text-emerald-400" />
            </motion.div>
            <span className="text-emerald-400 text-[0.8rem]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
              Currently focusing on DP, Trees & Graphs
            </span>
          </motion.div>
        </motion.div>

        {/* ========== STATS GRID ========== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} />
          ))}
        </div>

        {/* ========== PLATFORM RATINGS ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-14"
        >
          <div className="text-center mb-10">
            <h3 className="text-foreground text-[1.25rem] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
              Platform Ratings & Profiles
            </h3>
            <p className="text-foreground/25 text-[0.8rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Competing and grinding across all major platforms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profiles.map((profile, i) => (
              <motion.a
                key={profile.platform}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.12, type: "spring", stiffness: 120 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative p-6 rounded-2xl border border-foreground/5 hover:border-foreground/15 bg-foreground/[0.02] transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 origin-left"
                  style={{ background: `linear-gradient(90deg, transparent, ${profile.color}, transparent)` }}
                />

                {/* Background pulse */}
                <div
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: profile.color }}
                />

                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${profile.color}12`, color: profile.color }}
                  >
                    {profile.icon}
                  </motion.div>

                  <h4 className="text-foreground text-[1.05rem] text-center mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                    {profile.platform}
                  </h4>

                  {/* Rating */}
                  <div className="text-center mb-3">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + i * 0.1, type: "spring", stiffness: 300 }}
                      className="text-[1.75rem] mb-0.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, color: profile.color, lineHeight: 1 }}
                    >
                      {profile.rating}
                    </motion.div>
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[0.65rem] uppercase tracking-wider"
                      style={{ backgroundColor: `${profile.badgeColor}15`, color: profile.badgeColor, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                    >
                      {profile.ratingLabel}
                    </span>
                  </div>

                  <p className="text-foreground/25 text-[0.75rem] text-center mb-4" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                    {profile.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 3 }}
                    className="flex items-center justify-center gap-1 text-foreground/20 group-hover:text-foreground/50 transition-colors"
                  >
                    <span className="text-[0.7rem]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                      Visit Profile
                    </span>
                    <ExternalLink size={10} />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ========== NEXT GOALS BANNER ========== */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          whileHover={{ scale: 1.01 }}
          className="relative p-8 sm:p-10 rounded-3xl border border-emerald-500/10 bg-emerald-500/[0.02] overflow-hidden"
        >
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -right-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"
          />

          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0"
            >
              <Trophy size={36} className="text-emerald-400" />
            </motion.div>
            <div className="text-center lg:text-left flex-1">
              <h3 className="text-foreground text-[1.25rem] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                Next Goals
              </h3>
              <p className="text-foreground/40 text-[0.9rem] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.7 }}>
                Pushing past the <span className="text-emerald-400">500+ problems</span> milestone while targeting{" "}
                <span className="text-emerald-400">Specialist on Codeforces</span> and{" "}
                <span className="text-purple-400">3★ on CodeChef</span>. Simultaneously mastering advanced DP, Graph algorithms, and Segment Trees.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {["500+ Problems", "CF Specialist", "CC 3★", "LeetCode 1800+", "Advanced DP", "Graph Mastery"].map((tag, ti) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 1 + ti * 0.08 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-full border border-emerald-500/20 text-emerald-400/80 text-[0.7rem] cursor-default"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
