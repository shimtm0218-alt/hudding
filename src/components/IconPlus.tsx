import Image from "next/image";

// 더하기 아이콘. StepButton increase.
export default function IconPlus({ className = "size-6" }: { className?: string }) {
  return <Image src="/icons/plus.svg" alt="" width={24} height={24} className={className} />;
}
