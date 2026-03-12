import type { FC } from "react";
import { useEffect } from "react";
import heromobileSvg from "../../fAssets/SVG/Heromobile.svg";

const Hero: FC = () => {
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
      id="home"
      className="scroll-reveal relative overflow-visible min-h-[calc(100vh-70px)] max-h-[930px] flex flex-col lg:flex-row items-stretch justify-center lg:justify-start gap-0 lg:gap-4 w-full"
      style={{ backgroundColor: "#0a202d", marginTop: "70px" }}
    >
      {/* Column 1 on desktop (visual); on mobile shown below text (order-2), flex-none so no gap */}
      <div className="relative flex flex-none lg:flex-1 min-w-0 w-full lg:w-1/2 flex items-center justify-center lg:justify-end order-2 lg:order-1">
        {/* Mobile: full-width image, no stretch; tablet: current size */}
        <div className="flex w-full items-center justify-center lg:hidden px-0 flex-none">
          <img
            src={heromobileSvg}
            alt=""
            className="hero-mobile-img w-[95vw] max-w-[580px] object-contain object-center"
          />
          <style>{`
            @media (max-width: 767px) {
              .hero-mobile-img {
                width: 96vw !important;
                max-width: none !important;
                min-width: 0;
              }
            }
          `}</style>
        </div>

        {/* Desktop: same mobile+3D SVG in overflow-visible wrapper + gradient */}
        <div className="hidden lg:flex relative flex-1 min-h-0 items-end justify-center overflow-visible w-full">
          {/* Gradient: same height band as phone, inset from top and bottom so edges stay inside */}
          <div
            className="absolute right-0 pointer-events-none z-[1]"
            style={{
              left: "58%",
              top: "3%",
              bottom: "8%",
              // Horizontal fade toward the text
              background:
                "linear-gradient(to right, rgba(132,218,222,0.26) 0%, rgba(132,218,222,0.18) 30%, rgba(132,218,222,0.08) 65%, transparent 100%)",
              // Very slight blur so the top/bottom horizontal edges are not sharp lines
              filter: "blur(6px)",
            }}
          />
          <div className="relative flex items-end justify-center overflow-visible z-[2] w-full">
            <img
              src={heromobileSvg}
              alt=""
              className="max-h-[min(85vh,920px)] w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Column 2 on desktop (text); on mobile text above visual (order-1), flex-none so no extra gap */}
      <div className="relative flex flex-none lg:flex-1 min-w-0 w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        {/* Text block: no gradient on mobile/tablet; minimal padding on mobile to reduce gap */}
        <div className="hero-text-block w-full flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 px-4 py-1 lg:py-0 lg:px-6 rounded-none">
          <style>{`
            .hero-text-block { background: transparent; }
            @media (max-width: 767px) { .hero-text-block { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; } }
          `}</style>
          <h1
            className="font-bold uppercase leading-tight text-[#84DADE] max-w-xl"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            SMARTER{"\u00A0"}PROPERTY
            <br />
            MANAGEMENT,
            <br />
            ALL IN ONE PLACE
          </h1>
          <p
            className="font-normal max-w-xl text-white"
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
