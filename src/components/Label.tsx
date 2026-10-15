type LabelProps = {
  label?: string;
  required?: boolean;
  className?: string;
};

// 입력 필드 위 라벨. required를 켜면 "필수" 표시가 붙는다.
export default function Label({
  label = "Label",
  required = true,
  className = "",
}: LabelProps) {
  return (
    <div className={`flex items-center gap-inline-sm whitespace-nowrap ${className}`}>
      <p className="text-label-lg text-text-strong">{label}</p>
      {required && <p className="text-caption-md text-feedback-error">필수</p>}
    </div>
  );
}
