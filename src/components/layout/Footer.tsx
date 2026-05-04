import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import logoUrl from "../../assets/logo.png";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-white text-black pt-24 pb-12 px-6 sm:px-12 border-t border-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        <div className="md:col-span-1 flex flex-col items-start">
          <Link to="/" className="flex items-center gap-3 mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <img 
              src={logoUrl} 
              alt="Delta Logo" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-xs text-black/50 leading-relaxed max-w-xs font-mono whitespace-pre-wrap">
            {t('footer.desc')}
          </p>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6">{t('footer.explore')}</h4>
          <ul className="space-y-4">
            <li><Link to="/products" className="text-xs uppercase tracking-widest hover:text-[#f7c621] transition-colors">{t('nav.collection')}</Link></li>
            <li><Link to="/craft" className="text-xs uppercase tracking-widest hover:text-[#f7c621] transition-colors">{t('nav.craft')}</Link></li>
            <li><Link to="/about" className="text-xs uppercase tracking-widest hover:text-[#f7c621] transition-colors">{t('nav.story')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6">{t('footer.partners')}</h4>
          <ul className="space-y-4">
            <li className="text-xs font-mono text-black/70 font-medium">{t('footer.partner.name')}</li>
            <li className="text-xs font-mono text-black/40 font-medium">{t('footer.partner.role')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6">{t('footer.join')}</h4>
          <p className="text-xs text-black/50 mb-4 font-mono font-medium">{t('footer.subscribe')}</p>
          <form className="flex w-full mt-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={t('footer.email')} 
              required
              className="bg-transparent border-b border-black/20 px-0 py-2 text-xs w-full outline-none placeholder-black/30 focus:border-[#f7c621] transition-colors font-mono text-black rtl:text-right"
            />
            <button type="submit" className="text-[10px] font-bold uppercase tracking-widest text-black hover:text-[#f7c621] transition-colors ml-4 rtl:ml-0 rtl:mr-4 flex-shrink-0">
              {t('footer.signup')}
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10">
        <p className="text-[10px] text-black/40 font-mono mb-4 md:mb-0">
          {t('footer.rights')}
        </p>
        <div className="flex gap-6">
          <Link to="#" className="text-[10px] text-black/40 hover:text-black transition-colors uppercase tracking-widest">{t('footer.privacy')}</Link>
          <Link to="#" className="text-[10px] text-black/40 hover:text-black transition-colors uppercase tracking-widest">{t('footer.terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
