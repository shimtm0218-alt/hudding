import type { InputHTMLAttributes } from "react";

// 한 줄 입력 박스. Input 안에서 쓴다.
// 빈 칸·입력 중(focus)·값 채움(active)은 브라우저 상태로 자동 바뀐다.
export default function InputField({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg leading-normal text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary ${className}`}
      {...props}
    />
  );
}
