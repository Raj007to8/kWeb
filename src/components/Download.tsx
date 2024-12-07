import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Apple, Play, Laptop, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Download = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const platforms = [
    {
      icon: Apple,
      name: 'iOS App Store',
      description: 'Download for iPhone and iPad',
      gradient: 'from-[#FF6B6B] to-[#FFE66D]',
      features: ['Offline Learning', 'Push Notifications', 'Touch ID Support'],
      delay: 0.2,
    },
    {
      icon: Play,
      name: 'Google Play',
      description: 'Download for Android devices',
      gradient: 'from-[#4ECDC4] to-[#556270]',
      features: ['Material Design', 'Widget Support', 'Fast Performance'],
      delay: 0.4,
    },
    {
      icon: Laptop,
      name: 'Web Version',
      description: 'Access via any browser',
      gradient: 'from-[#6C63FF] to-[#3F3D56]',
      features: ['Cross-Platform', 'Auto-Sync', 'Progressive Web App'],
      delay: 0.6,
    },
  ];

  return (
    <section id="download" className="relative py-32 overflow-hidden border-t border-gray-200 dark:border-gray-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3248DA15,_transparent_50%)] dark:bg-[radial-gradient(ellipse_at_center,_#3248DA10,_transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-150" />
              <span className="relative inline-block px-6 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full">
                Get Started Today
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Download KITEY
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start your learning journey on any device, anywhere
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: platform.delay }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/30 dark:from-gray-900/80 dark:to-gray-900/30 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${platform.gradient})`,
                      opacity: 0.05,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="mb-8">
                      <div className="relative inline-block">
                        <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-20 rounded-2xl blur-xl`} />
                        <div className="relative bg-white/10 dark:bg-gray-800/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20 dark:border-gray-800/20">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-semibold mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {platform.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {platform.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Download Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16 text-sm text-muted-foreground"
        >
          <p>By downloading, you agree to our Terms of Service and Privacy Policy</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;