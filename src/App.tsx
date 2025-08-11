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

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <Hero />

        <Section title="Projects" subtitle="문제 → 해결 → 결과 중심">
          <div className="grid gap-6">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Section>

        <Section title="Writing" subtitle="트러블슈팅/설계 근거 기록">
          <ul className="space-y-3">
            {POSTS.map((post, idx) => (
              <li key={idx}>
                <a
                  href={post.href}
                  className="flex justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 hover:bg-zinc-900"
                >
                  <span className="font-medium underline-offset-4">
                    {post.title}
                  </span>
                  <span className="text-sm text-zinc-400">
                    {formatDate(post.date)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Contact"
          subtitle="이메일로 연락 주세요. 이력서 PDF도 첨부합니다."
        ></Section>
      </main>
      <Footer />
    </div>
  );
}
