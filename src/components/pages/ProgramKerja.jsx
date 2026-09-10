import React from 'react';
import { ExternalLink, FolderKanban } from 'lucide-react';

export default function ProgramKerja() {
  const DRIVE_LINK = "https://drive.google.com/drive/folders/1mql5LR7ts4ELCl3pkh7KyjYLmQhJTniA";

  return (
    <div className="w-full bg-[#F7F5F0] min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        
        {/* Container Logo / Icon Utama */}
        <div className="relative inline-block">
          <div className="w-32 h-32 sm:w-40 sm:h-40 bg-amber-500/10 border-2 border-amber-500/20 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <FolderKanban className="w-16 h-16 sm:w-20 sm:h-20 text-amber-600" />
          </div>
        </div>

        {/* Judul & Deskripsi */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Program Kerja <span className="text-amber-600">BEM FH UNIKU</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            Akses dokumen resmi, rencana kegiatan, serta rancangan program kerja seluruh kementerian BEM Fakultas Hukum UNIKU secara transparan dan lengkap melalui drive resmi kami.
          </p>
        </div>

        {/* Tombol Akses Google Drive */}
        <div className="pt-2">
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Telusuri Program Kerja Selengkapnya</span>
            <ExternalLink size={18} />
          </a>
        </div>

      </div>
    </div>
  );
}