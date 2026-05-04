import {
  ArrowUpRight,
  BadgeCheck,
  Braces,
  BriefcaseBusiness,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sigma,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  contactMethods,
  education,
  experience,
  featuredProject,
  navItems,
  projects,
  skillGroups,
  socialLinks,
} from './data/portfolio';

const assetPath = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <a href="#home" className="font-semibold tracking-tight text-ink">
          Pradeep Pandey
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <span className="mx-2 h-6 w-px bg-slate-200" />
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              target="_blank"
              rel="noreferrer"
              className="icon-button h-9 w-9"
            >
              {link.label === 'GitHub' ? <Github size={18} /> : <Linkedin size={18} />}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          className="icon-button md:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex gap-3 px-3">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="button-secondary py-2">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 hero-grid" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div data-reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <Sparkles size={16} className="text-coral" />
            Computer Science student building deployed software
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.06] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            I build full-stack, cloud-deployed, and systems-focused software.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I am Pradeep Pandey, a UW-Stout Computer Science student working
            with React, TypeScript, Flask, AWS, databases, and C++ systems. My
            strongest work connects usable interfaces with backend, deployment,
            data, and algorithmic problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects" variant="primary">
              View Projects
              <ArrowUpRight size={18} />
            </ButtonLink>
            <ButtonLink href={assetPath('resume.pdf')} variant="secondary" external>
              Download Resume
              <Download size={18} />
            </ButtonLink>
          </div>
          <div className="mt-8 flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noreferrer"
                className="icon-button"
              >
                {link.label === 'GitHub' ? <Github size={20} /> : <Linkedin size={20} />}
              </a>
            ))}
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  const evidence = [
    ['IIIF editor', 'React, TypeScript, IndexedDB, Gist sharing'],
    ['RankMyStocks', 'Flask, MySQL, Auth0, AWS EC2/RDS'],
    ['WFC biomes', 'C++, finite automata, procedural generation'],
    ['RSA CTF', 'Cryptography, LaTeX, modular arithmetic'],
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl" data-reveal>
      <div className="dashboard-shell animate-float">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Portfolio Console
            </p>
            <p className="mt-1 font-semibold text-ink">Evidence snapshot</p>
          </div>
          <span className="rounded-full bg-mint/15 px-3 py-1 text-sm font-semibold text-teal-700">
            Recruiter-ready
          </span>
        </div>
        <div className="grid gap-4 p-5">
          <div className="grid gap-3 sm:grid-cols-3">
            {['IIIF editor', 'AWS deploys', 'C++ systems'].map((item, index) => (
              <div key={item} className="metric-tile">
                <span className="text-xs text-slate-500">
                  {['React + TS', 'Cloud + DB', 'OOP + theory'][index]}
                </span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-600">Project proof</span>
              <span className="text-xs text-slate-500">not self-rated</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {evidence.map(([label, proof]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-sm font-bold text-ink">{label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{proof}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-ink p-4 text-white">
              <span className="text-xs text-white/60">Featured</span>
              <p className="mt-1 text-lg font-semibold">IIIF 3D Manifest Editor</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <span className="text-xs text-slate-500">Also strong</span>
              <p className="mt-1 text-lg font-semibold">RankMyStocks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const [expanded, setExpanded] = useState(false);
  const visibleGroups = expanded ? skillGroups : skillGroups.slice(0, 4);

  return (
    <Section id="about" eyebrow="About" title="Practical software across web, cloud, systems, and theory.">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5 text-lg leading-8 text-slate-600" data-reveal>
          <p>
            I am a Computer Science student at the University of Wisconsin-Stout
            with a Mobile Application Development concentration and a Mathematics
            minor. I enjoy building practical software that connects frontend,
            backend, databases, and deployment instead of stopping at isolated
            class exercises.
          </p>
          <p>
            My current focus is the IIIF 3D Manifest Editor and Viewer, a
            real-world capstone tool built with React, TypeScript, Vite,
            Tailwind, IndexedDB, GitHub Gist workflows, and structured IIIF JSON.
            I also built RankMyStocks with React, Redux, Flask, MySQL, Auth0,
            AWS EC2, AWS RDS, Nginx, Gunicorn, HTTPS, and Google Cloud DNS.
          </p>
          <p>
            I have additional work in C++ systems, procedural generation, finite
            automata, JavaFX, cryptography, formal languages, LaTeX proof
            writing, and automation-style simulators. I am also an Event
            Management Lead and core team member in the UW-Stout AWS Cloud Club,
            helping organize cloud-focused events and technical learning
            opportunities.
          </p>
        </div>
        <div className="skills-panel" data-reveal>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="section-eyebrow">Toolkit</p>
              <h3 className="mt-2 text-2xl font-bold">Skills & Tools</h3>
            </div>
            <button type="button" className="small-button" onClick={() => setExpanded((value) => !value)}>
              {expanded ? 'Show Focus' : 'Show All'}
              <ChevronDown size={16} className={expanded ? 'rotate-180 transition' : 'transition'} />
            </button>
          </div>
          <div className="grid gap-4">
            {visibleGroups.map((group) => (
              <div key={group.name} className="skill-group-card">
                <div className="mb-3 flex items-center gap-3">
                  <span className="skill-group-icon">{getSkillIcon(group.name)}</span>
                  <div>
                    <h4 className="font-bold text-ink">{group.name}</h4>
                    <p className="text-xs font-medium text-slate-500">{getSkillSummary(group.name)}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {!expanded && (
            <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
              More depth available in systems, algorithms, security, and math.
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

function getSkillIcon(name) {
  const icons = {
    Frontend: <Code2 size={18} />,
    'Backend and APIs': <Braces size={18} />,
    Databases: <Database size={18} />,
    'Cloud and DevOps': <Cloud size={18} />,
    'Systems and Algorithms': <Wrench size={18} />,
    'Security and Math': <Sigma size={18} />,
  };

  return icons[name] ?? <BadgeCheck size={18} />;
}

function getSkillSummary(name) {
  const summaries = {
    Frontend: 'Interfaces I have built with',
    'Backend and APIs': 'API and auth experience',
    Databases: 'Persistence used in projects',
    'Cloud and DevOps': 'Production deployment evidence',
    'Systems and Algorithms': 'C++ and theory-heavy builds',
    'Security and Math': 'Coursework and CTF practice',
  };

  return summaries[name] ?? 'Technical focus area';
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Project proof for full-stack, cloud, systems, and security work.">
      <FeaturedProject project={featuredProject} />
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="project-feature" data-reveal>
      <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
        <div>
          <p className="section-eyebrow">Current Focus</p>
          <h3 className="mt-3 text-3xl font-bold tracking-normal sm:text-4xl">{project.title}</h3>
          <p className="mt-4 text-lg leading-8 text-slate-600">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="stack-pill">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <ButtonLink key={link.href} href={link.href} variant={link.primary ? 'primary' : 'secondary'} external>
                {link.label}
                <ArrowUpRight size={18} />
              </ButtonLink>
            ))}
          </div>
        </div>
        <ProjectPreview project={project} />
        <div className="rounded-lg border border-slate-200 bg-white p-5 lg:col-span-2">
          <h4 className="font-semibold">Technical highlights</h4>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600 md:grid-cols-2">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <ProjectDetails project={project} defaultOpen />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className={project.featured ? 'project-card project-card-prominent' : 'project-card'} data-reveal>
      <div className="flex h-full flex-col">
        <div className="mb-5 h-2 rounded-full bg-gradient-to-r from-ocean via-mint to-coral" />
        <ProjectPreview project={project} compact />
        <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-600">{project.summary}</p>
        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            {project.highlights.slice(0, project.featured ? 4 : 3).map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="stack-pill">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.length > 0 ? (
            project.links.map((link) => (
              <ButtonLink key={link.href} href={link.href} variant={link.primary ? 'primary' : 'secondary'} external>
                {link.label}
                <ArrowUpRight size={18} />
              </ButtonLink>
            ))
          ) : (
            <span className="small-button text-slate-500">Demo preview coming soon</span>
          )}
        </div>
        <ProjectDetails project={project} />
      </div>
    </article>
  );
}

function ProjectPreview({ project, compact = false }) {
  const media = project.media ?? [];

  if (media.length === 0) {
    return (
      <div className={compact ? 'project-preview project-preview-compact' : 'project-preview'}>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          {project.preview}
        </span>
        <p className="mt-2 text-sm font-medium text-slate-600">
          Visual slot ready for a screenshot, short demo GIF, or product mockup.
        </p>
      </div>
    );
  }

  return (
    <div className={compact ? 'project-preview project-preview-media project-preview-compact' : 'project-preview project-preview-media'}>
      <div className={media.length > 1 ? 'project-media-grid' : 'project-media-single'}>
        {media.map((item) => (
          <figure key={item.src} className="project-media-frame">
            {item.type === 'video' ? (
              <video
                src={item.src}
                poster={item.poster}
                aria-label={item.alt}
                className="project-media"
                controls
                muted
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={item.src} alt={item.alt} className="project-media" loading="lazy" />
            )}
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </div>
  );
}

function ProjectDetails({ project, defaultOpen = false }) {
  return (
    <details className="project-details" open={defaultOpen}>
      <summary>View case study details</summary>
      <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-600">
        <CaseStudyBlock title="Problem" content={project.problem} />
        <CaseStudyBlock title="My Role" content={project.role} />
        <CaseStudyBlock title="Key Features" items={project.features} />
        <CaseStudyBlock title="Challenges Solved" items={project.challenges} />
        <CaseStudyBlock title="What I Learned" content={project.learned} />
        <CaseStudyBlock title="Future Improvements" items={project.future} />
      </div>
    </details>
  );
}

function CaseStudyBlock({ title, content, items }) {
  return (
    <div>
      <h4 className="font-bold text-ink">{title}</h4>
      {content && <p className="mt-1">{content}</p>}
      {items && (
        <ul className="mt-2 space-y-1">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Capstone development and cloud club leadership.">
      <Timeline title="Experience" icon={<BriefcaseBusiness size={21} />} items={experience} />
    </Section>
  );
}

function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Resume focused on full-stack, cloud, and systems projects.">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Timeline title="Education" icon={<GraduationCap size={21} />} items={education} />
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lift" data-reveal>
          <h3 className="text-2xl font-bold">Download Resume</h3>
          <p className="mt-4 leading-7 text-slate-600">
            Resume focused on full-stack software engineering, cloud deployment,
            database-backed applications, applied systems projects, and
            theory-heavy computer science work.
          </p>
          <div className="mt-6">
            <ButtonLink href={assetPath('resume.pdf')} variant="primary" external>
              Download Resume
              <Download size={18} />
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Timeline({ title, icon, items, children }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lift" data-reveal>
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-ocean/10 text-ocean">{icon}</span>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.title} className="border-l-2 border-ocean/30 pl-5">
            <h4 className="font-semibold">{item.title}</h4>
            <p className="mt-1 text-sm font-medium text-slate-500">{item.meta}</p>
            <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Simple ways to reach me.">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lift" data-reveal>
          <h3 className="text-xl font-bold">Contact information</h3>
          <div className="mt-6 space-y-5">
            {contactMethods.map((method) => (
              <a key={method.label} href={method.href} className="contact-row">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-mist text-ocean">
                  {method.icon === 'mail' && <Mail size={20} />}
                  {method.icon === 'phone' && <Phone size={20} />}
                  {method.icon === 'linkedin' && <Linkedin size={20} />}
                  {method.icon === 'github' && <Github size={20} />}
                  {method.icon === 'map' && <MapPin size={20} />}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-500">{method.label}</span>
                  <span className="block font-medium text-ink">{method.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <form
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-lift"
          data-reveal
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            const subject = encodeURIComponent(`Portfolio message from ${name}`);
            const body = encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            );

            window.location.href = `mailto:pandeyp1426@my.uwstout.edu?subject=${subject}&body=${body}`;
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <Field label="Message" name="message" multiline />
          <button type="submit" className="button-primary mt-5 w-full justify-center">
            Open Email
            <Mail size={18} />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = 'text', multiline = false }) {
  const shared = 'mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-ocean focus:bg-white focus:ring-4 focus:ring-ocean/10';

  return (
    <label htmlFor={name} className="mt-5 block text-sm font-semibold text-slate-600">
      {label}
      {multiline ? (
        <textarea id={name} name={name} rows="5" required className={`${shared} resize-none`} />
      ) : (
        <input id={name} name={name} type={type} required className={shared} />
      )}
    </label>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl" data-reveal>
          <p className="section-eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal text-ink sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ButtonLink({ href, variant, external = false, children }) {
  const className = variant === 'primary' ? 'button-primary' : 'button-secondary';
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={className}>
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
        <p>Copyright 2026 Pradeep Pandey. All rights reserved.</p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="font-medium hover:text-ocean">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default App;
