import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 text-gray-900 dark:text-white pt-24">
      <PageHeader title="Privacy Policy" />
      
      <div className="container mx-auto px-4 py-16">
        <Link 
          to="/"
          className="inline-flex items-center text-[#3248DA] hover:text-[#4755F1] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 bg-gradient-to-r from-[#3248DA] to-[#5C72F5] bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Information Collection</h2>
            <p>
              We collect information that you provide directly to us, including personal information such
              as name, email address, and learning preferences.
            </p>

            <h2>2. Use of Information</h2>
            <p>
              We use collected information to provide, maintain, and improve our services, communicate
              with users, and protect our legal rights.
            </p>

            <h2>3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access or disclosure.
            </p>

            <h2>4. Data Sharing</h2>
            <p>
              We do not sell your personal information. We may share data with service providers who
              assist in operating our platform.
            </p>

            <h2>5. Cookies and Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance user experience and collect usage
              information.
            </p>

            <h2>6. User Rights</h2>
            <p>
              Users have the right to access, correct, or delete their personal information. Contact us
              to exercise these rights.
            </p>

            <h2>7. Changes to Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Users will be notified of significant
              changes.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;