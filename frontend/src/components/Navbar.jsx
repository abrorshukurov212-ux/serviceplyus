import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { siteInfo, boilerBrands } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBoilersOpen, setIsBoilersOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsBoilersOpen(false);
  }, [location]);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.contact, path: '/contact' }
  ];


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">ServicePlyus</div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Boilers Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsBoilersOpen(true)}
                onMouseLeave={() => setIsBoilersOpen(false)}
              >
                <span>{t.nav.boilers}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isBoilersOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 max-h-96 overflow-y-auto"
                  onMouseEnter={() => setIsBoilersOpen(true)}
                  onMouseLeave={() => setIsBoilersOpen(false)}
                >
                  {boilerBrands.map((brand) => (
                    <Link
                      key={brand.slug}
                      to={`/katyollar/${brand.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Language, Phone & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">{language === 'uz' ? 'UZ' : 'RU'}</span>
            </button>
            
            <a
              href={siteInfo.phoneLink}
              className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">{siteInfo.phone}</span>
            </a>
            
            <a
              href={siteInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
              aria-label="Telegram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.779-1.362 5.016-.168.523-.5.697-.819.715-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.788.027-.216.324-.437.892-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.154.232.17.326.016.094.036.308.02.475z"/>
              </svg>
            </a>
            
            <a
              href={siteInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-90 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Boilers Dropdown */}
              <div>
                <button
                  onClick={() => setIsBoilersOpen(!isBoilersOpen)}
                  className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <span>{t.nav.boilers}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isBoilersOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isBoilersOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {boilerBrands.map((brand) => (
                      <Link
                        key={brand.slug}
                        to={`/katyollar/${brand.slug}`}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      >
                        {brand.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Language Switcher */}
              <div className="px-4 pt-3 border-t border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Globe className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold text-gray-700">
                    {language === 'uz' ? 'Русский (RU)' : 'O\'zbek (UZ)'}
                  </span>
                </button>
              </div>

              {/* Mobile Contact Buttons */}
              <div className="flex flex-col space-y-3 px-4 pt-3 border-t border-gray-200">
                <a
                  href={siteInfo.phoneLink}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">{siteInfo.phone}</span>
                </a>
                
                <div className="flex items-center justify-center space-x-4">
                  <a
                    href={siteInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.779-1.362 5.016-.168.523-.5.697-.819.715-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.248-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.788.027-.216.324-.437.892-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.154.232.17.326.016.094.036.308.02.475z"/>
                    </svg>
                    <span className="text-sm font-medium">{t.common.telegram}</span>
                  </a>
                  
                  <a
                    href={siteInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm font-medium">{t.common.instagram}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

};

export default Navbar;