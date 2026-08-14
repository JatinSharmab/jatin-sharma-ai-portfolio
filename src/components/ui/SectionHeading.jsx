import GradientText from './GradientText.jsx'

function SectionHeading({ id, eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="technical-label">{eyebrow}</p>
      <h2 id={id} className="section-title">
        <GradientText>{title}</GradientText>
      </h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
