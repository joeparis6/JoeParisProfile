import LogoMarquee from '@/components/LogoMarquee';
import LogoLink from '@/components/text/LogoLink';
import PageHeader from '@/components/text/PageHeader';
import Image from 'next/image';
import LinkedIn from '@/svgs/LinkedIn';
import Github from '@/svgs/Github';
import Email from '@/svgs/Email';

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
          <div className="Resume-item">
            <h4>Connect</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <LogoLink
                url={'josephparis6@gmail.com'}
                displayText={'Email'}
                logo={<Email />}
                isEmail
              />
              <LogoLink
                url={'https://www.linkedin.com/in/joseph-paris-1891a1229/'}
                displayText={'LinkedIn'}
                logo={<LinkedIn />}
              />
              <LogoLink
                url={'https://github.com/joeparis6'}
                displayText={'Github'}
                logo={<Github />}
              />
            </div>
          </div>
        </section>
        <section className="h-screen snap-start text-white">
          <PageHeader title="Experience" />
          <div className="Resume-item">
            <h4>Experience</h4>
            <ul>
              <li>Intermediate Full Stack Developer @ Lion Energy September 2024 - Present</li>
              <li>Junior Developer @ Lion Energy Jan 2023 - September 2024</li>
              <li>Software QA Intern @ Legrand North America May 2022 - November 2022</li>
              <li>
                Student Web Developer @ Center for Teaching and Learning April 2021 - November 2022
              </li>
            </ul>
          </div>
        </section>
        <section className="h-screen snap-start text-white">
          <PageHeader title="Education" />
          <div>
            <h4>Education</h4>
            <ul>
              <li>BS Computer Science - Brigham Young University 2022</li>
            </ul>
          </div>
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
