"use client";

import { useId } from "react";
import type { TextareaHTMLAttributes } from "react";
import Label from "./Label";
import TextareaField from "./TextareaField";

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> & {
  label?: string;
  showRequired?: boolean;
  helper?: string;
  rows?: 2 | 4;
};

// 여러 줄 입력. rows=2는 제목(최대 2줄), rows=4는 본문.
export default function Textarea({
  label = "Label",
  showRequired = true,
  helper,
  rows = 4,
  id,
  className = "",
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  return (
    <div className={`flex flex-col items-start gap-inline-compact ${className}`}>
      <Label label={label} required={showRequired} htmlFor={fieldId} />
      <TextareaField id={fieldId} className={rows === 2 ? "h-18" : "h-30"} {...props} />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
