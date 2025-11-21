import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import Typed from 'typed.js';
import { Atom } from 'lucide-react';

const Hero = () => {
  const nameEl = useRef(null);
  const titleEl = useRef(null);

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ['Devang Katarkar'],
      typeSpeed: 60,
      backSpeed: 20,
      showCursor: false,
    });

    const typedTitle = new Typed(titleEl.current, {
      strings: ['Web Developer'],
      typeSpeed: 60,
      backSpeed: 20,
      startDelay: 800,
      showCursor: true,
      cursorChar: '_',
    });

    return () => {
      typedName.destroy();
      typedTitle.destroy();
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0a192f] to-[#172a45]">
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 sm:py-32 text-white">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-3 mb-6">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 8, ease: 'linear' }} className="p-3 rounded-full bg-blue-500/10 ring-1 ring-blue-400/30">
              <Atom className="text-blue-400" size={28} />
            </motion.div>
            <span className="text-blue-300/80">Portfolio</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <span ref={nameEl} className="block drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]"></span>
          </h1>

          <p className="mt-3 text-xl sm:text-2xl text-blue-200">
            <span ref={titleEl}></span>
          </p>

          <p className="mt-6 text-blue-200/90 max-w-2xl">
            Enthusiastic developer passionate about creating impactful web solutions
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="relative group inline-flex items-center gap-2 rounded-lg bg-blue-600/80 px-5 py-3 text-white backdrop-blur transition-all hover:scale-[1.02] hover:bg-blue-500">
              <span className="absolute inset-0 -z-10 rounded-lg bg-blue-500/50 blur-md opacity-0 group-hover:opacity-100 transition"/>
              View Projects
            </a>
            <a href={`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact/ping`} target="_blank" className="relative group inline-flex items-center gap-2 rounded-lg border border-blue-300/30 px-5 py-3 text-blue-100 transition hover:scale-[1.02] hover:border-blue-300/60">
              <span className="absolute inset-0 -z-10 rounded-lg bg-white/5 blur-md opacity-0 group-hover:opacity-100 transition"/>
              Ping API
            </a>
            <a href="/resume.pdf" className="relative group inline-flex items-center gap-2 rounded-lg border border-emerald-300/30 px-5 py-3 text-emerald-100 transition hover:scale-[1.02] hover:border-emerald-300/60">
              <span className="absolute inset-0 -z-10 rounded-lg bg-emerald-400/10 blur-md opacity-0 group-hover:opacity-100 transition"/>
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a192f]/60"></div>
    </section>
  );
};

export default Hero;
