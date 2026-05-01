import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-32">
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div className="space-y-16">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl tracking-tighter">Get in <br /> touch.</h1>
              <p className="text-xl text-brand-charcoal/60 font-light leading-relaxed max-w-md">
                We love to talk logic, fashion, and accessibility. Whether you have a question or a custom request, our door is always open.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-brand-grey flex items-center justify-center text-brand-brown">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Email Us</span>
                  <a href="mailto:hello@inclusivegarblogic.com" className="text-lg font-medium hover:text-brand-brown transition-colors">hello@inclusivegarblogic.com</a>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-brand-grey flex items-center justify-center text-brand-brown">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">WhatsApp</span>
                  <a href="tel:+1234567890" className="text-lg font-medium hover:text-brand-brown transition-colors">+1 (234) 567 890</a>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-brand-grey flex items-center justify-center text-brand-brown">
                  <Instagram size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Instagram</span>
                  <a href="#" className="text-lg font-medium hover:text-brand-brown transition-colors">@inclusivegarblogic</a>
                </div>
              </div>

              <div className="flex gap-6 items-center">
                <div className="w-12 h-12 rounded-full bg-brand-grey flex items-center justify-center text-brand-brown">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-brand-charcoal/40">Studio</span>
                  <span className="text-lg font-medium">Cape Town, South Africa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-grey/30 rounded-[40px] p-8 md:p-16 flex flex-col justify-center space-y-12">
            <h2 className="text-4xl">General Enquiry</h2>
            <form className="space-y-8">
              <div className="space-y-4">
                <input required type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-brand-charcoal/10 py-4 focus:border-brand-brown outline-none transition-colors" />
                <input required type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-brand-charcoal/10 py-4 focus:border-brand-brown outline-none transition-colors" />
                <textarea rows={4} placeholder="Message" className="w-full bg-transparent border-b border-brand-charcoal/10 py-4 focus:border-brand-brown outline-none transition-colors resize-none" />
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-charcoal text-brand-off-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-brand-brown transition-colors"
                onClick={(e) => { e.preventDefault(); alert('Enquiry sent. We will be in touch!'); }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-brand-grey mt-20 relative overflow-hidden grayscale opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
          alt="Studio Map"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="bg-brand-off-white p-6 rounded-full shadow-xl">
             <MapPin size={32} className="text-brand-brown" />
           </div>
        </div>
      </section>
    </div>
  );
}
