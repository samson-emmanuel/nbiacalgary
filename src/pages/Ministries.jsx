import { SectionRule } from '../components/Motifs'
import { SectionHeading } from '../components/UI'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { Icon } from '../components/Icons'
import { weeklyPrograms, ministries } from '../data/content'
import { bannerImages } from '../data/images'

export default function Ministries() {
  return (
    <>
      <PageHeader
        eyebrow="Ministries & Programs"
        title="Ways to gather, grow and serve"
        lede="From our weekly rhythms of prayer and teaching to the ministries that carry our mission forward, there's a place for you to belong."
        image={bannerImages.ministries}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Weekly Programs" title="Our rhythm through the week" />
          <div className="program-grid">
            {weeklyPrograms.map((p, i) => (
              <Reveal as="article" className="program-card" key={p.name} delay={(i % 4) * 70}>
                <span className="icon-tile">
                  <Icon name={p.icon} />
                </span>
                <span className="program-mode">{p.mode}</span>
                <h3>{p.name}</h3>
                <p className="program-when">{p.when}</p>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionRule />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="Our Ministries" title="Where our mission takes shape" />
          <div className="ministry-grid">
            {ministries.map((m, i) => (
              <Reveal as="article" className="ministry-card" key={m.name} delay={(i % 3) * 80}>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
