import { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 600) {
  const elementRef = useRef(null)
  const frameRef = useRef()
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      setDisplayValue(target)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        const startTime = performance.now()
        const decimalPlaces = String(target).split('.')[1]?.length ?? 0

        const update = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1)
          const easedProgress = 1 - (1 - progress) ** 3
          const nextValue = Number((target * easedProgress).toFixed(decimalPlaces))

          setDisplayValue(nextValue)

          if (progress < 1) {
            frameRef.current = window.requestAnimationFrame(update)
          }
        }

        frameRef.current = window.requestAnimationFrame(update)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current)
    }
  }, [duration, target])

  return { elementRef, displayValue }
}

export default useCountUp
