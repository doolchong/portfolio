import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";
import SiteHeader from "@/components/SiteHeader";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-2xl font-bold">프로젝트를 찾을 수 없어요.</h1>
          <Link to="/" className="btn mt-6 inline-flex">
            ← Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-12">
        <Link to="/" className="text-sm text-zinc-400 hover:text-white">
          ← Back
        </Link>

        <h1 className="mt-3 text-3xl font-extrabold">{project.name}</h1>
        <p className="mt-1 text-zinc-400">
          {project.period} · {project.role}
        </p>

        {/* ✅ 추가 이미지들 */}
        {project.extraImages?.map((img, i) => (
          <figure key={i} className="mt-6">
            <img
              src={img.src}
              alt={img.alt ?? ""}
              className="rounded-xl border border-zinc-800"
            />
            {img.caption && (
              <figcaption className="mt-2 text-sm text-zinc-400">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}

        <Section title="Overview">
          <p className="text-zinc-300">{project.summary}</p>
        </Section>

        <Section title="Stack">
          <p className="text-sm text-zinc-300">{project.stack}</p>
        </Section>

        <Section title="My Role">
          <ul className="list-disc list-inside space-y-1 text-zinc-300">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </Section>

        <Section title="Outcomes">
          <div className="mt-2 flex flex-wrap gap-2">
            {project.outcomes.map((o, i) => (
              <span key={i} className="chip chip-soft">
                {o}
              </span>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
