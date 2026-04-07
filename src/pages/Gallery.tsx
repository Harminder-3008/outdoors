import { motion } from 'motion/react';
import gallery_1 from '../assets/images/gallery_1.jpg';
import gallery_4 from '../assets/images/gallery_4.jpg';

export const Gallery = () => (
  <div className="pt-32 pb-24 bg-accent/20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-6">Project Gallery</h1>
        <p className="text-muted text-lg">Inspiration for your next outdoor transformation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
          "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e",
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811",
         gallery_1,
         gallery_4,
          "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
          "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
        ].map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-md aspect-square bg-white"
          >
            <img src={`${img}?auto=format&fit=crop&q=80&w=800`} alt={`Project ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
