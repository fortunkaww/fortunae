
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Trash2, Key, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [codes, setCodes] = useState<Array<{code: string, createdAt: string}>>([]);
  const [newCode, setNewCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      loadCodes();
    }
  }, [isAuthenticated]);

  const loadCodes = () => {
    const savedCodes = JSON.parse(localStorage.getItem('fortunevpn_codes') || '[]');
    setCodes(savedCodes);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'zxcdead12AS!') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleAddCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode.trim()) return;

    const newCodeObj = {
      code: newCode.trim(),
      createdAt: new Date().toISOString()
    };

    const updatedCodes = [...codes, newCodeObj];
    setCodes(updatedCodes);
    localStorage.setItem('fortunevpn_codes', JSON.stringify(updatedCodes));
    setNewCode('');
  };

  const handleDeleteCode = (codeToDelete: string) => {
    const updatedCodes = codes.filter(c => c.code !== codeToDelete);
    setCodes(updatedCodes);
    localStorage.setItem('fortunevpn_codes', JSON.stringify(updatedCodes));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white flex items-center justify-center">
        <div className="bg-gradient-to-r from-purple-800 to-indigo-800 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-purple-600">
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-purple-300 mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Admin Access</h1>
            <p className="text-purple-200 mt-2">Enter admin password to continue</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-purple-200 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-purple-900 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400"
                placeholder="Enter admin password"
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
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-6">
            <Link to="/" className="text-purple-300 hover:text-purple-200 text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-purple-300 hover:text-purple-200"
          >
            Logout
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Key className="h-16 w-16 text-purple-300 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Code Management</h1>
            <p className="text-purple-200">Manage access codes for Fortune VPN downloads</p>
          </div>

          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-8 mb-8 border border-purple-600">
            <h2 className="text-2xl font-bold mb-6">Create New Code</h2>
            <form onSubmit={handleAddCode} className="flex gap-4">
              <input
                type="text"
                value={newCode}
                onChange={(e) => setNewCode(e.target.value)}
                className="flex-1 px-4 py-3 bg-purple-900 border border-purple-600 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400"
                placeholder="Enter new access code"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 shadow-lg"
              >
                <Plus className="h-4 w-4" />
                <span>Add Code</span>
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-8 border border-purple-600">
            <h2 className="text-2xl font-bold mb-6">Existing Codes ({codes.length})</h2>
            
            {codes.length === 0 ? (
              <p className="text-purple-200 text-center py-8">No codes created yet</p>
            ) : (
              <div className="space-y-4">
                {codes.map((codeObj, index) => (
                  <div key={index} className="bg-purple-900 p-4 rounded-lg flex items-center justify-between border border-purple-700">
                    <div>
                      <p className="font-mono text-lg text-purple-100">{codeObj.code}</p>
                      <p className="text-purple-300 text-sm">
                        Created: {new Date(codeObj.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteCode(codeObj.code)}
                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
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
