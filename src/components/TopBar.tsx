import React from 'react';
import { Mail, MapPin, Phone, Globe2, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const TopBar: React.FC = () => {
  return (
    <div id="top-bar" className="bg-slate-900 text-slate-300 text-[11px] border-b border-slate-800 py-1.5 px-4 sm:px-6 lg:px-8 hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Left: Direct Support & Location */}
        <div className="flex items-center gap-5">
          <a
            id="topbar-email-link"
            href={`mailto:${COMPANY_INFO.supportEmail}`}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium"
          >
            <Mail className="w-3 h-3 text-amber-500" />
            <span>{COMPANY_INFO.supportEmail}</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3 h-3 text-amber-500" />
            <span className="truncate max-w-xs xl:max-w-md">BTM 1st Stage, Bengaluru, Karnataka, INDIA</span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3 h-3 text-amber-500" />
            <span>24/7 Active Export Desk</span>
          </div>
        </div>

        {/* Right: Direct Founder Lines & Verified Trade Accreditations */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-slate-500 uppercase tracking-wider font-semibold text-[10px]">Founders:</span>
            <a
              id="topbar-phone-mudassir"
              href="tel:+919686669222"
              className="hover:text-amber-400 transition-colors font-semibold text-slate-200 flex items-center gap-1 font-mono"
            >
              <Phone className="w-2.5 h-2.5 text-amber-500" />
              +91 96866 69222
            </a>
            <span className="text-slate-700">|</span>
            <a
              id="topbar-phone-naveed"
              href="tel:+919738762664"
              className="hover:text-amber-400 transition-colors font-semibold text-slate-200 flex items-center gap-1 font-mono"
            >
              <Phone className="w-2.5 h-2.5 text-amber-500" />
              +91 97387 62664
            </a>
          </div>

          <div className="hidden xl:flex items-center gap-1.5 bg-slate-800 text-amber-400 border border-slate-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>IEC Verified &bull; ISO Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

