import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const homeProducts = [
  {
    id: 1,
    name: 'Adaptive Linen Shirt',
    description: 'Magnetic closures and soft-seam technology for ultimate comfort.',
    image: 'https://images.unsplash.com/photo-1594932224010-74f4bab77d34?auto=format&fit=crop&q=80&w=800',
    category: 'Adaptive Wear'
  },
  {
    id: 2,
    name: 'Logic Trouser',
    description: 'Adjustable waistband and accessible pocket placement.',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    category: 'Everyday Inclusive'
  }
];

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1920" 
            alt="Editorial fashion"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-charcoal/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl space-y-8">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-9xl text-brand-off-white leading-[1.05] italic font-light"
            >
              Inclusive fashion, <br />
              designed with <span className="font-semibold not-italic">logic.</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm md:text-base text-brand-off-white/80 font-light max-w-md leading-relaxed"
            >
              Clothing that considers comfort, identity, movement, and accessibility. We don't ask you to fit the clothes; we design the clothes to fit your lifestyle.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link 
                to="/collections" 
                className="bg-brand-off-white/90 backdrop-blur-md text-brand-charcoal px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] shadow-lg hover:bg-brand-off-white transition-all hover:translate-y-[-2px]"
              >
                EXPLORE GARMENTS
              </Link>
              <Link 
                to="/custom-orders" 
                className="bg-transparent text-brand-off-white border border-brand-off-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-brand-off-white/10 transition-all hover:translate-y-[-2px]"
              >
                CUSTOM ORDER
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-brand-brown font-bold uppercase tracking-[0.4em] text-[10px]">Fashion for more bodies</span>
            <h2 className="text-5xl md:text-7xl italic font-light">
              Design that adapts <br /> to <span className="font-semibold not-italic">people.</span>
            </h2>
            <p className="text-sm text-brand-charcoal/70 leading-relaxed max-w-md">
              Inclusive Garb Logic is a fashion design concept built around clothing that adapts to people, not the other way around. We believe that true style is inseparable from accessibility and comfort.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 group font-bold text-[10px] uppercase tracking-widest border-b border-brand-charcoal pb-1">
              OUR PHILOSOPHY
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="aspect-[4/3] bg-brand-charcoal rounded-[2rem] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800" 
              alt="Design process"
              className="w-full h-full object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <span className="text-brand-brown font-bold uppercase tracking-[0.4em] text-[10px]">Collections</span>
              <h2 className="text-4xl md:text-5xl italic">Latest Logic</h2>
            </div>
            <Link to="/collections" className="text-[10px] font-bold uppercase tracking-[0.2em] underline decoration-1 underline-offset-4">VIEW ALL</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {homeProducts.map((product) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={product.id}
                className="group cursor-pointer relative rounded-[2rem] overflow-hidden shadow-xl aspect-[16/10]"
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-6 bottom-6 glass p-6 rounded-2xl flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-brown font-bold leading-none">{product.category}</span>
                    <h3 className="text-xl font-display italic leading-tight">{product.name}</h3>
                  </div>
                  <div className="text-[10px] font-bold underline uppercase tracking-widest">DETAILS</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy Pillars */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Fit Philosophy', desc: 'Engineered for diverse morphologies. We prioritize ease of dressing without compromising the silhouette.', color: 'bg-green-400' },
            { title: 'Tactile Comfort', desc: 'Sensitive-skin-friendly seams and moisture-wicking natural textiles designed for all-day wearability.', color: 'bg-blue-400' },
            { title: 'Identity Expression', desc: 'Bold, architectural designs that allow your personal identity to shine through purposeful aesthetics.', color: 'bg-orange-400', charcoal: true }
          ].map((pillar, idx) => (
            <div 
              key={idx} 
              className={cn(
                "rounded-[1.5rem] p-8 flex flex-col justify-between min-h-[220px] shadow-sm",
                pillar.charcoal ? "bg-brand-charcoal text-brand-off-white" : "glass"
              )}
            >
              <div className="flex gap-3 items-center">
                <div className={cn("w-3 h-3 rounded-full", pillar.color)}></div>
                <span className="text-[10px] font-bold uppercase tracking-widest">{pillar.title}</span>
              </div>
              <p className={cn(
                "text-xs leading-relaxed",
                pillar.charcoal ? "text-brand-off-white/70" : "text-brand-charcoal/80"
              )}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center py-20 bg-brand-charcoal rounded-[40px] text-brand-off-white shadow-2xl">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl">Have a specific garment idea?</h2>
          <p className="text-xl text-brand-off-white/60">Let's build something beautiful and logical together.</p>
          <div className="pt-4">
            <Link 
              to="/custom-orders" 
              className="bg-brand-beige text-brand-charcoal px-10 py-5 rounded-full font-semibold uppercase tracking-[0.2em] text-sm hover:bg-brand-off-white transition-colors"
            >
              Start a Custom Order
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
