import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Search, BarChart3, Share2, PenTool, ShoppingBag } from 'lucide-react';

const Services = ({ lang }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const t = {
    tag: "Technological Artistry",
    title: "Digital Ecosystems",
    subtitle: "Crafted for Impact",
    explore: "Discover the Flow",
    services: [
      {
        id: 1,
        icon: Code2,
        title: "Web Systems",
        desc: "Architecting immersive digital experiences with high-performance frameworks and optimized interfaces.",
        tags: ["Next.js", "React", "Node.js"],
        href: "/website-development-services",
        color: "from-blue-500/10 to-purple-500/10"
      },
      {
        id: 2,
        icon: Search,
        title: "Search Intelligence",
        desc: "Harnessing algorithmic precision to elevate your brand's authority and organic reach.",
        tags: ["Data Audit", "Semantics", "Authority"],
        href: "/seo-services",
        color: "from-emerald-500/10 to-teal-500/10"
      },
      {
        id: 3,
        icon: BarChart3,
        title: "Performance Ads",
        desc: "Precision-targeted paid media campaigns engineered for exponential conversion and ROI.",
        tags: ["Quantum Bidding", "Retargeting", "Analytics"],
        href: "/ppc-management-services",
        color: "from-orange-500/10 to-rose-500/10"
      },
      {
        id: 4,
        icon: Share2,
        title: "Social Synthesis",
        desc: "Creating resonant brand narratives that thrive across the evolving social landscape.",
        tags: ["Brand Voice", "Viral Loops", "Engagement"],
        href: "/social-media-marketing",
        color: "from-pink-500/10 to-violet-500/10"
      },
      {
        id: 5,
        icon: PenTool,
        title: "Narrative Design",
        desc: "Strategic content that bridges the gap between technical complexity and human connection.",
        tags: ["Storytelling", "SEO Copy", "Strategy"],
        href: "/content-writing-services",
        color: "from-amber-500/10 to-orange-500/10"
      },
      {
        id: 6,
        icon: ShoppingBag,
        title: "Infinite Commerce",
        desc: "Fluid, frictionless shopping experiences that redefine the boundaries of digital retail.",
        tags: ["Headless", "UX Flow", "Scale"],
        href: "/e-commerce-development",
        color: "from-indigo-500/10 to-blue-500/10"
      }
    ]
  };

  return (
    <SectionWrapper id="services" className="bg-background py-40 relative overflow-hidden">
      {/* Subdued Background Accents for performance */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/[0.01] rounded-full blur-[100px] will-change-transform" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-darkPurple/[0.01] rounded-full blur-[100px] will-change-transform" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-40 flex flex-col lg:flex-row lg:items-end justify-between gap-16">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[11px] font-black uppercase tracking-[0.8em] text-muted-foreground mb-12"
            >
              {t.tag}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-[5.5rem] font-black tracking-tighter text-foreground leading-[0.9] uppercase"
            >
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/90 via-foreground/40 to-foreground/10 font-light italic pr-4 lowercase">
                {t.subtitle}
              </span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-darkPurple/10">
          {t.services.map((service, idx) => {
            const isHovered = hoveredId === service.id;
            
            return (
              <motion.a 
                href={service.href}
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                className={`group relative block bg-background p-12 lg:p-16 overflow-hidden min-h-[500px] border-b border-r border-darkPurple/10 ${idx % 3 === 0 ? 'border-l' : ''} transition-colors duration-700 hover:bg-foreground/[0.01]`}
              >
                  {/* Unified Hover Background */}
                  <motion.div 
                    initial={false}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1.05 : 0.95
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-[40px] z-0 pointer-events-none will-change-[opacity,transform] transform-gpu`}
                  />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-20">
                      <span className="text-[10px] font-black text-muted-foreground/30 tracking-[0.5em]">0{service.id}</span>
                      <motion.div 
                        animate={{ 
                          scale: isHovered ? 1.15 : 1,
                          rotate: isHovered ? 5 : 0,
                          backgroundColor: isHovered ? "hsl(var(--primary))" : "transparent",
                          color: isHovered ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))",
                          borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--border) / 0.1)"
                        }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="w-12 h-12 border rounded-full flex items-center justify-center will-change-[transform,background-color] transform-gpu"
                      >
                        <service.icon className="w-5 h-5 stroke-[1.5px]" />
                      </motion.div>
                    </div>
                    
                    <motion.h4 
                      animate={{ x: isHovered ? 8 : 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tighter will-change-transform transform-gpu"
                    >
                      {service.title}
                    </motion.h4>
                    
                    <motion.p 
                      animate={{ color: isHovered ? "hsl(var(--foreground) / 0.8)" : "hsl(var(--muted-foreground))" }}
                      className="mb-12 text-[13px] leading-loose max-w-[85%]"
                    >
                      {service.desc}
                    </motion.p>
                    
                    <div className="flex gap-4 flex-wrap mb-10">
                      {service.tags.map(tag => (
                        <motion.span 
                          key={tag} 
                          animate={{ color: isHovered ? "hsl(var(--foreground) / 0.6)" : "hsl(var(--muted-foreground) / 0.4)" }}
                          className="text-[9px] font-black uppercase tracking-[0.3em]"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                    <motion.div 
                      animate={{ color: isHovered ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
                      className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em]"
                    >
                      <motion.span 
                        animate={{ x: isHovered ? 8 : 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="will-change-transform transform-gpu"
                      >
                        {t.explore}
                      </motion.span>
                      <motion.div 
                        animate={{ backgroundColor: isHovered ? "hsl(var(--primary) / 0.2)" : "hsl(var(--border) / 0.1)" }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="h-[1px] flex-grow will-change-[background-color]" 
                      />
                    </motion.div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
