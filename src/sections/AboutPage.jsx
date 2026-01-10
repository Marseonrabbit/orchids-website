import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { Target, Eye, Users, Award, TrendingUp } from 'lucide-react';

const AboutPage = ({ lang, setLang }) => {
  const t = {
    en: {
      title: "Our Story",
      subtitle: "Crafting Digital Futures",
      mission: "Mission",
      vision: "Vision",
      missionText: "To empower businesses with innovative digital solutions that drive growth and create meaningful connections.",
      visionText: "To be the global leader in future-forward digital production, setting new standards for creativity and tech.",
      stats: [
        { value: "5000+", label: "Clients" },
        { value: "7500+", label: "Projects" },
        { value: "150+", label: "Experts" },
        { value: "10+", label: "Years" }
      ],
      teamTitle: "Our Leadership",
      team: [
        { name: "Siddharth Jain", role: "CEO & Founder" },
        { name: "Priya Sharma", role: "Creative Director" },
        { name: "Rahul Verma", role: "Technical Head" },
        { name: "Ananya Iyer", role: "Marketing Strategist" }
      ]
    },
    hi: {
      title: "हमारी कहानी",
      subtitle: "डिजिटल भविष्य का निर्माण",
      mission: "लक्ष्य",
      vision: "दृष्टिकोण",
      missionText: "नवाचारी डिजिटल समाधानों के साथ व्यवसायों को सशक्त बनाना जो विकास को गति देते हैं और सार्थक संबंध बनाते हैं।",
      visionText: "भविष्योन्मुख डिजिटल उत्पादन में वैश्विक नेता बनना, रचनात्मकता और तकनीक के लिए नए मानक स्थापित करना।",
      stats: [
        { value: "5000+", label: "ग्राहक" },
        { value: "7500+", label: "परियोजनाएं" },
        { value: "150+", label: "विशेषज्ञ" },
        { value: "10+", label: "वर्ष" }
      ],
      teamTitle: "हमारा नेतृत्व",
      team: [
        { name: "सिद्धार्थ जैन", role: "सीईओ और संस्थापक" },
        { name: "प्रिया शर्मा", role: "रचनात्मक निदेशक" },
        { name: "राहुल वर्मा", role: "तकनीकी प्रमुख" },
        { name: "अनन्या अय्यर", role: "मार्केटिंग रणनीतिकार" }
      ]
    }
  }[lang];

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} />
      
      <main className="pt-32">
        <SectionWrapper>
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-extrabold font-montserrat tracking-tighter mb-6 text-foreground"
            >
              {t.title}
            </motion.h1>
            <p className="text-darkPurple font-bold uppercase tracking-[0.4em] text-xs">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="bg-card border border-foreground/5 p-12 rounded-[3rem]">
              <Target className="w-10 h-10 text-darkPurple mb-8" />
              <h3 className="text-3xl font-bold font-montserrat mb-6 text-foreground">{t.mission}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">{t.missionText}</p>
            </div>
            <div className="bg-card border border-foreground/5 p-12 rounded-[3rem]">
              <Eye className="w-10 h-10 text-darkPurple mb-8" />
              <h3 className="text-3xl font-bold font-montserrat mb-6 text-foreground">{t.vision}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">{t.visionText}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 text-center">
            {t.stats.map((stat, i) => (
              <div key={i}>
                <div className="text-5xl font-extrabold font-montserrat mb-2 text-darkPurple">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tighter mb-16 text-center text-foreground">{t.teamTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.team.map((member, i) => (
                <div key={i} className="group">
                  <div className="aspect-[4/5] bg-foreground/5 rounded-[2rem] mb-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-darkPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h4 className="text-xl font-bold font-montserrat mb-1 text-foreground">{member.name}</h4>
                  <p className="text-darkPurple text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer lang={lang} />
    </div>

  );
};

export default AboutPage;
