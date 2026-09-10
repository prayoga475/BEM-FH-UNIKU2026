import React, { useState } from "react";
import { Search, FileText, ExternalLink, FolderArchive, ArrowUpRight } from "lucide-react";

// Import data surat
import { formatSuratList, LINK_DRIVE_ARSIP } from "../../data/dataSurat";

export default function ArsipPersuratan() {
  const [searchTerm, setSearchTerm] = useState("");

  // Logika pencarian data surat
  const filteredFormat = formatSuratList.filter(
    (item) =>
      item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.kode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F7F5F0] pt-28 pb-16 px-4 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100/70 text-[#D97706] rounded-full shadow-sm mb-2">
            <FolderArchive className="w-10 h-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
            Arsip & Format <span className="text-[#D97706]">Persuratan</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Akses dokumen resmi, format surat MoU, Berita Acara, serta repository arsip persuratan BEM Fakultas Hukum UNIKU secara transparan dan terstruktur.
          </p>

          {/* CTA Link Google Drive Utama */}
          <div className="pt-2">
            <a
              href={"https://drive.google.com/drive/folders/1d71sTEGRo-S1d8SOoRlUhHTGmEDTiLjl"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#D97706] hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              <span>Telusuri Repository Drive Arsip</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Section List Surat */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1E36]">
                Daftar Format & Berkas Surat
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Klik pada berkas untuk membuka dan meninjau berkas langsung di Google Drive
              </p>
            </div>

            {/* Input Search */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Cari MoU, Berita Acara, dll..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          {/* Grid Card Format Surat */}
          {filteredFormat.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredFormat.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="inline-block px-3 py-1 bg-amber-50 text-[#D97706] border border-amber-200/60 rounded-full text-[11px] font-semibold">
                        {item.kategori}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.kode}
                      </span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-slate-700 shrink-0">
                        <FileText className="w-6 h-6 text-[#D97706]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0B1E36] text-base sm:text-lg leading-snug">
                          {item.judul}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                          {item.keterangan}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tombol Akses Google Drive */}
                  <div className="pt-3 border-t border-slate-100 flex justify-end">
                    <a
                      href={item.linkDrive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold bg-slate-100 hover:bg-amber-100/70 text-slate-700 hover:text-[#D97706] px-4 py-2 rounded-xl transition"
                    >
                      <span>Buka di Google Drive</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              Tidak ada dokumen surat yang cocok dengan kata kunci pencarian.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}