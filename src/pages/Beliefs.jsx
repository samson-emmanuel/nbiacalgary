import { Eyebrow } from '../components/Motifs'
import { Button } from '../components/UI'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { IconArrowRight } from '../components/Icons'
import { beliefs } from '../data/content'
import { bannerImages } from '../data/images'

export default function Beliefs() {
  return (
    <>
      <PageHeader
        eyebrow="Our Doctrine"
        title="What We Believe"
        lede="These are the biblical convictions that anchor our faith, our teaching and our life together as a church."
        image={bannerImages.beliefs}
        imagePosition="center 88%"
      />

      <section className="section">
        <div className="container">
          <ol className="belief-list">
            {beliefs.map((b, i) => (
              <Reveal as="li" className="belief-item" key={b.name} delay={(i % 4) * 60}>
                <span className="belief-index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{b.name}</h3>
                  <p>{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container align-center">
          <Reveal>
            <Eyebrow>Questions About Faith?</Eyebrow>
            <h2>We'd love to talk it through with you.</h2>
            <Button to="/contact" variant="primary">
              Get in Touch <IconArrowRight width={18} height={18} />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
