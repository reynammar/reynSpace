import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { FaRegFile, FaAt, FaRegImage, FaArrowUp } from 'react-icons/fa6';

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 overflow-hidden">
      <div className="relative transform -rotate-3 mt-10 md:mt-0">
        <h1 className="text-[6rem] md:text-[10rem] lg:text-[12rem] font-black text-white leading-none tracking-tighter drop-shadow-xl text-center select-none">
          PORTO<br />FOLIO
        </h1>

        <div className="absolute -inset-4 md:-inset-8 border-2 border-white pointer-events-none">
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-white" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-white" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white" />
        </div>

        <div className="absolute -bottom-6 -right-2 md:-right-8 flex flex-col items-start z-30">
          <svg width="20" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-500 drop-shadow-md ml-1 -mb-1 transform -rotate-12">
            <path d="M2 2L16 10L10 12L7 22L2 2Z" fill="currentColor" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <div className="bg-red-500 text-white text-[13px] font-bold px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap">
            Arif Ammar Sya&apos;bani
          </div>
        </div>

        <div className="absolute -top-16 -right-4 md:-right-24 bg-[#2C2C2C] text-white p-2 rounded-xl shadow-2xl border border-neutral-700 w-48 rotate-6 z-20 hidden md:block">
          <div className="flex items-center gap-3 py-2 px-3 hover:bg-neutral-700 rounded-md transition-colors">
            <SiNextdotjs size={14} />
            <span className="text-xs font-medium">Next.js</span>
            <span className="ml-auto text-[10px] text-neutral-500 font-mono">N</span>
          </div>
          <div className="flex items-center gap-3 py-2 px-3 hover:bg-neutral-700 rounded-md transition-colors">
            <SiReact className="text-[#61DAFB]" size={14} />
            <span className="text-xs font-medium">React</span>
            <span className="ml-auto text-[10px] text-neutral-500 font-mono">R</span>
          </div>
          <div className="flex items-center gap-3 py-2 px-3 hover:bg-neutral-700 rounded-md transition-colors">
            <SiTypescript className="text-[#3178C6]" size={14} />
            <span className="text-xs font-medium">TypeScript</span>
            <span className="ml-auto text-[10px] text-neutral-500 font-mono">T</span>
          </div>
          <div className="flex items-center gap-3 py-2 px-3 hover:bg-neutral-700 rounded-md transition-colors">
            <SiTailwindcss className="text-[#06B6D4]" size={14} />
            <span className="text-xs font-medium">Tailwind CSS</span>
            <span className="ml-auto text-[10px] text-neutral-500 font-mono">C</span>
          </div>
        </div>

        <div className="absolute -bottom-12 -left-4 md:-left-16 bg-[#2C2C2C] text-white p-3.5 rounded-xl shadow-2xl border border-neutral-700 w-64 transform rotate-2 z-20 flex flex-col gap-3">
          <span className="text-sm font-semibold px-1 text-neutral-200">
            FrontEnd Web Developer
          </span>
          <div className="flex items-center justify-between border-t border-neutral-600 pt-3 px-1">
            <div className="flex gap-3 text-neutral-400">
              <FaRegFile size={16} className="hover:text-white transition-colors" />
              <FaAt size={16} className="hover:text-white transition-colors" />
              <FaRegImage size={16} className="hover:text-white transition-colors" />
            </div>
            <div className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-colors shadow-lg">
              <FaArrowUp size={12} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}