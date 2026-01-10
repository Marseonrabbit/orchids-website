import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { Briefcase, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const CareerPage = () => {
  const t = {
    title: "Join Our Team",
    subtitle: "Build the Future with Us",
    openings: "Current Openings",
    apply: "Apply Now",
    benefitsTitle: "Why Work With Us?",
    benefits: ["Flexible Hours", "Remote Work", "Health Insurance", "Paid Time Off", "Skill Development", "Team Outings"],
    jobs: [
      { title: "Senior Web Developer", type: "Full-Time", location: "Jaipur / Remote" },
      { title: "SEO Specialist", type: "Full-Time", location: "Jaipur" },
      { title: "UI/UX Designer", type: "Contract", location: "Remote" },
      { title: "Content Strategist", type: "Full-Time", location: "Jaipur" }
    ]
  };

  return (
    <div className="min-h-screen bg-dark text-white font-poppins">
      <Navbar />
      
      <main className="pt-32">
        <SectionWrapper>
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-extrabold font-montserrat tracking-tighter mb-6"
            >
              {t.title}
            </motion.h1>
            <p className="text-primary font-bold uppercase tracking-[0.4em] text-xs">
              {t.subtitle}
            </p>
          </div>

          <div className="mb-32">
            <h2 className="text-3xl font-bold font-montserrat mb-12 border-b border-white/5 pb-8">{t.openings}</h2>
            <div className="space-y-4">
              {t.jobs.map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 hover:bg-primary/[0.05] hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-montserrat group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      <div className="flex items-center gap-2"><Clock className="w-3 h-3" /> {job.type}</div>
                      <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {job.location}</div>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:border-primary transition-all flex items-center gap-2">
                    {t.apply} <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-bold font-montserrat mb-12 text-center">{t.benefitsTitle}</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {t.benefits.map((benefit, i) => (
                  <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl text-center">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-primary">{benefit}</div>
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

export default CareerPage;
