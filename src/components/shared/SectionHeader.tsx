import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="inline-block mb-4"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#3248DA]/20 blur-3xl rounded-full transform scale-150" />
          <span className="relative inline-block px-6 py-2 text-sm font-medium text-[#3248DA] bg-[#3248DA]/10 rounded-full">
            {badge}
          </span>
        </div>
      </motion.div>
      
      <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
        <span className="bg-gradient-to-r from-[#3248DA] via-[#4755F1] to-[#5C72F5] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      
      <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;