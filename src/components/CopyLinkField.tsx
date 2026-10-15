"use client";

import { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

type CopyLinkFieldProps = {
  title?: string;
  description?: string;
  url?: string;
  className?: string;
};

// 발행 후 공유할 링크 한 줄(title · description · 링크 field · 복사 버튼).
// 초대장 링크와 응답 현황 링크 두 번 쓴다.
export default function CopyLinkField({
  title = "초대장 링크",
  description = "게스트에게 공유하는 링크예요.",
  url = "",
  className = "",
}: CopyLinkFieldProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className={`flex flex-col items-start gap-inline-md overflow-clip rounded-card bg-surface-subtle p-stack-md ${className}`}
    >
      <p className="text-label-lg whitespace-nowrap text-text-strong">{title}</p>
      <div className="flex w-full items-stretch gap-inline-md">
        <InputField readOnly value={url} aria-label={title} className="min-w-px flex-1" />
        {/* h-auto!: 버튼 기본 높이(44px)를 무시하고 입력창과 같은 높이로 늘린다 */}
        <Button onClick={copy} className="h-auto! shrink-0">
          {copied ? "복사됨" : "복사"}
        </Button>
      </div>
      <p className="text-caption-md text-text-tertiary">{description}</p>
    </div>
  );
}
