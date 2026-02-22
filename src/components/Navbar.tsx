import { useState, useEffect, useCallback } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        el.classList.remove("opacity-0", "translate-y-8");
        el.classList.add("opacity-100", "translate-y-0");
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setOpen(false);
    },
    [],
  );

  return (
    <nav
      className={`
        fixed top-4 left-4 right-4 z-50
        max-w-4xl mx-auto rounded-full
        transition-all duration-500
        ${
          scrolled
            ? "py-2.5 px-2 bg-white/40 backdrop-blur-xl backdrop-saturate-150 border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]"
            : "py-3 px-2 bg-white/20 backdrop-blur-lg backdrop-saturate-125 border border-white/20 shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]"
        }
      `}
    >
      <div className="px-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
          className="relative group"
        >
          <span className="font-black text-lg tracking-tighter text-foreground transition-opacity duration-300 group-hover:opacity-60">
            Navin
          </span>
          <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`
                relative px-3 py-1.5 font-sans text-[11px] tracking-[0.15em] uppercase
                transition-all duration-300 group
                ${
                  activeSection === link.href
                    ? "text-foreground font-bold"
                    : "text-foreground/50 hover:text-foreground"
                }
              `}
            >
              {link.label}
              {/* Active / hover underline */}
              <span
                className={`
                  absolute bottom-0 left-3 right-3 h-px bg-foreground
                  transition-transform duration-300 origin-left
                  ${activeSection === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                `}
              />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] group"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`
              block w-5 h-[1.5px] bg-foreground transition-all duration-300 origin-center
              ${open ? "rotate-45 translate-y-[6.5px]" : "group-hover:w-6"}
            `}
          />
          <span
            className={`
              block w-5 h-[1.5px] bg-foreground transition-all duration-300
              ${open ? "opacity-0 scale-x-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              block w-5 h-[1.5px] bg-foreground transition-all duration-300 origin-center
              ${open ? "-rotate-45 -translate-y-[6.5px]" : "group-hover:w-6"}
            `}
          />
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        className={`
          md:hidden fixed inset-0 top-0 bg-background/98 backdrop-blur-lg z-40
          flex flex-col items-center justify-center gap-2
          transition-all duration-500
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className={`
              relative font-black text-3xl tracking-tighter uppercase
              transition-all duration-500
              ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              ${
                activeSection === link.href
                  ? "text-foreground"
                  : "text-foreground/30 hover:text-foreground"
              }
            `}
            style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
          >
            {link.label}
            {activeSection === link.href && (
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-foreground" />
            )}
          </a>
        ))}

        {/* Bottom decoration in mobile menu */}
        <p
          className={`
            absolute bottom-10 font-mono text-[10px] text-foreground/25 tracking-wider
            transition-all duration-500
            ${open ? "opacity-100 delay-500" : "opacity-0"}
          `}
        >
          // navigation.tsx
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
