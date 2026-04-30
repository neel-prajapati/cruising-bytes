import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // Extract the section id from href
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);

    if (element) {
      // Use scrollIntoView with smooth behavior
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update the URL
      window.history.pushState(null, null, href);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/15 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Animated Logo */}
          <AnimatedLogo />

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group font-medium text-sm cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-primary group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </div>

          {/* Premium CTA Button */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block px-7 py-2.5 rounded-lg bg-gradient-primary text-white font-semibold hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 text-sm cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -12px rgba(157, 78, 221, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="py-4 space-y-2 px-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium active:bg-white/20 cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block px-4 py-3 rounded-lg bg-gradient-primary text-white font-semibold text-center hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-200 active:scale-95 mt-2 cursor-pointer"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
