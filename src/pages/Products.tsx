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
            slug: "aluminium-verandas",
            desc: "If you choose an aluminium veranda from Deponti, you get class and quality. Aluminium is durable, colour-fast and low maintenance. We work with high quality aluminium for every situation.",
            img: new URL('../assets/images/Aluminium vrandas.jpeg', import.meta.url).href,
            features: [""
              //   "Durable Aluminium Framework",
              //   "Weather-Resistant Design",
              //   "Integrated Drainage System",
            ]
          },
          {
            title: "Louvered Roofs",
            slug: "louvered-roofs",
            desc: "With a louvered roof, you decide how much sun and light you like on your terrace. The roof can be opened and closed with a remote control, which means that you are also dry during bad weather. We sell two types of aluminum louvered roofs; One with tilting panels and one with panels that can be slide to the side.",
            img: new URL('../assets/louvered-roofs.jpeg', import.meta.url).href,
            features: [""
              //   "Adjustable Louvered Panels",
              //   "Weather-Responsive Design",
              //   "Integrated LED Lighting",
            ]
          },
          {
            title: "Glass Sliding Doors",
            slug: "glass-sliding-doors",
            desc: "The Deponti glass sliding doors offers protection against all weather conditions without making compromises in terms of light or view. This means that you can enjoy the outdoors to the fullest during all seasons.",
            img: new URL('../assets/images/Glassmain.jpg', import.meta.url).href,
            features: [""]
          },
          {
            title: "Folding Roofs",
            slug: "folding-roofs",
            desc: "With a Deponti folding roof, your terrace comes alive. Whatever the weather, you can open or close the roof with a simple press of the remote control. This means that you decide how much sun comes in and that you can still sit outside even in bad weather.",
            img: new URL('../assets/images/folding roof.png', import.meta.url).href,
            features: [""
              //   "Bi-Folding Roof Design",
              //   "All-Weather Protection",
              //   "Manual & Motorised Operation",
              //   "High-Quality Aluminium Frames",
              //   "Tailored to Your Space"
            ]
          }
        ].map((item, i) => (
          <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
            <Link to={`/products/${item.slug}`} className="overflow-hidden rounded-3xl shadow-xl block">
              <img src={item.img} alt={item.title} className="rounded-3xl shadow-xl aspect-video object-cover" referrerPolicy="no-referrer" />
            </Link>
            <div>
              <Link to={`/products/${item.slug}`}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-6 hover:text-primary transition-colors cursor-pointer">{item.title}</h2>
              </Link>
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
