import { useState } from 'react'
import {
  FaArrowRight,
  FaCheck,
  FaClipboard,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa6'
import PageContainer from '../layout/PageContainer.jsx'
import Section from '../layout/Section.jsx'
import Button from '../ui/Button.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const channelIcons = {
  email: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedinIn,
}

function validateForm(values, formCopy) {
  const errors = {}

  if (!values.name.trim()) errors.name = formCopy.errors.name
  if (!values.email.trim()) {
    errors.email = formCopy.errors.emailRequired
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = formCopy.errors.emailInvalid
  }
  if (!values.message.trim()) {
    errors.message = formCopy.errors.messageRequired
  } else if (values.message.trim().length < formCopy.minimumMessageLength) {
    errors.message = formCopy.errors.messageShort
  }

  return errors
}

function Contact({ contact, intro, socialLinks }) {
  const [copyStatus, setCopyStatus] = useState('')
  const [errors, setErrors] = useState({})
  const [formStatus, setFormStatus] = useState('')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopyStatus(contact.copySuccess)
    } catch {
      setCopyStatus(contact.copyFailure)
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    const formData = new FormData(form)
    const values = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    }
    const nextErrors = validateForm(values, contact.form)

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      event.preventDefault()
      setFormStatus(contact.form.validationMessage)
      const firstInvalidField = form.elements.namedItem(Object.keys(nextErrors)[0])
      firstInvalidField?.focus()
      return
    }

    if (contact.formEndpoint) return

    event.preventDefault()

    const subject = encodeURIComponent(`${contact.form.subjectPrefix}${values.name.trim()}`)
    const body = encodeURIComponent(
      `${values.message.trim()}\n\nFrom: ${values.name.trim()}\nReply to: ${values.email.trim()}`,
    )

    setFormStatus(contact.form.fallbackStatus)
    window.location.href = `${contact.fallbackHref}?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" className="contact-section">
      <PageContainer>
        <SectionHeading id="contact-title" {...intro} />

        <div className="contact-layout">
          <div className="contact-cta">
            <p className="technical-label">Direct channel</p>
            <h3>{contact.title}</h3>
            <p className="contact-cta__description">{contact.description}</p>

            <div className="contact-email">
              <div>
                <span>Email</span>
                <a href={contact.fallbackHref}>{contact.email}</a>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                aria-label={
                  copyStatus === contact.copySuccess
                    ? 'Email address copied'
                    : `Copy ${contact.email}`
                }
              >
                {copyStatus === contact.copySuccess ? (
                  <FaCheck aria-hidden="true" />
                ) : (
                  <FaClipboard aria-hidden="true" />
                )}
                <span>Copy</span>
              </button>
            </div>
            <p className="contact-copy-status" role="status" aria-live="polite">
              {copyStatus}
            </p>

            <ul className="contact-channels" aria-label="Contact channels">
              {socialLinks.map((link) => {
                const Icon = channelIcons[link.platform]
                const external = link.href.startsWith('http')

                return (
                  <li key={link.platform}>
                    <a
                      href={link.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                    >
                      <Icon aria-hidden="true" />
                      <span>{link.platform}</span>
                      <FaArrowRight aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <form
            className="contact-form surface-panel"
            action={contact.formEndpoint ?? undefined}
            method="post"
            onSubmit={handleSubmit}
            noValidate
          >
            <header>
              <p className="technical-label">Project enquiry</p>
              <h3>{contact.form.title}</h3>
              <p>{contact.form.description}</p>
            </header>

            <div className="contact-form__field">
              <label htmlFor="contact-name">{contact.form.labels.name}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name ? <span id="contact-name-error">{errors.name}</span> : null}
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-email">{contact.form.labels.email}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email ? <span id="contact-email-error">{errors.email}</span> : null}
            </div>

            <div className="contact-form__field">
              <label htmlFor="contact-message">{contact.form.labels.message}</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                minLength={contact.form.minimumMessageLength}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message ? <span id="contact-message-error">{errors.message}</span> : null}
            </div>

            <div className="contact-form__footer">
              <Button type="submit">
                <FaEnvelope aria-hidden="true" />
                {contact.formEndpoint ? contact.form.submitLabel : contact.form.fallbackLabel}
              </Button>
              <p>{contact.formEndpoint ? contact.form.endpointNote : contact.form.fallbackNote}</p>
            </div>
            <p className="contact-form__status" role="status" aria-live="polite">
              {formStatus}
            </p>
          </form>
        </div>
      </PageContainer>
    </Section>
  )
}

export default Contact
