import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, ArrowRight, Code2, Search, BarChart3, Share2, PenTool, ShoppingBag, Zap, ShieldCheck, Gauge, Globe } from 'lucide-react';

const serviceData = {
  'web-design-company': {
    icon: Code2,
    title: { en: "Web Design Company", hi: "वेब डिजाइन कंपनी" },
    desc: { 
      en: "We create future-forward, interactive web designs that captivate and convert.", 
      hi: "हम भविष्योन्मुख, इंटरैक्टिव वेब डिजाइन बनाते हैं जो मंत्रमुग्ध करते हैं और परिवर्तित करते हैं।" 
    },
    features: [
      { en: "Interactive 3D Elements", hi: "इंटरैक्टिव 3D तत्व" },
      { en: "Mobile-First Design", hi: "मोबाइल-फर्स्ट डिजाइन" },
      { en: "UX/UI Excellence", hi: "यूएक्स/यूआई उत्कृष्टता" },
      { en: "Premium Animations", hi: "प्रीमियम एनिमेशन" },
      { en: "Custom Branding", hi: "कस्टम ब्रांडिंग" }
    ],
    detailedDesc: {
      en: "Our web design process focuses on creating a unique digital identity for your brand. We combine high-end aesthetics with functional user experiences to ensure your website stands out in the crowded digital landscape.",
      hi: "हमारी वेब डिजाइन प्रक्रिया आपके ब्रांड के लिए एक अनूठी डिजिटल पहचान बनाने पर केंद्रित है। हम उच्च-स्तरीय सौंदर्यशास्त्र को कार्यात्मक उपयोगकर्ता अनुभवों के साथ जोड़ते हैं ताकि यह सुनिश्चित हो सके कि आपकी वेबसाइट भीड़ भरे डिजिटल परिदृश्य में अलग दिखे।"
    }
  },
  'website-development-services': {
    icon: Code2,
    title: { en: "Website Development Services", hi: "वेबसाइट विकास सेवाएं" },
    desc: { 
      en: "Scalable, high-performance web development solutions using modern tech stacks.", 
      hi: "आधुनिक टेक स्टैक का उपयोग करके स्केलेबल, उच्च-प्रदर्शन वेब विकास समाधान।" 
    },
    features: [
      { en: "Full-Stack Solutions", hi: "फुल-स्टैक समाधान" },
      { en: "Custom CMS Development", hi: "कस्टम सीएमएस विकास" },
      { en: "API Integrations", hi: "एपीआई एकीकरण" },
      { en: "Scalable Architecture", hi: "स्केलेबल आर्किटेक्चर" },
      { en: "Ongoing Maintenance", hi: "निरंतर रखरखाव" }
    ],
    detailedDesc: {
      en: "From simple landing pages to complex enterprise systems, we deliver robust web solutions tailored to your business goals. We use Next.js, React, and Node.js to ensure speed and reliability.",
      hi: "साधारण लैंडिंग पेजों से लेकर जटिल उद्यम प्रणालियों तक, हम आपके व्यावसायिक लक्ष्यों के अनुरूप मजबूत वेब समाधान प्रदान करते हैं। हम गति और विश्वसनीयता सुनिश्चित करने के लिए नेक्स्ट.जेएस, रिएक्ट और नोड.जेएस का उपयोग करते हैं।"
    }
  },
  'seo-services': {
    icon: Search,
    title: { en: "SEO Services", hi: "एसईओ सेवाएं" },
    desc: { 
      en: "Dominate search results with our comprehensive white-hat SEO strategies.", 
      hi: "हमारी व्यापक व्हाइट-हैट एसईओ रणनीतियों के साथ खोज परिणामों पर हावी हों।" 
    },
    features: [
      { en: "Technical SEO Audit", hi: "तकनीकी एसईओ ऑडिट" },
      { en: "Keyword Research", hi: "कीवर्ड रिसर्च" },
      { en: "Quality Backlink Building", hi: "गुणवत्तापूर्ण बैकलिंक निर्माण" },
      { en: "Content Strategy", hi: "कंटेंट रणनीति" },
      { en: "Competitor Analysis", hi: "प्रतियोगी विश्लेषण" }
    ],
    detailedDesc: {
      en: "Our SEO services are designed to improve your organic visibility and drive targeted traffic. We stay ahead of algorithm updates to ensure sustainable growth for your business.",
      hi: "हमारी एसईओ सेवाएं आपकी ऑर्गेनिक दृश्यता में सुधार करने और लक्षित ट्रैफ़िक लाने के लिए डिज़ाइन की गई हैं। हम आपके व्यवसाय के लिए निरंतर विकास सुनिश्चित करने के लिए एल्गोरिदम अपडेट से आगे रहते हैं।"
    }
  },
  'ppc-management-services': {
    icon: BarChart3,
    title: { en: "PPC Management Services", hi: "पीपीसी प्रबंधन सेवाएं" },
    desc: { 
      en: "Drive immediate results and high ROI with expertly managed paid campaigns.", 
      hi: "विशेषज्ञ रूप से प्रबंधित सशुल्क अभियानों के साथ तत्काल परिणाम और उच्च आरओआई प्राप्त करें।" 
    },
    features: [
      { en: "Google Ads Management", hi: "गूगल विज्ञापन प्रबंधन" },
      { en: "Social Media Ads", hi: "सोशल मीडिया विज्ञापन" },
      { en: "Conversion Tracking", hi: "रूपांतरण ट्रैकिंग" },
      { en: "Ad Copy Optimization", hi: "विज्ञापन प्रति अनुकूलन" },
      { en: "A/B Testing", hi: "ए/बी टेस्टिंग" }
    ],
    detailedDesc: {
      en: "We manage your PPC budget effectively to ensure maximum conversions for every dollar spent. Our data-driven approach ensures your ads reach the right audience at the right time.",
      hi: "हम आपके पीपीसी बजट को प्रभावी ढंग से प्रबंधित करते हैं ताकि खर्च किए गए प्रत्येक डॉलर के लिए अधिकतम रूपांतरण सुनिश्चित हो सके। हमारा डेटा-संचालित दृष्टिकोण यह सुनिश्चित करता है कि आपके विज्ञापन सही समय पर सही दर्शकों तक पहुँचें।"
    }
  },
  'social-media-marketing': {
    icon: Share2,
    title: { en: "Social Media Marketing", hi: "सोशल मीडिया मार्केटिंग" },
    desc: { 
      en: "Build a loyal community and boost brand awareness on all major social platforms.", 
      hi: "एक वफादार समुदाय बनाएं और सभी प्रमुख सोशल प्लेटफॉर्म पर ब्रांड जागरूकता बढ़ाएं।" 
    },
    features: [
      { en: "Content Calendar", hi: "कंटेंट कैलेंडर" },
      { en: "Influencer Marketing", hi: "इन्फ्लुएंसर मार्केटिंग" },
      { en: "Community Engagement", hi: "सामुदायिक जुड़ाव" },
      { en: "Platform Management", hi: "प्लेटफ़ॉर्म प्रबंधन" },
      { en: "Analytics Reporting", hi: "एनालिटिक्स रिपोर्टिंग" }
    ],
    detailedDesc: {
      en: "Our social media strategies are tailored to your brand's voice and goals. We create engaging content that sparks conversations and drives customer loyalty.",
      hi: "हमारी सोशल मीडिया रणनीतियाँ आपके ब्रांड की आवाज़ और लक्ष्यों के अनुरूप बनाई गई हैं। हम आकर्षक सामग्री बनाते हैं जो बातचीत शुरू करती है और ग्राहकों की वफादारी बढ़ाती है।"
    }
  },
  'content-writing-services': {
    icon: PenTool,
    title: { en: "Content Writing Services", hi: "कंटेंट लेखन सेवाएं" },
    desc: { 
      en: "Persuasive and SEO-friendly content that speaks directly to your audience.", 
      hi: "प्रेरक और एसईओ-अनुकूल सामग्री जो सीधे आपके दर्शकों से बात करती है।" 
    },
    features: [
      { en: "Blog Post Writing", hi: "ब्लॉग पोस्ट लेखन" },
      { en: "Technical Writing", hi: "तकनीकी लेखन" },
      { en: "Copywriting", hi: "कॉपीराइटिंग" },
      { en: "SEO Content", hi: "एसईओ कंटेंट" },
      { en: "Email Newsletters", hi: "ईमेल न्यूज़लेटर्स" }
    ],
    detailedDesc: {
      en: "We believe content is king. Our expert writers craft high-quality, research-based content that establishes your brand as an authority in your industry.",
      hi: "हमारा मानना है कि कंटेंट राजा है। हमारे विशेषज्ञ लेखक उच्च-गुणवत्ता वाले, शोध-आधारित कंटेंट तैयार करते हैं जो आपके ब्रांड को आपके उद्योग में एक अधिकार के रूप में स्थापित करता है।"
    }
  },
  'e-commerce-development': {
    icon: ShoppingBag,
    title: { en: "E-Commerce Development", hi: "ई-कॉमर्स विकास" },
    desc: { 
      en: "Powerful online stores designed to handle high traffic and seamless transactions.", 
      hi: "उच्च ट्रैफ़िक और निर्बाध लेनदेन को संभालने के लिए डिज़ाइन किए गए शक्तिशाली ऑनलाइन स्टोर।" 
    },
    features: [
      { en: "Shopify & WooCommerce", hi: "शॉपिफाई और वूकॉमर्स" },
      { en: "Secure Payment Gateways", hi: "सुरक्षित भुगतान गेटवे" },
      { en: "Inventory Management", hi: "इन्वेंट्री प्रबंधन" },
      { en: "Custom Checkout Flow", hi: "कस्टम चेकआउट फ्लो" },
      { en: "Mobile Shopping", hi: "मोबाइल शॉपिंग" }
    ],
    detailedDesc: {
      en: "We build e-commerce platforms that are not just beautiful but also optimized for sales. We focus on speed, security, and a seamless user journey from product discovery to checkout.",
      hi: "हम ऐसे ई-कॉमर्स प्लेटफॉर्म बनाते हैं जो न केवल सुंदर हैं बल्कि बिक्री के लिए भी अनुकूलित हैं। हम गति, सुरक्षा और उत्पाद खोज से लेकर चेकआउट तक एक सहज उपयोगकर्ता यात्रा पर ध्यान केंद्रित करते हैं।"
    }
  },
  'page-speed-optimization': {
    icon: Gauge,
    title: { en: "Page Speed Optimization", hi: "पेज स्पीड अनुकूलन" },
    desc: { 
      en: "Ensure your website loads instantly to reduce bounce rates and improve SEO.", 
      hi: "यह सुनिश्चित करें कि आपकी वेबसाइट तत्काल लोड हो ताकि बाउंस दर कम हो और एसईओ में सुधार हो।" 
    },
    features: [
      { en: "Core Web Vitals Fix", hi: "कोर वेब वाइटल्स सुधार" },
      { en: "Image Optimization", hi: "इमेज अनुकूलन" },
      { en: "Code Minification", hi: "कोड मिनिफिकेशन" },
      { en: "Server Optimization", hi: "सर्वर अनुकूलन" },
      { en: "CDN Integration", hi: "सीडीएन एकीकरण" }
    ],
    detailedDesc: {
      en: "Speed is a critical factor for both user experience and search rankings. We optimize every aspect of your site to achieve 95+ PageSpeed scores.",
      hi: "उपयोगकर्ता अनुभव और सर्च रैंकिंग दोनों के लिए गति एक महत्वपूर्ण कारक है। हम 95+ पेजस्पीड स्कोर प्राप्त करने के लिए आपकी साइट के हर पहलू को अनुकूलित करते हैं।"
    }
  },
  'website-maintenance': {
    icon: ShieldCheck,
    title: { en: "Website Maintenance", hi: "वेबसाइट रखरखाव" },
    desc: { 
      en: "Keep your website secure, updated, and performing at its best 24/7.", 
      hi: "अपनी वेबसाइट को सुरक्षित, अपडेटेड और 24/7 अपने सर्वश्रेष्ठ प्रदर्शन पर रखें।" 
    },
    features: [
      { en: "Security Monitoring", hi: "सुरक्षा निगरानी" },
      { en: "Regular Backups", hi: "नियमित बैकअप" },
      { en: "Software Updates", hi: "सॉफ्टवेयर अपडेट" },
      { en: "Performance Checks", hi: "प्रदर्शन जाँच" },
      { en: "Emergency Support", hi: "आपातकालीन सहायता" }
    ],
    detailedDesc: {
      en: "Our maintenance packages give you peace of mind. We handle the technical details so you can focus on running your business without worrying about downtime or security threats.",
      hi: "हमारे रखरखाव पैकेज आपको मानसिक शांति देते हैं। हम तकनीकी विवरण संभालते हैं ताकि आप डाउनटाइम या सुरक्षा खतरों की चिंता किए बिना अपना व्यवसाय चलाने पर ध्यान केंद्रित कर सकें।"
    }
  },
  'seo-audit-services': {
    icon: Search,
    title: { en: "SEO Audit Services", hi: "एसईओ ऑडिट सेवाएं" },
    desc: { 
      en: "Identify hidden issues and discover growth opportunities with a deep-dive audit.", 
      hi: "छिपी हुई समस्याओं की पहचान करें और डीप-डाइव ऑडिट के साथ विकास के अवसरों की खोज करें।" 
    },
    features: [
      { en: "Comprehensive Reports", hi: "व्यापक रिपोर्ट" },
      { en: "On-Page Analysis", hi: "ऑन-पेज विश्लेषण" },
      { en: "Backlink Audit", hi: "बैकलिंक ऑडिट" },
      { en: "Competitor Benchmarking", hi: "प्रतियोगी बेंचमार्किंग" },
      { en: "Actionable Insights", hi: "कार्रवाई योग्य अंतर्दृष्टि" }
    ],
    detailedDesc: {
      en: "Our SEO audit is more than just a checklist. We provide a strategic roadmap to improve your rankings based on a thorough analysis of your site's health and competition.",
      hi: "हमारा एसईओ ऑडिट सिर्फ एक चेकलिस्ट से कहीं अधिक है। हम आपकी साइट के स्वास्थ्य और प्रतिस्पर्धा के गहन विश्लेषण के आधार पर आपकी रैंकिंग में सुधार के लिए एक रणनीतिक रोडमैप प्रदान करते हैं।"
    }
  },
  'local-seo-services': {
    icon: Globe,
    title: { en: "Local SEO Services", hi: "लोकल एसईओ सेवाएं" },
    desc: { 
      en: "Connect with local customers and dominate local search maps in your area.", 
      hi: "स्थानीय ग्राहकों से जुड़ें और अपने क्षेत्र में स्थानीय खोज मानचित्रों पर हावी हों।" 
    },
    features: [
      { en: "GMB Optimization", hi: "जीएमबी अनुकूलन" },
      { en: "Local Citations", hi: "स्थानीय उद्धरण" },
      { en: "Review Management", hi: "समीक्षा प्रबंधन" },
      { en: "Geo-Targeted Ads", hi: "जियो-टारगेटेड विज्ञापन" },
      { en: "Map Visibility", hi: "मैप विजिबिलिटी" }
    ],
    detailedDesc: {
      en: "If you have a local business, you need local SEO. We help you appear in the 'Local Pack' on Google to drive more foot traffic and local calls.",
      hi: "यदि आपका कोई स्थानीय व्यवसाय है, तो आपको स्थानीय एसईओ की आवश्यकता है। हम आपको अधिक फुट ट्रैफ़िक और स्थानीय कॉल लाने के लिए Google पर 'लोकल पैक' में दिखाई देने में मदद करते हैं।"
    }
  },
  'enterprise-seo-services': {
    icon: Zap,
    title: { en: "Enterprise SEO Services", hi: "एंटरप्राइज एसईओ सेवाएं" },
    desc: { 
      en: "Scalable SEO strategies for large organizations with complex digital footprints.", 
      hi: "जटिल डिजिटल फुटप्रिंट वाले बड़े संगठनों के लिए स्केलेबल एसईओ रणनीतियाँ।" 
    },
    features: [
      { en: "Massive Keyword Tracking", hi: "बड़े पैमाने पर कीवर्ड ट्रैकिंग" },
      { en: "Inter-Departmental SEO", hi: "अंतर-विभागीय एसईओ" },
      { en: "Complex Migrations", hi: "जटिल माइग्रेशन" },
      { en: "International SEO", hi: "अंतर्राष्ट्रीय एसईओ" },
      { en: "ROI Modeling", hi: "आरओआई मॉडलिंग" }
    ],
    detailedDesc: {
      en: "Enterprise SEO requires a different approach. We focus on scalability, stakeholder management, and technical infrastructure to drive results for large-scale websites.",
      hi: "एंटरप्राइज एसईओ के लिए एक अलग दृष्टिकोण की आवश्यकता होती है। हम बड़े पैमाने की वेबसाइटों के लिए परिणाम लाने के लिए स्केलेबिलिटी, स्टेकहोल्डर प्रबंधन और तकनीकी बुनियादी ढांचे पर ध्यान केंद्रित करते हैं।"
    }
  },
  'ecommerce-seo-services': {
    icon: Search,
    title: { en: "E-Commerce SEO Services", hi: "ई-कॉमर्स एसईओ सेवाएं" },
    desc: { 
      en: "Optimize thousands of product pages to drive organic sales and conversions.", 
      hi: "ऑर्गेनिक बिक्री और रूपांतरण बढ़ाने के लिए हजारों उत्पाद पेजों को अनुकूलित करें।" 
    },
    features: [
      { en: "Product Schema", hi: "उत्पाद स्कीमा" },
      { en: "Category Optimization", hi: "श्रेणी अनुकूलन" },
      { en: "Faceted Search SEO", hi: "फेसेटेड सर्च एसईओ" },
      { en: "Internal Linking", hi: "आंतरिक लिंकिंग" },
      { en: "Conversion-Centric SEO", hi: "रूपांतरण-केंद्रित एसईओ" }
    ],
    detailedDesc: {
      en: "We understand the unique challenges of e-commerce SEO. We optimize your product and category pages to ensure they appear for buyers at every stage of the funnel.",
      hi: "हम ई-कॉमर्स एसईओ की अनूठी चुनौतियों को समझते हैं। हम आपके उत्पाद और श्रेणी पेजों को अनुकूलित करते हैं ताकि यह सुनिश्चित हो सके कि वे फ़नल के हर चरण में खरीदारों के लिए दिखाई दें।"
    }
  },
  'social-media-optimization': {
    icon: Share2,
    title: { en: "Social Media Optimization", hi: "सोशल मीडिया अनुकूलन" },
    desc: { 
      en: "Fine-tune your social profiles to improve engagement and organic reach.", 
      hi: "जुड़ाव और ऑर्गेनिक पहुंच में सुधार के लिए अपने सोशल प्रोफाइल को फाइन-ट्यून करें।" 
    },
    features: [
      { en: "Profile Branding", hi: "प्रोफाइल ब्रांडिंग" },
      { en: "Bio Optimization", hi: "बायो अनुकूलन" },
      { en: "Hashtag Strategy", hi: "हैशटैग रणनीति" },
      { en: "Cross-Platform Sync", hi: "क्रॉस-प्लेटफॉर्म सिंक" },
      { en: "Engagement Audit", hi: "जुड़ाव ऑडिट" }
    ],
    detailedDesc: {
      en: "SMO is about making your social media presence work harder for you. We optimize your profiles to ensure consistent branding and maximum visibility across all channels.",
      hi: "एसएमओ आपके सोशल मीडिया की उपस्थिति को आपके लिए और अधिक प्रभावी बनाने के बारे में है। हम सभी चैनलों पर सुसंगत ब्रांडिंग और अधिकतम दृश्यता सुनिश्चित करने के लिए आपके प्रोफाइल को अनुकूलित करते हैं।"
    }
  },
  'wordpress-development': {
    icon: Code2,
    title: { en: "WordPress Development", hi: "वर्डप्रेस विकास" },
    desc: { en: "Custom WordPress solutions built for speed, security and scale.", hi: "गति, सुरक्षा और पैमाने के लिए निर्मित कस्टम वर्डप्रेस समाधान।" },
    features: [
      { en: "Custom CMS Architecture", hi: "कस्टम सीएमएस आर्किटेक्चर" },
      { en: "Security Hardening", hi: "सुरक्षा सुदृढ़ीकरण" },
      { en: "Headless WordPress", hi: "हेडलेस वर्डप्रेस" },
      { en: "Advanced Custom Fields", hi: "उन्नत कस्टम फ़ील्ड" }
    ],
    detailedDesc: {
      en: "We don't just build websites; we build scalable digital assets using WordPress. Our development focus is on clean code, rapid load times, and intuitive administrative experiences.",
      hi: "हम केवल वेबसाइट नहीं बनाते; हम वर्डप्रेस का उपयोग करके स्केलेबल डिजिटल संपत्ति बनाते हैं। हमारा विकास स्वच्छ कोड, तीव्र लोड समय और सहज प्रशासनिक अनुभवों पर केंद्रित है।"
    }
  },
  'woocommerce-development': {
    icon: ShoppingBag,
    title: { en: "WooCommerce Development", hi: "वूकॉमर्स विकास" },
    desc: { en: "Transform your WordPress site into a high-converting online store.", hi: "अपनी वर्डप्रेस साइट को उच्च-रूपांतरण वाले ऑनलाइन स्टोर में बदलें।" },
    features: [
      { en: "Payment Gateway Integration", hi: "पेमेंट गेटवे एकीकरण" },
      { en: "Custom Product Builders", hi: "कस्टम उत्पाद बिल्डर्स" },
      { en: "Inventory Management", hi: "इन्वेंट्री प्रबंधन" },
      { en: "Conversion Optimization", hi: "रूपांतरण अनुकूलन" }
    ],
    detailedDesc: {
      en: "Our WooCommerce experts build robust e-commerce engines that handle high volumes and complex business rules while maintaining a seamless user experience.",
      hi: "हमारे वूकॉमर्स विशेषज्ञ मजबूत ई-कॉमर्स इंजन बनाते हैं जो निर्बाध उपयोगकर्ता अनुभव को बनाए रखते हुए उच्च वॉल्यूम और जटिल व्यावसायिक नियमों को संभालते हैं।"
    }
  },
  'wordpress-theme-development': {
    icon: Layout,
    title: { en: "WordPress Theme Development", hi: "वर्डप्रेस थीम विकास" },
    desc: { en: "Pixel-perfect, bespoke themes that reflect your brand's unique identity.", hi: "पिक्सेल-परफेक्ट, बेस्पोक थीम जो आपके ब्रांड की विशिष्ट पहचान को दर्शाती हैं।" },
    features: [
      { en: "Bespoke UI Design", hi: "बेस्पोक यूआई डिजाइन" },
      { en: "Responsive Execution", hi: "उत्तरदायी निष्पादन" },
      { en: "Gutenberg Optimization", hi: "गुटेनबर्ग अनुकूलन" },
      { en: "SEO-Ready Markup", hi: "एसईओ-रेडी मार्कअप" }
    ],
    detailedDesc: {
      en: "Escape the limitations of pre-made templates. We build custom themes from scratch that are lightweight, fast, and specifically engineered for your brand.",
      hi: "पहले से बने टेम्पलेट्स की सीमाओं से बचें। हम शुरुआत से कस्टम थीम बनाते हैं जो हल्की, तेज़ और विशेष रूप से आपके ब्रांड के लिए इंजीनियर की गई हैं।"
    }
  },
  'wordpress-migration': {
    icon: ShieldCheck,
    title: { en: "WordPress Migration", hi: "वर्डप्रेस माइग्रेशन" },
    desc: { en: "Safe, seamless transition of your WordPress ecosystem to optimized hosting.", hi: "अनुकूलित होस्टिंग के लिए आपके वर्डप्रेस पारिस्थितिकी तंत्र का सुरक्षित, निर्बाध संक्रमण।" },
    features: [
      { en: "Zero Downtime Guarantee", hi: "शून्य डाउनटाइम गारंटी" },
      { en: "Database Optimization", hi: "डेटाबेस अनुकूलन" },
      { en: "SSL & Security Setup", hi: "एसएसएल और सुरक्षा सेटअप" },
      { en: "Link Integrity Check", hi: "लिंक अखंडता जाँच" }
    ],
    detailedDesc: {
      en: "Moving a website can be risky. Our specialists handle the entire migration process, ensuring all data, SEO rankings, and functionalities remain intact during the move.",
      hi: "वेबसाइट को स्थानांतरित करना जोखिम भरा हो सकता है। हमारे विशेषज्ञ संपूर्ण माइग्रेशन प्रक्रिया को संभालते हैं, यह सुनिश्चित करते हुए कि सभी डेटा, एसईओ रैंकिंग और कार्यक्षमताएं कदम के दौरान बरकरार रहें।"
    }
  },
  'wordpress-plugin-development': {
    icon: Code2,
    title: { en: "WordPress Plugin Development", hi: "वर्डप्रेस प्लगइन विकास" },
    desc: { en: "Extend your site's capabilities with custom-engineered WordPress plugins.", hi: "कस्टम-इंजीनियर वर्डप्रेस प्लगइन्स के साथ अपनी साइट की क्षमताओं का विस्तार करें।" },
    features: [
      { en: "Custom API Integration", hi: "कस्टम एपीआई एकीकरण" },
      { en: "Secure Backend Logic", hi: "सुरक्षित बैकएंड लॉजिक" },
      { en: "Third-Party Connectors", hi: "तृतीय-पक्ष कनेक्टर" },
      { en: "Performance Audits", hi: "प्रदर्शन ऑडिट" }
    ],
    detailedDesc: {
      en: "When off-the-shelf plugins aren't enough, we build custom solutions that solve your specific business challenges with efficiency and security.",
      hi: "जब ऑफ-द-शेल्फ प्लगइन्स पर्याप्त नहीं होते हैं, तो हम कस्टम समाधान बनाते हैं जो आपकी विशिष्ट व्यावसायिक चुनौतियों को दक्षता और सुरक्षा के साथ हल करते हैं।"
    }
  },
  'wordpress-theme-integration': {
    icon: Layout,
    title: { en: "WordPress Theme Integration", hi: "वर्डप्रेस थीम एकीकरण" },
    desc: { en: "Expertly integrate and optimize premium themes for your business goals.", hi: "अपने व्यावसायिक लक्ष्यों के लिए प्रीमियम थीम को विशेषज्ञ रूप से एकीकृत और अनुकूलित करें।" },
    features: [
      { en: "Premium Setup", hi: "प्रीमियम सेटअप" },
      { en: "Speed Optimization", hi: "गति अनुकूलन" },
      { en: "Visual Customization", hi: "दृश्य अनुकूलन" },
      { en: "Demo Content Import", hi: "डेमो सामग्री आयात" }
    ],
    detailedDesc: {
      en: "Bought a theme and don't know where to start? We handle the complex setup, customization, and optimization of premium themes to make them truly yours.",
      hi: "थीम खरीदी है और नहीं जानते कि कहां से शुरू करें? हम प्रीमियम थीम के जटिल सेटअप, अनुकूलन और अनुकूलन को संभालते हैं ताकि वे वास्तव में आपके हो सकें।"
    }
  },
  'performance-infrastructure': {
    icon: Gauge,
    title: { en: "Performance Infrastructure", hi: "प्रदर्शन बुनियादी ढांचा" },
    desc: { en: "High-availability cloud architecture for mission-critical digital platforms.", hi: "मिशन-महत्वपूर्ण डिजिटल प्लेटफार्मों के लिए उच्च-उपलब्धता क्लाउड आर्किटेक्चर।" },
    features: [
      { en: "Cloud Migration", hi: "क्लाउड माइग्रेशन" },
      { en: "Load Balancing", hi: "लोड बैलेंसिंग" },
      { en: "Edge Computing", hi: "एज कंप्यूटिंग" },
      { en: "DDoS Protection", hi: "DDoS सुरक्षा" }
    ],
    detailedDesc: {
      en: "We architect resilient, scalable infrastructures using AWS, Google Cloud, and Vercel. Our focus is on 99.9% uptime and lightning-fast global delivery.",
      hi: "हम AWS, Google Cloud और Vercel का उपयोग करके लचीले, स्केलेबल बुनियादी ढांचे का निर्माण करते हैं। हमारा ध्यान 99.9% अपटाइम और बिजली की तेजी से वैश्विक वितरण पर है।"
    }
  }
};

const ServiceDetail = ({ lang, setLang }) => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center text-foreground">Service not found.</div>;
  }

  const Icon = service.icon;

  return (
    <div className="relative w-full min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-poppins">
      <Navbar lang={lang} setLang={setLang} />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowRight className="w-3 h-3 rotate-180" /> {lang === 'en' ? "Back to Home" : "होम पर वापस"}
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
              {service.title[lang]}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 leading-relaxed">
              {service.desc[lang]}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <CheckCircle2 className="w-3 h-3 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium tracking-wide">{feature[lang]}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:scale-105 transition-all shadow-[0_0_20px_rgba(46,16,101,0.3)]">
              {lang === 'en' ? "Get a Quote" : "कोट प्राप्त करें"} <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex-1">
             <div className="bg-foreground/[0.02] border border-border/5 p-10 md:p-16 rounded-[3rem] backdrop-blur-sm relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                <h3 className="text-2xl font-bold font-montserrat mb-8">{lang === 'en' ? "Service Overview" : "सेवा अवलोकन"}</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed font-poppins font-light text-lg">
                  <p>{service.detailedDesc[lang]}</p>
                  <p>
                    {lang === 'en' 
                      ? "Our team of experts works closely with you to understand your specific needs and deliver solutions that exceed expectations. We focus on measurable results and sustainable long-term growth."
                      : "विशेषज्ञों की हमारी टीम आपकी विशिष्ट आवश्यकताओं को समझने और अपेक्षाओं से अधिक समाधान देने के लिए आपके साथ मिलकर काम करती है। हम मापने योग्य परिणामों और स्थायी दीर्घकालिक विकास पर ध्यान केंद्रित करते हैं।"}
                  </p>
                </div>
             </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default ServiceDetail;
