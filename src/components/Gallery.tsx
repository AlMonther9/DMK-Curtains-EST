import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TranslationKeys } from "@/app/translations";

interface GalleryProps {
  t: TranslationKeys;
  lang: "en" | "ar";
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

export default function Gallery({ t, lang, activeTab, setActiveTab }: GalleryProps) {

  const curtainTabs = [
    { id: "zebra", key: "zebra" },
    { id: "blackout", key: "blackout" },
    { id: "sunlight", key: "sunlight" },
    { id: "sunscreen", key: "sunscreen" },
    { id: "wooden", key: "wooden" },
    { id: "roman", key: "roman" },
    { id: "bamboo", key: "bamboo" },
    { id: "dream", key: "dream" },
    { id: "hospital", key: "hospital" },
    { id: "zipscreen", key: "zipscreen" },
  ];

  const getCurtainImage = (tabId: string) => {
    switch (tabId) {
      case "hospital":
        return "/hospital-curtains.png";
      case "zipscreen":
        return "/outdoor-shades.png";
      case "sunscreen":
      case "roman":
      case "bamboo":
      case "dream":
        return "/sustainability-fabric.png";
      default:
        return "/bedroom-curtains.png";
    }
  };

  const getCurtainText = (tabId: string) => {
    switch (tabId) {
      case "zebra": return { title: t.types.zebraTitle, text: t.types.zebraText };
      case "blackout": return { title: t.types.blackoutTitle, text: t.types.blackoutText };
      case "sunlight": return { title: t.types.sunlightTitle, text: t.types.sunlightText };
      case "sunscreen": return { title: t.types.sunscreenTitle, text: t.types.sunscreenText };
      case "wooden": return { title: t.types.woodenTitle, text: t.types.woodenText };
      case "roman": return { title: t.types.romanTitle, text: t.types.romanText };
      case "bamboo": return { title: t.types.bambooTitle, text: t.types.bambooText };
      case "dream": return { title: t.types.dreamTitle, text: t.types.dreamText };
      case "hospital": return { title: t.types.hospitalTitle, text: t.types.hospitalText };
      case "zipscreen": return { title: t.types.zipscreenTitle, text: t.types.zipscreenText };
      default: return { title: "", text: "" };
    }
  };

  const activeCurtainDetails = getCurtainText(activeTab);

  return (
    <section id="collections" className="py-24 section-abyss dot-grid noise-overlay relative overflow-hidden">
      
      {/* Gold thread divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Ambient mesh */}
      <div className="mesh-warm top-0 right-1/4" />
      <div className="mesh-teal bottom-1/4 -left-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4"
          >
            {t.types.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-brand-ghost font-medium"
          >
            {t.types.subtitle}
          </motion.p>
        </div>

        {/* Horizontal scrollable Tab bar */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-brand-teal scrollbar-track-brand-obsidian">
          {curtainTabs.map((tab) => {
            const tabText = getCurtainText(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-brand-teal text-[#0C0F12] font-bold scale-105 shadow-lg"
                    : "bg-[#1E2A33]/40 text-brand-mist border border-brand-teal/10 hover:border-brand-teal/30 hover:scale-[1.02]"
                }`}
              >
                {tabText.title}
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="mt-8 bg-[#1E2A33]/40 border border-brand-teal/10 rounded-3xl p-8 md:p-12 min-h-[440px] flex items-center shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as any }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"
            >
              
              {/* Info text column */}
              <div className="lg:col-span-7 flex flex-col gap-6 items-start">
                <span className="px-3.5 py-1.5 rounded-full bg-brand-gold/5 text-brand-gold text-[10px] font-bold uppercase tracking-wider border border-brand-gold/15">
                  {lang === 'en' ? 'Premium Quality' : 'جودة فائقة'}
                </span>
                
                <h3 className="font-display font-extrabold text-white text-2xl md:text-4xl leading-tight tracking-wide">
                  {activeCurtainDetails.title}
                </h3>
                
                <p className="text-brand-mist text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                  {activeCurtainDetails.text}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
                  <a href="#contact" className="btn-primary py-3.5 px-7 text-xs font-bold uppercase tracking-wider justify-center">
                    {lang === 'en' ? 'Get Quote / Dimensions' : 'طلب تسعيرة / قياسات'}
                  </a>
                </div>
              </div>

              {/* Image Showcase column */}
              <div className="lg:col-span-5 relative">
                {/* Double border frame layout */}
                <div className="absolute inset-0 border border-brand-gold/20 rounded-2xl translate-x-3 translate-y-3 pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden border border-brand-teal/15 aspect-[4/3] max-w-lg mx-auto bg-brand-abyss">
                  <Image 
                    src={getCurtainImage(activeTab)} 
                    alt={activeCurtainDetails.title} 
                    fill
                    className="object-cover transition-all duration-700 hover:scale-105"
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
