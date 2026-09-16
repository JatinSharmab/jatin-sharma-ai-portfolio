import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, m, useReducedMotion } from 'framer-motion'
import { FaBars, FaXmark } from 'react-icons/fa6'
import Button from '../ui/Button.jsx'
import PageContainer from './PageContainer.jsx'

function SiteHeader({ personal, navigation }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
  const firstMobileLinkRef = useRef(null)
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = menuRef.current?.querySelectorAll('a[href], button')
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    const handleDesktopChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }

    const desktopQuery = window.matchMedia('(min-width: 64rem)')
    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleDesktopChange)

    const timer = setTimeout(() => {
      firstMobileLinkRef.current?.focus()
    }, 50)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleDesktopChange)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <PageContainer className="flex min-h-18 items-center justify-between gap-4">
        <Link
          to="/"
          className="wordmark group"
          aria-label={`${personal.name}, return to home`}
          onClick={closeMenu}
        >
          <span className="wordmark__mark" aria-hidden="true">
            {personal.initials}.
          </span>
          <span className="hidden font-semibold tracking-[-0.02em] text-mist-50 sm:inline">
            {personal.name}
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.href)

              return (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive ? (
                      <m.span
                        className="nav-link__active-indicator"
                        layoutId="primary-navigation-indicator"
                        transition={{ duration: reduceMotion ? 0 : 0.28 }}
                        aria-hidden="true"
                      />
                    ) : null}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={personal.resumePath}
            variant="secondary"
            size="small"
            className="header-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
          <button
            ref={menuButtonRef}
            className="mobile-menu-toggle lg:hidden"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="true"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </PageContainer>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <m.div
            ref={menuRef}
            id="mobile-navigation"
            className="mobile-menu lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            <PageContainer>
              <nav aria-label="Mobile navigation">
                <ul className="mobile-menu__list">
                  {navigation.map((item, index) => {
                    const isActive =
                      item.href === '/'
                        ? location.pathname === '/'
                        : location.pathname.startsWith(item.href)

                    return (
                      <li key={item.href}>
                        <Link
                          ref={index === 0 ? firstMobileLinkRef : undefined}
                          to={item.href}
                          className={`mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`}
                          aria-current={isActive ? 'page' : undefined}
                          onClick={closeMenu}
                        >
                          <span className="technical-label" aria-hidden="true">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                  <li>
                    <a
                      href={personal.resumePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-menu__link mobile-menu__resume-link"
                      onClick={closeMenu}
                    >
                      <span className="technical-label" aria-hidden="true">
                        05
                      </span>
                      Resume (PDF) ↗
                    </a>
                  </li>
                </ul>
              </nav>
            </PageContainer>
          </m.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default SiteHeader
