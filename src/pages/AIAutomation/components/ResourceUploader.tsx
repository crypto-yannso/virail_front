import React, { useCallback } from 'react';
import { Upload, Tag, X, FileText, Link as LinkIcon } from 'lucide-react';
import { useAutomationStore } from '../../../store/automationStore';

const ResourceUploader = () => {
  const { addResource, removeResource, resources } = useAutomationStore();
  const [url, setUrl] = React.useState('');

  const handleFileDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    
    files.forEach(file => {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }

      addResource({
        id: crypto.randomUUID(),
        name: file.name,
        type: 'file',
        file,
        size: file.size,
        uploadedAt: new Date().toISOString()
      });
    });
  }, [addResource]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    files.forEach(file => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }

      addResource({
        id: crypto.randomUUID(),
        name: file.name,
        type: 'file',
        file,
        size: file.size,
        uploadedAt: new Date().toISOString()
      });
    });
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      try {
        new URL(url); // Validate URL
        addResource({
          id: crypto.randomUUID(),
          name: url,
          type: 'link',
          url,
          uploadedAt: new Date().toISOString()
        });
        setUrl('');
      } catch {
        alert('Please enter a valid URL');
      }
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="card p-6">
      <div className="flex items-center gap-2 mb-6">
        <Upload className="text-primary-500" size={20} />
        <h3 className="font-semibold">Feed AI With Resources</h3>
      </div>

      <div className="space-y-4">
        {/* File Upload Area */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
          className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center
                     hover:border-primary-400 transition-colors"
        >
          <input
            type="file"
            id="ai-resources"
            className="hidden"
            multiple
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx,.txt,.csv,.json"
          />
          <label htmlFor="ai-resources" className="cursor-pointer">
            <Upload size={24} className="mx-auto mb-2 text-slate-400" />
            <p className="text-sm text-slate-600 mb-2">
              Drop files or click to upload
            </p>
            <p className="text-xs text-slate-500">
              Supports PDF, DOC, TXT, CSV, JSON (max 10MB)
            </p>
          </label>
        </div>

        {/* URL Input */}
        <form onSubmit={handleUrlSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <LinkIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste a link to content..."
              className="input pl-9 w-full"
            />
          </div>
          <button type="submit" className="button-primary">
            Add
          </button>
        </form>

        {/* Resource List */}
        {resources.length > 0 && (
          <div className="space-y-2">
            {resources.map((resource) => (
              <div 
                key={resource.id}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    {resource.type === 'link' ? (
                      <LinkIcon size={16} className="text-primary-500" />
                    ) : (
                      <FileText size={16} className="text-primary-500" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium truncate max-w-[300px]">
                      {resource.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {resource.type === 'file' && formatFileSize(resource.size)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeResource(resource.id)}
                  className="p-1 hover:bg-slate-200 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                >
                  <X size={16} className="text-slate-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceUploader;