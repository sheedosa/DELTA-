import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-16 sm:mb-24 text-stone-900 flex flex-col gap-2">
          <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-500 rtl:tracking-normal">{t('about.title1')}</span>
          <span className="font-display text-[3.5rem] sm:text-6xl md:text-[80px] lg:text-[100px] leading-[1] font-bold uppercase tracking-tighter text-stone-900 rtl:font-sans rtl:tracking-normal">{t('about.title2')}</span>
          <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-400 mt-2 rtl:tracking-normal">{t('about.title3')}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-6 md:pr-12 rtl:md:pr-0 rtl:md:pl-12">
             <p className="text-2xl leading-relaxed font-display font-medium text-stone-800 tracking-tight">
               {t('about.desc1')}
            </p>
            <div className="w-12 h-px bg-stone-300 my-8"></div>
            
            <img 
              src="https://lh3.googleusercontent.com/d/1x-0aMJcNN6aZr37jY_6_3gVbOzyVYtRs" 
              alt="Delta Architectural Handles" 
              loading="lazy"
              className="w-full aspect-[4/3] object-cover mb-8"
              referrerPolicy="no-referrer"
            />

            <p className="text-base leading-relaxed text-stone-600 font-light">
              {t('about.desc2')}
            </p>
            <p className="text-base leading-relaxed text-stone-600 font-light">
              {t('about.desc3')}
            </p>
            {t('about.desc4') && (
              <p className="text-xs font-semibold uppercase tracking-widest pt-6 text-stone-800">
                {t('about.desc4')}
              </p>
            )}
          </div>
          <div className="bg-white/50 backdrop-blur-sm p-10 sm:p-12 border border-stone-200 self-start group hover:bg-white transition-colors duration-500">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-8 text-stone-400">{t('about.company.title')}</h3>
            <p className="text-sm leading-relaxed text-stone-700 mb-6 font-light">
              {t('about.company.desc1')}
            </p>
            <p className="text-sm leading-relaxed text-stone-700 mb-10 font-light">
              {t('about.company.desc2')}
            </p>
            <Link to="/contact" className="text-[10px] font-semibold uppercase tracking-[0.2em] border-b border-stone-300 pb-2 text-stone-500 hover:border-stone-900 hover:text-stone-900 transition-all inline-block">
              {t('about.company.link')}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
