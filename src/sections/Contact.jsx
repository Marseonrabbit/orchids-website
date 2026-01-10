import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const t = {
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
  };

  return (
    <SectionWrapper id="contact" className="bg-dark relative">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 font-montserrat"
          >
            {t.tag}
          </motion.div>
            <h2 className="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tighter mb-12">
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-darkPurple to-white font-light italic font-playfair">
                {t.subtitle}
              </span>
            </h2>
  
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-darkPurple transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Email</div>
                  <a href="mailto:hello@skylumine.com" className="text-xl font-light hover:text-darkPurple transition-colors">hello@skylumine.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-darkPurple transition-all duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Phone</div>
                  <a href="tel:+919876543210" className="text-xl font-light hover:text-darkPurple transition-colors">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-darkPurple transition-all duration-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Address</div>
                  <p className="text-lg font-light text-gray-400 max-w-xs group-hover:text-white transition-colors">{t.address}</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex-1">
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-4">{t.name}</label>
                  <input type="text" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-darkPurple transition-all text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-4">{t.email}</label>
                  <input type="email" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-darkPurple transition-all text-white" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-4">{t.subject}</label>
                <input type="text" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-darkPurple transition-all text-white" />
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-4">{t.message}</label>
                <textarea rows={5} className="bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-darkPurple transition-all resize-none text-white"></textarea>
              </div>
              <button className="w-full py-5 bg-white text-black rounded-full font-bold uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-darkPurple hover:text-white transition-all shadow-[0_0_30px_rgba(46,16,101,0.5)]">
                {t.send} <Send className="w-4 h-4" />
              </button>

          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
