import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Target, Sparkles, Code2 } from "lucide-react";

const highlights = [
  {
    icon: <GraduationCap size={24} />,
    title: "Education",
    desc: "CSE-IT @ REVA University",
  },
  {
    icon: <Target size={24} />,
    title: "Goal",
    desc: "Full-Stack + AI Engineer",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Focus",
    desc: "AI, Web Dev, DSA & CP",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
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
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span
            className="text-emerald-400 text-[0.8rem] uppercase tracking-[0.3em] block mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            About Me
          </span>
          <h2
            className="text-[2.5rem] sm:text-[3rem] text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.2 }}
          >
            Crafting the Future with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
              Code & AI
            </span>
          </h2>
        </motion.div>

        {/* About text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <p
            className="text-white/50 text-[1.05rem] text-center"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.8 }}
          >
            I'm an engineering student passionate about building intelligent systems
            that bridge the gap between AI and real-world applications. With a strong
            foundation in Data Structures & Algorithms and competitive programming,
            I specialize in creating full-stack web applications powered by cutting-edge
            AI technologies like Google Gemini, LangChain, and LangGraph. My projects
            range from AI-powered competitive programming coaches to metacognitive
            learning systems.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 bg-white/[0.02] backdrop-blur-sm transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                {item.icon}
              </div>
              <h3
                className="text-white text-[1rem] mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p
                className="text-white/40 text-[0.875rem]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.6 }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}