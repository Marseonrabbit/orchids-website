import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = ({ lang }) => {
  const t = {
    en: {
      tag: "Get in Touch",
      title: "Let's Build the",
      subtitle: "Future Together",
      name: "Your Name",
      email: "Email Address",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      info: "Contact Information",
      address: "54 A, 80 Feet Rd, Aayodhya Nagar, Jaipur, RJ 302015",
    },
    hi: {
      tag: "संपर्क करें",
      title: "आइए मिलकर",
      subtitle: "भविष्य बनाएं",
      name: "आपका नाम",
      email: "ईमेल पता",
      subject: "विषय",
      message: "संदेश",
      send: "संदेश भेजें",
      info: "संपर्क जानकारी",
      address: "54 ए, 80 फीट रोड, अयोध्या नगर, जयपुर, आरजे 302015",
    }
  }[lang];

  return (
    <SectionWrapper id="contact" className="bg-background relative transition-colors duration-500">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-darkPurple mb-6 font-montserrat"
          >
            {t.tag}
          </motion.div>
            <h2 className="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tighter mb-12 text-foreground">
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-darkPurple to-foreground font-light italic font-playfair">
                {t.subtitle}
              </span>
            </h2>
  
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-darkPurple transition-all duration-500">
                  <Mail className="w-5 h-5 text-foreground group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                  <a href="mailto:hello@skylumine.com" className="text-xl font-light hover:text-darkPurple transition-colors text-foreground">hello@skylumine.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-darkPurple transition-all duration-500">
                  <Phone className="w-5 h-5 text-foreground group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                  <a href="tel:+919876543210" className="text-xl font-light hover:text-darkPurple transition-colors text-foreground">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center group-hover:bg-darkPurple transition-all duration-500">
                  <MapPin className="w-5 h-5 text-foreground group-hover:text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Address</div>
                  <p className="text-lg font-light text-muted-foreground max-w-xs group-hover:text-foreground transition-colors">{t.address}</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex-1">
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-foreground/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.name}</label>
                  <input type="text" className="bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-darkPurple transition-all text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.email}</label>
                  <input type="email" className="bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-darkPurple transition-all text-foreground" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.subject}</label>
                <input type="text" className="bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-darkPurple transition-all text-foreground" />
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">{t.message}</label>
                <textarea rows={5} className="bg-foreground/5 border border-foreground/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-darkPurple transition-all resize-none text-foreground"></textarea>
              </div>
              <button className="w-full py-5 bg-darkPurple text-white rounded-full font-bold uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-darkPurple/90 transition-all shadow-[0_0_30px_rgba(46,16,101,0.5)]">
                {t.send} <Send className="w-4 h-4" />
              </button>

          </motion.form>
        </div>
      </div>
    </SectionWrapper>

  );
};

export default Contact;
