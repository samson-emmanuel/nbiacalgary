import { useState } from 'react'
import { Eyebrow } from '../components/Motifs'
import { Button, PhotoPlaceholder } from '../components/UI'
import { Icon, IconAt, IconPhone, IconPin, IconClock } from '../components/Icons'
import { Field, TextInput, TextArea } from '../components/Form'
import { church } from '../data/content'
import { buildMailto } from '../utils/mailto'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const href = buildMailto(
      church.email,
      'Website Enquiry',
      [`Name: ${name || '—'}`, `Email: ${email || '—'}`, '', message],
    )
    window.location.href = href
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <Eyebrow>Contact Us</Eyebrow>
          <h1>We would love to hear from you</h1>
          <p className="lede">
            Whether you are planning your first visit, searching for a church family,
            requesting prayer or simply looking for more information, we would love to
            connect with you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <ul className="contact-detail-list">
            <li>
              <Icon name="anchor" />
              <div>
                <h4>{church.name}</h4>
                <p>{church.city}</p>
              </div>
            </li>
            <li>
              <IconClock />
              <div>
                <h4>Sunday Worship</h4>
                <p>{church.serviceDay}, {church.serviceTime}</p>
              </div>
            </li>
            <li>
              <IconPin />
              <div>
                <h4>Venue</h4>
                <p>{church.venue}, {church.city}</p>
              </div>
            </li>
            <li>
              <IconPhone />
              <div>
                <h4>Phone</h4>
                <p><a href={`tel:${church.phoneHref}`}>{church.phone}</a></p>
              </div>
            </li>
            <li>
              <IconAt />
              <div>
                <h4>Email</h4>
                <p><a href={`mailto:${church.email}`}>{church.email}</a></p>
              </div>
            </li>
          </ul>

          <form className="ministry-form" onSubmit={submit}>
            <Field label="Name">
              <TextInput required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
            </Field>
            <Field label="Email">
              <TextInput required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </Field>
            <Field label="Message">
              <TextArea required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" />
            </Field>
            <p className="form-note">
              Submitting opens your email app with this message addressed to our
              ministry team.
            </p>
            <div className="form-actions">
              <Button type="submit" variant="primary">Send Message</Button>
            </div>
          </form>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <PhotoPlaceholder label={`${church.venue} — find us here`} ratio="16 / 6" tone="ink" />
        </div>
      </section>
    </>
  )
}
