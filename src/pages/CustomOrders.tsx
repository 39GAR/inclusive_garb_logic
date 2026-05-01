import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Send } from 'lucide-react';

export default function CustomOrders() {
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    { title: 'Submit Enquiry', desc: 'Share your vision and basic requirements with our design team.' },
    { title: 'Consultation', desc: 'A remote or in-person session to discuss fit, logic, and style.' },
    { title: 'Measurements', desc: 'Detailed body mapping to ensure the garment respects your unique frame.' },
    { title: 'Production', desc: 'Hand-crafted with inclusive features tailored specifically for you.' }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-32">
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl">Custom <br /> <span className="italic font-display">Craft</span></h1>
              <p className="text-xl text-brand-charcoal/60 font-light leading-relaxed">
                Sometimes the perfect logic is one designed specifically for you. Our custom order service allows for full personalization of inclusive features and fit.
              </p>
            </div>

            <div className="space-y-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-brown">The Process</h2>
              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-brand-charcoal/20 flex items-center justify-center font-display text-sm group-hover:bg-brand-charcoal group-hover:text-brand-off-white transition-colors">
                      {idx + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-sm text-brand-charcoal/60">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brand-off-white shadow-2xl rounded-3xl p-8 md:p-12 border border-brand-charcoal/5">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="flex justify-center">
                  <CheckCircle2 size={64} className="text-brand-brown" />
                </div>
                <h2 className="text-3xl">Enquiry Received</h2>
                <p className="text-brand-charcoal/60 max-w-xs mx-auto">
                  Thank you for starting your custom journey. Our team will contact you within 48 hours for a consultation.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-medium border-b border-brand-charcoal pb-1 uppercase tracking-widest"
                >
                  Send another enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Full Name</label>
                    <input required type="text" className="w-full bg-brand-charcoal/5 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-brown outline-none" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Email Address</label>
                    <input required type="email" className="w-full bg-brand-charcoal/5 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-brown outline-none" placeholder="jane@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Garment Type</label>
                  <select className="w-full bg-brand-charcoal/5 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-brown outline-none">
                    <option>Everyday Wear</option>
                    <option>Adaptive Formal</option>
                    <option>Custom Outerwear</option>
                    <option>Sensory-Focused Piece</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Measurements / Size</label>
                  <input type="text" className="w-full bg-brand-charcoal/5 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-brown outline-none" placeholder="Approximate size or details" />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Enquiry Details</label>
                  <textarea rows={4} className="w-full bg-brand-charcoal/5 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-brown outline-none resize-none" placeholder="Describe your inclusive needs or design ideas..."></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Budget Range</label>
                  <select className="w-full bg-brand-charcoal/5 border-none rounded-xl px-4 py-3 focus:ring-1 focus:ring-brand-brown outline-none">
                    <option>$150 - $300</option>
                    <option>$300 - $600</option>
                    <option>$600 - $1000+</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-charcoal text-brand-off-white py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-sm hover:bg-brand-brown transition-colors"
                >
                  <Send size={18} />
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
