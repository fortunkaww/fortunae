
import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <FileText className="h-16 w-16 text-purple-300 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-purple-200 text-lg">Last updated: January 2025</p>
          </div>

          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-8 space-y-6 border border-purple-600">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Acceptance of Terms</h2>
              <p className="text-purple-100">
                By accessing and using Fortune VPN services, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Service Description</h2>
              <p className="text-purple-100 mb-4">
                Fortune VPN provides virtual private network services that allow users to:
              </p>
              <ul className="list-disc list-inside text-purple-100 space-y-2">
                <li>Encrypt internet traffic</li>
                <li>Access geo-restricted content</li>
                <li>Protect privacy and anonymity online</li>
                <li>Secure connections on public Wi-Fi networks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Prohibited Uses</h2>
              <p className="text-purple-100 mb-4">You may not use our service for:</p>
              <ul className="list-disc list-inside text-purple-100 space-y-2">
                <li>Illegal activities or violation of laws</li>
                <li>Harassment, abuse, or harm to others</li>
                <li>Spamming or unauthorized commercial activities</li>
                <li>Attempting to compromise network security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Payment and Refunds</h2>
              <p className="text-purple-100">
                We offer a 30-day money-back guarantee for new subscribers. Refund requests must be submitted 
                within 30 days of the initial purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Limitation of Liability</h2>
              <p className="text-purple-100">
                Fortune VPN shall not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Contact Information</h2>
              <p className="text-purple-100">
                For questions regarding these Terms of Service, contact us at: 
                <span className="text-purple-300"> support@fortune-vpn.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
