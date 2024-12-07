import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTextLines } from '@/lib/text-utils';

const headlines = [
  "Empower Your Future",
  "Elevate Your Learning",
  "Transform Your Journey",
  "Unlock Your Potential",
  "Master Your Skills"
];

const HeadlineText = ({ text }: { text: string }) => {
  const lines = useTextLines(text, '6rem', '700');

  return (
    <div className="flex flex-col items-center gap-4">
      {lines.map((line, i) => (
        <div key={i} className="relative">
          <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient whitespace-nowrap">
            {line}
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3 + (i * 0.2),
              ease: "easeInOut"
            }}
            className="h-1 bg-gradient-to-r from-primary/50 via-blue-600/50 to-primary/50 mt-2"
            style={{ 
              transformOrigin: "center",
              width: "100%"
            }}
          />
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh+4rem)] pt-32 pb-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-16 relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full transform scale-150" />
                <span className="relative inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full">
                  <Sparkles className="w-4 h-4" />
                  <span>Welcome to the Future of Learning</span>
                </span>
              </div>
            </motion.div>

            <div className="relative mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-3xl"
              />
              <div className="relative overflow-hidden flex items-center justify-center min-h-[12rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentHeadline}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{
                      opacity: { duration: 0.5 },
                      y: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                    className="flex flex-col items-center"
                  >
                    <h1 
                      ref={headlineRef}
                      className="text-6xl md:text-8xl font-bold tracking-tight px-4 flex flex-col gap-4"
                    >
                      <HeadlineText text={headlines[currentHeadline]} />
                    </h1>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Transform your learning journey with
              <motion.span
                className="relative inline-block mx-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                <span className="relative z-10 text-primary font-semibold">KITEY</span>
                <span className="absolute -inset-1 bg-primary/10 rounded-lg -skew-x-6 block" />
              </motion.span>
              <br className="hidden md:block" />
              <span className="block mt-2">
                Curated resources. Personalized plans. Gamified experiences.
              </span>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl" />
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, duration: 0.4 }}
                    className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                  >
                    500K+
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-2">Active Users</div>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.4 }}
                    className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent"
                  >
                    98%
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-2">Success Rate</div>
                </div>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.4 }}
                    className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                  >
                    50+
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-2">Countries</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full filter blur-3xl"
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-4 h-4 border-2 border-primary/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-6 h-6 border-2 border-primary/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default Hero;