import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Products() {
  const { t } = useLanguage();

  const categories = [
    { name: t('products.filter.levers') },
    { name: t('products.filter.knobs') },
    { name: t('products.filter.pulls') }
  ].filter(c => c.name);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-24 gap-12">
          <div>
            <h1 className="mb-6 text-stone-900 flex flex-col gap-2">
              <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-500 rtl:tracking-normal">{t('products.title1')}</span>
              <span className="font-display text-[3.5rem] sm:text-5xl md:text-[80px] leading-[1] font-bold uppercase tracking-tighter text-stone-900 rtl:font-sans rtl:tracking-normal">{t('products.title2')}</span>
            </h1>
            <p className="max-w-md text-sm md:text-base text-stone-600 font-light leading-relaxed">
              {t('products.desc')}
            </p>
          </div>
          <div className="flex gap-6 sm:gap-8 border-b border-stone-200 pb-4 overflow-x-auto w-full lg:w-auto" style={{ scrollbarWidth: 'none' }}>
            {[t('products.filter.all'), t('products.filter.levers'), t('products.filter.knobs'), t('products.filter.pulls')].filter(Boolean).map((filter, i) => (
              <button key={filter} className={`text-[10px] font-semibold uppercase tracking-[0.2em] whitespace-nowrap ${i === 0 ? "text-stone-900 border-b border-stone-900" : "text-stone-400 hover:text-stone-900"} transition-colors pb-2 mb-[2px]`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {categories.map((cat, idx) => {
            const categoryImages = [
              "https://lh3.googleusercontent.com/d/1P9ZlXWlAgunLcrh-o4volo8nq8xWmEnS", // Levers
              "https://lh3.googleusercontent.com/d/1Jt352x0Yz0S3JJoSCnNsOrv4Jtq1Id66", // Knobs
              "https://lh3.googleusercontent.com/d/1CYzmQjCv9cLE5mmaF35fk1chJIMVI0WF"  // Pulls
            ];
            return (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/5] bg-stone-200 mb-6 overflow-hidden relative border border-stone-300 transition-all duration-700 group-hover:border-stone-400">
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 z-10 mix-blend-multiply flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl border border-stone-100 uppercase tracking-widest text-[9px] font-bold text-stone-900">
                      Explore Range
                   </div>
                </div>
                <div className="w-full h-full bg-[#F3F1ED] transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src={categoryImages[idx % categoryImages.length]} 
                    alt={cat.name} 
                    loading="lazy"
                    className="w-full h-full object-cover object-center" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
              </div>
              <div className="border-t border-stone-200 pt-6 mt-auto">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-900 mb-2">{cat.name}</h3>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest rtl:flex rtl:gap-1 mt-4 group-hover:text-stone-900 transition-colors flex items-center gap-2">{t('products.view_range')} <span className="ltr:inline-block transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2">&rarr;</span></p>
              </div>
            </motion.div>
          )})}
        </div>
      </motion.div>
    </div>
  );
}
