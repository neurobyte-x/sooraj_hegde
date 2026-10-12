"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { GraduationCap, Compass, Crosshair } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap size={24} />,
    title: "Education",
    desc: "B.Tech in CSE-IT @ REVA University",
  },
  {
    icon: <Compass size={24} />,
    title: "Goal",
    desc: "Full-Stack + AI Engineer",
  },
  {
    icon: <Crosshair size={24} />,
    title: "Focus",
    desc: "AI, Web Dev, DSA & CP",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-28 bg-background overflow-hidden">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-emerald-300" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                About
              </span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="text-[2.4rem] sm:text-[3rem] text-foreground max-w-xl" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.1 }}>
              Engineering student building AI systems and web products.
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 max-w-2xl text-[1.03rem] text-foreground/55" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.85 }}>
              I build full-stack systems where AI, product thinking, and competitive programming overlap. My focus is practical: shipping tools that feel useful, fast, and technically grounded rather than overly polished templates.
            </motion.p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }} className="rounded-2xl border border-foreground/6 bg-foreground/[0.02] px-4 py-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/15 bg-emerald-500/10 text-emerald-300">
                    {item.icon}
                  </div>
                  <h3 className="text-[0.95rem] text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[0.84rem] text-foreground/40" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="relative overflow-hidden rounded-[1.75rem] border border-foreground/8 bg-foreground/[0.03] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.12),_transparent_55%)]" />
            <div className="relative grid gap-4">
              <div className="overflow-hidden rounded-[1.25rem] border border-white/5 bg-black/40">
                <Image src="/healthedge_logo.jpg" alt="HealthEdge logo" width={900} height={700} className="h-72 w-full object-cover object-center opacity-90" priority />
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { value: "B.Tech", label: "CSE-IT" },
                  { value: "AI + Web", label: "Primary stack" },
                  { value: "CP", label: "Daily practice" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-foreground/6 bg-black/30 px-4 py-3">
                    <div className="text-[1rem] text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                      {item.value}
                    </div>
                    <div className="text-[0.72rem] uppercase tracking-[0.2em] text-foreground/35" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
