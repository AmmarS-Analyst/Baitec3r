import { useState, useEffect, type FC } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Basem from "./components/Basem";
import NewFeatured from "./components/NewFeatured";
import ManageBuilding from "./components/ManageBuilding";
import HowItWorks from "./components/HowItWorks";
import Metrics from "./components/Metrics";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ContactUs from "./components/ContactUs";

const App: FC = () => {
  const getPage = () => {
    const path = window.location.pathname;
    if (path === "/privacy-policy") return "privacy-policy";
    if (path === "/terms-and-conditions") return "terms-and-conditions";
    if (path === "/contact-us") return "contact-us";
    return "home";
  };

  const [currentPage, setCurrentPage] = useState(getPage);

  useEffect(() => {
    const onPopState = () => setCurrentPage(getPage());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a[href^='/']");
      if (!link) return;
      const href = link.getAttribute("href");
      if (href === "/privacy-policy" || href === "/terms-and-conditions" || href === "/contact-us") {
        e.preventDefault();
        e.stopPropagation();
        window.history.pushState({}, "", href);
        setCurrentPage(getPage());
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    if (currentPage !== "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage]);

  if (currentPage === "privacy-policy") return <PrivacyPolicy />;
  if (currentPage === "terms-and-conditions") return <TermsAndConditions />;
  if (currentPage === "contact-us") return <ContactUs />;

  return (
    <div>
      <Header />
      <Hero />
      <Basem />
      <NewFeatured />
      <HowItWorks />
      <Metrics />
      <FAQ />
      <ManageBuilding />
      <Footer />
    </div>
  );
};

export default App;
