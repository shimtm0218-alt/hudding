type StatCardProps = {
  label?: string;
  value?: string;
  highlight?: boolean;
  className?: string;
};

// 응답 현황 숫자 카드. highlight는 강조할 합계(참석 인원 합계)에만 쓴다.
export default function StatCard({
  label = "참석",
  value = "2명",
  highlight = false,
  className = "",
}: StatCardProps) {
  return (
    <div
      className={`flex w-26.75 flex-col items-center gap-inline-sm overflow-clip rounded-card px-control-x py-stack-md ${highlight ? "bg-info-subtle" : "bg-surface-subtle"} ${className}`}
    >
      <p className="text-caption-md text-text-secondary">{label}</p>
      <p className={`text-title-lg ${highlight ? "text-info-strong" : "text-text-strong"}`}>
        {value}
      </p>
    </div>
  );
}
