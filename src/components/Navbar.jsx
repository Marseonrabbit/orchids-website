import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const Navbar = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: lang === 'en' ? 'About' : 'हमारे बारे में', href: '#about' },
    { name: lang === 'en' ? 'Services' : 'सेवाएं', href: '#services' },
    { name: lang === 'en' ? 'Packages' : 'पैकेज', href: '#packages' },
    { name: lang === 'en' ? 'Blog' : 'ब्लॉग', href: '#blog' },
    { name: lang === 'en' ? 'Contact' : 'संपर्क', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/5 py-3' : 'bg-transparent'}`}
      >
        <div className="flex items-center gap-2">
            <a href="/" className="block overflow-hidden">
                <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7ab42e8b-56b1-4c66-a956-f3cf6448c6c8/Picsart_26-01-09_10-46-39-372-resized-1768022457001.webp?width=8000&height=8000&resize=contain" 
                    alt="Skylumine Logo" 
                        className="h-14 md:h-18 lg:h-24 w-auto object-contain mix-blend-screen dark:mix-blend-normal scale-[1.8]"
                  />
            </a>
        </div>
        
        <div className="hidden lg:flex gap-10 text-[11px] font-semibold uppercase tracking-[0.2em] font-montserrat text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-foreground transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
  
          <div className="flex items-center gap-4 md:gap-6">
            <button 
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-foreground/10 hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <Globe className="w-3 h-3 group-hover:text-primary transition-colors" />
              <span className="group-hover:text-foreground transition-colors">{lang === 'en' ? 'Hindi' : 'English'}</span>
            </button>
    
            <a href="#contact" className="hidden sm:block px-8 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-darkPurple transition-all duration-500 uppercase text-[10px] font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(46,16,101,0.2)]">
              {lang === 'en' ? "Let's Talk" : 'बात करें'}
            </a>
  
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-foreground p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-foreground p-2 hover:rotate-90 transition-transform duration-300"
            >
              <X className="w-8 h-8" />
            </button>

            {navLinks.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-bold uppercase tracking-widest font-montserrat hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => {
                setLang(lang === 'en' ? 'hi' : 'en');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-full border border-foreground/10 mt-4"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'Switch to Hindi' : 'अंग्रेजी में बदलें'}</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
