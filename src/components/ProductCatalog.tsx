import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/company';
import {
  Search,
  SlidersHorizontal,
  Sparkles,
  MessageSquare,
  FileText,
  CheckCircle2,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  Eye,
  LayoutGrid,
  Table,
  Check,
  PackageCheck,
  Zap,
  Info
} from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onSelectForRFQ: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct, onSelectForRFQ }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [activeTag, setActiveTag] = useState<string>('all');

  const categories = ['All', 'Spices', 'Seeds', 'Powders', 'Plantation & Grains'];

  const quickFilterTags = [
    { label: 'All Items', tag: 'all' },
    { label: '🌟 Flagship Export', tag: 'flagship' },
    { label: '✨ 99.5%+ Sortex Cleaned', tag: 'sortex' },
    { label: '🌿 Whole Pods & Berries', tag: 'whole' },
    { label: '📦 Pulverized Powders', tag: 'powder' },
  ];

  // Filter products based on search, category, and tags
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.botanicalName && product.botanicalName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.hsCode.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        activeTag === 'all' ||
        (activeTag === 'flagship' && product.featured) ||
        (activeTag === 'sortex' && product.purity.includes('99')) ||
        (activeTag === 'whole' && product.forms.some((f) => f.toLowerCase().includes('whole'))) ||
        (activeTag === 'powder' && product.forms.some((f) => f.toLowerCase().includes('powder')));

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [selectedCategory, searchQuery, activeTag]);

  // Featured flagship 4 products
  const flagshipProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.featured).slice(0, 4);
  }, []);

  const getWhatsAppInquiryUrl = (product: Product) => {
    const text = encodeURIComponent(
      `Hello Harmain Import & Export, I would like to inquire about exporting "${product.name}" (${product.forms[0]}). Please share the latest FOB/CIF rates, lab specification sheet, and container loading details.`
    );
    return `https://wa.me/${COMPANY_INFO.whatsappPrimary}?text=${text}`;
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FAF8F5] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Premium Agro-Commodities Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Export Grade Indian Spices &amp; Seeds
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Direct farm gate sourcing from prime growing regions across India. Each consignment is machine cleaned, sortex sorted, lab tested, and packed to international phytosanitary standards.
          </p>
        </div>

        {/* 🌟 FLAGSHIP HARVEST SPOTLIGHT (Top 4 Crown Jewels) */}
        {selectedCategory === 'All' && searchQuery === '' && activeTag === 'all' && (
          <div className="mb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-stone-900 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl border border-slate-800">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  <span>Harvest Season 2026</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  Flagship Global Export Commodities
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                  India’s most demanded culinary and pharmaceutical spices, prepared for bulk containerized dispatch to Middle East, European, and American ports.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-xl backdrop-blur-sm self-start md:self-auto">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Certificate of Analysis with Every Shipment</span>
              </div>
            </div>

            {/* 4 Flagship Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {flagshipProducts.map((product) => (
                <div
                  key={product.id}
                  id={`flagship-card-${product.id}`}
                  className="group bg-slate-900/80 hover:bg-slate-850 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/60 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-amber-950/20"
                >
                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Category & Purity Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                        {product.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                        {product.purity.split(' ')[0]}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-base font-extrabold text-white font-heading group-hover:text-amber-300 transition-colors leading-snug">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-slate-300 italic truncate font-serif-display">
                        {product.botanicalName}
                      </p>
                    </div>
                  </div>

                  {/* Body Specs */}
                  <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{product.origin}</span>
                      </div>

                      <div className="bg-slate-950/80 rounded-lg p-2.5 border border-slate-800 space-y-1 text-xs">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-400">Moisture:</span>
                          <span className="font-semibold text-white">{product.moisture}</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-slate-400">HS Code:</span>
                          <span className="font-mono text-amber-400 font-bold">{product.hsCode.split('/')[0]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 space-y-2">
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="w-full py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Inspect Specs &amp; Forms</span>
                      </button>

                      <div className="grid grid-cols-2 gap-1.5">
                        <a
                          href={getWhatsAppInquiryUrl(product)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-1.5 px-2 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366] text-emerald-300 hover:text-white border border-[#25D366]/40 text-[11px] font-bold flex items-center justify-center gap-1 transition-all"
                        >
                          <MessageSquare className="w-3 h-3 fill-current" />
                          <span>WhatsApp</span>
                        </a>

                        <button
                          onClick={() => onSelectForRFQ(product.name)}
                          className="py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer border border-slate-700"
                        >
                          <FileText className="w-3 h-3 text-amber-400" />
                          <span>Add to RFQ</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 🔍 SEARCH & CATEGORY FILTER BAR */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-md mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? PRODUCTS.length
                    : PRODUCTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                      selectedCategory === cat
                        ? 'bg-slate-900 text-white shadow-md'
                        : 'bg-stone-100 hover:bg-stone-200 text-slate-700'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                        selectedCategory === cat
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-stone-200 text-slate-600'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input & View Switcher */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search spice, HS code, origin..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-900"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Card Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'table' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                  }`}
                  title="Technical Specification Table"
                >
                  <Table className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Filter Tags Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-stone-100 scrollbar-none">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1 flex-shrink-0">
              <SlidersHorizontal className="w-3 h-3 text-amber-600" />
              <span>Quick Filter:</span>
            </span>
            {quickFilterTags.map((filter) => (
              <button
                key={filter.tag}
                onClick={() => setActiveTag(filter.tag)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeTag === filter.tag
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                    : 'bg-stone-100 text-slate-600 hover:bg-stone-200 border border-transparent'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* 📦 PRODUCT DISPLAY: GRID VIEW vs TABLE VIEW */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 space-y-4">
            <Info className="w-10 h-10 text-amber-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No matching commodities found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Try adjusting your search terms or category filters. We also handle custom procurement of rare agro-commodities on request.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setActiveTag('all');
              }}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* MAGAZINE GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Photo & Origin Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-500/30 shadow-xs">
                      {product.category}
                    </span>
                    {product.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
                        <Sparkles className="w-3 h-3 fill-current" />
                        <span>Top Export</span>
                      </span>
                    )}
                  </div>

                  {/* Harvest Season Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1 border border-white/10">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      <span>{product.harvestSeason.split('–')[0]}</span>
                    </span>
                  </div>

                  {/* Product Title Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors drop-shadow-xs">
                      {product.name}
                    </h3>
                    {product.botanicalName && (
                      <p className="text-xs text-stone-300 italic font-serif-display drop-shadow-xs">
                        {product.botanicalName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  
                  {/* Origin and Description */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60 w-fit">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span>Origin: {product.origin}</span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    {/* Commercial Available Forms */}
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Available Commercial Forms:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.forms.slice(0, 3).map((form, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-100 text-slate-800 text-[11px] font-medium border border-stone-200"
                          >
                            <Check className="w-3 h-3 text-amber-600 stroke-[3]" />
                            <span className="truncate max-w-[220px]">{form}</span>
                          </span>
                        ))}
                        {product.forms.length > 3 && (
                          <span className="px-2 py-1 rounded-md bg-amber-50 text-amber-800 text-[11px] font-bold">
                            +{product.forms.length - 3} more forms
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Spec Mini Highlights */}
                    <div className="grid grid-cols-2 gap-2 bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Purity:</span>
                        <span className="font-bold text-slate-900 text-xs truncate block">{product.purity}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase font-bold block">HS Code:</span>
                        <span className="font-mono font-bold text-amber-800 text-xs truncate block">{product.hsCode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-stone-200 space-y-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group/btn"
                    >
                      <Eye className="w-4 h-4 text-amber-400" />
                      <span>View Complete Lab Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={getWhatsAppInquiryUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span>WhatsApp Quote</span>
                      </a>

                      <button
                        onClick={() => onSelectForRFQ(product.name)}
                        className="py-2 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Add to RFQ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 📊 TECHNICAL COMMODITY SPECIFICATION MATRIX (Table View) */
          <div className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700 border-collapse">
                <thead className="bg-slate-900 text-white uppercase text-[11px] font-bold tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Commodity &amp; Botanical</th>
                    <th className="py-3.5 px-4">Origin Hub</th>
                    <th className="py-3.5 px-4">HS Code</th>
                    <th className="py-3.5 px-4">Purity &amp; Cleaning</th>
                    <th className="py-3.5 px-4">Moisture</th>
                    <th className="py-3.5 px-4">Available Forms</th>
                    <th className="py-3.5 px-4 text-right">Inquiry Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  {filteredProducts.map((product, idx) => (
                    <tr
                      key={product.id}
                      className={`hover:bg-amber-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'}`}
                    >
                      {/* Product Name */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-lg object-cover flex-shrink-0 border border-stone-300"
                          />
                          <div>
                            <span className="font-bold text-slate-900 text-xs block">{product.name}</span>
                            <span className="text-[11px] text-slate-500 italic font-serif-display">{product.botanicalName}</span>
                          </div>
                        </div>
                      </td>

                      {/* Origin */}
                      <td className="py-3 px-4 font-medium text-slate-800 max-w-[160px] truncate">
                        {product.origin}
                      </td>

                      {/* HS Code */}
                      <td className="py-3 px-4 font-mono font-bold text-amber-800">
                        {product.hsCode}
                      </td>

                      {/* Purity */}
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {product.purity.split(' ')[0]}
                        </span>
                      </td>

                      {/* Moisture */}
                      <td className="py-3 px-4 font-medium">
                        {product.moisture}
                      </td>

                      {/* Available Forms */}
                      <td className="py-3 px-4 max-w-[200px]">
                        <span className="text-xs text-slate-600 truncate block">
                          {product.forms[0]}
                        </span>
                        <span className="text-[10px] text-amber-700 font-semibold">
                          +{product.forms.length - 1} other forms
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => onSelectProduct(product)}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
                            title="View Specifications"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <a
                            href={getWhatsAppInquiryUrl(product)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors"
                            title="WhatsApp Inquiry"
                          >
                            <MessageSquare className="w-4 h-4 fill-current" />
                          </a>
                          <button
                            onClick={() => onSelectForRFQ(product.name)}
                            className="px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors cursor-pointer"
                          >
                            RFQ
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bottom Portfolio Banner CTA */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-3xl p-8 text-slate-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-black font-heading tracking-tight">
              Looking for Custom Agro-Commodity Sourcing or Private Labeling?
            </h3>
            <p className="text-slate-900 text-xs sm:text-sm font-medium max-w-2xl">
              We provide customized mesh pulverization, nitrogen-flushed retail pouch packing, and bespoke container stuffing according to your destination country&apos;s import protocols.
            </p>
          </div>

          <a
            id="catalog-custom-quote-btn"
            href="#rfq-calculator"
            className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg flex-shrink-0 cursor-pointer"
          >
            Calculate Container Quotation
          </a>
        </div>
      </div>
    </section>
  );
};
