"use client";

import { useState } from "react";
import Button from "./Button";
import InfoRow from "./InfoRow";
import Input from "./Input";
import Label from "./Label";
import RadioOption from "./RadioOption";
import Stepper from "./Stepper";
import SuccessIcon from "./SuccessIcon";

export type RsvpValues = {
  name: string;
  status: "yes" | "no";
  companions: number;
};

type RSVPCardProps = {
  state?: "form" | "done"; // 안 주면 스스로 바뀐다: 처음엔 form, 제출하면 done
  onSubmit?: (values: RsvpValues) => void;
  response?: RsvpValues; // state="done"을 직접 줄 때 보여줄 내 응답
  className?: string;
};

// 보기 화면(/i/[id])의 참석 신청 카드. 제출 전 form, 제출 후 같은 자리에서 done으로 바뀐다.
export default function RSVPCard({
  state,
  onSubmit,
  response = { name: "김허들", status: "yes", companions: 1 },
  className = "",
}: RSVPCardProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"yes" | "no">("yes");
  const [companions, setCompanions] = useState(0);
  const [submitted, setSubmitted] = useState<RsvpValues | null>(null);

  const currentState = state ?? (submitted ? "done" : "form");
  const shown = submitted ?? response;

  const card = `flex flex-col items-start gap-stack-lg overflow-clip rounded-card bg-surface-default px-page-horizontal py-stack-lg ${className}`;

  if (currentState === "done") {
    return (
      <div className={card}>
        <div className="flex w-full flex-col items-center gap-stack-sm py-section-lg">
          <SuccessIcon />
          <p className="text-title-lg whitespace-nowrap text-text-strong">참석 여부를 보냈어요</p>
          <p className="text-body-md whitespace-nowrap text-text-secondary">
            호스트에게 응답이 전달됐어요.
          </p>
        </div>
        <div className="flex w-full flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md">
          <InfoRow type="spread" label="이름" value={shown.name} />
          <InfoRow type="spread" label="참석 여부" value={shown.status === "yes" ? "참석" : "불참"} />
          <InfoRow type="spread" label="동반 인원" value={`${shown.companions}명`} />
        </div>
      </div>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // 불참이면 동반 인원은 0으로 보낸다.
    const values = { name: name.trim(), status, companions: status === "yes" ? companions : 0 };
    setSubmitted(values);
    onSubmit?.(values);
  }

  return (
    <form className={card} onSubmit={handleSubmit}>
      <div className="flex w-full flex-col items-center gap-inline-compact whitespace-nowrap">
        <p className="text-heading-lg text-text-strong">참석 여부 알려주기</p>
        <p className="text-body-md text-text-secondary">이름과 참석 여부를 남겨주세요.</p>
      </div>

      <div className="flex w-full flex-col gap-stack-lg">
        <Input
          label="이름"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
        />

        <div className="flex w-full flex-col gap-inline-md">
          <Label label="참석 여부" />
          <div className="flex w-full items-center">
            <RadioOption
              className="min-w-px flex-1"
              name="status"
              label="참석"
              showRequired={false}
              checked={status === "yes"}
              onChange={() => setStatus("yes")}
            />
            <RadioOption
              className="min-w-px flex-1"
              name="status"
              label="불참"
              showRequired={false}
              checked={status === "no"}
              onChange={() => setStatus("no")}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-inline-md">
          <Label label="동반 인원" />
          <Stepper
            value={`${companions}명`}
            decreaseDisabled={companions === 0}
            onDecrease={() => setCompanions((n) => Math.max(0, n - 1))}
            onIncrease={() => setCompanions((n) => n + 1)}
          />
          <p className="text-caption-md whitespace-nowrap text-text-tertiary">
            본인을 제외하고 함께 오는 인원이에요.
          </p>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={name.trim() === ""}>
        참석 여부 보내기
      </Button>
    </form>
  );
}
