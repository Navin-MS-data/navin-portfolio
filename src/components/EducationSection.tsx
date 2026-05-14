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
        <div className="space-y-6">
            {education.map((item) => (
                <div
                    key={item.degree}
                    className="group relative bg-white/60 border border-black/8 p-5 md:p-6 hover:border-black/30 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground leading-snug">
                            {item.degree}
                        </h3>
                        <span className="font-mono text-xs sm:text-sm font-bold text-foreground/50 bg-black/5 px-2 py-0.5 self-start shrink-0">
                            {item.year}
                        </span>
                    </div>
                    <div className="mt-2">
                        <span className="text-foreground/70 font-medium">
                            {item.school}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </SectionBlock>
);

export default EducationSection;
