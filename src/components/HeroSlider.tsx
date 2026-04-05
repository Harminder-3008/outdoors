import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const HeroSlider = () => {
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
      title: "Elevate Your Outdoor Lifestyle",
      subtitle: "PREMIUM GLASS VERANDAS"
    },
    {
      img: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80&w=1920",
      title: "Architectural Shade Solutions",
      subtitle: "LUXURY PERGOLAS"
    },
    {
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1920",
      title: "Year-Round Garden Sanctuaries",
      subtitle: "GLASS ROOMS"
    }
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[90svh] flex items-center justify-center overflow-hidden bg-accent">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[current].img} 
            alt={slides[current].title} 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/30" />
        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div
          key={current + "-content"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-primary font-bold tracking-[0.4em] text-xs uppercase mb-6 block drop-shadow-sm">{slides[current].subtitle}</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-10 leading-tight tracking-tighter text-dark drop-shadow-sm">
            {slides[current].title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/products" className="bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary-light transition-all shadow-xl shadow-primary/20">
              EXPLORE OUR RANGE
            </Link>
            <Link to="/contact" className="bg-white text-dark px-10 py-5 rounded-full font-bold hover:bg-accent transition-all shadow-xl">
              BOOK A CONSULTATION
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Simple Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === i ? 'bg-primary w-8' : 'bg-dark/20'}`}
          />
        ))}
      </div>
    </section>
  );
};
