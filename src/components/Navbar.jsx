import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar({ isOverclocked, setIsOverclocked }) {
  const location = useLocation();
  const links = [
    { name: 'Dashboard', path: '/' },
    { name: 'My Projects', path: '/services' },
    { name: 'Contact Me', path: '/contact' }
  ];

  return (
    <nav className="w-full border-b border-zinc-900 bg-black/60 backdrop-blur-xl sticky top-0 z-50 py-4 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Simple & Clear Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`h-8 w-8 rounded bg-gradient-to-tr flex items-center justify-center transition-all duration-500 ${isOverclocked ? 'from-rose-500 to-fuchsia-500 shadow-lg shadow-rose-500/40' : 'from-violet-600 to-indigo-500 shadow-lg shadow-indigo-600/20'}`}>
            <span className="text-white text-xs font-black">▲</span>
          </div>
          <span className="text-white font-black tracking-widest text-xs uppercase group-hover:text-fuchsia-400 transition-colors">
            DEV PORTFOLIO
          </span>
        </Link>

        {/* Clear Navigation Links */}
        <div className="flex gap-1 bg-zinc-900/40 p-1 border border-zinc-800/40 rounded-full">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-colors"
                style={{ color: isActive ? '#f472b6' : '#a1a1aa' }}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Simple Theme Toggle */}
        <button
          onClick={() => setIsOverclocked(!isOverclocked)}
          className={`px-3 py-1.5 rounded-full border text-[9px] font-bold uppercase tracking-wider transition-all duration-500 flex items-center gap-2 ${
            isOverclocked 
              ? 'border-rose-500 text-rose-400 bg-rose-950/20 shadow-[0_0_15px_rgba(244,63,94,0.3)] animate-pulse' 
              : 'border-zinc-800 text-zinc-400 hover:border-zinc-600'
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${isOverclocked ? 'bg-rose-500 shadow-[0_0_8px_#f43f5e]' : 'bg-zinc-600'}`} />
          {isOverclocked ? 'Neon Glow On' : 'Neon Glow Off'}
        </button>

      </div>
    </nav>
  );
}