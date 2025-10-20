import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  // 프로젝트 그룹 분류
  const majorProjects = PROJECTS.filter(
    (p) => !["sal", "maeng9-news-feed"].includes(p.slug)
  );
  const minorProjects = PROJECTS.filter((p) =>
    ["sal", "maeng9-news-feed"].includes(p.slug)
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 pb-24">
        <Hero />

        {/* 열심히 했던 프로젝트들 */}
        <Section title="Main Projects">
          <p className="text-zinc-400 mb-6">
            인프라, AI, 아키텍처 설계 등 실무 수준으로 깊게 진행한 주요
            프로젝트들입니다.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {majorProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Section>

        {/* 가볍게 진행한 프로젝트들 */}
        <Section title="Light Projects">
          <p className="text-zinc-400 mb-6">
            팀 스터디나 개인 학습 목적으로 가볍게 진행한 프로젝트들입니다.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {minorProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
