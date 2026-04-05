export const Contact = () => (
  <div className="pt-32 pb-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-dark mb-6">Contact Us</h1>
        <p className="text-muted text-lg">We're here to help you create your dream outdoor space.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="bg-accent/20 p-10 md:p-12 rounded-3xl border border-black/5">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-dark/60 uppercase tracking-widest">Name</label>
                <input type="text" className="w-full bg-white border border-black/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-dark/60 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-white border border-black/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-dark/60 uppercase tracking-widest">Message</label>
              <textarea rows={5} className="w-full bg-white border border-black/10 rounded-xl px-5 py-4 focus:border-primary outline-none transition-all resize-none" placeholder="How can we help?"></textarea>
            </div>
            <button className="bg-primary text-white w-full py-5 rounded-full font-bold hover:bg-primary-light transition-all shadow-lg">
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-dark">Our Office</h4>
              <p className="text-lg text-muted">
                123 Luxury Lane<br />
                Mayfair, London<br />
                W1J 7JZ
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-dark">Direct Contact</h4>
              <p className="text-lg text-muted">+44 20 7123 4567</p>
              <p className="text-lg text-muted">info@outdoors.com</p>
            </div>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-lg border border-black/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2467522033947!2d-0.1444653!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052964a6a0d3%3A0x6fbfae405510567!2sMayfair%2C%20London!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);
