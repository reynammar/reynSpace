import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "ReynSpace | Ammar Project Space",
  description: "My Project Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
    <body
      className={`${inter.className} bg-sky-400 text-neutral-900 min-h-screen relative overflow-x-hidden`}
    >
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <main className="relative z-10 w-full flex flex-col items-center">
        {children}
      </main>
    </body>
    </html>
  );
}