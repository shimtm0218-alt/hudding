import { notFound } from "next/navigation";
import { Suspense } from "react";
import CopyButton from "@/components/CopyButton";
import EmptyState from "@/components/EmptyState";
import NavBar from "@/components/NavBar";
import ResponseRow from "@/components/ResponseRow";
import Screen from "@/components/Screen";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import { getInvitation, getResponses } from "@/lib/mock";

export default function ResponsesPage(props: PageProps<"/i/[id]/responses">) {
  return (
    <Suspense>
      <Responses params={props.params} />
    </Suspense>
  );
}

async function Responses({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // 지금은 가짜 데이터. Supabase를 연결하면 id로 DB에서 조회한다.
  const invitation = getInvitation(id);
  if (!invitation) notFound();
  const responses = getResponses(id);

  const attending = responses.filter((r) => r.status === "yes");
  const absent = responses.filter((r) => r.status === "no");
  // 참석 인원 합계 = 참석한 사람 + 그 사람들이 데려오는 동반 인원
  const totalPeople = attending.reduce((sum, r) => sum + 1 + r.companions, 0);

  return (
    <Screen>
      <NavBar title="응답 현황" />

      <div className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
        <SectionHeader
          subtitle="Responses"
          title={invitation.title.replace("\n", " ")}
          description={`${invitation.date} · ${invitation.location}`}
        />

        <div className="flex gap-inline-md">
          <StatCard className="min-w-px flex-1" label="참석" value={`${attending.length}명`} />
          <StatCard className="min-w-px flex-1" label="불참" value={`${absent.length}명`} />
          <StatCard
            className="min-w-px flex-1"
            label="참석 인원 합계"
            value={`${totalPeople}명`}
            highlight
          />
        </div>

        <p className="text-caption-md text-text-tertiary">
          참석 인원 합계 = 참석한 사람 + 동반 인원
        </p>

        <div className="flex flex-col gap-inline-md">
          <p className="text-heading-md text-text-strong">응답 목록</p>
          {responses.length === 0 ? (
            <EmptyState />
          ) : (
            responses.map((r) => (
              <ResponseRow
                key={r.id}
                name={r.name}
                status={r.status}
                meta={r.status === "yes" ? `동반 ${r.companions}명` : ""}
              />
            ))
          )}
        </div>

        <CopyButton path={`/i/${id}`}>초대장 링크 복사하기</CopyButton>
      </div>
    </Screen>
  );
}
