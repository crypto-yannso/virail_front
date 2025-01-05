import React, { useCallback } from 'react';
import { Upload, Link as LinkIcon, File, X } from 'lucide-react';
import { useBrandVoiceStore } from '../../../store/brandVoiceStore';

const ExampleUploader = () => {
  const { addExample, removeExample, examples } = useBrandVoiceStore();
  const [url, setUrl] = React.useState('');

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      addExample({
        name: url,
        type: 'link',
        url,
        format: 'reference'
      });
      setUrl('');
    }
  };

  const handleFileDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    
    files.forEach(file => {
      addExample({
        name: file.name,
        type: 'file',
        file,
        format: file.type.split('/')[0]
      });
    });
  }, [addExample]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    files.forEach(file => {
      addExample({
        name: file.name,
        type: 'file',
        file,
        format: file.type.split('/')[0]
      });
    });
  };

  return (
    <div className="card p-6">
      <h3 className="font-semibold mb-4 text-slate-900 dark:text-text-primary">Content Examples</h3>
      
      <div className="space-y-4">
        {/* File Upload Area */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
          className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center 
                     hover:border-primary-400 transition-colors cursor-pointer"
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            multiple
            onChange={handleFileSelect}
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload size={24} className="mx-auto mb-2 text-slate-400" />
            <p className="text-sm text-slate-600 mb-2">
              Drop files or click to upload
            </p>
            <p className="text-xs text-slate-500">
              Supports PDF, DOCX, MP3, MP4, and more
            </p>
          </label>
        </div>

        {/* URL Input */}
        <form onSubmit={handleUrlSubmit} className="flex gap-2">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste a link to content..."
            className="input flex-1"
          />
          <button type="submit" className="button-primary">
            Add
          </button>
        </form>

        {/* Examples List */}
        {examples.length > 0 && (
          <div className="space-y-2">
            {examples.map((example, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between p-3 bg-slate-50 rounded-lg group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    {example.type === 'link' ? (
                      <LinkIcon size={16} className="text-primary-500" />
                    ) : (
                      <File size={16} className="text-primary-500" />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-medium truncate max-w-[300px]">
                      {example.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {example.format}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeExample(index)}
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

export default ExampleUploader;