import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "@/data/projects";
import SiteHeader from "@/components/SiteHeader";

import Footer from "@/components/Footer";
import AiPestDiagnosisContent from "@/components/projects/AIPestDiagnosisContent";
import FitNusContent from "@/components/projects/FitNusContent";
import SALContent from "@/components/projects/SALContent";
import Maeng9NewsFeedContent from "@/components/projects/Maeng9NewsFeedContent";
import TrendChatContent from "@/components/projects/TrendChatContent";

const componentMap = {
  "ai-pest-diagnosis": AiPestDiagnosisContent,
  fitnus: FitNusContent,
  sal: SALContent,
  "maeng9-news-feed": Maeng9NewsFeedContent,
  "trend-chat": TrendChatContent,
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const ContentComponent = slug ? componentMap[slug] : null;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-12">
        <Link to="/" className="text-sm text-zinc-400 hover:text-white">
          ← Back
        </Link>
        <ContentComponent /> {/* 개별 프로젝트 전용 내용 컴포넌트 */}
      </main>
      <Footer />
    </div>
  );
}
