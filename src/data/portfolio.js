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
  new SkillGroup('Languages', ['C#', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'PHP', 'C']),
  new SkillGroup('Frameworks', ['.NET 8', 'WinForms', 'React', 'Vite', 'FastAPI', 'Flask', 'Node.js', 'Tailwind', 'Redux']),
  new SkillGroup('Databases', ['SQLite', 'MySQL', 'AWS RDS', 'Schema Design', 'Data Persistence', 'Query Debugging']),
  new SkillGroup('Tools', ['Visual Studio', 'VS Code', 'Git/GitHub', 'CMake', 'SFML', 'Linux/Ubuntu', 'Nginx', 'Gunicorn', 'Postman']),
];

export const featuredProject = new Project({
  title: 'IIIF 3D Manifest Editor',
  summary:
    'A real-world capstone project built as an open-source web editor for IIIF 3D resources. The app gives users a practical workspace for assembling 3D scenes, editing manifest resources, previewing structured JSON, and exporting IIIF 4.0-compatible manifests.',
  stack: ['Real-World Capstone', 'React', 'TypeScript', 'Vite', 'Tailwind', 'JSON', 'IIIF Presentation API'],
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
    'Built for a real IIIF 3D manifest workflow rather than a classroom-only demo.',
    'Built workflows for adding and editing 3D models, images, cameras, lights, annotations, metadata, and transform controls.',
    'Implemented JSON import and export so users can load existing manifests, inspect generated output, and download structured IIIF data.',
    'Added live manifest preview and resource editing flows to make manifest authoring easier for non-technical users.',
    'Worked in Agile Scrum sprints with user stories, sprint goals, implementation notes, and confirmation criteria.',
  ],
});

export const projects = [
  new Project({
    title: 'Fiber Optic Alignment and Test Station Simulator',
    summary:
      'A personal desktop simulator for fiber optic alignment and station testing. It models sensor readings, validates test runs, and keeps completed station history inside the app.',
    stack: ['C#', '.NET 8', 'WinForms', 'SQLite'],
    links: [
      {
        label: 'GitHub Repo',
        href: 'https://github.com/pandeyp1426/Fiber-Optic-Alignment-and-Test-Station-Simulator',
      },
    ],
    highlights: [
      'Built a WinForms GUI for simulated fiber optic alignment and test result tracking.',
      'Simulated X/Y alignment, optical power, and temperature readings for each station run.',
      'Validated every run against pass/fail tolerance rules.',
      'Stored completed runs, result status, and failure reasons in SQLite for later review.',
    ],
  }),
  new Project({
    title: 'RankMyStocks',
    summary:
      'A deployed stock discovery and portfolio ranking app with React, Flask REST APIs, Auth0 login, MySQL persistence, and AWS cloud hosting.',
    stack: ['React', 'Vite', 'Redux', 'Auth0', 'Flask', 'MySQL', 'AWS EC2/RDS'],
    links: [
      { label: 'Live Demo', href: 'https://www.rankmystocks.com' },
      { label: 'GitHub Repo', href: 'https://github.com/pandeyp1426' },
    ],
    highlights: [
      'Developed and deployed a full-stack stock discovery and portfolio ranking app.',
      'Built React screens backed by Flask REST APIs, Auth0 authentication, and MySQL persistence.',
      'Designed portfolio, transaction, and snapshot tables for persistent user data.',
      'Migrated persistence to AWS RDS and deployed the backend on EC2 using Ubuntu, Nginx, and Gunicorn.',
    ],
  }),
  new Project({
    title: 'WFC Biome Generator',
    summary:
      'A C++ and SFML desktop app that generates biome maps through Wave Function Collapse-style constraint propagation and DFA-based adjacency rules.',
    stack: ['C++', 'SFML', 'CMake', 'OOP', 'Procedural Generation'],
    links: [{ label: 'GitHub Repo', href: 'https://github.com/pandeyp1426/WFCBiomeGenerator' }],
    highlights: [
      'Generated biome maps with constraint propagation and adjacency rules.',
      'Structured biome rules, cells, entropy updates, rendering, and regeneration controls with object-oriented design.',
      'Set up the project with CMake and SFML for a desktop rendering workflow.',
    ],
  }),
  new Project({
    title: 'Cryptography CTF Challenges Workspace',
    summary:
      'A full-stack cryptography CTF solving workspace with challenge input, file upload parsing, streamed solve steps, progressive hints, flag detection, and SQLite solve history.',
    stack: ['React', 'Vite', 'FastAPI', 'Python', 'SQLite', 'RSA'],
    links: [{ label: 'GitHub Repo', href: 'https://github.com/pandeyp1426/Cryptography_CTF_CHALLENGES' }],
    highlights: [
      'Built challenge input, file upload parsing, streamed solve steps, progressive hints, and flag detection.',
      'Persisted solve history in SQLite for later review.',
      'Implemented RSA helper logic for shared-prime attacks, modular inverse, and GCD-based factoring.',
      'Added classroom-style crypto writeups and guided solve output for practice.',
    ],
  }),
];

export const experience = [
  new TimelineItem(
    'Capstone Developer, IIIF 3D Manifest Editor',
    'Real-world capstone project | React, TypeScript, Vite, Tailwind, JSON, IIIF Presentation API | 2026 - Present',
    'Working on a real-world capstone 3D viewing and manifest editing website for IIIF resources. Built workflows for adding 3D models, images, cameras, lights, annotations, metadata, and transform controls, plus JSON import/export, live preview, resource editing, and exportable IIIF 4.0 manifests.',
  ),
  new TimelineItem(
    'Event Manager and AWS Core Team Member',
    'UW-Stout AWS Club | Dec. 2025 - Present',
    'Coordinate technical workshops, student mentoring, event logistics, and hands-on learning around AWS services, Terraform, EC2, S3, RDS, and cloud deployment.',
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
