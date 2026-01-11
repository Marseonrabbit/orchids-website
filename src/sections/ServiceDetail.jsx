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
    features: [
      "Interactive 3D Elements",
      "Mobile-First Design",
      "UX/UI Excellence",
      "Premium Animations",
      "Custom Branding"
    ],
    detailedDesc: "Our web design process focuses on creating a unique digital identity for your brand. We combine high-end aesthetics with functional user experiences to ensure your website stands out in the crowded digital landscape."
  },
  'website-development-services': {
    icon: Code2,
    title: "Website Development Services",
    desc: "Scalable, high-performance web development solutions using modern tech stacks.",
    features: [
      "Full-Stack Solutions",
      "Custom CMS Development",
      "API Integrations",
      "Scalable Architecture",
      "Ongoing Maintenance"
    ],
    detailedDesc: "From simple landing pages to complex enterprise systems, we deliver robust web solutions tailored to your business goals. We use Next.js, React, and Node.js to ensure speed and reliability."
  },
  'seo-services': {
    icon: Search,
    title: "SEO Services",
    desc: "Dominate search results with our comprehensive white-hat SEO strategies.",
    features: [
      "Technical SEO Audit",
      "Keyword Research",
      "Quality Backlink Building",
      "Content Strategy",
      "Competitor Analysis"
    ],
    detailedDesc: "Our SEO services are designed to improve your organic visibility and drive targeted traffic. We stay ahead of algorithm updates to ensure sustainable growth for your business."
  },
  'ppc-management-services': {
    icon: BarChart3,
    title: "PPC Management Services",
    desc: "Drive immediate results and high ROI with expertly managed paid campaigns.",
    features: [
      "Google Ads Management",
      "Social Media Ads",
      "Conversion Tracking",
      "Ad Copy Optimization",
      "A/B Testing"
    ],
    detailedDesc: "We manage your PPC budget effectively to ensure maximum conversions for every dollar spent. Our data-driven approach ensures your ads reach the right audience at the right time."
  },
  'social-media-marketing': {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a loyal community and boost brand awareness on all major social platforms.",
    features: [
      "Content Calendar",
      "Influencer Marketing",
      "Community Engagement",
      "Platform Management",
      "Analytics Reporting"
    ],
    detailedDesc: "Our social media strategies are tailored to your brand's voice and goals. We create engaging content that sparks conversations and drives customer loyalty."
  },
  'content-writing-services': {
    icon: PenTool,
    title: "Content Writing Services",
    desc: "Persuasive and SEO-friendly content that speaks directly to your audience.",
    features: [
      "Blog Post Writing",
      "Technical Writing",
      "Copywriting",
      "SEO Content",
      "Email Newsletters"
    ],
    detailedDesc: "We believe content is king. Our expert writers craft high-quality, research-based content that establishes your brand as an authority in your industry."
  },
  'e-commerce-development': {
    icon: ShoppingBag,
    title: "E-Commerce Development",
    desc: "Powerful online stores designed to handle high traffic and seamless transactions.",
    features: [
      "Shopify & WooCommerce",
      "Secure Payment Gateways",
      "Inventory Management",
      "Custom Checkout Flow",
      "Mobile Shopping"
    ],
    detailedDesc: "We build e-commerce platforms that are not just beautiful but also optimized for sales. We focus on speed, security, and a seamless user journey from product discovery to checkout."
  },
  'page-speed-optimization': {
    icon: Gauge,
    title: "Page Speed Optimization",
    desc: "Ensure your website loads instantly to reduce bounce rates and improve SEO.",
    features: [
      "Core Web Vitals Fix",
      "Image Optimization",
      "Code Minification",
      "Server Optimization",
      "CDN Integration"
    ],
    detailedDesc: "Speed is a critical factor for both user experience and search rankings. We optimize every aspect of your site to achieve 95+ PageSpeed scores."
  },
  'website-maintenance': {
    icon: ShieldCheck,
    title: "Website Maintenance",
    desc: "Keep your website secure, updated, and performing at its best 24/7.",
    features: [
      "Security Monitoring",
      "Regular Backups",
      "Software Updates",
      "Performance Checks",
      "Emergency Support"
    ],
    detailedDesc: "Our maintenance packages give you peace of mind. We handle the technical details so you can focus on running your business without worrying about downtime or security threats."
  },
  'seo-audit-services': {
    icon: Search,
    title: "SEO Audit Services",
    desc: "Identify hidden issues and discover growth opportunities with a deep-dive audit.",
    features: [
      "Comprehensive Reports",
      "On-Page Analysis",
      "Backlink Audit",
      "Competitor Benchmarking",
      "Actionable Insights"
    ],
    detailedDesc: "Our SEO audit is more than just a checklist. We provide a strategic roadmap to improve your rankings based on a thorough analysis of your site's health and competition."
  },
  'local-seo-services': {
    icon: Globe,
    title: "Local SEO Services",
    desc: "Connect with local customers and dominate local search maps in your area.",
    features: [
      "GMB Optimization",
      "Local Citations",
      "Review Management",
      "Geo-Targeted Ads",
      "Map Visibility"
    ],
    detailedDesc: "If you have a local business, you need local SEO. We help you appear in the 'Local Pack' on Google to drive more foot traffic and local calls."
  },
  'enterprise-seo-services': {
    icon: Zap,
    title: "Enterprise SEO Services",
    desc: "Scalable SEO strategies for large organizations with complex digital footprints.",
    features: [
      "Massive Keyword Tracking",
      "Inter-Departmental SEO",
      "Complex Migrations",
      "International SEO",
      "ROI Modeling"
    ],
    detailedDesc: "Enterprise SEO requires a different approach. We focus on scalability, stakeholder management, and technical infrastructure to drive results for large-scale websites."
  },
  'ecommerce-seo-services': {
    icon: Search,
    title: "E-Commerce SEO Services",
    desc: "Optimize thousands of product pages to drive organic sales and conversions.",
    features: [
      "Product Schema",
      "Category Optimization",
      "Faceted Search SEO",
      "Internal Linking",
      "Conversion-Centric SEO"
    ],
    detailedDesc: "We understand the unique challenges of e-commerce SEO. We optimize your product and category pages to ensure they appear for buyers at every stage of the funnel."
  },
  'social-media-optimization': {
    icon: Share2,
    title: "Social Media Optimization",
    desc: "Fine-tune your social profiles to improve engagement and organic reach.",
    features: [
      "Profile Branding",
      "Bio Optimization",
      "Hashtag Strategy",
      "Cross-Platform Sync",
      "Engagement Audit"
    ],
    detailedDesc: "SMO is about making your social media presence work harder for you. We optimize your profiles to ensure consistent branding and maximum visibility across all channels."
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center text-foreground">Service not found.</div>;
  }

  const Icon = service.icon;

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-poppins">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowRight className="w-3 h-3 rotate-180" /> Back to Home
        </Link>

        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-10 text-primary"
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
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <CheckCircle2 className="w-3 h-3 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">{feature}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_20px_rgba(46,16,101,0.3)]">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex-1">
             <div className="bg-foreground/[0.02] border border-border/5 p-10 md:p-16 rounded-[3rem] backdrop-blur-sm relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
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
