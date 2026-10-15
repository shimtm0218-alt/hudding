type LabelProps = {
  label?: string;
  required?: boolean;
  htmlFor?: string; // 입력창의 id. 주면 라벨을 눌렀을 때 그 입력창으로 이동한다
  className?: string;
};

// 입력 필드 위 라벨. required를 켜면 "필수" 표시가 붙는다.
export default function Label({
  label = "Label",
  required = true,
  htmlFor,
  className = "",
}: LabelProps) {
  const style = `flex items-center gap-inline-sm whitespace-nowrap ${className}`;
  const content = (
    <>
      <span className="text-label-lg text-text-strong">{label}</span>
      {required && <span className="text-caption-md text-feedback-error">필수</span>}
    </>
  );

  if (htmlFor) {
    return (
      <label htmlFor={htmlFor} className={style}>
        {content}
      </label>
    );
  }
  return <div className={style}>{content}</div>;
}
