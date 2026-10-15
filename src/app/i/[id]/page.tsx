import { notFound } from "next/navigation";
import { Suspense } from "react";
import InvitationView from "@/components/InvitationView";
import RSVPCard from "@/components/RSVPCard";
import Screen from "@/components/Screen";
import { getInvitation } from "@/lib/mock";

export default function InvitationPage(props: PageProps<"/i/[id]">) {
  return (
    <Suspense>
      <Invitation params={props.params} />
    </Suspense>
  );
}

async function Invitation({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // 지금은 가짜 데이터. Supabase를 연결하면 id로 DB에서 조회한다.
  const invitation = getInvitation(id);
  if (!invitation) notFound();

  return (
    <Screen>
      <InvitationView
        title={invitation.title}
        date={invitation.date}
        location={invitation.location}
        body={invitation.body}
      />
      <div className="bg-background-subtle px-page-horizontal pt-section-lg pb-section-xl">
        <RSVPCard className="w-full" />
      </div>
    </Screen>
  );
}
