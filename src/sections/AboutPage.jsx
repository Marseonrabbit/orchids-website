import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { Target, Eye } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { value: "5000+", label: "Clients" },
    { value: "7500+", label: "Projects" },
    { value: "150+", label: "Experts" },
    { value: "10+", label: "Years" }
  ];

  const team = [
    { name: "Siddharth Jain", role: "CEO & Founder" },
    { name: "Priya Sharma", role: "Creative Director" },
    { name: "Rahul Verma", role: "Technical Head" },
    { name: "Ananya Iyer", role: "Marketing Strategist" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins">
      <Navbar />
      
      <main className="pt-32">
        <SectionWrapper>
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-extrabold font-montserrat tracking-tighter mb-6"
            >
              Our Story
            </motion.h1>
            <p className="text-accent font-bold uppercase tracking-[0.4em] text-xs">
              Crafting Digital Futures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="bg-muted/30 border border-border p-12 rounded-[3rem]">
              <Target className="w-10 h-10 text-accent mb-8" />
              <h3 className="text-3xl font-bold font-montserrat mb-6">Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">To empower businesses with innovative digital solutions that drive growth and create meaningful connections.</p>
            </div>
            <div className="bg-muted/30 border border-border p-12 rounded-[3rem]">
              <Eye className="w-10 h-10 text-accent mb-8" />
              <h3 className="text-3xl font-bold font-montserrat mb-6">Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">To be the global leader in future-forward digital production, setting new standards for creativity and tech.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-extrabold font-montserrat mb-2 text-foreground">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tighter mb-16 text-center">Our Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group">
                  <div className="aspect-[4/5] bg-muted/50 rounded-[2rem] mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h4 className="text-xl font-bold font-montserrat mb-1">{member.name}</h4>
                  <p className="text-accent text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
