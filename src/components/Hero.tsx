import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import houseSvg from "../../fAssets/SVG/House.svg";
import phoneSvg from "../../fAssets/SVG/Phone.svg";

const Hero: FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [heroAnimated, setHeroAnimated] = useState(false);
  const hasAnimated = useRef(false);

  // Run animation when hero is in view (scroll) or on mount so content always shows
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const runAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      setHeroAnimated(true);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) runAnimation();
      },
      { threshold: 0.05, rootMargin: "0px" }
    );
    observer.observe(el);
    // If hero is already in view on load, run after a tick (observer may not fire immediately)
    const t = setTimeout(runAnimation, 150);
    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      const whatsappButton = document.querySelector(".floating-whatsapp-btn") as HTMLElement;
      if (heroSection && whatsappButton) {
        const rect = heroSection.getBoundingClientRect();
        const isHeroVisible = rect.top < window.innerHeight && rect.bottom > 0;
        whatsappButton.style.display = isHeroVisible ? "none" : "flex";
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const subtitle =
    "Manage units, tenants, rent, and maintenance through one connected, intelligent platform.";

  return (
    <section
      ref={heroRef}
      id="home"
      className={`relative overflow-visible min-h-[calc(100vh-70px)] max-h-[930px] flex flex-col lg:flex-row items-stretch justify-start lg:justify-start gap-0 lg:gap-4 w-full pt-4 lg:pt-0 ${heroAnimated ? "hero-animated" : ""}`}
      style={{ backgroundColor: "#0a202d", marginTop: "70px" }}
    >
      {/* Column 1 on desktop (visual); on mobile shown below text (order-2), flex-none so no gap */}
      <div className="relative flex flex-none lg:flex-1 min-w-0 w-full lg:w-1/2 flex items-center justify-center lg:justify-end order-2 lg:order-1">
        {/* Mobile + tablet: phone + house (tablet gets scaled sizing so it doesn't break) */}
        <div className="flex w-full items-center justify-center lg:hidden px-0 flex-none">
          <div className="hero-mobile-img hero-phone-house relative w-[95vw] max-w-[580px] aspect-[697.74/697.74] max-h-[min(55vh,520px)]">
            <div className="hero-phone-wrap absolute inset-0 z-0">
              <img
                src={phoneSvg}
                alt=""
                className="w-full h-full object-contain object-bottom"
              />
            </div>
            <div className="hero-house-wrap absolute inset-0 z-10">
              <img
                src={houseSvg}
                alt=""
                className="w-full h-full object-contain"
                style={{ objectPosition: "120% 100%" }}
              />
            </div>
          </div>
          <style>{`
            @keyframes heroPhoneIn {
              from { opacity: 0; transform: translateY(40px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes heroHouseIn {
              from { opacity: 0; transform: translateX(-56px); }
              to { opacity: 1; transform: translateX(0); }
            }
            .hero-phone-wrap { opacity: 0; transform: translateY(40px); }
            .hero-house-wrap { opacity: 0; transform: translateX(-56px); }
            .hero-animated .hero-phone-wrap {
              animation: heroPhoneIn 1.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }
            .hero-animated .hero-house-wrap {
              animation: heroHouseIn 1.2s 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }
          `}</style>
          <style>{`
            @media (max-width: 767px) {
              .hero-mobile-img.hero-phone-house {
                width: 96vw !important;
                max-width: none !important;
                min-width: 0;
                max-height: min(82vh, 600px) !important;
                min-height: min(58vh, 320px) !important;
              }
            }
            @media (min-width: 768px) and (max-width: 1023px) {
              .hero-mobile-img.hero-phone-house {
                width: min(65vw, 520px) !important;
                max-width: min(65vw, 520px) !important;
                max-height: min(55vh, 480px) !important;
                min-width: 0;
              }
            }
          `}</style>
        </div>

        {/* Desktop: phone + house grouped (same structure as mobile so it always shows) */}
        <div className="hidden lg:flex relative flex-1 min-h-0 items-end justify-center overflow-visible w-full">
          {/* Gradient: same height band as phone — fades in from left on scroll */}
          <div
            className="hero-gradient-wrap absolute right-0 pointer-events-none z-[1]"
            style={{
              left: "58%",
              top: "3%",
              bottom: "8%",
              background:
                "linear-gradient(to right, rgba(132,218,222,0.26) 0%, rgba(132,218,222,0.18) 30%, rgba(132,218,222,0.08) 65%, transparent 100%)",
              filter: "blur(6px)",
            }}
          />
          <style>{`
            @keyframes heroGradientIn {
              from { opacity: 0; transform: translateX(-32px); }
              to { opacity: 1; transform: translateX(0); }
            }
            .hero-gradient-wrap { opacity: 0; transform: translateX(-32px); }
            .hero-animated .hero-gradient-wrap {
              animation: heroGradientIn 1s 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }
          `}</style>
          <div className="relative flex items-end justify-center overflow-visible z-[2] w-full h-full min-h-[min(70vh,800px)] min-w-0">
            <div
              className="hero-desktop-phone-house relative w-full max-w-[min(85vh,920px)] min-w-[280px] h-[min(85vh,920px)] min-h-[360px] max-h-[85vh]"
              style={{ aspectRatio: "1" }}
            >
              <div className="hero-phone-wrap absolute inset-0 z-0">
                <img
                  src={phoneSvg}
                  alt=""
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
              <div className="hero-house-wrap absolute inset-0 z-10">
                <img
                  src={houseSvg}
                  alt=""
                  className="w-full h-full object-contain"
                  style={{ objectPosition: "120% 100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Column 2 on desktop (text); on mobile text above visual (order-1), less top gap on mob */}
      <div className="relative flex flex-none lg:flex-1 min-w-0 w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start justify-start lg:justify-center pt-6 lg:pt-0 text-center lg:text-left">
        {/* Text block: headline from top, then sub appears (one by one) */}
        <div className="w-full flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 px-4 py-1 lg:py-0 lg:px-6 rounded-none hero-text-block">
          <style>{`
            .hero-text-block { background: transparent; }
            @media (max-width: 767px) { .hero-text-block { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; } }
            @keyframes heroHeadlineIn {
              from { opacity: 0; transform: translateY(-24px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes heroSubIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .hero-headline-line { opacity: 0; transform: translateY(-24px); display: block; }
            .hero-sub-reveal { opacity: 0; }
            .hero-animated .hero-headline-line.hero-line-1 {
              animation: heroHeadlineIn 0.8s 1.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }
            .hero-animated .hero-headline-line.hero-line-2 {
              animation: heroHeadlineIn 0.8s 1.85s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }
            .hero-animated .hero-headline-line.hero-line-3 {
              animation: heroHeadlineIn 0.8s 2.15s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }
            .hero-animated .hero-sub-reveal {
              animation: heroSubIn 0.7s 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }
          `}</style>
          <h1
            className="font-bold uppercase leading-tight text-[#84DADE] max-w-xl"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="hero-headline-line hero-line-1">SMARTER{"\u00A0"}PROPERTY</span>
            <span className="hero-headline-line hero-line-2">MANAGEMENT,</span>
            <span className="hero-headline-line hero-line-3">ALL IN ONE PLACE</span>
          </h1>
          <p
            className="hero-sub-reveal font-normal max-w-xl text-white"
            style={{
              fontSize: "clamp(0.9375rem, 2vw, 1.25rem)",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
