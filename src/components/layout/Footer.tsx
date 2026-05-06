import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const logoUrl = "https://lh3.googleusercontent.com/d/1bbJINa3-02CEfVaHMQvQ987O-lWtoktF";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-stone-950 text-stone-300 pt-24 pb-12 px-6 sm:px-12 border-t border-stone-800 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
        <div className="md:col-span-1 flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3 mb-6 transition-opacity opacity-100 hover:opacity-80">
            <img 
              src={logoUrl} 
              alt="Delta Logo" 
              className="h-10 w-auto object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-xs text-white/90 leading-relaxed max-w-xs font-light whitespace-pre-wrap">
            {t('footer.desc')}
          </p>
        </div>

        <div>
           <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-100 mb-8">{t('footer.explore')}</h4>
          <ul className="space-y-4">
            <li><Link to="/products" className="text-xs uppercase tracking-[0.1em] text-white/80 hover:text-white transition-colors font-light">{t('nav.collection')}</Link></li>
            <li><Link to="/craft" className="text-xs uppercase tracking-[0.1em] text-white/80 hover:text-white transition-colors font-light">{t('nav.craft')}</Link></li>
            <li><Link to="/about" className="text-xs uppercase tracking-[0.1em] text-white/80 hover:text-white transition-colors font-light">{t('nav.story')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-100 mb-8">{t('footer.partners')}</h4>
          <ul className="space-y-4">
            <li className="text-xs font-light tracking-[0.05em] text-white/90">{t('footer.partner.name')}</li>
            <li className="text-[10px] font-light tracking-[0.05em] text-stone-400">{t('footer.partner.role')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-100 mb-8">{t('footer.join')}</h4>
          <p className="text-xs text-white/80 mb-6 font-light">{t('footer.subscribe')}</p>
          <div className="flex flex-col gap-4 mt-4 text-[11px] font-light tracking-[0.05em]">
            <a href={`mailto:${t('footer.email1')}`} className="text-white/80 hover:text-white transition-colors w-fit">
              {t('footer.email1')}
            </a>
            <a href={`mailto:${t('footer.email2')}`} className="text-white/80 hover:text-white transition-colors w-fit">
              {t('footer.email2')}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800">
        <p className="text-[10px] text-stone-400 font-light tracking-[0.1em] mb-4 md:mb-0 uppercase">
          {t('footer.rights')}
        </p>
        <div className="flex gap-8">
          <Link to="#" className="text-[10px] text-stone-400 hover:text-white transition-colors uppercase tracking-[0.1em]">{t('footer.privacy')}</Link>
          <Link to="#" className="text-[10px] text-stone-400 hover:text-white transition-colors uppercase tracking-[0.1em]">{t('footer.terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
