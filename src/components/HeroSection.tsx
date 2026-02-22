import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Mount animation trigger
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Mouse tracking for parallax blobs
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Subtle particle / matrix rain
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01{}[]<>/*#=+-;:.";
    const fontSize = 13;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(255,255,255,0.045)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = "rgba(0,0,0,0.12)";
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 65);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center relative px-6 pt-20 overflow-hidden"
    >
      {/* Matrix rain canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Parallax gradient glow blobs */}
      <div
        className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none z-0 transition-transform duration-[2000ms] ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)",
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 20}px)`,
        }}
      />
      <div
        className="absolute bottom-10 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none z-0 transition-transform duration-[2000ms] ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 70%)",
          transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -15}px)`,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0 transition-transform duration-[2500ms] ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.025) 0%, transparent 60%)",
          transform: `translate(calc(-50% + ${mousePos.x * 15}px), calc(-50% + ${mousePos.y * 10}px))`,
        }}
      />

      {/* ── Main two-column layout ── */}
      <div
        className={`
          relative z-10 max-w-6xl mx-auto w-full
          flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16
          transition-all duration-1000 ease-out
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
      >
        {/* ── LEFT: Text content ── */}
        <div className="flex-1 text-left max-w-2xl">
          {/* Greeting */}
          <p
            className={`
              font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/50 mb-4 font-bold
              transition-all duration-600 delay-150
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
            `}
          >
            <span className="text-foreground/30">&#47;&#47; </span>Hello,
            I&apos;m
          </p>

          {/* Name */}
          <h1
            className={`
              heading-brutal leading-[0.88] mb-2
              transition-all duration-700 delay-200
              ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
            `}
            style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
          >
            Navin
            <br />
            <span
              style={{
                WebkitTextStroke: "2px currentColor",
                WebkitTextFillColor: "transparent",
                opacity: 0.35,
              }}
            >
              Kumar M S.
            </span>
          </h1>

          {/* Role */}
          <div
            className={`
              mt-7 h-9 flex items-center gap-1
              transition-all duration-700 delay-300
              ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
            `}
          >
            <span className="font-mono text-base md:text-lg tracking-[0.2em] text-foreground/40">
              {"< "}
            </span>
            <span className="font-mono text-base md:text-lg tracking-[0.1em] text-foreground font-semibold min-w-[2ch]">
              Front End Developer
            </span>
            <span className="font-mono text-base md:text-lg tracking-[0.2em] text-foreground/40">
              {" />"}
            </span>
          </div>

          {/* Short bio */}
          <p
            className={`
              mt-6 text-foreground/60 text-sm md:text-base leading-relaxed max-w-lg
              transition-all duration-700 delay-[350ms]
              ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
            `}
          >
            Passionate about building modern web apps with React — from clean UI design to smooth user interactions and scalable code.
          </p>

          {/* CTA buttons + socials */}
          <div
            className={`
              flex flex-wrap items-center gap-4 mt-10
              transition-all duration-700 delay-500
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("projects");
                if (el) {
                  el.classList.remove("opacity-0", "translate-y-8");
                  el.classList.add("opacity-100", "translate-y-0");
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 border-2 border-black bg-black text-white text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.25)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] cursor-pointer"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Secondary CTA */}
            <a
              href="/Resume/NavinKumarMSResume.pdf"
              download="Navin Kumar Resume.pdf"
              className="group inline-flex items-center gap-2 px-7 py-3.5 border-2 border-foreground/30 text-foreground text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:border-black hover:bg-foreground/5"
            >
              <ArrowDownToLine className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Resume
            </a>

          </div>
        </div>

        {/* ── RIGHT: Avatar ── */}
        <div
          className={`
            flex-shrink-0
            transition-all duration-1000 delay-300 ease-out
            ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
          `}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
            {/* Offset decorative border */}
            <div className="absolute inset-0 border-2 border-black translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5" />

            {/* Photo frame */}
            <div className="relative w-full h-full border-2 border-black bg-white overflow-hidden transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
              <img
                src="/images/navin.jpg"
                alt="Navin Kumar M S"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              {/* Scan-line texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, #000 2px, #000 3px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`
          absolute bottom-10 left-0 right-0 z-10 px-6 md:px-10
          flex justify-between items-end pointer-events-none
          transition-all duration-700 delay-700
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        {/* Code comment in bottom-left */}
        <p className="font-mono text-[10px] text-foreground/35 leading-relaxed hidden md:block">
          // portfolio.tsx &nbsp;|&nbsp; last_build:{" "}
          {new Date().toISOString().split("T")[0]}
        </p>

        {/* Scroll indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 text-foreground/40 animate-bounce-slow">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase">
            scroll
          </span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
