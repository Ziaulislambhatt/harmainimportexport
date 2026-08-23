import React, { useState } from 'react';
import { TRADE_ROUTES } from '../data/company';
import { Ship, Plane, Anchor, Clock, Globe, Shield, Package, ArrowRight, CheckCircle2, Check } from 'lucide-react';

export const GlobalLogistics: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<number>(0);

  return (
    <section id="logistics" className="py-16 sm:py-24 bg-white relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-widest border border-blue-200">
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>Worldwide Multimodal Supply Chain</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Export Logistics &amp; Shipping Grid
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Direct dispatch from major Indian gateway sea ports and air cargo terminals worldwide with complete phytosanitary, fumigation, and cold/dry container monitoring.
          </p>
        </div>

        {/* 3 Logistic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Ocean Freight */}
          <div className="bg-[#FAF8F5] border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-blue-400 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">Container Lines</span>
                <h3 className="text-lg font-black font-heading text-slate-900">Ocean Container Freight</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Full Container Load (20&apos; FCL &amp; 40&apos; HC) and LCL consolidated shipments via premier global shipping lines (Maersk, MSC, CMA CGM, Hapag-Lloyd).
            </p>
            <ul className="text-xs text-slate-700 space-y-2 pt-3 border-t border-stone-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Desiccant silica gel packets in all containers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Kraft paper lined interior container walls</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>FOB Chennai, Cochin, and Nhava Sheva JNPT</span>
              </li>
            </ul>
          </div>

          {/* Air Cargo */}
          <div className="bg-[#FAF8F5] border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-amber-400 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                <Plane className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">Speed Air</span>
                <h3 className="text-lg font-black font-heading text-slate-900">Express Air Cargo</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              High-speed transit for high-value spices (Cardamom, Saffron), urgent buyer replenishment orders, and pre-shipment approved test samples.
            </p>
            <ul className="text-xs text-slate-700 space-y-2 pt-3 border-t border-stone-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Direct flights from Kempegowda BLR Airport</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>24 to 72 hours transit to Middle East &amp; Europe</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>DHL / FedEx global courier for verified samples</span>
              </li>
            </ul>
          </div>

          {/* Export Compliance & Inspection */}
          <div className="bg-[#FAF8F5] border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-emerald-400 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">Port Clearance</span>
                <h3 className="text-lg font-black font-heading text-slate-900">100% Export Documentation</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Complete regulatory, phytosanitary, certificate of origin, fumigation, and custom chamber clearance handled end-to-end.
            </p>
            <ul className="text-xs text-slate-700 space-y-2 pt-3 border-t border-stone-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Certificate of Analysis (COA) per batch</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Methyl Bromide / Phosphine Fumigation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>SGS / Bureau Veritas third-party testing on request</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Trade Routes Interactive Map / Dashboard */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-amber-400 text-xs font-black uppercase tracking-widest block mb-1">
                GLOBAL SHIPPING LANES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                Transit Timelines by Destination Port
              </h3>
            </div>

            {/* Region Switcher Pills */}
            <div className="flex flex-wrap gap-2">
              {TRADE_ROUTES.map((route, idx) => (
                <button
                  key={route.region}
                  onClick={() => setSelectedRoute(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedRoute === idx
                      ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {route.region}
                </button>
              ))}
            </div>
          </div>

          {/* Active Route Details */}
          {TRADE_ROUTES[selectedRoute] && (
            <div className="pt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              <div className="lg:col-span-2 space-y-5">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Primary Discharge Countries Served:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {TRADE_ROUTES[selectedRoute].countries.map((country, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
                      >
                        📍 {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-1">
                    <div className="flex items-center gap-2 text-blue-400 text-xs font-bold mb-1">
                      <Ship className="w-4 h-4" />
                      <span>Ocean Transit (FCL / LCL)</span>
                    </div>
                    <p className="text-2xl font-black text-white font-mono">
                      {TRADE_ROUTES[selectedRoute].transitTimeSea}
                    </p>
                    <span className="text-xs text-slate-400 block">Weekly direct container departures</span>
                  </div>

                  <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-1">
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                      <Plane className="w-4 h-4" />
                      <span>Air Express Transit</span>
                    </div>
                    <p className="text-2xl font-black text-white font-mono">
                      {TRADE_ROUTES[selectedRoute].transitTimeAir}
                    </p>
                    <span className="text-xs text-slate-400 block">Door-to-airport customs handled</span>
                  </div>
                </div>
              </div>

              {/* Port Hub Highlights */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
                  <Anchor className="w-4 h-4 text-amber-400" />
                  <span>Key Discharge Hubs:</span>
                </div>
                <div className="space-y-2">
                  {TRADE_ROUTES[selectedRoute].keyPorts.map((port, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 text-xs text-slate-200 border border-slate-800"
                    >
                      <span className="font-semibold truncate">{port}</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full font-bold border border-emerald-800/40">
                        Active Port
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href="#rfq-calculator"
                  className="w-full py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-colors mt-3"
                >
                  <span>Check Freight Rate for this Route</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
