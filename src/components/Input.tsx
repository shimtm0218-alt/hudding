"use client";

import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import InputField from "./InputField";
import Label from "./Label";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  showRequired?: boolean;
  helper?: string;
};

// 라벨 + 한 줄 입력 박스 + 안내 문구 묶음. 일시·장소·이름처럼 한 줄 값에 쓴다.
export default function Input({
  label = "Label",
  showRequired = true,
  helper,
  id,
  className = "",
  ...props
}: InputProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  return (
    <div className={`flex flex-col items-start gap-inline-compact ${className}`}>
      <Label label={label} required={showRequired} htmlFor={fieldId} />
      <InputField id={fieldId} {...props} />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
