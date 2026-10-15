type AttendanceBadgeProps = {
  status?: "yes" | "no";
  className?: string;
};

// 참석 여부 배지. status 값은 DB rsvps.status와 맞춘다.
const styles = {
  yes: { box: "bg-info-subtle text-info-strong", text: "참석" },
  no: { box: "bg-background-subtle text-text-secondary", text: "불참" },
};

export default function AttendanceBadge({ status = "yes", className = "" }: AttendanceBadgeProps) {
  const { box, text } = styles[status];

  return (
    <div
      className={`flex items-start rounded-pill px-control-compact py-inline-sm ${box} ${className}`}
    >
      <p className="text-label-md whitespace-nowrap">{text}</p>
    </div>
  );
}
