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
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 sm:mb-16 mt-4 sm:mt-0 gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] rtl:tracking-normal rtl:leading-[1.4] mb-4 transition-colors">
              {t('contact.title1')} <br className="hidden lg:block" /><span className="text-white">{t('contact.title2')}</span>
            </h1>
            <p className="max-w-md text-sm text-black/70">
              {t('contact.desc')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Distributor */}
            <div className="bg-white p-8 border-t-4 border-black">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 block mb-4">{t('contact.dist.title')}</span>
              <h3 className="font-serif rtl:font-sans text-2xl font-medium mb-2">{t('contact.dist.name')}</h3>
              <p className="text-sm font-mono text-black/90 font-medium mb-6">{t('contact.dist.role')}</p>
              
              <ul className="space-y-3 text-sm">
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">{t('contact.label.phone')}</span>
                  <span dir="ltr" className="rtl:text-right w-fit">+218 92 577 6619</span>
                </li>
              </ul>
            </div>

            {/* Factory */}
            <div className="bg-white p-8 border-t-4 border-black">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-50 block mb-4">{t('contact.factory.title')}</span>
              <h3 className="font-serif rtl:font-sans text-2xl font-medium mb-2">{t('contact.factory.name')}</h3>
              <p className="text-sm font-mono text-black/90 font-medium mb-6">{t('contact.factory.role')}</p>
              
              <ul className="space-y-3 text-sm">
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">{t('contact.label.phone')}</span>
                  <span dir="ltr" className="rtl:text-right w-fit">+90 532 354 88 43</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="font-bold uppercase tracking-widest text-sm mb-8">{t('contact.form.title')}</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">{t('contact.form.name')}</label>
                <input type="text" className="border-b border-black/20 py-2 w-full outline-none focus:border-black transition-colors bg-transparent placeholder-black/30 rtl:text-right" placeholder={t('contact.form.name_ph')} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">{t('contact.form.contact')}</label>
                <input type="text" className="border-b border-black/20 py-2 w-full outline-none focus:border-black transition-colors bg-transparent placeholder-black/30 rtl:text-right" placeholder={t('contact.form.contact_ph')} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">{t('contact.form.msg')}</label>
                <textarea rows={4} className="border-b border-black/20 py-2 w-full outline-none focus:border-black transition-colors bg-transparent placeholder-black/30 resize-none rtl:text-right" placeholder={t('contact.form.msg_ph')}></textarea>
              </div>
              <button 
                type="submit"
                className="bg-white border-2 border-black text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-neutral-100 transition-colors rtl:self-end self-start mt-4"
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
