import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

import heroBg from "../assets/images/hero-bg.png";
import logo from "../assets/images/logo.png";
import pLever01 from "../assets/images/product-lever-01.png";
import pKnob01 from "../assets/images/product-knob-01.png";
import pPull01 from "../assets/images/product-pull-01.png";
import pLever02 from "../assets/images/product-lever-02.png";
import pLever03 from "../assets/images/product-lever-03.png";
import pPull02 from "../assets/images/product-pull-02.png";
import pPull03 from "../assets/images/product-pull-03.png";
import pHinge01 from "../assets/images/product-hinge-01.png";
import pLever04 from "../assets/images/product-lever-04.png";
import pPull04 from "../assets/images/product-pull-04.png";
import pSystem01 from "../assets/images/product-system-01.png";
import pLever05 from "../assets/images/product-lever-05.png";
import pClassic01 from "../assets/images/product-classic-01.png";

export function Products() {
  const { t } = useLanguage();

  const products = [
    { img: pLever01, name: "Lever Model 01" },
    { img: pKnob01, name: "Knob Model 01" },
    { img: pPull01, name: "Pull Model 01" },
    { img: pLever02, name: "Lever Model 02" },
    { img: pLever03, name: "Lever Model 03" },
    { img: pPull02, name: "Pull Model 02" },
    { img: pPull03, name: "Pull Model 03" },
    { img: pHinge01, name: "Hinge Model 01" },
    { img: pLever04, name: "Lever Model 04" },
    { img: pPull04, name: "Pull Model 04" },
    { img: pSystem01, name: "System Model 01" },
    { img: pLever05, name: "Lever Model 05" },
    { img: pClassic01, name: "Classic Model 01" },
  ];

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
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12">
              <div>
                <h1 className="text-white flex flex-col gap-2">
                  <span className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-stone-400 rtl:tracking-normal">{t('products.title1')}</span>
                  <span className="font-display text-[3.5rem] sm:text-5xl md:text-[80px] leading-[1] font-bold uppercase tracking-tighter text-white rtl:font-sans rtl:tracking-normal">{t('products.title2')}</span>
                </h1>
                <p className="max-w-md text-sm md:text-base text-stone-300 font-light leading-relaxed mt-6">
                  {t('products.desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pt-16 pb-24 px-6 sm:px-12 max-w-7xl mx-auto flex-grow w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, idx) => {
            return (
            <motion.div 
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/5] bg-stone-200 mb-6 overflow-hidden relative border border-stone-300 transition-all duration-700 group-hover:border-stone-400">
                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500 z-10 mix-blend-multiply flex items-center justify-center opacity-0 group-hover:opacity-100">
                   <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl border border-stone-100 uppercase tracking-widest text-[9px] font-bold text-stone-900">
                      Explore Range
                   </div>
                </div>
                <div className="w-full h-full bg-[#f8f7f5] transition-transform duration-700 group-hover:scale-105">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
              </div>
              <div className="border-t border-stone-200 pt-6 mt-auto flex justify-between items-center">
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-stone-900">{product.name}</h3>
                <span className="text-[10px] text-stone-500 uppercase tracking-widest transition-transform group-hover:text-stone-900 ltr:group-hover:translate-x-2 rtl:group-hover:-translate-x-2">&rarr;</span>
              </div>
            </motion.div>
          )})}
        </div>
    </div>
    </div>
  );
}
