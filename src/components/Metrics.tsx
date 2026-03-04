import type { FC } from "react";
import { useEffect, useRef, useState } from "react";

const Metrics: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasAnimated) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();
          const animate = (target: number, setter: (v: number) => void) => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setter(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(() => animate(target, setter));
            else setter(target);
          };
          requestAnimationFrame(() => animate(500, setCount1));
          requestAnimationFrame(() => animate(98, setCount2));
          requestAnimationFrame(() => animate(100, setCount3));
        }
      });
    }, { threshold: 0.3 });
    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    { count: count1, suffix: "+", label: "Measured by real properties", gradient: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)" },
    { count: count2, suffix: "%", label: "real usage", gradient: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)" },
    { count: count3, suffix: "+", label: "real outcomes", gradient: "linear-gradient(135deg, #0099A8 0%, #002B49 100%)" },
  ];

  return (
    <section id="impact" ref={sectionRef} className="pt-[120px]" style={{ background: "linear-gradient(180deg, rgba(0,153,168,0.05) 0%, rgba(132,218,222,0.08) 100%)" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mx-auto pb-[60px] max-w-[548px]">
          <div className="inline-flex items-center gap-2 rounded-full font-bold capitalize leading-none py-2 px-7 mb-4 min-w-max" style={{ background: "linear-gradient(135deg, #84DADE 0%, #1ECAD3 100%)", color: "#FFFFFF", boxShadow: "0 8px 24px rgba(132,218,222,0.3)" }}>
            our impact
          </div>
          <h2 className="capitalize leading-none" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#002B49", lineHeight: 1.2, marginTop: "1rem" }}>
            Trusted by property managers across the GCC
          </h2>
        </div>

        <div className="flex justify-center flex-col md:flex-row" style={{ borderTop: "1px solid #1ECAD3", borderBottom: "1px solid #1ECAD3", gap: "clamp(20px, 5vw, 80px)", padding: "clamp(30px, 5vw, 60px) 0" }}>
          {stats.map((stat, i) => (
            <div key={i} className="contents">
              <div className="text-center flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110">
                <h2 className="mb-2" style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 700, background: stat.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  <span>{stat.count}</span><span>{stat.suffix}</span>
                </h2>
                <span className="uppercase font-bold mt-2" style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#002B49", letterSpacing: "1px" }}>
                  {stat.label}
                </span>
              </div>
              {i < stats.length - 1 && (
                <>
                  <div className="hidden md:flex"><div className="h-full" style={{ width: "1px", background: i === 0 ? "linear-gradient(180deg, #1ECAD3, #0099A8)" : "linear-gradient(180deg, #FF4438, #FF6B5E)" }} /></div>
                  <div className="md:hidden w-full my-4"><div className="w-full" style={{ height: "1px", background: i === 0 ? "linear-gradient(90deg, transparent, #1ECAD3 20%, #1ECAD3 80%, transparent)" : "linear-gradient(90deg, transparent, #FF4438 20%, #FF4438 80%, transparent)" }} /></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
