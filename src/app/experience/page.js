import Link from "next/link";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Code2,
  MapPin,
  CalendarDays,
} from "lucide-react";
import SkillsSection from "@/components/SkillsSection";

const experience = [
  {
    role: "Computer Support Specialist D",
    company: "NL Health Services",
    location: "Corner Brook, NL",
    period: "Mar 2026 – Present",
    type: "IT SUPPORT",
    description:
      "Supporting technology used across clinical and administrative departments, helping maintain reliable access to the systems staff depend on.",
    highlights: [
      "Deploy, image, configure, and maintain computers and mobile devices in accordance with organizational standards.",
      "Troubleshoot Single Sign-On (SSO) devices and other hardware and software issues.",
      "Maintain documentation for device deployments, inventory, troubleshooting, and technical procedures.",
      "Collaborate with team members to resolve technical issues and support clinical and administrative staff.",
    ],
    technologies: [
      "Windows",
      "Hardware Support",
      "Device Deployment",
      "Troubleshooting",
      "Technical Documentation",
    ],
  },
  {
    role: "Founder / Full-Stack Web Developer",
    company: "Western Web Company",
    location: "Corner Brook, NL",
    period: "Nov 2026 – Present",
    type: "WEB DEVELOPMENT",
    description:
      "Co-founded a web development business focused on creating modern websites and digital experiences for small businesses.",
    highlights: [
      "Work directly with clients to understand requirements and plan website functionality.",
      "Design and develop responsive websites using React and Next.js.",
      "Deploy and maintain websites using modern hosting and development workflows.",
      "Manage projects from initial discussions through implementation, feedback, and revisions.",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Web Development",
      "Vercel",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Nexus",
    location: "Remote",
    period: "Apr 2025 – Mar 2026",
    type: "SOFTWARE DEVELOPMENT",
    description:
      "Worked on a smart hotel MVP and internal administrative tools, contributing to frontend features and database-backed functionality.",
    highlights: [
      "Developed and maintained core frontend features for a smart hotel application.",
      "Implemented authentication, dashboard views, device management, and profile functionality.",
      "Built internal administration tools using Microsoft Blazor and SQL-backed components for analytics and reporting.",
      "Helped troubleshoot technical issues affecting internal users and team members.",
    ],
    technologies: ["React", "Node.js", "Blazor", "SQL"],
  },
  {
    role: "Full-Stack Developer / Lead Developer",
    company: "Steady Innovation Corporation",
    location: "Corner Brook, NL",
    period: "Apr 2024 – Mar 2025",
    type: "SOFTWARE DEVELOPMENT",
    description:
      "Led development of Sidekick, an AI-powered assistant, working across its mobile application, backend services, integrations, and deployment.",
    highlights: [
      "Built and delivered application functionality using React Native, Node.js, and MySQL.",
      "Integrated OpenAI API functionality, AWS services, and RevenueCat subscription features.",
      "Worked across frontend and backend systems to bring the application from development through deployment.",
      "Mentored a student and helped guide their work on development projects.",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "MySQL",
      "AWS",
      "OpenAI API",
      "RevenueCat",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent Project",
    location: "Remote",
    period: "Dec 2023 – Apr 2024",
    type: "FREELANCE DEVELOPMENT",
    description:
      "Built and delivered an MVP for Sidekick, a mobile AI assistant, for a paying client.",
    highlights: [
      "Developed mobile application features using React Native.",
      "Built backend functionality with Node.js and MySQL and integrated the OpenAI API.",
      "Delivered a functional MVP for a client, earning $1,250.",
    ],
    technologies: ["React Native", "Node.js", "MySQL", "OpenAI API"],
  },
  {
    role: "Full-Stack Developer Intern (Co-op)",
    company: "Steady Innovation Corporation",
    location: "Corner Brook, NL",
    period: "Oct 2023 – Dec 2023",
    type: "CO-OP",
    description:
      "Contributed to the development of FixDen, a marketplace connecting contractors and homeowners.",
    highlights: [
      "Developed frontend and backend features using React, Node.js, and MySQL.",
      "Worked with DynamoDB and AWS services as part of the application stack.",
      "Collaborated with the development team to implement features and improve system design.",
    ],
    technologies: ["React", "Node.js", "MySQL", "DynamoDB", "AWS"],
  },
  {
    role: "Junior Full-Stack Developer (Co-op)",
    company: "Steady Innovation Corporation",
    location: "Corner Brook, NL",
    period: "Jan 2023 – Apr 2023",
    type: "CO-OP",
    description:
      "Joined the development team working on FixDen and built practical experience with full-stack web development.",
    highlights: [
      "Contributed to building marketplace features using React and Node.js.",
      "Worked with MySQL, DynamoDB, and AWS while learning and applying JavaScript.",
      "Collaborated with teammates on implementation and application improvements.",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MySQL", "AWS"],
  },
  {
    role: "Tech Teams Lead (Co-op)",
    company: "Office of Applied Research and Innovation",
    location: "Corner Brook / St. John's, NL",
    period: "May 2022 – Aug 2022",
    type: "TECHNICAL LEADERSHIP",
    description:
      "Supported web development work while helping high school students learn coding and build a functional website.",
    highlights: [
      "Resolved technical issues involving JavaScript, HTML, and CSS.",
      "Led two student cohorts and helped them develop practical coding skills.",
      "Guided students through building a functional website for Pasadena.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Mentoring"],
  },
];

const skills = [
  {
    title: "Development",
    items: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Databases & Cloud",
    items: ["SQL", "MySQL", "AWS", "Supabase", "DynamoDB"],
  },
  {
    title: "IT & Systems",
    items: [
      "Windows 10/11",
      "PowerShell",
      "Microsoft 365",
      "Active Directory",
      "Device Imaging",
      "Technical Troubleshooting",
    ],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git",
      "GitHub",
      "Technical Documentation",
      "Deployment",
      "Hardware & Software Support",
    ],
  },
];

const certifications = [
  {
    name: "The Full Stack",
    issuer: "Meta",
    date: "Feb 2025",
  },
  {
    name: "Version Control",
    issuer: "Meta",
    date: "Feb 2025",
  },
  {
    name: "Diversity, Inclusion, and Belonging for All",
    issuer: "LinkedIn",
    date: "May 2022",
  },
];

export const metadata = {
  title: "Experience",
  description:
    "Explore Brayden Burden's software development, full-stack engineering, web development, and healthcare IT experience.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      {/* Page introduction */}
      <section className="section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="bg-glow absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 opacity-30" />
          <div className="bg-grid absolute inset-0 opacity-20" />
        </div>

        <div className="container relative">
          {/* Page heading */}
          <header className="mx-auto max-w-5xl text-center">
            <span className="eyebrow">
              <BriefcaseBusiness size={14} />
              Experience & background
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              My experience.{" "}
              <span className="text-gradient">What I've built.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-foreground-secondary sm:text-lg">
              My background spans full-stack software development, building
              applications, working with clients, and supporting technology in
              healthcare. Here's a closer look at the work I've done and the
              skills I've developed along the way.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/resume.pdf"
                download="Brayden-Burden-Resume.pdf"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <ArrowDownToLine size={17} />
                Download Resume
              </a>

              <Link href="/#contact" className="btn btn-secondary">
                Get in touch
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <p className="mt-4 text-xs text-muted">
              Software development · IT support · Newfoundland, Canada
            </p>
          </header>

          {/* Professional summary */}
          <div className="surface mt-14 rounded-2xl p-6 sm:mt-16 sm:p-9 lg:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-primary/5 text-primary">
                <Code2 size={20} />
              </div>

              <h2 className="text-xl font-semibold text-foreground">
                Professional summary
              </h2>
            </div>

            <p className="mt-5 max-w-5xl leading-8 text-foreground-secondary">
              I'm an IT professional and software developer with experience
              across full-stack development, application support, and healthcare
              IT. I've worked on mobile applications, web platforms, backend
              services, databases, cloud integrations, and technical support. I
              enjoy solving problems, learning new technologies, and working
              with people to deliver reliable, useful solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Work experience */}
      <section className="section border-t border-border">
        <div className="container">
          <div className="section-header mb-14 max-w-2xl">
            <p className="eyebrow">Career journey</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Work <span className="text-gradient">experience.</span>
            </h2>

            <p className="mt-4 leading-7 text-foreground-secondary">
              Roles and projects that have shaped my development skills and
              technical experience.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <article
                key={`${job.company}-${job.period}`}
                className="card relative overflow-hidden p-6 sm:p-8"
              >
                <div className="absolute bottom-0 left-0 top-0 w-1 bg-primary/50 transition-colors group-hover:bg-primary" />

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="badge">{job.type}</span>

                      <span className="font-mono text-xs text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                      {job.role}
                    </h3>

                    <p className="mt-2 text-base font-medium text-primary">
                      {job.company}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {job.period}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-6 max-w-4xl leading-7 text-foreground-secondary">
                  {job.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-7 text-foreground-secondary"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                  {job.technologies.map((technology) => (
                    <span key={technology} className="badge">
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section border-t border-border">
        <div className="container">
          <div className="section-header mb-10 max-w-2xl">
            <p className="eyebrow">Education</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Building a <span className="text-gradient">foundation.</span>
            </h2>
          </div>

          <article className="card flex flex-col gap-5 p-6 sm:flex-row sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-primary/5 text-primary">
              <GraduationCap size={24} />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground">
                Diploma in Software Development
              </h3>

              <p className="mt-2 font-medium text-primary">
                The College of the North Atlantic
              </p>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  Sept 2021 – Apr 2024
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} />
                  Corner Brook, NL
                </span>
              </div>

              <p className="mt-5 max-w-3xl leading-7 text-foreground-secondary">
                Developed a foundation in programming, object-oriented
                development, SQL databases, Windows environments, scripting,
                software testing, troubleshooting, and collaborative development
                practices.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Skills */}
      <SkillsSection />

      {/* Certifications */}
      <section className="section border-t border-border">
        <div className="container">
          <div className="section-header mb-10 max-w-2xl">
            <p className="eyebrow">Continued learning</p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Certifications & <span className="text-gradient">courses.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {certifications.map((certification) => (
              <article
                key={certification.name}
                className="card flex gap-4 p-5 sm:p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-primary/5 text-primary">
                  <Award size={20} />
                </div>

                <div>
                  <h3 className="font-semibold leading-6 text-foreground">
                    {certification.name}
                  </h3>

                  <p className="mt-2 text-sm text-primary">
                    {certification.issuer}
                  </p>

                  <p className="mt-1 text-xs text-muted">
                    {certification.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section border-t border-border">
        <div className="container">
          <div className="surface flex flex-col items-start justify-between gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="eyebrow mb-3">Let's connect</p>

              <h2 className="text-2xl font-semibold text-foreground">
                Have an opportunity in mind?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-foreground-secondary">
                I'm open to opportunities where I can contribute my technical
                experience, continue learning, and help build useful software.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Contact me
                <ArrowUpRight size={16} />
              </Link>

              <a
                href="/resume.pdf"
                download="Brayden-Burden-Resume.pdf"
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                <ArrowDownToLine size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
