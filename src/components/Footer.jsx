import React from "react";
import { Link } from "react-router-dom";
import logokabinet from "../assets/image/logo-BemFH.jpeg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F5F0] text-slate-700 pt-12 pb-6 px-4 sm:px-8 lg:px-12 border-t border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo & Nama Organisasi */}
        <div className="flex items-center space-x-4 mb-10">
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src={logokabinet}
              alt="Logo BEM FH UNIKU"
              className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-full border border-slate-200 shadow-sm group-hover:scale-105 transition duration-300"
            />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1E36] tracking-tight group-hover:text-amber-600 transition">
                BEM FH UNIKU
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-[#D97706] tracking-wide uppercase">
                Kabinet Reformasi 2026
              </p>
            </div>
          </Link>
        </div>

        {/* Grid Section: 4 Kolom Informasi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-200">
          
          {/* Kolom 1: Navigasi Halaman Utama */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Navigasi</h3>
            <ul className="flex flex-col space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link to="/" className="hover:text-[#D97706] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/program-kerja" className="hover:text-[#D97706] transition-colors">
                  Program Kerja
                </Link>
              </li>
              <li>
                <Link to="/kajian" className="hover:text-[#D97706] transition-colors">
                  Kajian & Rilisan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 2: Tentang BEM FH */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Tentang BEM</h3>
            <ul className="flex flex-col space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <Link to="/struktur-pengurus" className="hover:text-[#D97706] transition-colors">
                  Struktur Pengurus
                </Link>
              </li>
              <li>
                <Link to="/visi-misi" className="hover:text-[#D97706] transition-colors">
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link to="/filosofi-logo" className="hover:text-[#D97706] transition-colors">
                  Filosofi Logo
                </Link>
              </li>
              <li>
                <Link to="/sop-bem" className="hover:text-[#D97706] transition-colors">
                  SOP BEM
                </Link>
              </li>
              <li>
                <Link to="/arsip-persuratan" className="hover:text-[#D97706] transition-colors">
                  Arsip Persuratan
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Media Sosial</h3>
            <div className="flex items-center space-x-3 text-slate-700">
              <a 
                href="https://www.instagram.com/bemfh.uniku?igsi=cTRhdnl3OGFqenkw" 
                className="p-2 bg-white border border-slate-200 rounded-xl hover:text-[#D97706] hover:border-amber-400 hover:shadow-sm transition" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@bemfh.uniku?_r=1&_t=ZS-94jRMqsj56K" 
                className="p-2 bg-white border border-slate-200 rounded-xl hover:text-[#D97706] hover:border-amber-400 hover:shadow-sm transition"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.33 1.54-1.32 2.53.01.82.4 1.63 1.05 2.13.7.55 1.63.78 2.48.62.99-.16 1.87-.84 2.27-1.75.22-.52.31-1.09.3-1.66.02-4.85.01-9.7.01-14.55z"/>
                </svg>
              </a>
              <a 
                href="mailto:bemfhkabinetreformasi@gmail.com" 
                className="p-2 bg-white border border-slate-200 rounded-xl hover:text-[#D97706] hover:border-amber-400 hover:shadow-sm transition" 
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Kolom 4: Kontak Sekretariat */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Kontak Sekretariat</h3>
            <ul className="flex flex-col space-y-2.5 text-xs text-slate-600">
              <li>
                <a 
                  href="https://maps.app.goo.gl/Ma9TkLMxLXdrveSY8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 hover:text-[#D97706] transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0 mt-0.5 text-amber-600 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Gedung FH UNIKU Kampus 1, Jl. Cut Nyak Dhien No.36A, Cijoho, Kuningan, Jawa Barat 45513</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:bemfhkabinetreformasi@gmail.com" 
                  className="flex items-center space-x-2 hover:text-[#D97706] transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0 text-amber-600 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="truncate">bemfhkabinetreformasi@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/6283862075857" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-[#D97706] transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0 text-amber-600 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>0838-6207-5857</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} BEM FH UNIKU. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-400">Dikembangkan oleh R.Prayoga</p>
        </div>

      </div>
    </footer>
  );
}