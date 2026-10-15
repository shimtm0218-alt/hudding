import Image from "next/image";

// 빼기 아이콘. StepButton decrease.
export default function IconMinus({ className = "size-6" }: { className?: string }) {
  return <Image src="/icons/minus.svg" alt="" width={24} height={24} className={className} />;
}
