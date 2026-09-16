import { m, useReducedMotion } from 'framer-motion'
import { FaArrowRight, FaDownload, FaEnvelope } from 'react-icons/fa6'
import PageContainer from '../layout/PageContainer.jsx'
import Section from '../layout/Section.jsx'
import Button from '../ui/Button.jsx'
import GradientText from '../ui/GradientText.jsx'
import SocialLink from '../ui/SocialLink.jsx'
import HeroVisual from './HeroVisual.jsx'

function Hero({ hero, personal, socialLinks }) {
  const reduceMotion = useReducedMotion()
  const copyVariants = {
    hidden: {},
    visible: {
      transition: reduceMotion ? { duration: 0 } : { staggerChildren: 0.05, delayChildren: 0.03 },
    },
  }
  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.36 } },
  }

  return (
    <Section id="home" className="hero-section">
      <PageContainer className="relative z-10">
        <div className="hero-layout">
          <m.div
            className="hero-copy"
            variants={copyVariants}
            initial="hidden"
            animate="visible"
          >
            <m.div className="hero-role-lockup" variants={itemVariants}>
              <span className="role-chip">{personal.role}</span>
              <span className="technical-label">{personal.extendedRole}</span>
            </m.div>

            <m.p className="hero-eyebrow technical-label mt-7" variants={itemVariants}>
              {hero.greeting} {personal.name}
            </m.p>
            <m.h1 id="home-title" className="display-title mt-3" variants={itemVariants}>
              {hero.headline}
            </m.h1>
            <m.p className="hero-accent" variants={itemVariants}>
              <GradientText>{hero.valueProposition}</GradientText>
            </m.p>
            <m.p className="hero-description" variants={itemVariants}>
              {hero.description}
            </m.p>

            <m.div className="hero-actions" variants={itemVariants}>
              <Button href="/projects">
                View Projects <FaArrowRight aria-hidden="true" />
              </Button>
              <Button href="/contact" variant="ghost">
                Contact Me <FaEnvelope aria-hidden="true" />
              </Button>
              <Button
                href={personal.resumePath}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume <FaDownload aria-hidden="true" />
              </Button>
            </m.div>

            <m.div className="hero-socials" variants={itemVariants}>
              <span className="technical-label">Connect</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <SocialLink key={link.platform} {...link} />
                ))}
              </div>
            </m.div>
          </m.div>

          <HeroVisual nodes={hero.systemMap} />
        </div>
      </PageContainer>
    </Section>
  )
}

export default Hero
