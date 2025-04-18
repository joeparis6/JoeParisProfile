import LogoMarquee from '@/components/LogoMarquee';
import PageHeader from '@/components/text/PageHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll bg-gray-800">
        <section className="h-screen snap-start text-white">
          <PageHeader title="Joe Paris" />
          <h2>Software Engineer</h2>
          <button>About me</button>
          <button>Experience</button>
          <button>Education</button>
          <button>Skills</button>
          <Image
            className="dark:invert"
            src="/photos/me.jpeg"
            alt="photo"
            width={180}
            height={38}
            priority
          />
        </section>
        <section className="h-screen snap-start text-white">
          <PageHeader title="Experience" />
        </section>
        <section className="h-screen snap-start text-white">
          <PageHeader title="Education" />
        </section>
        <section className="h-screen snap-start text-white">
          <PageHeader title="Skills" />
          <LogoMarquee />
        </section>
        <section className="h-screen snap-start text-white">
          <PageHeader title="About Me" />
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </>
  );
}
