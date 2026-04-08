import { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-display font-bold tracking-tighter flex items-center gap-2 group ${scrolled ? 'text-dark' : 'text-white'}`}>
          <span className="text-primary group-hover:tracking-widest transition-all duration-500">OUT</span>DOORS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors relative group ${location.pathname === link.path ? 'text-primary' : scrolled ? 'text-dark/70' : 'text-white'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-primary-light transition-all shadow-lg shadow-primary/10">
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden p-2 glass-card rounded-lg ${scrolled ? 'text-dark' : 'text-white'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
    {createPortal(
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] md:hidden"
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4 }}
          className="absolute right-0 top-0 h-full w-[80%] bg-white shadow-2xl flex flex-col p-10 gap-8"
        >
          <button
            className="self-end"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-dark"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white px-6 py-3 rounded-full font-bold mt-4 text-center"
          >
            GET A QUOTE
          </Link>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>,
  document.body // 🔥 THIS IS THE MAGIC
)}
    </nav>
  );
};
