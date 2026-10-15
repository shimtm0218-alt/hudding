import type { TextareaHTMLAttributes } from "react";

// 여러 줄 입력 박스. Textarea 안에서 쓴다.
export default function TextareaField({
  className = "h-11.25",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full resize-none rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg leading-normal text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary ${className}`}
      {...props}
    />
  );
}
