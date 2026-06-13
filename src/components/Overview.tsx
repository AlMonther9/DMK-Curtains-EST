import Image from "next/image";
import { motion } from "framer-motion";
import { TranslationKeys } from "@/app/translations";

interface OverviewProps {
  t: TranslationKeys;
  lang: "en" | "ar";
}

export default function Overview({ t, lang }: OverviewProps) {
  // Stagger wrapper settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section id="about" className="py-24 section-obsidian dot-grid noise-overlay relative overflow-hidden">
      
      {/* Gold thread divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Warm ambient mesh */}
      <div className="mesh-warm top-1/4 -left-40" />
      <div className="mesh-teal bottom-0 right-0" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image side with slide-in and hover lift */}
          <motion.div 
            initial={{ opacity: 0, x: lang === 'en' ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative group cursor-default"
          >
            {/* Double Frame Layout with Gold Glow Sweep on Hover */}
            <div className="absolute inset-0 border border-brand-gold/20 rounded-2xl translate-x-3 translate-y-3 pointer-events-none transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:border-brand-gold/40" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-teal/20 bg-brand-abyss shadow-2xl z-10">
              <Image 
                src="/bedroom-curtains.png" 
                alt="DMK Premium Bedroom Curtain Installation" 
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay sheen sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
            </div>
          </motion.div>

          {/* Text side with staggered fade-in */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start gap-6"
          >
            <motion.span 
              variants={itemVariants}
              className="text-[10px] font-bold uppercase tracking-widest text-brand-gold px-3.5 py-1.5 rounded-full bg-brand-gold/5 border border-brand-gold/15"
            >
              {t.overview.badge}
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight"
            >
              {t.overview.title}
            </motion.h2>
            
            <motion.div variants={itemVariants} className="gold-stripe my-1" />
            
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base text-brand-mist leading-relaxed font-medium"
            >
              {t.overview.text}
            </motion.p>
            
            {/* Vision / Mission Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
              <motion.div 
                variants={itemVariants}
                className="glass-card p-6 border-brand-teal/10 hover:border-brand-gold/25 transition-all duration-300 bg-[#1E2A33]/15"
              >
                <h3 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  {t.overview.visionTitle}
                </h3>
                <p className="text-xs text-brand-ghost leading-relaxed">{t.overview.visionText}</p>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="glass-card p-6 border-brand-teal/10 hover:border-brand-gold/25 transition-all duration-300 bg-[#1E2A33]/15"
              >
                <h3 className="font-display font-bold text-white text-base mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  {t.overview.missionTitle}
                </h3>
                <p className="text-xs text-brand-ghost leading-relaxed">{t.overview.missionText}</p>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
