import React from 'react';
import { Users } from 'lucide-react';
import { useBrandVoiceStore } from '../../store/brandVoiceStore';

const CustomerDescription = () => {
  const { customerDescription, setCustomerDescription } = useBrandVoiceStore();

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-4">
        <Users className="text-primary-500" size={20} />
        <h3 className="font-semibold">Target Audience</h3>
      </div>
      
      <textarea
        value={customerDescription}
        onChange={(e) => setCustomerDescription(e.target.value)}
        placeholder="Describe your target customers (e.g., age range, interests, pain points, behaviors...)"
        className="input w-full h-32 resize-none"
      />
      
      <p className="text-sm text-slate-500 mt-2">
        This helps our AI better understand your audience and adapt the content accordingly.
      </p>
    </div>
  );
};

export default CustomerDescription;