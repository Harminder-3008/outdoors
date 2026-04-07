import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import kitchenImg from '../assets/images/kitchen.jpg';

export const Products = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-6">Our Products</h1>
        <p className="text-muted text-lg max-w-2xl">High-performance outdoor solutions tailored to your home.</p>
      </div>

      <div className="space-y-32">
        {[
          {
            title: "Glass Verandas",
            desc: "Enjoy your garden all year round with our bespoke glass verandas. Crafted from high-grade aluminum and toughened safety glass.",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
            features: ["Toughened Safety Glass", "Integrated Drainage", "Custom Colors"]
          },
          {
            title: "Luxury Pergolas",
            desc: "Modern motorized pergolas with adjustable louvers. Control shade and ventilation at the touch of a button.",
            img: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80&w=1200",
            features: ["Motorized Louvers", "LED Lighting", "Wind Sensors"]
          },
          {
            title: "Glass Rooms",
            desc: "Create a stunning new living space with our fully enclosed glass rooms. The perfect blend of indoor comfort and outdoor views.",
            img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
            features: ["Sliding Glass Doors", "Thermal Insulation", "Secure Locking"]
          },
          {
            title: "Outdoor Kitchens",
            desc: "The ultimate entertaining space. Our bespoke outdoor kitchens are designed for durability and high-performance cooking.",
            img: kitchenImg,
            features: ["Weatherproof Cabinetry", "Premium Grills", "Integrated Sinks"]
          }
        ].map((item, i) => (
          <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <img src={item.img} alt={item.title} className="rounded-3xl shadow-xl aspect-video object-cover" referrerPolicy="no-referrer" />
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6">{item.title}</h2>
              <p className="text-muted text-lg mb-8">{item.desc}</p>
              <ul className="space-y-3 mb-10">
                {item.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-dark font-medium">
                    <CheckCircle2 size={18} className="text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-light transition-all">
                ENQUIRE NOW
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
