"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
  { label: "Experience", href: "/experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <nav
        className="container flex h-[var(--navbar-height)] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="Brayden Burden home"
          className="group flex items-center gap-3"
        >
          {/* Keep your existing BB logo and name markup here */}
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 font-mono text-sm font-bold text-primary transition-colors group-hover:bg-primary/20">
            BB
          </span>

          <span className="font-semibold tracking-tight text-foreground">
            Brayden Burden
            <span className="ml-2 hidden text-xs font-normal text-muted sm:inline">
              Software Developer
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-foreground-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://github.com/BraydenBurden"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-primary"
          >
            <Github size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/brayden-burden-ab2778223/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-primary"
          >
            <Linkedin size={19} />
          </a>

          <a
            href="/#contact"
            className="btn btn-primary min-h-10 px-4 py-2 text-sm"
          >
            Let's talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:border-border-hover hover:text-primary md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background/95 px-6 py-5 backdrop-blur-xl md:hidden"
        >
          <div className="container flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-foreground-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-6 border-t border-border pt-5">
              <a
                href="https://github.com/BraydenBurden"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-muted hover:text-primary"
              >
                <Github size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/brayden-burden-ab2778223/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted hover:text-primary"
              >
                <Linkedin size={21} />
              </a>
            </div>

            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary w-full"
            >
              Let's talk
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
