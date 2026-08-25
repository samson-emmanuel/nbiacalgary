import { Eyebrow } from '../components/Motifs'
import { Button } from '../components/UI'
import { IconArrowRight } from '../components/Icons'
import { beliefs } from '../data/content'

export default function Beliefs() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Eyebrow>Our Doctrine</Eyebrow>
          <h1>What We Believe</h1>
          <p className="lede">
            These are the biblical convictions that anchor our faith, our teaching and our
            life together as a church.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ol className="belief-list">
            {beliefs.map((b, i) => (
              <li className="belief-item" key={b.name}>
                <span className="belief-index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{b.name}</h3>
                  <p>{b.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container align-center">
          <Eyebrow>Questions About Faith?</Eyebrow>
          <h2>We'd love to talk it through with you.</h2>
          <Button to="/contact" variant="primary">
            Get in Touch <IconArrowRight width={18} height={18} />
          </Button>
        </div>
      </section>
    </>
  )
}
