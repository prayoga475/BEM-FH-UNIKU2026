import React from 'react';
import { Link } from 'react-router-dom';
import { sliderProkerData, prokerTerlaksanaData } from '../../data/prokerData';
import { kajianData } from '../../data/kajianData';

export default function ProkerSection() {
  const rilisanTerbaru = kajianData;

  return (
    <section className="py-12 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Putih Utama Pembungkus Seluruh Konten */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* KOLOM KIRI (2 Kolom): Slider Utama */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div className="relative rounded-2xl overflow-hidden group h-[380px] sm:h-[420px]">
                <img
                  src={sliderProkerData[0]?.image}
                  alt={sliderProkerData[0]?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {sliderProkerData[0]?.title}
                  </h3>
                </div>
              </div>
              
              {/* Indikator Dots Slider di Bawah */}
              <div className="flex justify-center items-center gap-1.5 mt-4">
                <span className="w-6 h-2 bg-[#0B1E36] rounded-full"></span>
                <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
                <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              </div>
            </div>

            {/* KOLOM KANAN (1 Kolom): Terbagi Jadi 2 Box Scroll */}
            <div className="flex flex-col justify-between gap-6 h-[420px]">
              
              {/* Box 1: Program Kerja Terlaksana */}
              <div className="flex-1 flex flex-col min-h-0">
                <h3 className="font-bold text-[#0B1E36] text-xs uppercase tracking-wider mb-2">
                  Program Kerja Terlaksana
                </h3>
                <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 scrollbar-thin scrollbar-thumb-slate-300">
                  {prokerTerlaksanaData.map((item) => (
                    <Link 
                      key={item.id}
                      to={`/program-kerja/${item.id}`}
                      className="group flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-200/70 hover:shadow-sm transition"
                      >
                    <div
                      key={item.id}
                      className="flex items-center space-x-3 bg-slate-50/80 p-2 rounded-xl border border-slate-100 hover:bg-slate-100/80 transition"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="overflow-hidden">
                        <h4 className="text-[11px] font-semibold text-[#0B1E36] line-clamp-2 leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[9px] text-amber-600 font-medium mt-0.5">
                          BEM FH UNIKU <span className="text-slate-400">• {item.date}</span>
                        </p>
                      </div>
                    </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Box 2: Rilisan & Pers */}
              <div className="flex-1 flex flex-col min-h-0 pt-2 border-t border-slate-100">
                <h3 className="font-bold text-[#0B1E36] text-xs uppercase tracking-wider mb-2">
                  Rilisan & Pers
                </h3>
                <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 scrollbar-thin scrollbar-thumb-slate-300">
                  {rilisanTerbaru.map((item) => (
                    <Link
                      key={item.id}
                      to={`/kajian/${item.id}`}
                      className="group flex items-center space-x-3 bg-slate-50/80 p-2 rounded-xl border border-slate-100 hover:bg-slate-100/80 transition block"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="overflow-hidden">
                        <h4 className="text-[11px] font-semibold text-[#0B1E36] group-hover:text-[#D97706] transition line-clamp-2 leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-[9px] text-amber-600 font-medium mt-0.5">
                          BEM FH UNIKU <span className="text-slate-400">• {item.date}</span>
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}