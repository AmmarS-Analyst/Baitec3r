import type { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-five" style={{ width: "100%", overflowX: "hidden" }}>
      <div className="relative z-[1]">
        {/* Main Footer */}
        <div style={{ paddingTop: "80px" }}>
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="flex gap-6 justify-between flex-wrap lg:flex-nowrap footer-main-content"
              style={{ borderTop: "3px solid #1ECAD3", borderBottom: "3px solid #1ECAD3", padding: "80px 0" }}
            >
              {/* Column 1 - Logo and Contact */}
              <div>
                <a href="#home" style={{ marginBottom: "1.5rem", display: "inline-block" }}>
                  <img src="/assets/images/logo/Logo.svg" alt="Baitech Logo" style={{ height: "60px", width: "auto" }} />
                </a>
                <p className="max-w-[250px] mb-6" style={{ fontSize: "clamp(14px, 2vw, 18px)", color: "#002B49", opacity: 0.8 }}>
                  AI-first property management built in Bahrain for the GCC
                </p>
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)" }}>
                      <i className="ph-bold ph-phone" style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "#FFFFFF" }} />
                    </span>
                    <span style={{ fontWeight: 600, color: "#002B49", fontSize: "clamp(14px, 1.5vw, 16px)" }}>+973 3652 2255</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)" }}>
                      <i className="ph-bold ph-envelope-simple" style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "#FFFFFF" }} />
                    </span>
                    <span style={{ fontWeight: 600, color: "#002B49", fontSize: "clamp(14px, 1.5vw, 16px)" }}>contact@baitech.app</span>
                  </div>
                </div>
              </div>

              {/* Divider 1 */}
              <div className="hidden lg:flex footer-divider">
                <div style={{ width: "2px", height: "100%", background: "linear-gradient(180deg, #84DADE 0%, #1ECAD3 50%, #0099A8 100%)" }} />
              </div>

              {/* Column 2 - Quick Links */}
              <div>
                <h5 className="uppercase font-bold mb-8" style={{ color: "#002B49", fontSize: "clamp(14px, 2vw, 18px)", letterSpacing: "1px" }}>Quick Links</h5>
                <ul className="list-none m-0 p-0 flex flex-col gap-4">
                  {[
                    { label: "Home", href: "#home" },
                    { label: "Features", href: "#newfeatured" },
                    { label: "How It Works", href: "#how-it-works" },
                    { label: "FAQ", href: "#faq" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="no-underline font-semibold transition-colors duration-300"
                        style={{ color: "#002B49", fontSize: "clamp(14px, 1.5vw, 16px)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#1ECAD3"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#002B49"; }}
                        onClick={(e) => {
                          if (link.href.startsWith("#")) {
                            e.preventDefault();
                            document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider 2 */}
              <div className="hidden lg:flex footer-divider">
                <div style={{ width: "2px", height: "100%", background: "linear-gradient(180deg, #84DADE 0%, #1ECAD3 50%, #0099A8 100%)" }} />
              </div>

              {/* Column 3 - Newsletter */}
              <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                <div>
                  <h5 className="uppercase font-bold mb-8" style={{ color: "#002B49", fontSize: "clamp(14px, 2vw, 18px)", letterSpacing: "1px" }}>
                    Newsletter
                  </h5>
                  <form
                    action="#"
                    style={{ position: "relative", boxShadow: "0 4px 12px rgba(30, 202, 211, 0.2)", borderRadius: "50px", marginBottom: "2rem" }}
                  >
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="w-full bg-white outline-none"
                      style={{ padding: "16px 56px 16px 48px", border: "2px solid #84DADE", borderRadius: "50px", fontSize: "15px" }}
                    />
                    <span className="absolute flex items-center justify-center" style={{ left: "20px", top: "50%", transform: "translateY(-50%)", fontSize: "clamp(16px, 2.5vw, 20px)", color: "#1ECAD3" }}>
                      <i className="ph-bold ph-envelope-simple" />
                    </span>
                    <button
                      type="button"
                      className="absolute flex items-center justify-center border-none rounded-full cursor-pointer transition-all duration-300"
                      style={{ right: "8px", top: "50%", transform: "translateY(-50%)", width: "44px", height: "44px", background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)", fontSize: "clamp(16px, 2.5vw, 20px)", color: "#FFFFFF" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
                    >
                      <i className="ph-bold ph-arrow-up-right" />
                    </button>
                  </form>
                </div>
                {/* Terms Links */}
                <div className="footer-terms-links flex items-center gap-2" style={{ marginTop: "auto" }}>
                  <a
                    href="/terms-and-conditions"
                    className="no-underline font-semibold transition-colors duration-300"
                    style={{ color: "#1ECAD3", fontSize: "clamp(12px, 1.2vw, 14px)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#FF4438"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#1ECAD3"; }}
                  >
                    Terms and Conditions
                  </a>
                  <span className="terms-separator" style={{ color: "#84DADE" }}>|</span>
                  <a
                    href="/privacy-policy"
                    className="no-underline font-semibold transition-colors duration-300"
                    style={{ color: "#1ECAD3", fontSize: "clamp(12px, 1.2vw, 14px)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#FF4438"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#1ECAD3"; }}
                  >
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom-section" style={{ padding: "32px 0", borderTop: "1px solid #84DADE" }}>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <p className="font-semibold m-0" style={{ color: "#002B49", fontSize: "16px" }}>
                  Copyright &copy; {currentYear}{" "}
                  <a href="#home" className="no-underline font-bold" style={{ color: "#1ECAD3" }}>Baitech</a>. All Rights Reserved
                </p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: "ph-facebook-logo", gradient: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)" },
                    { icon: "ph-twitter-logo", gradient: "linear-gradient(135deg, #0099A8 0%, #1ECAD3 100%)" },
                    { icon: "ph-instagram-logo", gradient: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)" },
                  ].map((social, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="w-10 h-10 rounded-full flex items-center justify-center border-none cursor-pointer transition-transform duration-300 hover:scale-110"
                      style={{ background: social.gradient, color: "#FFFFFF", fontSize: "clamp(16px, 2.5vw, 20px)" }}
                    >
                      <i className={`ph-fill ${social.icon}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-five .footer-bottom-section { border-top: none !important; }
          .footer-divider { display: none !important; }
          .footer-main-content { justify-content: center !important; align-items: center !important; text-align: center !important; }
          .footer-main-content > div { display: flex !important; flex-direction: column !important; align-items: center !important; text-align: center !important; width: 100% !important; margin-bottom: 2rem !important; }
          .footer-main-content > div > a { margin-left: auto !important; margin-right: auto !important; margin-bottom: 1.5rem !important; }
          .footer-main-content > div > p { margin-left: auto !important; margin-right: auto !important; text-align: center !important; max-width: 100% !important; }
          .footer-main-content > div > div { align-items: center !important; justify-content: center !important; }
          .footer-main-content > div > ul { align-items: center !important; }
          .footer-main-content > div > ul > li { text-align: center !important; display: flex !important; justify-content: center !important; }
          .footer-terms-links { justify-content: center !important; flex-direction: column !important; align-items: center !important; gap: 0.5rem !important; margin-top: 2rem !important; }
          .terms-separator { display: none !important; }
          .footer-main-content form { margin-left: auto !important; margin-right: auto !important; max-width: 100% !important; width: 100% !important; }
          .footer-five .footer-bottom-section > div { flex-direction: column !important; align-items: center !important; text-align: center !important; gap: 1rem !important; }
          .footer-five .footer-bottom-section > div > p { text-align: center !important; width: 100% !important; }
          .footer-five .footer-bottom-section > div > div { justify-content: center !important; }
        }
      `}</style>
    </section>
  );
};

export default Footer;
