import LogoMarquee from '@/components/LogoMarquee';
import PageHeader from '@/components/text/PageHeader';
import Image from 'next/image';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <main className="h-screen snap-y snap-mandatory overflow-y-scroll bg-gray-800">
        <section className="h-screen snap-start text-white">
          <PageHeader title="Joe Paris" />
          <h2>Software Engineer</h2>
          <div className="flex gap-[15px]">
            <button>About me</button>
            <button>Experience</button>
            <button>Skills</button>
            <button>Education</button>
          </div>

          <Image
            className="dark:invert"
            src="/photos/me.jpeg"
            alt="photo"
            width={360}
            height={76}
            priority
          />
        </section>
        <section className="h-screen snap-start text-white">
          <PageHeader title="Experience" />
          <div className="Resume-item">
            <ul>
              <li>Full Stack Software Engineer @ Lion Energy January 2023 - Present</li>
              <ul>
                <li>Developed a web application using React, NestJS, and PostgreSQL</li>
                <li>
                  Optimized deployment by building an automated CI/CD pipeline using AWS services
                  such as CodePipeline, ECR, and AppRunner
                </li>
                <li>
                  Built an OAuth 2.0 Machine-to-Machine authentication system with Amazon Cognito
                </li>
                <li>
                  Facilitated communication with thousands of Energy Storage Systems via a suite of
                  cloud services (Iot Core, S3, TimeStream, IAM)
                </li>
              </ul>

              <li>Software QA Intern @ Legrand North America May 2022 - November 2022</li>
              <ul>
                <li>
                  Built a cross-platform test driver in Java for a smart home automation mobile app
                </li>
                <li>Authored hundreds of unit tests using JUnit and Appium frameworks</li>
                <li>
                  Performed manual testing of software and hardware for home automation systems
                </li>
              </ul>
              <li>
                Student Web Developer @ Center for Teaching and Learning April 2021 - November 2022
              </li>
              <ul>
                <li>
                  Designed a project tracking application, enabling teams to monitor progress and
                  streamline the peer review process
                </li>
                <li>Architected and implemented relational database schemas</li>
                <li>Collaborated with cross-functional teams to enhance user experience</li>
              </ul>
            </ul>
          </div>
        </section>
        <section className="h-screen snap-start text-white">
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
        <section className="h-screen snap-start text-white">
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

        <section className="h-screen snap-start text-white">
          <PageHeader title="About Me" />
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <Contact />
      </footer>
    </>
  );
}
