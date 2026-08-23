import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquare, ShieldCheck, Sparkles, Anchor, CheckCircle2, Pause, Play, FileText, Globe2, Compass, Layers, Check } from 'lucide-react';

interface HeroSliderProps {
  onOpenWhatsAppDrawer: () => void;
  onSelectProductCategory?: (category: string) => void;
  onSelectProductQuickView?: (productId: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenWhatsAppDrawer }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideDuration = 6000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic
  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / slideDuration) * 100, 100);
      setProgress(currentProgress);
    }, 50);

    timerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, slideDuration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentSlide, isPlaying]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  const current = HERO_SLIDES[currentSlide];

  // Quick commodity shortcuts
  const quickSpices = [
    { name: 'Turmeric (Haldi)', id: 'turmeric', icon: '🟡', origin: 'Salem & Nizamabad' },
    { name: 'Black Pepper', id: 'black-pepper', icon: '⚫', origin: 'Malabar & Wayanad' },
    { name: 'Green Cardamom', id: 'cardamom', icon: '🟢', origin: 'Alleppey & Idukki' },
    { name: 'Red Chilli (Teja)', id: 'red-chilli', icon: '🌶️', origin: 'Guntur & Byadgi' },
    { name: 'Sortex Cumin', id: 'cumin-seeds', icon: '🌾', origin: 'Unjha, Gujarat' },
    { name: 'Whole Cloves', id: 'clove', icon: '🟤', origin: 'Lal Pari Grade' },
    { name: 'Specialty Coffee', id: 'coffee', icon: '☕', origin: 'Coorg & Chikmagalur' },
  ];

  return (
    <section id="hero" className="relative bg-[#0B0F17] text-white overflow-hidden flex flex-col justify-between border-b border-slate-800/80">
      {/* Background Images with Cross-Fade & Zoom Transition */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1), transform 8s ease-out',
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Multi-layered cinematic gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#090D14] via-[#090D14]/90 to-[#090D14]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090D14] via-transparent to-[#090D14]/60" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(217,119,6,0.15),transparent_60%)]" />
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Elegant Accent Tag */}
            <div className="inline-flex items-center gap-2.5 bg-amber-500/15 border border-amber-500/30 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="uppercase font-mono">{current.badge}</span>
              <span className="text-amber-500/60 font-normal">|</span>
              <span className="text-slate-300 font-normal">Direct from India</span>
            </div>

            {/* Slide Title */}
            <h1
              id="hero-main-title"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-heading text-white tracking-tight leading-[1.08]"
            >
              {current.title.split('&').map((part, index, arr) => (
                <React.Fragment key={index}>
                  {part}
                  {index < arr.length - 1 && (
                    <span className="text-amber-400 font-serif-display italic font-normal"> &amp; </span>
                  )}
                </React.Fragment>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {current.subtitle}
            </p>

            {/* Accent Feature Highlight */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-300 font-semibold bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm w-fit">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{current.accent}</span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="hero-explore-products-btn"
                href="#products"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-900/30 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore 16+ Export Commodities</span>
                <ArrowRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              </a>

              <a
                id="hero-rfq-btn"
                href="#rfq-calculator"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm border border-slate-700 backdrop-blur-md transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Instant Proforma RFQ</span>
              </a>

              <button
                id="hero-whatsapp-btn"
                onClick={onOpenWhatsAppDrawer}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Founders</span>
              </button>
            </div>

            {/* Key Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-800/80 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium">Spices Board &amp; FSSAI</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium">99.5%+ Sortex Purity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Anchor className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium">FCL &amp; LCL Containerized</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="font-medium">Direct to 28+ Nations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Flagship Harvest Showcase Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative bg-gradient-to-b from-slate-900/90 to-slate-950/95 backdrop-blur-2xl border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-400">
                    2026 Harvest Sourcing Live
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  Export Grade A1
                </span>
              </div>

              {/* Product Preview Image & Specs */}
              <div className="relative h-44 rounded-2xl overflow-hidden border border-slate-800 group">
                <img
                  src={PRODUCTS[0].image}
                  alt="Salem Turmeric"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">Flagship Commodity</span>
                    <h4 className="text-lg font-bold text-white font-heading">Salem Golden Turmeric</h4>
                    <p className="text-xs text-slate-300">Curcumin 3.5% – 5.2% | Salem, Tamil Nadu</p>
                  </div>
                  <a
                    href="#products"
                    className="p-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors"
                    title="View Product"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Live Port Loading Matrix */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Primary Loading Ports:</span>
                  <span className="font-semibold text-white">Chennai, JNPT Mumbai, Cochin</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Container Packaging:</span>
                  <span className="font-semibold text-amber-400">25kg / 50kg Jute, PP &amp; Vacuum Sacks</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Incoterms Available:</span>
                  <span className="font-semibold text-white">FOB, CIF, CFR, EXW</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">Direct Founder Response:</span>
                  <span className="font-semibold text-emerald-400">&lt; 4 Hours with Proforma</span>
                </div>
              </div>

              {/* Direct Founder WhatsApp Action */}
              <button
                onClick={onOpenWhatsAppDrawer}
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat with Mudassir &amp; Naveed on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Commodity Selectors Ribbon */}
        <div className="mt-10 pt-6 border-t border-slate-800/70">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Quick Commodity Navigator:</span>
            </span>
            <a href="#products" className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1">
              <span>View All 16 Commodities</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {quickSpices.map((spice) => (
              <a
                key={spice.id}
                href={`#product-card-${spice.id}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-amber-500/20 text-slate-200 hover:text-amber-300 border border-slate-800 hover:border-amber-500/40 transition-all text-xs font-semibold flex-shrink-0 cursor-pointer shadow-sm group"
              >
                <span className="text-sm">{spice.icon}</span>
                <div className="text-left">
                  <span className="font-bold block leading-tight group-hover:text-amber-400">{spice.name}</span>
                  <span className="text-[10px] text-slate-400 block font-normal leading-tight">{spice.origin}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Slider Controls & Progress Bar */}
      <div className="relative z-10 bg-[#070A0F] border-t border-slate-800/90 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Slide Navigation Dots / Badges */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(idx);
                  setProgress(0);
                }}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  idx === currentSlide
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${idx === currentSlide ? 'bg-amber-400 animate-pulse' : 'bg-slate-600'}`} />
                <span className="truncate max-w-[140px]">{slide.badge}</span>
              </button>
            ))}
          </div>

          {/* Progress Bar & Controls */}
          <div className="flex items-center gap-4">
            {/* Animated Progress Bar */}
            <div className="w-24 sm:w-36 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
