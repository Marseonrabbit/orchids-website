import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ExternalLink, Github, Monitor, Smartphone, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "Stripe"],
    desc: "A full-scale e-commerce solution with real-time inventory and global payments."
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bb1483282833?auto=format&fit=crop&q=80&w=800",
    tags: ["Figma", "Tailwind", "Next.js"],
    desc: "A data-intensive dashboard for enterprise analytics with custom visualizations."
  },
  {
    id: 3,
    title: "Mobile Fitness App",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    tags: ["React Native", "Firebase", "HealthKit"],
    desc: "Track workouts, nutrition, and sleep with integrated biometric data."
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    tags: ["WordPress", "SEO", "Maps"],
    desc: "A custom real estate platform with interactive maps and 360 virtual tours."
  },
  {
    id: 5,
    title: "Crypto Wallet",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
    tags: ["Solidity", "Ethers.js", "Web3"],
    desc: "A secure non-custodial wallet for managing digital assets and NFT galleries."
  },
  {
    id: 6,
    title: "AI Content Studio",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "OpenAI", "PyTorch"],
    desc: "Generative AI platform for automated copywriting and image synthesis."
  }
];

const PortfolioPage = ({ lang, setLang }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = {
    en: ["All", "Web Development", "UI/UX Design", "Mobile Apps", "Blockchain", "AI/ML"],
    hi: ["सभी", "वेब विकास", "UI/UX डिज़ाइन", "मोबाइल ऐप्स", "ब्लॉकचेन", "AI/ML"]
  };

  const t = {
    en: {
      title: "Our Work",
      subtitle: "Crafting digital excellence across industries.",
      viewProject: "View Project",
      allWork: "Explore our full catalog of digital achievements."
    },
    hi: {
      title: "हमारा कार्य",
      subtitle: "विभिन्न उद्योगों में डिजिटल उत्कृष्टता का निर्माण।",
      viewProject: "प्रोजेक्ट देखें",
      allWork: "डिजिटल उपलब्धियों के हमारे पूरे कैटलॉग का अन्वेषण करें।"
    }
  }[lang];

  const filteredProjects = projects.filter(p => 
    activeCategory === 'All' || activeCategory === 'सभी' || p.category === activeCategory ||
    (lang === 'hi' && categories.hi[categories.en.indexOf(p.category)] === activeCategory)
  );

  return (
    <div className="bg-background min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      
      <main className="pt-32">
        <SectionWrapper className="py-20">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6">
                {t.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl font-light">
                {t.subtitle}
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-20">
              {categories[lang].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeCategory === cat 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-foreground/5 text-muted-foreground border-border/10 hover:border-primary/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-foreground/5 rounded-3xl overflow-hidden border border-border/10"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-darkPurple/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-darkPurple hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </button>
                      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-darkPurple hover:scale-110 transition-transform">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="text-[9px] font-medium text-muted-foreground bg-foreground/5 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default PortfolioPage;
