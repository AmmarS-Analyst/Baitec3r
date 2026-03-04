import type { FC } from "react";
import { useEffect, useState } from "react";

const Hero: FC = () => {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== "undefined" ? window.innerWidth >= 993 : true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 993);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    return () => { window.removeEventListener("scroll", handleScroll); window.removeEventListener("resize", handleScroll); };
  }, []);

  if (isDesktop) {
    return (
      <section id="home" className="relative overflow-hidden" style={{ backgroundColor: "#84DADE", height: "calc(100vh - 70px)", maxHeight: "930px", marginTop: "70px" }}>
        <img src="/assets/images/hero/bg_clouds.webp" alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
        <div className="relative w-full h-full z-[1]" style={{ padding: "clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)" }}>
          {/* Text */}
          <div className="text-center absolute z-[3]" style={{ top: "clamp(3rem, 6vw, 5rem)", left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "65em" }}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 700, color: "#002B49", marginBottom: "clamp(1rem, 2vw, 1.5rem)", lineHeight: 1.4, letterSpacing: "-0.04em" }}>
              <span className="whitespace-nowrap">SMARTER PROPERTY MANAGEMENT</span> <br /> ALL IN ONE PLACE
            </h1>
            <p style={{ fontSize: "clamp(16px, 2vw, 28px)", fontWeight: 400, color: "#002B49", lineHeight: 1.6, opacity: 0.9, maxWidth: "55em", margin: "0 auto" }}>
              Manage units, tenants, rent, and maintenance through one connected, intelligent platform.
            </p>
            <div className="flex justify-center items-center flex-wrap" style={{ gap: "clamp(1rem, 2vw, 1.5rem)", marginTop: "clamp(2rem, 3vw, 2.5rem)" }}>
              <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" className="inline-block no-underline transition-all duration-300 hover:scale-105 hover:opacity-90" style={{ height: "clamp(45px, 6vw, 60px)" }}>
                <img src="/assets/images/hero/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="Get it on Google Play" style={{ height: "clamp(45px, 6vw, 60px)", width: "auto" }} />
              </a>
              <a href="https://apps.apple.com/app" target="_blank" rel="noopener noreferrer" className="inline-block no-underline transition-all duration-300 hover:scale-105 hover:opacity-90" style={{ height: "clamp(45px, 6vw, 60px)" }}>
                <img src="/assets/images/hero/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" style={{ height: "clamp(45px, 6vw, 60px)", width: "auto" }} />
              </a>
            </div>
          </div>
          {/* Images */}
          <div className="absolute inset-0 z-[2]">
            <img src="/assets/images/hero/Hero_house.webp" alt="" className="absolute pointer-events-none" style={{ top: "15.625em", left: "-18.5em", bottom: "0", maxHeight: "59.375em", zIndex: 2 }} />
            <img src="/assets/images/hero/redbar_left.webp" alt="" className="absolute z-[1] pointer-events-auto cursor-pointer transition-transform duration-800 hover:-translate-y-[250px]" style={{ top: "20.3125em", left: "7.2em", maxWidth: "6.875em" }} />
            <img src="/assets/images/hero/bluebar_left.webp" alt="" className="absolute z-[1] pointer-events-auto cursor-pointer transition-transform duration-800 hover:-translate-y-[250px]" style={{ top: "14.375em", left: "0", maxWidth: "6.875em" }} />
            <img src="/assets/images/hero/hero_mobile_screen.webp" alt="" className="absolute z-[2]" style={{ top: "25em", right: "9%", bottom: "0", maxHeight: "70em" }} />
            <img src="/assets/images/hero/redbar_right.webp" alt="" className="absolute z-[1] pointer-events-auto cursor-pointer transition-transform duration-800 hover:-translate-y-[350px]" style={{ top: "50em", right: "5.1%", maxWidth: "6.25em" }} />
            <img src="/assets/images/hero/bluebar_right.webp" alt="" className="absolute z-[1] pointer-events-auto cursor-pointer transition-transform duration-800 hover:-translate-y-[350px]" style={{ top: "45em", right: "0%", maxWidth: "6.25em" }} />
          </div>
        </div>
      </section>
    );
  }

  // Mobile/Tablet view
  return (
    <section id="home" className="hero-mobile-section relative overflow-hidden" style={{ backgroundColor: "#84DADE", height: "calc(100vh - 70px)", maxHeight: "930px", marginTop: "70px" }}>
      <img src="/assets/images/hero/bg_clouds.webp" alt="" className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none" />
      <div className="hero-mobile-container relative w-full h-full z-[1]" style={{ padding: "clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)" }}>
        <div className="hero-mobile-text text-center absolute z-[3]" style={{ top: "clamp(3rem, 6vw, 5rem)", left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "65em" }}>
          <h1 className="hero-mobile-headline" style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 700, color: "#002B49", marginBottom: "clamp(1rem, 2vw, 1.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            SMARTER PROPERTY <br /> MANAGEMENT <br /> ALL IN ONE PLACE
          </h1>
          <p className="hero-mobile-subheadline" style={{ fontSize: "clamp(16px, 2vw, 28px)", fontWeight: 400, color: "#002B49", lineHeight: 1.6, opacity: 0.9, maxWidth: "55em", margin: "0 auto" }}>
            Manage units, tenants, rent, and maintenance through one connected, intelligent platform.
          </p>
          <div className="hero-mobile-buttons flex justify-center items-center flex-wrap" style={{ gap: "clamp(1rem, 2vw, 1.5rem)", marginTop: "clamp(2rem, 3vw, 2.5rem)" }}>
            <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer" className="inline-block no-underline" style={{ height: "clamp(45px, 6vw, 60px)" }}>
              <img src="/assets/images/hero/GetItOnGooglePlay_Badge_Web_color_English.svg" alt="Get it on Google Play" style={{ height: "clamp(45px, 6vw, 60px)", width: "auto" }} />
            </a>
            <a href="https://apps.apple.com/app" target="_blank" rel="noopener noreferrer" className="inline-block no-underline" style={{ height: "clamp(45px, 6vw, 60px)" }}>
              <img src="/assets/images/hero/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" style={{ height: "clamp(45px, 6vw, 60px)", width: "auto" }} />
            </a>
          </div>
        </div>
        <div className="hero-mobile-images absolute inset-0 z-[2]">
          <img src="/assets/images/hero/Hero_house.webp" alt="" className="hero-mobile-house absolute z-[2] pointer-events-none" style={{ top: "12.5em", left: "-15em", bottom: 0, maxHeight: "37.5em" }} />
          <img src="/assets/images/hero/redbar_left.webp" alt="Red Bar Left" className="hero-mobile-bars-left absolute z-[1] pointer-events-auto" style={{ top: "15em", left: "3.5em", maxWidth: "5.9375em" }} />
          <img src="/assets/images/hero/bluebar_left.webp" alt="Blue Bar Left" className="hero-mobile-bars-left absolute z-[1] pointer-events-auto" style={{ top: "9.375em", left: "0.5em", maxWidth: "5.9375em" }} />
          <img src="/assets/images/hero/hero_mobile_screen.webp" alt="" className="hero-mobile-screen absolute z-[2]" style={{ top: "28em", right: "7%", bottom: 0, maxHeight: "40.625em" }} />
          <img src="/assets/images/hero/redbar_right.webp" alt="Red Bar Right" className="hero-mobile-bars-right absolute z-[1] pointer-events-auto cursor-pointer transition-transform duration-800" style={{ top: "36.25em", right: "4.5%", maxWidth: "5.3125em" }} />
          <img src="/assets/images/hero/bluebar_right.webp" alt="Blue Bar Right" className="hero-mobile-bars-right absolute z-[1] pointer-events-auto cursor-pointer transition-transform duration-800" style={{ top: "32.5em", right: "1%", maxWidth: "5.3125em" }} />
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hero-mobile-section { height: calc(100vh - 70px); max-height: 930px; min-height: 500px; padding: 0; margin-top: 70px; }
          .hero-mobile-container { padding: 0; height: 100%; }
          .hero-mobile-text { top: 4rem; padding: 0 1rem; }
          .hero-mobile-house { bottom: -7em; left: -20%; top: auto; height: 340px; max-height: none; width: auto; }
          .hero-mobile-bars-left { top: auto; bottom: 44px; max-width: 3em; z-index: 0; }
          .hero-mobile-bars-left[alt="Red Bar Left"] { left: 4em; }
          .hero-mobile-bars-left[alt="Blue Bar Left"] { bottom: 68px; left: 0.5em; }
          .hero-mobile-screen { bottom: -5em; right: 0%; left: auto; top: auto; height: 360px; max-height: none; width: auto; }
          .hero-mobile-headline { font-size: 28px; }
          .hero-mobile-buttons { margin-top: 4rem; gap: 0.75rem; }
          .hero-mobile-buttons > a { height: 42px; }
          .hero-mobile-buttons > a img { height: 42px; }
          .hero-mobile-bars-right { display: none; }
        }
        @media (max-width: 480px) {
          .hero-mobile-text { top: 11rem; padding: 0 0.75rem; }
          .hero-mobile-headline { font-size: 24px; }
          .hero-mobile-subheadline { font-size: 14px; line-height: 1.5; }
          .hero-mobile-house { height: 340px; left: -25%; bottom: -7em; }
          .hero-mobile-screen { height: 400px; right: -0.5%; bottom: -9.8em; }
          .hero-mobile-bars-left[alt="Red Bar Left"] { bottom: 52px; left: 7.5em; max-width: 3em; }
          .hero-mobile-bars-left[alt="Blue Bar Left"] { bottom: 76px; left: 4.3em; max-width: 3em; }
          .hero-mobile-buttons { margin-top: 3.5rem; }
          .hero-mobile-buttons > a { height: 38px; }
          .hero-mobile-buttons > a img { height: 38px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
