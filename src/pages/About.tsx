import slider3Img from '../assets/images/Slider 3.jpg';

export const About = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
        <div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-8">Our Heritage</h1>
          <p className="text-muted text-lg leading-relaxed mb-6">
          Founded with a passion for architectural design, OASIS VERANDAS specializes in creating premium outdoor living spaces tailored to modern lifestyles. We work with high-quality systems and trusted brands such as Deponti to deliver elegant and durable veranda and outdoor solutions.
          </p>

          <p className="text-muted text-lg leading-relaxed">
We believe that every garden has the potential to become an extraordinary living space, combining comfort, functionality, and style.</p>
          <p className="text-muted text-lg leading-relaxed">
Our team of designers and engineers collaborates closely with each client to create bespoke structures that perfectly complement their home's architecture and reflect their personal taste.          </p>
        </div>
        <img src={slider3Img} alt="About Us" className="rounded-3xl shadow-xl" referrerPolicy="no-referrer" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Quality", desc: "We use only the finest materials, from aerospace-grade aluminum to toughened safety glass." },
          { title: "Innovation", desc: "Constantly evolving our designs to incorporate the latest in outdoor living technology." },
          { title: "Service", desc: "A dedicated project manager for every installation ensures a smooth, stress-free experience." }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-3xl bg-accent/20 border border-black/5">
            <h3 className="text-2xl font-display font-bold mb-4 text-primary">{item.title}</h3>
            <p className="text-muted text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
