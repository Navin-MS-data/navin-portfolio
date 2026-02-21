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
        I'm a passionate Front End Developer with a strong foundation in
        building clean, performant, and user-centric web experiences. I believe
        in the power of minimal design and well-crafted code to communicate
        ideas effectively.
      </p>

      {/* Supporting text */}
      <p className="body-text max-w-2xl">
        As a fresher, I bring enthusiasm, a hunger to learn, and a solid grasp
        of modern front-end technologies — ready to contribute, grow, and make
        an impact from day one.
      </p>

      {/* Highlight cards */}
      <div className="grid grid-cols-3 gap-4 pt-4">
        {highlights.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="border border-foreground/15 p-4 transition-all duration-300 hover:border-foreground/40 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.08)] group"
          >
            <Icon className="w-4 h-4 text-foreground/30 mb-3 group-hover:text-foreground/60 transition-colors duration-300" />
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-1">
              {label}
            </p>
            <p className="font-bold text-sm tracking-tight text-foreground">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
