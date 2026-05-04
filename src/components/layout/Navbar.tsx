import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../context/LanguageContext";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: t('nav.collection'), path: "/products" },
    { name: t('nav.craft'), path: "/craft" },
    { name: t('nav.story'), path: "/about" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  const handleLanguageToggle = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? "bg-white text-black py-4 shadow-sm" : "bg-transparent text-black py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-start group">
          <img 
            src="/logo.png"
            alt="Delta Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70">
            {t('nav.subtitle')}
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs font-bold uppercase tracking-widest transition-colors hover:opacity-70 ${
                location.pathname === link.path ? "opacity-100" : "opacity-60"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={handleLanguageToggle}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity ml-4 rtl:ml-0 rtl:mr-4"
          >
            <Globe size={16} />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={handleLanguageToggle}
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity"
          >
            <Globe size={16} />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white text-black p-6 shadow-2xl flex flex-col gap-6 md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-bold uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
