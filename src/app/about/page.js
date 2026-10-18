import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Laptop,
  MapPin,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "About Me",
  description:
    "Learn more about Brayden Burden, a full-stack developer from Newfoundland, Canada, with a background in software development and technical support.",
};

const highlights = [
  {
    icon: GraduationCap,
    title: "Software Development",
    description:
      "A graduate of College of the North Atlantic's Software Development program.",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Experience building user interfaces, backend services, APIs, and database-driven applications.",
  },
  {
    icon: Laptop,
    title: "Technical Support",
    description:
      "Hands-on experience troubleshooting hardware, software, and technical issues with NL Health Services.",
  },
  {
    icon: Wrench,
    title: "Building Real Products",
    description:
      "Working on personal projects and Western Web Co. to turn ideas into practical digital experiences.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Introduction */}
      <section className="section relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div className="container relative">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground-secondary transition-colors hover:text-primary"
          >
            <ArrowDownRight size={16} className="rotate-45" />
            Back to home
          </Link>

          <div className="mt-16 max-w-4xl">
            <p className="eyebrow">A little about me</p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              I enjoy solving problems and{" "}
              <span className="text-gradient">building things that work.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground-secondary">
              I'm Brayden, a full-stack developer from Newfoundland, Canada. I
              enjoy working across the stack, learning new technologies, and
              turning ideas into useful applications.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-foreground-secondary">
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2">
                <MapPin size={15} className="text-primary" />
                Newfoundland, Canada
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2">
                <Code2 size={15} className="text-primary" />
                Full-stack development
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">My background</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Different experiences. One technical mindset.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-foreground-secondary">
              <p>
                I graduated from the Software Development program at College of
                the North Atlantic, where I developed a foundation in
                programming, databases, and application development.
              </p>

              <p>
                Since then, I've worked on software projects involving frontend
                development, backend services, APIs, databases, and cloud tools.
                I enjoy understanding how the pieces of an application fit
                together, not just making the interface look good.
              </p>

              <p>
                I also work as a Computer Support Specialist with NL Health
                Services. That experience gives me another perspective on
                technology: diagnosing problems, supporting people, and
                understanding the systems and hardware that need to work
                reliably every day.
              </p>

              <p>
                Outside of that role, I co-founded Western Web Co., where I work
                on websites and digital experiences for businesses. It gives me
                an opportunity to apply my development skills to practical needs
                and real projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section border-t border-border">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">What I bring</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              More than just code.
            </h2>
            <p className="mt-4 max-w-2xl text-foreground-secondary">
              My experience combines software development, practical
              troubleshooting, and working on products with real-world goals.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="card rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-foreground-secondary">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section border-t border-border">
        <div className="container">
          <div className="surface rounded-3xl p-7 sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div className="max-w-3xl">
                <p className="eyebrow">My approach</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Learn by building. Improve through iteration.
                </h2>

                <p className="mt-6 text-base leading-8 text-foreground-secondary">
                  I like breaking down complicated problems into manageable
                  pieces, understanding why something works, and improving it as
                  I go. I'm comfortable learning unfamiliar tools when a project
                  calls for them, and I value code that's practical,
                  maintainable, and easy for other developers to understand.
                </p>

                <p className="mt-4 text-base leading-8 text-foreground-secondary">
                  I'm looking to keep growing as a developer, contribute to a
                  team, and work on software that solves meaningful problems for
                  the people using it.
                </p>
              </div>

              <div className="hidden h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary lg:flex">
                <BriefcaseBusiness size={30} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="section border-t border-border">
        <div className="container">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">What's next?</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Let's build something useful.
              </h2>
              <p className="mt-4 leading-7 text-foreground-secondary">
                Have an opportunity, a project idea, or just want to connect?
                I'd be happy to hear from you.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="btn btn-secondary inline-flex items-center gap-2"
              >
                View projects
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/#contact"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Get in touch
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
