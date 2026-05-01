import slider3Img from '../assets/images/Slider 3.jpg';
import slider2Img from '../assets/AVimages/Bosco veranda.jpg';
import { Link } from "react-router-dom";

export const About = () => (
  <div className="bg-white">

    {/* ================= HERO ================= */}
    <div className="relative w-full h-[350px] md:h-[500px]">
      <img
        src={slider3Img}   // ✅ Hero image
        className="w-full h-full object-cover"
        alt="About Banner"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          About Us
        </h1>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-20">

      {/* ================= OUR HERITAGE ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">

        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-dark mb-8">
            Our Heritage
          </h2>

          <p className="text-muted text-lg leading-relaxed mb-6">
            Founded with a passion for architectural design, OASIS VERANDAS specializes in creating premium outdoor living spaces tailored to modern lifestyles.
          </p>

          <p className="text-muted text-lg leading-relaxed mb-6">
            We believe that every garden has the potential to become an extraordinary living space.
          </p>

          <p className="text-muted text-lg leading-relaxed">
            Our team collaborates closely with each client to create bespoke structures.
          </p>
        </div>

        <img
          src={slider3Img}   // ✅ Heritage image
          alt="About Us"
          className="rounded-3xl shadow-xl"
        />
      </div>

      {/* ================= EXTRA SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">

        <img
          src={slider2Img}   // ✅ Extra section image
          alt="Outdoor Living"
          className="rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6 text-dark">
            Designed for Modern Living
          </h2>

          <p className="text-muted text-lg leading-relaxed mb-6">
            Our verandas are thoughtfully designed to become a natural extension of your home, creating a seamless transition between indoor comfort and outdoor living. Whether you’re hosting guests, relaxing with family, or enjoying quiet moments, our spaces adapt perfectly to your lifestyle.
          </p>

          <p className="text-muted text-lg leading-relaxed">
            With a strong focus on modern aesthetics and smart design, we deliver solutions that combine elegance, practicality, and timeless appeal.
          </p>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Premium Quality",
              desc: "We use only the finest materials."
            },
            {
              title: "Innovative Design",
              desc: "Modern and stylish outdoor solutions."
            },
            {
              title: "End-to-End Service",
              desc: "Smooth and stress-free experience."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl bg-gray-50 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {item.title}
              </h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="text-center bg-primary text-white p-16 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Transform Your Outdoor Space?
        </h2>
        <p className="mb-6 text-lg">
          Let us help you design the perfect veranda.
        </p>

        <Link to="/contact">
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition cursor-pointer">
            Contact Us
          </button>
        </Link>
      </div>

    </div>
  </div>
);