import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const materialsData = {
  'aluminium-verandas': {
    'lean-to-aluminium-veranda': [
      { name: 'Aluminum Frame', desc: 'Durable aluminum structure attached to house wall.' },
      { name: 'Sloping Roof Panels', desc: 'Weather-resistant roofing with proper slope for drainage.' },
      { name: 'Mounting Hardware', desc: 'Secure wall attachment components.' }
    ],
    'freestanding-aluminium-veranda': [
      { name: 'Aluminum Frame', desc: 'Self-supporting aluminum structure.' },
      { name: 'Base Foundation', desc: 'Concrete or post foundations for stability.' },
      { name: 'Roofing Material', desc: 'Various roofing options available.' }
    ],
    'glass-roof-aluminium-veranda': [
      { name: 'Aluminum Frame', desc: 'Strong frame supporting glass roof.' },
      { name: 'Tempered Glass Panels', desc: 'Transparent or tinted safety glass.' },
      { name: 'Glass Sealants', desc: 'Weather-tight sealing for glass.' }
    ],
    'polycarbonate-roof-veranda': [
      { name: 'Aluminum Frame', desc: 'Lightweight frame for polycarbonate.' },
      { name: 'Polycarbonate Panels', desc: 'UV-resistant, durable roofing sheets.' },
      { name: 'Panel Fasteners', desc: 'Secure fastening system for panels.' }
    ],
    'louvered-adjustable-roof-veranda': [
      { name: 'Aluminum Louvers', desc: 'Adjustable slat system.' },
      { name: 'Adjustment Mechanism', desc: 'Manual or motorized controls.' },
      { name: 'Frame Structure', desc: 'Supporting aluminum framework.' }
    ],
    'insulated-roof-veranda': [
      { name: 'Aluminum Frame', desc: 'Insulated panel support structure.' },
      { name: 'Sandwich Panels', desc: 'Insulated roofing panels.' },
      { name: 'Thermal Insulation', desc: 'Heat-reflective materials.' }
    ],
    'enclosed-aluminium-veranda-sunroom-style': [
      { name: 'Aluminum Frame', desc: 'Fully enclosed frame structure.' },
      { name: 'Glass Panels', desc: 'Tempered glass walls and roof.' },
      { name: 'Sealing System', desc: 'Weather-tight enclosure seals.' }
    ]
  },
  'louvered-roofs': {
    'manual-louvered-roof': [
      { name: 'Aluminum Louvers', desc: 'Adjustable aluminum slats.' },
      { name: 'Manual Crank', desc: 'Hand-operated adjustment mechanism.' },
      { name: 'Mounting Hardware', desc: 'Sturdy mounting components.' }
    ],
    'motorized-automatic-louvered-roof': [
      { name: 'Aluminum Louvers', desc: 'Adjustable aluminum slats.' },
      { name: 'Electric Motor', desc: 'Smooth automated operation.' },
      { name: 'Remote Control', desc: 'One-click open/close convenience.' }
    ],
    'smart-louvered-roof-sensor-based': [
      { name: 'Aluminum Louvers', desc: 'Adjustable aluminum slats.' },
      { name: 'Weather Sensors', desc: 'Rain, wind, and sun detection.' },
      { name: 'Automation System', desc: 'Fully automated roof response.' }
    ],
    'insulated-louvered-roof': [
      { name: 'Insulated Louvers', desc: 'Panels with thermal insulation.' },
      { name: 'Noise Reduction', desc: 'Lower sound transmission.' },
      { name: 'Heat Control', desc: 'Improved performance in hot weathers.' }
    ],
    'aluminium-louvered-roof': [
      { name: 'Aluminum Louvers', desc: 'Rust-proof, durable, lightweight material.' },
      { name: 'Strong Frame', desc: 'Reliable support for the roof system.' },
      { name: 'Long Lifespan', desc: 'Low maintenance and lasting quality.' }
    ]
  },
  'glass-sliding-doors': {
    'single-panel-doors': [
      { name: 'Tempered Glass', desc: 'Safety glass panels.' },
      { name: 'Aluminum Frame', desc: 'Durable frame material.' },
      { name: 'Sliding Hardware', desc: 'Smooth sliding mechanism.' }
    ],
    'multi-panel-doors': [
      { name: 'Tempered Glass', desc: 'Multiple safety glass panels.' },
      { name: 'Aluminum Tracks', desc: 'Multi-panel sliding tracks.' },
      { name: 'Locking System', desc: 'Secure multi-point locking.' }
    ],
    'corner-doors': [
      { name: 'Tempered Glass', desc: 'Corner-configured glass.' },
      { name: 'Custom Aluminum', desc: 'Bespoke corner frames.' },
      { name: 'Hinge System', desc: 'Specialized corner hinges.' }
    ]
  },
  'folding-roofs': {
    'manual-folding-roofs': [
      { name: 'Aluminum Panels', desc: 'Folding aluminum sections.' },
      { name: 'Manual Mechanism', desc: 'Hand-operated folding system.' },
      { name: 'Weather Seals', desc: 'Protective sealing materials.' }
    ],
    'electric-folding-roofs': [
      { name: 'Aluminum Panels', desc: 'Folding aluminum sections.' },
      { name: 'Electric Motor', desc: 'Powered folding mechanism.' },
      { name: 'Control Panel', desc: 'User interface controls.' }
    ],
    'hydraulic-folding-roofs': [
      { name: 'Aluminum Panels', desc: 'Folding aluminum sections.' },
      { name: 'Hydraulic System', desc: 'Fluid-powered operation.' },
      { name: 'Pressure Controls', desc: 'Hydraulic control valves.' }
    ]
  }
};

export const MaterialPage = () => {
  const { product, type } = useParams<{ product: string; type: string }>();
  const data = product && type ? materialsData[product as keyof typeof materialsData]?.[type as keyof typeof materialsData[typeof product]] : null;

  if (!data) {
    return <div className="pt-32 pb-24 text-center">Materials not found</div>;
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Link to={`/products/${product}`} className="inline-flex items-center gap-2 text-primary hover:text-primary-light mb-8">
          <ArrowLeft size={20} /> Back to Types
        </Link>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-dark mb-12">Materials</h1>
        <div className="space-y-8">
          {data.map((material, i) => (
            <div key={i} className="bg-light p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-dark mb-4">{material.name}</h3>
              <p className="text-muted">{material.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-light transition-all">
            ENQUIRE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};