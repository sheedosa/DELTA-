import { motion } from "motion/react";
import { ArrowRight, Drill, Globe, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  const valueProps = [
    { icon: <Drill size={20} />, title: t('home.values.hc.title'), desc: t('home.values.hc.desc') },
    { icon: <Globe size={20} />, title: t('home.values.tr.title'), desc: t('home.values.tr.desc') },
    { icon: <Award size={20} />, title: t('home.values.quality.title'), desc: t('home.values.quality.desc') },
    { icon: <Sparkles size={20} />, title: t('home.values.unique.title'), desc: t('home.values.unique.desc') },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 font-sans text-black">
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
              <div className="inline-block border-2 border-black px-3 py-1 mb-6 sm:mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-black">{t('home.hero.subtitle')}</span>
              </div>
              <h1 className="text-[2.5rem] min-[400px]:text-[3rem] sm:text-6xl md:text-[80px] lg:text-[100px] font-black leading-[0.9] tracking-tighter uppercase mb-6 sm:mb-8 rtl:tracking-normal rtl:leading-[1.2]">
                {t('home.hero.title_part1')}<br/>{t('home.hero.title_part2')}
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-5 flex flex-col items-start lg:pl-12 rtl:lg:pl-0 rtl:lg:pr-12"
            >
              <p className="font-serif rtl:font-sans text-xl sm:text-2xl lg:text-3xl italic rtl:not-italic leading-tight mb-8 sm:mb-10 border-l-2 border-black pl-4 sm:pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4 sm:rtl:pr-6">
                {t('home.hero.desc')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                <Link to="/products" className="bg-white text-black px-6 sm:px-8 py-4 text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 group w-full sm:w-auto">
                  {t('home.hero.btn_explore')} <ArrowRight size={16} className="group-hover:-rotate-45 rtl:group-hover:rotate-45 transition-transform" />
                </Link>
                <Link to="/about" className="border-2 border-black px-6 sm:px-8 py-4 text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center w-full sm:w-auto">
                  {t('home.hero.btn_story')}
                </Link>
              </div>
            </motion.div>

          </div>
        </section>
      </div>

      {/* Highlight Strip */}
      <section className="bg-white text-black relative z-10 py-16 border-y-8 border-[#f7c621]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {valueProps.map((prop, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                <div className="text-[#f7c621]">
                  {prop.icon}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest">{prop.title}</h3>
                <p className="text-xs text-black/90 font-medium">{prop.desc}</p>
                <div className="h-px w-12 bg-black/10 mt-2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 sm:px-12 text-center"
        >
          <p className="font-serif rtl:font-sans text-3xl md:text-5xl italic rtl:not-italic leading-tight mb-8">
            {t('home.brand.desc1')}
          </p>
          <p className="text-sm md:text-base text-black/80 mb-12 max-w-2xl mx-auto font-mono">
            {t('home.brand.desc2')}
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors">
            {t('home.brand.link')} <ArrowRight size={16} className="rtl:rotate-180" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
