import React from 'react';
import { Download } from 'lucide-react';
import './DownloadResume.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const DownloadResume = () => {
  const handleDownload = () => {
    window.open(`${BACKEND_URL}/api/resume`, '_blank');
  };

  return (
    <button 
      className="download-resume"
      onClick={handleDownload}
      aria-label="Download Resume"
    >
      <Download size={18} />
      <span>Download Resume</span>
    </button>
  );
};

export default DownloadResume;