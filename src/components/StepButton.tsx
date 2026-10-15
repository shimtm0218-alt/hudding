import Image from "next/image";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type StepButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
};

// Stepper의 −/+ 버튼. icon을 안 주면 빼기 아이콘. 더 못 줄이면 disabled.
export default function StepButton({
  icon,
  type = "button",
  disabled,
  className = "",
  ...props
}: StepButtonProps) {
  const defaultIcon = (
    <Image
      src={disabled ? "/icons/step-minus-disabled.svg" : "/icons/step-minus.svg"}
      alt=""
      width={20}
      height={20}
      className="size-5 shrink-0"
    />
  );

  return (
    <button
      type={type}
      disabled={disabled}
      className={`flex size-11 items-center justify-center overflow-clip rounded-control border border-border-default bg-surface-default disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {icon ?? defaultIcon}
    </button>
  );
}
