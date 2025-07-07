
import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadButton from './DownloadButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-purple-300" />
            <span className="text-xl font-bold">Fortune VPN</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-purple-300 transition-colors">Features</a>
            <a href="#faq" className="hover:text-purple-300 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
            <Link to="/become-partners" className="hover:text-purple-300 transition-colors">Partners</Link>
            <DownloadButton className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg transition-all shadow-lg">
              Get Started
            </DownloadButton>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="hover:text-purple-300 transition-colors">Features</a>
              <a href="#faq" className="hover:text-purple-300 transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
              <Link to="/become-partners" className="hover:text-purple-300 transition-colors">Partners</Link>
              <DownloadButton className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg transition-all w-fit shadow-lg">
                Get Started
              </DownloadButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
