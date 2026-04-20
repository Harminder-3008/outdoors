import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import slider1Img from '../assets/images/Slider1.jpg';

export const HeroSlider = () => {
  return (
    <section className="relative h-[90svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={slider1Img} 
          alt="OASIS VERANDAS - Premium Outdoor Solutions" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Gradient Overlay - Left to Right */}
      <div className="absolute inset-0 z-5 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-1" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl z-1" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* Accent Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-accent to-accent/50 mb-8 rounded-full"
          />

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-accent font-bold tracking-[0.3em] text-sm uppercase block mb-6"
          >
            Authorized Deponti Dealer | Premium Outdoor Living
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-6xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight tracking-tighter text-white"
          >
            Transform Your Outdoor Space
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed"
          >
            Experience Deponti's iconic verandas, louvered roofs, and premium outdoor solutions, expertly delivered through OASIS VERANDAS. Designed to enhance your lifestyle with world-class quality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/products" 
              className="bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Explore Products
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-block text-center backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/70 text-sm font-semibold">Scroll to explore</span>
          <svg 
            className="w-6 h-6 text-white/70" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};
