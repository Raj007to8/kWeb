import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/shared/PageHeader';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900 text-gray-900 dark:text-white pt-24">
      <PageHeader title="Terms & Conditions" />
      
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
            Terms and Conditions
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using KITEY's services, you agree to be bound by these Terms and Conditions.
              If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. User Accounts</h2>
            <p>
              Users must maintain the confidentiality of their account information and are fully responsible
              for all activities under their account.
            </p>

            <h2>3. Content and Conduct</h2>
            <p>
              Users agree to use KITEY's services for lawful purposes only and in a manner that does not
              infringe upon the rights of others.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content provided through KITEY's services is protected by copyright and other intellectual
              property laws. Users may not reproduce or distribute this content without authorization.
            </p>

            <h2>5. Service Modifications</h2>
            <p>
              KITEY reserves the right to modify or discontinue services at any time without prior notice.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              KITEY shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages arising from the use of our services.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable laws, without
              regard to conflicts of law principles.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsAndConditions;