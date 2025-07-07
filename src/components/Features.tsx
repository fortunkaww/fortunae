
import React from 'react';
import { Shield, Zap, Globe, Lock, Eye, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "AES-256 encryption protects your data from hackers and surveillance."
    },
    {
      icon: Zap,
      title: "Lightning Fast Speeds",
      description: "Optimized servers deliver blazing-fast speeds for streaming and browsing."
    },
    {
      icon: Globe,
      title: "5000+ Global Servers",
      description: "Access content from anywhere with our worldwide server network."
    },
    {
      icon: Lock,
      title: "No-Logs Policy",
      description: "We never track, collect, or share your private data. Your privacy is guaranteed."
    },
    {
      icon: Eye,
      title: "Hide Your IP",
      description: "Browse anonymously and protect your identity from prying eyes."
    },
    {
      icon: Smartphone,
      title: "All Devices Supported",
      description: "Protect all your devices with one Fortune VPN subscription."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">
            Why Choose Fortune VPN?
          </h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Experience the perfect combination of security, speed, and simplicity. 
            Our advanced features keep you protected while delivering exceptional performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:border-purple-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-purple-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
