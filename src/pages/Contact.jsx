import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="max-w-md w-full mx-auto px-6"
    >
      <div className="bg-zinc-950/80 border border-zinc-900 rounded-3xl p-8 relative overflow-hidden backdrop-blur-md">
        
        {success ? (
          <div className="text-center py-12">
            <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2">Message Received</p>
            <h3 className="text-xl font-black text-white">TALK TO YOU SOON!</h3>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-5">
            <h3 className="text-md font-black uppercase tracking-widest text-white border-b border-zinc-900 pb-3">Get In Touch</h3>
            <div>
              <label className="block text-[8px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5">Your Name</label>
              <input type="text" required placeholder="John Doe" className="w-full bg-black/60 border border-zinc-900 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-800 focus:outline-none focus:border-zinc-700 transition-colors" />
            </div>
            <div>
              <label className="block text-[8px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5">Your Email</label>
              <input type="email" required placeholder="john@example.com" className="w-full bg-black/60 border border-zinc-900 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-800 focus:outline-none focus:border-zinc-700 transition-colors" />
            </div>
            <div>
              <label className="block text-[8px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5">Your Message</label>
              <textarea required rows="3" placeholder="Hey, I'd love to talk about a website project..." className="w-full bg-black/60 border border-zinc-900 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-800 focus:outline-none focus:border-zinc-700 transition-colors resize-none" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-indigo-500 text-white font-bold text-[10px] uppercase tracking-widest py-3 rounded-xl hover:from-violet-500 hover:to-indigo-400 transition-all shadow-lg shadow-indigo-600/10">
              Send Message
            </button>
          </form>
        )}
      </div>
    </motion.div>
  );
}