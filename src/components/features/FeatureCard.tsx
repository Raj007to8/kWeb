import { motion } from 'framer-motion';
import type { FeatureItem } from '@/lib/feature-data';

interface FeatureCardProps {
  feature: FeatureItem;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <div className="group h-full">
      <motion.div
        whileHover={{ y: -5 }}
        className="relative h-full p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-feature dark:shadow-feature-dark border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-feature-hover dark:hover:shadow-feature-hover-dark"
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3248DA] to-[#5C72F5] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        
        <div className="relative space-y-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3248DA] to-[#5C72F5] opacity-20 blur-xl rounded-full transform scale-150" />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="relative inline-flex p-3 rounded-xl bg-gradient-to-br from-[#3248DA]/10 to-[#5C72F5]/10 shadow-icon dark:shadow-icon-dark transition-transform duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3248DA]/20 to-[#5C72F5]/20 blur-sm rounded-lg" />
                <Icon className="relative w-6 h-6 text-[#3248DA] drop-shadow-icon" />
              </div>
            </motion.div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {feature.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300">
            {feature.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;