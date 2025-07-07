
import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <FileText className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-gray-400">Last updated: January 2025</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using Fortune VPN services, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Service Description</h2>
              <p className="text-gray-300 mb-4">
                Fortune VPN provides virtual private network services that allow users to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Encrypt internet traffic</li>
                <li>Access geo-restricted content</li>
                <li>Protect privacy and anonymity online</li>
                <li>Secure connections on public Wi-Fi networks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Prohibited Uses</h2>
              <p className="text-gray-300 mb-4">You may not use our service for:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Illegal activities or violation of laws</li>
                <li>Harassment, abuse, or harm to others</li>
                <li>Spamming or unauthorized commercial activities</li>
                <li>Attempting to compromise network security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Payment and Refunds</h2>
              <p className="text-gray-300">
                We offer a 30-day money-back guarantee for new subscribers. Refund requests must be submitted 
                within 30 days of the initial purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Limitation of Liability</h2>
              <p className="text-gray-300">
                Fortune VPN shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Contact Information</h2>
              <p className="text-gray-300">
                For questions regarding these Terms of Service, contact us at: 
                <span className="text-purple-400"> support@fortune-vpn.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
