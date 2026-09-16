import { Link } from 'react-router-dom'
import { m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import usePointerFine from '../../hooks/usePointerFine.js'

const variants = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  ghost: 'button--ghost',
}

const sizes = {
  small: 'button--small',
  medium: 'button--medium',
}

function Button({
  href,
  to,
  variant = 'primary',
  size = 'medium',
  className = '',
  children,
  disabled = false,
  target,
  rel,
  download,
  ...props
}) {
  const targetUrl = to || href
  const pointerFine = usePointerFine()
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 340, damping: 24, mass: 0.45 })
  const springY = useSpring(y, { stiffness: 340, damping: 24, mass: 0.45 })
  const classes = `button ${variants[variant]} ${sizes[size]} ${className}`.trim()

  const handlePointerMove = (event) => {
    props.onPointerMove?.(event)
    if (!pointerFine || reduceMotion) return

    const bounds = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.14)
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18)
  }

  const handlePointerLeave = (event) => {
    props.onPointerLeave?.(event)
    x.set(0)
    y.set(0)
  }

  const motionProps = {
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    style: pointerFine && !reduceMotion ? { ...props.style, x: springX, y: springY } : props.style,
    whileTap: reduceMotion ? undefined : { scale: 0.98 },
  }

  const { onPointerMove, onPointerLeave, style, ...elementProps } = props

  if (targetUrl && !disabled) {
    const isExternal =
      targetUrl.startsWith('http') ||
      targetUrl.startsWith('mailto:') ||
      targetUrl.endsWith('.pdf') ||
      targetUrl.startsWith('#') ||
      download

    if (isExternal) {
      const computedTarget = target ?? (targetUrl.startsWith('http') || targetUrl.endsWith('.pdf') ? '_blank' : undefined)
      const computedRel = rel ?? (computedTarget === '_blank' ? 'noopener noreferrer' : undefined)

      return (
        <m.a
          className={classes}
          href={targetUrl}
          target={computedTarget}
          rel={computedRel}
          download={download}
          {...elementProps}
          {...motionProps}
        >
          {children}
        </m.a>
      )
    }

    return (
      <m.div className="inline-block" {...motionProps}>
        <Link className={classes} to={targetUrl} {...elementProps}>
          {children}
        </Link>
      </m.div>
    )
  }

  return (
    <m.button
      className={classes}
      type="button"
      disabled={disabled}
      {...elementProps}
      {...motionProps}
    >
      {children}
    </m.button>
  )
}

export default Button
