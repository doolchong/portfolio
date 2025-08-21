import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Project } from "@/types";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900"
    >
      {/* 이미지 */}
      {project.image && (
        <Link to={`/projects/${project.slug}`} className="block">
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={project.imageAlt ?? project.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
      )}

      {/* 내용 */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link
              to={`/projects/${project.slug}`}
              className="block text-lg font-semibold leading-tight hover:underline"
            >
              {project.name}
            </Link>
            <p className="text-sm text-zinc-400 mt-1.5">
              {project.period} · {project.role}
            </p>
          </div>
        </div>

        <p className="mt-3 text-zinc-300">{project.summary}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.outcomes.map((o, i) => (
            <span key={i} className="chip chip-soft">
              {o}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <Link to={`/projects/${project.slug}`} className="btn btn-ghost">
            Read more →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
