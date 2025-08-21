import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/data/projects";
import { POSTS } from "@/data/posts";

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}.${String(d.getDate()).padStart(2, "0")}`;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <Hero />

        <Section title="Projects" subtitle="문제 → 해결 → 결과 중심">
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
