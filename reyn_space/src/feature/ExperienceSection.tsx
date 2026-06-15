'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const expData = [
  {
    id: 'bcc',
    role: "Frontend Developer",
    company: "BCC Fakultas Ilmu Komputer",
    period: "2025 - Sekarang",
    logo: "/assets/experience/BCC.png",
    desc: "Bagian dari tim pengembang website BCC Filkom, bertanggung jawab dalam maintenance dan pengembangan fitur-fitur baru, serta memastikan website tetap responsif dan mudah diakses oleh pengguna.",
    projectImg: "/assets/VeloMom.jpg",
    link: "https://github.com/reynammar/velomom-fe"
  },
  {
    id: 'brawijaya-appreciate',
    role: "Frontend Developer",
    company: "Brawijaya Appreciate 2025",
    period: "2025",
    logo: "/assets/experience/braciate.jpg",
    desc: "Mengembangkan antarmuka website acara, menciptakan desain yang responsif dan user-friendly, serta mengimplementasikan fitur polling yang interaktif dan real time untuk mendukung keberlangsungan acara.",
    projectImg: "/assets/experience/braciatte-web.jpg",
    link: "https://www.braciate.web.id/home"
  },
  {
    id: 'synergy',
    role: "Frontend Developer",
    company: "Synergy of Symphony 2025",
    period: "2025",
    logo: "/assets/experience/logo-sos.svg",
    desc: "Mengembangkan dan mendesain website untuk memastikan keselarasan acara ospek mahasiswa Departemen Sistem Informasi.",
    projectImg: "/assets/experience/sos-web.jpg",
    link: "https://sos.ub.ac.id/home"
  }
];

export default function ExperienceSection() {
  const [activeExp, setActiveExp] = useState(expData[0]);

  return (
    <section id="experience" className="w-full max-w-5xl mx-auto py-20 px-4">
      <div className="flex items-center justify-between mb-8 border-b-4 border-white pb-4">
        <h3 className="text-2xl font-black text-white drop-shadow-md">Experience</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-6 bg-neutral-900/95 backdrop-blur-md rounded-xl border border-neutral-700 shadow-2xl overflow-hidden min-h-[450px]">
        
        <div className="w-full md:w-1/3 bg-neutral-800/50 border-b md:border-b-0 md:border-r border-neutral-700 p-4 flex flex-col gap-2 overflow-y-auto custom-scrollbar max-h-[250px] md:max-h-full">
          <h4 className="text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wider pl-2">History</h4>
          
          {expData.map(exp => {
            const isActive = activeExp.id === exp.id;
            
            return (
              <button
                key={exp.id}
                onClick={() => setActiveExp(exp)}
                className={`flex flex-col items-start gap-1 px-4 py-3 rounded-lg transition-all text-left w-full ${
                  isActive 
                    ? 'bg-neutral-700 border border-cyan-500 text-white shadow-inner' 
                    : 'hover:bg-neutral-800 border border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <span className="text-sm font-bold truncate w-full">{exp.company}</span>
                <span className={`text-xs ${isActive ? 'text-cyan-300' : 'text-neutral-500'}`}>{exp.period}</span>
              </button>
            );
          })}
        </div>

        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col relative overflow-y-auto custom-scrollbar">
          <div className="absolute top-4 right-4 flex gap-2">
             <span className="text-[10px] font-mono text-neutral-500 bg-neutral-800 px-2 py-1 rounded border border-neutral-700">Details</span>
          </div>

          <div className="flex items-center gap-4 md:gap-5 mb-6 border-b border-neutral-700 pb-6 mt-4 md:mt-0">
            <div className="w-14 h-14 md:w-16 md:h-16 relative bg-white rounded-xl border-2 border-neutral-600 overflow-hidden shrink-0 flex items-center justify-center p-1">
              <div className="relative w-full h-full">
                <Image 
                  src={activeExp.logo} 
                  alt={activeExp.company} 
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 flex items-center justify-center text-[8px] text-neutral-400 bg-neutral-100 font-mono text-center leading-tight z-[-1]">
                  Need Logo
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-none mb-1 md:mb-2">{activeExp.role}</h3>
              <p className="text-xs md:text-sm font-semibold text-cyan-400">{activeExp.company}</p>
            </div>
          </div>

          <div className="bg-neutral-800/50 p-4 md:p-5 rounded-lg border border-neutral-700/50 mb-6 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500" />
            <h4 className="text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Responsibilities</h4>
            <p className="text-xs md:text-sm text-neutral-200 leading-relaxed">
              {activeExp.desc}
            </p>
          </div>

          <div className="mt-auto">
            <h4 className="text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">Project Preview</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2 h-32 relative bg-neutral-800 rounded-lg border border-neutral-600 overflow-hidden group">
                <Image 
                  src={activeExp.projectImg} 
                  alt={`Project ${activeExp.company}`} 
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center text-[10px] text-neutral-500 font-mono bg-black/40 z-[-1]">
                  /assets/experience/
                </div>
              </div>

              <div className="w-full sm:w-1/2 flex flex-col justify-end">
                <a 
                  href={activeExp.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-2.5 md:py-3 rounded-lg text-xs md:text-sm font-bold transition-colors shadow-lg"
                >
                  <ExternalLink size={16} /> View Project / Repo
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}