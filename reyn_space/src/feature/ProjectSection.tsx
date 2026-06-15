'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Folder, FolderOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectData = [
  {
    id: 'ruangsela',
    title: "RuangSela",
    type: "Personal Project",
    desc: "Platform pendampingan mahasiswa mengelola beban akademik tersembunyi secara profesional.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/assets/RuangSela.jpg",
    githubUrl: "https://github.com/reynammar/RuangSela",
    liveUrl: "https://ruang-selakita.vercel.app/" 
  },
  {
    id: 'velomom',
    title: "Velomom",
    type: "Personal Project",
    desc: "Platform pendampingan profesional untuk ibu pasca kelahiran dalam menanggulani resiko baby blues.",
    tech: ["ReactJS", "TypeScript", "Tailwind CSS"],
    image: "/assets/VeloMom.jpg",
    githubUrl: "https://github.com/reynammar/velomom-fe",
    liveUrl: "https://velomom.vercel.app/home" 
  },
  {
    id: 'sewascaf',
    title: "Sewascaf",
    type: "Personal Project",
    desc: "Platform pencarian vendor scaffolding yang transparan, terpercaya, dan pastinya terjangkau untuk kebutuhan proyek-proyek konstruksi.",
    tech: ["NextJs", "TypeScript", "Tailwind CSS", "GoLang", "Gin", "Supabase", "Gemini API"],
    image: "/assets/Sewascaf.jpg",
    githubUrl: "https://github.com/reynammar/sewascaf",
    liveUrl: "" 
  },
  {
    id: 'kkp',
    title: "KKP",
    type: "Personal Project",
    desc: "Platform otomatisasi e-ticket bus pariwisata yang dilengkapi dengan sistem reservasi, pembayaran digital, dan manajemen armada.",
    tech: ["NextJs", "TypeScript", "Tailwind CSS", "GoLang", "Gin"],
    image: "/assets/KKP.jpg",
    githubUrl: "https://github.com/reynammar/kkp-frontend",
    liveUrl: "" 
  },
];

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState(projectData[0]);

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-20 px-4">
      <div className="flex items-center justify-between mb-8 border-b-4 border-white pb-4">
        <h3 className="text-2xl font-black text-white drop-shadow-md">Projects</h3>
      </div>

      <div className="flex flex-col md:flex-row gap-6 bg-neutral-900/95 backdrop-blur-md rounded-xl border border-neutral-700 shadow-2xl overflow-hidden min-h-[500px]">
        
        <div className="w-full md:w-1/3 bg-neutral-800/50 border-b md:border-b-0 md:border-r border-neutral-700 p-4 flex flex-col gap-2 overflow-y-auto custom-scrollbar max-h-[250px] md:max-h-full">
          <h4 className="text-xs font-bold text-neutral-500 mb-2 uppercase tracking-wider pl-2">Directory / Projects</h4>
          
          <div className="flex flex-col gap-1.5">
            {projectData.map(project => {
              const isActive = activeProject.id === project.id;
              
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-left w-full ${
                    isActive 
                      ? 'bg-neutral-700 border border-lime-500 text-white shadow-inner' 
                      : 'hover:bg-neutral-800 border border-transparent text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {isActive ? <FolderOpen size={18} className="text-lime-400 shrink-0" /> : <Folder size={18} className="text-neutral-500 shrink-0" />}
                  <span className="text-sm font-semibold truncate w-full">{project.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col relative overflow-y-auto custom-scrollbar">
          <div className="absolute top-4 right-4 flex gap-2">
             <span className="text-[10px] font-mono text-neutral-500 bg-neutral-800 px-2 py-1 rounded border border-neutral-700">File_Viewer</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1">{activeProject.title}</h3>
          <p className="text-xs md:text-sm font-semibold text-lime-400 mb-6">{activeProject.type}</p>

          <div className="w-full h-48 md:h-64 relative bg-neutral-800 rounded-lg border border-neutral-600 overflow-hidden mb-6 group">
            <Image 
              src={activeProject.image} 
              alt={activeProject.title} 
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-500 font-mono bg-black/40 z-[-1]">
              Image_Preview
            </div>
          </div>

          <div className="flex flex-col gap-4 grow mb-6">
            <p className="text-xs md:text-sm text-neutral-300 leading-relaxed bg-neutral-800/50 p-4 rounded-lg border border-neutral-700/50">
              {activeProject.desc}
            </p>
            
            <div>
              <h4 className="text-[10px] md:text-xs font-bold text-neutral-500 mb-2 uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-bold text-neutral-200 bg-neutral-800 border border-neutral-600 px-2.5 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-neutral-700">
            {(activeProject.githubUrl || activeProject.liveUrl) ? (
              <div className="flex flex-col sm:flex-row items-center gap-3">
                {activeProject.githubUrl && (
                  <a href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white py-2.5 rounded-lg text-xs md:text-sm font-medium transition-colors border border-neutral-600">
                    <FaGithub size={16} /> Source Code
                  </a>
                )}
                {activeProject.liveUrl && (
                  <a href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-neutral-900 py-2.5 rounded-lg text-xs md:text-sm font-bold transition-colors">
                    <ExternalLink size={16} /> Live Preview
                  </a>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center py-2 text-[10px] md:text-xs font-mono text-neutral-500 bg-neutral-800/30 rounded-lg border border-dashed border-neutral-700">
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}