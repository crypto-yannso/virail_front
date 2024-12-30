import React from 'react';

const AudienceStats = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Audience Demographics</h2>
      <div className="h-[300px] flex items-center justify-center">
        <p className="text-gray-500">No audience data available</p>
      </div>
    </div>
  );
};

export default AudienceStats;