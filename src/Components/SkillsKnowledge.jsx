"use client";

import { motion } from "framer-motion";
import { Code2, Server, Terminal } from "lucide-react";

const groups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "DaisyUI", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: [
      { name: "Git", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 80 },
      { name: "Figma", level: 75 },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

const barVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
  }),
};

export default function SkillsKnowledge() {
  return (
    <section className="bg-black py-15 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-purple-500 tracking-[0.3em] text-sm font-semibold mb-3"
        >
          EXPERTISE
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4"
        >
          SKILLS <span className="text-white">&amp;</span>{" "}
          <span className="text-purple-500">KNOWLEDGE</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-purple-500 rounded-full mb-16"
        />

        {/* Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((group, i) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className="bg-[#0d0710] border border-purple-500/10 rounded-2xl p-6"
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-9 h-9 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                    <GroupIcon size={18} />
                  </span>
                  <h3 className="text-white font-semibold text-lg">
                    {group.title}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="flex flex-col gap-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-purple-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={barVariants}
                          className="h-full bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}