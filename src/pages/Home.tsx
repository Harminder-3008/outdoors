import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock, CheckCircle2, MessageSquare, Wrench, Ruler, Calendar } from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';

export const Home = () => (
  <div className="bg-light">
    <HeroSlider />

    {/* Intro Section */}
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">OUR STORY</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-dark">
              Transforming Gardens into <br />
              <span className="text-primary">Living Masterpieces</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              With over 15 years of experience, we specialize in creating high-end outdoor spaces that combine architectural elegance with practical functionality. Our bespoke solutions are designed to enhance your lifestyle and add value to your home.
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-3xl font-display font-bold text-dark">15+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-dark">1000+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted">Projects Completed</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
              alt="Outdoor Living" 
              className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Bento Grid Products */}
    <section className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark">Our Signature Collections</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 group relative h-[400px] overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" alt="Verandas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-display font-bold text-white mb-2">Glass Verandas</h3>
              <Link to="/products" className="text-white/80 text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                VIEW COLLECTION <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 group relative h-[400px] overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <img src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&q=80&w=800" alt="Pergolas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Luxury Pergolas</h3>
              <Link to="/products" className="text-white/80 text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                EXPLORE <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 group relative h-[400px] overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800" alt="Glass Rooms" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Glass Rooms</h3>
              <Link to="/products" className="text-white/80 text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                EXPLORE <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 group relative h-[400px] overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <img src="https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1200" alt="Outdoor Kitchens" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-display font-bold text-white mb-2">Outdoor Kitchens</h3>
              <Link to="/products" className="text-white/80 text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                VIEW COLLECTION <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Our Process Section */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">HOW WE WORK</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dark">Our Seamless Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <MessageSquare size={32} />, step: "01", title: "Consultation", desc: "We discuss your vision and requirements in detail." },
            { icon: <Ruler size={32} />, step: "02", title: "Design & Survey", desc: "Precise measurements and architectural planning." },
            { icon: <Calendar size={32} />, step: "03", title: "Scheduling", desc: "We agree on a timeline that suits your schedule." },
            { icon: <Wrench size={32} />, step: "04", title: "Installation", desc: "Expert fitting by our certified engineering team." }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-primary mb-8">
                {item.icon}
              </div>
              <span className="absolute top-0 right-0 text-6xl font-display font-bold text-accent/30 -z-10">{item.step}</span>
              <h4 className="text-xl font-bold mb-4 text-dark">{item.title}</h4>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="py-24 bg-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">REVIEWS</span>
            <h2 className="text-4xl font-display font-bold text-dark mb-8">What Our Clients Say</h2>
            <p className="text-muted mb-8">We take pride in our reputation for excellence and customer satisfaction.</p>
            <div className="flex gap-2 text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-sm font-bold mt-4 text-dark">4.9/5 RATING ON TRUSTPILOT</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Homeowner", text: "The glass veranda has completely transformed our patio. We use it every single day, regardless of the weather." },
              { name: "David Thompson", role: "Architect", text: "As an architect, I'm very picky about build quality. Outdoors exceeded my expectations in every way." },
              { name: "Emma Wilson", role: "Garden Designer", text: "I always recommend Outdoors to my clients. Their designs are sleek, modern, and incredibly durable." },
              { name: "Mark Roberts", role: "Homeowner", text: "Professional from start to finish. The installation team was tidy, efficient, and very polite." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
                <p className="text-muted italic mb-6">"{item.text}"</p>
                <div>
                  <p className="font-bold text-dark">{item.name}</p>
                  <p className="text-xs text-muted uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dark">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {[
            { q: "Do I need planning permission?", a: "In many cases, our structures fall under permitted development. However, we provide full guidance and can assist with applications if required." },
            { q: "How long does installation take?", a: "Most installations are completed within 1-3 days, depending on the complexity and size of the structure." },
            { q: "Are the structures maintenance-free?", a: "Yes, our high-grade aluminum frames are powder-coated for durability and require only occasional cleaning with soapy water." },
            { q: "Can I add heating and lighting later?", a: "While it's best to integrate them during installation, many of our systems can be retrofitted with heating and lighting solutions." }
          ].map((item, i) => (
            <details key={i} className="group bg-accent/10 rounded-2xl p-6 cursor-pointer">
              <summary className="font-bold text-dark flex justify-between items-center list-none">
                {item.q}
                <ArrowRight size={20} className="group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-muted text-sm mt-4 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* Service Areas Section */}
    <section className="py-24 bg-accent/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">LOCATIONS</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-12">Serving the United Kingdom</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['London', 'Surrey', 'Kent', 'Essex', 'Hertfordshire', 'Berkshire', 'Buckinghamshire', 'Oxfordshire', 'Hampshire', 'Sussex'].map((area) => (
            <span key={area} className="px-6 py-3 bg-white rounded-full text-sm font-bold text-muted border border-black/5 shadow-sm">
              {area}
            </span>
          ))}
        </div>
        <p className="mt-12 text-muted max-w-xl mx-auto">Don't see your area? Contact us to see if we can accommodate your location.</p>
      </div>
    </section>

    {/* Features */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Shield size={32} />, title: "10-Year Warranty", desc: "Peace of mind with our comprehensive decade-long structural guarantee." },
            { icon: <Clock size={32} />, title: "Expert Installation", desc: "Professional fitting by our team of certified architectural engineers." },
            { icon: <CheckCircle2 size={32} />, title: "Weather Proof", desc: "Engineered to withstand the toughest British weather conditions." }
          ].map((item, i) => (
            <div key={i} className="text-center p-8 rounded-3xl bg-accent/20">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary mx-auto mb-6 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-dark">{item.title}</h4>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to Transform Your Space?</h2>
        <p className="text-white/80 text-lg mb-12">Book your free, no-obligation design consultation with our experts today.</p>
        <Link to="/contact" className="inline-block bg-white text-primary px-12 py-5 rounded-full font-bold hover:bg-accent transition-all shadow-xl">
          GET STARTED TODAY
        </Link>
      </div>
    </section>
  </div>
);
