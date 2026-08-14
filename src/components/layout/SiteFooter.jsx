import { FaArrowUp } from 'react-icons/fa6'
import SocialLink from '../ui/SocialLink.jsx'
import PageContainer from './PageContainer.jsx'

function SiteFooter({ personal, navigation, socialLinks }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <PageContainer>
        <div className="site-footer__main">
          <div className="site-footer__identity">
            <a href="#home" className="wordmark">
              <span className="wordmark__mark" aria-hidden="true">
                {personal.initials}
              </span>
              <span>{personal.name}</span>
            </a>
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
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__bottom">
          <p>
            © {currentYear} {personal.name}. Built with clarity, performance, and accessibility in mind.
          </p>
          <a href="#home" className="site-footer__back-to-top">
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
