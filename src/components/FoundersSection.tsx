import React from 'react';
import { FOUNDERS, COMPANY_INFO } from '../data/company';
import { Phone, Mail, MessageSquare, ShieldCheck, Award, Briefcase, Sparkles, UserCheck, MapPin } from 'lucide-react';

interface FoundersSectionProps {
  onOpenWhatsAppDrawer: () => void;
}

export const FoundersSection: React.FC<FoundersSectionProps> = ({ onOpenWhatsAppDrawer }) => {
  return (
    <section id="founders" className="py-16 sm:py-24 bg-white relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest border border-amber-300">
            <UserCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>Executive Leadership &amp; Board</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Meet the Founders &amp; Directors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Direct, personalized access to the decision-makers behind Harmain Import &amp; Export. We guarantee transparent proforma pricing, field-level crop monitoring, and rapid export container clearance.
          </p>
        </div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {FOUNDERS.map((founder, idx) => {
            const isFounder = idx === 0;
            const cardId = isFounder ? 'founder-mudassir-card' : 'cofounder-naveed-card';
            const coatBadge = isFounder ? 'Black Suit / Executive Coat' : 'Maroon Suit / Executive Coat';

            const whatsappMessage = encodeURIComponent(
              `Hello ${founder.name}, I am reaching out regarding agro-commodity export inquiry with Harmain Import & Export.`
            );

            return (
              <div
                key={founder.name}
                id={cardId}
                className="rounded-3xl bg-[#FAF8F5] border border-stone-200 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-400 hover:shadow-xl transition-all duration-300 space-y-6 group"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-900 text-xs font-bold border border-amber-500/30">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    {founder.role}
                  </span>
                  <span className="text-[11px] text-slate-500 bg-white px-2.5 py-1 rounded-full border border-stone-200 font-mono">
                    {coatBadge}
                  </span>
                </div>

                {/* Profile Avatar & Names */}
                <div className="flex items-center gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-stone-300 group-hover:border-amber-500 shadow-md transition-colors bg-stone-200">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
                      {founder.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-700 font-bold uppercase tracking-wider">
                      {isFounder ? 'Founding Partner & Strategy' : 'Co-Founder & Operations'}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>Bengaluru Headquarters, India</span>
                    </div>
                  </div>
                </div>

                {/* Bio Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {founder.bio}
                </p>

                {/* Core Expertise Bullets */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Operational Domains:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {founder.focus.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 bg-white p-2 rounded-xl border border-stone-200 shadow-2xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="truncate font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Contact Buttons */}
                <div className="space-y-2.5 pt-4 border-t border-stone-200 text-xs">
                  {/* Phone */}
                  <a
                    href={`tel:+91${founder.phone}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-stone-50 text-slate-800 transition-colors border border-stone-200 shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-600" />
                      <span className="text-slate-500 font-medium">Direct Line:</span>
                    </div>
                    <span className="font-mono font-bold text-slate-900">{founder.formattedPhone}</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-stone-50 text-slate-800 transition-colors border border-stone-200 shadow-2xs"
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-slate-500 font-medium">Email:</span>
                    </div>
                    <span className="font-mono font-medium text-slate-900 truncate max-w-[200px]">
                      {founder.email}
                    </span>
                  </a>

                  {/* WhatsApp Direct Chat */}
                  <a
                    href={`https://wa.me/91${founder.phone}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md mt-1"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Chat Directly on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Support Bar */}
        <div className="mt-12 max-w-5xl mx-auto bg-slate-900 text-white rounded-2xl p-6 text-center space-y-2 border border-slate-800 shadow-lg">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Official Trade Inquiries: <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-amber-400 font-bold underline">{COMPANY_INFO.supportEmail}</a>
          </p>
          <p className="text-xs text-slate-400">
            Export Desk: {COMPANY_INFO.address.full}
          </p>
        </div>
      </div>
    </section>
  );
};
