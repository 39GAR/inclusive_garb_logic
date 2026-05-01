import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pb-32">
      <section className="py-24 bg-brand-grey/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-brand-brown font-bold uppercase tracking-[0.4em] text-[10px]"
              >
                Our Story
              </motion.span>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl italic font-light"
              >
                Refining the <br /> 
                <span className="font-semibold not-italic text-brand-charcoal">Logic</span> of Garb.
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-base text-brand-charcoal/70 font-light leading-relaxed max-w-md"
              >
                Inclusive Garb Logic was founded on a simple realization: the fashion industry often asks bodies to adapt to clothes, rather than clothes adapting to bodies.
              </motion.p>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800" 
                  alt="Inclusive fashion"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-32 space-y-24">
        <section className="space-y-6">
          <h2 className="text-3xl font-medium">What Inclusive Garb Logic Means</h2>
          <p className="text-lg text-brand-charcoal/70 leading-relaxed">
            The name reflects our commitment to a systematic, thoughtful approach to design. "Inclusive" is our goal, "Garb" is our medium, and "Logic" is our method. Every button placement, seam choice, and fabric selection is a logical response to a real-world need.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 border-y border-brand-charcoal/10 py-16">
          <div className="space-y-4">
            <h3 className="text-xl font-medium uppercase tracking-widest text-brand-brown">Mission</h3>
            <p className="text-brand-charcoal/70">To democratize style by creating beautiful, adaptive garments that empower individuals regardless of their physical abilities or body shapes.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-medium uppercase tracking-widest text-brand-brown">Values</h3>
            <p className="text-brand-charcoal/70">Empathy-driven design, ethical craftsmanship, and a relentless pursuit of functional elegance.</p>
          </div>
        </section>

        <section className="space-y-12">
          <h2 className="text-3xl font-medium text-center">Design Philosophy</h2>
          <div className="space-y-8">
            <div className="group">
              <div className="flex justify-between items-baseline mb-4">
                <h4 className="text-2xl font-serif italic">01. Human-Centered Accessibility</h4>
                <div className="h-px flex-grow mx-4 bg-brand-charcoal/10" />
              </div>
              <p className="text-brand-charcoal/60 pl-8">We research how bodies move, rest, and interact with the world to solve frustrations before they happen.</p>
            </div>
            
            <div className="group">
              <div className="flex justify-between items-baseline mb-4">
                <h4 className="text-2xl font-serif italic">02. Aesthetic Integrity</h4>
                <div className="h-px flex-grow mx-4 bg-brand-charcoal/10" />
              </div>
              <p className="text-brand-charcoal/60 pl-8">Adaptive features shouldn't look like medical equipment. We hide function inside form so style is never compromised.</p>
            </div>

            <div className="group">
              <div className="flex justify-between items-baseline mb-4">
                <h4 className="text-2xl font-serif italic">03. Sustainable Intention</h4>
                <div className="h-px flex-grow mx-4 bg-brand-charcoal/10" />
              </div>
              <p className="text-brand-charcoal/60 pl-8">Buy once, wear forever. We create durable, timeless pieces that respect both the wearer and the planet.</p>
            </div>
          </div>
        </section>

        <section className="bg-brand-charcoal text-brand-off-white p-12 rounded-[2rem] text-center space-y-6">
          <h2 className="text-3xl">Who we serve</h2>
          <p className="text-brand-off-white/60">Every identity. Every ability. Every body that wants to feel powerful and comfortable in what they wear.</p>
        </section>
      </div>
    </div>
  );
}
