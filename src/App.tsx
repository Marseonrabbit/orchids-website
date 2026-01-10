import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { motion } from 'framer-motion';
import { useTheme } from './components/ThemeProvider';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import About from './sections/About';
import Services from './sections/Services';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import ServiceDetail from './sections/ServiceDetail';
import AboutPage from './sections/AboutPage';
import CareerPage from './sections/CareerPage';
import BlogPage from './sections/BlogPage';
import PackageDetail from './sections/PackageDetail';

const queryClient = new QueryClient();

const Home = () => (
    <div className="relative w-full min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-poppins">
    <Navbar />
    <ScrollIndicator />
    
    {/* Optimized 2D Background */}
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/[0.05] rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/[0.05] rounded-full blur-[120px]" />
      <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-accent/[0.05] rounded-full blur-[100px]" />
    </div>

    {/* Content Layer */}
    <main className="relative z-10 w-full flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background pointer-events-none" />
        
        <div className="z-10 flex flex-col items-center flex-grow justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-accent mb-8 font-montserrat"
          >
            Future-Forward Digital Studio
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-center tracking-tighter leading-[0.9] mix-blend-difference font-montserrat">
            BEYOND<br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-foreground">
              VISIONS
            </span>
          </h1>
          
          <p className="mt-12 text-sm md:text-base text-muted-foreground max-w-lg text-center leading-relaxed font-light font-poppins px-4">
            We craft premium digital experiences that combine high-end 3D visuals with strategic marketing excellence.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <a href="#services" className="px-10 py-4 bg-foreground text-background rounded-full font-bold uppercase text-[10px] tracking-[0.2em] shadow-[0_0_30px_rgba(var(--accent),0.3)] hover:bg-accent hover:text-white transition-all duration-300">
              Explore Services
            </a>
            <a href="#about" className="px-10 py-4 border border-border rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:border-accent hover:bg-accent/10 transition-all duration-300">
              Our Story
            </a>
            </div>
          </div>
        </section>

      <About />
      <Services />
      <Stats />
      <Contact />
    </main>
    <Footer />
  </div>
);

const App = () => {
  const { theme } = useTheme();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster theme={theme === 'system' ? 'dark' : theme} position="bottom-right" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/blog" element={<BlogPage />} />
            
            {/* Packages */}
            <Route path="/seo-packages" element={<PackageDetail />} />
            <Route path="/ppc-package" element={<PackageDetail />} />
            <Route path="/smm-packages" element={<PackageDetail />} />
            <Route path="/smo-package" element={<PackageDetail />} />
            <Route path="/digital-marketing-packages" element={<PackageDetail />} />
            <Route path="/website-designing-packages" element={<PackageDetail />} />
            <Route path="/business-hosting" element={<PackageDetail />} />

            {/* Services */}
            <Route path="/:id" element={<ServiceDetail />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
