export const About = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
        <div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-8">Our Heritage</h1>
          <p className="text-muted text-lg leading-relaxed mb-6">
            Founded with a passion for architectural design, Outdoors has grown into a leading provider of premium outdoor living solutions. We believe that every garden has the potential to be an extraordinary living space.
          </p>
          <p className="text-muted text-lg leading-relaxed">
            Our team of designers and engineers work closely with each client to deliver bespoke structures that perfectly complement their home's architecture and their personal style.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1000" alt="About Us" className="rounded-3xl shadow-xl" referrerPolicy="no-referrer" />
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
