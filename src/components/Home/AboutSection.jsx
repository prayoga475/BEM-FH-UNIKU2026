import React from "react";
import logokabinet from "../../assets/image/logo-kabinet.jpeg"; // Sesuaikan path logo kamu

export default function AboutSection() {
  return (
    // Outer Container: Merah kusem gelap / marun terkesan muted
    <section id="about" className="w-full bg-[#F7F5F0] py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
      
      {/* Inner Card Container Utama: Berwarna Putih Bersih dengan Border Rose Halus */}
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-2xl border border-rose-100">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Kolom Kiri/Atas: Logo BEM FH Berbingkai Lingkaran Merah Pelek */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-amber-500/80 p-2 sm:p-3 flex items-center justify-center bg-gradient-to-br from-[#5A0E13] via-[#3B070B] to-[#1F0305] backdrop-blur-xs shadow-2xl relative">
              <div className="w-full h-full rounded-full bg-[#4A0A0E] flex items-center justify-center overflow-hidden border-2 border-amber-300/30 p-2">
                <img
                  src={logokabinet}
                  alt="Logo BEM FH UNIKU"
                  className="w-full h-full object-contain mx-auto my-auto scale-125"
                />
              </div>
            </div>
          </div>

          {/* Kolom Kanan/Bawah: Deskripsi Tentang BEM FH */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-amber-700 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
              TENTANG KAMI
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              Badan Eksekutif Mahasiswa <br />
              <span className="text-[#8B1E24]">Fakultas Hukum UNIKU</span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4">
              BEM FH UNIKU merupakan wadah aspirasi, pergerakan, dan pengembangan potensi mahasiswa Fakultas Hukum Universitas Kuningan. Kami berkomitmen untuk mewujudkan kepengurusan yang responsif, inklusif, serta berdedikasi tinggi dalam melayani seluruh civitas akademika.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
              Melalui kolaborasi lintas departemen, pengabdian masyarakat, dan pengawalan isu-isu hukum strategis, BEM FH UNIKU hadir sebagai pelopor perubahan yang berintegritas.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}