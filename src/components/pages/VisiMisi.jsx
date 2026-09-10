import React from "react";

export default function VisiMisi() {
  const misiData = [
    {
      id: 1,
      title: "Reformasi Sistem & Budaya Kerja",
      desc: "Mereformasi sistem dan budaya kerja BEM FH agar lebih profesional, transparan, akuntabel, dan adaptif terhadap kebutuhan mahasiswa.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Pengembangan Potensi Anggota",
      desc: "Mengembangkan potensi dan kapasitas anggota melalui sistem pembinaan, pelatihan, serta penempatan yang sesuai dengan minat dan kompetensi.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Optimalisasi Fungsi & Pelayanan",
      desc: "Mengoptimalkan fungsi kelembagaan dan pelayanan BEM FH dengan program kerja yang terukur, solutif, dan berdampak langsung bagi mahasiswa Fakultas Hukum.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Wadah Aspirasi Responsif",
      desc: "Menjadi wadah penyalur aspirasi mahasiswa yang aktif, terbuka, dan responsif terhadap isu-isu akademik, kesejahteraan, serta dinamika sosial kampus.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Ruang Inklusif & Kritis",
      desc: "Membangun ruang organisasi yang aman, nyaman, dan inklusif sebagai tempat bertumbuh, berdiskusi kritis, dan berproses bersama.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Integrasi Tri Dharma",
      desc: "Mengintegrasikan nilai Tri Dharma Perguruan Tinggi dalam setiap gerak langkah BEM FH, khususnya dalam pengabdian kepada masyarakat.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Integritas & Etika Organisasi",
      desc: "Menjaga dan menumbuhkan integritas serta etika organisasi sebagai fondasi utama dalam setiap pengambilan keputusan dan pelaksanaan program.",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F7F5F0] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Hal/Breadcrumb */}
        <div className="text-center space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-600">
            Profil BEM FH UNIKU 2026
          </h2>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Visi & Misi Kabinet Reformasi
          </h1>
        </div>

        {/* BAGIAN A: VISI */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#0B1E36]"></div>
          <div className="space-y-4">
            <span className="inline-block bg-[#0B1E36] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Visi Utama
            </span>
            <p className="text-lg sm:text-2xl font-bold text-slate-800 leading-relaxed text-justify sm:text-left">
              "Mewujudkan BEM FH sebagai ruang yang aman, nyaman, dan kritis; yang transparan, berintegritas, serta berdampak nyata bagi anggota, mahasiswa, dan masyarakat melalui penguatan fungsi, pelayanan, dan pergerakan berlandaskan nilai-nilai Tri Dharma Perguruan Tinggi."
            </p>
          </div>
        </div>

        {/* BAGIAN B: MISI */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <span className="h-8 w-2 bg-amber-500 rounded-full"></span>
            <h2 className="text-2xl font-bold text-slate-900">Misi BEM FH UNIKU</h2>
          </div>

          {/* Grid Card Misi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {misiData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.id}. {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}