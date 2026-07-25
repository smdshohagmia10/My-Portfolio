"use client";

import { useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiNetlify,
  SiVercel,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "#38BDF8" },
  { name: "Redux", icon: SiRedux, category: "Frontend", color: "#764ABC" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, category: "Backend", color: "#47A248" },
  { name: "Express.js", icon: SiExpress, category: "Backend", color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", color: "#83CD29" },
  { name: "Netlify", icon: SiNetlify, category: "Deployment", color: "#00C7B7" },
  { name: "Vercel", icon: SiVercel, category: "Deployment", color: "#FFFFFF" },
  { name: "Firebase", icon: SiFirebase, category: "Deployment", color: "#FFCA28" },
  { name: "Git", icon: SiGit, category: "Tools", color: "#F05032" },
  { name: "GitHub", icon: SiGithub, category: "Tools", color: "#FFFFFF" },
  { name: "Postman", icon: SiPostman, category: "Tools", color: "#FF6C37" },
  { name: "Figma", icon: SiFigma, category: "Tools", color: "#F24E1E" },
  { name: "VS Code", icon: VscVscode, category: "Tools", color: "#007ACC" },
];

const filters = ["All", "Frontend", "Backend", "Deployment", "Tools"];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="bg-black py-15 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-fuchsia-500 tracking-[0.3em] text-sm font-semibold mb-3">
          EXPERTISE
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          TECH <span className="text-fuchsia-500">STACK</span>
        </h2>

        {/* Divider */}
        <div className="w-16 h-1 bg-fuchsia-500 mx-auto mb-6 rounded-full" />

        {/* Subtitle */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          I leverage the latest industry-standard tools to build high-performance
          and scalable web applications.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? "bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-fuchsia-600/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filtered.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="group bg-[#111014] border border-white/10 rounded-2xl py-8 px-4 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-fuchsia-500/50 hover:-translate-y-1"
            >
              <Icon
                className="w-10 h-10 text-gray-400 transition-colors duration-300"
                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              />
              <span className="text-xs font-semibold tracking-wide text-gray-300 uppercase">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}