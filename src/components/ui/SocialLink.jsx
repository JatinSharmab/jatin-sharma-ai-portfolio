import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

const icons = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedinIn,
}

function SocialLink({ platform, label, href }) {
  if (!href) return null

  const Icon = icons[platform]
  const external = href.startsWith('http')

  return (
    <a
      className="icon-link"
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {Icon ? <Icon aria-hidden="true" /> : <span>{platform}</span>}
    </a>
  )
}

export default SocialLink
