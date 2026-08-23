import { Founder, TradeRoute } from '../types';

export const COMPANY_INFO = {
  name: 'Harmain Import & Export',
  legalName: 'Harmain Import & Export Private Limited',
  tagline: 'Bridging Premium Indian Agro-Commodities with Global Markets',
  establishedYear: '2021',
  supportEmail: 'Naveed.khan@harmainimportexport.com',
  officialEmail: 'info@harmainimportexport.com',
  address: {
    line1: '2nd floor No.7, 9th Main Road',
    line2: 'New Gurappana Palya, 1st Stage, BTM 1st Stage',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560029',
    country: 'INDIA',
    full: '2nd floor No.7, 9th Main Road, New Gurappana Palya, 1st Stage, BTM 1st Stage, Bengaluru 560029 INDIA'
  },
  operatingHours: 'Mon – Sat: 09:00 AM – 07:00 PM IST (24/7 WhatsApp Export Desk)',
  whatsappPrimary: '919686669222',
  whatsappSecondary: '919738762664',
  stats: [
    { label: 'Export Destinations', value: '28+', suffix: 'Countries' },
    { label: 'Annual Tonnage', value: '15,000+', suffix: 'Metric Tons' },
    { label: 'Product Quality', value: '99.9%', suffix: 'Sortex Grade' },
    { label: 'Client Retention', value: '98%', suffix: 'Long-term Partners' }
  ],
  exportCertifications: [
    { name: 'Spices Board of India', code: 'Registered Exporter', badge: 'Apex Quality' },
    { name: 'FSSAI Certified', code: 'Central Licensing Authority', badge: 'Food Safety' },
    { name: 'APEDA Member', code: 'Agricultural & Processed Food', badge: 'Govt. of India' },
    { name: 'ISO 22000:2018', code: 'Food Safety Management System', badge: 'Global Standard' },
    { name: 'HACCP Compliant', code: 'Hazard Analysis Critical Control', badge: 'Certified' },
    { name: 'Halal Certified', code: '100% Permissible & Sharia Compliant', badge: 'Gulf/SE Asia' },
    { name: 'Phytosanitary Certified', code: 'Plant Quarantine & Fumigation', badge: 'Customs Ready' }
  ]
};

export const FOUNDERS: Founder[] = [
  {
    name: 'Mudassir Ahmed M',
    role: 'Founder & Managing Director',
    phone: '9686669222',
    formattedPhone: '+91 9686669222',
    email: 'mudassirm055@gmail.com',
    coatColor: 'Navy / Black',
    bio: 'Visionary entrepreneur spearheading international trade relations, bulk procurement strategy, and corporate partnerships across the Middle East, Europe, and Asia-Pacific. Committed to uncompromising quality and ethical Indian farmer partnerships.',
    focus: ['International Business Strategy', 'Key Client Partnerships', 'Financial Structuring & Trade Credits', 'Global Supply Chain Architecture'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Naveed Khan',
    role: 'Co-Founder & Head of Global Operations',
    phone: '9738762664',
    formattedPhone: '+91 9738762664',
    email: 'nknaveedkhan777@gmail.com',
    coatColor: 'Maroon / Red',
    bio: 'Dynamic trade strategist managing end-to-end farm procurement, rigorous multi-stage laboratory quality inspections, customs clearance, and multi-modal container logistics to ensure on-time delivery across global sea and air ports.',
    focus: ['Farm Procurement & Sortex Grading', 'Phytosanitary & Lab Testing', 'Export Ocean & Air Freight Logistics', 'Customer Support & WhatsApp Desk'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  }
];

export const TRADE_ROUTES: TradeRoute[] = [
  {
    region: 'Middle East & GCC',
    countries: ['United Arab Emirates (Dubai / Jebel Ali)', 'Saudi Arabia (Jeddah / Dammam)', 'Oman (Sohar)', 'Qatar (Hamad Port)', 'Kuwait (Shuwaikh)'],
    transitTimeSea: '4 – 7 Days',
    transitTimeAir: '24 – 48 Hours',
    keyPorts: ['Jebel Ali Port', 'Jeddah Islamic Port', 'King Abdulaziz Port Dammam']
  },
  {
    region: 'Europe & United Kingdom',
    countries: ['United Kingdom (Felixstowe / London Gateway)', 'Netherlands (Rotterdam)', 'Germany (Hamburg)', 'Spain (Valencia)', 'Italy (Genoa)'],
    transitTimeSea: '18 – 24 Days',
    transitTimeAir: '2 – 3 Days',
    keyPorts: ['Rotterdam Gateway', 'Hamburg Port', 'Felixstowe']
  },
  {
    region: 'North America',
    countries: ['United States (New York / Los Angeles / Houston)', 'Canada (Vancouver / Montreal)'],
    transitTimeSea: '24 – 32 Days',
    transitTimeAir: '3 – 4 Days',
    keyPorts: ['Port of Los Angeles', 'Port of New York & New Jersey', 'Houston']
  },
  {
    region: 'Southeast Asia & Far East',
    countries: ['Singapore (PSA Port)', 'Malaysia (Port Klang)', 'Indonesia (Tanjung Priok)', 'Vietnam (Ho Chi Minh)', 'Thailand (Laem Chabang)'],
    transitTimeSea: '6 – 10 Days',
    transitTimeAir: '24 – 48 Hours',
    keyPorts: ['Port of Singapore', 'Port Klang', 'Tanjung Pelepas']
  },
  {
    region: 'Africa & Indian Ocean',
    countries: ['Egypt (Port Said)', 'South Africa (Durban)', 'Kenya (Mombasa)', 'Tanzania (Dar es Salaam)', 'Mauritius (Port Louis)'],
    transitTimeSea: '12 – 18 Days',
    transitTimeAir: '2 – 4 Days',
    keyPorts: ['Mombasa Port', 'Durban Port', 'Port Said']
  }
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'Premium Indian Spices & Agro-Commodities',
    subtitle: 'Harvested from India’s Prime Soil, Exported with Global Precision',
    badge: 'Direct Farm-to-Port Sourcing',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1920&q=85',
    ctaPrimary: 'Explore Product Catalog',
    ctaSecondary: 'Request Export Quotation',
    accent: 'Golden Turmeric, Malabar Pepper & Cardamom'
  },
  {
    id: 2,
    title: 'Global Multimodal Logistics & Freight',
    subtitle: 'Containerized FCL & LCL Shipments Connecting Indian Ports to 28+ Nations',
    badge: 'Fast Ocean & Air Transit',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=85',
    ctaPrimary: 'View Shipping Routes',
    ctaSecondary: 'WhatsApp Founders',
    accent: 'JNPT Nhava Sheva • Chennai Port • Cochin Port'
  },
  {
    id: 3,
    title: 'Uncompromising Quality & International Certification',
    subtitle: '100% Sortex Cleaned, Non-GMO, Lab-Tested for Global Food Standards',
    badge: 'ISO • FSSAI • Spices Board Certified',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1920&q=85',
    ctaPrimary: 'View Quality Standards',
    ctaSecondary: 'Download Spec Sheet',
    accent: 'Full Certificate of Analysis (COA) with Every Batch'
  },
  {
    id: 4,
    title: 'Custom OEM & Bulk Export Packaging',
    subtitle: 'Jute Bags, Multiwall Kraft Paper, Vacuum Bags, and Private Label Packaging',
    badge: 'Tailored for Importers & Distributors',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1920&q=85',
    ctaPrimary: 'Custom Packaging Options',
    ctaSecondary: 'Get Instant RFQ',
    accent: 'From 500g Retail Pouches to 50kg Heavy-Duty Export Sacks'
  }
];
