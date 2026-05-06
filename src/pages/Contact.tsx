import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
          <div>
            <h1 className="mb-6 text-stone-900 flex flex-col gap-2">
              <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-500 rtl:tracking-normal">{t('contact.title1')}</span>
              <span className="font-display text-[3.5rem] sm:text-5xl md:text-[80px] leading-[1] font-bold uppercase tracking-tighter text-stone-900 rtl:font-sans rtl:tracking-normal">{t('contact.title2')}</span>
            </h1>
            <p className="max-w-md text-sm md:text-base text-stone-600 font-light leading-relaxed mb-12">
              {t('contact.desc')}
            </p>
            <div className="w-full max-w-xl h-64 overflow-hidden border border-stone-200 hidden md:block">
               <img 
                 src="https://lh3.googleusercontent.com/d/1Z08L1hrdsPME_2MosvIrso_NMxoZFaLv" 
                 alt="Delta Hardware Display" 
                 loading="lazy"
                 className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                 referrerPolicy="no-referrer"
               />
            </div>
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
                <li className="flex flex-col">
                  <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.2em] text-stone-400 mb-1">{t('contact.label.phone')}</span>
                  <a href={`tel:${t('contact.factory.phone').replace(/\s+/g, '')}`} dir="ltr" className="rtl:text-right w-fit hover:opacity-70 transition-opacity font-light">{t('contact.factory.phone')}</a>
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
  );
}
