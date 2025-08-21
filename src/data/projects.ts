import type { Project } from "../types";
import { withBase } from "@/lib/url";

export const PROJECTS: Project[] = [
  {
    slug: "trend-chat",
    name: "Trend-Chat",
    period: "2025.06 – 진행중",
    role: "백엔드 개발 리드",
    stack:
      "Spring Boot, Spring Cloud, LangGraph, Kafka, Redis, MySQL, PostgreSQL, Spring Security, OAuth2, JWT, Kubernetes, Docker, GitHub Actions, Ingress, MetalLB",
    summary:
      "실시간 트렌드 수집·분석·알림과 카테고리별 채팅. Kafka 파이프라인 + LLM(LangGraph/Tavily)로 배경 설명 자동화.",
    bullets: [
      "Kafka 파이프라인 설계 및 Consumer 그룹 운영",
      "SSE 실시간 트렌드 알림 API",
      "Redis 기반 JWT Blacklist, OAuth2(구글/네이버/카카오/애플)",
      "Kubernetes + Ingress + MetalLB 배포",
    ],
    outcomes: [
      "일 처리량 30만 건 안정 처리",
      "알림 평균 지연 1.2초",
      "Ingress 전환 후 p95 latency 20% 개선",
    ],
    links: {},
    image: withBase("/images/trend-chat.png"),
    imageAlt: "Trend-Chat 홈 화면과 실시간 채팅 UI",
  },
  {
    slug: "fitnus",
    name: "FitNus",
    period: "2024.10 – 2024.11",
    role: "일정 예약 및 정산 로직 개발",
    stack:
      "Spring Boot, MySQL, Redis, Kafka, AWS, Spring Batch, Terraform, GitHub Actions",
    summary:
      "일 단위 운동 예약/정산 서비스. 동시성 제어와 대용량 배치 처리 최적화.",
    bullets: [
      "Redis atomic/Lua로 예약 동시성 제어",
      "Spring Batch 멀티스레드/파티셔닝으로 정산 배치",
      "멀티 모듈 전환 및 Slack 알림",
    ],
    outcomes: ["예약 TPS 108.6/sec → 550/sec", "배치 9m45s → 2m19s"],
    links: {
      repo: "https://github.com/FitNus",
      post: "https://velog.io/@doolchong/posts",
    },
    image: withBase("/images/fitnus.png"),
    imageAlt: "FitNus 예약·결제 앱 UI",
  },
  {
    slug: "sal",
    name: "SAL(업무현황일지)",
    period: "2024.10 – 2024.10",
    role: "회원/검색/배포",
    stack: "Spring Boot, MySQL, Redis, Docker, AWS(EC2/ECR/S3), GitHub Actions",
    summary: "칸반 백엔드. 검색 최적화 및 배포 자동화.",
    bullets: [
      "인덱스 설계로 카드 검색 최적화",
      "Slack API 알림",
      "CI/CD 구축, EC2 메모리 이슈 해결",
    ],
    outcomes: ["검색 응답 체감 개선", "배포 파이프라인 안정화"],
    links: { repo: "https://github.com/wjdtmdgjs-1/SAL" },
    image: withBase("/images/sal.png"),
    imageAlt: "SAL 칸반/업무 현황 대시보드",
  },
  {
    slug: "maeng9-news-feed",
    name: "맹9 뉴스피드",
    period: "2024.09.02 – 2024.09.06",
    role: "게시글/댓글/친구/피드 도메인 개발",
    stack: "Java, Spring Boot, Spring Security, JPA, MySQL",
    summary:
      "친구들의 게시글을 한눈에 모아보는 뉴스피드 서비스. 친구 기반 피드, 오늘의 인기글, 좋아요/댓글, 친구 요청 등 소셜 기능을 제공.",
    bullets: [
      "로그인/회원가입, 프로필 관리 구현",
      "친구 요청/수락/목록 도메인 및 API",
      "게시글/댓글 CRUD 및 좋아요",
      "친구 기반 뉴스피드(최근 1시간), ‘오늘의 인기글’ 노출 로직",
      "ERD/와이어프레임/시퀀스 다이어그램 기반 설계 정리",
    ],
    outcomes: ["핵심 소셜 도메인 모델링 및 API 설계 정리"],
    links: {
      repo: "https://github.com/doolchong/Maeng9-news-feed",
    },
    image: withBase("/images/maeng9-news-feed.png"),
    imageAlt: "맹9 뉴스피드 – 친구 기반 피드와 오늘의 인기글 UI",
  },
  {
    slug: "ai-pest-diagnosis",
    name: "AI 해충 진단 어플리케이션",
    period: "2023.10 – 2023.11",
    role: "AI 모델 학습 및 AI 서버 구축",
    stack: "Python, PyTorch, Ultralytics YOLO, Flask, Docker, HTTP/REST",
    summary:
      "YOLO 기반 해충 진단 모델을 학습하고, Flask로 추론 서버를 구축해 앱 서버와 REST로 연동. 이미지 업로드→추론→진단 결과 JSON 반환.",
    bullets: [
      "데이터 증강(Flip/Hue/Brightness) 포함 학습 파이프라인 구성",
      "PyTorch/Ultralytics로 모델 학습·평가(mAP@0.5)",
      "Flask inference 서버 구현: 업로드 이미지 실시간 추론 및 JSON 응답",
      "앱 서버와 HTTP/REST 통신으로 서버-서버/앱-서버 연동",
    ],
    outcomes: [
      "평균 mAP ≈ 0.94 (IoU 0.5) 달성",
      "모델–API–앱 분리로 업데이트/배포 용이성 확보",
    ],
    links: {
      // repo: "레포가 있다면 추가",
      // post: withBase("/docs/ai-pest.pdf"), // 공개용 자료 넣고 싶으면
    },
    image: withBase("/images/fæst.png"),
    imageAlt: "AI 해충 진단 앱: 추론 결과 화면",
    extraImages: [
      {
        src: withBase("/images/fæst-arch.png"),
        alt: "AI 해충 진단 서비스 아키텍처",
        caption: "아키텍처: 앱(React Native) – REST API 서버 – Flask AI 서버",
      },
      {
        src: withBase("/images/fæst-inference.png"),
        alt: "AI 해충 진단 앱: 추론 결과 화면",
        caption: "이미지 업로드 후 진단 결과 예시",
      },
      {
        src: withBase("/images/fæst-performance.png"),
        alt: "모델 성능 측정 결과",
        caption: "YOLO 모델 성능 지표 (mAP ≈ 0.94)",
      },
    ],
  },
];
