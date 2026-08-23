import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageSquare, Menu, X, PhoneCall, ChevronRight, FileText, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface NavbarProps {
  onOpenRFQModal?: () => void;
  onOpenWhatsAppDrawer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRFQModal, onOpenWhatsAppDrawer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products & Spices', href: '#products' },
    { name: 'Global Logistics', href: '#logistics' },
    { name: 'Quality & Standards', href: '#quality' },
    { name: 'Why Harmain', href: '#why-us' },
    { name: 'Founders', href: '#founders' },
    { name: 'Calculate RFQ', href: '#rfq-calculator' },
    { name: 'Contact HQ', href: '#contact' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-stone-200 ${
        isScrolled ? 'shadow-md py-3' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a id="nav-logo" href="#hero" className="flex items-center gap-3 group">
            <Logo size="md" variant="color" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs xl:text-sm font-bold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="hover:text-amber-800 transition-colors py-1 relative group tracking-tight"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Request Quote Button */}
            <a
              id="nav-rfq-cta-btn"
              href="#rfq-calculator"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-extrabold transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Request Quote</span>
            </a>

            {/* WhatsApp High Impact Pill */}
            <button
              id="nav-whatsapp-btn"
              onClick={onOpenWhatsAppDrawer}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2.5 rounded-xl flex items-center gap-2 text-xs font-bold shadow-sm transition-all cursor-pointer"
              title="Chat on WhatsApp with Founders"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-whatsapp-btn"
              onClick={onOpenWhatsAppDrawer}
              className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-900 transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenWhatsAppDrawer) onOpenWhatsAppDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Chat on WhatsApp with Founders
            </button>
            <a
              href="#rfq-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs shadow-sm"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              Request Export Quotation
            </a>
          </div>

          <div className="pt-1 text-center text-xs text-slate-500 font-medium">
            Support: {COMPANY_INFO.supportEmail}
          </div>
        </div>
      )}
    </nav>
  );
};
