import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
// Gabungkan data dari prokerData.js
import { sliderProkerData, prokerTerlaksanaData } from "../../data/prokerData";

export default function DetailProgramKerja() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Gabungkan semua data proker untuk dicari
  const allProker = [...sliderProkerData, ...prokerTerlaksanaData];

  // Cari artikel berdasarkan ID
  const artikel = allProker.find((item) => String(item.id) === String(id));

  if (!artikel) {
    return (
      <div className="min-h-screen bg-[#F7F5F0] pt-32 pb-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Artikel tidak ditemukan</h2>
        <p className="text-slate-500 mt-2">Maaf, program kerja yang kamu cari tidak tersedia.</p>
        <Link
          to="/program-kerja"
          className="mt-6 inline-block bg-[#D97706] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-700 transition"
        >
          Kembali ke Program Kerja
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F5F0] pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Info Meta Atas */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-500">
            <span className="font-semibold text-[#D97706] bg-amber-100/70 px-3 py-1 rounded-full border border-amber-200">
              {artikel.category || "Program Kerja"}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {artikel.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              Oleh: <strong className="text-slate-700">{artikel.author || "BEM FH UNIKU"}</strong>
            </span>
          </div>

          {/* Judul Artikel */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E36] leading-tight">
            {artikel.title}
          </h1>
        </div>

        {/* Gambar Utama */}
        <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200 bg-white">
          <img
            src={artikel.image}
            alt={artikel.title}
            className="w-full h-[260px] sm:h-[400px] object-cover"
          />
        </div>

        {/* Konten Isian Artikel */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
          {artikel.content ? (
            artikel.content.map((paragraf, index) => (
              <p key={index}>{paragraf}</p>
            ))
          ) : (
            <p>{artikel.excerpt || artikel.title}</p>
          )}
        </div>

        {/* Tombol Kembali */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center space-x-2 bg-[#0B1E36] hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-full shadow-md transition duration-300 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali</span>
          </button>
        </div>

      </div>
    </div>
  );
}