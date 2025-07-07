
import React from 'react';
import { ArrowLeft, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-purple-300 hover:text-purple-200 mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Cookie className="h-16 w-16 text-purple-300 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-purple-200 text-lg">Last updated: January 2025</p>
          </div>

          <div className="bg-gradient-to-r from-purple-800 to-indigo-800 rounded-2xl p-8 space-y-6 border border-purple-600">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">What Are Cookies</h2>
              <p className="text-purple-100">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better browsing experience and allow certain features to function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">How We Use Cookies</h2>
              <p className="text-purple-100 mb-4">Fortune VPN uses cookies for the following purposes:</p>
              <ul className="list-disc list-inside text-purple-100 space-y-2">
                <li>Essential website functionality and navigation</li>
                <li>Remembering your preferences and settings</li>
                <li>Analyzing website performance and usage</li>
                <li>Providing personalized content and recommendations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Essential Cookies</h3>
                  <p className="text-purple-100 text-sm">Required for basic website functionality and cannot be disabled.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Performance Cookies</h3>
                  <p className="text-purple-100 text-sm">Help us understand how visitors interact with our website.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">Preference Cookies</h3>
                  <p className="text-purple-100 text-sm">Remember your settings and preferences for a better experience.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Managing Cookies</h2>
              <p className="text-purple-100 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-purple-100 space-y-2">
                <li>Browser settings: Most browsers allow you to block or delete cookies</li>
                <li>Third-party tools: Use privacy tools to manage tracking cookies</li>
                <li>Opt-out links: Some services provide direct opt-out options</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Contact Us</h2>
              <p className="text-purple-100">
                If you have questions about our Cookie Policy, please contact us at: 
                <span className="text-purple-300"> support@fortune-vpn.com</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
