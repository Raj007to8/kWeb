import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { FeatureItem } from '@/lib/feature-data';

interface FeatureCardProps {
  feature: FeatureItem;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: feature.delay }}
      className="relative group"
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/30 dark:from-gray-900/80 dark:to-gray-900/30 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${feature.gradient})`,
            opacity: 0.05,
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-4">
            <div className="relative inline-block">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 rounded-2xl blur-xl`} />
              <div className="relative bg-white/10 dark:bg-gray-800/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20 dark:border-gray-800/20">
                <Icon className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          <h3 className="text-xl font-display font-semibold mb-2">
            {feature.title}
          </h3>
          <p className="text-muted-foreground">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;