import { useState, useEffect } from 'react';
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { OasisLogo } from './OasisLogo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsSubmenuOpen, setProductsSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const products = [
    { name: 'Aluminium Verandas', path: '/products/aluminium-verandas' },
    { name: 'Louvered Roofs', path: '/products/louvered-roofs' },
    { name: 'Glass Sliding Doors', path: '/products/glass-sliding-doors' },
    { name: 'Folding Roofs', path: '/products/folding-roofs' },
    { name: 'Accessories', path: '/products/accessories' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md py-6 border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14">
            <OasisLogo className="w-full h-full" />
          </div>
          <span className="text-2xl font-bold text-primary">OASIS</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => {

            // 🔥 PRODUCTS DROPDOWN
            if (link.name === "Products") {
              return (
                <div key={link.name} className="relative group">

                  <Link
                    to="/products"
                    className="text-xs uppercase font-bold text-black hover:text-primary"
                  >
                    Products
                  </Link>

                  {/* DROPDOWN */}
                  <div className="absolute left-0 top-full w-64 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                    {products.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-6 py-3 text-sm hover:bg-gray-100 hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}

                  </div>
                </div>
              );
            }

            // NORMAL LINKS
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase font-bold ${location.pathname === link.path ? 'text-primary' : 'text-black'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold">
            GET A QUOTE
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div className="fixed inset-0 z-[9999] md:hidden">

              <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)} />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                className="absolute right-0 top-0 h-full w-[80%] bg-white p-8 flex flex-col gap-6"
              >

                <button onClick={() => setIsOpen(false)}>
                  <X />
                </button>

                {navLinks.map((link) => {
                  if (link.name === 'Products') {
                    return (
                      <div key={link.name}>
                        <button
                          onClick={() => setProductsSubmenuOpen(!productsSubmenuOpen)}
                          className="font-bold text-lg w-full text-left"
                        >
                          Products +
                        </button>

                        {productsSubmenuOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {products.map((p) => (
                              <Link
                                key={p.name}
                                to={p.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg py-2 text-dark hover:text-primary"
                              >
                                {p.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)}>
                      {link.name}
                    </Link>
                  );
                })}

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};