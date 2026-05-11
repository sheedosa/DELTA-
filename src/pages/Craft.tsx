import { motion } from "motion/react";
import { Drill, Sparkles, Award, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import heroBg from "../assets/images/hero-bg.png";
import logo from "../assets/images/logo.png";
import pLever05 from "../assets/images/product-lever-05.png";

export function Craft() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src={heroBg}
            alt=""
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950 border-b border-stone-800"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/50 to-transparent rtl:from-transparent rtl:via-stone-950/50 rtl:to-stone-950/90"></div>
        </div>
        <div className="absolute top-0 end-0 opacity-[0.05] pointer-events-none sm:translate-x-1/4 -translate-y-1/4 z-10 w-full h-full flex justify-end items-start overflow-hidden">
          <img src={logo} alt="" className="w-full max-w-[80vw] min-w-[400px] object-contain" />
        </div>
        <div className="px-6 sm:px-12 max-w-7xl mx-auto relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white flex flex-col gap-2">
              <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-400 rtl:tracking-normal">{t('craft.title1')}</span>
              <span className="font-display text-[3.5rem] sm:text-6xl md:text-[80px] lg:text-[100px] leading-[1] font-bold uppercase tracking-tighter text-white rtl:font-sans rtl:tracking-normal">{t('craft.title2')}</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="pt-16 pb-24 px-6 sm:px-12 max-w-7xl mx-auto flex-grow w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-24">
          {[
            { icon: <Drill />, title: t('craft.val1.title'), desc: t('craft.val1.desc') },
            { icon: <Star />, title: t('craft.val2.title'), desc: t('craft.val2.desc') },
            { icon: <Award />, title: t('craft.val3.title'), desc: t('craft.val3.desc') },
            { icon: <Sparkles />, title: t('craft.val4.title'), desc: t('craft.val4.desc') }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col group"
            >
              <div className="text-stone-400 mb-8 pb-8 border-b border-stone-300 transition-colors group-hover:border-stone-900 group-hover:text-stone-900">
                {item.icon}
              </div>
              <h3 className="font-semibold uppercase tracking-[0.15em] text-xs text-stone-900 mb-4">{item.title}</h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden mb-24 grayscale-[15%] hover:grayscale-0 transition-all duration-1000">
          <img 
            src={pLever05} 
            alt="Delta Craftsmanship" 
            loading="lazy"
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="text-center max-w-4xl mx-auto py-16 px-4">
          <div className="w-px h-16 bg-stone-300 mx-auto mb-12"></div>
          <p className="font-display text-2xl md:text-4xl font-medium leading-[1.4] text-stone-800 tracking-tight">
            {t('craft.quote')}
          </p>
        </div>
      </motion.div>
    </div>
    </div>
  );
}
