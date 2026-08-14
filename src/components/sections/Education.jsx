import {
  FaAward,
  FaCalendar,
  FaCode,
  FaGraduationCap,
  FaLocationDot,
} from 'react-icons/fa6'
import PageContainer from '../layout/PageContainer.jsx'
import Section from '../layout/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const achievementIcons = {
  problemSolving: FaCode,
  appliedAi: FaAward,
}

function Education({ achievements, education, intro }) {
  return (
    <Section id="education" className="education-section">
      <PageContainer>
        <SectionHeading id="education-title" {...intro} />

        <div className="education-layout">
          <article className="education-card surface-panel">
            <header className="education-card__header">
              <div className="education-card__icon" aria-hidden="true">
                <FaGraduationCap />
              </div>
              <div>
                <p className="technical-label">Academic foundation</p>
                <p className="education-card__discipline">B.Tech / CSE</p>
              </div>
            </header>

            <h3>{education.degree}</h3>
            <p className="education-card__institution">{education.institution}</p>

            <dl className="education-card__facts">
              <div>
                <dt>
                  <FaCalendar aria-hidden="true" />
                  Duration
                </dt>
                <dd>
                  <time dateTime={education.startYear}>{education.startYear}</time>
                  <span aria-hidden="true">—</span>
                  <time dateTime={education.endYear}>{education.endYear}</time>
                </dd>
              </div>
              <div>
                <dt>
                  <FaLocationDot aria-hidden="true" />
                  Location
                </dt>
                <dd>{education.location}</dd>
              </div>
            </dl>

            <div className="education-card__score" aria-label={`CGPA ${education.cgpa}`}>
              <span>CGPA</span>
              <strong>{education.cgpa}</strong>
              <small>/ 10</small>
            </div>
          </article>

          <section className="achievements-panel" aria-labelledby="achievements-title">
            <header className="achievements-panel__header">
              <p className="technical-label">Selected achievements</p>
              <h3 id="achievements-title">Learning, applied.</h3>
            </header>

            <ol className="achievements-list">
              {achievements.map((achievement, index) => {
                const Icon = achievementIcons[achievement.id] ?? FaAward

                return (
                  <li key={achievement.id}>
                    <div className="achievement-card__icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <div>
                      <p className="technical-label">
                        {String(index + 1).padStart(2, '0')} / {String(achievements.length).padStart(2, '0')}
                      </p>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>
        </div>
      </PageContainer>
    </Section>
  )
}

export default Education
