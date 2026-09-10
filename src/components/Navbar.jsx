import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoBem from '../assets/image/logo-BemFH.jpeg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [imgError, setImgError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper untuk mengecek halaman aktif
  const isActive = (path) => location.pathname === path;
  const isProfileActive = ['/struktur-pengurus', '/visi-misi', '/filosofi-logo'].includes(location.pathname);

  return (
    <nav 
      id="main-navbar" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md text-slate-900' 
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 overflow-hidden relative border border-white/20">
              {!imgError ? (
                <img 
                  src={logoBem} 
                  alt="Logo BEM FH UNIKU" 
                  className="w-full h-full object-cover scale-[2.5] translate-y-[-2px]"
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="text-xs font-bold text-slate-900">FH</span>
              )}
            </div>
            <div className="text-left">
              <h1 
                className={`font-bold leading-tight text-sm sm:text-base transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                BEM FH UNIKU
              </h1>
              <p 
                className={`text-xs transition-colors duration-300 ${
                  isScrolled ? 'text-slate-600' : 'text-gray-200'
                }`}
              >
                Kabinet Reformasi 2026
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 text-xs font-semibold">
            {/* Beranda */}
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-xl transition duration-300 ${
                isActive('/') 
                  ? isScrolled ? 'bg-amber-600 text-white font-bold' : 'bg-white/20 text-white backdrop-blur-sm border border-white/20 font-bold' 
                  : isScrolled ? 'text-slate-800 hover:text-amber-600' : 'text-white hover:opacity-80'
              }`}
            >
              Beranda
            </Link>

            {/* Dropdown Profile */}
            <div 
              className="relative"
              onMouseEnter={() => setProfileDropdown(true)}
              onMouseLeave={() => setProfileDropdown(false)}
            >
              <button 
                type="button"
                className={`px-3 py-2 transition duration-300 flex items-center space-x-1 focus:outline-none ${
                  isProfileActive 
                    ? 'text-amber-600 font-bold' 
                    : isScrolled ? 'text-slate-800 hover:text-amber-600' : 'text-white hover:opacity-80'
                }`}
              >
                <span>Profile</span>
                <svg className={`w-3 h-3 transition-transform duration-200 ${profileDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {profileDropdown && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-slate-900/95 border border-white/10 rounded-xl shadow-2xl py-2 text-xs text-slate-200 backdrop-blur-md z-50">
                  <Link 
                    to="/struktur-pengurus" 
                    onClick={() => setProfileDropdown(false)} 
                    className={`block px-4 py-2 hover:bg-white/10 ${isActive('/struktur-pengurus') ? 'text-amber-400 font-bold' : 'hover:text-white'}`}
                  >
                    Struktur Pengurus
                  </Link>
                  <Link 
                    to="/visi-misi" 
                    onClick={() => setProfileDropdown(false)} 
                    className={`block px-4 py-2 hover:bg-white/10 ${isActive('/visi-misi') ? 'text-amber-400 font-bold' : 'hover:text-white'}`}
                  >
                    Visi & Misi
                  </Link>
                  <Link 
                    to="/filosofi-logo" 
                    onClick={() => setProfileDropdown(false)} 
                    className={`block px-4 py-2 hover:bg-white/10 ${isActive('/filosofi-logo') ? 'text-amber-400 font-bold' : 'hover:text-white'}`}
                  >
                    Filosofi Logo
                  </Link>
                </div>
              )}
            </div>

            {/* Program Kerja & Kajian */}
            <Link 
              to="/program-kerja" 
              className={`px-3 py-2 transition duration-300 ${
                isActive('/program-kerja') 
                  ? 'text-amber-600 font-bold' 
                  : isScrolled ? 'text-slate-800 hover:text-amber-600' : 'text-white hover:opacity-80'
              }`}
            >
              Program Kerja
            </Link>
            <Link 
              to="/kajian" 
              className={`px-3 py-2 transition duration-300 ${
                isActive('/kajian') 
                  ? 'text-amber-600 font-bold' 
                  : isScrolled ? 'text-slate-800 hover:text-amber-600' : 'text-white hover:opacity-80'
              }`}
            >
              Kajian
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`focus:outline-none p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-slate-800 border-b border-gray-200 px-4 pt-2 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-2 text-xs font-semibold pt-2">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 px-3 rounded-lg ${isActive('/') ? 'bg-amber-600 text-white font-bold' : 'bg-slate-100 text-slate-900'}`}
            >
              Beranda
            </Link>
            
            <div className="pl-3 border-l-2 border-slate-300 my-1 space-y-1">
              <span className="block text-[10px] uppercase text-slate-400 font-bold">Profile</span>
              <Link 
                to="/struktur-pengurus" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block py-1.5 px-2 hover:bg-slate-50 rounded ${isActive('/struktur-pengurus') ? 'text-amber-600 font-bold' : 'text-slate-800'}`}
              >
                Struktur Pengurus
              </Link>
              <Link 
                to="/visi-misi" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block py-1.5 px-2 hover:bg-slate-50 rounded ${isActive('/visi-misi') ? 'text-amber-600 font-bold' : 'text-slate-800'}`}
              >
                Visi & Misi
              </Link>
              <Link 
                to="/filosofi-logo" 
                onClick={() => setMobileMenuOpen(false)} 
                className={`block py-1.5 px-2 hover:bg-slate-50 rounded ${isActive('/filosofi-logo') ? 'text-amber-600 font-bold' : 'text-slate-800'}`}
              >
                Filosofi Logo
              </Link>
            </div>

            <Link 
              to="/program-kerja" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 px-3 hover:bg-slate-50 rounded-lg ${isActive('/program-kerja') ? 'text-amber-600 font-bold bg-amber-50' : 'text-slate-800'}`}
            >
              Program Kerja
            </Link>
            <Link 
              to="/kajian" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2.5 px-3 hover:bg-slate-50 rounded-lg ${isActive('/kajian') ? 'text-amber-600 font-bold bg-amber-50' : 'text-slate-800'}`}
            >
              Kajian
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}