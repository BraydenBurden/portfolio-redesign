import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";
import { FaGithub as Github } from "react-icons/fa";

const projects = [
  {
    slug: "western-web",
    number: "01",
    title: "Western Web Co.",
    category: "WEB DEVELOPMENT",
    description:
      "A web development business focused on building modern, responsive websites and digital experiences for businesses. From design through development, the goal is to turn ideas into polished products.",
    technologies: ["Next.js", "JavaScript", "Web Development"],
    image: "/images/projects/western-web/WesternWebHero.png",
    gallery: [
      "/images/projects/western-web/WesternWebProjects.png",
      "/images/projects/western-web/WesterWebAbout.png",
      "/images/projects/western-web/WesterWebServices.png",
      "/images/projects/western-web/WesterWebContact.png",
    ],
    liveUrl: "https://www.westernweb.ca",
    githubUrl: null,
    status: "Business & client work",
  },
  {
    slug: "sidekick-ai",
    number: "02",
    title: "Sidekick AI",
    category: "AI-POWERED APPLICATION",
    description:
      "A personal assistant application combining conversational AI, file handling, personalization, and subscription functionality. The project involved connecting frontend experiences with backend services and external APIs.",
    technologies: ["React Native", "Node.js", "MySQL", "OpenAI", "AWS"],
    image: "/images/projects/sidekick-ai/sidekickOrganization.jpg",
    gallery: [
      "/images/projects/sidekick-ai/sidekickFileRetreival.jpg",
      "/images/projects/sidekick-ai/sidekickFileUpload.jpg",
      "/images/projects/sidekick-ai/sidekickImageExplaining.jpg",
      "/images/projects/sidekick-ai/sidekickPersonalization.jpg",
    ],
    liveUrl: null,
    githubUrl: null,
    status: "Previous project",
  },
  {
    slug: "codesprint",
    number: "03",
    title: "CodeSprint",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A developer-client marketplace project featuring project creation, bidding, developer profiles, scheduling, and messaging. It gave me experience connecting frontend interfaces with backend functionality and database-driven features.",
    technologies: ["React", "Material UI", "Node.js", "Express", "MySQL"],
    image: "/images/projects/codesprint/codeSprintDashboard.png",
    gallery: [
      "/images/projects/codesprint/codeSprintLanding.png",
      "/images/projects/codesprint/codeSprintBidding.png",
      "/images/projects/codesprint/codeSprintCalendar.png",
      "/images/projects/codesprint/codeSprintMessaging.png",
      "/images/projects/codesprint/codeSprintProfile.png",
      "/images/projects/codesprint/codeSprintProjectCreation.png",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/BraydenBurden/CodeSprint-development",
    status: "Completed project",
  },
  {
    slug: "taskify",
    number: "04",
    title: "Taskify",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A task management application designed to help users organize their work. The project includes task creation and management, detailed task views, profile features, and a light-mode interface.",
    technologies: ["React", "Python", "Flask", "SQLite"],
    image: "/images/projects/taskify/taskifyDashboard.png",
    gallery: [
      "/images/projects/taskify/taskifyLanding.png",
      "/images/projects/taskify/taskifyCreateTask.png",
      "/images/projects/taskify/taskifyDetailedTaskView.png",
      "/images/projects/taskify/taskifyProfile.png",
      "/images/projects/taskify/taskifyLightMode.png",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/BraydenBurden/Taskify/",
    status: "Completed project",
  },
  {
    slug: "budgeting-app",
    number: "05",
    title: "Personal Budgeting App",
    category: "FULL-STACK APPLICATION",
    description:
      "A personal finance application in development, built to make budgeting and tracking spending more manageable. This project explores full-stack development, authentication, and working with persistent user data.",
    technologies: ["Next.js", "Supabase", "JavaScript"],
    image: "/images/projects/budgetting-app/budgetingAppDashboard.png",
    gallery: [
      "/images/projects/budgetting-app/budgetingAppAccounts.png",
      "/images/projects/budgetting-app/budgetingAppTransactions.png",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/BraydenBurden/budgeting-app",
    status: "In development",
  },
];

function ProjectShowcase({ project, reverse = false }) {
  return (
    <article
      id={project.slug}
      className={`group grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Project screenshots */}
      <div className="relative">
        <ProjectImageCarousel
          title={project.title}
          image={project.image}
          gallery={project.gallery}
          sizes="(max-width: 1024px) 100vw, 50vw"
          rounded="rounded-2xl border border-border shadow-xl shadow-black/10"
        />
      </div>

      {/* Project details */}
      <div className="flex flex-col items-start py-2 lg:py-6">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-sm text-primary">
            {project.number}
          </span>

          <span className="h-px w-8 bg-border" />

          <span className="text-xs font-semibold tracking-[0.16em] text-muted">
            {project.category}
          </span>
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:text-4xl">
          {project.title}
        </h2>

        <p className="mt-5 max-w-xl text-base leading-8 text-foreground-secondary">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="badge">
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              Visit site
              <ArrowUpRight size={16} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              <Github size={16} />
              View source code
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <p className="mt-5 text-xs text-muted">{project.status}</p>
      </div>
    </article>
  );
}

export const metadata = {
  title: "Projects",
  description:
    "Explore software development projects by Brayden Burden, including web applications, mobile development, AI integrations, and full-stack projects.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <section className="section relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="bg-glow absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 opacity-30" />
          <div className="bg-grid absolute inset-0 opacity-20" />
        </div>

        <div className="container relative">
          {/* Page introduction */}
          <header className="section-header mx-auto max-w-3xl text-center">
            <span className="eyebrow">
              <Code2 size={14} />
              My work
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Projects I've <span className="text-gradient">worked on.</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-foreground-secondary sm:text-lg">
              From full-stack applications and mobile development to AI
              integrations and business websites, these projects reflect what
              I've built, the technologies I've worked with, and what I've
              learned along the way.
            </p>
          </header>

          {/* All projects */}
          <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-24 lg:mt-24 lg:space-y-28">
            {projects.map((project, index) => (
              <div key={project.slug}>
                {index > 0 && (
                  <div className="mb-16 border-t border-border sm:mb-24 lg:mb-28" />
                )}

                <ProjectShowcase project={project} reverse={index % 2 === 1} />
              </div>
            ))}
          </div>

          {/* Contact call to action */}
          <div className="mt-20 border-t border-border pt-12 sm:mt-28 sm:pt-16">
            <div className="surface flex flex-col items-start justify-between gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <p className="eyebrow mb-3">Have a project in mind?</p>

                <h2 className="text-2xl font-semibold text-foreground">
                  Let's build something useful.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-7 text-foreground-secondary">
                  I'm interested in software development opportunities and
                  projects where I can solve problems, learn, and contribute.
                </p>
              </div>

              <Link
                href="/#contact"
                className="btn btn-primary inline-flex shrink-0 items-center gap-2"
              >
                Get in touch
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
