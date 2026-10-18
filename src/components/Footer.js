import Link from "next/link";
import { Mail, ArrowUpRight, ArrowUp } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#081310]">
      <div className="container py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-10">
          {/* About */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              About me
            </h2>

            <Link
              href="/"
              className="mt-5 inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-sm font-bold text-emerald-400">
                BB
              </span>
              <span>Brayden Burden</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#82988c]">
              Full-stack developer based in Newfoundland, Canada. Building
              useful software and thoughtful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-[#82988c] transition-colors hover:text-emerald-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h2 className="whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-white">
              Let's connect
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#82988c]">
              Have an opportunity or a project in mind? I'd love to hear from
              you.
            </p>

            <a
              href="mailto:brayden.burden00@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
            >
              <Mail size={16} />
              Get in touch
              <ArrowUpRight size={15} />
            </a>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/BraydenBurden"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-[#b7cbc0] transition-all hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/brayden-burden-ab2778223/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-[#b7cbc0] transition-all hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-400"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#82988c]">
            © 2026 Brayden Burden. All rights reserved.
          </p>

          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 text-xs text-[#82988c] transition-colors hover:text-emerald-400"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
