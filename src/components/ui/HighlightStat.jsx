import useCountUp from '../../hooks/useCountUp.js'

function HighlightStat({ value, prefix = '', suffix = '', label, context }) {
  const { elementRef, displayValue } = useCountUp(value)
  const accessibleValue = `${prefix}${value}${suffix}`

  return (
    <li
      ref={elementRef}
      className="highlight-stat"
      aria-label={`${accessibleValue}, ${label}${context ? `. ${context}` : ''}`}
    >
      <p className="highlight-stat__value" aria-hidden="true">
        <span>{prefix}</span>
        {displayValue}
        <span>{suffix}</span>
      </p>
      <p className="highlight-stat__label">{label}</p>
      {context ? <p className="highlight-stat__context">{context}</p> : null}
    </li>
  )
}

export default HighlightStat
