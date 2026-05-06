import { motion } from "motion/react";
import { Drill, Sparkles, Award, Star } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Craft() {
  const { t } = useLanguage();
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-16 sm:mb-24 text-stone-900 flex flex-col gap-2">
          <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-500 rtl:tracking-normal">{t('craft.title1')}</span>
          <span className="font-display text-[3.5rem] sm:text-6xl md:text-[80px] lg:text-[100px] leading-[1] font-bold uppercase tracking-tighter text-stone-900 rtl:font-sans rtl:tracking-normal">{t('craft.title2')}</span>
        </h1>
        
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
            src="https://lh3.googleusercontent.com/d/1_RHt3p6i50iOj25SFhJNOLI6VBqOVfts" 
            alt="Delta Craftsmanship" 
            loading="lazy"
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
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
  );
}
