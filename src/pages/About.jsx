import { SectionHeading, ValueCard, PhotoPlaceholder, Button } from '../components/UI'
import { Eyebrow } from '../components/Motifs'
import { IconArrowRight } from '../components/Icons'
import {
  church,
  aboutParagraphs,
  welcomeParagraphs,
  mission,
  vision,
  coreValues,
  pastor,
} from '../data/content'

export default function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Eyebrow>About {church.shortName}</Eyebrow>
          <h1>A community for a new beginning</h1>
          <p className="lede">{aboutParagraphs[0]}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            {aboutParagraphs.slice(1).map((p) => (
              <p className="body-text" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
          <PhotoPlaceholder label="Our church family" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-panel">
          <div className="panel">
            <Eyebrow>Our Mission</Eyebrow>
            <p className="body-text large">{mission}</p>
          </div>
          <div className="panel">
            <Eyebrow>Our Vision</Eyebrow>
            {vision.map((p) => (
              <p className="body-text large" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="What We Hold To"
            title="Our Core Values"
            lede="Eleven convictions that shape our worship, our teaching and our life together."
          />
          <div className="grid-values grid-values-full">
            {coreValues.map((v) => (
              <ValueCard key={v.name} {...v} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container align-center">
          <Eyebrow>Welcome to {church.shortName}</Eyebrow>
          <h2>You are welcome. You are valued.</h2>
          {welcomeParagraphs.map((p) => (
            <p className="lede" key={p.slice(0, 24)}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section id="pastor" className="section">
        <div className="container split split-reverse">
          <PhotoPlaceholder label={pastor.name} ratio="1 / 1" tone="wine" />
          <div>
            <Eyebrow>Meet Our Lead Pastor</Eyebrow>
            <h2>{pastor.name}</h2>
            <p className="role-line">{pastor.title}</p>
            {pastor.bio.map((p) => (
              <p className="body-text" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container align-center">
          <h2>Ready to experience it for yourself?</h2>
          <Button to="/visit" variant="primary">
            Plan Your Visit <IconArrowRight width={18} height={18} />
          </Button>
        </div>
      </section>
    </>
  )
}
