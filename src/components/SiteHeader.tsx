import { PROFILE } from "../data/profile";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
          <span className="font-semibold">{PROFILE.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#writing" className="hover:text-white">
            Writing
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
