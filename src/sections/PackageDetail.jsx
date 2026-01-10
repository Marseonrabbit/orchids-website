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
      { name: "Starter", price: "$299/mo", features: ["10 Keywords", "On-Page SEO", "Weekly Reports"] },
      { name: "Professional", price: "$599/mo", features: ["30 Keywords", "Backlink Building", "Competitor Analysis", "Bi-Weekly Reports"] },
      { name: "Enterprise", price: "$999+/mo", features: ["Custom Keywords", "Enterprise Strategy", "Dedicated Manager", "Daily Reports"] }
    ]
  },
  'ppc-package': {
    title: { en: "PPC Packages", hi: "पीपीसी पैकेज" },
    tiers: [
      { name: "Basic", price: "$499/mo", features: ["Google Ads", "2 Campaigns", "Monthly Reports"] },
      { name: "Advanced", price: "$999/mo", features: ["Google & FB Ads", "5 Campaigns", "A/B Testing", "Weekly Reports"] },
      { name: "Custom", price: "Custom", features: ["Omni-channel", "Unlimited Campaigns", "Full Management", "Daily Reports"] }
    ]
  },
  'smm-packages': {
    title: { en: "SMM Packages", hi: "एसएमएम पैकेज" },
    tiers: [
      { name: "Lite", price: "$199/mo", features: ["2 Platforms", "8 Posts/mo", "Basic Engagement"] },
      { name: "Standard", price: "$399/mo", features: ["4 Platforms", "15 Posts/mo", "Ad Management", "Community Growth"] },
      { name: "Premium", price: "$799/mo", features: ["All Platforms", "Daily Posts", "Influencer Outreach", "24/7 Support"] }
    ]
  }
};

const PackageDetail = ({ lang, setLang }) => {
  const { id } = useParams();
  const pkg = packageData[id] || packageData['seo-packages'];

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
                className={`bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] flex flex-col items-center text-center hover:border-primary/30 transition-all duration-500 ${i === 1 ? 'border-primary/20 bg-primary/[0.02]' : ''}`}
              >
                <h3 className="text-xl font-bold font-montserrat mb-2 uppercase tracking-widest">{tier.name}</h3>
                <div className="text-4xl font-extrabold font-montserrat mb-8 text-primary">{tier.price}</div>
                <ul className="space-y-4 mb-10 w-full text-left">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-primary" /> {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all ${i === 1 ? 'bg-primary text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]' : 'bg-white/5 border border-white/10 hover:bg-white hover:text-black'}`}>
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
