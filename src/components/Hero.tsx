import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiVelog } from "react-icons/si";

type ReadonlyStrArr = readonly string[];

export default function Hero() {
  const groups: Array<{ title: string; items: ReadonlyStrArr }> = [
    { title: "Languages", items: PROFILE.skills.languages },
    { title: "Backend", items: PROFILE.skills.backend },
    { title: "DevOps", items: PROFILE.skills.devops },
    { title: "Tools", items: PROFILE.skills.tools },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-600 blur-[120px] opacity-20" />
      <div className="pointer-events-none absolute top-20 -right-24 h-80 w-80 rounded-full bg-fuchsia-600 blur-[140px] opacity-20" />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {PROFILE.name} <span className="text-zinc-400">|</span>{" "}
          {PROFILE.title}
        </h1>

        <div className="mt-6 flex gap-3">
          <a
            className="btn flex items-center gap-2"
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a className="btn flex items-center gap-2" href={PROFILE.links.email}>
            <MdEmail size={18} /> Email
          </a>
          <a
            className="btn flex items-center gap-2"
            href={PROFILE.links.resume}
            target="_blank"
            rel="noreferrer"
          >
            <FaFilePdf size={18} /> Resume
          </a>
          <a
            className="btn flex items-center gap-2"
            href={PROFILE.links.blog}
            target="_blank"
            rel="noreferrer"
          >
            <SiVelog size={18} /> Blog
          </a>
        </div>

        <p className="mt-4 text-zinc-300 max-w-2xl">{PROFILE.intro}</p>

        <div className="mt-6">
          <p className="text-xl uppercase tracking-wider text-zinc-200 font-semibold mb-2">
            나랑 친한 친구들
          </p>
          <div className="flex flex-wrap gap-2">
            {PROFILE.keywords.map((k, i) => (
              <motion.span
                key={k}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="chip !bg-zinc-800/80 !text-zinc-100 !border-zinc-700"
                title="핵심 기술"
              >
                {k}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xl uppercase tracking-wider text-zinc-200 font-semibold mb-2">
            얼굴은 아는 사이들
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {groups.map((g) => (
              <SkillGroup key={g.title} title={g.title} items={g.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: ReadonlyStrArr;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-4">
      <h3 className="text-sm font-semibold text-zinc-200">{title}</h3>
      <ul className="mt-2 text-zinc-300 text-sm space-y-1 list-disc list-inside">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
