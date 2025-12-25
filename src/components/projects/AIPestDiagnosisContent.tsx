import Section from "@/components/Section";
import { withBase } from "@/lib/url";
import ImageZoom from "@/components/ImageZoom";

const AiPestDiagnosisContent = () => (
  <>
    <h1 className="mt-3 text-3xl font-extrabold">AI 해충 진단 어플리케이션</h1>
    <p className="mt-1 text-zinc-400">
      2023.10 – 2023.11 · AI 모델 학습 및 AI 서버 구축
    </p>

    <Section title="Overview">
      <p className="text-zinc-300">
        YOLO 기반 해충 진단 모델을 학습하고, Flask로 추론 서버를 구축해 앱
        서버와 REST로 연동. 이미지 업로드 → 추론 → 진단 결과 JSON 반환.
      </p>
      <figure className="mt-6">
        <ImageZoom
          src="/images/fæst-arch.png"
          alt="AI 해충 진단 서비스 아키텍처"
        />
        <figcaption className="mt-2 text-sm text-zinc-400">
          아키텍처: 앱(React Native) – REST API 서버 – Flask AI 서버
        </figcaption>
      </figure>
    </Section>

    <Section title="My Role">
      <ul className="list-disc list-inside space-y-1 text-zinc-300">
        <li>데이터 증강(Flip/Hue/Brightness) 포함 학습 파이프라인 구성</li>
        <li>PyTorch/Ultralytics로 모델 학습·평가(mAP@0.5)</li>
        <li>
          Flask inference 서버 구현: 업로드 이미지 실시간 추론 및 JSON 응답
        </li>
        <li>앱 서버와 HTTP/REST 통신으로 서버-서버/앱-서버 연동</li>
      </ul>
    </Section>

    <Section title="Outcomes">
      <div className="mt-2 flex flex-wrap gap-2">
        <figure className="mt-6">
          <ImageZoom
            src="/images/fæst-performance.png"
            alt="모델 성능 측정 결과"
          />
          <figcaption className="mt-2 text-sm text-zinc-400">
            YOLO 모델 성능 지표 (mAP ≈ 0.94)
          </figcaption>
        </figure>

        <figure className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ImageZoom
              src="/images/fæst-inference1.png"
              alt="AI 해충 진단 앱: 해충 추론 결과 화면"
            />
            <ImageZoom
              src="/images/fæst-inference2.png"
              alt="AI 해충 진단 앱: 충해 추론 결과 화면"
            />
          </div>
          <figcaption className="mt-2 text-sm text-zinc-400">
            이미지 업로드 후 진단 결과 예시
          </figcaption>
        </figure>
        <span className="chip chip-soft">평균 mAP ≈ 0.94 (IoU 0.5) 달성</span>
        <span className="chip chip-soft">
          모델–API–앱 분리로 업데이트/배포 용이성 확보
        </span>
      </div>
    </Section>

    <Section title="Troubleshooting: 클래스 불균형 문제 해결">
      <figure className="mt-6">
        <ImageZoom
          src="/images/fæst-class-imbalance.png"
          alt="클래스 불균형 시각화"
        />
        <figcaption className="mt-2 text-sm text-zinc-400">
          클래스 분포 비교 차트
        </figcaption>
      </figure>

      <p className="text-zinc-300 leading-relaxed">
        <br></br> 처음 수집한 해충 데이터셋은 <strong>클래스 불균형</strong>{" "}
        문제가 심각했습니다. 전체 19종류의 해충 중 일부(예: <em>배추흰나비</em>
        )는 3769 장의 이미지가 있었지만, <i>복숭아진딧물</i> 클래스는 765장
        수준에 불과했습니다.
      </p>

      <p className="mt-4 text-zinc-300">
        이로 인해{" "}
        <strong>모델 학습 시 특정 클래스에 과적합(overfitting)</strong> 되거나,
        드물게 등장하는 클래스의 탐지 성능이 낮게 나오는 문제가 있었습니다. YOLO
        모델은 객체 탐지 정확도에 영향을 많이 받기 때문에{" "}
        <strong>클래스 간 학습 기회의 균형</strong>이 중요했습니다.
      </p>

      <p className="text-xl mt-6 text-zinc-200 font-semibold">
        이를 해결하기 위해 다음과 같은 방식을 적용했습니다:
      </p>

      <ul className="list-disc list-inside mt-2 space-y-1 text-zinc-300">
        <li>
          <strong>AI 허브 데이터 기반 소수 클래스 증강</strong>: Flip, Hue,
          Brightness 등 다양한 증강 기법을 활용해 데이터 다양성 확보
        </li>
        <li>
          <strong>클래스별 증강 비율 조정</strong>: 소수 클래스는 10배 이상
          증강, 과다 클래스는 제한하여 클래스 간 균형을 맞춤
        </li>
        <li>
          <strong>Loss Weight 보정</strong>: 학습 시 손실 함수에 클래스별
          가중치를 적용해 학습 편향 완화
        </li>
      </ul>

      <div className="space-y-8 mt-8">
        <figure>
          <ImageZoom
            src="/images/fæst-augmentation1.png"
            alt="클래스 불균형 문제 해결 - AI 허브 증강"
          />
          <figcaption className="mt-2 text-sm text-zinc-400">
            AI 허브 증강 데이터로 클래스 불균형 문제 일부 해소 (Flip, Hue 등)
          </figcaption>
        </figure>

        <figure>
          <ImageZoom
            src="/images/fæst-augmentation2.png"
            alt="클래스 불균형 문제 해결 - 추가 증강"
          />
          <figcaption className="mt-2 text-sm text-zinc-400">
            Brightness 조정 등 자체 추가 증강으로 소수 클래스 확대
          </figcaption>
        </figure>
      </div>

      <p className="mt-6 text-zinc-300">
        위 전략을 통해 평균 mAP가 0.87 → <strong>0.94</strong>로 크게
        향상되었고, 소수 클래스의 탐지 정확도도 30% 이상 증가하는 성과를 얻을 수
        있었습니다.
      </p>
    </Section>
  </>
);

export default AiPestDiagnosisContent;
