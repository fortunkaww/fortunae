
import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-400">Last updated: January 2025</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                At Fortune VPN, we are committed to protecting your privacy. We collect minimal information necessary to provide our VPN services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Account information (email address for account creation)</li>
                <li>Payment information (processed by third-party payment processors)</li>
                <li>Technical information (connection logs for troubleshooting)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use collected information to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide and maintain our VPN services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Provide customer support</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">No-Logs Policy</h2>
              <p className="text-gray-300">
                Fortune VPN operates under a strict no-logs policy. We do not store, collect, or share your browsing history, 
                connection timestamps, bandwidth usage, traffic destination, or DNS queries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Data Security</h2>
              <p className="text-gray-300">
                We implement industry-standard security measures to protect your personal information, including encryption, 
                secure servers, and regular security audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at: 
                <span className="text-purple-400"> support@fortune-vpn.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
