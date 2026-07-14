import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const modules = [
    { title: 'E-Commerce Applications', desc: 'Sleek, secure online stores with animated product grids, dynamic search features, and highly-optimized checkout systems.', accent: 'from-violet-500 to-indigo-500' },
    { title: 'Custom Client Dashboards', desc: 'Beautiful, visual dashboards (like the one on my homepage) that help companies track, read, and understand their business metrics.', accent: 'from-fuchsia-500 to-rose-500' },
    { title: 'Responsive Landing Pages', desc: 'High-speed, eye-catching promo websites built to look stunning on both mobile phones and wide-screen desktop monitors.', accent: 'from-pink-500 to-amber-500' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="max-w-5xl w-full mx-auto px-6"
    >
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl font-black uppercase tracking-widest text-white mb-2">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Services</span>
        </h1>
        <p className="text-zinc-500 text-xs uppercase tracking-widest">The types of high-performance web products I build</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((m, i) => (
          <div key={m.title} className="group relative bg-zinc-950/80 border border-zinc-900 hover:border-zinc-800 p-6 rounded-2xl transition-all duration-300">
            <div className={`absolute -inset-[1px] bg-gradient-to-br ${m.accent} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-md pointer-events-none`} />
            
            <h3 className="text-md font-bold text-white mb-3">{m.title}</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}