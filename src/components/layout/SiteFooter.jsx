import { Link } from 'react-router-dom'
import { FaArrowUp } from 'react-icons/fa6'
import SocialLink from '../ui/SocialLink.jsx'
import PageContainer from './PageContainer.jsx'

function SiteFooter({ personal, navigation, socialLinks }) {
  const currentYear = new Date().getFullYear()

  const scrollToTop = (event) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <Link to="/" className="wordmark">
              <span className="wordmark__mark" aria-hidden="true">
                {personal.initials}.
              </span>
              <span>{personal.name}</span>
            </Link>
            <p>
              {personal.role} <span aria-hidden="true">·</span> {personal.extendedRole}
            </p>
          </div>

          <div className="site-footer__socials" role="group" aria-label="Social links">
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} {...link} />
            ))}
          </div>
        </div>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="site-footer__bottom">
          <p>
            © {currentYear} {personal.name}. AI Engineer · Production Systems & Architecture.
          </p>
          <a href="#top" onClick={scrollToTop} className="site-footer__back-to-top" aria-label="Scroll to top of page">
            <span>Back to top</span>
            <span className="site-footer__back-to-top-icon" aria-hidden="true">
              <FaArrowUp />
            </span>
          </a>
        </div>
      </PageContainer>
    </footer>
  )
}

export default SiteFooter
