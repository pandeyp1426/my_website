import { ArrowDown, ArrowUpRight, ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contactMethods, education, experience, navItems, socialLinks } from './data/portfolio';
import Projects from './components/Projects';
import CursorSpotlight from './components/CursorSpotlight';

const assetPath = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

function useActiveSection() {
  const [active, setActive] = useState('#about');

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const cutoff = Math.min(window.innerHeight * 0.3, 240);
      let current = navItems[0].href;
      navItems.forEach(({ href }) => {
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top <= cutoff) current = href;
      });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 16) current = '#contact';
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', schedule);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return [active, setActive];
}

function App() {
  const [active, setActive] = useActiveSection();
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <CursorSpotlight />
      <div className="portfolio-shell" id="home">
        <Profile active={active} onNavigate={setActive} />
        <main id="main" className="content-column" tabIndex={-1}>
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

function Profile({ active, onNavigate }) {
  return (
    <header className="profile-column">
      <div className="profile-intro">
        <div className="profile-topline">
          <a className="monogram" href="#home" aria-label="Pradeep Pandey, back to top">pp<span>.</span></a>
        </div>
        <h1 className="profile-name"><a href="#home">Pradeep<br />Pandey<span>.</span></a></h1>
        <p className="profile-role">Software developer &amp;<br />Computer Science student.</p>
        <p className="profile-description">I build useful software, from the interface to the systems behind it.</p>
        <a className="text-link profile-project-link" href="#projects">Explore my work <ArrowDown size={16} aria-hidden="true" /></a>
      </div>
      <nav className="section-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={active === item.href ? 'section-nav-link is-active' : 'section-nav-link'} aria-current={active === item.href ? 'location' : undefined} onClick={() => onNavigate(item.href)}>
            <span className="nav-rule" aria-hidden="true" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="profile-footer">
        <div className="profile-links">
          {socialLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="social-link" aria-label={link.label}>
              {link.label === 'GitHub' ? <Github size={21} aria-hidden="true" /> : <Linkedin size={21} aria-hidden="true" />}
            </a>
          ))}
          <a className="social-link" href={contactMethods.find((method) => method.icon === 'mail').href} aria-label="Email Pradeep"><Mail size={21} aria-hidden="true" /></a>
          <span className="social-divider" aria-hidden="true" />
          <a className="text-link resume-link" href={assetPath('resume.pdf')} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <p className="profile-location"><MapPin size={13} aria-hidden="true" /> Wisconsin, USA <span aria-hidden="true">·</span> UW–Stout</p>
      </div>
    </header>
  );
}

function SectionHeading({ id, children }) {
  return <div className="section-heading"><h2 id={id}>{children}</h2></div>;
}

function About() {
  return (
    <section id="about" className="content-section about-section" aria-labelledby="about-heading">
      <SectionHeading id="about-heading">A little context</SectionHeading>
      <p className="about-lead">Thoughtful interfaces.<br /><span>Solid foundations.</span></p>
      <div className="prose">
        <p>I’m a Computer Science student at the <strong>University of Wisconsin–Stout</strong>. I build practical software that connects interfaces, backend services, databases, and deployment.</p>
        <p>My work includes <a href="#project-iiif-3d-manifest-editor-and-viewer">a collaborative IIIF 3D editor</a>, <a href="#project-rankmystocks">a stock ranking platform deployed on AWS</a>, and explorations in C++ systems, procedural generation, and cryptography.</p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="content-section" aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading">Where I contribute</SectionHeading>
      <div className="experience-list">
        {experience.map((item, index) => {
          const metadata = item.meta.split(' | ');
          const dates = metadata.pop();
          const organization = index === 1 ? 'IIIF 3D Manifest Editor and Viewer' : metadata[0];
          const title = index === 1 ? 'Capstone Developer' : item.title;
          const responsibilities = index === 0 ? item.description.split(/(?<=\.)\s+(?=[A-Z])/u) : null;
          return (
            <article key={item.title} className="experience-entry">
              <div className="experience-date"><span className="timeline-dot" aria-hidden="true" />{dates}</div>
              <div className="experience-content">
                <p className="experience-organization">{organization}</p>
                <h3>{title}</h3>
                {responsibilities ? <ul className="responsibilities">{responsibilities.map((text) => <li key={text}>{text}</li>)}</ul> : index === 1 ? (
                  <>
                    <p>Collaborated on a React-based digital humanities tool with a six-person capstone team, IIIF mentors, and UW-Stout faculty. Contributed UI features, browser persistence, and workflows for sharing manifests. The project concluded in May 2026.</p>
                    <details className="text-disclosure">
                      <summary>More about my contribution <ChevronDown size={15} aria-hidden="true" /></summary>
                      <div className="disclosure-body"><p className="experience-context">{metadata.join(' · ')}</p><p>{item.description}</p></div>
                    </details>
                  </>
                ) : <p>{item.description}</p>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="content-section" aria-labelledby="education-heading">
      <SectionHeading id="education-heading">Education</SectionHeading>
      <div className="experience-list">
        {education.map((item) => {
          const [institution, dates] = item.meta.split(' | ');
          return (
            <article key={item.title} className="experience-entry">
              <div className="experience-date"><span className="timeline-dot" aria-hidden="true" />{dates}</div>
              <div className="experience-content">
                <p className="experience-organization">{institution}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  const email = contactMethods.find((method) => method.icon === 'mail');
  return (
    <section id="contact" className="content-section contact-section" aria-labelledby="contact-heading">
      <SectionHeading id="contact-heading">Let’s connect</SectionHeading>
      <h3 className="contact-title">Have something<br /><span>in mind?</span></h3>
      <p className="section-intro">A project, an opportunity, or a good technical conversation. I’d be happy to hear from you.</p>
      <a className="contact-email" href={email.href}>{email.value}<ArrowUpRight size={22} aria-hidden="true" /></a>
      <div className="contact-methods">{contactMethods.filter((method) => method.icon !== 'mail').map((method) => method.icon === 'map' ? <span key={method.label}><MapPin size={15} aria-hidden="true" />{method.value}</span> : <a key={method.label} href={method.href} target="_blank" rel="noreferrer" aria-label={`${method.label}: ${method.value}`}>{method.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</div>
      <details className="text-disclosure contact-disclosure">
        <summary>Prefer to write a message here? <ChevronDown size={16} aria-hidden="true" /></summary>
        <form className="contact-form" onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const subject = encodeURIComponent(`Portfolio message from ${formData.get('name')}`);
          const body = encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`);
          window.location.href = `${email.href}?subject=${subject}&body=${body}`;
        }}>
          <div className="form-row"><Field label="Name" name="name" /><Field label="Email" name="email" type="email" /></div>
          <Field label="Message" name="message" multiline />
          <div className="form-footer"><p>Opens your email app with your message ready to send.</p><button type="submit" className="button-primary">Open email <ArrowUpRight size={16} aria-hidden="true" /></button></div>
        </form>
      </details>
    </section>
  );
}

function Field({ label, name, type = 'text', multiline = false }) {
  return <label className="form-field" htmlFor={name}>{label}{multiline ? <textarea id={name} name={name} rows={5} required /> : <input id={name} name={name} type={type} autoComplete={name} required />}</label>;
}

function Footer() {
  return <footer className="site-footer"><p>Built with React. Grounded in curiosity.</p><div><span>© 2026 Pradeep Pandey. All rights reserved.</span><a href="#home" className="text-link">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a></div></footer>;
}

export default App;
