import { FaDownload } from 'react-icons/fa6';

export default function FloatingCV() {
  return (
    <a 
      href="https://drive.google.com/file/d/1ppUg2Z-jR1bnQXCJk2UJUVBgw_rIDlSr/view?usp=sharing"
      aria-label="Lihat CV Saya"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-lime-500 hover:bg-lime-400 text-neutral-900 p-3 md:px-4 md:py-3 rounded-full shadow-[0_0_20px_rgba(132,204,22,0.4)] flex items-center justify-center gap-2 font-bold text-sm transition-transform hover:scale-105 border-2 border-lime-300"
    >
      <FaDownload size={16} />
      <span className="hidden md:inline">Lihat CV Saya</span>
    </a>
  );
}