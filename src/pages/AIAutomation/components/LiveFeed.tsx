import React from 'react';

interface Props {
  platforms: string[];
}

const LiveFeed: React.FC<Props> = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="font-semibold mb-4">Recent AI Actions</h3>
      <div className="text-center text-gray-500 py-4">
        No recent actions
      </div>
    </div>
  );
};

export default LiveFeed;