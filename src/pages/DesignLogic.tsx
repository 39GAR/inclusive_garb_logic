import { cn } from '@/src/lib/utils';

export default function DesignLogic() {
  const principles = [
    {
      title: 'Fit Flexibility',
      description: 'Human bodies are dynamic. Our garments feature hidden elastication, adjustable waistbands, and modular seam structures that accommodate weight fluctuations and different mobility needs.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Tactile Accessibility',
      description: 'Zippers and buttons can be barriers. We replace traditional fasteners with magnetic closures, oversized toggles, and easy-slide loops that require minimal fine motor skill.',
      image: 'https://images.unsplash.com/photo-1594932224010-74f4bab77d34?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Body Diversity',
      description: 'Our patterns are drafted from multi-point scans of diverse body types. We don’t just "size up"; we re-think the logic of the drape for every shape.',
      image: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Material Intelligence',
      description: 'Sensory-friendly fabrics are non-negotiable. We source high-breathability, hypoallergenic, and low-friction textiles that feel like a second skin.',
      image: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pb-32">
      <section className="py-24 max-w-7xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl">Design Logic</h1>
        <p className="text-xl text-brand-charcoal/60 font-light max-w-2xl mx-auto leading-relaxed">
          Unveiling the engineering behind the elegance. We don't just design fashion; we build solutions for human existence.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid gap-16">
          {principles.map((p, idx) => (
            <div key={idx} className={cn(
              "grid md:grid-cols-2 gap-16 items-center glass p-8 md:p-16 rounded-[4rem] shadow-sm transition-transform hover:scale-[1.01]",
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            )}>
              <div className={`space-y-8 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <span className="text-brand-brown font-display italic text-5xl">0{idx + 1}</span>
                <h2 className="text-5xl italic font-light">{p.title}</h2>
                <p className="text-base text-brand-charcoal/70 leading-relaxed italic">{p.description}</p>
                <div className="pt-6 border-t border-brand-charcoal/10 flex gap-12">
                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-[0.3em] text-brand-charcoal/40 mb-2">Focus</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-brown">Inclusive Fit</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-[0.3em] text-brand-charcoal/40 mb-2">Method</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-brown">Logged Optimization</span>
                  </div>
                </div>
              </div>
              <div className={`aspect-square bg-brand-charcoal overflow-hidden rounded-[3rem] shadow-2xl ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-40 bg-brand-charcoal text-brand-off-white py-32 rounded-t-[100px]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl md:text-5xl">Evolving the Garment</h2>
          <p className="text-brand-off-white/60 text-lg font-light leading-relaxed">
            Our logic is never final. We continuously collaborate with occupational therapists, disability advocates, and our community to refine our patterns and features.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { label: 'Research', val: '200+ Bodies' },
              { label: 'Prototypes', val: '15 Runs' },
              { label: 'Features', val: '50+ Innovations' },
              { label: 'Impact', val: 'Pure Inclusion' }
            ].map(stat => (
              <div key={stat.label} className="space-y-2">
                <span className="block text-[10px] uppercase tracking-widest text-brand-off-white/30">{stat.label}</span>
                <span className="text-2xl font-display italic">{stat.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
