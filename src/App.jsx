import AppShell from './components/layout/AppShell.jsx'
import About from './components/sections/About.jsx'
import Contact from './components/sections/Contact.jsx'
import Education from './components/sections/Education.jsx'
import Experience from './components/sections/Experience.jsx'
import Hero from './components/sections/Hero.jsx'
import Highlights from './components/sections/Highlights.jsx'
import Projects from './components/sections/Projects.jsx'
import Skills from './components/sections/Skills.jsx'
import { portfolioData } from './data/portfolioData.js'

function App() {
  const {
    about,
    additionalProjects,
    additionalProjectsStatus,
    achievements,
    contact,
    education,
    experience,
    featuredProject,
    hero,
    highlights,
    personal,
    sectionIntros,
    skillGroups,
    socialLinks,
  } = portfolioData

  return (
    <AppShell data={portfolioData}>
      <Hero hero={hero} personal={personal} socialLinks={socialLinks} />
      <Highlights highlights={highlights} />

      <About about={about} intro={sectionIntros.about} />
      <Experience experience={experience} intro={sectionIntros.experience} />
      <Projects
        additionalProjects={additionalProjects}
        additionalProjectsStatus={additionalProjectsStatus}
        featuredProject={featuredProject}
        intro={sectionIntros.projects}
      />
      <Skills skillGroups={skillGroups} intro={sectionIntros.skills} />
      <Education
        achievements={achievements}
        education={education}
        intro={sectionIntros.education}
      />
      <Contact contact={contact} intro={sectionIntros.contact} socialLinks={socialLinks} />
    </AppShell>
  )
}

export default App
