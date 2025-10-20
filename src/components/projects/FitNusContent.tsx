"use client";

import Section from "@/components/Section";
import { useState } from "react";
import ImageZoom from "../ImageZoom";

export default function FitNusContent() {
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

      <h1 className="mt-3 text-3xl font-extrabold">FitNus</h1>
      <p className="mt-1 text-zinc-400">
        2024.10 – 2024.11 · 일정 예약 및 정산 로직 개발
      </p>

      <Section title="Overview">
        <p className="text-zinc-300">
          FitNus는 기존에 월 단위 결제 방식에서 벗어나,{" "}
          <strong>일 단위로 원하는 날짜에 운동을 예약</strong>할 수 있는 웹
          서비스입니다. 사용자는 일정 관리 기능을 통해 자신에게 맞는 운동 시간을
          손쉽게 등록하고 예약할 수 있으며, 경제적으로 합리적인 가격으로 다양한
          제휴 운동 센터를 이용할 수 있습니다. 또한, 함께 운동할 수 있는{" "}
          <strong>모임 찾기 기능</strong>을 제공하여 커뮤니티 기반의 즐거운 운동
          문화를 형성할 수 있도록 지원합니다.
        </p>
        <figure className="mt-6">
          <img
            src="/images/fitnus.png"
            alt="FitNus 예약·결제 앱 UI"
            className="rounded-xl border border-zinc-800 cursor-pointer"
            onClick={() => setZoomSrc("/images/fitnus.png")}
          />
          <figcaption className="mt-2 text-sm text-zinc-400 text-center">
            FitNus 예약·결제 UI
          </figcaption>
        </figure>
      </Section>

      <Section title="My Role">
        <ul className="list-disc list-inside space-y-2 text-zinc-300">
          <li>
            <strong>모임</strong>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>모임 CRUD 기능 구현</li>
            </ul>
          </li>
          <li>
            <strong>멤버</strong>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>멤버 목록 조회</li>
              <li>멤버 탈퇴 및 추방 처리</li>
            </ul>
          </li>
          <li>
            <strong>멤버 신청</strong>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>멤버 가입 신청 및 승인/거절 기능</li>
              <li>신청 목록 조회 기능 구현</li>
            </ul>
          </li>
          <li>
            <strong>일정</strong>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>일정 CRUD 및 복사 기능 구현</li>
              <li>
                분산락을 활용한 일정·타임슬롯·알림 동시성 제어로 데이터 무결성
                보장
              </li>
              <li>예약 기능 대규모 트래픽 대응 성능 최적화</li>
            </ul>
          </li>
          <li>
            <strong>정산</strong>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>일 단위 이용내역 기록</li>
              <li>월 단위 정산 및 사용자 결제내역 관리</li>
              <li>스프링 배치 기반 예외 처리 전략 설계 및 구현</li>
            </ul>
          </li>
          <li>
            <strong>프로젝트 모듈화</strong>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>
                도메인별 모듈화 및 계층 분리를 통해 유지보수성과 확장성 강화
              </li>
            </ul>
          </li>
          <li>
            <strong>개발자 알림 시스템</strong>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>런타임 예외 발생 시 Slack 알림 발송 자동화</li>
            </ul>
          </li>
        </ul>
      </Section>

      <Section title="Outcomes">
        <div className="mt-2 space-y-2">
          <span className="chip chip-soft">예약 TPS 108.6/sec → 550/sec</span>
          <span className="chip chip-soft">배치 9m45s → 2m19s</span>
        </div>
      </Section>

      <Section title="System Architecture">
        <p className="text-zinc-300">
          FitNus는 AWS 기반의 MSA 구조로 설계되어 확장성과 안정성을
          확보했습니다. 각 서비스는 Docker 기반으로 컨테이너화되어 ECS 클러스터
          위에서 동작하며, CI/CD 파이프라인은 GitHub Actions와 ECR을 통해 자동
          배포됩니다.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-300">
          <li>
            <strong>MSA 구성</strong>: User/Service/Notification/Auction 등
            서비스별 분리
          </li>
          <li>
            <strong>데이터 플랫폼</strong>: RDS, ElastiCache(Redis), S3,
            ElasticSearch
          </li>
          <li>
            <strong>모니터링/알림</strong>: Prometheus + Grafana, CloudWatch,
            Slack 알림
          </li>
          <li>
            <strong>CI/CD</strong>: Docker 이미지 빌드 → ECR → ECS 자동 배포
          </li>
          <li>
            <strong>보안/네트워크</strong>: VPC, Public/Private Subnet 분리, NAT
            Gateway
          </li>
        </ul>
        <div className="mt-4">
          <img
            src="/images/fitnus-architecture.png"
            alt="FitNus AWS 기반 아키텍처 다이어그램"
            className="rounded-lg border border-zinc-700 shadow-md"
          />
          <p className="mt-2 text-sm text-zinc-400">
            AWS 기반 FitNus 시스템 아키텍처 – ECS 클러스터, 오토스케일링,
            모니터링 및 Slack 알림 구조
          </p>
        </div>
      </Section>

      <Section title="Technical Insights">
        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              정산( Settlement ) 기능 설계
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
              <h3 className="text-lg font-semibold">정산 기능의 목표</h3>
              <p className="text-sm leading-relaxed mt-1">
                대규모 일정 예약 데이터를{" "}
                <strong>효율적으로 빠르게 처리</strong>하는 동시에,
                <strong>작업 진행 상태 추적</strong>과{" "}
                <strong>중복 처리 방지</strong>를 통해
                <strong>데이터 일관성을 보장</strong>하는 것이 핵심 목표입니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">정산의 필요성</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1 mt-1">
                <li>센터별 이용 내역과 수익/수수료 정보를 체계적으로 관리</li>
                <li>실제 지급되는 정산 금액 기록 및 투명한 조회 기능 제공</li>
                <li>운영 신뢰성을 확보하고 사용자에게 정확한 정산 결과 제공</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">요구사항</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1 mt-1">
                <li>
                  대규모 데이터 처리 중 장애 발생 시{" "}
                  <strong>안전하게 복구</strong>할 수 있어야 함
                </li>
                <li>
                  정산 작업의 <strong>진행 상태를 추적</strong> 가능해야 함
                </li>
                <li>
                  이미 처리된 데이터는{" "}
                  <strong>중복 처리되지 않도록 방지</strong>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">기술 선택: Spring Batch</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1 mt-1">
                <li>
                  대용량 데이터를 <strong>청크 단위</strong>로 나누어 처리 및
                  커밋 → 메모리 사용 최적화
                </li>
                <li>
                  실패한 배치 작업을{" "}
                  <strong>중단 지점부터 재시작(retry) 또는 skip</strong> 가능
                </li>
                <li>
                  진행 상태, 소요 시간 등 <strong>모니터링 기능</strong> 제공
                </li>
                <li>
                  <strong>트랜잭션 관리</strong>를 통한 데이터 일관성 유지
                </li>
                <li>
                  Spring Scheduler 또는 Quartz와 연동하여{" "}
                  <strong>자동화된 정산 배치</strong> 수행
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">결론</h3>
              <p className="text-sm leading-relaxed mt-1">
                FitNus는 단순 CRUD 중심의 트랜잭션 처리로는 부족했고,
                <strong>대규모 정산 데이터의 안정성·일관성·효율성</strong>을
                동시에 만족하기 위해
                <strong>Spring Batch</strong>를 최종 선택했습니다. 이를 통해
                정산 프로세스를{" "}
                <strong>대용량 처리 최적화 + 안정적 복구 가능 + 자동화</strong>
                까지 아우르는 구조로 발전시켰습니다.
              </p>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              정산 배치 및 스케줄러 선택
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
              <h3 className="text-lg font-semibold">정산 기능 설명</h3>
              <p className="text-sm leading-relaxed mt-1">
                정산은 센터의 이용 내역과 그에 따른 수익 및 수수료 정보를
                체계적으로 관리하고, 실제 지급되는 정산 금액을 기록할 수 있도록
                도와주는 핵심 기능입니다. 신뢰성 있는 정산 조회를 보장하기 위해{" "}
                <strong>일 단위 기록</strong>과<strong>월 단위 집계</strong>가
                모두 필요합니다.
              </p>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1 mt-2">
                <li>
                  일 단위: 이용 내역 기록 (변하지 않는 데이터 저장, 실제 지급과
                  무관)
                </li>
                <li>월 단위: 센터 수익 + 수수료 정산, 결과 검증 후 저장</li>
                <li>
                  월 단위 서비스 수익: 사용자 결제 내역과 대조하여 적자 여부
                  검증
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">배경 및 요구사항</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1 mt-1">
                <li>
                  스프링 배치는{" "}
                  <strong>Job 실행 스케줄링 기능이 내장되어 있지 않음</strong>
                </li>
                <li>
                  따라서 <strong>Spring Scheduler</strong> 또는{" "}
                  <strong>Quartz</strong>와 함께 사용해야 함
                </li>
                <li>정산 서버는 단일 서버 환경 → 분산 처리 필요 없음</li>
                <li>
                  정산 기능은 주로 테이블 복제, 수익 계산 등 상대적으로 단순한
                  작업
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">선택지 비교</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-zinc-900 p-3 rounded-md border border-zinc-700">
                  <h4 className="font-semibold text-purple-400">
                    Spring Scheduler
                  </h4>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>
                      스프링 프레임워크에 통합 → 설정 간단, @Scheduled로 구현
                      용이
                    </li>
                    <li>추가 라이브러리 불필요</li>
                    <li>스프링 배치와 자연스럽게 연동</li>
                    <li>단일 스레드 기반, 복잡한 스케줄링에는 한계</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 p-3 rounded-md border border-zinc-700">
                  <h4 className="font-semibold text-purple-400">
                    Quartz Scheduler
                  </h4>
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>크론 표현식 및 다양한 스케줄링 옵션 지원</li>
                    <li>클러스터링 지원, 분산 환경에 강점</li>
                    <li>DB에 작업 상태 저장 가능</li>
                    <li>초기 설정 복잡, 추가 의존성 필요</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">의사결정</h3>
              <p className="text-sm leading-relaxed mt-1">
                정산 작업은 단순하고 단일 서버 환경에서 동작하므로, Quartz의
                클러스터링·고급 스케줄링 기능은 불필요했습니다. 따라서{" "}
                <strong>Spring Batch + Spring Scheduler</strong> 조합을 선택하여
                구현했습니다. Quartz 단독 사용은 대량 데이터 처리를 위한{" "}
                <strong>Batch 처리 기능 부재</strong>로 인해 배제했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">회고</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1 mt-1">
                <li>Spring Scheduler는 단순성·내장성에서 강점이 있었음</li>
                <li>
                  Quartz는 강력했지만 우리 요구사항에서는 오버엔지니어링에
                  가까움
                </li>
                <li>
                  다시 한다면? Jenkins를 <strong>스케줄 트리거</strong>로
                  사용하는 것도 고려할 수 있음
                </li>
              </ul>
              <p className="text-sm leading-relaxed mt-2">
                Jenkins를 사용할 경우, 실행 이력 관리·로그 모니터링·Slack 알림
                연계 등 운영 친화적인 관리가 가능해 실제 운영 환경에서는 더
                매력적인 대안이 될 수 있었음을 깨달았습니다.
              </p>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              멀티 모듈 전환 및 모듈화 전략
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
              <h3 className="text-lg font-semibold">배경</h3>
              <p className="text-sm leading-relaxed mt-1">
                프로젝트 초기에는 단일 모듈 구조로 개발되었으나, 시간이 지남에
                따라 코드 복잡성이 증가하고 빌드 시간이 길어지는 문제가
                발생했습니다. 특히 Auction, Schedule, Notification과 같이 대용량
                트래픽이 예상되는 도메인에서도{" "}
                <strong>모든 도메인이 함께 Scale Out</strong>되는 비효율적인
                구조적 문제가 드러났습니다.
              </p>

              <figure className="mt-4">
                <img
                  src="/images/fitnus-monolith.png"
                  alt="모놀리식 단일 모듈 구조"
                  className="rounded-lg border border-zinc-700 cursor-pointer"
                  onClick={() => setZoomSrc("/images/fitnus-monolith.png")}
                />
                <figcaption className="mt-2 text-sm text-zinc-400 text-center">
                  모놀리식 구조 (단일 모듈)
                </figcaption>
              </figure>

              <p className="text-sm leading-relaxed mt-4">
                따라서 도메인별 특성을 고려하지 않고 무조건 단일 모듈로 배포하는
                대신, <strong>필요한 도메인만 독립적으로 확장/배포</strong>할 수
                있도록 멀티 모듈 아키텍처로 전환을 결심했습니다.
              </p>

              <figure className="mt-4">
                <img
                  src="/images/fitnus-monolith-scaleout.png"
                  alt="모놀리식 구조 Scale Out 문제"
                  className="rounded-lg border border-zinc-700 cursor-pointer"
                  onClick={() =>
                    setZoomSrc("/images/fitnus-monolith-scaleout.png")
                  }
                />
                <figcaption className="mt-2 text-sm text-zinc-400 text-center">
                  모놀리식 구조 Scale Out 예시 (불필요한 도메인까지 확장됨)
                </figcaption>
              </figure>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                멀티 모듈 전환 전 문제점
              </h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1">
                <li>모든 도메인이 함께 Scale Out되어 불필요한 리소스 낭비</li>
                <li>하나의 도메인 장애가 전체 서비스에 전파되는 높은 결합도</li>
                <li>코드 검색/유지보수 어려움, 빌드 시간 증가</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">멀티 모듈 전환 후 구조</h3>
              <div className="bg-zinc-900 rounded-md p-4 border border-zinc-700">
                <ImageZoom
                  src="/images/fitnus-modularization.png"
                  alt="멀티 모듈 전환 후 구조"
                />
              </div>
              <p className="text-sm text-zinc-400 mt-2">
                Common, User, Notification, Auction, Batch, Service 등으로 모듈
                분리. Service 모듈은 Center, Club, Fitness, Timeslot 등 서로
                강한 의존성을 가진 도메인을 묶어 관리.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">모듈화 접근법</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-2">
                <li>
                  <strong>레이어별 모듈화:</strong> 유지보수와 테스트는
                  용이하지만, 도메인 단위로 확장하기 어려움.
                </li>
                <li>
                  <strong>도메인별 모듈화:</strong> 비즈니스 요구와 직결된
                  설계로 확장성과 독립성이 뛰어남.
                </li>
              </ul>
              <p className="text-sm leading-relaxed mt-2">
                본 프로젝트는 도메인별 트래픽 패턴과 확장성을 고려하여
                <strong> 도메인별 모듈화</strong>를 채택했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">의사결정 및 회고</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1">
                <li>도메인별 모듈화로 확장성과 유지보수성을 확보</li>
                <li>빌드 시간 단축 및 디버깅 효율 향상</li>
                <li>
                  향후 <strong>MSA 전환</strong>을 고려하여 모듈 간 의존성
                  최소화 목표
                </li>
              </ul>
              <p className="text-sm leading-relaxed mt-2">
                모듈화 과정에서 일부 도메인(예: Center, Fitness, Timeslot)은
                강하게 결합되어 Service 모듈로 묶었지만, 추후 리팩토링을 통해
                독립성을 강화하고 MSA로 점진적 전환하는 것을 장기 목표로
                설정했습니다.
              </p>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              이벤트성 일정 등록 – 분산 락 선택
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
              <h3 className="text-lg font-semibold">배경</h3>
              <p className="text-sm leading-relaxed mt-1">
                예를 들어, 유명 인플루언서(김종국)가 특정 체육관에서 이벤트성
                트레이닝을 진행한다고 가정했을 때, 수많은 사용자가 동시에 같은
                일정에 등록을 시도할 수 있습니다. 이때 최대 수용 인원(50명)을
                초과하지 않도록 <strong>강력한 동시성 제어</strong>가
                필요했습니다.
              </p>
              <p className="text-sm leading-relaxed mt-2">
                테스트 시나리오:{" "}
                <strong>1000명의 사용자가 20초 동안 같은 일정에 등록</strong>을
                시도하는 상황에서, 오토스케일링된 분산 서버 환경(Service
                모듈)에서도 데이터 무결성과 일관성을 보장해야 했습니다.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">락 전략 비교</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1">
                <li>
                  <strong>synchronized / SERIALIZABLE</strong>: 단일
                  인스턴스/트랜잭션 수준에서는 가능하지만, 분산 환경에서는
                  무용지물. 성능 저하와 확장성 부족으로 기각.
                </li>
                <li>
                  <strong>낙관적 락</strong>: 충돌 발생 시 재시도 로직 필요.
                  이번 시나리오(1000명 동시 등록)처럼 충돌이 빈번한 경우 성능
                  저하가 심각.
                </li>
                <li>
                  <strong>비관적 락</strong>: 충돌 방지는 확실하지만 DB 락
                  경합과 Scale Out 어려움으로 인해 분산 환경에서는 부적합.
                </li>
                <li>
                  <strong>분산 락</strong>: Redis/Zookeeper 등을 활용해 분산
                  환경에서 자원 접근을 제어. 확장성·일관성 측면에서 가장 적합.
                </li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>결론:</strong> 분산 환경에 맞게{" "}
                <strong>Redis 기반 분산 락</strong>을 도입하기로 결정.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Redis vs 다른 선택지</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1">
                <li>
                  <strong>MySQL 네임드 락</strong>: 추가 인프라 불필요하나 DB
                  부하 심각, 확장성 부족 → 기각.
                </li>
                <li>
                  <strong>Zookeeper</strong>: 강력한 일관성과 고가용성
                  제공하지만, 설정 복잡, 운영 부담 큼 → 기각.
                </li>
                <li>
                  <strong>Redis</strong>: 이미 다른 도메인에서 사용 중, 인메모리
                  DB 특성으로 빠른 락 획득/해제 가능. DB 부하를 줄이고 확장성도
                  뛰어남 → 채택.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Redis 클라이언트 선택</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1">
                <li>
                  <strong>Lettuce</strong>: Netty 기반, 비동기 지원. 하지만
                  spin-lock 방식으로 Redis 부하 증가. 고동시성 환경에 부적합.
                </li>
                <li>
                  <strong>Redisson</strong>: Pub/Sub 기반으로 락 해제 즉시 알림
                  전달. Spin-lock 대비 부하 적고, 타임아웃/대기 기능 제공. 사용
                  편의성도 높음.
                </li>
              </ul>
              <p className="mt-2 text-sm">
                <strong>최종 결정:</strong> 이벤트성 시나리오처럼 동시성 충돌이
                극심한 경우에도 안정적으로 대응 가능한{" "}
                <strong>Redisson 기반 Redis 분산 락</strong> 채택.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">회고</h3>
              <p className="text-sm leading-relaxed">
                동시성 제어는 단순히 "락을 거는 것" 이상의 고민이 필요했습니다.
                DB 부하를 최소화하고, 확장성과 성능을 동시에 잡기 위해 Redis +
                Redisson을 선택한 것이 합리적이었습니다.
              </p>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              성능 개선 (Performance Improvements)
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
              <h3 className="text-lg font-semibold">1. 정산 처리 최적화</h3>
              <p className="text-sm leading-relaxed">
                일 단위 센터 이용내역(10만 건)을 기록하는 배치 작업에서 성능
                최적화를 수행했습니다. 기본 구현 대비
                멀티스레드·파티셔닝·쿼리메소드 saveAll 방식을 비교하며 최적화
                전략을 수립했습니다.
              </p>
              <figure className="mt-4">
                <img
                  src="/images/fitnus-performance-batch.png"
                  alt="일 단위 센터 이용내역 기록 성능 비교"
                  className="rounded-xl border border-zinc-800 cursor-pointer"
                  onClick={() =>
                    setZoomSrc("/images/fitnus-performance-batch.png")
                  }
                />
                <figcaption className="mt-2 text-sm text-zinc-400 text-center">
                  배치 처리 성능 비교 – saveAll 적용 시{" "}
                  <strong>76.22% 성능 개선</strong>
                </figcaption>
              </figure>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                2. 일정 등록 동시성 제어 성능 개선
              </h3>
              <p className="text-sm leading-relaxed">
                이벤트성 트래픽이 몰리는 상황에서 Redis 분산락만으로는 성능
                저하가 발생했습니다. Redis Lua Script를 활용하여 락 점유·해제
                과정을 원자적으로 처리함으로써{" "}
                <strong>기본 Redis 대비 4.7배 성능 개선</strong>을 달성했습니다.
              </p>
              <figure className="mt-4">
                <img
                  src="/images/fitnus-performance-concurrency.png"
                  alt="일정 등록 동시성 제어 성능 개선"
                  className="rounded-xl border border-zinc-800 cursor-pointer"
                  onClick={() =>
                    setZoomSrc("/images/fitnus-performance-concurrency.png")
                  }
                />
                <figcaption className="mt-2 text-sm text-zinc-400 text-center">
                  동시성 제어 성능 비교 – Lua Script 적용 시{" "}
                  <strong>TPS 4.7배 향상</strong>
                </figcaption>
              </figure>
            </div>
          </div>
        </details>
      </Section>

      <Section title="Troubleshooting">
        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              일정 동시성 제어 트러블슈팅 (Redis 분산락 × @Transactional)
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
            {/* 1. 개요 */}
            <div>
              <h3 className="text-lg font-semibold">1. 개요 (Overview)</h3>
              <p className="text-sm leading-relaxed">
                최대 정원 50명인 <em>일정 등록</em> API에 대해 Redis
                분산락(Redisson)을 적용했음에도 피크 트래픽(1,000명/20초)
                상황에서 등록 건수가 <strong>~100건</strong>까지 증가하는 현상을
                발견했습니다. 분산락·트랜잭션·락 해제 타이밍의 상호작용을
                재점검하여 문제를 해결했습니다.
              </p>
            </div>

            {/* 2. 증상 */}
            <div>
              <h3 className="text-lg font-semibold">2. 증상 (Symptom)</h3>
              <ul className="list-disc ml-6 text-sm space-y-1 leading-relaxed">
                <li>
                  정원 50인 일정에 동시 요청 시 DB에 실제로는 약{" "}
                  <strong>100건</strong>이 저장됨
                </li>
                <li>
                  분산락 AOP는 정상 동작처럼 보이나, 남은 정원(capacity) 조회
                  값이 갱신되지 않음
                </li>
              </ul>
            </div>

            {/* 3. 가설 */}
            <div>
              <h3 className="text-lg font-semibold">3. 가설 (Hypotheses)</h3>
              <ol className="list-decimal ml-6 text-sm space-y-1 leading-relaxed">
                <li>
                  <strong>분산락 구현 결함</strong>: 커스텀 어노테이션 + AOP
                  로직 자체의 결함 가능성
                </li>
                <li>
                  <strong>Race Condition</strong>: 선점 트랜잭션이 커밋 전 락이
                  해제되어, 후속 요청이
                  <em>이전 스냅샷</em>을 읽는 상황
                </li>
                <li>
                  <strong>@Transactional 상호작용</strong>: 트랜잭션 경계
                  내부에서의 읽기-쓰기 순서와 격리수준에 의해{" "}
                  <em>정원 차감이 즉시 관측되지 않는</em> 문제
                </li>
              </ol>
            </div>

            {/* 4. 원인 분석 */}
            <div>
              <h3 className="text-lg font-semibold">
                4. 원인 분석 (Root Cause)
              </h3>
              <p className="text-sm leading-relaxed">
                핵심 원인은{" "}
                <strong>
                  “락 해제 타이밍 &amp; 트랜잭션 커밋 타이밍 불일치”
                </strong>
                였습니다. 선점 요청(Client1)이 정원 차감 후{" "}
                <em>커밋되기 전에</em> 락이 해제되면, 대기 중이던 Client2가 락을
                획득해 <em>커밋 전 상태(정원 50)</em>를 다시 읽고 차감합니다. 그
                결과
                <strong>정원 50 → 49</strong>가 두 번 발생(논리적으로는 48이어야
                정상)하며, 총 등록 건수가 2배로 치솟는 현상이 재현되었습니다.
              </p>
              <figure className="mt-3">
                <ImageZoom
                  src="/images/locking-race.png" // 레이스 컨디션 다이어그램 (업로드한 첫 번째 이미지)
                  alt="락-트랜잭션 타이밍 레이스 컨디션"
                />
                <figcaption className="mt-2 text-xs text-zinc-400 text-center">
                  커밋 전에 락 해제 → 후속 요청이 오래된 스냅샷을 읽음
                </figcaption>
              </figure>
            </div>

            {/* 5. 해결 */}
            <div>
              <h3 className="text-lg font-semibold">5. 해결 (Fix)</h3>
              <ul className="list-disc ml-6 text-sm space-y-2 leading-relaxed">
                <li>
                  <strong>락 해제 위치 이동</strong>: AOP 보조 트랜잭션 클래스를
                  통해 <code>commit()</code> 이후에만{" "}
                  <code>RLock.unlock()</code>을 호출하도록 수정
                </li>
                <li>
                  <strong>검증 프로젝트 분리</strong>: 동일한 락 로직을{" "}
                  <em>미니멀 리프로</em> 재현하여 락 자체 문제를 배제
                </li>
                <li>
                  <strong>@Transactional 영향 제거 실험</strong>: 문제 API에서
                  트랜잭션을 제거하여
                  <em>즉시 반영(autocommit)</em> 흐름으로 테스트 → 정원 50로
                  정확히 수렴
                </li>
              </ul>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <figure>
                  <ImageZoom
                    src="/images/before-overbook.png" // 트러블슈팅 전(약 100건) 스냅샷
                    alt="트러블슈팅 전 – 약 100건 저장"
                  />
                  <figcaption className="mt-2 text-xs text-zinc-400 text-center">
                    수정 전: 실제 DB 행 수 ≈ 100
                  </figcaption>
                </figure>
                <figure>
                  <ImageZoom
                    src="/images/after-50.png" // 트러블슈팅 후(정확히 50건) 스냅샷
                    alt="트러블슈팅 후 – 정확히 50건"
                  />
                  <figcaption className="mt-2 text-xs text-zinc-400 text-center">
                    수정 후: 실제 DB 행 수 = 50
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* 6. 결과 */}
            <div>
              <h3 className="text-lg font-semibold">6. 결과 (Result)</h3>
              <ul className="list-disc ml-6 text-sm space-y-1 leading-relaxed">
                <li>
                  피크 부하(1,000명/20초)에서도 정원 초과 없이 정확히 50건으로
                  제한
                </li>
                <li>
                  분산락 + 트랜잭션 경계 정렬로{" "}
                  <strong>일관성 &amp; 재현성</strong> 확보
                </li>
              </ul>
            </div>

            {/* 7. 교훈 */}
            <div>
              <h3 className="text-lg font-semibold">
                7. 교훈 (Lessons Learned)
              </h3>
              <ul className="list-disc ml-6 text-sm space-y-1 leading-relaxed">
                <li>
                  <strong>락의 수명은 트랜잭션 수명과 맞춘다:</strong> 커밋 직후
                  해제(또는
                  <em>커밋 이벤트 훅</em>)로 정렬
                </li>
                <li>
                  <strong>읽기-쓰기 패턴을 작게 유지:</strong> 가능하면 “하나의
                  읽기-하나의 쓰기”로 최소화
                </li>
                <li>
                  <strong>필요 시 보강책:</strong> DB 비관락(행 단위) + 분산락의
                  조합으로 2중 안전장치 구성, 단 성능-복잡도 트레이드오프를 인지
                </li>
              </ul>
              <p className="text-sm leading-relaxed mt-2">
                참고로 <code>@Transactional</code>을 제거했을 때 동작이 안정화된
                이유는 각 쓰기가
                <em>
                  즉시 커밋되어 후속 요청이 최신 상태를 읽을 수 있었기 때문
                </em>
                입니다. 실제 운영에서는 트랜잭션을 유지하되{" "}
                <strong>락 해제 타이밍</strong>을 커밋 이후로 옮기거나, 필요한
                지점에
                <strong>비관락</strong>을 보강하여 일관성과 성능을 균형 있게
                맞추는 전략이 유효합니다.
              </p>
            </div>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden mt-6">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg bg-zinc-800 px-4 py-2 text-white">
            <span className="text-lg font-semibold">
              Kafka 컨슈머 그룹 충돌 (모듈 의존성 재정비)
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
              <p className="text-sm leading-relaxed">
                모듈화를 진행하면서 <strong>Kafka 컨슈머 그룹 충돌</strong>{" "}
                문제가 발생했습니다. 원래 <code>notification</code> 모듈이
                처리해야 할 Kafka 파티션을 <code>service</code> 모듈이
                가져가면서 메시지 처리가 꼬이는 상황이었습니다.
              </p>
              <ul className="list-disc ml-6 mt-2 text-sm leading-relaxed space-y-1">
                <li>
                  Kafka는 동일한 Consumer Group ID를 가진 모듈을 하나의 그룹으로
                  인식
                </li>
                <li>
                  <code>service</code> 모듈이 컨슈머 역할을 하지 않음에도
                  불구하고 동일한 Group ID를 사용
                </li>
                <li>모듈 간 의존성으로 인해 의도치 않은 그룹 충돌이 발생</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. 해결 과정</h3>
              <ol className="list-decimal ml-6 text-sm leading-relaxed space-y-2">
                <li>
                  <strong>잘못된 접근:</strong> Service 모듈에 Consumer Group
                  ID를 직접 지정 → 근본적 해결 아님
                </li>
                <li>
                  <strong>근본 해결:</strong> <code>notification</code> ↔{" "}
                  <code>service</code> 간 불필요한 의존성을 제거하고, 모든
                  모듈이 <code>common</code>만 의존하도록 의존 관계 재구성
                </li>
              </ol>
              <div className="bg-zinc-900 rounded-md p-4 border border-zinc-700 mt-2">
                <figure>
                  <ImageZoom
                    src="/images/before-dependency.png"
                    alt="변경 전 의존 관계"
                  />
                  <figcaption className="mt-2 text-xs text-zinc-400 text-center">
                    👉 변경 전 의존 관계 (Common 외에도 서로 직접 의존)
                  </figcaption>
                </figure>
                <figure className="mt-4">
                  <ImageZoom
                    src="/images/after-dependency.png"
                    alt="변경 후 의존 관계"
                  />
                  <figcaption className="mt-2 text-xs text-zinc-400 text-center">
                    👉 변경 후 의존 관계 (Common 모듈만 의존)
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. 결과</h3>
              <ul className="list-disc ml-6 text-sm leading-relaxed space-y-1">
                <li>
                  Service 모듈이 더 이상 Kafka Consumer Group ID를 참조하지 않음
                  → Notification 모듈이 모든 파티션 정상 처리
                </li>
                <li>모듈 간 의존성이 단순화되어 유지보수성과 확장성 ↑</li>
                <li>불필요한 의존성 제거로 코드 구조 명확화</li>
              </ul>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <figure>
                  <ImageZoom
                    src="/images/before-logs.png"
                    alt="변경 전 Kafka 파티션 로그"
                  />
                  <figcaption className="mt-2 text-xs text-zinc-400 text-center">
                    전 상태: Service 모듈이 파티션을 가져감
                  </figcaption>
                </figure>
                <figure>
                  <ImageZoom
                    src="/images/after-logs.png"
                    alt="변경 후 Kafka 파티션 로그"
                  />
                  <figcaption className="mt-2 text-xs text-zinc-400 text-center">
                    후 상태: Notification 모듈이 모든 파티션을 정상적으로 처리
                  </figcaption>
                </figure>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. 교훈</h3>
              <p className="text-sm leading-relaxed">
                Kafka는 Consumer Group ID를 기준으로 파티션을 분배하므로,
                <strong>모듈 간 의존성 관리</strong>가 매우 중요합니다. 불필요한
                의존성을 제거하고 공통 기능은 Common 모듈로 통합하는 것이
                안정성과 확장성 확보에 핵심이었습니다.
              </p>
            </div>
          </div>
        </details>
      </Section>
    </>
  );
}
