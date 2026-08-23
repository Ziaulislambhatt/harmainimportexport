/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { WhyUsSection } from './components/WhyUsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { GlobalLogistics } from './components/GlobalLogistics';
import { QualityCertifications } from './components/QualityCertifications';
import { FoundersSection } from './components/FoundersSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [selectedProductForRFQ, setSelectedProductForRFQ] = useState<string>('');
  const [isWhatsAppDrawerOpen, setIsWhatsAppDrawerOpen] = useState<boolean>(false);

  const handleSelectProductForRFQ = (productName: string) => {
    setSelectedProductForRFQ(productName);
  };

  const handleToggleWhatsAppDrawer = () => {
    setIsWhatsAppDrawerOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Top Announcement & Direct Contacts Bar */}
      <TopBar />

      {/* Primary Sticky Header */}
      <Navbar
        onOpenWhatsAppDrawer={() => setIsWhatsAppDrawerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Dynamic Auto-Advancing Hero Section */}
        <HeroSlider
          onOpenWhatsAppDrawer={() => setIsWhatsAppDrawerOpen(true)}
        />

        {/* Why Choose Harmain Import & Export */}
        <WhyUsSection />

        {/* 16+ Spice & Agro-Commodities Product Catalog */}
        <ProductCatalog
          onSelectForRFQ={handleSelectProductForRFQ}
        />

        {/* Worldwide Multimodal Sea & Air Logistics */}
        <GlobalLogistics />

        {/* Compliance, Lab Testing & Certifications */}
        <QualityCertifications />

        {/* Executive Founders: Mudassir Ahmed M & Naveed Khan */}
        <FoundersSection
          onOpenWhatsAppDrawer={() => setIsWhatsAppDrawerOpen(true)}
        />

        {/* Interactive Export RFQ & Quotation Estimator */}
        <QuoteCalculator
          initialProduct={selectedProductForRFQ}
        />

        {/* Bengaluru HQ Office, Map & Contact Desk */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating 1-Click WhatsApp Chat Widget */}
      <WhatsAppWidget
        isOpen={isWhatsAppDrawerOpen}
        onClose={() => setIsWhatsAppDrawerOpen(false)}
        onToggle={handleToggleWhatsAppDrawer}
      />
    </div>
  );
}
