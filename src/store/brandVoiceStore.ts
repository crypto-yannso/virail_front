import { create } from 'zustand';
import { countries } from '../data/countries';
import type { ContentExample, PreviewSection, BrandFile } from '../types/brandVoice';
import type { TargetCountry } from '../types/country';

interface BrandVoiceState {
  description: string;
  websiteUrl: string;
  brandFiles: BrandFile[];
  customerDescription: string;
  examples: ContentExample[];
  primaryLanguage: string;
  targetCountries: TargetCountry[];
  previewContent: PreviewSection[];
  setDescription: (description: string) => void;
  setWebsiteUrl: (url: string) => void;
  addBrandFile: (file: BrandFile) => void;
  removeBrandFile: (index: number) => void;
  setCustomerDescription: (description: string) => void;
  addExample: (example: ContentExample) => void;
  removeExample: (index: number) => void;
  toggleCountry: (countryId: string) => void;
  setPrimaryLanguage: (language: string) => void;
  generatePreview: () => void;
  saveVoice: () => Promise<void>;
}

export const useBrandVoiceStore = create<BrandVoiceState>((set, get) => ({
  description: '',
  websiteUrl: '',
  brandFiles: [],
  customerDescription: '',
  examples: [],
  primaryLanguage: 'en',
  targetCountries: countries.map(country => ({
    ...country,
    enabled: false
  })),
  previewContent: [],
  
  setDescription: (description) => set({ description }),
  setWebsiteUrl: (websiteUrl) => set({ websiteUrl }),
  addBrandFile: (file) => set(state => ({
    brandFiles: [...state.brandFiles, file]
  })),
  removeBrandFile: (index) => set(state => ({
    brandFiles: state.brandFiles.filter((_, i) => i !== index)
  })),
  setCustomerDescription: (description) => set({ customerDescription: description }),
  
  // ... rest of the store implementation remains the same
}));