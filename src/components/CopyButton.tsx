"use client";

import { useState } from "react";
import Button from "./Button";

// 이 사이트 안의 주소(path)를 복사하는 큰 버튼. 예) path="/i/demo"
export default function CopyButton({
  path,
  children,
  className = "",
}: {
  path: string;
  children: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(`${window.location.origin}${path}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button size="lg" className={`w-full ${className}`} onClick={copy}>
      {copied ? "복사됨" : children}
    </Button>
  );
}
