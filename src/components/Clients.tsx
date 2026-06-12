'use client';

import { motion } from "framer-motion";
import { TranslationKeys } from "@/app/translations";

interface ClientsProps {
  t: TranslationKeys;
  lang: "en" | "ar";
}

export default function Clients({ t, lang }: ClientsProps) {
  const isRtl = lang === "ar";

  const clientLogos = [
    "Social Development Bank",
    "Ministry of Finance",
    "Ministry of Defense",
    "Security Forces Hospital",
    "Nesma & Partners",
    "MODON",
    "Dar Al Riyadh",
    "El-Ajou",
    "Saudi Icon",
    "Sela",
    "MWAN"
  ];

  const clientLogosAr = [
    "بنك التنمية الاجتماعية",
    "وزارة المالية",
    "وزارة الدفاع",
    "مستشفى قوى الأمن",
    "نسمة وشركاهم",
    "مدن",
    "دار الرياض",
    "العجو",
    "سعودي آيكون",
    "صلة",
    "موان"
  ];

  const currentList = isRtl ? clientLogosAr : clientLogos;

  return (
    <section id="clients" className="py-24 section-abyss noise-overlay relative overflow-hidden flex flex-col justify-center">
      <style>{`
        .marquee-inner-clients {
          animation: marqueeScrollClients 40s linear infinite;
          width: max-content;
        }

        .marquee-inner-clients:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScrollClients {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pure CSS Masking for seamless edge fading */
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

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 w-full">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4"
          >
            {t.clients.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-brand-ghost font-medium"
          >
            {t.clients.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Infinite Logo Marquee Strip - Forced LTR to prevent animation breaking */}
      <div className="w-full relative overflow-hidden fade-edges py-10 bg-brand-obsidian/40 border-y border-white/5" dir="ltr">
        <div className="flex marquee-inner-clients will-change-transform items-center">
          {/* Render client list twice for infinite effect */}
          {[...currentList, ...currentList].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center group cursor-default select-none"
            >
              <span className={`px-6 sm:px-10 font-display font-bold tracking-widest transition-colors duration-500 text-white/30 hover:text-white uppercase ${isRtl ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                {client}
              </span>
              {/* Premium minimal separator */}
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/20 group-hover:bg-brand-gold/80 transition-colors duration-500 shadow-[0_0_10px_rgba(201,168,76,0)] group-hover:shadow-[0_0_15px_rgba(201,168,76,0.5)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}