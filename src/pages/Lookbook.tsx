import { motion } from 'motion/react';

const gallery = [
  { url: 'https://images.unsplash.com/photo-1539109132332-3f8d22879590?auto=format&fit=crop&q=80&w=800', title: 'Autumn Reflection' },
  { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800', title: 'Studio One' },
  { url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800', title: 'Texture Study' },
  { url: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?auto=format&fit=crop&q=80&w=800', title: 'Movement Logic' },
  { url: 'https://images.unsplash.com/photo-1594932224010-74f4bab77d34?auto=format&fit=crop&q=80&w=800', title: 'Detail Focus' },
  { url: 'https://images.unsplash.com/photo-1591047139829-d91aec369a0d?auto=format&fit=crop&q=80&w=800', title: 'The Blazer' },
  { url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800', title: 'Structure' },
  { url: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800', title: 'Behind the Seam' },
];

export default function Lookbook() {
  return (
    <div className="pb-32">
      <section className="py-24 max-w-7xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl italic font-display">Lookbook</h1>
        <p className="text-xl text-brand-charcoal/60 font-light max-w-xl mx-auto">
          A visual odyssey through the intersection of identity and garment engineering.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {gallery.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-3xl"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="space-y-1">
                  <span className="text-[10px] text-brand-off-white/60 uppercase tracking-[0.3em]">Inclusive Logic</span>
                  <h3 className="text-xl text-brand-off-white font-medium italic">{img.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-40 text-center max-w-2xl mx-auto px-6 space-y-8">
        <h2 className="text-3xl font-light">More than just a collection. <br /> A shift in perspective.</h2>
        <div className="h-20 w-px bg-brand-charcoal/20 mx-auto" />
        <p className="text-brand-brown font-medium uppercase tracking-[0.4em] text-sm italic">Evolve with us</p>
      </section>
    </div>
  );
}
