import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { Briefcase, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const CareerPage = () => {
  const jobs = [
    { title: "Senior Web Developer", type: "Full-Time", location: "Jaipur / Remote" },
    { title: "SEO Specialist", type: "Full-Time", location: "Jaipur" },
    { title: "UI/UX Designer", type: "Contract", location: "Remote" },
    { title: "Content Strategist", type: "Full-Time", location: "Jaipur" }
  ];

  const benefits = ["Flexible Hours", "Remote Work", "Health Insurance", "Paid Time Off", "Skill Development", "Team Outings"];

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
              Join Our Team
            </motion.h1>
            <p className="text-accent font-bold uppercase tracking-[0.4em] text-xs">
              Build the Future with Us
            </p>
          </div>

          <div className="mb-32">
            <h2 className="text-3xl font-bold font-montserrat mb-12 border-b border-border pb-8 text-foreground">Current Openings</h2>
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-muted/30 border border-border p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 hover:bg-accent/5 hover:border-accent transition-all duration-300"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold font-montserrat group-hover:text-accent transition-colors text-foreground">{job.title}</h3>
                    <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      <div className="flex items-center gap-2"><Clock className="w-3 h-3" /> {job.type}</div>
                      <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {job.location}</div>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-muted border border-border rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all flex items-center gap-2 text-foreground">
                    Apply Now <ArrowUpRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
             <h2 className="text-3xl font-bold font-montserrat mb-12 text-center text-foreground">Why Work With Us?</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="bg-muted/30 border border-border p-6 rounded-2xl text-center">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-accent">{benefit}</div>
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
