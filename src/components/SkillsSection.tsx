import SectionBlock from "./SectionBlock";

const skillCategories: {
  title: string;
  skills: string[];
}[] = [
  {
    title: "Frontend",
    skills: ["React", "Redux", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "Claude Code", "GitHub Copilot"],
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
          <div className="border border-foreground/15 p-6 md:p-8 h-full transition-all duration-300 hover:border-foreground/40 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)]">
            <h3 className="text-xs font-mono uppercase tracking-[0.25em] mb-6 text-foreground/40 group-hover:text-foreground transition-colors duration-300 border-b border-foreground/10 pb-3">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border-2 border-foreground/10 text-sm font-semibold tracking-tight hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default SkillsSection;
