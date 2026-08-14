import { LazyMotion, MotionConfig } from 'framer-motion'
import AmbientBackground from '../motion/AmbientBackground.jsx'
import SkipLink from '../ui/SkipLink.jsx'
import SiteFooter from './SiteFooter.jsx'
import SiteHeader from './SiteHeader.jsx'

function AppShell({ data, children }) {
  return (
    <LazyMotion
      features={() => import('../../motionFeatures.js').then((module) => module.default)}
      strict
    >
      <MotionConfig reducedMotion="user" transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
        <div className="site-shell">
          <AmbientBackground />
          <SkipLink href="#main-content">Skip to main content</SkipLink>
          <SiteHeader personal={data.personal} navigation={data.navigation} />
          <main id="main-content" tabIndex="-1">
            {children}
          </main>
          <SiteFooter
            personal={data.personal}
            navigation={data.navigation}
            socialLinks={data.socialLinks}
          />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}

export default AppShell
