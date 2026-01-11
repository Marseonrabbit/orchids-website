import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { ExternalLink, Code2, Palette, Smartphone, Cpu } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "EcoSmart Dashboard",
    category: "UI/UX Design",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
    desc: "A futuristic energy monitoring dashboard with real-time 3D data visualization.",
    tags: ["Three.js", "Tailwind", "Framer Motion"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: 2,
    title: "Nexus Crypto Exchange",
    category: "Web Development",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2232&auto=format&fit=crop",
    desc: "High-performance decentralized trading platform with sub-second execution speeds.",
    tags: ["React", "Web3.js", "Rust"],
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: 3,
    title: "Aura AI Assistant",
    category: "AI/ML",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2232&auto=format&fit=crop",
    desc: "A generative AI companion for creative professionals, integrated with modern design tools.",
    tags: ["PyTorch", "Next.js", "OpenAI"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 4,
    title: "Zenith Mobile Wallet",
    category: "Mobile Apps",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    desc: "Sleek, biometric-secured financial management app for next-gen banking.",
    tags: ["React Native", "Firebase", "Node.js"],
    color: "from-orange-500/20 to-rose-500/20"
  },
  {
    id: 5,
    title: "Quantum Portfolio",
    category: "Web Development",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    desc: "Ultra-fast developer portfolio with high-end 3D physics and interactions.",
    tags: ["R3F", "GLSL", "Vite"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 6,
    title: "Lumina VR Store",
    category: "UI/UX Design",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop",
    desc: "An immersive virtual reality shopping experience for luxury automotive brands.",
    tags: ["Unity", "C#", "Oculus"],
    color: "from-violet-500/20 to-purple-500/20"
  }
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile Apps", "AI/ML"];

const PortfolioPage = ({ lang, setLang }) => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins selection:bg-primary selection:text-primary-foreground">
      <Navbar lang={lang} setLang={setLang} />
      
      <main className="pt-32 pb-40">
        <SectionWrapper className="relative">
          {/* Background Decor */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 -z-10">
            <div className="absolute top-20 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] bg-darkPurple/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-24">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black uppercase tracking-[0.8em] text-muted-foreground mb-8"
              >
                Our Showcase
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
              >
                Digital <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/40 to-foreground/10 italic font-light lowercase">
                  Excellence
                </span>
              </motion.h1>
            </div>

            {/* Filter */}
            <div className="flex flex-wrap gap-4 mb-20">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    filter === cat 
                    ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(46,16,101,0.2)]' 
                    : 'bg-foreground/5 text-muted-foreground border-border/10 hover:border-primary/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="group relative"
                  >
                    <div className={`relative overflow-hidden rounded-3xl bg-foreground/[0.02] border border-border/10 p-6 h-full transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)]`}>
                      <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-2xl">
                        <motion.img 
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                          <ExternalLink className="w-4 h-4 text-primary" />
                        </div>
                      </div>

                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <project.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest">{project.category}</span>
                      </div>

                      <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 px-3 py-1 bg-foreground/5 rounded-full border border-border/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default PortfolioPage;
