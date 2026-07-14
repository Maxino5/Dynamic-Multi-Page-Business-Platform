import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Overview({ isOverclocked }) {
  const [command, setCommand] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    'Welcome to my interactive portfolio database!',
    'Try typing "/about" or "/skills" below to learn more about me.',
    'Type "/clear" if you want to wipe the screen.'
  ]);
  const logEndRef = useRef(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!command.trim()) return;

    let reply = `Command "${command}" not found. Type "/skills" or "/about" for info!`;
    const cmd = command.trim().toLowerCase();

    if (cmd === '/about') {
      reply = 'Hi, my name is Atijoro Ewoma. I am a frontend developer specializing in React, Tailwind CSS, and beautiful interactive designs.';
    } else if (cmd === '/skills') {
      reply = 'MY SKILLS: JavaScript (ES6+), React.js, Tailwind CSS, Vite, Git, and Responsive Web Design.';
    } else if (cmd === '/clear') {
      setTerminalLogs([]);
      setCommand('');
      return;
    }

    setTerminalLogs((prev) => [...prev, `visitor$ ${command}`, reply]);
    setCommand('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      
      {/* Dashboard Introduction & Stats */}
      <div className="md:col-span-2 space-y-6">
        <div>
          <h1 className="text-3xl font-black tracking-widest uppercase text-white mb-2">
            Interactive <span className={`transition-all duration-500 ${isOverclocked ? 'text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)]' : 'text-violet-500'}`}>Dashboard</span>
          </h1>
          <p className="text-zinc-500 text-xs tracking-wider uppercase">
            A live showcase of custom charts & interactive interface states
          </p>
        </div>

        {/* Clear Chart: Network flow becomes User Traffic */}
        <div className="bg-zinc-950/60 border border-zinc-900 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Mock Active Visitors</p>
              <h4 className="text-2xl font-black text-white">{isOverclocked ? '1,280 Users' : '420 Users'}</h4>
            </div>
            <span className={`px-2 py-1 text-[8px] font-bold uppercase rounded border ${isOverclocked ? 'border-rose-500/40 text-rose-400 bg-rose-500/10' : 'border-violet-500/40 text-violet-400 bg-violet-500/10'}`}>
              Live Traffic Sim
            </span>
          </div>

          {/* Glowing Animated SVG Path */}
          <div className="h-32 w-full flex items-end">
            <svg viewBox="0 0 500 100" preserveAspectRatio="none" className="w-full h-24 overflow-visible">
              <defs>
                <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={isOverclocked ? '#f43f5e' : '#8b5cf6'} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={isOverclocked ? '#f43f5e' : '#8b5cf6'} stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,50 Q62.5,20 125,55 T250,30 T375,60 T500,20 L500,100 L0,100 Z"
                fill="url(#chart-grad)"
                stroke={isOverclocked ? '#f43f5e' : '#8b5cf6'}
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              <motion.path
                d="M0,45 Q70,70 140,35 T280,50 T420,25 T500,40"
                fill="none"
                stroke={isOverclocked ? '#fda4af' : '#c084fc'}
                strokeWidth="1.5"
                strokeDasharray="4 4"
                animate={{ x: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
            </svg>
          </div>
        </div>

        {/* Real-world Metrics (Page Speed, Server Status) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
            <span className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase">Average Load Time</span>
            <p className={`text-xl font-black ${isOverclocked ? 'text-rose-400' : 'text-zinc-200'}`}>
              {isOverclocked ? '0.2 seconds' : '0.8 seconds'}
            </p>
          </div>
          <div className="bg-zinc-950/60 border border-zinc-900 rounded-xl p-4">
            <span className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase">Project Status</span>
            <p className="text-xl font-black text-emerald-400">DEPLOYED & LIVE</p>
          </div>
        </div>
      </div>

      {/* Interactive Command Terminal */}
      <div className="bg-black border border-zinc-900 rounded-2xl p-4 flex flex-col h-[400px] shadow-2xl relative">
        <div className="flex items-center gap-1.5 pb-3 border-b border-zinc-900 mb-3">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-[9px] font-mono text-zinc-600 ml-2">portfolio_terminal.sh</span>
        </div>

        <div className="flex-grow overflow-y-auto font-mono text-[11px] text-zinc-400 space-y-2 pr-1 scrollbar-thin">
          {terminalLogs.map((log, index) => (
            <div key={index} className={log.startsWith('visitor$') ? 'text-fuchsia-400' : 'text-zinc-400'}>
              {log}
            </div>
          ))}
          <div ref={logEndRef} />
        </div>

        <form onSubmit={handleCommandSubmit} className="mt-3 pt-2 border-t border-zinc-900 flex items-center">
          <span className="text-fuchsia-400 font-mono text-[11px] mr-2">visitor$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Type /about or /skills..."
            className="w-full bg-transparent border-none outline-none font-mono text-[11px] text-white placeholder-zinc-700"
          />
        </form>
      </div>

    </motion.div>
  );
}