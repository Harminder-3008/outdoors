import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Clock, CheckCircle2, MessageSquare, Wrench, Ruler, Calendar } from 'lucide-react';
import { HeroSlider } from '../components/HeroSlider';
import kitchenImg from '../assets/images/kitchen.jpg';
import aluminiumVerandasImg from '../assets/images/Aluminium vrandas.jpeg';
import louveredRoofsImg from '../assets/louvered-roofs.jpeg';
import glassSlidingDoorsImg from '../assets/images/glass image.jpg';
import foldingRoofsImg from '../assets/images/folding roof.png';
import slider2Img from '../assets/images/Slider 2.webp';

export const Home = () => (
  <div className="bg-light">
    <HeroSlider />

    {/* Intro Section */}
    <section className="pt-10 md:pt-15 pb-22 md:pb-30 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest text-md uppercase mb-4 block">
              OUR STORY
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-dark">
              Crafting Exceptional <br />
              <span className="text-primary">Outdoor Living</span>
            </h2>

            <p className="text-muted text-lg leading-relaxed mb-10">
              At OASIS VERANDAS, a proud Authorized Deponti Dealer, we bring world-class outdoor solutions to your doorstep. With over 15 years of experience combined with Deponti's innovative designs, we deliver premium outdoor solutions that seamlessly combine natural beauty with modern functionality. Our bespoke designs are created to enhance your lifestyle while adding lasting value to your home.
            </p>

            <div className="flex gap-10">
              <div>
                <p className="text-3xl font-display font-bold text-dark">15+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-dark">1000+</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted">
                  Projects Completed
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <img
              src={slider2Img}
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
            <img src={aluminiumVerandasImg} alt="Aluminium Verandas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-display font-bold text-white mb-2">Aluminium Verandas</h3>
              <Link to="/products" className="text-white/80 text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                VIEW COLLECTION <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-4 group relative h-[400px] overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <img src={glassSlidingDoorsImg} alt="Glass Sliding Doors" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Glass Sliding Doors</h3>
              <Link to="/products" className="text-white/80 text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                EXPLORE <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-4 group relative h-[400px] overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <img src={louveredRoofsImg} alt="Louvered Roofs" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Louvered Roofs</h3>
              <Link to="/products" className="text-white/80 text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                EXPLORE <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-8 group relative h-[400px] overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <img src={foldingRoofsImg} alt="Folding Roofs" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-display font-bold text-white mb-2">Folding Roofs</h3>
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
              { name: "David Thompson", role: "Architect", text: "As an architect, I'm very picky about build quality. OASIS VERANDAS' Deponti products exceeded my expectations in every way." },
              { name: "Emma Wilson", role: "Garden Designer", text: "I always recommend OASIS VERANDAS to my clients. Their Deponti designs are sleek, modern, and incredibly durable." },
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

    {/* Service Areas Section */}
    {/* <section className="py-24 bg-accent/20">
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
    </section> */}

    
   
    {/* Features */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Shield size={32} />, title: "Premium Craftsmanship", desc: "Expertly designed and built to deliver lasting quality and refined finishes." },
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
