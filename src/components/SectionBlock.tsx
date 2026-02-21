import { useEffect, useRef, useState, type ReactNode } from "react";

interface SectionBlockProps {
  id: string;
  title: string;
  children: ReactNode;
}

const SectionBlock = ({ id, title, children }: SectionBlockProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section
        id={id}
        ref={ref}
        className={`max-w-4xl mx-auto px-6 py-12 md:py-20 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="section-title mb-12">{title}.</h2>
        {children}
      </section>
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-[2px] bg-black" />
      </div>
    </div>
  );
};

export default SectionBlock;
