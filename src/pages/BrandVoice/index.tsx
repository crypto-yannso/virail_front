import React from 'react';
import BrandIdentity from './components/BrandIdentity';
import RegionTargeting from './components/RegionTargeting';
import ExampleUploader from './components/ExampleUploader';
import VoicePreview from './components/VoicePreview';
import CustomerDescription from '../../components/brand/CustomerDescription';

const BrandVoice = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Left Panel - Configuration */}
      <div className="space-y-6">
        <BrandIdentity />
        <CustomerDescription />
        <RegionTargeting />
        <ExampleUploader />
      </div>

      {/* Right Panel - Preview */}
      <div>
        <VoicePreview />
      </div>
    </div>
  );
};

export default BrandVoice;