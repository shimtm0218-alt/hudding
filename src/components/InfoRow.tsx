type InfoRowProps = {
  label?: string;
  value?: string;
  type?: "inline" | "spread";
  className?: string;
};

// 라벨-값 한 줄. inline은 붙여서, spread는 양끝 정렬. 초대장의 일시·장소 정보에 쓴다.
export default function InfoRow({
  label = "일시",
  value = "2026년 11월 14일 (토) 09:00",
  type = "inline",
  className = "",
}: InfoRowProps) {
  if (type === "spread") {
    return (
      <div className={`flex w-full items-center gap-control-compact ${className}`}>
        <p className="text-body-md whitespace-nowrap text-text-secondary">{label}</p>
        <p className="text-label-md min-w-px flex-1 text-right text-text-strong">{value}</p>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-control-compact ${className}`}>
      <p className="text-label-lg whitespace-nowrap text-text-secondary">{label}</p>
      <div className="h-3.5 w-px shrink-0 bg-border-default" />
      <p className="text-label-lg whitespace-nowrap text-text-strong">{value}</p>
    </div>
  );
}
