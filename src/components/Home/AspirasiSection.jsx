import React from "react";
import logokabinet from "../../assets/image/logo-kabinet.jpeg"; // Sesuaikan path logo BEM FH kamu

export default function AspirasiSection() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeUjHFFT4K-JFPoOMWyXMpykN39fXMiuqGBWwaLeNc6V9P1vw/viewform";

  return (
    <section id="aspirasi" className="w-full bg-[#F7F5F0] text-white py-12 sm:py-16 relative overflow-hidden">
      
      {/* Ornamen Motif Batik / Ukiran di Pojok Kanan Atas & Bawah */}
      <div className="absolute -right-10 top-0 bottom-0 w-48 sm:w-64 opacity-15 pointer-events-none flex flex-col justify-between items-end">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <circle cx="80" cy="20" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M80 5 C65 20, 65 35, 80 50 C95 35, 95 20, 80 5 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="80" cy="80" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M80 65 C65 80, 65 95, 80 110 C95 95, 95 80, 80 65 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Kolom Kiri: Judul, Deskripsi & Tombol Aksi */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            
            {/* Judul Utama Banner */}
            <h2 className="text-slate-900 sm:text-3xl md:text-4xl font-extrabold leading-tight mb-4 tracking-tight">
              Suarakan Aspirasimu untuk <span className="text-[#8B1E24]">Fakultas Hukum</span> yang Lebih Baik!
            </h2>

            {/* Deskripsi */}
            <p className="text-[#171717] text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
              Kami membuka ruang bagi seluruh mahasiswa Fakultas Hukum Universitas Kuningan untuk memberikan aspirasi, aduan, kritik, maupun saran terkait fasilitas akademis, pelayanan mahasiswa, dan isu kampus secara cepat. Bersama BEM FH UNIKU, mari kita wujudkan lingkungan kampus yang lebih responsif, transparan, dan inklusif!
            </p>

            {/* Area Tombol Ajukan & Label Portal */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              
              {/* Tombol Ajukan Aspirasi (Link Google Form) */}
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-[#D97706] hover:bg-[#b56305] text-[#0B1E36] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {/* Icon Megaphone / Toa */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                >
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.5A2.25 2.25 0 0 0 2.25 9.75v4.5A2.25 2.25 0 0 0 4.5 16.5h1.94l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 1 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                  <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.061Z" />
                </svg>
                <span>Ajukan Aspirasi</span>
              </a>

              {/* Garis Pemisah & Text PORTAL ASPIRASI! */}
              <div className="h-8 w-[1px] bg-slate-600 hidden sm:block"></div>
              
              <span className="text-[#171717] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                PORTAL <span className="text-[#8B1E24] font-extrabold">ASPIRASI!</span>
              </span>

            </div>

          </div>

          {/* Kolom Kanan: Logo BEM FH Berbingkai Lingkaran */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-emerald-800/80 p-2 sm:p-3 flex items-center justify-center bg-black/40 backdrop-blur-xs shadow-2xl relative">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-white/20 p-2">
                <img
                  src={logokabinet}
                  alt="Logo BEM FH UNIKU"
                  className="w-full h-full object-contain mx-auto my-auto scale-125"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}