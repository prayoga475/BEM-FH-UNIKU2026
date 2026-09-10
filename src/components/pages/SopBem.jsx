import React from 'react';
import { FolderOpen, ExternalLink } from 'lucide-react';

export default function SopBem() {
  return (
    <div className="min-h-[80vh] bg-[#F7F5F0] flex items-center justify-center pt-24 pb-16 px-4 font-sans">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        
        {/* Lingkaran Ikon */}
        <div className="w-24 h-24 bg-[#FDE6C6] rounded-full flex items-center justify-center mb-6 shadow-sm border border-orange-100">
          <FolderOpen className="w-10 h-10 text-[#D97706]" strokeWidth={2.5} />
        </div>

        {/* Judul */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] mb-4">
          SOP <span className="text-[#D97706]">BEM FH UNIKU</span>
        </h1>

        {/* Deskripsi */}
        <p className="text-slate-500 text-sm sm:text-base mb-8 max-w-lg leading-relaxed">
          Akses dokumen resmi, pedoman administratif, serta Standar Operasional Prosedur (SOP) seluruh kementerian BEM Fakultas Hukum UNIKU secara transparan dan lengkap melalui drive resmi kami.
        </p>

        {/* Tombol Eksternal */}
        {/* Ganti URL href di bawah dengan link Google Drive SOP aslinya */}
        <a 
          href="https://drive.google.com/drive/folders/1k9Xz2vwGIvRdeVVP5Bm9KZ9r0hvLcB5g" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-[#D97706] hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg"
        >
          <span>Telusuri SOP Selengkapnya</span>
          <ExternalLink className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
}