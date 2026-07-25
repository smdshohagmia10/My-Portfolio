'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';

const profileData = {
  name: 'MOSLEM ALI SOHAG',
  role: 'MERN Stack Developer',
  description:
    'Crafting high-performance, visually stunning web experiences. I turn complex problems into elegant, user-centric digital solutions.',

  image: '/Sohag1111.jpg',  

  github: 'https://github.com/smdshohagmia10',
  linkedin: 'https://www.linkedin.com/in/sohag-dev',
  resume: '/resume.pdf',
};

const HomePage = () => {
  return (
    <main id='home' className="min-h-screen bg-[#14071f] text-white flex items-center justify-center px-6 py-10 font-sans overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <section className="space-y-7 order-2 md:order-1">
          
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs tracking-[3px] uppercase text-purple-300">
            Welcome to my portfolio..
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Hi, I&apos;m <br />
              <span className="text-purple-400">
                {profileData.name}
              </span>
            </h1>

            <p className="text-lg md:text-xl font-semibold text-gray-400 tracking-[6px] uppercase">
              {profileData.role}
            </p>
          </div>

          <p className="text-gray-400 max-w-xl leading-relaxed text-base md:text-lg">
            {profileData.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            
            {/* Resume */}
            <a
              href={profileData.resume}
              download
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-purple-500/20 hover:scale-105"
            >
              <HiOutlineDownload size={18} />
              Get Resume
            </a>

            {/* GitHub */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:scale-110"
            >
              <FaGithub size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </section>

       {/* RIGHT IMAGE */}
<section className="relative flex justify-center order-1 md:order-2">

  {/* Glow bg */}
  <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] bg-purple-600/20 blur-[90px] rounded-full" />

  {/* Circle container */}
  <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full z-10"
    style={{ border: "3px solid rgba(124,58,237,0.4)", boxShadow: "0 0 40px rgba(124,58,237,0.3)" }}
  >
    {/* ✅ Online badge — circle এর বাইরে absolute */}
    <div
      className="absolute -top-3 -right-3 z-30 flex items-center gap-1.5 rounded-full px-3 py-1.5"
      style={{
        background: "rgba(10,4,28,0.95)",
        border: "0.5px solid rgba(124,58,237,0.5)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 0 12px rgba(124,58,237,0.3)",
      }}
    >
      <span
        className="h-2 w-2 rounded-full bg-green-400"
        style={{ animation: "pulse 2s infinite", boxShadow: "0 0 6px #4ade80" }}
      />
      <span className="text-[11px] tracking-widest uppercase font-medium"
        style={{ fontFamily: "'DM Mono', monospace", color: "rgba(196,181,253,0.95)" }}>
        Online
      </span>
    </div>

    {/* ✅ Image — object-top থেকে object-center, scale কমানো */}
    <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-purple-800 to-black">
      <Image
        src={profileData.image}
        alt={profileData.name}
        fill
        priority
        className="object-cover object-top"
        style={{ transform: "scale(0.99)", transformOrigin: "top center" }}
      />
    </div>
  </div>
</section>

<style>{`
  @keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ade80; }
    50% { opacity: 0.5; box-shadow: 0 0 12px #4ade80; }
  }
`}</style>
      </div>
    </main>
  );
};

export default HomePage;                                                   