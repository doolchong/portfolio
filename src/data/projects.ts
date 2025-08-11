import type { Project } from "../types";

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
  },
];
