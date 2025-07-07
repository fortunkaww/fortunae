
import React from 'react';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-purple-300" />
              <span className="text-xl font-bold">Fortune VPN</span>
            </div>
            <p className="text-purple-200 mb-6">
              Protecting your digital privacy with military-grade encryption and lightning-fast speeds. 
              Join millions of users who trust Fortune VPN.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-300">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-purple-200 hover:text-purple-100 transition-colors">Features</a></li>
              <li><a href="#" className="text-purple-200 hover:text-purple-100 transition-colors">Apps</a></li>
              <li><a href="#" className="text-purple-200 hover:text-purple-100 transition-colors">Servers</a></li>
              <li><a href="#" className="text-purple-200 hover:text-purple-100 transition-colors">What is VPN?</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-300">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-purple-200 hover:text-purple-100 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-purple-200 hover:text-purple-100 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-purple-200 hover:text-purple-100 transition-colors">Setup Guides</a></li>
              <li><a href="#" className="text-purple-200 hover:text-purple-100 transition-colors">System Status</a></li>
              <li><a href="#" className="text-purple-200 hover:text-purple-100 transition-colors">Bug Reports</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-purple-300">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-300" />
                <span className="text-purple-200">support@fortune-vpn.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-300" />
                <span className="text-purple-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-300" />
                <span className="text-purple-200">New York, USA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-200 mb-4 md:mb-0">
              © 2025 Fortune VPN. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-purple-200 hover:text-purple-100 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-purple-200 hover:text-purple-100 transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-purple-200 hover:text-purple-100 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
