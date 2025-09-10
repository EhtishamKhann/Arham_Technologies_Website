import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo + Name */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img 
              src="/images/nav-logo.png" 
              alt="Arham Technologies Logo" 
              className="h-10 w-10 object-cover" 
            />
            <span className="font-semibold text-lg text-white whitespace-nowrap">
              Arham Technologies
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400 text-center w-full mt-4">
            © {new Date().getFullYear()} Arham Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;