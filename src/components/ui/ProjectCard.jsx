import { m, useReducedMotion } from 'framer-motion'
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub, FaLayerGroup } from 'react-icons/fa6'
import Button from './Button.jsx'

function ProjectCard({ project, priority = false }) {
  const reduceMotion = useReducedMotion()
  const {
    id,
    slug,
    number,
    category,
    title,
    summary,
    tags = [],
    githubUrl,
    demoUrl,
    statusLabel,
  } = project

  const caseStudyUrl = `/projects/${slug || id}`

  return (
    <m.article
      className="project-card surface-panel"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.38 }}
    >
      <div className="project-card__visual">
        <div className="project-card__visual-circuit" aria-hidden="true">
          <svg viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-40">
            <path d="M 20 80 H 120 L 160 40 H 260 L 300 120 H 380" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="120" cy="80" r="4" fill="currentColor" />
            <circle cx="160" cy="40" r="4" fill="currentColor" />
            <circle cx="260" cy="40" r="4" fill="currentColor" />
            <circle cx="300" cy="120" r="4" fill="currentColor" />
          </svg>
        </div>
        <div className="project-card__visual-header">
          <span className="project-card__number">{number}</span>
          {statusLabel ? (
            <span className="project-card__status-chip">{statusLabel}</span>
          ) : null}
        </div>
        <div className="project-card__visual-icon" aria-hidden="true">
          <FaLayerGroup />
        </div>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <p className="technical-label">{category}</p>
        </div>

        <h3 className="project-card__title">
          <Button href={caseStudyUrl} variant="ghost" className="!p-0 !text-left !font-semibold !text-lg sm:!text-xl hover:!text-lime">
            {title}
          </Button>
        </h3>

        <p className="project-card__summary">{summary}</p>

        {tags.length ? (
          <ul className="project-card__stack" aria-label={`${title} technology stack`}>
            {tags.slice(0, 8).map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}

        <div className="project-card__actions">
          <Button href={caseStudyUrl} size="small" variant="primary">
            Case Study <FaArrowRight aria-hidden="true" />
          </Button>
          {githubUrl ? (
            <Button
              href={githubUrl}
              size="small"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </Button>
          ) : null}
          {demoUrl ? (
            <Button
              href={demoUrl}
              size="small"
              variant="ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaArrowUpRightFromSquare aria-hidden="true" />
              Demo
            </Button>
          ) : null}
        </div>
      </div>
    </m.article>
  )
}

export default ProjectCard
