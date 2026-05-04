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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] rtl:tracking-normal rtl:leading-[1.4] mb-8 sm:mb-16 mt-4 sm:mt-0 break-words">
          {t('about.title1')}<br className="hidden lg:block"/> {t('about.title2')} <br className="hidden md:block lg:hidden"/><span className="text-white">{t('about.title3')}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-6">
             <p className="text-lg leading-relaxed font-serif rtl:font-sans">
               {t('about.desc1')}
            </p>
            <p className="text-sm leading-relaxed text-black/70">
              {t('about.desc2')}
            </p>
            <p className="text-sm leading-relaxed text-black/70">
              {t('about.desc3')}
            </p>
            <p className="text-sm font-bold uppercase tracking-widest pt-4">
              {t('about.desc4')}
            </p>
          </div>
          <div className="bg-white p-6 flex-1 sm:p-8 border-l-4 rtl:border-l-0 rtl:border-r-4 border-black self-start">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">{t('about.company.title')}</h3>
            <p className="text-sm leading-relaxed text-black/90 mb-6 font-medium">
              {t('about.company.desc1')}
            </p>
            <p className="text-sm leading-relaxed text-black/90 mb-6 font-medium">
              {t('about.company.desc2')}
            </p>
            <Link to="/contact" className="text-xs font-bold uppercase tracking-widest underline decoration-black decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">
              {t('about.company.link')}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
