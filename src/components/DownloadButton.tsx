
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className = '', children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/become-partners');
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center space-x-2 transition-all ${className}`}
    >
      {children || (
        <>
          <Download className="h-5 w-5" />
          <span>Download</span>
        </>
      )}
    </button>
  );
};

export default DownloadButton;
