import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const links = {
    company: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Download', href: '#download' },
      { label: 'Roadmap', href: '#' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Partners', href: '#' },
    ],
    legal: [
      { label: 'Privacy', href: '/privacy', isRoute: true },
      { label: 'Terms', href: '/terms', isRoute: true },
      { label: 'Security', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const renderLink = (item: { label: string; href: string; isRoute?: boolean }) => {
    if (item.isRoute) {
      return (
        <Link
          to={item.href}
          className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
        >
          {item.label}
          <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
        </Link>
      );
    }
    return (
      <a
        href={item.href}
        className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
      >
        {item.label}
        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
      </a>
    );
  };

  return (
    <footer className="relative pt-24 pb-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16"
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
                KITEY
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transform your learning journey with personalized paths and gamified experiences. Join thousands of learners worldwide.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-200 group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {['company', 'product', 'resources', 'legal'].map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h3 className="font-display font-semibold text-lg mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links[category as keyof typeof links].map((item, itemIndex) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.4 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                  >
                    {renderLink(item)}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8 pb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates and learning resources.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary outline-none transition-colors duration-200"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-sm text-muted-foreground pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <p>© {new Date().getFullYear()} KITEY. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;