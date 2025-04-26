// components/LogoMarquee.tsx
'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const logos = [
  '/next.svg',
  '/globe.svg',
  '/vercel.svg',
  '/window.svg',
  '/window.svg',
  '/window.svg',
];

export default function LogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const marquee = marqueeRef.current;
  //   if (marquee) {
  //     const scrollWidth = marquee.scrollWidth;
  //     marquee.style.setProperty('--duration', `${scrollWidth / 50}s`);
  //   }
  // }, []);

  return (
    <div className="relative w-full overflow-hidden border border-gray-300 py-4">
      <div
        ref={marqueeRef}
        className="animate-marquee flex min-w-[200%] gap-x-10"
        style={{
          animationDuration: `${10}s`,
        }}
      >
        {[...logos, ...logos].map((src, idx) => (
          <div key={idx} className="shrink-0">
            <Image
              src={src}
              alt={`logo-${idx}`}
              width={136}
              height={101}
              className="h-[101px] w-[136px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
