import { PROFILE } from "../data/profile";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-zinc-900 bg-zinc-950/70">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white tracking-wide">
            {PROFILE.name}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
          <a
            href="#projects"
            className="hover:text-violet-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-violet-400 transition-colors"
          >
            Contact
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-300 hover:text-white"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4 space-y-4">
          <a href="#projects" className="block hover:text-violet-400">
            Projects
          </a>
          <a href="#contact" className="block hover:text-violet-400">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
