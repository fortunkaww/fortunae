
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BecomePartners = () => {
  const [code, setCode] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const { toast } = useToast();

  const validateCode = async () => {
    if (!code) return;
    
    setIsValidating(true);
    // Simulate validation - in real app this would be an API call
    setTimeout(() => {
      const validCodes = JSON.parse(localStorage.getItem('validCodes') || '[]');
      const codeExists = validCodes.includes(code);
      setIsValid(codeExists);
      setIsValidating(false);
      
      if (codeExists) {
        toast({
          title: "Code Valid!",
          description: "Your partnership code has been validated successfully.",
        });
      } else {
        toast({
          title: "Invalid Code",
          description: "Please check your code and try again.",
          variant: "destructive",
        });
      }
    }, 1000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Download link copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Become Our Partner</h1>
          <p className="text-xl text-gray-300 mb-12">
            Enter your partnership code to access Fortune VPN premium features
          </p>

          <div className="bg-slate-800 rounded-2xl p-8 mb-8">
            <div className="mb-6">
              <label htmlFor="code" className="block text-left text-lg font-semibold mb-3">
                Partnership Code
              </label>
              <input
                id="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="Enter your code here"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={validateCode}
              disabled={isValidating || !code}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              {isValidating ? 'Validating...' : 'Validate Code'}
            </button>
          </div>

          {isValid && (
            <div className="bg-green-800/50 border border-green-600 rounded-2xl p-8">
              <div className="flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-400 mr-2" />
                <h2 className="text-2xl font-bold text-green-400">Code Validated!</h2>
              </div>
              
              <p className="text-green-300 mb-6">
                Your partnership code is valid. You can now download Fortune VPN Premium.
              </p>

              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-gray-300">Windows Download</span>
                  <button
                    onClick={() => copyToClipboard('https://fortunevpn.com/download/windows')}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <Copy className="h-4 w-4" />
                    <span>Copy Link</span>
                  </button>
                </div>

                <div className="bg-slate-800 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-gray-300">macOS Download</span>
                  <button
                    onClick={() => copyToClipboard('https://fortunevpn.com/download/macos')}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <Copy className="h-4 w-4" />
                    <span>Copy Link</span>
                  </button>
                </div>

                <div className="bg-slate-800 rounded-lg p-4 flex items-center justify-between">
                  <span className="text-sm text-gray-300">Android APK</span>
                  <button
                    onClick={() => copyToClipboard('https://fortunevpn.com/download/android')}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <Copy className="h-4 w-4" />
                    <span>Copy Link</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BecomePartners;
