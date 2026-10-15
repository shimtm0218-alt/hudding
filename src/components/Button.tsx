import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

// sm·lg는 포인트 색(노랑) 바탕에 진한 글자. md는 회색 바탕에 흰 글자.
// 마우스를 올리면 sm·lg는 조금 진한 노랑, md는 파란 반투명이 덮인다.
const sizeClasses = {
  sm: "h-11 text-label-md bg-action-primary text-text-strong hover:bg-action-primary-hover",
  md: "h-12 py-control-x text-label-md bg-text-secondary text-text-inverse hover:bg-[linear-gradient(var(--color-action-hover-overlay),var(--color-action-hover-overlay)),linear-gradient(var(--color-text-secondary),var(--color-text-secondary))]",
  lg: "h-13 py-inline-sm text-label-lg bg-action-primary text-text-strong hover:bg-action-primary-hover",
};

export default function Button({
  size = "sm",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`flex items-center justify-center rounded-control px-control-y whitespace-nowrap disabled:cursor-not-allowed disabled:bg-border-subtle disabled:text-text-tertiary disabled:hover:bg-border-subtle ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
