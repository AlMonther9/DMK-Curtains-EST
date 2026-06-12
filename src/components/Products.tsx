import { motion } from "framer-motion";
import { TranslationKeys } from "@/app/translations";

interface ProductsProps {
  t: TranslationKeys;
  lang: "en" | "ar";
}

export default function Products({ t, lang }: ProductsProps) {
  const serviceItems = [
    {
      badge: lang === 'en' ? 'Core Services' : 'الخدمات الأساسية',
      title: t.products.p1Title,
      text: t.products.p1Text,
      span: "md:col-span-1"
    },
    {
      badge: lang === 'en' ? 'Specialized Medical' : 'الرعاية الطبية',
      title: t.products.p2Title,
      text: t.products.p2Text,
      span: "md:col-span-1"
    },
    {
      badge: lang === 'en' ? 'Smart Home Integration' : 'تكامل المنازل الذكية',
      title: t.products.p3Title,
      text: t.products.p3Text,
      span: "md:col-span-1"
    },
    {
      badge: lang === 'en' ? 'Engineering & Setup' : 'الهندسة والتركيب',
      title: t.products.p4Title,
      text: t.products.p4Text,
      span: "md:col-span-1"
    },
  ];

  return (
    <section id="services" className="py-24 section-obsidian dot-grid noise-overlay relative overflow-hidden">
      
      {/* Gold thread divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Ambient mesh */}
      <div className="mesh-teal top-1/2 left-1/4" />
      <div className="mesh-warm bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-4"
          >
            {t.products.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-brand-ghost font-medium"
          >
            {t.products.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`product-card p-8 flex flex-col justify-between min-h-[220px] relative overflow-hidden group cursor-default shadow-xl ${item.span}`}
            >
              {/* Subtle hover gradient sweep background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/0 via-brand-gold/[0.02] to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold mb-3.5 block">
                  {item.badge}
                </span>
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-white mb-3 tracking-wide">{item.title}</h3>
                <p className="text-xs sm:text-sm text-brand-ghost leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
