import { useState } from "react";
import { Link } from "react-router-dom";

export const Accessories = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const bannerImages = [
        new URL('../assets/accessories/banner1.jpg', import.meta.url).href,
        new URL('../assets/accessories/banner2.jpg', import.meta.url).href,
    ];

    const items = [
        {
            name: "Screen",
            desc: "Calm, shelter and control",
            img: new URL('../assets/accessories/screen.jpg', import.meta.url).href
        },
        {
            name: "Fiano Louvre",
            desc: "The power of adjustable light",
            img: new URL('../assets/accessories/louvre.jpg', import.meta.url).href
        },
        {
            name: "Polycarbonate",
            desc: "Check the possibilities from our product range",
            img: new URL('../assets/accessories/poly.jpg', import.meta.url).href
        },
        {
            name: "Side Wall",
            desc: "Comfortable, windproof and available in both polycarbonate and glass",
            img: new URL('../assets/accessories/sidewall.jpg', import.meta.url).href
        },
        {
            name: "Side Gable",
            desc: "Covers the sloped area between the roof and the top of a side wall.",
            img: new URL('../assets/accessories/gable.jpg', import.meta.url).href
        },
        {
            name: "LED Spots",
            desc: "Create the right ambiance for every moment",
            img: new URL('../assets/accessories/led.jpg', import.meta.url).href
        },
        {
            name: "Concrete Foundation Blocks",
            desc: "Supporting foundation for your veranda",
            img: new URL('../assets/accessories/block.jpg', import.meta.url).href
        },
        {
            name: "Grillo Fencing",
            desc: "Modular adjustable fencing for extra shielding and privacy",
            img: new URL('../assets/accessories/fencing.jpg', import.meta.url).href
        },
        {
            name: "Glass Door Handles",
            desc: "To be opened easier, without stains or fingerprints on the window",
            img: new URL('../assets/accessories/handle.jpg', import.meta.url).href
        },
        {
            name: "Glass door followers",
            desc: "All glass doors open and close in one go",
            img: new URL('../assets/accessories/followers.jpg', import.meta.url).href
        },
        {
            name: "Glass door weather brushes",
            desc: "For a windproof finish of your glass sliding doors",
            img: new URL('../assets/accessories/weather-brushes.jpg', import.meta.url).href
        },
        {
            name: "Heaters",
            desc: "Stay warm and cosy outside even longer",
            img: new URL('../assets/accessories/heaters.jpg', import.meta.url).href
        },
        {
            name: "Deponti Fiano Steel-look",
            desc: "An eyecatcher in no time",
            img: new URL('../assets/accessories/steel-look.jpg', import.meta.url).href
        },
        {
            name: "Side and Middle Locks",
            desc: "Locking systems for Deponti Fiano Sliding Doors",
            img: new URL('../assets/accessories/locks.jpg', import.meta.url).href
        },
        {
            name: "Lumassina LED strips",
            desc: "An elegant lighting solution that seamlessly blends day into night",
            img: new URL('../assets/accessories/led-strips.jpg', import.meta.url).href
        }
    ];

    return (
        <div className="bg-white">

            {/* ✅ Banner Images ONLY */}
            <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 pt-16">

                {/* 🔙 Back Link */}
                <Link
                    to="/products/aluminium-verandas"
                    className="inline-flex items-center gap-2 text-sm text-primary mb-6"
                >
                    ← Back to Aluminium Verandas
                </Link>

                {/* 📍 Breadcrumb */}
                <p className="text-sm text-muted mb-6">
                    Home / Products / <span className="text-dark font-semibold">Accessories</span>
                </p>

                {/* 🏷️ Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
                    Accessories
                </h1>

                {/* 📝 Description */}
                <p className="text-lg text-muted max-w-3xl leading-relaxed mb-2">
                    With our accessories, you make your veranda suitable for any moment, season and weather type.
                    Create a extra cosy era with side doors or enjoy wonderful long evenings with ambient lighting!
                </p>

            </div>

            {/* ✅ Cards */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
                {items.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedImage(item.img)}
                        className="cursor-pointer bg-gray-100 p-6 rounded-xl hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-4">{item.desc}</p>
                        <img src={item.img} className="w-full h-[180px] object-cover rounded-lg" />
                    </div>
                ))}
            </div>

            {/* ✅ FULL IMAGE MODAL */}
            {selectedImage && (
                <div
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
                >
                    <img src={selectedImage} className="max-w-[90%] max-h-[90%] rounded-xl" />
                </div>
            )}
        </div>
    );
};