import { lazy, Suspense, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './sections/About';
import Services from './sections/Services';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import ServiceDetail from './sections/ServiceDetail';
import AboutPage from './sections/AboutPage';
import CareerPage from './sections/CareerPage';
import BlogPage from './sections/BlogPage';
import PackageDetail from './sections/PackageDetail';

const Background3D = lazy(() => import('./components/Background3D'));

const queryClient = new QueryClient();

const Home = ({ lang, setLang }) => (
  <div className="relative w-full min-h-screen text-white bg-dark overflow-x-hidden selection:bg-primary selection:text-black font-poppins">
    <Navbar lang={lang} setLang={setLang} />
    
    {/* 3D Background */}
    <Suspense fallback={<div className="fixed inset-0 bg-black" />}>
      <Background3D />
    </Suspense>

    {/* Content Layer */}
    <main className="relative z-10 w-full flex flex-col">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/20 to-dark pointer-events-none" />
        
        <div className="z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-primary mb-8 font-montserrat"
          >
            {lang === 'en' ? 'Future-Forward Digital Studio' : 'भविष्य-उन्मुख डिजिटल स्टूडियो'}
          </motion.div>
          
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-center tracking-tighter leading-[0.9] mix-blend-difference font-montserrat">
                {lang === 'en' ? 'BEYOND' : 'परे'}<br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-darkPurple to-white">
                  {lang === 'en' ? 'VISIONS' : 'दृष्टिकोण'}
                </span>
              </h1>
              
              <p className="mt-12 text-sm md:text-base text-gray-400 max-w-lg text-center leading-relaxed font-light font-poppins px-4">
                 {lang === 'en' 
                   ? 'We craft premium digital experiences that combine high-end 3D visuals with strategic marketing excellence.' 
                   : 'हम प्रीमियम डिजिटल अनुभव तैयार करते हैं जो रणनीतिक विपणन उत्कृष्टता के साथ उच्च-स्तरीय 3D विज़ुअल्स को जोड़ते हैं।'}
              </p>
    
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <a href="#services" className="px-10 py-4 bg-white text-black rounded-full font-bold uppercase text-[10px] tracking-[0.2em] shadow-[0_0_30px_rgba(46,16,101,0.6)] hover:bg-darkPurple hover:text-white transition-all duration-300">
                  {lang === 'en' ? 'Explore Services' : 'सेवाएं देखें'}
                </a>
                <a href="#about" className="px-10 py-4 border border-white/10 rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:border-darkPurple hover:bg-darkPurple/10 transition-all duration-300">
                  {lang === 'en' ? 'Our Story' : 'हमारी कहानी'}
                </a>
              </div>
            </div>
    
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70">
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-darkPurple">Scroll</div>
              <div className="w-[1px] h-12 bg-gradient-to-b from-darkPurple via-white to-transparent" />
            </div>

      </section>

      <About lang={lang} />
      <Services lang={lang} />
      <Stats lang={lang} />
      <Contact lang={lang} />
    </main>
    <Footer lang={lang} />
  </div>
);

const App = () => {
  const [lang, setLang] = useState('en');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster theme="dark" position="bottom-right" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
            <Route path="/about" element={<AboutPage lang={lang} setLang={setLang} />} />
            <Route path="/career" element={<CareerPage lang={lang} setLang={setLang} />} />
            <Route path="/blog" element={<BlogPage lang={lang} setLang={setLang} />} />
            
            {/* Packages */}
            <Route path="/seo-packages" element={<PackageDetail lang={lang} setLang={setLang} />} />
            <Route path="/ppc-package" element={<PackageDetail lang={lang} setLang={setLang} />} />
            <Route path="/smm-packages" element={<PackageDetail lang={lang} setLang={setLang} />} />
            <Route path="/smo-package" element={<PackageDetail lang={lang} setLang={setLang} />} />
            <Route path="/digital-marketing-packages" element={<PackageDetail lang={lang} setLang={setLang} />} />
            <Route path="/website-designing-packages" element={<PackageDetail lang={lang} setLang={setLang} />} />
            <Route path="/business-hosting" element={<PackageDetail lang={lang} setLang={setLang} />} />

            {/* Services */}
            <Route path="/:id" element={<ServiceDetail lang={lang} setLang={setLang} />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
