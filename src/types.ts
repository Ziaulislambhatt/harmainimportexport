export interface Product {
  id: string;
  name: string;
  botanicalName?: string;
  category: 'Spices' | 'Seeds' | 'Powders' | 'Plantation & Grains';
  forms: string[];
  description: string;
  origin: string;
  hsCode: string;
  purity: string;
  moisture: string;
  packaging: string[];
  image: string;
  featured?: boolean;
  notes?: string;
  harvestSeason?: string;
}

export interface Founder {
  name: string;
  role: string;
  phone: string;
  formattedPhone: string;
  email: string;
  coatColor: 'Maroon / Red' | 'Navy / Black';
  bio: string;
  focus: string[];
  image: string;
}

export interface TradeRoute {
  region: string;
  countries: string[];
  transitTimeSea: string;
  transitTimeAir: string;
  keyPorts: string[];
}

export interface RFQFormState {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  product: string;
  quantity: string;
  packaging: string;
  incoterm: string;
  destinationPort: string;
  additionalNotes: string;
}
