import { motion } from "motion/react";
import { Hammer, Sparkles, Hand } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Craft() {
  const { t } = useLanguage();
  return (
    <div className="pt-32 pb-24 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] rtl:tracking-normal rtl:leading-[1.4] mb-8 sm:mb-16 mt-4 sm:mt-0 break-words">
          {t('craft.title1')} <br className="hidden lg:block" /><span className="text-white">{t('craft.title2')}</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: <Hand />, title: t('craft.val1.title'), desc: t('craft.val1.desc') },
            { icon: <Sparkles />, title: t('craft.val2.title'), desc: t('craft.val2.desc') },
            { icon: <Hammer />, title: t('craft.val3.title'), desc: t('craft.val3.desc') }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="border-2 border-transparent bg-white p-6 sm:p-8 flex flex-col gap-4 hover:border-black transition-all"
            >
              <div className="text-black">{item.icon}</div>
              <h3 className="font-bold uppercase tracking-widest text-sm">{item.title}</h3>
              <p className="text-xs text-black/60 font-mono leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="font-serif rtl:font-sans text-2xl md:text-4xl italic rtl:not-italic leading-relaxed text-black">
            {t('craft.quote')}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
