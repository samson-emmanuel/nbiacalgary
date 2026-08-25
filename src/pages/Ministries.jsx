import { Eyebrow, SectionRule } from '../components/Motifs'
import { SectionHeading } from '../components/UI'
import { Icon } from '../components/Icons'
import { weeklyPrograms, ministries } from '../data/content'

export default function Ministries() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Eyebrow>Ministries & Programs</Eyebrow>
          <h1>Ways to gather, grow and serve</h1>
          <p className="lede">
            From our weekly rhythms of prayer and teaching to the ministries that carry
            our mission forward, there's a place for you to belong.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Weekly Programs" title="Our rhythm through the week" />
          <div className="program-grid">
            {weeklyPrograms.map((p) => (
              <article className="program-card" key={p.name}>
                <span className="icon-tile">
                  <Icon name={p.icon} />
                </span>
                <span className="program-mode">{p.mode}</span>
                <h3>{p.name}</h3>
                <p className="program-when">{p.when}</p>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionRule />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Our Ministries" title="Where our mission takes shape" />
          <div className="ministry-grid">
            {ministries.map((m) => (
              <article className="ministry-card" key={m.name}>
                <span className="icon-tile">
                  <Icon name={m.icon} />
                </span>
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
                {m.activities && (
                  <ul className="tag-list">
                    {m.activities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
