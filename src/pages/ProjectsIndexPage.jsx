import { m } from 'framer-motion'
import PageContainer from '../components/layout/PageContainer.jsx'
import Section from '../components/layout/Section.jsx'
import ProjectCard from '../components/ui/ProjectCard.jsx'

function ProjectsIndexPage({ projects }) {
  return (
    <Section id="projects-index" className="py-12 sm:py-16">
      <PageContainer>
        <header className="mb-12 max-w-3xl">
          <p className="technical-label text-lime">Selected Engineering Work</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-mist-50 mt-3">
            AI, Machine Learning & Systems
          </h1>
          <p className="text-base sm:text-lg text-mist-400 mt-4 leading-relaxed">
            A focused catalog of four production-oriented engineering projects. Every case study below is grounded in actual source code and verifiable repository artifacts—separating genuinely implemented architecture from future roadmaps.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </PageContainer>
    </Section>
  )
}

export default ProjectsIndexPage
