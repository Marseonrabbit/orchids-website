import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

const About = ({ lang }) => {
  const t = {
    en: {
      tag: "Who We Are",
      title: "Connecting Ideals to",
      subtitle: "Uniquely Crafted Experiences",
      p1: "Skylumine is a premium digital production studio that brings your ideas to life through visually captivating designs and interactive experiences.",
      p2: "We specialize in comprehensive digital solutions, offering high-end web development, advanced SEO strategies, and performance-driven social marketing. Our expertise ensures a seamless online presence tailored to the future of digital interaction.",
      cta: "Learn More About Our Journey"
    },
    hi: {
      tag: "हम कौन हैं",
      title: "आदर्शों को जोड़ना",
      subtitle: "विशिष्ट रूप से तैयार अनुभव",
      p1: "Skylumine एक प्रीमियम डिजिटल प्रोडक्शन स्टूडियो है जो आपके विचारों को दृश्यात्मक रूप से आकर्षक डिजाइन और इंटरैक्टिव अनुभवों के माध्यम से जीवंत करता है।",
      p2: "हम व्यापक डिजिटल समाधानों में विशेषज्ञता रखते हैं, जो उच्च-स्तरीय वेब विकास, उन्नत SEO रणनीतियों और प्रदर्शन-संचालित सोशल मार्केटिंग की पेशकश करते हैं। हमारी विशेषज्ञता डिजिटल इंटरैक्शन के भविष्य के लिए तैयार एक सहज ऑनलाइन उपस्थिति सुनिश्चित करती है।",
      cta: "हमारी यात्रा के बारे में और जानें"
    }
  }[lang];

  return (
    <SectionWrapper id="about">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-darkPurple mb-8 font-montserrat"
            >
              {t.tag}
            </motion.div>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 font-montserrat tracking-tighter text-foreground">
                {t.title} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-darkPurple to-muted-foreground italic font-playfair font-normal">
                  {t.subtitle}
                </span>
              </h2>

          </div>
          <div className="flex-1 space-y-8 font-poppins">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground font-light leading-relaxed"
            >
              {t.p1}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground leading-relaxed text-sm md:text-base font-light"
            >
              {t.p2}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <a href="#contact" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">
                <span className="border-b border-foreground/20 pb-1 group-hover:border-darkPurple group-hover:text-darkPurple transition-all duration-300">
                  {t.cta}
                </span>
                <div className="w-8 h-[1px] bg-foreground/20 group-hover:w-12 group-hover:bg-darkPurple transition-all duration-300" />
              </a>
            </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
