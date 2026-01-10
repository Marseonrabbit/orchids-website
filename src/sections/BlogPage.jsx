import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    { title: "The Future of 3D in Web Design", date: "Oct 12, 2025", author: "Priya Sharma", category: "Web Design" },
    { title: "Mastering Local SEO for Small Businesses", date: "Oct 05, 2025", author: "Siddharth Jain", category: "SEO" },
    { title: "Why PPC is Critical for Rapid Growth", date: "Sep 28, 2025", author: "Ananya Iyer", category: "Marketing" },
    { title: "Next.js 15: What You Need to Know", date: "Sep 21, 2025", author: "Rahul Verma", category: "Tech" }
  ];

  const categories = ["All", "Web Design", "SEO", "Marketing", "Tech"];

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
              Insights & Ideas
            </motion.h1>
            <p className="text-accent font-bold uppercase tracking-[0.4em] text-xs">
              Our Latest Thinking
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
            <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
              {categories.map((cat, i) => (
                <button key={i} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all ${i === 0 ? 'bg-foreground text-background border-foreground' : 'border-border hover:border-accent'}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Search articles..." className="w-full bg-muted/30 border border-border rounded-full pl-12 pr-6 py-3 text-sm focus:outline-none focus:border-accent transition-all text-foreground" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-muted/30 border border-border rounded-[2.5rem] overflow-hidden hover:border-accent transition-all duration-500"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                   <div className="absolute top-6 left-6 px-4 py-1.5 bg-accent/20 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-accent border border-accent/20">
                      {post.category}
                   </div>
                </div>
                <div className="p-10">
                  <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
                    <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</div>
                    <div className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</div>
                  </div>
                  <h3 className="text-3xl font-bold font-montserrat mb-8 group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
