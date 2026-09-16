import Contact from '../components/sections/Contact.jsx'

function ContactPage({ contact, socialLinks }) {
  const intro = {
    eyebrow: 'Get In Touch',
    title: "Let's build useful intelligence into real products.",
    description:
      'For engineering roles, consulting, or discussions about machine learning, RAG pipelines, and scalable backend infrastructure, reach out through any channel below.',
  }

  return (
    <div className="contact-page py-6 sm:py-10">
      <Contact contact={contact} intro={intro} socialLinks={socialLinks} />
    </div>
  )
}

export default ContactPage
