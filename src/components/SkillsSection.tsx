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
  SiClaude,
} from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

type Skill = { name: string; icon?: IconType; image?: string; color: string };

const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
];

const aiTools: Skill[] = [
  { name: "Claude Code", icon: SiClaude, color: "#D4A27F" },
  { name: "Antigravity", image: "/Google_Antigravity-logo.svg", color: "#4285F4" },
  { name: "GitHub Copilot", icon: VscGithubInverted, color: "#181717" },
];

const SkillCard = ({ name, icon: Icon, image, color }: Skill) => (
  <div className="group relative rounded-none overflow-hidden">
    {/* Dot-grid background */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
        backgroundSize: "22px 22px",
      }}
    />
    {/* Gradient blobs */}
    <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full pointer-events-none bg-gradient-to-br from-black/5 to-transparent blur-2xl z-0" />
    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none bg-gradient-to-tl from-black/5 to-transparent blur-2xl z-0" />

    <div className="relative z-10 flex flex-col items-center justify-center gap-2 bg-white/60 border border-black/8 px-4 py-4 transition-all duration-300 hover:border-black/30 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.10)] cursor-default">
      {Icon ? (
        <Icon
          className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
          style={{ color }}
        />
      ) : image ? (
        <img
          src={image}
          alt={name}
          className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
        />
      ) : null}
      <span className="text-xs font-semibold tracking-tight text-center">{name}</span>
    </div>
  </div>
);

const SkillsSection = () => (
  <SectionBlock id="skills" title="Technical Skills" alternate>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {skills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>

    <h3 className="text-xs font-mono uppercase tracking-[0.25em] mt-10 mb-4 text-foreground/40">
      AI Tools
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {aiTools.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  </SectionBlock>
);

export default SkillsSection;
