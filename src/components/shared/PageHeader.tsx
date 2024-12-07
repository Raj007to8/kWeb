import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-display font-semibold bg-gradient-to-r from-[#3248DA] to-[#5C72F5] bg-clip-text text-transparent"
              >
                KITEY
              </motion.h1>
            </Link>
          </div>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-medium text-gray-600 dark:text-gray-300"
          >
            {title}
          </motion.h2>
          <div className="w-20" /> {/* Spacer for balance */}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;