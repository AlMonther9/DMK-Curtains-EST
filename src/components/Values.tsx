import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { MouseEvent } from "react";
import { TranslationKeys } from "@/app/translations";

interface ValuesProps {
  t: TranslationKeys;
  lang: "en" | "ar";
}

function ValueCard({ num, title, text }: { num: string; title: string; text: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Spotlight backing gradient following the mouse
  const background = useMotionTemplate`
    radial-gradient(
      280px circle at ${mouseX}px ${mouseY}px,
      rgba(201, 168, 76, 0.12),
      transparent 80%
    )
  `;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
      className="relative group overflow-hidden rounded-2xl border border-brand-teal/10 bg-[#1E2A33]/25 p-8 transition-all duration-300 hover:border-brand-gold/30 hover:-translate-y-1.5 flex flex-col justify-between min-h-[270px] shadow-lg"
    >
      {/* Spotlight highlight backing */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{ background }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full w-full">
        <div>
          <span className="font-display font-light text-4xl text-brand-teal/30 group-hover:text-brand-gold transition-colors duration-300 block mb-6">
            {num}
          </span>
          <h3 className="text-lg font-display font-bold text-white mb-3 tracking-wide">{title}</h3>
          <p className="text-xs sm:text-sm text-brand-ghost leading-relaxed">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Values({ t, lang }: ValuesProps) {
  const valueItems = [
    {
      num: "01",
      title: t.values.qualityTitle,
      text: t.values.qualityText,
    },
    {
      num: "02",
      title: t.values.innovationTitle,
      text: t.values.innovationText,
    },
    {
      num: "03",
      title: t.values.sustainabilityTitle,
      text: t.values.sustainabilityText,
    },
    {
      num: "04",
      title: t.values.customerTitle,
      text: t.values.customerText,
    },
  ];

  return (
    <section className="py-24 section-abyss dot-grid noise-overlay relative overflow-hidden">
      
      {/* Gold thread divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Ambient mesh gradients */}
      <div className="mesh-warm bottom-0 right-10" />
      <div className="mesh-teal top-10 left-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4"
          >
            {t.values.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-brand-ghost font-medium"
          >
            {t.values.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueItems.map((val, idx) => (
            <ValueCard 
              key={idx}
              num={val.num}
              title={val.title}
              text={val.text}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
