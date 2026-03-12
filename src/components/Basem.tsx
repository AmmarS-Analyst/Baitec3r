import { useState, type FC } from "react";
import basemSvg from "../../fAssets/Basem.svg";
import rentTrackingSvg from "../../fAssets/rent tracking.svg";
import maintenanceSvg from "../../fAssets/maintenence.svg";
import tenantInfoSvg from "../../fAssets/tenant information.svg";
import unitStatusSvg from "../../fAssets/unit status.svg";
import instantSvg from "../../fAssets/Instant.svg";

const slides = [
  { title: "Let Basem handle it", description: "Your Ai property assistant on Whatsapp. Available 24/7." },
  { title: "Rent tracking", description: "Basem keeps rent records up to date, shows payment status, and helps you stay on top of rent without manual follow-ups." },
  { title: "Maintenance management", description: "Tenants send issues directly to Basem. Requests are logged, reviewed, assigned, and tracked until the work is completed." },
  { title: "Tenant information", description: "Basem organizes tenant details including contact information, unit data, rent amount, balance, and lease dates." },
  { title: "Unit status updates", description: "Ask Basem about any unit to instantly know its status, rent situation, or active maintenance." },
  { title: "Instant updates and responses", description: "You can ask Basem questions or request updates anytime, and he responds instantly with clear information." },
];

const slideVisuals = [
  basemSvg,
  rentTrackingSvg,
  maintenanceSvg,
  tenantInfoSvg,
  unitStatusSvg,
  instantSvg,
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
      }, 80);
    }, 420);
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
    <section
      id="basem"
      className="relative flex flex-col lg:flex-row items-stretch justify-start overflow-hidden min-h-[60vh] lg:min-h-[90vh] bg-white basem-single-image p-0 m-0 pl-0 ml-0"
      style={{ paddingLeft: 0, marginLeft: 0 }}
    >
      {/* Navy background - mobile */}
      <div
        className="absolute right-0 bottom-0 bg-[#002B49] z-0 lg:hidden"
        style={{ top: "clamp(8rem, 20vh, 12rem)", left: 0 }}
      />
      {/* Navy background - desktop */}
      <div
        className="absolute right-0 bottom-0 bg-[#002B49] z-0 hidden lg:block"
        style={{
          top: "clamp(10rem, 25vh, 21rem)",
          left: "clamp(15%, 20vw, 20%)",
        }}
      />

      <div className="w-full flex flex-col lg:flex-row items-stretch justify-center lg:justify-start flex-1 min-h-0 min-w-0 gap-0 relative z-10 p-0 m-0 pl-0 ml-0">
        {/* Single image per slide: centred on mobile, flush left on desktop. No bars. */}
        <div
          className="basem-left-column relative flex flex-1 min-w-0 min-h-0 flex-col w-full lg:w-1/2 order-1 lg:order-1 overflow-hidden items-start justify-center lg:justify-start lg:items-start self-stretch p-0 m-0 pl-0 ml-0"
          style={{ minHeight: "clamp(280px, 45vh, 520px)", paddingLeft: 0, marginLeft: 0 }}
        >
          {/* Desktop Bars - hidden (single image layout for all slides) */}
          <div className="desktop-bars absolute inset-0 z-0 pointer-events-none items-end justify-start hidden">
            <img
              src="/assets/images/basem/redbar_left.webp"
              alt=""
              className="absolute h-auto pointer-events-none object-contain object-left-bottom max-w-full"
              style={{
                width: "clamp(16rem, 18vw, 20rem)",
                top: "clamp(12rem, 28vh, 22rem)",
                left: "clamp(12rem, 20vw, 24rem)",
              }}
            />
            <img
              src="/assets/images/basem/bluebar_left.webp"
              alt=""
              className="absolute h-auto pointer-events-none object-contain object-left-bottom max-w-full"
              style={{
                width: "clamp(20rem, 22vw, 25rem)",
                top: "1rem",
                left: 0,
              }}
            />
          </div>

          {/* Mobile Bars - hidden (single image layout for all slides) */}
          <div className="mobile-bars absolute inset-0 z-0 pointer-events-none items-end justify-center gap-[clamp(0.5rem, 2vw, 1rem)] hidden">
            <img
              src="/assets/images/basem/basem_rb.svg"
              alt=""
              className="w-auto pointer-events-none object-contain object-bottom flex-shrink-0"
              style={{ height: "clamp(260px, 44vh, 420px)" }}
            />
            <img
              src="/assets/images/basem/Basem_r.svg"
              alt=""
              className="w-auto pointer-events-none object-contain object-bottom flex-shrink-0"
              style={{ height: "clamp(220px, 38vh, 380px)" }}
            />
          </div>

          {/* Slide image - one per slide, centred on mob, start on desktop */}
          <img
            src={slideVisuals[currentSlide]}
            alt={isBasemSlide ? "Basem" : slides[currentSlide].title}
            className={`basem-image relative z-10 w-auto max-w-full object-contain object-bottom flex-shrink-0 transform-gpu ${
              isTransitioning && isBoundaryVisualTransition ? "opacity-0 translate-y-1 scale-[0.99]" : "opacity-100 scale-100"
            } ${!isBasemSlide ? "lg:translate-y-4" : ""} max-h-[clamp(200px,40vh,320px)] lg:max-h-[min(920px,calc(100vh-80px))]`}
            style={{
              transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        {/* Bottom on mobile, Right on desktop: Slider. Horizontal start, vertical centre. */}
        <div className="flex flex-1 min-w-0 flex-col items-start justify-center w-full lg:w-1/2 order-2 lg:order-2 relative z-10">
          <div
            className="relative w-full flex flex-col items-start justify-center gap-4 lg:gap-6 max-w-[90rem] min-w-0 text-left basem-slider-inner"
            style={{
              marginRight: "clamp(1rem, 2vw, 2rem)",
            }}
          >
            {/* Text Box – margin from top and right so it shows completely */}
            <div
              className="relative w-full max-w-[95%] lg:max-w-full mx-auto lg:mx-0 flex flex-col bg-transparent border-[3px] border-white rounded-2xl min-w-0"
              style={{
                minHeight: "clamp(260px, 42vh, 400px)",
                paddingTop: "clamp(2rem, 3vw, 3rem)",
                paddingLeft: "clamp(1.5rem, 2.5vw, 2.5rem)",
                paddingRight: "clamp(1.5rem, 2.5vw, 2.5rem)",
                paddingBottom: "clamp(5rem, 8vw, 8rem)",
              }}
            >
              <h2
                className={`text-[#84DADE] font-bold leading-tight flex-shrink-0 ${
                  isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                }`}
                style={{
                  transition: "opacity 450ms cubic-bezier(0.4, 0, 0.2, 1), transform 450ms cubic-bezier(0.4, 0, 0.2, 1)",
                  fontSize: "clamp(1.25rem, 4vw, 3.25rem)",
                  marginBottom: "clamp(0.5rem, 1.25vw, 1.25rem)",
                  minHeight: "clamp(2.5rem, 8vw, 5rem)",
                }}
              >
                {slides[currentSlide].title}
              </h2>
              <p
                className={`flex-1 min-h-0 text-white font-normal leading-[1.7] ${
                  isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
                }`}
                style={{
                  transition: "opacity 450ms cubic-bezier(0.4, 0, 0.2, 1) 50ms, transform 450ms cubic-bezier(0.4, 0, 0.2, 1) 50ms",
                  fontSize: "clamp(0.875rem, 1.9vw, 1.625rem)",
                }}
              >
                {slides[currentSlide].description}
              </p>

              {/* Arrows - clamp sizes, no padding on container */}
              <div
                className="absolute flex items-center justify-between flex-shrink-0"
                style={{
                  bottom: "clamp(1rem, 1.5vw, 1.75rem)",
                  left: "clamp(1rem, 2vw, 2.5rem)",
                  right: "clamp(1rem, 2vw, 2.5rem)",
                }}
              >
                {currentSlide > 0 ? (
                  <div
                    className={`rounded-full p-[0.45rem] flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#84DADE] to-[#002B49] ${
                      isTransitioning ? "opacity-50" : "opacity-100"
                    }`}
                    style={{
                      transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                      width: "clamp(3rem, 4.5vw, 4.5rem)",
                      height: "clamp(3rem, 4.5vw, 4.5rem)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="w-full h-full rounded-full border-0 bg-white cursor-pointer flex items-center justify-center relative transition-transform duration-300 hover:scale-105 text-[#002B49] shadow-[0_0_0_2px_rgba(0,43,73,0.3),0_2px_8px_rgba(0,0,0,0.15)] flex-shrink-0"
                      style={{ fontSize: "clamp(1.5rem, 2.75vw, 2.75rem)" }}
                    >
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+2px)] leading-none">←</span>
                    </button>
                  </div>
                ) : (
                  <div style={{ width: "clamp(3rem, 4.5vw, 4.5rem)" }} />
                )}
                <div
                  className={`rounded-full p-[0.45rem] flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-[#84DADE] to-[#002B49] ${
                    isTransitioning ? "opacity-50" : "opacity-100"
                  }`}
                  style={{
                    transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                    width: "clamp(3rem, 4.5vw, 4.5rem)",
                    height: "clamp(3rem, 4.5vw, 4.5rem)",
                  }}
                >
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full h-full rounded-full border-0 bg-white cursor-pointer flex items-center justify-center relative transition-transform duration-300 hover:scale-105 text-[#002B49] shadow-[0_0_0_2px_rgba(0,43,73,0.3),0_2px_8px_rgba(0,0,0,0.15)] flex-shrink-0"
                    style={{ fontSize: "clamp(1.5rem, 2.75vw, 2.75rem)" }}
                  >
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+2px)] leading-none">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress - bars on desktop, dots on mobile only */}
            <div className="basem-progress-bars hidden lg:flex gap-2 items-center justify-start w-full flex-shrink-0">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className="rounded-sm transition-all duration-300 flex-shrink-0"
                  style={{
                    width: i === currentSlide ? "8rem" : "5rem",
                    height: "0.25rem",
                    backgroundColor: i === currentSlide ? "#FF4438" : "#1ECAD3",
                  }}
                />
              ))}
            </div>
            <div className="basem-progress-dots flex lg:hidden gap-2 items-center justify-start w-full flex-shrink-0">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300 flex-shrink-0"
                  style={{
                    width: i === currentSlide ? "0.625rem" : "0.5rem",
                    height: i === currentSlide ? "0.625rem" : "0.5rem",
                    backgroundColor: i === currentSlide ? "#FF4438" : "#1ECAD3",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles (extracted from full section code) */}
      <style>{`
        /* Single image layout: hide bars for all slides */
        section#basem.basem-single-image .desktop-bars,
        section#basem.basem-single-image .mobile-bars {
          display: none !important;
        }

        /* No left padding on section and image column */
        section#basem {
          padding-left: 0 !important;
          margin-left: 0 !important;
        }
        section#basem > div:last-of-type {
          padding-left: 0 !important;
        }
        section#basem .basem-left-column {
          padding-left: 0 !important;
          margin-left: 0 !important;
        }

        /* Desktop + laptop only: slider top margin + 5rem left shift */
        @media (min-width: 1024px) {
          section#basem .basem-slider-inner {
            margin-top: clamp(1.5rem, 4vw, 5rem) !important;
            transform: translateX(-5rem);
          }
        }

        /* Mobile + tablet: stacked layout (same as mobile so slider and image don't intersect) */
        @media (max-width: 1023px) {
          section#basem {
            min-height: auto !important;
            padding: 2rem 0 !important;
          }
          section#basem > div:first-of-type {
            top: clamp(8rem, 20vh, 12rem) !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
          }
          section#basem > div:last-of-type {
            flex-direction: column !important;
            gap: 0 !important;
            width: 100% !important;
          }
          .basem-left-column {
            flex: none !important;
            width: 100% !important;
            min-height: auto !important;
            padding-right: 0 !important;
            padding-bottom: 0 !important;
            display: flex !important;
            align-items: flex-end !important;
            justify-content: center !important;
            order: 1 !important;
            position: relative !important;
          }
          .desktop-bars {
            display: none !important;
          }
          .mobile-bars {
            display: flex !important;
            position: absolute !important;
            bottom: 0 !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 1 !important;
            gap: 1rem !important;
            justify-content: center !important;
            align-items: flex-end !important;
          }
          .basem-image {
            max-height: 400px !important;
            width: auto !important;
            right: auto !important;
            margin-left: auto !important;
            margin-right: auto !important;
            position: relative !important;
            z-index: 2 !important;
          }
          section#basem > div:last-of-type > div:last-of-type {
            flex: none !important;
            width: 100% !important;
            min-height: auto !important;
            padding: 0.5rem 1rem 2rem 1rem !important;
            order: 2 !important;
            margin-top: -1.6rem !important;
          }
          section#basem > div:last-of-type > div:last-of-type > div {
            transform: none !important;
            max-width: 100% !important;
            padding: 0 !important;
          }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type {
            min-height: 280px !important;
            padding: 2rem 1.5rem 4rem 1.5rem !important;
          }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > h2 {
            font-size: 28px !important;
            min-height: auto !important;
            margin-bottom: 1rem !important;
          }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > p {
            font-size: 16px !important;
          }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > div {
            bottom: 1rem !important;
            left: 1.5rem !important;
            right: 1.5rem !important;
          }
          .basem-progress-dots {
            justify-content: center !important;
          }
          .basem-progress-dots > div {
            max-width: 0.625rem !important;
            min-width: 0.5rem !important;
          }
        }
        /* Small mobile tweaks */
        @media (max-width: 480px) {
          section#basem {
            padding: 1.5rem 0 !important;
          }
          .basem-image {
            max-height: 300px !important;
          }
          .mobile-bars img:first-of-type {
            height: 300px !important;
          }
          .mobile-bars img:last-of-type {
            height: 250px !important;
            margin-bottom: 0.1rem !important;
          }
          section#basem > div:last-of-type > div:last-of-type {
            padding: 1.5rem 0.75rem !important;
          }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type {
            min-height: 240px !important;
            padding: 1.5rem 1rem 3.5rem 1rem !important;
          }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > h2 {
            font-size: 24px !important;
          }
          section#basem > div:last-of-type > div:last-of-type > div > div:first-of-type > p {
            font-size: 14px !important;
          }
          .basem-progress-dots {
            justify-content: center !important;
          }
          .basem-progress-dots > div {
            max-width: 0.5rem !important;
            min-width: 0.375rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Basem;
