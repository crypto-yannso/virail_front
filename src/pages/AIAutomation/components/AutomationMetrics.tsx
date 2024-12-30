import React from 'react';
import { TrendingUp, Zap, Hash } from 'lucide-react';
import { useAutomationStore } from '../../../store/automationStore';

const AutomationMetrics = () => {
  const { metrics } = useAutomationStore();

  return (
    <div className="bg-cyber-darker/80 backdrop-blur-xl rounded-lg border border-white/10 p-6">
      <h3 className="font-display text-black mb-4">AI Performance Metrics</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-cyber-dark rounded-lg">
          <div className="flex items-center gap-2 text-neon-blue mb-2">
            <Zap size={18} />
            <span className="text-sm font-medium text-black">Success Rate</span>
          </div>
          <span className="text-2xl font-semibold text-black">{metrics.successRate}%</span>
        </div>
        
        <div className="p-4 bg-cyber-dark rounded-lg">
          <div className="flex items-center gap-2 text-neon-blue mb-2">
            <TrendingUp size={18} />
            <span className="text-sm font-medium text-black">Engagement</span>
          </div>
          <span className="text-2xl font-semibold text-black">{metrics.engagementScore}</span>
        </div>
        
        <div className="p-4 bg-cyber-dark rounded-lg">
          <div className="flex items-center gap-2 text-neon-blue mb-2">
            <Hash size={18} />
            <span className="text-sm font-medium text-black">Top Topics</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {metrics.topPerformingTopics.map((topic) => (
              <span key={topic} className="text-sm text-black">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationMetrics;