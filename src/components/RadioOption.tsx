import type { InputHTMLAttributes } from "react";
import Label from "./Label";
import Radio from "./Radio";

type RadioOptionProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: string;
  showRequired?: boolean;
};

// 라디오 + 라벨 한 줄. 참석/불참 선택에 쓴다.
export default function RadioOption({
  label = "Label",
  showRequired = true,
  checked,
  disabled,
  className = "",
  ...props
}: RadioOptionProps) {
  const state = disabled ? "disabled" : checked ? "selected" : "default";

  return (
    <label className={`flex items-center ${disabled ? "cursor-not-allowed" : "cursor-pointer"} ${className}`}>
      <input
        type="radio"
        className="sr-only"
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <Radio state={state} className="shrink-0" />
      <Label label={label} required={showRequired} />
    </label>
  );
}
