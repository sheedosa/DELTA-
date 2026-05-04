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
    'nav.collection': 'Collection',
    'nav.craft': 'Our Craft',
    'nav.story': 'Our Story',
    'nav.contact': 'Contact',
    'nav.subtitle': 'Authentic Turkish Handcraft',
    
    // Home
    'home.hero.subtitle': 'Authentic Turkish Handcraft',
    'home.hero.title_part1': 'Handcrafted',
    'home.hero.title_part2': 'In Turkey',
    'home.hero.desc': 'Every piece tells a story, shaped by skilled hands and inspired by centuries of Turkish artistry.',
    'home.hero.btn_explore': 'Explore the Collection',
    'home.hero.btn_story': 'Our Story',
    
    'home.values.hc.title': 'Handcrafted',
    'home.values.hc.desc': 'Made entirely by hand. No shortcuts or machines. Just pure mastery passed down through generations.',
    'home.values.tr.title': 'Authentically Turkish',
    'home.values.tr.desc': 'Born in Turkey and shaped by a craft tradition that spans centuries, speaking the language of elegance.',
    'home.values.quality.title': 'Uncompromising Quality',
    'home.values.quality.desc': 'Every material is chosen with intention. We only release products that meet our highest standard.',
    'home.values.unique.title': 'One of a Kind',
    'home.values.unique.desc': 'No two pieces are identical. Each product carries its own distinct character, made for those who appreciate the difference.',
    
    'home.featured.title1': 'Milled from',
    'home.featured.title2': 'Solid Brass',
    'home.featured.desc': 'We do not stamp. We do not mass-cast. Every delta hardware piece is milled from pure, solid brass to ensure generational durability and a weight that feels substantial in the hand.',
    
    'home.featured.item1': 'Door Levers',
    'home.featured.item2': 'Cabinet Knobs',
    'home.featured.item3': 'Pull Handles',
    
    'home.brand.desc1': 'Brand Delta is where heritage becomes wearable, giftable, liveable.',
    'home.brand.desc2': 'We bring authentic Turkish handcraft to those who value pieces made with care over things mass-produced for convenience.',
    'home.brand.link': 'Discover More',

    // About
    'about.title1': 'We didn\'t set out to build a brand.',
    'about.title2': 'We set out to preserve something',
    'about.title3': 'worth keeping.',
    'about.desc1': 'Brand Delta was born from a deep respect for Turkish craftsmanship. It is an art form built over centuries and practiced today by artisans who treat every piece as a personal signature.',
    'about.desc2': 'Each product we create exists at the intersection of heritage and modern elegance. We take the patience of tradition and give it a form that fits your life today.',
    'about.desc3': 'We believe the things you surround yourself with should mean something. That a gift should feel considered. That an object should carry warmth, not just function. That craftsmanship should be felt the moment something is held in your hands.',
    'about.desc4': 'That is what Brand Delta makes.',
    'about.company.title': 'The Company Behind the Brand',
    'about.company.desc1': 'Brand Delta is a trademark of Al-Sarh Al-Hadith, the exclusive authorized agent for the brand in Libya and the region.',
    'about.company.desc2': 'Behind every product stands an established and professional institution guaranteeing authenticity, consistency, and a trustworthy experience every time you choose Brand Delta.',
    'about.company.link': 'Contact our distributor',

    // Products
    'products.title1': 'Crafted to Last.',
    'products.title2': 'Made to Be Felt.',
    'products.desc': 'Browse our collection of authentic Turkish handcrafted pieces. Each one is selected for its quality, beauty, and the unique story it carries.',
    'products.filter.all': 'All',
    'products.filter.levers': 'Door Levers',
    'products.filter.knobs': 'Knobs',
    'products.filter.pulls': 'Pull Handles',
    'products.filter.hinges': 'Hinges',
    'products.filter.accessories': 'Accessories',
    'products.img.coming_soon': 'Image Coming Soon',
    'products.view_range': 'View Range',

    // Craft
    'craft.title1': 'This Is What Handmade',
    'craft.title2': 'Really Means',
    
    'craft.val1.title': 'The Hands Behind Every Piece',
    'craft.val1.desc': 'Our artisans are not assembly line workers. They are craftspeople. These individuals have spent years, sometimes decades, mastering techniques that cannot be automated. Each piece passes through hands that know the difference between good and exceptional. That distinction is something no machine can replicate.',
    
    'craft.val2.title': 'The Materials We Choose',
    'craft.val2.desc': 'We source only what we would be proud to put our name on. Natural, premium, carefully selected materials form the foundation of every Brand Delta product because true quality starts long before the finish line.',
    
    'craft.val3.title': 'Our Standard Before Yours',
    'craft.val3.desc': 'Before any product reaches you, it passes through a strict internal review. We ask one question: would we be proud to give this as a gift? If the answer is anything less than yes, it doesn\'t leave our hands.',
    
    'craft.quote': '"Craftsmanship is not a feature we add. It is the reason Brand Delta exists."',

    // Contact
    'contact.title1': 'We\'d Love to',
    'contact.title2': 'Hear From You',
    'contact.desc': 'Whether you have a question, a custom request, or simply want to know more, please reach out. A real person will respond.',
    
    'contact.dist.title': 'Exclusive Authorized Agent for Libya & the Region',
    'contact.dist.name': 'Al-Sarh Al-Hadith',
    'contact.dist.role': 'Libya Regional Office',
    'contact.label.phone': 'Phone',
    'contact.label.email': 'Email',
    'contact.label.address': 'Address',
    'contact.label.location': 'Location',
    'contact.dist.loc': 'Tripoli, Libya\n(Full Address TBD)',

    'contact.factory.title': 'Handcraft Facility in Turkey',
    'contact.factory.name': 'Brand Delta Production',
    'contact.factory.role': 'Turkish Factory',
    'contact.factory.loc': 'Istanbul, Turkey\n(Factory Tours by Appointment)',

    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Name',
    'contact.form.name_ph': 'Your Name',
    'contact.form.contact': 'Phone / Email',
    'contact.form.contact_ph': 'Your contact info',
    'contact.form.msg': 'Message',
    'contact.form.msg_ph': 'How can we help?',
    'contact.form.submit': 'Send',

    // Footer
    'footer.desc': 'Brand Delta is a trademark of Al-Sarh Al-Hadith, the Exclusive Agent for Libya and the Region.\n\nCrafted in Turkey. Delivered with pride.',
    'footer.explore': 'Explore',
    'footer.partners': 'Global Partners',
    'footer.partner.name': 'Al-Sarh Al-Hadith',
    'footer.partner.role': 'Exclusive Agent, Libya',
    'footer.join': 'Join Us',
    'footer.subscribe': 'Subscribe for access to our latest collections.',
    'footer.email': 'Email',
    'footer.signup': 'Sign Up',
    'footer.social': 'Social',
    'footer.rights': '© 2026 Brand Delta. All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
  },
  ar: {
    // Navbar
    'nav.collection': 'المجموعة',
    'nav.craft': 'صناعتنا',
    'nav.story': 'قصتنا',
    'nav.contact': 'تواصل معنا',
    'nav.subtitle': 'صناعة يدوية تركية أصيلة',
    
    // Home
    'home.hero.subtitle': 'صناعة يدوية تركية أصيلة',
    'home.hero.title_part1': 'صُنع يدوياً',
    'home.hero.title_part2': 'في تركيا',
    'home.hero.desc': 'كل قطعة تروي قصة، شُكلت بأيدي ماهرة ومستوحاة من قرون من الفن التركي.',
    'home.hero.btn_explore': 'استكشف المجموعة',
    'home.hero.btn_story': 'قصتنا',
    
    'home.values.hc.title': 'صُنع يدوياً',
    'home.values.hc.desc': 'صُنعت بالكامل يدوياً. لا توجد طرق مختصرة أو آلات. مجرد إتقان خالص تتوارثه الأجيال.',
    'home.values.tr.title': 'تراث تركي أصيل',
    'home.values.tr.desc': 'وُلدت في تركيا وتشكّلت بفضل تقاليد حرفية تمتد لقرون، لتتحدث بلغة الأناقة.',
    'home.values.quality.title': 'جودة لا يُساوم عليها',
    'home.values.quality.desc': 'يتم اختيار كل مادة بعناية فائقة. لا نُطلق المنتجات إلا إذا كانت تلبي أعلى المعايير لدينا.',
    'home.values.unique.title': 'فريدة من نوعها',
    'home.values.unique.desc': 'لا توجد قطعتان متطابقتان. كل منتج يحمل طابعه المميز، صُنع لأولئك الذين يقدّرون الاختلاف.',
    
    'home.featured.title1': 'مسبوكة من',
    'home.featured.title2': 'النحاس الصلب',
    'home.featured.desc': 'نحن لا نختم ولا نُنتج بكميات تجارية. يتم تصنيع كل قطعة من منتجات دلتا من النحاس الخالص والصلب لضمان متانة تدوم لأجيال ووزن ملموس يبعث على الثقة.',
    
    'home.featured.item1': 'مقابض الأبواب',
    'home.featured.item2': 'مقابض الخزائن',
    'home.featured.item3': 'مقابض سحب',
    
    'home.brand.desc1': 'علامة دلتا حيث يصبح التراث قابلاً للارتداء، والإهداء، والعيش.',
    'home.brand.desc2': 'نحن نقدم الحرف اليدوية التركية الأصيلة لأولئك الذين يدركون قيمة القطع المصنوعة بعناية بدلاً من المنتجات التجارية المصنوعة لتكون في المتناول.',
    'home.brand.link': 'اكتشف المزيد',

    // About
    'about.title1': 'لم ننطلق لبناء علامة تجارية.',
    'about.title2': 'بل انطلقنا للحفاظ على شيء',
    'about.title3': 'يستحق البقاء.',
    'about.desc1': 'ولدت علامة دلتا من احترام عميق للحرفية التركية. إنها شكل فني بُني عبر قرون ويُمارس اليوم من قبل حرفيين يتعاملون مع كل قطعة على أنها توقيعهم الشخصي.',
    'about.desc2': 'كل منتج نصنعه يقع عند نقطة التقاء التراث بالأناقة العصرية. نحن نأخذ صبر التقاليد ونعطيه شكلاً يناسب حياتك اليوم.',
    'about.desc3': 'نحن نؤمن بأن الأشياء التي تحيط نفسك بها يجب أن تعني شيئاً. وأن الهدية يجب أن تبدو مدروسة. وأن الشيء يجب أن يحمل دفئاً، وليس فقط وظيفة. وأن الحرفية يجب أن تُشعر بمجرد أن تُمسك الشيء بين يديك.',
    'about.desc4': 'هذا ما تصنعه علامة دلتا.',
    'about.company.title': 'الشركة وراء العلامة التجارية',
    'about.company.desc1': 'علامة دلتا هي علامة تجارية مسجلة لشركة الصرح الحديث، الوكيل المعتمد والحصري للعلامة التجارية في ليبيا والمنطقة.',
    'about.company.desc2': 'وراء كل منتج تقف مؤسسة عريقة ومهنية تضمن الأصالة، والاتساق، وتجربة جديرة بالثقة في كل مرة تختار فيها علامة دلتا.',
    'about.company.link': 'تواصل مع وكلائنا',

    // Products
    'products.title1': 'صُنعت لتدوم.',
    'products.title2': 'صُنعت لتُشعر بها.',
    'products.desc': 'تصفح مجموعتنا من القطع التركية اليدوية الأصيلة. كل قطعة مختارة بعناية لجودتها، وجمالها، والقصة الفريدة التي تحملها.',
    'products.filter.all': 'الكل',
    'products.filter.levers': 'مقابض الأبواب',
    'products.filter.knobs': 'مقابض صغيرة',
    'products.filter.pulls': 'مقابض سحب',
    'products.filter.hinges': 'مفصلات',
    'products.filter.accessories': 'إكسسوارات',
    'products.img.coming_soon': 'الصورة قريباً',
    'products.view_range': 'عرض التشكيلة',

    // Craft
    'craft.title1': 'هذا هو المعنى الحقيقي',
    'craft.title2': 'للصناعة اليدوية',
    
    'craft.val1.title': 'الأيدي وراء كل قطعة',
    'craft.val1.desc': 'حرفيونا ليسوا عمال خط تجميع. إنهم صناع مهرة. أمضى هؤلاء الأفراد سنوات، وأحياناً عقوداً، في إتقان تقنيات لا يمكن أتمتتها. كل قطعة تمر بأيادٍ تعرف الفرق بين الجيد والاستثنائي. هذا التميز هو شيء لا يمكن لأي آلة تكراره.',
    
    'craft.val2.title': 'المواد التي نختارها',
    'craft.val2.desc': 'نحن نستخدم فقط ما نفخر بوضع اسمنا عليه. مواد طبيعية وممتازة ومختارة بعناية تشكل الأساس لكل منتج من علامة دلتا لأن الجودة الحقيقية تبدأ قبل خط النهاية بكثير.',
    
    'craft.val3.title': 'معيارنا قبل دخولها لمنزلك',
    'craft.val3.desc': 'قبل أن يصلك أي منتج، يمر بمراجعة داخلية صارمة. نسأل سؤالاً واحداً: هل نفخر بتقديم هذا كهدية؟ إذا كانت الإجابة أقل من نعم، فإنه لا يغادر أيدينا.',
    
    'craft.quote': '"الحرفية ليست مجرد ميزة نضيفها. إنها السبب في وجود علامة دلتا."',

    // Contact
    'contact.title1': 'يسعدنا أن',
    'contact.title2': 'نسمع منك',
    'contact.desc': 'سواء كان لديك سؤال، طلب مخصص، أو ترغب ببساطة في معرفة المزيد، يرجى التواصل معنا. وسيقوم شخص حقيقي بالرد عليك.',
    
    'contact.dist.title': 'الوكيل الحصري والمعتمد لليبيا والمنطقة',
    'contact.dist.name': 'الصرح الحديث',
    'contact.dist.role': 'المكتب الإقليمي بليبيا',
    'contact.label.phone': 'الهاتف',
    'contact.label.email': 'البريد الإلكتروني',
    'contact.label.address': 'العنوان',
    'contact.label.location': 'الموقع',
    'contact.dist.loc': 'طرابلس، ليبيا\n(العنوان الكامل يحدد لاحقاً)',

    'contact.factory.title': 'مصنع الحرف اليدوية في تركيا',
    'contact.factory.name': 'إنتاج علامة دلتا',
    'contact.factory.role': 'المصنع التركي',
    'contact.factory.loc': 'إسطنبول، تركيا\n(جولات المصنع بموعد مسبق)',

    'contact.form.title': 'أرسل لنا رسالة',
    'contact.form.name': 'الاسم',
    'contact.form.name_ph': 'اسمك الكريم',
    'contact.form.contact': 'الهاتف / البريد الإلكتروني',
    'contact.form.contact_ph': 'معلومات الاتصال الخاصة بك',
    'contact.form.msg': 'الرسالة',
    'contact.form.msg_ph': 'كيف يمكننا مساعدتك؟',
    'contact.form.submit': 'إرسال',

    // Footer
    'footer.desc': 'لصرح الحديث هي الوكيل الحصري والمعتمد لعلامة دلتا في ليبيا والمنطقة.\n\nصُنعت في تركيا. وتُقدم بكل فخر.',
    'footer.explore': 'استكشف',
    'footer.partners': 'شركاء عالميون',
    'footer.partner.name': 'الصرح الحديث',
    'footer.partner.role': 'الوكيل الحصري، ليبيا',
    'footer.join': 'انضم إلينا',
    'footer.subscribe': 'اشترك للوصول إلى أحدث تشكيلاتنا.',
    'footer.email': 'البريد الإلكتروني',
    'footer.signup': 'سجل الآن',
    'footer.social': 'التواصل الاجتماعي',
    'footer.rights': '© 2026 علامة دلتا. جميع الحقوق محفوظة.',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('delta_lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('delta_lang', newLang);
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
