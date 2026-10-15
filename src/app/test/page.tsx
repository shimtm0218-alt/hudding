import AttendanceBadge from "@/components/AttendanceBadge";
import Button from "@/components/Button";
import CopyLinkField from "@/components/CopyLinkField";
import EmptyState from "@/components/EmptyState";
import IconCheck from "@/components/IconCheck";
import IconMinus from "@/components/IconMinus";
import IconNone from "@/components/IconNone";
import IconPlus from "@/components/IconPlus";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";
import Input from "@/components/Input";
import InputField from "@/components/InputField";
import InvitationCover from "@/components/InvitationCover";
import Label from "@/components/Label";
import NavBar from "@/components/NavBar";
import Radio from "@/components/Radio";
import RadioOption from "@/components/RadioOption";
import ResponseRow from "@/components/ResponseRow";
import RSVPCard from "@/components/RSVPCard";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import StepButton from "@/components/StepButton";
import Stepper from "@/components/Stepper";
import SuccessIcon from "@/components/SuccessIcon";
import Textarea from "@/components/Textarea";
import TextareaField from "@/components/TextareaField";

const sizes = ["sm", "md", "lg"] as const;

function Section({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <section className="mt-section">
      <h2 className="text-heading-md">{name}</h2>
      <div className="mt-stack-md flex flex-wrap items-center gap-stack-md">{children}</div>
    </section>
  );
}

export default function TestPage() {
  return (
    <main className="mx-auto w-full max-w-md p-page-horizontal pb-section-xl">
      <h1 className="text-title-lg">컴포넌트 테스트</h1>
      <p className="mt-inline-md text-body-md text-text-secondary">
        Figma 컴포넌트를 종류별로 모았어요. 버튼은 마우스를 올리면 hover 색을 볼 수 있어요.
      </p>

      <Section name="Button">
        {sizes.map((size) => (
          <div key={size} className="flex items-center gap-stack-md">
            <Button size={size}>{size}</Button>
            <Button size={size} disabled>
              {size}
            </Button>
          </div>
        ))}
      </Section>

      <Section name="Icon (none / check / plus / minus)">
        <IconNone className="size-6 bg-surface-subtle" />
        <IconCheck />
        <IconPlus />
        <IconMinus />
      </Section>

      <Section name="SuccessIcon">
        <SuccessIcon />
      </Section>

      <Section name="Label">
        <Label label="이름" />
        <Label label="메모" required={false} />
      </Section>

      <Section name="AttendanceBadge">
        <AttendanceBadge status="yes" />
        <AttendanceBadge status="no" />
      </Section>

      <Section name="Image">
        <Image type="character" alt="" />
        <Image type="flag" alt="" />
      </Section>

      <Section name="Radio / RadioOption">
        <Radio state="default" />
        <Radio state="selected" />
        <Radio state="disabled" />
        <RadioOption name="demo" label="기본" showRequired={false} />
        <RadioOption name="demo" label="선택됨" showRequired={false} checked readOnly />
        <RadioOption name="demo2" label="비활성" showRequired={false} disabled />
      </Section>

      <Section name="InputField / Input">
        <InputField placeholder="placeholder" />
        <InputField defaultValue="값이 채워진 상태" />
        <Input label="이름" placeholder="이름을 입력해주세요" helper="안내 문구" />
      </Section>

      <Section name="TextareaField / Textarea">
        <TextareaField placeholder="게스트에게 전할 초대 글을 적어주세요" />
        <Textarea label="제목" rows={2} placeholder="제목 (최대 2줄)" />
        <Textarea
          label="본문"
          rows={4}
          placeholder="게스트에게 전할 초대 글을 적어주세요"
          helper="엔터로 줄을 나눌 수 있어요"
        />
      </Section>

      <Section name="StepButton / Stepper">
        <StepButton aria-label="줄이기" />
        <StepButton aria-label="줄이기 (비활성)" disabled />
        <StepButton aria-label="늘리기" icon={<IconPlus className="size-5" />} />
        <Stepper value="1명" />
        <Stepper value="0명" decreaseDisabled />
      </Section>

      <Section name="InfoRow">
        <InfoRow type="inline" />
        <InfoRow type="spread" label="장소" value="세종 남극 기지" className="w-75" />
      </Section>

      <Section name="StatCard">
        <StatCard label="참석" value="2명" />
        <StatCard label="참석 인원 합계" value="5명" highlight />
      </Section>

      <Section name="SectionHeader">
        <SectionHeader subtitle="Subtitle" title="제목이에요" description="설명이에요" />
      </Section>

      <Section name="EmptyState">
        <EmptyState />
      </Section>

      <Section name="CopyLinkField">
        <CopyLinkField url="http://localhost:3000/i/k3f9x2a7" />
      </Section>

      <Section name="NavBar">
        <NavBar title="초대장 만들기" className="w-full bg-surface-subtle" />
      </Section>

      <Section name="ResponseRow">
        <ResponseRow status="yes" />
        <ResponseRow name="박허들" meta="010-****-5678" status="no" />
      </Section>

      <Section name="InvitationCover">
        <InvitationCover className="w-full" />
      </Section>

      <Section name="RSVPCard (form / done)">
        <RSVPCard state="form" className="w-full border border-border-subtle" />
        <RSVPCard state="done" className="w-full border border-border-subtle" />
      </Section>
    </main>
  );
}
