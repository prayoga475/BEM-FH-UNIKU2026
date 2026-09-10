import React from 'react';
// Pastikan letak file gambar logo kamu sesuai, sesuaikan path ini jika perlu
import logokabinet from '../../assets/image/logo-kabinet.jpeg';
import logo1 from '../../assets/image/1.png';
import logo2 from '../../assets/image/2.png';
import logo3 from '../../assets/image/3.png';
import logo4 from '../../assets/image/4.png';

export default function FilosofiLogo() {
  const filosofiData = [
    {
      id: 1,
      title: "Pedang Keadilan & Timbangan",
      tagline: "Integritas, Keberanian & Keadilan Objektif",
      desc: "Perpaduan pedang tegak lurus dan timbangan melambangkan ketegasan mengambil keputusan serta keberanian melakukan reformasi (Misi ke-7). Timbangan yang sejajar mencerminkan transparansi, akuntabilitas, dan perlakuan adil bagi seluruh mahasiswa tanpa diskriminasi (Misi ke-1).",
      icon: (
              <img src={logo1} alt="Logo Kabinet Reformasi BEM FH UNIKU" 
                  className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                />
            )
    },
    {
      id: 2,
      title: "Karangan Daun (Wreath)",
      tagline: "Pertumbuhan & Tri Dharma Perguruan Tinggi",
      desc: "Dua ranting melingkar menggambarkan organisasi sebagai tempat bertumbuh dan berproses bersama (Misi ke-5). Daun yang tersusun rapi melambangkan integrasi nilai pendidikan, penelitian, dan pengabdian masyarakat (Misi ke-6).",
      icon: (
              <img src={logo2} alt="Logo Kabinet Reformasi BEM FH UNIKU" 
                  className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                />
            )
    },
    {
      id: 3,
      title: "Bingkai Lingkaran Logam",
      tagline: "Ruang Aman, Nyaman & Profesionalisme",
      desc: "Bentuk perisai kokoh melambangkan Visi utama BEM FH sebagai ruang yang aman, nyaman, dan pelindung aspirasi. Material logam perunggu/emas memberikan kesan kematangan, profesionalisme, serta sistem kerja yang solid dan adaptif (Misi ke-1).",
      icon: (
              <img src={logo3} alt="Logo Kabinet Reformasi BEM FH UNIKU" 
                  className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                />
            )
    },
    {
      id: 4,
      title: "Pita Kabinet Reformasi",
      tagline: "Wadah Aspirasi Dinamis & Responsif",
      desc: "Melambangkan peran BEM sebagai wadah penyalur aspirasi yang aktif dan responsif (Misi ke-4). Bentuk pita yang melengkung dan dinamis menunjukkan keterbukaan organisasi dalam menghadapi dinamika sosial kampus.",
      icon: (
         <img src={logo4} alt="Logo Kabinet Reformasi BEM FH UNIKU" 
                  className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          />
      )
    },
    {
      id: 5,
      title: "Warna Emas & Keseimbangan Simetri",
      tagline: "Kejayaan, Kualitas & Keseimbangan Pergerakan",
      desc: "Warna bronze/emas melambangkan kejayaan dan pelayanan yang prima. Komposisi simetris mencerminkan keseimbangan antara fungsi pelayanan mahasiswa dan fungsi pergerakan yang berdampak nyata.",
      icon: (
              <img src={logokabinet} alt="Logo Kabinet Reformasi BEM FH UNIKU" 
                  className="w-13 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              />
      )
    }
  ];

  return (
    <div className="w-full bg-[#F7F5F0] min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-left space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Identitas Visual BEM FH UNIKU
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Arti & Filosofi Logo <span className="text-amber-600">Kabinet Reformasi</span>
          </h1>
        </div>

        {/* Layout Grid Dua Kolom (Sesuai Contoh Gambar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Kolom Kiri: Daftar Filosofi */}
          <div className="lg:col-span-7 space-y-4">
            {filosofiData.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-slate-200/80 transition-all duration-300 flex items-start space-x-4 group"
              >
                <div className="p-3 bg-amber-50 rounded-xl shrink-0 group-hover:bg-amber-100 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-600">
                    {item.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kolom Kanan: Display Logo Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex justify-center items-center">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 w-full max-w-md flex flex-col items-center justify-center space-y-6">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden flex items-center justify-center bg-slate-50 border border-slate-100 shadow-inner">
                <img 
                  src={logokabinet} 
                  alt="Logo Kabinet Reformasi BEM FH UNIKU" 
                  className="w-full h-full object-contain p-4 hover:scale-125 transition-transform duration-500"
                />
              </div>
              <div className="text-center space-y-1">
                <h2 className="text-xl font-bold text-slate-900">
                  Logo Resmi BEM FH UNIKU
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Kabinet Reformasi 2026
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}