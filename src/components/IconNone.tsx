// 빈 아이콘 슬롯. NavBar에서 아이콘이 없을 때 자리만 차지한다.
export default function IconNone({ className = "size-6" }: { className?: string }) {
  return <div className={`overflow-clip ${className}`} />;
}
