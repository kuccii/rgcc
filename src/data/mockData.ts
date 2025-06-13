import { GrainListing, MarketPrice, WarehouseInventory, Contract, QualityCertificate } from '../types';

export const mockGrainListings: GrainListing[] = [
  {
    id: '1',
    sellerId: 'farmer1',
    sellerName: 'Jean Baptiste Mukamana',
    grainType: 'maize',
    quantity: 50,
    unit: 'tons',
    pricePerUnit: 380,
    currency: 'RWF',
    quality: 'A',
    moistureLevel: 13.5,
    location: 'Nyagatare District',
    harvestDate: '2024-12-01',
    availableFrom: '2024-12-15',
    description: 'Premium quality yellow maize, well dried and stored in proper conditions.',
    images: ['https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg'],
    status: 'active',
    createdAt: '2024-12-10'
  },
  {
    id: '2',
    sellerId: 'farmer2',
    sellerName: 'Marie Claire Uwimana',
    grainType: 'beans',
    quantity: 25,
    unit: 'tons',
    pricePerUnit: 850,
    currency: 'RWF',
    quality: 'A',
    moistureLevel: 12.8,
    location: 'Musanze District',
    harvestDate: '2024-11-20',
    availableFrom: '2024-12-10',
    description: 'High-quality red kidney beans, perfect for export markets.',
    images: ['https://images.pexels.com/photos/1687754/pexels-photo-1687754.jpeg'],
    status: 'active',
    createdAt: '2024-12-08'
  },
  {
    id: '3',
    sellerId: 'farmer3',
    sellerName: 'Emmanuel Nshimiyimana',
    grainType: 'rice',
    quantity: 30,
    unit: 'tons',
    pricePerUnit: 920,
    currency: 'RWF',
    quality: 'B',
    moistureLevel: 14.2,
    location: 'Bugesera District',
    harvestDate: '2024-11-15',
    availableFrom: '2024-12-05',
    description: 'Aromatic rice variety with excellent cooking quality.',
    images: ['https://images.pexels.com/photos/236336/pexels-photo-236336.jpeg'],
    status: 'active',
    createdAt: '2024-12-05'
  }
];

export const mockMarketPrices: MarketPrice[] = [
  {
    id: '1',
    grainType: 'maize',
    location: 'Kigali',
    averagePrice: 385,
    highPrice: 395,
    lowPrice: 375,
    currency: 'RWF',
    date: '2024-12-15',
    trend: 'up'
  },
  {
    id: '2',
    grainType: 'beans',
    location: 'Kigali',
    averagePrice: 855,
    highPrice: 870,
    lowPrice: 840,
    currency: 'RWF',
    date: '2024-12-15',
    trend: 'stable'
  },
  {
    id: '3',
    grainType: 'rice',
    location: 'Kigali',
    averagePrice: 925,
    highPrice: 940,
    lowPrice: 910,
    currency: 'RWF',
    date: '2024-12-15',
    trend: 'down'
  }
];

export const mockWarehouseInventory: WarehouseInventory[] = [
  {
    id: '1',
    warehouseId: 'wh1',
    warehouseName: 'RGCC Nyagatare Warehouse',
    grainType: 'maize',
    quantity: 250,
    unit: 'tons',
    quality: 'A',
    moistureLevel: 13.2,
    receivedDate: '2024-12-01',
    supplierId: 'farmer1',
    supplierName: 'Jean Baptiste Mukamana',
    status: 'stored',
    temperature: 18.5,
    humidity: 45,
    lastInspection: '2024-12-14'
  },
  {
    id: '2',
    warehouseId: 'wh2',
    warehouseName: 'RGCC Kigali Central Warehouse',
    grainType: 'beans',
    quantity: 150,
    unit: 'tons',
    quality: 'A',
    moistureLevel: 12.8,
    receivedDate: '2024-11-25',
    supplierId: 'farmer2',
    supplierName: 'Marie Claire Uwimana',
    status: 'processing',
    temperature: 19.2,
    humidity: 42,
    lastInspection: '2024-12-13'
  }
];

export const mockContracts: Contract[] = [
  {
    id: '1',
    buyerId: 'trader1',
    sellerId: 'farmer1',
    grainType: 'maize',
    quantity: 100,
    pricePerUnit: 380,
    totalValue: 38000,
    deliveryDate: '2024-12-20',
    deliveryLocation: 'RGCC Kigali Warehouse',
    paymentTerms: '50% upfront, 50% on delivery',
    status: 'active',
    qualityRequirements: 'Grade A, moisture <14%',
    createdAt: '2024-12-10',
    signedAt: '2024-12-11'
  }
];

export const mockQualityCertificates: QualityCertificate[] = [
  {
    id: '1',
    grainBatchId: 'batch001',
    inspectorId: 'insp1',
    inspectorName: 'Dr. Anastase Rwigamba',
    grainType: 'maize',
    grade: 'A',
    moistureLevel: 13.2,
    purityLevel: 98.5,
    pestAnalysis: 'pass',
    aflatoxinLevel: 2.8,
    issuedDate: '2024-12-14',
    expiryDate: '2025-06-14',
    certificateNumber: 'QC-2024-001',
    notes: 'Excellent quality maize meeting all export standards.'
  }
];