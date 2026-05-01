import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'The Logic Blazer',
    category: 'Adaptive Wear',
    price: '$280',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aec369a0d?auto=format&fit=crop&q=80&w=800',
    description: 'Structured blazer with easy-open side vents and soft tactile buttons.',
    features: ['Magnetic sleeves', 'Lower-back vent', 'Tactile button sensory design']
  },
  {
    id: 2,
    name: 'Flow State Trousers',
    category: 'Everyday Inclusive',
    price: '$160',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800',
    description: 'Minimalist trousers designed for long-wear comfort in any position.',
    features: ['Seamless side panels', 'High elastic back', 'Front-reach pockets']
  },
  {
    id: 3,
    name: 'Intuitive Wrap Dress',
    category: 'Statement Fashion',
    price: '$320',
    image: 'https://images.unsplash.com/photo-1539109132332-3f8d22879590?auto=format&fit=crop&q=80&w=800',
    description: 'Elegant wrap dress with simplified securing system and adjustable drape.',
    features: ['One-hand closure', 'Adjustable length', 'Diverse sizing']
  },
  {
    id: 4,
    name: 'The Unity Knit',
    category: 'Everyday Inclusive',
    price: '$120',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-soft knitwear with wide neck opening and sensory-friendly seams.',
    features: ['Wide stretch neck', 'No-chafe seams', 'Hypoallergenic fiber']
  },
];

const categories = ['All', 'Adaptive Wear', 'Everyday Inclusive', 'Statement Fashion', 'Custom Garments'];

export default function Collections() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pb-32 px-6">
      <section className="max-w-7xl mx-auto py-20 text-center space-y-6">
        <h1 className="text-5xl md:text-6xl">Collections</h1>
        <p className="text-brand-charcoal/60 max-w-xl mx-auto font-light">
          Thoughtfully crafted pieces that balance aesthetic purity with functional ingenuity.
        </p>
      </section>

      {/* Filter */}
      <section className="max-w-7xl mx-auto mb-16 overflow-x-auto pb-4">
        <div className="flex gap-8 justify-center min-w-max border-b border-brand-charcoal/5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-4 text-sm font-medium uppercase tracking-widest transition-all relative ${
                activeCategory === cat ? 'text-brand-charcoal' : 'text-brand-charcoal/40 hover:text-brand-charcoal/70'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-charcoal" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <motion.div 
              layout
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-brand-grey mb-6 rounded-2xl overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-off-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-medium">{product.name}</h3>
                  <span className="text-sm font-medium">{product.price}</span>
                </div>
                <p className="text-brand-charcoal/60 text-sm line-clamp-2">{product.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {product.features.map(f => (
                    <span key={f} className="text-[10px] text-brand-brown border border-brand-brown/30 px-2 py-0.5 rounded-sm">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="block text-center w-full bg-brand-charcoal text-brand-off-white py-3 rounded-xl font-medium uppercase tracking-[0.1em] text-xs hover:bg-brand-brown transition-colors"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center space-y-6">
            <p className="text-xl italic text-brand-charcoal/40">No garments found in this category yet.</p>
            <Link to="/custom-orders" className="inline-block text-brand-brown font-medium border-b border-brand-brown">
              Request a custom piece
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
