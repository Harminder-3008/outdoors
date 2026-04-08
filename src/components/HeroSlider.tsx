import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import slider1Img from '../assets/images/Slider1.jpg';
import slider2Img from '../assets/images/Slider 2.webp';
import slider3Img from '../assets/images/Slider 3.jpg';

export const HeroSlider = () => {
  const slides = [
    {
      img: slider1Img,
      title: "",
      subtitle: ""
    },
    {
      img: slider2Img,
      title: "",
      subtitle: ""
    },
    {
      img: slider3Img,
      title: "",
      subtitle: ""
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
