import Image from "next/image";
import { asset } from "@/lib/site";

/** The one authentic profile photograph, cropped to a circle with a cyan ring. */
export function Portrait({
  className = "",
  sizes = "300px",
  priority = false,
}: {
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-full ring-1 ring-cyan/40 shadow-[0_0_60px_-12px_rgba(63,224,255,0.5)] ${className}`}
    >
      <Image
        src={asset("/rishabh-shukla.jpg")}
        alt="Portrait of Rishabh Shukla"
        fill
        priority={priority}
        sizes={sizes}
        className="scale-[1.04] object-cover"
      />
    </div>
  );
}
