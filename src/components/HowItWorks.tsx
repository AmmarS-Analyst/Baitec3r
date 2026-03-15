import { useState, useRef, useEffect, type FC } from "react";

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

const SLIDE_DURATION_MS = 550;
const TRACK_TRANSITION = "transform 0.55s cubic-bezier(0.32, 0.72, 0, 1)";
const N = steps.length;

// Infinite loop track: [clone last, 0, 1, 2, 3, 4, clone first] (indices 0..6; real steps at 1..5)
const loopImages = [
  stepImages[N - 1],
  ...stepImages,
  stepImages[0],
];
const loopAlts = [steps[N - 1].title, ...steps.map((s) => s.title), steps[0].title];

const HowItWorks: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [trackIndex, setTrackIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentBoxRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const swipeStartXRef = useRef<number | null>(null);
  const swipeLastXRef = useRef<number | null>(null);
  const snapTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (snapTimeoutRef.current != null) clearTimeout(snapTimeoutRef.current);
    };
  }, []);

  const handleStepChange = (step: number) => {
    if (step === activeStep || isTransitioning) return;

    const fromEndToStart = activeStep === N - 1 && step === 0;
    const fromStartToEnd = activeStep === 0 && step === N - 1;

    if (contentBoxRef.current) {
      contentBoxRef.current.style.transition = "opacity 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      contentBoxRef.current.style.opacity = "0";
    }

    if (fromEndToStart) {
      setIsTransitioning(true);
      setActiveStep(0);
      setTrackIndex(6);
      snapTimeoutRef.current = window.setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "none";
        setTrackIndex(1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (trackRef.current) trackRef.current.style.transition = TRACK_TRANSITION;
            setIsTransitioning(false);
          });
        });
      }, SLIDE_DURATION_MS);
    } else if (fromStartToEnd) {
      setIsTransitioning(true);
      setActiveStep(N - 1);
      setTrackIndex(0);
      snapTimeoutRef.current = window.setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "none";
        setTrackIndex(5);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (trackRef.current) trackRef.current.style.transition = TRACK_TRANSITION;
            setIsTransitioning(false);
          });
        });
      }, SLIDE_DURATION_MS);
    } else {
      setActiveStep(step);
      setTrackIndex(step + 1);
    }

    const t = setTimeout(() => {
      if (contentBoxRef.current) {
        contentBoxRef.current.style.transition = "opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        contentBoxRef.current.style.opacity = "1";
      }
    }, 350);
    return () => clearTimeout(t);
  };

  const goNext = () => handleStepChange(activeStep === N - 1 ? 0 : activeStep + 1);
  const goPrev = () => handleStepChange(activeStep === 0 ? N - 1 : activeStep - 1);

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
    <section id="how-it-works" className="scroll-reveal hiw-section bg-white">
      {/* Header */}
      <div className="bg-white text-center scroll-reveal-item scroll-reveal-item--d1" style={{ padding: "clamp(0.5rem, 1vw, 1rem) clamp(1rem, 3vw, 2rem) clamp(3rem, 5vw, 5rem)" }}>
        <h2 style={{ fontSize: "clamp(40px, 6vw, 68px)", fontWeight: 700, color: "#002B49", lineHeight: 1.2, margin: 0 }}>
          From setup to full control
        </h2>
      </div>

      {/* Content - navy area needs enough height for text box + timeline */}
      <div className="hiw-navy-bg scroll-reveal-item scroll-reveal-item--d2" style={{ background: "#002B49", padding: "clamp(2.5rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem) 0", overflow: "visible" }}>
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
                className="mb-6 hiw2-content-box"
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
              <div className="hiw2-timeline-wrap relative pt-3">
                <div className="hiw2-timeline-line absolute h-[2px] bg-white z-0" style={{ top: "clamp(24px, 3vw, 36px)", left: "5%", right: "5%" }} />
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

              {/* Mobile / tablet stepper: single circle + left/right arrows + straight line */}
              <div className="hiw2-stepper-mobile lg:hidden mt-6 relative flex items-center justify-between gap-4 w-full max-w-[380px] mx-auto">
                <div className="hiw2-stepper-line absolute left-[9%] right-[9%]" />
                <button
                  type="button"
                  onClick={goPrev}
                  className="hiw2-stepper-btn flex items-center justify-center"
                >
                  <span>&larr;</span>
                </button>
                <div className="flex flex-col items-center gap-1 z-[1]">
                  <div className="hiw2-stepper-circle flex items-center justify-center">
                    <span>{activeStep + 1}</span>
                  </div>
                  <span className="hiw2-stepper-step text-white/90 text-sm font-semibold" style={{ opacity: 0.78 }}>
                    Step {activeStep + 1}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={goNext}
                  className="hiw2-stepper-btn flex items-center justify-center"
                >
                  <span>&rarr;</span>
                </button>
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
              {/* Mobile: viewport with sliding screen carousel + subtle phone motion */}
              <div
                className="hiw2-phone-wrap relative z-[3] flex justify-end items-end"
                style={{
                  height: "clamp(26rem, 46vw, 41rem)",
                  paddingRight: "0rem",
                }}
              >
                <div
                  className="hiw2-phone-viewport"
                  style={{
                    width: "clamp(21em, 31vw, 28em)",
                    transform: "translate(2.75rem, -4.25rem)",
                    transition: "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)",
                  }}
                >
                  <div
                    ref={trackRef}
                    className="hiw2-phone-screen-track"
                    style={{
                      transform: `translateX(-${trackIndex * (100 / 7)}%)`,
                      transition: TRACK_TRANSITION,
                    }}
                  >
                    {loopImages.map((src, i) => (
                      <div key={i} className="hiw2-phone-screen-slide">
                        <img
                          src={src}
                          alt={loopAlts[i]}
                          className="hiw-phone-img"
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "168%",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Shadow under phone */}
              <div className="absolute bottom-0 left-0 right-0 overflow-visible pointer-events-none" style={{ height: "8.5rem", zIndex: 2 }}>
                <img src="/assets/images/hero/shadow_1.svg" alt="Shadow" className="absolute pointer-events-none hiw2-phone-shadow" style={{ bottom: "2.2rem", left: "90%", transform: "translateX(-50%) rotate(-6deg)", width: "clamp(30em, 50vw, 40em)", height: "auto", opacity: 0.78 }} />
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

        /* Scroll animations – desktop/laptop vs tablet/mobile */
        /* Text box: desktop fade in from left, mobile smooth fade up */
        .hiw2-content-box {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .scroll-reveal--visible .hiw2-content-box {
          opacity: 1;
          transform: translateY(0);
        }
        @media (min-width: 1024px) {
          .hiw2-content-box {
            transform: translateX(-42px);
          }
          .scroll-reveal--visible .hiw2-content-box {
            transform: translateX(0);
          }
        }

        /* Timeline buttons: appear one by one after text box */
        .hiw2-timeline-wrap {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease-out, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: 0.28s;
        }
        .scroll-reveal--visible .hiw2-timeline-wrap {
          opacity: 1;
          transform: translateY(0);
        }
        .hiw2-timeline-line {
          transform-origin: left center;
          transform: scaleX(0);
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: 0.3s;
        }
        .scroll-reveal--visible .hiw2-timeline-line {
          transform: scaleX(1);
        }
        .hiw2-step {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.45s ease-out, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .scroll-reveal--visible .hiw2-step:nth-child(1) { transition-delay: 0.32s; opacity: 1; transform: translateY(0); }
        .scroll-reveal--visible .hiw2-step:nth-child(2) { transition-delay: 0.44s; opacity: 1; transform: translateY(0); }
        .scroll-reveal--visible .hiw2-step:nth-child(3) { transition-delay: 0.56s; opacity: 1; transform: translateY(0); }
        .scroll-reveal--visible .hiw2-step:nth-child(4) { transition-delay: 0.68s; opacity: 1; transform: translateY(0); }
        .scroll-reveal--visible .hiw2-step:nth-child(5) { transition-delay: 0.80s; opacity: 1; transform: translateY(0); }

        /* Bars + phone: desktop bars from bottom then phone, mobile bars from left + phone from right */
        .hiw2-setup-bars {
          bottom: 0;
          right: -1rem;
          width: auto;
          height: 38em;
          z-index: 1;
          opacity: 0;
          transform: translateY(46px);
          transition: opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: 0.35s;
        }
        .hiw2-phone-wrap {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: 0.82s;
        }
        /* Sliding phone screens: viewport clips, track slides horizontally */
        .hiw2-phone-viewport {
          overflow: hidden;
          flex-shrink: 0;
        }
        .hiw2-phone-screen-track {
          display: flex;
          flex-direction: row;
          width: 700%;
          will-change: transform;
        }
        .hiw2-phone-screen-slide {
          flex: 0 0 14.2857%;
          min-width: 14.2857%;
          box-sizing: border-box;
        }
        .scroll-reveal--visible .hiw2-setup-bars {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-reveal--visible .hiw2-phone-wrap {
          opacity: 1;
          transform: translateY(0);
        }

        .hiw2-swipe-hint { display: none; font-size: 0.95rem; letter-spacing: 0.01em; }

        /* Mobile stepper: straight line + circle + arrows */
        .hiw2-stepper-btn {
          width: 2.15rem;
          height: 2.15rem;
          border-radius: 999px;
          border: 2px solid #ffffff;
          background: #ffffff;
          color: #002B49;
          font-size: 1.25rem;
          margin-top: -1.6rem;
          transition: opacity 0.25s ease-out, background-color 0.25s ease-out, color 0.25s ease-out, transform 0.25s ease-out;
        }
        .hiw2-stepper-btn:not(:disabled):hover {
          opacity: 1;
          background-color: #f5f5f5;
          color: #002B49;
          transform: translateY(-1px);
        }
        .hiw2-stepper-btn:not(:disabled):active {
          background-color: #FF4438;
          border-color: #FF4438;
          color: #FFFFFF;
        }
        .hiw2-stepper-btn:disabled {
          opacity: 1;
        }
        .hiw2-stepper-circle {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 999px;
          border: 2px solid #ffffff;
          background: #84DADE;
          color: #002B49;
          font-weight: 700;
          font-size: 1.1rem;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease-out;
          margin-top: -0.2rem;
        }
        .scroll-reveal--visible .hiw2-stepper-circle {
          transform: translateY(0);
        }

        .hiw2-stepper-line {
          height: 2px;
          background-color: rgba(255,255,255,0.9);
          top: calc(50% - 1rem);
          transform: none;
        }

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
            transform: translateX(-60%);
            bottom: 0;
          }
          .hiw-section.scroll-reveal--visible .hiw2-setup-bars {
            transform: translateX(-50%);
          }

          /* Center the phone block and remove the desktop push-right feel */
          .hiw2-phone-wrap {
            width: 100%;
            justify-content: center !important;
            align-items: flex-start !important;
            height: clamp(22rem, 52vw, 30rem) !important;
          }
          .hiw2-phone-wrap .hiw2-phone-viewport {
            max-width: 330px;
            width: 100%;
            transform: translate(0, -1.5rem) !important;
          }

          .hiw2-content-column > div:first-of-type { width: 85%; max-width: 400px; margin-left: auto; margin-right: auto; padding: 1.5rem 1.25rem; }
          .hiw2-content-column > div:first-of-type > h3 { font-size: 24px; min-height: 3.3rem; }
          .hiw2-content-column > div:first-of-type > p { font-size: 15px; min-height: 5.4rem; }
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
          .hiw2-phone-wrap .hiw2-phone-viewport { max-width: 280px; transform: translate(0, -1.15rem) !important; }
          .hiw2-setup-bars { height: clamp(22em, 64vw, 30em); }
          .hiw2-content-column > div:first-of-type { padding: 1.25rem 1rem; width: 90%; max-width: 350px; }
          .hiw2-content-column > div:first-of-type > h3 { font-size: 22px; min-height: 3.1rem; }
          .hiw2-content-column > div:first-of-type > p { font-size: 13px; min-height: 5rem; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
