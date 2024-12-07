import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureGrid from './features/FeatureGrid';
import SectionHeader from './shared/SectionHeader';

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="features" className="relative py-32 overflow-hidden border-t border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3248DA15,_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,_#3248DA10,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            badge="Premium Features"
            title="Why Choose KITEY?"
            description="Experience a revolutionary approach to learning with our cutting-edge features"
          />
          
          <FeatureGrid />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;