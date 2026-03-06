import { motion } from "motion/react";
import { Github, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <span
              className="text-[1.25rem] text-white tracking-tighter"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            >
              Sooraj<span className="text-emerald-400">.</span>
            </span>
            <span
              className="text-white/20 text-[0.8rem]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <motion.a
              href="https://github.com/neurobyte-x"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              className="text-white/30 transition-colors"
            >
              <Github size={20} />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-emerald-400 hover:border-emerald-400/30 transition-all cursor-pointer"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
