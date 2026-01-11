import SectionWrapper from '../components/SectionWrapper';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, Search, BarChart3, Share2, PenTool, ShoppingBag, 
  Layout, Package, Zap, Settings, Globe, LineChart, 
  MapPin, Building2, Server, TrendingUp, Layers, Rocket, ShieldCheck
} from 'lucide-react';

const MotionLink = motion(Link);

const Services = ({ lang }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = {
    en: ["All", "Web Development", "CMS & WordPress", "SEO & Growth", "Design & Content", "Infrastructure", "Premium Packages"],
    hi: ["सभी", "वेब डेवलपमेंट", "सीएमएस और वर्डप्रेस", "एसईओ और विकास", "डिजाइन और कंटेंट", "इन्फ्रास्ट्रक्चर", "प्रीमियम पैकेज"]
  };

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
          category: "CMS & WordPress",
          title: "WordPress Development",
          desc: "Expert custom WordPress solutions tailored for scalability, security, and high performance.",
          tags: ["Custom CMS", "PHP", "Architecture"],
          href: "/wordpress-development",
          color: "from-blue-600/10 to-indigo-600/10"
        },
        {
          id: 2,
          icon: ShoppingBag,
          category: "CMS & WordPress",
          title: "WooCommerce Development",
          desc: "Full-scale eCommerce platforms built on WooCommerce for seamless shopping experiences.",
          tags: ["E-commerce", "Payments", "Inventory"],
          href: "/woocommerce-development",
          color: "from-purple-600/10 to-pink-600/10"
        },
        {
          id: 3,
          icon: Layout,
          category: "CMS & WordPress",
          title: "WordPress Theme Development",
          desc: "Unique, pixel-perfect custom themes built from the ground up for your specific brand identity.",
          tags: ["UX/UI", "Responsive", "Lightweight"],
          href: "/wordpress-theme-development",
          color: "from-emerald-600/10 to-teal-600/10"
        },
        {
          id: 4,
          icon: Layers,
          category: "CMS & WordPress",
          title: "WordPress Migration",
          desc: "Zero-downtime migration services moving your site to optimized environments with data integrity.",
          tags: ["Safe Move", "Database", "Hosting"],
          href: "/wordpress-migration",
          color: "from-orange-600/10 to-rose-600/10"
        },
        {
          id: 5,
          icon: Code2,
          category: "CMS & WordPress",
          title: "WordPress Plugin Development",
          desc: "Custom-built plugins to extend functionality and solve complex business requirements.",
          tags: ["Backend", "API", "Extension"],
          href: "/wordpress-plugin-development",
          color: "from-blue-400/10 to-cyan-400/10"
        },
        {
          id: 6,
          icon: Layout,
          category: "CMS & WordPress",
          title: "WordPress Theme Integration",
          desc: "Professional integration of premium themes with custom modifications and optimizations.",
          tags: ["Configuration", "Setup", "Customization"],
          href: "/wordpress-theme-integration",
          color: "from-violet-600/10 to-purple-600/10"
        },
        {
          id: 7,
          icon: Code2,
          category: "CMS & WordPress",
          title: "Magento Development",
          desc: "Enterprise eCommerce solutions with Magento, optimized for high-volume transactions and complexity.",
          tags: ["Enterprise", "B2B", "Scalability"],
          href: "/magento-development",
          color: "from-orange-500/10 to-red-500/10"
        },
        {
          id: 8,
          icon: Globe,
          category: "CMS & WordPress",
          title: "Joomla & Drupal",
          desc: "Robust CMS development using Joomla and Drupal for content-heavy enterprise websites.",
          tags: ["Joomla", "Drupal", "Enterprise CMS"],
          href: "/joomla-drupal-development",
          color: "from-blue-500/10 to-sky-500/10"
        },
        {
          id: 9,
          icon: Code2,
          category: "Web Development",
          title: "Custom App Development",
          desc: "High-performance applications built with Java, .Net, and modern Angular/React frameworks.",
          tags: ["Java", ".Net", "Angular"],
          href: "/custom-application-development",
          color: "from-indigo-600/10 to-blue-600/10"
        },
        {
          id: 10,
          icon: Zap,
          category: "Infrastructure",
          title: "Page Speed Optimization",
          desc: "Drastically reduce load times and improve Core Web Vitals for better ranking and UX.",
          tags: ["Caching", "CDN", "Optimization"],
          href: "/page-speed-optimization",
          color: "from-yellow-400/10 to-orange-400/10"
        },
        {
          id: 11,
          icon: Settings,
          category: "Infrastructure",
          title: "Website Maintenance",
          desc: "Continuous health checks, updates, and security patches to keep your site peak performing.",
          tags: ["Security", "Updates", "Uptime"],
          href: "/website-maintenance",
          color: "from-gray-600/10 to-slate-600/10"
        },
        {
          id: 12,
          icon: ShieldCheck,
          category: "SEO & Growth",
          title: "SEO Audit Services",
          desc: "Comprehensive technical and content analysis to uncover hidden growth opportunities.",
          tags: ["Analysis", "Reporting", "Strategy"],
          href: "/seo-audit-services",
          color: "from-red-600/10 to-orange-600/10"
        },
        {
          id: 13,
          icon: MapPin,
          category: "SEO & Growth",
          title: "Local SEO Services",
          desc: "Dominate local search results and drive foot traffic to your physical business locations.",
          tags: ["GMB", "Citations", "Reviews"],
          href: "/local-seo-services",
          color: "from-green-600/10 to-emerald-600/10"
        },
        {
          id: 14,
          icon: Building2,
          category: "SEO & Growth",
          title: "Enterprise SEO Services",
          desc: "Scalable organic growth strategies for large corporations and high-volume websites.",
          tags: ["Scale", "Complex Data", "Global"],
          href: "/enterprise-seo-services",
          color: "from-blue-800/10 to-indigo-800/10"
        },
        {
          id: 15,
          icon: ShoppingBag,
          category: "SEO & Growth",
          title: "eCommerce SEO Services",
          desc: "Product-focused search optimization to maximize visibility in shopping queries.",
          tags: ["Product Pages", "Schema", "CRO"],
          href: "/ecommerce-seo-services",
          color: "from-pink-500/10 to-rose-500/10"
        },
        {
          id: 16,
          icon: TrendingUp,
          category: "SEO & Growth",
          title: "Social Media Optimization (SMO)",
          desc: "Strategic organic social growth focused on engagement and viral potential.",
          tags: ["Organic", "Engagement", "Profiles"],
          href: "/social-media-optimization",
          color: "from-cyan-500/10 to-blue-500/10"
        },
        {
          id: 17,
          icon: ShieldCheck,
          category: "SEO & Growth",
          title: "Reputation Management",
          desc: "Monitor and improve your online brand perception and customer trust.",
          tags: ["ORM", "Crisis Management", "Reviews"],
          href: "/reputation-management",
          color: "from-amber-600/10 to-yellow-600/10"
        },
        {
          id: 18,
          icon: PenTool,
          category: "Design & Content",
          title: "Branding & Identity",
          desc: "Complete visual identity design including logos, typography, and brand guidelines.",
          tags: ["Logo Design", "Branding", "UI/UX"],
          href: "/branding-identity",
          color: "from-purple-600/10 to-violet-600/10"
        },
        {
          id: 19,
          icon: PenTool,
          category: "Design & Content",
          title: "Content Writing & Strategy",
          desc: "High-quality, SEO-driven content creation for blogs, websites, and marketing campaigns.",
          tags: ["Copywriting", "SEO Content", "Strategy"],
          href: "/content-writing-services",
          color: "from-orange-600/10 to-amber-600/10"
        },
        {
          id: 20,
          icon: Server,
          category: "Infrastructure",
          title: "Business Hosting",
          desc: "Managed, high-availability hosting solutions tailored for mission-critical business apps.",
          tags: ["Cloud", "Security", "Scale"],
          href: "/business-hosting",
          color: "from-slate-700/10 to-zinc-700/10"
        },
        {
          id: 21,
          icon: Globe,
          category: "Infrastructure",
          title: "Domain Services",
          desc: "Domain registration, management, and strategic portfolio consultation.",
          tags: ["Registration", "DNS", "Security"],
          href: "/domain-services",
          color: "from-teal-600/10 to-emerald-600/10"
        },
        {
          id: 22,
          icon: Package,
          category: "Premium Packages",
          title: "SEO Packages",
          desc: "Tiered organic growth plans designed for every stage of your business journey.",
          tags: ["Basic", "Pro", "Elite"],
          href: "/seo-packages",
          color: "from-amber-500/10 to-yellow-500/10"
        },
        {
          id: 23,
          icon: Package,
          category: "Premium Packages",
          title: "PPC Packages",
          desc: "ROI-driven paid advertising bundles for Google, Meta, and LinkedIn.",
          tags: ["Ad Spend", "Management", "ROAS"],
          href: "/ppc-package",
          color: "from-blue-500/10 to-indigo-500/10"
        },
        {
          id: 24,
          icon: Package,
          category: "Premium Packages",
          title: "SMM Packages",
          desc: "Complete social media management tiers including content and community management.",
          tags: ["Content", "Posting", "Community"],
          href: "/smm-packages",
          color: "from-purple-500/10 to-pink-500/10"
        },
        {
          id: 25,
          icon: Package,
          category: "Premium Packages",
          title: "SMO Packages",
          desc: "Dedicated organic social optimization plans for consistent brand growth.",
          tags: ["Growth", "Optimization", "Audit"],
          href: "/smo-package",
          color: "from-teal-500/10 to-emerald-500/10"
        },
        {
          id: 26,
          icon: Package,
          category: "Premium Packages",
          title: "Digital Marketing Packages",
          desc: "All-in-one digital growth bundles combining SEO, PPC, and Social.",
          tags: ["Full Stack", "Strategy", "Impact"],
          href: "/digital-marketing-packages",
          color: "from-indigo-600/10 to-violet-600/10"
        },
        {
          id: 27,
          icon: Package,
          category: "Premium Packages",
          title: "Website Designing Packages",
          desc: "Comprehensive design and development bundles for modern web presence.",
          tags: ["UI/UX", "Development", "Support"],
          href: "/website-designing-packages",
          color: "from-rose-600/10 to-orange-600/10"
        },
        {
          id: 28,
          icon: Rocket,
          category: "Infrastructure",
          title: "Performance Infrastructure",
          desc: "Architecting cloud-native infrastructures for high-traffic digital platforms.",
          tags: ["Cloud", "DevOps", "Reliability"],
          href: "/performance-infrastructure",
          color: "from-cyan-600/10 to-blue-600/10"
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
          category: "CMS & WordPress",
          title: "वर्डप्रेस विकास",
          desc: "स्केलेबिलिटी, सुरक्षा और उच्च प्रदर्शन के लिए तैयार विशेषज्ञ कस्टम वर्डप्रेस समाधान।",
          tags: ["कस्टम सीएमएस", "पीएचपी", "आर्किटेक्चर"],
          href: "/wordpress-development",
          color: "from-blue-600/10 to-indigo-600/10"
        },
        {
          id: 2,
          icon: ShoppingBag,
          category: "CMS & WordPress",
          title: "वूकामर्स विकास",
          desc: "सहज खरीदारी अनुभवों के लिए वूकामर्स पर निर्मित पूर्ण-स्तरीय ई-कॉमर्स प्लेटफॉर्म।",
          tags: ["ई-कॉमर्स", "भुगतान", "इन्वेंट्री"],
          href: "/woocommerce-development",
          color: "from-purple-600/10 to-pink-600/10"
        },
        {
          id: 3,
          icon: Layout,
          category: "CMS & WordPress",
          title: "वर्डप्रेस थीम विकास",
          desc: "आपकी विशिष्ट ब्रांड पहचान के लिए शुरू से निर्मित अद्वितीय, पिक्सेल-परफेक्ट कस्टम थीम।",
          tags: ["यूएक्स/यूआई", "उत्तरदायी", "हल्का"],
          href: "/wordpress-theme-development",
          color: "from-emerald-600/10 to-teal-600/10"
        },
        {
          id: 4,
          icon: Layers,
          category: "CMS & WordPress",
          title: "वर्डप्रेस माइग्रेशन",
          desc: "डेटा अखंडता के साथ अनुकूलित वातावरण में आपकी साइट को स्थानांतरित करने वाली शून्य-डाउनटाइम सेवाएं।",
          tags: ["सुरक्षित कदम", "डेटाबेस", "होस्टिंग"],
          href: "/wordpress-migration",
          color: "from-orange-600/10 to-rose-600/10"
        },
        {
          id: 5,
          icon: Code2,
          category: "CMS & WordPress",
          title: "वर्डप्रेस प्लगइन विकास",
          desc: "कार्यक्षमता बढ़ाने और जटिल व्यावसायिक आवश्यकताओं को हल करने के लिए कस्टम-निर्मित प्लगइन्स।",
          tags: ["बैकएंड", "एपीआई", "एक्सटेंशन"],
          href: "/wordpress-plugin-development",
          color: "from-blue-400/10 to-cyan-400/10"
        },
        {
          id: 6,
          icon: Layout,
          category: "CMS & WordPress",
          title: "वर्डप्रेस थीम एकीकरण",
          desc: "कस्टम संशोधनों और अनुकूलन के साथ प्रीमियम थीम का पेशेवर एकीकरण।",
          tags: ["कॉन्फ़िगरेशन", "सेटअप", "कस्टमाइजेशन"],
          href: "/wordpress-theme-integration",
          color: "from-violet-600/10 to-purple-600/10"
        },
        {
          id: 7,
          icon: Code2,
          category: "CMS & WordPress",
          title: "मैजेंटो विकास",
          desc: "मैजेंटो के साथ एंटरप्राइज ईकॉमर्स समाधान, उच्च-मात्रा लेनदेन और जटिलता के लिए अनुकूलित।",
          tags: ["एंटरप्राइज", "B2B", "स्केलेबिलिटी"],
          href: "/magento-development",
          color: "from-orange-500/10 to-red-500/10"
        },
        {
          id: 8,
          icon: Globe,
          category: "CMS & WordPress",
          title: "जूमला और ड्रुपल",
          desc: "कंटेंट-भारी एंटरप्राइज वेबसाइटों के लिए जूमला और ड्रुपल का उपयोग करके मजबूत सीएमएस विकास।",
          tags: ["जूमला", "ड्रुपल", "एंटरप्राइज सीएमएस"],
          href: "/joomla-drupal-development",
          color: "from-blue-500/10 to-sky-500/10"
        },
        {
          id: 9,
          icon: Code2,
          category: "Web Development",
          title: "कस्टम ऐप विकास",
          desc: "जावा, .नेट और आधुनिक एंगुलर/रिएक्ट फ्रेमवर्क के साथ निर्मित उच्च-प्रदर्शन अनुप्रयोग।",
          tags: ["जावा", ".नेट", "एंगुलर"],
          href: "/custom-application-development",
          color: "from-indigo-600/10 to-blue-600/10"
        },
        {
          id: 10,
          icon: Zap,
          category: "Infrastructure",
          title: "पेज स्पीड ऑप्टिमाइजेशन",
          desc: "लोड समय को कम करें और बेहतर रैंकिंग और यूएक्स के लिए कोर वेब विटल्स में सुधार करें।",
          tags: ["कैशिंग", "सीडीएन", "अनुकूलन"],
          href: "/page-speed-optimization",
          color: "from-yellow-400/10 to-orange-400/10"
        },
        {
          id: 11,
          icon: Settings,
          category: "Infrastructure",
          title: "वेबसाइट रखरखाव",
          desc: "आपकी साइट को चरम प्रदर्शन पर रखने के लिए निरंतर स्वास्थ्य जांच, अपडेट और सुरक्षा पैच।",
          tags: ["सुरक्षा", "अपडेट", "अपटाइम"],
          href: "/website-maintenance",
          color: "from-gray-600/10 to-slate-600/10"
        },
        {
          id: 12,
          icon: ShieldCheck,
          category: "SEO & Growth",
          title: "एसईओ ऑडिट सेवाएं",
          desc: "छिपे हुए विकास के अवसरों को उजागर करने के लिए व्यापक तकनीकी और सामग्री विश्लेषण।",
          tags: ["विश्लेषण", "रिपोर्टिंग", "रणनीति"],
          href: "/seo-audit-services",
          color: "from-red-600/10 to-orange-600/10"
        },
        {
          id: 13,
          icon: MapPin,
          category: "SEO & Growth",
          title: "स्थानीय एसईओ सेवाएं",
          desc: "स्थानीय खोज परिणामों पर हावी हों और अपने भौतिक व्यावसायिक स्थानों पर फुट ट्रैफिक बढ़ाएं।",
          tags: ["जीएमबी", "प्रशंसा पत्र", "समीक्षा"],
          href: "/local-seo-services",
          color: "from-green-600/10 to-emerald-600/10"
        },
        {
          id: 14,
          icon: Building2,
          category: "SEO & Growth",
          title: "एंटरप्राइज एसईओ सेवाएं",
          desc: "बड़े निगमों और उच्च-मात्रा वाली वेबसाइटों के लिए स्केलेबल ऑर्गेनिक विकास रणनीतियां।",
          tags: ["पैमाना", "जटिल डेटा", "वैश्विक"],
          href: "/enterprise-seo-services",
          color: "from-blue-800/10 to-indigo-800/10"
        },
        {
          id: 15,
          icon: ShoppingBag,
          category: "SEO & Growth",
          title: "ई-कॉमर्स एसईओ सेवाएं",
          desc: "खरीदारी प्रश्नों में दृश्यता को अधिकतम करने के लिए उत्पाद-केंद्रित खोज अनुकूलन।",
          tags: ["उत्पाद पृष्ठ", "स्कीमा", "सीआरओ"],
          href: "/ecommerce-seo-services",
          color: "from-pink-500/10 to-rose-500/10"
        },
        {
          id: 16,
          icon: TrendingUp,
          category: "SEO & Growth",
          title: "सोशल मीडिया ऑप्टिमाइजेशन (SMO)",
          desc: "जुड़ाव और वायरल क्षमता पर केंद्रित रणनीतिक ऑर्गेनिक सोशल विकास।",
          tags: ["ऑर्गेनिक", "जुड़ाव", "प्रोफाइल"],
          href: "/social-media-optimization",
          color: "from-cyan-500/10 to-blue-500/10"
        },
        {
          id: 17,
          icon: ShieldCheck,
          category: "SEO & Growth",
          title: "प्रतिष्ठा प्रबंधन",
          desc: "अपनी ऑनलाइन ब्रांड धारणा और ग्राहक विश्वास की निगरानी और सुधार करें।",
          tags: ["ओआरएम", "संकट प्रबंधन", "समीक्षा"],
          href: "/reputation-management",
          color: "from-amber-600/10 to-yellow-600/10"
        },
        {
          id: 18,
          icon: PenTool,
          category: "Design & Content",
          title: "ब्रांडिंग और पहचान",
          desc: "लोगो, टाइपोग्राफी और ब्रांड दिशानिर्देशों सहित पूर्ण दृश्य पहचान डिजाइन।",
          tags: ["लोगो डिजाइन", "ब्रांडिंग", "UI/UX"],
          href: "/branding-identity",
          color: "from-purple-600/10 to-violet-600/10"
        },
        {
          id: 19,
          icon: PenTool,
          category: "Design & Content",
          title: "कंटेंट राइटिंग और रणनीति",
          desc: "ब्लॉग, वेबसाइट और मार्केटिंग अभियानों के लिए उच्च गुणवत्ता वाली, एसईओ-संचालित कंटेंट निर्माण।",
          tags: ["कॉपीराइटिंग", "SEO कंटेंट", "रणनीति"],
          href: "/content-writing-services",
          color: "from-orange-600/10 to-amber-600/10"
        },
        {
          id: 20,
          icon: Server,
          category: "Infrastructure",
          title: "बिजनेस होस्टिंग",
          desc: "मिशन-महत्वपूर्ण व्यावसायिक ऐप्स के लिए तैयार प्रबंधित, उच्च-उपलब्धता होस्टिंग समाधान।",
          tags: ["क्लाउड", "सुरक्षा", "पैमाना"],
          href: "/business-hosting",
          color: "from-slate-700/10 to-zinc-700/10"
        },
        {
          id: 21,
          icon: Globe,
          category: "Infrastructure",
          title: "डोमेन सेवाएं",
          desc: "डोमेन पंजीकरण, प्रबंधन और रणनीतिक पोर्टफोलियो परामर्श।",
          tags: ["पंजीकरण", "DNS", "सुरक्षा"],
          href: "/domain-services",
          color: "from-teal-600/10 to-emerald-600/10"
        },
        {
          id: 22,
          icon: Package,
          category: "Premium Packages",
          title: "एसईओ पैकेज",
          desc: "आपकी व्यावसायिक यात्रा के हर चरण के लिए डिज़ाइन किए गए स्तरीय ऑर्गेनिक विकास योजनाएं।",
          tags: ["बेसिक", "प्रो", "एलीट"],
          href: "/seo-packages",
          color: "from-amber-500/10 to-yellow-500/10"
        },
        {
          id: 23,
          icon: Package,
          category: "Premium Packages",
          title: "पीपीसी पैकेज",
          desc: "गूगल, मेटा और लिंक्डइन के लिए आरओआई-संचालित भुगतान विज्ञापन बंडल।",
          tags: ["विज्ञापन खर्च", "प्रबंधन", "आरओएएस"],
          href: "/ppc-package",
          color: "from-blue-500/10 to-indigo-500/10"
        },
        {
          id: 24,
          icon: Package,
          category: "Premium Packages",
          title: "एसएमएम पैकेज",
          desc: "सामग्री और सामुदायिक प्रबंधन सहित पूर्ण सोशल मीडिया प्रबंधन स्तर।",
          tags: ["सामग्री", "पोस्टिंग", "समुदाय"],
          href: "/smm-packages",
          color: "from-purple-500/10 to-pink-500/10"
        },
        {
          id: 25,
          icon: Package,
          category: "Premium Packages",
          title: "एसएमओ पैकेज",
          desc: "लगातार ब्रांड विकास के लिए समर्पित ऑर्गेनिक सोशल ऑप्टिमाइजेशन योजनाएं।",
          tags: ["विकास", "अनुकूलन", "ऑडिट"],
          href: "/smo-package",
          color: "from-teal-500/10 to-emerald-500/10"
        },
        {
          id: 26,
          icon: Package,
          category: "Premium Packages",
          title: "डिजिटल मार्केटिंग पैकेज",
          desc: "एसईओ, पीपीसी और सोशल को मिलाकर ऑल-इन-वन डिजिटल विकास बंडल।",
          tags: ["पूर्ण स्टैक", "रणनीति", "प्रभाव"],
          href: "/digital-marketing-packages",
          color: "from-indigo-600/10 to-violet-600/10"
        },
        {
          id: 27,
          icon: Package,
          category: "Premium Packages",
          title: "वेबसाइट डिजाइनिंग पैकेज",
          desc: "आधुनिक वेब उपस्थिति के लिए व्यापक डिजाइन और विकास बंडल।",
          tags: ["यूआई/यूएक्स", "विकास", "सहायता"],
          href: "/website-designing-packages",
          color: "from-rose-600/10 to-orange-600/10"
        },
        {
          id: 28,
          icon: Rocket,
          category: "Infrastructure",
          title: "प्रदर्शन बुनियादी ढांचा",
          desc: "उच्च-ट्रैफ़िक डिजिटल प्लेटफार्मों के लिए क्लाउड-नेटिव इन्फ्रास्ट्रक्चर का निर्माण।",
          tags: ["क्लाउड", "डेवऑप्स", "विश्वसनीयता"],
          href: "/performance-infrastructure",
          color: "from-cyan-600/10 to-blue-600/10"
        }
      ]
    }
  }[lang];

  const filteredServices = t.services.filter(s => 
    activeCategory === 'All' || activeCategory === 'सभी' || s.category === activeCategory || 
    (lang === 'hi' && categories.hi[categories.en.indexOf(s.category)] === activeCategory)
  );

  return (
    <SectionWrapper id="services" className="bg-background py-40 relative overflow-hidden">
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

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-20">
          {categories[lang].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === cat 
                ? 'bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(46,16,101,0.2)]' 
                : 'bg-foreground/5 text-muted-foreground border-border/10 hover:border-primary/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-darkPurple/10">
          {filteredServices.map((service, idx) => {
            const isHovered = hoveredId === service.id;
            
              return (
                <MotionLink 
                  to={service.href}
                  key={service.id}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
                  className={`group relative block bg-background p-12 lg:p-16 overflow-hidden min-h-[450px] border-r border-b border-darkPurple/10 transition-colors duration-700 hover:bg-foreground/[0.01]`}
                >
                  <motion.div 
                    initial={false}
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1.05 : 0.95
                    }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} blur-[40px] z-0 pointer-events-none transform-gpu`}
                  />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-20">
                      <span className="text-[10px] font-black text-muted-foreground/30 tracking-[0.5em]">{idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                      <motion.div 
                        animate={{ 
                          scale: isHovered ? 1.15 : 1,
                          rotate: isHovered ? 5 : 0,
                          backgroundColor: isHovered ? "hsl(var(--primary))" : "transparent",
                          color: isHovered ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))",
                          borderColor: isHovered ? "hsl(var(--primary))" : "hsl(var(--border) / 0.1)"
                        }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="w-12 h-12 border rounded-full flex items-center justify-center transform-gpu"
                      >
                        <service.icon className="w-5 h-5 stroke-[1.5px]" />
                      </motion.div>
                    </div>
                    
                    <motion.h4 
                      animate={{ x: isHovered ? 8 : 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="text-3xl md:text-4xl font-bold text-foreground mb-8 tracking-tighter transform-gpu"
                    >
                      {service.title}
                    </motion.h4>
                    
                    <motion.p 
                      animate={{ color: isHovered ? "hsl(var(--foreground) / 0.8)" : "hsl(var(--muted-foreground))" }}
                      className="mb-12 text-[12px] leading-loose max-w-[90%]"
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
                    className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.5em] mt-auto"
                  >
                    <motion.span 
                      animate={{ x: isHovered ? 8 : 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="transform-gpu"
                    >
                      {t.explore}
                    </motion.span>
                    <motion.div 
                      animate={{ backgroundColor: isHovered ? "hsl(var(--primary) / 0.2)" : "hsl(var(--border) / 0.1)" }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="h-[1px] flex-grow" 
                    />
                  </motion.div>
                </div>
                </MotionLink>
              );
            })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;
