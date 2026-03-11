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
  const swipeStartXRef = useRef<number | null>(null);
  const swipeLastXRef = useRef<number | null>(null);

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

  const goNext = () => handleStepChange(activeStep === steps.length - 1 ? 0 : activeStep + 1);
  const goPrev = () => handleStepChange(activeStep === 0 ? steps.length - 1 : activeStep - 1);

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    swipeStartXRef.current = e.touches[0]?.clientX ?? null;
    swipeLastXRef.current = swipeStartXRef.current;
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    swipeLastXRef.current = e.touches[0]?.clientX ?? swipeLastXRef.current;
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    const startX = swipeStartXRef.current;
    const endX = swipeLastXRef.current;
    swipeStartXRef.current = null;
    swipeLastXRef.current = null;

    if (startX == null || endX == null) return;
    const dx = endX - startX;
    const threshold = 55;
    if (Math.abs(dx) < threshold) return;
    if (dx < 0) goNext();
    else goPrev();
  };

  return (
    <section id="how-it-works" className="hiw-section bg-white">
      {/* Header */}
      <div className="bg-white text-center" style={{ padding: "clamp(0.5rem, 1vw, 1rem) clamp(1rem, 3vw, 2rem) clamp(3rem, 5vw, 5rem)" }}>
        <h2 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 700, color: "#002B49", lineHeight: 1.2, margin: 0 }}>
          From setup to full control
        </h2>
      </div>

      {/* Content - navy area needs enough height for text box + timeline */}
      <div className="hiw-navy-bg" style={{ background: "#002B49", padding: "clamp(2.5rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem) 0", overflow: "visible" }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="hiw2-wrap flex flex-col lg:flex-row items-stretch gap-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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

              <div className="hiw2-swipe-hint text-white/90 text-center mb-4">
                Swipe left / right to see steps
              </div>

              {/* Timeline - more gap between steps */}
              <div className="hiw2-timeline-wrap relative pt-3">
                <div className="absolute h-[2px] bg-white z-0" style={{ top: "clamp(24px, 3vw, 36px)", left: "5%", right: "5%" }} />
                <div className="hiw2-timeline flex justify-between relative z-[1]" style={{ gap: "clamp(0.5rem, 1.5vw, 1.5rem)" }}>
                  {steps.map((step, i) => (
                    <div
                      key={i}
                      className={`hiw2-step flex flex-col items-center cursor-pointer flex-1 transition-all duration-500 ${i === activeStep ? "is-active" : ""}`}
                      onClick={() => handleStepChange(i)}
                    >
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
                      <span className="hiw2-step-label text-center transition-all duration-400 leading-tight" style={{ fontSize: "clamp(9px, 1.1vw, 13px)", fontWeight: 600, color: i === activeStep ? "#FF4438" : "#FFFFFF", width: "clamp(72px, 9vw, 110px)", minHeight: "2.6em" }}>
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
              <img
                src="/assets/images/how_it_works2/setup_bars.svg"
                alt="Setup Bars"
                className="hiw2-setup-bars absolute pointer-events-none"
              />
              {/* Mobile image: pushed more right */}
              <div className="hiw2-phone-wrap relative z-[3] flex justify-end items-end overflow-visible" style={{ height: "clamp(26rem, 46vw, 41rem)", paddingRight: "0rem" }}>
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
        .hiw-section { max-height: 860px; }
        .hiw2-wrap { margin-top: -8rem; }
        .hiw2-setup-bars {
          bottom: 0;
          right: -1rem;
          width: auto;
          height: 38em;
          z-index: 1;
        }
        .hiw2-swipe-hint { display: none; font-size: 0.95rem; letter-spacing: 0.01em; }

        @media (max-width: 1023px) {
          .hiw-section { max-height: none; }
          .hiw2-wrap { margin-top: 0; }
          .hiw2-swipe-hint { display: block; }
          .hiw2-timeline-wrap { display: none; }
        }

        @media (max-width: 1023px) {
          /* Stack as flex on mobile/tablet: phone+bgs first, centered; content below */
          .hiw2-mobile-column {
            order: 1;
            margin-top: 0;
            margin-bottom: 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: clamp(0.5rem, 2vw, 1.25rem);
          }
          .hiw2-content-column { order: 2; width: 100%; padding-left: 0; }

          /* Center bars relative to column and keep visible */
          .hiw2-setup-bars {
            height: clamp(24em, 48vw, 34em);
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            bottom: 0;
          }

          /* Center the phone block and remove the desktop push-right feel */
          .hiw2-phone-wrap {
            width: 100%;
            justify-content: center !important;
            align-items: flex-start !important;
            height: clamp(22rem, 52vw, 30rem) !important;
          }
          .hiw2-phone-wrap > img {
            max-width: 330px;
            width: 100%;
            transform: translate(0rem, -1.5rem) !important;
          }

          .hiw2-content-column > div:first-of-type { width: 85%; max-width: 400px; margin-left: auto; margin-right: auto; padding: 1.5rem 1.25rem; }
          .hiw2-content-column > div:first-of-type > h3 { font-size: 24px; min-height: auto; }
          .hiw2-content-column > div:first-of-type > p { font-size: 15px; min-height: auto; }
          .hiw2-content-column > div:last-of-type { width: 90%; max-width: 420px; margin-left: auto; margin-right: auto; }

          /* Mobile/tablet stepper: swipeable + snap, show active label only */
          .hiw2-timeline {
            overflow-x: auto;
            overflow-y: visible;
            justify-content: flex-start;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding: 0.25rem 0.25rem 0.75rem 0.25rem;
            margin-left: auto;
            margin-right: auto;
            max-width: 100%;
          }
          .hiw2-timeline::-webkit-scrollbar { height: 0; }

          .hiw2-step {
            flex: 0 0 auto;
            width: clamp(72px, 18vw, 96px);
            scroll-snap-align: center;
          }

          .hiw2-step-label { display: none; width: auto !important; min-height: 0 !important; }
          .hiw2-step.is-active .hiw2-step-label { display: block; }
        }
        @media (max-width: 480px) {
          .hiw2-mobile-column { margin-top: 0; margin-bottom: 0; }
          .hiw2-phone-wrap { height: clamp(20rem, 62vw, 26rem) !important; }
          .hiw2-phone-wrap > img { max-width: 280px; transform: translate(0rem, -1.15rem) !important; }
          .hiw2-setup-bars { height: clamp(22em, 64vw, 30em); }
          .hiw2-content-column > div:first-of-type { padding: 1.25rem 1rem; width: 90%; max-width: 350px; }
          .hiw2-content-column > div:first-of-type > h3 { font-size: 22px; }
          .hiw2-content-column > div:first-of-type > p { font-size: 13px; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
