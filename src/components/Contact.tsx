import { useState } from "react";
import { CheckCircle, MapPin, Mail, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { TranslationKeys } from "@/app/translations";

interface ContactProps {
  t: TranslationKeys;
  lang: "en" | "ar";
}

export default function Contact({ t, lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    message: "",
    sector: "commercial",
    automation: "motorized",
    location: "ksa"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        org: "",
        email: "",
        phone: "",
        message: "",
        sector: "commercial",
        automation: "motorized",
        location: "ksa"
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 section-abyss dot-grid noise-overlay relative overflow-hidden">
      
      {/* Gold thread divider at top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Ambient mesh */}
      <div className="mesh-teal top-1/4 left-1/2 -translate-x-1/2" />
      <div className="mesh-warm bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-ghost mt-4 font-medium"
          >
            {t.contact.subtitle}
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[1px] bg-brand-gold mt-6" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: lang === 'en' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:col-span-7 bg-[#1E2A33]/40 border border-brand-teal/15 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {isSubmitted ? (
              <div className="py-12 px-6 flex flex-col items-center text-center gap-6 animate-fade-up">
                <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/25">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl">
                  {lang === 'en' ? 'Inquiry Sent Successfully' : 'تم إرسال الطلب بنجاح'}
                </h3>
                <p className="text-brand-ghost max-w-md text-sm leading-relaxed">
                  {t.contact.successMessage}
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline mt-4 cursor-pointer"
                >
                  {lang === 'en' ? 'Submit Another Inquiry' : 'إرسال طلب آخر'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                
                {/* Location Scope Segmented Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                    {t.contact.locationLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, location: "ksa" })}
                      className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        formData.location === "ksa"
                          ? "bg-brand-teal text-[#0C0F12] border-transparent font-extrabold"
                          : "bg-[#0C0F12]/80 text-brand-ghost border-brand-teal/10 hover:border-brand-teal/30"
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{t.contact.ksa}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, location: "oman" })}
                      className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        formData.location === "oman"
                          ? "bg-brand-teal text-[#0C0F12] border-transparent font-extrabold"
                          : "bg-[#0C0F12]/80 text-brand-ghost border-brand-teal/10 hover:border-brand-teal/30"
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{t.contact.oman}</span>
                    </button>
                  </div>
                </div>

                {/* Project Sector Segmented Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                    {t.contact.projectTypeLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2 mt-1">
                    {["commercial", "residential", "healthcare"].map((sec) => (
                      <button
                        key={sec}
                        type="button"
                        onClick={() => setFormData({ ...formData, sector: sec })}
                        className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                          formData.sector === sec
                            ? "bg-brand-teal/15 text-brand-teal border-brand-teal/40"
                            : "bg-[#0C0F12]/80 text-brand-ghost border-brand-teal/10 hover:border-brand-teal/30"
                        }`}
                      >
                        {sec === "commercial" && t.contact.commercial}
                        {sec === "residential" && t.contact.residential}
                        {sec === "healthcare" && t.contact.healthcare}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Automation Intent Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                    {t.contact.systemIntentLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, automation: "manual" })}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        formData.automation === "manual"
                          ? "bg-brand-teal/15 text-brand-teal border-brand-teal/40"
                          : "bg-[#0C0F12]/80 text-brand-ghost border-brand-teal/10 hover:border-brand-teal/30"
                      }`}
                    >
                      {t.contact.manual}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, automation: "motorized" })}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                        formData.automation === "motorized"
                          ? "bg-brand-teal/15 text-brand-teal border-brand-teal/40"
                          : "bg-[#0C0F12]/80 text-brand-ghost border-brand-teal/10 hover:border-brand-teal/30"
                      }`}
                    >
                      {t.contact.motorized}
                    </button>
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-brand-ghost">{t.contact.nameLabel}</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder} 
                      className="form-field"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="org" className="text-xs font-bold text-brand-ghost">{t.contact.orgLabel}</label>
                    <input 
                      type="text" 
                      id="org" 
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder={t.contact.orgPlaceholder} 
                      className="form-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-brand-ghost">{t.contact.emailLabel}</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder} 
                      className="form-field"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-brand-ghost">{t.contact.phoneLabel}</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder} 
                      className="form-field"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-brand-ghost">{t.contact.messageLabel}</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder} 
                    className="form-field resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center py-4 text-xs font-extrabold uppercase tracking-widest mt-2 cursor-pointer"
                >
                  {isSubmitting ? t.contact.sending : t.contact.sendBtn}
                  {!isSubmitting && (lang === 'en' ? <ArrowRight className="w-4 h-4 ml-1" /> : <ArrowLeft className="w-4 h-4 mr-1" />)}
                </button>

              </form>
            )}
          </motion.div>

          {/* Contact Details Side */}
          <motion.div 
            initial={{ opacity: 0, x: lang === 'en' ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            
            {/* Riyadh Office Card */}
            <div className="glass-card p-6 border-brand-teal/10 hover:border-brand-gold/25 transition-all duration-300 bg-[#1E2A33]/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🇸🇦</span>
                <div>
                  <h3 className="font-display font-bold text-white text-base leading-tight">
                    {t.contact.ksaOffice}
                  </h3>
                  <span className="text-[9px] text-brand-gold font-bold uppercase tracking-wider">
                    {lang === 'en' ? 'Kingdom of Saudi Arabia' : 'المملكة العربية السعودية'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-brand-ghost leading-relaxed mb-4 font-medium">
                {t.contact.ksaAddress}
              </p>
              <div className="h-[1px] bg-brand-teal/10 my-4" />
              <div className="flex flex-col gap-3">
                <a href="tel:+966500000000" className="flex items-center gap-2.5 text-xs text-brand-mist hover:text-brand-teal transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  <span>+966 50 000 0000</span>
                </a>
                <a href="mailto:ksa@dmkcurtains.com" className="flex items-center gap-2.5 text-xs text-brand-mist hover:text-brand-teal transition-colors">
                  <Mail className="w-3.5 h-3.5 text-brand-gold" />
                  <span>ksa@dmkcurtains.com</span>
                </a>
              </div>
            </div>

            {/* Muscat Office Card */}
            <div className="glass-card p-6 border-brand-teal/10 hover:border-brand-gold/25 transition-all duration-300 bg-[#1E2A33]/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🇴🇲</span>
                <div>
                  <h3 className="font-display font-bold text-white text-base leading-tight">
                    {t.contact.omanOffice}
                  </h3>
                  <span className="text-[9px] text-brand-gold font-bold uppercase tracking-wider">
                    {lang === 'en' ? 'Sultanate of Oman' : 'سلطنة عمان'}
                  </span>
                </div>
              </div>
              <p className="text-xs text-brand-ghost leading-relaxed mb-4 font-medium">
                {t.contact.omanAddress}
              </p>
              <div className="h-[1px] bg-brand-teal/10 my-4" />
              <div className="flex flex-col gap-3">
                <a href="tel:+96890000000" className="flex items-center gap-2.5 text-xs text-brand-mist hover:text-brand-teal transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  <span>+968 9000 0000</span>
                </a>
                <a href="mailto:oman@dmkcurtains.com" className="flex items-center gap-2.5 text-xs text-brand-mist hover:text-brand-teal transition-colors">
                  <Mail className="w-3.5 h-3.5 text-brand-gold" />
                  <span>oman@dmkcurtains.com</span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
