import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { UserPlus, Compass, Target, Award } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Start your journey with a simple registration process. Set your goals and preferences.',
    gradient: 'from-[#FF6B6B] to-[#FFE66D]',
    delay: 0.2,
  },
  {
    icon: Compass,
    title: 'Explore Resources',
    description: 'Access our curated collection of learning materials tailored to your needs.',
    gradient: 'from-[#4ECDC4] to-[#556270]',
    delay: 0.4,
  },
  {
    icon: Target,
    title: 'Set Your Path',
    description: 'Follow your personalized learning path with AI-driven recommendations.',
    gradient: 'from-[#6C63FF] to-[#3F3D56]',
    delay: 0.6,
  },
  {
    icon: Award,
    title: 'Track Progress',
    description: 'Monitor your achievements and growth with detailed analytics and insights.',
    gradient: 'from-[#FF75B5] to-[#FFB86C]',
    delay: 0.8,
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: step.delay }}
      className="relative"
    >
      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: step.delay + 0.2 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/80 to-white/30 dark:from-gray-900/80 dark:to-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-800/20 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors duration-300 relative"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-10 rounded-2xl`} />
          <Icon className="w-8 h-8 text-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: step.delay + 0.4 }}
        >
          <h3 className="text-2xl font-display font-semibold mb-3 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      </div>

      {index < steps.length - 1 && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: step.delay + 0.6 }}
          className="hidden lg:block absolute top-8 left-24 w-[calc(100%-6rem)] h-[2px] origin-left"
          style={{
            background: `linear-gradient(to right, ${step.gradient.split(' ')[1].slice(4)}, transparent)`,
          }}
        />
      )}
    </motion.div>
  );
};

const HowItWorks = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
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
                Simple Steps
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              How KITEY Works
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your journey to success in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
          {/* Background Patterns */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 8,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
            />
          </div>

          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;