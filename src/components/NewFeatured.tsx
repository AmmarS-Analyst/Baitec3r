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
    <section id="newfeatured" className="py-[120px] bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mx-auto pb-[60px] max-w-[910px]">
          <h2 className="leading-none" style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: "#002B49", lineHeight: 1, marginTop: "1rem" }}>
            Why property owners choose BaiTech or A system built for clarity and control.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-2xl h-full cursor-pointer transition-all duration-1000"
              style={{ background: "#002B49", padding: "clamp(36px, 4vw, 56px) clamp(28px, 3vw, 44px)", borderRadius: "20px" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = `linear-gradient(${feature.gradientDirection}, #FFFFFF 0%, #84DADE 100%)`;
                el.querySelectorAll<HTMLElement>(".card-title, .card-desc").forEach(t => { t.style.color = "#002B49"; t.style.transform = "translateY(-2px)"; });
                const icon = el.querySelector<HTMLElement>(".icon-img");
                if (icon) { icon.style.filter = "drop-shadow(0 0 20px rgba(255, 68, 56, 1.2))"; icon.style.transform = "scale(1.1)"; }
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "#002B49";
                el.querySelectorAll<HTMLElement>(".card-title, .card-desc").forEach(t => { t.style.color = "#FFFFFF"; t.style.transform = "translateY(0)"; });
                const icon = el.querySelector<HTMLElement>(".icon-img");
                if (icon) { icon.style.filter = "none"; icon.style.transform = "scale(1)"; }
              }}
            >
              <div className="flex items-center justify-center mb-8" style={{ width: "76px", height: "76px", borderRadius: "50%" }}>
                <img src={`/assets/images/icons/${feature.icon}`} alt={feature.title} className="icon-img transition-all duration-1000" style={{ width: "60px", height: "60px", objectFit: "contain" }} />
              </div>
              <h4 className="card-title mb-7 transition-all duration-1000" style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "#FFFFFF", marginBottom: "1rem" }}>
                {feature.title}
              </h4>
              <p className="card-desc font-medium transition-all duration-1000" style={{ fontSize: "16px", color: "#FFFFFF", lineHeight: 1.5, opacity: 0.9 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewFeatured;
