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

  const heading = "SMARTER PROPERTY MANAGEMENT, ALL IN ONE PLACE";
  const subtitle =
    "Manage units, tenants, rent, and maintenance through one connected, intelligent platform.";

  return (
    <section
      id="home"
      className="relative overflow-visible min-h-[calc(100vh-70px)] max-h-[930px] flex flex-col lg:flex-row items-stretch justify-center lg:justify-start gap-10 lg:gap-0 w-full"
      style={{ backgroundColor: "#0a202d", marginTop: "70px" }}
    >
      {/* Column 1 on desktop (visual); on mobile shown below text (order-2) */}
      <div className="relative flex flex-1 min-w-0 flex-shrink-0 w-full lg:w-1/2 flex items-center justify-center lg:justify-end order-2 lg:order-1">
        {/* Mobile/tablet: centered phone image, ~75% viewport width like reference */}
        <div className="flex flex-1 w-full items-center justify-center lg:hidden px-4">
          <img
            src={heromobileSvg}
            alt=""
            className="w-[90vw] max-w-[520px] object-contain object-center"
          />
        </div>

        {/* Desktop: same mobile+3D SVG in overflow-visible wrapper + gradient */}
        <div className="hidden lg:flex relative flex-1 min-h-0 items-end justify-center overflow-visible w-full">
          {/* Gradient: light blue from phone area toward text (right) */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to right, rgba(132,218,222,0.22) 0%, rgba(132,218,222,0.08) 35%, transparent 60%)",
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

      {/* Column 2 on desktop (text); on mobile text above visual (order-1) */}
      <div className="relative flex flex-1 min-w-0 w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        {/* Same light blue gradient as desktop, as text bg on mob/tablet only */}
        <div className="hero-text-block w-full flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 px-4 py-4 lg:px-10 lg:py-0 rounded-none">
          <style>{`
            .hero-text-block { background: linear-gradient(to right, rgba(132,218,222,0.22) 0%, rgba(132,218,222,0.08) 35%, transparent 60%); }
            @media (min-width: 1024px) { .hero-text-block { background: transparent; } }
          `}</style>
          <h1
            className="font-bold uppercase leading-tight text-[#84DADE] max-w-xl"
            style={{
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {heading}
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
