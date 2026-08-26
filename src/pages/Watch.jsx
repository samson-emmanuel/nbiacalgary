import { Eyebrow } from '../components/Motifs'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { IconPlay } from '../components/Icons'
import { watchCategories } from '../data/content'
import { bannerImages } from '../data/images'

export default function Watch() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Watch & Grow"
        lede="Messages, teaching series and prayer broadcasts from New Beginning International Assembly Calgary — for wherever you are on your journey."
        image={bannerImages.watch}
      />

      <section className="section">
        <div className="container">
          <div className="watch-grid">
            {watchCategories.map((c, i) => (
              <Reveal
                as="div"
                className="watch-card watch-card-static"
                key={c.name}
                delay={(i % 4) * 70}
              >
                <span className="watch-card-play">
                  <IconPlay width={22} height={22} />
                </span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <span className="watch-card-note">Videos coming soon</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container align-center">
          <Reveal>
            <Eyebrow>Follow Along</Eyebrow>
            <h2>Catch every message on Facebook and YouTube</h2>
            <p className="lede">
              Our full library of messages and broadcasts will be linked here once our
              official channels are connected.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a className="btn btn-outline" href="#">Facebook</a>
              <a className="btn btn-outline" href="#">YouTube</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
