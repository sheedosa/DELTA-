import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.collection': 'Product Categories',
    'nav.craft': 'Why Choose Us',
    'nav.story': 'About Us',
    'nav.contact': 'Contact',
    'nav.subtitle': 'Delta Door Handles',
    
    // Home
    'home.hero.subtitle': 'Delta Door Handles',
    'home.hero.title_part1': 'Luxury in',
    'home.hero.title_part2': 'Every Detail',
    'home.hero.desc': 'Premium solutions in door handles and architectural accessories, combining Turkish engineering precision with design aesthetics.',
    'home.hero.distributor': 'Exclusive Distributor in Libya: Al Sarh Al Hadith L.T.D',
    'home.hero.btn_explore': 'Our Products',
    'home.hero.btn_story': 'About Us',
    
    'home.values.hc.title': 'Advanced Manufacturing Technology',
    'home.values.hc.desc': 'High-precision automated production lines ensuring exceptional accuracy.',
    'home.values.tr.title': 'Exclusive Designs',
    'home.values.tr.desc': 'A wide range from luxurious classic styles to minimal modern aesthetics.',
    'home.values.quality.title': 'Authorized Warranty',
    'home.values.quality.desc': 'Reliable support ensuring long-term value and peace of mind.',
    'home.values.unique.title': 'Premium Quality Materials',
    'home.values.unique.desc': 'Corrosion-resistant alloys with long-lasting finishes.',
    
    'home.featured.title1': 'Premium',
    'home.featured.title2': 'Solutions',
    'home.featured.desc': 'Designed and manufactured to the highest international standards, our collections offer aesthetic and functional perfection.',
    
    'home.featured.item1': 'Architectural Door Handles',
    'home.featured.item2': 'Furniture & Kitchen Accessories',
    'home.featured.item3': 'Technical Systems & Hinges',
    
    'home.brand.desc1': 'A Philosophy of Perfection… Powered by Al Sarh Al Hadith',
    'home.brand.desc2': 'Delta was established to set a benchmark for quality and durability in furniture accessories. We believe a handle is not just a metal component, but a defining detail that enhances both design and everyday usability.',
    'home.brand.link': 'Read More',

    // About
    'about.title1': 'A Philosophy of',
    'about.title2': 'Perfection...',
    'about.title3': 'Powered by Al Sarh Al Hadith',
    'about.desc1': 'Delta was established to set a benchmark for quality and durability in furniture accessories.',
    'about.desc2': 'We believe a handle is not just a metal component, but a defining detail that enhances both design and everyday usability.',
    'about.desc3': 'As a brand under Al Sarh Al Hadith L.T.D, the exclusive distributor in Libya and the region, we are committed to delivering products manufactured to the highest international standards, backed by experience since 2015 and strong technical partnerships in Turkey.',
    'about.desc4': '',
    'about.company.title': 'Exclusive Distributor',
    'about.company.desc1': 'Al Sarh Al Hadith L.T.D is the exclusive distributor of Delta Door Handles in Libya and the region.',
    'about.company.desc2': 'We are committed to delivering products manufactured to the highest international standards, ensuring quality and reliability.',
    'about.company.link': 'Contact Us',

    // Products
    'products.title1': 'Product',
    'products.title2': 'Categories',
    'products.desc': 'Explore our wide range from luxurious classic styles to minimal modern aesthetics.',
    'products.filter.all': 'All',
    'products.filter.levers': 'Architectural Door Handles',
    'products.filter.knobs': 'Furniture & Kitchen Accessories',
    'products.filter.pulls': 'Technical Systems & Hinges',
    'products.filter.hinges': '',
    'products.filter.accessories': '',
    'products.img.coming_soon': 'Image Coming Soon',
    'products.view_range': 'View Range',

    // Craft
    'craft.title1': 'Why Choose',
    'craft.title2': 'Us',
    
    'craft.val1.title': 'Advanced Manufacturing Technology',
    'craft.val1.desc': 'High-precision automated production lines ensuring exceptional accuracy.',
    
    'craft.val2.title': 'Exclusive Designs',
    'craft.val2.desc': 'A wide range from luxurious classic styles to minimal modern aesthetics.',
    
    'craft.val3.title': 'Authorized Warranty',
    'craft.val3.desc': 'Reliable support ensuring long-term value and peace of mind.',
    
    'craft.val4.title': 'Premium Quality Materials',
    'craft.val4.desc': 'Corrosion-resistant alloys with long-lasting finishes.',
    
    'craft.quote': '"A handle is not just a metal component, but a defining detail that enhances both design and everyday usability."',

    // Contact
    'contact.title1': 'Contact',
    'contact.title2': 'Us',
    'contact.desc': 'We are here to help. Reach out to us for more information on our products or to find a distributor near you.',
    
    'contact.dist.title': 'Exclusive Distributor',
    'contact.dist.name': 'Al Sarh Al Hadith L.T.D',
    'contact.dist.role': 'Libya & Region',
    'contact.label.phone': 'Phone',
    'contact.label.email': 'Email',
    'contact.label.address': 'Address',
    'contact.label.location': 'Location',
    'contact.label.website': 'Website',
    'contact.dist.loc': 'Tripoli, Libya',
    'contact.dist.email': 'info@alsarhalhadithco.com',
    'contact.dist.website': 'www.alsarhalhadithco.com',
    'contact.dist.phone': '+218 92 577 6619',

    'contact.factory.title': 'Delta Handles',
    'contact.factory.name': 'Technical Support',
    'contact.factory.role': 'Turkey',
    'contact.factory.email': 'Info@deltahandles.com',
    'contact.factory.phone': '+90 532 354 4388',

    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.name_ph': 'Your name',
    'contact.form.contact': 'Phone / Email',
    'contact.form.contact_ph': 'Your contact info',
    'contact.form.msg': 'Message',
    'contact.form.msg_ph': 'How can we help?',
    'contact.form.submit': 'Submit',

    // Footer
    'footer.desc': '©️ 2026 Delta Door Handles – A subsidiary of Al Sarh Al Hadith L.T.D for Building Materials & Furniture Accessories Import. All rights reserved.',
    'footer.explore': 'Explore',
    'footer.partners': 'Partners',
    'footer.partner.name': 'Al Sarh Al Hadith L.T.D',
    'footer.partner.role': 'Exclusive Distributor',
    'footer.join': 'Contact Us',
    'footer.subscribe': 'Reach out for inquiries.',
    'footer.email1': 'Info@deltahandles.com',
    'footer.email2': 'info@alsarhalhadithco.com',
    'footer.signup': '',
    'footer.social': 'Social',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
  },
  ar: {
    // Navbar
    'nav.collection': 'فئات المنتجات',
    'nav.craft': 'لماذا نحن',
    'nav.story': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'nav.subtitle': 'مقابض أبواب دلتا',
    
    // Home
    'home.hero.subtitle': 'مقابض أبواب دلتا',
    'home.hero.title_part1': 'الفخامة في',
    'home.hero.title_part2': 'كل تفصيلة',
    'home.hero.desc': 'حلول راقية في مقابض الأبواب والإكسسوارات المعمارية، تجمع بين الدقة الهندسية التركية وجماليات التصميم العصري.',
    'home.hero.distributor': 'الموزع الحصري في ليبيا: شركة الصرح الحديث ذ.م.م',
    'home.hero.btn_explore': 'اكتشف المنتجات',
    'home.hero.btn_story': 'من نحن',
    
    'home.values.hc.title': 'تقنية تصنيع متقدمة',
    'home.values.hc.desc': 'خطوط إنتاج آلية عالية الدقة تضمن جودة استثنائية.',
    'home.values.tr.title': 'تصاميم حصرية',
    'home.values.tr.desc': 'تشكيلة واسعة تتراوح بين الأساليب الكلاسيكية الفاخرة والجماليات العصرية المينيمالية.',
    'home.values.quality.title': 'ضمان معتمد',
    'home.values.quality.desc': 'دعم موثوق يضمن قيمة طويلة الأمد وراحة البال.',
    'home.values.unique.title': 'مواد خام فاخرة',
    'home.values.unique.desc': 'سبائك مقاومة للتآكل بطلاءات تدوم طويلاً.',
    
    'home.featured.title1': 'حلول',
    'home.featured.title2': 'راقية',
    'home.featured.desc': 'منتجات مُصنَّعة وفق أعلى المعايير الدولية ترتقي بالجمالية والوظيفة معاً.',
    
    'home.featured.item1': 'مقابض الأبواب المعمارية',
    'home.featured.item2': 'إكسسوارات الأثاث والمطبخ',
    'home.featured.item3': 'الأنظمة التقنية والمفصلات',
    
    'home.brand.desc1': 'فلسفة الكمال… بقوة الصرح الحديث',
    'home.brand.desc2': 'تأسست دلتا لتضع معياراً للجودة والمتانة في إكسسوارات الأثاث. نؤمن بأن المقبض ليس مجرد قطعة معدنية، بل تفصيلة جوهرية ترتقي بالتصميم وتُعزز سهولة الاستخدام اليومي.',
    'home.brand.link': 'اقرأ المزيد',

    // About
    'about.title1': 'فلسفة',
    'about.title2': 'الكمال...',
    'about.title3': 'بقوة الصرح الحديث',
    'about.desc1': 'تأسست دلتا لتضع معياراً للجودة والمتانة في إكسسوارات الأثاث.',
    'about.desc2': 'نؤمن بأن المقبض ليس مجرد قطعة معدنية، بل تفصيلة جوهرية ترتقي بالتصميم وتُعزز سهولة الاستخدام اليومي.',
    'about.desc3': 'بوصفنا علامة تجارية تابعة لشركة الصرح الحديث ذ.م.م، الموزع الحصري في ليبيا والمنطقة، نلتزم بتقديم منتجات مُصنَّعة وفق أعلى المعايير الدولية، مدعومةً بخبرة ممتدة منذ عام 2015 وشراكات تقنية راسخة في تركيا.',
    'about.desc4': '',
    'about.company.title': 'الموزع الحصري',
    'about.company.desc1': 'شركة الصرح الحديث ذ.م.م هي الموزع الحصري لمقابض أبواب دلتا في ليبيا والمنطقة.',
    'about.company.desc2': 'نلتزم بتقديم منتجات مُصنَّعة وفق أعلى المعايير الدولية، لضمان الجودة والموثوقية.',
    'about.company.link': 'تواصل معنا',

    // Products
    'products.title1': 'فئات',
    'products.title2': 'المنتجات',
    'products.desc': 'اكتشف تشكيلتنا الواسعة التي تتراوح بين الأساليب الكلاسيكية الفاخرة والجماليات العصرية المينيمالية.',
    'products.filter.all': 'الكل',
    'products.filter.levers': 'مقابض الأبواب المعمارية',
    'products.filter.knobs': 'إكسسوارات الأثاث والمطبخ',
    'products.filter.pulls': 'الأنظمة التقنية والمفصلات',
    'products.filter.hinges': '',
    'products.filter.accessories': '',
    'products.img.coming_soon': 'الصورة قريباً',
    'products.view_range': 'عرض التشكيلة',

    // Craft
    'craft.title1': 'لماذا',
    'craft.title2': 'نحن',
    
    'craft.val1.title': 'تقنية تصنيع متقدمة',
    'craft.val1.desc': 'خطوط إنتاج آلية عالية الدقة تضمن جودة استثنائية.',
    
    'craft.val2.title': 'تصاميم حصرية',
    'craft.val2.desc': 'تشكيلة واسعة تتراوح بين الأساليب الكلاسيكية الفاخرة والجماليات العصرية المينيمالية.',
    
    'craft.val3.title': 'ضمان معتمد',
    'craft.val3.desc': 'دعم موثوق يضمن قيمة طويلة الأمد وراحة البال.',
    
    'craft.val4.title': 'مواد خام فاخرة',
    'craft.val4.desc': 'سبائك مقاومة للتآكل بطلاءات تدوم طويلاً.',
    
    'craft.quote': '"نؤمن بأن المقبض ليس مجرد قطعة معدنية، بل تفصيلة جوهرية ترتقي بالتصميم وتُعزز سهولة الاستخدام اليومي."',

    // Contact
    'contact.title1': 'اتصل',
    'contact.title2': 'بنا',
    'contact.desc': 'نحن هنا للمساعدة. تواصل معنا للحصول على مزيد من المعلومات حول منتجاتنا.',
    
    'contact.dist.title': 'الموزع الحصري',
    'contact.dist.name': 'شركة الصرح الحديث ذ.م.م',
    'contact.dist.role': 'الموزع الحصري - ليبيا والمنطقة',
    'contact.label.phone': 'الهاتف',
    'contact.label.email': 'البريد الإلكتروني',
    'contact.label.address': 'العنوان',
    'contact.label.location': 'الموقع',
    'contact.label.website': 'الموقع الإلكتروني',
    'contact.dist.loc': 'طرابلس، ليبيا',
    'contact.dist.email': 'info@alsarhalhadithco.com',
    'contact.dist.website': 'www.alsarhalhadithco.com',
    'contact.dist.phone': '+218 92 577 6619',

    'contact.factory.title': 'دلتا هاندلز',
    'contact.factory.name': 'الدعم الفني',
    'contact.factory.role': 'تركيا',
    'contact.factory.email': 'Info@deltahandles.com',
    'contact.factory.phone': '+90 532 354 4388',

    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'الاسم',
    'contact.form.name_ph': 'اسمك الكريم',
    'contact.form.contact': 'الهاتف / البريد الإلكتروني',
    'contact.form.contact_ph': 'معلومات الاتصال الخاصة بك',
    'contact.form.msg': 'الرسالة',
    'contact.form.msg_ph': 'كيف يمكننا مساعدتك؟',
    'contact.form.submit': 'إرسال',

    // Footer
    'footer.desc': '©️ 2026 مقابض أبواب دلتا – شركة تابعة لمؤسسة الصرح الحديث ذ.م.م لاستيراد مواد البناء وإكسسوارات الأثاث. جميع الحقوق محفوظة.',
    'footer.explore': 'اكتشف',
    'footer.partners': 'الشركاء',
    'footer.partner.name': 'شركة الصرح الحديث ذ.م.م',
    'footer.partner.role': 'الموزع الحصري',
    'footer.join': 'تواصل معنا',
    'footer.subscribe': 'تواصل معنا لأي استفسار.',
    'footer.email1': 'Info@deltahandles.com',
    'footer.email2': 'info@alsarhalhadithco.com',
    'footer.signup': 'إرسال',
    'footer.social': 'التواصل الاجتماعي',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    if (langParam === 'ar' || langParam === 'en') {
      setLangState(langParam);
    } else {
      setLangState('en'); // Strictly English as main version
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url.toString());
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
