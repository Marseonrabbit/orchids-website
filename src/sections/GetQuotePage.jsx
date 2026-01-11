import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Send, CheckCircle2, Globe, Laptop, Rocket, BarChart3, Search, Share2, PenTool } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GetQuotePage = ({ lang, setLang }) => {
  const [submitted, setSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = {
    en: {
      tag: "Project Inquiry",
      title: "Request a",
      subtitle: "Custom Quote",
      description: "Tell us about your project and we'll get back to you with a comprehensive strategy and estimate within 24 hours.",
      form: {
        name: "Full Name",
        email: "Work Email",
        company: "Company Name",
        service: "Interested Service",
        budget: "Estimated Budget",
        details: "Project Details",
        submit: "Request Quote",
        success: "Thank you! We'll be in touch soon."
      },
      services: [
        "Website Development",
        "WordPress & CMS",
        "eCommerce Solutions",
        "SEO Services",
        "PPC & Paid Ads",
        "Social Media Marketing",
        "Content Writing",
        "Graphic Design",
        "Other"
      ],
      budgets: [
        "Less than $1,000",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $50,000",
        "$50,000+"
      ]
    },
    hi: {
      tag: "परियोजना पूछताछ",
      title: "अनुरोध करें",
      subtitle: "कस्टम उद्धरण",
      description: "हमें अपनी परियोजना के बारे में बताएं और हम 24 घंटों के भीतर एक व्यापक रणनीति और अनुमान के साथ आपके पास वापस आएंगे।",
      form: {
        name: "पूरा नाम",
        email: "कार्य ईमेल",
        company: "कंपनी का नाम",
        service: "रुचि की सेवा",
        budget: "अनुमानित बजट",
        details: "परियोजना का विवरण",
        submit: "उद्धरण का अनुरोध करें",
        success: "धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।"
      },
      services: [
        "वेबसाइट विकास",
        "वर्डप्रेस और सीएमएस",
        "ई-कॉमर्स समाधान",
        "एसईओ सेवाएं",
        "पीपीसी और सशुल्क विज्ञापन",
        "सोशल मीडिया मार्केटिंग",
        "सामग्री लेखन",
        "ग्राफिक डिजाइन",
        "अन्य"
      ],
      budgets: [
        "$1,000 से कम",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $50,000",
        "$50,000+"
      ]
    }
  }[lang];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} setLang={setLang} />
      
      <SectionWrapper className="pt-40 pb-20">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 font-montserrat"
            >
              {t.tag}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-extrabold font-montserrat tracking-tighter mb-8 leading-[0.9]"
            >
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-primary to-foreground font-light italic font-playfair">
                {t.subtitle}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed mb-12 font-poppins"
            >
              {t.description}
            </motion.p>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Laptop className="w-4 h-4" />
                  </div>
                  B2B & B2C Expertise
                </div>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Rocket className="w-4 h-4" />
                  </div>
                  Scale-First Solutions
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  Verified ROI
                </div>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Globe className="w-4 h-4" />
                  </div>
                  Global Standards
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:max-w-xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-foreground/[0.02] border border-border/5 p-12 rounded-[3rem] text-center"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t.form.success}</h3>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                onSubmit={handleSubmit}
                className="bg-foreground/[0.02] border border-border/5 p-8 md:p-12 rounded-[3rem] backdrop-blur-sm shadow-2xl"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.form.name}</label>
                      <input required type="text" className="bg-foreground/5 border border-border/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-foreground" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.form.email}</label>
                      <input required type="email" className="bg-foreground/5 border border-border/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-foreground" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.form.company}</label>
                    <input type="text" className="bg-foreground/5 border border-border/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-foreground" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.form.service}</label>
                      <select className="bg-foreground/5 border border-border/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-foreground appearance-none">
                        {t.services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.form.budget}</label>
                      <select className="bg-foreground/5 border border-border/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all text-foreground appearance-none">
                        {t.budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.form.details}</label>
                    <textarea required rows={4} className="bg-foreground/5 border border-border/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-primary transition-all resize-none text-foreground"></textarea>
                  </div>

                  <button type="submit" className="w-full py-5 bg-primary text-primary-foreground rounded-full font-bold uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-darkPurple hover:text-white transition-all shadow-[0_0_30px_rgba(46,16,101,0.3)]">
                    {t.form.submit} <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </div>
      </SectionWrapper>

      <Footer lang={lang} />
    </div>
  );
};

export default GetQuotePage;
