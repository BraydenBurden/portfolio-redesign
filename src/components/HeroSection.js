import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Terminal,
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:min-h-[calc(100svh-4rem)] lg:pt-44">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="bg-glow absolute -top-40 right-[-10%] h-[500px] w-[500px] opacity-40" />
        <div className="absolute bottom-0 left-[-10%] h-80 w-80 rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Introduction */}
          <div className="relative z-10 max-w-2xl">
            <div className="eyebrow mb-7 inline-flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              Full-stack developer · Newfoundland, Canada
            </div>

            <p className="mb-4 font-mono text-sm tracking-wide text-primary">
              Hey, I'm Brayden.
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
              I turn ideas into{" "}
              <span className="text-gradient">working products.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-foreground-secondary sm:text-lg">
              I'm a full-stack developer who enjoys building useful
              applications, solving technical problems, and taking ideas from
              the first line of code to a working product.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="/projects" className="btn btn-primary group">
                Explore my work
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a href="/#contact" className="btn btn-secondary">
                Get in touch
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-5">
              <a
                href="https://github.com/BraydenBurden"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-muted transition-colors duration-200 hover:text-primary"
              >
                <Github size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/brayden-burden-ab2778223/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted transition-colors duration-200 hover:text-primary"
              >
                <Linkedin size={21} />
              </a>

              <span className="h-5 w-px bg-border" />

              <span className="text-sm text-muted">
                Frontend · Backend · APIs
              </span>
            </div>
          </div>

          {/* Developer workspace visual */}
          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            <div className="pointer-events-none absolute inset-10 rounded-full bg-primary/10 blur-[90px]" />

            {/* Floating application panel */}
            <div className="absolute -right-2 top-[-2.25rem] z-20 hidden w-48 rounded-xl border border-border bg-surface/95 p-3 shadow-2xl backdrop-blur-xl sm:block lg:-right-8">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Code2 size={15} />
                </span>
                <div>
                  <p className="text-xs font-medium text-foreground">
                    Application
                  </p>
                  <p className="text-[10px] text-muted">Preview window</p>
                </div>
                <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
              </div>

              <div className="space-y-2 rounded-lg border border-border bg-background/80 p-3">
                <div className="h-2 w-2/3 rounded bg-foreground/15" />
                <div className="h-2 w-full rounded bg-foreground/10" />
                <div className="h-2 w-4/5 rounded bg-foreground/10" />
                <div className="mt-3 flex gap-2">
                  <div className="h-7 flex-1 rounded-md bg-primary/20" />
                  <div className="h-7 w-12 rounded-md bg-surface-elevated" />
                </div>
              </div>
            </div>

            {/* Main code editor */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[#09140f] shadow-2xl shadow-black/30 transition-transform duration-500 hover:-translate-y-1">
              <div className="flex h-12 items-center gap-2 border-b border-white/[0.07] bg-white/[0.025] px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />

                <div className="ml-3 flex items-center gap-2 text-xs text-[#a0b8aa]">
                  <Terminal size={14} />
                  developer.js
                </div>

                <span className="ml-auto font-mono text-[10px] text-[#5c7868]">
                  JS
                </span>
              </div>

              <div className="flex min-h-[315px] px-4 py-6 sm:px-6 sm:py-7">
                <div className="mr-5 select-none text-right font-mono text-xs leading-8 text-[#42604f]">
                  {Array.from({ length: 9 }, (_, index) => (
                    <div key={index}>{index + 1}</div>
                  ))}
                </div>

                <div className="min-w-0 overflow-hidden font-mono text-xs leading-8 sm:text-sm">
                  <p>
                    <span className="text-[#c792ea]">const</span>{" "}
                    <span className="text-[#82aaff]">developer</span>{" "}
                    <span className="text-[#89ddff]">=</span>{" "}
                    <span className="text-[#c3e88d]">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#f78c6c]">focus</span>
                    <span className="text-[#89ddff]">:</span>{" "}
                    <span className="text-[#c3e88d]">
                      "Full-stack development"
                    </span>
                    <span className="text-[#c3e88d]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#f78c6c]">approach</span>
                    <span className="text-[#89ddff]">:</span>{" "}
                    <span className="text-[#c3e88d]">
                      "Build useful things"
                    </span>
                    <span className="text-[#c3e88d]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#f78c6c]">frontend</span>
                    <span className="text-[#89ddff]">:</span>{" "}
                    <span className="text-[#c3e88d]">true</span>
                    <span className="text-[#c3e88d]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#f78c6c]">backend</span>
                    <span className="text-[#89ddff]">:</span>{" "}
                    <span className="text-[#c3e88d]">true</span>
                    <span className="text-[#c3e88d]">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-[#f78c6c]">alwaysLearning</span>
                    <span className="text-[#89ddff]">:</span>{" "}
                    <span className="text-[#c3e88d]">true</span>
                  </p>
                  <p>
                    <span className="text-[#c3e88d]">{"}"}</span>
                    <span className="text-[#89ddff]">;</span>
                  </p>
                  <p className="pt-2 text-[#5c7868]">
                    {"// Turning ideas into reality"}
                  </p>
                  <p className="text-primary">
                    <span className="animate-pulse">▍</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-3 text-[10px] text-[#759080] sm:px-6">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Ready to build
                </span>
                <span>UTF-8 · JavaScript</span>
              </div>
            </div>

            {/* Floating technology card */}
            <div className="absolute -bottom-7 -left-3 z-20 max-w-[230px] rounded-xl border border-border bg-surface/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-7">
              <p className="mb-3 text-xs text-muted">Tools I work with</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Node.js", "SQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-background px-2 py-1 text-[10px] text-foreground-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-14 flex items-center justify-center gap-2 text-xs text-muted lg:mt-16">
              <ArrowDown size={14} className="text-primary" />
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
