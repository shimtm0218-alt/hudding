type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  showSubtitle?: boolean;
  showTitle?: boolean;
  showDescription?: boolean;
  tone?: "default" | "inverse"; // inverse는 어두운 배경(InvitationCover) 위에서 쓴다
  className?: string;
};

// 섹션 제목 묶음(subtitle · title · description). 필요 없는 줄은 show* 속성으로 끈다.
export default function SectionHeader({
  subtitle = "Subtitle",
  title = "title",
  description = "Description",
  showSubtitle = true,
  showTitle = true,
  showDescription = true,
  tone = "default",
  className = "",
}: SectionHeaderProps) {
  const inverse = tone === "inverse";

  return (
    <div className={`flex w-full flex-col items-center gap-stack-md text-center ${className}`}>
      {showSubtitle && (
        <p
          className={`text-label-md w-full ${inverse ? "text-text-inverse opacity-60" : "text-action-secondary"}`}
        >
          {subtitle}
        </p>
      )}
      {showTitle && (
        <p
          className={`text-title-lg w-full whitespace-pre-line ${inverse ? "text-text-inverse" : "text-text-primary"}`}
        >
          {title}
        </p>
      )}
      {showDescription && (
        <p
          className={`text-body-md w-full ${inverse ? "text-text-inverse" : "text-text-primary"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
