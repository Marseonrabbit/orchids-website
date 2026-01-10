import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <div className="flex-1">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8 font-montserrat"
          >
            Who We Are
          </motion.div>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 font-montserrat tracking-tighter text-foreground">
              Connecting Ideals to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-muted-foreground italic font-playfair font-normal">
                Uniquely Crafted Experiences
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
            Skylumine is a premium digital production studio that brings your ideas to life through visually captivating designs and interactive experiences.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground leading-relaxed text-sm md:text-base font-light"
          >
            We specialize in comprehensive digital solutions, offering high-end web development, advanced SEO strategies, and performance-driven social marketing. Our expertise ensures a seamless online presence tailored to the future of digital interaction.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <a href="#contact" className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">
              <span className="border-b border-border pb-1 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                Learn More About Our Journey
              </span>
              <div className="w-8 h-[1px] bg-border group-hover:w-12 group-hover:bg-accent transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
