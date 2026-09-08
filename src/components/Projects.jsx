import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Github, Maximize2, Pause, Play } from 'lucide-react';
import { featuredProject, projects } from '../data/portfolio';

function ProjectMedia({ media, projectTitle, className = '' }) {
  const [playing, setPlaying] = useState(false);
  const playButton = useRef(null);
  const videoElement = useRef(null);
  const stopButton = useRef(null);
  const shouldMoveFocus = useRef(false);
  const isAnimation = /\.gif(?:\?.*)?$/i.test(media.src);
  const isVideo = media.type === 'video';
  const correctedMedia = projectTitle === 'RankMyStocks'
    ? { ...media, alt: 'RankMyStocks landing page' }
    : media;

  useEffect(() => {
    if (!shouldMoveFocus.current) return;
    const target = playing ? videoElement.current ?? stopButton.current : playButton.current;
    target?.focus({ preventScroll: true });
    shouldMoveFocus.current = false;
  }, [playing]);

  const togglePlayback = () => {
    shouldMoveFocus.current = true;
    setPlaying((current) => !current);
  };

  return (
    <figure className={`project-media ${className}`}>
      {(isVideo || isAnimation) && !playing ? (
        <button
          className={`media-load-button ${isVideo ? 'video-placeholder' : 'animation-placeholder'}`}
          type="button"
          ref={playButton}
          onClick={togglePlayback}
          aria-label={`Play ${isVideo ? 'video walkthrough' : 'animation'} of ${projectTitle}`}
        >
          {isAnimation && <img className="animation-poster" src={media.src.replace(/\.gif(?:\?.*)?$/i, '-poster.png')} alt="" loading="lazy" decoding="async" />}
          <span className="media-placeholder-eyebrow">{isVideo ? 'Product walkthrough' : 'Algorithm in motion'}</span>
          <span className="media-load-icon"><Play size={23} fill="currentColor" aria-hidden="true" /></span>
          <span className="media-placeholder-title">{projectTitle}</span>
          <span className="media-load-caption">{isVideo ? 'Play the walkthrough' : 'Play the generation demo'}</span>
        </button>
      ) : isVideo ? (
        <video
          ref={videoElement}
          tabIndex={0}
          className="project-video"
          controls
          muted
          playsInline
          preload="none"
          autoPlay
          aria-label={correctedMedia.alt}
        >
          <source src={correctedMedia.src} type="video/mp4" />
          <a href={correctedMedia.src}>Open the {projectTitle} video walkthrough.</a>
        </video>
      ) : (
        <a
          className="project-image-link"
          href={correctedMedia.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${correctedMedia.alt} at full resolution (opens in a new tab)`}
        >
          <img src={correctedMedia.src} alt={correctedMedia.alt} loading="lazy" decoding="async" />
          <span className="media-expand"><Maximize2 size={15} aria-hidden="true" /><span>View full size</span></span>
        </a>
      )}
      {isAnimation && playing && (
        <div className="media-controls">
          <button ref={stopButton} className="media-pause-button" type="button" onClick={togglePlayback}>
            <Pause size={13} aria-hidden="true" /> Stop animation
          </button>
        </div>
      )}
    </figure>
  );
}

function CaseStudyBlock({ title, content }) {
  if (!content || (Array.isArray(content) && content.length === 0)) return null;

  return (
    <div className="case-study-block">
      <h4>{title}</h4>
      {Array.isArray(content) ? (
        <ul>{content.map((item) => <li key={item}>{item}</li>)}</ul>
      ) : <p>{content}</p>}
    </div>
  );
}

const isSourceLink = (link) => /github|repo|source/i.test(link.label);

function ProjectLink({ project, link }) {
  const isSource = isSourceLink(link);
  const label = isSource ? 'Source code' : 'Live demo';

  return (
    <a
      className={`text-link project-link${link.primary ? ' project-link-primary' : ''}`}
      href={link.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title}: ${label} (opens in a new tab)`}
    >
      {isSource && <Github size={16} aria-hidden="true" />}
      {label}
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function ProjectEntry({ project, index }) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const isFeatured = index === 0;
  const headingId = `project-${index + 1}-heading`;
  const caseStudyId = `project-${index + 1}-case-study`;

  return (
    <article id={`project-${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}`} className={`project-entry${isFeatured ? ' project-featured' : ''}`} aria-labelledby={headingId}>
      <div className="project-overview">
        {project.media[0] && (
          <ProjectMedia media={project.media[0]} projectTitle={project.title} className="project-thumbnail" />
        )}
        <div className="project-copy">
          <h3 className="project-title" id={headingId}>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <ul className="tag-list project-stack" aria-label={`${project.title} technologies`}>
            {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <div className="project-actions">
            {project.links.filter((link) => !isSourceLink(link)).map((link) => <ProjectLink key={link.href} project={project} link={link} />)}
            <div className="project-source-actions">
              {project.links.filter(isSourceLink).map((link) => <ProjectLink key={link.href} project={project} link={link} />)}
              <button
                className="text-link project-link case-study-toggle"
                id={`${caseStudyId}-toggle`}
                type="button"
                aria-expanded={caseStudyOpen}
                aria-controls={caseStudyId}
                aria-label={`${project.title}: ${caseStudyOpen ? 'close' : 'explore'} case study`}
                onClick={() => setCaseStudyOpen((open) => !open)}
              >
                {caseStudyOpen ? 'Close case study' : 'Explore case study'}
                <ChevronDown size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="case-study" id={caseStudyId} role="region" aria-labelledby={`${caseStudyId}-toggle`} hidden={!caseStudyOpen}>
        <div className="case-study-body">
          <CaseStudyBlock title="Highlights" content={project.highlights} />
          <CaseStudyBlock title="The problem" content={project.problem} />
          <CaseStudyBlock title="My role" content={project.role} />
          <CaseStudyBlock title="Features" content={project.features} />
          <CaseStudyBlock title="Engineering challenges" content={project.challenges} />
          <CaseStudyBlock title="What I learned" content={project.learned} />
          <CaseStudyBlock title={project.completedAt ? 'Potential extensions' : 'Next steps'} content={project.future} />
          {project.media.length > 1 && (
            <div className="case-study-block case-study-gallery-block">
              <h4>A closer look</h4>
              <div className="case-study-gallery">
                {project.media.slice(1).map((media) => (
                  <ProjectMedia key={media.src} media={media} projectTitle={project.title} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="content-section" aria-labelledby="projects-heading">
      <div className="section-heading">
        <h2 id="projects-heading">Selected work</h2>
      </div>
      <p className="section-intro">From collaborative web applications to the algorithms and mathematics behind them.</p>
      <div className="project-list">
        {[featuredProject, ...projects].map((project, index) => (
          <ProjectEntry key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
