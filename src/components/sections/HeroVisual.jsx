import { m, useReducedMotion } from 'framer-motion'

const nodePositions = [
  { x: 50, y: 8 },
  { x: 83, y: 28 },
  { x: 84, y: 69 },
  { x: 50, y: 89 },
  { x: 16, y: 69 },
  { x: 17, y: 28 },
]

function HeroVisual({ nodes }) {
  const reduceMotion = useReducedMotion()
  const updateGlow = (event) => {
    if (event.pointerType === 'touch') return

    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
  }

  const resetGlow = (event) => {
    event.currentTarget.style.removeProperty('--pointer-x')
    event.currentTarget.style.removeProperty('--pointer-y')
  }

  return (
    <m.figure
      className="hero-system"
      onPointerMove={updateGlow}
      onPointerLeave={resetGlow}
      aria-labelledby="hero-system-title"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.08 }}
    >
      <div className="hero-system__header">
        <div>
          <p className="technical-label">Engineering map</p>
          <p id="hero-system-title" className="mt-1 text-sm font-semibold text-mist-50">
            Connected AI capability stack
          </p>
        </div>
        <span className="hero-system__status">06 layers</span>
      </div>

      <div className="hero-system__canvas">
        <m.svg
          viewBox="0 0 100 100"
          aria-hidden="true"
          className="hero-system__lines"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.42, delay: reduceMotion ? 0 : 0.22 }}
        >
          <circle cx="50" cy="50" r="31" />
          <circle cx="50" cy="50" r="20" />
          {nodePositions.map((node, index) => (
            <line key={`${node.x}-${node.y}`} x1="50" y1="50" x2={node.x} y2={node.y} />
          ))}
        </m.svg>

        <m.div
          className="hero-system__core"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.18 }}
        >
          <span className="technical-label">Core</span>
          <strong>AI</strong>
          <small>Systems</small>
        </m.div>

        {nodes.map((node, index) => (
          <m.div
            key={node.shortLabel}
            className="hero-system__node"
            style={{ '--node-x': `${nodePositions[index].x}%`, '--node-y': `${nodePositions[index].y}%` }}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.3 + index * 0.045 }}
          >
            <span>{node.shortLabel}</span>
            <small>{node.label}</small>
          </m.div>
        ))}
      </div>

      <figcaption className="sr-only">
        Machine learning, natural language processing, LLM integration, data processing,
        backend APIs, and cloud deployment connected as one engineering system.
      </figcaption>
    </m.figure>
  )
}

export default HeroVisual
