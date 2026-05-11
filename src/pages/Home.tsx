import { motion } from "motion/react";
import { ArrowRight, Drill, Globe, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

import heroBg from "../assets/images/hero-bg.png";
import logo from "../assets/images/logo.png";
import productHinge01 from "../assets/images/product-hinge-01.png";
import productLever04 from "../assets/images/product-lever-04.png";
import productPull04 from "../assets/images/product-pull-04.png";
import productSystem01 from "../assets/images/product-system-01.png";
import productLever02 from "../assets/images/product-lever-02.png";
import productLever03 from "../assets/images/product-lever-03.png";
import productPull02 from "../assets/images/product-pull-02.png";
import productPull03 from "../assets/images/product-pull-03.png";


export function Home() {
  const { t } = useLanguage();

  const valueProps = [
    {
      icon: <Drill size={20} />,
      title: t("home.values.hc.title"),
      desc: t("home.values.hc.desc"),
    },
    {
      icon: <Globe size={20} />,
      title: t("home.values.tr.title"),
      desc: t("home.values.tr.desc"),
    },
    {
      icon: <Award size={20} />,
      title: t("home.values.quality.title"),
      desc: t("home.values.quality.desc"),
    },
    {
      icon: <Sparkles size={20} />,
      title: t("home.values.unique.title"),
      desc: t("home.values.unique.desc"),
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 font-sans text-white relative bg-stone-950 overflow-hidden">
      {/* Photographic Architectural Background w/ Dark overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={heroBg}
          alt=""
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 transition-opacity duration-1000"
        />
        {/* Subtle Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-end sm:justify-end opacity-15">
          <img 
            src={logo} 
            alt="" 
            className="w-[150vw] sm:w-[90vw] h-auto object-contain translate-x-[30%] sm:translate-x-[20%] rtl:-translate-x-[20%]" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-900 border-b border-stone-800"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/50 to-transparent rtl:from-transparent rtl:via-stone-950/50 rtl:to-stone-950/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-start sm:justify-center pt-16 pb-12 sm:py-20 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <h1 className="mb-8 sm:mb-10 text-white">
                <span className="block text-sm md:text-base font-medium tracking-[0.2em] md:tracking-[0.4em] uppercase text-stone-400 mb-4 rtl:tracking-normal">
                  {t("home.hero.title_part1")}
                </span>
                <span className="block font-display text-[4rem] sm:text-6xl md:text-[80px] lg:text-[100px] leading-[0.9] font-bold uppercase tracking-tighter rtl:font-sans rtl:tracking-normal w-[120%] drop-shadow-2xl">
                  {t("home.hero.title_part2")}
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-5 flex flex-col items-start lg:ps-12"
            >
              <div className="border-s border-stone-600 ps-6 sm:ps-8 mb-10 sm:mb-12">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-stone-300">
                  {t("home.hero.desc")}
                </p>
                <div className="flex items-center gap-4 border-t border-stone-700/50 pt-6 mt-4">
                  <div className="h-px w-8 bg-stone-600"></div>
                  <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
                    {t("home.hero.distributor")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-wrap sm:flex-row gap-4 sm:gap-6 w-full">
                <Link
                  to="/products"
                  className="bg-white text-stone-900 px-8 sm:px-10 py-4 sm:py-5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest hover:bg-stone-100 transition-colors flex items-center justify-center gap-3 group w-full sm:w-auto"
                >
                  {t("home.hero.btn_explore")}{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  to="/about"
                  className="bg-transparent border border-stone-500 text-white px-8 sm:px-10 py-4 sm:py-5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest hover:bg-stone-800/50 hover:border-stone-400 transition-colors text-center w-full sm:w-auto backdrop-blur-sm"
                >
                  {t("home.hero.btn_story")}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Highlight Strip - Reimagined Light Theme */}
      <section className="bg-white text-stone-900 relative z-10 py-24 lg:py-32 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {valueProps.map((prop, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group p-8 bg-stone-50/50 border border-stone-100 hover:bg-white hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-700 flex flex-col items-start overflow-hidden"
              >
                {/* Subtle Decorative Number */}
                <span className="absolute top-4 end-6 text-[4rem] font-bold text-stone-100 select-none group-hover:text-stone-200 transition-colors duration-700 font-display">
                  0{idx + 1}
                </span>

                <div className="text-stone-900 mb-10 relative z-10 bg-white p-3 rounded-none border border-stone-100 shadow-sm group-hover:bg-stone-900 group-hover:text-white transition-all duration-500">
                  {prop.icon}
                </div>
                
                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-900 mb-5 relative z-10">
                  {prop.title}
                </h3>
                
                <div className="h-px w-8 bg-stone-200 mb-6 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                
                <p className="text-sm text-stone-500 leading-relaxed font-light relative z-10 group-hover:text-stone-600 transition-colors duration-500">
                  {prop.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Gallery */}
      <section className="py-24 bg-stone-950 relative z-10">
         <div className="max-w-7xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <motion.img 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8 }}
                  src={productHinge01} 
                  alt="Delta Door Handle" 
                  loading="lazy"
                  className="w-full aspect-square object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 border border-stone-800" 
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
                  src={productLever04} 
                  alt="Delta Product" 
                  loading="lazy"
                  className="w-full aspect-square object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 border border-stone-800 md:translate-y-8" 
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
                  src={productPull04} 
                  alt="Delta Design Detail" 
                  loading="lazy"
                  className="w-full aspect-square object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 border border-stone-800" 
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}
                  src={productSystem01} 
                  alt="Delta Door Pull" 
                  loading="lazy"
                  className="w-full aspect-square object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 border border-stone-800 md:translate-y-8" 
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8 }}
                  src={productLever02} 
                  alt="Delta Door Handle" 
                  loading="lazy"
                  className="w-full aspect-square object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 border border-stone-800" 
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
                  src={productLever03} 
                  alt="Delta Product" 
                  loading="lazy"
                  className="w-full aspect-square object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 border border-stone-800 md:translate-y-8" 
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }}
                  src={productPull02} 
                  alt="Delta Design Detail" 
                  loading="lazy"
                  className="w-full aspect-square object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 border border-stone-800" 
                />
                <motion.img 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }}
                  src={productPull03} 
                  alt="Delta Door Pull" 
                  loading="lazy"
                  className="w-full aspect-square object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 border border-stone-800 md:translate-y-8" 
                />
            </div>
         </div>
      </section>

      {/* Brand Intro */}
      <section className="py-32 lg:py-48 relative z-10 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-6 sm:px-12 text-center"
        >
          <div className="w-px h-16 bg-stone-600 mx-auto mb-12"></div>
          <p className="text-sm md:text-base text-stone-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            {t("home.brand.desc2")}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] border-b border-stone-600 pb-2 text-stone-300 hover:text-white hover:border-stone-400 transition-all"
          >
            {t("home.brand.link")}
            <ArrowRight size={14} className="rtl:rotate-180" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
