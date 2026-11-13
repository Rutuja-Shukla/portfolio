import React from 'react';
import { Download } from 'lucide-react';
import './DownloadResume.css';

export const DownloadResume: React.FC = () => {
  const handleDownload = () => {
    // Primary path to the updated resume PDF
    const resumePath = '/assets/aistudio/Rutuja_Shukla_cfd7dd99.pdf';
    
    // Create an anchor link and trigger download/view
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Rutuja_Shukla_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="download-resume"
      onClick={handleDownload}
      aria-label="Download Resume"
      title="Download Rutuja Shukla's Updated Resume (PDF)"
    >
      <Download size={18} />
      <span>Download Resume</span>
    </button>
  );
};

export default DownloadResume;
