import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const productTypes = {
  'aluminium-verandas': {
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
      }
    ]
  },

  'louvered-roofs': {
    title: 'Louvered Roofs',
    banner: new URL('../assets/Lrimages/lR BANNER.png', import.meta.url).href,
    description: 'With a louvered roof, you decide how much sun...',
    types: [
      { name: 'Pinela Deluxe Plus', slug: 'Pinela-Deluxe-Plus', desc: 'Flexible...', img: new URL('../assets/Lrimages/Pinela Deluxe Plus.png', import.meta.url).href },
      { name: 'Pinela Deluxe; Aluminium Louvered roof', slug: 'Pinela-Deluxe-Aluminium-Louvered-roof', desc: 'Enjoy...', img: new URL('../assets/Lrimages/Pinela Deluxe; Aluminium Louvered roof.png', import.meta.url).href },
      { name: 'Pinela; Aluminium Louvered Roof', slug: 'Pinela-Aluminium-Louvered-Roof', desc: 'Creating...', img: new URL('../assets/Lrimages/Pinela; Aluminium Louvered Roof.png', import.meta.url).href }
    ]
  },

  'glass-sliding-doors': {
    title: 'Deponti Fiano Glass sliding doors',
    banner: new URL('../assets/Gdimages/Gd banner.jpg', import.meta.url).href,
    description: 'With the Deponti Fiano you can turn your veranda...',
    types: [
      { img: new URL('../assets/Gdimages/gd1.jpg', import.meta.url).href },
      { img: new URL('../assets/Gdimages/gd2.jpg', import.meta.url).href },
      { img: new URL('../assets/Gdimages/gd3.jpg', import.meta.url).href },
      { img: new URL('../assets/Gdimages/gd4.jpg', import.meta.url).href },
      { img: new URL('../assets/Gdimages/gd5.jpg', import.meta.url).href },
      { img: new URL('../assets/Gdimages/gd6.jpg', import.meta.url).href },
      { img: new URL('../assets/Gdimages/gd7.jpg', import.meta.url).href }
    ]
  },

  'folding-roofs': {
    title: 'Verdeca; Folding roof with aluminum frame',
    banner: new URL('../assets/Frimages/FR banner.png', import.meta.url).href,
    description: 'Ultimate flexibility with a sleek design...',
    types: [
      { img: new URL('../assets/Frimages/Fr1.png', import.meta.url).href },
      { img: new URL('../assets/Frimages/fr2.png', import.meta.url).href },
      { img: new URL('../assets/Frimages/fr3.png', import.meta.url).href },
      { img: new URL('../assets/Frimages/fr4.png', import.meta.url).href }
    ]
  }
};

export const ProductTypes = () => {
  const { product } = useParams<{ product: string }>();
  const data = product ? productTypes[product as keyof typeof productTypes] : null;

  const [previewImg, setPreviewImg] = useState<string | null>(null);

  if (!data) {
    return <div className="pt-32 pb-24 text-center">Product not found</div>;
  }

  return (
    <div className="bg-white">

      {/* HERO (no click) */}
      {data.banner && (
        <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
          <img src={data.banner} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <Link to="/products" className="inline-flex items-center gap-2 mb-6">
          <ArrowLeft size={20} /> Back to Products
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>

        {data.description && (
          <p className="text-lg mb-12">{data.description}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.types.map((type, i) => (
            <div key={i} className="bg-light p-6 rounded-2xl hover:shadow-lg transition">

              <img
                src={type.img}
                onClick={() => setPreviewImg(type.img)}
                className="w-full h-48 object-cover rounded-xl mb-4 cursor-pointer"
              />

              {type.name && (
                <h3 className="text-2xl font-bold mb-4">{type.name}</h3>
              )}

              {type.desc && (
                <p>{type.desc}</p>
              )}

            </div>
          ))}
        </div>
      </div>

      {/* IMAGE PREVIEW */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setPreviewImg(null)}
        >
          <img src={previewImg} className="max-h-[90%] max-w-[90%] rounded-xl" />
        </div>
      )}

    </div>
  );
};