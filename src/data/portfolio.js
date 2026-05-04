class NavigationItem {
  constructor(label, href) {
    this.label = label;
    this.href = href;
  }
}

class SkillGroup {
  constructor(name, items) {
    this.name = name;
    this.items = items;
  }
}

class Project {
  constructor({ title, summary, stack, links = [], highlights = [] }) {
    this.title = title;
    this.summary = summary;
    this.stack = stack;
    this.links = links;
    this.highlights = highlights;
  }
}

class TimelineItem {
  constructor(title, meta, description) {
    this.title = title;
    this.meta = meta;
    this.description = description;
  }
}

class ContactMethod {
  constructor(label, value, href, icon) {
    this.label = label;
    this.value = value;
    this.href = href;
    this.icon = icon;
  }
}

class SocialLink {
  constructor(label, href) {
    this.label = label;
    this.href = href;
  }
}

export const navItems = [
  new NavigationItem('About', '#about'),
  new NavigationItem('Projects', '#projects'),
  new NavigationItem('Resume', '#resume'),
  new NavigationItem('Contact', '#contact'),
];

export const socialLinks = [
  new SocialLink('GitHub', 'https://github.com/pandeyp1426'),
  new SocialLink('LinkedIn', 'https://www.linkedin.com/in/pradeep-pandey-341198273/'),
];

export const skillGroups = [
  new SkillGroup('Languages', ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'R', 'LaTeX']),
  new SkillGroup('Web', ['React', 'Vite', 'Redux', 'Tailwind CSS', 'REST APIs', 'Flask', 'Auth0', 'Node.js', 'HTML', 'CSS']),
  new SkillGroup('Databases', ['MySQL', 'AWS RDS', 'IndexedDB', 'SQL Schema Design', 'Portfolio Transaction Storage', 'Local Browser Storage']),
  new SkillGroup('Cloud', ['AWS EC2', 'AWS RDS', 'Google Cloud DNS', 'Ubuntu/Linux', 'Nginx', 'Gunicorn', 'systemd', 'Let’s Encrypt']),
  new SkillGroup('Tools', ['Git', 'GitHub', 'CMake', 'SFML', 'Catch2', 'JavaFX', 'RStudio', 'yfinance', 'LangChain', 'OpenAI API']),
  new SkillGroup('Concepts', ['Object-Oriented Programming', 'Data Structures', 'Algorithms', 'Operating Systems', 'Finite Automata', 'Cryptography', 'RSA', 'AES']),
];

export const featuredProject = new Project({
  title: 'IIIF 3D Manifest Editor and Viewer',
  summary:
    'A real-world capstone digital humanities tool for creating, editing, importing, exporting, and previewing IIIF 3D manifests. The app gives users a practical React-based workspace for managing 3D resources and structured manifest JSON without hand-authoring every field.',
  stack: ['Real-World Capstone', 'React', 'TypeScript', 'Vite', 'Tailwind', 'IndexedDB', 'GitHub Gist', 'IIIF Presentation API'],
  links: [
    {
      label: 'Live Site',
      href: 'https://wilsont0554.github.io/ManifestEditor/',
      primary: true,
    },
    {
      label: 'GitHub Repo',
      href: 'https://github.com/Wilsont0554/ManifestEditor',
    },
  ],
  highlights: [
    'Contributed to a React and Vite-based IIIF 3D editor for creating, editing, importing, exporting, and previewing structured 3D manifests.',
    'Built UI features for managing 3D content resources, multilingual labels, transforms, technical resources, and live JSON previews.',
    'Implemented browser persistence with IndexedDB to save manifest editor state locally.',
    'Added GitHub Gist import/export workflows to make generated manifests easier to share, test, and review.',
    'Improved UX with collapsible resource cards, clearer save dialogs, transform controls, and non-technical explanations.',
    'Worked in sprint-based development using user stories, acceptance criteria, Agile planning, and team collaboration.',
  ],
});

export const projects = [
  new Project({
    title: 'Fiber Optic Alignment and Test Station Simulator',
    summary:
      'A GUI-based automation engineering simulator for fiber optic alignment and test station workflows. The project models one complete workflow from user input to validation to persistent test result storage.',
    stack: ['C#', '.NET 8', 'WinForms', 'SQLite', 'Automation'],
    links: [
      {
        label: 'GitHub Repo',
        href: 'https://github.com/pandeyp1426/Fiber-Optic-Alignment-and-Test-Station-Simulator',
      },
    ],
    highlights: [
      'Designed a GUI simulator focused on automation engineering requirements for alignment and station testing.',
      'Planned validation logic for simulated alignment quality, test results, and pass/fail conditions.',
      'Designed SQL-based storage for test runs, alignment values, validation results, and timestamps.',
      'Modeled a simplified automation workflow connecting user input, test validation, and persistent result tracking.',
    ],
  }),
  new Project({
    title: 'RankMyStocks',
    summary:
      'A full-stack stock ranking and portfolio management platform using React, Redux, Flask, MySQL, Auth0, live market data, and production AWS deployment.',
    stack: ['React', 'Vite', 'Redux', 'Flask', 'MySQL', 'Auth0', 'AWS EC2/RDS', 'Nginx'],
    links: [
      { label: 'Live Demo', href: 'https://www.rankmystocks.com' },
      { label: 'GitHub Repo', href: 'https://github.com/pandeyp1426' },
    ],
    highlights: [
      'Built REST API endpoints for stock comparison, portfolio creation, transaction tracking, and daily market news.',
      'Implemented MySQL tables for portfolios, stocks, transactions, and portfolio snapshots to track invested value, current value, and percentage change.',
      'Deployed on AWS EC2 with Gunicorn, Nginx, HTTPS using Let’s Encrypt, and AWS RDS for persistent cloud database storage.',
      'Integrated yfinance for live stock pricing and optional AI-generated market summaries using LangChain and the OpenAI API.',
      'Configured Google Cloud DNS for a production domain and resolved CORS, Node version, SSL, and reverse proxy deployment issues.',
    ],
  }),
  new Project({
    title: 'WFC Biome Generator',
    summary:
      'A C++ procedural map generator using Wave Function Collapse and finite automata-based biome adjacency rules.',
    stack: ['C++', 'SFML', 'CMake', 'Catch2', 'OOP', 'Finite Automata'],
    links: [{ label: 'GitHub Repo', href: 'https://github.com/pandeyp1426/WFCBiomeGenerator' }],
    highlights: [
      'Designed a BiomeDFA class to validate allowed neighbor transitions between sea, coast, land, mountains, and swamps.',
      'Used entropy-based cell selection with priority logic to collapse the lowest-entropy cells first.',
      'Planned backtracking and constraint propagation to handle invalid biome configurations.',
      'Set up a C++ project structure with CMake, SFML visualization, and Catch2 testing.',
    ],
  }),
  new Project({
    title: 'RSA Cryptography CTF Challenge',
    summary:
      'A number theory and security project focused on RSA-based CTF challenges, weak-key vulnerabilities, and clear solution writeups.',
    stack: ['Python', 'RSA', 'Cryptography', 'LaTeX', 'Number Theory'],
    links: [{ label: 'GitHub Repo', href: 'https://github.com/pandeyp1426/Cryptography_CTF_CHALLENGES' }],
    highlights: [
      'Created RSA-based CTF challenges involving weak key vulnerabilities such as shared prime factors and Wiener’s attack.',
      'Wrote LaTeX problem statements and solution walkthroughs explaining the math behind RSA attacks.',
      'Applied modular arithmetic, the Euclidean algorithm, continued fractions, and public-key cryptography concepts.',
      'Practiced classical and modern cryptographic systems including shift ciphers, affine ciphers, Vigenère, AES, DES, SPN, and Feistel networks.',
    ],
  }),
];

export const experience = [
  new TimelineItem(
    'Capstone Developer, IIIF 3D Manifest Editor and Viewer',
    'Real-world capstone project | React, TypeScript, Vite, Tailwind, IndexedDB, IIIF Presentation API | 2026 - Present',
    'Contributing to a React-based digital humanities tool for creating, editing, importing, exporting, and previewing IIIF 3D manifests. Built resource management UI, live JSON previews, local browser persistence, GitHub Gist sharing workflows, and clearer user-facing explanations for non-technical users.',
  ),
  new TimelineItem(
    'Event Management Lead / Core Team Member',
    'UW-Stout AWS Cloud Club | Dec. 2025 - Present',
    'Help plan and coordinate cloud-focused student events, including room logistics, outreach, speaker coordination, and student engagement around AWS services, cloud computing, and professional development.',
  ),
];

export const education = [
  new TimelineItem(
    'B.S. in Computer Science',
    'University of Wisconsin-Stout | Expected Dec 2026',
    'Concentration in Mobile Application Development with a Mathematics minor.',
  ),
];

export const contactMethods = [
  new ContactMethod('Email', 'pandeyp1426@my.uwstout.edu', 'mailto:pandeyp1426@my.uwstout.edu', 'mail'),
  new ContactMethod('Phone', '(508) 723-0506', 'tel:+15087230506', 'phone'),
  new ContactMethod('Location', 'Wisconsin, USA', '#contact', 'map'),
];
