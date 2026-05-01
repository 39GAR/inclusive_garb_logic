import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Mail, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Collections', href: '/collections' },
  { name: 'Design Logic', href: '/design-logic' },
  { name: 'Custom Orders', href: '/custom-orders' },
  { name: 'Lookbook', href: '/lookbook' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen accent-mesh">
      <header className="sticky top-6 z-50 transition-all duration-300 mx-6">
        <nav className="max-w-7xl mx-auto glass px-8 py-4 rounded-full flex items-center justify-between shadow-sm">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-charcoal rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-brand-off-white font-bold text-[10px] tracking-tighter">IGL</span>
            </div>
            <h1 className="text-sm font-semibold tracking-tight uppercase hidden sm:block">
              Inclusive Garb Logic
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:opacity-100",
                  location.pathname === link.href 
                    ? "text-brand-charcoal opacity-100 border-b border-brand-charcoal" 
                    : "text-brand-charcoal opacity-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link 
            to="/contact" 
            className="hidden md:block bg-brand-charcoal text-brand-off-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-brown transition-colors"
          >
            Contact
          </Link>

          <button
            className="md:hidden p-2 text-brand-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-brand-off-white border-b border-brand-charcoal/5 md:hidden shadow-lg"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-display uppercase tracking-wider py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-brand-charcoal text-brand-off-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-medium">Inclusive Garb Logic</h3>
            <p className="text-brand-off-white/60 max-w-sm leading-relaxed">
              Fashion designed with comfort, identity, and function in mind. Creating clothing that adapts to people, not the other way around.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-off-white/40">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 5).map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-brand-beige transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-off-white/40">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-beige transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-beige transition-colors"><Mail size={20} /></a>
              <a href="#" className="hover:text-brand-beige transition-colors"><Phone size={20} /></a>
            </div>
            <div className="text-brand-off-white/40 text-sm italic">
              Based in modern exploration of garment logic.
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-brand-off-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-brand-off-white/30">
          <p>© 2026 Inclusive Garb Logic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-off-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-off-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
