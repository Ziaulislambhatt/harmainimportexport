import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import {
  FileText,
  Send,
  MessageSquare,
  CheckCircle2,
  Calculator,
  ArrowRight,
  Sparkles,
  Package,
  Ship,
  Boxes,
  Truck,
  ShieldCheck,
  Check
} from 'lucide-react';
import { RFQFormState } from '../types';

interface QuoteCalculatorProps {
  initialProduct?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialProduct }) => {
  const [formData, setFormData] = useState<RFQFormState>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    product: initialProduct || PRODUCTS[0].name,
    quantity: '1x20ft FCL (Approx. 16 - 18 MT)',
    packaging: '25kg Export Jute Bags with Poly-liner',
    incoterm: 'CIF (Cost, Insurance & Freight to Discharge Port)',
    destinationPort: 'Jebel Ali / Rotterdam / New York / Singapore / Custom',
    additionalNotes: ''
  });

  const [containerType, setContainerType] = useState<'20fcl' | '40hc' | 'air'>('20fcl');
  const [bagWeightKg, setBagWeightKg] = useState<number>(25);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update selected product when prop changes
  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  // Derived container metrics
  const containerMetrics = {
    '20fcl': {
      title: '20ft FCL Ocean Container',
      tonnage: '16 – 18 Metric Tons',
      estimatedBags: Math.round(17000 / bagWeightKg),
      cbm: 'Approx. 28 – 32 CBM',
      bestFor: 'High-density whole spices (Turmeric, Pepper, Cumin, Cloves)'
    },
    '40hc': {
      title: '40ft High Cube Ocean Container',
      tonnage: '26 – 28 Metric Tons',
      estimatedBags: Math.round(27000 / bagWeightKg),
      cbm: 'Approx. 65 – 70 CBM',
      bestFor: 'Voluminous spices & seeds (Chillies, Coriander, Herbs, Rice)'
    },
    'air': {
      title: 'Express Air Cargo & Samples',
      tonnage: '100 kg – 2,000 kg',
      estimatedBags: Math.round(500 / bagWeightKg),
      cbm: 'Custom Air Freight Pallets',
      bestFor: 'High-value Green Cardamom, Saffron, Urgency Orders, Testing Samples'
    }
  };

  const packagingOptions = [
    '25kg Export Grade Jute Bags with Poly-liner',
    '50kg Polypropylene (PP) Woven Sacks with Inner PE Liner',
    '25kg Multi-wall Kraft Paper Sacks',
    'Vacuum-Sealed High-Barrier Foil Sacks (10kg / 20kg)',
    'Heavy-Duty Corrugated Master Cartons',
    'Custom OEM Retail Stand-up Pouches (250g - 1kg)'
  ];

  const incotermOptions = [
    'CIF (Cost, Insurance & Freight to Destination Port)',
    'FOB (Free on Board - Chennai / JNPT / Cochin Sea Ports)',
    'CFR (Cost and Freight)',
    'EXW (Ex-Works Bengaluru Warehouse)',
    'DDP (Delivered Duty Paid - Selected Countries)'
  ];

  const generateWhatsAppMessage = () => {
    const text =
      `*EXPORT RFQ INQUIRY - HARMAIN IMPORT & EXPORT*\n\n` +
      `👤 *Buyer Name:* ${formData.fullName || 'Procurement Manager'}\n` +
      `🏢 *Company:* ${formData.companyName || 'Not specified'}\n` +
      `🌍 *Destination Port/Country:* ${formData.country || 'Global Port'}\n` +
      `📦 *Commodity:* ${formData.product}\n` +
      `🚢 *Container/Volume:* ${containerMetrics[containerType].title} (${formData.quantity})\n` +
      `🛍️ *Packaging:* ${formData.packaging}\n` +
      `📑 *Incoterm:* ${formData.incoterm}\n` +
      `📧 *Email:* ${formData.email || 'Provided on chat'}\n` +
      `📞 *Phone/WhatsApp:* ${formData.phone || 'Direct'}\n` +
      `💬 *Specific Requirements:* ${formData.additionalNotes || 'Please send FOB / CIF proforma invoice & lab COA.'}`;
    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="rfq-calculator" className="py-16 sm:py-24 bg-slate-950 text-white relative border-b border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Commercial Export Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
            Container Capacity &amp; RFQ Calculator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Estimate your ocean container stuffing weights, choose packing configurations, and generate an official proforma quote request with direct response in under 4 hours.
          </p>
        </div>

        {/* 2-Column Calculator + Live RFQ Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Container Load Visualizer + Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Container Mode Selector Tabs */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Ship className="w-4 h-4" />
                  <span>Step 1: Choose Container / Shipment Size</span>
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Ocean &amp; Air Logistics</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setContainerType('20fcl');
                    setFormData((p) => ({ ...p, quantity: '1x20ft FCL (Approx. 16 – 18 MT)' }));
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    containerType === '20fcl'
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-black uppercase text-amber-400">20ft FCL</span>
                  <span className="text-sm font-bold text-white mt-1">16–18 MT</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Heavy Spices</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setContainerType('40hc');
                    setFormData((p) => ({ ...p, quantity: '1x40ft HC (Approx. 26 – 28 MT)' }));
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    containerType === '40hc'
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-black uppercase text-amber-400">40ft HC</span>
                  <span className="text-sm font-bold text-white mt-1">26–28 MT</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">High Volume</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setContainerType('air');
                    setFormData((p) => ({ ...p, quantity: 'Air Cargo / Lab Samples (100kg - 2,000kg)' }));
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    containerType === 'air'
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs font-black uppercase text-amber-400">Air Cargo</span>
                  <span className="text-sm font-bold text-white mt-1">Express</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Cardamom &amp; Samples</span>
                </button>
              </div>

              {/* Dynamic Container Load Calculation Card */}
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{containerMetrics[containerType].title}</span>
                  <span className="text-amber-400 font-mono font-bold">{containerMetrics[containerType].tonnage}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Capacity (~Bags):</span>
                    <span className="text-base font-bold text-white font-mono">
                      ~{containerMetrics[containerType].estimatedBags} bags
                    </span>
                    <span className="text-[10px] text-slate-400 block">({bagWeightKg}kg bags)</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Volume Cubage:</span>
                    <span className="text-xs font-bold text-white mt-1 block">
                      {containerMetrics[containerType].cbm}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Loading Port:</span>
                    <span className="text-xs font-bold text-emerald-400 mt-1 block">
                      Chennai / JNPT / Cochin
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic">
                  💡 {containerMetrics[containerType].bestFor}
                </p>
              </div>
            </div>

            {/* Step 2: Quotation Form Submission */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">Quotation Request Registered</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <span className="text-amber-400 font-semibold">{formData.fullName}</span>. To receive immediate CIF/FOB pricing and batch analysis on your phone, click below to open WhatsApp:
                  </p>

                  <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      id="rfq-direct-whatsapp-send-btn"
                      href={`https://wa.me/${COMPANY_INFO.whatsappPrimary}?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Chat with Mudassir (Founder)</span>
                    </a>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappSecondary}?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-all border border-slate-700"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Chat with Naveed (Co-Founder)</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline block mx-auto pt-4 cursor-pointer"
                  >
                    ← Configure another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Step 2: Enter Commodity &amp; Buyer Details
                    </span>
                    <span className="text-[11px] text-slate-400">All fields confidential</span>
                  </div>

                  {/* Commodity & Incoterm */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Select Spice Commodity *
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Incoterm Pricing *
                      </label>
                      <select
                        value={formData.incoterm}
                        onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {incotermOptions.map((inc, i) => (
                          <option key={i} value={inc}>
                            {inc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Packaging & Discharge Port */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Packaging Configuration *
                      </label>
                      <select
                        value={formData.packaging}
                        onChange={(e) => {
                          setFormData({ ...formData, packaging: e.target.value });
                          if (e.target.value.includes('50kg')) setBagWeightKg(50);
                          else if (e.target.value.includes('10kg')) setBagWeightKg(10);
                          else setBagWeightKg(25);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        {packagingOptions.map((pkg, i) => (
                          <option key={i} value={pkg}>
                            {pkg}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Discharge Port / Country *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Dubai (Jebel Ali), Netherlands (Rotterdam)"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Buyer Name / Representative *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Michael Thorne"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Company Name *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Global Foods Trading Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Official Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="procurement@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="+971 50 1234567 / +1..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Specific Quality Parameters / Target Price / Private Label Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need min 4.5% Curcumin Salem turmeric; 8mm green cardamom; retail pouch private labeling..."
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="submit"
                      id="submit-rfq-btn"
                      className="w-full py-3 px-5 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg"
                    >
                      <FileText className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                      <span>Submit Quotation Request</span>
                    </button>

                    <a
                      id="whatsapp-rfq-btn"
                      href={`https://wa.me/${COMPANY_INFO.whatsappPrimary}?text=${generateWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Send Direct via WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Live Proforma Summary Dossier & Founders Hotline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Dossier Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-6 border border-slate-800 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Live Export Quotation Summary
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 font-bold">
                  Verified Exporter
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-850">
                  <span className="text-slate-400">Commodity:</span>
                  <span className="font-bold text-white text-right truncate max-w-[220px]">{formData.product}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-850">
                  <span className="text-slate-400">Volume &amp; Mode:</span>
                  <span className="font-semibold text-amber-400 text-right">{formData.quantity}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-850">
                  <span className="text-slate-400">Packaging:</span>
                  <span className="font-medium text-slate-200 text-right truncate max-w-[220px]">{formData.packaging}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-850">
                  <span className="text-slate-400">Incoterm:</span>
                  <span className="font-medium text-white text-right">{formData.incoterm.split('(')[0]}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-850">
                  <span className="text-slate-400">Discharge Hub:</span>
                  <span className="font-semibold text-emerald-400 text-right">{formData.country || 'Destination Port'}</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Statutory Inclusions in Proforma:</span>
                </div>
                <ul className="text-slate-400 text-[11px] space-y-1 list-disc list-inside">
                  <li>Certificate of Origin (Chamber of Commerce)</li>
                  <li>Phytosanitary &amp; Methyl Bromide Fumigation Certificate</li>
                  <li>Independent Lab COA (Moisture, Purity &amp; Curcumin / Piperine)</li>
                  <li>Complete Bill of Lading &amp; Commercial Export Packing List</li>
                </ul>
              </div>
            </div>

            {/* Direct Executive Hotline Box */}
            <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Immediate Trade Desk WhatsApp Connect</span>
              </h4>

              <div className="space-y-3">
                {/* Founder */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-white text-xs sm:text-sm block">Mudassir Ahmed M</span>
                    <span className="text-[11px] text-amber-400 font-semibold block">Founder &amp; Export Director</span>
                    <span className="text-slate-400 font-mono text-xs">+91 96866 69222</span>
                  </div>
                  <a
                    href="https://wa.me/919686669222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Co-Founder */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-bold text-white text-xs sm:text-sm block">Naveed Khan</span>
                    <span className="text-[11px] text-amber-400 font-semibold block">Co-Founder &amp; Trade Head</span>
                    <span className="text-slate-400 font-mono text-xs">+91 97387 62664</span>
                  </div>
                  <a
                    href="https://wa.me/919738762664"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs flex items-center gap-1 shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
