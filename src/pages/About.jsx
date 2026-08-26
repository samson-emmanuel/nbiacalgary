import { SectionHeading, ValueCard, PhotoPlaceholder, PhotoImage, Button } from '../components/UI'
import { Eyebrow } from '../components/Motifs'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { IconArrowRight } from '../components/Icons'
import pastorPhoto from '../assets/images/pastor-james-onare.jpg'
import { bannerImages } from '../data/images'
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
      <PageHeader
        eyebrow={`About ${church.shortName}`}
        title="A community for a new beginning"
        lede={aboutParagraphs[0]}
        image={bannerImages.about}
      />

      <section className="section">
        <div className="container split">
          <Reveal as="div">
            {aboutParagraphs.slice(1).map((p) => (
              <p className="body-text" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </Reveal>
          <PhotoPlaceholder label="Our church family" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-panel">
          <Reveal as="div" className="panel">
            <Eyebrow>Our Mission</Eyebrow>
            <p className="body-text large">{mission}</p>
          </Reveal>
          <Reveal as="div" className="panel" delay={120}>
            <Eyebrow>Our Vision</Eyebrow>
            {vision.map((p) => (
              <p className="body-text large" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </Reveal>
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
            {coreValues.map((v, i) => (
              <ValueCard key={v.name} {...v} delay={(i % 3) * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container align-center">
          <Reveal>
            <Eyebrow>Welcome to {church.shortName}</Eyebrow>
            <h2>You are welcome. You are valued.</h2>
            {welcomeParagraphs.map((p) => (
              <p className="lede" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="pastor" className="section">
        <div className="container split split-reverse">
          <PhotoImage src={pastorPhoto} alt={pastor.name} ratio="1 / 1" />
          <Reveal as="div">
            <Eyebrow>Meet Our Lead Pastor</Eyebrow>
            <h2>{pastor.name}</h2>
            <p className="role-line">{pastor.title}</p>
            {pastor.bio.map((p) => (
              <p className="body-text" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container align-center">
          <Reveal>
            <h2>Ready to experience it for yourself?</h2>
            <Button to="/visit" variant="primary">
              Plan Your Visit <IconArrowRight width={18} height={18} />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
