import SectionBlock from "./SectionBlock";

const education = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Manipal University",
    year: "2023 – Present",
  },
  {
    degree: "Higher Secondary Education",
    school: "Vidya Mandir Matriculation Higher Secondary School",
    year: "2019 – 2020",
  },
];

const EducationSection = () => (
  <SectionBlock id="education" title="Education">
    {/* Background wrapper */}
    <div className="relative rounded-none overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 p-6 md:p-10 space-y-6">
        {education.map((item) => (
          <div
            key={item.degree}
            className="group relative bg-white/60 border border-black/8 p-5 md:p-6 hover:border-black/30 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            {/* Year — top right */}
            <span className="absolute top-5 right-5 font-mono text-sm font-bold text-foreground/50 bg-black/5 px-2 py-0.5">
              {item.year}
            </span>

            <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug pr-28">
              {item.degree}
            </h3>
            <div className="mt-2">
              <span className="text-foreground/70 font-medium">
                {item.school}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionBlock>
);

export default EducationSection;
