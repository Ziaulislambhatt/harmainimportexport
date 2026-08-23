import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, CheckCircle2, FileCheck, Award, Sparkles, Beaker, Check } from 'lucide-react';

export const QualityCertifications: React.FC = () => {
  const labParameters = [
    { title: 'Moisture Analysis', desc: 'Moisture controlled below 8-11% to prevent microbial degradation and mold growth during maritime shipping.' },
    { title: 'Volatile Essential Oils', desc: 'Gas chromatography tested for high aroma intensity, piperine, curcumin, and natural flavor compounds.' },
    { title: 'Aflatoxin & Ochratoxin', desc: 'Strict screening conforming to EU Regulation limits and US FDA food import tolerances.' },
    { title: 'Microbiological Testing', desc: 'Certified free from Salmonella, E. coli, yeasts, and pathogenic bacteria per batch.' },
    { title: 'Pesticide MRL Residue', desc: 'Tested against 400+ active compounds per global destination market compliance rules.' },
    { title: 'Physical Purity & Sortex', desc: 'Machine cleaned, de-stoned, metal filtered, and color sorted to 99.5%+ export purity.' }
  ];

  return (
    <section id="quality" className="py-16 sm:py-24 bg-[#FAF8F5] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-widest border border-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>International Compliance &amp; Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Quality Assurance &amp; Certifications
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Every shipment adheres to rigid international food safety benchmarks and statutory export regulations governing agro-commodities.
          </p>
        </div>

        {/* Certifications Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {COMPANY_INFO.exportCertifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs border border-amber-200">
                  <Award className="w-5 h-5" />
                </span>
                <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {cert.badge}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base font-heading">{cert.name}</h4>
                <p className="text-xs text-slate-500 font-mono mt-0.5">{cert.code}</p>
              </div>
            </div>
          ))}

          {/* Statutory COA Card */}
          <div className="bg-slate-950 text-white rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col justify-between space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center font-bold text-xs border border-slate-700">
                <FileCheck className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Statutory
              </span>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm sm:text-base font-heading">Certificate of Analysis (COA)</h4>
              <p className="text-xs text-slate-400 mt-0.5">Issued with every export container</p>
            </div>
          </div>
        </div>

        {/* Laboratory Testing Protocols */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Beaker className="w-4 h-4" />
                <span>Rigorous Batch Testing Protocol</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
                Parameters Verified Before Container Stuffing
              </h3>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 flex items-center gap-1.5 flex-shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>NABL Accredited Lab Testing</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labParameters.map((param, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{param.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{param.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
