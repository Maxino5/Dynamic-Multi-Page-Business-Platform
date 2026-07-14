import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';

// Page Imports
import Overview from './pages/Overview';
import Services from './pages/Services';
import Contact from './pages/Contact';

function AnimatedRoutes({ isOverclocked }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Overview isOverclocked={isOverclocked} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [isOverclocked, setIsOverclocked] = useState(false);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-1000 text-zinc-100 flex flex-col font-sans selection:bg-fuchsia-500/30 selection:text-fuchsia-200 ${isOverclocked ? 'bg-[#05000a]' : 'bg-black'}`}>
        
        {/* Subtle Cyber Grid Background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
        
        {/* Navbar */}
        <Navbar isOverclocked={isOverclocked} setIsOverclocked={setIsOverclocked} />
        
        <main className="flex-grow flex items-center justify-center py-12 relative z-10">
          <AnimatedRoutes isOverclocked={isOverclocked} />
        </main>
      </div>
    </Router>
  );
}