import React from 'react';
import { Product } from '../types';
import {
  X,
  MessageSquare,
  FileText,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  PackageCheck,
  Sparkles,
  Calendar,
  Layers,
  Award,
  Check,
  Clock,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForRFQ: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onSelectForRFQ }) => {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Harmain Import & Export, I would like to inquire about importing "${product.name}" (${product.forms[0]}). Please provide the latest FOB / CIF quotation, minimum order quantity, and laboratory COA analysis.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div
        id="product-detail-modal"
        className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-stone-200 transition-all transform text-slate-900 my-8 max-h-[92vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md transition-colors cursor-pointer shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Image Banner */}
        <div className="relative h-60 sm:h-72 w-full bg-slate-950 flex-shrink-0 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          {/* Banner Overlays */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
              {product.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 text-xs font-bold border border-emerald-500/30">
              {product.purity.split(' ')[0]} Purity
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
            <div className="flex items-center gap-2 text-xs text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Harvest Period: {product.harvestSeason}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">{product.name}</h3>
            {product.botanicalName && (
              <p className="text-xs sm:text-sm text-stone-300 italic font-serif-display">
                Botanical Classification: {product.botanicalName}
              </p>
            )}
          </div>
        </div>

        {/* Modal Body Specs (Scrollable) */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Commodity Overview &amp; Terroir
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Technical Parameter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-2xl border border-stone-200">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Origin:</span>
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-900">
                <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span className="truncate">{product.origin.split(',')[0]}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">HS Code:</span>
              <span className="font-mono text-xs font-bold text-amber-800 block">{product.hsCode}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Purity:</span>
              <span className="text-xs font-bold text-emerald-800 block">{product.purity}</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Max Moisture:</span>
              <span className="text-xs font-bold text-slate-900 block">{product.moisture}</span>
            </div>
          </div>

          {/* Available Forms */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Standard Commercial Export Forms
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.forms.map((form, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-semibold text-slate-800"
                >
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3] flex-shrink-0" />
                  <span>{form}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Packaging & Logistics */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Standard Export Packaging Options
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.packaging.map((pack, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/50 border border-amber-200 text-xs font-medium text-amber-950"
                >
                  <PackageCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{pack}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Quality Guarantee Note */}
          {product.notes && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1 text-xs text-emerald-950">
              <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Export Quality &amp; Compliance Guarantee</span>
              </div>
              <p className="text-emerald-800 leading-relaxed">{product.notes}</p>
            </div>
          )}
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-stone-100 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Dispatched via: <span className="font-semibold text-slate-800">Nhava Sheva JNPT / Chennai / Cochin / BLR Air Cargo</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              id="modal-whatsapp-inquire-btn"
              href={`https://wa.me/${COMPANY_INFO.whatsappPrimary}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              id="modal-rfq-btn"
              onClick={() => {
                onSelectForRFQ(product.name);
                onClose();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-md cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Add to RFQ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
