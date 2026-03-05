import type { FC } from "react";

const ManageBuilding: FC = () => {
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
                <span className="inline-block font-extrabold" style={{ letterSpacing: "0.3px" }}>
                  <span className="word-seq word-seq-1">BUILDING,</span>{" "}
                  <span className="word-seq word-seq-2">HOME,</span>{" "}
                  <span style={{ color: "#FFFFFF" }}>OR</span>{" "}
                  <span className="word-seq word-seq-3">APARTMENT</span>
                </span>
              </span>

              <span className="block mt-2 text-left" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 300, fontSize: "0.84em" }}>
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
        .word-seq {
          color: #ffffff;
          -webkit-text-fill-color: #ffffff;
        }

        .word-seq-1 {
          animation: wordSeqCyan 7.2s linear infinite;
        }

        .word-seq-2 {
          animation: wordSeqRed 7.2s linear infinite;
        }

        .word-seq-3 {
          animation: wordSeqCyan3 7.2s linear infinite;
        }

        .manage-text-card {
          position: relative;
          overflow: hidden;
        }

        /* Vertical shine (right) - tapered with bright core */
        .manage-text-card::before {
          content: "";
          position: absolute;
          top: 46%;
          right: -0.6px;
          width: 2.4px;
          height: 28%;
          border-radius: 999px;
          background:
            radial-gradient(
              ellipse at center,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,0.95) 18%,
              rgba(255,255,255,0.38) 45%,
              rgba(255,255,255,0) 76%
            ),
            linear-gradient(
              180deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.95) 24%,
              rgba(255,255,255,0.95) 76%,
              rgba(255,255,255,0) 100%
            );
          box-shadow:
            0 0 10px rgba(255,255,255,0.52),
            0 0 16px rgba(255,255,255,0.28);
          filter: blur(0.15px);
          opacity: 0.98;
          transform-origin: center;
          pointer-events: none;
          z-index: 5;
        }

        /* Horizontal shine (bottom) - tapered with bright core */
        .manage-text-card::after {
          content: "";
          position: absolute;
          bottom: -0.6px;
          right: 6%;
          width: 42%;
          height: 2.4px;
          border-radius: 999px;
          background:
            radial-gradient(
              ellipse at center,
              rgba(255,255,255,1) 0%,
              rgba(255,255,255,0.95) 20%,
              rgba(255,255,255,0.36) 46%,
              rgba(255,255,255,0) 76%
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.95) 24%,
              rgba(255,255,255,0.95) 76%,
              rgba(255,255,255,0) 100%
            );
          box-shadow:
            0 0 10px rgba(255,255,255,0.5),
            0 0 16px rgba(255,255,255,0.26);
          filter: blur(0.15px);
          opacity: 0.97;
          transform-origin: center;
          pointer-events: none;
          z-index: 5;
        }
        .manage-card-radius-glow {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          pointer-events: none;
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow:
            0 0 8px rgba(132,218,222,0.14),
            0 0 18px rgba(132,218,222,0.1),
            inset 0 0 8px rgba(132,218,222,0.08);
          animation: manage-outline-breathe 4.4s ease-in-out infinite;
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
          stroke: rgba(255, 255, 255, 0);
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
          stroke: rgba(255,255,255,0.96);
          filter: drop-shadow(0 0 16px rgba(255,255,255,1));
          animation-delay: -0.55s;
        }

        .manage-outline-snake-blue-head {
          stroke: rgba(255,255,255,1);
          filter: drop-shadow(0 0 16px rgba(255,255,255,1));
        }

        .manage-outline-snake-red-tail {
          stroke: rgba(255,255,255,0.96); 
          filter: drop-shadow(0 0 16px rgba(255,255,255,1));
          animation-delay: 1.45s;
          stroke-dasharray: 260 2200; 
        }

        .manage-outline-snake-red-head {
          stroke: rgba(255,255,255,1);
          filter: drop-shadow(0 0 16px rgba(255,255,255,1));
          animation-delay: 1.66s;
          stroke-dasharray: 96 2200; 
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

        @keyframes wordSeqCyan {
          0%   { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
          2%   { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
          14%  { color: #84dade; -webkit-text-fill-color: #84dade; text-shadow: 0 0 18px rgba(132,218,222,0.45), 0 0 36px rgba(132,218,222,0.2); }
          22%  { color: #84dade; -webkit-text-fill-color: #84dade; text-shadow: 0 0 18px rgba(132,218,222,0.45), 0 0 36px rgba(132,218,222,0.2); }
          32%  { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
          100% { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
        }

        @keyframes wordSeqRed {
          0%   { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
          30%  { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
          42%  { color: #ff4438; -webkit-text-fill-color: #ff4438; text-shadow: 0 0 18px rgba(255,68,56,0.45), 0 0 36px rgba(255,68,56,0.2); }
          50%  { color: #ff4438; -webkit-text-fill-color: #ff4438; text-shadow: 0 0 18px rgba(255,68,56,0.45), 0 0 36px rgba(255,68,56,0.2); }
          62%  { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
          100% { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
        }

        @keyframes wordSeqCyan3 {
          0%   { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
          62%  { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
          74%  { color: #84dade; -webkit-text-fill-color: #84dade; text-shadow: 0 0 18px rgba(132,218,222,0.45), 0 0 36px rgba(132,218,222,0.2); }
          82%  { color: #84dade; -webkit-text-fill-color: #84dade; text-shadow: 0 0 18px rgba(132,218,222,0.45), 0 0 36px rgba(132,218,222,0.2); }
          92%  { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
          100% { color: #ffffff; -webkit-text-fill-color: #ffffff; text-shadow: 0 0 12px rgba(255,255,255,0.12); }
        }

      `}</style>
    </section>
  );
};

export default ManageBuilding;
