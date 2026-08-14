import { m, useReducedMotion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import Button from './Button.jsx'

function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion()
  const {
    approach,
    demoUrl,
    featured = false,
    githubUrl,
    image,
    problem,
    solution,
    stack = [],
    summary,
    title,
  } = project

  return (
    <m.article
      className={`project-card ${featured ? 'project-card--featured' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -5, scale: 1.01 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.36 }}
    >
      <div className="project-card__visual">
        {image ? (
          <img
            src={image.src ?? image}
            alt={image.alt ?? ''}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span aria-hidden="true">{title.slice(0, 2).toUpperCase()}</span>
        )}
      </div>

      <div className="project-card__body">
        <p className="technical-label">{featured ? 'Featured project' : 'Selected project'}</p>
        <h3>{title}</h3>
        {summary ? <p className="project-card__summary">{summary}</p> : null}

        {problem || solution || approach ? (
          <dl className="project-card__details">
            {problem ? (
              <div>
                <dt>Problem</dt>
                <dd>{problem}</dd>
              </div>
            ) : null}
            {solution || approach ? (
              <div>
                <dt>Solution</dt>
                <dd>{solution ?? approach}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {stack.length ? (
          <ul className="project-card__stack" aria-label={`${title} technology stack`}>
            {stack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}

        {githubUrl || demoUrl ? (
          <div className="project-card__actions">
            {githubUrl ? (
              <Button href={githubUrl} size="small" variant="secondary">
                <FaGithub aria-hidden="true" />
                GitHub
              </Button>
            ) : null}
            {demoUrl ? (
              <Button href={demoUrl} size="small" variant="ghost">
                <FaArrowUpRightFromSquare aria-hidden="true" />
                Live demo
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </m.article>
  )
}

export default ProjectCard
