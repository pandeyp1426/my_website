import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-semibold tracking-tight text-ink">
          Pradeep Pandey
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
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
            Open-source developer working on IIIF 3D editing tools
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.03] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Building polished web apps with strong product instincts.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I am Pradeep Pandey, a Computer Science student at UW-Stout. My
            current focus is a React and TypeScript IIIF 3D Manifest Editor that
            helps users build, preview, and export structured 3D manifests.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects" variant="primary">
              View Projects
              <ArrowUpRight size={18} />
            </ButtonLink>
            <ButtonLink href="/resume.pdf" variant="secondary" external>
              Resume
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
  return (
    <div className="relative mx-auto w-full max-w-xl" data-reveal>
      <div className="dashboard-shell animate-float">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Portfolio Console
            </p>
            <p className="mt-1 font-semibold text-ink">Current work snapshot</p>
          </div>
          <span className="rounded-full bg-mint/15 px-3 py-1 text-sm font-semibold text-teal-700">
            Capstone
          </span>
        </div>
        <div className="grid gap-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            {['IIIF 3D', 'Cloud Apps', 'C++ Systems'].map((item, index) => (
              <div key={item} className="metric-tile">
                <span className="text-xs text-slate-500">
                  {['Focus', 'Full-stack', 'Algorithms'][index]}
                </span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-600">Evidence areas</span>
              <span className="text-xs text-slate-500">UI + data + deployment</span>
            </div>
            <div className="space-y-3">
              {[
                ['IIIF editor UX', 92],
                ['AWS deployment', 86],
                ['Database design', 80],
                ['OOP algorithms', 76],
              ].map(([label, width], index) => (
                <div key={label}>
                  <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
                    <span>{label}</span>
                    <span>{width}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-ocean via-mint to-coral"
                    style={{ width: `${width}%`, animationDelay: `${index * 0.2}s` }}
                  />
                </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-ink p-4 text-white">
              <span className="text-xs text-white/60">Featured</span>
              <p className="mt-1 text-lg font-semibold">IIIF 3D Manifest Editor</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <span className="text-xs text-slate-500">Supporting</span>
              <p className="mt-1 text-lg font-semibold">RankMyStocks + WFC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const [expanded, setExpanded] = useState(false);
  const visibleGroups = expanded ? skillGroups : skillGroups.slice(0, 2);

  return (
    <Section id="about" eyebrow="About" title="Developer with product and operations range.">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5 text-lg leading-8 text-slate-600" data-reveal>
          <p>
            I am a Computer Science major at the University of Wisconsin-Stout
            with a concentration in Mobile Application Development. I enjoy
            building practical, user-focused software that solves real problems,
            from finance tools to gamified wellness platforms.
          </p>
          <p>
            My work spans React, TypeScript, Flask, FastAPI, C#, C++, SQL, and
            cloud-hosted systems, with a focus on practical tools that turn
            complex workflows into usable interfaces.
          </p>
          <p>
            Leadership roles in campus dining and event operations have sharpened
            how I communicate, prioritize, and stay accountable under pressure.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lift" data-reveal>
          <div className="mb-6 flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">Skills & Tools</h3>
            <button type="button" className="small-button" onClick={() => setExpanded((value) => !value)}>
              {expanded ? 'Less' : 'More'}
              <ChevronDown size={16} className={expanded ? 'rotate-180 transition' : 'transition'} />
            </button>
          </div>
          <div className="space-y-6">
            {visibleGroups.map((group) => (
              <div key={group.name}>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {group.name}
                </h4>
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
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="IIIF 3D editing, simulation, and full-stack systems.">
      <FeaturedProject project={featuredProject} />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
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
      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
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
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <h4 className="font-semibold">Technical highlights</h4>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="flex h-full flex-col">
        <div className="mb-5 h-2 rounded-full bg-gradient-to-r from-ocean via-mint to-coral" />
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-600">{project.summary}</p>
        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            {project.highlights.map((highlight) => (
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
        <div className="mt-6">
          {project.links.length > 0 ? (
            project.links.map((link) => (
              <ButtonLink key={link.href} href={link.href} variant="secondary" external>
                {link.label}
                <ArrowUpRight size={18} />
              </ButtonLink>
            ))
          ) : (
            <span className="small-button text-slate-500">Private Repository</span>
          )}
        </div>
      </div>
    </article>
  );
}

function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Experience shaped by software and leadership.">
      <div className="grid gap-8 lg:grid-cols-2">
        <Timeline title="Experience" icon={<BriefcaseBusiness size={21} />} items={experience} />
        <Timeline title="Education" icon={<GraduationCap size={21} />} items={education}>
          <ButtonLink href="/resume.pdf" variant="primary" external>
            Download Resume
            <Download size={18} />
          </ButtonLink>
        </Timeline>
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
    <Section id="contact" eyebrow="Contact" title="Let’s build something practical.">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lift" data-reveal>
          <h3 className="text-xl font-bold">Contact information</h3>
          <div className="mt-6 space-y-5">
            {contactMethods.map((method) => (
              <a key={method.label} href={method.href} className="contact-row">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-mist text-ocean">
                  {method.icon === 'mail' && <Mail size={20} />}
                  {method.icon === 'phone' && <Phone size={20} />}
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
    <label className="mt-5 block text-sm font-semibold text-slate-600">
      {label}
      {multiline ? (
        <textarea name={name} rows="5" required className={`${shared} resize-none`} />
      ) : (
        <input name={name} type={type} required className={shared} />
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
        <p>© 2026 Pradeep Pandey. All rights reserved.</p>
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
