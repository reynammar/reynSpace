'use client';
import { useState } from 'react';
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiLaravel, SiPhp, SiGo, SiFigma, SiCanva } from 'react-icons/si';

const techData = [
  { 
    id: 'nextjs', name: 'Next.js', category: 'Frontend', color: 'text-lime-400', border: 'border-lime-400', icon: SiNextdotjs, 
    desc: 'Framework React berbasis arsitektur App Router dengan kapabilitas Full-stack.', 
    purpose: 'Saya gunakan ini sebagai fondasi utama di project e-commerce Sewascaff dan company profile Sili Mali buat ngejar performa tinggi dan optimasi SEO yang maksimal.' 
  },
  { 
    id: 'react', name: 'React', category: 'Frontend', color: 'text-[#61DAFB]', border: 'border-[#61DAFB]', icon: SiReact, 
    desc: 'Library JavaScript deklaratif untuk membangun antarmuka pengguna.', 
    purpose: 'Core engine yang saya gunakan untuk membangun komponen UI dan interaksi user yang mulus.' 
  },
  { 
    id: 'ts', name: 'TypeScript', category: 'Frontend', color: 'text-[#3178C6]', border: 'border-[#3178C6]', icon: SiTypescript, 
    desc: 'Superset dari JavaScript yang menambahkan static typing opsional.', 
    purpose: 'Membantu saya menghindari bug dan nulis kode yang lebih rapi pas nge-handle struktur data pada project-project website saya.' 
  },
  { 
    id: 'js', name: 'JavaScript', category: 'Frontend', color: 'text-[#F7DF1E]', border: 'border-[#F7DF1E]', icon: SiJavascript, 
    desc: 'Bahasa pemrograman inti untuk web development.', 
    purpose: 'Bahasa pemrograman utama yang saya gunakan untuk memberikan interaktivitas pada project-project website saya.' 
  },
  { 
    id: 'laravel', name: 'Laravel', category: 'Backend', color: 'text-[#FF2D20]', border: 'border-[#FF2D20]', icon: SiLaravel, 
    desc: 'Framework PHP MVC dengan sintaks yang elegan dan ekspresif.', 
    purpose: 'Pilihan utama yang saya gunakan untuk membangun website dinamis yang butuh dashboard admin CMS stabil dan cepat dikembangkan.' 
  },
  { 
    id: 'php', name: 'PHP', category: 'Backend', color: 'text-[#777BB4]', border: 'border-[#777BB4]', icon: SiPhp, 
    desc: 'Bahasa scripting server-side serbaguna.', 
    purpose: 'Saya gunakan untuk maintenance dan membangun custom logic di sisi server pada beberapa project web klien freelance.' 
  },
  { 
    id: 'golang', name: 'Golang', category: 'Backend', color: 'text-[#00ADD8]', border: 'border-[#00ADD8]', icon: SiGo, 
    desc: 'Bahasa pemrograman terkompilasi dari Google yang fokus pada efisiensi.', 
    purpose: 'Saya gunakan ketika riset dan ngebangun API service yang nuntut performa komputasi tinggi serta konkurensi data yang cepat.' 
  },
  { 
    id: 'figma', name: 'Figma', category: 'Design', color: 'text-[#F24E1E]', border: 'border-[#F24E1E]', icon: SiFigma, 
    desc: 'Platform desain antarmuka kolaboratif berbasis web.', 
    purpose: 'Tools wajib yang saya gunakan untuk merancang wireframe dan prototype interaktif sebelum ngoding.' 
  },
  { 
    id: 'canva', name: 'Canva', category: 'Design', color: 'text-[#00C4CC]', border: 'border-[#00C4CC]', icon: SiCanva, 
    desc: 'Tools desain grafis intuitif dengan ribuan aset.', 
    purpose: 'Tools serbaguna yang saya gunakan untuk membuat aset visual instan atau elemen grafis pendukung untuk mendukung konten website dan proposal project.' 
  },
];

export default function TechStackSection() {
  const [activeTech, setActiveTech] = useState(techData[0]);

  const categories = ['Frontend', 'Backend', 'Design'];

  return (
    <section id="techstack" className="w-full max-w-5xl mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row gap-6 bg-neutral-900/95 backdrop-blur-md rounded-xl border border-neutral-700 shadow-2xl overflow-hidden min-h-[400px]">
        
        <div className="w-full md:w-1/3 bg-neutral-800/50 border-b md:border-b-0 md:border-r border-neutral-700 p-4 flex flex-col gap-6 overflow-y-auto custom-scrollbar max-h-[250px] md:max-h-full">
          {categories.map(category => (
            <div key={category}>
              <h4 className="text-xs font-bold text-neutral-500 mb-3 uppercase tracking-wider pl-2">{category}</h4>
              <div className="flex flex-col gap-1">
                {techData.filter(t => t.category === category).map(tech => {
                  const Icon = tech.icon;
                  const isActive = activeTech.id === tech.id;
                  
                  return (
                    <button
                      key={tech.id}
                      onClick={() => setActiveTech(tech)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-left w-full ${
                        isActive 
                          ? 'bg-neutral-700 border border-neutral-500 text-white shadow-inner' 
                          : 'hover:bg-neutral-800 border border-transparent text-neutral-400 hover:text-neutral-200'
                      }`}
                    >
                      <Icon size={16} className={isActive ? tech.color : ''} />
                      <span className="text-sm font-medium">{tech.name}</span>
                      {isActive && <div className={`ml-auto w-1.5 h-1.5 rounded-full bg-current ${tech.color}`} />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center relative">
          <div className="absolute top-4 right-4 flex gap-2">
             <span className="text-[10px] font-mono text-neutral-500 bg-neutral-800 px-2 py-1 rounded border border-neutral-700">Inspector</span>
          </div>

          <div className="flex items-center gap-4 mb-6 mt-4 md:mt-0">
            <div className={`p-4 rounded-xl bg-neutral-800 border ${activeTech.border} shadow-lg shrink-0`}>
              <activeTech.icon size={48} className={activeTech.color} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">{activeTech.name}</h3>
              <span className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded bg-neutral-800 border ${activeTech.border} ${activeTech.color} mt-2 inline-block`}>
                {activeTech.category}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700/50">
              <h4 className="text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Description</h4>
              <p className="text-xs md:text-sm text-neutral-200 leading-relaxed">
                {activeTech.desc}
              </p>
            </div>

            <div className="bg-neutral-800/50 p-4 rounded-lg border border-neutral-700/50 relative overflow-hidden">
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${activeTech.border.replace('border-', 'bg-')}`} />
              <h4 className="text-[10px] md:text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Primary Purpose</h4>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                {activeTech.purpose}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}