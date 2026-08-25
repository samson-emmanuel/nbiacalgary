import { useState } from 'react'
import { Eyebrow, SectionRule } from '../components/Motifs'
import { SectionHeading, Button } from '../components/UI'
import { Icon } from '../components/Icons'
import { Field, TextInput, TextArea, RadioRow, CheckboxRow } from '../components/Form'
import { church, testimonyCategories } from '../data/content'
import { buildMailto } from '../utils/mailto'

function PrayerForm() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [request, setRequest] = useState('')
  const [followUp, setFollowUp] = useState('')
  const [anonymous, setAnonymous] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const href = buildMailto(
      church.email,
      'Prayer Request',
      [
        `Name: ${anonymous ? 'Anonymous' : name || '—'}`,
        `Email / Phone: ${anonymous ? 'Withheld' : contact || '—'}`,
        `May we contact you? ${followUp || '—'}`,
        '',
        'Prayer Request:',
        request,
      ],
    )
    window.location.href = href
  }

  return (
    <form className="ministry-form" onSubmit={submit}>
      {!anonymous && (
        <>
          <Field label="Name">
            <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </Field>
          <Field label="Email or Telephone Number">
            <TextInput value={contact} onChange={(e) => setContact(e.target.value)} placeholder="How can we reach you?" />
          </Field>
        </>
      )}
      <Field label="Prayer Request">
        <TextArea
          required
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Share what's on your heart — you don't have to face it alone."
        />
      </Field>
      <RadioRow
        name="followup"
        label="Would you like someone from the church to contact you?"
        options={['Yes', 'No']}
        value={followUp}
        onChange={setFollowUp}
      />
      <CheckboxRow
        checked={anonymous}
        onChange={setAnonymous}
        label="Submit this prayer request anonymously"
      />
      <p className="form-note">
        Prayer requests are only seen by authorized ministry personnel. Submitting opens
        your email app with this request addressed to our ministry team.
      </p>
      <div className="form-actions">
        <Button type="submit" variant="primary">Submit Prayer Request</Button>
      </div>
    </form>
  )
}

function TestimonyForm() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState(testimonyCategories[0])
  const [story, setStory] = useState('')
  const [consent, setConsent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const href = buildMailto(
      church.email,
      `Testimony — ${category}`,
      [
        `Name: ${name || '—'}`,
        `Category: ${category}`,
        `Consent to publish: ${consent ? 'Yes' : 'No'}`,
        '',
        'Testimony:',
        story,
      ],
    )
    window.location.href = href
  }

  return (
    <form className="ministry-form" onSubmit={submit}>
      <Field label="Name">
        <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      </Field>
      <Field label="Category">
        <select className="field-input" value={category} onChange={(e) => setCategory(e.target.value)}>
          {testimonyCategories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </Field>
      <Field label="Your Testimony">
        <TextArea
          required
          value={story}
          onChange={(e) => setStory(e.target.value)}
          placeholder="Tell us what God has done."
        />
      </Field>
      <CheckboxRow
        checked={consent}
        onChange={setConsent}
        label="I consent to my testimony being reviewed and shared publicly"
      />
      <p className="form-note">
        No testimony is posted without your consent. Submitting opens your email app with
        your testimony addressed to our ministry team for review.
      </p>
      <div className="form-actions">
        <Button type="submit" variant="primary">Share Your Testimony</Button>
      </div>
    </form>
  )
}

export default function Prayer() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Eyebrow>Prayer & Testimonies</Eyebrow>
          <h1>How can we pray for you?</h1>
          <p className="lede">
            We believe in the power of prayer and would be honoured to pray with you.
            Whatever situation you may be facing, you do not have to face it alone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <PrayerForm />
          <aside className="side-note">
            <span className="icon-tile">
              <Icon name="flame" />
            </span>
            <h3>Prayer is central here</h3>
            <p>
              Prayer is at the heart of {church.shortName}. Whether personal, corporate
              or intercessory, our team stands ready to bring your requests before God
              with you.
            </p>
          </aside>
        </div>
      </section>

      <SectionRule label="Testimonies" />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="What God Has Done"
            title="Testimonies remind us of His faithfulness"
            lede="We believe testimonies encourage faith. Written and video testimonies from our church family will be featured here soon."
          />
          <ul className="tag-list tag-list-center">
            {testimonyCategories.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split split-reverse">
          <TestimonyForm />
          <aside className="side-note">
            <span className="icon-tile">
              <Icon name="seal" />
            </span>
            <h3>Your story matters</h3>
            <p>
              Every testimony is reviewed before publication, and nothing is posted
              publicly without your consent.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
