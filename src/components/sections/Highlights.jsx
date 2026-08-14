import PageContainer from '../layout/PageContainer.jsx'
import Section from '../layout/Section.jsx'
import HighlightStat from '../ui/HighlightStat.jsx'

function Highlights({ highlights }) {
  return (
    <Section id="highlights" className="highlights-section" labelledBy="highlights-title">
      <PageContainer>
        <h2 id="highlights-title" className="sr-only">
          Career and education highlights
        </h2>
        <ul className="highlights-grid">
          {highlights.map((highlight) => (
            <HighlightStat key={highlight.label} {...highlight} />
          ))}
        </ul>
      </PageContainer>
    </Section>
  )
}

export default Highlights
