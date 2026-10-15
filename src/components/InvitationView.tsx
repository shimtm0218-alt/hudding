import Image from "./Image";
import InfoRow from "./InfoRow";
import InvitationCover from "./InvitationCover";

type InvitationViewProps = {
  title: string;
  date: string;
  location: string;
  body: string;
};

// 초대장 본문 전체(커버 + 본문 + 일시·장소 카드). /create 미리보기와 /i/[id]에서 같이 쓴다.
// 받은 값을 그대로 보여준다.
export default function InvitationView({ title, date, location, body }: InvitationViewProps) {
  return (
    <div className="flex flex-col bg-surface-default">
      <InvitationCover title={title} date={date} location={location} />

      {body.trim() !== "" && (
        <div className="flex flex-col items-center gap-stack-md px-page-horizontal py-cover-inset">
          <Image type="flag" alt="" />
          <p className="text-body-compact w-full text-center whitespace-pre-line text-text-primary">
            {body}
          </p>
        </div>
      )}

      <div className="px-page-horizontal pt-stack-lg pb-section-lg">
        <div className="flex flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
          <InfoRow label="일시" value={date} />
          <InfoRow label="장소" value={location} />
        </div>
      </div>
    </div>
  );
}
