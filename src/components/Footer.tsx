import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, FOUNDERS } from '../data/company';
import { PRODUCTS } from '../data/products';
import { MapPin, Mail, Phone, MessageSquare, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 relative">
      {/* Top Banner */}
      <div className="border-b border-slate-900 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo size="md" variant="light" />
          </div>

          <div className="flex flex-wrap items-center gap-2 text-center sm:text-right">
            <a
              id="footer-whatsapp-founder"
              href={`https://wa.me/${COMPANY_INFO.whatsappPrimary}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white font-bold transition-colors flex items-center gap-1.5 text-xs shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Mudassir (Founder)</span>
            </a>

            <a
              id="footer-whatsapp-cofounder"
              href={`https://wa.me/${COMPANY_INFO.whatsappSecondary}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors flex items-center gap-1.5 text-xs border border-slate-800"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Naveed (Co-Founder)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white text-xs font-bold font-heading uppercase tracking-wider">
              Harmain Import &amp; Export
            </h4>
            <p className="leading-relaxed text-slate-400 text-xs">
              Premier Indian agro-commodity enterprise connecting Indian farmers and spice processors with global markets across the Middle East, Europe, North America, Southeast Asia, and Africa.
            </p>
            <div className="space-y-1.5 pt-1 text-slate-300 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="hover:text-amber-400 underline">
                  {COMPANY_INFO.supportEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Export Spices & Commodities (3 cols) */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="text-white text-xs font-bold font-heading uppercase tracking-wider">
              Featured Export Spices
            </h4>
            <ul className="space-y-1 text-slate-400 text-xs">
              {PRODUCTS.slice(0, 7).map((p) => (
                <li key={p.id}>
                  <a href="#products" className="hover:text-amber-400 transition-colors block">
                    • {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Agro Products & Seeds (2 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-white text-xs font-bold font-heading uppercase tracking-wider">
              Seeds &amp; Plantation
            </h4>
            <ul className="space-y-1 text-slate-400 text-xs">
              {PRODUCTS.slice(7).map((p) => (
                <li key={p.id}>
                  <a href="#products" className="hover:text-amber-400 transition-colors block">
                    • {p.name.split('(')[0]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quality & Quick Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold font-heading uppercase tracking-wider">
              Compliance &amp; Inquiries
            </h4>
            <p className="leading-relaxed text-slate-400 text-xs">
              ISO 22000:2018, Spices Board of India, FSSAI, APEDA, and Halal certified for smooth customs clearance worldwide.
            </p>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1 text-xs">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">Direct Mobile Numbers:</span>
              <p className="text-white font-mono text-[11px]">Mudassir: +91 96866 69222</p>
              <p className="text-white font-mono text-[11px]">Naveed: +91 97387 62664</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Back to Top */}
      <div className="border-t border-slate-900 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Harmain Import &amp; Export. Registered Office: BTM 1st Stage, Bengaluru, India.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 cursor-pointer text-xs"
            title="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

