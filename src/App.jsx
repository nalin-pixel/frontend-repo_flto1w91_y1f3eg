import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import VsCodeShell from './components/VsCodeShell';
import { ProjectsSection, ExperienceSection, AboutSection } from './components/Sections';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function App() {
  const [activeTab, setActiveTab] = useState('js');

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Particles background subtle */}
      <Particles id="tsparticles" init={loadFull} options={{
        background: { color: { value: '#0a192f' } },
        fpsLimit: 60,
        interactivity: { events: { onHover: { enable: false }, resize: true } },
        particles: { number: { value: 30 }, color: { value: '#64ffda' }, links: { enable: true, color: '#233554' }, move: { enable: true, speed: 0.6 }, opacity: { value: 0.2 }, size: { value: { min: 1, max: 2 } } }
      }} />

      <Hero />

      <VsCodeShell activeTab={activeTab} setActiveTab={setActiveTab}>
        {activeTab === 'js' && <ProjectsSection />}
        {activeTab === 'json' && <ExperienceSection />}
        {activeTab === 'md' && <AboutSection />}
        {activeTab === 'ts' && (
          <div className="p-6">
            <ContactForm />
          </div>
        )}
      </VsCodeShell>

      <Footer />
    </div>
  );
}

const Footer = () => (
  <footer className="bg-black text-green-400 px-6 py-4 font-mono text-sm flex items-center justify-between border-t border-[#2a2a2a]">
    <div>devang@portfolio:~$ echo \"Hello, world\"</div>
    <div className="animate-pulse">_</div>
  </footer>
);

function ContactForm() {
  const [status, setStatus] = React.useState('');
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      setStatus(data?.message || 'Sent');
    } catch (e) {
      setStatus('Failed to send');
    }
  };

  return (
    <form onSubmit={submit} className="grid gap-4">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input className="w-full bg-[#111827] border border-[#2a2a2a] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input type="email" className="w-full bg-[#111827] border border-[#2a2a2a] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea className="w-full bg-[#111827] border border-[#2a2a2a] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" rows={4} value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required />
      </div>
      <button className="relative group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600/80 px-5 py-3 text-white backdrop-blur transition-all hover:scale-[1.02] hover:bg-blue-500">
        <span className="absolute inset-0 -z-10 rounded-lg bg-blue-500/50 blur-md opacity-0 group-hover:opacity-100 transition"/>
        Send
      </button>
      <div className="text-sm text-blue-200/80 min-h-[20px]">{status}</div>
    </form>
  );
}

export default App;
