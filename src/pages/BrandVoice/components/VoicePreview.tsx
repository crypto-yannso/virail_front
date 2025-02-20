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
    <div className="card p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-slate-900 dark:text-text-primary">Your Brand Voice</h3>
        <button
          onClick={handleGeneratePreview}
          className="button-secondary p-2"
        >
          <RefreshCw size={18} />
        </button>
      </div>

      <div className="flex-1 space-y-4">
        {previewContent.map((section, index) => (
          <div key={index} className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-medium mb-2">{section.title}</h4>
            <p className="text-slate-600">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleSave}
          className="button-primary flex-1 flex items-center justify-center gap-2"
        >
          <Save size={18} />
          Save Brand Voice
        </button>
        <button 
          onClick={handleGeneratePreview}
          className="button-secondary"
        >
          Test Voice
        </button>
      </div>
    </div>
  );
};

export default VoicePreview;