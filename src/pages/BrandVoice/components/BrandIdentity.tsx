import React from 'react';
import { Globe, FileText, Upload, X } from 'lucide-react';
import { useBrandVoiceStore } from '../../../store/brandVoiceStore';

const BrandIdentity = () => {
  const { 
    description, 
    setDescription, 
    websiteUrl,
    setWebsiteUrl,
    brandFiles,
    addBrandFile,
    removeBrandFile
  } = useBrandVoiceStore();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(file => {
      addBrandFile({
        name: file.name,
        file,
        type: file.type
      });
    });
  };

  return (
    <div className="card p-6">
      <h3 className="font-semibold mb-4 text-slate-900 dark:text-text-primary">Brand Identity</h3>
      
      <div className="space-y-4">
        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-100 mb-1">
            Brand Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your brand's mission, values, and unique selling points..."
            className="input w-full h-24 resize-none dark:placeholder:text-slate-400"
          />
        </div>

        {/* Website URL */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-100 mb-1">
            Website URL
          </label>
          <div className="flex items-center gap-2">
            <Globe size={18} className="text-slate-400 dark:text-slate-300" />
            <input
              type="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://your-website.com"
              className="input flex-1 dark:placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Brand Files */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-100 mb-2">
            Brand Resources
          </label>
          
          <div className="border-2 border-dashed border-slate-200 dark:border-border-dark 
                        rounded-lg p-4 text-center
                        hover:border-primary-400 dark:hover:border-accent-blue 
                        transition-colors">
            <input
              type="file"
              id="brand-files"
              className="hidden"
              multiple
              onChange={handleFileSelect}
              accept=".pdf,.doc,.docx,.ppt,.pptx"
            />
            <label htmlFor="brand-files" className="cursor-pointer">
              <Upload size={20} className="mx-auto mb-2 text-slate-400 dark:text-slate-300" />
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Upload brand guidelines, style guides, or other brand materials
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Supports PDF, DOC, PPT (max 10MB)
              </p>
            </label>
          </div>

          {/* File List */}
          {brandFiles.length > 0 && (
            <div className="mt-3 space-y-2">
              {brandFiles.map((file, index) => (
                <div key={index} 
                     className="flex items-center justify-between p-2 
                                bg-slate-50 dark:bg-dark-tertiary 
                                rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-primary-500 dark:text-accent-blue" />
                    <span className="text-sm font-medium text-slate-900 dark:text-slate-100">{file.name}</span>
                  </div>
                  <button
                    onClick={() => removeBrandFile(index)}
                    className="p-1 hover:bg-slate-200 dark:hover:bg-dark-quaternary rounded-full transition-colors"
                  >
                    <X size={14} className="text-slate-500 dark:text-slate-300" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandIdentity;