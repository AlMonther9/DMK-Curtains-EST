import { useState } from "react";
import { Languages, Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import { TranslationKeys } from "@/app/translations";

interface NavbarProps {
  t: TranslationKeys;
  lang: "en" | "ar";
  handleLangToggle: () => void;
  scrolled: boolean;
}

export default function Navbar({ t, lang, handleLangToggle, scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "collections", label: t.nav.types },
    { id: "clients", label: t.nav.clients },
    { id: "sustainability", label: t.nav.sustainability },
    { id: "contact", label: t.nav.contact }
  ];

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div className={`w-full max-w-5xl rounded-full transition-all duration-500 ${
        scrolled 
          ? "bg-[#131820]/80 backdrop-blur-md border border-brand-teal/25 px-6 py-3" 
          : "bg-transparent border border-transparent px-6 py-4"
      } flex items-center justify-between`}>
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 3v18M20 3v18M4 7h16M4 14h16M8 3c0 4 8 4 8 0" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white">DMK CURTAINS</span>
            <span className="text-[9px] text-brand-ghost tracking-widest font-semibold uppercase">
              {lang === 'en' ? 'EST. Since 2004' : 'تأسست عام ٢٠٠٤'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 relative bg-[#0C0F12]/40 rounded-full p-1 border border-brand-teal/10">
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-300 text-brand-ghost hover:text-white"
            >
              {hoveredIndex === idx && (
                <span className="absolute inset-0 bg-brand-teal/15 border border-brand-teal/30 rounded-full -z-10 animate-fade-up" />
              )}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Language & Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={handleLangToggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-teal/20 hover:border-brand-teal hover:bg-brand-teal/10 transition-all text-xs font-bold text-brand-mist cursor-pointer"
            aria-label="Toggle Language"
          >
            <Languages className="w-3.5 h-3.5 text-brand-teal" />
            <span>{lang === "en" ? "العربية" : "English"}</span>
          </button>
          <a href="#contact" className="btn-primary py-2 px-4 text-xs font-bold rounded-full">
            {t.contact.sendBtn}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={handleLangToggle}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-brand-teal/25 text-xs font-bold text-brand-mist"
            aria-label="Toggle Language"
          >
            <Languages className="w-3 h-3 text-brand-teal" />
            <span>{lang === "en" ? "ع" : "EN"}</span>
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-mist hover:text-white rounded-full bg-brand-slate/40 border border-brand-teal/10"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#131820]/95 backdrop-blur-md border border-brand-teal/20 rounded-2xl p-6 flex flex-col gap-4 shadow-card-dark animate-fade-up z-50">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-brand-mist hover:text-brand-teal hover:translate-x-1 transition-all flex items-center justify-between"
            >
              <span>{item.label}</span>
              {lang === 'en' ? <ChevronRight className="w-4 h-4 text-brand-teal" /> : <ChevronLeft className="w-4 h-4 text-brand-teal" />}
            </a>
          ))}
          <div className="h-[1px] bg-brand-teal/15 my-2" />
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary justify-center w-full text-center py-3"
          >
            {t.contact.sendBtn}
          </a>
        </div>
      )}
    </header>
  );
}
