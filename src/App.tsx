import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductTypes } from './pages/ProductTypes';
import { MaterialPage } from './pages/MaterialPage';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Accessories } from './pages/Accessories';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-light selection:bg-primary selection:text-white">
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:product" element={<ProductTypes />} />
            <Route path="/products/:product/:type" element={<MaterialPage />} />
            <Route path="/products/accessories" element={<Accessories />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
