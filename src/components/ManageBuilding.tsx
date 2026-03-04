import { useEffect, useState, type FC } from "react";

const words = ["BUILDING", "HOME", "APARTMENT"];

const ManageBuilding: FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [wordDirection, setWordDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
      setWordDirection((prev) => (prev === "left" ? "right" : "left"));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="manage-building" className="relative overflow-hidden" style={{ backgroundColor: "#002B49", padding: "clamp(2rem, 3.4vw, 3rem) 0 0" }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-14">
        {/* Left: Text */}
        <div className="flex-1 relative z-10 lg:-translate-y-5 transition-transform duration-300">
          <div
            className="manage-text-card relative inline-block rounded-2xl"
            style={{
              padding: "clamp(2rem, 4vw, 3rem)",
              minWidth: "clamp(340px, 42vw, 520px)",
              minHeight: "clamp(240px, 28vw, 320px)",
              background: "#00213A",
              border: "1px solid rgba(132,218,222,0.2)",
              boxShadow: "0 14px 32px rgba(0,0,0,0.35)",
            }}
          >
            <span className="manage-card-radius-glow" />

            <h2 className="relative z-[2]" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
              <span className="block text-left" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 300 }}>
                Manage your
              </span>

              <span className="relative block mt-2 text-left" style={{ minHeight: "clamp(44px, 5.6vw, 62px)" }}>
                <span
                  key={`${currentWord}-${wordDirection}`}
                  className={`inline-block font-extrabold ${wordDirection === "left" ? "manage-word-sweep-ltr" : "manage-word-sweep-rtl"}`}
                  style={{
                    color: "#FFFFFF",
                    textShadow: "0 0 16px rgba(132,218,222,0.45), 0 0 30px rgba(255,255,255,0.22)",
                    letterSpacing: "0.3px",
                  }}
                >
                  {words[currentWord]}
                </span>
              </span>

              <span className="block mt-2 text-left" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 300, fontSize: "0.84em", fontStyle: "italic" }}>
                with ease
              </span>
            </h2>
          </div>
        </div>

        {/* Right: Blue bar (left) + Red bar (right), bottoms aligned, small gap */}
        <div className="flex-1 flex justify-center lg:justify-end relative self-end">
          <div className="flex items-end overflow-visible" style={{ gap: "clamp(6px, 0.75vw, 12px)", height: "clamp(390px, 45vw, 590px)" }}>
            {/* Blue bar - left, taller */}
            <div className="relative overflow-visible" style={{ height: "100%" }}>
              <img
                src="/assets/images/manage/manage_blue_bar.svg"
                alt="Blue Bar"
                className="animate-glow-pulse"
                style={{
                  height: "100%",
                  width: "auto",
                  filter: "drop-shadow(0 0 15px rgba(132,218,222,0.4))",
                }}
              />
              <svg className="manage-bar-outline-svg manage-bar-outline-svg-blue" viewBox="0 0 381.21 1198.53" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 380.13 L381.21 0 L381.21 1198.53 L0 1198.53 Z" className="manage-outline-base-blue" />
                <path d="M0 380.13 L381.21 0 L381.21 1198.53 L0 1198.53 Z" className="manage-outline-snake-tail manage-outline-snake-blue-tail" />
                <path d="M0 380.13 L381.21 0 L381.21 1198.53 L0 1198.53 Z" className="manage-outline-snake-head manage-outline-snake-blue-head" />
              </svg>
            </div>
            {/* Red bar - right, shorter, bottom-aligned */}
            <div className="relative overflow-visible" style={{ height: "66%" }}>
              <img
                src="/assets/images/manage/manage_red_bar.svg"
                alt="Red Bar"
                className="animate-glow-pulse"
                style={{
                  height: "100%",
                  width: "auto",
                  filter: "drop-shadow(0 0 15px rgba(255,68,56,0.4))",
                  animationDelay: "1.5s",
                }}
              />
              <svg className="manage-bar-outline-svg manage-bar-outline-svg-red" viewBox="0 0 398.77 789.31" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 0 L398.77 398.77 L398.77 789.31 L0 789.31 Z" className="manage-outline-base-red" />
                <path d="M0 0 L398.77 398.77 L398.77 789.31 L0 789.31 Z" className="manage-outline-snake-tail manage-outline-snake-red-tail" />
                <path d="M0 0 L398.77 398.77 L398.77 789.31 L0 789.31 Z" className="manage-outline-snake-head manage-outline-snake-red-head" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .manage-word-sweep-ltr {
          animation: manage-word-sweep-ltr 0.9s cubic-bezier(0.23, 1, 0.32, 1) both;
        }

        .manage-word-sweep-rtl {
          animation: manage-word-sweep-rtl 0.9s cubic-bezier(0.23, 1, 0.32, 1) both;
        }

        .manage-card-radius-glow {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          pointer-events: none;
          border: 1px solid rgba(132,218,222,0.2);
          box-shadow:
            0 0 8px rgba(132,218,222,0.2),
            0 0 18px rgba(132,218,222,0.12),
            inset 0 0 8px rgba(132,218,222,0.08);
          animation: manage-outline-breathe 3.8s ease-in-out infinite;
          z-index: 1;
        }

        .manage-bar-outline-svg {
          position: absolute;
          inset: -2px;
          width: calc(100% + 2px);
          height: calc(100% + 2px);
          pointer-events: none;
        }

        .manage-bar-outline-svg-blue {
          transform: translate(1.5px, -1px);
        }

        .manage-bar-outline-svg-red {
          transform: translate(1px, 1px);
        }

        .manage-outline-base-blue,
        .manage-outline-base-red {
          fill: none;
          stroke-width: 2.5;
          stroke: rgba(255,255,255,0.16);
        }

        .manage-outline-snake-tail,
        .manage-outline-snake-head {
          fill: none;
          stroke-linecap: round;
          animation: manage-snake-outline-run 4.3s linear infinite;
        }

        .manage-outline-snake-tail {
          stroke-width: 5.8;
          stroke-dasharray: 180 2200;
        }

        .manage-outline-snake-head {
          stroke-width: 6.2;
          stroke-dasharray: 72 2200;
        }

        .manage-outline-snake-blue-tail {
          stroke: rgba(132,218,222,0.6);
          filter: drop-shadow(0 0 14px rgba(132,218,222,1));
          animation-delay: -0.22s;
        }

        .manage-outline-snake-blue-head {
          stroke: rgba(255,255,255,1);
          filter: drop-shadow(0 0 16px rgba(255,255,255,1));
        }

        .manage-outline-snake-red-tail {
          stroke: rgba(255,68,56,0.58);
          filter: drop-shadow(0 0 14px rgba(255,68,56,1));
          animation-delay: 1.45s;
        }

        .manage-outline-snake-red-head {
          stroke: rgba(255,255,255,1);
          filter: drop-shadow(0 0 16px rgba(255,255,255,1));
          animation-delay: 1.66s;
        }

        @keyframes manage-word-sweep-ltr {
          0% {
            opacity: 0;
            transform: translateX(-18px);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes manage-word-sweep-rtl {
          0% {
            opacity: 0;
            transform: translateX(18px);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes manage-snake-outline-run {
          0% { stroke-dashoffset: 0; opacity: 0; }
          8% { opacity: 1; }
          85% { opacity: 1; }
          100% { stroke-dashoffset: -2350; opacity: 0; }
        }

        @keyframes manage-outline-breathe {
          0%, 100% {
            opacity: 0.55;
          }
          50% {
            opacity: 0.95;
          }
        }

      `}</style>
    </section>
  );
};

export default ManageBuilding;
