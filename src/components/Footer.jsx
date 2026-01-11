import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = ({ lang }) => {
  const t = {
    en: {
      about: "Skylumine is a future-forward digital production studio specializing in premium web experiences and strategic digital marketing.",
      links: "Quick Links",
      services: "Our Services",
      contact: "Contact Info",
contact: "Contact Info",
rights: "All rights reserved.",
},
hi: {
about: "Skylumine एक भविष्य-उन्मुख डिजिटल प्रोडक्शन स्टूडियो है जो प्रीमियम वेब अनुभव और रणनीतिक डिजिटल मार्केटिंग में विशेषज्ञता रखता है।",
links: "त्वरित लिंक",
services: "हमारी सेवाएं",
contact: "संपर्क जानकारी",
rights: "सर्वाधिकार सुरक्षित।",
}
}[lang];

    return (
      <footer className="bg-background text-foreground pt-24 pb-12 px-6 md:px-12 border-t border-border/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
              <div className="flex flex-col gap-6">
                <div className="flex items-center">
                  <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/7ab42e8b-56b1-4c66-a956-f3cf6448c6c8/Picsart_26-01-09_10-46-39-372-resized-1768022457001.webp?width=8000&height=8000&resize=contain" 
                    alt="Skylumine Logo" 
                    className="h-16 md:h-20 w-auto object-contain mix-blend-screen dark:mix-blend-normal"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-poppins mt-2">
                {t.about}
              </p>
            <div className="flex gap-4 mt-2">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-border/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 font-montserrat">{t.links}</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground font-poppins">
              {['Home', 'About', 'Services', 'Packages', 'Blog', 'Contact'].map((link) => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 font-montserrat">{t.services}</h4>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground font-poppins">
              <li><a href="/web-design-company" className="hover:text-primary transition-colors">Web Design</a></li>
              <li><a href="/seo-services" className="hover:text-primary transition-colors">SEO Optimization</a></li>
              <li><a href="/ppc-management-services" className="hover:text-primary transition-colors">PPC Management</a></li>
              <li><a href="/social-media-marketing" className="hover:text-primary transition-colors">Social Marketing</a></li>
              <li><a href="/content-writing-services" className="hover:text-primary transition-colors">Content Writing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 font-montserrat">{t.contact}</h4>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 text-sm text-muted-foreground font-poppins">
                <div className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span>hello@skylumine.com</span>
                </div>
                <div className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer group">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-border/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground font-montserrat">
          <div>© 2026 SKYLUMINE. {t.rights}</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
