import { useRef } from 'react'
import {
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { FaCheck, FaLayerGroup } from 'react-icons/fa6'
import PageContainer from '../layout/PageContainer.jsx'
import Section from '../layout/Section.jsx'
import ArchitectureDiagram from '../ui/ArchitectureDiagram.jsx'
import ProjectCard from '../ui/ProjectCard.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const narrative = [
  { key: 'problem', label: 'Problem' },
  { key: 'approach', label: 'Approach' },
  { key: 'outcome', label: 'Outcome' },
]

function Projects({ featuredProject, additionalProjects, additionalProjectsStatus, intro }) {
  const featuredProjectRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: featuredProjectRef,
    offset: ['start 0.86', 'end 0.24'],
  })
  const projectProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 24,
    restDelta: 0.001,
  })
  const headerY = useTransform(projectProgress, [0, 1], [16, -10])

  return (
    <Section id="projects" className="projects-section">
      <PageContainer>
        <SectionHeading id="projects-title" {...intro} />

        <article ref={featuredProjectRef} className="featured-project surface-panel">
          <span className="featured-project__progress-track" aria-hidden="true">
            <m.span
              className="featured-project__progress-value"
              style={{ scaleY: reduceMotion ? 1 : projectProgress }}
            />
          </span>

          <m.header
            className="featured-project__header"
            style={reduceMotion ? undefined : { y: headerY }}
          >
            <div>
              <p className="technical-label">{featuredProject.eyebrow}</p>
              <h3>{featuredProject.title}</h3>
              <p className="featured-project__summary">{featuredProject.summary}</p>
            </div>

            <div className="featured-project__signal" aria-label="Project system profile">
              <FaLayerGroup aria-hidden="true" />
              <strong>End-to-end AI</strong>
              <span>Data · models · LLM · API</span>
            </div>
          </m.header>

          <div className="case-study-narrative">
            {narrative.map(({ key, label }, index) => (
              <div key={key} className="case-study-narrative__item">
                <p className="technical-label">
                  {String(index + 1).padStart(2, '0')} / {label}
                </p>
                <p>{featuredProject[key]}</p>
              </div>
            ))}
          </div>

          <ArchitectureDiagram
            stages={featuredProject.architecture}
            progress={projectProgress}
            reduceMotion={reduceMotion}
          />

          <div className="project-detail-grid">
            <section className="project-detail-panel" aria-labelledby="project-capabilities-title">
              <p className="technical-label">What it does</p>
              <h4 id="project-capabilities-title">Core capabilities</h4>
              <ul className="capability-list">
                {featuredProject.capabilities.map((capability) => (
                  <li key={capability}>
                    <FaCheck aria-hidden="true" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="project-detail-panel" aria-labelledby="project-stack-title">
              <p className="technical-label">Built with</p>
              <h4 id="project-stack-title">Technology stack</h4>
              <ul className="project-stack" aria-label="Featured project technology stack">
                {featuredProject.stack.map((technology, index) => (
                  <li key={technology}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {technology}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <section className="additional-projects" aria-labelledby="additional-projects-title">
          <div className="additional-projects__heading">
            <div>
              <p className="technical-label">Project index</p>
              <h3 id="additional-projects-title">Additional work</h3>
            </div>
            <span>{String(additionalProjects.length).padStart(2, '0')} verified entries</span>
          </div>

          {additionalProjects.length ? (
            <div className="additional-projects__grid">
              {additionalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <div className="projects-empty-state">
              <span aria-hidden="true">00</span>
              <div>
                <h4>{additionalProjectsStatus.title}</h4>
                <p>{additionalProjectsStatus.description}</p>
              </div>
            </div>
          )}
        </section>
      </PageContainer>
    </Section>
  )
}

export default Projects
