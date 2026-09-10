import React from 'react';
import { Link } from 'react-router-dom';
import { 
  pimpinanData, 
  bphData, 
  koordinatorData,
} from '../../data/pengurusData';

export default function StrukturPengurus() {
  return (
    <div className="w-full bg-[#F7F5F0] min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-2">
          <p className="text-2xl font-bold uppercase tracking-widest text-amber-600">
            Struktur Kepengurusan <br></br>Badan Eksekutif Mahasiswa Fakultas Hukum
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            UNIVERSITAS KUNINGAN
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto pt-1">
            Klik pada foto pengurus untuk melihat detail profil.
          </p>
        </div>

        {/* BARIS 1: Ketua & Wakil */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {pimpinanData.map((item) => (
            <Link 
              key={item.id} 
              to={`/struktur-pengurus/${item.slug}`}
              className="bg-white p-4 rounded-2xl shadow-md border border-slate-200/80 w-60 sm:w-64 text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group cursor-pointer"
            >
              <div className="w-full h-56 rounded-xl overflow-hidden mb-3 bg-slate-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition">{item.name}</h3>
              <p className="text-xs text-amber-600 font-semibold mt-1">{item.role}</p>
            </Link>
          ))}
        </div>

        {/* BARIS 2: BPH (Sekretaris & Bendahara) - Dibuat Center */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          {bphData.map((item) => (
            <Link 
              key={item.id} 
              to={`/struktur-pengurus/${item.slug}`}
              className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200/80 text-center hover:shadow-md transition duration-300 group cursor-pointer w-44 sm:w-52"
            >
              <div className="w-full h-44 rounded-xl overflow-hidden mb-2.5 bg-slate-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-600 transition">{item.name}</h3>
              <p className="text-[11px] text-amber-600 font-medium mt-0.5">{item.role}</p>
            </Link>
          ))}
        </div>

        {/* BARIS 3: Koordinator Bidang */}
        <div className="pt-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {koordinatorData.map((item) => (
              <Link 
                key={item.id} 
                to={`/struktur-pengurus/${item.slug}`}
                className="bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200/80 text-center hover:shadow-md transition duration-300 group cursor-pointer"
              >
                <div className="w-full h-44 rounded-xl overflow-hidden mb-2.5 bg-slate-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-600 transition">{item.name}</h3>
                <p className="text-[11px] text-amber-600 font-medium mt-0.5">{item.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}