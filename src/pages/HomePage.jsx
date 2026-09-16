import { Link } from 'react-router-dom'
import { m } from 'framer-motion'
import { FaArrowRight, FaBrain, FaCode, FaLayerGroup } from 'react-icons/fa6'
import PageContainer from '../components/layout/PageContainer.jsx'
import Section from '../components/layout/Section.jsx'
import Hero from '../components/sections/Hero.jsx'
import Highlights from '../components/sections/Highlights.jsx'
import ProjectCard from '../components/ui/ProjectCard.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Button from '../components/ui/Button.jsx'

function HomePage({ data }) {
  const { hero, personal, socialLinks, projects } = data

  return (
    <>
      <Hero hero={hero} personal={personal} socialLinks={socialLinks} />

      <Highlights highlights={hero.credibilityStats} />

      {/* Selected Work Section */}
      <Section id="projects" className="projects-section">
        <PageContainer>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="technical-label text-lime">01 / Selected Work</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-mist-50 mt-2">
                Production AI & Deep Learning Systems
              </h2>
              <p className="text-base sm:text-lg text-mist-400 max-w-2xl mt-3">
                Four verified engineering projects spanning multimodal RAG, neural Two-Tower vector retrieval, local LLMs, and quantitative microservices.
              </p>
            </div>
            <Button href="/projects" variant="secondary" size="small">
              All Projects <FaArrowRight aria-hidden="true" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </PageContainer>
      </Section>

      {/* Technical Overview Teaser */}
      <Section id="overview-teaser" className="py-16 border-y border-white/5 bg-ink-900/40">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="surface-panel p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-lime/10 text-lime flex items-center justify-center text-lg mb-4">
                  <FaBrain aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-mist-50 mb-2">Applied Machine Learning</h3>
                <p className="text-sm text-mist-400 leading-relaxed">
                  Dual-tower deep neural networks, hard negative sampling, Qdrant HNSW vector retrieval, and empirical ranking benchmarks.
                </p>
              </div>
              <Link to="/projects/cinerank-ai" className="text-xs font-semibold text-lime mt-4 inline-flex items-center gap-1 hover:underline">
                Explore CineRank AI ↗
              </Link>
            </div>

            <div className="surface-panel p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-violet/10 text-violet-muted flex items-center justify-center text-lg mb-4">
                  <FaLayerGroup aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-mist-50 mb-2">Multimodal Agentic RAG</h3>
                <p className="text-sm text-mist-400 leading-relaxed">
                  Hybrid dense/lexical retrieval (Chroma + BM25 + RRF), typed LangGraph Sentinel loop, and verifiable page/timestamp citations.
                </p>
              </div>
              <Link to="/projects/synapse" className="text-xs font-semibold text-lime mt-4 inline-flex items-center gap-1 hover:underline">
                Explore Synapse OS ↗
              </Link>
            </div>

            <div className="surface-panel p-6 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 text-mist-200 flex items-center justify-center text-lg mb-4">
                  <FaCode aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-mist-50 mb-2">Engineering Foundation</h3>
                <p className="text-sm text-mist-400 leading-relaxed">
                  1.6+ years software experience with REST APIs, SQL/MongoDB, testing, and 300+ solved DSA problems on GeeksforGeeks.
                </p>
              </div>
              <Link to="/about" className="text-xs font-semibold text-lime mt-4 inline-flex items-center gap-1 hover:underline">
                View Engineer Bio ↗
              </Link>
            </div>
          </div>
        </PageContainer>
      </Section>

      {/* Direct Contact CTA Banner */}
      <Section id="home-contact-cta" className="py-20">
        <PageContainer>
          <div className="surface-panel p-8 sm:p-12 lg:p-16 rounded-3xl border border-lime/20 relative overflow-hidden text-center max-w-4xl mx-auto">
            <div className="relative z-10">
              <p className="technical-label text-lime mb-3">Direct Channel</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-mist-50 mb-4">
                Let's discuss applied AI and backend systems.
              </h2>
              <p className="text-base text-mist-400 max-w-xl mx-auto mb-8">
                Currently open for AI Engineering roles, collaborative research, and high-impact machine learning projects.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact">
                  Start a Conversation <FaArrowRight aria-hidden="true" />
                </Button>
                <Button
                  href={personal.resumePath}
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume (PDF)
                </Button>
              </div>
            </div>
          </div>
        </PageContainer>
      </Section>
    </>
  )
}

export default HomePage
