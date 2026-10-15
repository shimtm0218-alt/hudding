type RadioProps = {
  state?: "default" | "selected" | "disabled";
  className?: string;
};

// 라디오 단독. 보통 RadioOption 안에서 쓴다.
const outerColors = {
  default: "bg-text-tertiary",
  selected: "bg-action-primary",
  disabled: "bg-text-disabled",
};

export default function Radio({ state = "default", className = "" }: RadioProps) {
  return (
    <div className={`relative size-12 overflow-clip ${className}`}>
      <div
        className={`absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 overflow-clip rounded-pill ${outerColors[state]}`}
      >
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-surface-default ${state === "selected" ? "size-2" : "size-4"}`}
        />
      </div>
    </div>
  );
}
