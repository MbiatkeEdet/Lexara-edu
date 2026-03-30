"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-300 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LE</span>
            
            </div>
            <Link href="/" className="text-xl font-bold text-gray-800">Lexara Edu</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-black hover:text-blue-600 font-bold">Features</a>
            <a href="#benefits" className="text-black hover:text-blue-600 font-bold">Benefits</a>
            <a href="#why-choose" className="text-black hover:text-blue-600 font-bold">Why Choose Us</a>
            <a href="#pricing" className="text-black hover:text-blue-600 font-bold">Pricing</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex space-x-4">
            <Link href="/login">
              <button className="px-4 py-2 text-black font-bold hover:text-blue-700">
                Login
              </button>
            </Link>


            <Link href="/register">
            <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 font-medium">Benefits</a>
              <a href="#why-choose" className="text-gray-600 hover:text-blue-600 font-medium">Why Choose Us</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium">Pricing</a>
              <div className="flex space-x-4 pt-4">
                <button className="flex-1 px-4 py-2 text-blue-600 font-medium border border-blue-600 rounded-lg">
                  Login
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}