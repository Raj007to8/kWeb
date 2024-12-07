import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Blog', href: '#blog' },
    { label: 'Download', href: '#download' },
  ];

  const backgroundCircles = [
    // Large background circles
    { size: 'w-[800px] h-[800px]', position: '-left-96 -top-[400px]', delay: 0, opacity: 0.02, duration: 20 },
    { size: 'w-[700px] h-[700px]', position: 'right-[-200px] -top-[300px]', delay: 0.1, opacity: 0.015, duration: 25 },
    { size: 'w-[600px] h-[600px]', position: '-left-64 top-[-200px]', delay: 0.2, opacity: 0.02, duration: 22 },
    // Medium background circles
    { size: 'w-[500px] h-[500px]', position: 'right-32 -top-64', delay: 0.15, opacity: 0.02, duration: 18 },
    { size: 'w-[450px] h-[450px]', position: '-left-32 -top-32', delay: 0.25, opacity: 0.015, duration: 23 },
    { size: 'w-[400px] h-[400px]', position: 'right-96 top-0', delay: 0.3, opacity: 0.02, duration: 19 },
    // Smaller accent circles
    { size: 'w-[300px] h-[300px]', position: 'left-1/4 -top-16', delay: 0.35, opacity: 0.02, duration: 15 },
    { size: 'w-[250px] h-[250px]', position: 'right-1/3 top-8', delay: 0.4, opacity: 0.015, duration: 17 },
    { size: 'w-[200px] h-[200px]', position: 'left-2/3 -top-32', delay: 0.45, opacity: 0.02, duration: 16 },
    // Tiny detail circles
    { size: 'w-[150px] h-[150px]', position: 'right-1/4 top-16', delay: 0.5, opacity: 0.02, duration: 14 },
    { size: 'w-[120px] h-[120px]', position: 'left-1/2 top-0', delay: 0.55, opacity: 0.015, duration: 13 },
    { size: 'w-[100px] h-[100px]', position: 'right-1/2 -top-8', delay: 0.6, opacity: 0.02, duration: 12 },
    // Extra ambient circles
    { size: 'w-[900px] h-[900px]', position: '-left-[300px] -top-[600px]', delay: 0.05, opacity: 0.01, duration: 28 },
    { size: 'w-[850px] h-[850px]', position: 'right-[-400px] -top-[500px]', delay: 0.08, opacity: 0.01, duration: 26 },
    { size: 'w-[750px] h-[750px]', position: 'left-1/3 -top-[400px]', delay: 0.12, opacity: 0.01, duration: 24 }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 shadow-lg dark:shadow-gray-900/20'
          : 'backdrop-blur-none bg-transparent'
      }`}
    >
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundCircles.map((circle, index) => (
          <motion.div
            key={index}
            className={`absolute ${circle.size} ${circle.position} rounded-full bg-primary/20 dark:bg-primary/10 blur-[100px]`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: circle.opacity,
              scale: [0.8, 1.1, 0.9, 1],
              rotate: [0, 360],
              transition: {
                delay: circle.delay,
                duration: circle.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-display font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              KITEY
            </h1>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                href={item.href}
                className="relative text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="relative overflow-hidden rounded-full border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5"
              >
                <AnimatePresence mode="wait">
                  {!isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: -180 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Sun className="h-5 w-5 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Moon className="h-5 w-5 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      href={item.href}
                      className="text-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;