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
  constructor({
    title,
    summary,
    stack,
    links = [],
    highlights = [],
    problem = '',
    role = '',
    features = [],
    challenges = [],
    learned = '',
    future = [],
    preview = 'Screenshot coming soon',
    media = [],
    featured = false,
  }) {
    this.title = title;
    this.summary = summary;
    this.stack = stack;
    this.links = links;
    this.highlights = highlights;
    this.problem = problem;
    this.role = role;
    this.features = features;
    this.challenges = challenges;
    this.learned = learned;
    this.future = future;
    this.preview = preview;
    this.media = media;
    this.featured = featured;
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
  new NavigationItem('Experience', '#experience'),
  new NavigationItem('Resume', '#resume'),
  new NavigationItem('Contact', '#contact'),
];

export const socialLinks = [
  new SocialLink('GitHub', 'https://github.com/pandeyp1426'),
  new SocialLink('LinkedIn', 'https://www.linkedin.com/in/pradeep-pandey-341198273/'),
];

export const skillGroups = [
  new SkillGroup('Frontend', ['React', 'TypeScript', 'Vite', 'Redux', 'Tailwind CSS']),
  new SkillGroup('Backend and APIs', ['Python', 'Flask', 'REST APIs', 'Auth0', 'Node.js']),
  new SkillGroup('Databases', ['MySQL', 'AWS RDS', 'IndexedDB', 'SQLite', 'SQL Schema Design']),
  new SkillGroup('Cloud and DevOps', ['AWS EC2', 'AWS RDS', 'Nginx', 'Gunicorn', 'Linux', 'Google Cloud DNS', "Let's Encrypt"]),
  new SkillGroup('Systems and Algorithms', ['C++', 'CMake', 'SFML', 'Catch2', 'Finite Automata', 'Wave Function Collapse']),
  new SkillGroup('Security and Math', ['RSA', 'Modular Arithmetic', 'Cryptography', 'LaTeX', 'Formal Languages', 'Context-Free Grammars']),
];

export const featuredProject = new Project({
  title: 'IIIF 3D Manifest Editor and Viewer',
  summary:
    'A real-world capstone digital humanities tool for creating, editing, importing, exporting, and previewing IIIF 3D manifests through a React and TypeScript interface.',
  stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'IndexedDB', 'GitHub Gist', 'IIIF JSON'],
  links: [
    {
      label: 'Live Demo',
      href: 'https://wilsont0554.github.io/ManifestEditor/',
      primary: true,
    },
    {
      label: 'GitHub Repo',
      href: 'https://github.com/Wilsont0554/ManifestEditor',
    },
  ],
  highlights: [
    'Built UI features for managing 3D content resources, multilingual labels, transforms, technical resources, and live JSON previews.',
    'Implemented browser persistence with IndexedDB to save manifest editor state locally.',
    'Added GitHub Gist import/export workflows to make generated manifests easier to share, test, and review.',
    'Improved UX with collapsible resource cards, clearer save dialogs, transform controls, and non-technical explanations.',
  ],
  problem:
    'IIIF 3D manifests are structured JSON documents that can be difficult to author by hand, especially when users need to manage resources, labels, transforms, previews, and exportable output.',
  role:
    'Capstone developer contributing React UI, data editing workflows, local persistence, GitHub Gist sharing, and sprint-based documentation.',
  features: [
    'Resource editing for 3D content, technical resources, multilingual labels, transforms, and metadata.',
    'Live JSON preview so users can inspect generated manifest output while editing.',
    'IndexedDB persistence for saving editor state in the browser.',
    'GitHub Gist import/export workflows for sharing and testing manifests.',
  ],
  challenges: [
    'Making a technical standards-based JSON workflow understandable for non-technical users.',
    'Keeping imported data, editor state, and live preview output aligned.',
    'Coordinating team work through user stories, acceptance criteria, sprint goals, and reviews.',
  ],
  learned:
    'I learned how to turn a standards-driven data model into a usable editor and how important clear UX is when software serves users outside a developer audience.',
  future: [
    'Add stronger validation for malformed resources.',
    'Improve preview coverage for complex 3D scenes.',
    'Add clearer onboarding examples for first-time IIIF users.',
  ],
  preview: 'Manifest editor demo',
  media: [
    {
      type: 'video',
      src: '/iiif_lamp.mp4',
      alt: 'Short screen recording of the IIIF 3D Manifest Editor interface',
      caption: 'Editing workflow and live manifest preview',
    },
  ],
  featured: true,
});

export const projects = [
  new Project({
    title: 'RankMyStocks',
    summary:
      'A full-stack stock ranking and portfolio management platform using React, Redux, Flask, MySQL, Auth0, live market data, and production AWS deployment.',
    stack: ['React', 'Redux', 'Flask', 'MySQL', 'Auth0', 'AWS EC2/RDS', 'Nginx'],
    links: [
      { label: 'Live Demo', href: 'https://www.rankmystocks.com', primary: true },
      { label: 'GitHub Repo', href: 'https://github.com/pandeyp1426/RankMyStocks' },
    ],
    highlights: [
      'Designed REST API endpoints for stock comparison, portfolio creation, transaction tracking, and daily market news.',
      'Implemented MySQL tables for portfolios, stocks, transactions, and snapshots to track value and percentage change.',
      "Deployed on AWS EC2 with Gunicorn, Nginx, HTTPS using Let's Encrypt, and AWS RDS for cloud database storage.",
      'Integrated yfinance for stock pricing and optional AI-generated market summaries using LangChain and the OpenAI API.',
    ],
    problem:
      'I wanted a practical way to compare stocks, create ranked portfolios, and persist portfolio history instead of keeping investment ideas scattered across notes and spreadsheets.',
    role:
      'Full-stack developer responsible for frontend flows, Flask API design, MySQL schema work, Auth0 integration, cloud deployment, and production debugging.',
    features: [
      'Stock comparison and portfolio creation flows.',
      'Portfolio transaction and snapshot storage.',
      'Market news and live stock data integrations.',
      'Production deployment with AWS, Nginx, Gunicorn, HTTPS, and custom DNS.',
    ],
    challenges: [
      'Debugging CORS, SSL, reverse proxy, and Node version issues during deployment.',
      'Designing tables that track invested value, current value, and percentage change over time.',
      'Handling external market data dependencies cleanly.',
    ],
    learned:
      'This project connected frontend, backend, database design, authentication, cloud deployment, and real production debugging.',
    future: [
      'Add broader automated test coverage.',
      'Improve caching and error handling for market data.',
      'Add richer portfolio analytics and charts.',
    ],
    preview: 'Live production app',
    media: [
      {
        type: 'image',
        src: '/rankmystocks.png',
        alt: 'RankMyStocks portfolio dashboard screenshot',
        caption: 'Portfolio dashboard and ranked stock workflow',
      },
    ],
    featured: true,
  }),
  new Project({
    title: 'Fiber Optic Alignment and Test Station Simulator',
    summary:
      'A GUI-based automation engineering simulator for fiber optic alignment and test station workflows, from user input to validation to persistent result storage.',
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
      'Modeled a simplified automation workflow connecting user input, test validation, and persistent tracking.',
    ],
    problem:
      'Automation software often turns physical or lab workflows into repeatable processes with validation, traceability, and stored results.',
    role:
      'Designed the simulator scope, GUI workflow, validation rules, and SQL-backed test run storage.',
    features: [
      'Input-to-validation-to-storage workflow for test station runs.',
      'Pass/fail validation planning for simulated alignment quality.',
      'SQLite storage for test runs, alignment values, validation results, and timestamps.',
    ],
    challenges: [
      'Keeping the scope focused on one complete engineering workflow.',
      'Modeling enough of the station process to feel realistic without overbuilding hardware simulation.',
    ],
    learned:
      'I practiced shaping a software project around real automation engineering needs: user input, validation, repeatability, and result traceability.',
    future: [
      'Add richer station dashboards and filtering.',
      'Add exported reports for completed test runs.',
      'Expand validation scenarios with more edge cases.',
    ],
    preview: 'Simulator screenshot',
    media: [
      {
        type: 'image',
        src: '/optics_automation.png',
        alt: 'Fiber optic alignment and test station simulator screenshot',
        caption: 'Automation-style station workflow mockup',
      },
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
    problem:
      'Procedural map generation needs constraints so generated terrain looks coherent instead of random.',
    role:
      'Designed biome rules, automata-based validation, C++ structure, visualization setup, and testing direction.',
    features: [
      'Biome adjacency validation with finite automata-inspired rules.',
      'Entropy-based cell selection for Wave Function Collapse.',
      'SFML visualization and CMake project setup.',
    ],
    challenges: [
      'Representing terrain transitions cleanly with object-oriented classes.',
      'Planning backtracking and constraint propagation for invalid states.',
    ],
    learned:
      'This project connects theory and implementation: automata, constraints, algorithms, C++ structure, and visualization.',
    future: [
      'Complete backtracking for failed configurations.',
      'Add configurable biome rule sets.',
      'Expand Catch2 tests around edge cases.',
    ],
    preview: 'Procedural generation demo',
    media: [
      {
        type: 'image',
        src: '/wfc.gif',
        alt: 'Animated Wave Function Collapse biome generation demo',
        caption: 'Animated collapse process for biome generation',
      },
    ],
  }),
  new Project({
    title: 'RSA Cryptography CTF Challenge',
    summary:
      'A number theory and security project focused on RSA-based CTF challenges, weak-key vulnerabilities, and clear solution writeups.',
    stack: ['Python', 'RSA', 'Cryptography', 'LaTeX', 'Number Theory'],
    links: [{ label: 'GitHub Repo', href: 'https://github.com/pandeyp1426/Cryptography_CTF_CHALLENGES' }],
    highlights: [
      "Created RSA-based CTF challenges involving weak key vulnerabilities such as shared prime factors and Wiener's attack.",
      'Wrote LaTeX problem statements and solution walkthroughs explaining the math behind RSA attacks.',
      'Applied modular arithmetic, the Euclidean algorithm, continued fractions, and public-key cryptography concepts.',
      'Practiced classical and modern cryptographic systems including shift ciphers, affine ciphers, Vigenere, AES, DES, SPN, and Feistel networks.',
    ],
    problem:
      'Cryptography concepts become clearer when the math is connected to concrete attacks and solvable challenges.',
    role:
      'Created challenge ideas, wrote LaTeX problem statements, and documented solution reasoning.',
    features: [
      'RSA weak-key challenge design.',
      'LaTeX writeups and solution walkthroughs.',
      'Number theory practice with modular arithmetic, Euclidean algorithm, and continued fractions.',
    ],
    challenges: [
      'Explaining the math clearly enough for another student to follow.',
      'Connecting abstract cryptographic weaknesses to concrete CTF-style tasks.',
    ],
    learned:
      'The work strengthened my ability to reason about security problems mathematically and communicate that reasoning in writing.',
    future: [
      'Add more challenge categories.',
      'Add runnable helper scripts for each writeup.',
      'Organize challenges by difficulty level.',
    ],
    preview: 'CTF challenge screenshots',
    media: [
      {
        type: 'image',
        src: '/ctf_1.png',
        alt: 'RSA cryptography CTF challenge screenshot',
        caption: 'Challenge statement',
      },
      {
        type: 'image',
        src: '/challenge_input.png',
        alt: 'RSA CTF challenge input screenshot',
        caption: 'Challenge input',
      },
      {
        type: 'image',
        src: '/solved_steps.png',
        alt: 'RSA CTF solved steps screenshot',
        caption: 'Solution steps',
      },
      {
        type: 'image',
        src: '/attack-types.png',
        alt: 'RSA attack types writeup screenshot',
        caption: 'Attack notes',
      },
    ],
  }),
  new Project({
    title: 'JavaFX Checkers Game',
    summary:
      'A JavaFX checkers game built with object-oriented design, separated board state, movement validation, game logic, and UI rendering.',
    stack: ['Java', 'JavaFX', 'OOP', 'Game Logic'],
    links: [],
    highlights: [
      'Created separate classes for board state, pieces, players, movement validation, game logic, and UI rendering.',
      'Implemented core gameplay rules including turns, legal moves, captures, and win detection.',
      'Organized the codebase with JavaDoc comments for readability and maintainability.',
    ],
    problem:
      'Board games are a useful way to practice state management, rule validation, and clean object-oriented structure.',
    role:
      'Designed and implemented the class structure, rules, and JavaFX interface.',
    features: [
      'Turn-based movement and legal move validation.',
      'Capture and win detection logic.',
      'JavaFX board rendering.',
    ],
    challenges: [
      'Keeping UI rendering separate from game rules.',
      'Handling board state changes cleanly after moves and captures.',
    ],
    learned:
      'This project helped reinforce Java class design, state management, and readable OOP organization.',
    future: [
      'Add better visual polish.',
      'Add restart and move history controls.',
      'Add test coverage around move validation.',
    ],
  }),
];

export const experience = [
  new TimelineItem(
    'Capstone Developer, IIIF 3D Manifest Editor and Viewer',
    'Real-world capstone project | React, TypeScript, Vite, Tailwind, IndexedDB, IIIF JSON | 2026 - Present',
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
  new ContactMethod('LinkedIn', 'linkedin.com/in/pradeep-pandey-341198273', 'https://www.linkedin.com/in/pradeep-pandey-341198273/', 'linkedin'),
  new ContactMethod('GitHub', 'github.com/pandeyp1426', 'https://github.com/pandeyp1426', 'github'),
  new ContactMethod('Location', 'Wisconsin, USA', '#contact', 'map'),
];
