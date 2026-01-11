import { motion } from 'framer-motion';

const Stats = ({ lang }) => {
  const t = {
    en: [
      { value: "5000+", label: "Happy Clients" },
      { value: "7500+", label: "Projects Completed" },
      { value: "10+", label: "Years Excellence" },
      { value: "24/7", label: "Client Support" }
    ],
    hi: [
      { value: "5000+", label: "खुश ग्राहक" },
      { value: "7500+", label: "पूर्ण परियोजनाएं" },
      { value: "10+", label: "वर्षों की उत्कृष्टता" },
      { value: "24/7", label: "ग्राहक सहायता" }
    ]
  }[lang];

  return (
    <div className="py-24 bg-background border-y border-border/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-foreground/[0.02] opacity-50" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {t.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="text-5xl md:text-7xl font-extrabold text-foreground mb-4 tracking-tighter font-montserrat">
              {stat.value}
            </div>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground font-montserrat group-hover:text-foreground transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
