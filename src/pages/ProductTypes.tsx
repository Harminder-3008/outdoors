import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { title } from 'process';

const productTypes = {
  'aluminium-verandas': {
    // title: 'Aluminium Verandas',
    banner: new URL('../assets/AVimages/AV-hero.jpg', import.meta.url).href,
    title: 'Aluminium Verandas',
    description:
      'With an Deponti aluminium veranda, you will have a stylish extension of your house. In addition, aluminium is very solid, weather proof and requires little maintenance. We use high quality aluminium in three colours: traffic white texturized (RAL9016), cream white (RAL9001) and gray texturized (RAL7024). In addition, we have countless of extra options and accessories in our product range, depending on your taste and preferences. A Deponti veranda allows you to enjoy your extra outdoor space throughout the year, allowing to create the perfect housing and living comfort.',
    types: [
      {
        name: 'Pinela Tilt',
        slug: 'Pinela Tilt',
        desc: 'Powerfully designed for exceptional outdoor living',
        img: new URL('../assets/AVimages/Pinela-Tilt.png', import.meta.url).href
      },
      {
        name: 'Pinela Delight',
        slug: 'Pinela Delight',
        desc: 'Pure elegance in every moment',
        img: new URL('../assets/AVimages/Pinela-Delight.png', import.meta.url).href
      },
      {
        name: 'Fiano Louvre',
        slug: 'Fiano Louvre',
        desc: 'The power of adjustable light',
        img: new URL('../assets/AVimages/Fiano Louvre.png', import.meta.url).href
      },
      {
        name: 'Pinela Deluxe Plus',
        slug: 'Pinela Deluxe Plus',
        desc: 'Flexible and powerful in a stylish design',
        img: new URL('../assets/AVimages/Pinela Deluxe Plus.png', import.meta.url).href
      },
      {
        name: 'Pinela Deluxe; Aluminium Louvered roof',
        slug: 'Pinela Deluxe; Aluminium Louvered roof',
        desc: 'Enjoy the convertible effect in your own garden',
        img: new URL('../assets/AVimages/Pinela Deluxe; Aluminium Louvered roof.png', import.meta.url).href
      },
      {
        name: 'Pinela; Aluminium Louvered Roof',
        slug: 'Pinela; Aluminium Louvered Roof',
        desc: 'Creating the perfect light on your own terrace',
        img: new URL('../assets/AVimages/Pinela-Aluminium-Louvered-Roof.jpg', import.meta.url).href
      },
      {
        name: 'Verdeca; Folding roof with aluminum frame',
        slug: 'Verdeca; Folding roof with aluminum frame',
        desc: 'Ultimate flexibility with a sleek design',
        img: new URL('../assets/AVimages/Verdeca; Folding roof with aluminum frame.png', import.meta.url).href
      },
      {
        name: 'Pinela Glass',
        slug: 'Pinela Glass',
        desc: 'A luxurious outdoor space with the elegance of glass',
        img: new URL('../assets/AVimages/Pinela Glass.jpg', import.meta.url).href
      },


      {
        name: 'Trebbiano',
        slug: 'Trebbiano',
        desc: 'Cubistic look, maximum benefits',
        img: new URL('../assets/AVimages/Trebbiano.jpg', import.meta.url).href
      },


      {
        name: 'Giallo Plus',
        slug: 'Giallo Plus',
        desc: 'Glass roof with a wide span',
        img: new URL('../assets/AVimages/Giallo Plus.jpg', import.meta.url).href
      },


      {
        name: 'Pigato Plus',
        slug: 'Pigato Plus',
        desc: 'glass roof with a wide span. Spacious and complete.',
        img: new URL('../assets/AVimages/Pigato Plus.jpg', import.meta.url).href
      },


      {
        name: 'Giallo veranda',
        slug: 'Giallo veranda',
        desc: 'Sleek design, robust and characteristic',
        img: new URL('../assets/AVimages/Giallo veranda.jpg', import.meta.url).href
      },


      {
        name: 'Pigato veranda',
        slug: 'Pigato veranda',
        desc: 'Affordable luxury veranda with a glass roof',
        img: new URL('../assets/AVimages/Pigato veranda.jpg', import.meta.url).href
      },


      {
        name: 'Ribolla detached veranda',
        slug: 'Ribolla detached veranda',
        desc: 'Enjoy a covered terrace anywhere',
        img: new URL('../assets/AVimages/Ribolla detached veranda.jpg', import.meta.url).href
      },


      {
        name: 'Bosco veranda',
        slug: 'Bosco veranda',
        desc: 'Our ‘’bestseller’’, choose your own look!',
        img: new URL('../assets/AVimages/Bosco veranda.jpg', import.meta.url).href
      },



      {
        name: 'Nebbiolo veranda',
        slug: 'Nebbiolo veranda',
        desc: 'Slim, elegant and very competitively priced',
        img: new URL('../assets/AVimages/Nebbiolo veranda.jpg', import.meta.url).href
      },



      {
        name: 'Grillo fencing',
        slug: 'Grillo fencing',
        desc: 'Modular adjustable fencing for extra shielding and privacy',
        img: new URL('../assets/AVimages/Grillo fencing.jpg', import.meta.url).href
      },



      {
        name: 'Louvres',
        slug: 'Louvres',
        desc: 'Fixed and Rotating Louvres',
        img: new URL('../assets/AVimages/Louvres.jpg', import.meta.url).href
      },



      {
        name: 'Accessories',
        slug: 'Accessories',
        desc: 'Complete your terrace canopy with our accessories.',
        img: new URL('../assets/AVimages/Accessories.jpg', import.meta.url).href
      }


    ]
  },



  'louvered-roofs': {
    title: 'Louvered Roofs',
    banner: new URL('../assets/images/louvered-roof-banner.jpg', import.meta.url).href, // 👈 add banner
    description:
      'With a louvered roof, you decide how much sun and light you like on your terrace. The roof can be opened and closed with a remote control, which means that you are also dry during bad weather. We sell two types of aluminum louvered roofs; One with tilting panels and one with panels that can be slide to the side. They are supplied in high-quality aluminum in a timeless anthracite color. With the Pinela and Pinela Deluxe louvered roof pergolas , your terrace will become your own paradise every season.Aluminum is a low maintenance material. The color lasts for decades and does not need to be painted over. In addition, it is strong. The louvered roof can be supplied with all kinds of extra options and accessories. Together with Deponti you can create the terrace of your dreams.',
    types: [
      { name: 'Pinela Deluxe Plus', slug: 'Pinela Deluxe Plus', desc: 'Flexible and powerful in a stylish design', img: new URL('../assets/images/manual-louvered-roof.jpeg', import.meta.url).href },
      { name: 'Pinela Deluxe; Aluminium Louvered roof', slug: 'Pinela Deluxe; Aluminium Louvered roof', desc: 'Enjoy the convertible effect in your own garden', img: new URL('../assets/images/Motorized (Automatic) Louvered Roof.jpeg', import.meta.url).href },
      { name: 'Pinela; Aluminium Louvered Roof', slug: 'Pinela; Aluminium Louvered Roof', desc: 'Creating the perfect light on your own terrace', img: new URL('../assets/images/Smart Louvered Roof (Sensor-Based).jpg', import.meta.url).href },
    ]
  },

  'glass-sliding-doors': {
    title: 'Deponti Fiano Glass sliding doors',
    banner: new URL('../assets/images/glass-door-banner.jpg', import.meta.url).href,
    description:
      'With the Deponti Fiano you can turn your veranda easily into a luxury garden room allowing you to enjoy your garden and terrace all year long. It allows you to create a new place in your home where the indoor and outdoors are merged. The glass panels are available in various height- and width dimensions, can run in three to six rail tracks and have no side frames. Due to this, they offer an free view of your backyard. In addition, a Deponti Fiano glass sliding door system also protects against rain and cold. This allows you to enjoy the ultimate outdoor feeling, even in bad weather. On top of this they also offer some sound reduction.',
    types: [
      {

        //     name: 'Single Panel Doors', slug: 'single-panel-doors', desc: 'Single sliding glass panel.',
        img: new URL('../assets/images/singlepanneldoor.jpeg', import.meta.url).href
      },

      {
        //     name: 'Multi-Panel Doors', slug: 'multi-panel-doors', desc: 'Multiple sliding glass panels.', 
        img: new URL('../assets/images/multipanneldoors.jpeg', import.meta.url).href
      },

      {
        //   name: 'Corner Doors', slug: 'corner-doors', desc: 'Doors designed for corner installations.', 
        img: new URL('../assets/images/cornerdoors.jpg', import.meta.url).href
      }
    ]
  },

  'folding-roofs': {
    title: 'Verdeca; Folding roof with aluminum frame',
    banner: new URL('../assets/images/folding-roof-banner.jpg', import.meta.url).href,
    description:
      'Ultimate flexibility with a sleek design Enjoy extra living pleasure in the garden through ultimate flexibility. Who would not want that? The Verdeca roof canvas is made of a sun-resistant and water-resistant fabric. Are you sitting under the veranda and want to enjoy the sun? Then, with one push on the button, raise the canvas (partially) so you can immediately enjoy maximum light and the beautiful weather. If you prefer to sit in the shade or seek protection against wind, rain or UV radiation, you can close the screen with the same ease. ',
    types: [
      {
        //     name: 'Manual Folding Roofs', slug: 'manual-folding-roofs', desc: 'Manually operated folding roofs.', 
        img: new URL('../assets/images/manualfolding.jpg', import.meta.url).href
      },

      {
        //  name: 'Electric Folding Roofs', slug: 'electric-folding-roofs', desc: 'Electrically powered folding roofs.', 
        img: new URL('../assets/images/electricfolding.jpg', import.meta.url).href
      },

      {
        //   name: 'Hydraulic Folding Roofs', slug: 'hydraulic-folding-roofs', desc: 'Hydraulically operated folding roofs.', 
        img: new URL('../assets/images/hydraulicfolding.jpeg', import.meta.url).href
      }
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
    <div className="bg-white">

      {/* 🔥 HERO SECTION */}
      {data.banner && (
        <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">

          <img
            src={data.banner}
            alt={data.title}
            className="w-full h-full object-cover"
          />

          {/* optional dark overlay for better contrast */}
          <div className="absolute inset-0 bg-black/20"></div>

        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* 🔙 Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-light mb-6"
        >
          <ArrowLeft size={20} /> Back to Products
        </Link>

        {/* 🔥 TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
          {data.title}
        </h1>

        {/* 📝 Description */}


        {/* <p className="text-lg text-muted mb-12 max-w-5xl">
          {data.description}
        </p> */}

        {data.description && (
          <p className="text-lg text-muted mb-12 max-w-8xl">
            {data.description}
          </p>
        )}

        {/* 📦 Product Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.types.map((type, i) => (
            <Link key={i} to={`/products/${product}/${type.slug}`}>
              <div className="bg-light p-6 rounded-2xl hover:shadow-lg transition cursor-pointer">
                <img
                  src={type.img}
                  alt={type.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold text-dark mb-4">
                  {type.name}
                </h3>
                <p className="text-muted whitespace-pre-line">
                  {type.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};