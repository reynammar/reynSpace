export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About Me', href: '#about' },
    { label: 'MyTech', href: '#techstack' },
    { label: 'Experience', href: '#experience' },
    { label: 'MyWork', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-max">
      <div className="bg-[#2C2C2C]/90 backdrop-blur-md border border-neutral-600 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-2xl flex items-center justify-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto flex-nowrap">
        {navItems.map((item) => (
          <a 
            key={item.label}
            href={item.href}
            className="text-[10px] sm:text-xs font-semibold text-neutral-300 hover:text-lime-400 transition-colors whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}