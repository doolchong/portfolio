import { motion } from "framer-motion";
import { PROFILE } from "../data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-600 blur-[120px] opacity-20" />
      <div className="absolute top-20 -right-24 h-80 w-80 rounded-full bg-fuchsia-600 blur-[140px] opacity-20" />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {PROFILE.name} <span className="text-zinc-400">|</span>{" "}
          {PROFILE.title}
        </h1>
        <p className="mt-4 text-zinc-300 max-w-2xl">{PROFILE.intro}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {PROFILE.keywords.map((k, i) => (
            <motion.span
              key={k}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="chip"
            >
              {k}
            </motion.span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a className="btn" href={PROFILE.links.github} target="_blank">
            GitHub
          </a>
          <a className="btn" href={PROFILE.links.email}>
            Email
          </a>
          <a className="btn" href={PROFILE.links.resume}>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
