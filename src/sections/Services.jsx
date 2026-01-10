import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Search, BarChart3, Share2, PenTool, ShoppingBag } from 'lucide-react';
import ServiceCharacter3D from '../components/ServiceCharacter3D';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';

const Services = ({ lang }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const t = {
    en: {
      tag: "Technological Artistry",
      title: "Digital Ecosystems",
      subtitle: "Crafted for Impact",
      explore: "Discover the Flow",
      services: [
        {
          id: 1,
          icon: Code2,
          title: "Web Systems",
          desc: "Architecting immersive digital experiences with high-performance frameworks and 3D integration.",
          tags: ["Next.js", "Three.js", "WebGPU"],
          href: "/website-development-services",
          color: "#FFFFFF"
        },
        {
          id: 2,
          icon: Search,
          title: "Search Intelligence",
          desc: "Harnessing algorithmic precision to elevate your brand's authority and organic reach.",
          tags: ["Data Audit", "Semantics", "Authority"],
          href: "/seo-services",
          color: "#FFFFFF"
        },
        {
          id: 3,
          icon: BarChart3,
          title: "Performance Ads",
          desc: "Precision-targeted paid media campaigns engineered for exponential conversion and ROI.",
          tags: ["Quantum Bidding", "Retargeting", "Analytics"],
          href: "/ppc-management-services",
          color: "#FFFFFF"
        },
        {
          id: 4,
          icon: Share2,
          title: "Social Synthesis",
          desc: "Creating resonant brand narratives that thrive across the evolving social landscape.",
          tags: ["Brand Voice", "Viral Loops", "Engagement"],
          href: "/social-media-marketing",
          color: "#FFFFFF"
        },
        {
          id: 5,
          icon: PenTool,
          title: "Narrative Design",
          desc: "Strategic content that bridges the gap between technical complexity and human connection.",
          tags: ["Storytelling", "SEO Copy", "Strategy"],
          href: "/content-writing-services",
          color: "#FFFFFF"
        },
        {
          id: 6,
          icon: ShoppingBag,
          title: "Infinite Commerce",
          desc: "Fluid, frictionless shopping experiences that redefine the boundaries of digital retail.",
          tags: ["Headless", "UX Flow", "Scale"],
          href: "/e-commerce-development",
          color: "#FFFFFF"
        }
      ]
    },
    hi: {
      tag: "तकनीकी कलात्मकता",
      title: "डिजिटल पारिस्थितिकी तंत्र",
      subtitle: "प्रभाव के लिए निर्मित",
      explore: "प्रवाह की खोज करें",
      services: [
        {
          id: 1,
          icon: Code2,
          title: "वेब सिस्टम",
          desc: "उच्च-प्रदर्शन फ्रेमवर्क और 3D एकीकरण के साथ इमर्सिव डिजिटल अनुभव तैयार करना।",
          tags: ["नेक्स्ट.जेएस", "थ्री.जेएस", "वेबजीपीयू"],
          href: "/website-development-services",
          color: "#FFFFFF"
        },
        {
          id: 2,
          icon: Search,
          title: "खोज बुद्धिमत्ता",
          desc: "आपके ब्रांड के अधिकार और ऑर्गेनिक पहुंच को बढ़ाने के लिए एल्गोरिथम सटीकता का उपयोग करना।",
          tags: ["डेटा ऑडिट", "सिमेंटिक्स", "अथॉरिटी"],
          href: "/seo-services",
          color: "#FFFFFF"
        },
        {
          id: 3,
          icon: BarChart3,
          title: "प्रदर्शन विज्ञापन",
          desc: "घातीय रूपांतरण और आरओआई के लिए इंजीनियर सटीक-लक्षित भुगतान मीडिया अभियान।",
          tags: ["क्वांटम बिडिंग", "रीटारगेटिंग", "एनालिटिक्स"],
          href: "/ppc-management-services",
          color: "#FFFFFF"
        },
        {
          id: 4,
          icon: Share2,
          title: "सामाजिक संश्लेषण",
          desc: "विकसित होते सामाजिक परिदृश्य में फलने-फूलने वाली ब्रांड कथाएं बनाना।",
          tags: ["ब्रांड वॉयस", "वायरल लूप्स", "एंगेजमेंट"],
          href: "/social-media-marketing",
          color: "#FFFFFF"
        },
        {
          id: 5,
          icon: PenTool,
          title: "कथा डिजाइन",
          desc: "रणनीतिक सामग्री जो तकनीकी जटिलता और मानवीय संबंध के बीच की खाई को पाटती है।",
          tags: ["कहानी सुनाना", "एसईओ कॉपी", "रणनीति"],
          href: "/content-writing-services",
          color: "#FFFFFF"
        },
        {
          id: 6,
          icon: ShoppingBag,
          title: "अनंत वाणिज्य",
          desc: "तरल, घर्षण रहित खरीदारी के अनुभव जो डिजिटल खुदरा की सीमाओं को फिर से परिभाषित करते हैं।",
          tags: ["हेडलेस", "यूएक्स फ्लो", "स्केल"],
          href: "/e-commerce-development",
          color: "#FFFFFF"
        }
      ]
    }
  }[lang];

  return (
    <SectionWrapper id="services" className="bg-black py-40 relative overflow-hidden">
      {/* Immersive Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-40 flex flex-col lg:flex-row lg:items-end justify-between gap-16">
          <div className="max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[11px] font-black uppercase tracking-[0.8em] text-white/30 mb-12"
            >
              {t.tag}
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-[10rem] font-black tracking-tighter text-white leading-[0.85] uppercase"
            >
              {t.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/20 to-transparent font-light italic pr-4 lowercase">
                {t.subtitle}
              </span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-[320px] text-white/20 text-[10px] font-medium leading-relaxed uppercase tracking-[0.4em] border-l border-white/5 pl-10"
          >
            {lang === 'en' 
              ? "We architect digital legacies by merging technical extreme with aesthetic purity."
              : "हम सौंदर्य शुद्धता के साथ तकनीकी चरम सीमा को मिलाकर डिजिटल विरासत का निर्माण करते हैं।"}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-white/5">
          {t.services.map((service, idx) => (
            <motion.a 
              href={service.href}
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`group relative block bg-black p-12 lg:p-16 hover:bg-white/[0.01] transition-all duration-1000 overflow-hidden min-h-[700px] border-b border-r border-white/5 ${idx % 3 === 0 ? 'border-l' : ''}`}
            >
              {/* High-Performance 3D Character */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-all duration-1000 scale-[0.85] group-hover:scale-100 pointer-events-none">
                <ServiceCharacter3D color={service.color} type={service.id} isHovered={hoveredId === service.id} />
              </div>

              {/* Dynamic Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-[5] opacity-80 group-hover:opacity-40 transition-opacity duration-1000" />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-20">
                    <span className="text-[10px] font-black text-white/10 tracking-[0.5em]">0{service.id}</span>
                    <div className="w-12 h-12 border border-white/5 rounded-full flex items-center justify-center group-hover:border-white/40 group-hover:bg-white group-hover:text-black transition-all duration-700">
                      <service.icon className="w-5 h-5 stroke-[1.5px]" />
                    </div>
                  </div>
                  
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter group-hover:translate-x-4 transition-transform duration-700 ease-out">
                    {service.title}
                  </h4>
                  
                  <p className="text-white/30 mb-12 text-[13px] leading-loose max-w-[85%] group-hover:text-white/60 transition-colors duration-700">
                    {service.desc}
                  </p>
                  
                  <div className="flex gap-4 flex-wrap mb-10">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors duration-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] text-white/20 group-hover:text-white transition-all duration-700">
                  <span className="group-hover:translate-x-2 transition-transform">{t.explore}</span>
                  <div className="h-[1px] bg-white/5 flex-grow group-hover:bg-white/20 transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Global Canvas for View porting - Positioned behind but covering everything */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <Canvas 
          shadows 
          dpr={[1, 1.5]} 
          camera={{ position: [0, 0, 4.5], fov: 35 }}
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          <View.Port />
        </Canvas>
      </div>
    </SectionWrapper>
  );
};

export default Services;
