import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Ambient background shapes */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ambient-${i}`}
            className="absolute rounded-full bg-primary/5 blur-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.3, 0.2],
              x: [0, 50, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 5,
              ease: "linear",
            }}
            style={{
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              left: `${25 + i * 20}%`,
              top: `${15 + i * 25}%`,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.4, 0],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * -50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 200}%`,
            }}
          />
        ))}
      </div>

      {/* Section dividers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`divider-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 8,
              delay: i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: `${33 + i * 33}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Background;