import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`min-h-screen py-24 px-6 relative ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
        className="max-w-7xl mx-auto h-full flex flex-col justify-center"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
