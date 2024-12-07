import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Medical Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "KITEY transformed my medical studies. The personalized learning paths and spaced repetition helped me retain complex information effectively.",
    rating: 5,
    gradient: "from-[#FF6B6B] to-[#FFE66D]"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "The gamification elements make learning programming concepts fun and engaging. I've completed more courses than I ever thought possible.",
    rating: 5,
    gradient: "from-[#4ECDC4] to-[#556270]"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Language Learner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "Learning multiple languages simultaneously became manageable with KITEY's intelligent scheduling and progress tracking.",
    rating: 5,
    gradient: "from-[#6C63FF] to-[#3F3D56]"
  },
  {
    id: 4,
    name: "Michael Park",
    role: "Business Student",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "The real-world case studies and interactive simulations have given me practical insights I couldn't get elsewhere.",
    rating: 5,
    gradient: "from-[#FF75B5] to-[#FFB86C]"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    content: "The visual learning tools and creative exercises have helped me develop my skills in ways traditional methods never could.",
    rating: 5,
    gradient: "from-[#08AEEA] to-[#2AF598]"
  }
];

const TestimonialCard = ({ testimonial, index, isInitialLoad }: { 
  testimonial: typeof testimonials[0]; 
  index: number;
  isInitialLoad: boolean;
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    enter: {
      x: isInitialLoad ? 0 : -100,
      opacity: 0,
      scale: 0.8,
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: isInitialLoad ? index * 0.2 : 0,
      }
    },
    exit: {
      x: 100,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="relative group h-full"
      layout
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/30 dark:from-gray-900/80 dark:to-gray-900/30 backdrop-blur-xl border-2 border-gray-200 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-xl">
        <Quote className="w-10 h-10 text-primary/50 mb-6" />
        
        <p className="text-lg text-muted-foreground mb-8 flex-grow">
          {testimonial.content}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-md" />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover relative"
              />
            </div>
            <div>
              <h4 className="font-semibold text-base">
                {testimonial.name}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>
          
          <div className="flex space-x-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-primary fill-primary"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [currentTestimonials, setCurrentTestimonials] = useState(testimonials.slice(0, 3));
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => {
        setIsInitialLoad(false);
      }, 2000);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setCurrentTestimonials(prev => {
        const nextIndex = (testimonials.findIndex(t => t.id === prev[0].id) + 1) % testimonials.length;
        return [
          ...prev.slice(1),
          testimonials[nextIndex]
        ];
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [isInitialLoad]);

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden border-t border-gray-200 dark:border-gray-800">
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
                Success Stories
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              What Our Users Say
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied learners who have transformed their education with KITEY
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index}
                  isInitialLoad={isInitialLoad}
                />
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;