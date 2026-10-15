import Image from "./Image";
import SectionHeader from "./SectionHeader";

type InvitationCoverProps = {
  eyebrow?: string;
  title?: string;
  date?: string;
  location?: string;
  className?: string;
};

// 초대장 상단 커버(대표 이미지 + 제목). /create 미리보기와 /i/[id]에서 같은 컴포넌트를 쓴다.
export default function InvitationCover({
  eyebrow = "",
  title = "허들링 클럽 2번째\n오프라인 밋업",
  date = "2026년 11월 14일 (토) 09:00",
  location = "세종 남극 기지",
  className = "",
}: InvitationCoverProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-page-horizontal overflow-clip bg-linear-to-b from-cover-gradient-preserved-3 to-cover-gradient-preserved-4 px-page-horizontal py-cover-inset ${className}`}
    >
      <SectionHeader
        subtitle={eyebrow}
        title={title}
        showSubtitle={eyebrow !== ""}
        showDescription={false}
        tone="inverse"
      />
      <Image type="character" alt="" />
      <Detail label="일시" value={date} />
      <Detail label="장소" value={location} />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-inline-md">
      <div className="flex items-center justify-center rounded-control bg-info-subtle px-inline-compact py-inline-xs">
        <p className="text-caption-md font-semibold whitespace-nowrap text-info-strong">{label}</p>
      </div>
      <p className="text-label-md w-full text-center text-text-inverse">{value}</p>
    </div>
  );
}
