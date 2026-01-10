import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-background relative">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-6 font-montserrat"
          >
            Get in Touch
          </motion.div>
            <h2 className="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tighter mb-12 text-foreground">
              Let's Build the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-foreground font-light italic font-playfair">
                Future Together
              </span>
            </h2>
  
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                  <a href="mailto:hello@skylumine.com" className="text-xl font-light hover:text-accent transition-colors text-foreground">hello@skylumine.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Phone</div>
                  <a href="tel:+919876543210" className="text-xl font-light hover:text-accent transition-colors text-foreground">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Address</div>
                  <p className="text-lg font-light text-muted-foreground max-w-xs group-hover:text-foreground transition-colors">54 A, 80 Feet Rd, Aayodhya Nagar, Jaipur, RJ 302015</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex-1">
            <motion.form 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-muted/30 border border-border p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">Your Name</label>
                  <input type="text" className="bg-background border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-foreground" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">Email Address</label>
                  <input type="email" className="bg-background border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-foreground" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-6">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">Subject</label>
                <input type="text" className="bg-background border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-all text-foreground" />
              </div>
              <div className="flex flex-col gap-2 mb-8">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-4">Message</label>
                <textarea rows={5} className="bg-background border border-border rounded-3xl px-6 py-4 focus:outline-none focus:border-accent transition-all resize-none text-foreground"></textarea>
              </div>
              <button className="w-full py-5 bg-foreground text-background rounded-full font-bold uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-accent hover:text-white transition-all shadow-[0_0_30px_rgba(var(--accent),0.5)]">
                Send Message <Send className="w-4 h-4" />
              </button>

          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
