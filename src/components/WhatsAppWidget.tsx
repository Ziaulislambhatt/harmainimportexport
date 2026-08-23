import React, { useState } from 'react';
import { FOUNDERS, COMPANY_INFO } from '../data/company';
import { MessageSquare, X, Send, Sparkles, Phone, CheckCircle2, ChevronRight } from 'lucide-react';

interface WhatsAppWidgetProps {
  isOpen?: boolean;
  onClose?: () => void;
  onToggle?: () => void;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  onToggle: controlledOnToggle
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [selectedFounderIndex, setSelectedFounderIndex] = useState(0);
  const [customText, setCustomText] = useState('');

  const isDrawerOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (controlledOnToggle) {
      controlledOnToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const currentFounder = FOUNDERS[selectedFounderIndex];

  const quickPrompts = [
    '👋 Hello! I would like to inquire about bulk spices export pricing.',
    '📦 I need to request pre-shipment lab samples for Cardamom & Turmeric.',
    '🚢 Please provide CIF quotation for 1x20ft container to our port.',
    '📋 What are your minimum order quantities (MOQ) and payment terms?'
  ];

  const handleSend = (textToSend?: string) => {
    const message = textToSend || customText || 'Hello Harmain Import & Export, I would like to discuss an export order.';
    const encoded = encodeURIComponent(message);
    const phone = currentFounder.phone;
    window.open(`https://wa.me/91${phone}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Expanded WhatsApp Modal / Drawer */}
      {isDrawerOpen && (
        <div
          id="whatsapp-chat-drawer"
          className="mb-3 w-[320px] sm:w-[360px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-scaleUp transition-all text-slate-900"
        >
          {/* Header */}
          <div className="bg-[#25D366] p-3 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-black/15 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 fill-current text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xs leading-tight font-heading text-white">Harmain Export Desk</h4>
                <div className="flex items-center gap-1 text-[10px] text-emerald-950 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-900 animate-pulse" />
                  <span>Founders Online Now</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-1 rounded-lg hover:bg-black/10 text-white transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3 space-y-3 max-h-[380px] overflow-y-auto bg-slate-50">
            {/* Choose Representative */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Select Founder to Chat With:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {FOUNDERS.map((founder, idx) => (
                  <button
                    key={founder.name}
                    onClick={() => setSelectedFounderIndex(idx)}
                    className={`p-2 rounded-lg text-left border transition-all flex flex-col justify-between cursor-pointer ${
                      selectedFounderIndex === idx
                        ? 'bg-emerald-50 border-[#25D366] shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <div className="w-6 h-6 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-900 truncate">
                        {founder.name.split(' ')[0]}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 truncate block">
                      {idx === 0 ? 'Founder' : 'Co-Founder'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Representative Info */}
            <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900 text-xs block">{currentFounder.name}</span>
                <span className="text-[10px] text-slate-500">{currentFounder.role}</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                +91 {currentFounder.phone}
              </span>
            </div>

            {/* Quick Inquiry Triggers */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Quick Inquiries:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-1.5 rounded-md bg-white border border-slate-200 text-xs text-slate-700 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-900 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate pr-1.5 text-[11px]">{prompt}</span>
                  <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input Bar */}
          <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-1.5">
            <input
              type="text"
              placeholder={`Message ${currentFounder.name.split(' ')[0]}...`}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              className="flex-1 px-2.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:bg-white text-slate-900"
            />
            <button
              onClick={() => handleSend()}
              className="p-1.5 rounded-lg bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors flex-shrink-0 shadow-xs cursor-pointer"
              title="Open in WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        id="floating-whatsapp-trigger-btn"
        onClick={handleToggle}
        className="group relative flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl transition-all duration-200 hover:scale-105 cursor-pointer"
        aria-label="Chat on WhatsApp with Founders"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-[#25D366]" />
        </div>
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
};

