import React from 'react';
import { ShieldCheck, Award, TrendingUp, Sparkles, Scale, Truck, CheckCircle2, Factory, Check } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: 'Direct Farm-Gate Sourcing',
      desc: 'We procure directly from verified spice grower cooperatives across Kerala, Karnataka, Andhra Pradesh, Gujarat, and Rajasthan, eliminating middlemen markups and ensuring seasonal freshness.'
    },
    {
      icon: <Factory className="w-6 h-6 text-amber-600" />,
      title: 'Advanced Sortex & Grading Facilities',
      desc: 'Multi-stage optical color sorters, magnetic destoners, aspiration separators, and steam sterilization ensure 99.5%+ minimum purity with zero foreign contaminants.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: 'Certified Lab Testing & COA',
      desc: 'Every export batch is tested for moisture, volatile oil content, pesticide residues (EU MRL limits), aflatoxins, Salmonella, and heavy metals with complete Certificate of Analysis provided.'
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: 'Strategic Port Multimodal Access',
      desc: 'Headquartered in Bengaluru with rapid direct container corridors to Chennai Port, Cochin Port, and JNPT Mumbai for swift weekly vessel departures worldwide.'
    },
    {
      icon: <Scale className="w-6 h-6 text-amber-600" />,
      title: 'Custom Packaging & OEM Private Label',
      desc: 'From 250g retail branded foil barrier pouches to 50kg export grade jute bags and vacuum hermetic liners, we tailor packaging to importer and supermarket requirements.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      title: 'Direct Founder Communication',
      desc: 'Work directly with founders Mudassir Ahmed and Naveed Khan for transparent pricing, real-time container dispatch updates, and dedicated 24/7 WhatsApp trade desk support.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#FAF8F5] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest border border-amber-300">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>The Harmain Quality Commitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Why Global Importers Choose Harmain
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            We bridge authentic Indian agro heritage with rigid international trade compliance, offering buyers guaranteed consistency, transparent pricing, and seamless door-to-port deliveries.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 hover:border-amber-400 hover:shadow-xl transition-all duration-300 space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-200 group-hover:bg-amber-50 group-hover:border-amber-200 flex items-center justify-center transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-black font-heading text-slate-900 group-hover:text-amber-800 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trade Guarantee Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>International Buyers Service</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
              Need Verified Pre-Shipment Laboratory Samples?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We dispatch international courier samples with complete HPLC &amp; Gas Chromatography lab reports within 48 hours for authorized commercial buyers and spice distributors.
            </p>
          </div>
          
          <a
            id="whyus-request-samples-btn"
            href="#rfq-calculator"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-lg transition-all"
          >
            Request Export Lab Samples
          </a>
        </div>
      </div>
    </section>
  );
};
