import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import { Check, ArrowRight } from 'lucide-react';

const packageData = {
  'seo-packages': {
    title: { en: "SEO Packages", hi: "एसईओ पैकेज" },
    tiers: [
      { name: "Starter", price: "$299/mo", features: ["10 Keywords", "On-Page SEO", "Weekly Reports", "Local SEO Audit"] },
      { name: "Professional", price: "$599/mo", features: ["30 Keywords", "Backlink Building", "Competitor Analysis", "Bi-Weekly Reports", "Content Strategy"] },
      { name: "Enterprise", price: "$999+/mo", features: ["Custom Keywords", "Enterprise Strategy", "Dedicated Manager", "Daily Reports", "Full Technical Audit"] }
    ]
  },
  'ppc-package': {
    title: { en: "PPC Packages", hi: "पीपीसी पैकेज" },
    tiers: [
      { name: "Basic", price: "$499/mo", features: ["Google Ads", "2 Campaigns", "Monthly Reports", "Keyword Research"] },
      { name: "Advanced", price: "$999/mo", features: ["Google & FB Ads", "5 Campaigns", "A/B Testing", "Weekly Reports", "Landing Page Audit"] },
      { name: "Custom", price: "Custom", features: ["Omni-channel", "Unlimited Campaigns", "Full Management", "Daily Reports", "Conversion Tracking"] }
    ]
  },
  'smm-packages': {
    title: { en: "SMM Packages", hi: "एसएमएम पैकेज" },
    tiers: [
      { name: "Lite", price: "$199/mo", features: ["2 Platforms", "8 Posts/mo", "Basic Engagement", "Monthly Schedule"] },
      { name: "Standard", price: "$399/mo", features: ["4 Platforms", "15 Posts/mo", "Ad Management", "Community Growth", "Content Creation"] },
      { name: "Premium", price: "$799/mo", features: ["All Platforms", "Daily Posts", "Influencer Outreach", "24/7 Support", "Viral Strategy"] }
    ]
  },
  'smo-package': {
    title: { en: "SMO Packages", hi: "एसएमओ पैकेज" },
    tiers: [
      { name: "Basic SMO", price: "$149/mo", features: ["Profile Optimization", "3 Platforms", "Basic Graphics", "Monthly Insights"] },
      { name: "Growth SMO", price: "$299/mo", features: ["Advanced Profile Audit", "5 Platforms", "Viral Hook Design", "Weekly Engagement"] },
      { name: "Elite SMO", price: "$499/mo", features: ["Reputation Management", "Custom Social Strategy", "Influencer Integration", "Daily Optimization"] }
    ]
  },
  'digital-marketing-packages': {
    title: { en: "Digital Marketing Packages", hi: "डिजिटल मार्केटिंग पैकेज" },
    tiers: [
      { name: "Silver", price: "$799/mo", features: ["SEO (10 Keywords)", "SMM (2 Platforms)", "Basic PPC", "Monthly Report"] },
      { name: "Gold", price: "$1499/mo", features: ["SEO (30 Keywords)", "SMM (5 Platforms)", "Advanced PPC", "Bi-Weekly Strategy"] },
      { name: "Platinum", price: "$2499/mo", features: ["Full Scale SEO", "Omni-channel SMM", "High ROAS PPC", "Daily Performance Check"] }
    ]
  },
  'website-designing-packages': {
    title: { en: "Website Designing Packages", hi: "वेबसाइट डिजाइनिंग पैकेज" },
    tiers: [
      { name: "Corporate", price: "$999", features: ["5-8 Pages", "Custom UI/UX", "Mobile Responsive", "Contact Form", "Basic SEO"] },
      { name: "eCommerce", price: "$1999", features: ["Unlimited Products", "Payment Gateway", "Inventory System", "Advanced Search", "Speed Optimized"] },
      { name: "Custom App", price: "Quote", features: ["Full-Stack Dev", "Custom Features", "API Integration", "Scalable Architecture", "Premium Support"] }
    ]
  },
  'business-hosting': {
    title: { en: "Business Hosting", hi: "बिजनेस होस्टिंग" },
    tiers: [
      { name: "Shared Business", price: "$19/mo", features: ["10GB SSD", "Free SSL", "Daily Backups", "24/7 Support"] },
      { name: "Managed WordPress", price: "$49/mo", features: ["Cloud Infrastructure", "Auto-Updates", "Staging Environment", "Malware Cleanup"] },
      { name: "Dedicated Cluster", price: "$199/mo", features: ["Load Balancing", "Enterprise Security", "Unlimited Bandwidth", "99.99% Uptime SLA"] }
    ]
  }
};

const PackageDetail = ({ lang, setLang }) => {
  const { id } = useParams();
  const location = window.location.pathname;
  const pathId = location.split('/').pop() || 'seo-packages';
  const pkg = packageData[id] || packageData[pathId] || packageData['seo-packages'];

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins selection:bg-primary selection:text-primary-foreground">
      <Navbar lang={lang} setLang={setLang} />
      
      <main className="pt-32">
        <SectionWrapper>
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-extrabold font-montserrat tracking-tighter mb-6"
            >
              {pkg.title[lang]}
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {pkg.tiers.map((tier, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-foreground/[0.02] border border-border/5 p-10 rounded-[2.5rem] flex flex-col items-center text-center hover:border-primary/30 transition-all duration-500 ${i === 1 ? 'border-primary/20 bg-primary/[0.02]' : ''}`}
              >
                <h3 className="text-xl font-bold font-montserrat mb-2 uppercase tracking-widest">{tier.name}</h3>
                <div className="text-4xl font-extrabold font-montserrat mb-8 text-primary">{tier.price}</div>
                <ul className="space-y-4 mb-10 w-full text-left">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" /> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all ${i === 1 ? 'bg-primary text-primary-foreground shadow-[0_0_20px_rgba(46,16,101,0.3)]' : 'bg-foreground/5 border border-border/10 hover:bg-foreground hover:text-background'}`}>
                  {lang === 'en' ? "Get Started" : "शुरू करें"}
                </button>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default PackageDetail;
