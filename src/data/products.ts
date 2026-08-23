import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'turmeric',
    name: 'Salem & Nizamabad Golden Turmeric',
    botanicalName: 'Curcuma longa',
    category: 'Spices',
    forms: [
      'Salem Whole Dried Fingers (Double Polished)',
      'Nizamabad Machine Cleaned Fingers',
      'Superfine Micro-Pulverized Powder (3.5% – 5.2% Curcumin)',
      'Turmeric Bulbs & Splits'
    ],
    description: 'World-renowned Indian golden turmeric harvested from Salem (Tamil Nadu) and Nizamabad (Telangana). Celebrated internationally for its intense golden color, rich aromatic earthiness, and certified high curcumin bio-actives.',
    origin: 'Salem (Tamil Nadu) & Nizamabad (Telangana), India',
    hsCode: '0910.30.20 / 0910.30.30',
    purity: '99.5% Min Sortex Machine Cleaned',
    moisture: 'Max 9.5%',
    packaging: [
      '25kg / 50kg Heavy-Duty Export Jute Bags',
      'PP Woven Sacks with Inner PE Liner',
      'Custom Printed Retail Aluminum Barrier Pouches (250g - 1kg)'
    ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    harvestSeason: 'January – April',
    notes: 'Non-GMO, guaranteed free of lead chromate, Sudan dyes, and foreign organic matter. Complete HPLC Curcumin certificate provided.'
  },
  {
    id: 'black-pepper',
    name: 'Tellicherry & Malabar Black Pepper',
    botanicalName: 'Piper nigrum',
    category: 'Spices',
    forms: [
      'Tellicherry Garbled Special Extra Bold (TGSEB > 4.75mm)',
      'Malabar Black Pepper (MG-1 Garbled / Ungarbled)',
      'Coarse Cracked & Fine Ground Black Pepper Powder'
    ],
    description: 'The revered "King of Spices" originating from the misty high-altitude rainforests of Malabar, Wayanad, and Coorg. Features high volatile oil piperine content, delivering an intense piquant bite and woody-citrus bouquet.',
    origin: 'Wayanad (Kerala) & Coorg (Karnataka), India',
    hsCode: '0904.11.10 / 0904.12.00',
    purity: '99.0% Spiral Separated & Air Aspirated',
    moisture: 'Max 11.0%',
    packaging: [
      '25kg Multi-wall Kraft Paper Sacks with Liner',
      '50kg High-grade Jute Bags',
      'Vacuum Brick Packed Cartons'
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    harvestSeason: 'December – March',
    notes: 'Bulk density: 500 G/L to 580 G/L (GBL grade). Piperine content: 5.5% - 7.0%. Tested for micro-biological cleanliness.'
  },
  {
    id: 'cardamom',
    name: 'Alleppey Green Extra Bold Cardamom',
    botanicalName: 'Elettaria cardamomum',
    category: 'Spices',
    forms: [
      'Alleppey Green Extra Bold (AGEB > 8.0mm)',
      'Alleppey Green Bold (AGB 7.0mm – 8.0mm)',
      'Alleppey Green Superior (AGS 6.0mm – 7.0mm)',
      'Decorticated Cardamom Seeds & Powder'
    ],
    description: 'The undisputed "Queen of Spices" cultivated in the cool, elevated rainforest slopes of the Western Ghats. Plump, deep green pods bursting with sweet camphoraceous and eucalyptus floral essential oils.',
    origin: 'Idukki (Kerala) & Sakleshpur (Karnataka), India',
    hsCode: '0908.31.00 / 0908.32.00',
    purity: '99.8% Laser Color Sorted & Graded',
    moisture: 'Max 10.0%',
    packaging: [
      '5kg / 10kg Master Cartons with Food-Grade Foil Vacuum Liners',
      'Hermetic Nitrogen-Flushed Bulk Bags'
    ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    harvestSeason: 'August – February',
    notes: 'Zero artificial green coloring dyes. Conforms to Spices Board of India export grading and international ASTA specifications.'
  },
  {
    id: 'red-chilli',
    name: 'Guntur Teja & Byadgi Red Chilli',
    botanicalName: 'Capsicum annuum',
    category: 'Spices',
    forms: [
      'Teja S17 Extra Hot (Stemless & With Stem)',
      'Byadgi Sweet Deep Red (High ASTA Color Value 120-160)',
      'S4 / Sanam Whole Dry Chillies',
      'Crushed Chilli Flakes (Pizza / Seasoning Mesh) & Fine Powder'
    ],
    description: 'Vibrant sun-cured Indian red chillies ranging from mild sweet high-color Byadgi to blistering Guntur Teja S17. Carefully destoned and hand-sorted to preserve natural gloss, capsaicin heat, and seed integrity.',
    origin: 'Guntur (Andhra Pradesh) & Byadgi (Karnataka), India',
    hsCode: '0904.21.10 / 0904.22.10',
    purity: '99.0% Sun-Dried & Sortex Cleaned',
    moisture: 'Max 10.0%',
    packaging: [
      '10kg / 25kg Polypropylene Woven Sacks',
      'Compressed Export Bales (50kg)',
      'Corrugated Export Cartons'
    ],
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    harvestSeason: 'January – May',
    notes: 'Aflatoxin & Sudan dye free certified. SHU range available: 15,000 SHU (Byadgi) up to 85,000 SHU (Teja S17).'
  },
  {
    id: 'clove',
    name: 'Handpicked Whole Cloves (Lal Pari)',
    botanicalName: 'Syzygium aromaticum',
    category: 'Spices',
    forms: [
      'Lal Pari Handpicked Whole Cloves (Intact Crown)',
      'Standard Export Quality Cloves',
      'Stem-Free Aromatic Clove Powder'
    ],
    description: 'Rich reddish-brown unbroken flower buds renowned for exceptionally high eugenol oil concentration (>17%). Delivers a warm, pungent, sweet-peppery flavor vital for gourmet blends, pharmaceuticals, and perfumery.',
    origin: 'Kanyakumari (Tamil Nadu) & Nilgiris, India',
    hsCode: '0907.10.00 / 0907.20.00',
    purity: '99.5% Hand Picked & Machine Cleaned',
    moisture: 'Max 10.5%',
    packaging: [
      '10kg / 25kg Corrugated Cartons with Polyliner',
      '50kg Export Jute Bags'
    ],
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    harvestSeason: 'December – March',
    notes: 'Volatile essential oil content: min 16% - 19% ml/100g. Clean, plump, with zero mold or headless bud degradation.'
  },
  {
    id: 'cumin-seeds',
    name: 'Unjha Sortex Cumin Seeds (Jeera)',
    botanicalName: 'Cuminum cyminum',
    category: 'Seeds',
    forms: [
      'Singapore Quality Cumin (99.0% / 99.5% Purity)',
      'European Quality Sortex Cumin (99.8% Purity)',
      'Freshly Ground Roasted Cumin Powder'
    ],
    description: 'Top-grade Indian cumin grown in the semi-arid, mineral-rich soils of Gujarat and Rajasthan. Distinctive ridged seed structure, warm earthy fragrance, and minimal pesticide residue meeting European MRL standards.',
    origin: 'Unjha (Gujarat) & Nagaur (Rajasthan), India',
    hsCode: '0909.31.29 / 0909.32.00',
    purity: '99.5% to 99.8% Sortex Grade',
    moisture: 'Max 8.5%',
    packaging: [
      '25kg / 50kg PP Bags with Moisture-Barrier Liner',
      'Multi-wall Paper Sacks'
    ],
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    harvestSeason: 'February – May',
    notes: 'Triple cleaned, magnetic separator passed, free from Salmonella and extraneous matter.'
  },
  {
    id: 'cinnamon',
    name: 'Indian Cinnamon & Cassia Bark (Dalchini)',
    botanicalName: 'Cinnamomum verum / Cassia',
    category: 'Spices',
    forms: [
      'Selected Bark Sticks & Quills (8cm - 12cm)',
      'Cinnamon Split Rolls & Broken Pieces',
      'Micro-Milled Sweet Aromatic Powder'
    ],
    description: 'Naturally peeled inner bark cured to perfection under gentle sun exposure. Delivers a delicate sweet woody aroma and warm spicy profile, ideal for confectionery, beverages, and savory spice blends.',
    origin: 'Western Ghats Coastal Foothills & Kerala, India',
    hsCode: '0906.11.00 / 0906.20.00',
    purity: '99.0% Cleaned & Destoned',
    moisture: 'Max 11.5%',
    packaging: [
      '25kg Sturdy Corrugated Master Cartons',
      '25kg Heavy PP Bags'
    ],
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    harvestSeason: 'May – November',
    notes: '100% pure authentic bark, free of artificial aroma sprays or sulfur dioxide bleaching.'
  },
  {
    id: 'coriander-seeds',
    name: 'Green Coriander Seeds (Dhania)',
    botanicalName: 'Coriandrum sativum',
    category: 'Seeds',
    forms: [
      'Eagle Grade Coriander Seeds',
      'Scooter / Single Parrot Grade (Pale Green / Golden)',
      'Ground Dhania Powder (High Linalool)'
    ],
    description: 'Aromatic, plump round coriander seeds possessing a refreshing sweet citrus note with underlying herbal warmth. Sourced from the prime agricultural zones of Rajasthan and Madhya Pradesh.',
    origin: 'Ramganj (Rajasthan) & Madhya Pradesh, India',
    hsCode: '0909.21.10 / 0909.22.00',
    purity: '99.0% Destoned & Aspiration Cleaned',
    moisture: 'Max 8.5%',
    packaging: [
      '25kg / 40kg Jute Sacks',
      'PP Woven Bags with Inner PE Liners'
    ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    harvestSeason: 'February – April',
    notes: 'High volatile linalool content. Destoned via gravity tables; compliant with US FDA and EU limits.'
  },
  {
    id: 'ginger',
    name: 'Sun-Dried Whole Ginger (Sonth / Adrak)',
    botanicalName: 'Zingiber officinale',
    category: 'Spices',
    forms: [
      'Cochin Dried Ginger Whole (Unbleached / Bleached)',
      'Dehydrated Ginger Flakes & Slices',
      'Fine Ground Ginger Powder'
    ],
    description: 'Naturally cured whole ginger roots with a pale fibrous body and intense pungent warmth. High active gingerol and shogaol yield, prized globally for food, beverage, tea blending, and herbal extraction.',
    origin: 'Cochin (Kerala) & Shimoga (Karnataka), India',
    hsCode: '0910.11.10 / 0910.12.00',
    purity: '99.0% Cleaned & Calibrated',
    moisture: 'Max 10.5%',
    packaging: [
      '25kg / 50kg Jute Bags with Moisture Barrier',
      'Multiwall Paper Sacks'
    ],
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    harvestSeason: 'December – March',
    notes: 'Cochin Ginger NUVO export grade. Zero chemical additives; sulfur-free unbleached option standard.'
  },
  {
    id: 'fennel-seeds',
    name: 'Sweet Green Lucknowi Fennel (Saunf)',
    botanicalName: 'Foeniculum vulgare',
    category: 'Seeds',
    forms: [
      'Green Lucknowi Extra Bold Fennel',
      'Abu Road Machine Cleaned (99.0%)',
      'Sortex Cleaned Green Fennel (99.5%)',
      'Aromatic Fennel Powder'
    ],
    description: 'Naturally sweet, intensely fragrant anise-flavored green seeds. Grown under optimal climatic conditions in Gujarat and Rajasthan for superior green coloration and essential anethole oil.',
    origin: 'Gujarat & Rajasthan, India',
    hsCode: '0909.61.39 / 0909.62.00',
    purity: '99.5% Machine Cleaned & Color Sorted',
    moisture: 'Max 9.0%',
    packaging: [
      '25kg / 50kg Multiwall Paper & PP Bags',
      'Vacuum Master Pouches'
    ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    harvestSeason: 'February – May',
    notes: 'Natural vibrant green seed grade without artificial color polishing or oil glazing.'
  },
  {
    id: 'fenugreek-seeds',
    name: 'Sortex Fenugreek Seeds (Methi)',
    botanicalName: 'Trigonella foenum-graecum',
    category: 'Seeds',
    forms: [
      'Whole Machine Cleaned Seeds (99.0%)',
      'Sortex Extra Cleaned (99.5%+)',
      'Ground Methi Powder'
    ],
    description: 'Golden-brown rhombic seeds celebrated for bittersweet aroma, maple-like notes, and powerful nutritional profile. Widely exported for curry powders, extracts, and nutraceuticals.',
    origin: 'Rajasthan & Madhya Pradesh, India',
    hsCode: '0910.99.12',
    purity: '99.5% Machine Cleaned & Sortex Grade',
    moisture: 'Max 9.5%',
    packaging: [
      '25kg / 50kg PP Woven Bags with Liner',
      'Export Jute Sacks'
    ],
    image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    harvestSeason: 'February – April',
    notes: 'Magnetic destoned, gravity sorted, uniform golden color.'
  },
  {
    id: 'ajwain',
    name: 'Carom Seeds / Ajwain (Thymol Rich)',
    botanicalName: 'Trachyspermum ammi',
    category: 'Seeds',
    forms: [
      'Whole Machine Cleaned Seeds',
      'Sortex Grade Ajwain',
      'Fine Ajwain Powder'
    ],
    description: 'Small oval herbal seeds packed with thymol essential oil, yielding a strong thyme-like aromatic punch and warm pungent flavor profile.',
    origin: 'Gujarat & Rajasthan, India',
    hsCode: '0910.99.14',
    purity: '99.0% Filtered & Destoned',
    moisture: 'Max 9.0%',
    packaging: [
      '25kg / 50kg PP Bags with PE Liners'
    ],
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    harvestSeason: 'January – April',
    notes: 'High natural thymol concentration; ideal for spice mixes, bakery, and digestive formulations.'
  },
  {
    id: 'flax-seeds',
    name: 'Golden & Brown Flax Seeds (Alsi)',
    botanicalName: 'Linum usitatissimum',
    category: 'Seeds',
    forms: [
      'Whole Brown Flax Seeds (99.9% Cleaned)',
      'Golden Flax Seeds',
      'Cold-Milled Seed Powder'
    ],
    description: 'Superfood seeds rich in Omega-3 fatty acids (ALA), dietary fiber, and lignans. Triple-cleaned for international dietary, bakery, and oil-pressing industries.',
    origin: 'Madhya Pradesh & Maharashtra, India',
    hsCode: '1204.00.90',
    purity: '99.9% Machine Cleaned & Color Sorted',
    moisture: 'Max 7.5%',
    packaging: [
      '25kg / 50kg Multi-wall Kraft Bags',
      'PP Bags with Barrier'
    ],
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    harvestSeason: 'March – May',
    notes: 'Microbiologically tested, low moisture, high alpha-linolenic acid (ALA).'
  },
  {
    id: 'garlic-powder',
    name: 'Dehydrated Garlic Flakes & Powder',
    botanicalName: 'Allium sativum',
    category: 'Powders',
    forms: [
      'Dehydrated White Garlic Flakes / Cloves',
      'Minced & Chopped Garlic (Granules)',
      'Microfine Garlic Powder (100–120 Mesh)'
    ],
    description: 'Pure dehydrated Indian garlic with intense pungent allicin aroma and long shelf stability. Ideal for processed sauces, ready-to-eat seasoning blends, and food service.',
    origin: 'Mahuva (Gujarat) & Madhya Pradesh, India',
    hsCode: '0712.90.20 / 0712.90.30',
    purity: '100% Pure Garlic Solids',
    moisture: 'Max 5.5%',
    packaging: [
      '20kg Corrugated Boxes with Aluminium Barrier Bags',
      '25kg Poly-lined Fiber Drums'
    ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=85',
    featured: false,
    harvestSeason: 'February – May',
    notes: 'Free flowing, zero anti-caking additives, non-irradiated or irradiated per buyer specifications.'
  },
  {
    id: 'coffee',
    name: 'Specialty Indian Plantation Coffee',
    botanicalName: 'Coffea arabica / Coffea canephora',
    category: 'Plantation & Grains',
    forms: [
      'Arabica Plantation A / PB (Green Beans)',
      'Robusta Cherry AB / Parchment',
      'Artisan Roasted Whole Beans & Filter Grind'
    ],
    description: 'Shade-grown, handpicked specialty coffee from the high-elevation slopes of Chikmagalur and Coorg, Karnataka. Rich aroma, balanced acidity, and chocolatey-caramel body.',
    origin: 'Chikmagalur & Coorg (Karnataka), India',
    hsCode: '0901.11.10 / 0901.21.00',
    purity: 'Grade A / Export Certified',
    moisture: 'Max 11.5%',
    packaging: [
      '60kg Jute Bags with GrainPro Hermetic Liners',
      '1kg One-way Valve Pouches'
    ],
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    harvestSeason: 'November – February',
    notes: 'Coffee Board of India export certified grading. Altitude: 1,000m to 1,500m above sea level.'
  },
  {
    id: 'custom-commodities',
    name: 'Basmati Rice & Custom Agro-Commodities',
    botanicalName: 'Oryza sativa / Various Oilseeds & Grains',
    category: 'Plantation & Grains',
    forms: [
      '1121 Traditional & Steam Basmati Rice (Extra Long Grain)',
      'Natural & Hulled White Sesame Seeds (99.95% Sortex)',
      'Kabuli Chickpeas (Dollar Grade 10mm–12mm)',
      'Bespoke OEM Private Label Packaging'
    ],
    description: 'End-to-end bespoke sourcing and OEM packaging service. We handle custom batch grading, private branding, multi-language labeling, and complete phytosanitary clearance for grains, rice, and pulses.',
    origin: 'Pan-India Certified Farmer Networks',
    hsCode: '1006.30 / 1207.40 / 0713.20',
    purity: 'Custom Contract Specifications (99.9% Sortex)',
    moisture: 'As per buyer requirement (Max 12%)',
    packaging: [
      'Jute, HDPE, Non-Woven Fabric, Vacuum, Retail Poly Pouches',
      'Master Corrugated Boxes'
    ],
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=85',
    featured: true,
    harvestSeason: 'Year-round availability',
    notes: 'Full container loads (FCL) and consolidated mixed spice shipments with phytosanitary & inspection certificates.'
  }
];
