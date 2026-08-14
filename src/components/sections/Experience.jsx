import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import PageContainer from '../layout/PageContainer.jsx'
import Section from '../layout/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

function Experience({ experience, intro }) {
  const timelineRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.82', 'end 0.32'],
  })
  const timelineProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  })

  return (
    <Section id="experience" className="experience-section">
      <PageContainer>
        <SectionHeading id="experience-title" {...intro} />

        <ol
          ref={timelineRef}
          className="experience-timeline"
          aria-label="Professional experience"
        >
          <m.span
            className="experience-timeline__progress"
            style={{ scaleY: reduceMotion ? 1 : timelineProgress }}
            aria-hidden="true"
          />
          {experience.map((role, index) => (
            <m.li
              key={`${role.company}-${role.role}`}
              className="experience-entry"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.46, delay: reduceMotion ? 0 : index * 0.08 }}
            >
              <div className="experience-entry__date">
                <time dateTime={role.startDateISO}>{role.startDate}</time>
                <span aria-hidden="true">—</span>
                <time dateTime={role.endDateISO}>{role.endDate}</time>
              </div>

              <div className="experience-entry__track" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <article className="experience-card surface-panel">
                <header className="experience-card__header">
                  <div>
                    <p className="technical-label">{role.company}</p>
                    <h3>{role.role}</h3>
                  </div>
                  <span className="experience-card__company-mark" aria-hidden="true">
                    {role.company.charAt(0)}
                  </span>
                </header>

                <p className="experience-card__summary">{role.summary}</p>

                <ul className="experience-card__details">
                  {role.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </article>
            </m.li>
          ))}
        </ol>
      </PageContainer>
    </Section>
  )
}

export default Experience
