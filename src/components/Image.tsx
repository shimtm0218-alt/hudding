import NextImage from "next/image";

type ImageProps = {
  type?: "character" | "flag";
  alt?: string;
  className?: string;
};

const images = {
  character: {
    src: "/images/character.png",
    box: "size-[201px]",
  },
  flag: {
    src: "/images/flag.png",
    box: "size-12 overflow-clip rounded-scaled-media-16-8",
  },
};

export default function Image({ type = "character", alt = "", className = "" }: ImageProps) {
  const { src, box } = images[type];

  return (
    <div className={`relative ${box} ${className}`}>
      <NextImage src={src} alt={alt} fill sizes="201px" className="object-cover" />
    </div>
  );
}
