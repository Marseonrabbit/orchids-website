import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage = ({ lang, setLang }) => {
  const t = {
    en: {
      title: "Insights & Ideas",
      subtitle: "Our Latest Thinking",
      search: "Search articles...",
      categories: ["All", "Web Design", "SEO", "Marketing", "Tech"],
      readMore: "Read More",
      posts: [
        { title: "The Future of 3D in Web Design", date: "Oct 12, 2025", author: "Priya Sharma", category: "Web Design" },
        { title: "Mastering Local SEO for Small Businesses", date: "Oct 05, 2025", author: "Siddharth Jain", category: "SEO" },
        { title: "Why PPC is Critical for Rapid Growth", date: "Sep 28, 2025", author: "Ananya Iyer", category: "Marketing" },
        { title: "Next.js 15: What You Need to Know", date: "Sep 21, 2025", author: "Rahul Verma", category: "Tech" }
      ]
    },
    hi: {
      title: "अंतर्दृष्टि और विचार",
      subtitle: "हमारी नवीनतम सोच",
      search: "लेख खोजें...",
      categories: ["सभी", "वेब डिजाइन", "एसईओ", "मार्केटिंग", "टेक"],
      readMore: "और पढ़ें",
      posts: [
        { title: "वेब डिजाइन में 3D का भविष्य", date: "12 अक्टूबर, 2025", author: "प्रिया शर्मा", category: "वेब डिजाइन" },
        { title: "छोटे व्यवसायों के लिए लोकल एसईओ में महारत", date: "05 अक्टूबर, 2025", author: "सिद्धार्थ जैन", category: "एसईओ" },
        { title: "तेजी से विकास के लिए पीपीसी क्यों महत्वपूर्ण है", date: "28 सितंबर, 2025", author: "अनन्या अय्यर", category: "मार्केटिंग" },
        { title: "Next.js 15: आपको क्या जानने की जरूरत है", date: "21 सितंबर, 2025", author: "राहुल वर्मा", category: "टेक" }
      ]
    }
  }[lang];

  return (
    <div className="min-h-screen bg-dark text-white font-poppins">
      <Navbar lang={lang} setLang={setLang} />
      
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

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
              {t.categories.map((cat, i) => (
                <button key={i} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${i === 0 ? 'bg-primary border-primary' : 'border-white/10 hover:border-primary/50'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input type="text" placeholder={t.search} className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-primary transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.posts.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/20 transition-all duration-500"
              >
                <div className="aspect-video bg-white/5 relative overflow-hidden">
                   <div className="absolute top-6 left-6 px-4 py-1.5 bg-primary/20 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-primary border border-primary/20">
                      {post.category}
                   </div>
                </div>
                <div className="p-10">
                  <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6">
                    <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</div>
                    <div className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</div>
                  </div>
                  <h3 className="text-3xl font-bold font-montserrat mb-8 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-primary transition-all">
                    {t.readMore} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default BlogPage;
