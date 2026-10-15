import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
};

// Figma 기준: sm·lg는 파란색, md는 회색 바탕. 마우스를 올리면 파란 반투명 색이 덮인다.
const sizeClasses = {
  sm: "py-inline-sm text-label-md bg-action-primary hover:bg-action-hover-overlay",
  md: "h-12 py-control-x text-label-md bg-text-secondary hover:bg-[linear-gradient(var(--color-action-hover-overlay),var(--color-action-hover-overlay)),linear-gradient(var(--color-text-secondary),var(--color-text-secondary))]",
  lg: "h-13 py-inline-sm text-label-lg bg-action-primary hover:bg-action-hover-overlay",
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
      className={`flex items-center justify-center rounded-control px-control-y text-text-inverse whitespace-nowrap disabled:cursor-not-allowed disabled:bg-border-subtle disabled:hover:bg-border-subtle ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
