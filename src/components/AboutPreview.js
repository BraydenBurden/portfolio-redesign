import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Laptop,
  Users,
} from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: GraduationCap,
    title: "Software Development",
    description: "College of the North Atlantic graduate",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building applications from frontend to backend",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working with people to solve technical problems",
  },
  {
    icon: Laptop,
    title: "IT & Hardware",
    description: "Hands-on technical support and troubleshooting",
  },
];

export default function AboutPreview() {
  return (
    <section id="about" className="section border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">A little about me</p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              More than just writing code.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-foreground-secondary">
              <p>
                I'm a full-stack developer from Newfoundland, Canada, and a
                graduate of the Software Development program at College of the
                North Atlantic. I enjoy turning ideas into practical
                applications and working across the different parts of a
                product, from the user interface to the backend.
              </p>

              <p>
                Alongside my development work, I work as a Computer Support
                Specialist with NL Health Services. That role has strengthened
                my ability to troubleshoot technical issues, collaborate with a
                team, and understand the hardware and systems people rely on
                every day.
              </p>

              <p>
                I also co-founded Western Web Co., where I work on building
                websites and digital experiences for businesses. Across these
                experiences, I enjoy learning new technologies and finding
                practical ways to solve problems.
              </p>
            </div>

            <Link
              href="/about"
              className="btn btn-secondary mt-8 inline-flex items-center gap-2"
            >
              More about me
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />

            <div className="surface relative overflow-hidden rounded-2xl">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div className="flex items-center gap-2">
                  <Code2 size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    developer-profile.js
                  </span>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
              </div>

              <div className="space-y-5 p-5 sm:p-7">
                <div className="font-mono text-sm leading-7">
                  <p className="text-muted">
                    <span className="text-primary">const</span> developer ={" "}
                    {"{"}
                  </p>
                  <p className="pl-5 text-foreground-secondary">
                    location:{" "}
                    <span className="text-primary">"Newfoundland, Canada"</span>
                    ,
                  </p>
                  <p className="pl-5 text-foreground-secondary">
                    focus:{" "}
                    <span className="text-primary">
                      "Full-stack development"
                    </span>
                    ,
                  </p>
                  <p className="pl-5 text-foreground-secondary">
                    mindset:{" "}
                    <span className="text-primary">
                      "Build, learn, improve"
                    </span>
                  </p>
                  <p className="text-muted">{"};"}</p>
                </div>

                <div className="border-t border-border pt-5">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
                    What I bring
                  </p>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {highlights.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="flex gap-3 rounded-xl border border-border bg-background/40 p-3"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Icon size={18} />
                          </div>

                          <div>
                            <h3 className="text-sm font-medium text-foreground">
                              {item.title}
                            </h3>
                            <p className="mt-1 text-xs leading-5 text-foreground-secondary">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-primary/70 via-teal-400/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
