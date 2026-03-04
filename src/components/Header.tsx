import { useEffect, useState, useRef, type FC } from "react";

const Header: FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const whatsappButtonRef = useRef<HTMLAnchorElement>(null);
  const whatsappFlairRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentPath = window.location.pathname;
        if (currentPath !== "/privacy-policy" && currentPath !== "/terms-and-conditions" && currentPath !== "/contact-us") {
          const sections = ["home", "basem", "newfeatured", "how-it-works", "faq", "contact"];
          const current = sections.find((section) => {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              return rect.top <= 150 && rect.bottom >= 150;
            }
            return false;
          });
          if (current) setActiveSection(current);
        } else {
          setActiveSection("");
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const button = whatsappButtonRef.current;
    const flair = whatsappFlairRef.current;
    if (!button || !flair) return;

    const setFlairPos = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      flair.style.left = `${e.clientX - rect.left}px`;
      flair.style.top = `${e.clientY - rect.top}px`;
    };

    const size = Math.max(button.offsetWidth, button.offsetHeight) * 2.5;

    const handleMouseEnter = (e: MouseEvent) => {
      flair.style.width = `${size}px`;
      flair.style.height = `${size}px`;
      flair.style.transition = 'transform 0s';
      setFlairPos(e);
      flair.style.transform = 'translate(-50%, -50%) scale(0)';
      requestAnimationFrame(() => {
        flair.style.transition = 'transform 0.65s cubic-bezier(0.23, 1, 0.32, 1)';
        flair.style.transform = 'translate(-50%, -50%) scale(1)';
      });
      button.addEventListener('mousemove', setFlairPos);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      setFlairPos(e);
      flair.style.transition = 'transform 0.65s cubic-bezier(0.23, 1, 0.32, 1)';
      flair.style.transform = 'translate(-50%, -50%) scale(0)';
      button.removeEventListener('mousemove', setFlairPos);
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', setFlairPos);
    };
  }, []);

  useEffect(() => {
    ["regular", "bold", "fill"].forEach((weight) => {
      const id = `phosphor-${weight}`;
      if (!document.getElementById(id)) {
        const link = document.createElement("link");
        link.id = id;
        link.rel = "stylesheet";
        link.href = `https://unpkg.com/@phosphor-icons/web@2.1.1/src/${weight}/style.css`;
        document.head.appendChild(link);
      }
    });
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#newfeatured" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "/contact-us" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/contact-us") {
      e.preventDefault();
      window.history.pushState({ page: "contact-us" }, "", "/contact-us");
      window.dispatchEvent(new PopStateEvent("popstate"));
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileMenu(false);
      return;
    }
    const currentPath = window.location.pathname;
    if (currentPath !== "/") {
      e.preventDefault();
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(() => {
        const targetId = href.substring(1);
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setMobileMenu(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const currentPath = window.location.pathname;
    if (currentPath !== "/") {
      e.preventDefault();
      window.history.pushState({}, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
      setTimeout(() => {
        const el = document.getElementById("home");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[9999] bg-white flex items-center"
        style={{ paddingTop: "clamp(0.05rem, 0.4vw, 0.15rem)", paddingBottom: "clamp(0.05rem, 0.4vw, 0.15rem)" }}
      >
        <div className="w-full flex items-center" style={{ paddingLeft: "clamp(1rem, 3vw, 2rem)", paddingRight: "clamp(1rem, 3vw, 2rem)" }}>
          <nav className="flex items-center justify-between w-full" style={{ gap: "clamp(0.5rem, 2vw, 1rem)" }}>
            {/* Logo */}
            <div className="flex items-center shrink-0" style={{ minWidth: "clamp(160px, 22vw, 260px)" }}>
              <a
                href="#home"
                className="no-underline cursor-pointer flex items-center transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                onClick={handleLogoClick}
              >
                <img
                  src="/assets/images/logo/Logo.svg"
                  alt="Baitech Logo"
                  className="header-logo object-contain"
                  style={{ height: "clamp(36px, 6vw, 60px)", width: "clamp(180px, 22vw, 260px)", maxHeight: "clamp(36px, 6vw, 60px)" }}
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-1 justify-center items-center">
              <ul className="flex items-center justify-center list-none m-0 p-0 gap-7">
                {navItems.map((item) => {
                  const sectionId = item.href.replace("#", "").replace("/", "");
                  const isActive = activeSection === sectionId || (item.href === "#home" && activeSection === "home");
                  return (
                    <li key={item.label} className="flex items-center">
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className="no-underline cursor-pointer flex items-center py-4 font-semibold transition-colors duration-300"
                        style={{ color: isActive ? "#1ECAD3" : "#002B49" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#1ECAD3"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? "#1ECAD3" : "#002B49"; }}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Side */}
            <div className="flex items-center shrink-0 header-right-mobile" style={{ gap: "clamp(0.5rem, 2vw, 1.5rem)" }}>
              <span className="hidden lg:block whitespace-nowrap" style={{ fontSize: "clamp(0.875rem, 1.5vw, 1rem)", fontWeight: 400, color: "#002B49", letterSpacing: "0.5px" }}>
                Register on
              </span>
              <a
                ref={whatsappButtonRef}
                href="https://wa.me/97336522255"
                target="_blank"
                rel="noopener noreferrer"
                className="button--stroke btn-navy hidden sm:inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                data-block="button"
                style={{ backgroundColor: "#002B49", fontSize: "clamp(0.75rem, 2vw, 1rem)", padding: "clamp(0.5rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)" }}
              >
                <span ref={whatsappFlairRef} className="button__flair"></span>
                <span className="button__label">WhatsApp</span>
              </a>
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                type="button"
                className="toggle-mobileMenu lg:hidden bg-transparent border-none cursor-pointer p-2 flex items-center justify-center"
                style={{ fontSize: "clamp(20px, 5vw, 24px)" }}
              >
                <i className="ph ph-list" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="lg:hidden fixed top-0 left-0 bg-white w-[300px] h-screen overflow-y-auto p-6 z-[10000] transition-transform duration-400"
        style={{ transform: mobileMenu ? "translateX(0)" : "translateX(-100%)", transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        <button
          onClick={() => setMobileMenu(false)}
          type="button"
          className="close-button absolute right-0 top-0 mr-2 mt-2 rounded-full flex justify-center items-center cursor-pointer border-none"
          style={{ background: "#f0f0f0", width: "40px", height: "40px" }}
        >
          <i className="ph ph-x" />
        </button>
        <div className="mobile-menu__inner">
          <a href="#home" className="mobile-menu__logo" onClick={(e) => { handleLogoClick(e); setMobileMenu(false); }}>
            <img src="/assets/images/logo/Logo.svg" alt="Baitech Logo" className="mobile-menu-logo" style={{ height: "clamp(55px, 11vw, 60px)", width: "auto", maxHeight: "clamp(55px, 11vw, 60px)" }} />
          </a>
          <div className="mobile-menu__menu">
            <ul className="list-none m-0 p-0 mt-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block no-underline py-4 font-semibold"
                    style={{ color: "#002B49" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/97336522255"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn fixed bottom-5 right-5 w-14 h-14 rounded-full flex items-center justify-center z-[9998] no-underline cursor-pointer"
        style={{ backgroundColor: "#25D366", boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.6)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.4)"; }}
        onTouchStart={(e) => { e.currentTarget.style.transform = "scale(0.95)"; }}
        onTouchEnd={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="#FFFFFF"/>
        </svg>
      </a>

      <style>{`
        @media (max-width: 991px) {
          .header-logo { height: clamp(55px, 11vw, 70px) !important; max-height: clamp(55px, 11vw, 70px) !important; }
          .mobile-menu-logo { height: clamp(55px, 11vw, 60px) !important; max-height: clamp(55px, 11vw, 60px) !important; }
          .header-right-mobile { gap: 0.25rem !important; flex-shrink: 0 !important; min-width: 40px !important; }
          .toggle-mobileMenu { margin-right: 0 !important; padding: 8px !important; flex-shrink: 0 !important; min-width: 40px !important; max-width: 40px !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
