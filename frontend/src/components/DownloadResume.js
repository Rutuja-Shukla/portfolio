import React from 'react';
import { Download } from 'lucide-react';
import './DownloadResume.css';

const DownloadResume = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1Pi951BdIdF57BUmYAD7ndHRM-lSkA8-6/view?usp=sharing', '_blank');
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
