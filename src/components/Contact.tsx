"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Github, Mail, MapPin, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: <Github size={22} />,
    label: "GitHub",
    value: "github.com/neurobyte-x",
    href: "https://github.com/neurobyte-x",
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "Get in touch",
    href: "mailto:bytexneuro@gmail.com",
  },
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "REVA University, India",
    href: "#",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-emerald-400 text-[0.8rem] uppercase tracking-[0.3em] block mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            Get In Touch
          </span>
          <h2
            className="text-[2.5rem] sm:text-[3rem] text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.2 }}
          >
            Let&apos;s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
              Amazing
            </span>
          </h2>
          <p
            className="text-white/40 text-[1rem] max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.8 }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to collaborate. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 bg-white/[0.02] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                {link.icon}
              </div>
              <h3
                className="text-white text-[0.95rem] mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                {link.label}
              </h3>
              <p
                className="text-white/40 text-[0.8rem] flex items-center gap-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.value}
                {link.href.startsWith("http") && (
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                )}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="mailto:bytexneuro@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16,185,129,0.25)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-emerald-500 text-black rounded-full text-[1rem] tracking-wide transition-all duration-300 cursor-pointer"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            <Mail size={20} />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
