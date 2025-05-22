'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const logos = [
  '/svgs/javascript.svg',
  '/svgs/typescript.svg',
  '/svgs/react.svg',
  '/svgs/nextjs.svg',
  '/svgs/tailwindcss.svg',
  '/svgs/nodejs.svg',
  '/svgs/nestjs.svg',
  '/svgs/aws.svg',
  '/svgs/postgresql.svg',
  '/svgs/python.svg',
  '/svgs/mui.svg',
  '/svgs/figma.svg',
];

export default function LogoMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(30); // default

  useEffect(() => {
    if (marqueeRef.current) {
      console.log('marqueeRef.current', marqueeRef.current);
      const totalWidth = marqueeRef.current.scrollWidth;
      const speed = 50; // pixels per second (adjust this value for faster/slower movement)
      const newDuration = Math.round(totalWidth / speed);
      console.log('newDuration', newDuration);
      setDuration(newDuration);
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-5/6 overflow-hidden border bg-gray-300 py-4">
        <div ref={marqueeRef} className={`flex animate-[marquee_30s_linear_infinite]`}>
          {[...logos, ...logos].map((src, idx) => (
            <div key={`${src}-${idx}`}>
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
    </div>
  );
}
