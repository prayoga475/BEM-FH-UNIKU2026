import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { allPengurusData } from '../../data/pengurusData';

export default function DetailPengurus() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Cari pengurus berdasarkan slug
  const pengurus = allPengurusData.find((item) => item.slug === slug);

  // Jika data tidak ditemukan
  if (!pengurus) {
    return (
      <div className="w-full bg-[#F7F5F0] min-h-screen pt-32 pb-16 flex flex-col items-center justify-center text-slate-800">
        <h2 className="text-2xl font-bold">Pengurus Tidak Ditemukan</h2>
        <button 
          onClick={() => navigate('/struktur-pengurus')} 
          className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm hover:bg-amber-700 transition"
        >
          Kembali ke Daftar Tim
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#F7F5F0] min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Tombol Kembali */}
        <div>
          <Link 
            to="/struktur-pengurus" 
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:shadow-sm transition"
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Daftar Tim</span>
          </Link>
        </div>

        {/* Profile Main Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start bg-white/50 p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm">
          {/* Foto Profile */}
          <div className="w-full md:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-200 shadow-md shrink-0">
            <img 
              src={pengurus.image} 
              alt={pengurus.name} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Info Detail */}
          <div className="flex-1 space-y-5">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{pengurus.name}</h1>
              <p className="text-sm font-semibold text-amber-600 mt-1">{pengurus.role}</p>
            </div>

            {/* Badges / Chips */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium border border-slate-200">
                {pengurus.nama || "Galih Albi & Ardi Sumawijaya"}
              </span>
            </div>

            {/* Deskripsi/Bio */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
              {pengurus.bio}
            </p>
          </div>
        </div>

        {/* Rekomendasi: Anggota Tim Lainnya (Horizontal Scroll) */}
        <div className="space-y-4 pt-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Anggota Tim Lainnya</h3>
            <p className="text-xs text-slate-500">Kenali pengurus lainnya yang tergabung dalam BEM FH UNIKU.</p>
          </div>

          {/* Container Scroll Menyamping */}
          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
            {allPengurusData
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <Link 
                  key={item.id} 
                  to={`/struktur-pengurus/${item.slug}`}
                  className="min-w-[180px] w-[180px] bg-white p-3.5 rounded-2xl border border-slate-200/80 hover:shadow-md transition text-center group shrink-0"
                >
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-2.5 bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                    />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-amber-600 transition truncate">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">{item.role}</p>
                </Link>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}