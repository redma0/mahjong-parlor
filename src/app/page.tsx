// src/pages/index.tsx
import { FaWhatsapp, FaViber } from 'react-icons/fa';
import { FaWeixin } from 'react-icons/fa6'; // WeChat icon

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f7eccc] p-8 relative">
      {/* Logo */}
      <div className="mb-12 w-full max-w-[300px] relative z-10">
        <img 
          src="/mahjong-logo-transparent.png" 
          alt="Mahjong Parlor" 
          className="w-full h-auto"
        />
      </div>

      {/* Launch Text */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl md:text-5xl text-[#333333] font-serif mb-4">
          Opening soon!
        </h1>
        
        <p className="text-[#666666] mb-8 text-center max-w-md">
          We are located in the Kineski Centar at Blok 70
        </p>
      </div>

      {/* Email Form */}
      <div className="w-full max-w-md mb-12 relative z-10">
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-[#40E0D0]/20 rounded-lg 
                     bg-white/80 backdrop-blur-sm
                     focus:outline-none focus:border-[#40E0D0]/50 transition-colors"
          />
          <button 
            className="bg-[#40E0D0] text-white px-6 py-2 rounded-lg 
                     hover:bg-[#40E0D0]/90 transition-all duration-300
                     shadow-sm hover:shadow-md"
          >
            Notify me
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-6 items-center justify-center">
        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center rounded-full
                   bg-[#40E0D0] text-white hover:bg-[#40E0D0]/90 
                   transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="WeChat"
        >
          <FaWeixin className="w-6 h-6" />
        </a>

        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center rounded-full
                   bg-[#25D366] text-white hover:bg-[#25D366]/90
                   transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        <a
          href="#"
          className="w-12 h-12 flex items-center justify-center rounded-full
                   bg-[#7360F2] text-white hover:bg-[#7360F2]/90
                   transition-all duration-300 shadow-sm hover:shadow-md"
          aria-label="Viber"
        >
          <FaViber className="w-6 h-6" />
        </a>
      </div>
    </main>
  );
}
