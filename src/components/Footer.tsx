import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const solutionLinks = [
  { label: 'Aluminium Verandas', to: '/products/aluminium-verandas' },
  { label: 'Louvered Roofs', to: '/products/louvered-roofs' },
  { label: 'Glass Sliding Doors', to: '/products/glass-sliding-doors' },
  { label: 'Folding Roofs', to: '/products/folding-roofs' }
];

export const Footer = () => (
  <footer className="bg-white pt-24 pb-12 border-t border-black/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div>
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter mb-6 block">
            <span className="text-primary">OUT</span>DOORS
          </Link>
          <p className="text-muted text-sm leading-relaxed mb-8">
            Specializing in high-end architectural outdoor solutions for discerning homeowners.
          </p>
          {/* <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-muted hover:text-primary transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div> */}
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-dark">Quick Links</h4>
          <ul className="space-y-4 text-sm font-medium">
            {['Home', 'Products', 'Gallery', 'About Us', 'Contact'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-muted hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-dark">Our Solutions</h4>
          <ul className="space-y-4 text-sm font-medium">
            {solutionLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="text-muted hover:text-primary transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-dark">Contact Us</h4>
          <ul className="space-y-6 text-sm font-medium">
            <li className="flex gap-4">
              <MapPin size={18} className="text-primary shrink-0" />
              <span className="text-muted">123 Luxury Lane, Mayfair, London</span>
            </li>
            <li className="flex gap-4">
              <Phone size={18} className="text-primary shrink-0" />
              <span className="text-muted">+44 20 7123 4567</span>
            </li>
            <li className="flex gap-4">
              <Mail size={18} className="text-primary shrink-0" />
              <span className="text-muted">info@outdoors.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold text-muted">
        <p>&copy; {new Date().getFullYear()} OUTDOORS LIVING SPACES LTD.</p>
        <div className="flex gap-8">
          {/* <a href="#" className="hover:text-dark transition-colors">Privacy</a>
          <a href="#" className="hover:text-dark transition-colors">Terms</a> */}
        </div>
      </div>
    </div>
  </footer>
);
