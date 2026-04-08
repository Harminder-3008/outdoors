import { motion } from 'motion/react';
import aluminiumVerandasImg from '../assets/images/Aluminium vrandas.jpeg';
import foldingRoofImg from '../assets/images/folding roof.png';
import gallery_1 from '../assets/images/gallery_1.jpg';
import gallery_4 from '../assets/images/gallery_4.jpg';
import glassImageImg from '../assets/images/glass image.jpg';
import glassSlidingDoorImg from '../assets/images/Glass sliding door.jpg';
import slider2Img from '../assets/images/Slider 2.webp';
import slider3Img from '../assets/images/Slider 3.jpg';
import slider1Img from '../assets/images/Slider1.jpg';

export const Gallery = () => (
  <div className="pt-32 pb-24 bg-accent/20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-6">Project Gallery</h1>
        <p className="text-muted text-lg">Inspiration for your next outdoor transformation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          aluminiumVerandasImg,
          foldingRoofImg,
          gallery_1,
          gallery_4,
          glassImageImg,
          glassSlidingDoorImg,
          slider2Img,
          slider3Img,
          slider1Img
        ].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md aspect-square bg-white"
          >
            <img src={img} alt={`Project ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
