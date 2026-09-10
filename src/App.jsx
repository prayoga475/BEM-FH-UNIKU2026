import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/Home/WhatsAppButton';
import Footer from './components/Footer';
import './App.css';

// Import Pages
import Home from './components/pages/Home';
import VisiMisi from './components/pages/VisiMisi';
import FilosofiLogo from './components/pages/FilosofiLogo';
import StrukturPengurus from './components/pages/StrukturPengurus';
import DetailPengurus from './components/pages/DetailPengurus';
import ProgramKerja from './components/pages/ProgramKerja';
import Kajian from './components/pages/Kajian';
import DetailKajian from './components/pages/DetailKajian'; // <-- Tambahkan import ini
import ArsipPersuratan from './components/pages/ArsipPersuratan';
import SopBem from "./components/pages/SopBem";
import DetailProgramKerja from './components/pages/DetailProgramKerja'; // <-- Tambahkan import ini

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F7F5F0] text-white font-sans flex flex-col justify-between">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/filosofi-logo" element={<FilosofiLogo />} />
            <Route path="/struktur-pengurus" element={<StrukturPengurus />} />
            <Route path="/struktur-pengurus/:slug" element={<DetailPengurus />} />
            <Route path="/program-kerja" element={<ProgramKerja />} />
            <Route path="/program-kerja/:id" element={<DetailProgramKerja />} />
            <Route path="/kajian" element={<Kajian />} />
            <Route path="/kajian/:id" element={<DetailKajian />} /> {/* <-- Tambahkan route ini */}
            <Route path="/arsip-persuratan" element={<ArsipPersuratan />} />
            <Route path="/sop-bem" element={<SopBem />} />
          </Routes>
        </main>

        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}