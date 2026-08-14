import { m, useReducedMotion } from 'framer-motion'
import {
  FaBrain,
  FaCloud,
  FaCode,
  FaDatabase,
  FaServer,
  FaTerminal,
  FaWandMagicSparkles,
} from 'react-icons/fa6'
import PageContainer from '../layout/PageContainer.jsx'
import Section from '../layout/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const categoryIcons = {
  Languages: FaCode,
  'Machine Learning': FaBrain,
  'Generative AI': FaWandMagicSparkles,
  'Big Data & Cloud': FaCloud,
  'Backend & Frameworks': FaServer,
  Databases: FaDatabase,
  'Tools & Core CS': FaTerminal,
}

function Skills({ skillGroups, intro }) {
  const reduceMotion = useReducedMotion()
  const skillCount = skillGroups.reduce((total, group) => total + group.skills.length, 0)
  const gridVariants = {
    hidden: {},
    visible: {
      transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.065 },
    },
  }
  const cardVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.42 } },
  }

  return (
    <Section id="skills" className="skills-section">
      <PageContainer>
        <div className="skills-heading-layout">
          <SectionHeading id="skills-title" {...intro} />
          <div className="skills-summary" aria-label={`${skillGroups.length} skill groups and ${skillCount} listed capabilities`}>
            <div>
              <strong>{String(skillGroups.length).padStart(2, '0')}</strong>
              <span>Capability groups</span>
            </div>
            <div>
              <strong>{skillCount}</strong>
              <span>Listed capabilities</span>
            </div>
          </div>
        </div>

        <m.div
          className="skills-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {skillGroups.map((group, index) => {
            const Icon = categoryIcons[group.category]
            const wide = group.skills.length >= 8

            return (
              <m.article
                key={group.category}
                className={`skill-group ${wide ? 'skill-group--wide' : ''}`}
                variants={cardVariants}
              >
                <header className="skill-group__header">
                  <div className="skill-group__icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <p className="technical-label">
                      {String(index + 1).padStart(2, '0')} / {String(skillGroups.length).padStart(2, '0')}
                    </p>
                    <h3>{group.category}</h3>
                  </div>
                </header>

                <ul className="skill-chip-list" aria-label={`${group.category} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </m.article>
            )
          })}
        </m.div>
      </PageContainer>
    </Section>
  )
}

export default Skills
