export interface Project {
  name: string;
  shortDescription: string;
  techStack: string[];
  homepageUrl: string;
  gitHubUrl: string;
}

const projects: Project[] = [
  {
    name: 'tinney.dev',
    shortDescription: 'Personal website.',
    techStack: ['Astro', 'GitHub Pages'],
    homepageUrl: 'https://tinney.dev',
    gitHubUrl: 'https://github.com/cdtinney/tinney.dev',
  },
  {
    name: 'spune',
    shortDescription: 'Spotify visualizer for your living room TV, inspired by Zune.',
    techStack: ['React/Redux', 'Node.js', 'Jest', 'Heroku', 'MongoDB'],
    homepageUrl: 'https://spune.tinney.dev',
    gitHubUrl: 'https://github.com/cdtinney/spune',
  },
  {
    name: 'react-double-marquee',
    shortDescription: 'A marquee component.',
    techStack: ['React', 'Rollup'],
    homepageUrl: 'https://www.npmjs.com/package/react-double-marquee',
    gitHubUrl: 'https://github.com/cdtinney/react-double-marquee',
  },
  {
    name: 'innerdroste',
    shortDescription: 'Client-side Droste effect generator, inspired by Tame Impala.',
    techStack: ['JavaScript', 'HTML Canvas'],
    homepageUrl: 'https://innerdroste.tinney.dev',
    gitHubUrl: 'https://github.com/cdtinney/innerdroste',
  },
  {
    name: 'fresh-tabula-js',
    shortDescription: 'PDF table extraction to CSV.',
    techStack: ['JavaScript', 'Rollup'],
    homepageUrl: 'https://www.npmjs.com/package/fresh-tabula-js',
    gitHubUrl: 'https://github.com/cdtinney/fresh-tabula-js',
  },
  {
    name: 'Aerotrike Aviation',
    shortDescription: 'Small business website.',
    techStack: ['Astro', 'Bootstrap'],
    homepageUrl: 'https://aerotrikeaviation.com',
    gitHubUrl: 'https://github.com/cdtinney/aerotrike-aviation',
  },
  {
    name: 'rock1',
    shortDescription: 'Alt1 plugin for Vorago in RuneScape.',
    techStack: ['JavaScript', 'GitHub Pages'],
    homepageUrl: 'https://cdtinney.github.io/rock1/',
    gitHubUrl: 'https://github.com/cdtinney/rock1',
  },
  {
    name: 'ahk_rs3',
    shortDescription: 'Personal AutoHotkey 2 framework for RuneScape 3.',
    techStack: ['AutoHotkey 2'],
    homepageUrl: 'https://github.com/cdtinney/ahk_rs3',
    gitHubUrl: 'https://github.com/cdtinney/ahk_rs3',
  },
];

export default projects;
