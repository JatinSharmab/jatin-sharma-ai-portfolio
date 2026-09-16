import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import AppShell from './components/layout/AppShell.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProjectsIndexPage from './pages/ProjectsIndexPage.jsx'
import ProjectCaseStudyPage from './pages/ProjectCaseStudyPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import { portfolioData } from './data/portfolioData.js'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const {
    about,
    achievements,
    contact,
    education,
    experience,
    projects,
    skillGroups,
    socialLinks,
  } = portfolioData

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell data={portfolioData}>
        <Routes>
          <Route path="/" element={<HomePage data={portfolioData} />} />
          <Route
            path="/about"
            element={
              <AboutPage
                about={about}
                experience={experience}
                skillGroups={skillGroups}
                education={education}
                achievements={achievements}
              />
            }
          />
          <Route
            path="/projects"
            element={<ProjectsIndexPage projects={projects} />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectCaseStudyPage projects={projects} />}
          />
          <Route
            path="/contact"
            element={<ContactPage contact={contact} socialLinks={socialLinks} />}
          />
          <Route path="*" element={<HomePage data={portfolioData} />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
