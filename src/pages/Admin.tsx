
import React, { useState, useEffect } from 'react';
import { Shield, Plus, Trash2, Eye, EyeOff } from 'lucide-react';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [codes, setCodes] = useState<string[]>([]);
  const [newCode, setNewCode] = useState('');
  const [error, setError] = useState('');

  const ADMIN_PASSWORD = 'zxcdead12AS!';

  useEffect(() => {
    if (isAuthenticated) {
      loadCodes();
    }
  }, [isAuthenticated]);

  const loadCodes = () => {
    const savedCodes = JSON.parse(localStorage.getItem('fortuneVpnCodes') || '[]');
    setCodes(savedCodes);
  };

  const saveCodes = (newCodes: string[]) => {
    localStorage.setItem('fortuneVpnCodes', JSON.stringify(newCodes));
    setCodes(newCodes);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const addCode = () => {
    if (newCode.trim() && !codes.includes(newCode.trim())) {
      const updatedCodes = [...codes, newCode.trim()];
      saveCodes(updatedCodes);
      setNewCode('');
    }
  };

  const deleteCode = (codeToDelete: string) => {
    const updatedCodes = codes.filter(code => code !== codeToDelete);
    saveCodes(updatedCodes);
  };

  const generateRandomCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setNewCode(result);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="bg-slate-800 rounded-lg p-8 shadow-xl max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2">Admin Login</h1>
            <p className="text-gray-400">Enter the admin password to access the panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {error && (
              <div className="text-red-400 text-sm">{error}</div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg font-semibold transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Add New Code</h2>
            <div className="flex space-x-4">
              <input
                type="text"
                value={newCode}
                onChange={(e) => setNewCode(e.target.value)}
                placeholder="Enter new code"
                className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
              />
              <button
                onClick={generateRandomCode}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
              >
                Generate
              </button>
              <button
                onClick={addCode}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Existing Codes ({codes.length})</h2>
            
            {codes.length === 0 ? (
              <p className="text-gray-400">No codes created yet.</p>
            ) : (
              <div className="space-y-2">
                {codes.map((code, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-700 p-3 rounded-lg">
                    <span className="font-mono text-green-400">{code}</span>
                    <button
                      onClick={() => deleteCode(code)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
