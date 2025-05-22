import LogoMarquee from '@/components/LogoMarquee';
import PageHeader from '@/components/text/PageHeader';
import Image from 'next/image';
import Contact from '@/components/Contact';
import Employer from '@/components/Employer';

export default function Home() {
  return (
    <>
      <header className="fixed top-2 right-2 z-10 text-white">
        <div className="flex gap-[15px]">
          <a href="#about">
            <button className="cursor-pointer">About Me</button>
          </a>
          <a href="#experience">
            <button className="cursor-pointer">Experience</button>
          </a>
          <a href="#skills">
            <button className="cursor-pointer">Skills</button>
          </a>
          <a href="#education">
            <button className="cursor-pointer">Education</button>
          </a>
        </div>
      </header>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll bg-gray-800">
        <section className="h-screen snap-start text-white">
          <PageHeader title="Joe Paris" />
          <h2>Software Engineer</h2>

          <Image
            className="dark:invert"
            src="/photos/me.jpeg"
            alt="photo"
            width={360}
            height={76}
            priority
          />
        </section>
        <section id="experience" className="h-screen snap-start text-white">
          <PageHeader title="Experience" />
          <Employer
            employerName="Lion Energy"
            position="Full Stack Software Engineer"
            dates="January 2023 - Present"
            location="American Fork, UT"
          >
            <ul className="list-disc">
              <li>Developed a web application using React, NestJS, and PostgreSQL</li>
              <li>
                Optimized deployment by building an automated CI/CD pipeline using AWS services such
                as CodePipeline, ECR, and AppRunner
              </li>
              <li>
                Built an OAuth 2.0 Machine-to-Machine authentication system with Amazon Cognito
              </li>
              <li>
                Facilitated communication with thousands of Energy Storage Systems via a suite of
                cloud services (Iot Core, S3, TimeStream, IAM)
              </li>
            </ul>
          </Employer>
          <Employer
            employerName="Legrand"
            position="Software QA Intern"
            dates="May 2022 - September 2022"
            location="Pleasant Grove, UT"
          >
            <ul className="list-disc">
              <li>
                Built a cross-platform test driver in Java for a smart home automation mobile app
              </li>
              <li>Authored hundreds of unit tests using JUnit and Appium frameworks</li>
              <li>Performed manual testing of software and hardware for home automation systems</li>
            </ul>
          </Employer>
          <Employer
            employerName="Center for Teaching and Learning"
            position="Student Web Developer"
            dates="April 2021 - November 2022"
            location="Provo, UT"
          >
            <ul className="list-disc">
              <li>
                Designed a project tracking application, enabling teams to monitor progress and
                streamline the peer review process
              </li>
              <li>Architected and implemented relational database schemas</li>
              <li>Collaborated with cross-functional teams to enhance user experience</li>
            </ul>
          </Employer>
        </section>
        <section id="skills" className="h-screen snap-start text-white">
          <PageHeader title="Skills" />
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>NestJS</li>
            <li>Java</li>
            <li>Node.js</li>
            <li>SQL</li>
          </ul>
          <ul>
            <li>IoT Core</li>
            <li>S3</li>
            <li>Cognito</li>
            <li>Lambda</li>
          </ul>
          <ul>
            <li>Tailwind CSS</li>
            <li>MUI</li>
            <li>Figma</li>
          </ul>
          <ul>
            <li>PostgreSQL</li>
            <li>AWS Timestream</li>
            <li>DynamoDB</li>
          </ul>
          <LogoMarquee />
        </section>
        <section id="education" className="h-screen snap-start text-white">
          <PageHeader title="Education" />
          <div>
            <h4>Education</h4>
            <ul>
              <li>BS Computer Science - Brigham Young University 2022</li>
            </ul>
            <h4>
              As a student at Brigham Young University, I learned not only the essentials of
              programming, but also deeper concepts such as software design principles, applications
              of data structures, and designing delightful user experiences. More importantly, I
              learned to embrace challenge and new opportunities to learn. My growth mindset allows
              me to thrive when adapting to new technologies and dynamic processes.
            </h4>
          </div>
        </section>

        <section id="about" className="h-screen snap-start text-white">
          <PageHeader title="About Me" />
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <Contact />
      </footer>
    </>
  );
}
