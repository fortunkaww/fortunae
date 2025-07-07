
import React from 'react';
import { Play, Shield, Globe, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Secure Your
              <span className="text-blue-400 block">Digital Life</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Fortune VPN provides military-grade encryption and lightning-fast speeds 
              to protect your privacy online. Connect to 5000+ servers worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/30 hover:border-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>30-day money back</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-green-400" />
                <span>5000+ servers</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-green-400" />
                <span>Ultra-fast speeds</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 text-slate-900">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-500">Fortune VPN</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Connection Status</span>
                    <span className="text-green-600 font-semibold">Connected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Server Location</span>
                    <span className="font-semibold">New York, USA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">IP Address</span>
                    <span className="font-mono text-sm">192.168.1.***</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
