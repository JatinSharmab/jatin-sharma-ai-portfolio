import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { m } from 'framer-motion'
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCheck,
  FaClock,
  FaCodeBranch,
  FaDiagramProject,
  FaGithub,
  FaLayerGroup,
} from 'react-icons/fa6'
import PageContainer from '../components/layout/PageContainer.jsx'
import Section from '../components/layout/Section.jsx'
import Button from '../components/ui/Button.jsx'

function ProjectCaseStudyPage({ projects }) {
  const { slug } = useParams()
  const projectIndex = projects.findIndex((p) => p.slug === slug || p.id === slug)
  const project = projects[projectIndex]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <Section className="py-24 text-center">
        <PageContainer>
          <h1 className="text-3xl font-bold text-mist-50 mb-4">Project Not Found</h1>
          <p className="text-mist-400 mb-8">The requested project case study could not be found.</p>
          <Button href="/projects">
            <FaArrowLeft aria-hidden="true" /> Return to Projects
          </Button>
        </PageContainer>
      </Section>
    )
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <article className="case-study-page py-10 sm:py-16">
      <PageContainer>
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-between text-xs text-mist-400">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 hover:text-lime transition-colors"
          >
            <FaArrowLeft aria-hidden="true" />
            <span>All Projects</span>
          </Link>
          <span className="font-mono text-mist-400/60">
            CASE STUDY {project.number} / 04
          </span>
        </nav>

        {/* Case Study Header */}
        <header className="case-study-header surface-panel p-6 sm:p-10 lg:p-12 rounded-3xl border border-white/10 mb-12 relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold text-lime bg-lime/10 px-3 py-1 rounded-full border border-lime/20">
              PROJECT {project.number}
            </span>
            <span className="technical-label">{project.category}</span>
            {project.statusLabel ? (
              <span className="text-xs text-mist-400/80 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5 ml-auto">
                {project.statusLabel}
              </span>
            ) : null}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mist-50 tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-mist-200/90 leading-relaxed max-w-4xl mb-8">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl ? (
              <Button
                href={project.githubUrl}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub aria-hidden="true" /> View Source Code
              </Button>
            ) : null}
            {project.demoUrl ? (
              <Button
                href={project.demoUrl}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaArrowUpRightFromSquare aria-hidden="true" /> Live Demo
              </Button>
            ) : null}
            <Button href="/contact" variant="ghost">
              Discuss Architecture
            </Button>
          </div>
        </header>

        {/* Executive Overview & Problem / Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 surface-panel p-6 sm:p-8 rounded-2xl">
            <p className="technical-label text-lime mb-2">01 / Overview</p>
            <h2 className="text-2xl font-bold text-mist-50 mb-4">Executive Summary</h2>
            <p className="text-mist-200/90 leading-relaxed text-base">
              {project.overview}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="surface-panel p-6 rounded-2xl flex-1 border-l-2 border-l-lime">
              <p className="technical-label text-mist-400 mb-1">Problem Statement</p>
              <h3 className="text-base font-semibold text-mist-50 mb-2">Core Challenge</h3>
              <p className="text-sm text-mist-400 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="surface-panel p-6 rounded-2xl flex-1 border-l-2 border-l-violet">
              <p className="technical-label text-mist-400 mb-1">System Objective</p>
              <h3 className="text-base font-semibold text-mist-50 mb-2">Target Outcome</h3>
              <p className="text-sm text-mist-400 leading-relaxed">
                {project.objective}
              </p>
            </div>
          </div>
        </div>

        {/* System Architecture Section */}
        {project.architecture && project.architecture.length ? (
          <section className="mb-16">
            <div className="mb-8">
              <p className="technical-label text-lime">02 / Technical Architecture</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-mist-50 mt-1">
                End-to-End System Pipeline
              </h2>
              <p className="text-mist-400 text-sm sm:text-base mt-2">
                Decoupled multi-stage execution flow verified in the repository.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.architecture.map((stage) => (
                <div key={stage.stage} className="surface-panel p-5 rounded-2xl flex flex-col justify-between hover:border-lime/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-lime bg-lime/10 px-2 py-0.5 rounded">
                        STAGE {stage.stage}
                      </span>
                      <span className="text-xs text-mist-400 font-mono">{stage.technology}</span>
                    </div>
                    <h3 className="text-base font-semibold text-mist-50 mb-2">{stage.name}</h3>
                    <p className="text-xs text-mist-400 leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* Empirical Benchmarks (If Available) */}
        {project.benchmarks && project.benchmarks.length ? (
          <section className="mb-16 surface-panel p-6 sm:p-8 rounded-3xl border border-lime/30">
            <div className="mb-6">
              <span className="font-mono text-xs text-lime uppercase tracking-wider font-semibold">
                Empirical Evaluation Suite
              </span>
              <h2 className="text-2xl font-bold text-mist-50 mt-1">
                Benchmark Results vs. Popularity Baseline (K=10)
              </h2>
              <p className="text-sm text-mist-400 mt-2">
                Empirical ranking measurements executed via <code className="text-xs text-lime bg-black/40 px-2 py-0.5 rounded font-mono">python -m src.evaluation.evaluate --demo</code> on MovieLens validation split.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm" aria-label="Empirical evaluation benchmark metrics">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-mono text-mist-400 uppercase tracking-wider">
                    <th scope="col" className="py-3 px-4">Evaluation Metric</th>
                    <th scope="col" className="py-3 px-4">Two-Tower Model</th>
                    <th scope="col" className="py-3 px-4">Popularity Baseline</th>
                    <th scope="col" className="py-3 px-4 text-right">Relative Lift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono text-xs sm:text-sm">
                  {project.benchmarks.map((row) => (
                    <tr key={row.metric} className="hover:bg-white/[0.02]">
                      <td className="py-3.5 px-4 font-semibold text-mist-50 font-sans">{row.metric}</td>
                      <td className="py-3.5 px-4 text-lime font-bold">{row.modelScore}</td>
                      <td className="py-3.5 px-4 text-mist-400">{row.baselineScore}</td>
                      <td className="py-3.5 px-4 text-right text-lime font-bold">{row.lift}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {/* Implemented vs Planned Capabilities Grid */}
        <section className="mb-16">
          <div className="mb-8">
            <p className="technical-label text-lime">03 / Capability Verification</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-mist-50 mt-1">
              Grounded Capabilities vs. Future Evolution
            </h2>
            <p className="text-mist-400 text-sm sm:text-base mt-2">
              Clear distinction between what is currently operational in the repository and future architectural roadmap items.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* IMPLEMENTED CAPABILITIES */}
            <div className="surface-panel p-6 sm:p-8 rounded-3xl border-t-2 border-t-lime">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-6 h-6 rounded-full bg-lime/20 text-lime flex items-center justify-center text-xs">
                  <FaCheck aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-mist-50 uppercase tracking-wider text-xs sm:text-sm">
                  Implemented Capabilities
                </h3>
              </div>
              <ul className="space-y-3.5 text-sm text-mist-200/90" aria-label="Implemented capabilities">
                {project.implementedCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-lime mt-1 flex-shrink-0 text-xs" aria-hidden="true">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PLANNED ROADMAP */}
            <div className="surface-panel p-6 sm:p-8 rounded-3xl border-t-2 border-t-mist-400/40 opacity-90">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-6 h-6 rounded-full bg-white/10 text-mist-400 flex items-center justify-center text-xs">
                  <FaClock aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-mist-400 uppercase tracking-wider text-xs sm:text-sm">
                  Planned / Future Roadmap
                </h3>
              </div>
              <ul className="space-y-3.5 text-sm text-mist-400" aria-label="Planned future improvements">
                {project.plannedImprovements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-violet-muted mt-1 flex-shrink-0 text-xs" aria-hidden="true">○</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack Tags */}
        <section className="mb-16 surface-panel p-6 sm:p-8 rounded-3xl">
          <p className="technical-label text-lime mb-3">04 / Stack Specification</p>
          <h2 className="text-xl font-bold text-mist-50 mb-4">Technologies & Libraries</h2>
          <ul className="flex flex-wrap gap-2.5" aria-label="Technology stack">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="font-mono text-xs font-semibold px-3 py-1.5 rounded-lg bg-ink-900 border border-white/10 text-mist-200"
              >
                {tag}
              </li>
            ))}
          </ul>
        </section>

        {/* Project Navigation Footer */}
        <nav aria-label="Previous and next project navigation" className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-sm text-mist-400 hover:text-lime transition-colors"
            >
              <FaArrowLeft aria-hidden="true" />
              <span>Previous: {prevProject.shortTitle}</span>
            </Link>
          ) : <div />}

          <Link
            to="/projects"
            className="text-xs font-mono uppercase tracking-wider text-mist-400 hover:text-mist-50 transition-colors"
          >
            Back to Index
          </Link>

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm text-mist-400 hover:text-lime transition-colors"
            >
              <span>Next: {nextProject.shortTitle}</span>
              <FaArrowRight aria-hidden="true" />
            </Link>
          ) : <div />}
        </nav>
      </PageContainer>
    </article>
  )
}

export default ProjectCaseStudyPage
