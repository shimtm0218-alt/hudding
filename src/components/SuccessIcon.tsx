import IconCheck from "./IconCheck";

// 완료 표시 아이콘(체크). 발행 완료·참석 신청 완료 상태에서 쓴다.
export default function SuccessIcon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex size-16 items-center justify-center overflow-clip rounded-pill bg-info-subtle ${className}`}
    >
      <IconCheck className="size-8 shrink-0" />
    </div>
  );
}
