import { Eyebrow } from '../components/Motifs'
import { IconPlay } from '../components/Icons'
import { watchCategories } from '../data/content'

export default function Watch() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Eyebrow>Media</Eyebrow>
          <h1>Watch &amp; Grow</h1>
          <p className="lede">
            Messages, teaching series and prayer broadcasts from New Beginning
            International Assembly Calgary — for wherever you are on your journey.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="watch-grid">
            {watchCategories.map((c) => (
              <div className="watch-card watch-card-static" key={c.name}>
                <span className="watch-card-play">
                  <IconPlay width={22} height={22} />
                </span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <span className="watch-card-note">Videos coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container align-center">
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
        </div>
      </section>
    </>
  )
}
