import SectionBlock from "./SectionBlock";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Front End Developer Path",
    issuer: "Scrimba",
    file: "/certificates/Front end Develoeper path scrimba.pdf",
  },
  {
    title: "HTML and CSS",
    issuer: "Meta",
    file: "/certificates/Meta HTML and CSS.pdf",
  },
  {
    title: "The Complete JavaScript Course",
    issuer: "Udemy",
    file: "/certificates/Udemy Javascript.pdf",
  },
  {
    title: "The Ultimate React Course: Next.Js, Redux & more",
    issuer: "Udemy",
    file: "/certificates/Udemy The React Course.pdf",
  },
];

const CertificationsSection = () => (
  <SectionBlock id="certifications" title="Certifications" alternate>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((cert) => (
        <div key={cert.title} className="relative rounded-none overflow-hidden">
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

          {/* Card link */}
          <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-10 bg-white/60 border border-black/8 p-5 flex items-start justify-between gap-4 transition-all duration-300 hover:border-black/30 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.08)]"
          >
            <div>
              <h3 className="font-bold text-sm md:text-base text-foreground group-hover:underline underline-offset-2">
                {cert.title}
              </h3>
              <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-foreground/40 mt-1.5">
                {cert.issuer}
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-foreground/25 group-hover:text-foreground/60 transition-colors duration-300 shrink-0 mt-0.5" />
          </a>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default CertificationsSection;
