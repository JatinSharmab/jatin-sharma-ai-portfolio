import {
  FaBrain,
  FaCloud,
  FaDatabase,
  FaServer,
  FaWandMagicSparkles,
} from 'react-icons/fa6'
import PageContainer from '../layout/PageContainer.jsx'
import Section from '../layout/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const focusIcons = [FaBrain, FaWandMagicSparkles, FaServer, FaDatabase, FaCloud]

function About({ about, intro }) {
  return (
    <Section id="about" className="about-section">
      <PageContainer>
        <SectionHeading id="about-title" {...intro} />

        <div className="about-layout">
          <article className="about-profile surface-panel">
            <div className="about-profile__topline">
              <p className="technical-label">Engineer profile</p>
              <span aria-hidden="true">01</span>
            </div>

            <div className="about-profile__copy">
              {about.biography.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-focus">
              <p className="technical-label">Primary focus</p>
              <ul className="about-focus__grid">
                {about.focusAreas.map((area, index) => {
                  const Icon = focusIcons[index]

                  return (
                    <li key={area}>
                      <Icon aria-hidden="true" />
                      <span>{area}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </article>

          <div className="principles-panel">
            <div className="principles-panel__heading">
              <p className="technical-label">How I work</p>
              <p>Engineering principles grounded in the resume experience.</p>
            </div>

            <ol className="principles-list">
              {about.principles.map((principle, index) => (
                <li key={principle.title} className="principle-card">
                  <span className="principle-card__number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </PageContainer>
    </Section>
  )
}

export default About
