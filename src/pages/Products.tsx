import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export const Products = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-20">
        <h3 className="text-2xl md:text-5xl font-display font-bold text-dark mb-6">Our Products</h3>
        <p className="text-muted text-lg max-w-2xl">High-performance outdoor solutions tailored to your home.</p>
      </div>

      <div className="space-y-32">
        {[
         {
  title: "Aluminium Verandas",
  desc: "Enhance your outdoor space with our bespoke aluminium verandas, designed for durability and year-round use in the British climate. Combining strength with a sleek, modern finish, they create a seamless transition between your home and garden.",
  img: new URL('../assets/images/Aluminium vrandas.jpeg', import.meta.url).href,
  features: [
    "Durable Aluminium Framework",
    "Weather-Resistant Design",
    "Integrated Drainage System",
  ]
},
{
  title: "Louvered Roofs",
  desc: "Enjoy complete control over your outdoor environment with our modern louvered roof systems. Designed for the British climate, adjustable slats allow you to manage sunlight, shade, and ventilation with ease.",
 img: new URL('../assets/louvered-roofs.jpeg', import.meta.url).href,
  features: [
    "Adjustable Louvered Panels",
    "Weather-Responsive Design",
    "Integrated LED Lighting",
  ]
},
          {
            title: "Glass Sliding Doors",
            desc: "Create a stunning new living space with our fully enclosed glass rooms. The perfect blend of indoor comfort and outdoor views.",
            img: new URL('../assets/images/glass image.jpg', import.meta.url).href,
            features: ["Sliding Glass Doors", "Thermal Insulation", "Secure Locking"]
          },
          {
  title: "Folding Roofs",
  desc: "Enhance your outdoor living space with our bespoke folding roof systems, designed to suit the British climate. Easily adapt between open skies and full shelter, allowing you to enjoy your veranda comfortably throughout the year.",
  img: new URL('../assets/images/folding roof.png', import.meta.url).href,
  features: [
    "Bi-Folding Roof Design",
    "All-Weather Protection",
    "Manual & Motorised Operation",
    "High-Quality Aluminium Frames",
    "Tailored to Your Space"
  ]
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
