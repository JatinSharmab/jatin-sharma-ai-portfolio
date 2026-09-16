import { m } from 'framer-motion'
import {
  FaAward,
  FaBrain,
  FaCalendar,
  FaCloud,
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLocationDot,
  FaServer,
  FaWandMagicSparkles,
} from 'react-icons/fa6'
import PageContainer from '../components/layout/PageContainer.jsx'
import Section from '../components/layout/Section.jsx'

const categoryIcons = {
  Languages: FaCode,
  'Machine Learning / Deep Learning': FaBrain,
  'Generative AI / RAG': FaWandMagicSparkles,
  'Backend / Data': FaServer,
  'Cloud / Tooling': FaCloud,
}

function AboutPage({ about, experience, skillGroups, education, achievements }) {
  return (
    <div className="about-page py-12 sm:py-16">
      <PageContainer>
        {/* Profile Header & Bio */}
        <header className="mb-16 max-w-3xl">
          <p className="technical-label text-lime">AI Engineer Profile</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-mist-50 mt-3">
            Grounded Intelligence. Scalable Systems.
          </h1>
          <div className="mt-6 space-y-4 text-base sm:text-lg text-mist-200/90 leading-relaxed">
            {about.biography.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </header>

        {/* Engineering Principles */}
        <section className="mb-20">
          <p className="technical-label text-lime mb-3">Core Approach</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-mist-50 mb-8">
            Engineering Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {about.principles.map((principle, index) => (
              <div key={principle.title} className="surface-panel p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-lime bg-lime/10 px-2.5 py-1 rounded">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-mist-50 mt-4 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-mist-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section - Grouped, No Percentage Bars */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="technical-label text-lime">Technical Taxonomy</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-mist-50 mt-1">
                Skills & Technologies
              </h2>
            </div>
            <span className="text-xs font-mono text-mist-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
              5 Core Disciplines · Zero Arbitrary Bars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => {
              const Icon = categoryIcons[group.category] ?? FaCode
              const isLarge = group.skills.length >= 8

              return (
                <article
                  key={group.category}
                  className={`surface-panel p-6 rounded-2xl ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <header className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-lime/10 text-lime flex items-center justify-center text-base">
                      <Icon aria-hidden="true" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-mist-400 block">
                        GROUP 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-mist-50">{group.category}</h3>
                    </div>
                  </header>

                  <ul className="flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="font-mono text-xs px-2.5 py-1.5 rounded-md bg-ink-900 border border-white/10 text-mist-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </section>

        {/* Professional Experience Timeline */}
        <section className="mb-20">
          <p className="technical-label text-lime mb-3">Work History</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-mist-50 mb-8">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experience.map((role) => (
              <article key={role.company} className="surface-panel p-6 sm:p-8 rounded-3xl border-l-2 border-l-lime">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="technical-label text-lime">{role.company}</span>
                    <h3 className="text-xl font-bold text-mist-50">{role.role}</h3>
                  </div>
                  <div className="font-mono text-xs text-mist-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                    <time dateTime={role.startDateISO}>{role.startDate}</time>
                    <span className="mx-1.5">—</span>
                    <time dateTime={role.endDateISO}>{role.endDate}</time>
                  </div>
                </div>

                <p className="text-sm text-mist-200/90 mb-4">{role.summary}</p>

                <ul className="space-y-2 text-sm text-mist-400 list-disc list-inside">
                  {role.responsibilities.map((resp) => (
                    <li key={resp} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education & Achievements Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <article className="surface-panel p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-lime/10 text-lime flex items-center justify-center text-lg">
                <FaGraduationCap aria-hidden="true" />
              </div>
              <div>
                <p className="technical-label">Academic Foundation</p>
                <h3 className="text-lg font-bold text-mist-50">{education.degree}</h3>
              </div>
            </div>

            <p className="text-base text-mist-200 mb-4">{education.institution}</p>

            <dl className="grid grid-cols-2 gap-4 text-xs font-mono text-mist-400 pt-4 border-t border-white/5">
              <div>
                <dt className="text-mist-400/60 mb-1">DURATION</dt>
                <dd className="text-mist-200">{education.startYear} — {education.endYear}</dd>
              </div>
              <div>
                <dt className="text-mist-400/60 mb-1">LOCATION</dt>
                <dd className="text-mist-200">{education.location}</dd>
              </div>
              <div>
                <dt className="text-mist-400/60 mb-1">ACADEMIC SCORE</dt>
                <dd className="text-lime font-bold text-sm">{education.cgpa} / 10 CGPA</dd>
              </div>
            </dl>
          </article>

          {/* Achievements */}
          <article className="surface-panel p-6 sm:p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet/10 text-violet-muted flex items-center justify-center text-lg">
                <FaAward aria-hidden="true" />
              </div>
              <div>
                <p className="technical-label">Verified Milestones</p>
                <h3 className="text-lg font-bold text-mist-50">Key Achievements</h3>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((ach) => (
                <div key={ach.id} className="p-4 rounded-xl bg-ink-900/60 border border-white/5">
                  <h4 className="text-sm font-semibold text-mist-50 mb-1">{ach.title}</h4>
                  <p className="text-xs text-mist-400 leading-relaxed">{ach.description}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </PageContainer>
    </div>
  )
}

export default AboutPage
