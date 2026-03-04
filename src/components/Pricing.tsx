import type { FC } from "react";

const Pricing: FC = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Pricing badge */}
        <div className="inline-flex items-center gap-3 bg-baitech-navy rounded-2xl px-10 py-8 shadow-xl">
          <div>
            <p className="text-baitech-teal text-lg font-medium mb-2">Simple pricing</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl lg:text-6xl font-extrabold text-white">BHD 1</span>
              <span className="text-white/70 text-xl font-medium">per unit</span>
            </div>
            <p className="text-white/60 text-sm mt-3">No complicated plans or tiers. Try free for one month.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://app.baitech.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-baitech-red text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:bg-baitech-navy hover:scale-105 shadow-lg"
          >
            Start your free trial
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
