import type { FC } from "react";

const features = [
  { title: "AI-powered automation", desc: "BaiTech uses AI to handle rent tracking, maintenance requests, and daily updates through WhatsApp, reducing manual follow-ups.", icon: "ai.svg", gradientDirection: "135deg" },
  { title: "Everything in one system", desc: "Units, tenants, rent records, and maintenance are all managed from one connected platform, eliminating scattered tools and spreadsheets.", icon: "system.svg", gradientDirection: "45deg" },
  { title: "Clear visibility and control", desc: "Get a real-time view of unit status, rent activity, tenant details, and maintenance progress so you always know what's happening.", icon: "clear.svg", gradientDirection: "90deg" },
  { title: "Less manual work", desc: "Automated processes and structured data reduce the need for constant calls, messages, and manual tracking.", icon: "lmw.svg", gradientDirection: "180deg" },
  { title: "24/7 assistance", desc: "Basem, BaiTech's AI assistant, is available 24/7 on WhatsApp to answer questions, provide updates, and take action when needed.", icon: "247.svg", gradientDirection: "225deg" },
  { title: "Built for real property workflows", desc: "BaiTech is designed around how property owners actually manage their properties, not generic software features.", icon: "built.svg", gradientDirection: "270deg" },
];

const NewFeatured: FC = () => {
  return (
    <section id="newfeatured" className="scroll-reveal py-[120px] bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mx-auto pb-[60px] max-w-[910px] scroll-reveal-item scroll-reveal-item--d1">
          <h2 className="leading-none" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#002B49", lineHeight: 1, marginTop: "1rem" }}>
            Why property owners choose BaiTech.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {features.map((feature, idx) => {
            const delayClass = `scroll-reveal-item scroll-reveal-item--d${Math.min(idx + 1, 8)}`;
            return (
            <div
              key={idx}
              className={`group/card relative h-full cursor-pointer overflow-hidden ${delayClass}`}
              style={{ background: "#002B49", padding: "clamp(36px, 4vw, 56px) clamp(28px, 3vw, 44px)", borderRadius: "20px", isolation: "isolate" }}
            >
              {/* Gradient overlay - extends out so anti-aliased edge is clipped away, no dark seam */}
              <div
                className="absolute -inset-[3px] opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                style={{ background: `linear-gradient(${feature.gradientDirection}, #FFFFFF 0%, #84DADE 100%)`, borderRadius: "23px" }}
                aria-hidden
              />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8" style={{ width: "76px", height: "76px", borderRadius: "50%" }}>
                  <img src={`/assets/images/icons/${feature.icon}`} alt={feature.title} className="icon-img w-[60px] h-[60px] object-contain transition-all duration-1000 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/card:scale-110 group-hover/card:drop-shadow-[0_0_20px_rgba(255,68,56,1)]" />
                </div>
                <h4 className="card-title mb-7 transition-all duration-1000 ease-[cubic-bezier(0.22,0.61,0.36,1)] text-white group-hover/card:text-[#002B49] group-hover/card:-translate-y-0.5" style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, marginBottom: "1rem" }}>
                  {feature.title}
                </h4>
                <p className="card-desc font-medium transition-all duration-1000 ease-[cubic-bezier(0.22,0.61,0.36,1)] text-white/90 group-hover/card:text-[#002B49]" style={{ fontSize: "16px", lineHeight: 1.5 }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default NewFeatured;
