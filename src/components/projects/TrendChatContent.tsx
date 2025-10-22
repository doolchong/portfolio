"use client";

import Section from "@/components/Section";
import { useState } from "react";
import ImageZoom from "../ImageZoom";

type Item = {
  title: string;
  src: string;
  alt: string;
  caption: string;
};

const items: Item[] = [
  {
    title: "트렌드 키워드 랭킹 – 실시간 순위",
    src: "/images/ranking.png",
    alt: "실시간 트렌드 키워드 순위 리스트와 채팅 연결",
    caption: "실시간으로 집계된 트렌드 키워드 TOP 순위를 제공합니다.",
  },
  {
    title: "트렌드 키워드 페이지 – 카테고리별 분류",
    src: "/images/keywords.png",
    alt: "카테고리별 정규화된 트렌드 키워드 카드 리스트",
    caption:
      "정치/경제/사회/IT 등 카테고리로 정규화된 키워드 카드. 각 카드에는 AI 요약, 카테고리 태깅, 채팅방 연결 여부를 표시합니다.",
  },
  {
    title: "트렌드 뉴스 페이지 – 연관 뉴스 요약",
    src: "/images/news-list.png",
    alt: "연관 뉴스 리스트와 요약",
    caption:
      "특정 트렌드와 연결된 뉴스를 자동 수집·요약하여 제공합니다. AI Summarizer가 핵심 맥락을 정리해 빠르게 인사이트를 제공합니다.",
  },
  {
    title: "뉴스 상세 페이지 – AI 생성 뉴스",
    src: "/images/news-detail.png",
    alt: "트렌드 키워드 기반 뉴스 상세 화면",
    caption:
      "AI가 해당 트렌드 키워드와 관련된 뉴스를 수집·요약하여 제공합니다. 사용자는 단일 화면에서 핵심 내용을 빠르게 파악할 수 있습니다.",
  },
];

export default function TrendChatContent() {
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

      <h1 className="mt-3 text-3xl font-extrabold">Trend-Chat</h1>
      <p className="mt-1 text-zinc-400">2025.06 – 진행중 · 백엔드 개발 리드</p>

      <Section title="Overview">
        <p className="text-zinc-300">
          실시간 트렌드 수집 · 분석 · 알림과 카테고리 기반 채팅 기능을 통합한
          마이크로서비스 플랫폼입니다.
          <strong className="text-white">
            LangGraph 기반 멀티 에이전트 시스템
          </strong>
          으로 요약/분류/생성 기능을 자동화하고, Kafka 이벤트 흐름에 따라
          <strong className="text-white">
            도구(tool)를 활용하는 자율형 LLM Agent
          </strong>
          가 작동합니다. 실시간 SSE 알림과 함께 트렌드에 대한 배경 정보와
          커뮤니티 기능을 제공합니다.
        </p>
        <figure className="mt-6">
          <ImageZoom
            src="/images/trend-chat.png"
            alt="Trend-Chat 홈 화면과 실시간 채팅 UI"
          />
          <figcaption className="mt-2 text-sm text-zinc-400 text-center">
            Trend-Chat: 트렌드 요약과 채팅 UI
          </figcaption>
        </figure>
      </Section>

      <Section title="My Role">
        <ul className="list-disc list-inside space-y-1 text-zinc-300">
          <li>
            Kafka 기반 트렌드 데이터 파이프라인 설계 및 Producer/Consumer 흐름
            구현
          </li>
          <li>Google Trends 정적/RSS 및 Selenium 기반 동적 크롤러 개발</li>
          <li>Redis ZSET 기반 핫 키워드 감지 및 트렌드 선정 알고리즘 구축</li>
          <li>
            LangGraph 기반 멀티노드 FSM 에이전트 (Researcher / Summarizer /
            Categorizer / Creator) 설계
          </li>
          <li>LangChain 도구(tool) 정의 및 LLM의 `tool_call` 메커니즘 구현</li>
          <li>검색(Serper API), 웹스크레이핑(Trafilatura) 등 외부 도구 연계</li>
          <li>에이전트 결과 가공(summary, blog_post) 및 DB 연동 처리</li>
          <li>
            Spring Security 기반 인증(JWT + OAuth2: Google, Naver, Kakao, Apple)
          </li>
          <li>Spring Cloud Gateway + Config Server 기반 MSA 구성</li>
          <li>
            Kubernetes 기반 마이크로서비스 배포 자동화 (Ingress + MetalLB)
          </li>
          <li>
            GitHub Actions 기반 CI/CD 파이프라인 구현: 멀티모듈 변경 감지,
            `bootBuildImage`로 컨테이너 이미지 빌드, Docker Hub로 푸시
          </li>
          <li>
            Self-hosted GitHub Actions Runner를 Kubernetes 클러스터 내부에 구성
          </li>
          <li>Next.js 프론트엔드와의 통신을 위한 REST/SSE API 설계</li>
          <li>SSE 기반 트렌드 실시간 알림 API 설계 및 배포</li>
          <li>카테고리/서브카테고리 구조 설계 및 트렌드 키워드 매핑 처리</li>
          <li>Top10 트렌드 Context 관리, TagGrid 컴포넌트 연동</li>
          <li>
            TrendKeywordPage, News 단건 조회, RoomList 등 클라이언트 연동 기능
            구현
          </li>
        </ul>
      </Section>

      <Section title="Outcomes">
        <div className="mt-2 space-y-2">
          <span className="chip chip-soft">일 처리량 30만 건 안정 처리</span>
          <span className="chip chip-soft">알림 평균 지연 1.2초</span>
          <span className="chip chip-soft">
            LLM 기반 뉴스 요약 자동화 및 도구 호출 흐름 안정화
          </span>
          <span className="chip chip-soft">
            복잡한 트렌드 요약을 다단계 FSM 에이전트로 자동 처리
          </span>
          <span className="chip chip-soft">
            Kubernetes 기반 배포 자동화 및 수동 개입 최소화
          </span>
          <span className="chip chip-soft">
            카테고리 구조 정규화로 통계/추천/검색 확장성 확보
          </span>
        </div>
      </Section>

      <Section title="Architecture">
        <p className="text-zinc-300">
          Trend-Chat은 CI/CD 파이프라인부터 클러스터 내부 서비스까지
          end-to-end로 자동화된
          <strong>마이크로서비스 아키텍처(MSA)</strong>로 구성되어 있습니다:
        </p>

        <div className="bg-zinc-900 rounded-md p-4 border border-zinc-700">
          <ImageZoom
            src="/images/trend-chat-architecture.png"
            alt="Trend-Chat Architecture Diagram"
          />
        </div>

        <ul className="list-disc list-inside mt-2 space-y-2 text-zinc-300">
          <li>
            <strong>CI/CD 파이프라인</strong>: GitHub Actions가 빌드/테스트 후
            Docker Hub에 이미지를 push하고, Self-hosted Runner가 Kubernetes에{" "}
            <code>kubectl apply</code>로 배포 자동화 수행.
          </li>
          <li>
            <strong>네트워크 & 진입점</strong>: 외부 요청은{" "}
            <em>ngrok Secure Tunnel</em> → MetalLB(L2 IP 할당) → Ingress
            Controller(NGINX)로 유입. 각 서비스는 내부 DNS 기반으로 라우팅됨.
          </li>
          <li>
            <strong>코어 애플리케이션 (Microservices)</strong>:
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>Frontend</strong>: Next.js 기반 trend-chat-client,
                containerd로 2+ Replica 운영.
              </li>
              <li>
                <strong>API Services</strong>:<code>user-service</code>,{" "}
                <code>trend-service</code>, <code>chat-service</code>
                (Spring Boot 기반) 각각 독립 배포.
              </li>
              <li>
                <strong>AI Agent</strong>: Python 기반{" "}
                <code>trend-chat-agent</code>, Kafka Consumer로 동작하며
                Researcher / Summarizer / Categorizer / Creator 파이프라인을
                실행.
              </li>
            </ul>
          </li>
          <li>
            <strong>데이터 플랫폼 (Stateful Services)</strong>: 안정성을 위해
            StatefulSet으로 운영.
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>Kafka Cluster</strong>: 3노드, 실시간 이벤트 스트림
                관리.
              </li>
              <li>
                <strong>MySQL</strong>: Primary-Replica 구조 (1P+1R), 영속
                데이터 저장.
              </li>
              <li>
                <strong>Redis Sentinel</strong>: 3노드 클러스터, 캐싱 및 토큰
                블랙리스트 관리.
              </li>
              <li>
                <strong>RabbitMQ</strong>: 3노드 클러스터, 비동기 메시징/내부
                이벤트 처리.
              </li>
            </ul>
          </li>
          <li>
            <strong>스토리지 인프라</strong>:
            <code> nfs-client-provisioner</code>가 Central NFS Server를 기반으로
            PVC/PV를 자동 생성하여 DB·로그 등 상태 데이터 영속성 보장.
          </li>
          <li>
            <strong>모니터링 & 관찰성</strong>:<em> Prometheus</em>가 메트릭
            수집, <em> Grafana</em>로 시각화 대시보드 제공,
            <em> Zipkin</em>이 분산 트레이싱 관리.
          </li>
        </ul>
      </Section>

      <Section title="실사용 예시 (User Interface Examples)">
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <figure
              key={it.title}
              className="group overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900/60"
            >
              {/* 이미지 */}
              <div className="relative">
                <ImageZoom src={it.src} alt={it.alt} />
              </div>

              {/* 설명 */}
              <figcaption className="space-y-1 p-4">
                <h3 className="text-base md:text-lg font-semibold text-zinc-100">
                  {it.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300">
                  {it.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Technical Insights">
        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              보안 아키텍처 설계 의사결정 (인증·인가)
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
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. 문제 정의</h3>
              <p>
                Trend-Chat은 <strong>MSA 구조</strong>로 이루어져 있어, 각
                서비스(user, trend, chat, payment)가 독립적으로 배포·운영됩니다.
                따라서 <strong>“인증과 인가를 어디에서 처리할 것인가?”</strong>,{" "}
                <strong>“토큰을 어떤 방식으로 안전하게 관리할 것인가?”</strong>
                가 핵심 고민이었습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                2. 인증·인가 처리 레이어
              </h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1">
                <li>
                  <strong>API Gateway 레벨 (인증):</strong> JWT Access Token의
                  서명 검증을 수행해 잘못된 토큰은 각 서비스로 전달되지 않도록
                  차단.
                </li>
                <li>
                  <strong>마이크로서비스 레벨 (인가):</strong> 서비스별
                  FilterChain에서 Role/Scope 기반 세부 권한 검증 (예: 관리자만
                  카테고리 CRUD 가능).
                </li>
              </ul>
              <p className="mt-2">
                → 최종적으로 <strong>Gateway에서 인증, 서비스별로 인가</strong>
                를 적용하는 이중 레이어 보안 구조를 채택했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                3. 토큰 저장 방식 고민 (헤더 vs 쿠키)
              </h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-2">
                <li>
                  <strong>Access Token</strong>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>헤더(Authorization: Bearer)</strong>에 넣을 경우 →
                      CORS 정책 제어가 명확하고, 서버-클라이언트 통신 구조가
                      단순.
                    </li>
                    <li>
                      하지만 로컬 스토리지에 저장 시 <strong>XSS 공격</strong>에
                      취약해짐.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Refresh Token</strong>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      <strong>HttpOnly 쿠키</strong>에 보관 → 자바스크립트 접근
                      불가, XSS 공격 원천 차단.
                    </li>
                    <li>
                      CSRF 공격 가능성은 존재 → <code>SameSite=strict</code> +
                      CSRF 토큰으로 보완.
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="mt-2">
                <strong>최종 선택:</strong> Access Token은{" "}
                <code>Authorization Header</code>로 전달, Refresh Token은{" "}
                <code>HttpOnly 쿠키</code>에 보관하는 하이브리드 전략을
                채택했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. 보안 강화 기법</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-2">
                <li>
                  <strong>Refresh Token Rotation (RTR):</strong> 재사용 공격
                  방지를 위해 매 요청마다 Refresh Token을 교체하고 Redis에 최신
                  토큰만 저장.
                </li>
                <li>
                  <strong>Access Token 블랙리스트:</strong> 로그아웃/강제 만료
                  시 해당 토큰의 jti를 Redis 블랙리스트에 등록 → TTL은 만료
                  시각과 동일.
                </li>
                <li>
                  <strong>공통 보안 모듈:</strong> trend-chat-common 모듈에{" "}
                  <code>JwtUtil</code>, <code>AuthorizationFilter</code>,{" "}
                  <code>BlacklistChecker</code> 등을 구현하여 모든 서비스에서
                  공통 활용.
                </li>
                <li>
                  <strong>SSE 보안:</strong> 실시간 알림 채널 연결 시에도 Access
                  Token 검증을 수행하고, 만료 시 Refresh Flow와 연동.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. 의의</h3>
              <p>
                단순히 JWT를 사용하는 수준을 넘어,{" "}
                <strong>RTR과 블랙리스트</strong>로{" "}
                <em>“토큰 탈취·재사용·즉각 무효화 문제”</em>를 해결했습니다.
                또한 Access/Refresh Token을 서로 다른 보관 방식으로 운용해{" "}
                <strong>XSS와 CSRF 양쪽 모두에 대비</strong>했습니다. 이로써
                Trend-Chat은 MSA 환경에서도{" "}
                <strong>보안성과 운영성을 동시에 확보한 사례</strong>가
                되었습니다.
              </p>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">카테고리 정규화</span>
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
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-4">
            <p>
              프로젝트 초기에는 <code>@ElementCollection</code> 기반 문자열
              리스트로 카테고리를 관리했지만, 데이터 일관성 및 확장성 문제로
              인해 <strong>정규화된 엔티티 기반 설계</strong>로 전환하였습니다.
            </p>
            <p>
              Trend와 SubCategory를 중간테이블로 연결하고, MajorCategory는
              SubCategory를 통해 참조하도록 구성했습니다. 이를 통해
              통계/분석/추천 등 서비스 확장이 용이해졌고, 카테고리 메타데이터의
              정합성과 활용성이 크게 향상되었습니다.
            </p>
            <div className="overflow-x-auto border border-zinc-700 rounded-lg text-sm">
              <table className="min-w-full text-left">
                <thead className="bg-zinc-800 text-white">
                  <tr>
                    <th className="px-4 py-2">기준</th>
                    <th className="px-4 py-2">
                      Trend에 majorCategory 필드 존재
                    </th>
                    <th className="px-4 py-2">정규화(참조만, 필드 없음)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  <tr>
                    <td className="px-4 py-2">구조</td>
                    <td className="px-4 py-2">
                      Trend: 대분류(문자열) 직접 가짐
                    </td>
                    <td className="px-4 py-2">
                      Trend → SubCategory → MajorCategory 참조
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">데이터 일관성</td>
                    <td className="px-4 py-2">불일치 발생 위험</td>
                    <td className="px-4 py-2">항상 일관성 유지</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">중복/불필요 데이터</td>
                    <td className="px-4 py-2">
                      대분류 정보가 Trend마다 중복 저장
                    </td>
                    <td className="px-4 py-2">
                      MajorCategory 테이블 단일 관리
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">카테고리 구조 확장</td>
                    <td className="px-4 py-2">Trend 필드 추가/수정 필요</td>
                    <td className="px-4 py-2">테이블만 확장</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">통계/검색 효율성</td>
                    <td className="px-4 py-2">신뢰도 ↓, 쿼리 복잡</td>
                    <td className="px-4 py-2">신뢰도 ↑, 효율적 쿼리 가능</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">JPA 설계 적합성</td>
                    <td className="px-4 py-2">정규화 위반</td>
                    <td className="px-4 py-2">정규화 설계</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              데이터 파이프라인 아키텍처 설계
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
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                Kafka 기반 이벤트 스트림 vs REST API 연동
              </h3>
              <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                <li>
                  <strong>Kafka</strong>: 대용량 실시간 데이터 처리에 적합.
                  서비스 간 결합도 최소화, 장애 내성과 확장성 우수. 재처리/이력
                  관리 가능, 멀티 컨슈머 구조에 강점.
                </li>
                <li>
                  <strong>REST API</strong>: 구조 단순, 즉시성 확인에 적합.
                  하지만 트래픽 급증 시 병목·유실 위험이 크고 서비스 간 결합도가
                  높아 확장성에 한계.
                </li>
              </ul>
              <p className="mt-2">
                <strong>의사결정:</strong> 대용량 트렌드 키워드 실시간 분석,
                장애 복원력, 향후 확장성(BI·외부 연동)을 모두 고려해{" "}
                <strong>Kafka 기반 이벤트 드리븐 아키텍처(EDA)</strong> 채택.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">데이터 흐름 아키텍처</h3>
              <div className="bg-zinc-900 rounded-md p-4 border border-zinc-700">
                <ImageZoom
                  src="/images/trend-dataflow.png"
                  alt="데이터 흐름 아키텍처"
                />
              </div>
              <div className="mt-2 text-xs text-zinc-400 space-y-1">
                <p>
                  <strong>Topic</strong>은 파티션으로 분산되어 병렬 처리를
                  지원하며, 동일 키(예: <code>keyword_id</code>)로 파티션을
                  지정하면 단계 내 처리 순서를 보존할 수 있습니다.
                  <strong>Consumer Group</strong>은 각 단계(예: Summarizer)에서
                  동일 역할 인스턴스 간 부하를 분산·확장하는 용도로 사용합니다.
                  Kafka는 기본적으로 오프셋 기반 재처리를 지원하므로, 실패한
                  메시지도 오프셋 제어를 통해 다시 처리할 수 있습니다.
                </p>
                <p>
                  확장: 신규 컨슈머(예: 알림, 검색 인덱싱)를{" "}
                  <code>trend-results</code>에 추가 구독하여 무중단 확장 가능.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                왜 Kafka 기반 아키텍처인가?
              </h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1">
                <li>
                  <strong>비동기 처리:</strong> 크롤러는 AI 에이전트 완료를
                  기다리지 않고 다음 작업을 수행. Kafka가 지연·불확실성을 흡수해
                  전체 처리량↑.
                </li>
                <li>
                  <strong>서비스 간 결합도 분리:</strong> Spring Boot 서비스와
                  Python 에이전트는 Kafka 토픽만 공유. 독립적 배포·확장 가능.
                </li>
                <li>
                  <strong>데이터 지속성/장애 내성:</strong> 에이전트 다운 시에도
                  메시지는 Kafka에 안전히 보관, 복구 후 재처리 가능.
                </li>
                <li>
                  <strong>확장성:</strong> 처리량 급증 시 컨슈머 인스턴스만 수평
                  확장. 새로운 컨슈머(대시보드, 데이터 적재)도 손쉽게 추가.
                </li>
                <li>
                  <strong>고가치 데이터 보호:</strong> AI 에이전트가 생성하는
                  데이터(요약·분류·블로그 초안)는 LLM 토큰 사용에 따른{" "}
                  <strong>비용이 발생하는 고가치 자원</strong>. Kafka를 통해
                  유실 없는 전달을 보장함으로써, 한번 생성된 결과물이 안전하게
                  저장·재활용되며 중복 비용을 방지.
                </li>
              </ul>
              <p className="mt-2">
                <strong>결론:</strong> REST API의 단순성보다,{" "}
                <strong>안정성·확장성·유연성·비용 보호</strong>가 중요한 본
                프로젝트 특성에 부합해 Kafka 도입을 최종 결정.
              </p>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              AI 에이전트 아키텍처 설계 및 발전 과정
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
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. 프로젝트 개요</h3>
              <p>
                <strong>목표:</strong> 실시간 트렌드 키워드에 대해 “왜 해당
                키워드가 트렌드인가?”를 분석하여
                <strong>
                  {" "}
                  핵심 요약, 카테고리 분류, 블로그 포스트 초안 생성
                </strong>
                까지 자동화하는 AI 에이전트를 구축.
              </p>
              <p>
                <strong>핵심 기술:</strong> LangChain, LangGraph, Groq (Llama
                3), MCP (Model Context Protocol)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                2. 아키텍처 설계 및 발전 과정
              </h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-2">
                <li>
                  <strong>문제 정의:</strong> 단일 프롬프트/에이전트 구조로는
                  결과물의 일관성·품질 보장이 어려움.
                </li>
                <li>
                  <strong>해결 전략:</strong> 다중 에이전트 협업(Assembly Line)
                  파이프라인 설계 → LangGraph로 노드와 엣지 정의.
                </li>
                <li>
                  <strong>조건부 분기:</strong> 검색량 기준으로 경량/전체
                  파이프라인 실행을 분기하여 비용 최적화.
                </li>
                <li>
                  <strong>자율성 강화:</strong> @tool 기반 도구화를 도입, 각
                  에이전트가 스스로 필요한 도구를 선택·호출.
                </li>
                <li>
                  <strong>결과:</strong> 상황에 따라 도구를 선택·사용하는
                  유연하고 확장 가능한 멀티 에이전트 시스템 완성.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                3. 프로젝트 성과 및 향후 과제
              </h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1">
                <li>
                  LangGraph 기반 복잡한 워크플로우를 체계적으로 설계/구현.
                </li>
                <li>
                  비용 효율성과 자율성을 극대화하는 방향으로 점진적 리팩토링
                  성공.
                </li>
                <li>
                  LLM, 도구, 상태 관리, 프롬프트 엔지니어링 등 최신 기술 요소를
                  모두 경험.
                </li>
              </ul>
              <p className="mt-2">
                <strong>향후 과제:</strong> Critic 에이전트 기반 피드백 루프,
                외부 도구 관리 고도화(Smithery), Human-in-the-loop 검증 프로세스
                도입.
              </p>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">AI 에이전트 배포 전략</span>
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
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">
                1. 문제 정의: "만들어진 에이전트를 어떻게 서비스로 운영할
                것인가?"
              </h3>
              <p>
                로컬 환경에서 성공적으로 개발된 Python 기반 AI 에이전트를,
                Spring Boot 기반 메인 서비스와 안정적으로 연동하여{" "}
                <strong>24시간 365일 운영 가능한 서비스</strong>로 전환해야 하는
                과제에 직면했습니다. 이를 위해 에이전트를{" "}
                <strong>지속적으로 실행(Long-running)</strong>시키고,{" "}
                <strong>안정적으로 통신(Reliable Communication)</strong>하게
                하는 최적의 배포 전략을 마련할 필요가 있었습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                2. 후보 기술 분석 및 비교
              </h3>
              <table className="min-w-full text-sm border border-zinc-700">
                <thead className="bg-zinc-800 text-white">
                  <tr>
                    <th className="px-4 py-2">평가 항목</th>
                    <th className="px-4 py-2">
                      1. nohup & systemd
                      <br />
                      (전통적 서버 배포)
                    </th>
                    <th className="px-4 py-2">
                      2. FastAPI & REST API
                      <br />
                      (API 서버화)
                    </th>
                    <th className="px-4 py-2">
                      3. Docker 컨테이너화
                      <br />
                      (현대적 표준 배포)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  <tr>
                    <td className="px-4 py-2">구조</td>
                    <td className="px-4 py-2">
                      리눅스 서버에 직접 Python 실행 환경 구성 후
                      nohup/systemd로 백그라운드 실행
                    </td>
                    <td className="px-4 py-2">
                      FastAPI로 Python 스크립트를 API 서버로 감싸고 Spring
                      Boot에서 HTTP 호출
                    </td>
                    <td className="px-4 py-2">
                      Dockerfile로 이미지화, Compose/K8s로 Kafka·DB·Spring·Agent
                      전체를 관리
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">장점</td>
                    <td className="px-4 py-2">
                      설정이 간단, 소규모 환경에서 빠르게 적용 가능
                    </td>
                    <td className="px-4 py-2">
                      REST API에 익숙한 개발자 친숙, 동기 결과 확인 용이
                    </td>
                    <td className="px-4 py-2">
                      <strong>환경 격리 및 일관성 보장</strong>,{" "}
                      <strong>한 번 빌드, 어디서든 실행</strong>,{" "}
                      <strong>의존성 충돌 차단</strong>,{" "}
                      <strong>코드형 인프라(IaC)</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">단점</td>
                    <td className="px-4 py-2">
                      의존성 충돌 위험, 환경 복제 어려움, 수동 관리 과다
                    </td>
                    <td className="px-4 py-2">
                      Spring과 강한 결합, LLM 지연 시 HTTP 타임아웃 발생, Kafka
                      비동기 아키텍처 장점 상실
                    </td>
                    <td className="px-4 py-2">
                      초기 학습 곡선, Dockerfile 등 추가 설정 필요
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">핵심 키워드</td>
                    <td className="px-4 py-2">백그라운드 실행, 수동 설정</td>
                    <td className="px-4 py-2">API 엔드포인트, 동기 호출</td>
                    <td className="px-4 py-2">
                      <strong>환경 격리, 재현성, 코드형 인프라, MSA</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                3. 최종 의사결정: Docker 컨테이너화 채택
              </h3>
              <p>
                최종적으로, Python 에이전트를 <strong>Docker 컨테이너</strong>로
                패키징하고 Kafka Consumer로 운용하는 전략을 채택했습니다. 이
                방식은 개발 환경과 운영 환경의 차이로 인한 문제를 원천 차단하고,
                전체 시스템을 <strong>코드형 인프라(IaC)</strong>로 정의할 수
                있게 합니다.
              </p>
              <ul className="list-disc ml-6 text-sm leading-relaxed">
                <li>
                  <strong>환경 격리</strong>: "내 컴퓨터에선 됐는데..." 문제를
                  해결. 서버 환경과 상관없이 동일 실행 보장.
                </li>
                <li>
                  <strong>원클릭 배포</strong>: Docker Compose로 Kafka·Spring
                  Boot·에이전트·DB를 단일 네트워크로 연결,{" "}
                  <code>docker-compose up</code> 한 번으로 전체 구동.
                </li>
                <li>
                  <strong>MSA 친화적</strong>: 서비스 간 결합도 최소화, Kafka와
                  시너지. 장애/스케일링에도 독립적 운영 가능.
                </li>
              </ul>
              <p className="mt-2">
                <strong>결론:</strong> systemd의 의존성 지옥과 수동 관리,
                FastAPI 방식의 결합도 문제를 극복하고, Docker 컨테이너화를 통해{" "}
                <strong>안정성·확장성·운영 편의성</strong>을 모두 확보했습니다.
              </p>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              AI 에이전트 최적화 전략
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
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. 프로젝트 개요</h3>
              <p>
                본 프로젝트는 최신 트렌드 키워드와 관련된 뉴스를 자동으로
                수집·요약·분류하고, 이를 기반으로 블로그 포스트까지 생성하는 AI
                에이전트를 구축하는 것을 목표로 했습니다. 초기에는 단일 Groq LLM
                API를 사용했지만, 운영 비용과 안정성 문제를 직면하여 아키텍처
                최적화를 추진했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. 초기 모델의 문제점</h3>
              <p>
                모든 작업을 Summarizer 하나에 맡긴 구조로 인해 다음과 같은
                문제가 발생했습니다:
              </p>
              <ul className="list-disc ml-6 text-sm leading-relaxed">
                <li>
                  스크레이핑 원문 전체를 반복 입력해야 해{" "}
                  <strong>토큰 비용이 폭증</strong>.
                </li>
                <li>Groq API의 일일 토큰 한도(TPD)에 자주 도달.</li>
                <li>도구 사용 실패, 무한 루프 등으로 안정성이 낮음.</li>
              </ul>
              <p className="mt-2 text-sm text-zinc-400">
                예: Summarizer 입력 토큰만 6,100개 이상, 총 8,000 토큰 이상
                소모.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                3. 해결 전략: 역할 분리 기반 하이브리드 아키텍처
              </h3>
              <p>
                각 작업에 맞는 최적의 API를 선택하는 방식으로 아키텍처를
                개선했습니다.
              </p>
              <ul className="list-disc ml-6 text-sm leading-relaxed">
                <li>
                  <strong>Researcher</strong>: Groq 70b로 도구 호출만 전담 →
                  안정성 확보
                </li>
                <li>
                  <strong>Summarizer, Categorizer, Creator</strong>: Gemini
                  Flash로 텍스트 처리 전담 → 토큰 비용 절감 및 분산
                </li>
                <li>
                  정제된 데이터만 전달하여 Summarizer 입력 토큰을 절반 이상 절감
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. 최적화 결과 (1차)</h3>
              <p>
                총 토큰 사용량 약 22% 절감, Summarizer 입력 토큰 50% 이상 절감.
              </p>
              <table className="min-w-full text-sm border border-zinc-700">
                <thead className="bg-zinc-800 text-white">
                  <tr>
                    <th className="px-4 py-2">단계</th>
                    <th className="px-4 py-2">API & 모델</th>
                    <th className="px-4 py-2">입력 토큰</th>
                    <th className="px-4 py-2">출력 토큰</th>
                    <th className="px-4 py-2">합계</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  <tr>
                    <td className="px-4 py-2">Researcher</td>
                    <td className="px-4 py-2">Groq 70b</td>
                    <td className="px-4 py-2">1,500</td>
                    <td className="px-4 py-2">200</td>
                    <td className="px-4 py-2">1,700</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Summarizer</td>
                    <td className="px-4 py-2">Gemini Flash</td>
                    <td className="px-4 py-2">3,000</td>
                    <td className="px-4 py-2">250</td>
                    <td className="px-4 py-2">3,250</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Categorizer</td>
                    <td className="px-4 py-2">Gemini Flash</td>
                    <td className="px-4 py-2">300</td>
                    <td className="px-4 py-2">20</td>
                    <td className="px-4 py-2">320</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Creator</td>
                    <td className="px-4 py-2">Gemini Flash</td>
                    <td className="px-4 py-2">400</td>
                    <td className="px-4 py-2">600</td>
                    <td className="px-4 py-2">1,000</td>
                  </tr>
                  <tr className="bg-zinc-900">
                    <td className="px-4 py-2 font-semibold" colSpan={4}>
                      합계
                    </td>
                    <td className="px-4 py-2 font-semibold">6,270</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                4-1. 2차 최적화: 마이크로 최적화
              </h3>
              <p>
                Gemini Flash의 요청 횟수 기반 특성을 활용해 Summarizer·Creator는
                Gemini에 집중시키고, 간단한 Categorizer는 Groq 8b로
                대체했습니다.
              </p>
              <ul className="list-disc ml-6 text-sm leading-relaxed">
                <li>
                  Summarizer & Creator → Gemini Flash (토큰 무제한, RPD 제한)
                </li>
                <li>Categorizer → Groq 8b (저렴·경량 모델)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. 최종 최적화 결과</h3>
              <p>
                Groq 유료 토큰 사용량 약 75% 절감 (8,050 → 2,020). Gemini
                Flash를 통해 사실상 무료 수준의 텍스트 대량 처리 가능.
              </p>
              <table className="min-w-full text-sm border border-zinc-700">
                <thead className="bg-zinc-800 text-white">
                  <tr>
                    <th className="px-4 py-2">단계</th>
                    <th className="px-4 py-2">API & 모델</th>
                    <th className="px-4 py-2">입력 토큰</th>
                    <th className="px-4 py-2">출력 토큰</th>
                    <th className="px-4 py-2">Groq TPD 소모</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  <tr>
                    <td className="px-4 py-2">Researcher</td>
                    <td className="px-4 py-2">Groq 70b</td>
                    <td className="px-4 py-2">1,054</td>
                    <td className="px-4 py-2">237</td>
                    <td className="px-4 py-2">1,291</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Summarizer</td>
                    <td className="px-4 py-2">Gemini Flash</td>
                    <td className="px-4 py-2">3,000</td>
                    <td className="px-4 py-2">250</td>
                    <td className="px-4 py-2">0</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Categorizer</td>
                    <td className="px-4 py-2">Groq 8b</td>
                    <td className="px-4 py-2">300</td>
                    <td className="px-4 py-2">20</td>
                    <td className="px-4 py-2">320</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">Creator</td>
                    <td className="px-4 py-2">Gemini Flash</td>
                    <td className="px-4 py-2">400</td>
                    <td className="px-4 py-2">600</td>
                    <td className="px-4 py-2">0</td>
                  </tr>
                  <tr className="bg-zinc-900">
                    <td className="px-4 py-2 font-semibold" colSpan={4}>
                      합계
                    </td>
                    <td className="px-4 py-2 font-semibold">2,020</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">6. 결론 및 느낀 점</h3>
              <p>
                단일 LLM에 의존하는 구조에서 벗어나,{" "}
                <strong>
                  작업 특성별 최적의 모델을 조합하는 하이브리드 아키텍처
                </strong>
                의 강점을 체감했습니다. "계란을 한 바구니에 담지 않는" 전략으로
                토큰 비용을 절감하고, 두 API의 장점을 결합하여 안정성과 확장성을
                확보했습니다. 이 경험은 향후 더 복잡한 AI 시스템 설계에도 중요한
                자산이 될 것입니다.
              </p>
            </div>
          </div>
        </details>
      </Section>

      <Section title="Troubleshooting">
        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              LLM 프롬프트/토큰 폭발 문제 및 Supervisor 제거
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
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">문제 상황</h3>
              <ul className="list-disc ml-6 space-y-1 text-sm leading-relaxed">
                <li>
                  초기 아키텍처에서 <strong>Supervisor 에이전트</strong>가
                  Summarizer → Categorizer → Creator를 관리하는 구조로 설계됨.
                </li>
                <li>
                  실시간 실행 중 Supervisor 호출 단계에서{" "}
                  <strong>30초 이상 응답 지연</strong>이 빈번하게 발생.
                </li>
                <li>
                  로그 확인 결과, 프롬프트의 <code>total_tokens</code>가
                  3,000~4,000 이상으로 <strong>토큰 폭발</strong> 현상이 발견됨.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">원인 분석</h3>
              <ul className="list-disc ml-6 space-y-1 text-sm leading-relaxed">
                <li>
                  각 Agent의 결과 메시지가 <code>state['messages']</code>에
                  무한히 누적됨.
                </li>
                <li>
                  Supervisor가 매번 <strong>전체 메시지 이력</strong>을
                  프롬프트로 전달.
                </li>
                <li>
                  순환 구조에서 동일 메시지 중복 삽입 → 불필요한 토큰 소비 및
                  응답 지연 심화.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">1차 개선 방안</h3>
              <ul className="list-disc ml-6 space-y-1 text-sm leading-relaxed">
                <li>
                  <strong>프롬프트 최소화</strong>: Supervisor 호출 시,
                  <em>system_message</em>, trend context, 마지막 agent 결과만
                  전달.
                </li>
                <li>
                  <strong>상태 관리 개선</strong>: 각 단계별 결과를{" "}
                  <code>state</code>에 별도 키로 분리 저장 (예:{" "}
                  <code>summarizer_result</code>,{" "}
                  <code>categorizer_result</code>).
                </li>
                <li>
                  이를 통해 토큰 수가 급감하고 평균 응답 시간이 30초 → 5초
                  이내로 단축됨.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                최종 의사결정: Supervisor 제거
              </h3>
              <p className="text-sm leading-relaxed">
                1차 최적화로 속도 문제는 완화되었으나, 구조적 복잡성과 중복 관리
                이슈가 여전히 존재했습니다. 결국{" "}
                <strong>Supervisor 노드를 제거</strong>하고, 각 에이전트가 Kafka
                기반 파이프라인 내에서 순차적으로 동작하도록 단순화했습니다.
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm leading-relaxed">
                <li>
                  각 Agent는 독립적으로 Kafka Consumer/Producer 역할을 수행.
                </li>
                <li>
                  불필요한 중앙 관리자가 사라져 아키텍처 단순화 및 유지보수성
                  향상.
                </li>
                <li>실패한 메시지는 Kafka 오프셋 기반 재처리로 안정성 확보.</li>
              </ul>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              Kafka Consumer 중복 처리 문제
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
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-3">
            <p>
              <strong>문제:</strong> AI Agent 단계가 순차적이어야 하는데,
              Consumer Group 설정에 따라 메시지가 여러 인스턴스에 중복 분배되어
              순서 불일치/중복 처리 발생.
            </p>
            <p>
              <strong>원인:</strong> 기본 Consumer Group 설정은 병렬 분산
              처리(Partition-based)를 전제로 하기 때문.
            </p>
            <p>
              <strong>해결:</strong> 각 단계별 토픽을 별도로 두고, 순서가 중요한
              파이프라인은 <code>keyword_id</code> 기반 파티셔닝 키를 강제 적용.
              → 동일 키는 항상 같은 파티션/컨슈머로 전달되어 순서 보장.
            </p>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              쿠버네티스 마스터 노드 네트워크 장애 (ARP 캐시 오염)
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
          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. 문제 상황 (Symptom)</h3>
              <p className="text-sm leading-relaxed">
                로컬 PC(VMware/VirtualBox) 기반 Kubernetes 클러스터에서{" "}
                <strong>마스터 노드만</strong>
                SSH 접속 및 ping이 실패하는 장애 발생. 워커 노드들은 모두 정상
                통신 가능.
              </p>
              <ul className="list-disc ml-6 mt-2 text-sm space-y-1 leading-relaxed">
                <li>환경: On-premise VM, Ubuntu OS</li>
                <li>Host → Master: ping/SSH 실패</li>
                <li>Host → Worker: 정상</li>
                <li>Master VM 자체 부팅 및 내부 서비스는 정상</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. 트러블슈팅 과정</h3>
              <p className="text-sm leading-relaxed">
                OSI 7계층 기반 Top-Down 접근과 가설 기반 실험을 병행.
              </p>
              <ul className="list-disc ml-6 mt-2 text-sm space-y-2 leading-relaxed">
                <li>
                  <strong>가설 1 (Application):</strong> SSH 서비스 오류 → sshd
                  active(running), 포트 리스닝 확인 → 기각
                </li>
                <li>
                  <strong>가설 2 (Transport/Internet):</strong> 방화벽/라우팅
                  문제 → ufw inactive, 라우팅 테이블 정상 → 기각
                </li>
                <li>
                  <strong>가설 3 (Data Link):</strong> IP 충돌 의심 → VM 종료 후
                  동일 IP ping 테스트 → 응답 없음 → 기각
                </li>
                <li>
                  <strong>가설 4 (최종):</strong> ARP 캐시 오염 → Host의{" "}
                  <code>arp -a</code> 확인 및{" "}
                  <code>arp -d 192.168.219.101</code> 실행 후 즉시 복구
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                3. 원인 분석 (Root Cause)
              </h3>
              <p className="text-sm leading-relaxed">
                Host PC의 ARP 캐시에 마스터 노드 IP에 대한 잘못된 MAC 주소가
                고착(Stale)된 것이 원인. 전날 네트워크 재시작 과정에서 잘못된
                ARP 매핑이 기록되어 이후 모든 패킷이 잘못된 대상에 전달됨.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                4. 배운 점 및 회고 (Lessons Learned)
              </h3>
              <ul className="list-disc ml-6 mt-2 text-sm space-y-1 leading-relaxed">
                <li>
                  <strong>설정 vs 상태:</strong> 설정이 정상이라도, 캐시/상태가
                  잘못되면 장애가 발생할 수 있음.
                </li>
                <li>
                  <strong>체계적 접근:</strong> 네트워크 계층 순서대로 점검하는
                  Top-Down 방식이 문제 범위를 빠르게 축소.
                </li>
                <li>
                  <strong>가설 기반 실험:</strong> ping, arp 같은 기본
                  도구만으로도 강력한 원인 진단 가능.
                </li>
                <li>
                  <strong>근본 원인 파악:</strong> 단순 재부팅이 아닌 ARP 캐시
                  문제를 정확히 인지하여 재발 방지 경험 확보.
                </li>
              </ul>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              쿠버네티스 클러스터 연쇄 장애 (NFS / PV-PVC / DNS / Cgroup)
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

          <div className="mt-2 px-4 pb-4 text-zinc-300 space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. 개요 (Overview)</h3>
              <p className="text-sm leading-relaxed">
                단순한 <code>kubectl</code> connection refused 에러로
                시작했지만, 조사 끝에{" "}
                <strong>
                  잘못된 DNS 설정, Cgroup 드라이버 불일치, NFS 캐시 손상, PV/PVC
                  생명주기 문제
                </strong>
                가 겹쳐 발생한
                <em>연쇄 장애(Cascading Failure)</em>였습니다. 이틀간의
                트러블슈팅 끝에 클러스터를 정상화하며 Kubernetes·Linux·네트워크
                전반에 걸친 깊은 운영 경험을 얻었습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. 초기 증상 및 분석</h3>
              <ul className="list-disc ml-6 text-sm space-y-1 leading-relaxed">
                <li>
                  <code>kubectl get pods</code> 실행 시{" "}
                  <strong>API 서버 connection refused</strong> 에러 발생
                </li>
                <li>
                  <code>kube-apiserver</code> 컨테이너가 실행되지 않고,
                  kubelet이 정상적으로 부트스트랩하지 못함
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                3. 주요 장애 원인 및 해결 과정
              </h3>
              <ol className="list-decimal ml-6 text-sm space-y-4 leading-relaxed">
                <li>
                  <strong>Kubelet 부트스트래핑 실패 (resolv.conf)</strong>
                  <br />
                  systemd-resolved 환경에서 잘못된 resolv.conf 경로 참조 →
                  <code>--resolv-conf=/etc/resolv.conf</code> 옵션을 kubelet에
                  강제 적용해 복구
                </li>
                <li>
                  <strong>NFS 캐시 손상 및 노드 Hang</strong>
                  <br />
                  FS-Cache 손상으로 모든 워커 노드 커널 패닉 →
                  <code>cachefilesd</code> 설치 및 캐시 초기화로 해결
                </li>
                <li>
                  <strong>NFS 서버 미작동 (exit status 32)</strong>
                  <br />
                  nfs-provisioner 스케일 다운 과정에서 NFS 서버 자체가 중단됨 →
                  NFS 서버를 재구축 후 정상화
                </li>
                <li>
                  <strong>
                    PV/PVC 생명주기 문제 (Immutable Field & Finalizer)
                  </strong>
                  <br />
                  PV 서버 IP 변경 불가, Finalizer 교착 발생 →
                  <code>umount -l</code> 강제 해제 후 Finalizer 제거, PV 재생성
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. 교훈 및 예방 조치</h3>
              <ul className="list-disc ml-6 text-sm space-y-1 leading-relaxed">
                <li>
                  <strong>인프라 역할 분리:</strong> 워커 노드와 스토리지 서버는
                  반드시 분리
                </li>
                <li>
                  <strong>체계적 IP 관리:</strong> IP 충돌·변경은 전체 클러스터
                  장애로 이어짐
                </li>
                <li>
                  <strong>쿠버네티스 리소스 생명주기 이해:</strong> PV 불변성과
                  Finalizer의 동작 원리 숙지
                </li>
                <li>
                  <strong>리눅스 네트워크 심층 이해:</strong> resolv.conf,
                  systemd-resolved 등 동적 DNS 관리 방식 고려 필요
                </li>
              </ul>
            </div>
          </div>
        </details>
      </Section>
    </>
  );
}
