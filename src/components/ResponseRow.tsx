import AttendanceBadge from "./AttendanceBadge";

type ResponseRowProps = {
  name?: string;
  meta?: string;
  status?: "yes" | "no";
  className?: string;
};

// 응답 현황 목록 한 줄. 불참이면 meta에 동반 인원을 넣지 않는다.
export default function ResponseRow({
  name = "김허들",
  meta = "010-****-1234 · 굿즈 M",
  status = "yes",
  className = "",
}: ResponseRowProps) {
  return (
    <div
      className={`flex min-h-19.5 items-center gap-stack-sm rounded-card border border-border-subtle bg-surface-default p-stack-md ${className}`}
    >
      <div className="flex min-w-px flex-1 flex-col items-start gap-inline-sm overflow-clip whitespace-nowrap">
        <p className="text-label-lg text-text-primary">{name}</p>
        {meta && <p className="text-caption-md text-text-tertiary">{meta}</p>}
      </div>
      <AttendanceBadge status={status} className="shrink-0" />
    </div>
  );
}
