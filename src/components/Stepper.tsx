import IconPlus from "./IconPlus";
import StepButton from "./StepButton";

type StepperProps = {
  value?: string;
  onDecrease?: () => void;
  onIncrease?: () => void;
  decreaseDisabled?: boolean;
  className?: string;
};

// 동반 인원 입력(decrease · value · increase). 최솟값(0명)이면 decreaseDisabled로 − 버튼을 끈다.
export default function Stepper({
  value = "1명",
  onDecrease,
  onIncrease,
  decreaseDisabled = false,
  className = "",
}: StepperProps) {
  return (
    <div className={`flex items-center gap-stack-sm ${className}`}>
      <StepButton aria-label="인원 줄이기" onClick={onDecrease} disabled={decreaseDisabled} />
      <p className="text-heading-md whitespace-nowrap text-text-strong">{value}</p>
      <StepButton
        aria-label="인원 늘리기"
        onClick={onIncrease}
        icon={<IconPlus className="size-5 shrink-0" />}
      />
    </div>
  );
}
