// components/LogoMarquee.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  "/next.svg",
  "/globe.svg",
  "/vercel.svg",
  "/window.svg",
];

export default function LogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const scrollWidth = marquee.scrollWidth;
      marquee.style.setProperty("--duration", `${scrollWidth / 50}s`);
    }
  }, []);

  return (
    <div className="overflow-hidden relative w-full py-4">
      <div
        ref={marqueeRef}
        className="flex animate-marquee gap-x-10 w-max"
        style={{
          animationDuration: "var(--duration)",
        }}
      >
        {[...logos, ...logos].map((src, idx) => (
          <div key={idx} className="shrink-0">
            <Image
              src={src}
              alt={`logo-${idx}`}
              width={136}
              height={101}
              className="w-[136px] h-[101px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
