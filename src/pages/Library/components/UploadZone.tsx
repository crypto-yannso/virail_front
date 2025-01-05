import React, { useCallback } from 'react';
import { Upload, Plus } from 'lucide-react';
import { useResourceStore } from '../../../store/resourceStore';

const UploadZone = () => {
  const { addResource } = useResourceStore();

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    files.forEach(addResource);
  }, [addResource]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(addResource);
  };

  return (
    <div className="bg-white dark:bg-dark-secondary border border-slate-200/60 dark:border-border-dark rounded-lg shadow-[0_8px_16px_-6px_rgba(15,23,42,0.08)] dark:shadow-dark-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900 dark:text-text-primary">Upload Files</h3>
        <label className="p-2 bg-primary/10 dark:bg-accent-blue/10 rounded-lg cursor-pointer hover:bg-primary/20 dark:hover:bg-accent-blue/20 transition-colors">
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className="hidden"
            accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
          />
          <Plus size={20} className="text-primary dark:text-accent-blue" />
        </label>
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="border-2 border-dashed border-slate-200 dark:border-border-dark rounded-lg p-8
                 hover:border-primary dark:hover:border-accent-blue transition-colors
                 flex flex-col items-center justify-center gap-3 cursor-pointer"
      >
        <div className="p-3 bg-primary/10 dark:bg-accent-blue/10 rounded-full">
          <Upload size={24} className="text-primary dark:text-accent-blue" />
        </div>
        <div className="text-center">
          <p className="text-slate-900 dark:text-text-primary font-medium">
            Drop files here or click to upload
          </p>
          <p className="text-sm text-slate-500 dark:text-text-secondary mt-1">
            Support for images, videos, and documents
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadZone; 