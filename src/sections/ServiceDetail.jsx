import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, ArrowRight, Code2, Search, BarChart3, Share2, PenTool, ShoppingBag, Zap, ShieldCheck, Gauge, Globe } from 'lucide-react';

const serviceData = {
  'web-design-company': {
    icon: Code2,
    title: "Web Design Company",
    desc: "We create future-forward, interactive web designs that captivate and convert.",
    features: ["Interactive 3D Elements", "Mobile-First Design", "UX/UI Excellence", "Premium Animations", "Custom Branding"],
    detailedDesc: "Our web design process focuses on creating a unique digital identity for your brand. We combine high-end aesthetics with functional user experiences to ensure your website stands out in the crowded digital landscape."
  },
  'website-development-services': {
    icon: Code2,
    title: "Website Development Services",
    desc: "Scalable, high-performance web development solutions using modern tech stacks.",
    features: ["Full-Stack Solutions", "Custom CMS Development", "API Integrations", "Scalable Architecture", "Ongoing Maintenance"],
    detailedDesc: "From simple landing pages to complex enterprise systems, we deliver robust web solutions tailored to your business goals. We use Next.js, React, and Node.js to ensure speed and reliability."
  },
  'seo-services': {
    icon: Search,
    title: "SEO Services",
    desc: "Dominate search results with our comprehensive white-hat SEO strategies.",
    features: ["Technical SEO Audit", "Keyword Research", "Quality Backlink Building", "Content Strategy", "Competitor Analysis"],
    detailedDesc: "Our SEO services are designed to improve your organic visibility and drive targeted traffic. We stay ahead of algorithm updates to ensure sustainable growth for your business."
  },
  'ppc-management-services': {
    icon: BarChart3,
    title: "PPC Management Services",
    desc: "Drive immediate results and high ROI with expertly managed paid campaigns.",
    features: ["Google Ads Management", "Social Media Ads", "Conversion Tracking", "Ad Copy Optimization", "A/B Testing"],
    detailedDesc: "We manage your PPC budget effectively to ensure maximum conversions for every dollar spent. Our data-driven approach ensures your ads reach the right audience at the right time."
  },
  'social-media-marketing': {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a loyal community and boost brand awareness on all major social platforms.",
    features: ["Content Calendar", "Influencer Marketing", "Community Engagement", "Platform Management", "Analytics Reporting"],
    detailedDesc: "Our social media strategies are tailored to your brand's voice and goals. We create engaging content that sparks conversations and drives customer loyalty."
  },
  'content-writing-services': {
    icon: PenTool,
    title: "Content Writing Services",
    desc: "Persuasive and SEO-friendly content that speaks directly to your audience.",
    features: ["Blog Post Writing", "Technical Writing", "Copywriting", "SEO Content", "Email Newsletters"],
    detailedDesc: "We believe content is king. Our expert writers craft high-quality, research-based content that establishes your brand as an authority in your industry."
  },
  'e-commerce-development': {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    desc: "Powerful online stores designed to handle high traffic and seamless transactions.",
    features: ["Shopify & WooCommerce", "Secure Payment Gateways", "Inventory Management", "Custom Checkout Flow", "Mobile Shopping"],
    detailedDesc: "We build e-commerce platforms that are not just beautiful but also optimized for sales. We focus on speed, security, and a seamless user journey from product discovery to checkout."
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id] || serviceData['web-design-company'];
  const Icon = service.icon;

  return (
    <div className="relative w-full min-h-screen text-foreground bg-background selection:bg-accent selection:text-accent-foreground font-poppins">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors mb-12">
          <ArrowRight className="w-3 h-3 rotate-180" /> Back to Home
        </Link>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center mb-10 text-accent"
            >
              <Icon className="w-10 h-10" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold font-montserrat tracking-tighter mb-8 leading-[0.9]">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 leading-relaxed">
              {service.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <CheckCircle2 className="w-3 h-3 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-4 px-10 py-5 bg-foreground text-background rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-accent hover:text-white transition-all shadow-[0_0_20px_rgba(var(--accent),0.3)]">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex-1">
             <div className="bg-muted/30 border border-border p-10 md:p-16 rounded-[3rem] backdrop-blur-sm relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
                <h3 className="text-2xl font-bold font-montserrat mb-8">Service Overview</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed font-poppins font-light text-lg">
                  <p>{service.detailedDesc}</p>
                  <p>
                    Our team of experts works closely with you to understand your specific needs and deliver solutions that exceed expectations. We focus on measurable results and sustainable long-term growth.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
