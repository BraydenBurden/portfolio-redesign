import {
  Code2 as CodeIcon,
  PanelsTopLeft as FrontendIcon,
  Server as BackendIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Plug as IntegrationIcon,
  Gamepad2 as GamepadIcon,
} from "lucide-react";

import {
  FaReact as ReactIcon,
  FaNodeJs as NodeIcon,
  FaPython as PythonIcon,
  FaAws as AwsIcon,
  FaGitAlt as GitAltIcon,
  FaHtml5 as HtmlIcon,
  FaCss3Alt as CssIcon,
  FaJava as JavaIcon,
} from "react-icons/fa";

import {
  SiJavascript as JavascriptIcon,
  SiTypescript as TypescriptIcon,
  SiNextdotjs as NextIcon,
  SiExpress as ExpressIcon,
  SiMongodb as MongoIcon,
  SiMysql as MysqlIcon,
  SiPostgresql as PostgresIcon,
  SiSupabase as SupabaseIcon,
  SiTailwindcss as TailwindIcon,
  SiMui as MuiIcon,
  SiSocketdotio as SocketIcon,
  SiFirebase as FirebaseIcon,
  SiVercel as VercelIcon,
  SiDocker as DockerIcon,
} from "react-icons/si";
import { PiOpenAiLogoLight as OpenAiIcon } from "react-icons/pi";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building responsive user interfaces and web experiences.",
    icon: FrontendIcon,
    skills: [
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextIcon },
      { name: "HTML5", icon: HtmlIcon },
      { name: "CSS3", icon: CssIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "Material UI", icon: MuiIcon },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing server-side applications and APIs.",
    icon: BackendIcon,
    skills: [
      { name: "Node.js", icon: NodeIcon },
      { name: "Express.js", icon: ExpressIcon },
      { name: "REST APIs", icon: CodeIcon },
      { name: "API Integration", icon: CodeIcon },
      { name: "Socket.IO", icon: SocketIcon },
      { name: "Python", icon: PythonIcon },
      { name: "Java", icon: JavaIcon },
    ],
  },
  {
    title: "Databases",
    description: "Working with relational and cloud-backed data.",
    icon: DatabaseIcon,
    skills: [
      { name: "SQL", icon: DatabaseIcon },
      { name: "MySQL", icon: MysqlIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "MongoDB", icon: MongoIcon },
      { name: "Supabase", icon: SupabaseIcon },
      { name: "Firebase", icon: FirebaseIcon },
    ],
  },
  {
    title: "Tools & Cloud",
    description: "Version control, deployment, and cloud services.",
    icon: CloudIcon,
    skills: [
      { name: "Git", icon: GitAltIcon },
      { name: "GitHub", icon: CodeIcon },
      { name: "AWS", icon: AwsIcon },
      { name: "Vercel", icon: VercelIcon },
      { name: "Docker", icon: DockerIcon },
    ],
  },
  {
    title: "AI & Game Development",
    description: "Exploring AI integrations and interactive experiences.",
    icon: GamepadIcon,
    skills: [
      { name: "OpenAI API", icon: OpenAiIcon },
      { name: "Third-party APIs", icon: IntegrationIcon },
      { name: "Authentication", icon: CodeIcon },
      { name: "C++", icon: CodeIcon },
      { name: "Godot", icon: GamepadIcon },
      { name: "Java", icon: JavaIcon },
    ],
  },
];

function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 px-3 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 sm:px-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/15">
        <Icon size={19} aria-hidden="true" />
      </div>

      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </div>
  );
}

function SkillGroup({ group }) {
  const Icon = group.icon;

  return (
    <article className="surface rounded-2xl p-5 transition-all duration-300 hover:border-primary/30 sm:p-6">
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
          <Icon size={21} aria-hidden="true" />
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {group.title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-foreground-secondary">
            {group.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {group.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </article>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section border-t border-border">
      <div className="container">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="eyebrow">Technical toolkit</p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-5 text-base leading-8 text-foreground-secondary">
            From building user interfaces to developing backend services and
            integrating external platforms, these are the technologies and tools
            I have worked with across my projects and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={
                group.title === "AI & Game Development" ? "lg:col-span-2" : ""
              }
            >
              <SkillGroup group={group} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-6">
          <span className="flex items-center gap-2 text-sm font-medium text-foreground-secondary">
            <CodeIcon size={17} className="text-primary" />
            Always learning
          </span>

          <span className="text-sm text-muted">
            Exploring new tools and finding better ways to build software.
          </span>
        </div>
      </div>
    </section>
  );
}
