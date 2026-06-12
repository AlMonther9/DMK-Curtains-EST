import Image from "next/image";
import { Leaf, ShieldCheck, Flame, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import { TranslationKeys } from "@/app/translations";

interface SustainabilityProps {
  t: TranslationKeys;
  lang: "en" | "ar";
}

export default function Sustainability({ t, lang }: SustainabilityProps) {
  return (
    <section id="sustainability" className="py-24 section-obsidian dot-grid noise-overlay relative overflow-hidden">

      {/* Gold thread divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Ambient mesh */}
      <div className="mesh-warm bottom-12 right-1/4" />
      <div className="mesh-teal top-0 left-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 border border-brand-gold/20 rounded-2xl translate-x-3 translate-y-3 pointer-events-none" />
            <div className="relative rounded-2xl overflow-hidden border border-brand-teal/15 max-w-md mx-auto aspect-square bg-brand-abyss shadow-2xl">
              <Image
                src="/sustainability-fabric.png"
                alt="Eco Friendly Curtain Fabric"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute top-4 right-4 bg-brand-obsidian/90 backdrop-blur-md px-4 py-2 rounded-full border border-brand-teal/15 flex items-center gap-2">
              <Leaf className="w-3.5 h-3.5 text-brand-gold" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                {lang === 'en' ? '100% Eco-Weave' : 'نسيج بيئي ١٠٠٪'}
              </span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: lang === 'en' ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:col-span-7 flex flex-col gap-6 items-start"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/5 border border-brand-gold/15">
              <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                {lang === 'en' ? 'Environmental Stewardship' : 'رعاية بيئية واستدامة'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              {t.sustainability.title}
            </h2>
            <p className="text-brand-mist leading-relaxed text-sm sm:text-base font-medium">
              {t.sustainability.text}
            </p>

            {/* Gold stripe decoration separator */}
            <div className="gold-stripe my-2" />
            {/* Elite Certification Badges */}
            <div className="w-full mt-2">
              <h4 className="font-display font-bold text-white/80 text-sm sm:text-base uppercase tracking-widest mb-6 flex items-center gap-4">
                {t.sustainability.certificationsTitle}
                <div className="h-px flex-grow bg-gradient-to-r from-brand-teal/20 to-transparent" />
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {[
                  {
                    name: 'SGS',
                    descEn: 'Quality Certified',
                    descAr: 'معتمد الجودة',
                    icon: ShieldCheck
                  },
                  {
                    name: 'Intertek',
                    descEn: 'Fireproof Tested',
                    descAr: 'مقاومة الحريق',
                    icon: Flame
                  },
                  {
                    name: 'Huntsman',
                    descEn: 'Eco-Safe Dyes',
                    descAr: 'أصباغ بيئية آمنة',
                    icon: Droplets
                  }
                ].map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    whileHover={{ y: -4 }}
                    className="relative group overflow-hidden rounded-xl border border-white/5 bg-[#0C0F12]/60 backdrop-blur-md p-5 cursor-default transition-all duration-500 hover:border-brand-gold/30 hover:shadow-[0_8px_30px_rgba(201,168,76,0.1)]"
                  >
                    {/* Subtle internal hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent" />

                    {/* Animated top illuminating line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                    <div className="relative z-10 flex flex-col items-center text-center gap-3">
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-full bg-brand-abyss flex items-center justify-center border border-white/10 group-hover:border-brand-gold/40 transition-colors duration-500 shadow-inner">
                        <cert.icon className="w-5 h-5 text-brand-ghost group-hover:text-brand-gold transition-colors duration-500" strokeWidth={1.5} />
                      </div>

                      {/* Typography */}
                      <div>
                        <span className="font-display font-extrabold text-white text-lg tracking-wider block">
                          {cert.name}
                        </span>
                        <span className="text-[10px] text-brand-ghost font-semibold mt-1 tracking-widest uppercase group-hover:text-brand-cyan transition-colors duration-500 block">
                          {lang === 'en' ? cert.descEn : cert.descAr}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
