import { useState, type FC } from "react";
import newBasem from "../../fAssets/SVG/newbasim.svg";
import rentTrackingScreen from "../../fAssets/SVG/rent_tracking.svg";
import maintenanceManagementScreen from "../../fAssets/SVG/maintenance_management.svg";
import tenantInformationScreen from "../../fAssets/SVG/Tenant information.svg";
import unitStatusUpdateScreen from "../../fAssets/SVG/Unit status update.svg";
import instantUpdatesScreen from "../../fAssets/SVG/Instant_updates.svg";

const slides = [
  { title: "Let Basem handle it", description: "Your Ai property assistant on Whatsapp. Available 24/7." },
  { title: "Rent tracking", description: "Basem keeps rent records up to date, shows payment status, and helps you stay on top of rent without manual follow-ups." },
  { title: "Maintenance management", description: "Tenants send issues directly to Basem. Requests are logged, reviewed, assigned, and tracked until the work is completed." },
  { title: "Tenant information", description: "Basem organizes tenant details including contact information, unit data, rent amount, balance, and lease dates." },
  { title: "Unit status updates", description: "Ask Basem about any unit to instantly know its status, rent situation, or active maintenance." },
  { title: "Instant updates and responses", description: "You can ask Basem questions or request updates anytime, and he responds instantly with clear information." },
];

const slideVisuals = [
  newBasem,
  rentTrackingScreen,
  maintenanceManagementScreen,
  tenantInformationScreen,
  unitStatusUpdateScreen,
  instantUpdatesScreen,
];

const Basem: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isBoundaryVisualTransition, setIsBoundaryVisualTransition] = useState(false);
  const isBasemSlide = currentSlide === 0;

  const isBasemBoundaryTransition = (from: number, to: number) =>
    (from === 0 && to !== 0) || (from !== 0 && to === 0);

  const changeSlide = (nextSlide: number) => {
    if (isTransitioning) return;
    setIsBoundaryVisualTransition(isBasemBoundaryTransition(currentSlide, nextSlide));
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(nextSlide);
      setTimeout(() => {
        setIsTransitioning(false);
        setIsBoundaryVisualTransition(false);
      }, 50);
    }, 300);
  };

  const handlePrev = () => {
    const nextSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    changeSlide(nextSlide);
  };

  const handleNext = () => {
    const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    changeSlide(nextSlide);
  };

  return (
    <section id="basem" className="relative flex items-stretch overflow-hidden" style={{ height: "min(900px, calc(100vh - 80px))", maxHeight: "900px", backgroundColor: "#ffffff", padding: 0 }}>
      {/* Navy background box */}
      <div className="absolute right-0 bottom-0" style={{ top: "clamp(10rem, 25vh, 21rem)", left: "clamp(15%, 20vw, 20%)", backgroundColor: "#002B49", zIndex: 0 }} />

      <div className="w-full flex flex-row items-stretch relative z-[1]" style={{ flex: "1 1 auto" }}>
        {/* Left Column - Basem Image + Bars */}
        <div className="basem-left-column relative flex items-end justify-end overflow-visible" style={{ flex: "1 1 50%", minHeight: "100%", paddingRight: "15rem" }}>
          {/* Desktop Bars */}
          <div className="desktop-bars absolute inset-0 z-[1] pointer-events-none overflow-visible">
            <img src="/assets/images/basem/redbar_left.webp" alt="" className="absolute pointer-events-none" style={{ top: "30em", left: "30em", width: "20em", height: "auto", zIndex: 1 }} />
            <img src="/assets/images/basem/bluebar_left.webp" alt="" className="absolute pointer-events-none overflow-visible" style={{ top: "1em", left: "0", width: "25em", height: "auto", zIndex: 1 }} />
          </div>

          {/* Mobile Bars */}
          <div className="mobile-bars hidden absolute items-end justify-center gap-4 pointer-events-none" style={{ bottom: 0, left: "50%", transform: "translateX(-50%)", zIndex: 1 }}>
            <img src="/assets/images/basem/basem_rb.svg" alt="" className="pointer-events-none" style={{ height: "400px", width: "auto" }} />
            <img src="/assets/images/basem/Basem_r.svg" alt="" className="pointer-events-none" style={{ height: "350px", width: "auto", marginBottom: "0.1rem" }} />
          </div>

          {/* Basem Image */}
          <img
            src={slideVisuals[currentSlide]}
            alt={isBasemSlide ? "Basem" : slides[currentSlide].title}
            className="basem-image relative z-[2]"
            style={{
              width: "auto",
              height: isBasemSlide ? "min(860px, calc(100vh - 120px))" : "min(760px, calc(100vh - 190px))",
              maxHeight: isBasemSlide ? "min(860px, calc(100vh - 120px))" : "min(760px, calc(100vh - 190px))",
              objectFit: "contain",
              objectPosition: "bottom right",
              alignSelf: "flex-end",
              right: "2em",
              opacity: isTransitioning && isBoundaryVisualTransition ? 0 : 1,
              transform: isTransitioning && isBoundaryVisualTransition
                ? "translateY(10px) scale(0.985)"
                : (isBasemSlide ? "translateY(0) scale(1)" : "translateY(0.9rem) scale(1)"),
              transition: "opacity 0.35s ease, transform 0.35s ease, max-height 0.35s ease, height 0.35s ease",
            }}
          />
        </div>

        {/* Right Column - Slider */}
        <div className="flex flex-col justify-center items-center relative" style={{ flex: "1 1 50%", minHeight: "100%" }}>
          <div className="relative w-full flex flex-col items-center gap-6" style={{ maxWidth: "90em", transform: "translateX(-10em) translateY(5em)" }}>
            {/* Text Box */}
            <div className="relative w-full flex flex-col" style={{ backgroundColor: "transparent", border: "3px solid #ffffff", borderRadius: "1.5rem", padding: "3rem 2.5rem 5.5rem 2.5rem", minHeight: "400px" }}>
              <h2
                className="transition-all duration-300"
                style={{
                  fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 700, color: "#84DADE", marginBottom: "1.25rem", lineHeight: 1.2,
                  minHeight: "clamp(60px, 8vw, 80px)",
                  opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? "translateY(10px)" : "translateY(0)",
                }}
              >
                {slides[currentSlide].title}
              </h2>
              <p
                className="transition-all duration-300 flex-1"
                style={{
                  fontSize: "clamp(18px, 1.9vw, 26px)", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.7,
                  opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? "translateY(10px)" : "translateY(0)",
                  transitionDelay: "0.05s",
                }}
              >
                {slides[currentSlide].description}
              </p>

              {/* Arrows */}
              <div className="absolute flex items-center justify-between" style={{ bottom: "1.75rem", left: "2.5rem", right: "2.5rem" }}>
                {currentSlide > 0 ? (
                  <div className="rounded-full p-[0.3rem] flex items-center justify-center transition-all duration-300" style={{ width: "4.5rem", height: "4.5rem", background: "linear-gradient(135deg, #84DADE 0%, #002B49 100%)", opacity: isTransitioning ? 0.5 : 1 }}>
                    <button onClick={handlePrev} className="w-full h-full rounded-full border-none bg-white cursor-pointer flex items-center justify-center relative transition-all duration-300 hover:scale-105" style={{ color: "#002B49", fontSize: "2.75rem", boxShadow: "0 0 0 2px rgba(0,43,73,0.3), 0 2px 8px rgba(0,0,0,0.15)" }}>
                      <span className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, calc(-50% - 2px))", lineHeight: 1 }}>←</span>
                    </button>
                  </div>
                ) : <div style={{ width: "4.5rem" }} />}

                <div className="rounded-full p-[0.3rem] flex items-center justify-center transition-all duration-300" style={{ width: "4.5rem", height: "4.5rem", background: "linear-gradient(135deg, #84DADE 0%, #002B49 100%)", opacity: isTransitioning ? 0.5 : 1 }}>
                  <button onClick={handleNext} className="w-full h-full rounded-full border-none bg-white cursor-pointer flex items-center justify-center relative transition-all duration-300 hover:scale-105" style={{ color: "#002B49", fontSize: "2.75rem", boxShadow: "0 0 0 2px rgba(0,43,73,0.3), 0 2px 8px rgba(0,0,0,0.15)" }}>
                    <span className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, calc(-50% - 2px))", lineHeight: 1 }}>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex gap-2 items-center justify-start w-full">
              {slides.map((_, i) => (
                <div key={i} className="rounded-sm transition-all duration-300" style={{ width: i === currentSlide ? "8rem" : "5rem", height: "0.25rem", backgroundColor: i === currentSlide ? "#FF4438" : "#1ECAD3" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#basem { min-height: auto; height: auto !important; max-height: none !important; padding: 2rem 0; }
          section#basem > div:first-of-type { top: clamp(8rem, 20vh, 12rem); left: 0; }
          section#basem > div:last-of-type { flex-direction: column; }
          .basem-left-column { flex: none; width: 100%; min-height: auto; padding-right: 0; justify-content: center; order: 1; }
          .desktop-bars { display: none; }
          .mobile-bars { display: flex; }
          .basem-image { max-height: 400px; right: 0; }
          section#basem > div:last-of-type > div:last-of-type { flex: none; width: 100%; min-height: auto; padding: 0.5rem 1rem 2rem 1rem; order: 2; margin-top: -1.6rem; }
          section#basem > div:last-of-type > div:last-of-type > div { transform: none; max-width: 100%; }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type { min-height: 280px; padding: 2rem 1.5rem 4rem 1.5rem; }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > h2 { font-size: 28px; min-height: auto; margin-bottom: 1rem; }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > p { font-size: 16px; }
        }
        @media (max-width: 480px) {
          .basem-image { max-height: 300px; }
          .mobile-bars img:first-child { height: 300px; }
          .mobile-bars img:last-child { height: 250px; }
        }
      `}</style>
    </section>
  );
};

export default Basem;
