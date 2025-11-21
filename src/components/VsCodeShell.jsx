import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode2, Folder, Terminal, Github, Mail, Phone } from 'lucide-react';

const files = [
  { name: 'projects.js', type: 'js' },
  { name: 'about.md', type: 'md' },
  { name: 'experience.json', type: 'json' },
  { name: 'contact.ts', type: 'ts' },
];

const TabButton = ({ active, onClick, children }) => (
  <button onClick={onClick} className={`px-4 py-2 text-sm rounded-t-md border-b-0 border border-[#2a2a2a] ${active ? 'bg-[#1e1e1e] text-white' : 'bg-[#252526] text-gray-300 hover:text-white hover:bg-[#2a2a2a]'} transition-all`}>{children}</button>
);

const VsCodeShell = ({ activeTab, setActiveTab, children }) => {
  return (
    <section className="relative bg-[#0a192f] py-16" id="editor">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 lg:col-span-3">
            <div className="rounded-md overflow-hidden border border-[#2a2a2a] bg-[#252526]">
              <div className="px-3 py-2 text-xs uppercase tracking-wide text-gray-400 bg-[#333333] border-b border-[#2a2a2a]">Explorer</div>
              <ul className="p-2 text-sm">
                {files.map((f) => (
                  <li key={f.name} className={`flex items-center gap-2 px-2 py-2 rounded cursor-pointer ${activeTab===f.type? 'bg-[#373737] text-white':'text-gray-300 hover:bg-[#2f2f2f] hover:text-white'}`} onClick={() => setActiveTab(f.type)}>
                    <Folder size={16} className="text-yellow-400" />
                    {f.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 rounded-md border border-[#2a2a2a] bg-[#1e1e1e] p-3 text-gray-300 text-sm">
              <div className="flex items-center gap-3 mb-2">
                <Github size={16} /> <span>github.com/devang-katarkar</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <Mail size={16} /> <span>devang@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} /> <span>+91-00000-00000</span>
              </div>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-9">
            <div className="rounded-md overflow-hidden border border-[#2a2a2a]">
              <div className="flex items-center gap-2 bg-[#252526] border-b border-[#2a2a2a] px-2">
                {files.map((f) => (
                  <TabButton key={f.type} active={activeTab===f.type} onClick={() => setActiveTab(f.type)}>
                    <div className="flex items-center gap-2"><FileCode2 size={14} /> {f.name}</div>
                  </TabButton>
                ))}
              </div>

              <div className="bg-[#1e1e1e] p-0 min-h-[420px]">
                <AnimatePresence mode="wait">
                  <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                    {children}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="bg-black text-green-400 px-4 py-3 text-sm font-mono border-t border-[#2a2a2a] flex items-center gap-2">
                <Terminal size={16} /> npm run dev <span className="animate-pulse">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VsCodeShell;
