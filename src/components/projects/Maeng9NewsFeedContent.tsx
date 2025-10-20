"use client";

import Section from "@/components/Section";
import { useState } from "react";

export default function Maeng9NewsFeedContent() {
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  return (
    <>
      {zoomSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 cursor-zoom-out"
          onClick={() => setZoomSrc(null)}
        >
          <img
            src={zoomSrc}
            alt="확대된 이미지"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg border border-white"
          />
        </div>
      )}

      <h1 className="mt-3 text-3xl font-extrabold">맹9 뉴스피드</h1>
      <p className="mt-1 text-zinc-400">
        2024.09.02 – 2024.09.06 · 게시글/댓글/친구/피드 도메인 개발
      </p>

      <Section title="Overview">
        <p className="text-zinc-300">
          <strong>맹9칭9</strong>은 친구들의 최신 소식을 타임라인 형태로 모아
          보여주고, 좋아요와 댓글을 통해 상호작용할 수 있는 웹
          애플리케이션입니다. 사용자 인증과 프로필 관리, 친구 기능을 중심으로,
          친구 기반의 뉴스피드와 “오늘의 핫이슈” 같은 인기 게시글 보드까지
          제공합니다.
        </p>
        <figure className="mt-6">
          <img
            src="/images/maeng9-news-feed.png"
            alt="맹9 뉴스피드 – 친구 기반 피드와 오늘의 인기글 UI"
            className="rounded-xl border border-zinc-800 cursor-pointer"
            onClick={() => setZoomSrc("/images/maeng9-news-feed.png")}
          />
        </figure>
      </Section>

      <Section title="My Role">
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>로그인/회원가입, 프로필 관리 구현</li>
          <li>친구 요청/수락/목록 도메인 및 API 개발</li>
          <li>게시글/댓글 CRUD 및 좋아요 기능</li>
          <li>최근 1시간 기준 친구 기반 피드, 오늘의 인기글 노출</li>
          <li>ERD, 와이어프레임, 시퀀스 다이어그램 기반 설계 정리</li>
        </ul>
      </Section>

      <Section title="Outcomes">
        <div className="mt-2 space-y-2">
          <span className="chip chip-soft">
            핵심 소셜 도메인 모델링 및 API 설계 정리
          </span>
        </div>
      </Section>
    </>
  );
}
