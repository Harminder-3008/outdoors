import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // ✅ ADD THIS
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation(); // ✅ ADD THIS

  // ✅ SCROLL TO TOP ON PAGE CHANGE
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // optional (remove if instant chahida)
    });
  }, [pathname]);

  // existing scroll button logic
  useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};