"use client";

import { motion } from "framer-motion";
import { Code2, BookOpen } from "lucide-react";

const timeline = [
  {
    icon: Code2,
    title: "Fullstack Developer (Learning Projects)",
    tag: "Self-Learning",
    period: "2025 - Present",
    points: [
      "Building responsive web apps with React & Next.js",
      "Creating REST APIs using Node.js & Express",
      "Integrating MongoDB for database management",
      "Practicing TailwindCSS & modern UI design",
    ],
  },
  {
    icon: BookOpen,
    title: "Frontend Developer (Mini Projects)",
    tag: "Personal Projects",
    period: "2024 - 2025",
    points: [
      "Designed multiple static & dynamic websites",
      "Implemented animations with Tailwind & Framer Motion",
      "Focused on responsive and clean UI/UX",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ExperienceLearning() {
  return (
    <section className="bg-black py-15 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-purple-500 tracking-[0.3em] text-sm font-semibold mb-3"
        >
          JOURNEY
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4"
        >
          EXPERIENCE <span className="text-white">&amp;</span>{" "}
          <span className="text-purple-500">LEARNING</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-purple-500 rounded-full mb-16"
        />

        {/* Timeline */}
        <div className="relative pl-14">
          {/* vertical line */}
          <div className="absolute left-[18px] top-3 bottom-3 w-px bg-purple-500/30" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.2 + 0.2 }}
                    className="absolute -left-14 top-6 w-[18px] h-[18px] rounded-full border-2 border-purple-500 bg-black flex items-center justify-center"
                  >
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-2 h-2 rounded-full bg-purple-500"
                    />
                  </motion.span>

                  {/* Card */}
                  <div className="bg-[#0d0710] border border-purple-500/10 rounded-2xl p-6 hover:border-purple-500/40 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                        <ItemIcon size={16} />
                      </span>
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm mb-4 text-gray-400">
                      <span className="text-purple-400">{item.tag}</span>
                      {" • "}
                      {item.period}
                    </p>

                    <ul className="flex flex-col gap-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-purple-500 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}