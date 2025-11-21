import React from 'react';
import Editor from '@monaco-editor/react';

export const ProjectsSection = () => {
  const code = `// projects.js\nexport const projects = [\n  {\n    title: 'AnimeWatchlist Manager',\n    stack: 'React + Supabase',\n    code: "function addAnime(title){ /* supabase insert */ }",\n    demo: 'https://example.com/animewatchlist'\n  },\n  {\n    title: 'Ayursutra Patient Portal',\n    stack: 'Figma design',\n    code: "// Prototype built in Figma",\n    demo: 'https://figma.com/@ayursutra'\n  }\n];`;
  return (
    <Editor height="420px" defaultLanguage="javascript" theme="vs-dark" value={code} options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14 }} />
  );
};

export const ExperienceSection = () => {
  const json = `{
  "experience": [
    { "role": "Intern", "org": "Ybi Foundation", "year": "2023" },
    { "role": "Training", "org": "Eduskill Android & Zscaler", "year": "2022" }
  ]
}`;
  return (
    <Editor height="420px" defaultLanguage="json" theme="vs-dark" value={json} options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14 }} />
  );
};

export const AboutSection = () => {
  const md = `# About Me\n- Skills as VS Code extensions\n  - Prettier - Code formatter\n  - ESLint - Linting and quality\n  - Tailwind CSS IntelliSense\n- Education timeline\n  - B.Tech - 2020-2024\n- Leadership\n  - IEEE Student Branch roles`;
  return (
    <Editor height="420px" defaultLanguage="markdown" theme="vs-dark" value={md} options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14, wordWrap: 'on' }} />
  );
};