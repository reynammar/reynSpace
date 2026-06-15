import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';

export default function ContactSection() {
  return (
    <footer id="contact" className="w-full bg-neutral-900 border-t border-neutral-800 pt-16 pb-8 mt-10 relative z-20">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="w-10 h-1 bg-lime-400 mb-6 rounded-full" />

        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Mari Berkolaborasi!</h3>
        <p className="text-neutral-400 text-sm mb-8 max-w-lg leading-relaxed">
          Saat ini saya terbuka untuk peluang baru, diskusi proyek frontend development, maupun sekadar bertukar wawasan di bidang teknologi. Jangan ragu untuk menyapa!
        </p>

        <div className="flex gap-4 mb-12">
          <a href="mailto:ammarreynarif@gmail.com" className="flex items-center justify-center w-12 h-12 bg-neutral-800 text-neutral-400 rounded-full hover:bg-lime-500 hover:text-neutral-900 hover:-translate-y-1 transition-all border border-neutral-700 shadow-lg">
            <FaEnvelope size={20} />
          </a>
          <a href="https://www.linkedin.com/in/reynarifammar/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-neutral-800 text-neutral-400 rounded-full hover:bg-[#0A66C2] hover:text-white hover:-translate-y-1 transition-all border border-neutral-700 shadow-lg">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/reynammar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-neutral-800 text-neutral-400 rounded-full hover:bg-white hover:text-neutral-900 hover:-translate-y-1 transition-all border border-neutral-700 shadow-lg">
            <FaGithub size={20} />
          </a>
        </div>

        <div className="text-xs text-neutral-500 flex flex-col items-center gap-1 font-mono">
          <p>© {new Date().getFullYear()} Arif Ammar Sya&apos;bani. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}