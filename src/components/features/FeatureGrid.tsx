import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './FeatureCard';
import { featureData } from '@/lib/feature-data';

const FeatureGrid = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref} 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
    >
      {featureData.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <FeatureCard feature={feature} />
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;