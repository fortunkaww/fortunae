
import React, { useState } from 'react';
import { ArrowLeft, Download, Shield, Check, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const BecomePartners = () => {
  const [code, setCode] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');
  const [showDownload, setShowDownload] = useState(false);

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsValidating(true);
    setError('');

    try {
      const codes = JSON.parse(localStorage.getItem('fortunevpn_codes') || '[]');
      const foundCode = codes.find((c: any) => c.code === code);

      if (!foundCode) {
        setError('Invalid code. Please check your code and try again.');
        setIsValidating(false);
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowDownload(true);
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
    
    setIsValidating(false);
  };

  const handleDownload = () => {
    window.open('/download/FortuneVPN-Setup.exe', '_blank');
  };

  if (showDownload) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Code Verified Successfully!</h1>
              <p className="text-purple-200 text-lg">Your access code has been validated. You can now download Fortune VPN.</p>
            </div>

            <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-8 mb-8 border border-purple-600">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-6">Download Fortune VPN</h2>
                <button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
                >
                  <Download className="h-5 w-5" />
                  <span>Download for Windows</span>
                </button>
                <p className="text-purple-200 mt-4 text-sm">Compatible with Windows 10/11 (64-bit)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-xl border border-purple-600">
                <Shield className="h-8 w-8 text-purple-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Military-Grade Security</h3>
                <p className="text-purple-200 text-sm">AES-256 encryption protects your data</p>
              </div>
              <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-xl border border-purple-600">
                <Zap className="h-8 w-8 text-purple-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
                <p className="text-purple-200 text-sm">Optimized servers worldwide</p>
              </div>
              <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-xl border border-purple-600">
                <Star className="h-8 w-8 text-purple-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Premium Access</h3>
                <p className="text-purple-200 text-sm">Unlimited bandwidth & servers</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-purple-300">Need help? Contact our support team at <span className="text-purple-200">support@fortune-vpn.com</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-purple-300 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Partner Access Portal</h1>
            <p className="text-purple-200 text-lg">Enter your exclusive access code to download Fortune VPN</p>
          </div>

          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-8 mb-8 border border-purple-600">
            <form onSubmit={handleCodeSubmit} className="max-w-md mx-auto">
              <div className="mb-6">
                <label htmlFor="code" className="block text-purple-200 font-semibold mb-2">
                  Access Code
                </label>
                <input
                  type="text"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full px-4 py-3 bg-purple-900 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your access code"
                  required
                />
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg">
                  <p className="text-red-200 text-sm">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isValidating}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-purple-800 disabled:to-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"
              >
                {isValidating ? 'Validating...' : 'Validate Code'}
              </button>
            </form>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-xl text-center border border-purple-600">
              <Shield className="h-12 w-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Access</h3>
              <p className="text-purple-200 text-sm">Exclusive partner codes ensure secure distribution of Fortune VPN</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-xl text-center border border-purple-600">
              <Download className="h-12 w-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant Download</h3>
              <p className="text-purple-200 text-sm">Get immediate access to the latest version of Fortune VPN</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-xl text-center border border-purple-600">
              <Star className="h-12 w-12 text-purple-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Premium Features</h3>
              <p className="text-purple-200 text-sm">Access all premium features and global server network</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomePartners;
