import { withBase } from "../lib/url";

export const PROFILE = {
  name: "이건",
  title: "Backend Developer",
  keywords: ["Java", "Spring Boot", "Kafka", "Kubernetes", "Redis", "OAuth2"],
  links: {
    github: "https://github.com/doolchong",
    email: "mailto:doolchong@gmail.com",
    resume: withBase("/resume.pdf"),
  },
  intro:
    "실시간 데이터 처리와 안정적인 서버 아키텍처 설계에 강점. Kafka 기반 이벤트 처리, 대규모 데이터 처리, 마이크로서비스 배포 경험.",
} as const;
