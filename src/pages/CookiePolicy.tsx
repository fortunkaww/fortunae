
import React from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Cookie className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-gray-400">Last updated: January 2025</p>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">What Are Cookies</h2>
              <p className="text-gray-300">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                They help us provide you with a better experience by remembering your preferences and settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">How We Use Cookies</h2>
              <p className="text-gray-300 mb-4">Fortune VPN uses cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Performance cookies to analyze website usage</li>
                <li>Preference cookies to remember your settings</li>
                <li>Security cookies to protect against fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-purple-300">Essential Cookies</h3>
                  <p className="text-gray-300">Required for the website to function properly and cannot be disabled.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-purple-300">Analytics Cookies</h3>
                  <p className="text-gray-300">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-purple-300">Functional Cookies</h3>
                  <p className="text-gray-300">Remember your preferences and provide enhanced features.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Managing Cookies</h2>
              <p className="text-gray-300">
                You can control and manage cookies through your browser settings. Please note that removing or 
                blocking cookies may impact your user experience and some features may not work properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Third-Party Cookies</h2>
              <p className="text-gray-300">
                We may use third-party services that set cookies on our behalf. These cookies are governed by 
                the respective third parties' privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Contact Us</h2>
              <p className="text-gray-300">
                If you have questions about our Cookie Policy, please contact us at: 
                <span className="text-purple-400"> support@fortune-vpn.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
