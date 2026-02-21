import { Github, Linkedin, InstagramIcon, Mail, Heart } from "lucide-react";

const Finale = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Navin-MS-data", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/navin-kumar-m-s-a94b97295",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:navinms0111@gmail.com",
      label: "Email",
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com/d_v_p6",
      label: "Instagram",
    },
  ];

  return (
    <section className="relative w-full bg-white border-t-8 border-black pt-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center">
        {/* ... content ... */}
        <div className="relative mb-20 text-center">
          <h2 className="text-[12vw] md:text-[8vw] font-black uppercase leading-none tracking-tighter text-black/5 absolute -top-1/2 left-1/2 -translate-x-1/2 select-none pointer-events-none">
            THANK YOU
          </h2>
          <p className="text-xl md:text-3xl font-black uppercase tracking-tight italic z-10 relative">
            Let's build something{" "}
            <span className="text-white bg-black px-4 py-1 not-italic">
              unforgettable
            </span>{" "}
            together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mb-24">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-8 border-2 border-black bg-white hover:bg-black transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
            >
              <link.icon className="w-8 h-8 group-hover:text-white transition-colors duration-300" />
              <span className="mt-4 font-mono text-xs uppercase tracking-widest font-black group-hover:text-white">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Extreme Bottom Bar */}
      <div className="w-full bg-white pt-10 pb-24 md:pb-10 px-6 mt-auto border-t border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 opacity-70">
          <p className="text-[10px] md:text-[11px] font-mono text-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-center md:text-left">
            © {currentYear} Navin Kumar M S
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] md:text-[11px] font-mono text-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-center md:text-right font-medium">
            <span className="whitespace-nowrap">Designed & Engineered</span>
            <span className="flex items-center gap-2">
              <span>with</span>
              <Heart className="w-3.5 h-3.5 text-black fill-black animate-heartbeat inline-block" />
              <span>by Navin</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finale;
