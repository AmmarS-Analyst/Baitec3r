import { useState, type FC } from "react";

const faqs = [
  { question: "Who is BaiTech for?", answer: "BaiTech is built for property owners, landlords, and property managers who want clearer oversight and less daily manual work." },
  { question: "Who is Basem and how does he help me?", answer: "Basem is BaiTech's AI assistant. You can talk to him on WhatsApp to ask questions, request updates, or take action. He helps organize information, provides instant updates, and assists with daily property management tasks." },
  { question: "Do I need technical knowledge to use BaiTech?", answer: "No. BaiTech is designed to be simple and easy to use, even if you've never used property management software before." },
  { question: "Can I manage multiple properties and units?", answer: "Yes. BaiTech allows you to manage multiple properties and units from one dashboard." },
  { question: "How does maintenance management work?", answer: "Tenants can take a photo of the issue and send it through the system. You review the request, choose the maintenance provider, set the time and price, and then follow the status of the maintenance until the work is completed." },
  { question: "Is BaiTech available on mobile?", answer: "Yes. You can access BaiTech through the app, and interact with Basem directly on WhatsApp." },
  { question: "How much does it cost to use BaiTech?", answer: "BaiTech is priced at 1 BHD per unit, with no complicated plans or tiers." },
  { question: "Is there a free trial?", answer: "Yes. You can try BaiTech free for one month before committing." },
];

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#002B49", lineHeight: 1.2 }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3">
              <div
                className="rounded-xl overflow-hidden transition-shadow duration-300"
                style={{ background: "#FFFFFF", border: "1px solid #E9ECEF" }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,43,73,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between bg-transparent border-none cursor-pointer text-left"
                >
                  <h3 className="m-0" style={{ fontSize: "clamp(14px, 2vw, 18px)", fontWeight: 700, color: "#002B49" }}>
                    {faq.question}
                  </h3>
                  <div className="shrink-0 ml-4 w-6 h-6 flex items-center justify-center transition-transform duration-400" style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <i className={`ph ph-${openIndex === index ? "minus" : "plus"}`} style={{ fontSize: "clamp(20px, 3vw, 24px)", color: "#1ECAD3" }} />
                  </div>
                </button>
                <div className="transition-all duration-400 overflow-hidden" style={{ maxHeight: openIndex === index ? "500px" : "0", opacity: openIndex === index ? 1 : 0 }}>
                  <div className="p-4" style={{ borderTop: "1px solid #E9ECEF", background: "#F8F9FA" }}>
                    <p className="m-0 font-medium leading-relaxed" style={{ fontSize: "clamp(14px, 1.5vw, 16px)", color: "#666666", lineHeight: 1.8 }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
