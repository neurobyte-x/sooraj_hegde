import { motion } from "motion/react";
import { ParticleField } from "./ParticleField";
import { ArrowDown, Github, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <ParticleField />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span
            className="inline-block px-4 py-2 border border-emerald-500/30 rounded-full text-emerald-400 text-[0.875rem] tracking-widest uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] text-white mb-4 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.1 }}
        >
          Sooraj{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
            Hegde
          </span>
        </motion.h1>

        {/* Typing effect title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[1.125rem] sm:text-[1.25rem] text-white/60 mb-8 max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          AI & Web Development Enthusiast | DSA & CP Grinder |{" "}
          <span className="text-emerald-400">400+ Problems Solved</span> |{" "}
          CodeChef ★★
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16,185,129,0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3.5 bg-emerald-500 text-black rounded-full text-[0.9rem] tracking-wide cursor-pointer transition-all duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            View My Work
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/neurobyte-x"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-white/20 text-white rounded-full text-[0.9rem] tracking-wide flex items-center gap-2 hover:border-emerald-400/50 transition-all duration-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            <Github size={18} />
            GitHub Profile
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "400+", label: "DSA Problems" },
            { value: "6+", label: "Projects" },
            { value: "★★", label: "CodeChef" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[1.75rem] text-emerald-400"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div
                className="text-[0.75rem] text-white/40 uppercase tracking-wider mt-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
