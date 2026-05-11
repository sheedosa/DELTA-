/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { useEffect, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Lenis from "lenis";

// Lazy load pages for performance
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const About = lazy(() => import("./pages/About").then(module => ({ default: module.About })));
const Products = lazy(() => import("./pages/Products").then(module => ({ default: module.Products })));
const Craft = lazy(() => import("./pages/Craft").then(module => ({ default: module.Craft })));
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })));

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  const { lang } = useLanguage();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col font-sans antialiased text-stone-900 bg-[#F8F7F5] selection:bg-stone-900 selection:text-[#F8F7F5] relative`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 bg-noise z-50 mix-blend-overlay"></div>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 relative z-10 w-full">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-stone-950">
            <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
          </div>
        }>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="craft" element={<Craft />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
