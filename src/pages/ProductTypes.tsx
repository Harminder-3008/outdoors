import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const productTypes = {
  'aluminium-verandas': {
    title: 'Aluminium Verandas',
    types: [
      { 
        name: 'Lean-to Aluminium Veranda', 
        slug: 'lean-to-aluminium-veranda', 
        desc: 'Attached to wall of house\nSloping roof (simple & most common)\nBest for patios, small outdoor spaces',
        img: new URL('../assets/images/learn to vrandas.jpg', import.meta.url).href
      },
      { 
        name: 'Freestanding Aluminium Veranda', 
        slug: 'freestanding-aluminium-veranda', 
        desc: 'Not attached to house\nCan be placed anywhere (garden, poolside)\nWorks like a gazebo structure',
        img: new URL('../assets/images/Freestanding alumiunium.jpeg', import.meta.url).href
      },
      { 
        name: 'Glass Roof Aluminium Veranda', 
        slug: 'glass-roof-aluminium-veranda', 
        desc: 'Transparent or tinted glass roof\nPremium look\nAllows natural sunlight',
        img: new URL('../assets/images/Glass Roof Aluminium Veranda.jpeg', import.meta.url).href
      },
      { 
        name: 'Polycarbonate Roof Veranda', 
        slug: 'polycarbonate-roof-veranda', 
        desc: 'Lightweight, durable roofing\nHeat and UV resistant\nMore affordable than glass',
        img: new URL('../assets/images/Polycarbonate Roof Veranda.jpg', import.meta.url).href
      },
      { 
        name: 'Louvered (Adjustable Roof) Veranda', 
        slug: 'louvered-adjustable-roof-veranda', 
        desc: 'Roof slats can open/close\nControl sunlight & airflow\nModern and high-end option',
        img: new URL('../assets/images/Louvered (Adjustable Roof) Veranda.webp', import.meta.url).href
      },
      { 
        name: 'Insulated Roof Veranda', 
        slug: 'insulated-roof-veranda', 
        desc: 'Sandwich panel roofing\nKeeps area cooler in summer\nGood for extreme weathers',
        img: new URL('../assets/images/Insulated Roof Veranda.jpeg', import.meta.url).href
      },
      { 
        name: 'Enclosed Aluminium Veranda (Sunroom Style)', 
        slug: 'enclosed-aluminium-veranda-sunroom-style', 
        desc: 'Fully enclosed with glass or panels\nCan be used year-round\nAdds extra living space',
        img: new URL('../assets/images/Enclosed Aluminium Veranda (Sunroom Style).webp', import.meta.url).href
      }
    ]
  },
  'louvered-roofs': {
    title: 'Louvered Roofs',
    types: [
      { name: 'Manual Louvered Roof', slug: 'manual-louvered-roof', desc: 'Operated by hand (crank/handle)\nBudget-friendly option\nNo electricity needed\nGood for basic use', img: new URL('../assets/images/manual-louvered-roof.jpeg', import.meta.url).href },
      { name: 'Motorized (Automatic) Louvered Roof', slug: 'motorized-automatic-louvered-roof', desc: 'Controlled with remote or switch\nOpen/close with one click\nPremium & most popular\nCan add smart home integration', img: new URL('../assets/images/Motorized (Automatic) Louvered Roof.jpeg', import.meta.url).href },
      { name: 'Smart Louvered Roof (Sensor-Based)', slug: 'smart-louvered-roof-sensor-based', desc: 'Comes with rain, wind, or sun sensors\nAutomatically closes when it rains\nFully automated luxury option\nBest for high-end customers', img: new URL('../assets/images/Smart Louvered Roof (Sensor-Based).jpg', import.meta.url).href },
      { name: 'Insulated Louvered Roof', slug: 'insulated-louvered-roof', desc: 'Louvers have insulated panels\nReduces heat & noise\nBetter for hot weathers (like India)', img: new URL('../assets/images/Insulated Louvered Roof.jpeg', import.meta.url).href },
      { name: 'Aluminium Louvered Roof', slug: 'aluminium-louvered-roof', desc: 'Most common material\nRust-proof, durable, lightweight', img: new URL('../assets/images/Aluminium Louvered Roof.jpeg', import.meta.url).href }
    ]
  },
  'glass-sliding-doors': {
    title: 'Glass Sliding Doors',
    types: [
      { name: 'Single Panel Doors', slug: 'single-panel-doors', desc: 'Single sliding glass panel.', img: new URL('../assets/images/singlepanneldoor.jpeg', import.meta.url).href },
      { name: 'Multi-Panel Doors', slug: 'multi-panel-doors', desc: 'Multiple sliding glass panels.', img: new URL('../assets/images/multipanneldoors.jpeg', import.meta.url).href },
      { name: 'Corner Doors', slug: 'corner-doors', desc: 'Doors designed for corner installations.', img: new URL('../assets/images/cornerdoors.jpg', import.meta.url).href }
    ]
  },
  'folding-roofs': {
    title: 'Folding Roofs',
    types: [
      { name: 'Manual Folding Roofs', slug: 'manual-folding-roofs', desc: 'Manually operated folding roofs.', img: new URL('../assets/images/manualfolding.jpg', import.meta.url).href },
      { name: 'Electric Folding Roofs', slug: 'electric-folding-roofs', desc: 'Electrically powered folding roofs.', img: new URL('../assets/images/electricfolding.jpg', import.meta.url).href },
      { name: 'Hydraulic Folding Roofs', slug: 'hydraulic-folding-roofs', desc: 'Hydraulically operated folding roofs.', img: new URL('../assets/images/hydraulicfolding.jpeg', import.meta.url).href }
    ]
  }
};

export const ProductTypes = () => {
  const { product } = useParams<{ product: string }>();
  const data = product ? productTypes[product as keyof typeof productTypes] : null;

  if (!data) {
    return <div className="pt-32 pb-24 text-center">Product not found</div>;
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/products" className="inline-flex items-center gap-2 text-primary hover:text-primary-light mb-8">
          <ArrowLeft size={20} /> Back to Products
        </Link>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-12">{data.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.types.map((type, i) => (
            <Link key={i} to={`/products/${product}/${type.slug}`} className="block">
              <div className="bg-light p-6 rounded-2xl hover:shadow-lg transition-shadow cursor-pointer">
                <img src={type.img} alt={type.name} className="w-full h-48 object-cover rounded-xl mb-4" referrerPolicy="no-referrer" />
                <h3 className="text-2xl font-bold text-dark mb-4">{type.name}</h3>
                <p className="text-muted whitespace-pre-line">{type.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};