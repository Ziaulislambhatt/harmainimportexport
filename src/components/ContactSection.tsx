import React, { useState } from 'react';
import { COMPANY_INFO, FOUNDERS } from '../data/company';
import { MapPin, Mail, Phone, Clock, MessageSquare, Send, CheckCircle2, Globe, Building2, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_INFO.whatsappPrimary}?text=${encodeURIComponent(
    `Hello Harmain Import & Export, I am reaching out from your website contact page regarding an export inquiry.`
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest border border-amber-300">
            <Building2 className="w-3.5 h-3.5 text-amber-700" />
            <span>Headquarters &amp; Export Office</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 tracking-tight">
            Connect With Our Global Trade Desk
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Visit our registered corporate office in Bengaluru or connect directly with our founders on WhatsApp for immediate export pricing and container bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office & Founders Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Address Card */}
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 border border-amber-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold font-heading text-slate-900 text-base">Registered Corporate Office</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    2nd floor No.7, 9th Main Road,<br />
                    New Gurappana Palya, 1st Stage, BTM 1st Stage,<br />
                    <span className="font-bold text-slate-900">Bengaluru 560029, Karnataka, INDIA</span>
                  </p>
                </div>
              </div>

              {/* Support Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-200">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 border border-blue-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-slate-900 text-sm">Official Support Email</h3>
                  <a
                    id="contact-support-email"
                    href={`mailto:${COMPANY_INFO.supportEmail}`}
                    className="text-xs sm:text-sm text-amber-700 hover:text-amber-800 font-bold underline block mt-0.5"
                  >
                    {COMPANY_INFO.supportEmail}
                  </a>
                </div>
              </div>

              {/* Export Desk Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-200">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-200">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-slate-900 text-sm">Operating &amp; Dispatch Hours</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                    {COMPANY_INFO.operatingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Founders Contact Box */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Founders&apos; Direct Phone Lines</span>
              </h3>

              {FOUNDERS.map((founder, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-amber-300">{founder.name}</span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{founder.role.split('&')[0]}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                    <a href={`tel:+91${founder.phone}`} className="hover:text-amber-400 font-mono font-bold text-xs">
                      📞 {founder.formattedPhone}
                    </a>
                    <a href={`mailto:${founder.email}`} className="hover:text-amber-400 truncate max-w-[200px] text-xs">
                      ✉️ {founder.email}
                    </a>
                  </div>
                </div>
              ))}

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md mt-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Connect on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map & Message Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* Embedded Location Map */}
            <div className="bg-[#FAF8F5] rounded-3xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Location Map: BTM 1st Stage, Bengaluru, India
                </span>
                <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-200">
                  Export Operations Hub
                </span>
              </div>
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-stone-200 shadow-inner">
                <iframe
                  title="Harmain Import & Export Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7512702283995!2d77.5996!3d12.9237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150882e3b2e5%3A0x7d87ef87f0b5d929!2sNew%20Gurappanapalya%2C%20BTM%201st%20Stage%2C%20Bengaluru%2C%20Karnataka%20560029!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-lg">
              <h3 className="text-lg font-black font-heading text-slate-900 mb-4">
                Send a Message to Our International Trade Desk
              </h3>

              {formSubmitted ? (
                <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold text-emerald-900 text-base">Message Received</h4>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    Our team will respond to your registered email ({formData.email}) or phone ({formData.phone}) within 4 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-emerald-800 underline cursor-pointer pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Your Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Email Address *</label>
                      <input
                        required
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Phone / WhatsApp *</label>
                      <input
                        required
                        type="text"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Subject / Commodity</label>
                      <input
                        type="text"
                        placeholder="e.g. 1 FCL Turmeric to Dubai"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Message *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Please share specific requirements, CIF port requirements, or sample requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-slate-900 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-3 px-5 rounded-xl bg-slate-950 hover:bg-slate-850 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Bengaluru Office</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
