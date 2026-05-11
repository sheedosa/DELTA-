import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

import heroBg from "../assets/images/hero-bg.png";
import logo from "../assets/images/logo.png";
import pClassic01 from "../assets/images/product-classic-01.png";


export function Contact() {
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
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
              <div>
                <h1 className="mb-6 text-white flex flex-col gap-2">
                  <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-400 rtl:tracking-normal">{t('contact.title1')}</span>
                  <span className="font-display text-[3.5rem] sm:text-5xl md:text-[80px] leading-[1] font-bold uppercase tracking-tighter text-white rtl:font-sans rtl:tracking-normal">{t('contact.title2')}</span>
                </h1>
                <p className="max-w-md text-sm md:text-base text-stone-300 font-light leading-relaxed">
                  {t('contact.desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pt-16 pb-24 px-6 sm:px-12 max-w-7xl mx-auto flex-grow w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
            <div className="w-full max-w-xl h-64 overflow-hidden border border-stone-200 hidden md:block">
               <img 
                 src={pClassic01} 
                 alt="Delta Hardware Display" 
                 loading="lazy"
                 className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
               />
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
            {/* Distributor */}
            <div className="flex flex-col group">
              <div className="border-b border-stone-300 pb-6 mb-8 group-hover:border-stone-500 transition-colors">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 block mb-4">{t('contact.dist.title')}</span>
                <h3 className="font-display text-2xl font-bold tracking-tight mb-2 text-stone-900">{t('contact.dist.name')}</h3>
                <p className="text-sm text-stone-500 font-light">{t('contact.dist.role')}</p>
              </div>
              
              <ul className="space-y-6 text-xs sm:text-sm text-stone-800">
                <li className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400 mb-1">{t('contact.label.location')}</span>
                  <span className="w-fit font-light">{t('contact.dist.loc')}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400 mb-1">{t('contact.label.email')}</span>
                  <a href={`mailto:${t('contact.dist.email')}`} className="w-fit hover:opacity-70 transition-opacity font-light">{t('contact.dist.email')}</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400 mb-1">{t('contact.label.website')}</span>
                  <a href={`https://${t('contact.dist.website')}`} target="_blank" rel="noopener noreferrer" className="w-fit hover:opacity-70 transition-opacity font-light">{t('contact.dist.website')}</a>
                </li>
                <li className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400 mb-1">{t('contact.label.phone')}</span>
                  <a href={`tel:${t('contact.dist.phone').replace(/\s+/g, '')}`} dir="ltr" className="rtl:text-right w-fit hover:opacity-70 transition-opacity font-light">{t('contact.dist.phone')}</a>
                </li>
              </ul>
            </div>

            {/* Factory */}
            <div className="flex flex-col group">
              <div className="border-b border-stone-300 pb-6 mb-8 group-hover:border-stone-500 transition-colors">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400 block mb-4">{t('contact.factory.title')}</span>
                <h3 className="font-display text-2xl font-bold tracking-tight mb-2 text-stone-900">{t('contact.factory.name')}</h3>
                <p className="text-sm text-stone-500 font-light">{t('contact.factory.role')}</p>
              </div>
              
              <ul className="space-y-6 text-xs sm:text-sm text-stone-800">
                <li className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400 mb-1">{t('contact.label.email')}</span>
                  <a href={`mailto:${t('contact.factory.email')}`} className="w-fit hover:opacity-70 transition-opacity font-light">{t('contact.factory.email')}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white/40 backdrop-blur-sm p-8 sm:p-12 lg:p-16 border border-stone-200">
            <h3 className="font-semibold uppercase tracking-[0.2em] text-xs mb-12 text-stone-400">{t('contact.form.title')}</h3>
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">{t('contact.form.name')}</label>
                <input type="text" className="border-b border-stone-300 pb-3 w-full outline-none focus:border-stone-800 transition-colors bg-transparent placeholder-stone-300 rtl:text-right font-light" placeholder={t('contact.form.name_ph')} />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">{t('contact.form.contact')}</label>
                <input type="text" className="border-b border-stone-300 pb-3 w-full outline-none focus:border-stone-800 transition-colors bg-transparent placeholder-stone-300 rtl:text-right font-light" placeholder={t('contact.form.contact_ph')} />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">{t('contact.form.msg')}</label>
                <textarea rows={4} className="border-b border-stone-300 pb-3 w-full outline-none focus:border-stone-800 transition-colors bg-transparent placeholder-stone-300 resize-none rtl:text-right font-light" placeholder={t('contact.form.msg_ph')}></textarea>
              </div>
              <button 
                type="submit"
                className="bg-stone-900 text-white px-10 py-5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors rtl:self-end self-start mt-4"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>

      </motion.div>
    </div>
    </div>
  );
}
