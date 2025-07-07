import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [codes, setCodes] = useState<string[]>([]);
  const [newCode, setNewCode] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Load codes from localStorage
    const savedCodes = JSON.parse(localStorage.getItem('validCodes') || '[]');
    setCodes(savedCodes);
  }, []);

  const authenticate = () => {
    if (password === 'zxcdead12AS!') {
      setIsAuthenticated(true);
      toast({
        title: "Access Granted",
        description: "Welcome to the admin panel.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid password.",
        variant: "destructive",
      });
    }
  };

  const generateRandomCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const addCode = () => {
    const codeToAdd = newCode.trim().toUpperCase() || generateRandomCode();
    if (codes.includes(codeToAdd)) {
      toast({
        title: "Code Already Exists",
        description: "This code is already in the system.",
        variant: "destructive",
      });
      return;
    }

    const updatedCodes = [...codes, codeToAdd];
    setCodes(updatedCodes);
    localStorage.setItem('validCodes', JSON.stringify(updatedCodes));
    setNewCode('');
    
    toast({
      title: "Code Added",
      description: `Code ${codeToAdd} has been added successfully.`,
    });
  };

  const removeCode = (codeToRemove: string) => {
    const updatedCodes = codes.filter(code => code !== codeToRemove);
    setCodes(updatedCodes);
    localStorage.setItem('validCodes', JSON.stringify(updatedCodes));
    
    toast({
      title: "Code Removed",
      description: `Code ${codeToRemove} has been removed.`,
    });
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: `Code ${code} copied to clipboard.`,
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center">
        <div className="bg-slate-800 rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Admin Access</h1>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold mb-3">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && authenticate()}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={authenticate}
            className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Add New Code */}
          <div className="bg-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Generate Partnership Code</h2>
            
            <div className="mb-4">
              <label htmlFor="newCode" className="block text-lg font-semibold mb-3">
                Custom Code (Optional)
              </label>
              <input
                id="newCode"
                type="text"
                value={newCode}
                onChange={(e) => setNewCode(e.target.value.toUpperCase())}
                placeholder="Leave empty for random code"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={addCode}
              className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add Code</span>
            </button>
          </div>

          {/* Existing Codes */}
          <div className="bg-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Active Codes ({codes.length})</h2>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {codes.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No codes created yet</p>
              ) : (
                codes.map((code, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
                    <span className="font-mono text-lg">{code}</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => copyCode(code)}
                        className="text-blue-400 hover:text-blue-300 p-2 rounded transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeCode(code)}
                        className="text-red-400 hover:text-red-300 p-2 rounded transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
