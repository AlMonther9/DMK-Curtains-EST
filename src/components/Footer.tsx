import { Sparkles, MapPin, Mail } from "lucide-react";
import { TranslationKeys } from "@/app/translations";

interface FooterProps {
  t: TranslationKeys;
  lang: "en" | "ar";
  onSelectTab: (tabId: string) => void;
}

export default function Footer({ t, lang, onSelectTab }: FooterProps) {
  const handleTabClick = (tabId: string) => {
    onSelectTab(tabId);
    window.location.hash = "#collections";
  };

  return (
    <footer className="relative bg-[#0C0F12] border-t border-brand-teal/20 overflow-hidden pt-20 pb-8">
      
      {/* Background Grid Pattern & Ambient Glows */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: "radial-gradient(var(--color-brand-teal) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }} 
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      {/* Large Typography Watermark */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none flex items-center justify-center opacity-[0.015]">
        <span className="font-display font-black text-[28vw] tracking-tighter text-white uppercase select-none">DMK</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Newsletter Panel */}
        <div className="glass-card p-6 md:p-8 border-brand-teal/15 flex flex-col md:flex-row gap-6 items-center justify-between max-w-4xl mx-auto mb-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="flex flex-col items-start gap-1">
            <h3 className="font-display font-bold text-white text-lg">{lang === 'en' ? 'Stay Updated' : 'كن على اطلاع'}</h3>
            <p className="text-xs text-brand-ghost max-w-md">{lang === 'en' ? 'Subscribe to receive design catalogs, technical updates, and smart automation news.' : 'اشترك لتلقي كتالوجات التصميم والتحديثات الفنية وأخبار الأتمتة الذكية.'}</p>
          </div>
          <div className="flex w-full md:w-auto items-center gap-3 shrink-0">
            <input 
              type="email" 
              placeholder={lang === 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'}
              className="form-field py-2.5 px-4 text-xs rounded-full bg-[#0C0F12] border-brand-teal/20 focus:border-brand-teal max-w-xs" 
            />
            <button className="btn-primary py-2.5 px-6 text-xs font-bold shrink-0">
              {lang === 'en' ? 'Subscribe' : 'اشترك'}
            </button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-teal flex items-center justify-center">
                <svg className="w-5 h-5 text-brand-obsidian" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 3v18M20 3v18M4 7h16M4 14h16M8 3c0 4 8 4 8 0" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display font-extrabold text-lg tracking-wider text-white">DMK CURTAINS</span>
            </div>
            <p className="text-xs text-brand-ghost leading-relaxed max-w-sm">
              {t.footer.text}
            </p>
            {/* Dawn Gulf Group Affiliation Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-gold/5 border border-brand-gold/15 mt-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">{t.hero.badge}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest text-brand-gold">{lang === 'en' ? 'Company' : 'الشركة'}</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-medium text-brand-ghost">
              <li><a href="#about" className="hover:text-brand-teal transition-colors">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-brand-teal transition-colors">{t.nav.services}</a></li>
              <li><a href="#collections" className="hover:text-brand-teal transition-colors">{t.nav.types}</a></li>
              <li><a href="#clients" className="hover:text-brand-teal transition-colors">{t.nav.clients}</a></li>
              <li><a href="#sustainability" className="hover:text-brand-teal transition-colors">{t.nav.sustainability}</a></li>
            </ul>
          </div>

          {/* Column 3: Collections */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest text-brand-gold">{lang === 'en' ? 'Collections' : 'مجموعاتنا'}</h4>
            <ul className="flex flex-col gap-2.5 text-xs font-medium text-brand-ghost">
              <li><button onClick={() => handleTabClick("zebra")} className="hover:text-brand-teal transition-colors text-start cursor-pointer">{t.types.zebraTitle}</button></li>
              <li><button onClick={() => handleTabClick("blackout")} className="hover:text-brand-teal transition-colors text-start cursor-pointer">{t.types.blackoutTitle}</button></li>
              <li><button onClick={() => handleTabClick("hospital")} className="hover:text-brand-teal transition-colors text-start cursor-pointer">{t.types.hospitalTitle}</button></li>
              <li><button onClick={() => handleTabClick("zipscreen")} className="hover:text-brand-teal transition-colors text-start cursor-pointer">{t.types.zipscreenTitle}</button></li>
              <li><button onClick={() => handleTabClick("wooden")} className="hover:text-brand-teal transition-colors text-start cursor-pointer">{t.types.woodenTitle}</button></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-widest text-brand-gold">{lang === 'en' ? 'Get in Touch' : 'اتصل بنا'}</h4>
            <ul className="flex flex-col gap-3 text-xs text-brand-ghost">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-[10px] uppercase tracking-wide">{t.contact.ksa}</span>
                  <span className="text-brand-ghost text-[11px] block mt-0.5">{t.contact.ksaAddress}</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block text-[10px] uppercase tracking-wide">{t.contact.oman}</span>
                  <span className="text-brand-ghost text-[11px] block mt-0.5">{t.contact.omanAddress}</span>
                </div>
              </li>
              <li className="flex items-center gap-2 mt-1">
                <Mail className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <span className="text-[11px]">info@dmkcurtains.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Gold Trim separator line */}
        <div className="relative my-8">
          <div className="gold-stripe" />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 pt-4">
          <p className="text-[10px] text-brand-ghost font-semibold uppercase tracking-wider text-center md:text-start">{t.footer.rights}</p>
          
          {/* Social links */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="w-7 h-7 rounded-full border border-brand-teal/20 flex items-center justify-center text-brand-mist hover:text-brand-gold hover:border-brand-gold/40 hover:scale-105 transition-all"
              aria-label="Twitter"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="w-7 h-7 rounded-full border border-brand-teal/20 flex items-center justify-center text-brand-mist hover:text-brand-gold hover:border-brand-gold/40 hover:scale-105 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
