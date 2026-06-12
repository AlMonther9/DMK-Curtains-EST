import { motion } from "framer-motion";
import { TranslationKeys } from "@/app/translations";

interface PartnershipsProps {
  t: TranslationKeys;
  lang: "en" | "ar";
}

const partners = [
  { name: "somfy.", subtitle: "Motorized Tech", subtitleAr: "تكنولوجيا المحركات" },
  { name: "Schneider", subtitle: "Smart Automation", subtitleAr: "الأتمتة الذكية" },
  { name: "FOREST", subtitle: "Drapery Hardware", subtitleAr: "معدات الستائر" },
  { name: "Uni Soleil", subtitle: "Window Fashion", subtitleAr: "أزياء النوافذ" },
  { name: "nevaluz", subtitle: "Curtain Systems", subtitleAr: "أنظمة الستائر" },
];

export default function Partnerships({ t, lang }: PartnershipsProps) {
  const isRtl = lang === "ar";

  return (
    <section className="py-24 section-obsidian dot-grid noise-overlay relative overflow-hidden flex flex-col justify-center">
      <style>{`
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
          width: max-content;
        }

        .marquee-inner:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Edge fading mask for dark themes */
        .fade-edges {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 15%,
            black 85%,
            transparent
          );
        }
      `}</style>

      {/* Gold thread divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Ambient mesh */}
      <div className="mesh-warm top-1/2 right-10 opacity-30" />
      <div className="mesh-teal top-0 -left-20 opacity-30" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center max-w-2xl gap-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/5 border border-brand-gold/20">
            <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
              {isRtl ? 'شركاء النجاح' : 'Global Partners'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
            {t.partnerships.title}
          </h2>

          <p className="text-brand-mist leading-relaxed text-sm sm:text-base font-medium max-w-xl">
            {t.partnerships.text}
          </p>
        </motion.div>
      </div>

      {/* Marquee Section - Forced LTR to prevent animation breakages in RTL */}
      <div className="w-full relative overflow-hidden fade-edges py-4" dir="ltr">
        <div className="flex marquee-inner will-change-transform items-center">
          {/* Duplicate the array to create the infinite loop effect */}
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-8 sm:mx-16 group select-none cursor-default"
            >
              <span className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-widest text-white/50 transition-colors duration-300 group-hover:text-white">
                {partner.name}
              </span>
              <span className="text-[10px] text-brand-cyan/50 font-semibold tracking-widest uppercase mt-2 transition-colors duration-300 group-hover:text-brand-cyan">
                {isRtl ? partner.subtitleAr : partner.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}