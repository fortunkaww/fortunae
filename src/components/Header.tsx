
import React from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadButton from './DownloadButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">Fortune VPN</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            <Link to="/become-partners" className="hover:text-blue-400 transition-colors">Partners</Link>
            <DownloadButton className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
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
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              <Link to="/become-partners" className="hover:text-blue-400 transition-colors">Partners</Link>
              <DownloadButton className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors w-fit">
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
