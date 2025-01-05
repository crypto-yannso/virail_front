import React from 'react';
import { Upload } from 'lucide-react';

const UploadButton = () => {
  return (
    <button className="btn-primary flex items-center gap-2">
      <Upload size={18} />
      Upload Resources
    </button>
  );
}

export default UploadButton;