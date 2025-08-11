import { PROFILE } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500 flex flex-wrap items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <p className="text-zinc-400">Built with Vite & React + TS.</p>
      </div>
    </footer>
  );
}
