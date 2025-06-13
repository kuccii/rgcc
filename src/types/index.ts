export interface User {
  id: string;
  name: string;
  email: string;
  role: 'farmer' | 'trader' | 'warehouse_manager' | 'processor' | 'admin';
  location: string;
  phone: string;
  verified: boolean;
}

export interface GrainListing {
  id: string;
  sellerId: string;
  sellerName: string;
  grainType: 'maize' | 'beans' | 'rice' | 'wheat' | 'sorghum';
  quantity: number;
  unit: 'kg' | 'tons';
  pricePerUnit: number;
  currency: 'RWF' | 'USD';
  quality: 'A' | 'B' | 'C';
  moistureLevel: number;
  location: string;
  harvestDate: string;
  availableFrom: string;
  description: string;
  images: string[];
  status: 'active' | 'sold' | 'expired';
  createdAt: string;
}

export interface MarketPrice {
  id: string;
  grainType: 'maize' | 'beans' | 'rice' | 'wheat' | 'sorghum';
  location: string;
  averagePrice: number;
  highPrice: number;
  lowPrice: number;
  currency: 'RWF' | 'USD';
  date: string;
  trend: 'up' | 'down' | 'stable';
}

export interface WarehouseInventory {
  id: string;
  warehouseId: string;
  warehouseName: string;
  grainType: 'maize' | 'beans' | 'rice' | 'wheat' | 'sorghum';
  quantity: number;
  unit: 'kg' | 'tons';
  quality: 'A' | 'B' | 'C';
  moistureLevel: number;
  receivedDate: string;
  supplierId: string;
  supplierName: string;
  status: 'stored' | 'processing' | 'dispatched';
  temperature: number;
  humidity: number;
  lastInspection: string;
}

export interface Contract {
  id: string;
  buyerId: string;
  sellerId: string;
  grainType: 'maize' | 'beans' | 'rice' | 'wheat' | 'sorghum';
  quantity: number;
  pricePerUnit: number;
  totalValue: number;
  deliveryDate: string;
  deliveryLocation: string;
  paymentTerms: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  qualityRequirements: string;
  createdAt: string;
  signedAt?: string;
}

export interface QualityCertificate {
  id: string;
  grainBatchId: string;
  inspectorId: string;
  inspectorName: string;
  grainType: 'maize' | 'beans' | 'rice' | 'wheat' | 'sorghum';
  grade: 'A' | 'B' | 'C';
  moistureLevel: number;
  purityLevel: number;
  pestAnalysis: 'pass' | 'fail';
  aflatoxinLevel: number;
  issuedDate: string;
  expiryDate: string;
  certificateNumber: string;
  notes: string;
}