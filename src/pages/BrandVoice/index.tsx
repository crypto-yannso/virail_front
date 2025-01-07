import React from 'react';
import BrandIdentity from './components/BrandIdentity';
import RegionTargeting from './components/RegionTargeting';
import ExampleUploader from './components/ExampleUploader';
import VoicePreview from './components/VoicePreview';
import CustomerDescription from '../../components/brand/CustomerDescription';

const BrandVoice = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pb-20 lg:pb-6">
      {/* Left Panel - Configuration */}
      <div className="space-y-4 lg:space-y-6">
        <BrandIdentity />
        <CustomerDescription />
        <RegionTargeting />
        <ExampleUploader />
      </div>

      {/* Right Panel - Preview */}
      <div className="sticky top-[8vh] h-fit">
        <VoicePreview />
      </div>
    </div>
  );
};

export default BrandVoice;