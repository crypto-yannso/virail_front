import React from 'react';
import { Lightbulb } from 'lucide-react';

const AISuggestions = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Lightbulb size={20} className="text-primary" />
        <h2 className="text-xl font-semibold">AI Suggestions</h2>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Suggested Improvements</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Consider adding more specific examples</li>
            <li>• Try using more active voice</li>
            <li>• Add a clear call-to-action</li>
          </ul>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Alternative Phrases</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• "Optimize" → "Enhance"</li>
            <li>• "Good" → "Exceptional"</li>
            <li>• "Use" → "Leverage"</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AISuggestions;