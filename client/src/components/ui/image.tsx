import { cn } from "@/lib/utils";

interface ImageProps {
  imagePng: string;
  alt: string;
  className?: string;
}

export default function Image({ imagePng, alt, className = "" }: ImageProps) {
  return (
    <img
      className={cn(
        "h-48 w-full rounded-tl-none object-cover md:w-48",
        className
      )}
      src={imagePng}
      alt={alt}
    />
  );
}
