"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/* ============================================================
   1) SETTINGS — ekhane change korlei hobe
   ============================================================ */
const INITIAL_VISIBLE = 4; // prothome koyta project dekhabe

/* ============================================================
   2) PROJECT LINKS — notun project add korte shudhu ekta object add koro
   image: "" rakhle demo link theke auto screenshot ashbe
   (nijer image dite chaile public/projects/ e rakho)
   github: "" rakhle GitHub button dekhabe na
   ============================================================ */
export const PROJECTS = [
  {
    id: "knowledgehub",
    name: "KnowledgeHub",
    description: "A knowledge sharing platform to learn, read and explore.",
    image: "",
    demo: "https://knowledge-hub-chi-rouge.vercel.app",
    github: "https://github.com/smdshohagmia10/KnowledgeHub",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "tiles-gallery",
    name: "Tiles Gallery",
    description: "A modern tiles gallery with a clean, responsive layout.",
    image: "",
    demo: "https://next-tiles-gallery.vercel.app",
    github: "",
    tags: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "teenkeeper",
    name: "TeenKeeper",
    description: "A responsive web app built as a course assignment.",
    image: "",
    demo: "https://assignment-07-azure.vercel.app",
    github: "",
    tags: ["React", "Tailwind CSS"],
  },
  {
    id: "github-issues-tracker",
    name: "GitHub Issues Tracker",
    description: "Track, filter and manage GitHub issues easily.",
    image: "",
    demo: "https://smdshohagmia10.github.io/Assaignment-05/maiin.html",
    github: "",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "job-application-tracker",
    name: "Job Application Tracker",
    description: "Keep track of your job applications and their status.",
    image: "",
    demo: "https://smdshohagmia10.github.io/Assaignment-04/",
    github: "",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

/* ============================================================
   AUTO SCREENSHOT — image na dile demo link theke auto cover ashbe
   (WordPress mshots, free, API key lagbe na)
   ============================================================ */
const getCover = (project) =>
  project.image ||
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(project.demo)}?w=800&h=500`;

/* ============================================================
   3) COMPONENT
   ============================================================ */
const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? PROJECTS
    : PROJECTS.slice(0, INITIAL_VISIBLE);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-4xl font-extrabold uppercase md:text-6xl">
        <span className="text-white">Featured </span>
        <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-transparent" />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1.5 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-950/30"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#17121d]">
              <img
                src={getCover(project)}
                alt={project.name}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100b14]/90 via-transparent to-black/10" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white/85 backdrop-blur-md">
                PROJECT
              </span>
              <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition group-hover:border-purple-300/50 group-hover:bg-purple-500/80">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-purple-200">
                {project.name}
              </h3>
              <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-400">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-purple-300/15 bg-purple-400/[0.08] px-3 py-1 text-xs font-medium text-purple-200/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-3 border-t border-white/[0.08] pt-5">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live demo`}
                  className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-purple-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                >
                  Live Demo
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                  >
                    <FaGithub size={16} aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* See All / Show Less */}
      {PROJECTS.length > INITIAL_VISIBLE && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="rounded-full border border-purple-500/60 px-8 py-3 text-sm font-semibold text-purple-300 transition hover:bg-purple-500/10"
          >
            {showAll ? "Show Less" : `See All (${PROJECTS.length})`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;