import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { kajianData } from "../../data/kajianData";

export default function Kajian() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  // Artikel Utama (Featured)
  const featuredKajian = kajianData.find((item) => item.featured) || kajianData[0];
  // Rilisan Populer (3-4 item selain featured)
  const popularKajian = kajianData.filter((item) => item.id !== featuredKajian.id).slice(0, 4);

  // Filter berdasarkan kategori & pencarian
  const filteredKajian = kajianData.filter((item) => {
    const matchesCategory =
      activeCategory === "Semua" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F7F5F0] pt-28 pb-16 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#D97706] font-bold">
            Pusat Informasi & Publikasi
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] mt-1">
            Kajian & Rilisan Pers BEM FH UNIKU
          </h1>
          <p className="text-slate-500 text-sm mt-2 max-w-2xl">
            Serangkaian tulisan ilmiah, catatan kritis, isu hukum terkini, serta siaran pers resmi BEM Fakultas Hukum UNIKU.
          </p>
        </div>

        {/* Top Section: Featured & Populer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card Kajian Utama (Featured) */}
          <div className="lg:col-span-2">
            <Link
              to={`/kajian/${featuredKajian.id}`}
              className="group relative block rounded-2xl overflow-hidden shadow-md h-[380px] sm:h-[420px]"
            >
              <img
                src={featuredKajian.image}
                alt={featuredKajian.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8 flex flex-col justify-end">
                <span className="inline-block self-start bg-[#D97706] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-3">
                  {featuredKajian.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition leading-snug">
                  {featuredKajian.title}
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 line-clamp-2">
                  {featuredKajian.excerpt}
                </p>
                <p className="text-slate-400 text-[11px] mt-3">{featuredKajian.date}</p>
              </div>
            </Link>
          </div>

          {/* List Rilisan Populer (Samping Kanan) */}
          <div className="space-y-4">
            <h3 className="font-bold text-[#0B1E36] text-sm uppercase tracking-wider border-b pb-2 border-slate-200">
              Rilisan Populer
            </h3>
            <div className="space-y-3">
              {popularKajian.map((item) => (
                <Link
                  key={item.id}
                  to={`/kajian/${item.id}`}
                  className="group flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-200/70 hover:shadow-sm transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-bold text-[#D97706] uppercase">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-semibold text-[#0B1E36] group-hover:text-[#D97706] transition line-clamp-2 leading-snug mt-0.5">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          {/* Tombol Kategori */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {["Semua", "kajian kastrad",].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                    activeCategory === cat
                      ? "bg-[#0B1E36] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kajian atau artikel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-700 focus:outline-none focus:border-[#D97706]"
            />
          </div>
        </div>

        {/* Grid List Kartu Kajian Bawah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredKajian.map((item) => (
            <Link
              key={item.id}
              to={`/kajian/${item.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
            >
              <div className="h-44 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] px-2.5 py-0.5 rounded-full font-medium">
                  {item.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-bold text-[#0B1E36] text-sm group-hover:text-[#D97706] transition line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}