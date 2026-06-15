'use client';
import { useState } from 'react';
import Image from 'next/image';
// FaPhone dihapus karena sudah tidak digunakan
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('bio');

  return (
    <section id="about" className="w-full max-w-5xl mx-auto py-20 px-4">
      <div className="flex items-center justify-between mb-8 border-b-4 border-white pb-4">
        <h3 className="text-2xl font-black text-white drop-shadow-md">About Me</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-6 bg-neutral-900/95 backdrop-blur-md rounded-xl border border-neutral-700 shadow-2xl overflow-hidden min-h-[400px]">
        
        <div className="w-full md:w-2/5 bg-neutral-800/50 border-r border-neutral-700 p-6 flex flex-col items-center text-center">
          <div className="w-32 h-32 relative rounded-full border-4 border-purple-500 overflow-hidden mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
            <Image 
              src="/assets/profile.jpg" 
              alt="Arif Ammar Sya'bani" 
              fill
              className="object-cover"
            />
          </div>
          
          <h4 className="text-xl font-bold text-white mb-1">Arif Ammar Sya&apos;bani</h4>
          <p className="text-xs font-mono text-purple-400 mb-6 bg-purple-500/10 px-3 py-1 rounded-full">Frontend Developer</p>

          <div className="w-full flex flex-col gap-3 mt-auto">
            <a href="mailto:ammarreynarif@gmail.com" className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white bg-neutral-800 p-3 rounded-lg border border-neutral-700 hover:border-purple-500 transition-all">
              <FaEnvelope className="text-purple-400" size={16} />
              <span className="truncate">ammarreynarif@gmail.com</span>
            </a>
            <div className="flex gap-3 mt-2">
              <a href="https://instagram.com/arff.amr" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 text-sm text-white bg-linear-to-tr from-yellow-500 via-pink-500 to-purple-500 p-2.5 rounded-lg hover:opacity-90 transition-opacity">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/reynarifammar/" target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 text-sm text-white bg-[#0A66C2] p-2.5 rounded-lg hover:opacity-90 transition-opacity">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
          <div className="flex gap-2 mb-6 bg-neutral-800 p-1.5 rounded-lg w-fit border border-neutral-700">
            <button 
              onClick={() => setActiveTab('bio')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'bio' ? 'bg-purple-500 text-white shadow-md' : 'text-neutral-400 hover:text-white'}`}
            >
              Biography
            </button>
            <button 
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'education' ? 'bg-purple-500 text-white shadow-md' : 'text-neutral-400 hover:text-white'}`}
            >
              Education
            </button>
            <button 
              onClick={() => setActiveTab('interests')}
              className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${activeTab === 'interests' ? 'bg-purple-500 text-white shadow-md' : 'text-neutral-400 hover:text-white'}`}
            >
              Interests
            </button>
          </div>

          <div className="grow bg-neutral-800/50 rounded-xl p-6 border border-neutral-700/50">
            {activeTab === 'bio' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h4 className="text-lg font-black text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" /> Profil
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Mahasiswa yang sangat passionate di bidang teknologi dengan fokus utama pada pengembangan antarmuka pengguna (Frontend Development). Memiliki ketertarikan mendalam terhadap integrasi Artificial Intelligence dan keindahan Desain UI/UX. Saya bersemangat dalam menciptakan pengalaman pengguna yang interaktif dan visual yang menarik melalui kombinasi kode yang bersih serta desain yang inovatif. Selalu antusias untuk membedah teknologi terbaru dan siap berkontribusi dalam tim untuk menciptakan solusi digital yang kreatif dan berdampak nyata.
                </p>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h4 className="text-lg font-black text-white mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" /> Akademik
                </h4>
                <div className="border-l-2 border-purple-500/50 pl-4 py-1">
                  <h5 className="text-base font-bold text-white">Universitas Brawijaya</h5>
                  <p className="text-sm text-purple-400 font-semibold mb-2">Pendidikan Teknologi Informasi | 2024 - Sekarang</p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Program studi berakreditasi unggul yang mengintegrasikan teknologi informasi, desain UI/UX, dan pengembangan aplikasi web. Fokus pembelajaran berbasis proyek dan pengembangan kompetensi profesional sebagai developer.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h4 className="text-lg font-black text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" /> Hobi Saya
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                    <span className="text-xl mb-1 block">🎮</span>
                    <h6 className="text-sm font-bold text-white">Bermain Game</h6>
                    <p className="text-[10px] text-neutral-400">Bermain casual game maupun game kompetitif</p>
                  </div>
                  <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                    <span className="text-xl mb-1 block">💻</span>
                    <h6 className="text-sm font-bold text-white">Coding</h6>
                    <p className="text-[10px] text-neutral-400">Membuat program-program dengan berbagai teknologi</p>
                  </div>
                  <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                    <span className="text-xl mb-1 block">🎶</span>
                    <h6 className="text-sm font-bold text-white">Mendengarkan Musik</h6>
                    <p className="text-[10px] text-neutral-400">Mendengarkan musik dari berbagai genre</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}