import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/d/1YWvtsl0Z_5ATzPdEiCoaCUESWb04Z0BI"
            alt=""
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950 border-b border-stone-800"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/50 to-transparent rtl:from-transparent rtl:via-stone-950/50 rtl:to-stone-950/90"></div>
        </div>
        <div className="absolute top-0 right-0 opacity-[0.05] pointer-events-none sm:translate-x-1/4 -translate-y-1/4 z-10 w-full h-full flex justify-end items-start overflow-hidden">
          <img src="https://lh3.googleusercontent.com/d/1bbJINa3-02CEfVaHMQvQ987O-lWtoktF" alt="" className="w-full max-w-[80vw] min-w-[400px] object-contain" referrerPolicy="no-referrer" />
        </div>
        <div className="px-6 sm:px-12 max-w-7xl mx-auto relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white flex flex-col gap-2">
              <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-400 rtl:tracking-normal">{t('about.title1')}</span>
              <span className="font-display text-[3.5rem] sm:text-6xl md:text-[80px] lg:text-[100px] leading-[1] font-bold uppercase tracking-tighter text-white rtl:font-sans rtl:tracking-normal">{t('about.title2')}</span>
              <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-400 mt-2 rtl:tracking-normal">{t('about.title3')}</span>
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
    </div>
  );
}
