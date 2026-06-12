"use client";

import { useState, useEffect } from "react";
import { translations } from "./translations";

// Import Modular Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Values from "@/components/Values";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Partnerships from "@/components/Partnerships";
import Clients from "@/components/Clients";
import Sustainability from "@/components/Sustainability";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const [activeTab, setActiveTab] = useState<string>("zebra");
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  // Set dir and lang attributes on document html tag
  useEffect(() => {
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  // Handle navbar padding and background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLangToggle = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`min-h-screen bg-[#0C0F12] text-white selection:bg-brand-teal/25 selection:text-white antialiased overflow-x-clip ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      
      {/* Premium Floating Capsule Navbar */}
      <Navbar 
        t={t} 
        lang={lang} 
        handleLangToggle={handleLangToggle} 
        scrolled={scrolled} 
      />

      {/* Immersive Scroll-Synchronized 3D Curtain Hero */}
      <Hero 
        t={t} 
        lang={lang} 
      />

      {/* Main Content Sections */}
      <main className="relative z-30">
        
        {/* Company Overview (Dawn Gulf Affiliation) */}
        <Overview 
          t={t} 
          lang={lang} 
        />

        {/* Core Values Quad */}
        <Values 
          t={t} 
          lang={lang} 
        />

        {/* Specialized Products & Services */}
        <Products 
          t={t} 
          lang={lang} 
        />

        {/* Interactive Collections Gallery */}
        <Gallery 
          t={t} 
          lang={lang} 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />

        {/* Partnerships (Somfy / Schneider) */}
        <Partnerships 
          t={t} 
          lang={lang} 
        />

        {/* Prestigious Client Base Infinite Marquee */}
        <Clients 
          t={t} 
          lang={lang} 
        />

        {/* Sustainability & Certifications */}
        <Sustainability 
          t={t} 
          lang={lang} 
        />

        {/* Contact Selector Inquiry Form */}
        <Contact 
          t={t} 
          lang={lang} 
        />

      </main>

      {/* Redesigned Grid Footer */}
      <Footer 
        t={t} 
        lang={lang} 
        onSelectTab={setActiveTab} 
      />

    </div>
  );
}
