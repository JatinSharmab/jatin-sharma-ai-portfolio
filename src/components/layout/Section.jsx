import { m, useReducedMotion } from 'framer-motion'

function Section({ id, className = '', children, labelledBy, ...props }) {
  const reduceMotion = useReducedMotion()
  const reveal = id !== 'home' && !reduceMotion

  return (
    <m.section
      id={id}
      className={`section-shell ${className}`.trim()}
      aria-labelledby={labelledBy ?? `${id}-title`}
      initial={reveal ? { opacity: 0, y: 28 } : false}
      whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </m.section>
  )
}

export default Section
