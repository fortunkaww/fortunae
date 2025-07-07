
import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-purple-200 text-lg">Last updated: January 2025</p>
          </div>

          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-8 space-y-6 border border-purple-600">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Information We Collect</h2>
              <p className="text-purple-100 mb-4">
                At Fortune VPN, we are committed to protecting your privacy. We collect minimal information necessary to provide our VPN services:
              </p>
              <ul className="list-disc list-inside text-purple-100 space-y-2">
                <li>Account information (email address for account creation)</li>
                <li>Payment information (processed by third-party payment processors)</li>
                <li>Technical information (connection logs for troubleshooting)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">How We Use Your Information</h2>
              <p className="text-purple-100 mb-4">We use collected information to:</p>
              <ul className="list-disc list-inside text-purple-100 space-y-2">
                <li>Provide and maintain our VPN services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Provide customer support</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">No-Logs Policy</h2>
              <p className="text-purple-100">
                Fortune VPN operates under a strict no-logs policy. We do not store, collect, or share your browsing history, 
                connection timestamps, bandwidth usage, traffic destination, or DNS queries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Data Security</h2>
              <p className="text-purple-100">
                We implement industry-standard security measures to protect your personal information, including encryption, 
                secure servers, and regular security audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Contact Us</h2>
              <p className="text-purple-100">
                If you have any questions about this Privacy Policy, please contact us at: 
                <span className="text-purple-300"> support@fortune-vpn.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
