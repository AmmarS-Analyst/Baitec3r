import { useState, useRef, type FC } from "react";

const steps = [
  { title: "Sign up", description: "Create your account in minutes and securely access your property management dashboard." },
  { title: "Set up", description: "Onboard your units and tenants by adding details or uploading your existing data." },
  { title: "Manage your properties", description: "Get a complete overview of your units, rent activity, availability, and performance from one dashboard." },
  { title: "Manage your tenants", description: "Access organized tenant information, track balances, and monitor lease details with clarity." },
  { title: "Handle maintenance efficiently", description: "Receive maintenance requests, review them, assign providers, set time and cost, and track progress until completion." },
];

const stepImages = [
  "/assets/images/how_it_works2/signup.svg",
  "/assets/images/how_it_works2/seetup.svg",
  "/assets/images/how_it_works2/manage_properties.svg",
  "/assets/images/how_it_works2/manage_tenents.svg",
  "/assets/images/how_it_works2/handle_maintainenece.svg",
];

const HowItWorks: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentBoxRef = useRef<HTMLDivElement>(null);

  const handleStepChange = (step: number) => {
    if (step === activeStep || isTransitioning) return;
    setIsTransitioning(true);
    if (contentBoxRef.current) {
      contentBoxRef.current.style.transition = "opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      contentBoxRef.current.style.opacity = "0";
    }
    setTimeout(() => {
      setActiveStep(step);
      setTimeout(() => {
        setIsTransitioning(false);
        if (contentBoxRef.current) {
          contentBoxRef.current.style.transition = "none";
          contentBoxRef.current.style.opacity = "";
        }
      }, 50);
    }, 300);
  };

  return (
    <section id="how-it-works" className="hiw-section bg-white" style={{ maxHeight: "860px" }}>
      {/* Header */}
      <div className="bg-white text-center" style={{ padding: "clamp(0.5rem, 1vw, 1rem) clamp(1rem, 3vw, 2rem) clamp(3rem, 5vw, 5rem)" }}>
        <h2 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 700, color: "#002B49", lineHeight: 1.2, margin: 0 }}>
          From setup to full control
        </h2>
      </div>

      {/* Content - navy area needs enough height for text box + timeline */}
      <div className="hiw-navy-bg" style={{ background: "#002B49", padding: "clamp(2.5rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem) 0", overflow: "visible" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-4" style={{ marginTop: "-8rem" }}>
            {/* Left Column - pushed toward bottom */}
            <div className="w-full lg:w-1/2 hiw2-content-column flex flex-col justify-end" style={{ paddingLeft: "clamp(0, 2vw, 2rem)", paddingBottom: "clamp(2rem, 3vw, 3rem)" }}>
              {/* Content Box */}
              <div
                ref={contentBoxRef}
                className="mb-6"
                style={{ background: "transparent", border: "1px solid #FFFFFF", borderRadius: "20px", padding: "clamp(1.5rem, 3vw, 2.5rem)", minHeight: "clamp(236px, 24.5vw, 304px)" }}
              >
                <h3 className="flex items-center transition-opacity duration-300" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#84DADE", marginBottom: "1rem", lineHeight: 1.2, minHeight: "clamp(60px, 7.6vw, 90px)" }}>
                  {steps[activeStep].title}
                </h3>
                <p className="transition-opacity duration-300" style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.6, margin: 0, opacity: 0.9, minHeight: "clamp(74px, 9.4vw, 116px)", transitionDelay: "0.05s" }}>
                  {steps[activeStep].description}
                </p>
              </div>

              {/* Timeline - more gap between steps */}
              <div className="relative pt-3">
                <div className="absolute h-[2px] bg-white z-0" style={{ top: "clamp(24px, 3vw, 36px)", left: "5%", right: "5%" }} />
                <div className="flex justify-between relative z-[1]" style={{ gap: "clamp(0.5rem, 1.5vw, 1.5rem)" }}>
                  {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center cursor-pointer flex-1 transition-all duration-500" onClick={() => handleStepChange(i)}>
                      <div
                        className="rounded-full flex items-center justify-center mb-3 relative z-[2] transition-all duration-500"
                        style={{
                          width: "clamp(2.5rem, 3.5vw, 3rem)", height: "clamp(2.5rem, 3.5vw, 3rem)",
                          background: "linear-gradient(135deg, #84DADE 0%, #002B49 100%)",
                          padding: "0.2rem", border: "1px solid #FFFFFF",
                          transform: i === activeStep ? "scale(1.1)" : "scale(1)",
                        }}
                      >
                        <div className="w-full h-full rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: i === activeStep ? "#FF4438" : "#84DADE", boxShadow: "0 0 0 2px rgba(0,43,73,0.3), 0 2px 8px rgba(0,0,0,0.15)" }} />
                      </div>
                      <span className="text-center transition-all duration-400 leading-tight" style={{ fontSize: "clamp(9px, 1.1vw, 13px)", fontWeight: 600, color: i === activeStep ? "#FF4438" : "#FFFFFF", width: "clamp(72px, 9vw, 110px)", minHeight: "2.6em" }}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Phone + Bars */}
            <div className="w-full lg:w-1/2 hiw2-mobile-column relative hiw-right-col" style={{ overflow: "visible" }}>
              {/* Bars: fully visible overflow */}
              <img src="/assets/images/how_it_works2/setup_bars.svg" alt="Setup Bars" className="absolute pointer-events-none" style={{ bottom: 0, right: "-1rem", width: "auto", height: "38em", zIndex: 1 }} />
              {/* Mobile image: pushed more right */}
              <div className="relative z-[3] flex justify-end items-end overflow-visible" style={{ height: "clamp(26rem, 46vw, 41rem)", paddingRight: "0rem" }}>
                <img
                  src={stepImages[activeStep]}
                  alt={steps[activeStep].title}
                  className="transition-all duration-300 hiw-phone-img"
                  style={{
                    width: "clamp(21em, 31vw, 28em)", height: "auto", maxHeight: "168%", objectFit: "contain",
                    opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? "translate(2.75rem, -2rem) scale(0.98)" : "translate(2.75rem, -4.25rem) scale(1)",
                  }}
                />
              </div>
              {/* Shadow under phone */}
              <div className="absolute bottom-0 left-0 right-0 overflow-visible pointer-events-none" style={{ height: "8.5rem", zIndex: 2 }}>
                <img src="/assets/images/hero/shadow_1.svg" alt="Shadow" className="absolute pointer-events-none" style={{ bottom: "2.2rem", left: "90%", transform: "translateX(-50%) rotate(-6deg)", width: "clamp(30em, 50vw, 40em)", height: "auto", opacity: isTransitioning ? 0 : 0.78 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hiw-section { overflow-x: hidden; overflow-y: hidden; }
        .hiw-right-col { overflow: visible !important; }

        @media (max-width: 1023px) {
          .hiw2-mobile-column { order: 1; margin-top: -5rem; margin-bottom: -2rem; }
          .hiw2-content-column { order: 2; width: 100%; padding-left: 0; }
          .hiw2-mobile-column > img[alt="Setup Bars"] { height: 23em; right: 50%; transform: translateX(50%); bottom: 0; }
          .hiw2-mobile-column > div:first-of-type > img { max-width: 330px; width: 100%; transform: translate(2.25rem, -2.25rem) !important; }
          .hiw2-content-column > div:first-of-type { width: 85%; max-width: 400px; margin-left: auto; margin-right: auto; padding: 1.5rem 1.25rem; }
          .hiw2-content-column > div:first-of-type > h3 { font-size: 24px; min-height: auto; }
          .hiw2-content-column > div:first-of-type > p { font-size: 15px; min-height: auto; }
          .hiw2-content-column > div:last-of-type { width: 90%; max-width: 420px; margin-left: auto; margin-right: auto; }
        }
        @media (max-width: 480px) {
          .hiw2-mobile-column { margin-top: -4rem; margin-bottom: -1.5rem; }
          .hiw2-mobile-column > div:first-of-type > img { max-width: 280px; transform: translate(1.9rem, -1.5rem) !important; }
          .hiw2-mobile-column > img[alt="Setup Bars"] { height: 19em; }
          .hiw2-content-column > div:first-of-type { padding: 1.25rem 1rem; width: 90%; max-width: 350px; }
          .hiw2-content-column > div:first-of-type > h3 { font-size: 22px; }
          .hiw2-content-column > div:first-of-type > p { font-size: 13px; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
