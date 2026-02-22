import SectionBlock from "./SectionBlock";
import { MapPin, Code2, Briefcase } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Focus", value: "React & Frontend" },
  { icon: MapPin, label: "Based in", value: "India" },
  { icon: Briefcase, label: "Open to", value: "Opportunities" },
];

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="space-y-10">
      {/* Lead paragraph */}
      <p className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-3xl font-light">
        Passionate Front End Developer eager to begin a career in web development. Proficient in key frontend technologies and passionate about creating seamless user experiences.
      </p>

      {/* Supporting text */}
      <p className="body-text max-w-2xl">
        Ready to collaborate and learn, contributing to innovative web applications and applying strong organizational and communication skills.
      </p>

      {/* Highlight cards */}
      <div className="grid grid-cols-3 gap-4 pt-4">
        {highlights.map(({ icon: Icon, label, value }) => (
          <div key={label} className="relative rounded-none overflow-hidden">
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
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none bg-gradient-to-br from-black/5 to-transparent blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full pointer-events-none bg-gradient-to-tl from-black/5 to-transparent blur-2xl" />

            {/* Card content */}
            <div className="group relative z-10 bg-white/60 border border-black/8 p-4 transition-all duration-300 hover:border-black/30 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.08)]">
              <Icon className="w-4 h-4 text-foreground/30 mb-3 group-hover:text-foreground/60 transition-colors duration-300" />
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-1">
                {label}
              </p>
              <p className="font-bold text-sm tracking-tight text-foreground">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
