import { ArrowUpRight, Code2 } from "lucide-react";
import ProjectImageCarousel from "@/components/ProjectImageCarousel";

export default function ProjectCard({
  number,
  title,
  category,
  description,
  technologies = [],
  image,
  gallery = [],
  href,
  github,
}) {
  return (
    <article className="group card flex h-full flex-col overflow-hidden">
      <ProjectImageCarousel
        title={title}
        image={image}
        gallery={gallery}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-sm text-primary">{number}</span>

          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-primary/5 text-primary transition-colors group-hover:border-border-hover group-hover:bg-primary/10">
            <Code2 size={21} />
          </span>
        </div>

        <p className="eyebrow !text-xs">{category}</p>

        <h3 className="mt-3">{title}</h3>

        <p className="mt-4 flex-1 leading-7">{description}</p>

        {technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span key={technology} className="badge">
                {technology}
              </span>
            ))}
          </div>
        )}

        <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-border pt-5">
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
            >
              View project <ArrowUpRight size={16} />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-secondary transition-colors hover:text-primary"
            >
              Source code <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
