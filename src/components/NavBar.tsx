import type { ReactNode } from "react";
import IconNone from "./IconNone";

type NavBarProps = {
  title?: string;
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
};

// 화면 상단 바. 가운데 title, 양옆 left/right는 아이콘 슬롯(기본은 빈 자리).
export default function NavBar({
  title = "Label",
  left,
  right,
  className = "",
}: NavBarProps) {
  return (
    <div className={`flex h-16.25 items-center gap-section p-page-horizontal ${className}`}>
      {left ?? <IconNone className="size-6 shrink-0" />}
      <p className="text-heading-md min-w-px flex-1 text-center text-text-primary">{title}</p>
      {right ?? <IconNone className="size-6 shrink-0" />}
    </div>
  );
}
