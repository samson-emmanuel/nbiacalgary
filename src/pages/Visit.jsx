import { Eyebrow, SectionRule } from '../components/Motifs'
import { Button, PhotoPlaceholder } from '../components/UI'
import { Icon, IconClock, IconPin, IconArrowRight } from '../components/Icons'
import { church, sundayIncludes, visitParagraphs } from '../data/content'

export default function Visit() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Eyebrow>Join Us This Sunday</Eyebrow>
          <h1>Plan your visit</h1>
          <p className="lede">
            We would love to welcome you. Here's everything you need to know before you
            come.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-card">
            <div className="service-card-detail">
              <IconClock width={32} height={32} />
              <div>
                <h3>{church.serviceDay}</h3>
                <p>{church.serviceTime}</p>
              </div>
            </div>
            <SectionRule />
            <div className="service-card-detail">
              <IconPin width={32} height={32} />
              <div>
                <h3>{church.venue}</h3>
                <p>{church.city}</p>
              </div>
            </div>
          </div>

          <div className="service-includes">
            <h3>Our Sunday worship gathering includes</h3>
            <ul className="tag-list">
              {sundayIncludes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split">
          <div>
            <Eyebrow>Visiting for the First Time?</Eyebrow>
            <h2>We want your visit to feel like coming home.</h2>
            {visitParagraphs.map((p) => (
              <p className="body-text" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
            <Button to="/contact" variant="text">
              Have a question before you come? <IconArrowRight width={16} height={16} />
            </Button>
          </div>
          <PhotoPlaceholder label="A warm welcome awaits" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Eyebrow>Getting Here</Eyebrow>
          <h2>Find us at Beddington Theatre Arts Centre</h2>
          <div className="map-frame">
            <PhotoPlaceholder label={`${church.venue}, ${church.city}`} ratio="16 / 7" tone="ink" />
          </div>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container align-center">
          <span className="icon-tile" style={{ margin: '0 auto 1rem' }}>
            <Icon name="hands" />
          </span>
          <h2>We look forward to welcoming you.</h2>
          <Button to="/contact" variant="primary">
            Contact Us <IconArrowRight width={18} height={18} />
          </Button>
        </div>
      </section>
    </>
  )
}
