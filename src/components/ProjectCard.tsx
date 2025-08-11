import { motion } from "framer-motion";
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
      className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 hover:bg-zinc-900"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm text-zinc-400 mt-0.5">
            {project.period} · {project.role}
          </p>
        </div>
        <span className="text-xs text-zinc-400">{project.stack}</span>
      </div>

      <p className="mt-3 text-zinc-300">{project.summary}</p>

      <ul className="mt-3 space-y-1 text-sm list-disc list-inside text-zinc-300">
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.outcomes.map((o, i) => (
          <span key={i} className="chip chip-soft">
            {o}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
