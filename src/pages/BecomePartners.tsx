
import React, { useState } from 'react';
import { ArrowLeft, Download, Shield, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const BecomePartners = () => {
  const [code, setCode] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{ valid: boolean; message: string } | null>(null);

  const validateCode = () => {
    setIsValidating(true);
    
    // Simulate validation
    setTimeout(() => {
      const savedCodes = JSON.parse(localStorage.getItem('fortuneVpnCodes') || '[]');
      const isValid = savedCodes.includes(code.trim());
      
      setValidationResult({
        valid: isValid,
        message: isValid 
          ? 'Code is valid! You can now download Fortune VPN.'
          : 'Invalid code. Please check your code and try again.'
      });
      setIsValidating(false);
    }, 1000);
  };

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'FortuneVPN-Setup.exe';
    link.click();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-md mx-auto">
          <div className="bg-slate-800 rounded-lg p-8 shadow-xl">
            <div className="text-center mb-6">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">Enter Your Code</h1>
              <p className="text-gray-400">Please enter your Fortune VPN access code to download the application.</p>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter your code here"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                />
              </div>

              <button
                onClick={validateCode}
                disabled={!code.trim() || isValidating}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                {isValidating ? 'Validating...' : 'Validate Code'}
              </button>

              {validationResult && (
                <div className={`p-4 rounded-lg flex items-center space-x-2 ${
                  validationResult.valid ? 'bg-green-900/50 border border-green-700' : 'bg-red-900/50 border border-red-700'
                }`}>
                  {validationResult.valid ? (
                    <Check className="h-5 w-5 text-green-400" />
                  ) : (
                    <X className="h-5 w-5 text-red-400" />
                  )}
                  <span className={validationResult.valid ? 'text-green-400' : 'text-red-400'}>
                    {validationResult.message}
                  </span>
                </div>
              )}

              {validationResult?.valid && (
                <button
                  onClick={handleDownload}
                  className="w-full bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Fortune VPN</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartners;
