import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2 } from "lucide-react";

const featuredProjects = [
  {
    slug: "western-web",
    number: "01",
    title: "Western Web Co.",
    category: "WEB DEVELOPMENT",
    description:
      "A web development business focused on building modern, responsive websites and digital experiences for businesses. From design through development, the goal is to turn ideas into polished products.",
    technologies: ["Next.js", "JavaScript", "Web Development"],
    image: "/images/projects/western-web/WesternWebHero.png",
    imageAlt: "Western Web Co. website preview",
    liveUrl: "https://www.westernweb.ca",
    status: "Business & client work",
  },
  {
    slug: "budgeting-app",
    number: "02",
    title: "Personal Budgeting App",
    category: "FULL-STACK APPLICATION",
    description:
      "A personal finance application in development, built to make budgeting and tracking spending more manageable. This project explores full-stack application development, authentication, and working with persistent user data.",
    technologies: ["Next.js", "Supabase", "JavaScript"],
    image: "/images/projects/budgetting-app/budgetingAppDashboard.png",
    imageAlt: "Personal budgeting application preview",
    liveUrl: null,
    status: "In development",
  },
  {
    slug: "sidekick-ai",
    number: "03",
    title: "Sidekick AI",
    category: "AI-POWERED APPLICATION",
    description:
      "A personal assistant application combining conversational AI, file handling, personalization, and subscription functionality. The project involved connecting frontend experiences with backend services and external APIs.",
    technologies: ["React Native", "Node.js", "MySQL", "OpenAI", "AWS"],
    image: "/images/projects/sidekick-ai/sidekickOrganization.jpg",
    imageAlt: "Sidekick AI application preview",
    liveUrl: null,
    status: "Previous project",
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
      {/* Project screenshot */}
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View ${project.title} project details`}
        className="relative block"
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-primary/5">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            unoptimized
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/25 via-transparent to-transparent" />

          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-background/80 text-foreground backdrop-blur-md transition-all duration-300 group-hover:border-primary/50 group-hover:text-primary">
            <ArrowUpRight size={19} />
          </div>
        </div>
      </Link>

      {/* Project information */}
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

        <h3 className="text-3xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:text-4xl">
          {project.title}
        </h3>

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
          {/* <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            View project details
            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link> */}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-primary"
            >
              Visit site
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <p className="mt-5 text-xs text-muted">{project.status}</p>
      </div>
    </article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section border-t border-border">
      <div className="container">
        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-5 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Selected work</p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Ideas made <span className="text-gradient">real.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-foreground-secondary">
              A selection of projects that reflect how I approach software
              development: solving problems, connecting systems, and building
              useful experiences.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Explore all projects
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Alternating project showcases */}
        <div className="space-y-16 sm:space-y-24 lg:space-y-28">
          {featuredProjects.map((project, index) => (
            <ProjectShowcase
              key={project.slug}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-16 border-t border-border pt-8 text-center sm:mt-24">
          <Link href="/projects" className="btn btn-secondary">
            <Code2 size={17} />
            View the full portfolio
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
