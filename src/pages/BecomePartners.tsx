
import React, { useState } from 'react';
import { ArrowLeft, Download, Shield, Check, X, DollarSign, TrendingUp, Award, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const BecomePartners = () => {
  const [code, setCode] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<{ valid: boolean; message: string } | null>(null);

  const validateCode = () => {
    setIsValidating(true);
    
    setTimeout(() => {
      const savedCodes = JSON.parse(localStorage.getItem('fortuneVpnCodes') || '[]');
      const isValid = savedCodes.includes(code.trim());
      
      setValidationResult({
        valid: isValid,
        message: isValid 
          ? 'Code is valid! You can now download Fortune VPN.'
          : 'Invalid code. Code does not exist.'
      });
      setIsValidating(false);
    }, 1000);
  };

  const handleDownload = () => {
    // Create download link for file from your VPS server
    const link = document.createElement('a');
    link.href = '/download/FortuneVPN-Setup.exe'; // This will point to your VPS server file
    link.download = 'FortuneVPN-Setup.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        {/* Partner Program Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Become a Fortune VPN Partner</h1>
          <p className="text-gray-400 text-lg mb-8">
            Join our exclusive partner program and unlock premium VPN solutions while
            earning substantial commissions. Build your business with the most trusted VPN platform.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-purple-400" />
              <span className="text-sm">Trusted by 5M+ Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-5 w-5 text-green-400" />
              <span className="text-sm">99.9% Uptime</span>
            </div>
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <DollarSign className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Revenue Sharing</h3>
            <div className="text-purple-400 text-sm font-medium mb-2">Up to 40%</div>
            <p className="text-gray-400 text-sm">
              Earn up to 40% commission on every customer you refer to Fortune VPN.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Scalable Business</h3>
            <div className="text-purple-400 text-sm font-medium mb-2">Recurring Income</div>
            <p className="text-gray-400 text-sm">
              Build a sustainable income stream with our growing partner network.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
            <div className="text-purple-400 text-sm font-medium mb-2">VIP Treatment</div>
            <p className="text-gray-400 text-sm">
              Get access to partner-only features, tools, and premium support.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 text-center">
            <div className="bg-purple-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Tools</h3>
            <div className="text-purple-400 text-sm font-medium mb-2">Pro Tools</div>
            <p className="text-gray-400 text-sm">
              Comprehensive dashboard, analytics, and marketing materials provided.
            </p>
          </div>
        </div>

        {/* Code Input Section */}
        <div className="max-w-md mx-auto">
          <div className="bg-slate-800 rounded-lg p-8 shadow-xl">
            <div className="text-center mb-6">
              <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Enter Your Code</h2>
              <p className="text-gray-400">Please enter your Fortune VPN access code to download the application.</p>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter your code here"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                />
              </div>

              <button
                onClick={validateCode}
                disabled={!code.trim() || isValidating}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-4 py-3 rounded-lg font-semibold transition-colors"
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
