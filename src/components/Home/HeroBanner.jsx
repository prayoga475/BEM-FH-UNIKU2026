import React from 'react';
// Opsional: Un-comment baris di bawah jika ingin memakai gambar dari folder assets/image/
import heroBg from '../../assets/image/hero.jpeg';
import { Link } from 'react-router-dom'; // <-- 1. Perbaiki import ke react-router-dom

export default function HeroBanner() {
  return (
    <section 
      id="beranda" 
      className="relative w-full min-h-screen flex flex-col justify-between items-center text-white px-4 pt-32 pb-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`
      }}
    >
      {/* Dark Overlay untuk efek tebal gelap */}
      <div className="absolute inset-0 bg-black/65 backdrop-contrast-125 z-0"></div>

      {/* Konten Utama Hero */}
      <div className="my-auto max-w-4xl mx-auto text-center relative z-10 px-2 flex flex-col items-center">
        
        {/* Badge Pill Atas */}
        <div className="inline-block px-5 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-200 text-xs font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-inner">
          BEM FH UNIKU 2026
        </div>

        {/* Title / Headline Utama */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-white">
          Membangun Bersama Menuju <br />
          <span className="text-[#D97706] md:text-[#EAB308] drop-shadow-md">
            Fakultas Hukum Progresif
          </span>
        </h1>

        {/* Deskripsi Subtitle */}
        <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-normal opacity-90">
          Aksi nyata kolaborasi mahasiswa Fakultas Hukum Universitas Kuningan dalam mengoptimalkan potensi akademis, pelayanan advokasi, dan bersinergi bersama civitas akademika.
        </p>

        {/* Tombol Aksi */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href="/program-kerja" 
            className="px-7 py-3 rounded-full bg-[#D97706] hover:bg-[#B45309] text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg hover:scale-105"
          >
            Jelajahi Program
          </a>

          <a 
            href="/struktur-pengurus" 
            className="px-7 py-3 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-xs sm:text-sm transition-all backdrop-blur-md hover:scale-105"
          >
            Profil BEM
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase mb-2 animate-bounce inline-block">
          SCROLL KEBAWAH
        </span>
        <div className="w-[2px] h-6 bg-white/80 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}