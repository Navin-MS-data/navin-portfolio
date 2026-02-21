import SectionBlock from "./SectionBlock";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGithub,
  SiAnthropic,
} from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const skillCategories: {
  title: string;
  skills: { name: string; icon: IconType; color: string }[];
}[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Claude Code", icon: SiAnthropic, color: "#D4A27F" },
      { name: "GitHub Copilot", icon: VscGithubInverted, color: "#181717" },
    ],
  },
];

const SkillsSection = () => (
  <SectionBlock id="skills" title="Technical Skills">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {skillCategories.map((category, idx) => (
        <div
          key={category.title}
          className="group opacity-0 animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards"
          style={{
            animationDelay: `${idx * 100}ms`,
            animationDuration: "600ms",
            animationFillMode: "forwards",
          }}
        >
          {/* Education-style highlight wrapper */}
          <div className="relative rounded-none overflow-hidden h-full">
            {/* Dot-grid background */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Gradient blobs */}
            <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full pointer-events-none bg-gradient-to-br from-black/5 to-transparent blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full pointer-events-none bg-gradient-to-tl from-black/5 to-transparent blur-2xl" />

            {/* Card content */}
            <div className="relative z-10 bg-white/60 border border-black/8 p-6 md:p-8 h-full transition-all duration-300 hover:border-black/30 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)]">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] mb-6 text-foreground/40 group-hover:text-foreground transition-colors duration-300 border-b border-foreground/10 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(({ name, icon: Icon, color }) => (
                  <span
                    key={name}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-foreground/10 text-sm font-semibold tracking-tight hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default SkillsSection;
