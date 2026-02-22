import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects: {
  title: string;
  isNew?: boolean;
  image?: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}[] = [
  {
    title: "CRWN Clothing",
    image: "/images/crwn.clothing.png",
    description:
      "A modern e-commerce application featuring user authentication, category-based product browsing, shopping cart, and Stripe payment integration.",
    tags: ["React", "Redux", "Firebase", "Stripe", "Styled Components"],
    githubUrl: "https://github.com/Navin-MS-data/crwn-clothing",
    liveUrl: "https://crwn-clothing-61rq.vercel.app/",
  },
  {
    title: "Weather App",
    image: "/images/weather-app.png",
    description:
      "A real-time weather application that displays current conditions, forecasts, and location-based weather data with a clean, intuitive interface.",
    tags: ["React", "OpenWeather API", "Tailwind CSS", "Geolocation"],
    githubUrl: "https://github.com/Navin-MS-data/weather-app",
    liveUrl: "https://weather-app-iota-tawny-33.vercel.app/",
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative rounded-none overflow-hidden flex flex-col"
        >
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
          <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full pointer-events-none bg-gradient-to-br from-black/5 to-transparent blur-2xl z-0" />
          <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full pointer-events-none bg-gradient-to-tl from-black/5 to-transparent blur-2xl z-0" />

          {/* Card */}
          <div className="relative z-10 bg-white/60 border border-black/8 flex flex-col h-full transition-all duration-300 hover:border-black/30 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.10)]">
            {"isNew" in project && project.isNew && (
              <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-20 rotate-12">
                LATEST WORK
              </div>
            )}

            {/* Project image — proper aspect ratio, no cropping tricks */}
            {project.image && (
              <div className="w-full aspect-video overflow-hidden border-b border-black/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
                {project.title}
              </h3>
              <p className="body-text mt-4 text-sm font-normal">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6 border-t border-foreground/10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                >
                  <Github className="w-3.5 h-3.5" />
                  Source
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
