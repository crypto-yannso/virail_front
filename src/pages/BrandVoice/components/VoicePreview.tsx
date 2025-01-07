import React from 'react';
import { RefreshCw, Save } from 'lucide-react';
import { useBrandVoiceStore } from '../../../store/brandVoiceStore';

const VoicePreview = () => {
  const { generatePreview, saveVoice, previewContent } = useBrandVoiceStore();

  const handleGeneratePreview = () => {
    generatePreview();
  };

  const handleSave = async () => {
    try {
      await saveVoice();
      // You could add a success toast here
    } catch (error) {
      console.error('Failed to save brand voice:', error);
      // You could add an error toast here
    }
  };

  return (
    <div className="card p-4 lg:p-6 h-full flex flex-col bg-white dark:bg-dark-secondary">
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <h3 className="font-semibold text-slate-900 dark:text-text-primary">Your Brand Voice</h3>
        <button
          onClick={handleGeneratePreview}
          className="button-secondary p-2 hover:bg-slate-100 dark:hover:bg-dark-tertiary rounded-lg transition-colors"
        >
          <RefreshCw size={18} />
        </button>
      </div>

      <div className="flex-1 space-y-3 lg:space-y-4 overflow-y-auto max-h-[60vh] lg:max-h-[70vh] scrollbar-thin">
        {previewContent.map((section, index) => (
          <div key={index} className="p-3 lg:p-4 bg-slate-50 dark:bg-dark-tertiary rounded-lg">
            <h4 className="font-medium mb-2 text-sm lg:text-base text-slate-900 dark:text-text-primary">{section.title}</h4>
            <p className="text-sm lg:text-base text-slate-600 dark:text-text-secondary">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 lg:mt-6 flex flex-col sm:flex-row gap-2 lg:gap-3">
        <button
          onClick={handleSave}
          className="button-primary flex items-center justify-center gap-2 py-2 lg:py-2.5 flex-1 text-sm lg:text-base"
        >
          <Save size={16} className="lg:w-[18px] lg:h-[18px]" />
          Save Brand Voice
        </button>
        <button 
          onClick={handleGeneratePreview}
          className="button-secondary py-2 lg:py-2.5 text-sm lg:text-base"
        >
          Test Voice
        </button>
      </div>
    </div>
  );
};

export default VoicePreview;