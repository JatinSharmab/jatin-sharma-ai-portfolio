import { useEffect, useMemo, useState } from 'react'

function useActiveSection(navigation) {
  const sectionIds = useMemo(
    () => navigation.map((item) => item.href.replace('#', '')),
    [navigation],
  )
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    let frameId

    const updateActiveSection = () => {
      frameId = undefined
      const marker = window.scrollY + window.innerHeight * 0.32
      let currentSection = sectionIds[0]

      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= marker) currentSection = id
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        currentSection = sectionIds.at(-1)
      }

      setActiveSection((current) =>
        current === currentSection ? current : currentSection,
      )
    }

    const requestUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [sectionIds])

  return activeSection
}

export default useActiveSection
