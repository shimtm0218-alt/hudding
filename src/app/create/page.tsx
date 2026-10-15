"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import Input from "@/components/Input";
import InvitationView from "@/components/InvitationView";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import Screen from "@/components/Screen";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";

type Links = { invitation: string; responses: string };

export default function CreatePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [body, setBody] = useState("");
  const [links, setLinks] = useState<Links | null>(null); // 값이 있으면 발행 완료 상태

  // 제목·일시·장소·본문이 모두 채워져야 발행할 수 있다.
  const canPublish = [title, date, location, body].every((value) => value.trim() !== "");

  function publish() {
    // 지금은 가짜 발행: 항상 /i/demo 링크를 보여준다. Supabase를 연결하면 새 ID를 만든다.
    const origin = window.location.origin;
    setLinks({ invitation: `${origin}/i/demo`, responses: `${origin}/i/demo/responses` });
  }

  if (links) {
    return (
      <Screen>
        <NavBar title="발행 완료" />
        <div className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
          <div className="flex flex-col items-center gap-stack-sm py-stack-lg">
            <SuccessIcon />
            <p className="text-title-lg text-text-strong">초대장이 발행됐어요!</p>
            <p className="text-body-md text-text-secondary">아래 두 링크를 복사해 두세요.</p>
          </div>
          <CopyLinkField url={links.invitation} />
          <CopyLinkField
            title="응답 현황 링크"
            description="호스트용이에요. 이 링크를 아는 사람은 응답 목록을 볼 수 있어요."
            url={links.responses}
          />
          <Button size="lg" className="w-full" onClick={() => router.push("/i/demo")}>
            내 초대장 보기
          </Button>
        </div>
      </Screen>
    );
  }

  return (
    <Screen>
      <NavBar title="초대장 만들기" />

      {/* 아래 고정 버튼에 가리지 않도록 아래쪽을 비워 둔다 */}
      <div className="flex flex-col gap-section-lg px-page-horizontal pb-28">
        <div className="flex flex-col gap-stack-lg">
          <Textarea
            label="제목"
            rows={2}
            placeholder={"예) 허들링 클럽 2번째\n오프라인 밋업"}
            helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
            value={title}
            onChange={(e) => {
              if (e.target.value.split("\n").length <= 2) setTitle(e.target.value);
            }}
          />
          <Input
            label="일시"
            placeholder="예) 2026년 11월 14일 (토) 09:00"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            label="장소"
            placeholder="예) 세종 남극 기지"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Textarea
            label="본문"
            rows={4}
            placeholder="게스트에게 전할 초대 글을 적어주세요"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-inline-md">
          <Label label="미리보기" required={false} />
          <div className="h-116 overflow-y-auto rounded-control border border-border-subtle bg-surface-default">
            <InvitationView title={title} date={date} location={location} body={body} />
          </div>
          <p className="text-caption-md text-text-tertiary">
            입력하는 내용이 바로 미리보기에 반영돼요.
          </p>
        </div>
      </div>

      <div className="fixed bottom-0 left-1/2 w-full max-w-mobile -translate-x-1/2 bg-surface-default p-page-horizontal">
        <Button size="lg" className="w-full" disabled={!canPublish} onClick={publish}>
          발행하기
        </Button>
      </div>
    </Screen>
  );
}
