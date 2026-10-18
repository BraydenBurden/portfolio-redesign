"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone, Send } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";

const EMAIL = "brayden.burden00@gmail.com";
const PHONE = "7094545027";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your message.");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section border-t border-border">
      <div className="container">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">Get in touch</p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Have an idea? Let's talk.
          </h2>

          <p className="mt-5 text-base leading-8 text-foreground-secondary">
            Whether you're hiring a developer, have a project in mind, or just
            want to connect, I'd be happy to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div className="surface rounded-2xl p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <Mail size={22} />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-foreground">
              Other ways to connect
            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground-secondary">
              Choose whichever way works best for you.
            </p>

            <div className="mt-7 space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mt-1 block break-all text-sm text-foreground-secondary transition-colors hover:text-primary"
                  >
                    {EMAIL}
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-xs font-medium text-primary cursor-pointer transition-all duration-200 hover:border-primary/20 hover:bg-primary/10 hover:text-primary-hover active:scale-95"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied!" : "Copy email"}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <a
                    href={`tel:+1${PHONE}`}
                    className="mt-1 block text-sm text-foreground-secondary transition-colors hover:text-primary"
                  >
                    +1 (709) 454-5027
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <p className="mb-4 text-sm font-medium text-foreground">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/BraydenBurden"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-secondary transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Github size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/brayden-burden-ab2778223/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground-secondary transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Linkedin size={19} />
                </a>
              </div>
            </div>
          </div>

          <div className="surface rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-foreground">
              Send me a message
            </h3>

            <p className="mt-2 text-sm leading-6 text-foreground-secondary">
              Fill out the form and I'll get back to you as soon as I can.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="field w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="field w-full"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={150}
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className="field w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  maxLength={5000}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about what you have in mind..."
                  className="field w-full resize-y"
                />
              </div>

              {status === "success" && (
                <p role="status" className="text-sm text-primary">
                  Your message was sent successfully. Thanks for reaching out!
                </p>
              )}

              {status === "error" && (
                <p role="alert" className="mt-4 text-sm text-red-400">
                  Your message couldn't be sent. Please try again or email{" "}
                  <a
                    href="mailto:brayden.burden00@gmail.com"
                    className="underline underline-offset-4 hover:text-red-300"
                  >
                    me directly
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send message"}
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
