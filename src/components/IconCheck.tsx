import Image from "next/image";

export default function IconCheck({ className = "size-6" }: { className?: string }) {
  return (
    <Image
      src="/icons/check.svg"
      alt=""
      width={32}
      height={32}
      className={className}
    />
  );
}
