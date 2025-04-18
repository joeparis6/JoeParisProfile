import LogoMarquee from '@/components/LogoMarquee';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll">
        <section className="flex h-screen snap-start items-center justify-center bg-black text-white">
          <h1>Joe Paris</h1>
          <h2>Software Engineer</h2>
          <button>About me</button>
          <button>Experience</button>
          <button>Education</button>
          <button>Skills</button>
          <Image
            className="dark:invert"
            src="/photos/me.jpeg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <LogoMarquee />
        </section>
        <section className="flex h-screen snap-start items-center justify-center bg-gray-800 text-white">
          <h1 className="text-5xl font-bold">Section 2</h1>
        </section>
        <section className="flex h-screen snap-start items-center justify-center bg-gray-600 text-white">
          <h1 className="text-5xl font-bold">Section 3</h1>
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </>
  );
}
