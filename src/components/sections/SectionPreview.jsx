import PageContainer from '../layout/PageContainer.jsx'
import Section from '../layout/Section.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

function SectionPreview({ id, eyebrow, title, description, meta }) {
  return (
    <Section id={id}>
      <PageContainer>
        <div className="surface-panel grid gap-10 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:p-10">
          <SectionHeading
            id={`${id}-title`}
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <div className="blueprint-panel" aria-label={`${title} section foundation`}>
            <span className="blueprint-panel__index" aria-hidden="true">
              {eyebrow.split('/')[0].trim()}
            </span>
            <p className="technical-label mb-3">Foundation established</p>
            <p className="text-sm leading-6 text-mist-400">{meta}</p>
          </div>
        </div>
      </PageContainer>
    </Section>
  )
}

export default SectionPreview
