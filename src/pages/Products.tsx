import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Products() {
  const { t } = useLanguage();

  const categories = [
    { name: t('products.filter.levers') },
    { name: t('products.filter.pulls') },
    { name: t('products.filter.knobs') },
    { name: t('products.filter.accessories') }
  ];

  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] rtl:tracking-normal rtl:leading-[1.4] mb-4">
              {t('products.title1')} <br className="hidden lg:block"/><span className="text-white">{t('products.title2')}</span>
            </h1>
            <p className="max-w-md text-sm text-black/70">
              {t('products.desc')}
            </p>
          </div>
          <div className="flex gap-6 sm:gap-4 border-b border-black/10 pb-2 overflow-x-auto w-full md:w-auto mt-4 sm:mt-0" style={{ scrollbarWidth: 'none' }}>
            {[t('products.filter.all'), t('products.filter.levers'), t('products.filter.pulls'), t('products.filter.knobs'), t('products.filter.accessories')].map((filter, i) => (
              <button key={filter} className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap ${i === 0 ? "text-black border-b border-black" : "text-black/60 hover:text-black"} transition-colors pb-1`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-white mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>
                <div className="w-full h-full flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/70 text-center px-4">
                    {t('products.img.coming_soon')}
                  </span>
                </div>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest">{cat.name}</h3>
              <p className="text-xs text-black/50 font-mono mt-1 rtl:flex rtl:gap-1">{t('products.view_range')} <span className="ltr:inline-block">&rarr;</span></p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
