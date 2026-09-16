import { m, useReducedMotion } from 'framer-motion'

function AmbientBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="ambient-motion" aria-hidden="true">
      <m.span
        className="ambient-motion__light ambient-motion__light--violet"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, 42, -18, 0], y: [0, 28, 54, 0], scale: [1, 1.06, 0.98, 1] }
        }
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      />
      <m.span
        className="ambient-motion__light ambient-motion__light--lime"
        animate={
          reduceMotion
            ? undefined
            : { x: [0, -36, 16, 0], y: [0, 46, -12, 0], scale: [1, 0.96, 1.04, 1] }
        }
        transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
      />
    </div>
  )
}

export default AmbientBackground
