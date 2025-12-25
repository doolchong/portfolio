"use client";

import Section from "@/components/Section";
import { useState } from "react";
import ImageZoom from "../ImageZoom";

export default function SALContent() {
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

      <h1 className="mt-3 text-3xl font-extrabold">SAL (업무현황일지)</h1>
      <p className="mt-1 text-zinc-400">팀 프로젝트 · 백엔드</p>

      {/* Overview */}
      <Section title="Overview">
        <p className="text-zinc-300">
          SAL은 부대/팀의 진행 중인 업무를 <strong>실시간으로 기록·공유</strong>
          하는 업무 현황 관리 서비스입니다. 칸반 스타일의 업무 흐름을 지원하며,
          현황 조회·검색 성능과 안정적인 배포 자동화에 집중해 개발했습니다.
        </p>

        <figure className="mt-6">
          <ImageZoom src="/images/sal.png" alt="SAL 개요/칸반 보드 UI" />
          <figcaption className="mt-2 text-sm text-zinc-400 text-center">
            SAL 보드 개요 (샘플 화면)
          </figcaption>
        </figure>
      </Section>

      {/* My Role */}
      <Section title="My Role">
        <ul className="list-disc list-inside space-y-2 text-zinc-300">
          <li>회원가입/로그인 인증 흐름 구현</li>
          <li>
            검색 빈도 기반 <strong>인덱스 설계</strong>로 카드 검색 최적화
          </li>
          <li>
            Slack Webhook 연동으로 주요 이벤트 <strong>알림 자동화</strong>
          </li>
          <li>
            Docker 이미지화 및 <strong>GitHub Actions CI/CD</strong> 파이프라인
            구성
          </li>
          <li>
            AWS 배포 파이프라인 안정화(ECR 이미지 푸시, EC2 배포 스크립트)
          </li>
        </ul>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>Backend: Spring Boot</li>
          <li>DB/Cache: MySQL, Redis</li>
          <li>Infra: Docker, AWS(EC2, ECR, S3)</li>
          <li>CI/CD: GitHub Actions</li>
          <li>Integration: Slack Webhook</li>
        </ul>
      </Section>

      {/* Architecture (이미지 옵션) */}
      <Section title="Architecture">
        <p className="text-zinc-300">
          컨테이너 기반으로 빌드/배포를 표준화하여, 코드 변경 시 자동 빌드 →
          이미지 푸시 → 배포가 이어지는 단순·안정 파이프라인을 구성했습니다.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-300">
          <li>GitHub Actions: 테스트·빌드·Docker 이미지 생성 자동화</li>
          <li>ECR: 버전 태깅으로 이미지 이력 관리</li>
          <li>EC2: 배포 스크립트로 컨테이너 롤링 재기동</li>
        </ul>

        <figure className="mt-4">
          <ImageZoom
            src="/images/sal-architecture.png"
            alt="SAL 배포/아키텍처 개요"
          />
          <figcaption className="mt-2 text-sm text-zinc-400 text-center">
            SAL 배포 파이프라인 개요
          </figcaption>
        </figure>
      </Section>

      {/* Troubleshooting & Results */}
      <Section title="트러블슈팅 및 성과">
        <details className="group [&_summary::-webkit-details-marker]:hidden mt-4">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">카드 검색 성능 개선</span>
            <svg
              className="w-5 h-5 text-white transition-transform duration-300 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-3 text-sm leading-relaxed">
            <p>
              실제 조회 패턴을 기준으로{" "}
              <strong>우선순위 조건에 복합 인덱스</strong>를 설계해 검색 응답
              지연을 줄였습니다. 실행 계획(Explain) 점검으로 불필요한 풀스캔을
              제거하고 캐시 히트율을 개선했습니다.
            </p>
            <figure>
              <ImageZoom
                src="/images/indexing.png"
                alt="인덱스/실행계획 최적화"
              />
              <figcaption className="mt-2 text-xs text-zinc-400 text-center">
                조회 조건 분석 → 복합 인덱스 설계 → 실행 계획 개선
              </figcaption>
            </figure>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-4">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              배포 안정화 (EC2 메모리 이슈)
            </span>
            <svg
              className="w-5 h-5 text-white transition-transform duration-300 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-3 text-sm leading-relaxed">
            <p>
              배포 중 컨테이너 OOM 이슈가 간헐 발생하여{" "}
              <strong>Swap 메모리</strong>와
              <strong> 컨테이너 메모리 제한</strong>을 설정해 안정적으로 롤링
              배포가 가능하도록 조치했습니다.
            </p>
          </div>
        </details>
      </Section>

      {/* 요약 및 배운 점 */}
      <Section title="요약 및 배운 점">
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>
            실제 사용 패턴을 기반으로 한 <strong>인덱스 최적화</strong>의 중요성
            체득
          </li>
          <li>
            컨테이너 <strong>자원 한도</strong>와 스왑 설정을 통한 배포 안정화
            경험
          </li>
          <li>
            알림·배포 등 <strong>운영 자동화</strong>로 팀 협업 효율 향상
          </li>
        </ul>
      </Section>
    </>
  );
}
