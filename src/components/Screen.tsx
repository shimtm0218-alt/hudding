import type { ReactNode } from "react";

// 모든 화면의 바깥 틀. 최대 너비 375px, 큰 화면에서는 가운데 정렬.
export default function Screen({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`mx-auto flex min-h-dvh w-full max-w-mobile flex-col bg-surface-default ${className}`}
    >
      {children}
    </main>
  );
}
