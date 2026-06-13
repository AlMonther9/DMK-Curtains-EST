import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { TranslationKeys } from "@/app/translations";

interface HeroProps {
  t: TranslationKeys;
  lang: "en" | "ar";
}

type Mood = "city" | "patio";

export default function Hero({ t, lang }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const frameIndexRef = useRef(0);

  // Track scroll progress of the entire Hero section container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const TOTAL_FRAMES = 48;
  const [mood, setMood] = useState<Mood>("patio");
  const preloadedFolders = useRef<Record<string, boolean>>({});

  const getFramePath = (idx: number, currentMood: Mood = mood) => {
    const folder = currentMood === "city" ? "hero-frames" : "hero-frames-patio";
    return `/${folder}/frame_${String(idx).padStart(3, '0')}.webp`;
  };

  const preloadFolder = async (folder: string) => {
    if (preloadedFolders.current[folder]) return;
    preloadedFolders.current[folder] = true;

    const concurrency = 4;
    const indices = Array.from({ length: TOTAL_FRAMES }, (_, i) => i);

    for (let i = 0; i < indices.length; i += concurrency) {
      const batch = indices.slice(i, i + concurrency).map((idx) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.src = `/${folder}/frame_${String(idx).padStart(3, '0')}.webp`;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      });
      await Promise.all(batch);
    }
  };

  // Preload active mood after mount, then inactive mood
  useEffect(() => {
    const activeFolder = mood === "city" ? "hero-frames" : "hero-frames-patio";
    const inactiveFolder = mood === "city" ? "hero-frames-patio" : "hero-frames";

    const runPreloads = async () => {
      // 1. Preload active mood
      await preloadFolder(activeFolder);
      
      // 2. Wait 3 seconds, then preload inactive mood
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await preloadFolder(inactiveFolder);
    };

    let timer: NodeJS.Timeout;
    if (typeof window.requestIdleCallback === "function") {
      window.requestIdleCallback(() => {
        runPreloads();
      });
    } else {
      timer = setTimeout(runPreloads, 1000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Synchronize scroll progress with frame indexes directly on the DOM (bypassing React re-renders)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(TOTAL_FRAMES - 1, Math.floor(latest * TOTAL_FRAMES));
      if (idx !== frameIndexRef.current) {
        frameIndexRef.current = idx;
        if (imgRef.current) {
          imgRef.current.src = getFramePath(idx);
        }
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, mood]);

  // Update DOM frame path immediately when mood changes
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.src = getFramePath(frameIndexRef.current);
    }
  }, [mood]);

  const handleMoodChange = (newMood: Mood) => {
    const newFolder = newMood === "city" ? "hero-frames" : "hero-frames-patio";
    preloadFolder(newFolder);
    setMood(newMood);
  };

  // Scroll-reactive transformations for text content
  const badgeOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.9, 1.0], [0, 1, 1, 0]);
  const badgeY = useTransform(scrollYProgress, [0.05, 0.25, 0.9, 1.0], [25, 0, 0, -25]);

  const titleOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.9, 1.0], [0, 1, 1, 0]);
  const titleScale = useTransform(scrollYProgress, [0.15, 0.35, 0.9, 1.0], [0.94, 1, 1, 0.94]);

  const subtitleOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.9, 1.0], [0, 1, 1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0.25, 0.45, 0.9, 1.0], [20, 0, 0, -20]);

  const ctaOpacity = useTransform(scrollYProgress, [0.35, 0.55, 0.9, 1.0], [0, 1, 1, 0]);
  const ctaY = useTransform(scrollYProgress, [0.35, 0.55, 0.9, 1.0], [20, 0, 0, -20]);

  // Scroll down indicator fades out quickly as we scroll past the start
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  // Background fades out slightly at the very end to merge with the next section
  const bgOpacity = useTransform(scrollYProgress, [0.85, 1.0], [1, 0.4]);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-[#07090b] z-30">
      {/* Hoisted critical preload for first frame (LCP optimization) */}
      <link
        rel="preload"
        href="/hero-frames-patio/frame_000.webp"
        as="image"
        type="image/webp"
        fetchPriority="high"
      />

      {/* Sticky Frame Viewer Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Active Scroll Frame */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: bgOpacity }}
        >
          <img
            ref={imgRef}
            src={getFramePath(0)}
            alt="Curtains opening frame"
            className="object-cover object-center w-full h-full select-none"
            draggable={false}
          />
          {/* Subtle dark vignette overlay for elite readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0C0F12]/75 via-[#0C0F12]/15 to-[#0C0F12]" />
        </motion.div>

        {/* Content Box */}
        <div className="max-w-5xl mx-auto px-6 text-center relative z-20 mt-12 pointer-events-auto">

          {/* Dawn Gulf Group Affiliation Badge */}
          <motion.div
            style={{
              opacity: badgeOpacity,
              y: badgeY
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-[10px] sm:text-xs font-bold text-brand-gold uppercase tracking-widest">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            style={{
              opacity: titleOpacity,
              scale: titleScale
            }}
            className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            {lang === 'en' ? (
              <>
                Where{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-seafoam">
                  Precision
                </span>{" "}
                Meets{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gold via-[#F3E7C4] to-brand-gold">
                  Elegance
                </span>
              </>
            ) : (
              <>
                حيث تلتقي{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-teal via-brand-cyan to-brand-seafoam">
                  الدقة
                </span>{" "}
                بـ{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gold via-[#F3E7C4] to-brand-gold">
                  الأناقة
                </span>
              </>
            )}
          </motion.h1>

          {/* Description */}
          <motion.p
            style={{
              opacity: subtitleOpacity,
              y: subtitleY
            }}
            className="text-sm sm:text-base md:text-lg text-brand-mist max-w-2xl mx-auto leading-relaxed mb-10 font-medium"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            style={{
              opacity: ctaOpacity,
              y: ctaY
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact" className="btn-primary w-full sm:w-auto justify-center text-center">
              <span className="relative z-10">{t.hero.cta1}</span>
            </a>
            <a href="#collections" className="btn-outline w-full sm:w-auto justify-center text-center">
              <span className="relative z-10">{t.hero.cta2}</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-widest text-brand-ghost font-bold">
            {lang === 'en' ? 'Scroll Down' : 'اسحب لأسفل'}
          </span>
          <div className="w-5 h-8 rounded-full border border-brand-teal/30 flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce" />
          </div>
        </motion.div>

        {/* Mood/View Selector Capsule */}
        <div className="absolute bottom-8 right-8 z-40 flex items-center gap-2">
          <div className="p-1 rounded-full bg-[#0C0F12]/80 border border-white/10 backdrop-blur-md flex items-center gap-1 shadow-lg">
            <button
              onClick={() => handleMoodChange("city")}
              onMouseEnter={() => preloadFolder("hero-frames")}
              onFocus={() => preloadFolder("hero-frames")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${mood === "city"
                ? "bg-brand-gold text-black shadow-md"
                : "text-brand-ghost hover:text-white"
                }`}
            >
              {lang === "en" ? "Urban View" : "إطلالة المدينة"}
            </button>
            <button
              onClick={() => handleMoodChange("patio")}
              onMouseEnter={() => preloadFolder("hero-frames-patio")}
              onFocus={() => preloadFolder("hero-frames-patio")}
              className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${mood === "patio"
                ? "bg-brand-gold text-black shadow-md"
                : "text-brand-ghost hover:text-white"
                }`}
            >
              {lang === "en" ? "Garden Patio" : "حديقة فناء"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
